import type { Metadata } from "next";
import { WorkOverview } from "@/components/work-overview";
import { AppShell } from "@/components/shell/app-shell";

export const metadata: Metadata = { title: "İş Merkezi" };

export default function Page() {
  return <AppShell activeHref="/work"><WorkOverview /></AppShell>;
}
