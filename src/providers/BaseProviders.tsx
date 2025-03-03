"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { ConfigProvider } from "./ConfigProvider";
import { SessionProvider } from "next-auth/react"


const queryClient = new QueryClient()


export function BaseProviders({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
    <ConfigProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </ConfigProvider>
    </SessionProvider>
  );
}
