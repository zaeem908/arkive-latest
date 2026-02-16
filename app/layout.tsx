
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ARKIVE | Technical Services & Contracting",
  description: "A high-end, minimalist technical services and contracting platform for premium property maintenance and construction.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-inkwell selection:bg-creme selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
