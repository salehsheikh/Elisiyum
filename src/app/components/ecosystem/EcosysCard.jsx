import Image from 'next/image';
import React from 'react';

const EcosysCard = ({ imgSrc, brand, employee, branches, description }) => {
    return (
        <div className="relative w-full h-full max-w-[389px]  sm:h-[258px]   group">
            {/* Centered Icon */}
            <div className="absolute top-[-31px] left-1/2 transform -translate-x-1/2 z-10 w-[62px] h-[62px]">
                <Image
                    src={imgSrc}
                    alt="Company Logo"
                    width={62}
                    height={62}
                    className="object-contain w-full h-full"
                />
            </div>

            {/* Card Container */}
            <div className="relative w-full h-full bg-[url('/assets/icons/subtract.svg')] bg-cover bg-center pt-[40px] px-4 py-auto
              sm:px-8">
                {/* Content Container */}
                <div className="flex flex-col items-center h-full  ">
                    {/* Text Content */}
                    <div className="text-center  ">
                        <h3 className="text-xl mb-2.5 sm:text-[20px] font-bold text-white">{brand}</h3>
                        <p className="text-sm text-white/90 max-w-[320px]  ">
                            {description}
                        </p>
                    </div>

                    {/* Stats Container */}
                    <div className="mt-auto w-full flex flex-col sm:flex-row  space-y-1 gap-2 justify-center">
                        <div className="flex justify-center items-center px-3 py-2.5 gap-1.5 bg-[#006EFF1A] rounded-full backdrop-blur-sm">
                            <span className="text-sm text-white font-medium">Employees:</span>
                            <span className="text-sm font-bold text-[#006EFF]">{employee}</span>
                        </div>
                        <div className="flex justify-center items-center px-3 py-2.5 gap-1.5 bg-[#006EFF1A] rounded-full backdrop-blur-sm">
                            <span className="text-sm text-white font-medium">Branches:</span>
                            <span className="text-sm font-bold text-[#006EFF]">{branches}</span>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="w-full sm:max-w-[266px] sm:mt-auto mt-2 mb-4">
                        <button className="w-full h-10 bg-[#006EFF] rounded-full text-white font-medium text-lg 
                                       hover:bg-[#0057D6] transition-all duration-300 transform hover:-translate-y-0.5">
                            Visit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcosysCard;