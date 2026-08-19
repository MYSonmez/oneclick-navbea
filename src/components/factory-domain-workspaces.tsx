import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BadgeCheck,
  BatteryMedium,
  Boxes,
  Building2,
  ChartNoAxesCombined,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Factory,
  Forklift,
  Gauge,
  MapPin,
  RadioTower,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  UsersRound,
  Wifi,
  Wrench,
} from "lucide-react";

type Metric = { label: string; value: string; note: string; tone?: "good" | "warn" | "risk" };

function PageHeader({ eyebrow, title, description, status }: { eyebrow: string; title: string; description: string; status: string }) {
  return (
    <header className="oc-page-heading">
      <div className="min-w-0">
        <p className="oc-eyebrow">{eyebrow}</p>
        <div className="mt-1 flex min-w-0 items-baseline gap-3"><h1>{title}</h1><p className="hidden truncate text-[10px] text-[#69778a] md:block">{description}</p></div>
      </div>
      <span className="oc-status-pill">{status}</span>
    </header>
  );
}

function MetricStrip({ items }: { items: Metric[] }) {
  return (
    <section className="grid overflow-hidden rounded-[15px] border border-[#dbe2ea] bg-white shadow-[0_5px_18px_rgba(32,49,72,.035)]" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
      {items.map((item) => (
        <div key={item.label} className="min-w-0 border-r border-[#e5e9ef] px-3 py-2.5 last:border-r-0">
          <span className="block truncate text-[8px] font-medium text-[#738095]">{item.label}</span>
          <strong className="mt-1 block text-[15px] font-semibold tracking-[-.02em] text-[#162033]">{item.value}</strong>
          <span className={`mt-0.5 block truncate text-[8px] ${item.tone === "risk" ? "text-[#d64057]" : item.tone === "warn" ? "text-[#b7791f]" : item.tone === "good" ? "text-[#168563]" : "text-[#7d8999]"}`}>{item.note}</span>
        </div>
      ))}
    </section>
  );
}

function SurfaceTitle({ icon: Icon, title, note }: { icon: LucideIcon; title: string; note: string }) {
  return (
    <div className="flex h-[54px] items-center gap-3 border-b border-[#e5e9ef] px-4">
      <span className="grid size-8 place-items-center rounded-[9px] bg-[#edf4ff] text-[#2f6fd1]"><Icon className="size-4" /></span>
      <span><strong className="block text-[11px] text-[#243146]">{title}</strong><small className="mt-0.5 block text-[9px] text-[#8490a0]">{note}</small></span>
    </div>
  );
}

function StatusDot({ tone = "good" }: { tone?: "good" | "warn" | "risk" | "idle" }) {
  const color = tone === "risk" ? "bg-[#e64960]" : tone === "warn" ? "bg-[#e6a23b]" : tone === "idle" ? "bg-[#8c98a8]" : "bg-[#22aa80]";
  return <span className={`size-2 rounded-full ${color}`} />;
}

export function WorkOverviewWorkspace() {
  return (
    <div className="mx-auto max-w-[1720px] px-4 py-4 xl:px-5">
      <PageHeader eyebrow="FABRİKA OPERASYONLARI · İŞLER" title="İşler" description="Görev, süre, vardiya ve karar kuyruklarının istisna odaklı çalışma alanı." status="12 AKSİYON" />
      <MetricStrip items={[
        { label: "Bugünün işleri", value: "46", note: "34 plana uygun", tone: "good" },
        { label: "SLA riski", value: "5", note: "20 dakika altında", tone: "risk" },
        { label: "Süre istisnası", value: "34", note: "2.084 kayıt içinde", tone: "warn" },
        { label: "Onay bekleyen", value: "12", note: "3 yüksek öncelik", tone: "warn" },
        { label: "Ekip kapasitesi", value: "%86", note: "+4 puan", tone: "good" },
      ]} />
      <div className="mt-3 grid gap-3 xl:grid-cols-[minmax(0,1.35fr)_minmax(390px,.65fr)]">
        <section className="overflow-hidden rounded-[16px] border border-[#dbe2ea] bg-white">
          <SurfaceTitle icon={ClipboardCheck} title="Bugünün çalışma akışı" note="Öncelik, sorumluluk ve SLA sırasıyla" />
          <div className="grid min-h-[430px] md:grid-cols-[290px_1fr]">
            <div className="border-r border-[#e5e9ef] bg-[#f8fafc] p-3">
              {[
                ["Kritik titreşim doğrulaması", "Montaj A · 8 dk", "risk"],
                ["Forklift güvenli rota", "Kuzey Hat · 18 dk", "warn"],
                ["Kompresör bakım kapanışı", "Utilities · 42 dk", "good"],
                ["Hafta sonu vardiya planı", "İş Gücü · bugün", "idle"],
              ].map(([title, meta, tone], index) => (
                <article key={title} className={`mb-2 rounded-[12px] border p-3.5 ${index === 0 ? "border-[#bfd3f2] bg-white shadow-[0_6px_18px_rgba(37,83,143,.08)]" : "border-transparent bg-transparent"}`}>
                  <div className="flex items-center gap-2"><StatusDot tone={tone as "good" | "warn" | "risk" | "idle"} /><strong className="min-w-0 flex-1 truncate text-[11px]">{title}</strong></div>
                  <p className="mt-2 pl-4 text-[9px] text-[#78869a]">{meta}</p>
                </article>
              ))}
            </div>
            <div className="p-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#fff1f3] px-2.5 py-1.5 text-[9px] font-semibold text-[#cb3f54]"><TriangleAlert className="size-3.5" /> SLA RİSKİ</span>
              <h2 className="mt-4 text-[22px] font-semibold tracking-[-.025em]">P-203 titreşim kaynağını doğrula</h2>
              <p className="mt-2 max-w-2xl text-[11px] leading-5 text-[#68778b]">Sensör olayı, bakım kaydı ve üretim planı aynı iş emri altında ilişkilendirildi.</p>
              <div className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-4">
                {[["Alan", "Montaj A"], ["Ekip", "Bakım 2"], ["Kaynak", "Sensör P-203"], ["Kalan", "8 dakika"]].map(([label, value]) => <div key={label} className="rounded-[11px] border border-[#e1e6ed] bg-[#fafbfd] p-3"><small className="text-[9px] font-medium text-[#8290a1]">{label}</small><strong className="mt-2 block text-[11px]">{value}</strong></div>)}
              </div>
              <div className="mt-4 rounded-[13px] border border-[#dfe5ec] p-4">
                <p className="text-[9px] font-semibold tracking-[.1em] text-[#71839a]">DOĞRULAMA ZİNCİRİ</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  <WorkStep title="Ekipman güvenli" note="09:24 · doğrulandı" done />
                  <WorkStep title="Mekanik kontrol" note="Bakım 2 · sırada" />
                  <WorkStep title="Yeniden ölçüm" note="Kapanış ölçütü" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <aside className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
          <DomainCard icon={Clock3} title="Süre eşleştirme" value="%87" note="34 kayıt inceleme gerektiriyor" tone="blue" />
          <DomainCard icon={BadgeCheck} title="Onaylar" value="12" note="3 karar SLA sınırında" tone="amber" />
          <DomainCard icon={Wrench} title="Görevler & iş emirleri" value="46" note="5 iş atama bekliyor" tone="green" />
        </aside>
      </div>
    </div>
  );
}

function WorkStep({ title, note, done }: { title: string; note: string; done?: boolean }) {
  return <div className={`rounded-[10px] px-3 py-3 ${done ? "bg-[#edf9f5]" : "bg-[#f5f7fa]"}`}><span className="flex items-center gap-2 text-[10px] font-semibold">{done ? <CheckCircle2 className="size-4 text-[#19906c]" /> : <span className="size-4 rounded-full border border-[#cfd7e2] bg-white" />}{title}</span><small className="mt-1.5 block pl-6 text-[9px] text-[#8290a1]">{note}</small></div>;
}

function DomainCard({ icon: Icon, title, value, note, tone }: { icon: LucideIcon; title: string; value: string; note: string; tone: "blue" | "amber" | "green" }) {
  const style = tone === "amber" ? "bg-[#fff8ed] text-[#b6761e]" : tone === "green" ? "bg-[#ecf8f4] text-[#168563]" : "bg-[#edf4ff] text-[#286ed2]";
  return <article className="rounded-[16px] border border-[#dbe2ea] bg-white p-4"><div className="flex items-center justify-between"><span className={`grid size-9 place-items-center rounded-[10px] ${style}`}><Icon className="size-4" /></span><strong className="text-[22px] tracking-[-.03em]">{value}</strong></div><h3 className="mt-4 text-[12px] font-semibold">{title}</h3><p className="mt-1.5 text-[10px] text-[#748195]">{note}</p></article>;
}

export function PeopleWorkspace() {
  const people = [
    ["Ayşe Demir", "Montaj Ekibi A", "Hat 3", "Badge B-284", "Canlı", "good"],
    ["Mehmet Kaya", "Bakım Ekibi 2", "Utilities", "Badge B-118", "Canlı", "good"],
    ["Selin Aras", "Kalite", "Laboratuvar", "Badge B-407", "8 dk gecikme", "warn"],
    ["Kerem Erol", "Taşeron · Aksis", "Lojistik", "Badge C-092", "Pil düşük", "risk"],
    ["Elif Duman", "İSG", "Kuzey Hat", "Badge B-031", "Canlı", "good"],
  ];
  return (
    <div className="mx-auto max-w-[1720px] px-4 py-4 xl:px-5">
      <PageHeader eyebrow="FABRİKA OPERASYONLARI · KİŞİLER" title="Kişiler" description="Çalışan, ziyaretçi ve taşeronların vardiya, alan ve badge güveniyle birleşen görünümü." status="1.842 SAHADA" />
      <MetricStrip items={[
        { label: "Sahadaki çalışan", value: "1.842", note: "%98,9 görünür", tone: "good" },
        { label: "Taşeron", value: "426", note: "18 firma" },
        { label: "Ziyaretçi", value: "24", note: "6 çıkış bekliyor", tone: "warn" },
        { label: "Badge sorunu", value: "17", note: "12 düşük pil", tone: "risk" },
        { label: "Yetki ihlali", value: "2", note: "İncelemede", tone: "risk" },
      ]} />
      <div className="mt-3 grid gap-3 xl:grid-cols-[minmax(0,1fr)_320px]">
        <section className="overflow-hidden rounded-[16px] border border-[#dbe2ea] bg-white">
          <SurfaceTitle icon={UsersRound} title="Canlı kişi görünümü" note="Vardiya, konum ve badge durumu" />
          <div className="grid grid-cols-[1.3fr_1fr_.8fr_.9fr_.75fr] border-b border-[#e5e9ef] bg-[#f7f9fc] px-4 py-2.5 text-[9px] font-semibold tracking-[.06em] text-[#768498]"><span>KİŞİ</span><span>EKİP</span><span>SON ALAN</span><span>CİHAZ</span><span>DURUM</span></div>
          {people.map(([name, team, zone, badge, status, tone]) => <div key={name} className="grid grid-cols-[1.3fr_1fr_.8fr_.9fr_.75fr] items-center border-b border-[#edf0f4] px-4 py-3.5 last:border-b-0"><span className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-full bg-[#eaf1fb] text-[9px] font-bold text-[#3f6fae]">{name.split(" ").map(x=>x[0]).join("")}</span><strong className="text-[11px]">{name}</strong></span><span className="text-[10px] text-[#526176]">{team}</span><span className="text-[10px] text-[#526176]">{zone}</span><span><strong className="block text-[10px]">{badge}</strong><small className="mt-1 block text-[9px] text-[#8692a2]">BLE · 09:24</small></span><span className="flex items-center gap-2 text-[10px] font-medium"><StatusDot tone={tone as "good" | "warn" | "risk"} />{status}</span></div>)}
        </section>
        <aside className="space-y-3">
          <section className="rounded-[16px] border border-[#dbe2ea] bg-[#0a192a] p-4 text-white"><p className="text-[9px] font-semibold tracking-[.1em] text-[#7ea4d1]">VARDİYA DAĞILIMI</p><h2 className="mt-2 text-[17px] font-semibold">Görünürlük %98,9</h2><p className="mt-1 text-[10px] text-[#8495a9]">21 kişinin son verisi gecikmeli.</p><div className="mt-5 space-y-3"><Progress label="Üretim" value="924" width="82%" /><Progress label="Bakım" value="286" width="52%" /><Progress label="Lojistik" value="214" width="40%" /><Progress label="Kalite & İSG" value="188" width="35%" /></div></section>
          <section className="rounded-[16px] border border-[#dbe2ea] bg-white p-4"><h2 className="text-[11px] font-semibold">Badge güveni</h2><div className="mt-4 space-y-3"><HealthRow icon={Wifi} title="Canlı sinyal" value="1.821" tone="good" /><HealthRow icon={BatteryMedium} title="Düşük pil" value="12" tone="warn" /><HealthRow icon={RadioTower} title="Veri gecikmesi" value="9" tone="risk" /></div></section>
        </aside>
      </div>
    </div>
  );
}

export function AssetsWorkspace() {
  const assets = [["Forklift F-18", "Forklift", "Kuzey Hat", "Kullanımda", "%82", "good"], ["Pompa P-203", "Üretim ekipmanı", "Montaj A", "İncelemede", "%91", "risk"], ["Kompresör C-04", "Utilities", "Teknik hacim", "Hazır", "%68", "good"], ["Kalibratör K-12", "El aleti", "Kalite", "Rezerve", "%44", "warn"], ["AGV-07", "Otonom araç", "Lojistik", "Şarjda", "%76", "idle"]];
  return <div className="mx-auto max-w-[1720px] px-4 py-4 xl:px-5"><PageHeader eyebrow="FABRİKA OPERASYONLARI · VARLIKLAR" title="Varlıklar & Filo" description="Ekipman, araç ve üretim varlıklarının konum, kullanım ve bakım bağlamı." status="4.662 İZLENİYOR" /><MetricStrip items={[{label:"İzlenen varlık",value:"4.662",note:"%98,6 görünür",tone:"good"},{label:"Kullanımda",value:"1.284",note:"%72 kapasite"},{label:"Bakımda",value:"84",note:"12 geciken",tone:"warn"},{label:"Konum belirsiz",value:"18",note:"Son veri >15 dk",tone:"risk"},{label:"Düşük kullanım",value:"126",note:"Optimizasyon fırsatı",tone:"warn"}]} /><div className="mt-3 grid gap-3 xl:grid-cols-[minmax(0,1fr)_340px]"><section className="overflow-hidden rounded-[16px] border border-[#dbe2ea] bg-white"><SurfaceTitle icon={Forklift} title="Varlık operasyon tablosu" note="Konum, kullanım, telemetri ve bakım" /><div className="grid grid-cols-[1.25fr_.9fr_1fr_.8fr_.6fr] border-b border-[#e5e9ef] bg-[#f7f9fc] px-4 py-2.5 text-[9px] font-semibold tracking-[.06em] text-[#768498]"><span>VARLIK</span><span>TÜR</span><span>SON KONUM</span><span>DURUM</span><span>KULLANIM</span></div>{assets.map(([name,type,zone,status,usage,tone])=><div key={name} className="grid grid-cols-[1.25fr_.9fr_1fr_.8fr_.6fr] items-center border-b border-[#edf0f4] px-4 py-4"><span className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-[9px] bg-[#edf4ff] text-[#2f6fd1]"><Boxes className="size-4"/></span><strong className="text-[11px]">{name}</strong></span><span className="text-[10px] text-[#566579]">{type}</span><span className="flex items-center gap-1.5 text-[10px] text-[#566579]"><MapPin className="size-3.5 text-[#7890ad]"/>{zone}</span><span className="flex items-center gap-2 text-[10px]"><StatusDot tone={tone as "good"|"warn"|"risk"|"idle"}/>{status}</span><strong className="text-[11px]">{usage}</strong></div>)}</section><aside className="space-y-3"><section className="rounded-[16px] border border-[#dbe2ea] bg-[#0a192a] p-4 text-white"><span className="inline-flex items-center gap-2 rounded-full bg-[#3b1620] px-2.5 py-1.5 text-[9px] font-semibold text-[#ff8fa0]"><Activity className="size-3.5"/> ANOMALİ</span><h2 className="mt-4 text-[18px] font-semibold">Pompa P-203</h2><p className="mt-2 text-[10px] leading-5 text-[#92a1b3]">Titreşim, sıcaklık ve bakım penceresi aynı risk kaydında korele edildi.</p><div className="mt-5 grid grid-cols-2 gap-2"><DarkStat label="Titreşim" value="8,4 mm/s"/><DarkStat label="Son paket" value="8 sn"/><DarkStat label="Tag sinyali" value="Güçlü"/><DarkStat label="Bakım" value="14 gün"/></div></section><section className="rounded-[16px] border border-[#dbe2ea] bg-white p-4"><h2 className="text-[11px] font-semibold">Filo özeti</h2><div className="mt-4 space-y-3"><HealthRow icon={Forklift} title="Forklift hazır" value="72 / 84" tone="good"/><HealthRow icon={Gauge} title="Ortalama kullanım" value="%78" tone="good"/><HealthRow icon={Wrench} title="Bakım SLA riski" value="12" tone="warn"/></div></section></aside></div></div>;
}

export function InsightsWorkspaceV2() {
  return <div className="mx-auto max-w-[1720px] px-4 py-4 xl:px-5"><PageHeader eyebrow="FABRİKA OPERASYONLARI · İÇGÖRÜLER" title="İçgörüler" description="Değişimi, nedenini ve izlenecek kararı aynı veri bağlamında gösteren analiz alanı." status="SON 30 GÜN" /><MetricStrip items={[{label:"Üretim uygunluğu",value:"%87,4",note:"+2,1 puan",tone:"good"},{label:"Alarm tepki süresi",value:"4,8 dk",note:"-38 sn",tone:"good"},{label:"Varlık kullanımı",value:"%72",note:"+4 puan",tone:"good"},{label:"Plan dışı duruş",value:"18,6 sa",note:"-3,2 saat",tone:"good"},{label:"Doğrulanmış değer",value:"₺2,48M",note:"Yılbaşından beri"}]} /><div className="mt-3 grid gap-3 xl:grid-cols-[1.25fr_.75fr]"><section className="rounded-[16px] border border-[#dbe2ea] bg-white"><SurfaceTitle icon={ChartNoAxesCombined} title="Operasyon performansı" note="Kaynak: olay, görev ve varlık kayıtları · 09:24"/><div className="p-5"><div className="grid gap-5 md:grid-cols-2"><InsightPanel title="Hangi alan SLA kaybı üretiyor?" answer="Montaj A" note="Toplam gecikmenin %42'si" bars={[["Montaj A",82],["Utilities",54],["Lojistik",38],["Kuzey Hat",24]]}/><InsightPanel title="Bakım müdahalesi neyi değiştirdi?" answer="-18% duruş" note="P-200 pompa ailesi" bars={[["Plansız duruş",72],["Tekrar alarm",44],["Müdahale süresi",36],["Enerji sapması",22]]}/></div></div></section><aside className="space-y-3"><section className="rounded-[16px] border border-[#dbe2ea] bg-[#0a192a] p-5 text-white"><span className="flex items-center gap-2 text-[10px] font-semibold text-[#7fadff]"><Sparkles className="size-4"/> OneClick yorumu</span><h2 className="mt-4 text-[18px] font-semibold leading-6">Bakım Ekibi 2&apos;nin 10:15 penceresi en düşük üretim etkisine sahip.</h2><p className="mt-3 text-[10px] leading-5 text-[#8e9db0]">Kaynak: 30 günlük duruş, vardiya ve ekip erişim kayıtları.</p><div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4"><span className="text-[9px] text-[#8fa0b3]">Güven</span><strong className="text-[12px] text-[#63d0ac]">%92 · yüksek</strong></div></section><section className="rounded-[16px] border border-[#dbe2ea] bg-white p-4"><h2 className="text-[11px] font-semibold">Rapor kapsamı</h2><div className="mt-4 space-y-3"><HealthRow icon={ShieldCheck} title="Güvenlik" value="12 rapor" tone="good"/><HealthRow icon={UsersRound} title="İş gücü" value="8 rapor" tone="good"/><HealthRow icon={Boxes} title="Varlık & filo" value="14 rapor" tone="good"/></div></section></aside></div></div>;
}

export function SolutionsWorkspaceV2() {
  return <div className="mx-auto max-w-[1720px] px-4 py-4 xl:px-5"><PageHeader eyebrow="ONECLICK · FABRİKA ÇÖZÜMLERİ" title="Çözümler" description="Aktif sonuç paketleri, ölçülen değer ve yeni ihtiyaçların tek çözüm planında buluştuğu alan." status="3 AKTİF" /><section className="relative overflow-hidden rounded-[18px] border border-[#17314d] bg-[#071525] p-5 text-white shadow-[0_18px_42px_rgba(12,30,51,.14)]"><div className="oc-shell-grid absolute inset-0 opacity-20"/><div className="relative grid gap-5 xl:grid-cols-[1fr_360px]"><div><span className="inline-flex items-center gap-2 rounded-full border border-[#2b537e] bg-[#0e2741] px-3 py-1.5 text-[9px] font-semibold text-[#72aefa]"><Sparkles className="size-3.5"/> AKTİF PORTFÖY</span><h2 className="mt-5 max-w-2xl text-[28px] font-semibold leading-[1.1] tracking-[-.04em]">Fabrika operasyonu için kurulan çözümler ölçülebilir bir sistem gibi çalışır.</h2><p className="mt-3 max-w-2xl text-[11px] leading-5 text-[#91a2b6]">Aynı harita, gateway ve kimlik altyapısını yeniden kullanarak güvenlik, varlık ve enerji sonuçlarını birlikte yönetin.</p><div className="mt-7 grid gap-3 md:grid-cols-3"><SolutionCard title="İş Gücü Güvenliği" metric="%98,9" note="Personel görünürlüğü" tone="blue"/><SolutionCard title="Varlık Performansı" metric="%72" note="Ortalama kullanım" tone="green"/><SolutionCard title="Enerji Optimizasyonu" metric="-8,4%" note="Baz döneme göre" tone="amber"/></div></div><aside className="rounded-[15px] border border-white/10 bg-white/[.055] p-4 backdrop-blur"><p className="text-[9px] font-semibold tracking-[.1em] text-[#7ea4d1]">PAYLAŞILAN ALTYAPI</p><h3 className="mt-2 text-[15px] font-semibold">Yeni çözüm için hazır</h3><div className="mt-5 space-y-3"><SharedLine label="Kampüs haritası" value="Hazır"/><SharedLine label="Gateway" value="214 / 216"/><SharedLine label="Aktif badge & tag" value="6.504"/><SharedLine label="Entra & SAP" value="Bağlı"/></div><div className="mt-5 rounded-[11px] bg-[#102944] p-3"><span className="text-[9px] text-[#8fa3b9]">Önerilen sonraki çözüm</span><strong className="mt-1.5 block text-[12px]">Forklift Yakınlık Güvenliği</strong><small className="mt-1 block text-[9px] text-[#6fd0ae]">Mevcut altyapının %74&apos;ü yeniden kullanılabilir</small></div></aside></div></section><div className="mt-3 grid gap-3 md:grid-cols-3"><LightSolution icon={ShieldCheck} title="Güvenlik portföyü" note="SOS, man-down, riskli alan ve muster"/><LightSolution icon={Boxes} title="Operasyon portföyü" note="Varlık, bakım, görev ve zaman"/><LightSolution icon={Sparkles} title="Yeni ihtiyacı tanımla" note="AI destekli ihtiyaç ve çözüm planı"/></div></div>;
}

export function InfrastructureWorkspace() {
  return <div className="mx-auto max-w-[1720px] px-4 py-4 xl:px-5"><PageHeader eyebrow="PLATFORM · ALTYAPI" title="Altyapı" description="Gateway, beacon, tag ve sensörlerden operasyon ekranlarına uzanan veri güveni." status="%98,7 GÜVEN" /><MetricStrip items={[{label:"Gateway & okuyucu",value:"216",note:"214 çevrimiçi",tone:"good"},{label:"Beacon & tag",value:"6.504",note:"%98,6 görünür",tone:"good"},{label:"Sensör",value:"1.248",note:"17 düşük pil",tone:"warn"},{label:"Kamera",value:"84",note:"82 aktif",tone:"good"},{label:"Gecikmeli kaynak",value:"21",note:"Operasyonu etkiliyor",tone:"risk"}]} /><div className="mt-3 grid gap-3 xl:grid-cols-[1.1fr_.9fr]"><section className="overflow-hidden rounded-[16px] border border-[#17314d] bg-[#081625] text-white"><SurfaceTitle icon={ServerCog} title="Saha veri zinciri" note="Son senkronizasyon 09:24:08"/><div className="relative min-h-[370px] p-5"><div className="oc-shell-grid absolute inset-0 opacity-20"/><div className="relative grid h-full min-h-[330px] content-center gap-4 md:grid-cols-4"><TopologyNode icon={BadgeCheck} title="Badge & Tag" value="6.504" note="%98,6 görünür"/><TopologyNode icon={RadioTower} title="Gateway" value="214 / 216" note="2 çevrimdışı" warn/><TopologyNode icon={Activity} title="Event Engine" value="8 sn" note="p95 gecikme"/><TopologyNode icon={ChartNoAxesCombined} title="OneClick" value="%98,7" note="Veri güveni"/></div></div></section><section className="overflow-hidden rounded-[16px] border border-[#dbe2ea] bg-white"><SurfaceTitle icon={RadioTower} title="Gateway sağlığı" note="Bağlantı, paket zamanı ve kapsama"/><div className="grid grid-cols-[1fr_.7fr_.7fr_.65fr] border-b border-[#e5e9ef] bg-[#f7f9fc] px-4 py-2.5 text-[9px] font-semibold text-[#748296]"><span>GATEWAY</span><span>ALAN</span><span>SON VERİ</span><span>DURUM</span></div>{[["GW-MA-014","Montaj A","4 sn","Canlı","good"],["GW-UT-007","Utilities","38 sn","Gecikmeli","warn"],["GW-LG-021","Lojistik","6 sn","Canlı","good"],["GW-KH-003","Kuzey Hat","12 dk","Çevrimdışı","risk"],["GW-QA-009","Kalite","5 sn","Canlı","good"]].map(([id,zone,last,state,tone])=><div key={id} className="grid grid-cols-[1fr_.7fr_.7fr_.65fr] items-center border-b border-[#edf0f4] px-4 py-3.5"><strong className="text-[10px]">{id}</strong><span className="text-[10px] text-[#637186]">{zone}</span><span className="text-[10px] text-[#637186]">{last}</span><span className="flex items-center gap-2 text-[9px]"><StatusDot tone={tone as "good"|"warn"|"risk"}/>{state}</span></div>)}</section></div><div className="mt-3 grid gap-3 md:grid-cols-4"><InfraCard icon={RadioTower} title="Gateway & okuyucular" note="Bağlantı, firmware ve kapsama"/><InfraCard icon={BadgeCheck} title="Beacon, tag & badge" note="Kimlik, atama, pil ve sinyal"/><InfraCard icon={Activity} title="Sensör & kameralar" note="Ölçüm, kalibrasyon ve olay"/><InfraCard icon={Building2} title="Harita & entegrasyon" note="Alan, geofence, API ve MQTT"/></div></div>;
}

export function AdministrationWorkspace() {
  return <div className="mx-auto max-w-[1720px] px-4 py-4 xl:px-5"><PageHeader eyebrow="PLATFORM · YÖNETİM" title="Yönetim" description="Fabrika tenantının erişim, lisans, politika ve denetim kapsamı." status="KURUMSAL" /><div className="grid gap-3 xl:grid-cols-[1fr_340px]"><section className="grid gap-3 sm:grid-cols-2"><AdminCard icon={UsersRound} title="Kullanıcılar & roller" note="286 kullanıcı · 14 rol" details={["Lokasyon ve alan kapsamı","Operasyon ve yönetim yetkileri","SSO ve MFA politikaları"]}/><AdminCard icon={Factory} title="Organizasyon & sahalar" note="3 saha · 12 bina" details={["Tenant ve şirket yapısı","Fabrika, bina ve vardiya kapsamı","Yerel saat ve dil ayarları"]}/><AdminCard icon={BadgeCheck} title="Lisans & çözümler" note="Professional plan" details={["3 aktif çözüm paketi","6.504 cihaz lisansı","Kullanım ve AI kredileri"]}/><AdminCard icon={ShieldCheck} title="Güvenlik & uyum" note="Son denetim bugün" details={["Audit ve değişiklik geçmişi","Veri saklama politikası","Bildirim ve eskalasyon"]}/></section><aside className="space-y-3"><section className="rounded-[16px] border border-[#dbe2ea] bg-[#0a192a] p-5 text-white"><p className="text-[9px] font-semibold tracking-[.1em] text-[#7ea4d1]">TENANT SAĞLIĞI</p><h2 className="mt-3 text-[20px] font-semibold">Kocaeli Üretim</h2><p className="mt-1 text-[10px] text-[#8d9caf]">Professional · yenileme 14 Kasım 2026</p><div className="mt-5 space-y-3"><SharedLine label="Kullanıcı kapsamı" value="%94"/><SharedLine label="MFA kullanımı" value="%98"/><SharedLine label="Audit aktarımı" value="Güncel"/></div></section><section className="rounded-[16px] border border-[#dbe2ea] bg-white p-4"><h2 className="text-[11px] font-semibold">Destek & servis</h2><div className="mt-4 space-y-3"><HealthRow icon={CheckCircle2} title="Platform durumu" value="Normal" tone="good"/><HealthRow icon={Clock3} title="Açık destek kaydı" value="2" tone="warn"/><HealthRow icon={ServerCog} title="Son yedek" value="08:00" tone="good"/></div></section></aside></div></div>;
}

function Progress({ label, value, width }: { label: string; value: string; width: string }) { return <div><div className="flex items-center justify-between text-[9px]"><span className="text-[#a5b2c2]">{label}</span><strong>{value}</strong></div><div className="mt-1.5 h-1.5 rounded-full bg-white/10"><span className="block h-full rounded-full bg-[#3e83e7]" style={{width}}/></div></div>; }
function HealthRow({ icon: Icon, title, value, tone }: { icon: LucideIcon; title: string; value: string; tone: "good" | "warn" | "risk" }) { return <div className="flex items-center gap-3"><span className={`grid size-8 place-items-center rounded-[9px] ${tone === "risk" ? "bg-[#fff0f2] text-[#d84258]" : tone === "warn" ? "bg-[#fff7e9] text-[#ba771c]" : "bg-[#ebf8f3] text-[#188663]"}`}><Icon className="size-4"/></span><span className="min-w-0 flex-1 text-[10px] font-medium">{title}</span><strong className="text-[10px]">{value}</strong></div>; }
function DarkStat({label,value}:{label:string;value:string}) { return <div className="rounded-[10px] bg-white/[.055] p-3"><span className="text-[9px] text-[#8091a6]">{label}</span><strong className="mt-1.5 block text-[11px]">{value}</strong></div>; }
function InsightPanel({title,answer,note,bars}:{title:string;answer:string;note:string;bars:[string,number][]}) { return <article className="rounded-[14px] border border-[#e0e5ec] p-4"><p className="text-[10px] font-semibold text-[#526176]">{title}</p><div className="mt-3 flex items-end justify-between"><strong className="text-[23px] tracking-[-.03em]">{answer}</strong><span className="text-[9px] text-[#77869a]">{note}</span></div><div className="mt-5 space-y-3">{bars.map(([label,value])=><div key={label} className="grid grid-cols-[100px_1fr_32px] items-center gap-2 text-[9px]"><span className="truncate text-[#69778b]">{label}</span><span className="h-1.5 rounded-full bg-[#edf1f5]"><span className="block h-full rounded-full bg-[#3478da]" style={{width:`${value}%`}}/></span><strong className="text-right">{value}</strong></div>)}</div></article>; }
function SolutionCard({title,metric,note,tone}:{title:string;metric:string;note:string;tone:"blue"|"green"|"amber"}) { const color=tone==="green"?"bg-[#123a33] text-[#62d1ae]":tone==="amber"?"bg-[#432f18] text-[#f0b45c]":"bg-[#12345e] text-[#78b0ff]"; return <article className="rounded-[14px] border border-white/10 bg-white/[.055] p-4"><span className={`inline-flex rounded-[8px] px-2 py-1 text-[8px] font-semibold ${color}`}>AKTİF</span><h3 className="mt-4 text-[12px] font-semibold">{title}</h3><strong className="mt-3 block text-[23px] tracking-[-.03em]">{metric}</strong><p className="mt-1 text-[9px] text-[#8c9bae]">{note}</p></article>; }
function SharedLine({label,value}:{label:string;value:string}) { return <div className="flex items-center gap-3 text-[10px]"><CheckCircle2 className="size-4 text-[#5dcca8]"/><span className="flex-1 text-[#9cabbc]">{label}</span><strong>{value}</strong></div>; }
function LightSolution({icon:Icon,title,note}:{icon:LucideIcon;title:string;note:string}) { return <article className="rounded-[15px] border border-[#dbe2ea] bg-white p-4"><span className="grid size-9 place-items-center rounded-[10px] bg-[#edf4ff] text-[#2d6fd2]"><Icon className="size-4"/></span><h3 className="mt-4 text-[12px] font-semibold">{title}</h3><p className="mt-1.5 text-[10px] text-[#748195]">{note}</p></article>; }
function TopologyNode({icon:Icon,title,value,note,warn}:{icon:LucideIcon;title:string;value:string;note:string;warn?:boolean}) { return <div className="relative rounded-[14px] border border-white/10 bg-white/[.055] p-4 text-center backdrop-blur"><span className={`mx-auto grid size-10 place-items-center rounded-[11px] ${warn?"bg-[#4a3017] text-[#efb251]":"bg-[#12365f] text-[#77aff7]"}`}><Icon className="size-5"/></span><h3 className="mt-3 text-[11px] font-semibold">{title}</h3><strong className="mt-2 block text-[18px]">{value}</strong><p className={`mt-1 text-[9px] ${warn?"text-[#eeb159]":"text-[#8294aa]"}`}>{note}</p></div>; }
function InfraCard({icon:Icon,title,note}:{icon:LucideIcon;title:string;note:string}) { return <article className="rounded-[15px] border border-[#dbe2ea] bg-white p-4"><span className="grid size-9 place-items-center rounded-[10px] bg-[#edf4ff] text-[#2f6fd1]"><Icon className="size-4"/></span><h3 className="mt-4 text-[11px] font-semibold">{title}</h3><p className="mt-1.5 text-[9px] leading-4 text-[#748195]">{note}</p></article>; }
function AdminCard({icon:Icon,title,note,details}:{icon:LucideIcon;title:string;note:string;details:string[]}) { return <article className="rounded-[16px] border border-[#dbe2ea] bg-white p-5"><div className="flex items-start justify-between"><span className="grid size-10 place-items-center rounded-[11px] bg-[#edf4ff] text-[#2f6fd1]"><Icon className="size-5"/></span><span className="rounded-full bg-[#f2f5f8] px-2.5 py-1.5 text-[9px] font-medium text-[#69778a]">{note}</span></div><h2 className="mt-5 text-[14px] font-semibold">{title}</h2><div className="mt-4 space-y-2.5">{details.map(detail=><div key={detail} className="flex items-center gap-2 text-[10px] text-[#657488]"><span className="size-1.5 rounded-full bg-[#79a5e4]"/>{detail}</div>)}</div></article>; }
