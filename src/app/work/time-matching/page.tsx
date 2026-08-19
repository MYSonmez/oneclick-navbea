import type { Metadata } from "next";
import { AppShell } from "@/components/shell/app-shell";
import { TimeWorkspace } from "@/components/time-workspace";
export const metadata: Metadata = { title: "Süre & Vardiya" };
export default function Page(){ return <AppShell activeHref="/work/time-matching"><TimeWorkspace /></AppShell>; }
