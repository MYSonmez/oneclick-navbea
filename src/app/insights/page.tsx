import type { Metadata } from "next";
import { InsightsWorkspace } from "@/components/insights-workspace";
import { AppShell } from "@/components/shell/app-shell";
export const metadata: Metadata = { title: "İçgörüler" };
export default function Page(){ return <AppShell activeHref="/insights"><InsightsWorkspace /></AppShell>; }
