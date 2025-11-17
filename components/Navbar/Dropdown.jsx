"use client";

import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";

const Dropdown = ({ label, sections, menuContent, columns = 3, onOpenChange, isNavbarWhite }) => {
    const [open, setOpen] = useState(false);

    const handleMouseEnter = () => {
        setOpen(true);
        if (onOpenChange) onOpenChange(true);
    };
    
    const handleMouseLeave = () => {
        setOpen(false);
        if (onOpenChange) onOpenChange(false);
    };

    // Skip rendering dropdown if no content
    if (!sections && !menuContent) return null;

    return (
        <>
            <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <button className={`flex items-center gap-1 ${
                    isNavbarWhite 
                        ? 'text-gray-900 hover:text-blue-600' 
                        : 'text-white hover:text-blue-400'
                }`}>
                    {label} <ChevronDown size={16} />
                </button>

                {open && (
                    <div className="absolute left-0 right-0 h-8 top-full" />
                )}
            </div>

            {open && (
                <div
                    className="fixed left-0 right-0 top-[68px] w-full bg-white shadow-xl py-6 transition-all duration-300 ease-out z-50"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="max-w-5xl mx-auto px-6">
                        <div className={`grid grid-cols-${columns} gap-6`}>
                            {/* Data-driven approach */}
                            {sections && <DropdownMenu sections={sections} />}
                            
                            {/* Backward compatibility with custom JSX */}
                            {!sections && menuContent}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Dropdown;
