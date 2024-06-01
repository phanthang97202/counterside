import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bán acc C:S",
  description: "Bán gấp acc CounterSide - by Phan Thang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="bg-slate-200" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
