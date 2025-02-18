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

export function Values() {
  return (
    <section className='relative py-24 overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 opacity-5'>
        <Image
          src='/images/hospital-emergency.webp'
          alt='Healthcare Background'
          fill
          className='object-cover'
        />
      </div>

      <div className='container px-6 mx-auto relative'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='max-w-3xl mx-auto text-center mb-16'>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8'>
            <span className='text-sm text-[#FFD60A]'>Our Core Values</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-medium text-white mb-6'>
            Principles that Guide Our Journey
          </h2>
          <p className='text-lg text-white/60'>
            Our values shape every decision we make and every service we
            provide, ensuring excellence in global healthcare facilitation.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='group relative'>
              <div className='absolute inset-0 bg-gradient-to-b from-[#FFD60A]/0 to-[#FFD60A]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-xl' />
              <div className='relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 h-full transition-colors group-hover:border-[#FFD60A]/20'>
                {/* Icon */}
                <div className='w-12 h-12 rounded-lg bg-[#FFD60A]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                  <value.icon className='w-6 h-6 text-[#FFD60A]' />
                </div>

                {/* Content */}
                <h3 className='text-xl font-medium text-white mb-3'>
                  {value.title}
                </h3>
                <p className='text-white/60 mb-6'>{value.description}</p>

                {/* Highlights */}
                <ul className='space-y-2'>
                  {value.highlights.map((highlight) => (
                    <li key={highlight} className='flex items-center text-sm'>
                      <ArrowRight className='w-4 h-4 text-[#FFD60A] mr-2 opacity-0 group-hover:opacity-100 transition-opacity' />
                      <span className='text-white/80'>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
