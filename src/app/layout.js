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

export const metadata = {
  title: "Surhires — Hire Faster, Find Better Opportunities",
  description:
    "Discover career opportunities and connect with employers on Surhires. Find your next role or build a stronger team.",
  openGraph: {
    title: "Surhires — Hire Faster, Find Better Opportunities",
    description:
      "Discover career opportunities and connect with employers on Surhires. Find your next role or build a stronger team.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--color-warm-white)] text-[var(--color-navy)] flex flex-col">{children}</body>
    </html>
  );
}
