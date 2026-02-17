export function DELETE() {
  return fetch("http://localhost:3000/decrypted", { method: "DELETE" });
}
