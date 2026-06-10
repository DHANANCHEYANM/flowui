"use client";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface PaginationProps {
  pageIndex: number;
  pageCount: number;
  totalRows: number;
  pageSize: number;
  setPageIndex: (index: number) => void;
  previousPage: () => void;
  nextPage: () => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
}

export function Pagination({
  pageIndex,
  pageCount,
  totalRows,
  pageSize,
  setPageIndex,
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
}: PaginationProps) {
  const start = pageIndex * pageSize + 1;

  const end = Math.min(
    (pageIndex + 1) * pageSize,
    totalRows
  );

  return (
    <div className="flex items-center justify-between border-t px-6 py-4">
      <p className="text-sm text-muted-foreground">
        Showing {start} to {end} of {totalRows} results
      </p>

      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={previousPage}
          disabled={!canPreviousPage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {Array.from({
          length: pageCount,
        }).map((_, index) => (
          <Button
            key={index}
            variant={
              pageIndex === index
                ? "secondary"
                : "ghost"
            }
            size="icon"
            onClick={() =>
              setPageIndex(index)
            }
            className="h-8 w-8"
          >
            {index + 1}
          </Button>
        ))}

        <Button
          variant="ghost"
          size="icon"
          onClick={nextPage}
          disabled={!canNextPage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}