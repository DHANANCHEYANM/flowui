"use client";

import { Search, Plus } from "lucide-react";

import { columns } from "./columns";
import { DataTable } from "./data-table";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// import { ProductFilterSheet } from "@/components/customers/filter-products";


const data = [
  {
    id: "1",
    image: "/products/homepod.png",
    name: "Homepod",
    brand: "Apple",
    category: "Sound",
    price: "$299.00",
    stock: 17,
  },
  {
    id: "2",
    image: "/products/homepod-mini.png",
    name: "Homepod mini",
    brand: "Apple",
    category: "Sound",
    price: "$99.00",
    stock: 17,
  },
  {
    id: "3",
    image: "/products/iphone12.png",
    name: "Iphone 12 64GB",
    brand: "Apple",
    category: "Smartphone",
    price: "$899.00",
    stock: 17,
  },
  {
    id: "4",
    image: "/products/iphone13.png",
    name: "Iphone 13 64GB",
    brand: "Apple",
    category: "Smartphone",
    price: "$899.00",
    stock: 17,
  },
];

export default function ProductsPage() {
  return (
    <div className="p-6 pl-35">
      <div className="flex items-center justify-between border-b px-6 py-4">
        <h1 className="text-4xl font-bold">
          Products
        </h1>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              placeholder="Name..."
              className="h-10 w-[240px] pl-9"
            />
          </div>

          {/* <ProductFilterSheet /> */}
          <Link href="/admin/customers/create">
            <Button
              className="h-10 gap-2 rounded-md bg-purple-600
                            px-4 text-sm font-semibold text-white shadow-md hover:bg-purple-700">
              <Plus className="h-4 w-4" />
              Create
            </Button>
          </Link>

        </div>
      </div>

      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <DataTable
          columns={columns}
          data={data}
        />
      </div>
    </div>
  );
}