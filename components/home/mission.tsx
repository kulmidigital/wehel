"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Globe, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Patient-First Approach",
    description:
      "Dedicated to providing exceptional care and support for every individual",
    highlights: [
      "Personalized care plans",
      "24/7 patient support",
      "Compassionate service",
    ],
    color: "from-rose-500 to-pink-600",
    gradientStyle: "linear-gradient(135deg, #FF5E7D, #FF3C64)",
  },
  {
    icon: Globe,
    title: "Global Excellence",
    description:
      "Connecting patients with world-class healthcare across borders",
    highlights: [
      "International partnerships",
      "Quality assurance",
      "Seamless coordination",
    ],
    color: "from-blue-500 to-indigo-600",
    gradientStyle: "linear-gradient(135deg, #0AFFE7, #0A95FF)",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "Clear communication and ethical practices in all our operations",
    highlights: ["Ethical standards", "Clear pricing", "Honest communication"],
    color: "from-amber-500 to-orange-600",
    gradientStyle: "linear-gradient(135deg, #FFD60A, #FF8A0A)",
  },
  {
    icon: Users,
    title: "Cultural Respect",
    description: "Embracing diversity and providing culturally sensitive care",
    highlights: [
      "Cultural competence",
      "Multilingual services",
      "Inclusive approach",
    ],
    color: "from-emerald-500 to-teal-600",
    gradientStyle: "linear-gradient(135deg, #0AFF95, #0AFF4F)",
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

export function Mission() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className='relative py-24 overflow-hidden'>
      {/* Background Pattern */}
      <motion.div className='absolute inset-0' style={{ y }}>
        <div
          className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]'
          style={{
            maskImage:
              "radial-gradient(ellipse 60% 80% at 50% 50%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 80% at 50% 50%, black, transparent)",
          }}
        />
      </motion.div>

      {/* Decorative Gradient Orbs */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Top left gradient orb to blend with Advantage section's bottom left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className='absolute -top-32 -left-32 w-64 h-64 bg-[#FFD60A] rounded-full blur-[120px] opacity-20'
        />
        {/* Bottom right gradient orb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className='absolute -bottom-32 -right-32 w-64 h-64 bg-blue-400 rounded-full blur-[120px] opacity-20'
        />
      </div>

      {/* Background Image */}
      <div className='absolute inset-0 opacity-10'>
        <Image
          src='/images/large-globe.webp'
          alt='Global Healthcare'
          fill
          className='object-cover'
        />
      </div>

      <div className='container px-6 mx-auto relative'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto'>
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className='relative perspective-1000'>
            <div className='relative h-full transform-style-3d transition-all duration-500 group-hover:rotate-y-3 group-hover:rotate-x-3'>
              {/* Animated glow effect */}
              <div className='absolute -inset-0.5 rounded-xl opacity-0 hover:opacity-100 blur-xl transition-all duration-500 bg-gradient-to-br from-[#FFD60A] to-amber-500' />

              <div className='relative bg-[#0A1A2F]/80 backdrop-blur-md border border-white/10 rounded-xl p-8 h-full hover:border-white/20 transition-all duration-300 shadow-xl shadow-black/50'>
                {/* Animated background pattern */}
                <div className='absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-xl overflow-hidden'>
                  <div className='absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:24px_24px] animate-[pattern-shift_60s_linear_infinite]' />
                </div>

                <motion.div
                  className='absolute -top-3 left-8 px-4 py-1 bg-[#FFD60A] rounded-full shadow-lg'
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <span className='text-sm font-medium text-[#0A1A2F]'>
                    Our Mission
                  </span>
                </motion.div>

                <h3 className='text-2xl font-medium text-white mt-4 mb-4'>
                  Making Healthcare Accessible Globally
                </h3>

                <p className='text-white/70 mb-6 relative z-10'>
                  We are committed to breaking down barriers in healthcare
                  access, ensuring that individuals receive high-quality medical
                  care regardless of geographical boundaries. Through our
                  comprehensive support system, we create seamless medical
                  journeys that prioritize patient well-being and peace of mind.
                </p>

                <div className='flex items-center gap-4 relative z-10'>
                  <motion.div
                    className='h-1 w-12 bg-[#FFD60A] rounded-full'
                    whileHover={{ width: 60 }}
                    transition={{ duration: 0.3 }}
                  />
                  <p className='text-white/80 text-sm font-medium'>
                    Transforming Medical Tourism
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className='relative perspective-1000'>
            <div className='relative h-full transform-style-3d transition-all duration-500 group-hover:rotate-y-3 group-hover:rotate-x-3'>
              {/* Animated glow effect */}
              <div className='absolute -inset-0.5 rounded-xl opacity-0 hover:opacity-100 blur-xl transition-all duration-500 bg-gradient-to-br from-blue-400 to-indigo-500' />

              <div className='relative bg-[#0A1A2F]/80 backdrop-blur-md border border-white/10 rounded-xl p-8 h-full hover:border-white/20 transition-all duration-300 shadow-xl shadow-black/50'>
                {/* Animated background pattern */}
                <div className='absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-xl overflow-hidden'>
                  <div className='absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:24px_24px] animate-[pattern-shift_60s_linear_infinite]' />
                </div>

                <motion.div
                  className='absolute -top-3 left-8 px-4 py-1 bg-[#FFD60A] rounded-full shadow-lg'
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <span className='text-sm font-medium text-[#0A1A2F]'>
                    Our Vision
                  </span>
                </motion.div>

                <h3 className='text-2xl font-medium text-white mt-4 mb-4'>
                  Future of Global Healthcare
                </h3>

                <p className='text-white/70 mb-6 relative z-10'>
                  We envision a world where quality healthcare knows no borders.
                  By fostering strong partnerships between healthcare providers,
                  insurers, and facilitators, we aim to create an integrated
                  ecosystem that makes medical tourism seamless, affordable, and
                  patient-centered.
                </p>

                <div className='flex items-center gap-4 relative z-10'>
                  <motion.div
                    className='h-1 w-12 bg-[#FFD60A] rounded-full'
                    whileHover={{ width: 60 }}
                    transition={{ duration: 0.3 }}
                  />
                  <p className='text-white/80 text-sm font-medium'>
                    Building Healthcare Bridges
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-16'>
          <h3 className='text-xl font-medium text-white text-center mb-12'>
            Our Core Values
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className='relative perspective-1000'>
                <div className='relative h-full transform-style-3d transition-all duration-500 group-hover:rotate-y-3 group-hover:rotate-x-3'>
                  {/* Animated glow effect */}
                  <div
                    className='absolute -inset-0.5 rounded-xl opacity-0 hover:opacity-100 blur-xl transition-all duration-500'
                    style={{
                      background: value.gradientStyle,
                    }}
                  />

                  <div className='relative bg-[#0A1A2F]/80 backdrop-blur-md border border-white/10 rounded-xl p-6 h-full hover:border-white/20 transition-all duration-300 shadow-xl shadow-black/50 group'>
                    {/* Animated background pattern */}
                    <div className='absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-xl overflow-hidden'>
                      <div className='absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:24px_24px] animate-[pattern-shift_60s_linear_infinite]' />
                    </div>

                    <motion.div
                      className='relative w-16 h-16 rounded-full flex items-center justify-center mb-6'
                      style={{
                        background: value.gradientStyle,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}>
                      <motion.div
                        animate={{
                          rotate: [0, 5, 0, -5, 0],
                          scale: [1, 1.05, 1, 1.05, 1],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "loop",
                        }}>
                        <value.icon className='w-8 h-8 text-white drop-shadow-lg' />
                      </motion.div>
                    </motion.div>

                    <h3 className='text-xl font-medium text-white mb-2 group-hover:text-[#FFD60A] transition-colors duration-300'>
                      {value.title}
                    </h3>

                    <p className='text-white/70 text-sm mb-4 group-hover:text-white/90 transition-colors duration-300'>
                      {value.description}
                    </p>

                    <ul className='space-y-3'>
                      {value.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlight}
                          className='flex items-center text-white/80 text-sm group/item'>
                          <div className='relative mr-3 flex-shrink-0'>
                            <div
                              className='w-5 h-5 rounded-full flex items-center justify-center border border-white/20 shadow-sm group-hover/item:scale-110 transition-all duration-300'
                              style={{
                                background: value.gradientStyle,
                              }}>
                              <div className='w-1.5 h-1.5 bg-white rounded-full' />
                            </div>
                          </div>
                          <span className='group-hover:text-white transition-colors duration-300 group-hover/item:font-medium'>
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
