import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans } from "next/font/google";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Foot/Footer";
import { Providers } from "@/app/Providers";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Yogesh Surwade",
  description: "A Full Stack Developer passionate about creating user-friendly interfaces and powerful backend systems for modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}} suppressHydrationWarning={true}>
      <body className={`${ibmPlexSans.variable} antialiased overflow-x-hidden`} suppressHydrationWarning={true}>
        <Providers>
          <div className="w-full overflow-x-hidden">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
