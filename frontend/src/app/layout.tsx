"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/common/assets/mui/theme";
import { SessionProvider } from "next-auth/react";
import { RequestProvider } from "@/common/contexts/RequestContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <SessionProvider>
            <RequestProvider>
              <body className={inter.className}>{children}</body>
            </RequestProvider>
          </SessionProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
