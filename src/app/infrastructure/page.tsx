import type { Metadata } from "next";
import { InfrastructureWorkspace } from "@/components/factory-domain-workspaces";
import { AppShell } from "@/components/shell/app-shell";

export const metadata: Metadata = { title: "Altyapı" };

export default function Page() {
  return <AppShell activeHref="/infrastructure"><InfrastructureWorkspace /></AppShell>;
}
