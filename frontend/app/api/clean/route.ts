export async function DELETE() {
  await fetch(process.env.BACKEND_URL + "/decrypted", { method: "DELETE" });

  return new Response(null, { status: 204 });
}
