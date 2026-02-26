"use client";

import { useState } from "react";

type ColorScheme = "blue" | "green" | "amber" | "orange";

const colorSchemes: Record<ColorScheme, {
  name: string;
  description: string;
  primary: string;
  primaryHover: string;
  border: string;
  text: string;
  glow: string;
}> = {
  blue: {
    name: "Electric Blue",
    description: "Deep, confident blue with a tech-forward feel",
    primary: "bg-blue-500",
    primaryHover: "hover:bg-blue-400",
    border: "border-blue-500/30",
    text: "text-blue-400",
    glow: "drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]",
  },
  green: {
    name: "Neon Green",
    description: "Sharp, energetic green with a cutting-edge vibe",
    primary: "bg-emerald-500",
    primaryHover: "hover:bg-emerald-400",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    glow: "drop-shadow-[0_0_12px_rgba(52,211,153,0.5)]",
  },
  amber: {
    name: "Golden Amber",
    description: "Warm, premium gold with authority and sophistication",
    primary: "bg-amber-500",
    primaryHover: "hover:bg-amber-400",
    border: "border-amber-500/30",
    text: "text-amber-400",
    glow: "drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]",
  },
  orange: {
    name: "Burnt Orange",
    description: "Bold, distinctive orange with creative energy",
    primary: "bg-orange-500",
    primaryHover: "hover:bg-orange-400",
    border: "border-orange-500/30",
    text: "text-orange-400",
    glow: "drop-shadow-[0_0_12px_rgba(249,115,22,0.5)]",
  },
};

function NeonHero({ scheme }: { scheme: ColorScheme }) {
  const colors = colorSchemes[scheme];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      {/* Nav */}
      <nav className={`flex justify-between items-center px-8 py-6 border-b ${colors.border}`}>
        <span className="text-xl font-bold tracking-tight">
          <span className={colors.text}>Jamie</span> Oarton
        </span>
        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#" className={`hover:${colors.text} transition`}>Writings</a>
          <a href="#" className={`hover:${colors.text} transition`}>YouTube</a>
          <a href="#" className={`hover:${colors.text} transition`}>Services</a>
          <a href="#" className={`hover:${colors.text} transition`}>About</a>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-4xl text-center">
          <div className={`inline-block mb-6 px-4 py-1.5 rounded-full border ${colors.border} ${colors.text} text-sm`}>
            Fractional CAIO & AI Consultant
          </div>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Building the future with{" "}
            <span className={`${colors.text} ${colors.glow}`}>AI</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            I help companies navigate AI transformation. Writer, YouTuber, and
            fractional Chief AI Officer for forward-thinking organizations.
          </p>
          <div className="flex gap-4 justify-center">
            <button className={`${colors.primary} ${colors.primaryHover} text-black font-semibold px-8 py-3 rounded-lg transition cursor-pointer`}>
              Work With Me
            </button>
            <button className={`border ${colors.border} ${colors.text} hover:bg-white/5 px-8 py-3 rounded-lg transition cursor-pointer`}>
              Read My Writing
            </button>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex items-center justify-center gap-12 text-gray-500">
            <div className="text-center">
              <div className={`text-2xl font-bold ${colors.text}`}>50K+</div>
              <div className="text-xs">Newsletter Subscribers</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${colors.text}`}>100K+</div>
              <div className="text-xs">YouTube Subscribers</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${colors.text}`}>15+</div>
              <div className="text-xs">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function ColorComparison() {
  const [activeScheme, setActiveScheme] = useState<ColorScheme>("blue");

  return (
    <div className="min-h-screen">
      {/* Color Selector - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800 px-4 py-3">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-3">
          <span className="text-gray-400 text-sm mr-2">Choose color:</span>
          {(Object.keys(colorSchemes) as ColorScheme[]).map((scheme) => (
            <button
              key={scheme}
              onClick={() => setActiveScheme(scheme)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${
                activeScheme === scheme
                  ? "bg-white text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {colorSchemes[scheme].name}
            </button>
          ))}
        </div>
        <p className="text-center text-gray-500 text-xs mt-2">
          {colorSchemes[activeScheme].description}
        </p>
      </div>

      {/* Hero Preview - with top padding for fixed header */}
      <div className="pt-24">
        <NeonHero scheme={activeScheme} />
      </div>
    </div>
  );
}
