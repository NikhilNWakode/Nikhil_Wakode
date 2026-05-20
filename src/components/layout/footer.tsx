"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";
import { socialLinks } from "@/data/portfolio";
import { Reveal } from "@/components/shared/animated-text";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-black">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-sm font-bold text-white">
                NW
              </div>
              <div>
                <p className="text-sm font-medium text-white">Nikhil Wakode</p>
                <p className="text-xs text-white/30">AI + Full Stack Engineer</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-white/40 transition-all hover:bg-white/[0.08] hover:text-white"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-white/40 transition-all hover:bg-white/[0.08] hover:text-white"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-white/40 transition-all hover:bg-white/[0.08] hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row">
            <p className="text-xs text-white/20">
              &copy; {new Date().getFullYear()} Nikhil Wakode. Crafted with precision.
            </p>
            <p className="text-xs text-white/20">
              Built with Next.js, TypeScript & Framer Motion
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
