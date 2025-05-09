import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    
    <nav className="w-full border-x border-[#006EFF]  mt-5 mx-auto max-w-[997px] h-[58px]  relative rounded-[24px] 
      bg-[url('/assets/images/nav.svg')] bg-no-repeat bg-[center_top] 
      backdrop-blur-[32px] overflow-hidden">

      <div className="flex items-center justify-between h-full px-6 ">
        {/* Left Section - Title */}
        <h1 className="text-white text-xl font-semibold">Investor Dashboard</h1>

      

        {/* Right Section - Icons & Profile */}
        <div className="flex items-center gap-6">

        <div className="flex items-center  max-w-[200px] ">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-black rounded-[18px] 
                text-white placeholder-white text-[10px] focus:outline-none focus:ring-2 
                focus:ring-blue-500 backdrop-blur-sm"
            />
            <svg
              className="absolute left-3 top-2 h-[17px] w-[17px] text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
          {/* Notification Icon */}
          <div className="relative">
            <button className="text-white p-2 hover:bg-white/10 rounded-full">
              <svg
                className="w-6 h-6"
                fill="#ffffff"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <div className="absolute top-2 right-2 z-10 w-2 h-2 bg-red-500 rounded-full"></div>
          </div>

          {/* Divider */}
          <div className="h-6 w-px bg-[#B6B6B6]"></div>

          {/* Profile Section */}
          <div className="flex items-center gap-3">
          <Image 
    src="/assets/images/avatar.svg" 
    alt="User avatar"
    width={25}
    height={25}
    className="rounded-full object-cover "
  />
            <span className="text-white font-medium">Elysium Motor</span>
          </div>
          <div className='flex justify-center items-center px-[5px] bg-[#FFCE40] rounded-2xl'>
            <p className='text-black text-[8px]'>Pro</p>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;