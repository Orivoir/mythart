import { z } from "zod"

export const SNAPSHOT_JOB_NAME = "snapshot.process"

export const snapshotJobDataSchema = z.object({}).loose()

export type SnapshotJobData = z.infer<typeof snapshotJobDataSchema>