"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  Globe,
  Shield,
  Users,
  Building2,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Patient-First Approach",
    description:
      "Every decision we make prioritizes patient well-being and comfort.",
    highlights: [
      "Personalized care plans",
      "24/7 support",
      "Emotional well-being",
    ],
  },
  {
    icon: Globe,
    title: "Global Excellence",
    description:
      "Connecting patients with world-class healthcare facilities worldwide.",
    highlights: [
      "International standards",
      "Quality assurance",
      "Best practices",
    ],
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "Clear communication and ethical practices in all our operations.",
    highlights: ["Clear pricing", "Ethical standards", "Data protection"],
  },
  {
    icon: Users,
    title: "Cultural Respect",
    description: "Embracing diversity and providing culturally sensitive care.",
    highlights: [
      "Cultural awareness",
      "Language support",
      "Religious considerations",
    ],
  },
  {
    icon: Building2,
    title: "Quality Assurance",
    description:
      "Partnering with only accredited and renowned healthcare institutions.",
    highlights: ["Strict vetting", "Regular audits", "Performance monitoring"],
  },
  {
    icon: Stethoscope,
    title: "Comprehensive Care",
    description: "Supporting patients from consultation through recovery.",
    highlights: ["End-to-end support", "Follow-up care", "Recovery monitoring"],
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

export function Values() {
  return (
    <section className='relative py-24 overflow-hidden bg-[#0284c7]'>
      {/* Background Image */}
      <div className='absolute inset-0 opacity-10'>
        <Image
          src='/images/hospital-emergency.webp'
          alt='Healthcare Background'
          fill
          className='object-cover'
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

      {/* Background Pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(60deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-60deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-25'></div>

      <div className='container px-6 mx-auto relative'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='max-w-3xl mx-auto text-center mb-16'>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-[#026da7] backdrop-blur-sm border-2 border-[#4ade80]/40 mb-8 shadow-lg'>
            <span className='text-sm font-bold text-[#4ade80]'>
              Our Core Values
            </span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            Principles that Guide Our Journey
          </h2>
          <p className='text-lg text-white'>
            Our values shape every decision we make and every service we
            provide, ensuring excellence in global healthcare facilitation.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className='group relative'>
              <div className='absolute inset-0 bg-gradient-to-b from-[#4ade80]/0 to-[#4ade80]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-xl' />
              <div className='relative bg-[#026da7] backdrop-blur-md rounded-xl p-8 border-2 border-white/20 h-full transition-colors group-hover:border-[#4ade80]/40 shadow-lg'>
                {/* Icon */}
                <div className='w-14 h-14 rounded-lg bg-[#4ade80]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-[#4ade80]/30'>
                  <value.icon className='w-7 h-7 text-[#4ade80]' />
                </div>

                {/* Content */}
                <h3 className='text-xl font-bold text-white mb-3'>
                  {value.title}
                </h3>
                <p className='text-white mb-6'>{value.description}</p>

                {/* Highlights */}
                <ul className='space-y-3'>
                  {value.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className='flex items-center text-sm group/item'>
                      <div className='w-6 h-6 rounded-full bg-[#4ade80]/20 flex items-center justify-center mr-3 group-hover/item:bg-[#4ade80]/40 transition-colors'>
                        <ArrowRight className='w-3 h-3 text-[#4ade80]' />
                      </div>
                      <span className='text-white group-hover/item:text-[#4ade80] transition-colors'>
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Decorative accent line */}
                <div className='h-1 w-1/3 bg-gradient-to-r from-[#4ade80] to-transparent rounded-full mt-6'></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
