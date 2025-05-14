"use client"
import Image from "next/image";
import { DataTable } from "./DataTable"
const columns = [
     {
    accessorKey: "issuer",
    header: "Issuer",
  },
     {
    accessorKey: "product",
    header: "Product",
  },
 {
  accessorKey: "type",
  header: "Type"
  
},
 {
  accessorKey: "status",
  header: "Status"
  
},
 {
  accessorKey: "yields",
  header: "Yield"
  
},
 {
  accessorKey: "buy",
  header: "Buy Order",
  cell: ({ row }) => {
    const value = row.original.buy;

    const baseStyles =
      "w-[107px] h-[30px] bg-green-500 flex items-center text-black justify-center rounded text-[14px] font-bold rounded-[50px]";


    return (
      <div className={`${baseStyles}  flex-shrink-0`}>
        {value}
      </div>
    );
  },
},
 {
  accessorKey: "sell",
  header: "Sell Order",
  cell: ({ row }) => {
    const value = row.original.sell;

    const baseStyles =
      "w-[107px] h-[30px] bg-[#FF3B30] flex items-center text-black justify-center rounded text-[14px] font-bold rounded-[50px]";


    return (
      <div className={`${baseStyles}  flex-shrink-0`}>
        {value}
      </div>
    );
  },
},
{
  accessorKey: "chain",
  header: "Chain",
  cell: ({ row }) => {
    const chain = row.original.chain;
    const chainIcons = {
      USDA: "/assets/icons/usd.svg",
      GBPA: "/assets/icons/gbpa.svg",
      EURA: "/assets/icons/eura.svg",
      CHFA: "/assets/icons/chfa.svg",
      Astra:"/assets/icons/astr.svg",
      Polygon:"/assets/icons/polygon.svg"
    };

    const iconSrc = chainIcons[chain] || null;

    return (
      <div className="flex items-center gap-1.5">
        {iconSrc && (
          <Image
            src={iconSrc}
            alt={chain}
            width={24}
            height={24}
            className="min-w-[24px]"
          />
        )}
        <span>{chain}</span>
      </div>
    );
  },
}



]

const data = [
      { issuer: "Jacobi Asset Management ", product: "Jacobi FT Wilshire BTC ETF", type: "ETF" ,status:"Live",yields:"0%",buy:"Buy",sell:"Sell",chain:"Astra",},
     { issuer: "My ProperTree ", product: "Commercial dev. Site Bridging", type: "Real Estate" ,status:"Live",yields:"11%",buy:"Buy",sell:"Sell",chain:"Polygon",},

  { issuer: "Jacobi Asset Management ", product: "Jacobi FT Wilshire BTC ETF", type: "ETF" ,status:"Live",yields:"0%",buy:"Buy",sell:"Sell",chain:"USDA",},
 { issuer: "Jacobi Asset Management ", product: "Mixed Use Reconversion Grade 2", type: "ETF" ,status:"Live",yields:"0%",buy:"Buy",sell:"Sell",chain:"GBPA",},
     { issuer: "Jacobi Asset Management ", product: "BRR type 1 Standard Loan", type: "ETF" ,status:"Live",yields:"0%",buy:"Buy",sell:"Sell",chain:"EURA",},

  { issuer: "Jacobi Asset Management ", product: "Jacobi FT Wilshire BTC ETF", type: "ETF" ,status:"Live",yields:"0%",buy:"Buy",sell:"Sell",chain:"CHFA",},
 
]

export function OtherTable() {
  return (
    <div className="w-full mx-auto py-10 ">
      <DataTable columns={columns} data={data} />
    </div>
  )
}