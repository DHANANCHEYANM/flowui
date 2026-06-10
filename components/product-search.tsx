"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

const products = [
  {
    id: "1",
    name: "LG Notebook G14",
    image: "/products/laptop.png",
    category: "Computer",
  },
  {
    id: "2",
    name: "iPhone 13 64GB",
    image: "/products/iphone13.png",
    category: "Smartphone",
  },
  {
    id: "3",
    name: "Samsung Speaker",
    image: "/products/speaker.png",
    category: "Sound",
  },
];

export function ProductSearch() {
  const [query, setQuery] = React.useState("");

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="space-y-3">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

        <Input
          placeholder="Search product..."
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          className="pl-10"
        />
      </div>

      {query && (
        <div className="rounded-md border">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex cursor-pointer items-center gap-3 border-b p-3 hover:bg-muted"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-10 w-10 object-contain"
                />

                <div>
                  <p className="font-medium">
                    {product.name}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {product.category}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-3 text-sm text-muted-foreground">
              No products found
            </div>
          )}
        </div>
      )}
    </div>
  );
}