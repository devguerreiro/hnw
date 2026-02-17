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
    cell: ({ row }) => {
      const id = row.getValue("id");
      return `#${id}`;
    },
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
    cell: ({ row }) => {
      const phone = String(row.getValue("phone"));
      const regex = new RegExp(/(\d{3})(\d{3})(\d{4})/);
      return phone.replace(regex, "($1) $2 $3");
    },
  },
];
