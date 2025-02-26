"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className='relative pt-32 pb-20 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-[#0284c7]' />
        <div className='absolute inset-0 bg-gradient-to-t from-[#0284c7] to-transparent' />
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl'>
          <div className='absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4ade80] rounded-full blur-[128px] opacity-20' />
        </div>
      </div>

      {/* Decorative Gradient Orbs */}
      <div className='absolute inset-0 overflow-hidden z-10'>
        {/* Top right gradient orb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className='absolute -top-32 -right-32 w-64 h-64 bg-[#4ade80] rounded-full blur-[120px] opacity-30'
        />
        {/* Bottom left gradient orb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className='absolute -bottom-32 -left-32 w-64 h-64 bg-[#38bdf8] rounded-full blur-[120px] opacity-30'
        />
      </div>

      {/* Background Pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(60deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-60deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-25'></div>

      {/* Content */}
      <div className='container relative px-6 mx-auto z-20'>
        <div className='max-w-3xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='inline-flex items-center px-4 py-2 rounded-full bg-[#026da7] backdrop-blur-sm border-2 border-[#4ade80]/40 mb-8 shadow-lg'>
            <span className='text-sm font-bold text-[#4ade80]'>
              Get in Touch
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
            Let's Start a Conversation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='text-lg text-white max-w-2xl mx-auto'>
            Whether you're looking to partner with us, have questions about our
            services, or need assistance, our team is here to help you navigate
            the world of medical tourism.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
