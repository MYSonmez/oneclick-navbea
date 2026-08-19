import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  ChartNoAxesCombined,
  ClipboardCheck,
  ClipboardList,
  Factory,
  Forklift,
  House,
  RadioTower,
  Radar,
  Settings2,
  ShieldAlert,
  ShoppingBag,
  Sparkles,
  UsersRound,
} from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  status?: string;
  exact?: boolean;
  nested?: boolean;
};

export type NavigationGroup = {
  label: string;
  items: NavigationItem[];
};

export const factoryNavigation: NavigationGroup[] = [
  {
    label: "GENEL",
    items: [
      { label: "Ana Sayfa", href: "/", icon: House, exact: true },
      { label: "Canlı Operasyon", href: "/live", icon: Radar, status: "CANLI" },
    ],
  },
  {
    label: "OPERASYON",
    items: [
      { label: "Güvenlik & Olaylar", href: "/safety", icon: ShieldAlert, status: "7" },
      { label: "İş Merkezi", href: "/work", icon: ClipboardList, status: "19", exact: true },
      { label: "Süre & Vardiya", href: "/work/time-matching", icon: ClipboardCheck, status: "34" },
      { label: "Kişiler", href: "/people", icon: UsersRound },
      { label: "Varlıklar & Filo", href: "/assets", icon: Forklift },
    ],
  },
  {
    label: "ANALİZ & ÇÖZÜMLER",
    items: [
      { label: "İçgörüler", href: "/insights", icon: ChartNoAxesCombined },
      { label: "Çözümlerim", href: "/solutions", icon: Sparkles, exact: true },
      { label: "Marketplace", href: "/solutions/marketplace", icon: ShoppingBag },
    ],
  },
];

export const platformNavigation: NavigationGroup = {
  label: "PLATFORM",
  items: [
    { label: "Altyapı", href: "/infrastructure", icon: RadioTower, status: "2" },
    { label: "Yönetim", href: "/administration", icon: Settings2 },
  ],
};

export const mobileNavigation = [
  factoryNavigation[0].items[0],
  factoryNavigation[0].items[1],
  factoryNavigation[1].items[0],
  factoryNavigation[1].items[1],
  { label: "Kaynaklar", href: "/people", icon: Boxes },
  factoryNavigation[2].items[1],
  { label: "Fabrika", href: "/infrastructure", icon: Factory },
];
