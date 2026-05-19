"use client";

import { AnimatedText, Reveal } from "./animated-text";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-24",
        align === "center" && "text-center",
        className
      )}
    >
      <Reveal>
        <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/50">
          {label}
        </span>
      </Reveal>
      <h2
        className={cn(
          "mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl",
          align === "center" && "mx-auto max-w-3xl"
        )}
      >
        <AnimatedText text={title} delay={0.1} />
      </h2>
      {description && (
        <Reveal delay={0.3}>
          <p
            className={cn(
              "mt-6 text-base text-white/40 md:text-lg",
              align === "center" && "mx-auto max-w-2xl"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
