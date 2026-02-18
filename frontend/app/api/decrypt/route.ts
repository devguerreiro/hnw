export async function GET() {
  const response = await fetch(process.env.BACKEND_URL + "/decrypt");

  return Response.json(await response.json());
}
