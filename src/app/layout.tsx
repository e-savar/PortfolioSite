import Header from "@/src/components/Header";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ethan's Website",
  description: "Ethan's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Kadwa:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <Header />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
