"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { twMerge } from "tailwind-merge";

import { IconArrowRight } from "@components/icons";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={twMerge(
      "bg-[#5E5E75E3] lg:bg-[#F5F5F5] px-4 lg:px-8 lg:py-4 rounded-lg",
      className,
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={twMerge(
        "flex flex-1 text-left items-center justify-between py-4 font-medium transition-all [&[data-state=open]>span]:rotate-180 text-sm text-[#FBFBFB] lg:text-[#292C31] lg:text-[1.25rem]",
        className,
      )}
      {...props}
    >
      {children}
      <span>
        <IconArrowRight className="h-3 w-3 rotate-90 fill-white lg:fill-[#292C31]" />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={twMerge(
      "overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-sm text-[#FAFAFA] font-normal lg:text-[#737C87]",
      className,
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
