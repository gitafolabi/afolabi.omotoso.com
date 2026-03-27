import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { profile } from "@/data/profile";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://afolabiomotoso.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | DevOps, SRE, and Platform Engineering`,
    template: "%s | Afolabi Omotoso"
  },
  description:
    `${profile.name} is a ${profile.role} based in ${profile.location}, sharing DevOps, site reliability, cloud infrastructure, and platform engineering work.`,
  openGraph: {
    title: `${profile.name} | DevOps, SRE, and Platform Engineering`,
    description:
      `${profile.name} shares selected DevOps, SRE, cloud infrastructure, and platform engineering work.`,
    url: siteUrl,
    siteName: profile.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | DevOps, SRE, and Platform Engineering`,
    description:
      `${profile.name} shares selected DevOps, SRE, cloud infrastructure, and platform engineering work.`
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="font-loaded"
    >
      <body suppressHydrationWarning className="min-h-screen font-sans">
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            try {
              const storedTheme = localStorage.getItem("theme");
              if (storedTheme === "light") {
                document.documentElement.classList.remove("dark");
              } else {
                document.documentElement.classList.add("dark");
              }
            } catch (error) {
              document.documentElement.classList.add("dark");
            }
          `}
        </Script>
        <div className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-mesh dark:bg-[radial-gradient(circle_at_top_left,_rgba(199,103,62,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(67,98,75,0.18),_transparent_24%),linear-gradient(180deg,_rgba(2,6,23,1),_rgba(15,23,42,0.96))]" />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
