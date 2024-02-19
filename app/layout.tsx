import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./navbar";
import Footer from "./footer";

import GHeaderScript from "./gscript";
import Head from "next/head";
import Script from "next/script";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavbarDesktop from "./navbar-desktop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kiddee Lab",
  description: "More than coding.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no"
      ></meta>

      <Script
        strategy="afterInteractive"
        id="headScript"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M5TWRF58');`,
        }}
      ></Script>

      <body className={inter.className}>
        <Navbar></Navbar>
        <NavbarDesktop></NavbarDesktop>

        <div className="h-[90px] md:h-[150px]"></div>

        {children}
        <Analytics />
        <SpeedInsights />
        <Footer></Footer>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M5TWRF58"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
