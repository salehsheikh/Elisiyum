"use client";
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Page = () => {
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const fromDropdownRef=useRef(null);
  const toDropdownref=useRef(null);
  const [selectedFromCurrency, setSelectedFromCurrency] = useState('GBPA');
  const [selectedToCurrency, setSelectedToCurrency] = useState('USDA');
  const currencies = ['GBPA', 'USDA', 'EURA','CHFA'];

  const iconMap = {
    GBPA: '/assets/icons/gbpa.svg',
    USDA: '/assets/icons/usd.svg',
    EURA: '/assets/icons/eura.svg',
    CHFA: '/assets/icons/chfa.svg'
  };

  const handleFromSelect = (currency) => {
    setSelectedFromCurrency(currency);
    setShowFromDropdown(false);
  };

  const handleToSelect = (currency) => {
    setSelectedToCurrency(currency);
    setShowToDropdown(false);
  };

useEffect(()=>{
    const handleClickOutside=(event)=>{
        if(fromDropdownRef.current && 
            !fromDropdownRef.current.contains(event.target)
        ){
            setShowFromDropdown(false);
        }
        if(toDropdownref.current && 
            !toDropdownref.current.contains(event.target)
        )
        {
            setShowToDropdown(false);
        }
    };
    document.addEventListener('mousedown',handleClickOutside);
    return ()=>document.removeEventListener('mousedown',handleClickOutside);
},[]);
  return (
    <div className="text-white items-center flex flex-col justify-center mt-20 space-y-12 pb-8 px-2">
      <p className="text-[#CED2DA] text-sm text-center">
        Elysium Exchange is a streamlined platform for issuers and investors to trade in debt and equity markets. It offers
        <br className="hidden md:block" />
        real-time data, secure transactions, and user-friendly tools for efficient capital raising and investment opportunities.
      </p>

      {/* FROM SECTION */}
      <div className="relative rounded-[19px] bg-[#1D2127B2] justify-center space-y-4 p-4 max-w-[516px] w-full border h-auto"
        style={{ borderColor: 'rgba(102, 102, 102, 0.2)' }}
      >
        <div className="text-sm flex justify-between">
          <p className="font-bold">From</p>
          <p className="font-medium">Balance : 0 {selectedFromCurrency}</p>
        </div>

        <div className="font-medium text-[16px] flex justify-between items-center">
          <p>0.01 - 1400000</p>

          <div className="relative " ref={fromDropdownRef}>
            <div
              className="flex items-center gap-1.5 text-[#FFCE40] cursor-pointer"
              onClick={() => setShowFromDropdown(!showFromDropdown)}
            >
              <Image
                src={iconMap[selectedFromCurrency]}
                alt={`${selectedFromCurrency} Icon`}
                width={16}
                height={16}
                className="object-contain"
              />
              <span>{selectedFromCurrency}</span>
              <ChevronDown size={18} className="text-lg text-white" />
            </div>

            {showFromDropdown && (
              <ul className="absolute -right-4 top-[100%] mt-2 w-[120px] bg-[#2A2E35] border border-[#444] rounded-md shadow z-10">
                {currencies.map((currency) => (
                  <li
                    key={currency}
                    onClick={() => handleFromSelect(currency)}
                    className="px-4 py-2 hover:bg-[#3A3F47] cursor-pointer text-white text-sm"
                  >
                    {currency}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="text-sm text-[#5E6673]">
          <p>≈$0.00</p>
        </div>
      </div>

      {/* EXCHANGE ICON */}
      <div className="size-11.5 flex justify-center items-center rounded-full">
        <Image
          src="/assets/icons/exchanges.png"
          alt="Exchange Icon"
          width={46}
          height={46}
          className="object-contain"
        />
      </div>

      {/* TO SECTION */}
      <div className="relative rounded-[19px] bg-[#1D2127B2] justify-center space-y-4 p-4 max-w-[516px] w-full border h-auto"
        style={{ borderColor: 'rgba(102, 102, 102, 0.2)' }}
      >
        <div className="text-sm flex justify-between">
          <p className="font-bold">To</p>
          <p className="font-medium">Balance : 0 {selectedToCurrency}</p>
        </div>

        <div className="font-medium text-[16px] flex justify-between items-center">
          <p>0.000058 - 8200</p>

          <div className="relative " ref={toDropdownref}>
            <div
              className="flex items-center gap-1.5 text-[#FFCE40] cursor-pointer"
              onClick={() => setShowToDropdown(!showToDropdown)}
            >
              <Image
                src={iconMap[selectedToCurrency]}
                alt={`${selectedToCurrency} Icon`}
                width={16}
                height={16}
                className="object-contain"
              />
              <span>{selectedToCurrency}</span>
              <ChevronDown size={18} className="text-lg text-white" />
            </div>

            {showToDropdown && (
              <ul className="absolute -right-4 top-[100%] mt-2 w-[120px] bg-[#2A2E35] border border-[#444] rounded-md shadow z-10">
                {currencies.map((currency) => (
                  <li
                    key={currency}
                    onClick={() => handleToSelect(currency)}
                    className="px-4 py-2 hover:bg-[#3A3F47] cursor-pointer text-white text-sm"
                  >
                    {currency}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="text-sm text-[#5E6673]">
          <p>≈$0.00</p>
        </div>
      </div>

      {/* BUTTON */}
      <div className="text-black text-[15px] font-semibold h-10 flex justify-between items-center max-w-[516px] w-full">
        <button className="rounded-[40px] bg-[#FFCE40] w-full h-full">
          Enter an amount
        </button>
      </div>

      {/* CONVERSION RATE */}
      <div className="text-sm text-[#989898] flex justify-between items-center max-w-[516px] w-full">
        <p>1 USDA = 0.03546566655 Astra ($1.00)</p>

        <div className="flex items-center gap-1.5 text-[#FFCE40]">
          <Image
            src="/assets/icons/gasstation.svg"
            alt="Gas Station Icon"
            width={18}
            height={18}
            className="object-contain"
          />
          <span>$6.64</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
