"use client";

import Link from "next/link";

const DropdownMenu = ({ sections = [], className = "" }) => {
  return (
    <div className={`grid gap-8 ${className}`}>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h4 className="font-semibold text-gray-900 mb-3">{section.title}</h4>
          <div className="flex flex-col gap-2 text-gray-600">
            {section.items.map((item, itemIndex) => (
              <Link
                key={itemIndex}
                href={item.href || "#"}
                className="hover:text-blue-600 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;

