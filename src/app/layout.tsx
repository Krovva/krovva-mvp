"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import NextAuthProvider from "../providers/next-auth-provider";
import MiniKitProvider from "../providers/minikit-provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ErudaProvider = dynamic(
    () => import("../providers/erude-provider").then((c) => c.ErudaProvider),
    {
      ssr: false,
    },
  );

  // List of routes where the Navbar will not be shown
  //const hideNavbarRoutes = ["/onboarding/weight", "/SignIn"];

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen h-auto`}>
        <NextAuthProvider>
          <ErudaProvider>
            <MiniKitProvider>{children}</MiniKitProvider>
          </ErudaProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
