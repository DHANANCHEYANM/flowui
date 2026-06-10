"use client";

import { Plus, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CreateProductPage() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Create Product</h1>

      <div className="grid gap-6 lg:grid-cols-2">
     
        <Card>
          <CardHeader>
            <CardTitle>Details</CardTitle>
          </CardHeader>

          <CardContent className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Name
              </label>
              <Input placeholder="Product name" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Brand
              </label>

              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="nike">Nike</SelectItem>
                    <SelectItem value="adidas">Adidas</SelectItem>
                    <SelectItem value="puma">Puma</SelectItem>
                  </SelectContent>
                </Select>

                <Button size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Categories
              </label>

              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="shirts">Shirts</SelectItem>
                    <SelectItem value="shoes">Shoes</SelectItem>
                    <SelectItem value="bags">Bags</SelectItem>
                  </SelectContent>
                </Select>

                <Button size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Price
              </label>

              <div className="flex">
                <div className="flex items-center rounded-l-md border border-r-0 px-3 text-sm text-muted-foreground">
                  USD
                </div>

                <Input
                  type="number"
                  placeholder="0.00"
                  className="rounded-l-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Stock
              </label>

              <Input type="number" placeholder="Units" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Description
              </label>

              <Textarea
                placeholder="Enter product description..."
                className="min-h-[120px]"
              />
            </div>
          </CardContent>
        </Card>

      
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Cover</CardTitle>
            </CardHeader>

            <CardContent>
              <label className="flex h-[260px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed">
                <Upload className="mb-3 h-14 w-14 text-muted-foreground" />

                <p className="text-sm text-muted-foreground">
                  Click to change | Max 1MB
                </p>

                <input type="file" className="hidden" />
              </label>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>More Images</CardTitle>
            </CardHeader>

            <CardContent>
              <label className="flex h-14 cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed">
                <Upload className="h-4 w-4" />
                Add Images

                <input multiple type="file" className="hidden" />
              </label>

              <p className="mt-2 text-xs text-muted-foreground">
                Max 1MB
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

     
      <div className="mt-8 flex justify-end gap-3 border-t pt-6">
        <Button variant="outline">
          Cancel
        </Button>

        <Button>
          Save
        </Button>
      </div>
    </div>
  );
}