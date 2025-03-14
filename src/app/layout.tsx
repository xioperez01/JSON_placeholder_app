import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";
import { Toaster } from "sonner";

import { QueryProvider } from "@/providers/query-provider";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`
        )}
      >
        <Toaster position="top-center" />
        <QueryProvider>
          <div className="bg-stone-100  min-h-screen flex flex-col gap-8">
            <SiteHeader />
            <div className="container h-full flex-1 px-4 pb-4 mx-auto max-w-5xl">
              {children}
            </div>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
