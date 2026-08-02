import { type Job, Worker } from "bullmq"

import { SNAPSHOT_JOB_NAME, type SnapshotJobData, type SnapshotJobResult, snapshotJobDataSchema } from "../jobs"
import { SNAPSHOT_QUEUE_NAME } from "../queues"
import type { RegisteredWorker, WorkerDependencies } from "../types"
import {generate} from "./../services"

type SnapshotJob = Job<
  SnapshotJobData,
  SnapshotJobResult,
  string
>

export function createSnapshotWorker({ connection, env, logger }: WorkerDependencies): RegisteredWorker {
  const worker = new Worker(
    SNAPSHOT_QUEUE_NAME,
    async function (job: SnapshotJob): Promise<SnapshotJobResult> {
      switch (job.name) {
        case SNAPSHOT_JOB_NAME:
          return await generate(
            snapshotJobDataSchema.parse(job.data)
          )
        default:
          throw new Error(`Unknown job name: ${job.name}`)
      }
    },
    {
      connection,
      concurrency: env.WORKER_CONCURRENCY,
    },
  )

  worker.on("completed", (job: SnapshotJob) => {
    logger.info(
      {
        jobId: job.id,
        jobName: job.name,
        snapshotId: job.returnvalue?.snapshot.id,
        snapshotVersion: job.returnvalue?.snapshot.version,
        queue: SNAPSHOT_QUEUE_NAME,
      },
      "Snapshot job completed",
    )
  })

  worker.on("failed", (job: SnapshotJob | undefined, error: Error) => {
    logger.error(
      {
        err: error,
        jobId: job?.id,
        jobName: job?.name,
        queue: SNAPSHOT_QUEUE_NAME,
      },
      "Snapshot job failed",
    )
  })

  return {
    name: SNAPSHOT_QUEUE_NAME,
    worker,
  }
}