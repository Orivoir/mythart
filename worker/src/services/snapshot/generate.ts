import type {SnapshotJobData} from "../../jobs/snapshot.job"
import { prisma } from "./../../config/prisma"
import { s3 } from "./../../config/s3"
import { PutObjectCommand } from "@aws-sdk/client-s3"

export type RequirementGenerateSnapshot = typeof loadSnapshotData extends (...args: any) => Promise<infer R> ? R : never

export async function loadSnapshotData(ebookId: string) {
  const requirements = await prisma.ebook.findUnique({
    where: {id: ebookId},
    include: {
      chapters: {
        orderBy: {position: "asc"},
      },
      currentSnapshot: true,
      coverAsset: true
    }
  })

  if(!requirements) {
    throw new Error(`Ebook with id ${ebookId} not found`)
  }

  return requirements
}

export async function generate({ebookId}: SnapshotJobData): Promise<void> {
  /**
   * Should create un snapshot-v{version}.json at s3 Bucket
   * and upgrade database models:
   * 
   * 1 - Database (read): Get the ebook with all required metadata
   * 2 - Database (read): Get all chapters of the ebook from the database
   * 3 - Database (read): Get the latest snapshot version of this ebook from the database
   * 4 - local: Build json snapshot with the content and metadata
   * 5 - S3 (write): add the snapshot to s3 bucket with the name snapshot-v{version}.json
   * 6 - Database (write): Add SnapshotFile record to the database with the s3 path
   * 7 - Database (write): Add Snapshot record to the database with the version, ebook, SnapshotFileId and version
   * 8 - Database (write): Update the ebook record (currentSnapshot property)
   * 
   * During transaction database failures should delete
   * file snapshot-v{version}.json from s3 bucket. 
   */

  const ebook = await loadSnapshotData(ebookId)

  const nextVersion = (ebook.currentSnapshot?.version ?? 0) + 1

  // Currently content of chapters is stored in the database, (chapter.content)
  // But later if chapter.content is greather than X MB
  // it will be stored in S3 and chapter.content will be null

  const snapshotJson = {
    // the format version should be NEVER upgraded
    // this data is used for backward compatibility 
    formatVersion: 1,
    
    metadata: getSnapshotMetadata(nextVersion),

    ebook: getSnapshotEbookData(ebook),

    chapters: ebook.chapters.map(getChapterData)
  }

  const snapshotJsonString = JSON.stringify(snapshotJson)

  const snapshotFileName = `snapshot-v${nextVersion}.json`

  const key = `users/${ebook.ownerId}/snapshots/${snapshotFileName}`
  
  const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key,
    ContentType: "application/json",
    Body: snapshotJsonString
  })

  const {$metadata} = await s3.send(command)

  if($metadata.httpStatusCode !== 200 && $metadata.httpStatusCode !== 201) {
    throw new Error(`Failed to upload snapshot to S3. HTTP status code: ${$metadata.httpStatusCode}`)
  }

  await prisma.$transaction(async (tx) => {

    const snapshot = await tx.snapshot.create({
      data: {
        version: nextVersion,
        ebookId: ebook.id,
        status: "READY",
        file: {
          create: {
            key,
            bucket: process.env.S3_BUCKET!,
            sizeBytes: Buffer.byteLength(snapshotJsonString, "utf-8"),
            mimeType: "application/json" 
          }
        }
      }
    })

    await tx.ebook.update({
      where: {id: ebook.id},
      data: {
        currentSnapshot: {
          connect: {
            id: snapshot.id
          }
        }
      }
    })

    return snapshot
  })

  // later should be handler case of:
  // 1 . uploading to S3 success
  // 2 . database transaction failed
  // Should delete the uploaded file from S3 from try/catch
  // block and throw error to retry the job
}

function getChapterData(chapter: RequirementGenerateSnapshot["chapters"][number]) {
  return {
    id: chapter.id,
    title: chapter.title,
    content: chapter.content,
    position: chapter.position,
    createdAt: chapter.createdAt
  }
}

function getSnapshotEbookData(ebook: RequirementGenerateSnapshot) {

  const {id, title, subtitle, shortDescription, createdAt} = ebook

  return {
    id,
    title,
    subtitle,
    shortDescription,
    createdAt,
    coverImage: ebook.coverAsset ? {
      assetId: ebook.coverAsset.id,
      key: ebook.coverAsset.key,
      bucket: ebook.coverAsset.bucket,
    }  : null
  }
}

function getSnapshotMetadata(version: number) {
  return {
    generatedAt: new Date().getTime(),
    version
  }
}