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
  ExternalLink,
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
    <section className='relative py-24 bg-[#0284C7] overflow-hidden'>
      {/* Decorative Gradient Orbs */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Top left gradient orb to blend with Services section's bottom left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className='absolute -top-32 -left-32 w-64 h-64 bg-[#4ADE80] rounded-full blur-[120px] opacity-30'
        />
        {/* Bottom right gradient orb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className='absolute -bottom-32 -right-32 w-64 h-64 bg-[#38BDF8] rounded-full blur-[120px] opacity-30'
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
            Building Strong{" "}
            <span className='text-[#4ADE80]'>Global Healthcare</span>{" "}
            Connections
          </h2>
          <p className='text-white text-lg'>
            We bridge the gap between patients, hospitals, and healthcare
            providers, fostering collaborations that enhance medical
            accessibility and efficiency.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto'>
          {connections.map((connection, index) => (
            <motion.div
              key={connection.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className='group'>
              <div className='bg-white/15 backdrop-blur-md border border-white/30 rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col'>
                <div className='relative h-[200px] overflow-hidden'>
                  <Image
                    src={connection.image}
                    alt={connection.title}
                    fill
                    className='object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-1'
                  />
                  {/* Diagonal gradient overlay */}
                  <div className='absolute inset-0 bg-gradient-to-tr from-[#0284C7]/95 via-[#0284C7]/70 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300' />

                  {/* Decorative pattern overlay */}
                  <div className='absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-30 transition-opacity duration-500' />

                  <connection.icon className='absolute bottom-4 left-4 w-8 h-8 text-[#4ADE80] z-10 group-hover:scale-110 transition-transform duration-300' />
                </div>

                <div className='p-6 flex-1 flex flex-col'>
                  {/* Decorative accent line */}
                  <div className='h-1 w-1/3 bg-gradient-to-r from-[#4ADE80] to-transparent rounded-full mb-4'></div>

                  <h3 className='text-lg font-medium text-white mb-2 group-hover:text-[#4ADE80] transition-colors duration-300'>
                    {connection.title}
                  </h3>
                  <p className='text-white text-sm mb-4'>
                    {connection.description}
                  </p>
                  <ul className='space-y-3 mb-2 flex-1'>
                    {connection.features.map((feature, featureIndex) => (
                      <li
                        key={feature}
                        className='flex items-center text-sm group/item'
                        style={{
                          transform: "translateX(0)",
                          transition: `transform 0.2s ease-out ${
                            featureIndex * 0.05
                          }s`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateX(4px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateX(0)";
                        }}>
                        <div className='h-5 w-5 rounded-full flex items-center justify-center mr-2 shrink-0 bg-white/10 border border-white/20 group-hover/item:border-[#4ADE80]/50 transition-all duration-300'>
                          <ArrowRight className='h-3 w-3 text-[#4ADE80] group-hover/item:translate-x-0.5 transition-transform duration-300' />
                        </div>
                        <span className='text-white font-medium group-hover/item:text-[#4ADE80] transition-colors duration-300'>
                          {feature}
                        </span>
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
            className='relative overflow-hidden bg-[#4ADE80] hover:bg-[#22C55E] text-white font-medium px-8 shadow-lg group'
            asChild>
            <Link href='/contact' className='flex items-center'>
              <span className='relative z-10'>Connect With Us</span>
              <motion.div
                className='relative z-10 ml-2 p-1 rounded-full bg-[#0F172A]/10 group-hover:bg-[#0F172A]/20 transition-colors duration-300'
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
        </motion.div>
      </div>
    </section>
  );
}
