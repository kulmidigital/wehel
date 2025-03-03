"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const features = [
  {
    title: "For Patients",
    description: "Access world-class healthcare with complete support.",
    image: "/images/patient.webp",
    badge: "Patient Care",
    benefits: [
      "Personalized care plans",
      "End-to-end travel support",
      "Cost-effective treatments",
      "24/7 assistance",
    ],
    href: "/request-invite",
    buttonText: "Request Invite",
  },
  {
    title: "For Hospitals",
    description: "Join our network of world-class healthcare providers.",
    image: "/images/hospital-bed.webp",
    badge: "Healthcare Excellence",
    benefits: [
      "Access to international patients",
      "Streamlined patient coordination",
      "Global visibility and recognition",
      "Simplified insurance processing",
    ],
    href: "/join-us/hospital",
  },
  {
    title: "For Travel Agencies",
    description: "Diversify your offerings with medical tourism services.",
    image: "/images/large-globe.webp",
    badge: "Tourism Expert",
    benefits: [
      "New revenue streams",
      "Comprehensive support system",
      "Training and certification",
      "Dedicated partnership manager",
    ],
    href: "/join-us/travel-agency",
  },
  {
    title: "For Government Institutions",
    description: "Establish public-private partnerships in healthcare.",
    image: "/images/government-institution.webp",
    badge: "Strategic Partner",
    benefits: [
      "Healthcare infrastructure development",
      "Medical tourism promotion",
      "Quality healthcare access",
      "Economic growth opportunities",
    ],
    href: "/join-us/government",
  },
  {
    title: "For Doctors",
    description: "Expand your practice to a global patient base.",
    image: "/images/international-doctors.webp",
    badge: "Medical Experts",
    benefits: [
      "International referral network",
      "Professional development",
      "Cross-border consultations",
      "Flexible engagement models",
    ],
    href: "/join-us/doctors",
  },
  {
    title: "For Insurance Companies",
    description: "Partner in providing comprehensive healthcare coverage.",
    image: "/images/insurance.webp",
    badge: "Global Coverage",
    benefits: [
      "Direct billing partnerships",
      "Verified healthcare network",
      "Cost-effective treatments",
      "Quality assurance standards",
    ],
    href: "/join-us/insurance",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const cardGradients = [
  "from-[#FFD60A] via-[#FF8A0A] to-[#FF5733]",
  "from-[#0AFFE7] via-[#0A95FF] to-[#0A4FFF]",
  "from-[#FF0AE7] via-[#B30AFF] to-[#7A0AFF]",
  "from-[#0AFF95] via-[#0AFF4F] to-[#7AFF0A]",
  "from-[#FF0A5E] via-[#FF0A95] to-[#FF0AE7]",
  "from-[#FFD60A] via-[#FFAA0A] to-[#FF810A]",
];

const badgeStyles = [
  {
    background: "bg-gradient-to-r from-rose-500/20 to-orange-400/20",
    text: "text-rose-100",
    border: "border-rose-200/20",
    glow: "shadow-rose-500/20",
  },
  {
    background: "bg-gradient-to-r from-violet-500/20 to-indigo-400/20",
    text: "text-violet-100",
    border: "border-violet-200/20",
    glow: "shadow-violet-500/20",
  },
  {
    background: "bg-gradient-to-r from-blue-500/20 to-cyan-400/20",
    text: "text-blue-100",
    border: "border-blue-200/20",
    glow: "shadow-blue-500/20",
  },
  {
    background: "bg-gradient-to-r from-emerald-500/20 to-teal-400/20",
    text: "text-emerald-100",
    border: "border-emerald-200/20",
    glow: "shadow-emerald-500/20",
  },
  {
    background: "bg-gradient-to-r from-amber-500/20 to-yellow-400/20",
    text: "text-amber-100",
    border: "border-amber-200/20",
    glow: "shadow-amber-500/20",
  },
  {
    background: "bg-gradient-to-r from-pink-500/20 to-rose-400/20",
    text: "text-pink-100",
    border: "border-pink-200/20",
    glow: "shadow-pink-500/20",
  },
];

export function Features() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className='relative py-24 bg-[#0A1A2F] overflow-hidden'>
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

      {/* Decorative Gradient Orbs */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-32 -left-32 w-64 h-64 bg-[#FFD60A] rounded-full blur-[120px] opacity-20' />
        <div className='absolute -bottom-32 -right-32 w-64 h-64 bg-blue-400 rounded-full blur-[120px] opacity-20' />
      </div>

      <div className='relative container mx-auto px-6'>
        {/* Section Header */}
        <div className='max-w-2xl mx-auto text-center mb-16'>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8'>
            <span className='text-sm text-[#FFD60A]'>Join Our Network</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-medium text-white mb-4'>
            Partner with <span className='text-[#FFD60A]'>Wehel</span>
          </h2>
          <p className='text-white/60'>
            Join our global healthcare network and be part of transforming
            medical tourism
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className='group relative perspective-1000'
              custom={index}
              initial='initial'
              whileInView='animate'
              whileHover='hover'
              viewport={{ once: true }}
              variants={cardVariants}>
              {/* 3D Card Container */}
              <div className='relative h-full transform-style-3d transition-all duration-500 group-hover:rotate-y-3 group-hover:rotate-x-3'>
                {/* Animated glow effect */}
                <div
                  className={`absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 ${badgeStyles[index].glow}`}
                  style={{
                    background: `linear-gradient(135deg, ${cardGradients[index]
                      .split(" ")
                      .map((g) =>
                        g
                          .replace("from-", "")
                          .replace("via-", "")
                          .replace("to-", "")
                      )
                      .join(", ")})`,
                  }}
                />

                {/* Card Body */}
                <div className='relative bg-[#0A1A2F]/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col group-hover:border-white/20 transition-all duration-300 shadow-xl shadow-black/50'>
                  {/* Animated background pattern - simplified */}
                  <div className='absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500'>
                    <div className='absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:24px_24px]' />
                  </div>

                  {/* Image Container without parallax effect */}
                  <div className='relative h-[220px] overflow-hidden'>
                    <div className='absolute inset-0'>
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className='object-cover transition-all duration-700 group-hover:scale-105'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-[#0A1A2F] via-[#0A1A2F]/70 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300' />
                    </div>

                    {/* Floating badge with glow effect */}
                    <div
                      className={`absolute top-4 left-4 px-3 py-1.5 rounded-full ${badgeStyles[index].background} backdrop-blur-md border ${badgeStyles[index].border} shadow-lg`}>
                      <span
                        className={`text-xs font-medium ${badgeStyles[index].text}`}>
                        {feature.badge}
                      </span>
                    </div>

                    {/* Corner icon */}
                    <div
                      className='absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 shadow-lg'
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${cardGradients[
                          index
                        ]
                          .split(" ")
                          .map((g) =>
                            g
                              .replace("from-", "")
                              .replace("via-", "")
                              .replace("to-", "")
                          )
                          .join(", ")})`,
                      }}>
                      <ArrowUpRight className='w-5 h-5 text-white' />
                    </div>
                  </div>

                  <div className='p-6 flex flex-col flex-1 relative z-10'>
                    {/* Title with simple underline */}
                    <div className='relative inline-block mb-3'>
                      <h3 className='text-2xl font-medium text-white transition-all duration-300 group-hover:text-[#FFD60A]'>
                        {feature.title}
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
                      {feature.description}
                    </p>

                    {/* Benefits list with animated icons */}
                    <ul className='space-y-3 mb-6 flex-1'>
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefit}
                          className='flex items-center text-sm group/item'>
                          <div className='relative mr-3 flex-shrink-0'>
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-all duration-300 border border-white/20 shadow-sm`}
                              style={{
                                background:
                                  index === 0
                                    ? "linear-gradient(135deg, #FFD60A, #FF8A0A)"
                                    : index === 1
                                    ? "linear-gradient(135deg, #0AFFE7, #0A95FF)"
                                    : index === 2
                                    ? "linear-gradient(135deg, #FF0AE7, #B30AFF)"
                                    : index === 3
                                    ? "linear-gradient(135deg, #0AFF95, #0AFF4F)"
                                    : index === 4
                                    ? "linear-gradient(135deg, #FF0A5E, #FF0A95)"
                                    : "linear-gradient(135deg, #FFD60A, #FFAA0A)",
                              }}>
                              <div className='flex items-center justify-center'>
                                <ArrowRight className='h-3 w-3 text-white drop-shadow-md' />
                              </div>
                            </div>
                          </div>
                          <span className='text-white/80 group-hover:text-white transition-colors duration-300 group-hover/item:font-medium'>
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Button without animations */}
                    <div className='relative mt-auto overflow-hidden rounded-xl'>
                      <div
                        className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                        style={{
                          background: `linear-gradient(135deg, ${cardGradients[
                            index
                          ]
                            .split(" ")
                            .map((g) =>
                              g
                                .replace("from-", "")
                                .replace("via-", "")
                                .replace("to-", "")
                            )
                            .join(", ")})`,
                        }}
                      />
                      <Button
                        variant='ghost'
                        className='w-full justify-between bg-white/5 hover:bg-transparent border border-white/10 group-hover:border-transparent relative z-10 overflow-hidden'
                        asChild>
                        <Link
                          href={feature.href}
                          className='flex items-center justify-between'>
                          <span className='text-white transition-all duration-300 font-medium'>
                            {feature.buttonText || "Join as Partner"}
                          </span>
                          <div className='flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300'>
                            <ArrowRight className='h-4 w-4 text-white drop-shadow-md' />
                          </div>
                        </Link>
                      </Button>
                    </div>
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
