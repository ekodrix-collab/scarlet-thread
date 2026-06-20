import type { Metadata } from "next";
import { fontSans, fontHeading } from "@/lib/fonts";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";

export const metadata: Metadata = {
  title: "The Scarlet Thread | Every Gift Tells A Story",
  description: "Personalized luxury gifts. Embroidered and made with love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontHeading.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col overflow-x-hidden`}
      >
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
