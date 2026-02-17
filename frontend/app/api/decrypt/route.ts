import { decrypt } from "@/services/decrypt";

export async function GET() {
  return Response.json(await decrypt());
}
