"use client";

export function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <div className="absolute inset-0 grid-pattern opacity-100" />
      <div className="absolute inset-0 radial-gradient" />
    </div>
  );
}
