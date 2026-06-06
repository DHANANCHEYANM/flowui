"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Brand = {
  id: string;
  name: string;
  products: number;
  createdAt: string;
};

export const columns: ColumnDef<Brand>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-0 font-semibold"
        onClick={() =>
          column.toggleSorting(
            column.getIsSorted() === "asc"
          )
        }
      >
        #
        <ArrowUpDown className="ml-2 h-3 w-3" />
      </Button>
    ),
  },

  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-0 font-semibold"
        onClick={() =>
          column.toggleSorting(
            column.getIsSorted() === "asc"
          )
        }
      >
        Name
        <ArrowUpDown className="ml-2 h-3 w-3" />
      </Button>
    ),
  },

  {
    accessorKey: "products",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-0 font-semibold"
        onClick={() =>
          column.toggleSorting(
            column.getIsSorted() === "asc"
          )
        }
      >
        Products
        <ArrowUpDown className="ml-2 h-3 w-3" />
      </Button>
    ),
  },

  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-0 font-semibold"
        onClick={() =>
          column.toggleSorting(
            column.getIsSorted() === "asc"
          )
        }
      >
        Created At
        <ArrowUpDown className="ml-2 h-3 w-3" />
      </Button>
    ),
  },

  {
    id: "actions",
    header: "Delete Action",

    cell: () => (
      <Button
        variant="ghost"
        size="icon"
      >
        <Trash2 className="h-4 w-4 text-red-500" />
      </Button>
    ),
  },
];