import type { Metadata } from "next";
import Script from "next/script";
import { Be_Vietnam_Pro, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kalyvoaruno Games",
  description:
    "Top up game dan kebutuhan digital dengan proses cepat, harga jelas, dan pembayaran praktis.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${poppins.variable} ${beVietnam.variable}`}>
      <body>
        {children}
        <Script src="/kalyvoaruno.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
