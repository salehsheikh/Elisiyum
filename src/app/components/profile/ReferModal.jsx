import React from "react";
import { X } from "lucide-react";
import Image from "next/image";

const ReferModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
            <div className="bg-[#1D2127B2] rounded-[19px]  max-h-[90vh]  shadow-lg max-w-md lg:max-w-[617px] w-full p-8 xl:p-10 2xl:p-26 relative">

                {/* Close icon in black circle - top-left */}
                <button
                    className="absolute top-4 right-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center"
                    onClick={onClose}
                >
                    <X size={18} />
                </button>

                {/* Title centered at top */}
                <h2 className="text-4xl  text-white text-center mb-8 mt-6 ">
                    <span className="text-[#FFCE40]">Refer</span> your Friends <br /> and <span className="text-[#FFCE40]" >Earn</span>
                </h2>

                {/* Image row */}
                <div className="flex justify-center mb-6">
                    <Image
                        src="/assets/images/lottery.svg"
                        alt="Refer"
                        width={215}
                        height={199}
                        className=" object-contain"
                    />
                </div>

                {/* Dotted border box with text + code */}
                <div className="border border-dashed border-[#FFFFFF4D] bg-[#FFFFFF1A] p-6 rounded-[10px] sm:text-center space-y-2">
                    <div className="flex-col gap-2.5 ">
                        <p className="text-sm text-white">Your referral code</p>
                        <p className="text-[#FFCE40] text-lg font-semibold  "> ABHS4587</p>
                    </div>
                    <div className="flex justify-end gap-8.5 -mt-13 ">

                        <div className="bg-[#FFFFFF33] w-[2px] h-9 shrink-0" />
                        <div>
                            <div className="underline  text-[#FFCE40] font-semibold text-[16px] ">Copy <br /> Code</div>
                        </div>
                    </div>

                </div>
                <div className="flex gap-2 pt-5 pb-8">
                    <div className="bg-[#2BACEE] rounded-[500px] py-1.5 px-2.5 items-center justify-center flex w-30 h-8 gap-[5px]">
                        <Image src="/assets/images/telegram.svg" alt="tel" width={20} height={20} />
                        <p className="text-white text-sm ">Telegram</p>
                    </div>
                    <div className="bg-[#1877F2] rounded-[500px] py-1.5 px-2.5 items-center justify-center flex w-30 h-8 gap-[5px]">
                        <Image src="/assets/images/facebooklogo.svg" alt="fb" width={20} height={20} />
                        <p className="text-white text-sm ">Facebook</p>
                    </div>
                    <div className="bg-[#45D354] rounded-[500px] py-1.5 px-2.5 items-center justify-center flex w-30 h-8 gap-[5px]">
                        <Image src="/assets/images/whatsapplogo.svg" alt="wa" width={20} height={20} />
                        <p className="text-white text-sm ">Whatsapp</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferModal;
