import type { AuthOptions } from "next-auth";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { prisma } from "@/lib/prisma";

// create a fake stripe customer id for the user, since we don't have stripe integration yet
function createStripeCustomerId(): string {
  return `cus_${Math.random().toString(36).slice(2, 12)}`;
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT ?? 587),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],

  session: {
    strategy: "jwt" as const,
  },

  callbacks: {
    async signIn({ user, profile, email }) {
      if (!user.email) {
        return false;
      }

      if (email?.verificationRequest) {
        return true;
      }

      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
        select: {
          id: true,
          stripeCustomerId: true,
          emailVerified: true,
        },
      });

      if (existingUser) {
        const shouldUpdate = !existingUser.emailVerified || !existingUser.stripeCustomerId;

        if (shouldUpdate) {
          await prisma.user.update({
            where: { id: existingUser.id },
            data: {
              ...(existingUser.emailVerified ? {} : { emailVerified: new Date() }),
              ...(existingUser.stripeCustomerId ? {} : { stripeCustomerId: createStripeCustomerId() }),
            },
          });
        }

        return true;
      }

      await prisma.user.create({
        data: {
          email: user.email,
          name: user.name ?? profile?.name ?? null,
          emailVerified: new Date(),
          stripeCustomerId: createStripeCustomerId(),
        },
      });

      return true;
    },
  },

  pages: {
    signIn: "/auth/login",
    verifyRequest: "/auth/verify-request",
  },

  secret: process.env.AUTH_SECRET,
};

const handler = NextAuth(authOptions);

export default handler;