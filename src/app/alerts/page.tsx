import type { Metadata } from "next";
import { AppShell } from "@/components/shell/app-shell";
import { IncidentsWorkspace } from "@/components/incidents-workspace";
export const metadata: Metadata = { title: "Alarmlar" };
export default function Page(){ return <AppShell activeHref="/safety"><IncidentsWorkspace /></AppShell>; }
