import { S3Client } from "@aws-sdk/client-s3"
import {loadEnv} from "./env"

loadEnv()

export const s3 = new S3Client({
  endpoint: process.env.S3_ENDPOINT,
  region: process.env.S3_REGION!,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY!,
    secretAccessKey: process.env.S3_SECRET_KEY!,
  },
  // Custom endpoints (for example MinIO on localhost) need path-style URLs
  // in all environments, including tests.
  // forcePathStyle: Boolean(process.env.S3_ENDPOINT) || process.env.NODE_ENV === "development",
  forcePathStyle: true
})