"use client";

import { useState } from "react";

import { EraserIcon, PlayIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { DataTable } from "./data-table";
import { columns, User } from "./columns";

type Props = {
  users: User[];
};

export function Table({ users }: Props) {
  const [data, setData] = useState(users);

  function execute() {}

  function clean() {}

  return (
    <div className="container mx-auto mt-8 space-y-8">
      <div className="flex justify-between items-center p-6 bg-secondary rounded">
        <h1 className="text-2xl font-medium">
          H&W Decrypt - Fullstack Technical Test
        </h1>
        <div className="space-x-3">
          <Button onClick={execute}>
            <PlayIcon />
            Execute
          </Button>
          <Button onClick={clean}>
            <EraserIcon />
            Clear
          </Button>
        </div>
      </div>
      <main className="bg-secondary rounded shadow p-6">
        <DataTable columns={columns} data={data} />
      </main>
    </div>
  );
}
