"use client";

import { useState } from "react";
import { Plus, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export function CreateBrandDialog() {
  const [name, setName] = useState("");

  const handleSave = () => {
    console.log({
      name,
    });

    setName("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
              className="
                h-10
                gap-2
                rounded-md
                bg-violet-600
                px-4
                text-sm
                font-semibold
                text-white
                shadow-sm
                hover:bg-violet-700
              "
            >
              <Plus className="h-4 w-4" />
              Create
            </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">
            Create Brand
          </DialogTitle>
        </DialogHeader>

        <div className="py-6">
          <div className="space-y-3">
            <Label htmlFor="name">
              Name
            </Label>

            <Input
              id="name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="h-11"
            />
          </div>
        </div>

        <div className="border-t" />

        <DialogFooter className="pt-6">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="h-10"
            >
              Cancel
            </Button>
          </DialogClose>

          <Button
            onClick={handleSave}
            className="h-10 gap-2 bg-violet-600 hover:bg-violet-700"
          >
            <Send className="h-4 w-4" />
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}