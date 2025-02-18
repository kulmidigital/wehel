"use client";

import { Hero } from "@/components/contact/hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { FAQ } from "@/components/contact/faq";

export default function ContactPage() {
  return (
    <main className='bg-[#0A1A2F]'>
      <Hero />
      <ContactInfo />
      <ContactForm />
      <FAQ />
    </main>
  );
}
