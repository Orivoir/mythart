# Worker

This package contains the asynchronous job worker for Mythrart. It runs outside
of the Next.js HTTP application while sharing the same database and environment
configuration from the repository root.

## Stack

- BullMQ for job processing
- Redis via `ioredis`
- Prisma using the shared repository schema with its own generated worker client
- Pino for structured logs
- Zod for environment validation

## Environment

The worker loads environment variables from the repository root in the same order
as the rest of the project:

1. `.env.local`
2. `.env`

Required variables:

- `DATABASE_URL`
- `REDIS_URL`

Optional variables:

- `NODE_ENV`
- `LOG_LEVEL`
- `WORKER_CONCURRENCY`

## Development

Install dependencies from the worker directory:

```bash
cd worker
npm install
```

Run the worker in watch mode:

```bash
npm run dev
```

Build and run the compiled worker:

```bash
npm run build
npm run start
```

## Notes

- The worker and Next app both generate their own Prisma clients from the same
  shared schema source in `prisma/schema`.
- Business jobs are intentionally not implemented yet. The snapshot worker is a
  placeholder infrastructure registration.