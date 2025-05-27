import React from 'react';

const Donut = () => {
    const percentage = 74;
    const size = 174;
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const progress = circumference * (1 - percentage / 100);

    return (
        <div className="relative w-44 h-44 flex items-center justify-center">
            <svg
                width={size}
                height={size}
                viewBox="0 0 174 174"
                className="transform rotate-45"
            >
                {/* Background circle */}
                <circle
                    cx="87"
                    cy="87"
                    r={radius}
                    fill="none"
                    stroke="#373737"
                    strokeWidth="14"
                />

                {/* Progress circle with glow effect */}
                <path
                    d={`M87 17a70 70 0 1 1 0 140`}
                    stroke="#FFCE40"
                    strokeWidth="14"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={progress}
                    filter="url(#glow)"
                />

                {/* Progress indicator dot */}
                <circle cx="87" cy="17" r="6" fill="#FFCE40" />

                {/* Glow effect filter */}
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="6" result="glow" />
                        <feMerge>
                            <feMergeNode in="glow" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>

            {/* Centered percentage text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="text-4xl font-bold text-white">{percentage}</span>
            </div>
        </div>
    );
};

export default Donut;