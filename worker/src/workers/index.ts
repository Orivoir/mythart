import type { RegisteredWorker, WorkerDependencies } from "../types"

import { createExportWorker } from "./export.worker"
import { createSnapshotWorker } from "./snapshot.worker"

export function registerWorkers(dependencies: WorkerDependencies): RegisteredWorker[] {
  return [
    createSnapshotWorker(dependencies),
    createExportWorker(dependencies),
  ]
}