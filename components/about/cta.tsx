"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Global Network",
    description: "Access to international healthcare facilities",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated team of healthcare professionals",
  },
  {
    icon: Clock,
    title: "24/7 Assistance",
    description: "Round-the-clock support for your needs",
  },
];

export function CTA() {
  return (
    <section className='relative py-24 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-b from-[#0A1A2F]/98 via-[#0A1A2F]/95 to-[#0A1A2F]/98 z-10' />
        <div className='absolute inset-0 bg-[#0A1A2F]/60' />
        <Image
          src='/images/hospital-bed.webp'
          alt='Healthcare Facility'
          fill
          className='object-cover opacity-50'
          priority
        />
      </div>

      {/* Grid Pattern */}
      <div className='absolute inset-0 z-20'>
        <div
          className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]'
          style={{
            maskImage:
              "radial-gradient(ellipse 50% 80% at 50% 50%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 50% 80% at 50% 50%, black, transparent)",
          }}
        />
      </div>

      <div className='container relative px-6 mx-auto z-30'>
        <div className='max-w-5xl mx-auto'>
          {/* Main Content */}
          <div className='text-center mb-12'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='inline-flex items-center px-4 py-2 rounded-full bg-[#FFD60A]/10 backdrop-blur-sm border border-[#FFD60A]/20 mb-8'>
              <span className='text-sm text-[#FFD60A] font-medium'>
                Join Wehel Today
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className='text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6'>
              Begin Your Journey to{" "}
              <span className='relative inline-block'>
                <span className='relative z-10 text-[#FFD60A]'>
                  World-Class Healthcare
                </span>
                <motion.span
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className='absolute bottom-2 left-0 h-3 w-full -rotate-2 bg-[#FFD60A]/10'
                />
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='text-lg text-white/80 max-w-2xl mx-auto mb-12'>
              Join thousands of patients who have trusted Wehel to guide them
              through their medical journey. Let us help you access world-class
              healthcare with confidence.
            </motion.p>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className='bg-[#0A1A2F]/80 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg'>
                <div className='w-12 h-12 rounded-lg bg-[#FFD60A]/20 flex items-center justify-center mb-4'>
                  <feature.icon className='w-6 h-6 text-[#FFD60A]' />
                </div>
                <h3 className='text-lg font-medium text-white mb-2'>
                  {feature.title}
                </h3>
                <p className='text-white/90'>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Button
              size='lg'
              className='w-full sm:w-auto bg-[#FFD60A] hover:bg-[#FFD60A]/90 text-[#0A1A2F] font-medium px-8 h-12 shadow-lg'
              asChild>
              <Link href='/request-invite' className='inline-flex items-center'>
                Get Started
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/40 font-medium px-8 h-12 shadow-lg backdrop-blur-md'
              asChild>
              <Link href='/contact'>Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
