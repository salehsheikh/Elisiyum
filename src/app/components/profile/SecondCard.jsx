// components/profile/SecondCard.tsx
import Image from 'next/image';
import React from 'react';

const Secondcard = () => {
    return (
        <div className="relative bg-[url('/assets/images/prosubtract2.svg')] bg-cover bg-no-repeat shrink-0 bg-center h-40 w-full !px-8.5 py-12 xl:-ml-6">
            <div className="flex  justify-between sm:pl-9">
                <div className='flex-col'>
                    <div className="flex items-center gap-2">
                        <Image
                            src="/assets/images/token.png"
                            alt="Token"
                            width={25}
                            height={25}
                            className="object-contain"
                        />
                        <h3 className="text-white text-[20px] font-bold">Balance</h3>
                    </div>

                    <p className="text-white text-[20px] pl-8">28,753,48</p>
                </div>

                <div className=" rounded-[68px] h-16.5 w-31 border-2 border-[#FFCE40] bg-[#000D1F] flex items-center justify-center">
                    <p className="text-white text-[20px] font-bold">7476 pts</p>
                </div>
            </div>
        </div>
    );
};

export default Secondcard;