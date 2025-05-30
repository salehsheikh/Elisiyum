'use client';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import React, { useState } from 'react';

const ChatSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Hamburger Button - visible only below md */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed top-8 left-4 z-50 bg-[#1D2127] rounded-full"
            >
                <Icon icon="mdi:hamburger-menu" width="24" height="24" className="text-white" />
            </button>

            {/* Sidebar - MD and above */}
            <div className="hidden md:block">
                <div
                    className="relative rounded-[20px] w-[245px] h-[78vh] backdrop-blur-[62px] bg-[#1D2127B2] border border-[#69778D]"
                >
                    <SidebarContent />
                </div>
            </div>

            {/* Mobile Drawer - below MD */}
            {isOpen && (
                <div className="fixed top-14 inset-0 bg-opacity-50 z-40" onClick={() => setIsOpen(false)}>
                    <div
                        className="absolute left-0 top-0 w-[245px] h-full bg-[#1D2127B2] backdrop-blur-[62px] border-r border-[#69778D] rounded-r-[20px] z-50"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <SidebarContent />
                    </div>
                </div>
            )}
        </>
    );
};

const SidebarContent = () => (
    <>
        {/* Search Header */}
        <div className='h-12 bg-[#4A4B4EB2] backdrop-blur-[33px] rounded-t-[20px] flex items-center gap-8 px-2'>
            <div className="relative w-full h-9">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-black rounded-[18px] 
                        text-white placeholder:text-gray-300 text-xs py-2 pl-8 pr-3
                        focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <svg
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 h-[17px] w-[17px] text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
            <div>
                <Image width={26} height={26}
                    src="/assets/icons/plus.svg" alt="plus" />
            </div>
        </div>

        {/* Chat Content */}
        <p className='text-xs text-white font-bold py-3 px-[19px]'>Today</p>
        <div className='rounded-sm bg-[#FFFFFF33] text-white my-[11px] mx-[9px] h-8.5 flex gap-3 items-center p-2'>
            <p className='text-xs'>Discussion about Elysium pro...</p>
            <Icon icon="tabler:dots" width="24" height="24" className='text-blue-600' />
        </div>
        {[1, 2, 3, 4, 5].map((item) => (
            <div
                key={item}
                className='rounded-sm text-white my-[11px] mx-[9px] h-8.5 p-2'
            >
                <p className='text-xs'>Discussion about Elysium pro...</p>
            </div>
        ))}
    </>
);

export default ChatSidebar;
