"use client";

import { Hero } from "@/components/contact/hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { FAQ } from "@/components/contact/faq";

export default function ContactPage() {
  return (
    <main className='bg-[#0284C7]'>
      <Hero />
      <ContactInfo />
      <ContactForm />
      <FAQ />
    </main>
  );
}
