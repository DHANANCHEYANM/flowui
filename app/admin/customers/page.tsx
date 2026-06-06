import { columns } from "./columns";
import { DataTable } from "./data-table";

import { Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { CustomerFilterSheet } from "@/components/customers/filter"

import { Input } from "@/components/ui/input";


const data = [
    {
        id: "1",
        avatar: "https://i.pravatar.cc/40?img=1",
        name: "Abbie Rice",
        country: "India",
        email: "smith.abe@example.org",
    },
    {
        id: "2",
        avatar: "https://i.pravatar.cc/40?img=2",
        name: "Abdullah Runolfsson",
        country: "United States",
        email: "yazmin85@example.org",
    },
];

export default function CustomersPage() {
    return (
        <div className="p-6 pl-50">

            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-3xl font-bold">
                    Customers
                </h1>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            placeholder="Name..."
                            className="h-10 w-[240px] pl-9"
                        />
                    </div>

                    <CustomerFilterSheet />

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