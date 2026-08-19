import { PersonalHome } from "@/components/home/personal-home";
import { AppShell } from "@/components/shell/app-shell";

export default function HomePage() {
  return <AppShell activeHref="/"><PersonalHome /></AppShell>;
}
