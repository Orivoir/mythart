# Upload strategy

Files are uploaded directly from the client to S3. The API coordinates validation,
move, and reference creation, but does not stream file bytes.

## Routes layout

Upload routes are organized under `/api/uploads`:

- `POST /api/uploads/presigned-url`
- `POST /api/uploads/complete`
- `PUT /api/uploads/reference/cover-image/:id`

Legacy endpoints may delegate to these handlers during migration.

## Step 1: request a presigned URL

`POST /api/uploads/presigned-url`

Request body:

```json
{
  "fileName": "<string>",
  "mimeType": "<string>",
  "context": "<AssetReferenceType>",
  "size": "<number in bytes>"
}
```

The endpoint validates auth and business rules (quota/plan checks are TODO), then
generates a presigned URL.

## Step 2: upload to S3

The client uploads bytes directly to `presignedUrl`:

```ts
const uploadResponse = await fetch(body.presignedUrl, {
  method: "PUT",
  headers: {
    "content-type": "image/png",
  },
  body: uploadPayload,
});
```

Objects are uploaded to temporary keys using `S3_TEMP_UPLOAD_PREFIX`.

## Step 3: complete upload

`POST /api/uploads/complete`

This endpoint verifies object metadata (`key`, `mimeType`, `size`) and moves the
object from temporary path to permanent path.

## Step 4: create resource reference

For cover images:

- `PUT /api/uploads/reference/cover-image/:id`

This endpoint verifies the permanent object and creates the SQL reference (asset +
link to ebook).

## Security notes

Bucket policy should enforce global constraints (max object size, allowed MIME
families). App endpoints enforce user-specific rules (plan/quota/ownership).

No bucket configuration changes are required in this refactor.
