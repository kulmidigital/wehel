"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { countries } from "countries-list";

interface CountryComboboxProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
}

export function CountryCombobox({
  value,
  onValueChange,
  placeholder = "Select country...",
}: CountryComboboxProps) {
  // Convert countries object to array and sort alphabetically
  const countriesList = React.useMemo(() => {
    return Object.entries(countries)
      .map(([code, country]) => ({
        value: country.name.toLowerCase(),
        label: country.name,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className='w-full bg-white/5 border-white/10 text-white'>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className='bg-[#0A1A2F] border-white/10'>
        <ScrollArea className='h-72'>
          {countriesList.map((country) => (
            <SelectItem
              key={country.value}
              value={country.value}
              className='text-white focus:bg-white/10 focus:text-white'>
              {country.label}
            </SelectItem>
          ))}
        </ScrollArea>
      </SelectContent>
    </Select>
  );
}
