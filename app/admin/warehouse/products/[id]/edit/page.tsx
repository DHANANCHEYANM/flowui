"use client";

import { Trash2, Plus, Upload } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ProductDescriptionEditor } from "@/components/productdescription";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const products = [
    {
        id: "1",
        name: "Homepod",
        brand: "Apple",
        category: "Sound",
        price: "299",
        stock: "17",
        image: "/products/homepod.png",
        description:
            "Apple smart speaker with immersive sound.",
    },
    {
        id: "2",
        name: "iPhone 13 64GB",
        brand: "Apple",
        category: "Smartphone",
        price: "899",
        stock: "17",
        image: "/products/iphone13.png",
        description:
            "The most advanced dual-camera system ever on iPhone.",
    },
];

export default function EditProductPage() {
    const params = useParams();
    const router = useRouter();

    const product = products.find(
        (p) => p.id === params.id
    );

    if (!product) {
        return (
            <div className="p-6">
                Product Not Found
            </div>
        );
    }

    return (
        <div className="space-y-6 pl-35">
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-4">
                <h1 className="text-3xl font-bold">
                    {product.name}
                </h1>

                <Button
                    variant="ghost"
                    className="text-red-500 hover:text-red-600"
                >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                </Button>
            </div>

            {/* Main Content */}
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Left Side */}
                <Card>
                    <CardHeader>
                        <CardTitle>Details</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-5">
                        {/* Name */}
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Name
                            </label>

                            <Input
                                defaultValue={product.name}
                            />
                        </div>

                        {/* Brand */}
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Brand
                            </label>

                            <div className="flex gap-2">
                                <Select defaultValue="apple">
                                    <SelectTrigger className="flex-1">
                                        <SelectValue />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="apple">
                                            Apple
                                        </SelectItem>

                                        <SelectItem value="samsung">
                                            Samsung
                                        </SelectItem>

                                        <SelectItem value="lg">
                                            LG
                                        </SelectItem>
                                    </SelectContent>
                                </Select>

                                <Button
                                    size="icon"
                                    type="button"
                                    className="bg-purple-600 hover:bg-purple-700"
                                >
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Category */}
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Category
                            </label>

                            <div className="flex gap-2">
                                <Select defaultValue="smartphone">
                                    <SelectTrigger className="flex-1">
                                        <SelectValue />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="smartphone">
                                            Smartphone
                                        </SelectItem>

                                        <SelectItem value="sound">
                                            Sound
                                        </SelectItem>

                                        <SelectItem value="computer">
                                            Computer
                                        </SelectItem>
                                    </SelectContent>
                                </Select>

                                <Button
                                    size="icon"
                                    type="button"
                                     className="bg-purple-600 hover:bg-purple-700"
                                >
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Price */}
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Price
                            </label>

                            <div className="flex">
                                <div className="flex items-center rounded-l-md border border-r-0 px-3">
                                    USD
                                </div>

                                <Input
                                    type="number"
                                    defaultValue={
                                        product.price
                                    }
                                    className="rounded-l-none"
                                />
                            </div>
                        </div>

                        {/* Stock */}
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Stock
                            </label>

                            <Input
                                type="number"
                                defaultValue={
                                    product.stock
                                }
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Description
                            </label>

                            <ProductDescriptionEditor
                                content={product.description}
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Right Side */}
                <div className="space-y-6">
                    {/* Cover */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Cover</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <div className="flex justify-center rounded-lg border p-6">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-40 object-contain"
                                />
                            </div>

                            <label className="mt-4 flex cursor-pointer justify-center text-sm text-muted-foreground">
                                Click to change | Max 1MB

                                <input
                                    type="file"
                                    className="hidden"
                                />
                            </label>
                        </CardContent>
                    </Card>

                    {/* More Images */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                More Images
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <label className="flex h-14 cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed">
                                <Upload className="h-4 w-4" />
                                Add Images

                                <input
                                    type="file"
                                    multiple
                                    className="hidden"
                                />
                            </label>

                            <p className="mt-2 text-xs text-muted-foreground">
                                Max 1MB
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-3 border-t pt-6">
                <Button
                    variant="outline"
                    onClick={() =>
                        router.push("/admin/products")
                    }
                >
                    Cancel
                </Button>

                <Button className="bg-purple-600 hover:bg-purple-700">
                    Save
                </Button>
            </div>
        </div>
    );
}