'use client';
import React, { useState } from 'react';
import { ResetTable } from "../../components/market/ResetTable";
import { DropDown } from '@/app/components/market/DropDown';
import { OtherTable } from '@/app/components/market/OtherTable';

const dropdownConfig = [
  { 
    label: "Issuer Name",
    options: [
      { label: "All", value: "all" },
      { label: "Apple Inc", value: "AAPL" },
      { label: "Tesla Motors", value: "TSLA" },
      { label: "Saudi Aramco", value: "2222" },
    ]
  },
  { 
    label: "Product",
    options: [
      { label: "All", value: "all" },
      { label: "Corporate Bonds", value: "bonds" },
      { label: "Commercial Paper", value: "paper" },
    ]
  },
  { 
    label: "Type",
    options: [
      { label: "All", value: "all" },
      { label: "Fixed Rate", value: "fixed" },
      { label: "Floating Rate", value: "floating" },
    ]
  },
  { 
    label: "Status",
    options: [
      { label: "All", value: "all" },
      { label: "Active", value: "active" },
      { label: "Upcoming", value: "upcoming" },
    ]
  },
  { 
    label: "Yield",
    options: [
      { label: "All", value: "all" },
      { label: "0-2%", value: "0-2" },
      { label: "2-5%", value: "2-5" },
    ]
  },
  { 
    label: "Currency",
    options: [
      { label: "All", value: "all" },
      { label: "USD", value: "USD" },
      { label: "EUR", value: "EUR" },
    ]
  },
  { 
    label: "Collateral",
    options: [
      { label: "All", value: "all" },
      { label: "Secured", value: "secured" },
      { label: "Unsecured", value: "unsecured" },
    ]
  },
  { 
    label: "Issuer Elysium Status",
    options: [
      { label: "All", value: "all" },
      { label: "Verified", value: "verified" },
      { label: "Pending", value: "pending" },
    ]
  },
  { 
    label: "Investor Level",
    options: [
      { label: "All", value: "all" },
      { label: "Institutional", value: "institutional" },
      { label: "Accredited", value: "accredited" },
    ]
  },
  { 
    label: "Issuer Country",
    options: [
      { label: "All", value: "all" },
      { label: "USA", value: "US" },
      { label: "Saudi Arabia", value: "SA" },
    ]
  },
];
const Market = () => {
  const [showResetTable, setShowResetTable] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [productOptionsOpen, setProductOptionsOpen] = useState(false);

  const handleFilterSelect = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));

    if (filterType === "Product Page") {
      toggleTable(); // Toggle table only for Product Page filter
      setProductOptionsOpen(false); // Close dropdown after selection
    }
  };

  const toggleTable = () => {
    setShowResetTable(prev => !prev);
  };

  const productOptions = [
    { label: "Fixed Income", value: "Fixed Income" },
    { label: "Others", value: "Others" },
  ];

  return (
    <div className='mx-auto'>
      <div className="block sm:flex justify-start items-center gap-2 px-4">
        <div className="py-4">
          <button
            className="text-[15px] cursor-pointer w-[110px] h-10 px-4 font-semibold text-black bg-[#FFCE40] rounded-[500px]"
          >
            Reset
          </button>
        </div>

        <div className="relative bg-[#FFFFFF33] rounded-[500px] h-[40px] px-4 inline-flex items-center justify-between gap-4 cursor-pointer">
          <div className="flex items-center gap-2">
            <span className="text-white text-[16px] font-semibold whitespace-nowrap">
              Product Page: {selectedFilters["Product Page"] || "Fixed Income"}
            </span>
          </div>
          <div className="flex items-center justify-center h-full" onClick={() => setProductOptionsOpen(prev => !prev)}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-white/80 cursor-pointer"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>

          {productOptionsOpen && (
            <ul className="absolute top-full left-0 mt-2 w-full bg-[#2D2F36] rounded-[10px] shadow-lg z-50">
              {productOptions.map((option, idx) => (
                <li
                  key={idx}
                  onClick={() => handleFilterSelect("Product Page", option.value)}
                  className="px-4 py-2 hover:bg-[#FFFFFF1A] cursor-pointer text-white text-sm"
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="p-4 relative">
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-[11px] overflow-x-visible">
          {dropdownConfig.map((item, index) => (
            <DropDown
              key={index}
              label={selectedFilters[item.label] || "All"}
              options={item.options}
              onSelect={(value) => handleFilterSelect(item.label, value)}
            >
              {item.label}
            </DropDown>
          ))}
        </div>

        {showResetTable ? (
          <ResetTable filters={selectedFilters} />
        ) : (
          <OtherTable filters={selectedFilters} />
        )}
      </div>
    </div>
  );
};


export default Market;