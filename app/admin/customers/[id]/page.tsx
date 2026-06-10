"use client";

import { useParams, useRouter } from "next/navigation";
import { Pencil, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const customers = [
  {
    id: "1",
    name: "Abbie Rice",
    email: "abbie@example.com",
    country: "India",
    avatar: "/customers/customer-1.jpg",
  },
  {
    id: "2",
    name: "Dhana",
    email: "dhana@gmail.com",
    country: "India",
    avatar: "/customers/customer-2.jpg",
  },
  {
    id: "3",
    name: "Adrian Veum",
    email: "adrian@gmail.com",
    country: "United States",
    avatar: "/customers/customer-3.jpg",
  },
];

export default function CustomerDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const customer = customers.find(
    (c) => c.id === params.id
  );

  if (!customer) {
    return (
      <div className="p-6">
        Customer Not Found
      </div>
    );
  }

  return (
    <div className="space-y-8 pl-40">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          {customer.name}
        </h1>

        <Button
          className="bg-purple-600 text-white hover:bg-purple-700"
          onClick={() =>
            router.push(
              `/admin/customers/${customer.id}/edit`
            )
          }
        >
          <Pencil className="mr-2 h-4 w-4" />
          Edit
        </Button>
      </div>

      {/* Top Cards */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Info */}
        <Card>
          <CardHeader>
            <CardTitle>Info</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex items-center gap-4">
              <img
                src={customer.avatar}
                alt={customer.name}
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold">
                  {customer.name}
                </h3>

                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  {customer.email}
                </div>

                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {customer.country}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Favorites */}
        <Card>
          <CardHeader>
            <CardTitle>Favorites</CardTitle>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/products/laptop.png"
                  alt="Laptop"
                  className="h-12 w-12 object-contain"
                />

                <div>
                  <p className="font-medium">
                    LG Notebook LGram
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Computer
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-muted px-2 py-1 text-xs">
                1
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/products/speaker.png"
                  alt="Speaker"
                  className="h-12 w-12 object-contain"
                />

                <div>
                  <p className="font-medium">
                    Samsung Radiant Speaker
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Sound
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-muted px-2 py-1 text-xs">
                1
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>

        <CardContent>
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-3 text-left">#</th>
                <th className="py-3 text-left">Date</th>
                <th className="py-3 text-left">Total</th>
                <th className="py-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-4">42</td>
                <td>May 19, 2026</td>
                <td>$4,540.00</td>
                <td>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
                    Payment Confirmed
                  </span>
                </td>
              </tr>

              <tr>
                <td className="py-4">41</td>
                <td>Jun 8, 2026</td>
                <td>$5,495.00</td>
                <td>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                    Order Delivered
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}