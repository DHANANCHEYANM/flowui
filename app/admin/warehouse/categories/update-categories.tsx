"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface UpdateBrandDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  name: string;
  setName: (name: string) => void;
}

export function UpdateCategoriesDialog({
  open,
  onOpenChange,
  name,
  setName,
}: UpdateBrandDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">
            Update Categories
          </DialogTitle>
        </DialogHeader>

        <div className="py-4">
          <Label>Name</Label>

          <Input
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="mt-2 h-11"
          />
        </div>

        <div className="border-t" />

        <DialogFooter className="pt-6">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button className="bg-purple-600 hover:bg-purple-700">
            Update
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}