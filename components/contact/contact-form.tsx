"use client";

import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ArrowRight } from "lucide-react";

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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <section className='py-20 relative overflow-hidden'>
      <div className='container px-6 mx-auto'>
        <div className='max-w-3xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10'>
            <div className='text-center mb-10'>
              <h2 className='text-2xl md:text-3xl font-medium text-white mb-4'>
                Send Us a Message
              </h2>
              <p className='text-white/60'>
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
                        <FormLabel className='text-white'>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='John Doe'
                            className='bg-white/5 border-white/10 text-white placeholder:text-white/40'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-white'>
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type='email'
                            placeholder='john@example.com'
                            className='bg-white/5 border-white/10 text-white placeholder:text-white/40'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name='subject'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-white'>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='How can we help you?'
                          className='bg-white/5 border-white/10 text-white placeholder:text-white/40'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-white'>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder='Your message...'
                          className='bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[150px]'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className='text-right'>
                  <Button
                    type='submit'
                    size='lg'
                    className='bg-[#FFD60A] hover:bg-[#FFD60A]/90 text-[#0A1A2F] font-medium px-8'>
                    Send Message
                    <ArrowRight className='ml-2 h-4 w-4' />
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
 