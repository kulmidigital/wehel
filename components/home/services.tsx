"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Pre-Treatment Planning",
    description:
      "Expert consultations, medical report analysis, and personalized treatment plans.",
    image: "/images/doctor.webp",
    features: [
      "Pre-arrival consultations",
      "Medical report assessment",
      "Treatment cost estimation",
      "Specialist matching",
    ],
    color: "#4ADE80",
  },
  {
    title: "Travel & Accommodation",
    description:
      "Complete travel assistance from visa processing to comfortable stays.",
    image: "/images/large-globe.webp",
    features: [
      "Visa assistance",
      "Flight bookings",
      "Premium accommodations",
      "Local transportation",
    ],
    color: "#38BDF8",
  },
  {
    title: "Treatment & Care",
    description:
      "World-class medical care with continuous support throughout your stay.",
    image: "/images/hospital-emergency.webp",
    features: [
      "Hospital admission support",
      "24/7 medical assistance",
      "Language interpretation",
      "Treatment monitoring",
    ],
    color: "#4ADE80",
  },
];

// Animation variants for staggered animations
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const featureVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + index * 0.1,
      duration: 0.3,
    },
  }),
};

export function Services() {
  return (
    <section className='relative py-24 bg-[#0284C7] overflow-hidden'>
      {/* Decorative Gradient Orbs */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Top right gradient orb to blend with Features section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className='absolute -top-32 -right-32 w-64 h-64 bg-[#38BDF8] rounded-full blur-[120px] opacity-30'
        />
        {/* Bottom left gradient orb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className='absolute -bottom-32 -left-32 w-64 h-64 bg-[#4ADE80] rounded-full blur-[120px] opacity-30'
        />
      </div>

      {/* Background Pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20'></div>

      <div className='relative container mx-auto px-6'>
        {/* Section Header */}
        <motion.div
          className='max-w-2xl mx-auto text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 mb-8 shadow-md'>
            <span className='text-sm text-[#4ADE80] font-semibold'>
              Patient-Centered Care
            </span>
          </motion.div>
          <h2 className='text-3xl md:text-4xl font-medium text-white mb-4'>
            Comprehensive{" "}
            <span className='text-[#4ADE80]'>Patient Services</span>
          </h2>
          <p className='text-white text-lg'>
            Your health journey supported at every step, from consultation to
            recovery
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className='group relative'>
              {/* Card with enhanced styling */}
              <div className='relative bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-md border border-white/30 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 shadow-xl'>
                {/* Service Image with creative overlay */}
                <div className='relative h-48 overflow-hidden'>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className='object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-1'
                  />

                  {/* Diagonal overlay */}
                  <div className='absolute inset-0 bg-gradient-to-tr from-[#0284C7]/95 via-[#0284C7]/70 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300' />

                  {/* Decorative pattern overlay */}
                  <div className='absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 group-hover:opacity-50 transition-opacity duration-300' />

                  {/* Service number badge */}
                  <div
                    className='absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg'
                    style={{ backgroundColor: service.color }}>
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className='p-6 flex flex-col flex-1 relative'>
                  {/* Decorative accent line */}
                  <div
                    className='absolute top-0 left-0 h-1 w-1/3 rounded-full'
                    style={{
                      background: `linear-gradient(to right, ${service.color}, transparent)`,
                    }}
                  />

                  {/* Title with animated underline */}
                  <div className='relative inline-block mb-3 overflow-hidden'>
                    <h3 className='text-xl font-bold text-white transition-all duration-300 group-hover:text-[#4ADE80]'>
                      {service.title}
                    </h3>
                    <motion.div
                      className='absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500'
                      style={{
                        background: `linear-gradient(to right, ${service.color}, transparent)`,
                      }}
                    />
                  </div>

                  <p className='text-white text-sm mb-5 leading-relaxed'>
                    {service.description}
                  </p>

                  {/* Features List with enhanced styling */}
                  <ul className='space-y-3 mb-6 flex-1'>
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        custom={featureIndex}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        variants={featureVariants}
                        className='flex items-start text-sm group/item'
                        whileHover={{ x: 3 }}>
                        <div className='relative'>
                          <motion.div
                            className='h-5 w-5 rounded-full flex items-center justify-center mr-2 mt-0.5 shrink-0 transition-all duration-300 bg-white/10 border border-white/20 group-hover/item:border-[#4ADE80]/50'
                            style={{ borderColor: `${service.color}30` }}
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: `${service.color}20`,
                            }}>
                            <ArrowRight
                              className='h-3 w-3 transition-transform duration-300 group-hover/item:translate-x-0.5'
                              style={{ color: service.color }}
                            />
                          </motion.div>
                        </div>
                        <span className='text-white font-medium group-hover/item:text-[#4ADE80] transition-colors duration-300'>
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Enhanced button */}
                  <div className='mt-auto'>
                    <Button
                      variant='ghost'
                      className='w-full justify-between bg-white/10 hover:bg-white/15 border border-white/30 hover:border-[#4ADE80]/50 rounded-lg shadow-md transition-all duration-300'
                      asChild>
                      <Link
                        href='/services'
                        className='flex items-center justify-between'>
                        <span className='text-white font-medium transition-all duration-300 group-hover:text-[#4ADE80]'>
                          Learn More
                        </span>
                        <motion.div
                          className='flex items-center justify-center w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#4ADE80]/20 transition-colors duration-300'
                          whileHover={{ rotate: 45 }}>
                          <ArrowRight className='h-3.5 w-3.5 text-[#4ADE80] group-hover:translate-x-0.5 transition-transform duration-300' />
                        </motion.div>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
