import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegisterPopup from "@/components/RegisterPopup";
import { event } from "@/lib/site";

const prompt = Prompt({ subsets: ["latin", "thai"], weight: ["300", "400", "500", "600", "700"], variable: "--font-prompt", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: `${event.edition} — ${event.tagline}`, template: `%s | ${event.edition}` },
  description: `${event.tagline}. ${event.dateLabel}, ${event.venue}.`,
  icons: { icon: "/images/logo.webp" },
  openGraph: { images: ["/images/kv-about.webp"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={prompt.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <RegisterPopup />
      </body>
    </html>
  );
}
