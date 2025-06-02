import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Simplip2p",
  description: "Landing Page For Simplip2p",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body
      >
         <Header />
            {children}
        <Footer />
      </body>
    </html>
  );
}
