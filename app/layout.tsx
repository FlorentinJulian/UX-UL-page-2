import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UX/UL Responsive Page",
  description: "Creada por Florentin Julian",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
