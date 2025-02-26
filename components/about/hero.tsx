"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "50+", label: "Healthcare Partners" },
  { number: "100%", label: "Patient Satisfaction" },
];

export function Hero() {
  return (
    <section className='relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex items-center bg-[#0284c7]'>
      {/* Background Pattern */}
      <div className='absolute inset-0'>
        <div
          className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:4rem_4rem]'
          style={{
            maskImage:
              "radial-gradient(ellipse 50% 80% at 50% 50%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 50% 80% at 50% 50%, black, transparent)",
          }}
        />
      </div>

      {/* Decorative Gradient Orbs */}
      <div className='absolute inset-0 overflow-hidden'>
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

      {/* Background Globe */}
      <div className='absolute right-0 top-1/2 -translate-y-1/2 opacity-15'>
        <Image
          src='/images/large-globe.webp'
          alt='Global Healthcare'
          width={800}
          height={800}
          className='object-cover'
        />
      </div>

      <div className='container relative px-6 mx-auto'>
        <div className='max-w-4xl'>
          {/* Company Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='inline-flex items-center px-4 py-2 rounded-full bg-[#026da7] backdrop-blur-sm border-2 border-[#4ade80]/40 mb-8 shadow-lg'>
            <Globe2 className='w-5 h-5 text-[#4ade80] mr-2' />
            <span className='text-sm font-bold text-white'>
              Global Healthcare Excellence
            </span>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6'>
              Transforming <br />
              <span className='relative inline-block'>
                <span className='relative z-10 text-[#4ade80]'>Healthcare</span>
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className='absolute bottom-2 left-0 h-4 w-full -rotate-2 bg-[#4ade80]/20'
                />
              </span>{" "}
              Access
            </h1>
            <p className='text-xl text-white mb-12 max-w-2xl'>
              A premier medical tourism company committed to making world-class
              healthcare accessible, seamless, and stress-free for international
              patients.
            </p>
          </motion.div>

          {/* Stats */}
          <div className='grid grid-cols-3 gap-8 max-w-2xl'>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className='text-center bg-[#026da7] p-4 rounded-xl border-2 border-[#4ade80]/20 shadow-lg hover:border-[#4ade80]/40 transition-all duration-300 hover:-translate-y-1'>
                <div className='text-4xl font-bold text-[#4ade80] mb-2'>
                  {stat.number}
                </div>
                <div className='text-sm font-medium text-white'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
