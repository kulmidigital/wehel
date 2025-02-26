"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ExternalLink,
} from "lucide-react";

const contact_methods = [
  {
    icon: Mail,
    title: "Email Us",
    info: "info@wehelgroup.com",
    href: "mailto:info@wehelgroup.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    info: "+254 700 000 000",
    href: "tel:+254700000000",
  },
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

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ContactInfo() {
  return (
    <section className='py-20 relative overflow-hidden bg-[#0284c7]'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(60deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-60deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20'></div>

      <div className='container px-6 mx-auto relative'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto'>
          {contact_methods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className='group block'>
              <div className='bg-[#026da7] backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 h-[120px] hover:border-[#4ade80]/40 transition-all duration-300 shadow-lg'>
                <div className='flex items-center space-x-4'>
                  <div className='bg-[#4ade80]/20 rounded-lg p-3 border border-[#4ade80]/30'>
                    <method.icon className='w-6 h-6 text-[#4ade80]' />
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-white mb-2'>
                      {method.title}
                    </h3>
                    <p className='text-white group-hover:text-[#4ade80] transition-colors'>
                      {method.info}
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className='mt-16 text-center'>
          <h3 className='text-lg font-bold text-white mb-6'>Connect With Us</h3>
          <div className='flex justify-center space-x-6'>
            {social_links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className='text-white hover:text-[#4ade80] transition-colors bg-[#026da7] p-3 rounded-full border-2 border-white/20 hover:border-[#4ade80]/40 shadow-lg'
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}>
                <span className='sr-only'>{link.name}</span>
                <link.icon className='h-6 w-6' />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
