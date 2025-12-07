import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KoulchiConnect",
  description: "Plateforme marocaine connectant utilisateurs et artisans qualifiés pour services à domicile : plomberie, électricité, nettoyage, réparation, peinture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}