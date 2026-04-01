import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const sans = localFont({
  src: [
    {
      path: "../fonts/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Inter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Inter-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

const serif = localFont({
  src: [
    {
      path: "../fonts/PlayfairDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/PlayfairDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-playfair",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  title: "Kathi Miler – Yoga & Rückbildung",
  description:
    "Yoga, Schwangeren-Yoga und Rückbildungskurse mit Kathi Miler. Kurse in eigener Regie, über DJK Ottenhofen und die Volkshochschule.",
  keywords: [
    "Yoga",
    "Rückbildung",
    "Schwangeren-Yoga",
    "Kathi Miler",
    "Katharina Miler",
    "DJK Ottenhofen",
    "Volkshochschule",
  ],
  openGraph: {
    title: "Kathi Miler – Yoga & Rückbildung",
    description:
      "Yoga, Schwangeren-Yoga und Rückbildungskurse mit Kathi Miler.",
    url: "https://katharinamiler.de",
    siteName: "Kathi Miler",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
