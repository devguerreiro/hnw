import { revalidateTag } from "next/cache";

export async function DELETE() {
  await fetch(process.env.BACKEND_URL + "/decrypted", { method: "DELETE" });

  revalidateTag("decrypted", "max");

  return new Response(null, { status: 204 });
}
