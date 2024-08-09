import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
});

const dmSans = DM_Sans({
  weight: "400",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Phonix App",
  description: "Phonix App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
      <Toaster/>
    </html>
  );
}
