import { type Job, Worker } from "bullmq"

import { SNAPSHOT_JOB_NAME, snapshotJobDataSchema } from "../jobs"
import { SNAPSHOT_QUEUE_NAME } from "../queues"
import type { RegisteredWorker, WorkerDependencies } from "../types"

type SnapshotJob = Job<Record<string, unknown>, void, string>

export function createSnapshotWorker({ connection, env, logger }: WorkerDependencies): RegisteredWorker {
  const worker = new Worker(
    SNAPSHOT_QUEUE_NAME,
    async (job: SnapshotJob) => {
      snapshotJobDataSchema.parse(job.data)

      logger.warn(
        {
          jobId: job.id,
          jobName: job.name,
          queue: SNAPSHOT_QUEUE_NAME,
        },
        "Snapshot job processing is not implemented yet",
      )

      if (job.name === SNAPSHOT_JOB_NAME) {
        throw new Error("Snapshot job processing is not implemented yet")
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