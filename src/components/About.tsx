"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Lush Green Landscapes",
  "Elegant Banquet Halls",
  "Premium Catering Services",
  "Ample Parking Space",
  "Prime Location in Ujjain",
  "Dedicated Event Managers",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary-gold font-medium tracking-wider uppercase text-sm block mb-3">
                Discover Suraj Garden
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Where Your Dreams <br className="hidden md:block" />
                <span className="text-primary-red">Take Root</span>
              </h2>
            </div>
            
            <p className="text-foreground/80 text-lg leading-relaxed font-light">
              Nestled in the spiritual heart of Ujjain, Suraj Garden is the city&apos;s most exquisite venue for grand celebrations. We blend natural beauty with luxurious comfort to bring your most cherished moments to life. 
            </p>
            
            <p className="text-foreground/80 text-lg leading-relaxed font-light">
              From intimate gatherings to majestic weddings, our sprawling lawns and opulent banquet facilities are designed to exceed your expectations. Our dedicated team ensures flawless execution, leaving you free to immerse yourself in the joy of the occasion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, i) => (
                <motion.div 
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="text-primary-gold w-5 h-5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <div className="inline-flex items-center pb-1 border-b-2 border-primary-red hover:border-primary-gold transition-colors text-primary-red hover:text-primary-gold font-semibold uppercase tracking-widest cursor-pointer">
                Know More About Us
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary-gold/20 rounded-t-full -translate-x-4 translate-y-4" />
              <div className="absolute inset-0 bg-primary-red/10 rounded-t-full translate-x-4 -translate-y-4" />
              <div className="relative h-full w-full rounded-t-full overflow-hidden border-8 border-white dark:border-zinc-900 shadow-2xl">
                {/* We'll just use a CSS gradient as a placeholder structural graphic if an image isn't available, or a solid color with the hero image's aesthetics */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5e0b15] to-[#200206] mix-blend-multiply" />
                <img 
                  src="/hero-venue.png" 
                  alt="Suraj Garden View" 
                  className="object-cover w-full h-full opacity-80"
                />
              </div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl max-w-[200px]"
              >
                <div className="text-4xl font-bold text-primary-gold mb-1">10+</div>
                <div className="text-sm text-foreground/80 font-medium">Years of hosting unforgettable events</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
