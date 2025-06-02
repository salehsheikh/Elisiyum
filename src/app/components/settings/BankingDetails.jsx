"use client"

import React, { useState } from 'react'
import { DropDown } from '../DropDown'

const BankingDetails = () => {
    const [selected, setSelected] = useState("Cheking");

    const options = [
        { value: "checking", label: "Cheking", },
        { value: "online", label: "Online", },

    ];
    return (
        <div
            className="mb-4 rounded-[20px] overflow-hidden backdrop-blur-[62px] px-4.5 py-5 "
            style={{
                background: `
              linear-gradient(#1D2127, #1D2127) padding-box,
              linear-gradient(90deg, #69778D, #1D2127) border-box
            `,
                border: "1px solid transparent",
                borderRadius: "20px"
            }}
        >
            <div className='pb-5'>

                <p className='text-lg font-medium text-white'> Banking Details</p>
            </div>

            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-white">Bank Name</label>
                        <div className="w-full bg-[#FFFFFF33] flex items-center backdrop-blur-sm rounded-[10px] h-11 border border-gray-600 px-4 py-3 text-white">
                            Bank Xyz
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-white">Account Holder Name</label>
                        <div className="w-full bg-[#FFFFFF33] flex items-center backdrop-blur-sm rounded-[10px] h-11 border border-gray-600 px-4 py-3 text-white">
                            Elysium Motors
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-white">Account Number</label>
                        <div className="w-full bg-[#FFFFFF33] flex items-center backdrop-blur-sm rounded-[10px] h-11 border border-gray-600 px-4 py-3 text-white">
                            12345678
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-white">Account Type</label>

                        <DropDown

                            options={options}
                            useMinHeight={false}
                            textSize={false}
                            setPosition={false}
                            onSelect={(val) => {
                                const selectedOption = options.find((o) => o.value === val);
                                setSelected(selectedOption?.label || "Select");
                            }}
                        >
                            {selected}
                        </DropDown>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default BankingDetails
