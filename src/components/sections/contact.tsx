"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";
import { socialLinks } from "@/data/portfolio";
import { AnimatedText, Reveal } from "@/components/shared/animated-text";
import { MagneticButton } from "@/components/shared/magnetic-button";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-40">
      <div className="absolute inset-0 radial-gradient" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/50">
            Get in Touch
          </span>
        </Reveal>

        <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <AnimatedText text="Let's Build Something" delay={0.1} />
          <br />
          <span className="text-gradient-blue">
            <AnimatedText text="Exceptional." delay={0.4} />
          </span>
        </h2>

        <Reveal delay={0.5}>
          <p className="mx-auto mt-6 max-w-lg text-base text-white/40 md:text-lg">
            I&apos;m always interested in hearing about new opportunities, challenging
            projects, and collaborations in AI and full-stack development.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
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
              className="border border-white/[0.12] bg-white/[0.03] text-white hover:bg-white/[0.08]"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </MagneticButton>
            <MagneticButton
              href={socialLinks.github}
              target="_blank"
              className="border border-white/[0.12] bg-white/[0.03] text-white hover:bg-white/[0.08]"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.7}>
          <motion.div
            className="mx-auto mt-16 max-w-md overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]"
            whileHover={{ borderColor: "rgba(255,255,255,0.12)" }}
          >
            <div className="p-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.05] text-lg font-bold text-white">
                  NW
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">Nikhil Wakode</h3>
              <p className="mt-1 text-sm text-white/40">
                AI + Full Stack Engineer
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-xs text-emerald-400/70">
                  Available for opportunities
                </span>
              </div>
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <p className="text-xs text-white/30 font-mono break-all">
                  {socialLinks.email}
                </p>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
