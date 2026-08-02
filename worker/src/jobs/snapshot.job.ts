import { z } from "zod"

export const SNAPSHOT_JOB_NAME = "snapshot.process"

export const snapshotJobDataSchema = z.object({
  ebookId: z.string().min(1, "ebookId is required")
})

export type SnapshotJobData = z.infer<typeof snapshotJobDataSchema>