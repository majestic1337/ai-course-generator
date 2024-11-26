import { BorderBeam } from "@/components/ui/border-beam";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import React from "react";

export const AICourseText = () => {
  return (
    <section className="py-24 sm:py-32 border rounded">
      <VelocityScroll
        text="Легке створення курсів за допомогою штучного інтелекту - перетворіть ідеї на навчальний досвід - AI Course Generator"
        default_velocity={1}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm md:text-7xl md:leading-[5rem] dark:text-white"
      />
    </section>
  );
};