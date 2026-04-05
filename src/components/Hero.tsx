"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { useTranslation } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useTranslation();
  
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-venue.png"
          alt="Suraj Garden Evening Lights"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-primary-gold font-medium tracking-[0.2em] uppercase text-sm mb-6 block"
          >
            {t.hero.welcome}
          </motion.span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 drop-shadow-lg max-w-4xl leading-tight">
            {t.hero.title_part1} <span className="text-primary-gold font-serif italic pr-2">{t.hero.title_part2}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-12 font-light leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="#contact" 
              className="w-full sm:w-auto group relative px-8 py-4 bg-primary-red text-white overflow-hidden rounded-full shadow-2xl transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center font-medium">
                {t.hero.plan_event}
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-red-900 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
            
            <Link 
              href="#gallery" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white rounded-full hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm font-medium"
            >
              {t.hero.explore}
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <Link href="#about" className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-xs text-white uppercase tracking-widest mb-2 font-medium">{t.hero.scroll}</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary-gold to-transparent" />
        </Link>
      </motion.div>
    </section>
  );
}
