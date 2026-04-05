"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t.navbar.home, href: "#" },
    { name: t.navbar.about, href: "#about" },
    { name: t.navbar.services, href: "#services" },
    { name: t.navbar.gallery, href: "#gallery" },
    { name: t.navbar.pricing, href: "#pricing" },
    { name: t.navbar.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        scrolled
          ? "bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-sm border-gray-200 dark:border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold tracking-tighter ${
                scrolled ? "text-primary-red dark:text-primary-gold" : "text-white"
            }`}>
              Suraj<span className="font-light text-primary-gold">Garden</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-wide font-medium transition-colors hover:text-primary-gold ${
                  scrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <LanguageSwitcher scrolled={scrolled} />
            <button className={`px-6 py-2.5 rounded-full text-sm font-medium transition-transform active:scale-95 ${
              scrolled 
              ? "bg-primary-red text-white hover:bg-red-900" 
              : "bg-white text-primary-red hover:bg-gray-100"
            }`}>
              {t.navbar.book}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher scrolled={scrolled} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={scrolled ? "text-foreground" : "text-white"}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-black shadow-lg border-b border-gray-100 dark:border-white/10 md:hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-primary-gold font-medium px-2 py-1"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 pb-2">
                <button className="w-full bg-primary-red text-white py-3 rounded-md font-medium">
                  {t.navbar.book}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
