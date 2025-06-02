"use client"

import React, { useState } from 'react'
import { DropDown } from '../DropDown'

const CurrencySection = () => {
    const [selected, setSelected] = useState("USD");

    const options = [
        { value: "usd", label: "USD", },
        { value: "eura", label: "EURA", },
        { value: "gbpa", label: "GBPA", },
        { value: "chf", label: "CHF", },

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

                <p className='text-lg font-medium text-white'> Default Currency</p>
            </div>

            <div className="space-y-6">

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">Preferred Currency</label>
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
    )
}

export default CurrencySection
