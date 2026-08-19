import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  Bell,
  ChevronDown,
  Factory,
  Search,
  Sparkles,
  Wifi,
} from "lucide-react";
import {
  factoryNavigation,
  mobileNavigation,
  platformNavigation,
  type NavigationItem,
} from "@/config/navigation";

type AppShellProps = {
  children: ReactNode;
  activeHref: string;
};

function NavItem({ item, activeHref }: { item: NavigationItem; activeHref: string }) {
  const Icon = item.icon;
  const active = item.exact
    ? activeHref === item.href
    : activeHref === item.href || activeHref.startsWith(`${item.href}/`);
  const nestedVisible = !item.nested || (
    item.href.startsWith("/work/")
      ? activeHref.startsWith("/work")
      : activeHref.startsWith("/solutions")
  );

  return (
    <li className={item.nested ? nestedVisible ? "hidden group-hover:block group-focus-within:block" : "hidden" : undefined}>
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        title={item.label}
        className={`relative flex ${item.nested ? "ml-[44px] h-7 w-[188px]" : "h-10 w-[56px] group-hover:w-[236px] group-focus-within:w-[236px]"} items-center rounded-[10px] outline-none transition-[width,color,background-color] focus-visible:ring-2 focus-visible:ring-[#76aaff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#081625] ${
          active
            ? "bg-white/[.105] text-white"
            : "text-[#8fa0b2] hover:bg-white/[.055] hover:text-white"
        }`}
      >
        {active && <span className="absolute left-0 h-5 w-[3px] rounded-r-full bg-[#3b82f6]" />}
        <span className={`grid h-full shrink-0 place-items-center ${item.nested ? "w-8" : "w-[54px]"}`}>
          <Icon className={item.nested ? "size-[13px]" : "size-[18px]"} strokeWidth={1.75} />
        </span>
        <span className={`min-w-0 flex-1 truncate pr-2 font-medium opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100 ${item.nested ? "text-[10px]" : "text-[12px]"}`}>
          {item.label}
        </span>
        {item.status && (
          <span className={`mr-3 rounded-full px-2 py-1 text-[8px] font-semibold opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 ${item.status === "CANLI" ? "bg-[#133e35] text-[#61d6b2]" : "bg-white/[.075] text-[#aab8c8]"}`}>
            {item.status}
          </span>
        )}
      </Link>
    </li>
  );
}

export function AppShell({ children, activeHref }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#f2f5f8] text-[#101828]">
      <aside className="group fixed inset-y-0 left-0 z-50 hidden w-[76px] overflow-hidden border-r border-white/[.06] bg-[#081625] text-white shadow-[16px_0_48px_rgba(4,15,28,.08)] transition-[width] duration-300 ease-out hover:w-[260px] focus-within:w-[260px] lg:flex lg:flex-col">
        <Link
          href="/"
          aria-label="OneClick Komuta Merkezi"
          className="flex h-[66px] w-[260px] shrink-0 items-center gap-3 px-[18px] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#76aaff]"
        >
          <span className="relative size-10 shrink-0">
            <Image src="/brand/navbea-icon-dark.svg" alt="" fill priority className="object-contain" sizes="40px" />
          </span>
          <span className="min-w-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100">
            <span className="block text-[14px] font-semibold tracking-[0.19em]">NAVBEA</span>
            <span className="mt-0.5 block text-[11px] font-medium text-[#68a9ff]">OneClick · Factory</span>
          </span>
        </Link>

        <nav className="oc-hide-scrollbar flex min-h-0 flex-1 flex-col overflow-y-auto px-[10px] pb-2" aria-label="Fabrika çalışma alanı">
          {factoryNavigation.map((group, groupIndex) => (
            <div key={group.label} className={groupIndex ? "mt-2 border-t border-white/[.055] pt-2" : ""}>
              <p className="flex h-6 w-[236px] items-center px-3 text-[8px] font-semibold tracking-[0.17em] text-[#64768a] opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                {group.label}
              </p>
              <ul className="space-y-0.5">
                {group.items.map((item) => <NavItem key={item.href} item={item} activeHref={activeHref} />)}
              </ul>
            </div>
          ))}

          <div className="mt-auto">
            <p className="mb-1 flex h-7 w-[236px] items-end border-t border-white/[.07] px-3 text-[8px] font-semibold tracking-[0.17em] text-[#64768a] opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
              {platformNavigation.label}
            </p>
            <ul className="mt-2 space-y-0.5">
              {platformNavigation.items.map((item) => <NavItem key={item.href} item={item} activeHref={activeHref} />)}
            </ul>
          </div>
        </nav>

        <div className="w-[260px] px-[10px] pb-3">
          <div className="flex h-[50px] items-center rounded-[12px] border border-white/[.06] bg-white/[.035]">
            <span className="ml-[9px] grid size-9 shrink-0 place-items-center rounded-[10px] bg-gradient-to-br from-[#2c7df0] to-[#153965] text-[10px] font-bold">YS</span>
            <span className="ml-3 min-w-0 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
              <span className="block truncate text-[11px] font-semibold">Yusuf Sönmez</span>
              <span className="mt-0.5 block truncate text-[9px] text-[#708196]">Operasyon yöneticisi</span>
            </span>
          </div>
        </div>
      </aside>

      <header className="fixed inset-x-0 top-0 z-40 h-[58px] border-b border-[#dde3ea] bg-white/95 backdrop-blur-xl lg:left-[76px]">
        <div className="flex h-full items-center gap-3 px-3 sm:px-4 xl:px-5">
          <div className="flex min-w-0 items-center gap-2.5 lg:min-w-[250px]">
            <span className="grid size-8 place-items-center rounded-[9px] bg-[#edf4ff] text-[#246dd8]"><Factory className="size-4" /></span>
            <span className="min-w-0">
              <span className="block text-[9px] font-semibold tracking-[0.1em] text-[#7e8a9a]">KOCAELİ · ÜRETİM</span>
              <span className="mt-0.5 flex items-center gap-1 text-[11px] font-semibold text-[#263448]">Ana Kampüs <ChevronDown className="size-3 text-[#8794a5]" /></span>
            </span>
            <span className="ml-1 hidden items-center gap-1.5 rounded-full bg-[#eaf8f3] px-2.5 py-1.5 text-[9px] font-semibold text-[#168765] 2xl:flex"><span className="size-1.5 rounded-full bg-[#20a77e]" /> Vardiya canlı</span>
          </div>

          <div className="mx-auto hidden h-9 w-full max-w-[650px] items-center gap-2.5 rounded-[10px] border border-[#dfe5ec] bg-[#f8fafc] px-3.5 text-[#7f8b9b] shadow-[inset_0_1px_0_white] md:flex">
            <Search className="size-4 text-[#3b75cf]" />
            <span className="min-w-0 flex-1 truncate text-[11px]">Ara, sayfaya git veya OneClick&apos;a sor...</span>
            <span className="hidden items-center gap-1 rounded-[6px] bg-[#edf4ff] px-2 py-1 text-[8px] font-semibold text-[#2c6fd5] xl:flex"><Sparkles className="size-3" /> AI</span>
            <span className="rounded-[6px] border border-[#e0e5eb] bg-white px-1.5 py-1 text-[8px] font-semibold text-[#8c97a6]">⌘ K</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="hidden h-9 items-center gap-2 rounded-[10px] border border-[#dfe5ec] bg-white px-3 text-[9px] font-semibold text-[#47566b] xl:flex"><Wifi className="size-3.5 text-[#15916c]" /> Veri güveni %98,7</span>
            <span className="relative grid size-9 place-items-center rounded-[10px] text-[#5f6d7e]"><Bell className="size-[17px]" /><span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-[#e9435b] ring-2 ring-white" /></span>
            <span className="grid size-8 place-items-center rounded-full bg-[#1668df] text-[9px] font-bold text-white">YS</span>
          </div>
        </div>
      </header>

      <main className="min-h-screen pb-[66px] pt-[58px] lg:pb-0 lg:pl-[76px]" id="main-content">{children}</main>

      <nav className="oc-hide-scrollbar fixed inset-x-0 bottom-0 z-50 flex h-[62px] items-center gap-1 overflow-x-auto border-t border-[#dbe2ea] bg-white/96 px-2 backdrop-blur-xl lg:hidden" aria-label="Mobil fabrika navigasyonu">
        {mobileNavigation.map((item) => {
          const Icon = item.icon;
          const active = item.exact ? activeHref === item.href : activeHref === item.href || activeHref.startsWith(`${item.href}/`);
          return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`flex h-12 min-w-[70px] flex-col items-center justify-center gap-1 rounded-[10px] text-[9px] font-medium ${active ? "bg-[#edf4ff] text-[#226bd5]" : "text-[#6f7d90]"}`}><Icon className="size-4"/><span className="max-w-[66px] truncate">{item.label}</span></Link>;
        })}
      </nav>
    </div>
  );
}
