"use client"
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Users, Calendar, Star, Music } from "lucide-react";

export default function ServicesPage() {
  const services = [
    { title: "Wedding Planning", icon: Users, desc: "End-to-end wedding curation, from venue selection to styling and coordination." },
    { title: "Corporate Events", icon: Calendar, desc: "Product launches, conferences, and team retreats designed to elevate your brand." },
    { title: "Gala Dinners", icon: Star, desc: "Luxurious evenings featuring exquisite catering, styling, and entertainment." },
    { title: "Concert Management", icon: Music, desc: "Large scale entertainment events with comprehensive logistics and stage management." }
  ];

  return (
    <div className="flex flex-col gap-24 pb-20">
      <section className="relative pt-32 pb-10 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold font-heading mb-6"
          >
            Our <span className="text-primary italic">Services</span>
          </motion.h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Comprehensive solutions for every occasion.</p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
              <Card className="h-full bg-secondary/10 hover:bg-secondary/30 transition-colors">
                <CardHeader>
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
