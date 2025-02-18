"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

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
  {
    title: "Services",
    href: "/services",
  },
];

const join_us_links = [
  {
    title: "Hospitals",
    href: "/join-us/hospital",
    description: "Partner with us as a healthcare provider.",
  },
  {
    title: "Financial Institutions & Insurance",
    href: "/join-us/insurance",
    description: "Collaborate on healthcare financing solutions.",
  },
  {
    title: "Affiliate Doctors",
    href: "/join-us/doctors",
    description: "Join our network of medical professionals.",
  },
  {
    title: "Government Institutions",
    href: "/join-us/government",
    description: "Establish public-private healthcare partnerships.",
  },
  {
    title: "Travel Agencies",
    href: "/join-us/travel-agency",
    description: "Partner in medical tourism services.",
  },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-[#0A1A2F]/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      )}>
      <nav className='container relative z-10 flex h-20 items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center space-x-2'>
          <motion.span
            className='text-2xl font-bold text-white'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            Wehel
          </motion.span>
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
                      <div className='space-y-1'>
                        <p className='text-white text-base font-medium group-hover:text-[#FFD60A] transition-colors'>
                          {link.title}
                        </p>
                        <p className='text-white/60 text-xs font-normal'>
                          {link.description}
                        </p>
                      </div>
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
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className='md:hidden'>
            <Button
              variant='ghost'
              size='icon'
              className='text-white hover:bg-transparent'>
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side='right'
            className='w-full max-w-xs bg-[#0A1A2F] border-l border-white/10 p-6'>
            <nav className='flex flex-col gap-6'>
              {navigation_links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='text-lg font-medium text-white/80 hover:text-white transition-colors'
                  onClick={() => setIsOpen(false)}>
                  {link.title}
                </Link>
              ))}
              <div className='py-4 border-t border-white/10'>
                <p className='text-lg font-semibold text-white mb-4'>Join Us</p>
                <div className='space-y-4'>
                  {join_us_links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className='block group'
                      onClick={() => setIsOpen(false)}>
                      <div className='text-white/90 group-hover:text-[#FFD60A] transition-colors'>
                        {link.title}
                      </div>
                      <div className='text-sm text-white/60 group-hover:text-white/80 transition-colors mt-1'>
                        {link.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className='mt-auto space-y-4'>
                <Button
                  className='w-full bg-transparent border border-white/10 text-white hover:bg-white/5'
                  asChild>
                  <Link href='/request-invite' onClick={() => setIsOpen(false)}>
                    Request Invite
                  </Link>
                </Button>
                <Button
                  className='w-full bg-[#FFD60A] text-[#0A1A2F] hover:bg-[#FFD60A]/90'
                  asChild>
                  <Link href='/contact' onClick={() => setIsOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
