"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-dark/80 backdrop-blur-xl border-b border-brand-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="font-bold text-brand-text tracking-tight">
            BRAND <span className="text-brand-orange">IA</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#videos"
            className="text-sm text-brand-muted hover:text-brand-text transition"
          >
            Videos
          </a>
          <a
            href="#sobre-mi"
            className="text-sm text-brand-muted hover:text-brand-text transition"
          >
            Sobre mí
          </a>
          <a
            href="https://www.tiktok.com/@brandia.lat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand-muted hover:text-brand-text transition"
          >
            TikTok
          </a>
          <a
            href="https://www.instagram.com/brandia.lat/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand-muted hover:text-brand-text transition"
          >
            Instagram
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-brand-muted hover:text-brand-text"
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-surface border-t border-brand-border px-6 py-4 space-y-3">
          <a
            href="#videos"
            onClick={() => setOpen(false)}
            className="block text-sm text-brand-muted hover:text-brand-text"
          >
            Videos
          </a>
          <a
            href="#sobre-mi"
            onClick={() => setOpen(false)}
            className="block text-sm text-brand-muted hover:text-brand-text"
          >
            Sobre mí
          </a>
          <a
            href="https://www.tiktok.com/@brandia.lat"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-brand-muted hover:text-brand-text"
          >
            TikTok
          </a>
          <a
            href="https://www.instagram.com/brandia.lat/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-brand-muted hover:text-brand-text"
          >
            Instagram
          </a>
        </div>
      )}
    </nav>
  );
}
