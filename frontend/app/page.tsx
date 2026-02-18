import { Table } from "./components/table";

export default async function Home() {
  const response = await fetch(process.env.BACKEND_URL + "/decrypted", {
    next: {
      tags: ["decrypted"],
    },
  });

  if (!response.ok) return;

  const data = await response.json();

  return <Table users={data} />;
}
