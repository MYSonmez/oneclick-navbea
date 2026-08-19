import type { Metadata } from "next";
import { SolutionsWorkspace } from "@/components/solutions-workspace";
import { AppShell } from "@/components/shell/app-shell";
export const metadata: Metadata = { title: "Çözümler" };
export default function Page(){ return <AppShell activeHref="/solutions"><SolutionsWorkspace /></AppShell>; }
