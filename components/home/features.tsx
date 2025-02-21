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
  "from-[#FFD60A] via-[#FF8A0A] to-[#FF5733]",
  "from-[#0AFFE7] via-[#0A95FF] to-[#0A4FFF]",
  "from-[#FF0AE7] via-[#B30AFF] to-[#7A0AFF]",
  "from-[#0AFF95] via-[#0AFF4F] to-[#7AFF0A]",
  "from-[#FF0A5E] via-[#FF0A95] to-[#FF0AE7]",
  "from-[#FFD60A] via-[#FFAA0A] to-[#FF810A]",
];

const badgeStyles = [
  {
    background: "bg-gradient-to-r from-rose-500/15 to-orange-400/15",
    text: "text-rose-100/90",
    border: "border-rose-200/10",
  },
  {
    background: "bg-gradient-to-r from-violet-500/15 to-indigo-400/15",
    text: "text-violet-100/90",
    border: "border-violet-200/10",
  },
  {
    background: "bg-gradient-to-r from-blue-500/15 to-cyan-400/15",
    text: "text-blue-100/90",
    border: "border-blue-200/10",
  },
  {
    background: "bg-gradient-to-r from-emerald-500/15 to-teal-400/15",
    text: "text-emerald-100/90",
    border: "border-emerald-200/10",
  },
  {
    background: "bg-gradient-to-r from-amber-500/15 to-yellow-400/15",
    text: "text-amber-100/90",
    border: "border-amber-200/10",
  },
  {
    background: "bg-gradient-to-r from-pink-500/15 to-rose-400/15",
    text: "text-pink-100/90",
    border: "border-pink-200/10",
  },
];

export function Features() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className='relative py-24 bg-[#0A1A2F] overflow-hidden'>
      {/* Background Pattern */}
      <motion.div className='absolute inset-0' style={{ y }}>
        <div
          className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]'
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
          className='absolute -top-32 -left-32 w-64 h-64 bg-[#FFD60A] rounded-full blur-[120px] opacity-20'
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='absolute -bottom-32 -right-32 w-64 h-64 bg-blue-400 rounded-full blur-[120px] opacity-20'
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
            className='inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8'>
            <span className='text-sm text-[#FFD60A]'>Join Our Network</span>
          </motion.div>
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
              custom={index}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              variants={cardVariants}>
              {/* Animated gradient border */}
              <div
                className='absolute -inset-[1px] rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 animate-gradient-xy'
                style={{
                  backgroundImage: `linear-gradient(to bottom right, ${cardGradients[
                    index
                  ]
                    .split(" ")
                    .join(", ")})`,
                }}
              />

              <div className='relative bg-[#0A1A2F]/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col group-hover:border-transparent transition-colors duration-300'>
                {/* Image Container */}
                <div className='relative h-[200px] overflow-hidden'>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className='object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#0A1A2F] via-[#0A1A2F]/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-300' />

                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`absolute top-4 left-4 px-3 py-1.5 rounded-full ${badgeStyles[index].background} backdrop-blur-md border ${badgeStyles[index].border} bg-black/20`}>
                    <span
                      className={`text-xs font-medium ${badgeStyles[index].text}`}>
                      {feature.badge}
                    </span>
                  </motion.div>

                  {/* Hover Effect Corner */}
                  <div
                    className='absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4 rotate-12 group-hover:rotate-0'
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, ${cardGradients[
                        index
                      ]
                        .split(" ")
                        .join(", ")})`,
                    }}>
                    <ArrowUpRight className='w-4 h-4 text-white' />
                  </div>
                </div>

                <div className='p-6 flex flex-col flex-1 relative'>
                  {/* Title with animated gradient */}
                  <div className='relative inline-block mb-2 overflow-hidden'>
                    <h3 className='text-xl font-medium text-white transition-all duration-300'>
                      {feature.title}
                    </h3>
                    <motion.div
                      className='absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500'
                      style={{
                        background: `linear-gradient(to right, ${cardGradients[
                          index
                        ]
                          .split(" ")
                          .join(", ")})`,
                      }}
                    />
                  </div>

                  <p className='text-white/60 text-sm mb-4 group-hover:text-white/80 transition-colors duration-300'>
                    {feature.description}
                  </p>

                  <ul className='space-y-2 mb-6 flex-1'>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <motion.li
                        key={benefit}
                        className='flex items-start text-sm'
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: benefitIndex * 0.1,
                        }}>
                        <div className='relative'>
                          <ArrowRight
                            className='h-4 w-4 mr-2 mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform duration-300'
                            style={{
                              color: `var(--gradient-${index}-start, #FFD60A)`,
                            }}
                          />
                          <motion.div
                            className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur'
                            style={{
                              background: `linear-gradient(to right, ${cardGradients[
                                index
                              ]
                                .split(" ")
                                .join(", ")})`,
                            }}
                          />
                        </div>
                        <span className='text-white/80 group-hover:text-white transition-colors duration-300'>
                          {benefit}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    variant='ghost'
                    className='w-full justify-between hover:bg-white/5 mt-auto group-hover:bg-white/5'
                    asChild>
                    <Link
                      href={feature.href}
                      className='flex items-center justify-between'>
                      <span className='text-white transition-all duration-300'>
                        {feature.buttonText || "Join as Partner"}
                      </span>
                      <ArrowRight
                        className='h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300'
                        style={{
                          color: `var(--gradient-${index}-start, #FFD60A)`,
                        }}
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
