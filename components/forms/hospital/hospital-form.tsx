"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Building2, MapPin, Mail, Phone, Upload } from "lucide-react";
import { create } from "zustand";

const formSchema = z.object({
  // Hospital Information
  hospitalName: z.string().min(2, "Hospital name is required"),
  location: z.string().min(2, "Location is required"),
  accreditations: z.string().min(2, "Accreditations are required"),
  specializations: z.string().min(2, "Specializations are required"),

  // Contact Person
  contactName: z.string().optional(),
  contactEmail: z.string().optional(),
  contactPhone: z.string().optional(),
  contactPosition: z.string().optional(),

  // Facility Details
  bedCount: z.string().optional(),
  facilities: z.string().optional(),
  internationalServices: z.string().optional(),
});

// Step-specific schemas
const stepSchemas = {
  0: z.object({
    hospitalName: z.string().min(2, "Hospital name is required"),
    location: z.string().min(2, "Location is required"),
    accreditations: z.string().min(2, "Accreditations are required"),
    specializations: z.string().min(2, "Specializations are required"),
  }),
  1: z.object({
    contactName: z.string().min(2, "Contact name is required"),
    contactEmail: z.string().email("Valid email is required"),
    contactPhone: z.string().min(10, "Valid phone number is required"),
    contactPosition: z.string().min(2, "Position is required"),
  }),
  2: z.object({
    bedCount: z.string().min(1, "Number of beds is required"),
    facilities: z.string().min(2, "Facilities are required"),
    internationalServices: z
      .string()
      .min(2, "International services are required"),
  }),
};

type FormValues = z.infer<typeof formSchema>;

const steps = [
  {
    id: "hospital",
    name: "Hospital Info",
    fields: ["hospitalName", "location", "accreditations", "specializations"],
    icon: Building2,
  },
  {
    id: "contact",
    name: "Contact Person",
    fields: ["contactName", "contactEmail", "contactPhone", "contactPosition"],
    icon: Phone,
  },
  {
    id: "facility",
    name: "Facility Details",
    fields: ["bedCount", "facilities", "internationalServices"],
    icon: MapPin,
  },
];

interface FormState {
  formData: Partial<FormValues>;
  setFormData: (step: number, data: Partial<FormValues>) => void;
  getStepData: (step: number) => Partial<FormValues>;
  clearStepData: (step: number) => void;
}

const useFormStore = create<FormState>((set, get) => ({
  formData: {},
  setFormData: (step, data) => {
    set((state) => ({
      formData: { ...state.formData, ...data },
    }));
  },
  getStepData: (step) => {
    const state = get();
    const stepFields = steps[step].fields;
    return Object.fromEntries(
      stepFields.map((field) => [
        field,
        state.formData[field as keyof FormValues] || "",
      ])
    );
  },
  clearStepData: (step) => {
    const state = get();
    const stepFields = steps[step].fields;
    const newFormData = { ...state.formData };
    stepFields.forEach(
      (field) => delete newFormData[field as keyof FormValues]
    );
    set({ formData: newFormData });
  },
}));

export function HospitalForm() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const { formData, setFormData, getStepData } = useFormStore();

  const form = useForm<FormValues>({
    defaultValues: getStepData(currentStep) as FormValues,
  });

  // Update form values when step changes
  React.useEffect(() => {
    const stepData = getStepData(currentStep);
    Object.entries(stepData).forEach(([field, value]) => {
      form.setValue(field as keyof FormValues, value);
    });
  }, [currentStep]);

  const validateCurrentStep = async () => {
    const currentSchema = stepSchemas[currentStep as keyof typeof stepSchemas];
    const stepFields = steps[currentStep].fields;
    const stepData = Object.fromEntries(
      stepFields.map((field) => [
        field,
        form.getValues()[field as keyof FormValues],
      ])
    );

    try {
      await currentSchema.parseAsync(stepData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          if (err.path[0]) {
            form.setError(err.path[0] as keyof FormValues, {
              type: "manual",
              message: err.message,
            });
          }
        });
      }
      return false;
    }
  };

  const handleNext = async () => {
    const isValid = await validateCurrentStep();
    if (isValid) {
      const stepData = form.getValues();
      setFormData(currentStep, stepData);
      setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1));
    }
  };

  const handlePrevious = () => {
    const stepData = form.getValues();
    setFormData(currentStep, stepData);
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  const handleStepClick = async (stepIndex: number) => {
    if (stepIndex < currentStep) {
      const stepData = form.getValues();
      setFormData(currentStep, stepData);
      setCurrentStep(stepIndex);
    } else if (stepIndex > currentStep) {
      const isValid = await validateCurrentStep();
      if (isValid) {
        const stepData = form.getValues();
        setFormData(currentStep, stepData);
        setCurrentStep(stepIndex);
      }
    }
  };

  const onSubmit = async (data: FormValues) => {
    if (currentStep === steps.length - 1) {
      const finalData = {
        ...formData,
        ...data,
      };
      console.log("Form submitted:", finalData);
      // Handle form submission
    } else {
      await handleNext();
    }
  };

  const renderFormStep = (step: number) => {
    switch (step) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className='space-y-6'>
            <FormField
              control={form.control}
              name='hospitalName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Hospital Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Enter hospital name'
                      className='bg-white/5 border-white/10 text-white text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base placeholder:text-white/50'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-[10px] md:text-sm' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='location'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Location
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='City, Country'
                      className='bg-white/5 border-white/10 text-white text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base placeholder:text-white/50'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-[10px] md:text-sm' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='accreditations'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Accreditations
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='List your hospital accreditations'
                      className='bg-white/5 border-white/10 text-white min-h-[100px] text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base placeholder:text-white/50'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-[10px] md:text-sm' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='specializations'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Specializations
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='List your medical specializations'
                      className='bg-white/5 border-white/10 text-white min-h-[100px] text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base placeholder:text-white/50'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-[10px] md:text-sm' />
                </FormItem>
              )}
            />
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className='space-y-6'>
            <FormField
              control={form.control}
              name='contactName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Contact Person Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Full name'
                      className='bg-white/5 border-white/10 text-white text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base placeholder:text-white/50'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-[10px] md:text-sm' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='contactEmail'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='email@hospital.com'
                      className='bg-white/5 border-white/10 text-white text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base placeholder:text-white/50'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-[10px] md:text-sm' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='contactPhone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='tel'
                      placeholder='+1234567890'
                      className='bg-white/5 border-white/10 text-white text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base placeholder:text-white/50'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-[10px] md:text-sm' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='contactPosition'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Position
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Job title'
                      className='bg-white/5 border-white/10 text-white text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base placeholder:text-white/50'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-[10px] md:text-sm' />
                </FormItem>
              )}
            />
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className='space-y-6'>
            <FormField
              control={form.control}
              name='bedCount'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Number of Beds
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='number'
                      placeholder='Total bed capacity'
                      className='bg-white/5 border-white/10 text-white text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base placeholder:text-white/50'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-[10px] md:text-sm' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='facilities'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Available Facilities
                  </FormLabel>
                  <FormDescription className='text-white/60 text-[10px] md:text-sm'>
                    List major facilities, equipment, and departments
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      placeholder='e.g., Operating Rooms, ICU, Diagnostic Imaging...'
                      className='bg-white/5 border-white/10 text-white min-h-[100px] text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base placeholder:text-white/50'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-[10px] md:text-sm' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='internationalServices'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    International Patient Services
                  </FormLabel>
                  <FormDescription className='text-white/60 text-[10px] md:text-sm'>
                    Describe services specifically for international patients
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      placeholder='e.g., Language Support, Travel Assistance...'
                      className='bg-white/5 border-white/10 text-white min-h-[100px] text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base placeholder:text-white/50'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-[10px] md:text-sm' />
                </FormItem>
              )}
            />
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className='relative'>
      {/* Progress Steps */}
      <div className='mb-12'>
        <div className='flex items-center justify-center'>
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Circle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='relative'>
                <button
                  type='button'
                  onClick={() => handleStepClick(index)}
                  className='focus:outline-none group'>
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                      index <= currentStep
                        ? "border-[#4ade80] bg-[#4ade80]/10"
                        : "border-white/20 bg-white/5"
                    } group-hover:border-[#4ade80]/70`}>
                    <step.icon
                      className={`w-5 h-5 ${
                        index <= currentStep
                          ? "text-[#4ade80]"
                          : "text-white/40"
                      }`}
                    />
                  </div>
                  <div
                    className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] md:text-sm whitespace-nowrap ${
                      index <= currentStep ? "text-white" : "text-white/40"
                    }`}>
                    {step.name}
                  </div>
                </button>
              </motion.div>
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className='w-20 mx-2 h-[2px] bg-white/20'>
                  <div
                    className={`h-full bg-[#4ade80] transition-all duration-300 ${
                      index < currentStep ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className='bg-[#026da7]/90 backdrop-blur-md rounded-xl p-8 border-2 border-white/10 shadow-lg'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <AnimatePresence mode='wait'>
              {renderFormStep(currentStep)}
            </AnimatePresence>

            <div className='flex justify-between pt-6'>
              <Button
                type='button'
                variant='outline'
                className='bg-white/5 text-white border-white/10 hover:bg-white/10 hover:text-white px-3 md:px-4 text-[11px] md:text-base'
                onClick={handlePrevious}
                disabled={currentStep === 0}>
                Previous
              </Button>
              <Button
                type='submit'
                className='bg-[#4ade80] text-[#ffffff] hover:bg-[#4ade80]/90 font-bold shadow-lg border-2 border-[#4ade80]/80 hover:scale-105 transition-transform duration-300 relative overflow-hidden group'>
                <span className='relative z-10'>
                {currentStep === steps.length - 1 ? "Submit" : "Next"}
                </span>
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
  );
}
