import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { generalSansFonts } from "@/app/fonts";
import Footer from "./components/Footer";

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
        {/* <Footer/> */}
      </body>
    </html>
  );
}
