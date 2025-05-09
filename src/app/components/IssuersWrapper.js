import React from 'react'
import IssuerWrapper from './TopIssuer'
import IssuanceWrapper from './TopIssuance'
import RecentIssuerWrapper from './RecentIssuer'
import Image from 'next/image'

const IssuersWrapper = () => {
  return (
    <div className="px-3 relative ">
      {/* Image positioned at center-left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <div className="relative w-full h-full">
          <Image 
            src="/assets/images/ellipse.svg" 
            alt="Background"
            width={30}
            height={30}
            className="w-full h-full object-contain"
          />
          <Image 
            src="/assets/images/arrowblack.svg" 
            alt="Arrow"
            width={12}
            height={12}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
      {/* Content */}
      <p className="text-[20px] font-medium text-white mb-4 md:mb-6 relative z-10">Spotlight</p>
      <div className='flex flex-col lg:flex-row gap-4 relative z-10'>
        {/* First Column */}
        <div className='lg:flex-1 w-full lg:w-[31%]'>
          <IssuerWrapper />
        </div>

        {/* Second Column */}
        <div className='lg:flex-[1.3] w-full lg:w-[38%]'>
          <IssuanceWrapper />
        </div>

        {/* Third Column */}
        <div className='lg:flex-1 w-full lg:w-[31%]'>
          <RecentIssuerWrapper />
        </div>
      </div>
    </div>
  )
}

export default IssuersWrapper;