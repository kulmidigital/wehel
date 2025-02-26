"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  Building2,
  Globe2,
  Users,
  Clock,
  Languages,
  Coins,
  Shield,
  Stethoscope,
  Network,
  BadgeCheck,
  HandshakeIcon,
} from "lucide-react";

const advantages = [
  {
    title: "For Patients",
    subtitle: "Experience Healthcare Without Borders",
    description:
      "We ensure every patient receives personalized care and support throughout their medical journey.",
    image: "/images/happy-person.webp",
    benefits: [
      {
        icon: Globe2,
        title: "Global Access",
        description: "Connect with top medical institutions worldwide",
      },
      {
        icon: Users,
        title: "Personalized Care",
        description: "Dedicated case management and support",
      },
      {
        icon: Languages,
        title: "Language Support",
        description: "Multilingual assistance for clear communication",
      },
      {
        icon: Coins,
        title: "Transparent Pricing",
        description: "Clear costs with no hidden fees",
      },
      {
        icon: Clock,
        title: "24/7 Support",
        description: "Round-the-clock medical assistance",
      },
      {
        icon: Shield,
        title: "Insurance Integration",
        description: "Seamless insurance coordination",
      },
    ],
  },
  {
    title: "For Healthcare Providers",
    subtitle: "Expand Your Global Presence",
    description:
      "Partner with us to enhance your international reach and provide exceptional care to global patients.",
    image: "/images/international-doctors.webp",
    benefits: [
      {
        icon: Network,
        title: "Global Network",
        description: "Expand patient reach across borders",
      },
      {
        icon: Users,
        title: "Cultural Adaptation",
        description: "Culturally sensitive patient care",
      },
      {
        icon: Stethoscope,
        title: "Medical Excellence",
        description: "Access to international medical practices",
      },
      {
        icon: HandshakeIcon,
        title: "Strong Partnerships",
        description: "Collaborative healthcare network",
      },
      {
        icon: BadgeCheck,
        title: "Quality Assurance",
        description: "Maintain high healthcare standards",
      },
      {
        icon: Building2,
        title: "Institution Growth",
        description: "Enhanced global reputation",
      },
    ],
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

export function Advantages() {
  return (
    <section className='py-24 bg-[#0284c7] relative overflow-hidden'>
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
              The Wehel Advantage
            </span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            Creating Value for All Stakeholders
          </h2>
          <p className='text-lg text-white'>
            Our comprehensive approach ensures both patients and healthcare
            providers benefit from our global healthcare network.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className='space-y-20'>
          {advantages.map((advantage, sectionIndex) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.2 }}
              className='relative'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, x: sectionIndex % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className='relative h-[400px] rounded-2xl overflow-hidden order-1 lg:order-none border-2 border-white/20 shadow-xl'>
                  <Image
                    src={advantage.image}
                    alt={advantage.title}
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#026da7] via-[#026da7]/70 to-transparent' />

                  {/* Decorative pattern overlay */}
                  <div className='absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30' />

                  <div className='absolute bottom-0 left-0 right-0 p-8'>
                    <div className='inline-flex items-center px-3 py-1 rounded-full bg-[#4ade80]/20 border border-[#4ade80]/40 mb-3'>
                      <span className='text-sm font-bold text-[#4ade80]'>
                        {advantage.title}
                      </span>
                    </div>
                    <div className='text-2xl font-bold text-white mb-4'>
                      {advantage.subtitle}
                    </div>
                    <p className='text-white'>{advantage.description}</p>

                    {/* Decorative accent line */}
                    <div className='h-1 w-1/3 bg-gradient-to-r from-[#4ade80] to-transparent rounded-full mt-4'></div>
                  </div>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                  variants={containerVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  {advantage.benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      variants={itemVariants}
                      whileHover={{
                        y: -5,
                        transition: { duration: 0.2 },
                      }}
                      className='group'>
                      <div className='bg-[#026da7] backdrop-blur-md rounded-xl p-6 border-2 border-white/20 h-full hover:border-[#4ade80]/40 transition-colors shadow-lg'>
                        <div className='w-12 h-12 rounded-lg bg-[#4ade80]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-[#4ade80]/30'>
                          <benefit.icon className='w-6 h-6 text-[#4ade80]' />
                        </div>
                        <h3 className='text-lg font-bold text-white mb-2'>
                          {benefit.title}
                        </h3>
                        <p className='text-white text-sm'>
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
