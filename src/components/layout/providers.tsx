"use client";

import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { NoiseOverlay } from "@/components/effects/noise-overlay";
import { GridBackground } from "@/components/effects/grid-background";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { CursorGlow } from "@/components/effects/cursor-glow";
import { CommandMenu } from "@/components/shared/command-menu";
import { LoadingScreen } from "@/components/shared/loading-screen";

export function Providers({ children }: { children: React.ReactNode }) {
  useSmoothScroll();

  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <ScrollProgress />
      <GridBackground />
      <NoiseOverlay />
      <CommandMenu />
      {children}
    </>
  );
}
