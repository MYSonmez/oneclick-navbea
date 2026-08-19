import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Boxes,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  ClipboardList,
  Clock3,
  Factory,
  Forklift,
  Gauge,
  Layers3,
  MessageSquareText,
  PackageCheck,
  RadioTower,
  Search,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Wrench,
  Zap,
} from "lucide-react";

type Tone = "blue" | "green" | "amber" | "red" | "violet";

const toneClasses: Record<Tone, string> = {
  blue: "bg-[#eaf2ff] text-[#246cd8]",
  green: "bg-[#e8f7f1] text-[#168564]",
  amber: "bg-[#fff5e5] text-[#b37119]",
  red: "bg-[#fff0f2] text-[#d64158]",
  violet: "bg-[#f1edff] text-[#6d4bd5]",
};

function PageHeading({ eyebrow, title, description, status }: { eyebrow: string; title: string; description: string; status: string }) {
  return (
    <header className="oc-page-heading">
      <div className="min-w-0">
        <p className="oc-eyebrow">{eyebrow}</p>
        <div className="mt-1 flex min-w-0 items-baseline gap-3">
          <h1>{title}</h1>
          <p className="hidden truncate text-[10px] text-[#748196] md:block">{description}</p>
        </div>
      </div>
      <span className="oc-status-pill"><span className="size-1.5 rounded-full bg-[#21a77d]" />{status}</span>
    </header>
  );
}

function MiniMetric({ icon: Icon, label, value, note, tone = "blue" }: { icon: LucideIcon; label: string; value: string; note: string; tone?: Tone }) {
  return (
    <div className="oc-mini-metric">
      <span className={`grid size-8 shrink-0 place-items-center rounded-[9px] ${toneClasses[tone]}`}><Icon className="size-4" /></span>
      <span className="min-w-0 flex-1"><small>{label}</small><strong>{value}</strong></span>
      <span className="hidden text-right text-[8px] leading-3 text-[#7a8798] 2xl:block">{note}</span>
    </div>
  );
}

function InsightTrust({ confidence = "%92 · yüksek", source }: { confidence?: string; source: string }) {
  return (
    <div className="mt-3 grid grid-cols-[1fr_auto] gap-3 border-t border-[#e6eaf0] pt-3 text-[8px]">
      <span className="truncate text-[#7c8898]">Kaynak: {source}</span>
      <strong className="text-[#168564]">{confidence}</strong>
    </div>
  );
}

export function PersonalHomeWorkspace() {
  return (
    <div className="oc-page oc-page-fit">
      <PageHeading eyebrow="ANA SAYFA · 19 AĞUSTOS · GÜNDÜZ VARDİYASI" title="Günaydın, Yusuf Sönmez" description="Kararınız gereken işler ve vardiyanın kısa özeti." status="08:00–16:00 · CANLI" />

      <div className="grid grid-cols-2 gap-2 lg:grid-cols-5">
        <MiniMetric icon={ClipboardCheck} label="Bana atanan" value="6 iş" note="2 yüksek öncelik" tone="blue" />
        <MiniMetric icon={ShieldCheck} label="Bekleyen karar" value="3 onay" note="En yakını 6 dk" tone="amber" />
        <MiniMetric icon={AlertTriangle} label="Kritik olay" value="2 açık" note="1’i bana atanmış" tone="red" />
        <MiniMetric icon={Sparkles} label="Otomatik çözülen" value="142" note="18 istisna kaldı" tone="violet" />
        <MiniMetric icon={Gauge} label="Vardiya uyumu" value="%94" note="Hedefin 2 puan üstü" tone="green" />
      </div>

      <div className="oc-home-grid">
        <section className="oc-panel min-h-0 overflow-hidden">
          <div className="oc-panel-head"><div><span className="oc-eyebrow">BUGÜN · ÖNCELİK SIRASI</span><h2>Karar masanız</h2></div><span className="oc-count">6 AÇIK · 2 KRİTİK</span></div>
          <div className="grid min-h-0 flex-1 md:grid-cols-[1.1fr_.9fr]">
            <div className="flex min-h-0 flex-col border-r border-[#e7ebf0] p-3">
              <div className="rounded-[13px] border border-[#efc4cc] bg-[linear-gradient(135deg,#fff8f9,#fff3f5)] p-3 shadow-[0_7px_22px_rgba(191,49,73,.055)]">
                <div className="flex items-start gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-[10px] bg-[#ffe8ec] text-[#d73f57]"><AlertTriangle className="size-4" /></span><div className="min-w-0"><span className="text-[8px] font-bold tracking-[.08em] text-[#d73f57]">KRİTİK · 8 DK KALDI</span><h3 className="mt-1 text-[13px] font-semibold">P-203 titreşim olayını yönlendirin</h3><p className="mt-1 text-[9px] leading-4 text-[#778397]">Montaj A · Bakım Ekibi 2 uygun görünüyor.</p></div></div>
              </div>
              <div className="mt-2 divide-y divide-[#edf0f4]">
                <HomeTask icon={ClipboardCheck} title="Utilities kesinti onayı" meta="Karar bekliyor · 10:00" tone="amber" />
                <HomeTask icon={Clock3} title="17 Ağustos süre eşleştirme" meta="18 kayıt inceleme istiyor" tone="blue" />
                <HomeTask icon={Forklift} title="Forklift F-18 rota kontrolü" meta="Lojistik Koridor B" tone="green" />
              </div>
              <div className="oc-home-tall mt-3 rounded-[11px] border border-[#e2e7ed] bg-[#f8fafc] p-3"><div className="flex items-center justify-between"><span className="oc-eyebrow">VARDİYA AKIŞI</span><span className="text-[8px] text-[#8290a1]">Şimdi · 09:24</span></div><div className="mt-3 grid grid-cols-3 gap-2"><ShiftMoment time="10:00" title="Kesinti kararı" tone="amber"/><ShiftMoment time="10:15" title="Bakım penceresi" tone="blue"/><ShiftMoment time="15:45" title="Vardiya devri" tone="green"/></div></div>
              <div className="mt-auto flex items-center gap-3 border-t border-[#e8ecf1] pt-2.5"><span className="oc-eyebrow">SONRAKİ</span><span className="text-[8px] font-medium text-[#506077]">10:15 bakım penceresi</span><span className="ml-auto text-[8px] text-[#8591a1]">Bakım 2 hazır</span></div>
            </div>
            <div className="flex min-h-0 flex-col bg-[#fafbfd] p-3">
              <div className="flex items-center justify-between"><h3 className="text-[10px] font-semibold">Çalışma alanım</h3><span className="text-[8px] text-[#7d8999]">Sabitlenenler</span></div>
              <div className="mt-2 grid gap-2">
                <Pinned title="Süre Eşleştirme" meta="18 inceleme" icon={Clock3} />
                <Pinned title="Aktif Olaylar" meta="2 kritik" icon={ShieldCheck} />
                <Pinned title="Varlıklar" meta="18 belirsiz konum" icon={Boxes} />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-[#e5e9ef] pt-3"><CompactFact label="Vardiya devri" value="15:45" note="6 not" /><CompactFact label="Ekip kapasitesi" value="%86" note="2 ekip uygun" /></div>
              <div className="oc-home-tall mt-3 border-t border-[#e5e9ef] pt-3"><div className="flex items-center justify-between"><span className="oc-eyebrow">SON AKTİVİTE</span><span className="text-[8px] text-[#8490a1]">Canlı</span></div><div className="mt-2 space-y-2"><RecentLine time="09:19" title="Yakınlık olayı doğrulandı" meta="Lojistik B"/><RecentLine time="09:08" title="GW-UT-007 gecikmeye geçti" meta="Utilities"/><RecentLine time="08:56" title="Kuzey Hat bakım turu kapandı" meta="Bakım 1"/></div></div>
              <div className="mt-auto flex items-center justify-between pt-2"><span className="text-[8px] text-[#8390a1]">Son açılan: İçgörüler · Vardiya</span><span className="text-[8px] font-semibold text-[#3270d0]">8 dk</span></div>
            </div>
          </div>
        </section>

        <aside className="oc-ai-panel">
          <div className="flex items-center justify-between"><span className="flex items-center gap-2 text-[10px] font-semibold"><Sparkles className="size-4 text-[#78adff]" /> Vardiya brifi</span><span className="rounded-full bg-white/[.06] px-2 py-1 text-[8px] text-[#8294a9]">09:24 · güncel</span></div>
          <h2 className="mt-3 text-[17px] font-semibold leading-6">Önce P-203 olayını yönlendirin.</h2>
          <p className="mt-2 text-[9px] leading-4 text-[#91a2b6]">Diğer iki konu üretimi durdurmadan vardiya içinde tamamlanabilir.</p>
          <div className="mt-3 space-y-2">
            <AiLine number="01" title="Bakımı 10:15 penceresine alın" meta="ÖNERİ · Tahmini kayıp 3,2 saat azalır" />
            <AiLine number="02" title="18 zaman kaydını gözden geçirin" meta="DOĞRULANMIŞ · 142 kayıt otomatik eşleşti" />
            <AiLine number="03" title="GW-UT-007 sinyalini doğrulayın" meta="ÇIKARIM · Utilities verisi 38 sn gecikmeli" />
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2.5 text-[8px]"><span className="text-[#7e90a6]">Kaynak: olaylar · görevler · vardiya planı</span><strong className="text-[#62cca8]">%92 güven</strong></div>
          <div className="mt-auto rounded-[11px] border border-white/10 bg-white/[.055] p-2.5"><div className="flex items-center gap-2 text-[9px] text-[#9cacc0]"><MessageSquareText className="size-4 text-[#79adf5]" /> Vardiyayla ilgili bir şey sorun…</div><div className="mt-1.5 flex items-center justify-between text-[8px]"><span className="text-[#74869c]">Kocaeli · Gündüz vardiyası</span><ArrowRight className="size-3.5 text-[#7eaef1]" /></div></div>
        </aside>
      </div>

      <section className="grid min-h-[96px] grid-cols-[minmax(0,1.35fr)_minmax(300px,.65fr)] gap-2">
        <div className="oc-panel grid overflow-hidden" style={{gridTemplateColumns:"150px repeat(3,minmax(0,1fr))"}}><div className="flex flex-col justify-center border-r border-[#e5e9ef] px-3"><span className="oc-eyebrow">AKTİF ÇÖZÜMLER</span><strong className="mt-1.5 text-[11px]">Portföy sağlığı</strong><small className="mt-1 text-[8px] text-[#8390a1]">3 çözüm · 1 pilot</small></div><SolutionPulse title="İş Gücü Güvenliği" value="%98,9" note="Görünürlük" tone="green" /><SolutionPulse title="Varlık Performansı" value="%72" note="Kullanım" tone="blue" /><SolutionPulse title="Enerji Optimizasyonu" value="-8,4%" note="Baz döneme göre" tone="amber" /></div>
        <div className="relative overflow-hidden rounded-[14px] border border-[#183450] bg-[#081727] text-white shadow-[0_8px_24px_rgba(9,26,45,.1)]"><Image src="/assets/home/factory-campus-v1.png" alt="Kocaeli kampüsü canlı görünüm özeti" fill sizes="420px" className="object-cover opacity-45" /><div className="absolute inset-0 bg-gradient-to-r from-[#071525] via-[#071525]/75 to-transparent"/><div className="relative flex h-full items-center gap-3 px-4"><span className="grid size-9 place-items-center rounded-[10px] bg-[#176bdd] text-white"><Activity className="size-4"/></span><span className="min-w-0 flex-1"><span className="flex items-center gap-1.5 text-[8px] font-semibold text-[#69d0ad]"><span className="size-1.5 rounded-full bg-[#28b98d]"/> CANLI SAHA</span><strong className="mt-1 block text-[11px]">18 hat · 4.662 varlık</strong><small className="mt-1 block text-[8px] text-[#91a2b6]">2 kritik olay · veri güveni %98,7</small></span><ChevronRight className="size-4 text-[#8ea4bd]"/></div></div>
      </section>
    </div>
  );
}

export function CommandCenterWorkspace() {
  return (
    <div className="oc-page oc-page-fit">
      <PageHeading eyebrow="KOMUTA MERKEZİ · KOCAELİ ÜRETİM" title="Operasyon komuta merkezi" description="Tesis genelinde durum, risk ve müdahale koordinasyonu." status="CANLI · 09:24" />
      <div className="grid grid-cols-3 gap-2 xl:grid-cols-6">
        <MiniMetric icon={UsersRound} label="Sahada personel" value="1.842" note="24 ziyaretçi" />
        <MiniMetric icon={Boxes} label="İzlenen varlık" value="4.662" note="%98,6 görünür" tone="green" />
        <MiniMetric icon={Factory} label="Aktif hat" value="18" note="17 üretimde" tone="violet" />
        <MiniMetric icon={Gauge} label="Operasyon skoru" value="87,4" note="+2,1 puan" tone="green" />
        <MiniMetric icon={Wrench} label="Açık iş" value="156" note="18 yeni" tone="amber" />
        <MiniMetric icon={AlertTriangle} label="Kritik olay" value="7" note="2 kritik" tone="red" />
      </div>
      <div className="oc-command-grid">
        <section className="oc-scene-panel">
          <div className="oc-dark-head"><div className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-[8px] bg-[#166cde]"><Activity className="size-3.5" /></span><span><strong>Kampüs operasyon ağı</strong><small>Personel, varlık, güvenlik ve enerji</small></span></div><div className="flex items-center gap-2"><span className="oc-dark-chip"><Layers3 className="size-3" /> 4 katman</span><span className="oc-live-dot">CANLI</span></div></div>
          <div className="relative min-h-0 flex-1 overflow-hidden">
            <Image src="/assets/home/factory-campus-v1.png" alt="Kocaeli fabrikasının canlı operasyon görünümü" fill priority sizes="(min-width:1280px) 75vw, 100vw" className="object-cover" />
            <div className="oc-scene-vignette absolute inset-0" /><div className="oc-shell-grid absolute inset-0 opacity-20" />
            <div className="absolute left-3 top-3 flex gap-1.5"><SceneTag label="Hatlar" active /><SceneTag label="Varlıklar" active /><SceneTag label="İş Gücü" active /><SceneTag label="Güvenlik" /></div>
            <MapPoint className="left-[48%] top-[38%]" tone="red" title="P-203" detail="Titreşim kritik" />
            <MapPoint className="left-[23%] top-[58%]" tone="green" title="Kuzey Hat" detail="Planla uyumlu" />
            <MapPoint className="right-[17%] top-[51%]" tone="amber" title="Utilities" detail="Enerji +%8" />
            <div className="absolute bottom-3 left-3 right-3 grid gap-2 md:grid-cols-[1fr_270px]">
              <div className="rounded-[12px] border border-white/15 bg-[#07111e]/90 p-3 text-white backdrop-blur"><span className="text-[8px] font-semibold tracking-[.1em] text-[#8fa4bf]">DURUM ÖZETİ</span><p className="mt-1.5 text-[12px] font-semibold">Montaj A’da üretim duruşu riski oluşuyor.</p><p className="mt-1 text-[8px] text-[#93a1b3]">P-203 · 3 eşik aşımı · en uygun pencere 10:15</p></div>
              <div className="flex items-center gap-3 rounded-[12px] border border-white/15 bg-[#07111e]/90 p-3 text-white backdrop-blur"><span className="grid size-8 place-items-center rounded-[9px] bg-[#e8435a]/15 text-[#ff6077]"><AlertTriangle className="size-4" /></span><span className="min-w-0 flex-1"><strong className="block text-[9px]">EV-2048 · Kritik</strong><small className="mt-1 block text-[8px] text-[#8998aa]">8 dk SLA</small></span><ChevronRight className="size-3.5 text-[#75869b]" /></div>
            </div>
          </div>
        </section>
        <aside className="oc-panel min-h-0 overflow-hidden">
          <div className="oc-panel-head"><div><span className="flex items-center gap-2 text-[10px] font-semibold"><Sparkles className="size-4 text-[#3472d8]" /> Operasyon brifi</span><p className="mt-1 text-[8px] text-[#8591a2]">Kanıt, öneri ve güven bağlamı</p></div><span className="oc-count">3 konu</span></div>
          <div className="oc-scroll-region p-3">
            <div className="rounded-[12px] border border-[#f2c9d0] bg-[#fff7f8] p-3"><span className="text-[8px] font-bold text-[#d84259]">KRİTİK · KARAR GEREKİYOR</span><h2 className="mt-2 text-[13px] font-semibold">P-203 duruş riski</h2><p className="mt-1.5 text-[9px] leading-4 text-[#6f7c90]">Titreşim artışı, sıcaklık ve geciken bakım kaydıyla örtüşüyor.</p><InsightTrust source="3 sensör · bakım kaydı · son 30 gün" /></div>
            <div className="mt-2 rounded-[12px] border border-[#ecd9b8] bg-[#fffbf4] p-3"><span className="text-[8px] font-bold text-[#ae6c16]">OPTİMİZASYON</span><h3 className="mt-2 text-[11px] font-semibold">Bakım Ekibi 2 · 10:15</h3><p className="mt-1 text-[8px] leading-4 text-[#768397]">Üretim etkisinin en düşük olduğu 20 dakikalık pencere.</p><InsightTrust confidence="%92 güven" source="vardiya + görev + duruş" /></div>
            <div className="mt-3"><h3 className="text-[10px] font-semibold">Vardiya öncelikleri</h3><div className="mt-2 divide-y divide-[#edf0f4]"><HomeTask icon={AlertTriangle} title="P-203 olayını yönlendir" meta="8 dk kaldı" tone="red" /><HomeTask icon={RadioTower} title="GW-UT-007 sinyalini doğrula" meta="38 sn gecikme" tone="amber" /><HomeTask icon={ClipboardCheck} title="Utilities kesintisini onayla" meta="10:00 öncesi" tone="blue" /></div></div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export function SolutionsHubWorkspace() {
  return (
    <div className="oc-page oc-page-fit">
      <PageHeading eyebrow="ONECLICK · ÇÖZÜMLERİM" title="Aktif çözüm portföyü" description="Kurulu çözümler, sağlıkları ve doğrulanmış değerleri." status="3 AKTİF · 1 PİLOT" />
      <div className="grid min-h-0 flex-1 gap-2 xl:grid-cols-[minmax(0,1fr)_320px]">
        <section className="grid min-h-0 gap-2 md:grid-cols-2">
          <PortfolioCard icon={ShieldCheck} title="İş Gücü Güvenliği" status="Sağlıklı" outcome="%98,9" outcomeLabel="personel görünürlüğü" reused="Harita · 128 gateway · 1.842 badge" tone="green" />
          <PortfolioCard icon={Boxes} title="Varlık Performansı" status="Sağlıklı" outcome="%72" outcomeLabel="ortalama kullanım" reused="Harita · 86 gateway · 4.662 tag" tone="blue" />
          <PortfolioCard icon={Zap} title="Enerji Optimizasyonu" status="İnceleme" outcome="-8,4%" outcomeLabel="baz döneme göre" reused="42 sensör · SAP PM" tone="amber" />
          <PortfolioCard icon={Forklift} title="Forklift Yakınlık Güvenliği" status="Pilot" outcome="18" outcomeLabel="korunan kavşak" reused="Altyapının %74’ü hazır" tone="violet" />
        </section>
        <aside className="oc-ai-panel">
          <span className="flex items-center gap-2 text-[10px] font-semibold"><Sparkles className="size-4 text-[#79adf5]" /> Portföy önerisi</span>
          <h2 className="mt-4 text-[18px] font-semibold leading-6">Lojistik alanı bir sonraki çözüm için hazır.</h2>
          <p className="mt-2 text-[9px] leading-4 text-[#91a2b6]">Mevcut gateway ve harita altyapısı forklift güvenliği kapsamının %74’ünü karşılıyor.</p>
          <div className="mt-4 space-y-2"><DarkFact label="Yeniden kullanılabilir" value="16 gateway" /><DarkFact label="Tahmini ek ihtiyaç" value="6–8 anchor" /><DarkFact label="Kurulum tahmini" value="4–6 gün" /><DarkFact label="Tahmin güveni" value="%78" /></div>
          <p className="mt-auto border-t border-white/10 pt-3 text-[8px] leading-4 text-[#778a9f]">Kesin donanım sayısı için saha ölçümü gerekir. AI tahmini mevcut kapsama ve metal yoğunluğuna dayanır.</p>
        </aside>
      </div>
    </div>
  );
}

export function MarketplaceWorkspace() {
  const solutions = [
    { icon: Forklift, title: "Forklift Yakınlık Güvenliği", category: "Güvenlik", result: "Yaya–araç riskini azaltın", readiness: "%74 hazır", hardware: "6–8 anchor", time: "4–6 gün", tone: "blue" as Tone },
    { icon: UsersRound, title: "Yalnız Çalışan Güvenliği", category: "İş gücü", result: "Hareketsizlik ve SOS müdahalesi", readiness: "%91 hazır", hardware: "Badge reuse", time: "2–3 gün", tone: "green" as Tone },
    { icon: PackageCheck, title: "Kritik Varlık Akışı", category: "Operasyon", result: "Arama ve bekleme süresini azaltın", readiness: "%82 hazır", hardware: "128 tag", time: "3–5 gün", tone: "violet" as Tone },
    { icon: Zap, title: "Enerji Anomali İzleme", category: "Enerji", result: "Sapmaları kaynağında yakalayın", readiness: "%68 hazır", hardware: "12 sensör", time: "5–7 gün", tone: "amber" as Tone },
  ];
  return (
    <div className="oc-page oc-page-fit">
      <PageHeading eyebrow="ONECLICK · MARKETPLACE" title="Operasyon probleminizden başlayın" description="Hazır çözümleri sonuç, uygunluk ve altyapı gereksinimiyle değerlendirin." status="24 ÇÖZÜM" />
      <div className="oc-market-toolbar"><div className="flex h-9 min-w-0 flex-1 items-center gap-2 rounded-[9px] border border-[#dce2ea] bg-white px-3 text-[9px] text-[#8290a2]"><Search className="size-4 text-[#2f70d4]" /> Problem, sonuç veya çözüm ara…</div><StaticFilter label="Problem" value="Tümü" /><StaticFilter label="Sektör" value="Üretim" /><StaticFilter label="Hazırlık" value="%60+" /></div>
      <div className="grid min-h-0 flex-1 gap-2 xl:grid-cols-[240px_minmax(0,1fr)_318px]">
        <aside className="oc-panel overflow-hidden"><div className="oc-panel-head"><h2>Sonuca göre keşfet</h2><span className="oc-count">6 alan</span></div><div className="p-2"><MarketCategory icon={ShieldCheck} title="Güvenliği artır" count="8" active /><MarketCategory icon={Gauge} title="Verimliliği yükselt" count="6" /><MarketCategory icon={Clock3} title="Beklemeyi azalt" count="4" /><MarketCategory icon={Zap} title="Enerjiyi optimize et" count="3" /><MarketCategory icon={UsersRound} title="İş gücünü koru" count="3" /></div><div className="mx-3 mt-auto mb-3 rounded-[11px] bg-[#f2f6fb] p-3"><span className="oc-eyebrow">AI İHTİYAÇ ANALİZİ</span><p className="mt-2 text-[9px] font-semibold leading-4">İhtiyacınızı anlatarak özel Solution Plan oluşturun.</p></div></aside>
        <section className="oc-panel min-h-0 overflow-hidden"><div className="oc-panel-head"><div><h2>Fabrikanızla uyumlu çözümler</h2><p className="mt-1 text-[8px] text-[#8490a1]">Mevcut altyapı ve aktif lisanslara göre sıralandı</p></div><span className="oc-count">12 eşleşme</span></div><div className="oc-scroll-region grid gap-2 p-2 md:grid-cols-2">{solutions.map((s) => <MarketCard key={s.title} {...s} />)}</div></section>
        <aside className="oc-ai-panel">
          <div className="flex items-center justify-between"><span className="flex items-center gap-2 text-[10px] font-semibold"><Sparkles className="size-4 text-[#78adff]" /> Solution Engineer</span><span className="rounded-full bg-[#12345c] px-2 py-1 text-[8px] text-[#7fb1f6]">AI</span></div>
          <h2 className="mt-4 text-[17px] font-semibold leading-6">Forklift güvenliği güçlü bir eşleşme.</h2><p className="mt-2 text-[9px] leading-4 text-[#91a2b6]">Son 30 günde Lojistik Koridor B’de 18 yakınlık olayı oluştu. Mevcut altyapının çoğu yeniden kullanılabilir.</p>
          <div className="mt-4 rounded-[12px] border border-white/10 bg-white/[.055] p-3"><span className="text-[8px] font-semibold tracking-[.1em] text-[#7896b9]">ÖNERİLEN PLAN</span><div className="mt-3 space-y-2"><PlanLine label="Yazılım" value="5 capability" /><PlanLine label="Donanım" value="6–8 anchor" /><PlanLine label="Otomasyon" value="3 kural" /><PlanLine label="Entegrasyon" value="SAP PM" /></div></div>
          <InsightTrust confidence="%78 güven" source="olay + harita + gateway" />
          <div className="mt-auto rounded-[12px] border border-white/10 bg-white/[.055] p-3 text-[9px] text-[#9aaabd]">“Koridor B için risk azaltma planı hazırla…”</div>
        </aside>
      </div>
    </div>
  );
}

export function SolutionPlanWorkspace() {
  return (
    <div className="oc-page oc-page-fit">
      <PageHeading eyebrow="ONECLICK · SOLUTION PLAN" title="Forklift Yakınlık Güvenliği" description="Hedeften kuruluma kadar yazılım, altyapı ve değerin ortak planı." status="TASLAK · %78 GÜVEN" />
      <div className="grid grid-cols-5 overflow-hidden rounded-[12px] border border-[#dbe2ea] bg-white">
        {[["01","Hedef",true],["02","Kapsam",true],["03","Altyapı",true],["04","Otomasyon",false],["05","Doğrulama",false]].map(([n,label,done]) => <div key={String(n)} className={`flex items-center gap-2 border-r border-[#e4e8ee] px-3 py-2.5 last:border-r-0 ${done ? "bg-[#f5f9ff]" : ""}`}><span className={`grid size-6 place-items-center rounded-full text-[8px] font-bold ${done ? "bg-[#e7f0ff] text-[#276bd2]" : "bg-[#f1f3f6] text-[#8b95a3]"}`}>{n}</span><strong className="text-[9px]">{label}</strong></div>)}
      </div>
      <div className="grid min-h-0 flex-1 gap-2 xl:grid-cols-[minmax(0,1fr)_320px]">
        <section className="oc-panel min-h-0 overflow-hidden"><div className="oc-panel-head"><div><h2>Plan kapsamı</h2><p className="mt-1 text-[8px] text-[#8490a1]">Kocaeli · Lojistik Binası · Koridor B ve C</p></div><span className="oc-count">v0.4</span></div><div className="oc-scroll-region grid gap-2 p-3 md:grid-cols-2"><PlanBlock icon={ShieldCheck} title="Hedef & başarı" rows={["Yaya–araç yakınlık olaylarını azalt","Müdahale süresi < 2 dakika","90 gün içinde %40 risk azalması"]} /><PlanBlock icon={Boxes} title="Yazılım kapsamı" rows={["Canlı forklift konumu","Geofence ve yakınlık tespiti","Olay, görev ve analitik"]} /><PlanBlock icon={RadioTower} title="Donanım tahmini" rows={["18 mevcut gateway yeniden kullanım","6–8 UWB anchor","84 forklift tag · 312 badge"]} /><PlanBlock icon={ClipboardList} title="Otomasyon & entegrasyon" rows={["3 alarm kuralı · 2 workflow","E-posta + mobil eskalasyon","SAP PM bakım entegrasyonu"]} /><PlanBlock icon={Gauge} title="Dashboard & rapor" rows={["Güvenlik operasyon panosu","Yakınlık Pareto analizi","Haftalık risk raporu"]} /><PlanBlock icon={Clock3} title="Kurulum tahmini" rows={["Saha keşfi: 1 gün","Kurulum: 4–6 gün","Pilot doğrulama: 14 gün"]} /></div></section>
        <aside className="oc-ai-panel"><span className="flex items-center gap-2 text-[10px] font-semibold"><Sparkles className="size-4 text-[#78adff]" /> Plan doğrulaması</span><h2 className="mt-4 text-[17px] font-semibold leading-6">Plan uygulanabilir; kapsama ölçümü gerekiyor.</h2><p className="mt-2 text-[9px] leading-4 text-[#91a2b6]">Metal yoğunluğu anchor tahminindeki en büyük belirsizlik. Kesin siparişten önce saha ölçümü önerilir.</p><div className="mt-4 space-y-2"><DarkFact label="Mevcut altyapı tasarrufu" value="%74" /><DarkFact label="Tahmini kurulum" value="4–6 gün" /><DarkFact label="Tahmini güven" value="%78" /><DarkFact label="İnsan onayı" value="Gerekli" /></div><p className="mt-auto border-t border-white/10 pt-3 text-[8px] leading-4 text-[#788ba1]">Plan; harita, son 30 günlük olaylar, gateway kapsaması ve aktif lisanslardan oluşturuldu.</p></aside>
      </div>
    </div>
  );
}

export function DeploymentsWorkspace() {
  return (
    <div className="oc-page oc-page-fit">
      <PageHeading eyebrow="ONECLICK · KURULUMLAR" title="Çözüm kurulumları" description="Keşif, altyapı, konfigürasyon, pilot ve devreye alma görünümü." status="2 AKTİF KURULUM" />
      <div className="grid grid-cols-4 gap-2">
        <MiniMetric icon={ClipboardCheck} label="Planlanan" value="4" note="2 bu ay" />
        <MiniMetric icon={RadioTower} label="Altyapı kurulumu" value="2" note="Kapsama doğrulama" tone="amber" />
        <MiniMetric icon={PackageCheck} label="Pilot" value="1" note="14 günlük doğrulama" tone="violet" />
        <MiniMetric icon={CheckCircle2} label="Canlı çözüm" value="3" note="SLA içinde" tone="green" />
      </div>
      <div className="grid min-h-0 flex-1 gap-2 xl:grid-cols-[minmax(0,1fr)_320px]">
        <section className="oc-panel min-h-0 overflow-hidden"><div className="oc-panel-head"><div><h2>Forklift Yakınlık Güvenliği</h2><p className="mt-1 text-[8px] text-[#8490a1]">Kocaeli · Lojistik Binası</p></div><span className="oc-count">%62 TAMAMLANDI</span></div><div className="oc-scroll-region p-4"><div className="grid gap-2 md:grid-cols-5">{[["01","Saha keşfi","Tamamlandı"],["02","Kapsama tasarımı","Tamamlandı"],["03","Donanım kurulumu","Aktif"],["04","Kural & workflow","Sırada"],["05","Pilot doğrulama","Sırada"]].map(([n,title,state],i)=><article key={String(n)} className={`rounded-[12px] border p-3 ${i===2?"border-[#b8d1f4] bg-[#f4f8ff]":"border-[#e0e5ec] bg-white"}`}><span className="text-[8px] font-bold text-[#3872cd]">{n}</span><h3 className="mt-3 text-[10px] font-semibold">{title}</h3><p className={`mt-2 text-[8px] ${i<2?"text-[#188663]":i===2?"text-[#286cd1]":"text-[#8792a2]"}`}>{state}</p></article>)}</div><div className="mt-3 grid gap-2 md:grid-cols-2"><PlanBlock icon={RadioTower} title="Bugünkü saha işi" rows={["Koridor B · 4 anchor montajı","Gateway kapsama testi","84 forklift tag eşleştirmesi"]}/><PlanBlock icon={ShieldCheck} title="Devreye alma kapıları" rows={["Kapsama güveni ≥ %95","Yanlış alarm oranı < %3","Müdahale akışı onaylı"]}/></div></div></section>
        <aside className="oc-ai-panel"><span className="flex items-center gap-2 text-[10px] font-semibold"><Sparkles className="size-4 text-[#78adff]" /> Kurulum desteği</span><h2 className="mt-4 text-[17px] font-semibold leading-6">Koridor C’de kapsama boşluğu riski var.</h2><p className="mt-2 text-[9px] leading-4 text-[#91a2b6]">Metal raf yoğunluğu nedeniyle planlanan altıncı anchor’ın konumu saha ölçümünde doğrulanmalı.</p><div className="mt-4 space-y-2"><DarkFact label="Kapsama tahmini" value="%91"/><DarkFact label="Hedef" value="≥ %95"/><DarkFact label="Etkilenen alan" value="Koridor C"/><DarkFact label="Plan güveni" value="%76"/></div><p className="mt-auto border-t border-white/10 pt-3 text-[8px] text-[#7f91a7]">Kaynak: keşif planı · son sinyal ölçümü · alan modeli</p></aside>
      </div>
    </div>
  );
}

export function SolutionValueWorkspace() {
  return (
    <div className="oc-page oc-page-fit">
      <PageHeading eyebrow="ONECLICK · DEĞER & BENİMSEME" title="Çözüm değeri" description="Doğrulanmış operasyon etkisi, kullanım ve yaygınlaştırma görünümü." status="YILBAŞINDAN BERİ" />
      <div className="grid grid-cols-4 gap-2"><MiniMetric icon={CircleDollarSign} label="Doğrulanmış değer" value="₺2,48M" note="Finans onaylı" tone="green"/><MiniMetric icon={Clock3} label="Kazanılan süre" value="1.284 sa" note="Arama + müdahale"/><MiniMetric icon={ShieldCheck} label="Azalan risk" value="-%38" note="Kritik olay oranı" tone="violet"/><MiniMetric icon={UsersRound} label="Aktif kullanım" value="%86" note="Hedef %90" tone="amber"/></div>
      <div className="grid min-h-0 flex-1 gap-2 xl:grid-cols-[minmax(0,1fr)_320px]"><section className="oc-panel min-h-0 overflow-hidden"><div className="oc-panel-head"><div><h2>Çözüme göre gerçekleşen değer</h2><p className="mt-1 text-[8px] text-[#8490a1]">Doğrulanmış baz dönem karşılaştırması</p></div><span className="oc-count">3 AKTİF</span></div><div className="oc-scroll-region grid gap-3 p-4 md:grid-cols-3"><ValueCard title="İş Gücü Güvenliği" value="₺1,12M" progress="86%" note="Risk azaltma · 312 aktif kullanıcı" tone="green"/><ValueCard title="Varlık Performansı" value="₺840K" progress="72%" note="Arama süresi · 4.662 varlık" tone="blue"/><ValueCard title="Enerji Optimizasyonu" value="₺520K" progress="64%" note="Tüketim sapması · 42 sensör" tone="amber"/></div></section><aside className="oc-ai-panel"><span className="flex items-center gap-2 text-[10px] font-semibold"><Sparkles className="size-4 text-[#78adff]"/> Değer önerisi</span><h2 className="mt-4 text-[17px] font-semibold leading-6">Kuzey Hat’ta benimseme açığı var.</h2><p className="mt-2 text-[9px] leading-4 text-[#91a2b6]">Varlık görevlerinin %28’i OneClick dışında kapatılıyor. Mobil kapanış akışı yaygınlaştırılırsa ölçüm güveni artar.</p><div className="mt-4 space-y-2"><DarkFact label="Mevcut benimseme" value="%72"/><DarkFact label="Hedef" value="%90"/><DarkFact label="Potansiyel ek değer" value="₺180K"/><DarkFact label="Öneri güveni" value="%88"/></div><p className="mt-auto border-t border-white/10 pt-3 text-[8px] text-[#7f91a7]">Kaynak: görev kapanışları · mobil kullanım · ERP doğrulaması</p></aside></div>
    </div>
  );
}

function ValueCard({title,value,progress,note,tone}:{title:string;value:string;progress:string;note:string;tone:Tone}) { const width=progress; return <article className="rounded-[13px] border border-[#dfe4eb] p-4"><span className={`inline-flex rounded-full px-2 py-1 text-[8px] font-semibold ${toneClasses[tone]}`}>DOĞRULANDI</span><h3 className="mt-4 text-[11px] font-semibold">{title}</h3><strong className="mt-3 block text-[23px] tracking-[-.035em]">{value}</strong><p className="mt-1.5 text-[8px] leading-4 text-[#7b8798]">{note}</p><div className="mt-5 h-1.5 rounded-full bg-[#edf1f5]"><span className="block h-full rounded-full bg-[#3478da]" style={{width}}/></div><p className="mt-2 text-right text-[8px] font-semibold text-[#4f6078]">{progress} hedef</p></article>; }

function HomeTask({ icon: Icon, title, meta, tone }: { icon: LucideIcon; title: string; meta: string; tone: Tone }) { return <div className="flex items-center gap-3 py-2.5"><span className={`grid size-8 shrink-0 place-items-center rounded-[9px] ${toneClasses[tone]}`}><Icon className="size-3.5" /></span><span className="min-w-0 flex-1"><strong className="block truncate text-[9px]">{title}</strong><small className="mt-1 block truncate text-[8px] text-[#8792a2]">{meta}</small></span><ChevronRight className="size-3.5 text-[#98a2af]" /></div>; }
function Pinned({ title, meta, icon: Icon }: { title: string; meta: string; icon: LucideIcon }) { return <div className="flex items-center gap-3 rounded-[10px] border border-[#e2e7ed] bg-white p-2.5"><span className="grid size-8 place-items-center rounded-[8px] bg-[#edf4ff] text-[#2d6fd3]"><Icon className="size-3.5" /></span><span className="min-w-0 flex-1"><strong className="block text-[9px]">{title}</strong><small className="mt-1 block text-[8px] text-[#8792a2]">{meta}</small></span></div>; }
function CompactFact({ label, value, note }: { label: string; value: string; note: string }) { return <div className="rounded-[9px] border border-[#e3e7ed] bg-white px-2.5 py-2"><small className="block text-[7px] text-[#8a95a4]">{label}</small><strong className="mt-1 block text-[9px]">{value}</strong><span className="mt-0.5 block text-[7px] text-[#8994a3]">{note}</span></div>; }
function ShiftMoment({ time, title, tone }: { time: string; title: string; tone: "blue" | "green" | "amber" }) { const color=tone==="green"?"bg-[#20a77e]":tone==="amber"?"bg-[#e4a03d]":"bg-[#3477dc]"; return <div className="rounded-[9px] bg-white p-2 ring-1 ring-[#e5e9ef]"><span className="flex items-center gap-1.5 text-[8px] font-semibold"><span className={`size-1.5 rounded-full ${color}`}/>{time}</span><p className="mt-1.5 truncate text-[8px] text-[#647287]">{title}</p></div>; }
function RecentLine({ time, title, meta }: { time: string; title: string; meta: string }) { return <div className="grid grid-cols-[34px_1fr_auto] items-center gap-2 text-[8px]"><span className="font-semibold text-[#3470cd]">{time}</span><span className="truncate text-[#4e5d72]">{title}</span><span className="text-[#8a95a4]">{meta}</span></div>; }
function AiLine({ number, title, meta }: { number: string; title: string; meta: string }) { return <div className="flex gap-3 rounded-[11px] border border-white/10 bg-white/[.045] p-2.5"><span className="text-[8px] font-bold text-[#71a8f0]">{number}</span><span><strong className="block text-[9px]">{title}</strong><small className="mt-1 block text-[8px] text-[#8294aa]">{meta}</small></span></div>; }
function SolutionPulse({ title, value, note, tone }: { title: string; value: string; note: string; tone: Tone }) { return <article className="flex min-w-0 items-center gap-2.5 border-r border-[#e5e9ef] px-3 last:border-r-0"><span className={`size-2 rounded-full ${tone === "green" ? "bg-[#20a77e]" : tone === "amber" ? "bg-[#e4a03d]" : tone === "violet" ? "bg-[#795ee0]" : "bg-[#3477dc]"}`} /><span className="min-w-0 flex-1"><strong className="block truncate text-[8px]">{title}</strong><small className="mt-1 block truncate text-[7px] text-[#8490a1]">{note}</small></span><b className="text-[11px]">{value}</b></article>; }
function SceneTag({ label, active }: { label: string; active?: boolean }) { return <span className={`rounded-[7px] border px-2 py-1.5 text-[8px] font-semibold backdrop-blur ${active ? "border-[#69a0ff]/60 bg-[#1764cf]/85 text-white" : "border-white/20 bg-[#071525]/70 text-[#a8b6c7]"}`}>{label}</span>; }
function MapPoint({ className, tone, title, detail }: { className: string; tone: "red" | "green" | "amber"; title: string; detail: string }) { const color = tone === "red" ? "#ef4a62" : tone === "green" ? "#25b789" : "#e9a13d"; return <div className={`absolute ${className}`}><span className="block size-3 rounded-full border-2 border-white" style={{ backgroundColor: color, boxShadow: `0 0 0 7px ${color}30` }} /><div className="absolute bottom-5 left-1/2 min-w-28 -translate-x-1/2 rounded-[8px] border border-white/20 bg-[#07111e]/90 px-2.5 py-2 text-white"><strong className="block text-[8px]">{title}</strong><small className="mt-1 block text-[7px]" style={{ color }}>{detail}</small></div></div>; }
function PortfolioCard({ icon: Icon, title, status, outcome, outcomeLabel, reused, tone }: { icon: LucideIcon; title: string; status: string; outcome: string; outcomeLabel: string; reused: string; tone: Tone }) { return <article className="oc-panel flex min-h-0 flex-col p-4"><div className="flex items-center justify-between"><span className={`grid size-9 place-items-center rounded-[10px] ${toneClasses[tone]}`}><Icon className="size-4" /></span><span className="flex items-center gap-1.5 text-[8px] font-semibold text-[#178566]"><span className="size-1.5 rounded-full bg-[#1fa77c]" />{status}</span></div><h2 className="mt-3 text-[13px] font-semibold">{title}</h2><div className="mt-3"><strong className="text-[25px] tracking-[-.04em]">{outcome}</strong><span className="ml-2 text-[8px] text-[#778598]">{outcomeLabel}</span></div><div className="mt-auto border-t border-[#e7ebf0] pt-3"><span className="text-[8px] text-[#7f8b9b]">Paylaşılan altyapı</span><p className="mt-1 text-[9px] font-medium">{reused}</p></div></article>; }
function DarkFact({ label, value }: { label: string; value: string }) { return <div className="flex items-center justify-between rounded-[10px] border border-white/10 bg-white/[.045] px-3 py-2.5"><span className="text-[8px] text-[#8fa1b5]">{label}</span><strong className="text-[9px]">{value}</strong></div>; }
function StaticFilter({ label, value }: { label: string; value: string }) { return <div className="hidden h-9 min-w-[130px] items-center justify-between rounded-[9px] border border-[#dce2ea] bg-white px-3 lg:flex"><span><small className="block text-[7px] text-[#8b95a4]">{label}</small><strong className="mt-0.5 block text-[9px]">{value}</strong></span><ChevronRight className="size-3 rotate-90 text-[#8a96a7]" /></div>; }
function MarketCategory({ icon: Icon, title, count, active }: { icon: LucideIcon; title: string; count: string; active?: boolean }) { return <div className={`flex items-center gap-3 rounded-[9px] px-3 py-2.5 ${active ? "bg-[#edf4ff] text-[#246bd3]" : "text-[#526176]"}`}><Icon className="size-4" /><span className="flex-1 text-[9px] font-medium">{title}</span><span className="text-[8px]">{count}</span></div>; }
function MarketCard({ icon: Icon, title, category, result, readiness, hardware, time, tone }: { icon: LucideIcon; title: string; category: string; result: string; readiness: string; hardware: string; time: string; tone: Tone }) { return <article className="rounded-[13px] border border-[#dfe4eb] bg-white p-3"><div className="flex items-start justify-between"><span className={`grid size-9 place-items-center rounded-[10px] ${toneClasses[tone]}`}><Icon className="size-4" /></span><span className="rounded-full bg-[#f2f5f8] px-2 py-1 text-[7px] font-semibold text-[#6f7c8f]">{category}</span></div><h3 className="mt-3 text-[11px] font-semibold">{title}</h3><p className="mt-1 text-[8px] text-[#778497]">{result}</p><div className="mt-3 grid grid-cols-3 gap-1.5"><TinyFact label="Hazırlık" value={readiness} /><TinyFact label="Donanım" value={hardware} /><TinyFact label="Kurulum" value={time} /></div><div className="mt-3 flex items-center justify-between border-t border-[#e9edf2] pt-2.5"><span className="text-[8px] font-semibold text-[#1a8666]">Mevcut yapıyla uyumlu</span><ChevronRight className="size-3.5 text-[#8290a2]" /></div></article>; }
function TinyFact({ label, value }: { label: string; value: string }) { return <div className="rounded-[8px] bg-[#f6f8fb] p-2"><small className="block text-[7px] text-[#8a95a4]">{label}</small><strong className="mt-1 block truncate text-[8px]">{value}</strong></div>; }
function PlanLine({ label, value }: { label: string; value: string }) { return <div className="flex items-center gap-2 text-[8px]"><CheckCircle2 className="size-3.5 text-[#62cea9]" /><span className="flex-1 text-[#95a5b8]">{label}</span><strong>{value}</strong></div>; }
function PlanBlock({ icon: Icon, title, rows }: { icon: LucideIcon; title: string; rows: string[] }) { return <article className="rounded-[12px] border border-[#dfe4eb] bg-white p-3"><div className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-[8px] bg-[#edf4ff] text-[#2b6fd4]"><Icon className="size-3.5" /></span><h3 className="text-[10px] font-semibold">{title}</h3></div><div className="mt-3 space-y-2">{rows.map((row) => <div key={row} className="flex items-center gap-2 text-[8px] text-[#627186]"><CheckCircle2 className="size-3 text-[#25a37b]" />{row}</div>)}</div></article>; }
