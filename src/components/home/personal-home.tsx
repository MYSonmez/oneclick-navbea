import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { AlertTriangle, ArrowUpRight, Boxes, ChevronRight, ClipboardCheck, Clock3, MessageSquareText, ShieldCheck, Sparkles } from "lucide-react";

type Tone = "blue" | "green" | "amber" | "red";
const tone: Record<Tone, { icon: string; label: string }> = {
  blue: { icon: "bg-[#eaf2ff] text-[#246cd8]", label: "text-[#69a5f2]" },
  green: { icon: "bg-[#e8f7f1] text-[#168564]", label: "text-[#54caa5]" },
  amber: { icon: "bg-[#fff5e5] text-[#b37119]", label: "text-[#eab15e]" },
  red: { icon: "bg-[#fff0f2] text-[#d64158]", label: "text-[#ff8193]" },
};

export function PersonalHome() {
  return (
    <div className="oc-page oc-home-welcome">
      <header className="oc-home-welcome-head">
        <div><h1>Günaydın, Yusuf Sönmez</h1></div>
        <div className="flex items-center gap-2"><span className="oc-home-context"><Clock3 className="size-4" />08:00–16:00</span><span className="oc-home-context oc-home-context-live"><span className="size-2 rounded-full bg-[#22a77e]" />Vardiya canlı</span></div>
      </header>

      <section className="oc-home-welcome-hero">
        <article className="oc-home-welcome-visual">
          <Image src="/assets/home/oneclick-ai-network-v1.png" alt="" fill priority sizes="(min-width:1280px) 72vw, 100vw" className="object-cover opacity-75" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,15,28,.98)_0%,rgba(4,15,28,.91)_49%,rgba(4,15,28,.3)_100%),linear-gradient(180deg,rgba(4,15,28,.12),rgba(4,15,28,.78))]" />
          <div className="relative z-[1] flex items-center justify-between"><span className="flex items-center gap-2.5 text-[12px] font-semibold"><Sparkles className="size-[18px] text-[#78adff]" />Kişisel vardiya brifi</span><span className="rounded-full border border-white/10 bg-white/[.06] px-3 py-1.5 text-[9px] text-[#9badc0]">09:24 · güncel</span></div>
          <div className="relative z-[1] my-auto max-w-[620px] py-6"><span className="text-[9px] font-bold tracking-[.14em] text-[#75aef7]">ONECLICK ÖZETİ</span><h2>Bugünün akışını birlikte netleştirelim.</h2><p>Üç karar dikkatinizi bekliyor. P-203 olayı en yüksek etkiye sahip; diğer işler üretimi durdurmadan vardiya içinde planlanabilir.</p></div>
          <div className="relative z-[1] grid gap-2.5 sm:grid-cols-3"><BriefFact number="01" label="Şimdi" title="P-203 olayını yönlendir" meta="8 dakika kaldı" toneName="red" /><BriefFact number="02" label="10:00 öncesi" title="Utilities kararını ver" meta="Onay bekliyor" toneName="amber" /><BriefFact number="03" label="Bugün" title="18 kaydı incele" meta="Süre eşleştirme" toneName="blue" /></div>
        </article>

        <aside className="oc-home-conversation">
          <header className="oc-home-ai-head"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-[11px] bg-white/10 text-[#8ebcff]"><Sparkles className="size-[18px]" /></span><span><strong>OneClick AI</strong><small>Vardiya asistanı</small></span></div><span className="flex items-center gap-2 text-[8px] font-bold text-[#65d4af]"><span className="size-2 rounded-full bg-[#39c899]" />CANLI</span></header>
          <div className="oc-home-ai-body"><div className="oc-home-ai-lead"><div className="oc-ai-orbit"><Sparkles className="size-5" /></div><span>BUGÜN</span><h3>3 konu kararınızı bekliyor.</h3><p>Öncelik sırasını olay etkisi, son zaman ve vardiya planına göre hazırladım.</p><div><Source label="6 görev" /><Source label="3 onay" /><Source label="2 olay" /></div></div><div className="oc-home-ai-suggestions"><Suggestion icon={AlertTriangle} title="En yüksek riski açıkla" meta="P-203 · doğrulanmış olay" toneName="red" /><Suggestion icon={ClipboardCheck} title="Bugünün kararlarını sırala" meta="Etki ve son zamana göre" toneName="amber" /></div><div className="oc-home-ai-trust"><span>6 kaynak · 09:24</span><strong>%92 güven</strong></div></div>
          <div className="oc-home-composer"><MessageSquareText className="size-[18px] text-[#3474d4]" /><span>OneClick’a sorun veya bir iş başlatın…</span><span className="grid size-8 place-items-center rounded-[9px] bg-[#176bdd] text-white"><ArrowUpRight className="size-4" /></span></div>
        </aside>
      </section>

      <section className="oc-home-next-grid">
        <article className="oc-panel overflow-hidden"><header className="oc-home-section-head"><div><span className="oc-eyebrow">SİZİN İÇİN</span><h2>Önerilen sonraki adımlar</h2><p>Etki, zaman ve sorumluluklarınıza göre sıralandı.</p></div><span className="oc-count">3 ÖNERİ</span></header><div className="grid gap-3 p-4 md:grid-cols-3"><Recommendation icon={AlertTriangle} kicker="KRİTİK · 8 DK" title="P-203 olayını yönlendirin" note="Bakım Ekibi 2 uygun; en düşük etkili pencere 10:15." source="Olay · bakım · vardiya" toneName="red" /><Recommendation icon={ShieldCheck} kicker="KARAR · 10:00" title="Utilities onayını inceleyin" note="Kesinti kapsamı Montaj A üretimini etkilemiyor." source="Talep · üretim planı" toneName="amber" /><Recommendation icon={ClipboardCheck} kicker="BUGÜN" title="18 istisnayı gözden geçirin" note="142 süre kaydı kurallarla otomatik eşleşti." source="Zaman · görev kayıtları" toneName="blue" /></div></article>
        <aside className="oc-panel overflow-hidden"><header className="oc-home-section-head"><div><span className="oc-eyebrow">DEVAM EDİN</span><h2>Kaldığınız yer</h2><p>Sık kullandığınız çalışma alanları.</p></div></header><div className="divide-y divide-[#e8ecf1] px-4"><ContinueRow icon={Clock3} title="Süre Eşleştirme" meta="18 inceleme bekliyor" /><ContinueRow icon={ShieldCheck} title="Güvenlik & Olaylar" meta="2 kritik olay" /><ContinueRow icon={Boxes} title="Varlıklar & Filo" meta="18 belirsiz konum" /></div></aside>
      </section>
    </div>
  );
}

function BriefFact({ number, label, title, meta, toneName }: { number: string; label: string; title: string; meta: string; toneName: Tone }) { return <div className="rounded-[13px] border border-white/10 bg-white/[.06] p-3.5 backdrop-blur"><div className="flex justify-between"><span className="text-[9px] font-bold text-[#78adf3]">{number}</span><span className="text-[8px] text-[#91a2b5]">{label}</span></div><strong className="mt-3 block text-[10px]">{title}</strong><p className={`mt-1.5 text-[8px] ${tone[toneName].label}`}>{meta}</p></div>; }
function Source({ label }: { label: string }) { return <span className="rounded-full border border-[#dce3eb] bg-white px-2.5 py-1 text-[8px] font-medium text-[#647388]">{label}</span>; }
function Suggestion({ icon: Icon, title, meta, toneName }: { icon: LucideIcon; title: string; meta: string; toneName: Tone }) { return <div className="flex items-center gap-3 rounded-[12px] border border-[#e0e5ec] bg-white p-3"><span className={`grid size-9 shrink-0 place-items-center rounded-[10px] ${tone[toneName].icon}`}><Icon className="size-4" /></span><span className="min-w-0 flex-1"><strong className="block text-[10px]">{title}</strong><small className="mt-1 block text-[8px] text-[#8792a2]">{meta}</small></span><ChevronRight className="size-4 text-[#9ba5b1]" /></div>; }
function Recommendation({ icon: Icon, kicker, title, note, source, toneName }: { icon: LucideIcon; kicker: string; title: string; note: string; source: string; toneName: Tone }) { return <article className="rounded-[14px] border border-[#e0e5ec] bg-white p-4"><div className="flex items-center justify-between"><span className={`grid size-10 place-items-center rounded-[11px] ${tone[toneName].icon}`}><Icon className="size-[18px]" /></span><span className={`text-[8px] font-bold tracking-[.06em] ${tone[toneName].label}`}>{kicker}</span></div><h3 className="mt-4 text-[12px] font-semibold">{title}</h3><p className="mt-2 min-h-10 text-[9px] leading-[1.65] text-[#718094]">{note}</p><p className="mt-4 border-t border-[#e9edf2] pt-3 text-[8px] text-[#8793a3]">Kaynak: {source}</p></article>; }
function ContinueRow({ icon: Icon, title, meta }: { icon: LucideIcon; title: string; meta: string }) { return <div className="flex items-center gap-3 py-4"><span className="grid size-10 place-items-center rounded-[11px] bg-[#edf4ff] text-[#2d6fd3]"><Icon className="size-[18px]" /></span><span className="min-w-0 flex-1"><strong className="block text-[10px]">{title}</strong><small className="mt-1 block text-[8px] text-[#8792a2]">{meta}</small></span><ChevronRight className="size-4 text-[#9aa4b1]" /></div>; }
