'use client'

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#05132B] backdrop-blur-sm border-b border-amber-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href={"#home"}
            onClick={() => setActiveNavLink("home")}
            className="text-2xl font-serif relative"
          >
            CHELUM <sup className="text-xs ml-1 absolute -top-1">&reg;</sup>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href={"#home"}
              onClick={() => setActiveNavLink("home")}
              className={`hover:text-amber-300 transition-colors ${activeNavLink === "home" && "text-amber-300"}`}
            >
              Home
            </Link>
            <Link
              href={"#about"}
              onClick={() => setActiveNavLink("about")}
              className={`hover:text-amber-300 transition-colors ${activeNavLink === "about" && "text-amber-300"}`}
            >
              About
            </Link>
            <Link
              href={"#menu"}
              onClick={() => setActiveNavLink("menu")}
              className={`hover:text-amber-300 transition-colors ${activeNavLink === "menu" && "text-amber-300"}`}
            >
              Menu
            </Link>
            <Link
              href={"#gallery"}
              onClick={() => setActiveNavLink("gallery")}
              className={`hover:text-amber-300 transition-colors ${activeNavLink === "gallery" && "text-amber-300"}`}
            >
              Gallery
            </Link>
            <Link
              href={"#contact"}
              className="bg-amber-400 text-black px-6 py-2 rounded-full hover:bg-amber-600 transition-colors cursor-pointer"
            >
              Reserve
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link
              href={"#home"}
              className="text-white hover:text-amber-300 transition-colors text-left"
            >
              Home
            </Link>
            <Link
              href={"#about"}
              className="text-white hover:text-amber-300 transition-colors text-left"
            >
              About
            </Link>
            <Link
              href={"#menu"}
              className="text-white hover:text-amber-300 transition-colors text-left"
            >
              Menu
            </Link>
            <Link
              href={"#gallery"}
              className="text-white hover:text-amber-300 transition-colors text-left"
            >
              Gallery
            </Link>
            <Link
              href={"#contact"}
              className="bg-amber-400 text-black px-6 py-2 rounded-full hover:bg-amber-600 transition-colors text-center"
            >
              Reserve
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}