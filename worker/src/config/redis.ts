import IORedis, { type Redis } from "ioredis"

import type { WorkerEnv } from "./env"

let redis: Redis | null = null

function createRedisConnection(env: WorkerEnv): Redis {
  return new IORedis(env.REDIS_URL, {
    maxRetriesPerRequest: null,
    lazyConnect: true,
  })
}

export function getRedis(env: WorkerEnv): Redis {
  if (!redis || redis.status === "end") {
    redis = createRedisConnection(env)
  }

  return redis
}

export async function connectRedis(env: WorkerEnv): Promise<Redis> {
  const connection = getRedis(env)

  if (connection.status === "wait") {
    await connection.connect()
  }

  return connection
}

export async function closeRedisConnection(): Promise<void> {
  if (!redis) {
    return
  }

  if (redis.status === "ready" || redis.status === "connect") {
    await redis.quit()
  } else {
    redis.disconnect()
  }

  redis = null
}