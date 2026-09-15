"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
];

export default function Navbar() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();


  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4 md:gap-24 rounded-full border border-white/15 bg-black/40 shadow-lg shadow-black/20 backdrop-blur-xl">

        {/* Logo */}
        <Link href="/" className="flex items-center -ml-4">
          <Image src="/logo.png" alt="Pahadi Bhula" width={1584} height={518} priority className="h-14 sm:h-16 md:h-20 w-auto -my-3 sm:-my-4 md:-my-5 object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative px-5 py-2.5 text-base font-medium rounded-full
                  transition-all duration-300 group transform
                  ${isActive
                    ? "text-red-500"
                    : "text-white/80 hover:text-white hover:bg-white/10 hover:-translate-y-0.5"
                  }
                `}
              >
                {link.label}
                {/* Red underline */}
                <span
                  className={`
                    absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 bg-red-500
                    transition-all duration-300 rounded-full
                    ${isActive ? "w-1/2" : "w-0 group-hover:w-1/2"}
                  `}
                />
              </Link>
            );
          })}

          {/* Let's Talk Button */}
          <Link
            href="/contact"
            className="ml-3 px-7 py-3 bg-white text-black text-base font-semibold rounded-full hover:bg-red-500 hover:text-white hover:scale-105 transition-all duration-300"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 rounded-3xl border border-white/15 bg-white/10 shadow-lg shadow-black/20 backdrop-blur-xl px-5 sm:px-8 py-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium py-2 border-b border-white/10 transition-colors ${
                  isActive ? "text-red-500" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all"
          >
            Let's Talk
          </Link>
        </div>
      )}
    </nav>
  );
}