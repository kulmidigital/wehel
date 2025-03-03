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
    <section className='relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex items-center'>
      {/* Background Pattern */}
      <div className='absolute inset-0'>
        <div
          className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]'
          style={{
            maskImage:
              "radial-gradient(ellipse 50% 80% at 50% 50%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 50% 80% at 50% 50%, black, transparent)",
          }}
        />
      </div>

      {/* Background Globe */}
      <div className='absolute right-0 top-1/2 -translate-y-1/2 opacity-10'>
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
            className='inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8'>
            <Globe2 className='w-4 h-4 text-[#FFD60A] mr-2' />
            <span className='text-sm text-white/80'>
              Global Healthcare Excellence
            </span>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6'>
              Transforming <br />
              <span className='relative inline-block'>
                <span className='relative z-10 text-[#FFD60A]'>Healthcare</span>
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className='absolute bottom-2 left-0 h-3 w-full -rotate-2 bg-[#FFD60A]/10'
                />
              </span>{" "}
              Access
            </h1>
            <p className='text-xl text-white/60 mb-12 max-w-2xl'>
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
                className='text-center'>
                <div className='text-4xl font-medium text-[#FFD60A] mb-2'>
                  {stat.number}
                </div>
                <div className='text-sm text-white/60'>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
