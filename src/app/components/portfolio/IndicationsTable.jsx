"use client"

import { DataTable } from "../DataTable"

const columns = [

    {
        accessorKey: "lolId",
        header: "lol ID"
    },
    {
        accessorKey: "issuer",
        header: "Issuer"
    },
    {
        accessorKey: "interestedAmount",
        header: "Interested Amount"
    },
    {
        accessorKey: "date",
        header: "Date Sent"
    },
    {
        accessorKey: "status",
        header: "Issuance Status"
    },
    {
        accessorKey: "currentValue",
        header: "Current Value"
    }


]

const data = [
    { lolId: "lol9876", issuer: "FlowForm CRM", interestedAmount: "$75,000", date: "2024/07/25", status: "Active", currentValue: "$77,000" },
    { lolId: "lol4321", issuer: "BeaconBoard", interestedAmount: "$75,000", date: "2024/06/12", status: "Completed", currentValue: "$51,500" },


]

export function IndicationsTable() {
    return (
        <div>
            <p className="text-[20px] font-semibold text-white pb-3 pt-2">Indications of Interest (lols)</p>
            <div className=" w-full">
                <DataTable
                    columns={columns}
                    data={data}
                    disableSortIcon={true}
                    withGradientBorder={true}
                    fontHeader={true}
                    minWidth={true}
                />
            </div>
        </div>
    )
}

