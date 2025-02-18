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
    <section className='relative py-24 overflow-hidden'>
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
            className='relative'>
            <div className='bg-[#0A1A2F] border border-white/10 rounded-xl p-8 h-full'>
              <div className='absolute -top-3 left-8 px-4 py-1 bg-[#FFD60A] rounded-full'>
                <span className='text-sm font-medium text-[#0A1A2F]'>
                  Our Mission
                </span>
              </div>
              <h3 className='text-2xl font-medium text-white mt-4 mb-4'>
                Making Healthcare Accessible Globally
              </h3>
              <p className='text-white/60 mb-6'>
                We are committed to breaking down barriers in healthcare access,
                ensuring that individuals receive high-quality medical care
                regardless of geographical boundaries. Through our comprehensive
                support system, we create seamless medical journeys that
                prioritize patient well-being and peace of mind.
              </p>
              <div className='flex items-center gap-4'>
                <div className='h-1 w-12 bg-[#FFD60A] rounded-full' />
                <p className='text-white/80 text-sm font-medium'>
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
            className='relative'>
            <div className='bg-[#0A1A2F] border border-white/10 rounded-xl p-8 h-full'>
              <div className='absolute -top-3 left-8 px-4 py-1 bg-[#FFD60A] rounded-full'>
                <span className='text-sm font-medium text-[#0A1A2F]'>
                  Our Vision
                </span>
              </div>
              <h3 className='text-2xl font-medium text-white mt-4 mb-4'>
                Future of Global Healthcare
              </h3>
              <p className='text-white/60 mb-6'>
                We envision a world where quality healthcare knows no borders.
                By fostering strong partnerships between healthcare providers,
                insurers, and facilitators, we aim to create an integrated
                ecosystem that makes medical tourism seamless, affordable, and
                patient-centered.
              </p>
              <div className='flex items-center gap-4'>
                <div className='h-1 w-12 bg-[#FFD60A] rounded-full' />
                <p className='text-white/80 text-sm font-medium'>
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
          <h3 className='text-xl font-medium text-white text-center mb-12'>
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
                className='bg-[#0A1A2F] border border-white/10 rounded-xl p-6 text-center group hover:border-[#FFD60A]/30 transition-colors'>
                <value.icon className='w-8 h-8 text-[#FFD60A] mx-auto mb-4' />
                <h4 className='text-white font-medium mb-2'>{value.title}</h4>
                <p className='text-white/60 text-sm'>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
