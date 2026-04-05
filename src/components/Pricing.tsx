"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Standard Package",
    description: "Perfect for intimate gatherings and celebrations.",
    features: [
      "Access to Main Lawn",
      "Standard Lighting Setup",
      "Up to 500 Guests",
      "Basic Catering Options",
      "Parking for 100 Vehicles",
    ],
    highlight: false,
  },
  {
    name: "Premium Wedding",
    description: "Our most popular choice for grand Indian weddings.",
    features: [
      "Access to All Lawns & Banquet",
      "Premium Decorative Lighting",
      "Up to 2000 Guests",
      "Gourmet Catering Menu",
      "Valet Parking Services",
      "Bridal & Groom Suites",
      "Dedicated Event Manager",
    ],
    highlight: true,
  },
  {
    name: "Corporate Events",
    description: "Tailored spaces for professional gatherings and galas.",
    features: [
      "A/C Banquet Hall Access",
      "Audio-Visual Setup",
      "Up to 800 Guests",
      "Custom Lunch/Dinner Menu",
      "Priority Parking",
      "High-speed Wi-Fi",
    ],
    highlight: false,
  },
];

export default function Pricing() {
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
            Packages
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            Tailored for Your <span className="font-serif italic text-primary-gold">Occasion</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70 text-lg font-light"
          >
            Explore our curated packages designed to accommodate events of all scales. Contact us for personalized quotations.
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
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-foreground/70 font-light mb-8 h-12">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-foreground">Custom</span>
                <span className="text-foreground/60 ml-2">pricing</span>
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
                Inquire Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
