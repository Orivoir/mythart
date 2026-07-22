import { POST as createPresignedUploadUrl } from "@/app/api/uploads/presigned-url/routes";
import { PUT as attachCoverImageReference } from "@/app/api/uploads/reference/cover-image/routes";

export async function POST(
  request: Request,
  _context: { params: { id: string } },
) {
  return createPresignedUploadUrl(request);
}

export async function PUT(
  request: Request,
  context: { params: { id: string } },
) {
  return attachCoverImageReference(request, context);
}