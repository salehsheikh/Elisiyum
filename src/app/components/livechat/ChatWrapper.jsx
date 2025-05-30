import React from 'react'
import ChatHeader from './ChatHeader';
import MessageSection from './MessageSection';
import SkeletonSection from './SkeletonSection';

const ChatWrapper = () => {
    return (
        <div
            className=' border-x border-[#69778D] h-[78vh] rounded-[20px] relative  w-full bg-[#000D1F80] '
        >
            <div>
                <ChatHeader />
            </div>
            <div className='absolute -bottom-3 w-full' >
                <div className='py-7.5'>
                    <SkeletonSection />
                </div>
                <div>
                    <MessageSection />
                </div>
            </div>


        </div>
    );
};

export default ChatWrapper;

