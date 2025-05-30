import ContactForm from '@/app/components/support/ContactForm'
import FaqAccordion from '@/app/components/support/FaqAccordion'
import LastSection from '@/app/components/support/LastSection'
import TopCard from '@/app/components/support/TopCard'
import UseText from '@/app/components/support/UseText'
import React from 'react'

const page = () => {
    return (
        <div className='mt-24 px-4 lg:mx-39'>
            <TopCard />
            <div className='py-7.5'>
                <FaqAccordion />

            </div>
            <div>
                <ContactForm />
            </div>
            <div>
                <UseText />
            </div>
            <div>
                <LastSection />
            </div>
        </div>
    )
}

export default page
