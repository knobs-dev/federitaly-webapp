"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { twMerge } from "tailwind-merge";

import { IconCheck } from "@icons";

const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={twMerge(
      "peer h-4 w-4 shrink-0 rounded border-1 border-[#B9B8BB] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#3a49e0] data-[state=checked]:border-0",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={twMerge("flex items-center justify-center text-current")}
    >
      <IconCheck className="h-1.5 w-1.5 fill-white" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
