import Image from 'next/image'
import React from 'react'

const SkeletonSection = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex gap-1 px-4'>
                <div className='rounded-full size-11 bg-[#FFFFFF33] shrink-0' />
                <div>
                    <Image width={391} height={75}
                        src="/assets/images/skeleton1.svg" />
                </div>
            </div>
            <div className='flex justify-end gap-1 px-4'>
                <div className='rounded-full size-11 bg-[#FFFFFF33] shrink-0' />
                <div>
                    <Image width={391} height={54}
                        src="/assets/images/skeleton2.svg" />
                </div>
            </div>
        </div>
    )
}

export default SkeletonSection
