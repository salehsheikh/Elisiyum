import BalanceTable from '@/app/components/portfolio/BalanceTable'
import { DebtTable } from '@/app/components/portfolio/DebtTable'
import { IndicationsTable } from '@/app/components/portfolio/IndicationsTable'
import { InvestmentTable } from '@/app/components/portfolio/InvestmentTable'
import { ParticipationTable } from '@/app/components/portfolio/ParticipationTable'
import { RankingTable } from '@/app/components/portfolio/RankingTable'
import React from 'react'

const page = () => {
    return (
        <div className='px-4 mx-auto mt-8 pb-4'>
            <div className='flex flex-col xl:flex-row xl:justify-between xl:gap-8.5 '>
                <div className='xl:flex'>
                    <BalanceTable />
                </div>
                <div className='xl:flex-1'>
                    <ParticipationTable />
                </div>
            </div>
            <div>
                <DebtTable />
            </div>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:gap-8.5 '>
                <div className='flex-1 min-w-[400px]'>
                    <InvestmentTable />

                </div>
                <div className="flex-1 min-w-[400px]">
                    <RankingTable />
                </div>
            </div>
            <div>
                <IndicationsTable />
            </div>


        </div>
    )
}

export default page;