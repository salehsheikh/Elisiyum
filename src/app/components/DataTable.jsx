"use client"

import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"

export function DataTable({
  columns,
  data,
  disableSortIcon = false,
  headerTextWhite = false,
  withGradientBorder = false,
  minWidth = false,
  fontHeader = false,
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div
      className={`w-full max-w-[calc(100vw-2rem)]  overflow-x-auto ${withGradientBorder ? "border border-[#69778D] rounded-[20px] " : ""
        }`}
    >
      <div>
        <Table className={`table-no-border ${minWidth ? "min-w-[600px] w-full" : "min-w-[800px] w-full"
          } lg:min-w-full text-white`}>
          <TableHeader className={` ${fontHeader ? "text-[12px]" : "text-[16px]"} font-bold bg-[#4848486B]`}>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    <div
                      className={`flex items-center gap-2 ${headerTextWhite ? "text-white" : "text-[#FFCE40]"
                        }`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                      {!disableSortIcon && (
                        <button onClick={() => header.column.toggleSorting()} className="p-1">
                          <Image
                            src="/assets/icons/sort.svg"
                            width={10}
                            height={14}

                            alt="Sort"
                            className="min-w-[10px]"
                          />
                        </button>
                      )}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow key={row.id} className={index % 2 !== 0 ? "bg-[#4848486B]" : "bg-transparent"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
