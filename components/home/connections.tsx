"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Building2,
  Stethoscope,
  Users,
} from "lucide-react";

const connections = [
  {
    title: "Telemedicine & Digital Health",
    description:
      "Seamless remote consultations and digital health monitoring for continuous care.",
    icon: Globe2,
    features: [
      "Remote consultations",
      "Digital health platforms",
      "Recovery monitoring",
      "Post-treatment support",
    ],
    image: "/images/application.webp",
  },
  {
    title: "Insurance Integration",
    description:
      "Direct insurance billing and simplified financial planning for treatments.",
    icon: Building2,
    features: [
      "Direct billing partnerships",
      "Insurance coverage verification",
      "Treatment cost planning",
      "Simplified claims process",
    ],
    image: "/images/insurance.webp",
  },
  {
    title: "Medical Excellence",
    description:
      "Access to top medical institutions and specialized treatments worldwide.",
    icon: Stethoscope,
    features: [
      "World-class hospitals",
      "Specialized treatments",
      "Quality assurance",
      "Medical expertise",
    ],
    image: "/images/hospital-emergency.webp",
  },
  {
    title: "Cultural Adaptation",
    description:
      "Culturally sensitive healthcare delivery with multilingual support.",
    icon: Users,
    features: [
      "Language assistance",
      "Cultural sensitivity",
      "Religious considerations",
      "Local guidance",
    ],
    image: "/images/small-globe.webp",
  },
];

export function Connections() {
  return (
    <section className='relative py-24'>
      <div className='container px-6 mx-auto'>
        {/* Section Header */}
        <motion.div
          className='max-w-3xl mx-auto text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h2 className='text-3xl md:text-4xl font-medium text-white mb-4'>
            Building Strong{" "}
            <span className='text-[#FFD60A]'>Global Healthcare</span>{" "}
            Connections
          </h2>
          <p className='text-white/60'>
            We bridge the gap between patients, hospitals, and healthcare
            providers, fostering collaborations that enhance medical
            accessibility and efficiency.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto'>
          {connections.map((connection, index) => (
            <motion.div
              key={connection.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className='group'>
              <div className='bg-[#0A1A2F] border border-white/10 rounded-xl overflow-hidden'>
                <div className='relative h-[200px] overflow-hidden'>
                  <Image
                    src={connection.image}
                    alt={connection.title}
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#0A1A2F] to-transparent opacity-90' />
                  <connection.icon className='absolute bottom-4 left-4 w-8 h-8 text-[#FFD60A]' />
                </div>

                <div className='p-6'>
                  <h3 className='text-lg font-medium text-white mb-2'>
                    {connection.title}
                  </h3>
                  <p className='text-white/60 text-sm mb-4 line-clamp-2'>
                    {connection.description}
                  </p>
                  <ul className='space-y-2'>
                    {connection.features.map((feature) => (
                      <li key={feature} className='flex items-center text-sm'>
                        <ArrowRight className='h-3.5 w-3.5 text-[#FFD60A] mr-2 shrink-0' />
                        <span className='text-white/80'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className='text-center mt-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <Button
            size='lg'
            className='bg-[#FFD60A] hover:bg-[#FFD60A]/90 text-[#0A1A2F] font-medium px-8'
            asChild>
            <Link href='/contact'>
              Connect With Us
              <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
