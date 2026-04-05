"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/hero-venue.png", alt: "Suraj Garden Venue" },
  { src: "/gallery-wedding.png", alt: "Elegant Wedding Setup" },
  { src: "/gallery-banquet.png", alt: "Royal Banquet Hall" },
  { src: "/gallery-lawn.png", alt: "Lush Greenery" },
  { src: "/gallery-food.png", alt: "Gourmet Catering" },
  { src: "/hero-venue.png", alt: "Evening Lighting" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-gold font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            Our Gallery
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            Capturing the <span className="text-primary-red">Magic</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70 text-lg font-light"
          >
            A glimpse into the stunning events hosted at Suraj Garden. Every picture tells a story of elegance, joy, and unforgettable celebrations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-xl shadow-lg group cursor-pointer ${
                i === 0 ? "md:col-span-2 md:row-span-2 h-64 md:h-full" : "h-64"
              }`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 duration-500">
                <p className="text-white font-medium tracking-wider">{img.alt}</p>
              </div>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
