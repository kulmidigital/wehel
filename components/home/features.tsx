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
};

const cardGradients = [
  "from-[#4ADE80] via-[#22C55E] to-[#16A34A]",
  "from-[#0EA5E9] via-[#0284C7] to-[#0369A1]",
  "from-[#38BDF8] via-[#0EA5E9] to-[#0284C7]",
  "from-[#22C55E] via-[#16A34A] to-[#15803D]",
  "from-[#0EA5E9] via-[#0284C7] to-[#0369A1]",
  "from-[#4ADE80] via-[#22C55E] to-[#16A34A]",
];

const badgeStyles = [
  {
    background: "bg-gradient-to-r from-emerald-500/30 to-teal-400/30",
    text: "text-white",
    border: "border-emerald-200/30",
  },
  {
    background: "bg-gradient-to-r from-blue-500/30 to-cyan-400/30",
    text: "text-white",
    border: "border-blue-200/30",
  },
  {
    background: "bg-gradient-to-r from-sky-500/30 to-blue-400/30",
    text: "text-white",
    border: "border-sky-200/30",
  },
  {
    background: "bg-gradient-to-r from-emerald-500/30 to-teal-400/30",
    text: "text-white",
    border: "border-emerald-200/30",
  },
  {
    background: "bg-gradient-to-r from-blue-500/30 to-cyan-400/30",
    text: "text-white",
    border: "border-blue-200/30",
  },
  {
    background: "bg-gradient-to-r from-emerald-500/30 to-teal-400/30",
    text: "text-white",
    border: "border-emerald-200/30",
  },
];

export function Features() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className='relative py-24 bg-[#0284C7] overflow-hidden'>
      {/* Background Pattern */}
      <motion.div className='absolute inset-0' style={{ y }}>
        <div
          className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:4rem_4rem]'
          style={{
            maskImage:
              "radial-gradient(ellipse 50% 80% at 50% 50%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 50% 80% at 50% 50%, black, transparent)",
          }}
        />
      </motion.div>

      {/* Decorative Gradient Orbs */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className='absolute -top-32 -left-32 w-64 h-64 bg-[#4ADE80] rounded-full blur-[120px] opacity-30'
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='absolute -bottom-32 -right-32 w-64 h-64 bg-[#38BDF8] rounded-full blur-[120px] opacity-30'
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-sm border border-white/30 mb-8 shadow-lg'>
            <span className='text-sm text-[#4ADE80] font-semibold'>
              Join Our Network
            </span>
          </motion.div>
          <h2 className='text-3xl md:text-4xl font-medium text-white mb-4'>
            Partner with <span className='text-[#4ADE80]'>Wehel</span>
          </h2>
          <p className='text-white text-lg'>
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
              custom={index}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}>
              {/* Card glow effect */}
              <div
                className='absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md'
                style={{
                  background: `linear-gradient(to bottom right, ${
                    cardGradients[index].split(" ")[1]
                  }, ${cardGradients[index].split(" ")[3]})`,
                }}
              />

              {/* Main card */}
              <div className='relative bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-md border border-white/30 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 shadow-xl'>
                {/* Image Container with creative overlay */}
                <div className='relative h-[200px] overflow-hidden'>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className='object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1'
                  />

                  {/* Diagonal overlay */}
                  <div className='absolute inset-0 bg-gradient-to-tr from-[#0284C7]/95 via-[#0284C7]/70 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300' />

                  {/* Decorative pattern overlay */}
                  <div className='absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 group-hover:opacity-50 transition-opacity duration-300' />

                  {/* Floating badge with animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className={`absolute top-4 left-4 px-3 py-1.5 rounded-full ${badgeStyles[index].background} backdrop-blur-md border ${badgeStyles[index].border} shadow-lg`}>
                    <span
                      className={`text-xs font-bold ${badgeStyles[index].text} tracking-wide`}>
                      {feature.badge}
                    </span>
                  </motion.div>

                  {/* Animated corner icon */}
                  <motion.div
                    className='absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 rotate-12 group-hover:rotate-0 shadow-lg'
                    style={{
                      background: `linear-gradient(to bottom right, ${
                        cardGradients[index].split(" ")[1]
                      }, ${cardGradients[index].split(" ")[3]})`,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 45,
                      transition: { duration: 0.2 },
                    }}>
                    <ArrowUpRight className='w-5 h-5 text-white' />
                  </motion.div>
                </div>

                <div className='p-6 flex flex-col flex-1 relative'>
                  {/* Decorative accent line */}
                  <div
                    className='absolute top-0 left-0 h-1 w-1/3 rounded-full'
                    style={{
                      background: `linear-gradient(to right, ${
                        cardGradients[index].split(" ")[1]
                      }, transparent)`,
                    }}
                  />

                  {/* Title with animated underline */}
                  <div className='relative inline-block mb-3 overflow-hidden'>
                    <h3 className='text-xl font-bold text-white transition-all duration-300 group-hover:text-[#4ADE80]'>
                      {feature.title}
                    </h3>
                    <motion.div
                      className='absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500'
                      style={{
                        background: `linear-gradient(to right, ${
                          cardGradients[index].split(" ")[1]
                        }, transparent)`,
                      }}
                    />
                  </div>

                  <p className='text-white text-sm mb-5 group-hover:text-white transition-colors duration-300 leading-relaxed'>
                    {feature.description}
                  </p>

                  {/* Benefits list with animated icons */}
                  <ul className='space-y-3 mb-6 flex-1'>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <motion.li
                        key={benefit}
                        className='flex items-start text-sm group/item'
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: benefitIndex * 0.1,
                        }}
                        whileHover={{ x: 3 }}>
                        <div className='relative'>
                          <motion.div
                            className='h-5 w-5 rounded-full flex items-center justify-center mr-2 mt-0.5 shrink-0 transition-all duration-300 bg-white/10 border border-white/20 group-hover/item:border-[#4ADE80]/50'
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "rgba(74, 222, 128, 0.2)",
                            }}>
                            <ArrowRight className='h-3 w-3 text-[#4ADE80] group-hover/item:translate-x-0.5 transition-transform duration-300' />
                          </motion.div>
                        </div>
                        <span className='text-white font-medium group-hover/item:text-[#4ADE80] transition-colors duration-300'>
                          {benefit}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Button with simpler hover effect - removed gradient glow */}
                  <div className='mt-auto'>
                    <Button
                      variant='ghost'
                      className='w-full justify-between bg-white/10 hover:bg-white/15 border border-white/30 hover:border-[#4ADE80]/50 rounded-lg shadow-md transition-all duration-300'
                      asChild>
                      <Link
                        href={feature.href}
                        className='flex items-center justify-between'>
                        <span className='text-white font-medium transition-all duration-300 group-hover:text-[#4ADE80]'>
                          {feature.buttonText || "Join as Partner"}
                        </span>
                        <motion.div
                          className='flex items-center justify-center w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#4ADE80]/20 transition-colors duration-300'
                          whileHover={{ rotate: 45 }}>
                          <ArrowRight className='h-3.5 w-3.5 text-[#4ADE80] group-hover:translate-x-0.5 transition-transform duration-300' />
                        </motion.div>
                      </Link>
                    </Button>
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
