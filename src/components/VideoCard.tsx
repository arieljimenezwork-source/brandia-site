import type { Video } from "@/data/videos";

export default function VideoCard({ video }: { video: Video }) {
  const isPlaceholder = video.loomId === "REEMPLAZA_CON_TU_LOOM_ID";

  return (
    <article className="group card-hover bg-brand-card border border-brand-border rounded-2xl overflow-hidden">
      {/* Loom Embed */}
      <div className="loom-embed">
        {isPlaceholder ? (
          <div className="absolute inset-0 bg-brand-surface flex items-center justify-center">
            <div className="text-center px-6">
              <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-brand-blue"
                >
                  <path d="M8 6l12 10L8 26V6z" />
                </svg>
              </div>
              <p className="text-brand-muted text-sm">
                Próximamente
              </p>
            </div>
          </div>
        ) : (
          <iframe
            src={`https://www.loom.com/embed/${video.loomId}`}
            allowFullScreen
            title={video.title}
          />
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          {video.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-brand-blue/10 text-brand-blue-light uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-bold text-brand-text text-lg leading-tight mb-2">
          {video.title}
        </h3>
        <p className="text-brand-muted text-sm leading-relaxed">
          {video.description}
        </p>
        <time className="block mt-3 text-xs text-brand-muted/60">
          {new Date(video.date).toLocaleDateString("es-AR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
    </article>
  );
}
