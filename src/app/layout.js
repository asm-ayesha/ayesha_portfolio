import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ClientShell } from "@/components/ClientShell";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ayesha Siddika Portfolio",
    template: "%s | Ayesha Siddika",
  },
  description:
    "Frontend developer portfolio focused on modern web apps, motion UI, and production-ready product engineering.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ayesha Siddika Portfolio",
    description: "Modern web experiences built with Next.js, React, and motion-first UI systems.",
    type: "website",
    url: siteUrl,
    siteName: "Ayesha Siddika Portfolio",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayesha Siddika Portfolio",
    description: "Modern web experiences built with Next.js, React, and motion-first UI systems.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-[#050816] font-sans text-slate-50">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
