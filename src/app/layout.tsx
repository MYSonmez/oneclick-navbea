import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "@fontsource-variable/inter";
import "./globals.css";

const applicationName = process.env.NEXT_PUBLIC_APP_NAME ?? "OneClick";

export const metadata: Metadata = {
  applicationName,
  title: { default: applicationName, template: `%s | ${applicationName}` },
  description: "NAVBEA OneClick ile fabrika operasyonlarını, güvenliği, iş akışlarını ve saha görünürlüğünü tek çalışma alanında yönetin.",
  icons: {
    icon: "/brand/navbea-icon-light.svg",
    shortcut: "/brand/navbea-icon-light.svg",
  },
  creator: "NAVBEA",
  publisher: "NAVBEA",
  formatDetection: { email: false, address: false, telephone: false },
  robots: { index: false, follow: false, nocache: true },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#081625",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
