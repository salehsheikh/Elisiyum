'use client';
import { useState } from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function MainLayoutClient({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className=" h-screen w-full overflow-x-hidden ">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? '2xl:ml-[288px]' : 'ml-0'}`}>
        <Navbar />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
