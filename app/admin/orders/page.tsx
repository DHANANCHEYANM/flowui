import { columns } from "./columns";
import { DataTable } from "./data-table";

import Link from "next/link";
import { Search, Plus } from "lucide-react";
import { OrderFilterSheet } from "@/components/customers/filter-orders"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const data = [
    {
        id: "1",
        date: "2025-06-01",
        customer: "Abbie Rice",
        country: "India",
        total: "$120.00",
        status: "Order Placed",
    },
    {
        id: "2",
        date: "2025-06-02",
        customer: "Abdullah Runolfsson",
        country: "United States",
        total: "$250.00",
        status: "Shipped",
    },
    {
        id: "3",
        date: "2025-06-03",
        customer: "John Smith",
        country: "Germany",
        total: "$75.00",
        status: "Delivered",
    },
    {
        id: "4",
        date: "2025-06-04",
        customer: "David Lee",
        country: "France",
        total: "$180.00",
        status: "Cancelled",
    },
];

export default function OrdersPage() {
    return (
        <div className="p-6 pl-50">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-3xl font-bold">
                    Orders
                </h1>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            placeholder="Search orders..."
                            className="h-10 w-[240px] pl-9"
                        />
                    </div>
                    <OrderFilterSheet />

                    <Link href="/admin/customers/create">
                        <Button
                            className="h-10 gap-2 rounded-md bg-purple-600
                            px-4 text-sm font-semibold text-white shadow-md hover:bg-purple-700">
                            <Plus className="h-4 w-4" />
                            Create
                        </Button>
                    </Link>
                </div>
            </div>

            <DataTable
                columns={columns}
                data={data}
            />
        </div>
    );
}