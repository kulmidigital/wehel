"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Globe, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Patient-First Approach",
    description:
      "Dedicated to providing exceptional care and support for every individual",
  },
  {
    icon: Globe,
    title: "Global Excellence",
    description:
      "Connecting patients with world-class healthcare across borders",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "Clear communication and ethical practices in all our operations",
  },
  {
    icon: Users,
    title: "Cultural Respect",
    description: "Embracing diversity and providing culturally sensitive care",
  },
];

export function Mission() {
  return (
    <section className='relative py-24 overflow-hidden bg-[#0284C7]'>
      {/* Decorative Gradient Orbs */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Top left gradient orb to blend with Advantage section's bottom left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className='absolute -top-32 -left-32 w-64 h-64 bg-[#4ADE80] rounded-full blur-[120px] opacity-30'
        />
        {/* Bottom right gradient orb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className='absolute -bottom-32 -right-32 w-64 h-64 bg-[#38BDF8] rounded-full blur-[120px] opacity-30'
        />
      </div>

      {/* Background Pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(60deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-60deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20'></div>

      {/* Background Image */}
      <div className='absolute inset-0 opacity-10'>
        <Image
          src='/images/large-globe.webp'
          alt='Global Healthcare'
          fill
          className='object-cover'
        />
      </div>

      <div className='container px-6 mx-auto relative'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto'>
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
            className='relative'>
            <div className='bg-[#026DA7] border-2 border-white/40 rounded-xl p-8 h-full shadow-lg transition-all duration-300'>
              <div className='absolute -top-3 left-8 px-4 py-1 bg-[#4ADE80] rounded-full shadow-md'>
                <span className='text-sm font-bold text-[#0F172A]'>
                  Our Mission
                </span>
              </div>
              <h3 className='text-2xl font-bold text-white mt-4 mb-4'>
                Making Healthcare Accessible Globally
              </h3>
              <p className='text-white mb-6 leading-relaxed'>
                We are committed to breaking down barriers in healthcare access,
                ensuring that individuals receive high-quality medical care
                regardless of geographical boundaries. Through our comprehensive
                support system, we create seamless medical journeys that
                prioritize patient well-being and peace of mind.
              </p>
              <div className='flex items-center gap-4'>
                <div className='h-2 w-16 bg-[#4ADE80] rounded-full' />
                <p className='text-white text-sm font-bold'>
                  Transforming Medical Tourism
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
            className='relative'>
            <div className='bg-[#026DA7] border-2 border-white/40 rounded-xl p-8 h-full shadow-lg transition-all duration-300'>
              <div className='absolute -top-3 left-8 px-4 py-1 bg-[#4ADE80] rounded-full shadow-md'>
                <span className='text-sm font-bold text-[#0F172A]'>
                  Our Vision
                </span>
              </div>
              <h3 className='text-2xl font-bold text-white mt-4 mb-4'>
                Future of Global Healthcare
              </h3>
              <p className='text-white mb-6 leading-relaxed'>
                We envision a world where quality healthcare knows no borders.
                By fostering strong partnerships between healthcare providers,
                insurers, and facilitators, we aim to create an integrated
                ecosystem that makes medical tourism seamless, affordable, and
                patient-centered.
              </p>
              <div className='flex items-center gap-4'>
                <div className='h-2 w-16 bg-[#4ADE80] rounded-full' />
                <p className='text-white text-sm font-bold'>
                  Building Healthcare Bridges
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-16'>
          <h3 className='text-2xl font-bold text-white text-center mb-12'>
            Our Core Values
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className='bg-[#026DA7] border-2 border-white/40 rounded-xl p-6 text-center group hover:border-[#4ADE80] transition-all duration-300 shadow-lg'>
                <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-[#0284C7] border-2 border-[#4ADE80] flex items-center justify-center transition-all duration-300'>
                  <value.icon className='w-8 h-8 text-[#4ADE80] group-hover:scale-110 transition-transform duration-300' />
                </div>
                <h4 className='text-xl font-bold text-white mb-2 group-hover:text-[#4ADE80] transition-colors duration-300'>
                  {value.title}
                </h4>
                <p className='text-white text-base leading-relaxed'>
                  {value.description}
                </p>

                {/* Decorative accent line */}
                <div className='h-2 w-1/3 bg-[#4ADE80] rounded-full mx-auto mt-4'></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
