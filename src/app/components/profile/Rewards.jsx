
import Image from 'next/image'
import React from 'react'

const Rewards = () => {
    return (
        <div className="relative p-px  rounded-[20px] bg-gradient-to-b from-[#69778D] to-[#1D2127] h-96 ">
            <div className='h-96 px-5 py-2.5 bg-[#1D2127B2] backdrop-blur-[32px] rounded-[20px]'>

                <div className='flex justify-between'>
                    <div>
                        <p className='text-white text-[20px] font-medium'>Rewards </p>
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
                <div className='flex justify-end items-center gap-1 p-4'>
                    <div className=' accent-green-800 rouded-md'>
                        <input type='checkbox' className='w-6.5 h-6.5' />
                    </div>
                    <p className='text-lg text-white'>Auto-Claim Rewards</p>
                </div>
                <div className='flex justify-between border-b-1 border-[#717579] pb-2'>
                    <div className='flex shrink-0 gap-1'>
                        <Image width={25} height={25} src="/assets/images/token.png" alt="reward" className='shrink-0' />
                        <p className='text-lg text-[#FFCE40] font-medium'>30</p>
                    </div>
                    <div className='flex shrink-0 gap-1'>
                        <Image width={25} height={25} src="/assets/icons/USDC 1.svg" alt="reward" className='shrink-0' />
                        <p className='text-lg text-[#FFCE40] font-medium'>30</p>
                    </div>
                    <div className='w-[153px] h-[33px] flex items-center justify-center rounded-[500px] bg-green-900'>
                        <p className='text-lg text-white font-medium' >Claim Rewards</p>
                    </div>
                </div>
                <div className='flex justify-between border-b-1 border-[#717579] py-4'>
                    <div >
                        <p className='text-lg text-[#FFCE40] font-medium'>+100pts</p>
                    </div>
                    <div className='w-[153px] h-[33px] flex items-center justify-center rounded-[500px] bg-green-900'>
                        <p className='text-lg text-white font-medium' >Claim Rewards</p>
                    </div>
                </div>

                <div className='flex justify-between border-b-1 border-[#717579] py-4'>
                    <div >
                        <p className='text-lg text-white font-medium'>+30pts</p>
                    </div>
                    <div className='flex shrink-0 gap-1'>
                        <Image width={25} height={25} src="/assets/icons/USDC 1.svg" alt="reward" className='shrink-0' />
                        <p className='text-lg text-white font-medium'>5</p>
                    </div>
                    <div className='w-[153px] h-[33px] flex items-center justify-center rounded-[500px] bg-[#717579]'>
                        <p className='text-lg text-white font-medium' >Claim Rewards</p>
                    </div>
                </div>

                <div className='flex justify-between border-b-1 border-[#717579] py-4'>
                    <div >
                        <p className='text-lg text-white font-medium'>+20pts</p>
                    </div>
                    <div className='w-[153px] h-[33px] flex items-center justify-center rounded-[500px] bg-[#717579]'>
                        <p className='text-lg text-white font-medium' >Claim Rewards</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Rewards
