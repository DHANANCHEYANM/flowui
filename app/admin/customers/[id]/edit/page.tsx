"use client";

import { Trash2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const customers = [
  {
    id: "1",
    name: "Adell Wolf",
    email: "elisha40@example.org",
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
];

export default function EditCustomerPage() {
  const params = useParams();
  const router = useRouter();

  const customer = customers.find(
    (c) => c.id === params.id
  );

  if (!customer) {
    return <div className="p-6">Customer Not Found</div>;
  }

  return (
    <div className="p-6 pl-50">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b pb-4">
        <h1 className="text-3xl font-bold">
          {customer.name}
        </h1>

        <Button
          variant="ghost"
          className="text-red-500 hover:text-red-600"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </div>

      {/* Content */}
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left Side */}
        <div className="space-y-6">
          {/* Avatar */}
          <div>
            <label className="mb-3 block text-sm font-medium">
              Avatar
            </label>

            <img
              src={customer.avatar}
              alt={customer.name}
              className="h-32 w-32 rounded-lg object-cover"
            />

            <p className="mt-3 text-sm text-muted-foreground">
              Click to change | Max 1MB
            </p>

            <input
              type="file"
              className="hidden"
            />
          </div>

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Name
            </label>

            <Input
              defaultValue={customer.name}
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <Input
              defaultValue={customer.email}
            />
          </div>

          {/* Country */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Country
            </label>

            <Select
              defaultValue={customer.country}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="India">
                  India
                </SelectItem>

                <SelectItem value="United States">
                  United States
                </SelectItem>

                <SelectItem value="Germany">
                  Germany
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 border-t pt-6">
            <Button
              variant="outline"
              onClick={() =>
                router.push(
                  `/admin/customers/${customer.id}`
                )
              }
            >
              Cancel
            </Button>

            <Button className="bg-purple-600 hover:bg-purple-700">
              Save
            </Button>
          </div>
        </div>

        {/* Right Side Illustration */}
        <div className="flex items-center justify-center">
          <img
            src="/illustrations/customer-edit.png"
            alt="Illustration"
            className="max-h-[350px] w-auto"
          />
        </div>
      </div>
    </div>
  );
}