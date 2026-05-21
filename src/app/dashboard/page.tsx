"use client"
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, MapPin, Ticket, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  if (!user) return null;

  const bookings = [
    { id: "BKG-9821", event: "The Golden Era Gala", date: "Oct 24, 2026", status: "Confirmed", tickets: 2 },
    { id: "BKG-9822", event: "Tech Innovators Summit", date: "Nov 12, 2026", status: "Pending", tickets: 1 }
  ];

  return (
    <div className="container mx-auto px-4 py-12 min-h-[60vh]">
      <div className="mb-12">
        <h1 className="text-3xl font-bold font-heading mb-2">Welcome back, {user.name}</h1>
        <p className="text-muted-foreground">Manage your bookings and account settings here.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-xl font-semibold mb-4">My Bookings</h2>
          {bookings.map((b) => (
            <Card key={b.id} className="bg-secondary/10 border-border">
              <CardContent className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="font-bold text-lg">{b.event}</h3>
                  <div className="flex gap-4 text-sm text-muted-foreground mt-2">
                    <span className="flex items-center gap-1"><Calendar size={14}/> {b.date}</span>
                    <span className="flex items-center gap-1"><Ticket size={14}/> {b.tickets} Ticket(s)</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 w-full md:w-auto">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${b.status === 'Confirmed' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                    {b.status}
                  </span>
                  <Button variant="outline" size="sm">View Ticket</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <Card className="bg-secondary/10 border-border">
            <CardHeader>
              <CardTitle>Account Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">{user.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
              <Button variant="outline" className="w-full mt-4">Edit Profile</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
