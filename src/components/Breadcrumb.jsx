import Link from "next/link";
import React from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex flex-wrap items-center text-sm">
        <li className="flex items-center">
          <Link
            href="/"
            className="text-gray-500 hover:text-accent transition-colors flex items-center"
          >
            <FaHome className="mr-1" />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <FaChevronRight className="mx-2 text-gray-400" size={10} />
            {index === items.length - 1 ? (
              <span className="text-gray-800 font-medium">{item.label}</span>
            ) : (
              <Link
                href={item.path}
                className="text-gray-500 hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
