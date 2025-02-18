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
  Building,
  MapPin,
  Mail,
  Phone,
  Upload,
  Briefcase,
  Users,
} from "lucide-react";
import { create } from "zustand";

const formSchema = z.object({
  // Institution Information
  institutionName: z.string().min(2, "Institution name is required"),
  department: z.string().min(2, "Department name is required"),
  jurisdiction: z.string().min(2, "Jurisdiction is required"),
  type: z.string().min(2, "Institution type is required"),

  // Contact Information
  contactName: z.string().min(2, "Contact name is required"),
  contactTitle: z.string().min(2, "Contact title is required"),
  contactEmail: z.string().email("Valid email is required"),
  contactPhone: z.string().min(10, "Valid phone number is required"),

  // Partnership Details
  objectives: z.string().min(2, "Partnership objectives are required"),
  scope: z.string().min(2, "Partnership scope is required"),
  resources: z.string().min(2, "Available resources are required"),

  // Documents
  authorizationLetter: z.any().optional(),
  regulatoryDocs: z.any().optional(),
});

const steps = [
  {
    id: "institution",
    name: "Institution Details",
    fields: ["institutionName", "department", "jurisdiction", "type"],
    icon: Building,
  },
  {
    id: "contact",
    name: "Contact Information",
    fields: ["contactName", "contactTitle", "contactEmail", "contactPhone"],
    icon: Users,
  },
  {
    id: "partnership",
    name: "Partnership Details",
    fields: ["objectives", "scope", "resources"],
    icon: Briefcase,
  },
  {
    id: "documents",
    name: "Documentation",
    fields: ["authorizationLetter", "regulatoryDocs"],
    icon: Upload,
  },
];

// Step-specific schemas
const stepSchemas = {
  0: z.object({
    institutionName: z.string().min(2, "Institution name is required"),
    department: z.string().min(2, "Department name is required"),
    jurisdiction: z.string().min(2, "Jurisdiction is required"),
    type: z.string().min(2, "Institution type is required"),
  }),
  1: z.object({
    contactName: z.string().min(2, "Contact name is required"),
    contactTitle: z.string().min(2, "Contact title is required"),
    contactEmail: z.string().email("Valid email is required"),
    contactPhone: z.string().min(10, "Valid phone number is required"),
  }),
  2: z.object({
    objectives: z.string().min(2, "Partnership objectives are required"),
    scope: z.string().min(2, "Partnership scope is required"),
    resources: z.string().min(2, "Available resources are required"),
  }),
  3: z.object({}).optional(),
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

export function GovernmentForm() {
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
              name='institutionName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white'>Institution Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Government Institution Name'
                      className='bg-white/5 border-white/10 text-white'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='department'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white'>Department</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='e.g., Ministry of Health'
                      className='bg-white/5 border-white/10 text-white'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='jurisdiction'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white'>Jurisdiction</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='e.g., National, State/Province'
                      className='bg-white/5 border-white/10 text-white'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='type'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white'>Institution Type</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='e.g., Federal Agency, State Department'
                      className='bg-white/5 border-white/10 text-white'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
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
                  <FormLabel className='text-white'>
                    Contact Person Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Full name'
                      className='bg-white/5 border-white/10 text-white'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='contactTitle'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white'>Official Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='e.g., Director of Healthcare Services'
                      className='bg-white/5 border-white/10 text-white'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='contactEmail'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white'>Official Email</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='official@government.org'
                      className='bg-white/5 border-white/10 text-white'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='contactPhone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white'>Contact Number</FormLabel>
                  <FormControl>
                    <Input
                      type='tel'
                      placeholder='+1234567890'
                      className='bg-white/5 border-white/10 text-white'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
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
              name='objectives'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white'>
                    Partnership Objectives
                  </FormLabel>
                  <FormDescription className='text-white/60'>
                    Describe your goals for this healthcare partnership
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      placeholder='e.g., Improve healthcare access, Enhance medical tourism'
                      className='bg-white/5 border-white/10 text-white min-h-[100px]'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='scope'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white'>
                    Partnership Scope
                  </FormLabel>
                  <FormDescription className='text-white/60'>
                    Define the scope and scale of the proposed collaboration
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      placeholder='e.g., Geographic coverage, target population'
                      className='bg-white/5 border-white/10 text-white min-h-[100px]'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='resources'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white'>
                    Available Resources
                  </FormLabel>
                  <FormDescription className='text-white/60'>
                    Outline resources that can be committed to this partnership
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      placeholder='e.g., Budget allocation, infrastructure support'
                      className='bg-white/5 border-white/10 text-white min-h-[100px]'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className='space-y-6'>
            <div className='bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10'>
              <h3 className='text-lg font-medium text-white mb-4'>
                Required Documents
              </h3>
              <ul className='space-y-4 text-white/60'>
                <li className='flex items-start'>
                  <Upload className='w-5 h-5 text-[#FFD60A] mt-1 mr-2' />
                  <div>
                    <p className='text-white'>Authorization Letter</p>
                    <p className='text-sm'>
                      Official letter authorizing partnership exploration
                    </p>
                  </div>
                </li>
                <li className='flex items-start'>
                  <Upload className='w-5 h-5 text-[#FFD60A] mt-1 mr-2' />
                  <div>
                    <p className='text-white'>Regulatory Documentation</p>
                    <p className='text-sm'>
                      Relevant regulatory frameworks and compliance documents
                    </p>
                  </div>
                </li>
              </ul>
              <p className='mt-4 text-sm text-white/60'>
                Document upload functionality will be implemented in the next
                phase
              </p>
            </div>
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
                    className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap ${
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
                className='bg-white/5 text-white border-white/10 hover:bg-white/10 hover:text-white'
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
