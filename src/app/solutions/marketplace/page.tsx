import type { Metadata } from "next";
import { MarketplaceWorkspace } from "@/components/marketplace-workspace";
import { AppShell } from "@/components/shell/app-shell";

export const metadata: Metadata = { title: "Marketplace" };

export default function MarketplacePage() {
  return <AppShell activeHref="/solutions/marketplace"><MarketplaceWorkspace /></AppShell>;
}
