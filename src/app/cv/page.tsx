import type { Metadata } from "next";
import SubscribeForm from "@/components/SubscribeForm";
import CopyButton from "@/components/CopyButton";

export const metadata: Metadata = {
  title: "Corregi tu CV con Claude en 15 minutos — BRAND IA",
  description:
    "3 prompts reales para transformar un CV generico en uno que abre conversaciones. Gratis.",
  openGraph: {
    title: "Corregi tu CV con Claude en 15 minutos",
    description:
      "3 prompts reales para transformar un CV generico en uno que abre conversaciones.",
    type: "website",
    url: "https://brandia.site/cv",
  },
};

const PROMPTS = [
  {
    number: "01",
    title: "Diagnostico brutal",
    description:
      "Descubri como te percibe un recruiter en 30 segundos. Sin filtro.",
    prompt: `Analiza este CV como si fueras un recruiter senior con 10 anos de experiencia en tech/startups LATAM.

Decime:
1. Que dice este CV sobre como piensa esta persona (no que hizo, sino como se posiciona)
2. Las 3 debilidades mas grandes que harian que lo descarte en 30 segundos
3. Que le falta para que un founder quiera agendar una llamada

Se directo, sin suavizar.`,
    why: "Te saca de 'listado de tareas' y te mueve a 'como te perciben'.",
  },
  {
    number: "02",
    title: "Reescritura por impacto",
    description:
      "Transforma bullets genericos en resultados que se sienten reales.",
    prompt: `Toma este CV y reescribi cada bullet point de experiencia usando esta estructura:

[Accion concreta] + [resultado medible o contexto de impacto] + [herramienta/metodo si es relevante]

Reglas:
- Elimina todo lo que suene a descripcion de puesto generica
- Si no hay numero, inventa una forma de cuantificar el impacto (%, tiempo ahorrado, escala)
- Maximo 3 bullets por experiencia
- Lenguaje directo, sin buzzwords

Devolveme el CV completo reescrito.`,
    why: "Pasa de 'responsable de gestionar el equipo' a 'lidere un equipo de 4 que redujo el tiempo de onboarding de 3 semanas a 5 dias'.",
  },
  {
    number: "03",
    title: "Version para el puesto",
    description:
      "Adapta tu CV a cada oportunidad en 5 minutos, no en 2 horas.",
    prompt: `Aca esta mi CV reescrito: [pega el CV]
Aca esta la descripcion del puesto al que quiero aplicar: [pega el job posting]

Adapta mi CV para este puesto especifico:
1. Reordena las experiencias poniendo primero lo mas relevante para este rol
2. Ajusta el lenguaje para que use las mismas palabras clave del posting (sin forzar)
3. Escribi un parrafo de perfil/resumen de 3 lineas que conecte mi experiencia con lo que buscan
4. Decime que experiencia o skill me falta y como puedo compensarlo en la entrevista`,
    why: "Cada aplicacion deberia ser un CV diferente. Con esto lo haces en 5 minutos.",
  },
];

export default function CVPage() {
  return (
    <div className="min-h-screen bg-[#080810] text-white font-sans">
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden px-6 pt-20 pb-16 max-w-4xl mx-auto text-center">
        {/* Glow background */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[500px] bg-blue-700/20 rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute left-1/3 top-20 w-[300px] h-[300px] bg-purple-700/10 rounded-full blur-[100px]" />

        <div className="relative">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4">
            Guia gratuita
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.08] tracking-tight mb-6">
            Corregi tu CV con Claude
            <br />
            <span className="gradient-text">en 15 minutos.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            3 prompts que uso para transformar CVs genericos en CVs que abren
            conversaciones. Sin teoria, solo lo que funciona.
          </p>

          {/* Quick trust */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/30 mb-10">
            <span>100% gratis</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Solo necesitas claude.ai</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>15 min</span>
          </div>
        </div>
      </section>

      {/* ==================== PROMPTS ==================== */}
      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <div className="space-y-8">
          {PROMPTS.map((p) => (
            <article
              key={p.number}
              className="bg-white/[0.03] border border-white/8 rounded-2xl p-8 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-start gap-5 mb-5">
                <span className="text-3xl font-black text-white/10 leading-none mt-1">
                  {p.number}
                </span>
                <div>
                  <h2 className="text-xl font-bold mb-1">{p.title}</h2>
                  <p className="text-white/40 text-sm">{p.description}</p>
                </div>
              </div>

              {/* Prompt block */}
              <div className="relative group">
                <pre className="bg-[#0d0d16] border border-white/6 rounded-xl p-5 text-sm text-white/70 leading-relaxed whitespace-pre-wrap font-sans overflow-x-auto">
                  {p.prompt}
                </pre>
                <CopyButton text={p.prompt} />
              </div>

              {/* Why it works */}
              <p className="mt-4 text-sm text-white/30 italic">
                Por que funciona: {p.why}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ==================== BEFORE/AFTER ==================== */}
      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-6 text-center">
            Antes vs. Despues
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-3 block">
                Antes
              </span>
              <p className="text-white/40 text-sm leading-relaxed">
                &quot;Responsable de gestionar el equipo de marketing y coordinar
                campanas publicitarias en distintas plataformas digitales.&quot;
              </p>
            </div>
            <div className="bg-green-500/5 border border-green-500/10 rounded-xl p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-green-400 mb-3 block">
                Despues
              </span>
              <p className="text-white/40 text-sm leading-relaxed">
                &quot;Lidere un equipo de 4 que redujo el costo por lead un 38% en
                6 meses usando Meta Ads + automatizacion con Make para nurturing
                en WhatsApp.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="px-6 pb-20 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-b from-blue-900/20 to-transparent border border-white/8 rounded-2xl p-10">
          <h2 className="text-2xl font-bold mb-3">
            Esto es solo una de las cosas que construyo con IA.
          </h2>
          <p className="text-white/40 mb-8 max-w-lg mx-auto">
            Publico todos los dias lo que aprendo automatizando negocios como
            founder no tecnico. Seguime para ver mas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.tiktok.com/@brandia.lat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-black font-semibold text-sm rounded-xl hover:bg-white/90 transition-colors"
            >
              Seguime en TikTok
            </a>
            <a
              href="https://www.linkedin.com/in/arieljimenezwork"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/5 border border-white/10 text-white font-semibold text-sm rounded-xl hover:bg-white/10 transition-colors"
            >
              Conectar en LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ==================== SUBSCRIBE ==================== */}
      <section className="px-6 pb-20 max-w-4xl mx-auto text-center">
        <p className="text-white/30 text-sm mb-4">
          Dejame tu mail si queres recibir mas guias como esta.
        </p>
        <div className="flex justify-center">
          <SubscribeForm />
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="px-6 py-10 border-t border-white/8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="/" className="text-white/30 text-sm hover:text-white/60 transition-colors">
            brandia.site
          </a>
          <p className="text-xs text-white/20">
            Ariel Jimenez — BRAND IA, Mar del Plata, Argentina.
          </p>
        </div>
      </footer>
    </div>
  );
}
