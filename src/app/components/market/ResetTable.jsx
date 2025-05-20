"use client"
import Image from "next/image";
import { DataTable } from "../DataTable"
const columns = [
  {
    accessorKey: "issuer",
    header: "Issuer",
  },
  {
    accessorKey: "creditInfo",
    header: "Credit Information",
    cell: ({ row }) => {
      const value = row.original.creditInfo;
      let color = "#ffffff"; // default color

      if (["A1", "A2", "A3"].includes(value)) {
        color = "#2BC155";
      } else if (["B1", "B2", "B3"].includes(value)) {
        color = "#FFAB2D";
      } else if (["C1", "C2", "C3"].includes(value)) {
        color = "#BA0B0B";
      }

      return <span style={{ color }}>{value}</span>;
    },
  },
  {
    accessorKey: "issuanceAmount",
    header: () => (
      <div className="flex-col justify-center items-center gap-1">
        <span className="">Issuance</span>
        <br />
        <p>Amount <span className="text-[#979797] italic "> (000s)</span></p>

      </div>
    ),
  },

  {
    accessorKey: "interestRate",
    header: () => (
      <div className="flex-col justify-center items-center gap-1">
        <span className="">Interest</span>
        <br />
        <p>Rate <span className="text-[#979797] italic "> (p.a)</span></p>

      </div>
    ),
  },
  {
    accessorKey: "issuanceDate",
    header: "Issuance Date",
  },
  {
    accessorKey: "tenor",
    header: "Tenor",
  },
  {
    accessorKey: "timeLeft",
    header: "Time Left",
    cell: ({ row }) => {
      const value = row.original.timeLeft;
      const isDayBased = value.includes("d");
      const textClass = isDayBased ? "" : "text-red-400 font-semibold";
      return <span className={textClass}>{value}</span>;
    },
  },
  {
    accessorKey: "currency",
    header: "Currency",
    cell: ({ row }) => {
      const currency = row.original.currency;
      const currencyIcons = {
        USDA: "/assets/icons/usd.svg",
        GBPA: "/assets/icons/gbpa.svg",
        EURA: "/assets/icons/eura.svg",
        CHFA: "/assets/icons/chfa.svg",
      };

      const iconSrc = currencyIcons[currency] || null;

      return (
        <div className="flex items-center gap-1.5">
          {iconSrc && (
            <Image
              src={iconSrc}
              alt={currency}
              width={24}
              height={24}
              className="min-w-[24px]"
            />
          )}
          <span>{currency}</span>
        </div>
      );
    },
  }
  ,
  {
    accessorKey: "fillLevel",
    header: "Fill Level",
    cell: ({ row }) => {
      const value = row.original.fillLevel;

      const baseStyles =
        "w-[107px] h-[30px] flex items-center justify-center rounded text-[14px] font-bold rounded-[50px]";

      let bgColor = "";
      let textColor = "text-[#202020] text-sm text-bold";

      if (value === "CANCELED") {
        bgColor = "bg-red-500";
      } else if (value === "Send IOI") {
        bgColor = "bg-white";
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
  }

]

const data = [
  { issuer: "NeuroSync Systems", creditInfo: "A2", issuanceAmount: "20,000", interestRate: "6.50%", issuanceDate: "10/6/2025", tenor: "30 Days", timeLeft: "0min 20sec", currency: "USDA", fillLevel: "90%" },
  { issuer: "Photonix Labs", creditInfo: "C1", issuanceAmount: "4,000", interestRate: "10%", issuanceDate: "10/6/2025", tenor: "60 Days", timeLeft: "3min 14sec", currency: "GBPA", fillLevel: "Send IOI" },
  { issuer: "QuantumEdge Analytics", creditInfo: "B2", issuanceAmount: "4,000", interestRate: "10%", issuanceDate: "10/6/2025", tenor: "60 Days", timeLeft: "3min 14sec", currency: "CHFA", fillLevel: "CANCELED" },
  { issuer: "QuantumEdge Analytics", creditInfo: "B2", issuanceAmount: "4,000", interestRate: "10%", issuanceDate: "10/6/2025", tenor: "60 Days", timeLeft: "1d 45min", currency: "EURA", fillLevel: "90%" },

]

export function ResetTable() {
  return (
    <div className="w-full mx-auto py-10 overflow-x-auto ">
      <DataTable columns={columns} data={data} />
    </div>
  )
}