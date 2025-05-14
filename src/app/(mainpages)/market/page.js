'use client';
import React, { useState } from 'react';
import { ResetTable } from "../../components/market/ResetTable";
import { DropDown } from '@/app/components/market/DropDown';
import { OtherTable } from '@/app/components/market/OtherTable';

const dropdownConfig = [
  { label: "Issuer Name" },
  { label: "Product" },
  { label: "Type" },
  { label: "Status" },
  { label: "Yield" },
  { label: "Currency" },
  { label: "Collateral" },
  { label: "Issuer Elysium Status" },
  { label: "Investor Level" },
  { label: "Issuer Country" },
];

const Market = () => {
  const [showResetTable, setShowResetTable] = useState(true);

  const toggleTable = () => {
    setShowResetTable(prev => !prev);
  };

  return (
    <>
      <div className=" block sm:flex justify-start items-center gap-2 px-4">
        <div className="py-4">
          <button className="text-[15px] w-[110px] h-10 px-4 font-semibold text-black bg-[#FFCE40] rounded-[500px]">
            Reset
          </button>
        </div>

        <div
          onClick={toggleTable}
          className="relative bg-[#FFFFFF33] rounded-[500px] h-[40px] px-4 inline-flex items-center justify-between gap-4 cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <span className="text-white text-[16px] font-semibold whitespace-nowrap">
              Product Page: Fixed Income
            </span>
          </div>

          <div className="flex items-center justify-center h-full">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-white/80"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-[11px] overflow-x-auto">
          {dropdownConfig.map((item, index) => (
            <DropDown key={index} label="All">
              {item.label}
            </DropDown>
          ))}
        </div>

        {/* Toggle table display */}
        {showResetTable ? <ResetTable /> : <OtherTable />}
      </div>
    </>
  );
};

export default Market;
