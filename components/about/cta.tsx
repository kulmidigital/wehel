"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2, Users, Clock, ExternalLink } from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Global Network",
    description: "Access to international healthcare facilities",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated team of healthcare professionals",
  },
  {
    icon: Clock,
    title: "24/7 Assistance",
    description: "Round-the-clock support for your needs",
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

export function CTA() {
  return (
    <section className='relative py-24 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-b from-[#0284c7]/98 via-[#0284c7]/95 to-[#0284c7]/98 z-10' />
        <div className='absolute inset-0 bg-[#0284c7]/60' />
        <Image
          src='/images/hospital-bed.webp'
          alt='Healthcare Facility'
          fill
          className='object-cover opacity-50'
          priority
        />
      </div>

      {/* Grid Pattern */}
      <div className='absolute inset-0 z-20'>
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

      <div className='container relative px-6 mx-auto z-30'>
        <div className='max-w-5xl mx-auto'>
          {/* Main Content */}
          <div className='text-center mb-12'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='inline-flex items-center px-4 py-2 rounded-full bg-[#026da7] backdrop-blur-sm border-2 border-[#4ade80]/40 mb-8 shadow-lg'>
              <span className='text-sm font-bold text-[#4ade80]'>
                Join Wehel Today
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
              Begin Your Journey to{" "}
              <span className='relative inline-block'>
                <span className='relative z-10 text-[#4ade80]'>
                  World-Class Healthcare
                </span>
                <motion.span
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className='absolute bottom-2 left-0 h-4 w-full -rotate-2 bg-[#4ade80]/20'
                />
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='text-lg text-white max-w-2xl mx-auto mb-12'>
              Join thousands of patients who have trusted Wehel to guide them
              through their medical journey. Let us help you access world-class
              healthcare with confidence.
            </motion.p>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className='bg-[#026da7] backdrop-blur-md rounded-xl p-6 border-2 border-white/20 shadow-lg hover:border-[#4ade80]/40 transition-all duration-300'>
                <div className='w-14 h-14 rounded-lg bg-[#4ade80]/20 flex items-center justify-center mb-4 border border-[#4ade80]/30'>
                  <feature.icon className='w-7 h-7 text-[#4ade80]' />
                </div>
                <h3 className='text-lg font-bold text-white mb-2'>
                  {feature.title}
                </h3>
                <p className='text-white'>{feature.description}</p>

                {/* Decorative accent line */}
                <div className='h-1 w-1/3 bg-gradient-to-r from-[#4ade80] to-transparent rounded-full mt-4'></div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Button
              size='lg'
              className='w-full sm:w-auto bg-[#4ade80] hover:bg-[#4ade80]/90 text-[#0284c7] font-bold px-8 h-12 shadow-lg border-2 border-[#4ade80]/80 hover:scale-105 transition-transform duration-300 relative overflow-hidden group'
              asChild>
              <Link href='/request-invite' className='inline-flex items-center'>
                <span className='relative z-10'>Get Started</span>
                <div className='relative z-10 ml-2 p-1 rounded-full bg-[#0284c7]/20 group-hover:bg-[#0284c7]/30 transition-colors duration-300'>
                  <ExternalLink className='h-4 w-4' />
                </div>
                {/* Button background animation */}
                <motion.div
                  className='absolute inset-0 w-full h-full bg-[#22c55e] -z-10'
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-[#4ade80]/40 font-bold px-8 h-12 shadow-lg backdrop-blur-md hover:scale-105 transition-all duration-300'
              asChild>
              <Link href='/contact'>Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
