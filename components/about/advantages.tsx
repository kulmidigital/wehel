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

export function Advantages() {
  return (
    <section className='py-24'>
      <div className='container px-6 mx-auto'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='max-w-3xl mx-auto text-center mb-16'>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8'>
            <span className='text-sm text-[#FFD60A]'>The Wehel Advantage</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-medium text-white mb-6'>
            Creating Value for All Stakeholders
          </h2>
          <p className='text-lg text-white/60'>
            Our comprehensive approach ensures both patients and healthcare
            providers benefit from our global healthcare network.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className='space-y-16'>
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
                  className='relative h-[400px] rounded-2xl overflow-hidden order-1 lg:order-none'>
                  <Image
                    src={advantage.image}
                    alt={advantage.title}
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#0A1A2F] via-[#0A1A2F]/50 to-transparent' />
                  <div className='absolute bottom-0 left-0 right-0 p-8'>
                    <div className='text-lg font-medium text-[#FFD60A] mb-2'>
                      {advantage.title}
                    </div>
                    <div className='text-2xl font-medium text-white mb-4'>
                      {advantage.subtitle}
                    </div>
                    <p className='text-white/80'>{advantage.description}</p>
                  </div>
                </motion.div>

                {/* Benefits Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  {advantage.benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className='group'>
                      <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 h-full hover:border-[#FFD60A]/20 transition-colors'>
                        <div className='w-10 h-10 rounded-lg bg-[#FFD60A]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
                          <benefit.icon className='w-5 h-5 text-[#FFD60A]' />
                        </div>
                        <h3 className='text-lg font-medium text-white mb-2'>
                          {benefit.title}
                        </h3>
                        <p className='text-white/60 text-sm'>
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
