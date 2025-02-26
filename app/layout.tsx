import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

import { NavBar } from "@/components/layout/nav_bar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { ScrollArea } from "@/components/ui/scroll-area";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Wehel - Global Medical Tourism Services",
  description:
    "Experience seamless healthcare access worldwide with personalized support, transparent pricing, and comprehensive medical tourism services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={bricolage.variable}>
      <body className={`${bricolage.className} antialiased overflow-x-hidden`}>
        <div className='relative min-h-screen'>
          <NavBar />
          {children}
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
