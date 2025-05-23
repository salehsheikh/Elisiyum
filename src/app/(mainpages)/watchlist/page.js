"use client";

import { Calendar } from "@/app/components/watchlist/Calendar";
import { SecondTable } from "@/app/components/watchlist/SecondTable";
import WatchlistBtn from "@/app/components/watchlist/WatchistBtn";
import { WatchListTable } from "@/app/components/watchlist/WatchListTable";
import Image from "next/image";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const Page = () => {
    const [showCalendar, setShowCalendar] = useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div className="px-4 my-12 relative">
            <WatchlistBtn />

            {/* Mobile FAB calendar toggle button */}
            <div className="lg:hidden fixed bottom-4 right-4 z-50">
                <button
                    onClick={() => setIsDrawerOpen(true)}
                    className="bg-[#FFFFFF33] p-3 rounded-full shadow-lg"
                    aria-label="Open Calendar"
                >
                    <Image
                        src="/assets/icons/calendarMinus.svg"
                        width={24}
                        height={24}
                        alt="Calendar"
                    />
                </button>
            </div>

            <div className="flex gap-4 transition-all duration-500">
                <div className={`transition-all duration-500 ${showCalendar ? "w-[calc(100%)]" : "w-full"}`}>
                    <WatchListTable />
                    <SecondTable />
                </div>

                {/* Inline calendar only for lg and up */}
                <div className={`transition-all duration-500 hidden lg:block ${showCalendar ? "lg:w-[360px] xl:max-w-sm w-full" : "w-[0px]"}`}>
                    {showCalendar ? (
                        <Calendar onClose={() => setShowCalendar(false)} />
                    ) : (
                        <div className="flex justify-center items-center -ml-18 -mt-10">
                            <button
                                className="flex justify-center cursor-pointer items-center size-10 bg-[#FFFFFF33] rounded-full shadow-md hover:scale-105 transition-transform"
                                onClick={() => setShowCalendar(true)}
                                aria-label="Show Calendar"
                            >
                                <Image
                                    src="/assets/icons/calendarMinus.svg"
                                    alt="Show Calendar"
                                    width={24}
                                    height={24}
                                />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Drawer Calendar for mobile view */}
            <Dialog
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                className="relative z-100 lg:hidden"
            >
                <div className="fixed" aria-hidden="true" />
                <div className="fixed  inset-y-24 right-0  max-w-[350px]  shadow-lg px-2 py-12 !overflow-y-auto">
                    <Calendar onClose={() => setIsDrawerOpen(false)} />
                </div>
            </Dialog>
        </div>
    );
};

export default Page;
