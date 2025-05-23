import Image from 'next/image';
import React from 'react';

const EcosysCard = ({ imgSrc, brand, employee, branches, description }) => {
    return (
        <div className="relative w-[389px] h-[258px]">
            {/* Top-Centered Icon */}
            <div className="absolute top-[-31px] left-1/2 transform -translate-x-1/2 z-10 cursor-pointer">
                <Image
                    src={imgSrc}
                    alt="Octaloop Logo"
                    width={62}
                    height={62}
                    className="w-[62px] h-[62px] object-contain"
                />
            </div>

            {/* Card Background */}
            <div
                className="relative w-full h-full bg-no-repeat bg-cover pt-[50px] px-8"
                style={{ backgroundImage: `url('/assets/icons/subtract.svg')` }}
            >
                {/* Content */}
                <div>
                    <p className="text-[20px] font-bold text-white text-center">{brand}</p>
                    <p className="text-sm text-white text-center">
                        {description}
                    </p>
                </div>

                {/* Stats */}
                <div className="pt-2.5 flex gap-[5px] justify-center">
                    <div className="flex justify-center text-sm items-center px-3 py-2.5 gap-[5px] bg-[#006EFF1A] rounded-[500px]">
                        <p className="text-white font-medium">Employees:</p>
                        <span className="font-bold text-[#006EFF]">{employee}</span>
                    </div>
                    <div className="flex justify-center text-sm items-center px-3 py-2.5 gap-[5px] bg-[#006EFF1A] rounded-[500px]">
                        <p className="text-white font-medium">Branches:</p>
                        <span className="font-bold text-[#006EFF]">{branches}</span>
                    </div>
                </div>

                {/* Button */}
                <div className="w-[266px] h-10 flex justify-center items-center bg-[#006EFF] rounded-[500px] mt-2.5 mx-auto">
                    <button className="text-white font-medium text-lg">Visit</button>
                </div>
            </div>
        </div>
    );
};

export default EcosysCard;
