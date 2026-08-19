import type { Metadata } from "next";
import { AppShell } from "@/components/shell/app-shell";
import { LiveOperations } from "@/components/live/live-operations";
export const metadata: Metadata = { title: "Canlı Operasyon" };
export default function Page(){ return <AppShell activeHref="/live"><LiveOperations /></AppShell>; }
