
import { CircleHelp } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Progress = () => {
    return (
        <>
            <div className='border border-[#66666600] p-3 rounded-[10px] w-[231px] h-[69px] bg-[#1D2127B2] flex flex-col mb-1.5'>
                <div className='flex justify-between gap-1'>
                    <p className='text-[16px] text-white'>Qualification Progress</p>
                    <CircleHelp className='w-5 h-5 text-[#717579]' />
                </div>
                <p className='text-[#FFCE40] font-bold text-[20px]'>92.5%</p>

            </div>
            <div className='border border-[#66666600] p-3 w-[231px] rounded-[10px] h-[69px] mb-1.5 bg-[#1D2127B2] flex flex-col '>
                <div className='flex justify-between gap-1'>
                    <p className='text-[16px] text-white'>Accademy Completion</p>
                    <CircleHelp className='w-5 h-5 text-[#717579]' />
                </div>
                <p className='text-[#FFCE40] font-bold text-[20px]'>81%</p>

            </div>
            <div className='border border-[#66666600] p-3 w-[231px] rounded-[10px] h-[69px]  mb-1.5 bg-[#1D2127B2] flex flex-col '>
                <div className='flex justify-between gap-1'>
                    <p className='text-[16px] text-white'>Point To Next Level </p>
                    <CircleHelp className='w-5 h-5 text-[#717579]' />
                </div>
                <p className='text-[#FFCE40] font-bold text-[20px]'>524pts</p>

            </div>
        </>

    )
}

export default Progress
