import { Calendar } from '@/app/components/watchlist/Calendar'
import { SecondTable } from '@/app/components/watchlist/SecondTable'
import { WatchListTable } from '@/app/components/watchlist/WatchListTable'
import React from 'react'

const page = () => {
    return (
        <div className='flex justify-between  gap-4'>
            <div className='flex-1'><WatchListTable />
                <SecondTable />
            </div>
            <div>
                <Calendar />
            </div>

        </div>
    )
}

export default page
