import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Camp travel",
  description: "Travel UX/UI App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
