import Image from 'next/image'
import React from 'react'

const EliteBar = () => {
    return (
        <div className='flex flex-wrap gap-1'>
            <div className='h-[39px] rounded-[167px] bg-[#1D2127B2] border border-[#FFCE40] flex justify-between items-center flex-1 '>
                <div className='h-full bg-[#FFCE40] rounded-[500px] w-1/2' >

                </div>
                <div><p className='text-[#A4821F] italic text-[20px] font-bold pr-3'> Elite </p></div>

            </div>

            <div className='flex justify-between gap-1'>
                <div className='w-[143px] h-[39px] rounded-[20px] bg-[#1D2127B2] backdrop-blur-[33px] flex items-center justify-center '>
                    <p className='text-[#717579] font-light text-lg'> Qualified</p>
                    <Image src="/assets/icons/lock-states.svg" width={24} height={24} alt="lock" />
                </div>
                <div className='w-[143px] h-[39px] rounded-[20px] bg-[#1D2127B2] backdrop-blur-[33px] flex items-center justify-center '>
                    <p className='text-[#717579] font-light text-lg'>Veteran</p>
                    <Image src="/assets/icons/lock-states.svg" width={24} height={24} alt="lock" />
                </div>

            </div>
        </div>
    )
}

export default EliteBar

