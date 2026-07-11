import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";

export const metadata = {
  title: "Nahid Pervej Ruhan — Full-Stack Developer",
  description:
    "Portfolio of Nahid Pervej Ruhan — Full-Stack Developer specializing in Next.js, TypeScript and the MERN stack.",
  authors: [{ name: "Nahid Pervej Ruhan" }],
  openGraph: {
    title: "Nahid Pervej Ruhan — Full-Stack Developer",
    description: "Portfolio of Nahid Pervej Ruhan — Full-Stack Developer specializing in Next.js, TypeScript and the MERN stack.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
