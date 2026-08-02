import { PrismaClient } from "./../../generated/prisma/index"
import { PrismaPg } from "@prisma/adapter-pg"
import { loadEnv } from "./env"

const env = loadEnv()

const connectionString = env.DATABASE_URL

if (!connectionString) {
  throw new Error("DATABASE_URL is required to initialize Prisma client")
}

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
}

const adapter = new PrismaPg({ connectionString })

function createPrismaClient(): PrismaClient {
  return new PrismaClient({
    adapter,
  })
}

function hasAuthModels(client: PrismaClient): boolean {
  const candidate = client as unknown as {
    user?: unknown;
    account?: unknown;
    verificationToken?: unknown;
  }

  return Boolean(candidate.user && candidate.account && candidate.verificationToken)
}

const cachedPrisma = globalForPrisma.prisma

export const prisma =
  cachedPrisma && hasAuthModels(cachedPrisma)
    ? cachedPrisma
    : createPrismaClient()

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}

export function getPrisma() {
  return prisma
}

export async function connectPrisma()  {
  const client = getPrisma()

  await client.$connect()

  return client
}

export async function closePrisma(): Promise<void> {
  if (!prisma) {
    return
  }

  await prisma.$disconnect()
}