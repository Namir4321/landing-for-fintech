"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { ArrowRight } from "lucide-react";
import { desktopNavData, mainNavLinks } from "@/config/navigationData";

const DeskNav = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className={`w-full absolute top-0 left-0 right-0 z-50 ${
            isDropdownOpen ? 'bg-white shadow-md' : 'bg-transparent'
        }`}>
            <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-12">
                {/* LOGO */}
                <Link href="/" className="flex items-center">
                    <Image 
                        src="/log102.svg" 
                        alt="logo" 
                        width={120} 
                        height={40}
                        className={isDropdownOpen ? '' : 'brightness-0 invert'}
                    />
                </Link>

                {/* NAV LINKS */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {/* Dropdown Menus */}
                    <Dropdown 
                        label="Payments" 
                        sections={desktopNavData.payments.sections}
                        onOpenChange={setIsDropdownOpen}
                        isNavbarWhite={isDropdownOpen}
                    />
                    <Dropdown 
                        label="Banking" 
                        sections={desktopNavData.banking.sections}
                        columns={1}
                        onOpenChange={setIsDropdownOpen}
                        isNavbarWhite={isDropdownOpen}
                    />
                    
                    {/* Regular Links */}
                    {mainNavLinks.map((link, index) => (
                        <Link 
                            key={index}
                            href={link.href} 
                            className={
                                isDropdownOpen 
                                    ? 'text-gray-900 hover:text-blue-600' 
                                    : 'text-white hover:text-blue-400'
                            }
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* RIGHT SIDE BUTTONS */}
                <div className="hidden md:flex items-center gap-4 ml-auto">
                    <Link
                        href="#login"
                        className={`text-sm font-medium ${
                            isDropdownOpen 
                                ? 'text-gray-900 hover:text-blue-600' 
                                : 'text-white hover:text-blue-400'
                        }`}
                    >
                        Log In
                    </Link>
                    <Link
                        href="#signup"
                        className={`group inline-flex items-center gap-0 rounded-4xl px-5 py-2 text-sm font-medium hover:pr-3 ${
                            isDropdownOpen
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-white text-blue-600 hover:bg-gray-100'
                        }`}
                    >
                        <span className="whitespace-nowrap">Sign Up</span>
                        <span className="inline-flex items-center w-0 opacity-0 overflow-hidden transition-all duration-300 ease-out group-hover:w-6 group-hover:opacity-100 group-hover:ml-2">
                            <ArrowRight size={16} className="flex-shrink-0" />
                        </span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default DeskNav;
