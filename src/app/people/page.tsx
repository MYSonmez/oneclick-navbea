import type { Metadata } from "next";
import { PeopleWorkspace } from "@/components/factory-domain-workspaces";
import { AppShell } from "@/components/shell/app-shell";

export const metadata: Metadata = { title: "Kişiler" };

export default function Page() {
  return <AppShell activeHref="/people"><PeopleWorkspace /></AppShell>;
}
