import Image from 'next/image'
import React from 'react'

const Achivements = () => {
    return (
        <div className="relative p-px  rounded-[20px] bg-gradient-to-b from-[#69778D] to-[#1D2127] h-96 ">
            <div className='h-96 px-5 py-2.5 bg-[#1D2127B2] backdrop-blur-[32px] rounded-[20px]'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-white text-[20px] font-medium'>Unlocked & Achievements </p>
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
                <div className='text-lg text-white flex flex-col gap-12 items-start pt-[57px]'>
                    <p>Commercial Papers Unsecured (lvl. 80)</p>
                    <p>Commercial Papers Secured (lvl. 80)</p>
                    <p className='text-[#FFCE40]'>Structured Debt Notes Grade D (lvl. 70)</p>
                </div>
            </div>
        </div>
    )
}

export default Achivements
