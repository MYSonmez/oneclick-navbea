import { permanentRedirect } from "next/navigation";

export default function LegacyApprovalPage() {
  permanentRedirect("/work");
}
