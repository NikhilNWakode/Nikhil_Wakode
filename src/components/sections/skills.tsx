"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { skillCategories } from "@/data/portfolio";

function ConstellationGraph() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const category = skillCategories[activeCategory];
  const centerX = 250;
  const centerY = 180;
  const radius = 120;

  const skillPositions = category.skills.map((skill, i) => {
    const angle =
      (i / category.skills.length) * Math.PI * 2 - Math.PI / 2;
    return {
      ...skill,
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
    };
  });

  return (
    <div ref={ref} className="relative">
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {skillCategories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.name}
              onClick={() => {
                setActiveCategory(i);
                setActiveSkill(null);
              }}
              className={`relative flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300 ${
                i === activeCategory
                  ? "bg-white/[0.08] text-white"
                  : "text-white/30 hover:text-white/50"
              }`}
            >
              {i === activeCategory && (
                <motion.div
                  layoutId="activeConstellation"
                  className="absolute inset-0 rounded-full border border-white/[0.1] bg-white/[0.04]"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <Icon className="relative h-3.5 w-3.5" />
              <span className="relative">{cat.name}</span>
            </button>
          );
        })}
      </div>

      <div className="relative mx-auto max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            <svg viewBox="0 0 500 360" className="w-full h-auto">
              {inView &&
                skillPositions.map((skill, i) => (
                  <motion.line
                    key={`line-${i}`}
                    x1={centerX}
                    y1={centerY}
                    x2={skill.x}
                    y2={skill.y}
                    stroke={
                      activeSkill === skill.name
                        ? "rgba(59,130,246,0.2)"
                        : "rgba(255,255,255,0.04)"
                    }
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="transition-colors duration-300"
                  />
                ))}

              {inView &&
                skillPositions.map((skill, i) => {
                  const nextSkill =
                    skillPositions[(i + 1) % skillPositions.length];
                  return (
                    <motion.line
                      key={`edge-${i}`}
                      x1={skill.x}
                      y1={skill.y}
                      x2={nextSkill.x}
                      y2={nextSkill.y}
                      stroke="rgba(255,255,255,0.03)"
                      strokeWidth="0.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.4 + i * 0.08, duration: 0.3 }}
                    />
                  );
                })}

              {inView && (
                <motion.g>
                  <circle
                    cx={centerX}
                    cy={centerY}
                    r="20"
                    fill="rgba(59,130,246,0.06)"
                    stroke="rgba(59,130,246,0.15)"
                    strokeWidth="1"
                  />
                  <circle
                    cx={centerX}
                    cy={centerY}
                    r="3"
                    fill="rgba(59,130,246,0.5)"
                  />
                  <text
                    x={centerX}
                    y={centerY + 32}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.3)"
                    fontSize="9"
                    fontFamily="var(--font-geist-mono)"
                  >
                    {category.name}
                  </text>
                </motion.g>
              )}

              {inView &&
                skillPositions.map((skill, i) => {
                  const size = 5 + (skill.level / 100) * 5;
                  const isActive = activeSkill === skill.name;
                  return (
                    <motion.g
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.15 + i * 0.08,
                        duration: 0.4,
                        type: "spring",
                        stiffness: 200,
                      }}
                      onClick={() =>
                        setActiveSkill(
                          activeSkill === skill.name ? null : skill.name
                        )
                      }
                      className="cursor-pointer"
                    >
                      {isActive && (
                        <motion.circle
                          cx={skill.x}
                          cy={skill.y}
                          r={size + 6}
                          fill="none"
                          stroke="rgba(59,130,246,0.15)"
                          strokeWidth="1"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                      <circle
                        cx={skill.x}
                        cy={skill.y}
                        r={size}
                        fill={
                          isActive
                            ? "rgba(59,130,246,0.25)"
                            : "rgba(255,255,255,0.04)"
                        }
                        stroke={
                          isActive
                            ? "rgba(59,130,246,0.5)"
                            : "rgba(255,255,255,0.08)"
                        }
                        strokeWidth="1"
                        className="transition-all duration-300"
                      />
                      <circle
                        cx={skill.x}
                        cy={skill.y}
                        r={1.5}
                        fill={
                          isActive ? "#60a5fa" : "rgba(255,255,255,0.2)"
                        }
                      />
                      <text
                        x={skill.x}
                        y={skill.y + size + 12}
                        textAnchor="middle"
                        fill={
                          isActive
                            ? "rgba(255,255,255,0.7)"
                            : "rgba(255,255,255,0.25)"
                        }
                        fontSize="8"
                        fontFamily="var(--font-geist-mono)"
                      >
                        {skill.name}
                      </text>
                    </motion.g>
                  );
                })}
            </svg>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {activeSkill && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-xl border border-white/[0.08] bg-[#0a0a0a]/95 backdrop-blur-xl px-4 py-2.5"
            >
              <p className="text-sm font-medium text-white">{activeSkill}</p>
              <div className="mt-1.5 flex items-center gap-2.5">
                <div className="h-1 w-20 rounded-full bg-white/[0.06] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${category.skills.find((s) => s.name === activeSkill)?.level || 0}%`,
                    }}
                    className="h-full rounded-full bg-blue-500/60"
                  />
                </div>
                <span className="font-mono text-[10px] text-white/30">
                  {
                    category.skills.find((s) => s.name === activeSkill)
                      ?.level
                  }
                  %
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative flex min-h-screen items-center py-24 md:py-32"
    >
      <div className="relative mx-auto max-w-5xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-white/20">
            Skills
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Tech I{" "}
            <span className="text-gradient-blue">Work With</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/30">
            Click on a node to see details. Switch categories above.
          </p>
        </motion.div>

        <ConstellationGraph />
      </div>
    </section>
  );
}
