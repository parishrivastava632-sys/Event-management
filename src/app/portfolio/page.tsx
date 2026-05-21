"use client"
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const images = [
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    "https://images.unsplash.com/photo-1531058020387-3be344556be6",
    "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
  ];

  return (
    <div className="flex flex-col gap-24 pb-20">
      <section className="relative pt-32 pb-10 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold font-heading mb-6"
          >
            Our <span className="text-primary italic">Portfolio</span>
          </motion.h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A glimpse into the magical moments we've created.</p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="aspect-square relative overflow-hidden rounded-xl">
              <img src={`${img}?q=80&w=600&auto=format&fit=crop`} alt={`Portfolio ${i}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
