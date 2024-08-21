import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar/NavBar";
import SlideInButton from "@/components/SlideInButtons/SlideInButton";

export const metadata: Metadata = {
  title: "Diamond Lease",
  description: "Car rental service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <SlideInButton/>
      </body>
    </html>
  );
}
