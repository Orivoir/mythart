import prisma from "./prisma"

export async function createUserFixture() {
  const idSuffix = Date.now()

  return prisma.user.create({
    data: {
      email: `fixture-${idSuffix}@example.com`,
      name: "Fixture User",
      emailVerified: new Date(),
      stripeCustomerId: `cus_fixture_${idSuffix}`,
    },
  })
}
