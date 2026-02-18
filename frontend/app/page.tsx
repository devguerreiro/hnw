import { Table } from "./components/table";

export default async function Home() {
  const response = await fetch(process.env.BACKEND_URL + "/decrypted", {
    cache: "no-store",
  });

  if (!response.ok) return;

  const data = await response.json();

  return <Table users={data} />;
}
