import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
  return (
    <div className="relative bg-[url('/assets/images/prosubtract.svg')] shrink-0 bg-cover bg-center h-40 px-8.5 py-[39px] w-full xl:translate-x-6">
      <div className='flex  justify-start
       items-start '>
        <div className='shrink-0 w-[60px] h-[60px] lg:w-[83px] lg:h-[83px] '>
          <Image src="/assets/images/Profile Pic.svg"
            alt='profilepic'
            width={83}
            height={83} />
        </div>
        <div className='pl-8'>
          <div >
            <p className='text-white font-bold text-3xl pb-2'>MarkF</p>

          </div>
          <div className='flex justify-between gap-1'>
            <Image src="/assets/images/Rank Icon.svg"
              width={28}
              height={35}
              alt='rankicon'
            />
            <p className='text-[#fff] text-[20px] '>Rank: 12.543</p>
          </div>
        </div>

      </div>


    </div>
  )
}

export default ProfileCard
