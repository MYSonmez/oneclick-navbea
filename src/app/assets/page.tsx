import type { Metadata } from "next";
import { AssetsWorkspace } from "@/components/factory-domain-workspaces";
import { AppShell } from "@/components/shell/app-shell";

export const metadata: Metadata = { title: "Varlıklar & Filo" };

export default function Page() {
  return <AppShell activeHref="/assets"><AssetsWorkspace /></AppShell>;
}
