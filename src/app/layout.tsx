"use client";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";

import Header from "./components/Header";
import Footer from "./components/Footer";

const mont = Montserrat({ weight: '700', subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={mont.className}>
        <StyledComponentsRegistry>
          <Header />
            {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
