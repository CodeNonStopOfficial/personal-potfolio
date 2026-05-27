import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/providers/ConvexClientProvider";
import { Navbar } from "@/components/layouts/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Footer } from "@/components/layouts/Footer";
import ScrollToTop from "@/components/animations/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "CodeNonstop - India's largest learning platform",
  description:
    "CodeNonstop Technology Provide's Tech related course and program?",
  openGraph: {
    type: "website",
    url: "https://codenonstop.com",
    title: "CodeNonstop",
    description:
      "CodeNonstop Technology Provide's Tech related course and program?",
    siteName: "My Website",
    images: [{ url: "https://example.com/og.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body
        className={`${roboto.className}  min-h-full flex flex-col`}
        cz-shortcut-listen="true"
      >
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="flex-1">
              <ScrollToTop />
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
