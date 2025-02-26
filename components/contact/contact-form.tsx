"use client";

import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ArrowRight, Send } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Detect if we're on mobile for responsive design
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <section className='py-20 relative overflow-hidden bg-[#0284c7]'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(60deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-60deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20'></div>

      <div className='container px-6 mx-auto relative'>
        <div className='max-w-3xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='bg-[#026da7] backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 md:p-10 shadow-lg'>
            <div className='text-center mb-10'>
              <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>
                Send Us a Message
              </h2>
              <p className='text-white'>
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-white font-medium'>
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder='John Doe'
                            className='bg-white/10 border-white/20 hover:border-[#4ade80]/40 focus:border-[#4ade80]/70 text-white placeholder:text-white/50'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className='text-[#4ade80]' />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-white font-medium'>
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type='email'
                            placeholder='john@example.com'
                            className='bg-white/10 border-white/20 hover:border-[#4ade80]/40 focus:border-[#4ade80]/70 text-white placeholder:text-white/50'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className='text-[#4ade80]' />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name='subject'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-white font-medium'>
                        Subject
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='How can we help you?'
                          className='bg-white/10 border-white/20 hover:border-[#4ade80]/40 focus:border-[#4ade80]/70 text-white placeholder:text-white/50'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className='text-[#4ade80]' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-white font-medium'>
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder='Your message...'
                          className='bg-white/10 border-white/20 hover:border-[#4ade80]/40 focus:border-[#4ade80]/70 text-white placeholder:text-white/50 min-h-[150px]'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className='text-[#4ade80]' />
                    </FormItem>
                  )}
                />

                {/* Updated button container to be responsive */}
                <div className={`${isMobile ? "w-full" : "text-right"}`}>
                  <Button
                    type='submit'
                    size='lg'
                    className={`${
                      isMobile ? "w-full" : ""
                    } bg-[#4ade80] hover:bg-[#4ade80]/90 text-[#0284c7] font-bold px-8 shadow-lg border-2 border-[#4ade80]/80 hover:scale-105 transition-transform duration-300 relative overflow-hidden group`}>
                    <span className='relative z-10'>Send Message</span>
                    <div className='relative z-10 ml-2 p-1 rounded-full bg-[#0284c7]/20 group-hover:bg-[#0284c7]/30 transition-colors duration-300'>
                      <Send className='h-4 w-4' />
                    </div>
                    {/* Button background animation */}
                    <motion.div
                      className='absolute inset-0 w-full h-full bg-[#22c55e] -z-10'
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
