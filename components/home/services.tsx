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
  },
];

export function Services() {
  return (
    <section className='relative py-24'>
      <div className='container px-6 mx-auto'>
        {/* Section Header */}
        <motion.div
          className='max-w-2xl mx-auto text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h2 className='text-3xl md:text-4xl font-medium text-white mb-4'>
            Comprehensive{" "}
            <span className='text-[#FFD60A]'>Patient Services</span>
          </h2>
          <p className='text-white/60'>
            Your health journey supported at every step, from consultation to
            recovery
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className='group relative bg-[#0A1A2F] rounded-2xl overflow-hidden border border-white/10'>
              {/* Service Image */}
              <div className='relative h-48 overflow-hidden'>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#0A1A2F] to-transparent' />
              </div>

              {/* Content */}
              <div className='p-6'>
                <h3 className='text-xl font-medium text-white mb-2'>
                  {service.title}
                </h3>
                <p className='text-white/60 text-sm mb-4'>
                  {service.description}
                </p>

                {/* Features List */}
                <ul className='space-y-2 mb-6'>
                  {service.features.map((feature) => (
                    <li key={feature} className='flex items-start text-sm'>
                      <ArrowRight className='h-4 w-4 text-[#FFD60A] mr-2 mt-0.5 shrink-0' />
                      <span className='text-white/80'>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant='ghost'
                  className='w-full justify-between text-white hover:text-[#FFD60A] hover:bg-white/5'
                  asChild>
                  <Link href='/services'>
                    Learn More
                    <ArrowRight className='h-4 w-4 ml-2' />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
