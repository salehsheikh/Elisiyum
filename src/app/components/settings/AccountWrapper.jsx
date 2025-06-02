import React from 'react'
import AccountSetting from './AccountSetting'
import Documentation from './Documentation'
import BankingDetails from './BankingDetails'
import CurrencySection from './CurrencySection'

const AccountWrapper = () => {
    return (
        <div>
            <AccountSetting />
            <Documentation />
            <BankingDetails />
            <CurrencySection />
        </div>
    )
}

export default AccountWrapper
