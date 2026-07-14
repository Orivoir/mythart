"use client";

import { signOut, useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <section className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-zinc-900">Dashboard</h1>
        <p className="mt-2 text-sm text-zinc-600">You are signed in.</p>

        <div className="mt-6 rounded-lg bg-zinc-100 p-4 text-sm text-zinc-700">
          {session?.user?.email ? (
            <span>
              Connected as <strong>{session.user.email}</strong>
            </span>
          ) : (
            <span>Loading session...</span>
          )}
        </div>

        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/auth/login" })}
          className="mt-6 w-full rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
        >
          Sign out
        </button>
      </section>
    </main>
  );
}
