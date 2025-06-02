"use client"
import { Icon } from '@iconify/react'
import Image from 'next/image'
import React, { useState } from 'react'
import { DropDown } from '../DropDown'

const AccountSetting = () => {
    const [selected, setSelected] = useState("United States");

    const options = [
        { value: "usa", label: "United States", },
        { value: "uae", label: "UAE", },
        { value: "france", label: "France" },
        { value: "pakistan", label: "Pakistan", },
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
            <div className='flex justify-between pb-5'>

                <p className='text-lg font-medium text-white'> Profile Information</p>
                <Icon icon="line-md:edit" width="24" height="24" className='text-white' />
            </div>
            <div className='flex justify-between pb-4'>
                <div>
                    <Image
                        src="/assets/images/avatar.svg"
                        alt="User avatar"
                        width={70}
                        height={70}
                        className="rounded-full object-cover w-17.5 h-17.5 "
                    />
                </div>
                <div className='flex gap-2.5'>
                    <div className='border-[2px] border-[#F00] py-2 px-4 h-10 text-[#F00] flex items-center justify-center rounded-[5px] '>
                        <Icon icon="tabler:trash" width="20" height="20" />
                    </div>
                    <div className='bg-[#FFCE40] text-black py-2 px-4 h-10 flex items-center justify-center gap-[2px]  rounded-[5px]'>
                        <Icon icon="mynaui:upload" width="20" height="20" />
                        <p className='text-[16px] font-semibold leading-6'>Upload</p>

                    </div>
                </div>
            </div>
            {/* form */}
            <div className="space-y-6">
                {/* Row 1: Name and Username */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-white">Name</label>
                        <div className="w-full bg-[#FFFFFF33] flex items-center backdrop-blur-sm rounded-[10px] h-11 border border-gray-600 px-4 py-3 text-white">
                            Credit Invest ABC
                        </div>
                    </div>

                    {/* Username */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-white">Username</label>
                        <div className="w-full bg-[#FFFFFF33] flex items-center backdrop-blur-sm rounded-[10px] h-11 border border-gray-600 px-4 py-3 text-white">
                            Credit_Invest ABC1254
                        </div>
                    </div>
                </div>

                {/* Row 2: Email and Phone Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-white">Email</label>
                        <div className="w-full bg-[#FFFFFF33] flex items-center backdrop-blur-sm rounded-[10px] h-11 border border-gray-600 px-4 py-3 text-white">
                            your.email@example.com
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-white">Phone Number</label>
                        <div className="w-full bg-[#FFFFFF33] flex items-center backdrop-blur-sm rounded-[10px] h-11 border border-gray-600 px-4 py-3 text-white">
                            +1 (555) 123-4567
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">Time Zone</label>

                    <DropDown

                        options={options}
                        useMinHeight={false}
                        setPosition={false}
                        textSize={false}
                        onSelect={(val) => {
                            const selectedOption = options.find((o) => o.value === val);
                            setSelected(selectedOption?.label || "Select");
                        }}
                    >
                        {selected}
                    </DropDown>
                </div>

                {/* btns */}
                <div className='flex flex-col gap-2.5 md:flex-row md:justify-between'>
                    <div>
                        <button style={{

                            backgroundImage: "url('/assets/images/starsgrd.png')"

                        }} className='text-sm font-medium text-white md:w-[310px] w-full h-10 border-[1.3px] border-[#006EFF] flex justify-center items-center shrink-0 rounded-[10px]'>
                            Discard Changes
                        </button>
                    </div>
                    <div>
                        <button className='text-sm font-medium text-white w-full md:w-[310px] h-10  bg-[#006EFF] flex justify-center items-center shrink-0 rounded-[10px]'>
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default AccountSetting
