// ============================================================
// VIDEO DATA — Editá este archivo para agregar nuevos videos
// ============================================================
// Para agregar un video:
// 1. Subí tu video a Loom
// 2. Copiá el ID del video (la parte después de /share/ en la URL)
// 3. Agregá un nuevo objeto al array con el formato de abajo
//
// Ejemplo URL de Loom: https://www.loom.com/share/abc123def456
// El loomId sería: "abc123def456"
// ============================================================

export interface Video {
  id: string;
  title: string;
  description: string;
  loomId: string;
  date: string; // formato: "2026-04-02"
  tags: string[];
}

export const videos: Video[] = [
  {
    id: "1",
    title: "Mejorando la producción de videos y aplicaciones web con herramientas IA",
    description:
      "Primer video. Cómo estoy usando IA para producir contenido y construir apps web. Lo que avanzó desde ayer.",
    loomId: "a92adbd804394229bb70a41161c68f63",
    date: "2026-04-03",
    tags: ["IA", "producción", "dev"],
  },
  {
    id: "2",
    title: "Mejorando la producción de videos y aplicaciones web con herramientas efectivas",
    description:
      "Cómo optimizo mi workflow de producción combinando herramientas de video y desarrollo web. Introducción a localhost y más.",
    loomId: "c7bd4fedece8447db7d3594b279b0520",
    date: "2026-04-03",
    tags: ["producción", "dev", "workflow"],
  },
  // --- Agregá más videos acá abajo ---
];
