"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const TopCard = () => {
    const router = useRouter();

    const handleChatClick = () => {
        router.push('/support/livechat');
    };
    return (
        <div className="relative w-full  sm:h-[214px]   group">
            {/* Centered Icon */}
            <div className="absolute top-[-31px] left-1/2 transform -translate-x-1/2 z-10 w-[47px] h-[47px]">
                <Image
                    src="/assets/icons/msg.svg"
                    alt="Company Logo"
                    width={47}
                    height={47}
                    className="object-contain w-full h-full"
                />
            </div>

            {/* Card Container */}
            <div className="relative w-full h-full bg-[url('/assets/icons/SupportSubtract.svg')] bg-cover bg-center py-[40px] px-4 py-auto
              sm:px-8">
                <p className='text-white text-[20px] font-bold text-center '>Support Chat</p>
                <p className='text-sm text-white flex justify-center items-center py-2.5 '>Our support team is ready to help with any questions or concerns you may have. Connect instantly
                    <br />
                    through our live chat for fast, friendly assistance. </p>
                <div className='flex justify-center'>
                    <button
                        onClick={handleChatClick}
                        className='w-60 h-10 shrink-0 text-white flex justify-center items-center rounded-[500px] bg-[#006EFF] cursor-pointer'>
                        Chat
                    </button>
                </div>

            </div>
        </div>
    )
}

export default TopCard
