import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import "./style.css";
import { generalSansFonts } from "@/app/fonts";

export const metadata: Metadata = {
  title: "47 Tech - Turning your ideas into impact!",
  description: "Turning your ideas into impact!",

  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={generalSansFonts.variable}>
      <body
        suppressHydrationWarning
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
