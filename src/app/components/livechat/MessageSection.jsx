import Image from 'next/image'
import React from 'react'

const MessageSection = () => {
    return (
        <div
            className="relative rounded-[20px]  backdrop-blur-[62px] h-14 flex items-center px-5 w-full "
            style={{
                background: `
                    linear-gradient(#1D2127B2, #1D2127B2) padding-box,
                    linear-gradient(90deg, #69778D, #1D2127) border-box 
                `,
                border: "1px solid transparent",
            }}
        >
            <div className="flex justify-between w-full">
                <div>
                    <input type='text' placeholder='Type message here' className='outline-none placeholder:text-[#D6D6D6] text-[#D6D6D6] text-sm font-semibold' />
                </div>
                <div className='flex '>
                    <Image width={28} height={28} alt="msgarrow"
                        src="/assets/icons/msg-enter.svg" />
                </div>
            </div>
        </div>
    )
}

export default MessageSection