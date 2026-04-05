"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import { useTranslation } from "@/context/LanguageContext";

export default function Testimonials() {
  const { t } = useTranslation();
  const testimonials = t.testimonials.items;

  return (
    <section className="py-24 bg-white dark:bg-[#0a0505] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-gold/20 to-transparent -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-gold font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            {t.testimonials.label}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            {t.testimonials.title.replace(t.testimonials.title_span, '')} <span className="text-primary-red">{t.testimonials.title_span}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-zinc-50 dark:bg-zinc-900/40 p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary-gold/10" />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-primary-gold text-primary-gold" />
                ))}
              </div>
              
              <p className="text-foreground/80 font-light leading-relaxed mb-8 italic">
                &quot;{test.content}&quot;
              </p>
              
              <div>
                <h4 className="font-bold text-foreground">{test.name}</h4>
                <p className="text-sm text-foreground/60">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
