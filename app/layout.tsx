import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Galaxia Software SAC",
  description: "Software contable, pedidos web y tiendas virtuales para empresas que quieren crecer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}