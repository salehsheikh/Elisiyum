import Image from 'next/image'
import React from 'react'
import { Icon } from "@iconify/react";
const LastSection = () => {
    return (
        <div className='flex flex-col md:flex-row gap-[13px] '>
            <div
                className="mb-4 rounded-[20px] overflow-hidden backdrop-blur-[62px] p-4 w-full"
                style={{
                    background: `
              linear-gradient(#1D2127, #1D2127) padding-box,
              linear-gradient(90deg, #69778D, #1D2127) border-box
            `,
                    border: "1px solid transparent",
                    borderRadius: "20px"
                }}
            >
                <div className='rounded-[10px] shrink-0 relative '>
                    <Image src="/assets/images/supvideo.svg" alt="video"
                        width={375}
                        height={252}
                        className='max-w-full w-full' />
                </div>
                <p className='absolute bottom-6 text-white px-4 leading-5 text-sm'>Learn how to set up and manage upcoming issuances, schedule alerts, and activate the RFF timer for
                    investor engagement</p>
                {/* Centered Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#3B82F6] rounded-full p-3 flex items-center justify-center">
                        <Icon
                            icon="solar:play-bold"
                            className="text-white"
                            width={15}
                            height={15}
                        />
                    </div>
                </div>
            </div>
            <div
                className="mb-4 rounded-[20px] overflow-hidden backdrop-blur-[62px] p-4 w-full"
                style={{
                    background: `
              linear-gradient(#1D2127, #1D2127) padding-box,
              linear-gradient(90deg, #69778D, #1D2127) border-box
            `,
                    border: "1px solid transparent",
                    borderRadius: "20px"
                }}
            >
                <div className='rounded-[10px] shrink-0 relative'>
                    <Image src="/assets/images/supvideo2.png" alt="video"
                        width={375}
                        height={252}
                        className='max-w-full w-full' />
                </div>
                <p className='absolute bottom-6 text-white !px-2 leading-5 text-sm'>A guide to earning points, leveling up, and improving company status through profile completion, debt repayment, and advanced features</p>
                {/* Centered Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#3B82F6] rounded-full p-3 flex items-center justify-center">
                        <Icon
                            icon="solar:play-bold"
                            className="text-white"
                            width={15}
                            height={15}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastSection
