'use client'

import React, { useState } from 'react'
import AccountWrapper from '@/app/components/settings/AccountWrapper'
import InvestmentPref from '@/app/components/settings/InvestmentPref'
import Notifications from '@/app/components/settings/Notifications'
import SecurityWrapper from '@/app/components/settings/SecurityWrapper'

const Page = () => {
    const [activeTab, setActiveTab] = useState('account')

    const renderComponent = () => {
        switch (activeTab) {
            case 'account':
                return <AccountWrapper />
            case 'investment':
                return <InvestmentPref />
            case 'notifications':
                return <Notifications />
            case 'security':
                return <SecurityWrapper />
            default:
                return null
        }
    }

    return (
        <div className="lg:mx-11.5 px-4 mt-13.5">
            {/* Tabs */}
            <div className="flex space-x-2.5 flex-wrap md:flex-nowrap gap-2.5 mb-6">
                <button
                    className={`px-5 py-2.5 rounded-[8px] text-[16px] font-semibold cursor-pointer ${activeTab === 'account'
                        ? 'bg-[#FFCE40] text-black'
                        : 'bg-[#717579] text-white'
                        }`}
                    onClick={() => setActiveTab('account')}
                >
                    Account Settings
                </button>
                <button
                    className={`px-5 py-2.5 rounded-[8px] text-[16px] cursor-pointer font-semibold ${activeTab === 'investment'
                        ? 'bg-[#FFCE40] text-black'
                        : 'bg-[#717579] text-white'
                        }`}
                    onClick={() => setActiveTab('investment')}
                >
                    Investment Preferences
                </button>
                <button
                    className={`px-5 py-2.5 rounded-[8px] text-[16px] cursor-pointer font-semibold ${activeTab === 'notifications'
                        ? 'bg-[#FFCE40] text-black'
                        : 'bg-[#717579] text-white'
                        }`}
                    onClick={() => setActiveTab('notifications')}
                >
                    Notifications
                </button>
                <button
                    className={`px-5 py-2.5 rounded-[8px] text-[16px] cursor-pointer font-semibold ${activeTab === 'security'
                        ? 'bg-[#FFCE40] text-black'
                        : 'bg-[#717579] text-white'
                        }`}
                    onClick={() => setActiveTab('security')}
                >
                    Security
                </button>
            </div>

            {/* Active Tab Content */}
            <div>{renderComponent()}</div>
        </div>
    )
}

export default Page
