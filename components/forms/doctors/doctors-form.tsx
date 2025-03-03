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
  User,
  MapPin,
  Mail,
  Phone,
  Upload,
  GraduationCap,
  Stethoscope,
} from "lucide-react";
import { create } from "zustand";

const formSchema = z.object({
  // Personal Information
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  location: z.string().min(2, "Location is required"),

  // Professional Information
  specialization: z.string().min(2, "Specialization is required"),
  experience: z.string().min(1, "Years of experience is required"),
  qualifications: z.string().min(2, "Qualifications are required"),
  licenseNumber: z.string().min(2, "License number is required"),

  // Practice Details
  currentPractice: z.string().min(2, "Current practice details are required"),
  languages: z.string().min(2, "Languages spoken are required"),
  availability: z.string().min(2, "Availability details are required"),
});

// Step-specific schemas
const stepSchemas = {
  0: z.object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Valid email is required"),
    phone: z.string().min(10, "Valid phone number is required"),
    location: z.string().min(2, "Location is required"),
  }),
  1: z.object({
    specialization: z.string().min(2, "Specialization is required"),
    experience: z.string().min(1, "Years of experience is required"),
    qualifications: z.string().min(2, "Qualifications are required"),
    licenseNumber: z.string().min(2, "License number is required"),
  }),
  2: z.object({
    currentPractice: z.string().min(2, "Current practice details are required"),
    languages: z.string().min(2, "Languages spoken are required"),
    availability: z.string().min(2, "Availability details are required"),
  }),
};

const steps = [
  {
    id: "personal",
    name: "Personal Info",
    fields: ["fullName", "email", "phone", "location"],
    icon: User,
  },
  {
    id: "professional",
    name: "Professional Details",
    fields: ["specialization", "experience", "qualifications", "licenseNumber"],
    icon: GraduationCap,
  },
  {
    id: "practice",
    name: "Practice Information",
    fields: ["currentPractice", "languages", "availability"],
    icon: Stethoscope,
  },
];

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

export function DoctorsForm() {
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
              name='fullName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Dr. John Doe'
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
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='doctor@example.com'
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
              name='phone'
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
              name='specialization'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Medical Specialization
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='e.g., Cardiology, Orthopedics'
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
              name='experience'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Years of Experience
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='number'
                      placeholder='Years of medical practice'
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
              name='qualifications'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Qualifications
                  </FormLabel>
                  <FormDescription className='text-white/60 text-[10px] md:text-sm'>
                    List your medical degrees and certifications
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      placeholder='e.g., MD, MBBS, Board Certifications'
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
              name='licenseNumber'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Medical License Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Your medical license/registration number'
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
              name='currentPractice'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Current Practice
                  </FormLabel>
                  <FormDescription className='text-white/60 text-[10px] md:text-sm'>
                    Describe your current practice setting and affiliations
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      placeholder='e.g., Private Practice, Hospital Affiliation'
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
              name='languages'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Languages Spoken
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='e.g., English, Spanish, Arabic'
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
              name='availability'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Availability
                  </FormLabel>
                  <FormDescription className='text-white/60 text-[10px] md:text-sm'>
                    Describe your availability for international consultations
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      placeholder='e.g., Available for virtual consultations, in-person visits'
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
