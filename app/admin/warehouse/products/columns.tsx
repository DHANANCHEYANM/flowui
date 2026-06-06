"use client";

import Image from "next/image";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";

export type Product = {
  id: string;
  image: string;
  name: string;
  brand: string;
  category: string;
  price: string;
  stock: number;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",

    header: ({ column }) => (
      <Button
        variant="ghost"
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

    cell: ({ row }) => (
      <div className="flex items-center gap-4">
        <Image
          src={row.original.image}
          alt={row.original.name}
          width={40}
          height={40}
          className="rounded-md"
        />

        <span>{row.original.name}</span>
      </div>
    ),
  },

  {
    accessorKey: "brand",

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() =>
          column.toggleSorting(
            column.getIsSorted() === "asc"
          )
        }
      >
        Brand
        <ArrowUpDown className="ml-2 h-3 w-3" />
      </Button>
    ),
  },

  {
    accessorKey: "category",

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() =>
          column.toggleSorting(
            column.getIsSorted() === "asc"
          )
        }
      >
        Category
        <ArrowUpDown className="ml-2 h-3 w-3" />
      </Button>
    ),
  },

  {
    accessorKey: "price",

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() =>
          column.toggleSorting(
            column.getIsSorted() === "asc"
          )
        }
      >
        Price
        <ArrowUpDown className="ml-2 h-3 w-3" />
      </Button>
    ),
  },

  {
    accessorKey: "stock",

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() =>
          column.toggleSorting(
            column.getIsSorted() === "asc"
          )
        }
      >
        Stock
        <ArrowUpDown className="ml-2 h-3 w-3" />
      </Button>
    ),
  },
];