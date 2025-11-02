"use client";
import { useState, Suspense } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function MainLayoutClient({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen w-full overflow-x-hidden">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? "2xl:ml-[288px]" : "ml-0"
          }`}
      >
        <Navbar />

        {/* Suspense handles loading state */}
        <main className="flex-1 overflow-auto">
          <Suspense fallback={<LoadingSpinner />}>
            {children}
          </Suspense>
        </main>
      </div>
    </div>
  );
}
