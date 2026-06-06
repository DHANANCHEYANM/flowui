"use client";

import { useState } from "react";
import Image from "next/image";
import { RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const customers = [
  {
    id: 1,
    name: "Abbie Rice",
    email: "smith.abe@example.org",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "Abdullah Runolfsson",
    email: "yazmin85@example.org",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "Adelle Heller",
    email: "coty48@example.net",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 4,
    name: "Adolphus Bogisich",
    email: "edward@example.net",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
];

export default function CreateOrderPage() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filteredCustomers =
    search.trim() === ""
      ? []
      : customers.filter((customer) =>
          customer.name
            .toLowerCase()
            .includes(search.toLowerCase())
        );

  return (
    <div className="p-6 pl-50">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          New Order
        </h1>

        <Button
          variant="outline"
          onClick={() => router.push("/admin/orders")}
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Discard
        </Button>
      </div>

      <div className="mb-6 border-b" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left Side */}
        <div className="rounded-xl border bg-white p-6">
          <h2 className="mb-4 text-2xl font-semibold">
            Customer
          </h2>

          <div className="mb-4 border-b" />

          <Input
            placeholder="Search customer..."
            className="h-11"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Customer List */}
          <div className="mt-4 max-h-[350px] overflow-y-auto">
            {search.trim() === "" ? (
              <div className="py-6 text-center text-sm text-muted-foreground">
                Search for a customer
              </div>
            ) : filteredCustomers.length > 0 ? (
              <div className="space-y-3">
                {filteredCustomers.map((customer) => (
                  <div
                    key={customer.id}
                    className="flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition hover:bg-muted"
                  >
                    <img
                      src={customer.avatar}
                      alt={customer.name}
                      className="h-10 w-10 rounded-full"
                    />

                    <div>
                      <p className="font-medium">
                        {customer.name}
                      </p>

                      <p className="text-sm text-muted-foreground">
                        {customer.email}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-6 text-center text-sm text-muted-foreground">
                No customers found
              </div>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center">
          <Image
            src="/order-illustration.png"
            alt="Order"
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  );
}