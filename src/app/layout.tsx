import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "OneClick", template: "%s | OneClick" },
  description: "NAVBEA OneClick operational platform design system.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
