"use client";

import { Filter, User, X, Check, Flag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function CustomerFilterSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="h-10 gap-2 border border-gray-200 px-4"
        >
          <Filter className="h-4 w-4" />

          <span>Filters</span>

          <span className="ml-1 text-xs font-medium text-violet-600">
            0
          </span>
        </Button>
      </SheetTrigger>

      <SheetContent className="w-[420px] sm:w-[420px] p-0 flex flex-col">

        <SheetHeader className="px-8 pt-8">
          <SheetTitle className="text-3xl font-bold">
            Filters
          </SheetTitle>
        </SheetHeader>


        <hr />


        <div className="flex-1 px-8 pt-8">
          <div className="space-y-8">

            <div className="space-y-3">
              <Label className="text-sm font-medium">
                Name
              </Label>

              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  placeholder="Search..."
                  className="h-10 pl-10"
                />
              </div>
            </div>

            {/* Country */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">
                Country
              </Label>

              <Select defaultValue="all">
                <SelectTrigger className="h-10">
                  <div className="flex items-center gap-2">
                    <Flag className="h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder="All" />
                  </div>
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="all">
                    All
                  </SelectItem>

                  <SelectItem value="india">
                    India
                  </SelectItem>

                  <SelectItem value="usa">
                    United States
                  </SelectItem>

                  <SelectItem value="france">
                    France
                  </SelectItem>

                  <SelectItem value="germany">
                    Germany
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <hr />


        <div className="px-8 py-5">
          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              className="gap-2"
            >
              <X className="h-4 w-4" />
              Reset
            </Button>

            <SheetClose asChild>
              <Button className="gap-2 bg-violet-600 hover:bg-violet-700">
                <Check className="h-4 w-4" />
                Done
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}