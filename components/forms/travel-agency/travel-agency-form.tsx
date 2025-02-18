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
import {
  Building2,
  MapPin,
  Mail,
  Phone,
  Upload,
  Plane,
  Globe,
} from "lucide-react";
import { create } from "zustand";

const formSchema = z.object({
  // Agency Information
  agencyName: z.string().min(2, "Agency name is required"),
  website: z.string().min(2, "Website is required"),
  location: z.string().min(2, "Location is required"),
  yearsInBusiness: z.string().min(1, "Years in business is required"),

  // Contact Information
  contactName: z.string().min(2, "Contact name is required"),
  contactPosition: z.string().min(2, "Contact position is required"),
  contactEmail: z.string().email("Valid email is required"),
  contactPhone: z.string().min(10, "Valid phone number is required"),

  // Service Details
  destinations: z.string().min(2, "Destinations are required"),
  services: z.string().min(2, "Services are required"),
  experience: z.string().min(2, "Medical tourism experience is required"),
});

const steps = [
  {
    id: "agency",
    name: "Agency Information",
    fields: ["agencyName", "website", "location", "yearsInBusiness"],
    icon: Building2,
  },
  {
    id: "contact",
    name: "Contact Information",
    fields: ["contactName", "contactPosition", "contactEmail", "contactPhone"],
    icon: Phone,
  },
  {
    id: "services",
    name: "Service Details",
    fields: ["destinations", "services", "experience"],
    icon: Plane,
  },
];

// Step-specific schemas
const stepSchemas = {
  0: z.object({
    agencyName: z.string().min(2, "Agency name is required"),
    website: z.string().min(2, "Website is required"),
    location: z.string().min(2, "Location is required"),
    yearsInBusiness: z.string().min(1, "Years in business is required"),
  }),
  1: z.object({
    contactName: z.string().min(2, "Contact name is required"),
    contactPosition: z.string().min(2, "Contact position is required"),
    contactEmail: z.string().email("Valid email is required"),
    contactPhone: z.string().min(10, "Valid phone number is required"),
  }),
  2: z.object({
    destinations: z.string().min(2, "Destinations are required"),
    services: z.string().min(2, "Services are required"),
    experience: z.string().min(2, "Medical tourism experience is required"),
  }),
};

type FormValues = z.infer<typeof formSchema>;

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

export function TravelAgencyForm() {
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
              name='agencyName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Agency Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Travel Agency Name'
                      className='bg-white/5 border-white/10 text-white text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-[10px] md:text-sm' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='website'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Website
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='www.youragency.com'
                      className='bg-white/5 border-white/10 text-white text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base'
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
                      className='bg-white/5 border-white/10 text-white text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-[10px] md:text-sm' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='yearsInBusiness'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Years in Business
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='number'
                      placeholder='Number of years'
                      className='bg-white/5 border-white/10 text-white text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base'
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
                      className='bg-white/5 border-white/10 text-white text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base'
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
                      placeholder='e.g., Medical Tourism Manager'
                      className='bg-white/5 border-white/10 text-white text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base'
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
                      placeholder='contact@agency.com'
                      className='bg-white/5 border-white/10 text-white text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base'
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
                      className='bg-white/5 border-white/10 text-white text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base'
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
              name='destinations'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Destinations Covered
                  </FormLabel>
                  <FormDescription className='text-white/60 text-[10px] md:text-sm'>
                    List the destinations where you operate or plan to operate
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      placeholder='e.g., Thailand, India, Turkey'
                      className='bg-white/5 border-white/10 text-white min-h-[100px] text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-[10px] md:text-sm' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='services'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Services Offered
                  </FormLabel>
                  <FormDescription className='text-white/60 text-[10px] md:text-sm'>
                    Describe your medical tourism services
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      placeholder='e.g., Travel arrangements, Medical appointments, Translation services'
                      className='bg-white/5 border-white/10 text-white min-h-[100px] text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-[10px] md:text-sm' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='experience'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Medical Tourism Experience
                  </FormLabel>
                  <FormDescription className='text-white/60 text-[10px] md:text-sm'>
                    Describe your experience in medical tourism
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      placeholder='e.g., Past medical tourism projects, number of patients served'
                      className='bg-white/5 border-white/10 text-white min-h-[100px] text-[11px] md:text-base placeholder:text-[11px] md:placeholder:text-base'
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
                        ? "border-[#FFD60A] bg-[#FFD60A]/10"
                        : "border-white/20 bg-white/5"
                    } group-hover:border-[#FFD60A]/70`}>
                    <step.icon
                      className={`w-5 h-5 ${
                        index <= currentStep
                          ? "text-[#FFD60A]"
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
                    className={`h-full bg-[#FFD60A] transition-all duration-300 ${
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
        className='bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10'>
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
                className='bg-[#FFD60A] text-[#0A1A2F] hover:bg-[#FFD60A]/90'>
                {currentStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </div>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}
