"use client";

import { motion } from "framer-motion";
import { TravelAgencyForm } from "@/components/forms/travel-agency/travel-agency-form";

export default function TravelAgencyPage() {
  return (
    <main className='min-h-screen bg-[#0284c7] pt-32 pb-20'>
      <div className='container px-6 mx-auto'>
        {/* Header Section */}
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='inline-flex items-center px-4 py-2 rounded-full bg-[#026da7] backdrop-blur-sm border-2 border-[#4ade80]/40 mb-8 shadow-lg'>
            <span className='text-sm font-bold text-[#4ade80]'>
              Travel Agency Partnership
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-3xl md:text-4xl font-bold text-white mb-6'>
            Join Our Medical Tourism Network
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='text-lg text-white'>
            Partner with Wehel to provide comprehensive medical tourism
            services. Together, we can create seamless healthcare journeys for
            international patients, combining quality medical care with
            exceptional travel experiences.
          </motion.p>
        </div>

        {/* Form Section */}
        <div className='max-w-4xl mx-auto'>
          <TravelAgencyForm />
        </div>
      </div>
    </main>
  );
}
