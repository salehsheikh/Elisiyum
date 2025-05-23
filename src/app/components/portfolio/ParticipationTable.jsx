"use client"

import { DataTable } from "../DataTable"

const columns = [
    {
        accessorKey: "rffId",
        header: "RFF ID",
    },
    {
        accessorKey: "issuer",
        header: "Issuer",
    },
    {
        accessorKey: "issuerAmount",
        header: () => (
            <div className="flex-col justify-center items-center gap-1">
                <span className="">Issuer  Amount</span>
                <br />
                <p className="text-center italic ">(000s)</p>

            </div>
        ),
    },
    {
        accessorKey: "interestRate",
        header: "Interest Rate(p.a)",
    },
    {
        accessorKey: "commitedAmount",
        header: "Commited Amount",
    },
    {
        accessorKey: "timeLeft",
        header: "Time Left",
        cell: ({ row }) => {
            const value = row.original.timeLeft;
            const isDayBased = value.includes("d");
            const textClass = isDayBased ? "" : "text-[#FF3B30] font-semibold";
            return <span className={textClass}>{value}</span>
        }
    },
    {
        accessorKey: "fillLevel",
        header: "Fill Level ",
        cell: ({ row }) => {
            const value = row.original.fillLevel;
            const baseStyles =
                "w-[123px] h-[24px] flex items-center justify-center rounded text-[14px]  rounded-[50px]";

            let bgColor = "";
            let textColor = "text-black text-sm ";

            if (value === "Send IOI") {
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


]

const data = [
    { rffId: "RFF1234", issuer: "NeuroSync Systems", issuerAmount: "25,000", interestRate: "5%", commitedAmount: "5,000", timeLeft: "3min 14sec", fillLevel: "90%" },
    { rffId: "General Finance 9.5% 5/1/2026", issuer: "CleanStride Energy", issuerAmount: "3,000", interestRate: "11%", commitedAmount: "-", timeLeft: "1m 2sec", fillLevel: "Send lol" },
    { rffId: "General Finance 4% 2/8/2025", issuer: "UrbanNest Decor", issuerAmount: "8,000", interestRate: "8%", commitedAmount: "4,000", timeLeft: "30min 3sec", fillLevel: "60%" },
]

export function ParticipationTable() {
    return (
        <div>
            <p className="text-[20px] font-semibold text-white pb-3">Live RFF Participation</p>
            <div className="overflow-x-auto w-full">
                <DataTable
                    columns={columns}
                    data={data}
                    disableSortIcon={true}
                    withGradientBorder={true}
                    fontHeader={true}

                />
            </div>
        </div>
    )
}