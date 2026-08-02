import type { Worker as BullmqWorker } from "bullmq"
import type { Redis } from "ioredis"
import type { Logger } from "pino"

import type { WorkerEnv } from "../config/env"

export interface WorkerDependencies {
  connection: Redis
  env: WorkerEnv
  logger: Logger
}

export interface RegisteredWorker {
  name: string
  worker: BullmqWorker
}