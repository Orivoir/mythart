import { NextRequest } from "next/server"

import { CollaborationRole } from "@/app/generated/prisma/client"
import prisma from "../../helpers/prisma"
import { createUserFixture } from "../../helpers/factories"
import resetDb from "../../helpers/reset-db"

export type SnapshotFixture = {
    ownerId: string
    authorCollaboratorId: string
    proofreaderCollaboratorId: string
    outsiderId: string
    ebookId: string
}

export async function setupSnapshotFixture(): Promise<SnapshotFixture> {
    await resetDb()

    const owner = await createUserFixture()
    const authorCollaborator = await createUserFixture()
    const proofreaderCollaborator = await createUserFixture()
    const outsider = await createUserFixture()

    const ebook = await prisma.ebook.create({
        data: {
            ownerId: owner.id,
            title: "Snapshot fixture ebook",
        },
    })

    await prisma.ebookCollaborator.create({
        data: {
            ebookId: ebook.id,
            userId: authorCollaborator.id,
            role: CollaborationRole.AUTHOR,
            allChaptersAccess: true,
        },
    })

    await prisma.ebookCollaborator.create({
        data: {
            ebookId: ebook.id,
            userId: proofreaderCollaborator.id,
            role: CollaborationRole.PROOFREADER,
            allChaptersAccess: true,
        },
    })

    return {
        ownerId: owner.id,
        authorCollaboratorId: authorCollaborator.id,
        proofreaderCollaboratorId: proofreaderCollaborator.id,
        outsiderId: outsider.id,
        ebookId: ebook.id,
    }
}

export async function teardownSnapshotFixture(): Promise<void> {
    await resetDb()
}

export function createSnapshotRequest(options: {
    userId?: string
    body?: unknown
    rawBody?: string
}): NextRequest {
    const hasStructuredBody = options.body !== undefined
    const hasRawBody = options.rawBody !== undefined

    return new NextRequest("http://localhost:3000/api/snapshot", {
        method: "POST",
        headers: {
            ...((hasStructuredBody || hasRawBody) ? { "content-type": "application/json" } : {}),
            ...(options.userId ? { "x-auth-user-id": options.userId } : {}),
        },
        ...(
            hasStructuredBody
                ? { body: JSON.stringify(options.body) }
                : hasRawBody
                    ? { body: options.rawBody }
                    : {}
        ),
    })
}

export function createJobRequest(jobId: string, userId?: string): NextRequest {
    return new NextRequest(`http://localhost:3000/api/job/${jobId}`, {
        method: "GET",
        headers: {
            ...(userId ? { "x-auth-user-id": userId } : {}),
        },
    })
}

export function jobRouteContext(jobId: string) {
    return { params: { id: jobId } }
}
