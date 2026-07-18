import { resolve } from "node:path"
import { config } from "dotenv"
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "../../app/generated/prisma/index.js"

config({ path: resolve(process.cwd(), ".env.local") })
config({ path: resolve(process.cwd(), ".env") })

const connectionString = process.env.DATABASE_URL ?? process.env.TEST_DATABASE_URL

if (!connectionString) {
  throw new Error("DATABASE_URL or TEST_DATABASE_URL is required for integration tests")
}

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

export default prisma
