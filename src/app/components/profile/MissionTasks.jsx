import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MissionTasks = () => {
    return (
        <div className="relative p-px  rounded-[20px] bg-gradient-to-b from-[#69778D] to-[#1D2127] h-96 ">
            <div className='h-96 px-5 py-2.5 bg-[#1D2127B2] backdrop-blur-[32px] rounded-[20px] overflow-y-auto'>

                <div className='flex justify-between'>
                    <div>
                        <p className='text-white text-[20px] font-medium'>Mission & Tasks </p>
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
                <div className='flex justify-end gap-1'>
                    <p className='text-white text-lg '>Show All Missions</p>
                    <ChevronDown className='text-white w-6 h-10 text-lg' />
                </div>
                <div className='flex justify-between border-b-1 border-[#717579] pb-4'>
                    <div>
                        <p className='text-[#FFCE40] text-lg'>
                            Refer Elysium to 3 friends
                        </p>
                    </div>
                    <div className='text-lg flex gap-1 justify-end font-medium'>
                        <p className='text-[#FFCE40]'>3 <span className='text-white'>/3</span></p>
                        <button className='w-[123px] h-[33px] bg-[#006EFF] rounded-[500px] text-white'>Go To</button>
                    </div>
                </div>

                <div className='flex justify-between border-b-1 border-[#717579] py-4'>
                    <div>
                        <p className='text-[#FFCE40] text-lg'>
                            Invest $10,000 in Structured Debt Notes Grade D
                        </p>
                    </div>
                    <div className='text-lg flex gap-1 justify-end font-medium '>
                        <p className='text-[#FFCE40]'>$10,000 <span className='text-white'>/$10,000</span></p>
                        <button className='w-[123px] h-[33px] bg-[#006EFF] rounded-[500px] text-white'>Go To</button>
                    </div>
                </div>
                <div className='flex justify-between border-b-1 border-[#717579] py-4'>
                    <div>
                        <p className='text-white text-lg'>
                            Complete the ETF Investment section on Elysium Academy
                        </p>
                    </div>
                    <div className='text-lg flex gap-1 justify-end font-medium'>
                        <p className='text-[#A9A9A9]'>Incomplete</p>
                        <button className='w-[123px] h-[33px] bg-[#006EFF] rounded-[500px] text-white'>Go To</button>
                    </div>
                </div>
                <div className='flex justify-between border-b-1 border-[#717579] py-4'>
                    <div>
                        <p className='text-white text-lg'>
                            Complete $2,000 in ASTRA redemption
                        </p>
                    </div>
                    <div className='text-lg flex gap-1 justify-end font-medium'>
                        <p className='text-white'>$5,00 <span className='text-[#A9A9A9]'>/$2,000</span></p>
                        <button className='w-[123px] h-[33px] bg-[#006EFF] rounded-[500px] text-white'>Go To</button>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default MissionTasks