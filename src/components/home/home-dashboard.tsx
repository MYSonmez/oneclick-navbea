import Image from "next/image";
import {
  AlertTriangle,
  ArrowRight,
  Boxes,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Factory,
  Gauge,
  Layers3,
  Map,
  Maximize2,
  Radio,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";

export function HomeDashboard() {
  return (
    <div className="mx-auto max-w-[1720px] px-4 py-4 xl:px-5">
      <section className="mb-3 flex items-end justify-between gap-5">
        <div>
          <div className="mb-1.5 flex items-center gap-2 text-[9px] font-semibold tracking-[0.12em] text-[#748196]">
            <span>ÜRETİM OPERASYONLARI</span><span className="size-1 rounded-full bg-[#16a476]" /><span className="text-[#158866]">CANLI</span>
          </div>
          <div className="flex items-baseline gap-3">
            <h1 className="text-[25px] font-semibold tracking-[-0.035em] text-[#111827]">Günaydın, Yusuf Sönmez</h1>
            <p className="hidden text-[11px] text-[#7b8798] md:block">Kocaeli kampüsünün bugünkü operasyon görünümü</p>
          </div>
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <span className="flex h-9 items-center gap-2 rounded-[10px] border border-[#dce3eb] bg-white px-3 text-[10px] font-semibold text-[#4f5c6f]"><Clock3 className="size-3.5 text-[#2f6fd5]" /> Vardiya 08:00–16:00</span>
          <span className="flex h-9 items-center gap-2 rounded-[10px] bg-[#0d1b2f] px-4 text-[10px] font-semibold text-white shadow-[0_9px_24px_rgba(13,27,47,.18)]">Operasyon görünümü <ChevronRight className="size-3.5" /></span>
        </div>
      </section>

      <section className="mb-3 grid overflow-hidden rounded-[14px] border border-[#dbe2ea] bg-white shadow-[0_3px_14px_rgba(31,47,70,.045)] sm:grid-cols-3 xl:grid-cols-6">
        <Metric icon={<Users />} label="Sahada personel" value="1.842" note="24 ziyaretçi" tone="blue" />
        <Metric icon={<Boxes />} label="İzlenen varlık" value="4.662" note="%98,6 görünür" tone="green" />
        <Metric icon={<Factory />} label="Aktif üretim hattı" value="18" note="17 üretimde" tone="violet" />
        <Metric icon={<Gauge />} label="Operasyon skoru" value="87,4" suffix="/100" note="+2,1 puan" tone="green" />
        <Metric icon={<Wrench />} label="Açık iş emri" value="156" note="18 yeni" tone="amber" />
        <Metric icon={<AlertTriangle />} label="Kritik olay" value="7" note="3 yeni" tone="red" />
      </section>

      <section className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_300px]">
        <article className="overflow-hidden rounded-[16px] border border-[#d7dee8] bg-[#071321] shadow-[0_16px_42px_rgba(15,32,54,.13)]">
          <div className="flex h-[48px] items-center justify-between border-b border-white/10 bg-[#0b1b2c] px-4 text-white">
            <div className="flex items-center gap-3">
              <span className="grid size-7 place-items-center rounded-[8px] bg-[#176ce4] text-white"><Radio className="size-3.5" /></span>
              <span><span className="block text-[11px] font-semibold">Kampüs operasyon ağı</span><span className="mt-0.5 block text-[8px] text-[#8394aa]">Son senkronizasyon · 09:24</span></span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="flex h-7 items-center gap-1.5 rounded-[8px] bg-white/10 px-2.5 text-[9px] font-medium"><Map className="size-3" /> 3D görünüm</span>
              <span className="grid size-7 place-items-center rounded-[8px] bg-white/[.055] text-[#a9b6c6]"><Layers3 className="size-3.5" /></span>
              <span className="grid size-7 place-items-center rounded-[8px] bg-white/[.055] text-[#a9b6c6]"><Maximize2 className="size-3.5" /></span>
            </div>
          </div>

          <div className="relative min-h-[405px] overflow-hidden xl:min-h-[430px]">
            <Image src="/assets/home/factory-campus-v1.png" alt="Kocaeli üretim kampüsünün dijital ikiz görünümü" fill priority sizes="(min-width:1280px) 75vw, 100vw" className="object-cover object-center" />
            <div className="oc-scene-vignette absolute inset-0" />
            <div className="oc-shell-grid absolute inset-0 opacity-20" />

            <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
              <Layer label="Hatlar" active />
              <Layer label="Ekipman" active />
              <Layer label="İş Gücü" active />
              <Layer label="Güvenlik" />
              <Layer label="Enerji" />
            </div>

            <ScenePoint className="left-[47%] top-[36%]" tone="danger" title="Montaj Hattı A" detail="Titreşim eşiği aşıldı" />
            <ScenePoint className="left-[23%] top-[57%]" tone="success" title="Kuzey Hat" detail="Üretim planında" />
            <ScenePoint className="right-[16%] top-[48%]" tone="warning" title="Utilities" detail="Enerji sapması %8" />

            <div className="absolute bottom-4 left-4 w-[310px] rounded-[14px] border border-white/15 bg-[#07111e]/90 p-4 text-white shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between"><span className="text-[8px] font-semibold tracking-[0.14em] text-[#91a5c0]">OPERASYON ÖZETİ</span><span className="flex items-center gap-1.5 text-[8px] text-[#70bea7]"><span className="size-1.5 rounded-full bg-[#20b98a]" /> Canlı veri</span></div>
              <p className="mt-3 text-[15px] font-semibold leading-5">Montaj Hattı A üretim riski taşıyor.</p>
              <p className="mt-2 text-[9px] leading-4 text-[#a4b0bf]">P-203 titreşim seviyesi yükseldi; planlı duruş penceresi 10:15.</p>
            </div>

            <div className="absolute bottom-4 right-4 flex w-[280px] items-center gap-3 rounded-[14px] border border-white/15 bg-[#07111e]/90 p-3 text-white backdrop-blur-md">
              <span className="grid size-9 place-items-center rounded-[10px] bg-[#e6445d]/15 text-[#ff6177]"><AlertTriangle className="size-4" /></span>
              <span className="min-w-0 flex-1"><span className="block text-[10px] font-semibold">P-203 · Kritik eşik</span><span className="mt-1 block text-[8px] text-[#8e9caf]">Montaj A · 7 dk açık</span></span>
              <ArrowRight className="size-4 text-[#718199]" />
            </div>
          </div>
        </article>

        <aside className="overflow-hidden rounded-[16px] border border-[#d8dfe8] bg-white shadow-[0_5px_22px_rgba(30,47,70,.055)]">
          <div className="border-b border-[#e4e8ee] p-4">
            <div className="flex items-center justify-between"><span className="flex items-center gap-2 text-[10px] font-semibold text-[#26354a]"><Sparkles className="size-4 text-[#3772dd]" /> OneClick operasyon brifi</span><span className="text-[8px] text-[#98a2b1]">09:24</span></div>
            <span className="mt-4 inline-flex rounded-full bg-[#fff0f2] px-2 py-1 text-[8px] font-bold tracking-[0.08em] text-[#d83e55]">KRİTİK · KARAR GEREKİYOR</span>
            <h2 className="mt-2.5 text-[15px] font-semibold leading-5 text-[#172033]">Montaj Hattı A’da duruş riski</h2>
            <p className="mt-2 text-[9px] leading-[1.55] text-[#697689]">Titreşim artışı rulman aşınmasıyla örtüşüyor. Tahmini üretim kaybı 3,2 saat.</p>
            <div className="mt-3 flex gap-2"><span className="flex h-8 flex-1 items-center justify-center rounded-[8px] bg-[#1267e8] text-[9px] font-semibold text-white">Olayı incele</span><span className="grid size-8 place-items-center rounded-[8px] border border-[#dce2ea] text-[#607087]"><ArrowRight className="size-3.5" /></span></div>
          </div>

          <div className="border-b border-[#e4e8ee] p-4">
            <div className="flex items-center justify-between"><h3 className="text-[10px] font-semibold text-[#26354a]">Bugünün öncelikleri</h3><span className="rounded-full bg-[#f5f7fa] px-2 py-1 text-[8px] font-semibold text-[#7c8797]">3 açık</span></div>
            <div className="mt-2.5 divide-y divide-[#edf0f4]">
              <Priority icon={<AlertTriangle />} title="P-203 alarmını incele" meta="7 dk açık" tone="red" />
              <Priority icon={<Wrench />} title="Kuzey Hat bakım onayı" meta="10:15’e kadar" tone="amber" />
              <Priority icon={<ShieldCheck />} title="Enerji analizini doğrula" meta="Bugün" tone="green" />
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between"><h3 className="text-[10px] font-semibold text-[#26354a]">Planlama önerisi</h3><span className="text-[8px] font-semibold text-[#3873d9]">%92 güven</span></div>
            <p className="mt-2.5 text-[11px] font-semibold leading-4 text-[#283448]">Bakım Ekibi 2’yi 10:15–10:35 aralığına ayırın.</p>
            <p className="mt-1.5 text-[8px] leading-4 text-[#7f8998]">Son 30 günlük duruş yükü ve ekip erişimi bu aralıkta en düşük.</p>
            <div className="mt-3 flex items-center justify-between rounded-[9px] bg-[#f5f8fc] px-3 py-2.5"><span className="text-[9px] font-semibold text-[#42516a]">Planı görüntüle</span><ChevronRight className="size-3.5 text-[#6f7e92]" /></div>
          </div>
        </aside>
      </section>

      <section className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <SummaryCard icon={<Radio />} title="Canlı operasyon" value="24 saha bağlı" note="4.662 varlık çevrimiçi" tone="blue" />
        <SummaryCard icon={<Gauge />} title="Performans" value="%87,4" note="Hedefin 2,6 puan altında" tone="green" />
        <SummaryCard icon={<CircleDollarSign />} title="Doğrulanmış değer" value="₺48,7M" note="Bu ay +₺2,1M" tone="violet" />
        <SummaryCard icon={<CheckCircle2 />} title="Sistem sağlığı" value="%99,1" note="214 / 216 gateway bağlı" tone="green" />
      </section>
    </div>
  );
}

const tones = {
  blue: "bg-[#eef4ff] text-[#2868d5]",
  green: "bg-[#eaf8f3] text-[#178366]",
  violet: "bg-[#f0edff] text-[#6f52d8]",
  amber: "bg-[#fff6e8] text-[#b57118]",
  red: "bg-[#fff0f2] text-[#d83e55]",
} as const;

function Metric({ icon, label, value, suffix, note, tone }: { icon: React.ReactNode; label: string; value: string; suffix?: string; note: string; tone: keyof typeof tones }) {
  return <div className="flex min-h-[76px] items-center gap-3 border-b border-[#e4e8ee] px-3.5 last:border-r-0 sm:border-r xl:border-b-0"><span className={`grid size-9 shrink-0 place-items-center rounded-[10px] [&_svg]:size-[17px] ${tones[tone]}`}>{icon}</span><span className="min-w-0"><span className="block truncate text-[8px] font-medium text-[#7d8898]">{label}</span><span className="mt-0.5 block text-[18px] font-semibold tracking-[-0.03em] text-[#172033]">{value}<small className="ml-0.5 text-[9px] font-medium text-[#8791a0]">{suffix}</small></span><span className={`mt-0.5 block text-[8px] font-medium ${tone === "red" ? "text-[#d83e55]" : tone === "amber" ? "text-[#a66a17]" : "text-[#178366]"}`}>{note}</span></span></div>;
}

function Layer({ label, active = false }: { label: string; active?: boolean }) {
  return <span className={`flex h-7 items-center gap-1.5 rounded-[8px] border px-2.5 text-[9px] font-semibold backdrop-blur ${active ? "border-[#5b94ff]/70 bg-[#155dcc]/85 text-white" : "border-white/20 bg-[#071525]/72 text-[#a8b5c6]"}`}><Layers3 className="size-3" />{label}</span>;
}

function ScenePoint({ className, tone, title, detail }: { className: string; tone: "danger" | "warning" | "success"; title: string; detail: string }) {
  const color = tone === "danger" ? "#ff4f69" : tone === "warning" ? "#f2a63d" : "#24c493";
  return <div className={`absolute ${className}`}><span className="relative block size-3 rounded-full border-2 border-white" style={{ backgroundColor: color, boxShadow: `0 0 0 7px ${color}30, 0 0 22px ${color}` }} /><div className="absolute bottom-5 left-1/2 min-w-[132px] -translate-x-1/2 rounded-[9px] border border-white/20 bg-[#07111e]/92 px-3 py-2 text-white shadow-xl backdrop-blur"><span className="block text-[9px] font-semibold">{title}</span><span className="mt-1 block text-[8px]" style={{ color }}>{detail}</span></div></div>;
}

function Priority({ icon, title, meta, tone }: { icon: React.ReactNode; title: string; meta: string; tone: "red" | "amber" | "green" }) {
  const c = tone === "red" ? "bg-[#fff0f2] text-[#da4057]" : tone === "amber" ? "bg-[#fff6e8] text-[#b57219]" : "bg-[#eaf8f3] text-[#178366]";
  return <div className="flex items-center gap-2.5 py-2.5"><span className={`grid size-7 place-items-center rounded-[8px] [&_svg]:size-3.5 ${c}`}>{icon}</span><span className="min-w-0 flex-1"><span className="block truncate text-[9px] font-semibold text-[#334055]">{title}</span><span className="mt-0.5 block text-[8px] text-[#939caa]">{meta}</span></span><ChevronRight className="size-3 text-[#a3acb8]" /></div>;
}

function SummaryCard({ icon, title, value, note, tone }: { icon: React.ReactNode; title: string; value: string; note: string; tone: keyof typeof tones }) {
  return <article className="flex min-h-[94px] items-center gap-3 rounded-[14px] border border-[#dce2ea] bg-white px-4 shadow-[0_3px_14px_rgba(31,47,70,.035)]"><span className={`grid size-9 place-items-center rounded-[10px] [&_svg]:size-4 ${tones[tone]}`}>{icon}</span><span className="min-w-0"><span className="block text-[9px] font-semibold text-[#6d798b]">{title}</span><span className="mt-1 block text-[16px] font-semibold tracking-[-0.02em] text-[#182235]">{value}</span><span className="mt-0.5 block text-[8px] text-[#8994a4]">{note}</span></span><div className="oc-chart-grid ml-auto hidden h-10 w-[76px] items-end gap-1 md:flex"><i className="h-3 w-1.5 rounded-t bg-[#dce6f8]" /><i className="h-5 w-1.5 rounded-t bg-[#c8d9f4]" /><i className="h-4 w-1.5 rounded-t bg-[#9fbeed]" /><i className="h-7 w-1.5 rounded-t bg-[#4f87df]" /><i className="h-6 w-1.5 rounded-t bg-[#2f70d7]" /></div></article>;
}
