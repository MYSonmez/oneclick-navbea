import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertTriangle,
  BadgeCheck,
  Camera,
  ChevronRight,
  Clock3,
  Factory,
  MapPin,
  RadioTower,
  ShieldAlert,
  Sparkles,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";

type IncidentState = "critical" | "warning" | "stable";
const incidentStyle: Record<IncidentState, { dot: string; badge: string }> = {
  critical: { dot: "bg-[#e4445d]", badge: "bg-[#fff0f2] text-[#ce3b52]" },
  warning: { dot: "bg-[#e39a31]", badge: "bg-[#fff5e6] text-[#a76918]" },
  stable: { dot: "bg-[#20a77e]", badge: "bg-[#e9f8f2] text-[#168565]" },
};

export function IncidentsWorkspace() {
  return (
    <div className="oc-ops-page oc-incident-page">
      <header className="oc-ops-page-head">
        <h1>Güvenlik &amp; Olaylar</h1>
        <div className="oc-ops-head-meta"><span><span className="size-2 rounded-full bg-[#20aa81]" />Sistem canlı</span><strong>7 açık olay</strong></div>
      </header>

      <section className="oc-ops-stats" aria-label="Olay özeti">
        <IncidentStat icon={ShieldAlert} label="Kritik" value="2" note="Müdahale gerekiyor" state="critical" />
        <IncidentStat icon={AlertTriangle} label="Yüksek" value="5" note="3 alan etkileniyor" state="warning" />
        <IncidentStat icon={UserRoundCheck} label="Müdahalede" value="4" note="6 kişi görevlendirildi" state="stable" />
        <IncidentStat icon={BadgeCheck} label="Bugün kapandı" value="11" note="Ort. 24 dakika" state="stable" />
      </section>

      <section className="oc-incident-board">
        <aside className="oc-incident-queue">
          <header><div><h2>Aktif olaylar</h2><p>Etki seviyesine göre</p></div><span>7</span></header>
          <div className="oc-incident-tabs"><strong>Açık</strong><span>Müdahalede</span><span>Kapatılan</span></div>
          <div className="oc-incident-list">
            <IncidentRow id="OL-1098" title="P-203 kritik titreşim" location="Montaj A · Hat 3" time="8 dk" state="critical" active />
            <IncidentRow id="OL-1096" title="Yaya–araç yakın geçişi" location="Lojistik · Koridor B" time="14 dk" state="critical" />
            <IncidentRow id="OL-1093" title="Gateway bağlantı kaybı" location="Utilities" time="38 dk" state="warning" />
            <IncidentRow id="OL-1089" title="Yetkisiz bölge girişi" location="Depo · Bölge 4" time="51 dk" state="warning" />
          </div>
        </aside>

        <article className="oc-incident-detail">
          <header><div><span>OL-1098 · 09:16</span><h2>P-203 kritik titreşim</h2><p>Montaj A · Hat 3</p></div><span className="oc-status-pill oc-status-danger">Kritik</span></header>

          <section className="oc-incident-scene">
            <div className="oc-incident-scene-top"><span><Factory className="size-4" />Montaj A</span><span>Canlı görünüm · 09:24</span></div>
            <div className="oc-incident-zone"><span className="oc-incident-pulse"><Activity className="size-5" /></span><strong>Pompa P-203</strong><small>Titreşim 8,4 mm/s</small></div>
            <div className="oc-incident-signal"><span>GW-MA-014</span><i /><span>P-203</span></div>
            <div className="oc-incident-location"><MapPin className="size-4" /><span><small>SON KONUM</small><strong>Montaj A · Hat 3</strong></span></div>
          </section>

          <section className="oc-incident-evidence">
            <div className="oc-block-title"><div><h3>Kanıt ve sinyaller</h3><p>Olayı oluşturan doğrulanmış kayıtlar</p></div><span className="oc-status-pill oc-status-success">%96 güven</span></div>
            <div className="grid gap-3 md:grid-cols-3">
              <Signal icon={Activity} label="Titreşim" value="8,4 mm/s" meta="Eşik: 6,0" state="critical" />
              <Signal icon={Camera} label="Görüntü" value="Kamera C-12" meta="09:17 kaydı" state="stable" />
              <Signal icon={RadioTower} label="Kaynak" value="GW-MA-014" meta="4 sn gecikme" state="stable" />
            </div>
          </section>
        </article>

        <aside className="oc-response-panel">
          <section><div className="oc-block-title"><div><h3>Müdahale durumu</h3><p>8 dakikadır açık</p></div><span className="oc-status-pill oc-status-warning">SLA 12 dk</span></div><ResponseStep time="09:16" title="Olay oluşturuldu" meta="TR-14 sensör kuralı" done /><ResponseStep time="09:18" title="Görev atandı" meta="Bakım Ekibi 2" done /><ResponseStep time="09:21" title="Ekip kabul etti" meta="Tahmini varış: 09:28" active /><ResponseStep time="—" title="Saha doğrulaması" meta="Bekleniyor" /></section>
          <section className="oc-incident-ai"><div><Sparkles className="size-4" /><strong>OneClick değerlendirmesi</strong></div><p>Titreşim artışı, sıcaklık değişimi ve geciken rulman bakımıyla aynı zaman aralığında oluştu.</p><div className="oc-ai-source"><span>3 sensör</span><span>1 bakım kaydı</span><strong>%96 güven</strong></div></section>
          <section><div className="oc-block-title"><div><h3>Müdahale ekibi</h3><p>2 kişi yolda</p></div><UsersRound className="size-4 text-[#7d8999]" /></div><div className="oc-response-team"><span>AK</span><div><strong>Ahmet Kaya</strong><small>Bakım teknisyeni · 4 dk</small></div><ChevronRight className="ml-auto size-4 text-[#8793a3]" /></div><div className="oc-response-team"><span>SD</span><div><strong>Selin Demir</strong><small>İSG uzmanı · 6 dk</small></div><ChevronRight className="ml-auto size-4 text-[#8793a3]" /></div></section>
        </aside>
      </section>
    </div>
  );
}

function IncidentStat({ icon: Icon, label, value, note, state }: { icon: LucideIcon; label: string; value: string; note: string; state: IncidentState }) { return <article><span className={`grid size-10 place-items-center rounded-[11px] ${incidentStyle[state].badge}`}><Icon className="size-[18px]" /></span><div><p>{label}</p><strong>{value}</strong><small>{note}</small></div></article>; }
function IncidentRow({ id, title, location, time, state, active }: { id: string; title: string; location: string; time: string; state: IncidentState; active?: boolean }) { return <article className={active ? "is-active" : ""}><div><span className={`size-2 rounded-full ${incidentStyle[state].dot}`} /><small>{id}</small><time>{time}</time></div><h3>{title}</h3><p>{location}</p><footer><span className={incidentStyle[state].badge}>{state === "critical" ? "Kritik" : "Yüksek"}</span><ChevronRight className="size-4" /></footer></article>; }
function Signal({ icon: Icon, label, value, meta, state }: { icon: LucideIcon; label: string; value: string; meta: string; state: IncidentState }) { return <article><span className={incidentStyle[state].badge}><Icon className="size-4" /></span><small>{label}</small><strong>{value}</strong><p>{meta}</p></article>; }
function ResponseStep({ time, title, meta, done, active }: { time: string; title: string; meta: string; done?: boolean; active?: boolean }) { return <div className={`oc-response-step ${active ? "is-active" : ""}`}><div><span className={done ? "is-done" : active ? "is-active" : ""}>{done ? <BadgeCheck className="size-4" /> : active ? <Clock3 className="size-4" /> : null}</span><i /></div><time>{time}</time><p><strong>{title}</strong><small>{meta}</small></p></div>; }
