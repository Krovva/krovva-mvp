"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import MiniKitProvider from "@/components/minikit-provider";
import dynamic from "next/dynamic";
import NextAuthProvider from "@/components/next-auth-provider";
import Navbar from "@/components/Navbar/index";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ErudaProvider = dynamic(
    () => import("../components/Eruda").then((c) => c.ErudaProvider),
    {
      ssr: false,
    }
  );

  const pathname = usePathname();

// Mostrar Navbar solo en rutas específicas
const showNavbar =
  pathname === "/home" ||
  pathname === "/categories" ||
  pathname === "/settings" ||
  pathname === "/workouts" || 
  (pathname.startsWith("/workouts/") && pathname.split("/").length === 3 && !pathname.includes("details") && !pathname.includes("timer"));

  

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <ErudaProvider>
            <MiniKitProvider>
              {showNavbar && <Navbar />}
              {children}
            </MiniKitProvider>
          </ErudaProvider> 
        </NextAuthProvider>
      </body>
    </html>
  );
}
