import { permanentRedirect } from "next/navigation";

export default function LegacyActiveTasksPage() {
  permanentRedirect("/work");
}
