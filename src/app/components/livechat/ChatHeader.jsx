import React from 'react'

const ChatHeader = () => {
    return (
        <div
            className="relative rounded-[20px]  backdrop-blur-[62px] h-14 flex items-center px-5  w-full"
            style={{
                background: `
                    linear-gradient(#1D2127B2, #1D2127B2) padding-box,
                    linear-gradient(90deg, #69778D, #1D2127) border-box 
                `,
                border: "1px solid transparent",
            }}
        >
            <div className="flex justify- w-full">
                <div className='flex gap-2 items-center'>
                    <div className='size-2.5 bg-[#2BC155] rounded-full shrink-0' />
                    <p className='text-white text-xs font-medium'>Support Chat</p>
                </div>
                <div className='flex mx-auto'>
                    <p className='text-white text-xs font-medium  '>Discussion about Elysium pro...</p>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader