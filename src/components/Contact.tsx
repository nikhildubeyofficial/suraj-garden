"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

import { useTranslation } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-[#050303] relative border-t border-gray-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary-red dark:text-primary-gold font-medium tracking-widest uppercase text-sm mb-4 block">
              {t.contact.label}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t.contact.title} <br />
              <span className="font-serif italic text-primary-gold">{t.contact.title_span}</span>
            </h2>
            <p className="text-foreground/70 text-lg font-light mb-12 max-w-md">
              {t.contact.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center mr-6 text-primary-red shadow-sm border border-gray-100 dark:border-zinc-800">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">{t.contact.visit}</h4>
                  <p className="text-foreground/60 mt-1">{t.contact.info.address.split(',').map((part, index) => (
                    <span key={index}>{part}{index < 2 && <br />} {index === 1 && part.trim() === 'Ujjain' ? '' : ''}</span>
                  ))}</p>
                  {/* Simplified address mapping to avoid too much complexity, using the translation directly is better */}
                  <p className="text-foreground/60 mt-1">{t.contact.info.address}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center mr-6 text-primary-red shadow-sm border border-gray-100 dark:border-zinc-800">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">{t.contact.call}</h4>
                  <p className="text-foreground/60 mt-1">{t.contact.info.phone}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center mr-6 text-primary-red shadow-sm border border-gray-100 dark:border-zinc-800">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">{t.contact.email}</h4>
                  <p className="text-foreground/60 mt-1">{t.contact.info.email}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-zinc-900/50 p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-zinc-800"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center lg:text-left">{t.contact.form_title}</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">{t.contact.first_name}</label>
                  <input type="text" className="w-full px-4 py-3 bg-zinc-50 dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-primary-gold focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">{t.contact.last_name}</label>
                  <input type="text" className="w-full px-4 py-3 bg-zinc-50 dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-primary-gold focus:border-transparent outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">{t.contact.email_label}</label>
                <input type="email" className="w-full px-4 py-3 bg-zinc-50 dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-primary-gold focus:border-transparent outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">{t.contact.event_label}</label>
                <input type="text" className="w-full px-4 py-3 bg-zinc-50 dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-primary-gold focus:border-transparent outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">{t.contact.message_label}</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-zinc-50 dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-primary-gold focus:border-transparent outline-none transition-all resize-none" />
              </div>

              <button type="button" className="w-full group relative px-8 py-4 bg-primary-red text-white overflow-hidden rounded-xl shadow-lg transition-all hover:scale-[1.02]">
                <span className="relative z-10 flex items-center justify-center font-medium">
                  {t.contact.submit}
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-red-900 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
