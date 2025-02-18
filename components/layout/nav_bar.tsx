"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation_links = [
  {
    title: "About Us",
    href: "/about",
  },
];

const join_us_links = [
  {
    title: "Hospitals",
    href: "/join-us/hospital",
  },
  {
    title: "Financial Institutions & Insurance",
    href: "/join-us/insurance",
  },
  {
    title: "Affiliate Doctors",
    href: "/join-us/doctors",
  },
  {
    title: "Government Institutions",
    href: "/join-us/government",
  },
  {
    title: "Travel Agencies",
    href: "/join-us/travel-agency",
  },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0A1A2F]/80 backdrop-blur-lg border-b border-white/10 py-3"
          : "bg-transparent py-4"
      )}>
      <nav className='container px-6 mx-auto'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <span className='text-xl font-medium text-white'>Wehel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navigation_links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-white/80 hover:text-white transition-colors'>
                {link.title}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='ghost'
                  className='text-white/80 hover:text-white hover:bg-transparent px-0 group'>
                  <span>Join Us</span>
                  <ChevronDown
                    className='ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180'
                    aria-hidden='true'
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align='end'
                className='w-[300px] bg-[#0A1A2F] border-white/10'>
                <div className='px-2 py-3 text-center border-b border-white/10'>
                  <p className='text-sm font-medium text-[#FFD60A]'>
                    Partnership Programs
                  </p>
                </div>
                <div className='p-2'>
                  {join_us_links.map((link) => (
                    <DropdownMenuItem
                      key={link.href}
                      asChild
                      className='focus:bg-white/5 rounded-lg'>
                      <Link
                        href={link.href}
                        className='w-full py-3 px-4 text-left group'>
                        <p className='text-white text-base font-medium group-hover:text-[#FFD60A] transition-colors'>
                          {link.title}
                        </p>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant='ghost'
              className='text-white/80 hover:text-white hover:bg-transparent px-0'
              asChild>
              <Link href='/request-invite'>Request Invite</Link>
            </Button>
            <Button
              className='bg-[#FFD60A] hover:bg-[#FFD60A]/90 text-[#0A1A2F] font-medium px-6'
              asChild>
              <Link href='/contact'>Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button className='md:hidden p-2 text-white hover:text-[#FFD60A] transition-colors'>
                <Menu className='w-8 h-8' />
              </button>
            </SheetTrigger>
            <SheetContent
              side='right'
              className='bg-[#0A1A2F] border-white/10 p-6'>
              <nav
                className='flex flex-col gap-6'
                onClick={() => setIsSheetOpen(false)}>
                {navigation_links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='text-lg font-medium text-white/80 hover:text-white transition-colors'>
                    {link.title}
                  </Link>
                ))}
                <div className='py-4 border-t border-white/10'>
                  <p className='text-lg font-semibold text-white mb-4'>
                    Join Us
                  </p>
                  <div className='space-y-4'>
                    {join_us_links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className='block group'>
                        <div className='text-white/90 group-hover:text-[#FFD60A] transition-colors'>
                          {link.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className='mt-auto space-y-4'>
                  <Button
                    className='w-full bg-transparent border border-white/10 text-white hover:bg-white/5'
                    asChild>
                    <Link href='/request-invite'>Request Invite</Link>
                  </Button>
                  <Button
                    className='w-full bg-[#FFD60A] text-[#0A1A2F] hover:bg-[#FFD60A]/90'
                    asChild>
                    <Link href='/contact'>Contact Us</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
