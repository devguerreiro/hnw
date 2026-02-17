"use client";

import { ColumnDef } from "@tanstack/react-table";

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
];
