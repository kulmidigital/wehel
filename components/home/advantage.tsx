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
    <section className='relative py-24'>
      {/* Decorative Gradient Orbs */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Top right gradient orb to blend with Connections section */}
        <div className='absolute -top-32 -right-32 w-64 h-64 bg-blue-400 rounded-full blur-[120px] opacity-20' />
        {/* Bottom left gradient orb */}
        <div className='absolute -bottom-32 -left-32 w-64 h-64 bg-[#FFD60A] rounded-full blur-[120px] opacity-20' />
      </div>

      <div className='container px-6 mx-auto'>
        {/* Section Header */}
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-medium text-white mb-4'>
            The <span className='text-[#FFD60A]'>Wehel</span> Advantage
          </h2>
          <p className='text-white/60'>
            Transforming healthcare access with comprehensive solutions for
            patients and providers
          </p>
        </div>

        {/* Advantages Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto'>
          {Object.values(advantages).map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className='relative group'>
              <div className='bg-[#0A1A2F] border border-white/10 rounded-xl overflow-hidden'>
                {/* Image Section */}
                <div className='relative h-[240px] overflow-hidden'>
                  <Image
                    src={advantage.image}
                    alt={advantage.title}
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#0A1A2F] to-transparent opacity-90' />
                  <div className='absolute bottom-0 left-0 right-0 p-6'>
                    <h3 className='text-2xl font-medium text-white mb-2'>
                      {advantage.title}
                    </h3>
                    <p className='text-white/80 text-sm'>
                      {advantage.description}
                    </p>
                  </div>
                </div>

                {/* Benefits Grid */}
                <div className='p-6'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {advantage.benefits.map((benefit) => (
                      <div key={benefit.title} className='space-y-2'>
                        <div className='flex items-center gap-2'>
                          <benefit.icon className='w-5 h-5 text-[#FFD60A]' />
                          <h4 className='text-white font-medium'>
                            {benefit.title}
                          </h4>
                        </div>
                        <p className='text-white/60 text-sm'>
                          {benefit.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Button
                    className='w-full mt-6 bg-[#FFD60A] hover:bg-[#FFD60A]/90 text-[#0A1A2F] font-medium'
                    asChild>
                    <Link href={advantage.cta.href}>
                      {advantage.cta.text}
                      <ArrowRight className='ml-2 h-4 w-4' />
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
