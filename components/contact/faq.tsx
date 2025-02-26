"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Wehel provide?",
    answer:
      "Wehel provides comprehensive medical tourism services, including hospital and doctor selection, travel arrangements, accommodation booking, visa assistance, and continuous support throughout your medical journey.",
  },
  {
    question: "How do I become a partner?",
    answer:
      "You can become a partner by selecting your category (Hospital, Insurance, Doctor, Government, or Travel Agency) from our 'Join Us' menu and completing the partnership application form. Our team will review your application and contact you.",
  },
  {
    question: "Is my medical information secure?",
    answer:
      "Yes, we take data security very seriously. All medical information is handled with strict confidentiality and complies with international healthcare data protection standards.",
  },
  {
    question: "What countries do you operate in?",
    answer:
      "We operate globally with a strong presence in major medical tourism destinations. Our network includes partners in the UAE, Turkey, Singapore, Thailand, and many other countries.",
  },
  {
    question: "How long does the partnership process take?",
    answer:
      "The partnership process typically takes 2-4 weeks, including application review, verification, and onboarding. We ensure a thorough but efficient process to maintain high-quality standards.",
  },
];

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function FAQ() {
  return (
    <section className='py-20 relative overflow-hidden bg-[#0284c7]'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(60deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-60deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20'></div>

      <div className='container px-6 mx-auto relative'>
        <div className='max-w-3xl mx-auto'>
          <div className='text-center mb-16'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='inline-flex items-center px-4 py-2 rounded-full bg-[#026da7] backdrop-blur-sm border-2 border-[#4ade80]/40 mb-8 shadow-lg'>
              <span className='text-sm font-bold text-[#4ade80]'>FAQ</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className='text-2xl md:text-3xl font-bold text-white mb-6'>
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='text-lg text-white'>
              Find answers to common questions about our services and
              partnerships.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='bg-[#026da7] backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 md:p-8 shadow-lg'>
            <Accordion type='single' collapsible className='space-y-4'>
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                  <AccordionItem
                    value={`item-${index}`}
                    className='border-white/20 data-[state=open]:border-[#4ade80]/40'>
                    <AccordionTrigger className='text-white hover:text-[#4ade80] text-left font-medium'>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className='text-white'>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
