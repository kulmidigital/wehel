"use client";

import { motion } from "framer-motion";
import { GovernmentForm } from "@/components/forms/government/government-form";

export default function GovernmentPage() {
  return (
    <main className='min-h-screen bg-[#0284c7] pt-32 pb-20 relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(60deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-60deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20'></div>

      <div className='container px-6 mx-auto relative'>
        {/* Header Section */}
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='inline-flex items-center px-4 py-2 rounded-full bg-[#026da7] backdrop-blur-sm border-2 border-[#4ade80]/40 mb-8 shadow-lg'>
            <span className='text-sm font-bold text-[#4ade80]'>
              Government Partnership
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-3xl md:text-4xl font-bold text-white mb-6'>
            Public-Private Healthcare Collaboration
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='text-lg text-white'>
            Partner with Wehel to enhance healthcare accessibility and quality
            through strategic public-private partnerships. Together, we can
            strengthen healthcare systems and improve patient outcomes.
          </motion.p>
        </div>

        {/* Form Section */}
        <div className='max-w-4xl mx-auto'>
          <GovernmentForm />
        </div>
      </div>
    </main>
  );
}
