"use client"

import { DataTable } from "../DataTable"

const columns = [

    {
        accessorKey: "issuanceId",
        header: "Issuance ID"
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
        accessorKey: "holding",
        header: "Holding Value"
    },
    {
        accessorKey: "issuanceDate",
        header: "Issuance Date "
    },
    {
        accessorKey: "maturityDate",
        header: "Maturity Date "
    },

    {
        accessorKey: "interestRate",
        header: "Interest Rate "
    },
    {
        accessorKey: "redemption",
        header: "Redemption ",
        cell: ({ row }) => {
            const value = row.original.redemption;
            const baseStyles =
                "w-[119px] h-[23px] flex items-center justify-center rounded text-[14px]  rounded-[50px]";

            let bgColor = "";
            let textColor = "text-black text-sm ";

            if (value === "Ready To Collect") {
                bgColor = "bg-gray-500 text-white";
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
        accessorKey: "dayCount",
        header: "Day Count "
    },





]

const data = [
    { issuanceId: "TKN-2024-01", issuer: "Invest ABC", debtType: "Secured", holding: "$100,000", issuanceDate: "3/06/2025", maturityDate: "2025/01/01", interestRate: "6.50%", redemption: "Ready To Collect", dayCount: "83 days left" },
    { issuanceId: "TKN-2024-02", issuer: "Invest ABC", debtType: "Unsecured", holding: "$75,000", issuanceDate: "2/06/2025", maturityDate: "2025/02/11", interestRate: "7.20%", redemption: "Ready To Collect", dayCount: "20 days left" },
    { issuanceId: "TKN-2024-03", issuer: "Invest ABC", debtType: "Secured", holding: "$100,000", issuanceDate: "3/06/2025", maturityDate: "2025/01/01", interestRate: "10%", redemption: "Ready To Collect", dayCount: "10 days left" },
]

export function DebtTable() {
    return (
        <div>
            <p className="text-[20px] font-semibold text-white pb-3 pt-2">Debt Holding</p>
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