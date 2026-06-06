"use client";

import { useState } from "react";

import { columns } from "./columns";
import { DataTable } from "./data-table";

import { Search } from "lucide-react";

import { CreateBrandDialog } from "./add-create";
import { UpdateBrandDialog } from "./update-brand-dialog";

import { Input } from "@/components/ui/input";

const data = [
  {
    id: "1",
    name: "Apple",
    products: 8,
    createdAt: "May 19, 2026",
  },
  {
    id: "2",
    name: "Samsung",
    products: 9,
    createdAt: "May 19, 2026",
  },
  {
    id: "3",
    name: "LG",
    products: 9,
    createdAt: "May 19, 2026",
  },
  {
    id: "4",
    name: "Test",
    products: 0,
    createdAt: "Jun 4, 2026",
  },
];

export default function BrandsPage() {
  const [open, setOpen] = useState(false);
  const [brandName, setBrandName] = useState("");
  return (
    <div className="p-6 pl-52">

      <div className="mb-7 flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          Brands
        </h1>

        <div className="flex items-center gap-4">

          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              placeholder="Search..."
              className="h-10 w-[240px] pl-9"
            />
          </div>

          <CreateBrandDialog />
        </div>
      </div>
      <UpdateBrandDialog
        open={open}
        onOpenChange={setOpen}
        name={brandName}
        setName={setBrandName} />


      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <DataTable
          columns={columns}
          data={data}
          onRowClick={(brand: any) => {
            setBrandName(brand.name);
            setOpen(true);
          }}
        />
      </div>
    </div>
  );
}