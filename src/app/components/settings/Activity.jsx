"use client"

import React, { useState } from 'react'
import Image from 'next/image'

const Activity = () => {
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

                <p className='text-lg font-medium text-white'>Activity Status</p>
            </div>

            <div className='h-15 shrink-0 rounded-[10px] bg-[#FFFFFF33] p-[13px] flex justify-between items-center '>
                <div className='flex gap-[9px]'>
                    <Image width={34} height={34} src="/assets/icons/chrome.svg" alt='chrome' />
                    <div className='text-white text-sm  flex flex-col gap-[2px]'>
                        <p>Google Chrome (Windows)</p>
                        <p className='text-xs text-[#FFCE40]'>Last active today at 2:44pm</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <input
                            id="chk"
                            name="chk"
                            type="checkbox"
                            className="hidden peer"
                        />
                        <label
                            htmlFor="chk"
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
            <div className='h-[47px] rounded-[10px] flex justify-center items-center bg-[#006EFF] mt-2.5'>
                <p className='text-sm font-medium text-white'>Logout Selected Accounts</p>
            </div>
        </div>
    )
}

export default Activity
