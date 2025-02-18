"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stats = [
  {
    number: "20K+",
    label: "Patients Served",
    delay: 0.6,
  },
  {
    number: "98%",
    label: "Success Rate",
    delay: 0.7,
  },
  {
    number: "85%",
    label: "Cost Savings",
    delay: 0.8,
  },
];

export function Hero() {
  return (
    <div className='relative min-h-screen overflow-hidden bg-[#0A1A2F]'>
      {/* Background Pattern */}
      <div className='absolute inset-0'>
        <div
          className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]'
          style={{
            maskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 110%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 110%)",
          }}
        />
      </div>

      {/* Content */}
      <div className='relative container mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Announcement Badge */}
          <motion.div
            {...fadeIn}
            className='inline-flex mb-8 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-white/80'>
            Transforming Healthcare Access Globally
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className='mb-8 text-4xl font-medium tracking-tight text-white md:text-6xl lg:text-7xl'>
            Your Gateway to{" "}
            <span className='relative inline-block'>
              <span className='relative z-10 text-[#FFD60A]'>
                Global Healthcare
              </span>
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className='absolute bottom-2 left-0 h-3 w-full -rotate-2 bg-[#FFD60A]/10'
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeIn}
            transition={{ delay: 0.3, duration: 0.6 }}
            className='mb-12 text-lg text-white/60 max-w-2xl mx-auto'>
            Experience world-class medical care with personalized support every
            step of the way. Your health journey begins here.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-20'>
            <Button
              size='lg'
              className='relative w-full sm:w-auto min-w-[200px] h-12 bg-[#FFD60A] hover:bg-[#FFD60A]/90 text-[#0A1A2F] font-medium px-8'
              asChild>
              <Link href='/request-invite'>Start Your Journey</Link>
            </Button>
            <Button
              size='lg'
              className='w-full sm:w-auto min-w-[200px] h-12 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 border-0 px-8'
              asChild>
              <Link href='/services'>Learn More</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto'>
            {stats.map((stat) => (
              <motion.div
                key={stat.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: stat.delay, duration: 0.6 }}
                className='relative text-center'>
                <span className='block text-6xl font-medium text-white mb-2'>
                  {stat.number}
                </span>
                <span className='block text-sm text-white/60'>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
