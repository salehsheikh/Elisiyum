import React from 'react'

const BalanceTable = () => {
    return (
        <div>
            <p className='text-[20px] font-semibold text-white pb-3'>Currency Balance</p>
            <div className='bg-[#1D2127B2] rounded-[20px] border border-[#69778D] p-5  backdrop-blur-[62px] h-55.5 '>
                <div className='text-xs font-medium text-[#FFCE40] flex justify-between pb-[18px] gap-9.5'>
                    <p>Currency Type</p>
                    <p>Position Value</p>
                </div>
                <div className='space-y-4 px-2'>
                    <div className='flex justify-between gap-[13px]'>
                        <div className='w-[59px] h-10  rounded-[8px] bg-[#1AA9F1] flex justify-center items-center'>
                            <p className='text-white font-bold text-xs'>EURA</p>
                        </div>
                        <div className='w-[158px] h-10  rounded-[8px] bg-[#323435]   border-[0.5px] border-[#FAFAFA] flex justify-center items-center'>
                            <p className='text-white font-bold text-xs'>$120,000</p>
                        </div>
                    </div>
                    <div className='flex justify-between gap-[13px]'>
                        <div className='w-[59px] h-10  rounded-[8px] bg-[#FFB922] flex justify-center items-center'>
                            <p className='text-white font-bold text-xs'>GBPA</p>
                        </div>
                        <div className='w-[158px] h-10  rounded-[8px] bg-[#323435]   border-[0.5px] border-[#FAFAFA] flex justify-center items-center'>
                            <p className='text-white font-bold text-xs'>$53,000</p>
                        </div>
                    </div>
                    <div className='flex justify-between gap-[13px]'>
                        <div className='w-[59px] h-10  rounded-[8px] bg-[#F04570] flex justify-center items-center'>
                            <p className='text-white font-bold text-xs'>USDA</p>
                        </div>
                        <div className='w-[158px] h-10  rounded-[8px] bg-[#323435]   border-[0.5px] border-[#FAFAFA] flex justify-center items-center'>
                            <p className='text-white font-bold text-xs'>$50,000</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BalanceTable
