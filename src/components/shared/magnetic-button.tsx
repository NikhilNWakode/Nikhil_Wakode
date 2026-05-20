"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
}

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  target,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  }

  function handleMouseLeave() {
    setPosition({ x: 0, y: 0 });
  }

  const Component = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <Component
        href={href}
        target={target}
        onClick={onClick}
        className={cn(
          "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300",
          className
        )}
      >
        {children}
      </Component>
    </motion.div>
  );
}
