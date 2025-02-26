import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { Services } from "@/components/home/services";
import { Connections } from "@/components/home/connections";
import { Advantage } from "@/components/home/advantage";
import { Mission } from "@/components/home/mission";
import { GlobalPresence } from "@/components/home/global_presence";

export default function Home() {
  return (
    <main className='bg-[#0284C7]'>
      <Hero />
      <Features />
      <Services />
      <Connections />
      <Advantage />
      <Mission />
      <GlobalPresence />
    </main>
  );
}
