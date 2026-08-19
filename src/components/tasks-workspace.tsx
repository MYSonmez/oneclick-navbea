import type { LucideIcon } from "lucide-react";
import {
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  CircleDashed,
  ClipboardCheck,
  Clock3,
  Factory,
  ListChecks,
  MoreHorizontal,
  Sparkles,
  UserRound,
  UsersRound,
  Wrench,
} from "lucide-react";

type TaskTone = "blue" | "amber" | "green" | "red";

const taskTone: Record<TaskTone, string> = {
  blue: "bg-[#eaf2ff] text-[#286ed8]",
  amber: "bg-[#fff5e5] text-[#ac6d18]",
  green: "bg-[#e9f8f2] text-[#168565]",
  red: "bg-[#fff0f2] text-[#d74259]",
};

export function TasksWorkspace() {
  return (
    <div className="oc-ops-page">
      <header className="oc-ops-page-head">
        <h1>Görevler</h1>
        <div className="oc-ops-head-meta"><span><Clock3 className="size-4" />Bugün</span><strong>12 açık görev</strong></div>
      </header>

      <section className="oc-ops-stats" aria-label="Görev özeti">
        <TaskStat icon={ListChecks} label="Açık" value="12" note="4 yüksek öncelik" tone="blue" />
        <TaskStat icon={UsersRound} label="Ekipte" value="7" note="3 ekip çalışıyor" tone="green" />
        <TaskStat icon={CalendarClock} label="Yaklaşan" value="3" note="60 dakika içinde" tone="amber" />
        <TaskStat icon={CheckCircle2} label="Tamamlanan" value="18" note="Bugünkü vardiya" tone="green" />
      </section>

      <section className="oc-task-board">
        <aside className="oc-task-queue">
          <header><div><h2>İş sırası</h2><p>Öncelik ve son zamana göre</p></div><span>12</span></header>
          <div className="oc-task-filters"><strong>Tümü</strong><span>Bana atanan</span><span>Geciken</span></div>
          <div className="oc-task-list">
            <TaskRow code="GT-2481" title="P-203 titreşim kaynağını doğrula" meta="Montaj A · 09:45" owner="Bakım Ekibi 2" tone="red" active />
            <TaskRow code="GT-2478" title="Utilities kesinti kapsamını incele" meta="Enerji Merkezi · 10:00" owner="Yusuf Demir" tone="amber" />
            <TaskRow code="GT-2476" title="Forklift F-18 kontrolünü tamamla" meta="Lojistik · 11:30" owner="Saha Operasyonu" tone="blue" />
            <TaskRow code="GT-2472" title="Gateway GW-UT-007 bağlantısını doğrula" meta="Utilities · 13:00" owner="Altyapı Ekibi" tone="blue" />
          </div>
        </aside>

        <article className="oc-task-detail">
          <header>
            <div><span className="oc-task-code">GT-2481</span><h2>P-203 titreşim kaynağını doğrula</h2><p>Montaj A · Hat 3</p></div>
            <span className="oc-status-pill oc-status-danger">Yüksek öncelik</span>
          </header>

          <div className="oc-task-detail-body">
            <section className="oc-task-purpose">
              <div className="oc-task-purpose-icon"><Wrench className="size-5" /></div>
              <div><h3>Görev kapsamı</h3><p>P-203 pompasında oluşan titreşim artışının kaynağını saha ölçümüyle doğrulayın. Gerekirse rulman kontrolü için iş emri açın.</p></div>
            </section>

            <section className="oc-checklist-block">
              <div className="oc-block-title"><div><h3>Kontrol listesi</h3><p>2 / 4 adım tamamlandı</p></div><strong>%50</strong></div>
              <div className="oc-progress-track"><span style={{ width: "50%" }} /></div>
              <div className="oc-checklist">
                <CheckItem label="Alan güvenliğini ve erişim iznini doğrula" done />
                <CheckItem label="Son 60 dakikalık sensör kaydını incele" done />
                <CheckItem label="Taşınabilir cihazla titreşimi yeniden ölç" />
                <CheckItem label="Bulguyu ve önerilen işlemi kaydet" />
              </div>
            </section>

            <section className="oc-task-evidence">
              <div className="oc-block-title"><div><h3>Bağlı kayıtlar</h3><p>Görevin dayandığı operasyon verileri</p></div></div>
              <div className="grid gap-3 md:grid-cols-3">
                <Evidence icon={Factory} label="Varlık" value="Pompa P-203" meta="Montaj A · Hat 3" />
                <Evidence icon={CircleDashed} label="Olay" value="OL-1098" meta="Kritik titreşim" />
                <Evidence icon={ClipboardCheck} label="Bakım" value="BE-381" meta="Rulman kontrolü" />
              </div>
            </section>
          </div>
        </article>

        <aside className="oc-task-side">
          <section><div className="oc-block-title"><div><h3>Sorumluluk</h3><p>Atama ve zamanlama</p></div><MoreHorizontal className="size-4 text-[#8390a2]" /></div><Owner icon={UsersRound} label="Atanan ekip" value="Bakım Ekibi 2" /><Owner icon={UserRound} label="Görev sahibi" value="Ahmet Kaya" /><Owner icon={Clock3} label="Son zaman" value="Bugün · 09:45" alert /></section>
          <section className="oc-task-ai"><div className="flex items-center gap-2"><Sparkles className="size-4" /><strong>OneClick önerisi</strong></div><p>10:15–10:35 aralığında Hat 3 yükü düşüyor. Ölçüm tamamlanmazsa görevi bu bakım penceresine taşıyın.</p><div><span>Üretim planı</span><span>Bakım takvimi</span></div></section>
          <section><div className="oc-block-title"><div><h3>Son hareketler</h3><p>Bugün</p></div></div><Activity time="09:24" text="Görev Bakım Ekibi 2’ye atandı" /><Activity time="09:18" text="Olay kaydından görev oluşturuldu" /></section>
        </aside>
      </section>
    </div>
  );
}

function TaskStat({ icon: Icon, label, value, note, tone }: { icon: LucideIcon; label: string; value: string; note: string; tone: TaskTone }) { return <article><span className={`grid size-10 place-items-center rounded-[11px] ${taskTone[tone]}`}><Icon className="size-[18px]" /></span><div><p>{label}</p><strong>{value}</strong><small>{note}</small></div></article>; }
function TaskRow({ code, title, meta, owner, tone, active }: { code: string; title: string; meta: string; owner: string; tone: TaskTone; active?: boolean }) { return <article className={active ? "is-active" : ""}><div className="flex items-center justify-between"><span className={`oc-task-dot ${taskTone[tone]}`} /><small>{code}</small></div><h3>{title}</h3><p>{meta}</p><footer><span>{owner}</span><ChevronRight className="size-4" /></footer></article>; }
function CheckItem({ label, done }: { label: string; done?: boolean }) { return <div><span className={done ? "is-done" : ""}>{done ? <CheckCircle2 className="size-4" /> : <span />}</span><p className={done ? "is-done" : ""}>{label}</p></div>; }
function Evidence({ icon: Icon, label, value, meta }: { icon: LucideIcon; label: string; value: string; meta: string }) { return <div className="oc-evidence-card"><span><Icon className="size-4" /></span><small>{label}</small><strong>{value}</strong><p>{meta}</p></div>; }
function Owner({ icon: Icon, label, value, alert }: { icon: LucideIcon; label: string; value: string; alert?: boolean }) { return <div className="oc-owner-row"><span className={alert ? "is-alert" : ""}><Icon className="size-4" /></span><div><small>{label}</small><strong className={alert ? "text-[#c23c51]" : ""}>{value}</strong></div></div>; }
function Activity({ time, text }: { time: string; text: string }) { return <div className="oc-mini-activity"><span>{time}</span><p>{text}</p></div>; }
