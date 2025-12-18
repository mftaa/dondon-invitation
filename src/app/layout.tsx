import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dondon Invitation - Premium Wedding Invitation",
  description: "Cetak undangan pernikahan hardcover elegan dan murah di Semarang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans bg-background text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
