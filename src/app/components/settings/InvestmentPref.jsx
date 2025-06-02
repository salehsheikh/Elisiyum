"use client"

import React, { useState } from "react";
import { DropDown } from "../DropDown";

const InvestmentPref = () => {
    const dropdownConfig = [
        {
            label: "Issuance Size",
            key: "issuanceSize",
            options: [
                { value: "small", label: "Under $1M" },
                { value: "medium", label: "$1M - $10M" },
                { value: "large", label: "Over $10M" },
            ],
        },
        {
            label: "Interest Rate",
            key: "interestRate",
            options: [
                { value: "low", label: "Below 5%" },
                { value: "medium", label: "5% - 10%" },
                { value: "high", label: "Above 10%" },
            ],
        },
        {
            label: "Industry Type",
            key: "industryType",
            options: [
                { value: "finance", label: "Finance" },
                { value: "tech", label: "Technology" },
                { value: "health", label: "Healthcare" },
            ],
        },
        {
            label: "Issuer Type",
            key: "issuerType",
            options: [
                { value: "gov", label: "Government" },
                { value: "corp", label: "Corporate" },
                { value: "ngo", label: "Non-Profit" },
            ],
        },
        {
            label: "Maturity Date",
            key: "maturityDate",
            options: [
                { value: "short", label: "Less than 1 Year" },
                { value: "medium", label: "1-5 Years" },
                { value: "long", label: "Over 5 Years" },
            ],
        },
    ];
    const getDefaultSelections = () => {
        const defaults = {};
        dropdownConfig.forEach(({ key, options }) => {
            defaults[key] = options[0]?.label || "Select";
        });
        return defaults;
    };

    const [selectedValues, setSelectedValues] = useState(getDefaultSelections());

    const handleSelect = (key, val) => {
        const selectedOption = dropdownConfig
            .find((config) => config.key === key)
            ?.options.find((option) => option.value === val);

        setSelectedValues((prev) => ({
            ...prev,
            [key]: selectedOption?.label || "Select",
        }));
    };

    return (
        <div
            className="mb-4 rounded-[20px] overflow-hidden backdrop-blur-[62px] px-4.5 py-5"
            style={{
                background: `
          linear-gradient(#1D2127, #1D2127) padding-box,
          linear-gradient(90deg, #69778D, #1D2127) border-box
        `,
                border: "1px solid transparent",
                borderRadius: "20px",
            }}
        >
            <div className="pb-5">
                <p className="text-lg font-medium text-white">Watchlist Customization</p>
            </div>

            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {dropdownConfig.map(({ label, key, options }) => (
                        <div key={key} className="space-y-2">
                            <label className="block text-sm font-medium text-white">
                                {label}
                            </label>
                            <DropDown
                                options={options}
                                useMinHeight={false}
                                setPosition={false}
                                onSelect={(val) => handleSelect(key, val)}
                            >
                                {selectedValues[key] || "Select"}
                            </DropDown>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InvestmentPref;
