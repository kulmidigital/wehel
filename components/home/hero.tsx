"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, Stethoscope, Heart, X, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { PartnerDialog } from "@/components/ui/partner-dialog";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const features = [
  {
    title: "Global Network",
    icon: Globe,
    gradient: "from-[#FFD60A] to-[#FF8A0A]",
    color: "#FFD60A",
    delay: 0.2,
  },
  {
    title: "Smart Care",
    icon: Stethoscope,
    gradient: "from-[#0AFFE7] to-[#0A95FF]",
    color: "#0AFFE7",
    delay: 0.3,
  },
  {
    title: "Patient-Centric",
    icon: Heart,
    gradient: "from-[#FF0AE7] to-[#B30AFF]",
    color: "#FF0AE7",
    delay: 0.4,
  },
];

// Optimized floating animation for background elements
const floatingAnimation1 = {
  initial: { transform: "translate(0, 0)" },
  animate: {
    transform: [
      "translate(0, 0)",
      "translate(30px, -20px)",
      "translate(-20px, 15px)",
      "translate(0, 0)",
    ],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const floatingAnimation2 = {
  initial: { transform: "translate(0, 0)" },
  animate: {
    transform: [
      "translate(0, 0)",
      "translate(-25px, 20px)",
      "translate(25px, -15px)",
      "translate(0, 0)",
    ],
    transition: {
      duration: 18,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const floatingAnimation3 = {
  initial: { transform: "translate(0, 0)" },
  animate: {
    transform: [
      "translate(0, 0)",
      "translate(20px, -15px)",
      "translate(-15px, 20px)",
      "translate(0, 0)",
    ],
    transition: {
      duration: 16,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Particle animation component
const Particles = ({ className = "", quantity = 20 }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {Array.from({ length: quantity }).map((_, index) => (
        <motion.div
          key={index}
          className='absolute w-1 h-1 bg-white rounded-full'
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * 100 - 50 + "%",
            y: Math.random() * 100 - 50 + "%",
          }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [0, 1, 0],
            x: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
            y: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 50]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className='relative min-h-screen  overflow-hidden bg-[#0A1A2F]'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Original grid pattern */}
        <div
          className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]'
          style={{
            maskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 110%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 110%)",
          }}
        />

        {/* Subtle particle effect */}
        {mounted && <Particles quantity={15} className='opacity-20' />}

        {/* Floating orbs with improved glow */}
        <motion.div
          variants={floatingAnimation1}
          initial='initial'
          animate='animate'
          className='absolute top-1/4 left-1/4 w-6 h-6 md:w-16 md:h-16 bg-[#FFD60A] rounded-full blur-[20px] md:blur-[40px] opacity-15'
        />
        <motion.div
          variants={floatingAnimation2}
          initial='initial'
          animate='animate'
          className='absolute top-1/2 right-1/4 w-4 h-4 md:w-14 md:h-14 bg-blue-400 rounded-full blur-[18px] md:blur-[35px] opacity-15'
        />
        <motion.div
          variants={floatingAnimation3}
          initial='initial'
          animate='animate'
          className='absolute bottom-1/3 left-1/2 w-5 h-5 md:w-12 md:h-12 bg-purple-400 rounded-full blur-[16px] md:blur-[32px] opacity-15'
        />

        {/* Bottom left gradient orb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className='absolute -bottom-32 -left-32 w-64 h-64 bg-[#FFD60A] rounded-full blur-[120px] opacity-20'
        />

        {/* Improved gradient ring with subtle pulse */}
        <div className='absolute top-[30%] sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className='w-[280px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[280px] sm:h-[400px] md:h-[600px] lg:h-[800px] border border-white/5 rounded-full'
            style={{
              background:
                "radial-gradient(circle, transparent 60%, rgba(255,214,10,0.08) 70%)",
            }}
          />

          {/* Additional inner ring */}
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.03, 1],
            }}
            transition={{
              rotate: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              },
            }}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[450px] lg:w-[600px] h-[200px] sm:h-[300px] md:h-[450px] lg:h-[600px] border border-white/10 rounded-full'
            style={{
              background:
                "radial-gradient(circle, transparent 60%, rgba(10,159,255,0.05) 70%)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <motion.div
        style={{ y }}
        className='relative container mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='inline-flex mb-8 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-white/80 shadow-lg shadow-black/10'>
            <span className='text-[#FFD60A] mr-2'>✨</span>
            Transforming Healthcare Access Globally
          </motion.div>

          {/* Main Heading - Enhanced 3D effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='mb-8 text-4xl font-medium tracking-tight text-white md:text-6xl lg:text-7xl perspective-1000'>
            Your Gateway to{" "}
            <span className='relative inline-block transform-style-3d'>
              <motion.span
                initial={{ rotateX: 45, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='relative z-10 text-[#FFD60A] inline-block'>
                Global Healthcare
              </motion.span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='absolute bottom-2 left-0 h-3 w-full origin-left -rotate-2 bg-[#FFD60A]/15 blur-[2px]'
              />
            </span>
          </motion.h1>

          {/* Description - Enhanced animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='mb-12 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed'>
            Experience world-class medical care with personalized support every
            step of the way. Your health journey begins here.
          </motion.p>

          {/* CTA Buttons - Enhanced animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-20'>
            <PartnerDialog
              trigger={
                <Button
                  size='lg'
                  className='relative w-full sm:w-auto min-w-[200px] h-12 bg-[#FFD60A] hover:bg-[#FFD60A]/90 text-[#0A1A2F] font-medium px-8 group overflow-hidden shadow-lg shadow-[#FFD60A]/20'>
                  <span className='relative z-10 flex items-center'>
                    Start Your Journey
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className='ml-2'>
                      <ArrowRight className='h-4 w-4' />
                    </motion.div>
                  </span>
                  <motion.div
                    initial={{ x: "-100%", opacity: 0.5 }}
                    whileHover={{ x: "100%", opacity: 0.8 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className='absolute inset-0 bg-white/20'
                  />
                </Button>
              }
            />
            <Button
              size='lg'
              className='w-full sm:w-auto min-w-[200px] h-12 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 border border-white/10 hover:border-white/20 px-8 group relative overflow-hidden'
              asChild>
              <Link href='/about' className='flex items-center justify-center'>
                Learn More
                <motion.div
                  initial={{ x: 0, opacity: 0.5 }}
                  whileHover={{ x: 5, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className='ml-2'>
                  <ArrowRight className='h-4 w-4' />
                </motion.div>
              </Link>
            </Button>
          </motion.div>

          {/* Features Grid - Enhanced 3D cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-16'>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: feature.delay }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className='group relative'>
                {/* Card Container */}
                <div className='relative transition-all duration-300'>
                  {/* Content */}
                  <div
                    className='relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-[160px] overflow-hidden flex flex-col items-center justify-center group-hover:border-[#FFD60A]/30 transition-all duration-300 shadow-md'
                    style={{
                      background: `linear-gradient(140deg, rgba(255,255,255,0.03), rgba(255,255,255,0.07))`,
                    }}>
                    {/* Subtle top border accent */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                      style={{
                        background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)`,
                      }}
                    />

                    <div className='relative z-10 text-center'>
                      <div className='mb-4 flex justify-center'>
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                          style={{
                            background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))`,
                            border: `1px solid rgba(255,255,255,0.1)`,
                          }}>
                          <feature.icon
                            className={`w-6 h-6 text-[${feature.color}]`}
                          />
                        </div>
                      </div>
                      <h3 className='text-2xl font-medium text-white group-hover:text-[#FFD60A] transition-colors'>
                        {feature.title}
                      </h3>
                    </div>

                    {/* Subtle corner accent */}
                    <div
                      className={`absolute bottom-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-all duration-300`}
                      style={{
                        background: `radial-gradient(circle at bottom right, ${feature.color}40, transparent 70%)`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
