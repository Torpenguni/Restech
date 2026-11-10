import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegisterPopup from "@/components/RegisterPopup";
import { event } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: `${event.edition} — ${event.tagline}`, template: `%s | ${event.edition}` },
  description: `${event.tagline}. ${event.dateLabel}, ${event.venue}.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <RegisterPopup />
      </body>
    </html>
  );
}
