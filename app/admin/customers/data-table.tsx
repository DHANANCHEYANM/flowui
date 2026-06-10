"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {Pagination} from "@/components/pagination"

interface DataTableProps<
  TData extends { id: string },
  TValue
> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<
  TData extends { id: string },
  TValue
>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const router = useRouter();

  const [sorting, setSorting] =
    React.useState<SortingState>([]);

  const [globalFilter, setGlobalFilter] =
    React.useState("");

  const table = useReactTable({
    data,
    columns,

    state: {
      sorting,
      globalFilter,
    },

    initialState: {
      pagination: {
        pageSize: 7,
      },
    },

    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,

    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel:
      getFilteredRowModel(),
    getPaginationRowModel:
      getPaginationRowModel(),
  });

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-xl border bg-background">
        <Table>
          <TableHeader>
            {table
              .getHeaderGroups()
              .map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map(
                    (header) => (
                      <TableHead
                        key={header.id}
                        className="font-semibold"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column
                                .columnDef
                                .header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  )}
                </TableRow>
              ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows
              ?.length ? (
              table
                .getRowModel()
                .rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() =>
                      router.push(
                        `/admin/customers/${row.original.id}`
                      )
                    }
                  >
                    {row
                      .getVisibleCells()
                      .map((cell) => (
                        <TableCell
                          key={cell.id}
                        >
                          {flexRender(
                            cell.column
                              .columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={
                    columns.length
                  }
                  className="h-24 text-center"
                >
                  No customers found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <Pagination
  pageIndex={
    table.getState().pagination.pageIndex
  }
  pageCount={table.getPageCount()}
  totalRows={data.length}
  pageSize={
    table.getState().pagination.pageSize
  }
  setPageIndex={(index) =>
    table.setPageIndex(index)
  }
  previousPage={() =>
    table.previousPage()
  }
  nextPage={() =>
    table.nextPage()
  }
  canPreviousPage={
    table.getCanPreviousPage()
  }
  canNextPage={
    table.getCanNextPage()
  }
/>
      </div>
    </div>
  );
}