"use client"
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FaqAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "What is the purpose of the Elysium Finance platform?",
            answer: "To create an account, click the 'Sign Up' button in the top right corner, fill in your details, and verify your email address."
        },
        {
            id: 2,
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and cryptocurrency payments including Bitcoin and Ethereum."
        },
        {
            id: 3,
            question: "Can I change my investment strategy later?",
            answer: "Yes, you can modify your investment strategy at any time through your account dashboard under 'Investment Settings'."
        },
        {
            id: 4,
            question: "How secure is my personal information?",
            answer: "We use bank-level encryption and follow GDPR compliance standards to ensure your data is always protected."
        },
        {
            id: 5,
            question: "Who are Elysium Simulato for practice?",
            answer: "Yes, you can modify your investment strategy at any time through your account dashboard under 'Investment Settings'."

        },
        {
            id: 6,
            question: "Who are Elysium Finance official partners?",
            answer: "Yes, you can modify your investment strategy at any time through your account dashboard under 'Investment Settings'."

        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full">
            <p className='text-white text-[20px] font-bold pb-3.5'>FAQs</p>
            {faqs.map((faq, index) => (
                <div
                    key={faq.id}
                    className="mb-4 rounded-[20px] overflow-hidden backdrop-blur-[62px]"
                    style={{
                        background: `
              linear-gradient(#1D2127, #1D2127) padding-box,
              linear-gradient(90deg, #69778D, #1D2127) border-box
            `,
                        border: "1px solid transparent",
                        borderRadius: "20px"
                    }}
                >
                    <button
                        className={`flex justify-between items-center w-full p-4 text-left  
                            }`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-white font-bold">{faq.id}.</span>
                            <span className={`font-medium ${activeIndex === index ? 'text-gray-400' : 'text-white'}`}>
                                {faq.question}
                            </span>
                        </div>
                        <div className="p-2 ">
                            {activeIndex === index ? (
                                <Minus className="h-5 w-5 text-[#05CD99]" />
                            ) : (
                                <Plus className="h-5 w-5 text-[#05CD99]" />
                            )}
                        </div>
                    </button>

                    {activeIndex === index && (
                        <div className=" pb-5 pt-0 text-white transition-all duration-300">
                            <div className="pl-12 ">
                                {faq.answer}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FaqAccordion;