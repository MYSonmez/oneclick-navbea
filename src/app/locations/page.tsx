import type { Metadata } from "next";
import { AppShell } from "@/components/shell/app-shell";
import { LocationsWorkspace } from "@/components/static-workspaces";
export const metadata: Metadata = { title: "Lokasyonlar" };
export default function Page(){ return <AppShell activeHref="/infrastructure"><LocationsWorkspace /></AppShell>; }
