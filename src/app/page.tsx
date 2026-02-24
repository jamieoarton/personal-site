"use client";

import { useState } from "react";

type StyleOption = "neon" | "minimal" | "light" | "glass";

const styles: Record<StyleOption, { name: string; description: string }> = {
  neon: {
    name: "Dark + Neon",
    description: "Bold, futuristic AI/tech vibe with vibrant accents",
  },
  minimal: {
    name: "Dark + Minimal",
    description: "Subtle, content-focused with muted colors",
  },
  light: {
    name: "Light + Clean",
    description: "Professional, approachable with white background",
  },
  glass: {
    name: "Dark + Glassmorphism",
    description: "Modern elegance with frosted glass effects",
  },
};

// Style 1: Dark + Neon
function NeonHero() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      {/* Nav */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-cyan-500/20">
        <span className="text-xl font-bold tracking-tight">
          <span className="text-cyan-400">bramforth</span>-ai
        </span>
        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-cyan-400 transition">Writings</a>
          <a href="#" className="hover:text-cyan-400 transition">YouTube</a>
          <a href="#" className="hover:text-cyan-400 transition">Services</a>
          <a href="#" className="hover:text-cyan-400 transition">About</a>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-4xl text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 text-cyan-400 text-sm">
            Fractional CAIO & AI Consultant
          </div>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Building the future with{" "}
            <span className="text-cyan-400 neon-glow">AI</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            I help companies navigate AI transformation. Writer, YouTuber, and
            fractional Chief AI Officer for forward-thinking organizations.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-3 rounded-lg transition cursor-pointer">
              Work With Me
            </button>
            <button className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-lg transition cursor-pointer">
              Read My Writing
            </button>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex items-center justify-center gap-12 text-gray-500">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">50K+</div>
              <div className="text-xs">Newsletter Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">100K+</div>
              <div className="text-xs">YouTube Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">15+</div>
              <div className="text-xs">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Style 2: Dark + Minimal
function MinimalHero() {
  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col">
      {/* Nav */}
      <nav className="flex justify-between items-center px-8 py-6">
        <span className="text-xl font-medium tracking-tight text-gray-200">
          bramforth-ai
        </span>
        <div className="flex gap-8 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition">Writings</a>
          <a href="#" className="hover:text-white transition">YouTube</a>
          <a href="#" className="hover:text-white transition">Services</a>
          <a href="#" className="hover:text-white transition">About</a>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex items-center px-8">
        <div className="max-w-3xl">
          <p className="text-gray-500 text-sm mb-4 tracking-wide uppercase">
            Fractional CAIO & AI Consultant
          </p>
          <h1 className="text-5xl font-medium mb-6 leading-tight text-gray-100">
            Helping companies harness AI with clarity and purpose.
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-xl">
            I write about AI, create educational content, and serve as a
            fractional Chief AI Officer for organizations ready to transform.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-black font-medium px-6 py-3 rounded transition hover:bg-gray-200 cursor-pointer">
              Work With Me
            </button>
            <button className="text-gray-400 hover:text-white px-6 py-3 transition flex items-center gap-2 cursor-pointer">
              Read My Writing
              <span>→</span>
            </button>
          </div>

          {/* Minimal stats */}
          <div className="mt-20 flex gap-16 text-gray-600">
            <div>
              <div className="text-3xl font-light text-gray-300">50K+</div>
              <div className="text-xs mt-1">Subscribers</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-300">100K+</div>
              <div className="text-xs mt-1">YouTube</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-300">15+</div>
              <div className="text-xs mt-1">Clients</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Style 3: Light + Clean
function LightHero() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Nav */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-100">
        <span className="text-xl font-semibold tracking-tight">
          bramforth<span className="text-blue-600">.</span>ai
        </span>
        <div className="flex gap-8 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900 transition">Writings</a>
          <a href="#" className="hover:text-gray-900 transition">YouTube</a>
          <a href="#" className="hover:text-gray-900 transition">Services</a>
          <a href="#" className="hover:text-gray-900 transition">About</a>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-3xl text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
            Fractional CAIO & AI Consultant
          </div>
          <h1 className="text-5xl font-semibold mb-6 leading-tight">
            AI strategy for the companies building tomorrow
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            I help organizations navigate AI transformation through writing,
            education, and hands-on consulting as a fractional Chief AI Officer.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition shadow-sm cursor-pointer">
              Work With Me
            </button>
            <button className="border border-gray-300 text-gray-700 hover:border-gray-400 px-8 py-3 rounded-lg transition cursor-pointer">
              Read My Writing
            </button>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex items-center justify-center gap-16">
            <div className="text-center">
              <div className="text-3xl font-semibold text-gray-900">50K+</div>
              <div className="text-sm text-gray-500">Newsletter</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-semibold text-gray-900">100K+</div>
              <div className="text-sm text-gray-500">YouTube</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-semibold text-gray-900">15+</div>
              <div className="text-sm text-gray-500">Clients</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Style 4: Dark + Glassmorphism
function GlassHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a3e] to-[#0f0f23] text-white flex flex-col relative overflow-hidden">
      {/* Ambient background orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />

      {/* Nav */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6">
        <span className="text-xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            bramforth
          </span>
          <span className="text-gray-400">-ai</span>
        </span>
        <div className="glass rounded-full px-6 py-2 flex gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Writings</a>
          <a href="#" className="hover:text-white transition">YouTube</a>
          <a href="#" className="hover:text-white transition">Services</a>
          <a href="#" className="hover:text-white transition">About</a>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-8">
        <div className="max-w-4xl text-center">
          <div className="glass inline-block mb-6 px-5 py-2 rounded-full text-sm">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-medium">
              Fractional CAIO & AI Consultant
            </span>
          </div>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Transforming businesses with{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              intelligent AI
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            I write about AI, create educational content, and guide organizations
            as a fractional Chief AI Officer.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white font-semibold px-8 py-3 rounded-xl transition shadow-lg shadow-purple-500/25 cursor-pointer">
              Work With Me
            </button>
            <button className="glass hover:bg-white/20 text-white px-8 py-3 rounded-xl transition cursor-pointer">
              Read My Writing
            </button>
          </div>

          {/* Glass card stats */}
          <div className="mt-16 glass rounded-2xl p-8 inline-flex gap-12">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">50K+</div>
              <div className="text-sm text-gray-400">Newsletter</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">100K+</div>
              <div className="text-sm text-gray-400">YouTube</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">15+</div>
              <div className="text-sm text-gray-400">Clients</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function StyleComparison() {
  const [activeStyle, setActiveStyle] = useState<StyleOption>("neon");

  const renderHero = () => {
    switch (activeStyle) {
      case "neon":
        return <NeonHero />;
      case "minimal":
        return <MinimalHero />;
      case "light":
        return <LightHero />;
      case "glass":
        return <GlassHero />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Style Selector - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800 px-4 py-3">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-3">
          <span className="text-gray-400 text-sm mr-2">Choose style:</span>
          {(Object.keys(styles) as StyleOption[]).map((style) => (
            <button
              key={style}
              onClick={() => setActiveStyle(style)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${
                activeStyle === style
                  ? "bg-white text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {styles[style].name}
            </button>
          ))}
        </div>
        <p className="text-center text-gray-500 text-xs mt-2">
          {styles[activeStyle].description}
        </p>
      </div>

      {/* Hero Preview - with top padding for fixed header */}
      <div className="pt-24">{renderHero()}</div>
    </div>
  );
}
