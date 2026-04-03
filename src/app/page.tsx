import Navbar from "@/components/Navbar";
import VideoCard from "@/components/VideoCard";
import { getVideos } from "@/lib/supabase";

export const revalidate = 60; // revalidar cada 60 segundos

export default async function Home() {
  const videos = await getVideos();
  return (
    <>
      <Navbar />

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 via-brand-dark to-brand-dark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-blue/8 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-card border border-brand-border mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-xs text-brand-muted font-medium">
                Creando contenido sin filtro
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              BRAND{" "}
              <span className="gradient-text">IA</span>
            </h1>

            <p className="text-xl sm:text-2xl text-brand-muted font-light max-w-2xl mx-auto mb-4">
              Ariel Jimenez
            </p>

            <p className="text-base sm:text-lg text-brand-muted/80 max-w-xl mx-auto mb-10 leading-relaxed">
              IA, automatización y negocios digitales.
              <br />
              Lo que pienso, lo que construyo, sin filtro.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#videos"
                className="px-8 py-3.5 bg-brand-blue hover:bg-brand-blue-light text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-brand-blue/20"
              >
                Ver Videos
              </a>
              <a
                href="https://www.tiktok.com/@brandia.lat"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-brand-card border border-brand-border text-brand-text font-medium rounded-xl hover:border-brand-blue/50 transition-all"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-brand-muted/40"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </section>

      {/* ==================== VIDEOS ==================== */}
      <section id="videos" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2
              className="text-3xl sm:text-4xl font-black tracking-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Videos
            </h2>
            <p className="text-brand-muted text-lg max-w-xl">
              Videos largos, ideas en crudo, lo que estoy construyendo.
              Clips cortos en{" "}
              <a
                href="https://www.tiktok.com/@brandia.lat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-orange hover:underline"
              >
                TikTok
              </a>
              .
            </p>
          </div>

          {videos.length > 0 ? (
            <div className="stagger grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-brand-card/50 rounded-2xl border border-brand-border">
              <p className="text-brand-muted text-lg">
                Primer video en camino...
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ==================== SOBRE MÍ ==================== */}
      <section id="sobre-mi" className="py-24 px-6 bg-brand-surface">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            {/* Left */}
            <div>
              <div className="w-32 h-32 rounded-2xl bg-brand-blue/10 border border-brand-border flex items-center justify-center mb-6">
                <span
                  className="text-4xl font-black text-brand-blue"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  AJ
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.tiktok.com/@brandia.lat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-text hover:border-brand-blue/50 transition"
                  aria-label="TikTok"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.69a8.27 8.27 0 004.76 1.51V6.75a4.83 4.83 0 01-1-.06z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/brandia.lat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-text hover:border-brand-blue/50 transition"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right */}
            <div>
              <h2
                className="text-3xl font-black tracking-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Ariel Jimenez
              </h2>
              <div className="space-y-4 text-brand-muted leading-relaxed">
                <p>
                  Construyo con inteligencia artificial. Automatizo lo que otros
                  hacen manual. Hago que negocios digitales funcionen.
                </p>
                <p>
                  Me cansé de guardarme lo que pienso. Ahora grabo, publico y
                  comparto lo que voy aprendiendo en el camino.
                </p>
                <p>
                  BRAND IA es donde la marca se encuentra con la inteligencia
                  artificial.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-brand-card border border-brand-border rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-brand-text">IA</p>
                  <p className="text-xs text-brand-muted mt-1">Agentes & Automatización</p>
                </div>
                <div className="bg-brand-card border border-brand-border rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-brand-text">Dev</p>
                  <p className="text-xs text-brand-muted mt-1">Full-Stack</p>
                </div>
                <div className="bg-brand-card border border-brand-border rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-brand-text">Biz</p>
                  <p className="text-xs text-brand-muted mt-1">Negocios Digitales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-12 px-6 border-t border-brand-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-brand-blue flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">B</span>
            </div>
            <span className="text-sm text-brand-muted">
              BRAND <span className="text-brand-orange">IA</span> — Ariel
              Jimenez
            </span>
          </div>
          <p className="text-xs text-brand-muted/50">
            &copy; 2026 BRANDIA. Mar del Plata, Argentina.
          </p>
        </div>
      </footer>
    </>
  );
}
