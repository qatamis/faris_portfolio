'use client';

import React from 'react';

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function AuroraBackground({ children, className = '' }: AuroraBackgroundProps) {
  return (
    <div className={`relative overflow-hidden w-full ${className}`}
         style={{ backgroundColor: '#0a0a0b' }}>

      {/* Aurora layers — subtle, professional */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Base tint — very light */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-purple-950/20 to-indigo-950/30" />

        {/* Wave 1 — blue, soft */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.55,
            background: 'radial-gradient(ellipse 900px 700px at 50% 20%, rgba(59,130,246,0.45) 0%, transparent 60%)',
            animation: 'aurora1 8s ease-in-out infinite alternate',
          }}
        />

        {/* Wave 2 — violet, soft */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.45,
            background: 'radial-gradient(ellipse 700px 500px at 80% 30%, rgba(139,92,246,0.5) 0%, transparent 60%)',
            animation: 'aurora2 6s ease-in-out infinite alternate-reverse',
          }}
        />

        {/* Wave 3 — pink, soft */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.22,
            background: 'radial-gradient(ellipse 800px 600px at 20% 65%, rgba(236,72,153,0.45) 0%, transparent 60%)',
            animation: 'aurora3 10s ease-in-out infinite alternate',
          }}
        />

        {/* Wave 4 — teal accent */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.18,
            background: 'radial-gradient(ellipse 1000px 400px at 60% 85%, rgba(20,184,166,0.35) 0%, transparent 60%)',
            animation: 'aurora4 7s ease-in-out infinite alternate-reverse',
          }}
        />

        {/* Dark overlay to keep cards readable */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
