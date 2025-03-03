"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReactNode } from "react";

// Partner links data
const partnerLinks = [
  {
    title: "Hospitals",
    href: "/join-us/hospital",
    description: "Partner with us as a healthcare facility",
    icon: "🏥",
    color: "from-blue-400/20 to-blue-600/20",
    hoverColor: "group-hover:text-blue-400",
  },
  {
    title: "Insurance Companies",
    href: "/join-us/insurance",
    description: "Join our network as an insurance provider",
    icon: "🛡️",
    color: "from-purple-400/20 to-purple-600/20",
    hoverColor: "group-hover:text-purple-400",
  },
  {
    title: "Doctors",
    href: "/join-us/doctors",
    description: "Become part of our medical network",
    icon: "👨‍⚕️",
    color: "from-green-400/20 to-green-600/20",
    hoverColor: "group-hover:text-green-400",
  },
  {
    title: "Travel Agencies",
    href: "/join-us/travel-agency",
    description: "Partner in medical tourism services",
    icon: "✈️",
    color: "from-cyan-400/20 to-cyan-600/20",
    hoverColor: "group-hover:text-cyan-400",
  },
  {
    title: "Government",
    href: "/join-us/government",
    description: "Establish healthcare partnerships",
    icon: "🏛️",
    color: "from-amber-400/20 to-amber-600/20",
    hoverColor: "group-hover:text-amber-400",
  },
  {
    title: "Patients",
    href: "/request-invite",
    description: "Start your healthcare journey",
    icon: "🧑‍🤝‍🧑",
    color: "from-[#FFD60A]/20 to-[#FF8A0A]/20",
    hoverColor: "group-hover:text-[#FFD60A]",
  },
];

interface PartnerDialogProps {
  trigger: ReactNode;
}

export function PartnerDialog({ trigger }: PartnerDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='bg-[#0A1A2F] border-white/10 w-[95vw] max-w-4xl p-0 shadow-xl shadow-black/50 overflow-hidden'>
        {/* Background pattern */}
        <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none' />

        {/* Decorative orb */}
        <div className='absolute -bottom-20 -right-20 w-64 h-64 bg-[#FFD60A] rounded-full blur-[120px] opacity-10 pointer-events-none' />

        <div className='relative'>
          <div className='p-4 sm:p-5 md:p-6'>
            <DialogHeader className='relative pb-2 sm:pb-3 text-center md:text-left border-b border-white/10'>
              <div className='flex items-center justify-between'>
                <div className='flex flex-col'>
                  <span className='text-[#FFD60A] text-xs font-medium tracking-wider uppercase mb-0.5 block'>
                    Join Our Network
                  </span>
                  <DialogTitle className='text-lg sm:text-xl md:text-2xl text-white'>
                    Choose Your Path
                  </DialogTitle>
                </div>
                <DialogTrigger asChild>
                  <button className='p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors'>
                    <X className='w-4 h-4' />
                  </button>
                </DialogTrigger>
              </div>
            </DialogHeader>

            <div className='mt-3 sm:mt-4'>
              <ScrollArea className='h-[60vh] sm:h-[50vh] pr-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 pb-2'>
                  {partnerLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className='group flex flex-col p-4 sm:p-5 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:bg-white/10 border border-white/10 transition-all duration-200 hover:border-white/20 hover:shadow-lg hover:shadow-black/30 relative overflow-hidden h-full'>
                      {/* Gradient background on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />

                      <div className='relative z-10 flex-1'>
                        <div className='flex items-start'>
                          <div className='flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-xl sm:text-2xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300'>
                            {link.icon}
                          </div>
                          <div>
                            <h3
                              className={`text-base sm:text-lg font-medium text-white mb-1 sm:mb-2 ${link.hoverColor} transition-colors`}>
                              {link.title}
                            </h3>
                            <p className='text-xs sm:text-sm text-white/60 group-hover:text-white/80 transition-colors'>
                              {link.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className='mt-4 pt-3 border-t border-white/10 flex justify-between items-center'>
                        <span className='text-xs text-white/40 group-hover:text-white/60 transition-colors'>
                          Learn more
                        </span>
                        <motion.div
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          className='w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#FFD60A]/20 transition-colors'>
                          <ArrowRight className='h-3 w-3 text-white/60 group-hover:text-[#FFD60A] transition-colors' />
                        </motion.div>
                      </div>
                    </Link>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>

          {/* Footer section - without sign in */}
          <div className='p-4 bg-black/20 border-t border-white/5 flex justify-center sm:justify-end'>
            <Link
              href='/about'
              className='text-xs sm:text-sm text-white/60 hover:text-white transition-colors inline-flex items-center'>
              Learn more about our partnership programs
              <ArrowRight className='ml-2 h-3 w-3' />
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
