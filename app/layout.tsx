// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/Footer"; // Adjust path if necessary
import Navbar from "../components/Navbar"; // Adjust path if necessary
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Nile's Table",
  description: "An Ancient Tradition of Flavor, Reimagined.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
