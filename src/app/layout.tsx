import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/components/providers/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aura Events | Premium Event Management",
  description: "Crafting unforgettable experiences for weddings, corporate events, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} antialiased scroll-smooth`}>
      <body className="bg-background text-foreground font-sans min-h-screen flex flex-col overflow-x-hidden">
        <Providers>
          <Navbar />
          <main className="flex-grow pt-24">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
