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
    <section className='py-20'>
      <div className='container px-6 mx-auto'>
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='max-w-3xl mx-auto text-center mb-16'>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8'>
            <span className='text-sm text-[#FFD60A]'>Our Mission</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-medium text-white mb-6'>
            Bridging Borders for Better Healthcare
          </h2>
          <p className='text-lg text-white/60'>
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
            className='col-span-12 md:col-span-8 relative rounded-2xl overflow-hidden h-[400px]'>
            <Image
              src='/images/international-doctors.webp'
              alt='International Medical Team'
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#0A1A2F] via-transparent to-transparent' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='col-span-12 md:col-span-4 relative rounded-2xl overflow-hidden h-[400px]'>
            <Image
              src='/images/patient.webp'
              alt='Patient Care'
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#0A1A2F] via-transparent to-transparent' />
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
              className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10'>
              <div className='bg-[#FFD60A]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                <pillar.icon className='w-6 h-6 text-[#FFD60A]' />
              </div>
              <h3 className='text-xl font-medium text-white mb-2'>
                {pillar.title}
              </h3>
              <p className='text-white/60'>{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
