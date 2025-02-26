"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Target, Users, Globe } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Patient-Centric Care",
    description: "Personalized treatment plans and transparent communication",
  },
  {
    icon: Users,
    title: "Cultural Sensitivity",
    description: "Respect and understanding for diverse backgrounds",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Connecting to advanced medical treatments worldwide",
  },
];

export function Mission() {
  return (
    <section className='py-20 bg-[#0284c7] relative overflow-hidden'>
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

      {/* Background Pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(60deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-60deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-25'></div>

      <div className='container px-6 mx-auto relative'>
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='max-w-3xl mx-auto text-center mb-16'>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-[#026da7] backdrop-blur-sm border-2 border-[#4ade80]/40 mb-8 shadow-lg'>
            <span className='text-sm font-bold text-[#4ade80]'>
              Our Purpose
            </span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            Bridging Borders for Better Healthcare
          </h2>
          <p className='text-lg text-white'>
            We are dedicated to removing barriers to world-class healthcare
            while offering an unmatched patient experience. Our approach ensures
            comprehensive care from consultation to recovery.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className='grid grid-cols-12 gap-4 mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='col-span-12 md:col-span-8 relative rounded-2xl overflow-hidden h-[400px] border-2 border-white/20 shadow-xl'>
            <Image
              src='/images/international-doctors.webp'
              alt='International Medical Team'
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#026da7]/95 via-[#026da7]/70 to-transparent' />

            {/* Decorative pattern overlay */}
            <div className='absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='col-span-12 md:col-span-4 relative rounded-2xl overflow-hidden h-[400px] border-2 border-white/20 shadow-xl'>
            <Image
              src='/images/patient.webp'
              alt='Patient Care'
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#026da7]/95 via-[#026da7]/70 to-transparent' />

            {/* Decorative pattern overlay */}
            <div className='absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30' />
          </motion.div>
        </div>

        {/* Mission Pillars */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className='bg-[#026da7] backdrop-blur-md rounded-xl p-8 border-2 border-white/30 shadow-lg hover:border-[#4ade80]/40 transition-all duration-300'>
              <div className='bg-[#4ade80]/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6 border border-[#4ade80]/30'>
                <pillar.icon className='w-7 h-7 text-[#4ade80]' />
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>
                {pillar.title}
              </h3>
              <p className='text-white'>{pillar.description}</p>

              {/* Decorative accent line */}
              <div className='h-1 w-1/3 bg-gradient-to-r from-[#4ade80] to-transparent rounded-full mt-4'></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
