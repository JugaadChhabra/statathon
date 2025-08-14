import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Survey Explorer - Professional Data Analytics Platform",
  description: "Advanced survey data exploration and analysis platform for PLFS, HCES, and other statistical datasets. Professional analytics with precision controls.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
