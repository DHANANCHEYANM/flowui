"use client";

import { useState } from "react";
import Image from "next/image";
import { User, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CreateCustomerPage() {
  const [preview, setPreview] = useState("");

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="pl-35">
      <h1 className="text-4xl font-bold">
        New Customer
      </h1>

      <div className="my-4 border-b" />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      
        <div>
         
          <label className="mb-4 block text-sm font-medium">
            Avatar
          </label>

          <label className="block cursor-pointer">
            <div className="flex h-40 w-40 items-center justify-center rounded-md bg-slate-100">
              {preview ? (
                <img
                  src={preview}
                  alt="avatar"
                  className="h-full w-full rounded-md object-cover"
                />
              ) : (
                <User className="h-24 w-24 text-slate-300" />
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>

          <p className="mt-4 text-sm text-muted-foreground">
            Click to change | Max 1MB
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Name
              </label>
              <Input />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>
              <Input type="email" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Country
              </label>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="usa">USA</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

       
        <div className="flex items-center justify-center">
          <Image
            src="/customer-illustration.png"
            alt="Customer"
            width={420}
            height={420}
          />
        </div>
      </div>

      <div className="my-6 border-b" />

      <div className="flex justify-end gap-4">
        <Button variant="outline">
          Cancel
        </Button>

        <Button className="bg-violet-600 hover:bg-violet-700">
          <Send className="mr-2 h-4 w-4" />
          Create
        </Button>
      </div>
    </div>
  );
}