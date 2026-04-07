"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 text-xs text-white/20 hover:text-white/60 transition-colors px-2 py-1 rounded bg-white/5"
      aria-label="Copiar prompt"
    >
      {copied ? "Copiado" : "Copiar"}
    </button>
  );
}
