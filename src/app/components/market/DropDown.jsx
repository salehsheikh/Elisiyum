"use client"

export const DropDown = ({ label, children, className }) => {
  return (
    <div
      className={`relative bg-[#FFFFFF33] rounded-[10px] h-[60px] min-w-44.5  px-4 inline-flex items-center justify-between gap-4 ${className}`}
    >
      <div className="flex flex-col justify-center ">
        <span className="block text-white text-[16px] font-semibold whitespace-nowrap">
          {children}
        </span>
        {label && (
          <div className="text-xs text-[#717579] whitespace-nowrap">
            {label}
          </div>
        )}
      </div>

      <div className="flex items-center justify-center h-full">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="text-white/80"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
};
