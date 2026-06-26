import ThemeProvider from "@/components/theme/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FoodExpertisePortal",
  description: "Food expertise portal",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="f5nalxq8R9B9N98asYtQaqbeD03S0T-mX9BgLfKKYe4"
        />

        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-slate-50 dark:bg-slate-950"
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
