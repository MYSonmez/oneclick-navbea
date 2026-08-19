import type { Metadata } from "next";
import { AdministrationWorkspace } from "@/components/factory-domain-workspaces";
import { AppShell } from "@/components/shell/app-shell";

export const metadata: Metadata = { title: "Yönetim" };

export default function Page() {
  return <AppShell activeHref="/administration"><AdministrationWorkspace /></AppShell>;
}
