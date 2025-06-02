"use client"
import React, { useState } from 'react'
const Notifications = () => {
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

                <p className='text-lg font-medium text-white'>Notifications</p>
            </div>

            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-white">Email Notifications</label>
                        <div className="w-full bg-[#FFFFFF33] flex justify-between items-center backdrop-blur-sm rounded-[10px] h-11 border border-gray-600 px-4 py-3 text-white">
                            <p>Email Notifications Enabled</p>
                            <div className="flex items-center space-x-2">
                                <div className="relative">
                                    <input
                                        id="customCheckbox"
                                        name="customCheckbox"
                                        type="checkbox"
                                        className="hidden peer"
                                    />
                                    <label
                                        htmlFor="customCheckbox"
                                        className="size-[21px]  !bg-[#FFFCF2] p-2 rounded cursor-pointer
                 flex items-center justify-center transition-all 
                  peer-checked:bg-[#FFFFFF33]!
                 peer-disabled:border-gray-400 peer-disabled:bg-gray-300 peer-disabled:cursor-not-allowed"
                                    >
                                        {/* Just a styled box */}
                                    </label>
                                    <svg
                                        className="w-4 h-4 text-white absolute top-[3px] left-[2px] opacity-0 scale-0 transition-all peer-checked:opacity-100 peer-checked:scale-100 pointer-events-none"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-white">Push Notifications</label>
                        <div className="w-full bg-[#FFFFFF33] flex justify-between items-center backdrop-blur-sm rounded-[10px] h-11 border border-gray-600 px-4 py-3 text-white">
                            <p>Push Notifications Enabled</p>
                            <div className="flex items-center space-x-2">
                                <div className="relative">
                                    <input
                                        id="customCheckbo"
                                        name="customCheckbo"
                                        type="checkbox"
                                        className="hidden peer"
                                    />
                                    <label
                                        htmlFor="customCheckbo"
                                        className="size-[21px]  !bg-[#FFFCF2] p-2 rounded cursor-pointer
                 flex items-center justify-center transition-all 
                  peer-checked:bg-[#FFFFFF33]!
                 peer-disabled:border-gray-400 peer-disabled:bg-gray-300 peer-disabled:cursor-not-allowed"
                                    >
                                        {/* Just a styled box */}
                                    </label>
                                    <svg
                                        className="w-4 h-4 text-white absolute top-[3px] left-[2px] opacity-0 scale-0 transition-all peer-checked:opacity-100 peer-checked:scale-100 pointer-events-none"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-white">SMS Notifications</label>
                        <div className="w-full bg-[#FFFFFF33] flex justify-between items-center backdrop-blur-sm rounded-[10px] h-11 border border-gray-600 px-4 py-3 text-white">
                            <p>SMS Notifications Enabled</p>
                            <div className="flex items-center space-x-2">
                                <div className="relative">
                                    <input
                                        id="customCheck"
                                        name="customCheck"
                                        type="checkbox"
                                        className="hidden peer"
                                    />
                                    <label
                                        htmlFor="customCheck"
                                        className="size-[21px]  !bg-[#FFFCF2] p-2 rounded cursor-pointer
                 flex items-center justify-center transition-all 
                  peer-checked:bg-[#FFFFFF33]!
                 peer-disabled:border-gray-400 peer-disabled:bg-gray-300 peer-disabled:cursor-not-allowed"
                                    >
                                        {/* Just a styled box */}
                                    </label>
                                    <svg
                                        className="w-4 h-4 text-white absolute top-[3px] left-[2px] opacity-0 scale-0 transition-all peer-checked:opacity-100 peer-checked:scale-100 pointer-events-none"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Notifications
