"use client";

import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { weddingData } from "@/data/weddingData";
import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#efe4d6] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Title with smooth FadeIn */}
        <FadeIn y={30} duration={0.8}>
          <SectionTitle
            eyebrow="Gallery"
            title="Moments We Cherish"
            description="A glimpse into the memories, joy, and love that brought us to this special celebration."
          />
        </FadeIn>

        {/* Image Grid with Animation */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {weddingData.gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ 
                duration: 0.7, 
                delay: index % 3 * 0.15, // Creates a nice left-to-right stagger effect
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-md transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative h-[400px] w-full overflow-hidden">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}