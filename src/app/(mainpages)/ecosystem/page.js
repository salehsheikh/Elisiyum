import EcosysCard from '@/app/components/ecosystem/EcosysCard'
import React from 'react'

const cardConfig = [
    {
        imgSrc: "/assets/icons/octaloop.svg",
        brand: "Octaloop",
        employee: "165",
        branches: "02",
        description: "Welcome to Octaloop Technologies, a multi-faceted IT powerhouse offering a comprehensive suite of services."
    },
    {
        imgSrc: "/assets/icons/neurosync.svg",
        brand: "NeuroSync Systems",
        employee: "165",
        branches: "02",
        description: "Buy shares of rental properties, earn monthly income, and watch your money grow."
    },
    {
        imgSrc: "/assets/icons/photonix.svg",
        brand: "Photonix Labs",
        employee: "165",
        branches: "02",
        description: "We are committed to pioneering unique access to digital asset investing for institutional and ESG considerate investors."
    },
    {
        imgSrc: "/assets/icons/quantam.svg",
        brand: "QuantumEdge Analytics",
        employee: "165",
        branches: "02",
        description: "Fireblocks offers tools to manage digital assets and a platform to build blockchain-based businesses."
    }
]
const page = () => {
    return (
        <div className='px-4 mx-auto mt-13.5 pb-4'>
            <div className='flex flex-wrap justify-center items-center gap-[19px] space-y-[19px] '>
                {
                    cardConfig.map((card) => (
                        <EcosysCard
                            key={card.index}
                            {...card} />
                    ))
                }

            </div>
        </div>
    )
}

export default page
