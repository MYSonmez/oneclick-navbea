import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Boxes,
  ChevronRight,
  Clock3,
  Factory,
  Forklift,
  Layers3,
  MapPin,
  RadioTower,
  Search,
  ShieldAlert,
  Signal,
  Sparkles,
  UsersRound,
  Wifi,
} from "lucide-react";

type State = "live" | "delayed" | "offline" | "risk";

const stateStyle: Record<State, { dot: string; text: string; bg: string }> = {
  live: { dot: "bg-[#28b88b]", text: "text-[#168564]", bg: "bg-[#eaf8f3]" },
  delayed: { dot: "bg-[#e5a03b]", text: "text-[#a96b18]", bg: "bg-[#fff6e8]" },
  offline: { dot: "bg-[#8792a2]", text: "text-[#667488]", bg: "bg-[#f1f3f6]" },
  risk: { dot: "bg-[#e84a62]", text: "text-[#d63f56]", bg: "bg-[#fff0f2]" },
};

export function LiveOperations() {
  return (
    <div className="oc-live-workbench">
      <header className="oc-live-toolbar">
        <div className="min-w-0"><h1>Canlı Operasyon</h1></div>
        <div className="oc-live-scope"><Factory className="size-3.5 text-[#3272d2]" /><span><small>KAPSAM</small><strong>Ana Kampüs · Tüm alanlar</strong></span><ChevronRight className="ml-auto size-3.5 text-[#8793a3]" /></div>
        <div className="oc-live-freshness"><span className="size-2 rounded-full bg-[#2abb8e]" /><span><small>SON PAKET</small><strong>8 sn · %98,7 güven</strong></span></div>
      </header>

      <div className="oc-live-body">
        <aside className="oc-live-layers">
          <div className="oc-live-side-head"><Layers3 className="size-4" /><span><strong>Katmanlar</strong><small>4 / 7 görünür</small></span></div>
          <div className="space-y-1.5 p-2"><Layer icon={UsersRound} label="İnsanlar" count="1.842" active /><Layer icon={Boxes} label="Varlıklar" count="4.662" active /><Layer icon={Forklift} label="Araçlar" count="84" active /><Layer icon={ShieldAlert} label="Olaylar" count="7" active risk /><Layer icon={RadioTower} label="Gateway" count="216" /><Layer icon={Signal} label="Kapsama" count="%96" /><Layer icon={Activity} label="Sensörler" count="1.248" /></div>
          <div className="mt-auto border-t border-[#e2e7ed] p-3"><span className="oc-eyebrow">VERİ DURUMU</span><div className="mt-3 space-y-2"><Health label="Canlı" value="6.483" state="live" /><Health label="Gecikmeli" value="21" state="delayed" /><Health label="Çevrimdışı" value="8" state="offline" /></div></div>
        </aside>

        <section className="oc-live-map">
          <Image src="/assets/home/factory-campus-v1.png" alt="Kocaeli fabrikasının mekânsal canlı operasyon görünümü" fill priority sizes="(min-width:1280px) 70vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,9,18,.18),rgba(2,9,18,.48)),linear-gradient(90deg,rgba(2,9,18,.28),transparent_35%,rgba(2,9,18,.14))]" /><div className="oc-shell-grid absolute inset-0 opacity-15" />
          <div className="oc-live-map-search"><Search className="size-4 text-[#3475d5]" /><span>Kişi, varlık, bölge veya gateway ara…</span><small>⌘ K</small></div>
          <div className="oc-live-map-mode"><span className="bg-white text-[#1f66ce]">SAHNE</span><span>LİSTE</span></div>
          <MapNode className="left-[49%] top-[40%]" title="P-203" meta="Montaj A · risk" state="risk" selected />
          <MapNode className="left-[24%] top-[62%]" title="F-18" meta="Lojistik · canlı" state="live" />
          <MapNode className="right-[17%] top-[53%]" title="GW-UT-007" meta="38 sn gecikmeli" state="delayed" />
          <div className="oc-live-map-scale"><MapPin className="size-3.5" />Ana Kampüs · 1:2.500</div>
          <div className="oc-live-map-health"><MapHealth icon={Wifi} label="Bağlantı" value="%99,1" /><MapHealth icon={RadioTower} label="Gateway" value="214 / 216" /><MapHealth icon={Clock3} label="p95 gecikme" value="8 sn" /></div>
        </section>

        <aside className="oc-live-detail">
          <div className="oc-live-detail-head"><div className="flex items-center gap-2"><span className="grid size-9 place-items-center rounded-[10px] bg-[#fff0f2] text-[#d84258]"><Activity className="size-4" /></span><span><small>SEÇİLİ VARLIK</small><strong>Pompa P-203</strong></span></div><span className="rounded-full bg-[#fff0f2] px-2 py-1 text-[7px] font-bold text-[#d84258]">RİSK</span></div>
          <div className="oc-live-facts grid grid-cols-2 gap-2"><DetailFact label="Konum" value="Montaj A · Hat 3" /><DetailFact label="Son görülme" value="4 sn önce" /><DetailFact label="Gateway" value="GW-MA-014" /><DetailFact label="Konum güveni" value="%97,8" /></div>
          <div className="oc-live-telemetry"><div className="flex items-center justify-between"><h2>Telemetri</h2><span>09:24:08</span></div><div className="grid grid-cols-3 gap-2"><Telemetry label="Titreşim" value="8,4" unit="mm/s" state="risk" /><Telemetry label="Sıcaklık" value="74" unit="°C" state="delayed" /><Telemetry label="Basınç" value="4,2" unit="bar" state="live" /></div></div>
          <div className="oc-live-event-panel"><div className="oc-live-event-head"><h2>Olay geçmişi</h2><span>Son 60 dakika</span></div><div className="oc-live-event-list"><Event time="09:24" title="Kritik titreşim eşiği" meta="TR-14 · 3 ölçüm" state="risk" /><Event time="09:19" title="Sıcaklık artışı" meta="+8 °C / 15 dk" state="delayed" /><Event time="08:56" title="Bakım kontrolü kapandı" meta="Bakım Ekibi 1" state="live" /></div><div className="oc-live-ai-note"><Sparkles className="size-4" /><p>Titreşim artışı geciken rulman bakımıyla örtüşüyor.</p><strong>%96</strong></div></div>
        </aside>
      </div>

      <div className="oc-live-lower">
        <section className="oc-live-register">
          <header><div><span className="oc-eyebrow">SENKRONİZE KAYIT</span><h2>Görünür alandaki nesneler</h2></div><div className="flex gap-1"><RegisterTab label="Tümü 6.512" active /><RegisterTab label="Gecikmeli 21" /><RegisterTab label="Çevrimdışı 8" /></div></header>
          <div className="oc-live-register-grid oc-live-register-labels"><span>NESNE</span><span>TÜR</span><span>SON KONUM</span><span>KAYNAK</span><span>SON VERİ</span><span>DURUM</span></div>
          <RegisterRow icon={Activity} name="Pompa P-203" type="Ekipman" location="Montaj A · Hat 3" source="GW-MA-014" freshness="4 sn" state="risk" label="Risk" />
          <RegisterRow icon={Forklift} name="Forklift F-18" type="Araç" location="Lojistik · Koridor B" source="GW-LG-021" freshness="6 sn" state="live" label="Canlı" />
          <RegisterRow icon={RadioTower} name="GW-UT-007" type="Gateway" location="Utilities" source="Ethernet" freshness="38 sn" state="delayed" label="Gecikmeli" />
        </section>
        <aside className="oc-live-analytics">
          <header><div><span className="oc-eyebrow">CANLI ANALİTİK</span><h2>Operasyon dengede mi?</h2></div><span>Son 60 dk · 09:24</span></header>
          <div className="grid min-h-0 flex-1 md:grid-cols-3">
            <div className="border-r border-[#e7ebf0] p-5"><div className="flex items-end justify-between"><span><small>Olay hızı nasıl değişiyor?</small><strong>7 açık</strong></span><span className="text-[9px] font-semibold text-[#d84258]">+2 / saat</span></div><EventRateChart /></div>
            <div className="border-r border-[#e7ebf0] p-5"><div className="flex items-end justify-between"><span><small>Hangi alan daha fazla yük taşıyor?</small><strong>Alan yükü</strong></span><span className="text-[9px] font-semibold text-[#168564]">%91 SLA</span></div><div className="mt-5 space-y-3"><LiveBar label="Montaj" value="82%" tone="red" /><LiveBar label="Lojistik" value="64%" tone="amber" /><LiveBar label="Utilities" value="42%" tone="blue" /></div></div>
            <div className="p-5"><div className="flex items-end justify-between"><span><small>Canlı veriye güvenebilir miyiz?</small><strong>%98,7</strong></span><span className="text-[9px] font-semibold text-[#168564]">Yüksek</span></div><div className="mt-5 grid grid-cols-[92px_1fr] items-center gap-5"><div className="grid size-[88px] place-items-center rounded-full" style={{background:"conic-gradient(#20a77e 0 92%, #e4a03d 92% 98%, #e8ecf1 98% 100%)"}}><span className="grid size-[66px] place-items-center rounded-full bg-white text-center"><span><strong className="text-[15px]">6.483</strong><small className="mt-0.5">canlı kaynak</small></span></span></div><div className="space-y-3"><Health label="Canlı" value="6.483" state="live" /><Health label="Gecikmeli" value="21" state="delayed" /><Health label="Çevrimdışı" value="8" state="offline" /></div></div></div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Layer({ icon: Icon, label, count, active, risk }: { icon: LucideIcon; label: string; count: string; active?: boolean; risk?: boolean }) { return <div className={`flex items-center gap-2.5 rounded-[9px] px-2.5 py-2 ${active ? "bg-[#eef4fd] text-[#286bcf]" : "text-[#657488]"}`}><span className={`grid size-7 place-items-center rounded-[8px] ${active ? "bg-white shadow-sm" : "bg-[#f2f4f7]"}`}><Icon className="size-3.5" /></span><span className="min-w-0 flex-1 text-[8px] font-semibold">{label}</span><span className={`text-[7px] ${risk ? "font-bold text-[#d84258]" : "text-[#8792a2]"}`}>{count}</span></div>; }
function Health({ label, value, state }: { label: string; value: string; state: State }) { return <div className="flex items-center gap-2 text-[8px]"><span className={`size-1.5 rounded-full ${stateStyle[state].dot}`} /><span className="flex-1 text-[#708095]">{label}</span><strong>{value}</strong></div>; }
function MapNode({ className, title, meta, state, selected }: { className: string; title: string; meta: string; state: State; selected?: boolean }) { const color=state==="risk"?"#ef4a62":state==="delayed"?"#e9a13d":"#25b789"; return <div className={`absolute z-[2] ${className}`}><span className="block size-3.5 rounded-full border-2 border-white" style={{backgroundColor:color,boxShadow:`0 0 0 ${selected?10:7}px ${color}30`}} /><div className={`absolute bottom-6 left-1/2 min-w-36 -translate-x-1/2 rounded-[10px] border px-3 py-2.5 text-white ${selected ? "border-[#ef6a7d] bg-[#1b111a]/95" : "border-white/20 bg-[#07111e]/92"}`}><strong className="block text-[10px]">{title}</strong><small className="mt-1.5 block text-[8px]" style={{color}}>{meta}</small></div></div>; }
function MapHealth({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) { return <div className="flex items-center gap-2.5 border-r border-white/10 px-4 last:border-r-0"><Icon className="size-4 text-[#75a9ec]" /><span><small className="block text-[8px] text-[#7f91a7]">{label}</small><strong className="mt-1 block text-[10px]">{value}</strong></span></div>; }
function DetailFact({ label, value }: { label: string; value: string }) { return <div className="rounded-[10px] bg-[#f7f9fc] p-3"><small className="block text-[9px] text-[#8993a2]">{label}</small><strong className="mt-1.5 block truncate text-[10px]">{value}</strong></div>; }
function Telemetry({ label, value, unit, state }: { label: string; value: string; unit: string; state: State }) { const stroke=state==="risk"?"#e44960":state==="delayed"?"#e4a03d":"#20a77e"; return <div className={`rounded-[10px] p-3 ${stateStyle[state].bg}`}><small className="block text-[9px] text-[#7d8999]">{label}</small><div className="flex items-end justify-between gap-1"><strong className={`mt-1.5 block text-[16px] ${stateStyle[state].text}`}>{value}<span className="ml-0.5 text-[8px] font-medium">{unit}</span></strong><svg viewBox="0 0 42 18" className="h-5 w-10"><path d={state==="risk"?"M1 15 L8 13 L14 14 L20 9 L26 11 L32 4 L41 2":state==="delayed"?"M1 12 L8 10 L14 11 L20 7 L26 8 L32 6 L41 7":"M1 11 L8 9 L14 10 L20 8 L26 9 L32 7 L41 8"} fill="none" stroke={stroke} strokeWidth="2" /></svg></div></div>; }
function Event({ time, title, meta, state }: { time: string; title: string; meta: string; state: State }) { return <div className="oc-live-event"><span className={`oc-live-event-icon ${stateStyle[state].bg} ${stateStyle[state].text}`}><Activity className="size-3.5" /></span><span className="min-w-0 flex-1"><strong>{title}</strong><small>{meta}</small></span><time>{time}</time></div>; }
function RegisterTab({ label, active }: { label: string; active?: boolean }) { return <span className={`rounded-[7px] px-2.5 py-1.5 text-[7px] font-semibold ${active ? "bg-[#eaf2ff] text-[#286cd2]" : "text-[#7d899a]"}`}>{label}</span>; }
function RegisterRow({ icon: Icon, name, type, location, source, freshness, state, label }: { icon: LucideIcon; name: string; type: string; location: string; source: string; freshness: string; state: State; label: string }) { return <div className="oc-live-register-grid border-t border-[#e8ecf1]"><span className="flex items-center gap-2"><span className={`grid size-7 place-items-center rounded-[8px] ${stateStyle[state].bg} ${stateStyle[state].text}`}><Icon className="size-3.5" /></span><strong>{name}</strong></span><span>{type}</span><span>{location}</span><span>{source}</span><span>{freshness}</span><span className={`flex items-center gap-1.5 font-semibold ${stateStyle[state].text}`}><span className={`size-1.5 rounded-full ${stateStyle[state].dot}`} />{label}</span></div>; }
function EventRateChart() { return <svg viewBox="0 0 210 64" role="img" aria-label="Son altmış dakikadaki canlı olay hızı" className="mt-2 h-[62px] w-full"><defs><linearGradient id="liveEventArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#e44960" stopOpacity=".2"/><stop offset="1" stopColor="#e44960" stopOpacity="0"/></linearGradient></defs><line x1="2" x2="208" y1="52" y2="52" stroke="#e6eaf0"/><path d="M2 47 C24 46 31 40 52 42 S82 33 104 35 S139 22 158 27 S188 12 208 15 L208 55 L2 55Z" fill="url(#liveEventArea)"/><path d="M2 47 C24 46 31 40 52 42 S82 33 104 35 S139 22 158 27 S188 12 208 15" fill="none" stroke="#e44960" strokeWidth="2.5"/><circle cx="208" cy="15" r="3" fill="#e44960"/><text x="2" y="63" fill="#8a95a4" fontSize="6">-60 dk</text><text x="208" y="63" fill="#8a95a4" fontSize="6" textAnchor="end">Şimdi</text></svg>; }
function LiveBar({ label, value, tone }: { label: string; value: string; tone: "red" | "amber" | "blue" }) { const color=tone==="red"?"bg-[#e44960]":tone==="amber"?"bg-[#e4a03d]":"bg-[#3478db]"; return <div><div className="flex justify-between text-[7px]"><span className="text-[#748195]">{label}</span><strong>{value}</strong></div><div className="mt-1 h-1 rounded-full bg-[#edf1f5]"><span className={`block h-full rounded-full ${color}`} style={{width:value}} /></div></div>; }
