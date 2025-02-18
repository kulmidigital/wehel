"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, Stethoscope, Heart, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
    delay: 0.2,
  },
  {
    title: "Smart Care",
    icon: Stethoscope,
    gradient: "from-[#0AFFE7] to-[#0A95FF]",
    delay: 0.3,
  },
  {
    title: "Patient-Centric",
    icon: Heart,
    gradient: "from-[#FF0AE7] to-[#B30AFF]",
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

const partnerLinks = [
  {
    title: "Hospitals",
    href: "/join-us/hospital",
    description: "Partner with us as a healthcare facility",
  },
  {
    title: "Insurance Companies",
    href: "/join-us/insurance",
    description: "Join our network as an insurance provider",
  },
  {
    title: "Doctors",
    href: "/join-us/doctors",
    description: "Become part of our medical network",
  },
  {
    title: "Travel Agencies",
    href: "/join-us/travel-agency",
    description: "Partner in medical tourism services",
  },
  {
    title: "Government",
    href: "/join-us/government",
    description: "Establish healthcare partnerships",
  },
  {
    title: "Patients",
    href: "/request-invite",
    description: "Start your healthcare journey",
  },
];

export function Hero() {
  return (
    <div className='relative min-h-screen overflow-hidden bg-[#0A1A2F]'>
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

        {/* Floating orbs - Reduced size and blur on mobile */}
        <motion.div
          variants={floatingAnimation1}
          initial='initial'
          animate='animate'
          className='absolute top-1/4 left-1/4 w-6 h-6 md:w-12 md:h-12 bg-[#FFD60A] rounded-full blur-[15px] md:blur-[30px] opacity-10'
        />
        <motion.div
          variants={floatingAnimation2}
          initial='initial'
          animate='animate'
          className='absolute top-1/2 right-1/4 w-4 h-4 md:w-10 md:h-10 bg-blue-400 rounded-full blur-[12px] md:blur-[25px] opacity-10'
        />
        <motion.div
          variants={floatingAnimation3}
          initial='initial'
          animate='animate'
          className='absolute bottom-1/3 left-1/2 w-5 h-5 md:w-11 md:h-11 bg-purple-400 rounded-full blur-[14px] md:blur-[28px] opacity-10'
        />

        {/* Bottom left gradient orb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className='absolute -bottom-32 -left-32 w-64 h-64 bg-[#FFD60A] rounded-full blur-[120px] opacity-20'
        />

        {/* Simplified gradient ring - reduced animation complexity */}
        <div className='absolute top-[30%] sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
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
              },
            }}
            className='w-[280px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[280px] sm:h-[400px] md:h-[600px] lg:h-[800px] border border-white/5 rounded-full'
            style={{
              background:
                "radial-gradient(circle, transparent 60%, rgba(255,214,10,0.05) 70%)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className='relative container mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='inline-flex mb-8 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-white/80'>
            Transforming Healthcare Access Globally
          </motion.div>

          {/* Main Heading - Simplified animations */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='mb-8 text-4xl font-medium tracking-tight text-white md:text-6xl lg:text-7xl'>
            Your Gateway to{" "}
            <span className='relative inline-block'>
              <span className='relative z-10 text-[#FFD60A]'>
                Global Healthcare
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='absolute bottom-2 left-0 h-3 w-full origin-left -rotate-2 bg-[#FFD60A]/10'
              />
            </span>
          </motion.h1>

          {/* Description - Simplified animation */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='mb-12 text-lg text-white/60 max-w-2xl mx-auto'>
            Experience world-class medical care with personalized support every
            step of the way. Your health journey begins here.
          </motion.p>

          {/* CTA Buttons - Simplified animation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-20'>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size='lg'
                  className='relative w-full sm:w-auto min-w-[200px] h-12 bg-[#FFD60A] hover:bg-[#FFD60A]/90 text-[#0A1A2F] font-medium px-8'>
                  Start Your Journey
                </Button>
              </DialogTrigger>
              <DialogContent className='bg-[#0A1A2F] border-white/10 w-[95vw] max-w-3xl p-6 md:p-8'>
                <DialogHeader className='relative pb-6 text-center md:text-left'>
                  <DialogTitle className='text-2xl md:text-3xl text-white'>
                    Choose Your Path
                  </DialogTitle>
                  <DialogTrigger asChild>
                    <button className='absolute right-0 top-0 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors'>
                      <X className='w-5 h-5' />
                    </button>
                  </DialogTrigger>
                </DialogHeader>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-h-[60vh] overflow-y-auto pr-2'>
                  {partnerLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className='group block p-4 md:p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 hover:border-white/20'>
                      <h3 className='text-lg md:text-xl font-medium text-white mb-2 group-hover:text-[#FFD60A] transition-colors'>
                        {link.title}
                      </h3>
                      <p className='text-sm md:text-base text-white/60 group-hover:text-white/80 transition-colors'>
                        {link.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
            <Button
              size='lg'
              className='w-full sm:w-auto min-w-[200px] h-12 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 border-0 px-8'
              asChild>
              <Link href='/about'>Learn More</Link>
            </Button>
          </motion.div>

          {/* Features Grid */}
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
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className='group relative'>
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className='relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-[140px] overflow-hidden flex flex-col items-center justify-center'>
                  <div className='relative z-10 text-center'>
                    <div className='mb-4 flex justify-center'>
                      <feature.icon
                        className={`w-8 h-8 group-hover:scale-110 transition-transform duration-300 ${
                          feature.gradient.includes("FFD60A")
                            ? "text-[#FFD60A]"
                            : feature.gradient.includes("0AFFE7")
                            ? "text-[#0AFFE7]"
                            : "text-[#FF0AE7]"
                        }`}
                      />
                    </div>
                    <h3 className='text-2xl font-medium text-white group-hover:text-[#FFD60A] transition-colors'>
                      {feature.title}
                    </h3>
                  </div>

                  {/* Decorative elements */}
                  <div
                    className='absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-gradient-to-br opacity-20 group-hover:opacity-40 transition-all duration-300 group-hover:scale-110'
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, ${
                        feature.gradient.split(" ")[1]
                      }, ${feature.gradient.split(" ")[3]})`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
