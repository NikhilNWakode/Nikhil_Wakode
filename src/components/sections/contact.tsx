"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";
import { socialLinks } from "@/data/portfolio";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { Reveal } from "@/components/shared/animated-text";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[70vh] items-center py-24 md:py-32"
    >
      <div className="relative mx-auto max-w-3xl px-6 text-center w-full">
        <Reveal>
          <span className="mb-6 inline-block font-mono text-xs uppercase tracking-[0.3em] text-white/15">
            Contact
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1]">
            Let&apos;s connect.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-md text-sm text-white/30">
            I&apos;m looking for full-time opportunities and interesting
            collaborations. Feel free to reach out.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              href={`mailto:${socialLinks.email}`}
              className="bg-white text-black hover:bg-white/90"
            >
              <Mail className="h-4 w-4" />
              Send Email
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              href={socialLinks.linkedin}
              target="_blank"
              className="border border-white/[0.08] bg-white/[0.03] text-white/70 hover:bg-white/[0.06]"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </MagneticButton>
            <MagneticButton
              href={socialLinks.github}
              target="_blank"
              className="border border-white/[0.08] bg-white/[0.03] text-white/70 hover:bg-white/[0.06]"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-14 flex items-center justify-center gap-2">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs text-emerald-400/50">
              Open to opportunities
            </span>
          </div>
          <p className="mt-3 font-mono text-xs text-white/15">
            {socialLinks.email}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
