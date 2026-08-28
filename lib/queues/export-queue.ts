import { Queue } from "bullmq"
import IORedis, { type Redis } from "ioredis"

import { HTTP_ERRORS } from "@/lib/constants/http-code"
import { ApiException } from "@/lib/errors"
import type { ExportJobData } from "@/lib/schemas/export-job.schema"

export const EXPORT_QUEUE_NAME = "export"
export const EXPORT_JOB_NAME = "export.process"

let redisConnection: Redis | null = null
let exportQueue: Queue<ExportJobData> | null = null

function getRedisConnection(): Redis {
  const redisUrl = process.env.REDIS_URL

  if (!redisUrl) {
    throw new ApiException(HTTP_ERRORS.INTERNAL_ERROR)
  }

  if (!redisConnection || redisConnection.status === "end") {
    redisConnection = new IORedis(redisUrl, {
      maxRetriesPerRequest: null,
      lazyConnect: true,
    })
  }

  return redisConnection
}

export async function getExportQueue(): Promise<Queue<ExportJobData>> {
  if (exportQueue) {
    return exportQueue
  }

  const connection = getRedisConnection()

  if (connection.status === "wait") {
    await connection.connect()
  }

  exportQueue = new Queue<ExportJobData>(EXPORT_QUEUE_NAME, {
    connection,
  })

  return exportQueue
}

export async function enqueueExportJob(data: ExportJobData): Promise<string> {
  const queue = await getExportQueue()
  const job = await queue.add(EXPORT_JOB_NAME, data)

  if (!job.id) {
    throw new ApiException(HTTP_ERRORS.INTERNAL_ERROR)
  }

  return String(job.id)
}
