"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className='relative pt-32 pb-20 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-[#0A1A2F]' />
        <div className='absolute inset-0 bg-gradient-to-t from-[#0A1A2F] to-transparent' />
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl'>
          <div className='absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FFD60A] rounded-full blur-[128px] opacity-20' />
        </div>
      </div>

      {/* Content */}
      <div className='container relative px-6 mx-auto z-10'>
        <div className='max-w-3xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8'>
            <span className='text-sm text-[#FFD60A]'>Get in Touch</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6'>
            Let's Start a Conversation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='text-lg text-white/60 max-w-2xl mx-auto'>
            Whether you're looking to partner with us, have questions about our
            services, or need assistance, our team is here to help you navigate
            the world of medical tourism.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
