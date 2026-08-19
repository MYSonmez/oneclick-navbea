import type { LucideIcon } from "lucide-react";
import { Activity, Boxes, CheckCircle2, CircleDollarSign, Clock3, Factory, Forklift, Gauge, RadioTower, ShieldCheck, Sparkles, TrendingUp, UsersRound, Zap } from "lucide-react";

type Tone = "blue" | "green" | "amber" | "violet";

const tones: Record<Tone, string> = {
  blue: "bg-[#eaf2ff] text-[#286ed8]",
  green: "bg-[#e9f8f2] text-[#168565]",
  amber: "bg-[#fff5e5] text-[#ac6d18]",
  violet: "bg-[#f1edff] text-[#6d4bd5]",
};

export function SolutionsWorkspace() {
  return <div className="oc-ops-page oc-solutions-page">
    <header className="oc-ops-page-head"><div><h1>Çözümlerim</h1><p className="oc-page-subtitle">Kurulu çözümler, devreye alma durumu ve gerçekleşen değer</p></div><div className="oc-ops-head-meta"><span><Activity className="size-4" />3 çözüm canlı</span><strong>1 pilot</strong></div></header>
    <section className="oc-ops-stats" aria-label="Çözüm portföyü özeti"><SolutionStat icon={ShieldCheck} label="Portföy sağlığı" value="%98,7" note="SLA içinde" tone="green"/><SolutionStat icon={CircleDollarSign} label="Doğrulanmış değer" value="₺2,48M" note="Yılbaşından beri" tone="green"/><SolutionStat icon={UsersRound} label="Aktif kullanım" value="%82" note="Hedef %90" tone="amber"/><SolutionStat icon={RadioTower} label="Altyapı kullanımı" value="%74" note="216 gateway" tone="blue"/></section>

    <section className="oc-solutions-board">
      <aside className="oc-solution-list"><header><div><span>ÇÖZÜM PORTFÖYÜ</span><h2>4 çözüm</h2></div><small>3 canlı · 1 pilot</small></header><SolutionListItem icon={ShieldCheck} name="İş Gücü Güvenliği" meta="Kocaeli · 1.842 kişi" value="%98,9" tone="green" active/><SolutionListItem icon={Boxes} name="Varlık Performansı" meta="4.662 izlenen varlık" value="%72" tone="blue"/><SolutionListItem icon={Zap} name="Enerji Optimizasyonu" meta="42 bağlı sensör" value="-8,4%" tone="amber"/><SolutionListItem icon={Forklift} name="Forklift Güvenliği" meta="Pilot · Lojistik B" value="%62" tone="violet"/></aside>

      <article className="oc-solution-detail">
        <header><div className="oc-solution-name"><span><ShieldCheck className="size-5"/></span><div><small>SEÇİLİ ÇÖZÜM</small><h2>İş Gücü Güvenliği</h2><p>Kocaeli Ana Kampüs · 12 Ağustos 2025’ten beri canlı</p></div></div><span className="oc-solution-health"><i/>Sağlıklı</span></header>
        <div className="oc-solution-impact"><div><small>Doğrulanmış değer</small><strong>₺1,12M</strong><span><TrendingUp className="size-3.5"/>Hedefin %14 üzerinde</span></div><div><small>Kritik risk azalması</small><strong>-%38</strong><span>90 günlük karşılaştırma</span></div><div><small>Aktif kullanıcı</small><strong>312</strong><span>%86 benimseme</span></div></div>
        <section className="oc-solution-lifecycle"><div className="oc-solution-section-title"><div><span>DEVREYE ALMA</span><h3>Çözüm yaşam döngüsü</h3></div><strong>Canlı kullanım</strong></div><div className="oc-lifecycle-track"><LifecycleStep number="01" title="Keşif" meta="Tamamlandı" done/><LifecycleStep number="02" title="Altyapı" meta="Tamamlandı" done/><LifecycleStep number="03" title="Kurulum" meta="Tamamlandı" done/><LifecycleStep number="04" title="Benimseme" meta="%86 · izleniyor" active/></div></section>
        <section className="oc-solution-evidence"><div className="oc-solution-section-title"><div><span>OPERASYON KANITI</span><h3>Değer nasıl oluştu?</h3></div><small>Son 90 gün</small></div><div><Evidence icon={Clock3} label="Müdahale süresi" value="4,8 dk" note="1,6 dk daha hızlı" tone="green"/><Evidence icon={Gauge} label="Görünürlük" value="%98,9" note="1.842 badge" tone="blue"/><Evidence icon={Factory} label="Kapsanan alan" value="18" note="12 üretim · 6 lojistik" tone="violet"/></div></section>
      </article>

      <aside className="oc-solution-context"><section className="oc-solution-ai"><div><span><Sparkles className="size-4"/></span><strong>OneClick önerisi</strong></div><h2>Lojistik B kapsamını genişletmeye hazır.</h2><p>Mevcut gateway ağı, forklift yakınlık çözümünün ihtiyaç duyduğu altyapının %74’ünü karşılıyor.</p><div><Fact label="Yeniden kullanılabilir" value="16 gateway"/><Fact label="Ek donanım tahmini" value="6–8 anchor"/><Fact label="Kurulum" value="4–6 gün"/></div><footer><span>Harita · olay · sinyal verisi</span><strong>%78 güven</strong></footer></section><section className="oc-solution-infra"><header><span>PAYLAŞILAN ALTYAPI</span><strong>%74 hazır</strong></header><InfraLine label="Gateway" value="214 / 216" progress={99}/><InfraLine label="Alan haritası" value="18 / 18" progress={100}/><InfraLine label="Etiket kapsamı" value="1.842" progress={86}/></section></aside>
    </section>
  </div>;
}

function SolutionStat({icon:Icon,label,value,note,tone}:{icon:LucideIcon;label:string;value:string;note:string;tone:Tone}) { return <article><span className={`grid size-10 place-items-center rounded-[11px] ${tones[tone]}`}><Icon className="size-[18px]"/></span><div><p>{label}</p><strong>{value}</strong><small>{note}</small></div></article>; }
function SolutionListItem({icon:Icon,name,meta,value,tone,active}:{icon:LucideIcon;name:string;meta:string;value:string;tone:Tone;active?:boolean}) { return <div className={`oc-solution-list-item ${active?"is-active":""}`}><span className={tones[tone]}><Icon className="size-4"/></span><div><strong>{name}</strong><small>{meta}</small></div><b>{value}</b></div>; }
function LifecycleStep({number,title,meta,done,active}:{number:string;title:string;meta:string;done?:boolean;active?:boolean}) { return <div className={active?"is-active":""}><span>{done?<CheckCircle2 className="size-4"/>:number}</span><strong>{title}</strong><small>{meta}</small></div>; }
function Evidence({icon:Icon,label,value,note,tone}:{icon:LucideIcon;label:string;value:string;note:string;tone:Tone}) { return <article><span className={tones[tone]}><Icon className="size-4"/></span><small>{label}</small><strong>{value}</strong><p>{note}</p></article>; }
function Fact({label,value}:{label:string;value:string}) { return <span><small>{label}</small><strong>{value}</strong></span>; }
function InfraLine({label,value,progress}:{label:string;value:string;progress:number}) { return <div className="oc-infra-line"><span><small>{label}</small><strong>{value}</strong></span><div><i style={{width:`${progress}%`}}/></div></div>; }
