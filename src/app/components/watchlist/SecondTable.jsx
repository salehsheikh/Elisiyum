"use client"

import { DataTable } from "../DataTable"

const columns = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "item",
        header: "Item #",
        cell: ({ row }) => {
            const value = row.original.item;
            const baseStyles =
                "w-[123px] h-[24px] flex items-center justify-center rounded text-[14px]  rounded-[50px]";

            let bgColor = "";
            let textColor = "text-black text-sm ";

            if (value === "Oversubscribed") {
                bgColor = "bg-[#FFAB2D]";
            } else if (value === "Send IOI") {
                bgColor = "bg-[#717579] text-white";
            } else if (value.endsWith("%")) {
                bgColor = "bg-green-500";
            } else {
                bgColor = "bg-gray-400";
            }

            return (
                <div className={`${baseStyles} ${bgColor} ${textColor} flex-shrink-0`}>
                    {value}
                </div>
            );
        },
    },
    {
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) => {
            const value = row.original.description;
            const isDayBased = value.includes("d");
            const textClass = isDayBased ? "" : "text-[#FF3B30] font-semibold";
            return <span className={textClass}>{value}</span>
        }
    },

]

const data = [
    { name: "General Finance 9% 1/5/2026", item: "Oversubscribed", description: "3min 14sec", },
    { name: "General Finance 9.5% 5/1/2026", item: "75%", description: "1d 2h", },
    { name: "General Finance 4% 2/8/2025", item: "35%", description: "4d 3h", },
    { name: "General Finance 4% 2/8/2025", item: "Send IOI", description: "7d 4h", },
]

export function SecondTable() {
    return (
        <div className="w-full mx-auto py-2 overflow-x-auto">
            <DataTable
                columns={columns}
                data={data}
                disableSortIcon={true}
                headerTextWhite={true}
                withGradientBorder={true}
                minWidth={true}
            />
        </div>
    )
}