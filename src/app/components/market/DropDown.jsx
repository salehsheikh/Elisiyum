"use client";

import { useState, useRef, useEffect } from 'react';

export const DropDown = ({ 
  label, 
  children, 
  className, 
  options = [],
  onSelect 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div 
      ref={dropdownRef}
      className={`relative ${className}`}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={toggleDropdown}
        onKeyDown={(e) => e.key === 'Enter' && toggleDropdown()}
        className={`bg-[#FFFFFF33] rounded-[10px] min-h-[60px]  min-w-44.5 w-full px-4 inline-flex items-center justify-between gap-4 cursor-pointer transition-all ${
          isOpen ? 'rounded-b-none' : ''
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex flex-col justify-center">
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
            className={`text-white/80 transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      {isOpen && (
        <ul
          className="absolute w-full bg-[#2D2F36] rounded-b-[10px] shadow-lg z-50 mt-[-2px] "
          role="listbox"
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                onSelect?.(option.value);
                setIsOpen(false);
              }}
              className="px-4 py-3 hover:bg-[#4d40401a] cursor-pointer transition-colors text-white text-[14px] font-medium"
              role="option"
              aria-selected={children === option.label}
            >
              {option.label}
              {option.description && (
                <div className="text-[#717579] text-xs mt-1">
                  {option.description}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};