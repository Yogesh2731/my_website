import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Foot/Footer";
import { Providers } from "@/app/Providers";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Yogesh Surwade | Full Stack Developer",
  description: "Full Stack Developer specializing in Next.js, React, Node.js, Django, and cloud infrastructure. Building fast, scalable web applications.",
  keywords: ["Full Stack Developer", "Next.js", "React", "Node.js", "Django", "MongoDB", "AWS", "Yogesh Surwade"],
  authors: [{ name: "Yogesh Surwade" }],
  openGraph: {
    type: "website",
    url: "https://yogeshsurwade.dev",
    title: "Yogesh Surwade | Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, React, Node.js, Django, and cloud infrastructure. Building fast, scalable web applications.",
    siteName: "Yogesh Surwade Portfolio",
    images: [{ url: "/Images/og-image.png", width: 1200, height: 630, alt: "Yogesh Surwade - Full Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogesh Surwade | Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, React, Node.js, Django, and cloud infrastructure.",
    images: ["/Images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }} suppressHydrationWarning={true}>
      <body className={`${ibmPlexSans.variable} antialiased overflow-x-hidden`} suppressHydrationWarning={true}>
        <Providers>
          <PageLoader />
          <ScrollProgress />
          <CustomCursor />
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
