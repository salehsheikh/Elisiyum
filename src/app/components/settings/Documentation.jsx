"use client"

import { Icon } from "@iconify/react"
import Image from "next/image"

const Documentation = () => {

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
            <div className='pb-5 flex justify-between'>
                <p className='text-lg font-medium text-white'> Documentation</p>
                <div className='py-2.5 px-3 gap-1 bg-[#006EFF1A] flex items-center rounded-[500px]'>
                    <div className='bg-[#006EFF] size-2 rounded-[500px]' />
                    <p className='text-white text-xs font-bold'>Status:</p>
                    <p className='text-[#006EFF] text-xs font-bold'>Completed</p>

                </div>
            </div>
            <div className='h-[87px] border border-dashed border-[#FFFFFF33] rounded-[10px] flex items-center justify-center'>
                <div className='w-[211px] h-10 py-1.5 px-2.5 text-black bg-[#FFCE40] rounded-[5px] gap-[2px] flex items-center justify-center'>
                    <Icon icon="mynaui:upload-solid" width="20" height="20" />
                    <p className=" text-[16px] font-semibold leading-6">Upload</p>
                </div>

            </div>
            <div className="pt-4 flex justify-center">
                <Image src="/assets/icons/roundedplus.svg" alt="plus" width={26} height={26} />
            </div>
            <div className=" text-center pt-[6px]">
                <p className="text-[#FFCE43] text-sm ">Add more</p>
            </div>


        </div>
    )
}

export default Documentation
