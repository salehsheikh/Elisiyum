"use client"

import { DataTable } from "../DataTable"

const columns = [

    {
        accessorKey: "date",
        header: "Date"
    },
    {
        accessorKey: "issuer",
        header: "Issuer"
    },
    {
        accessorKey: "debtType",
        header: "Dept Type",
        cell: ({ row }) => {
            const value = row.original.debtType;
            const textClass = value === "Secured" ? "text-green-500 " : "text-[#FFAB2D]";
            return <span className={textClass}>{value}</span>;
        }
    },

    {
        accessorKey: "amountInvest",
        header: () => (
            <div className="flex-col justify-center items-center gap-1">
                <span>  Amount</span>
                <br />
                <p className="text-center italic ">Investment</p>

            </div>
        ),
    },
    {
        accessorKey: "currentValue",
        header: "Current Value "
    },

    {
        accessorKey: "return",
        header: "%Return "
    },
]

const data = [
    { date: "2024/01/15", issuer: "AuditStream Pro", debtType: "Secured", amountInvest: "$50,000", currentValue: "$55,000", return: "10%" },
    { date: "2024/05/10", issuer: "BeaconBoard", debtType: "Unsecured", amountInvest: "$40,000", currentValue: "$31,500", return: "5%" },
    { date: "2024/01/15", issuer: "SavorCraft", debtType: "Secured", amountInvest: "$20,000", currentValue: "$18,000", return: "-10%" }


]

export function InvestmentTable() {
    return (
        <div>
            <p className="text-[20px] font-semibold text-white pb-3 pt-2">Past Investments</p>
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