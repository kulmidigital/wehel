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
  Calendar,
  MapPin,
  Mail,
  Phone,
  Upload,
  Building2,
  Plane,
  HeartPulse,
  Clock,
} from "lucide-react";
import { create } from "zustand";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CountryCombobox } from "@/components/ui/country-combobox";

const formSchema = z.object({
  // Personal Information
  fullName: z.string().min(2, "Full name is required"),
  dateOfBirth: z.string().min(2, "Date of birth is required"),
  gender: z.string().min(2, "Gender is required"),
  nationality: z.string().min(2, "Nationality is required"),
  currentCountry: z.string().min(2, "Current country is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  emergencyContact: z.string().min(2, "Emergency contact is required"),

  // Medical Requirements
  preferredHospital: z.string().optional(),
  treatmentType: z.string().min(2, "Treatment type is required"),
  medicalCondition: z.string().min(2, "Medical condition is required"),
  medicalHistory: z.string().min(2, "Medical history is required"),
  currentMedications: z.string().min(2, "Current medications are required"),

  // Documentation
  passportCopy: z.any().optional(),
  goodConductCertificate: z.any().optional(),
  medicalReports: z.any().optional(),
  insuranceInfo: z.any().optional(),
  visaRequirements: z.any().optional(),

  // Travel Preferences
  preferredDates: z.string().min(2, "Preferred travel dates are required"),
  accommodationRequirements: z
    .string()
    .min(2, "Accommodation requirements are required"),
  specialAssistance: z.string().optional(),
  languageAssistance: z.string().optional(),
});

const steps = [
  {
    id: "personal",
    name: "Personal Info",
    fields: [
      "fullName",
      "dateOfBirth",
      "gender",
      "nationality",
      "currentCountry",
      "email",
      "phone",
      "emergencyContact",
    ],
    icon: User,
  },
  {
    id: "medical",
    name: "Medical Requirements",
    fields: [
      "preferredHospital",
      "treatmentType",
      "medicalCondition",
      "medicalHistory",
      "currentMedications",
    ],
    icon: HeartPulse,
  },
  {
    id: "documents",
    name: "Documentation",
    fields: [
      "passportCopy",
      "goodConductCertificate",
      "medicalReports",
      "insuranceInfo",
      "visaRequirements",
    ],
    icon: Upload,
  },
  {
    id: "travel",
    name: "Travel ",
    fields: [
      "preferredDates",
      "accommodationRequirements",
      "specialAssistance",
      "languageAssistance",
    ],
    icon: Plane,
  },
];

// Step-specific schemas
const stepSchemas = {
  0: z.object({
    fullName: z.string().min(2, "Full name is required"),
    dateOfBirth: z.string().min(2, "Date of birth is required"),
    gender: z.string().min(2, "Gender is required"),
    nationality: z.string().min(2, "Nationality is required"),
    currentCountry: z.string().min(2, "Current country is required"),
    email: z.string().email("Valid email is required"),
    phone: z.string().min(10, "Valid phone number is required"),
    emergencyContact: z.string().min(2, "Emergency contact is required"),
  }),
  1: z.object({
    preferredHospital: z.string().optional(),
    treatmentType: z.string().min(2, "Treatment type is required"),
    medicalCondition: z.string().min(2, "Medical condition is required"),
    medicalHistory: z.string().min(2, "Medical history is required"),
    currentMedications: z.string().min(2, "Current medications are required"),
  }),
  2: z.object({}).optional(),
  3: z.object({
    preferredDates: z.string().min(2, "Preferred travel dates are required"),
    accommodationRequirements: z
      .string()
      .min(2, "Accommodation requirements are required"),
    specialAssistance: z.string().optional(),
    languageAssistance: z.string().optional(),
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

export function RequestInviteForm() {
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
                      placeholder='Your full name'
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
              name='dateOfBirth'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Date of Birth
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='date'
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
              name='gender'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Gender
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className='bg-white/5 border-white/10 text-white text-[11px] md:text-base'>
                        <SelectValue placeholder='Select gender' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='male'>Male</SelectItem>
                      <SelectItem value='female'>Female</SelectItem>
                      <SelectItem value='other'>Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className='text-[10px] md:text-sm' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='nationality'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Nationality
                  </FormLabel>
                  <FormControl>
                    <CountryCombobox
                      value={field.value}
                      onValueChange={field.onChange}
                      placeholder='Select your nationality'
                    />
                  </FormControl>
                  <FormMessage className='text-[10px] md:text-sm' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='currentCountry'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Current Country of Residence
                  </FormLabel>
                  <FormControl>
                    <CountryCombobox
                      value={field.value}
                      onValueChange={field.onChange}
                      placeholder='Select your country of residence'
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
                      placeholder='your@email.com'
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
              name='emergencyContact'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Emergency Contact
                  </FormLabel>
                  <FormDescription className='text-white/60 text-[10px] md:text-sm'>
                    Name and contact number of your emergency contact person
                  </FormDescription>
                  <FormControl>
                    <Input
                      placeholder='Emergency contact details'
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
              name='preferredHospital'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Preferred Hospital (Optional)
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='If you have a specific hospital in mind'
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
              name='treatmentType'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Type of Treatment Needed
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Describe the type of treatment you are seeking'
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
              name='medicalCondition'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Current Medical Condition
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Describe your current medical condition'
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
              name='medicalHistory'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Medical History
                  </FormLabel>
                  <FormDescription className='text-white/60 text-[10px] md:text-sm'>
                    Include any previous surgeries, conditions, or treatments
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      placeholder='Your medical history'
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
              name='currentMedications'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Current Medications
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='List any medications you are currently taking'
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

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className='space-y-6'>
            <div className='bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10'>
              <h3 className='text-base md:text-lg font-medium text-white mb-4'>
                Required Documents
              </h3>
              <ul className='space-y-4 text-white/60 text-[10px] md:text-base'>
                <li className='flex items-start'>
                  <Upload className='w-5 h-5 text-[#FFD60A] mt-1 mr-2' />
                  <div>
                    <p className='text-white'>Passport Copy</p>
                    <p className='text-sm text-white/60'>
                      Clear copy of your valid passport
                    </p>
                  </div>
                </li>
                <li className='flex items-start'>
                  <Upload className='w-5 h-5 text-[#FFD60A] mt-1 mr-2' />
                  <div>
                    <p className='text-white'>Good Conduct Certificate</p>
                    <p className='text-sm text-white/60'>
                      Criminal record clearance from your country
                    </p>
                  </div>
                </li>
                <li className='flex items-start'>
                  <Upload className='w-5 h-5 text-[#FFD60A] mt-1 mr-2' />
                  <div>
                    <p className='text-white'>Medical Reports</p>
                    <p className='text-sm text-white/60'>
                      Recent medical reports and test results
                    </p>
                  </div>
                </li>
                <li className='flex items-start'>
                  <Upload className='w-5 h-5 text-[#FFD60A] mt-1 mr-2' />
                  <div>
                    <p className='text-white'>Insurance Information</p>
                    <p className='text-sm text-white/60'>
                      Health insurance details (if applicable)
                    </p>
                  </div>
                </li>
              </ul>
              <p className='mt-4 text-sm text-white/60 text-[10px] md:text-base'>
                Document upload functionality will be implemented in the next
                phase
              </p>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className='space-y-6'>
            <FormField
              control={form.control}
              name='preferredDates'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Preferred Travel Dates
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='When would you like to travel?'
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
              name='accommodationRequirements'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Accommodation Requirements
                  </FormLabel>
                  <FormDescription className='text-white/60 text-[10px] md:text-sm'>
                    Describe your accommodation preferences and any specific
                    requirements
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      placeholder='e.g., Hospital accommodation, hotel preferences'
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
              name='specialAssistance'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Special Assistance Needs
                  </FormLabel>
                  <FormDescription className='text-white/60 text-[10px] md:text-sm'>
                    Do you require any special assistance?
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      placeholder='e.g., Wheelchair assistance, special dietary requirements'
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
              name='languageAssistance'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white text-[11px] md:text-base'>
                    Language Assistance
                  </FormLabel>
                  <FormDescription className='text-white/60 text-[10px] md:text-sm'>
                    Do you need translation or interpretation services?
                  </FormDescription>
                  <FormControl>
                    <Input
                      placeholder='Specify languages if translation is needed'
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
