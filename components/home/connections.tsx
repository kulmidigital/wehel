"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Building2,
  Stethoscope,
  Users,
  ExternalLink,
  CheckCircle,
  CheckCircle2,
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
    color: "from-cyan-400 via-blue-500 to-indigo-600",
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
    color: "from-amber-400 via-orange-500 to-pink-600",
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
    color: "from-emerald-400 via-teal-500 to-green-600",
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
    color: "from-purple-400 via-violet-500 to-indigo-600",
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

export function Connections() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className='relative py-24'>
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
        {/* Top left gradient orb to blend with Services section's bottom left */}
        <div className='absolute -top-32 -left-32 w-64 h-64 bg-[#FFD60A] rounded-full blur-[120px] opacity-20' />
        {/* Bottom right gradient orb */}
        <div className='absolute -bottom-32 -right-32 w-64 h-64 bg-blue-400 rounded-full blur-[120px] opacity-20' />
      </div>

      <div className='container px-6 mx-auto'>
        {/* Section Header */}
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8'>
            <span className='text-sm text-[#FFD60A]'>Global Network</span>
          </div>
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
        </div>

        {/* Main Content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto'>
          {connections.map((connection, index) => (
            <motion.div
              key={connection.title}
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
                    background: `linear-gradient(135deg, ${connection.color
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

                  {/* Connection Image without parallax effect */}
                  <div className='relative h-[220px] overflow-hidden'>
                    <div className='absolute inset-0'>
                      <Image
                        src={connection.image}
                        alt={connection.title}
                        fill
                        className='object-cover transition-all duration-700 group-hover:scale-110'
                      />
                      <div
                        className='absolute inset-0 opacity-90 group-hover:opacity-70 transition-opacity duration-300'
                        style={{
                          background: `linear-gradient(to top, #0A1A2F 10%, transparent 100%), linear-gradient(to right, ${
                            connection.color.split(" ")[0]
                          }40 0%, transparent 100%)`,
                        }}
                      />
                    </div>

                    {/* Icon without animations */}
                    <div
                      className='absolute bottom-6 left-6 w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg z-10'
                      style={{
                        background: `linear-gradient(135deg, ${connection.color
                          .split(" ")
                          .join(", ")})`,
                      }}>
                      <connection.icon className='w-7 h-7 text-white drop-shadow-lg' />
                    </div>
                  </div>

                  <div className='p-6 flex flex-col flex-1 relative z-10'>
                    {/* Title with simple underline */}
                    <div className='relative inline-block mb-3'>
                      <h3 className='text-2xl font-medium text-white transition-all duration-300 group-hover:text-[#FFD60A]'>
                        {connection.title}
                      </h3>
                      <div
                        className='absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full'
                        style={{
                          background: `linear-gradient(to right, ${connection.color
                            .split(" ")
                            .join(", ")})`,
                          boxShadow: `0 0 10px 0 ${
                            connection.color.split(" ")[0]
                          }`,
                        }}
                      />
                    </div>

                    <p className='text-white/70 text-sm mb-5 group-hover:text-white/90 transition-colors duration-300'>
                      {connection.description}
                    </p>

                    {/* Features List without animations */}
                    <ul className='space-y-3 mb-6 flex-1'>
                      {connection.features.map((feature, featureIndex) => (
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
                                <CheckCircle2 className='h-3.5 w-3.5 text-white drop-shadow-md' />
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

        {/* CTA Section */}
        <div className='text-center mt-16'>
          <Button
            size='lg'
            className='bg-[#FFD60A] hover:bg-[#FFD60A]/90 text-[#0A1A2F] font-medium px-8 group'
            asChild>
            <Link href='/contact' className='flex items-center'>
              Connect With Us
              <div className='ml-2 transition-all duration-300 group-hover:ml-3'>
                <ArrowRight className='h-4 w-4' />
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
