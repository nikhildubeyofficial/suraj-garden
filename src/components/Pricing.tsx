"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { useTranslation } from "@/context/LanguageContext";

export default function Pricing() {
  const { t } = useTranslation();
  const plans = t.pricing.plans.map((plan, i) => ({
    ...plan,
    highlight: i === 1, // Premium is index 1
  }));

  return (
    <section id="pricing" className="py-24 bg-zinc-50 dark:bg-[#050303]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-red dark:text-primary-gold font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            {t.pricing.label}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            {t.pricing.title} <span className="font-serif italic text-primary-gold">{t.pricing.title_span}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70 text-lg font-light"
          >
            {t.pricing.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative bg-white dark:bg-zinc-900 rounded-3xl p-8 border ${
                plan.highlight 
                  ? "border-primary-gold shadow-2xl scale-100 md:scale-105 z-10" 
                  : "border-gray-200 dark:border-zinc-800 shadow-lg"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-red to-primary-gold text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                  {t.pricing.popular}
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-foreground/70 font-light mb-8 h-12">{plan.desc}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-foreground">{t.pricing.custom_pricing.split(' ')[0]}</span>
                <span className="text-foreground/60 ml-2">{t.pricing.custom_pricing.split(' ').slice(1).join(' ')}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.highlight ? "text-primary-gold" : "text-primary-red"}`} />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 rounded-xl font-medium transition-all ${
                  plan.highlight
                    ? "bg-primary-red text-white hover:bg-red-900 shadow-xl shadow-red-900/20"
                    : "bg-gray-100 dark:bg-zinc-800 text-foreground hover:bg-gray-200 dark:hover:bg-zinc-700"
                }`}
              >
                {t.pricing.inquire}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
