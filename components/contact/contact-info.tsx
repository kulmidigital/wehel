"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
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

export function ContactInfo() {
  return (
    <section className='py-20 relative overflow-hidden'>
      <div className='container px-6 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto'>
          {contact_methods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className='group block'>
              <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-[120px] hover:bg-white/10 transition-colors'>
                <div className='flex items-center space-x-4'>
                  <div className='bg-[#FFD60A]/10 rounded-lg p-3'>
                    <method.icon className='w-6 h-6 text-[#FFD60A]' />
                  </div>
                  <div>
                    <h3 className='text-lg font-medium text-white mb-2'>
                      {method.title}
                    </h3>
                    <p className='text-white group-hover:text-[#FFD60A] transition-colors'>
                      {method.info}
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className='mt-16 text-center'>
          <h3 className='text-lg font-medium text-white mb-6'>
            Connect With Us
          </h3>
          <div className='flex justify-center space-x-6'>
            {social_links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className='text-white/60 hover:text-[#FFD60A] transition-colors'
                whileHover={{ scale: 1.1 }}
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
