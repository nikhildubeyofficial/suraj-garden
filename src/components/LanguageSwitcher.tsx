"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Languages, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/context/LanguageContext";

export default function LanguageSwitcher({ scrolled }: { scrolled: boolean }) {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { code: "en", name: "English", flag: "EN" },
    { code: "hi", name: "हिन्दी", flag: "HI" },
  ] as const;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 border ${
          scrolled 
            ? "border-gray-200 dark:border-white/10 text-foreground hover:bg-gray-100 dark:hover:bg-white/5" 
            : "border-white/20 text-white hover:bg-white/10"
        }`}
      >
        <Languages size={16} />
        <span className="text-sm font-medium uppercase">{language}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={14} className="opacity-60" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full right-0 mt-2 min-w-[140px] bg-white dark:bg-zinc-900 border border-gray-100 dark:border-white/10 shadow-xl rounded-2xl overflow-hidden z-[100]"
          >
            <div className="p-1.5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    language === lang.code
                      ? "bg-primary-red/10 text-primary-red dark:bg-primary-gold/10 dark:text-primary-gold"
                      : "text-foreground hover:bg-gray-50 dark:hover:bg-white/5"
                  }`}
                >
                  <span>{lang.name}</span>
                  {language === lang.code && (
                    <motion.div
                      layoutId="active-lang"
                      className="w-1.5 h-1.5 rounded-full bg-primary-red dark:bg-primary-gold"
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
