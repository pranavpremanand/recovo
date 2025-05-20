"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { categoryLinks } from "@/utils/constant";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky py-2 sm:py-3 top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="wrapper">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={110}
                height={30}
                priority
                className="w-[5.5rem] sm:w-[7rem]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            {categoryLinks.map(({ slug, name }) => (
              <Link
                key={slug}
                href={`/category/${slug}`}
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium"
              >
                {name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-white`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="text-gray-700 hover:text-primary hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          {categoryLinks.map(({ slug, name }) => (
            <Link
              key={slug}
              href={`/category/${slug}`}
              className="text-gray-700 hover:text-primary hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
