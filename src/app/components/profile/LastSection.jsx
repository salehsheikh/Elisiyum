import React from 'react'
import RadarChart from './RadarChart'
import Progress from './Progress'
import Image from 'next/image'

const LastSection = () => {
    return (
        <div className="relative p-px  rounded-[20px] bg-gradient-to-b from-[#69778D] to-[#1D2127] md:h-96 h-full ">
            <div className='md:h-96 h-full px-5 py-2.5 bg-[#1D2127B2] backdrop-blur-[32px] rounded-[20px]'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-white text-[20px] font-medium'>Progression & Knowledge</p>
                    </div>
                    <div className='flex gap-1'>
                        <Image
                            src="/assets/icons/maximize.svg"
                            alt="Maximize"
                            width={18}
                            height={18}
                            className="cursor-pointer"
                        />
                        <Image
                            src="/assets/icons/dots.svg"
                            alt="Maximize"
                            width={24}
                            height={24}
                            className="cursor-pointer"
                        />
                    </div>

                </div>
                <div className='flex flex-col md:justify-between !justify-center !items-center md:flex-row !py-4 space-y-8 space-x-8'>
                    <div>
                        <RadarChart
                            series={[{ name: 'Assets', data: [75, 45, 85, 60, 55, 70] }]}
                        />
                    </div>
                    <div>
                        <Progress />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastSection
