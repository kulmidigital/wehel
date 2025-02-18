"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "For Hospitals",
    description: "Join our network of world-class healthcare providers.",
    image: "/images/hospital-bed.webp",
    benefits: [
      "Access to international patients",
      "Streamlined patient coordination",
      "Global visibility and recognition",
      "Simplified insurance processing",
    ],
    href: "/join-us/hospital",
  },
  {
    title: "For Insurance Companies",
    description: "Partner in providing comprehensive healthcare coverage.",
    image: "/images/insurance.webp",
    benefits: [
      "Direct billing partnerships",
      "Verified healthcare network",
      "Cost-effective treatments",
      "Quality assurance standards",
    ],
    href: "/join-us/insurance",
  },
  {
    title: "For Doctors",
    description: "Expand your practice to a global patient base.",
    image: "/images/international-doctors.webp",
    benefits: [
      "International referral network",
      "Professional development",
      "Cross-border consultations",
      "Flexible engagement models",
    ],
    href: "/join-us/doctors",
  },
  {
    title: "For Government Institutions",
    description: "Establish public-private partnerships in healthcare.",
    image: "/images/government-institution.webp",
    benefits: [
      "Healthcare infrastructure development",
      "Medical tourism promotion",
      "Quality healthcare access",
      "Economic growth opportunities",
    ],
    href: "/join-us/government",
  },
  {
    title: "For Travel Agencies",
    description: "Diversify your offerings with medical tourism services.",
    image: "/images/large-globe.webp",
    benefits: [
      "New revenue streams",
      "Comprehensive support system",
      "Training and certification",
      "Dedicated partnership manager",
    ],
    href: "/join-us/travel-agency",
  },
  {
    title: "For Patients",
    description: "Access world-class healthcare with complete support.",
    image: "/images/patient.webp",
    benefits: [
      "Personalized care plans",
      "End-to-end travel support",
      "Cost-effective treatments",
      "24/7 assistance",
    ],
    href: "/request-invite",
    buttonText: "Request Invite",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function Features() {
  return (
    <section className='relative py-24 bg-[#0A1A2F]'>
      {/* Background Pattern */}
      <div className='absolute inset-0'>
        <div
          className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]'
          style={{
            maskImage:
              "radial-gradient(ellipse 50% 80% at 50% 50%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 50% 80% at 50% 50%, black, transparent)",
          }}
        />
      </div>

      <div className='relative container mx-auto px-6'>
        {/* Section Header */}
        <motion.div
          className='max-w-2xl mx-auto text-center mb-16'
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
          }}>
          <h2 className='text-3xl md:text-4xl font-medium text-white mb-4'>
            Partner with <span className='text-[#FFD60A]'>Wehel</span>
          </h2>
          <p className='text-white/60'>
            Join our global healthcare network and be part of transforming
            medical tourism
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className='group relative'
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 },
                },
              }}>
              <div className='relative bg-[#0A1A2F]/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col'>
                <div className='relative h-[200px] overflow-hidden'>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#0A1A2F] via-[#0A1A2F]/50 to-transparent' />
                </div>

                <div className='p-6 flex flex-col flex-1'>
                  <h3 className='text-xl font-medium text-white mb-2'>
                    {feature.title}
                  </h3>
                  <p className='text-white/60 text-sm mb-4'>
                    {feature.description}
                  </p>

                  <ul className='space-y-2 mb-6 flex-1'>
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className='flex items-start text-sm'>
                        <ArrowRight className='h-4 w-4 text-[#FFD60A] mr-2 mt-0.5 shrink-0' />
                        <span className='text-white/80'>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant='ghost'
                    className='w-full justify-between text-white hover:text-[#FFD60A] hover:bg-white/5 mt-auto'
                    asChild>
                    <Link href={feature.href}>
                      {feature.buttonText || "Join as Partner"}
                      <ArrowRight className='h-4 w-4 ml-2' />
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
