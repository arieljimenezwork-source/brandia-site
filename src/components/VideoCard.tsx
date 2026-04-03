import type { Video } from "@/lib/supabase";

export default function VideoCard({ video }: { video: Video }) {
  return (
    <article className="group card-hover bg-brand-card border border-brand-border rounded-2xl overflow-hidden">
      {/* Loom Embed */}
      <div className="loom-embed">
        <iframe
          src={`https://www.loom.com/embed/${video.loom_id}`}
          allowFullScreen
          title={video.title}
        />
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
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
