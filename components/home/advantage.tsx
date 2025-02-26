"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Users,
  Stethoscope,
  Clock,
  Shield,
  Building2,
  ExternalLink,
} from "lucide-react";

const advantages = {
  patients: {
    title: "For Patients",
    description:
      "Experience world-class healthcare with comprehensive support at every step.",
    image: "/images/happy-person.webp",
    benefits: [
      {
        icon: Globe,
        title: "Global Access",
        description:
          "Access to top medical institutions and specialists worldwide",
      },
      {
        icon: Users,
        title: "Personalized Care",
        description: "Dedicated case management and multilingual assistance",
      },
      {
        icon: Shield,
        title: "Transparent Pricing",
        description:
          "Clear costs with no hidden fees and insurance integration",
      },
      {
        icon: Clock,
        title: "24/7 Support",
        description:
          "Round-the-clock assistance throughout your medical journey",
      },
    ],
    cta: {
      text: "Start Your Journey",
      href: "/request-invite",
    },
  },
  providers: {
    title: "For Healthcare Providers",
    description:
      "Join our network to expand your reach and enhance your services.",
    image: "/images/international-doctors.webp",
    benefits: [
      {
        icon: Globe,
        title: "Global Outreach",
        description: "Expand patient reach across international markets",
      },
      {
        icon: Building2,
        title: "Institutional Growth",
        description: "Enhanced credibility and stronger industry partnerships",
      },
      {
        icon: Users,
        title: "Cultural Competence",
        description: "Culturally adapted patient care and communication",
      },
      {
        icon: Stethoscope,
        title: "Integrated Solutions",
        description: "Seamless telemedicine and patient management tools",
      },
    ],
    cta: {
      text: "Join Our Network",
      href: "/join-us/hospital",
    },
  },
};

export function Advantage() {
  return (
    <section className='relative py-24 bg-[#0284C7] overflow-hidden'>
      {/* Decorative Gradient Orbs */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Top right gradient orb to blend with Connections section */}
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
      <div className='absolute inset-0 bg-[linear-gradient(60deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-60deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20'></div>

      <div className='container px-6 mx-auto relative'>
        {/* Section Header */}
        <motion.div
          className='max-w-3xl mx-auto text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h2 className='text-3xl md:text-4xl font-medium text-white mb-4'>
            The <span className='text-[#4ADE80]'>Wehel</span> Advantage
          </h2>
          <p className='text-white text-lg'>
            Transforming healthcare access with comprehensive solutions for
            patients and providers
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto'>
          {Object.values(advantages).map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className='relative group'>
              <div className='bg-white/15 backdrop-blur-md border border-white/30 rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col'>
                {/* Image Section */}
                <div className='relative h-[240px] overflow-hidden'>
                  <Image
                    src={advantage.image}
                    alt={advantage.title}
                    fill
                    className='object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-1'
                  />
                  {/* Diagonal gradient overlay */}
                  <div className='absolute inset-0 bg-gradient-to-tr from-[#0284C7]/95 via-[#0284C7]/70 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300' />

                  {/* Decorative pattern overlay */}
                  <div className='absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-30 transition-opacity duration-500' />

                  <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0284C7]/90 to-transparent'>
                    <h3 className='text-2xl font-medium text-white mb-2 group-hover:text-[#4ADE80] transition-colors duration-300'>
                      {advantage.title}
                    </h3>
                    <p className='text-white text-sm'>
                      {advantage.description}
                    </p>
                  </div>
                </div>

                {/* Benefits Grid */}
                <div className='p-6 flex-1 flex flex-col'>
                  {/* Decorative accent line */}
                  <div className='h-1 w-1/3 bg-gradient-to-r from-[#4ADE80] to-transparent rounded-full mb-4'></div>

                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1'>
                    {advantage.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefit.title}
                        className='space-y-2 group/benefit'
                        style={{
                          transform: "translateY(0)",
                          transition: `transform 0.2s ease-out ${
                            benefitIndex * 0.05
                          }s`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-4px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                        }}>
                        <div className='flex items-center gap-2'>
                          <div className='w-8 h-8 rounded-lg flex items-center justify-center bg-white/10 border border-white/20 group-hover/benefit:border-[#4ADE80]/50 transition-all duration-300'>
                            <benefit.icon className='w-4 h-4 text-[#4ADE80] group-hover/benefit:scale-110 transition-transform duration-300' />
                          </div>
                          <h4 className='text-white font-medium group-hover/benefit:text-[#4ADE80] transition-colors duration-300'>
                            {benefit.title}
                          </h4>
                        </div>
                        <p className='text-white text-sm pl-10'>
                          {benefit.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Button
                    className='w-full mt-6 relative overflow-hidden bg-[#4ADE80] hover:bg-[#22C55E] text-[#0F172A] font-medium shadow-lg group/button'
                    asChild>
                    <Link
                      href={advantage.cta.href}
                      className='flex items-center justify-center'>
                      <span className='relative z-10'>
                        {advantage.cta.text}
                      </span>
                      <motion.div
                        className='relative z-10 ml-2 p-1 rounded-full bg-[#0F172A]/10 group-hover/button:bg-[#0F172A]/20 transition-colors duration-300'
                        whileHover={{ rotate: 45 }}>
                        <ExternalLink className='h-4 w-4' />
                      </motion.div>
                      {/* Button background animation */}
                      <motion.div
                        className='absolute inset-0 w-full h-full bg-[#22C55E] -z-10'
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
