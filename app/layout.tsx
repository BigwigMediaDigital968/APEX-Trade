import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import SocialAndFooter from "./components/SocialAndFooter";
import { AuthModalProvider } from "./context/AuthModalContext";
import SocialProofPopups from "./components/popup/SocialProofPopups";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ApexTrade - Precision Trading Platform",
  description:
    "Follow automated trading systems built from market trends. Trusted by 4,700+ traders worldwide.",
  keywords: "trading platform, automated trading, market analysis, investment",
  openGraph: {
    title: "ApexTrade — Precision Trading Platform",
    description: "Your edge in the market starts here.",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
       <head>
        <meta
          name="google-site-verification"
          content="YP_Y28fJwisRPTSnDD3fr8tTZ4zWa2T2K7f4QDyWx3E"
        />
      </head>
      <body className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#0B0E14] text-white font-sans`}>
        <AuthModalProvider>
          <SocialProofPopups />
          <Navbar />
          {children}
          <SocialAndFooter />
        </AuthModalProvider>
      </body>
    </html>
  );
}
