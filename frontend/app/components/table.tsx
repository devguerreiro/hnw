"use client";

import { useState } from "react";

import { DataTable } from "./data-table";
import { columns, User } from "./columns";
import { ExecuteButton } from "./execute-button";
import { CleanButton } from "./clean-button";

type Props = {
  users: User[];
};

export function Table({ users }: Props) {
  const [data, setData] = useState(users);

  return (
    <div className="container mx-auto mt-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 p-6 bg-white rounded-md shadow">
        <h1 className="text-center md:text-start text-xl md:text-2xl font-medium">
          H&W Decrypt - Fullstack Technical Test
        </h1>
        <div className="space-x-3">
          <ExecuteButton onFinish={(data) => setData(data)} />
          <CleanButton onFinish={() => setData([])} />
        </div>
      </div>
      <main className="bg-white p-6 rounded-md shadow">
        <DataTable columns={columns} data={data} />
      </main>
    </div>
  );
}
