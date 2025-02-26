"use client";

import { Hero } from "@/components/about/hero";
import { Mission } from "@/components/about/mission";
import { Values } from "@/components/about/values";
import { Advantages } from "@/components/about/advantages";
import { CTA } from "@/components/about/cta";

export default function AboutPage() {
  return (
    <main className='bg-[#0284c7]'>
      <Hero />
      <Mission />
      <Values />
      <Advantages />
      <CTA />
    </main>
  );
}
