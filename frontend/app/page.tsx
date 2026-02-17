import { decrypt } from "@/services/decrypt";

import { Table } from "./components/table";

export default async function Home() {
  const data = await decrypt();

  return <Table users={data} />;
}
