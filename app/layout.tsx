import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog Preview Card",
  description: "Frontend Mentor blog preview card challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
