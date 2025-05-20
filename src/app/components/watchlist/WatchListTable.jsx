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
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "alerts",
        header: "Alerts On",
        cell: ({ row }) => {
            const isSelected = row.getIsSelected();

            return (
                <div
                    className="relative w-5 h-5 cursor-pointer"
                    onClick={() => row.toggleSelected()}
                >
                    {/* Checkbox Background */}
                    <div className="absolute inset-0 rounded border transition-colors
                        bg-white/20 border-gray-400"
                    >
                        {/* Checkmark Icon */}
                        <svg
                            className={`absolute inset-0 m-auto w-3 h-3 text-[#FFCE40] transition-opacity
                                ${isSelected ? 'opacity-100' : 'opacity-0'}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>
            )
        }
    }
]

const data = [
    { name: "6 Month Maturity", item: "12", description: "6m only any country", alerts: true },
    { name: "General Finance 9% 1/5/26", item: "01", description: "Single Issuance", alerts: false },
    { name: "CPs with 8%+ yield", item: "10", description: "General Finance Unsecur...", alerts: true },
    { name: "General Finance 4% 2/8/25", item: "8", description: "8% yield minimum on sh...", alerts: false },
]

export function WatchListTable() {
    return (
        <div className="w-full mx-auto py-10 overflow-x-auto">
            <DataTable
                columns={columns}
                data={data}
                disableSortIcon={true}
                headerTextWhite={true}
                onRowSelectionChange={() => { }}
            />
        </div>
    )
}