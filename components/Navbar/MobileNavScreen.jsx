"use client";

import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";

const MobileNavScreen = ({ 
  type = "main", 
  title = "", 
  onBack, 
  items = [],
  className = ""
}) => {
  return (
    <nav className={`flex flex-col p-4 text-[16px] flex-1 gap-2 ${className}`}>
      {/* Back Button for Submenu */}
      {type === "submenu" && onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-2 font-medium"
        >
          <ArrowLeft size={20} />
          {title}
        </button>
      )}

      {/* Navigation Items */}
      {items.map((item, index) => {
        if (item.type === "submenu") {
          return (
            <button
              key={index}
              onClick={item.onClick}
              className="w-full flex items-center justify-between py-2 font-medium hover:text-blue-600 transition"
            >
              {item.label}
              <ChevronRight size={20} />
            </button>
          );
        }

        return (
          <Link 
            key={index} 
            href={item.href || "#"} 
            className="py-2 font-medium hover:text-blue-600 transition"
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileNavScreen;

