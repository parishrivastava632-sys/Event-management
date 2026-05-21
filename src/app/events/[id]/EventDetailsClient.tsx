"use client"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Calendar, MapPin, Clock, Users, Ticket } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function EventDetailsPage() {
  const params = useParams();
  const { user } = useAuth();
  const router = useRouter();
  
  // Mock event data based on ID
  const event = {
    id: params.id as string,
    title: "The Golden Era Gala",
    date: "Oct 24, 2026",
    time: "7:00 PM - 12:00 AM",
    location: "Grand Plaza, NY",
    price: 199,
    capacity: 500,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    description: "An evening of timeless elegance celebrating the finest in art and culture. Join us for a curated experience featuring world-class dining, live orchestral performances, and an exclusive art auction. Dress code is strictly black tie. Prepare to be transported back to an era of unparalleled glamour and sophistication."
  };

  const handleBooking = () => {
    if (!user) {
      alert("Please login first to book a ticket.");
      return;
    }
    // Simulate Razorpay / Booking flow
    alert("Mock Booking Successful! Redirecting to dashboard...");
    router.push("/dashboard");
  };

  return (
    <div className="pb-20">
      <div className="h-[50vh] w-full relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
        <img src={`${event.img}?q=80&w=2070&auto=format&fit=crop`} alt={event.title} className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-4 relative z-20 -mt-32">
        <div className="bg-secondary/60 backdrop-blur-xl border border-border rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-8 border-b border-border/50 pb-8">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold font-heading mb-4"
              >
                {event.title}
              </motion.h1>
              <div className="flex flex-wrap gap-6 text-muted-foreground">
                <span className="flex items-center gap-2"><Calendar className="text-primary"/> {event.date}</span>
                <span className="flex items-center gap-2"><Clock className="text-primary"/> {event.time}</span>
                <span className="flex items-center gap-2"><MapPin className="text-primary"/> {event.location}</span>
              </div>
            </div>
            
            <div className="bg-background rounded-2xl p-6 border border-border min-w-[250px] text-center">
              <p className="text-sm text-muted-foreground mb-1">Ticket Price</p>
              <p className="text-4xl font-bold text-primary mb-4">${event.price}</p>
              <Button variant="primary" size="lg" className="w-full" onClick={handleBooking}>Book Now</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold font-heading mb-4">About This Event</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{event.description}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold font-heading mb-4">Event Details</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded text-primary"><Users size={20}/></div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Capacity</p>
                    <p className="text-sm">{event.capacity} Attendees</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded text-primary"><Ticket size={20}/></div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Ticket Type</p>
                    <p className="text-sm">Standard Pass</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
