"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
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
    color: "from-blue-500 via-indigo-500 to-violet-500",
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
    color: "from-amber-400 via-orange-500 to-rose-500",
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
    color: "from-emerald-400 via-teal-500 to-cyan-500",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export function Services() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className='relative py-24 bg-[#0A1A2F] overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0'>
        <div
          className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]'
          style={{
            maskImage:
              "radial-gradient(ellipse 60% 80% at 50% 50%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 80% at 50% 50%, black, transparent)",
          }}
        />
      </div>

      {/* Decorative Gradient Orbs */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Top right gradient orb to blend with Features section */}
        <div className='absolute -top-32 -right-32 w-64 h-64 bg-blue-400 rounded-full blur-[120px] opacity-20' />
        {/* Bottom left gradient orb */}
        <div className='absolute -bottom-32 -left-32 w-64 h-64 bg-[#FFD60A] rounded-full blur-[120px] opacity-20' />
      </div>

      <div className='relative container mx-auto px-6'>
        {/* Section Header */}
        <div className='max-w-2xl mx-auto text-center mb-16'>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8'>
            <span className='text-sm text-[#FFD60A]'>
              Patient-Centered Care
            </span>
          </div>
          <h2 className='text-3xl md:text-4xl font-medium text-white mb-4'>
            Comprehensive{" "}
            <span className='text-[#FFD60A]'>Patient Services</span>
          </h2>
          <p className='text-white/60'>
            Your health journey supported at every step, from consultation to
            recovery
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial='initial'
              whileInView='animate'
              whileHover='hover'
              viewport={{ once: true }}
              variants={cardVariants}
              className='group relative perspective-1000'>
              {/* 3D Card Container */}
              <div className='relative h-full transform-style-3d transition-all duration-500 group-hover:rotate-y-3 group-hover:rotate-x-3'>
                {/* Animated glow effect */}
                <div
                  className='absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500'
                  style={{
                    background: `linear-gradient(135deg, ${service.color
                      .split(" ")
                      .join(", ")})`,
                  }}
                />

                {/* Card Body */}
                <div className='relative bg-[#0A1A2F]/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col group-hover:border-white/20 transition-all duration-300 shadow-xl shadow-black/50'>
                  {/* Background pattern - simplified */}
                  <div className='absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500'>
                    <div className='absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:24px_24px]' />
                  </div>

                  {/* Service Image without parallax effect */}
                  <div className='relative h-[200px] overflow-hidden'>
                    <div className='absolute inset-0'>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className='object-cover transition-all duration-700 group-hover:scale-110'
                      />
                      <div
                        className='absolute inset-0 opacity-90 group-hover:opacity-70 transition-opacity duration-300'
                        style={{
                          background: `linear-gradient(to top, #0A1A2F 10%, transparent 100%), linear-gradient(to right, ${
                            service.color.split(" ")[0]
                          }40 0%, transparent 100%)`,
                        }}
                      />
                    </div>

                    {/* Service number without animation */}
                    <div
                      className='absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg'
                      style={{
                        background: `linear-gradient(135deg, ${service.color
                          .split(" ")
                          .join(", ")})`,
                      }}>
                      <span className='text-white font-bold'>{index + 1}</span>
                    </div>
                  </div>

                  <div className='p-6 flex flex-col flex-1 relative z-10'>
                    {/* Title with simple underline */}
                    <div className='relative inline-block mb-3'>
                      <h3 className='text-2xl font-medium text-white transition-all duration-300 group-hover:text-[#FFD60A]'>
                        {service.title}
                      </h3>
                      <div
                        className='absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full'
                        style={{
                          background:
                            "linear-gradient(to right, #FFD60A, #FFAA0A)",
                          boxShadow: "0 0 10px 0 #FFD60A",
                        }}
                      />
                    </div>

                    <p className='text-white/70 text-sm mb-5 group-hover:text-white/90 transition-colors duration-300'>
                      {service.description}
                    </p>

                    {/* Features List without animations */}
                    <ul className='space-y-3 mb-6 flex-1'>
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={feature}
                          className='flex items-center text-sm group/item'>
                          <div className='relative mr-3 flex-shrink-0'>
                            <div
                              className='w-6 h-6 rounded-full flex items-center justify-center border border-white/20 shadow-sm group-hover/item:scale-110 transition-all duration-300'
                              style={{
                                background:
                                  index === 0
                                    ? "linear-gradient(135deg, #FFD60A, #FF8A0A)"
                                    : index === 1
                                    ? "linear-gradient(135deg, #0AFFE7, #0A95FF)"
                                    : index === 2
                                    ? "linear-gradient(135deg, #0AFF95, #0AFF4F)"
                                    : "linear-gradient(135deg, #FF5E7D, #FF3C64)",
                              }}>
                              <div className='flex items-center justify-center'>
                                <ArrowRight className='h-3 w-3 text-white drop-shadow-md' />
                              </div>
                            </div>
                          </div>
                          <span className='text-white/80 group-hover:text-white transition-colors duration-300 group-hover/item:font-medium'>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
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
