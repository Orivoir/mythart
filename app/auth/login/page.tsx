"use client"

import type { SyntheticEvent } from "react"
import { signIn, useSession } from "next-auth/react"
import { useState } from "react"

export default function LoginPage() {
  const { data: session } = useSession()
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    await signIn("email", {
      email,
      callbackUrl: "/dashboard",
    })

    setLoading(false)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-zinc-900">Test auth</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Enter your email to receive a magic link.
        </p>

        {session?.user ? (
          <div className="mt-6 rounded-lg bg-zinc-100 p-4 text-sm text-zinc-700">
            Signed in as <strong>{session.user.email}</strong>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block text-sm font-medium text-zinc-700">
              Email
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none ring-0 focus:border-zinc-900"
                placeholder="you@example.com"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send magic link"}
            </button>
          </form>
        )}
      </div>
    </main>
  )
}
