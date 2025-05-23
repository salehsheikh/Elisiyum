"use client"

import { DataTable } from "../DataTable"

const columns = [

    {
        accessorKey: "rank",
        header: "Rank"
    },
    {
        accessorKey: "issuer",
        header: "Issuer"
    },

    {
        accessorKey: "totalInvest",
        header: () => (
            <div className="flex-col justify-center items-center gap-1">
                <span>  Total</span>
                <br />
                <p className="text-center italic ">Investment</p>

            </div>
        ),
    },
    {
        accessorKey: "return",
        header: "%Return "
    },
    {
        accessorKey: "avgReturn",
        header: () => (
            <div className="flex-col justify-center items-center gap-1">
                <span>Average</span>
                <br />
                <p className="text-center italic ">Return</p>
            </div>
        ),
    },
    {
        accessorKey: "totalHold",
        header: "Total Holding"
    }


]

const data = [
    { rank: "1", issuer: "AquaPulse Solutions", totalInvest: "$150,000", return: "12%", avgReturn: "8%", totalHold: "$165,000" },
    { rank: "2", issuer: "EverVibe Wellness", totalInvest: "$140,000", return: "5%", avgReturn: "4.5%", totalHold: "$105,000" },
    { rank: "3", issuer: "Photonix Labs", totalInvest: "$20,000", return: "-3%", avgReturn: "2%", totalHold: "$72,000" }


]

export function RankingTable() {
    return (
        <div>
            <p className="text-[20px] font-semibold text-white pb-3 pt-2">Favourite Issuer Ranking</p>
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