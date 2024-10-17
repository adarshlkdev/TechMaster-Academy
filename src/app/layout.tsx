import type { Metadata } from "next";
import { Outfit  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechMaster Academy",
  description: "Empowering the next generation of tech professionals with cutting-edge courses and resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
    <body className={inter.className}>
      <div className="relative w-full flex items-center justify-center ">
        <Navbar />
      </div>
      {children}
      <Footer />
    </body>
  </html>
  );
}
