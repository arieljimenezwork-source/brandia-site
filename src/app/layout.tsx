import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BRAND IA — Ariel Jimenez",
  description:
    "IA, automatización y negocios digitales. Videos, ideas y lo que pienso sin filtro.",
  openGraph: {
    title: "BRAND IA — Ariel Jimenez",
    description:
      "IA, automatización y negocios digitales. Videos, ideas y lo que pienso sin filtro.",
    type: "website",
    url: "https://brandia.site",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
