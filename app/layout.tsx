import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://post-pi-topaz.vercel.app"),
  title: "خطوبة إبراهيم وأمل",
  description: "حفل خطوبة إبراهيم وأمل - نتشرف بحضوركم لنشارك معاً أسمى معاني الفرح",
  openGraph: {
    title: "خطوبة إبراهيم وأمل",
    description: "يسعدنا حضوركم لنشارك معاً أسمى معاني الفرح",
    url: "https://post-pi-topaz.vercel.app/",
    siteName: "دعوة اشهار امل وابراهيم",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "خطوبة إبراهيم وأمل",
    description: "يسعدنا حضوركم لنشارك معاً أسمى معاني الفرح",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}