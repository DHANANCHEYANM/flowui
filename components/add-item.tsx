"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ProductSearch } from "@/components/product-search";

export function AddItemSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="mr-2 h-4 w-4" />
          Add
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[420px]"
      >
        <SheetHeader>
          <SheetTitle>
            Add Item
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8 space-y-6">
          {/* Product Search */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Product
            </label>

            <ProductSearch />

            <p className="mt-2 text-xs text-muted-foreground">
              Search for product name
            </p>
          </div>

          {/* Quantity */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Quantity
            </label>

            <select className="w-full rounded-md border p-2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>

          <div className="border-t pt-4">
            <Button className="float-right bg-purple-600 hover:bg-purple-700">
              Add
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}