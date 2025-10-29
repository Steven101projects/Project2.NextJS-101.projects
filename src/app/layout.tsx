import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WELCOME | 101.PROJECTS",
  description: "Portfolio by Nico Castro",
};

export default function RootLayout({children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
