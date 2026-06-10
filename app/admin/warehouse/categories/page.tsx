"use client";

import { useState } from "react";

import { columns } from "./columns";
import { DataTable } from "./data-table";

import { Search } from "lucide-react";

import { CreateCategoriesDialog } from "./add-create";
import { UpdateCategoriesDialog } from "./update-categories";

import { Input } from "@/components/ui/input";

const data = [
  {
    id: "1",
    name: "Google",
    products: 8,
    createdAt: "May 19, 2026",
  },
  {
    id: "2",
    name: "Nothing",
    products: 9,
    createdAt: "May 19, 2026",
  },
  {
    id: "3",
    name: "Elica",
    products: 9,
    createdAt: "May 19, 2026",
  },
  {
    id: "4",
    name: "Tap",
    products: 0,
    createdAt: "Jun 4, 2026",
  },
];

export default function BrandsPage() {
  const [open, setOpen] = useState(false);
  const [categoriesName, setCategoriesName] = useState("");
  return (
    <div className="p-6 pl-45">

      <div className="flex items-center justify-between border-b px-6 py-4">
        <h1 className="text-4xl font-bold">
          Categories
        </h1>

        <div className="flex items-center gap-4">

          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              placeholder="Search..."
              className="h-10 w-[240px] pl-9"
            />
          </div>

          <CreateCategoriesDialog />
        </div>
      </div>
      <UpdateCategoriesDialog
        open={open}
        onOpenChange={setOpen}
        name={categoriesName}
        setName={setCategoriesName} />


      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <DataTable
          columns={columns}
          data={data}
          onRowClick={(brand: any) => {
            setCategoriesName(brand.name);
            setOpen(true);
          }}
        />
      </div>
    </div>
  );
}