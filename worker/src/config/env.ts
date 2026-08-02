import { config as loadDotenv } from "dotenv"
import { resolve } from "node:path"
import { z } from "zod"

const workerEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
  REDIS_URL: z.string().min(1, "REDIS_URL is required"),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace", "silent"]).default("info"),
  WORKER_CONCURRENCY: z.coerce.number().int().positive().default(5),
})

export type WorkerEnv = z.infer<typeof workerEnvSchema>

let cachedEnv: WorkerEnv | null = null

function getRepoRoot(): string {
  return resolve(__dirname, "../../..")
}

export function loadEnv(): WorkerEnv {

  // in production env variables should be set by the hosting provider
  if(process.env.NODE_ENV === "production" ) {
    return process.env as unknown as WorkerEnv
  }

  if (cachedEnv) {
    return cachedEnv
  }

  const repoRoot = getRepoRoot()

  loadDotenv({ path: resolve(repoRoot, ".env.local") })
  loadDotenv({ path: resolve(repoRoot, ".env") })

  cachedEnv = workerEnvSchema.parse(process.env)

  return cachedEnv
}