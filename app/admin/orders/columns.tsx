"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Order = {
  id: string;
  date: string;
  customer: string;
  country: string;
  total: string;
  status: string;
};

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-0 font-semibold"
        onClick={() =>
          column.toggleSorting(column.getIsSorted() === "asc")
        }
      >
        #
        <ArrowUpDown className="ml-2 h-3 w-3" />
      </Button>
    ),
  },

  {
    accessorKey: "date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-0 font-semibold"
        onClick={() =>
          column.toggleSorting(column.getIsSorted() === "asc")
        }
      >
        Date
        <ArrowUpDown className="ml-2 h-3 w-3" />
      </Button>
    ),
  },

  {
    accessorKey: "customer",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-0 font-semibold"
        onClick={() =>
          column.toggleSorting(column.getIsSorted() === "asc")
        }
      >
        Customer
        <ArrowUpDown className="ml-2 h-3 w-3" />
      </Button>
    ),
  },

  {
    accessorKey: "country",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-0 font-semibold"
        onClick={() =>
          column.toggleSorting(column.getIsSorted() === "asc")
        }
      >
        Country
        <ArrowUpDown className="ml-2 h-3 w-3" />
      </Button>
    ),
  },

  {
    accessorKey: "total",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-0 font-semibold"
        onClick={() =>
          column.toggleSorting(column.getIsSorted() === "asc")
        }
      >
        Total
        <ArrowUpDown className="ml-2 h-3 w-3" />
      </Button>
    ),
  },

  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-0 font-semibold"
        onClick={() =>
          column.toggleSorting(column.getIsSorted() === "asc")
        }
      >
        Status
        <ArrowUpDown className="ml-2 h-3 w-3" />
      </Button>
    ),
  },
];