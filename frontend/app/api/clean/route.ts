export function DELETE() {
  return fetch(process.env.BACKEND_URL + "/decrypted", { method: "DELETE" });
}
