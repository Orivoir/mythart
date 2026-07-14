import { PrismaClient } from "@/app/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const adapter = connectionString ? new PrismaPg({ connectionString }) : undefined;

function createPrismaClient(): PrismaClient {
  return new PrismaClient({
    adapter,
  });
}

function hasAuthModels(client: PrismaClient): boolean {
  const candidate = client as unknown as {
    user?: unknown;
    account?: unknown;
    verificationToken?: unknown;
  };

  return Boolean(candidate.user && candidate.account && candidate.verificationToken);
}

const cachedPrisma = globalForPrisma.prisma;

export const prisma =
  cachedPrisma && hasAuthModels(cachedPrisma)
    ? cachedPrisma
    : createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}