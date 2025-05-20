"use client";
import Image from "next/image";
import { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth } from "date-fns";

export function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date(2022, 11));

    const days = eachDayOfInterval({
        start: startOfMonth(currentDate),
        end: endOfMonth(currentDate),
    });

    // Split days into weeks
    const weeks = [];
    while (days.length) weeks.push(days.splice(0, 7));

    return (
        <div className="max-w-sm mx-auto p-6 bg-[#1D2127B2] rounded-xl">
            {/* Calendar Header */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                    <span className="text-white text-lg font-medium">
                        {format(currentDate, "MMMM")}
                    </span>
                    <button className="text-white">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-white text-lg font-medium">
                        {format(currentDate, "yyyy")}
                    </span>
                    <button className="text-white">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 gap-2 mb-4">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                    <div key={day} className="text-center text-white text-sm ">
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
                {weeks.flat().map((date, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-center text-sm 
              ${isSameMonth(date, currentDate) ? 'text-white' : 'text-[#AAAAAA]'}`}
                    >
                        <div className="w-8 h-8 flex items-center justify-center rounded-full 
              bg-white/20 backdrop-blur-lg border border-transparent hover:border-[#717579]">
                            {format(date, "d")}
                        </div>
                    </div>
                ))}
            </div>

            {/* Divider Line */}
            <div className="my-8">
                <Image
                    src="/assets/images/Line 1.png"
                    alt="divider"
                    width={323}
                    height={2}
                    className="mx-auto"
                />
            </div>


            {/* Events List */}
            <div className="space-y-6">
                <div className="text-[#FFCE40] text-lg font-semibold">Alerts</div>

                <div className="space-y-4">
                    <div className="text-white font-medium">
                        <div className="text-sm text-[#CCC]">8:30 AM</div>
                        <div className="mt-1">General Finance 9% 2/8/2025 - 5,000</div>
                    </div>

                    {/* Divider Line */}
                    <div className="my-4">
                        <Image
                            src="/assets/images/Line 44.svg"
                            alt="divider"
                            width={323}
                            height={2}
                            className="mx-auto"
                        />
                    </div>

                    <div className="text-white font-medium">
                        <div className="text-sm text-[#CCC]">10:00 AM</div>
                        <div className="mt-1">Motor Alliance 11% 2/12/2025 - 10,000</div>
                    </div>
                </div>
            </div>
        </div>
    );
}