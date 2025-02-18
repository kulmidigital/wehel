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

export function FAQ() {
  return (
    <section className='py-20 relative overflow-hidden'>
      <div className='container px-6 mx-auto'>
        <div className='max-w-3xl mx-auto'>
          <div className='text-center mb-16'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8'>
              <span className='text-sm text-[#FFD60A]'>FAQ</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className='text-2xl md:text-3xl font-medium text-white mb-6'>
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='text-lg text-white/60'>
              Find answers to common questions about our services and
              partnerships.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8'>
            <Accordion type='single' collapsible className='space-y-4'>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className='border-white/10'>
                  <AccordionTrigger className='text-white hover:text-[#FFD60A] text-left'>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className='text-white/60'>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
