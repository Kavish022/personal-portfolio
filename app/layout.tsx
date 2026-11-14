import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SpotlightGrid } from "@/components/ui/SpotlightGrid";
import { portfolioData } from "@/data/portfolio";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090909",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${portfolioData.name} — ${portfolioData.title}`,
  description: `${portfolioData.title} at ${portfolioData.company} based in ${portfolioData.location}. Specializing in React.js, Angular, TypeScript, Node.js, and PostgreSQL.`,
  keywords: [
    "Kavish Bhatt",
    "Software Engineer",
    "Full Stack Developer",
    "React.js",
    "Angular",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Sequelize",
    "RxJS",
    "Ant Design",
    "Tailwind CSS",
    "Webanix",
  ],
  authors: [{ name: portfolioData.name, url: "https://github.com/kavish022" }],
  creator: portfolioData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kavishbhatt.dev",
    title: `${portfolioData.name} — ${portfolioData.title}`,
    description: portfolioData.bioSummary,
    siteName: `${portfolioData.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.name} — ${portfolioData.title}`,
    description: portfolioData.bioSummary,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-[#c5ff4a] selection:text-black`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans overflow-x-hidden transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Subtle Film Grain Noise Texture */}
          <div className="grain-overlay" aria-hidden="true" />

          {/* Interactive Mouse-Tracking Background Spotlight & Grid */}
          <SpotlightGrid />

          {/* Desktop Custom Cursor */}
          <CustomCursor />

          {/* Top Scroll Progress Indicator */}
          <ScrollProgress />

          {/* Lenis Smooth Scroll Container */}
          <SmoothScroll>
            <Navbar />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
