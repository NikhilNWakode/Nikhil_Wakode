"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  FolderOpen,
  Briefcase,
  Cpu,
  Mail,
  FileText,
  X,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";

type CommandItem = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  action: () => void;
};

const commands: CommandItem[] = [
  { icon: Home, label: "Home", action: () => scrollTo("#home") },
  { icon: FolderOpen, label: "Projects", action: () => scrollTo("#projects") },
  { icon: Briefcase, label: "Experience", action: () => scrollTo("#experience") },
  { icon: Cpu, label: "Skills", action: () => scrollTo("#skills") },
  { icon: Mail, label: "Contact", action: () => scrollTo("#contact") },
  {
    icon: GithubIcon,
    label: "GitHub",
    action: () => window.open("https://github.com/nikhilwakode", "_blank"),
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    action: () => window.open("https://linkedin.com/in/nikhilwakode", "_blank"),
  },
  {
    icon: FileText,
    label: "Resume",
    action: () => window.open("/resume.pdf", "_blank"),
  },
];

function scrollTo(selector: string) {
  document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
}

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-[20%] z-[201] w-[min(90%,480px)] -translate-x-1/2"
          >
            <Command className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a] shadow-2xl shadow-black/40">
              <div className="flex items-center border-b border-white/[0.06] px-4">
                <Command.Input
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent py-4 text-sm text-white outline-none placeholder:text-white/30"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-6 w-6 items-center justify-center rounded-md bg-white/[0.06] text-white/40"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
              <Command.List className="max-h-[300px] overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-white/30">
                  No results found.
                </Command.Empty>
                <Command.Group heading="Navigation" className="px-2 py-1.5 text-xs text-white/20">
                  {commands.map((cmd) => {
                    const Icon = cmd.icon;
                    return (
                      <Command.Item
                        key={cmd.label}
                        onSelect={() => {
                          cmd.action();
                          setOpen(false);
                        }}
                        className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/60 transition-colors data-[selected=true]:bg-white/[0.06] data-[selected=true]:text-white"
                      >
                        <Icon className="h-4 w-4" />
                        {cmd.label}
                      </Command.Item>
                    );
                  })}
                </Command.Group>
              </Command.List>
              <div className="border-t border-white/[0.06] px-4 py-2">
                <p className="text-xs text-white/20">
                  <kbd className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[10px]">
                    ↵
                  </kbd>{" "}
                  to select{" "}
                  <kbd className="ml-2 rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[10px]">
                    esc
                  </kbd>{" "}
                  to close
                </p>
              </div>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
