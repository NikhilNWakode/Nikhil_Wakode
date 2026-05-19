"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories, type SkillCategory } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/animated-text";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-white/70">{name}</span>
        <span className="text-xs text-white/30 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500/70 to-blue-400/50"
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>(skillCategories[0].name);
  const active = skillCategories.find((c) => c.name === activeCategory)!;

  return (
    <section id="skills" className="relative py-32 md:py-40">
      <div className="absolute inset-0 radial-gradient opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Skills"
          title="Technical Ecosystem"
          description="Technologies I use to build production-grade AI systems and modern applications."
        />

        <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
          <Reveal>
            <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {skillCategories.map((category) => {
                const Icon = category.icon;
                const isActive = category.name === activeCategory;
                return (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`relative flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-white/[0.06] text-white"
                        : "text-white/40 hover:bg-white/[0.03] hover:text-white/60"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSkillTab"
                        className="absolute inset-0 rounded-xl border border-white/[0.08] bg-white/[0.04]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <Icon className="relative h-4 w-4" />
                    <span className="relative">{category.name}</span>
                    <span className="relative ml-auto text-xs text-white/20 hidden lg:block">
                      {category.skills.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-8">
                    {(() => {
                      const Icon = active.icon;
                      return (
                        <>
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                            <Icon className="h-5 w-5 text-blue-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              {active.name}
                            </h3>
                            <p className="text-xs text-white/30">
                              {active.skills.length} technologies
                            </p>
                          </div>
                        </>
                      );
                    })()}
                  </div>

                  <div className="space-y-5">
                    {active.skills.map((skill, i) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={i * 0.1}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 text-center transition-colors hover:border-blue-500/20"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                    style={{
                      background: "radial-gradient(circle at center, rgba(59,130,246,0.06), transparent 70%)",
                    }}
                  />
                  <Icon className="relative mx-auto h-6 w-6 text-white/30 transition-colors group-hover:text-blue-400/70" />
                  <p className="relative mt-3 text-xs font-medium text-white/50 group-hover:text-white/70">
                    {category.name}
                  </p>
                  <p className="relative mt-1 text-xs text-white/20">
                    {category.skills.length} skills
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
