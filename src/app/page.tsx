import Image from "next/image";
import VideoCard from "@/components/VideoCard";
import SubscribeForm from "@/components/SubscribeForm";
import { getVideos } from "@/lib/supabase";

export const revalidate = 60;

const TAGS = [
  { label: "IA & Automatización", color: "bg-orange-500" },
  { label: "Dev Full-Stack", color: "bg-orange-400" },
  { label: "Negocios Digitales", color: "bg-blue-500" },
];

export default async function Home() {
  const videos = await getVideos();

  return (
    <div className="min-h-screen bg-[#080810] text-white font-sans">

      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden px-6 pt-20 pb-16 max-w-6xl mx-auto">
        {/* Glow background */}
        <div className="pointer-events-none absolute right-0 top-0 w-[600px] h-[600px] bg-blue-700/20 rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute right-40 top-20 w-[300px] h-[300px] bg-purple-700/15 rounded-full blur-[100px]" />

        <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
          {/* Left */}
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight mb-8">
              Construyo con IA.<br />
              Automatizo negocios.
            </h1>

            {/* Email opt-in */}
            <SubscribeForm />
          </div>

          {/* Right — Logo */}
          <div className="flex items-center justify-center md:justify-end">
            <Image
              src="/logo.png"
              alt="Brand IA"
              width={220}
              height={220}
              className="object-contain opacity-90"
              priority
            />
          </div>
        </div>
      </section>

      {/* ==================== TAGS ==================== */}
      <section className="px-6 pb-12 max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-3">
          {TAGS.map((tag) => (
            <span
              key={tag.label}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70"
            >
              <span className={`w-2 h-2 rounded-full ${tag.color}`} />
              {tag.label}
            </span>
          ))}
        </div>
      </section>

      {/* ==================== VIDEOS ==================== */}
      <section id="videos" className="px-6 pb-20 max-w-6xl mx-auto">
        {videos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 rounded-2xl border border-white/8">
            <p className="text-white/40 text-lg">Primer video en camino...</p>
          </div>
        )}
      </section>

      {/* ==================== ABOUT ==================== */}
      <section id="sobre-mi" className="px-6 py-20 border-t border-white/8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[auto_1fr] gap-10 items-start">
          {/* Photo */}
          <div className="flex-shrink-0">
            <Image
              src="/ariel.png"
              alt="Ariel Jimenez"
              width={120}
              height={120}
              className="rounded-2xl object-cover object-top w-[120px] h-[120px]"
            />
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-2xl font-bold mb-3">About</h2>
            <p className="text-white/60 leading-relaxed max-w-2xl">
              Ariel Jimenez construye con IA y automatiza negocios digitales. Head of AI & Automation,
              fundador de Brand IA — donde la automatización de ideas, videos, web y apps se une al crecimiento real.
              Comparte contenido y aplicaciones para quitar lo manual e inflamar los negocios digitales con herramientas
              efectivas. En GTC ayuda a otros a escalar con apps y sistemas que no necesitan supervisión constante.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="px-6 py-10 border-t border-white/8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Email opt-in */}
          <SubscribeForm compact />

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/arieljimenezok"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
            </a>
            <a
              href="https://github.com/arieljimenezwork-source"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>

          <p className="text-xs text-white/25">
            &copy; 2025 BRANDIA, Mar del Plata, Argentina.
          </p>
        </div>
      </footer>
    </div>
  );
}
