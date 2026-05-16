"use client";

import { TestimonialSlider } from "@/components/TestimonialSlider";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionReveal } from "@/components/SectionReveal";
// import { testimonials } from "@/constants/siteData";

export function TestimonialsSection() {
  return (
    <SectionReveal id="testimonials" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <SectionHeading eyebrow="Testimonials" title="Proof that the final experience feels premium, clear, and memorable." description="The work is designed to build trust quickly: strong presentation, thoughtful motion, and careful product execution." />

        <div className="mt-12">
          <TestimonialSlider items={testimonials} />
        </div>
      </div>
    </SectionReveal>
  );
}

export default TestimonialsSection;
