import type { Metadata } from "next";

import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";
import { Toaster } from "sonner";

import { QueryProvider } from "@/providers/query-provider";
import { fontSans, fontTitle } from "@/lib/fonts";

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
          "font-sans antialiased",
          fontSans.variable,
          fontTitle.variable
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
