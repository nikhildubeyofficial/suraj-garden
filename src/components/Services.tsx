"use client";

import { motion } from "framer-motion";
import { Trees, UtensilsCrossed, Music, Camera, Sparkles, Building2 } from "lucide-react";

import { useTranslation } from "@/context/LanguageContext";

const icons = [Building2, Trees, UtensilsCrossed, Sparkles, Music, Camera];

export default function Services() {
  const { t } = useTranslation();
  
  const services = t.services.items.map((item, i) => ({
    ...item,
    icon: icons[i],
  }));

  return (
    <section id="services" className="py-24 bg-zinc-50 dark:bg-[#050303] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-red/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-red dark:text-primary-gold font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            {t.services.label}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            {t.services.title} <br />
            <span className="font-serif italic text-primary-gold">{t.services.title_span}</span> {t.services.title_end}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70 text-lg font-light"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative bg-white dark:bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:border-primary-gold/50 transition-colors shadow-sm hover:shadow-xl dark:shadow-none"
            >
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary-red to-primary-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl" />
              
              <div className="w-14 h-14 bg-red-50 dark:bg-red-950/30 rounded-xl flex items-center justify-center mb-6 text-primary-red group-hover:bg-primary-red group-hover:text-white transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 font-serif">
                {service.title}
              </h3>
              
              <p className="text-foreground/70 font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
