export function GET() {
  return fetch(process.env.BACKEND_URL + "/decrypt");
}
