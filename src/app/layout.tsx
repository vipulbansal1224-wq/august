import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { QuoteProvider } from "@/context/QuoteContext";
import { SiteDataProvider } from "@/context/SiteDataContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteDrawer from "@/components/QuoteDrawer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "August Industries | ISO 9001:2015 Strut Fittings, Fasteners & Clamps",
  description:
    "Manufacturers & Exporters of precision strut accessories, channel nuts, cantilever arms, fasteners, and pipe clamps since 1998. Business Beyond Boundaries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-slate-900">
        <SiteDataProvider>
          <QuoteProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <QuoteDrawer />
          </QuoteProvider>
        </SiteDataProvider>
      </body>
    </html>
  );
}
