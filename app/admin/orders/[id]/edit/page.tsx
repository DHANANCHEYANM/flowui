"use client";

import { Trash2, Plus } from "lucide-react";
import { useParams } from "next/navigation";
import{AddItemSheet } from "@/components/add-item"

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function OrderDetailsPage() {
  const params = useParams();

  return (
     <div className="space-y-8 px-6  pl-35">
     
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-3xl font-bold">
          Order #{params.id}
        </h1>

        <Button
          variant="ghost"
          className="text-red-500 hover:text-red-600"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </div>

      {/* Customer + Summary */}
     <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Customer */}
       <Card className="mt-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Customer</CardTitle>

            <Button variant="outline">
              Change
            </Button>
          </CardHeader>

          <CardContent>
            <div className="flex items-center gap-4">
              <img
                src="/customers/customer-1.jpg"
                alt="Customer"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold">
                  Alycia Mayer
                </h3>

                <p className="text-sm text-muted-foreground">
                  frami.rubye@example.com
                </p>

                <p className="text-sm text-muted-foreground">
                  Germany
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Summary</CardTitle>

            <span className="rounded-full bg-pink-100 px-3 py-1 text-xs text-pink-600">
              Order placed
            </span>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Items</span>
              <span>(2)</span>
            </div>

            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>$3,397.00</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Items */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Items</CardTitle>

          {/* <Button className="bg-purple-600 text-white hover:bg-purple-700">
            <Plus className="mr-2 h-4 w-4" />
            Add
          </Button> */}
          <AddItemSheet />
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Total</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src="/products/iphone12.png"
                      alt="iPhone"
                      className="h-10 w-10 object-contain"
                    />

                    <span>
                      iPhone 12 64GB
                    </span>
                  </div>
                </TableCell>

                <TableCell>Apple</TableCell>

                <TableCell>
                  Smartphone
                </TableCell>

                <TableCell>
                  <Select defaultValue="2">
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="1">
                        1
                      </SelectItem>
                      <SelectItem value="2">
                        2
                      </SelectItem>
                      <SelectItem value="3">
                        3
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>

                <TableCell>
                  $899.00
                </TableCell>

                <TableCell>
                  $1,798.00
                </TableCell>

                <TableCell>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src="/products/laptop.png"
                      alt="Laptop"
                      className="h-10 w-10 object-contain"
                    />

                    <span>
                      LG Notebook G14
                    </span>
                  </div>
                </TableCell>

                <TableCell>LG</TableCell>

                <TableCell>
                  Computer
                </TableCell>

                <TableCell>
                  <Select defaultValue="1">
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="1">
                        1
                      </SelectItem>
                      <SelectItem value="2">
                        2
                      </SelectItem>
                      <SelectItem value="3">
                        3
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>

                <TableCell>
                  $1,599.00
                </TableCell>

                <TableCell>
                  $1,599.00
                </TableCell>

                <TableCell>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}