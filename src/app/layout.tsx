"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import NextAuthProvider from "../components/next-auth-provider";
import MiniKitProvider from "../components/minikit-provider";
import Navbar from "../components/Navbar";

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

  const showNavbar =
    pathname === "/home" ||
    pathname === "/categories" ||
    pathname === "/workouts" ||
    pathname === "/completed" ||
    pathname === "/settings" ||
    /^\/workouts\/(?!details(?:\/|$))[^/]+$/.test(pathname);

  // List of routes where the Navbar will not be shown
  //const hideNavbarRoutes = ["/onboarding/weight", "/SignIn"];

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
