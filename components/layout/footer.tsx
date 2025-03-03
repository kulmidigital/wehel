"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { PartnerDialog } from "@/components/ui/partner-dialog";

const company_links = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

const services_links = [
  { name: "Pre-Treatment Planning", href: "/services#planning" },
  { name: "Travel & Accommodation", href: "/services#travel" },
  { name: "Treatment & Care", href: "/services#treatment" },
  { name: "Insurance Integration", href: "/services#insurance" },
  { name: "Post-Treatment Support", href: "/services#support" },
];

const partnership_links = [
  { name: "Hospitals", href: "/join-us/hospital" },
  { name: "Insurance Companies", href: "/join-us/insurance" },
  { name: "Affiliate Doctors", href: "/join-us/doctors" },
  { name: "Government Institutions", href: "/join-us/government" },
  { name: "Travel Agencies", href: "/join-us/travel-agency" },
];

const social_links = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61573530185139#",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/wehelgroup/?utm_source=ig_web_button_share_sheet",
    icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer className='bg-[#0A1A2F] border-t border-white/10'>
      <div className='container px-6 py-12 mx-auto'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {/* Company Info */}
          <div className='space-y-6'>
            <Link href='/' className='inline-block'>
              <motion.span
                className='text-2xl font-bold text-white'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Wehel
              </motion.span>
            </Link>
            <p className='text-sm text-white/60 max-w-sm'>
              Transforming medical tourism through seamless healthcare access,
              comprehensive support, and trusted partnerships worldwide.
            </p>
            <div className='flex space-x-4'>
              {social_links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className='text-white/60 hover:text-[#FFD60A] transition-colors'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                  <span className='sr-only'>{link.name}</span>
                  <link.icon className='h-5 w-5' />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-medium text-white mb-4'>Company</h3>
            <ul className='space-y-3'>
              {company_links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-sm text-white/60 hover:text-[#FFD60A] transition-colors inline-flex items-center group'>
                    <ArrowRight className='h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all' />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-lg font-medium text-white mb-4'>Services</h3>
            <ul className='space-y-3'>
              {services_links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-sm text-white/60 hover:text-[#FFD60A] transition-colors inline-flex items-center group'>
                    <ArrowRight className='h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all' />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-medium text-white mb-4'>Contact Us</h3>
            <ul className='space-y-4'>
              <li>
                <a
                  href='mailto:info@wehelgroup.com'
                  className='text-sm text-white/60 hover:text-[#FFD60A] transition-colors inline-flex items-center'>
                  <Mail className='h-4 w-4 mr-2 text-[#FFD60A]' />
                  info@wehelgroup.com
                </a>
              </li>
              <li>
                <a
                  href='tel:+254700000000'
                  className='text-sm text-white/60 hover:text-[#FFD60A] transition-colors inline-flex items-center'>
                  <Phone className='h-4 w-4 mr-2 text-[#FFD60A]' />
                  +254 710 961001
                </a>
              </li>
              <li className='flex items-start'>
                <MapPin className='h-4 w-4 mr-2 text-[#FFD60A] mt-1 shrink-0' />
                <span className='text-sm text-white/60'>
                  Nairobi, Kenya
                  <br />
                  Business District
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Partnership Section */}
        <div className='mt-12 pt-8 border-t border-white/10'>
          <h3 className='text-lg font-medium text-white mb-4'>
            Partnership Programs
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {partnership_links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='text-sm text-white/60 hover:text-[#FFD60A] transition-colors inline-flex items-center group'>
                <ArrowRight className='h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all' />
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-12 pt-8 border-t border-white/10'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0'>
              <p className='text-sm text-white/60'>
                © {new Date().getFullYear()} Wehel. All rights reserved.
              </p>
              <span className='hidden md:inline mx-2 text-white/60'>•</span>
              <a
                href='https://www.kulmi.digital/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm text-white/60 hover:text-[#FFD60A] transition-colors'>
                Designed by Kulmi Digital
              </a>
            </div>
            <div className='mt-4 md:mt-0'>
              <PartnerDialog
                trigger={
                  <button className='text-sm text-[#FFD60A] hover:text-[#FFD60A]/80 transition-colors inline-flex items-center group'>
                    Start Your Healthcare Journey
                    <ArrowRight className='h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform' />
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
