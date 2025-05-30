"use client"
import ChatSidebar from '@/app/components/livechat/ChatSidebar'
import ChatWrapper from '@/app/components/livechat/ChatWrapper'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/support');
    }
    return (
        <div className="sm:p-12 p-3 h-[94vh]">
            <div
                className="rounded-[20px] backdrop-blur-[62px] w-full h-full"
                style={{
                    background: `
                        linear-gradient(#1D2127, #1D2127) padding-box,
                        linear-gradient(90deg, #69778D, #1D2127) border-box
                    `,
                    border: "1px solid transparent",
                }}
            >
                <Icon
                    onClick={handleClick}
                    icon="ic:baseline-arrow-back" width="24" height="24" className='text-white m-3 cursor-pointer' />
                <div className='flex sm:gap-4'>
                    <div className='p-3'><ChatSidebar /></div>
                    <div className='w-full p-3 '>
                        <ChatWrapper />
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Page