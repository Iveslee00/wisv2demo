import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WIS — We Spark Beauty",
  description:
    "WIS is a premium beauty brand agency. We spark ideas between creativity and market, igniting the next wave of beauty culture.",
  keywords: "WIS, beauty brand, cosmetics, premium beauty, brand agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${notoSansTC.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
