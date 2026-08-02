import type { RegisteredWorker, WorkerDependencies } from "../types"

import { createSnapshotWorker } from "./snapshot.worker"

export function registerWorkers(dependencies: WorkerDependencies): RegisteredWorker[] {
  return [
    createSnapshotWorker(dependencies),
  ]
}