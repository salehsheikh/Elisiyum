import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const path = usePathname();

  const routeTitles = {
    '/': 'Investor Dashboard',
    '/market': 'Market',
    '/watchlist': 'Watchlist',
    '/portfolio': 'Portfolio',
    '/exchange': 'Exchange',
  };

  // Extract base path like "/market" from full path like "/market/stats"
  const basePath = path === '/' ? '/' : `/${path.split('/')[1]}`;
  const pageTitle = routeTitles[basePath] || 'Investor Dashboard';

  return (
    <nav className="w-full mt-5 mx-auto max-w-[997px] h-[58px] relative rounded-[24px] 
      bg-[url('/assets/images/nav.svg')] bg-no-repeat bg-[center_top] overflow-hidden">

      <div className="flex items-center justify-between h-full px-4 md:px-6">
        {/* Left Section - Title - Hidden on mobile when search is open */}
        <h1 className={`text-white text-lg md:text-xl font-semibold truncate ${isSearchVisible ? 'hidden md:block' : 'block'}`}>
          {pageTitle}
        </h1>

        {/* Mobile Search Input - Visible only when toggled */}
        {isSearchVisible && (
          <div className="md:hidden absolute inset-0 bg-[#11151B] flex items-center px-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-8 pr-3 py-1.5 bg-black rounded-[18px] 
                text-white placeholder-white text-[10px] focus:outline-none 
                focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
              />
              <button 
                className="absolute right-3 top-0 w-4 h-4 text-white"
                onClick={() => setIsSearchVisible(false)}
              >
                ✕
              </button>
              <svg
                className="absolute left-2 top-2 h-4 w-4 text-white"
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
        )}

        {/* Right Section - Icons & Profile */}
        <div className={`flex items-center gap-3 md:gap-6 ${isSearchVisible ? 'hidden md:flex' : 'flex'}`}>
          {/* Mobile Search Icon */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsSearchVisible(true)}
          >
            <svg
              className="w-5 h-5"
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
          </button>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center max-w-[160px] lg:max-w-[200px]">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-8 pr-3 py-1.5 bg-black rounded-[18px] 
                  text-white placeholder-white text-[10px]  focus:outline-none 
                  focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
              />
              <svg
                className="absolute left-2 top-2 h-4 w-4 text-white"
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
            <button className="text-white p-1.5 md:p-2 hover:bg-white/10 rounded-full">
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
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
            <div className="absolute top-1 right-1 md:top-2 md:right-2 z-10 w-2 h-2 bg-red-500 rounded-full"></div>
          </div>

          {/* Divider - Hidden on mobile */}
          <div className="hidden md:block h-6 w-px bg-[#B6B6B6]"></div>

          {/* Profile Section */}
          <div className="flex items-center gap-2 md:gap-3">
            <Image 
              src="/assets/images/avatar.svg" 
              alt="User avatar"
              width={25}
              height={25}
              className="rounded-full object-cover w-6 h-6 md:w-8 md:h-8"
            />
            <span className="hidden md:block text-white text-sm md:text-base font-medium">
              Elysium Motor
            </span>
          </div>

          {/* Pro Badge */}
          <div className="flex justify-center items-center px-2 py-1 md:px-[5px] bg-[#FFCE40] rounded-2xl">
            <p className="text-black text-xs md:text-[8px] leading-none">Pro</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
