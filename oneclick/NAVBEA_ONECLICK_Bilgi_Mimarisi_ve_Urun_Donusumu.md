# NAVBEA → ONECLICK
## Bilgi Mimarisi, Navigasyon ve Ürün Dönüşüm Dokümanı

**Amaç:** Mevcut Navbea ürününü, işlevleri kaybetmeden; daha sade, AI-first, kişiselleştirilebilir ve ileride **OneClick** adı altında genişleyebilecek bir platform mimarisine hazırlamak.

**Hedef kullanım:** Bu doküman Codex'e proje bağlamı ve tasarım/uygulama kararları vermek için hazırlanmıştır. Bir görsel tasarım spesifikasyonu değildir; öncelikle **ürün mimarisi, navigasyon, modül hiyerarşisi ve geçiş mantığını** tanımlar.

---

# 1. Temel ürün kararı

OneClick, yalnızca “Navbea'nın yeni tasarımı” veya “Navbea'ya AI eklenmiş hali” olmamalıdır.

OneClick'in ürün mantığı:

> **Problem → Çözüm → Altyapı → Kurulum → Operasyon → Optimizasyon**

Kullanıcının Navbea'nın teknik modül yapısını öğrenmesi gerekmemelidir.

Bugünkü tipik yaklaşım:

- cihazı tanımla
- haritayı/bölgeyi oluştur
- alarm kuralı tanımla
- workflow kur
- dashboard hazırla
- rapor oluştur

OneClick yaklaşımı:

> “Forkliftlerin tehlikeli bölgelere girmesini önlemek ve çalışanlara fazla yaklaştığında uyarı almak istiyorum.”

Sistem bu ihtiyaçtan hareketle gerekli:
- yazılım kabiliyetlerini,
- cihazları,
- harita/bölge yapılarını,
- kuralları,
- alarm akışlarını,
- dashboardları,
- raporları,
- entegrasyonları

bir **Solution Plan** halinde önerebilmelidir.

---

# 2. En önemli prensip: İşlevleri kaldırma, teknik hiyerarşiyi kullanıcıdan kaldır

Mevcut Navbea'da çok sayıda işlevsel sayfa vardır. Bunların önemli bölümü gerçek operasyon işidir ve korunmalıdır.

Özellikle şu tip sayfalar kesinlikle “gizli” veya erişilmesi zor hale getirilmemelidir:

- Süre Eşleştirme
- Aktif Görevler
- Alarm Özeti / Alarm Yönetimi
- Canlı İzleme
- Personeller
- Ekipmanlar
- Raporlar
- Mesai / Devam
- Görev ve Checklist
- Alt Yüklenici İşleri
- Harita ve Bölge yönetimi
- Cihaz / Gateway / Sensör yönetimi

**Değişecek şey işlev değil, kullanıcının onu nasıl bulduğu ve nasıl adlandırdığıdır.**

Örneğin mevcut rota:

`/modules/task-time-distributions/time-matching`

kullanıcının zihinsel modelinde:

`Modüller → Task Time Distributions → Time Matching`

olarak görünmemelidir.

Hedef zihinsel model:

`İşler → Süre Eşleştirme`

Önerilen gelecekteki semantik rota:

`/work/time-matching`

> Geçiş aşamasında mevcut rota kırılmamalı. Yeni route alias/redirect eklenebilir.

---

# 3. “Module” ile “Solution” aynı şey değildir

Bu ayrım OneClick için kritiktir.

## 3.1 Capability / Modül

Sistemin temel kabiliyetidir.

Örnekler:
- Location
- Detection
- Rules
- Alerts
- Workflows
- Tasks
- Reports
- Analytics
- Maps
- Integrations
- Hardware Management

Bunlar ürünün yapı taşlarıdır.

## 3.2 Solution

Kullanıcının gerçek bir operasyon problemini çözen paketlenmiş deneyimdir.

Örnek:

### Forklift Safety Intelligence

İçinde:
- canlı forklift konumu
- UWB/BLE altyapısı
- geofence
- hız takibi
- personel-forklift yakınlık tespiti
- alarm
- görev
- dashboard
- rapor
- donanım
- entegrasyon

bulunabilir.

Kullanıcı “7 modül satın alıyorum” diye düşünmemelidir.

Kullanıcı:

> “Forklift güvenliği çözümünü kullanıyorum.”

diye düşünmelidir.

---

# 4. Hedef ana navigasyon

İlk aşamada sidebar mümkün olduğunca sade tutulmalıdır.

## Önerilen temel sidebar

```text
ONECLICK

⌂ Ana Sayfa

OPERASYON
◉ Canlı
⚠ Alarmlar & Olaylar
✓ İşler

KAYNAKLAR
♙ Kişiler
◇ Varlıklar
⌖ Lokasyonlar

ANALİZ
▥ Insights

ÇÖZÜMLER
◆ Çözümlerim
＋ Çözüm Ekle

────────────

▣ Altyapı
⚙ Yönetim
```

Bu yapı gerektiğinde daha da sadeleştirilebilir ancak mantık korunmalıdır.

---

# 5. İşler bölümü

Mevcut Navbea'nın en önemli operasyon ekranlarının önemli kısmı burada toplanmalıdır.

## İşler

```text
İşler

Genel Bakış
Aktif Görevler

ZAMAN & İŞ GÜCÜ
Süre Eşleştirme
Süre Dağılımı
Onaylar
Mesai & Devam

SAHA OPERASYONU
Görevler & Checklist
Alt Yüklenici İşleri
İş Akışları
```

## 5.1 Süre Eşleştirme özel durumu

`Süre Eşleştirme` yüksek frekanslı bir ekran kabul edilmelidir.

Erişim yolları:

1. `İşler → Süre Eşleştirme`
2. `Çalışma Alanım → ★ Süre Eşleştirme`
3. Üstteki `Son Kullanılanlar` sekmesi
4. Global arama / command palette
5. İleride OneClick AI: “Süre eşleştirmeyi aç.”

Bu sayfa yeni mimaride kesinlikle ortadan kaldırılmamalı.

---

# 6. Kullanmak ile yapılandırmak ayrılmalı

Bugünkü ürünlerde en büyük karmaşalardan biri günlük operasyon ile sistem konfigürasyonunun aynı navigasyon düzeyinde bulunmasıdır.

OneClick'te bunları ayır.

## Operasyon kullanımı

Örnek:

`Alarmlar & Olaylar → Aktif Alarmlar`

Kullanıcı:
- alarmı görür,
- inceler,
- onaylar,
- atar,
- çözer.

## Yapılandırma

Örnek:

`Studio → Alarm Kuralları`

Kullanıcı:
- hangi koşulda alarm üretileceğini belirler,
- tetikleyici tanımlar,
- notification/eskalasyon kuralı oluşturur.

Aynı ayrım görevlerde de kullanılmalı:

- `İşler → Görevler` = günlük kullanım
- `Studio → Workflow Builder` = sistemi tasarlama

---

# 7. “Modüller” ana sidebar öğesi kaldırılmalı

`Modüller` teknik bir kavramdır ve kullanıcı işi değildir.

Kullanıcı:
- “modüle gireyim”
değil,
- “süre eşleştireyim”
- “alarmı inceleyeyim”
- “forklifti bulayım”
- “rapor oluşturayım”

diye düşünür.

Bu nedenle:

**Modüller top-level navigasyondan kaldırılmalı.**

İçindeki işlevler operasyon amaçlarına göre yeni alanlara dağıtılmalıdır.

---

# 8. “Yönetim” sadeleştirilmeli

Bugünkü `Yönetim` altında çok farklı türde içerikler bulunuyor.

Bunları tek bir dev menüde toplamak yerine amaçlarına göre dağıt:

## Kişiler
- Personeller
- Personel Grupları
- Mobil Personeller
- Ziyaretçiler
- Ziyaretçi Grupları

## Varlıklar
- Ekipmanlar
- Araçlar
- Ekipman Grupları

## Lokasyonlar
- Lokasyonlar
- Haritalar
- Katlar
- Bölgeler
- Geofence
- Toplanma alanları

## Altyapı
- Cihazlar
- Beacon
- Gateway
- Sensör
- PIR
- ToF
- Kamera
- Geçiş cihazları
- Entegrasyonlar

## Yönetim
- Kullanıcılar
- Roller
- Tenant / hesap ayarları
- Lisans
- Audit / sistem günlükleri
- güvenlik ve erişim ayarları

---

# 9. Mevcut Navbea → OneClick eşleme tablosu

| Mevcut alan | OneClick hedefi |
|---|---|
| Ana Sayfa | Ana Sayfa |
| Dashboardlar / Panolar | Insights → Panolar |
| Canlı İzle | Canlı |
| Acil Durum | Alarmlar & Olaylar → Acil Durum |
| Konum Özeti | Canlı / Lokasyonlar |
| Alarm Özeti | Alarmlar & Olaylar |
| Aktif Görevler | İşler → Aktif Görevler |
| Personeller | Kişiler → Personel |
| Personel Grupları | Kişiler → Gruplar |
| Mobil Personeller | Kişiler → Mobil Personel |
| Misafirler | Kişiler → Ziyaretçiler |
| Misafir Grupları | Kişiler → Ziyaretçi Grupları |
| Ekipmanlar | Varlıklar → Ekipman |
| Ekipman Grupları | Varlıklar → Gruplar |
| Araçlar | Varlıklar → Araçlar |
| Sensörler | Altyapı → Sensörler |
| Beacon | Altyapı → Cihazlar |
| Wi-Fi / Gateway | Altyapı → Cihazlar |
| Kameralar | Altyapı → Kameralar |
| Geçiş cihazları | Altyapı → Erişim Cihazları |
| Haritalar | Lokasyonlar → Haritalar |
| Bölgeler | Lokasyonlar → Bölgeler |
| Görev & Checklist | İşler |
| Süre Eşleştirme | İşler → Zaman & İş Gücü |
| Süre Dağılımı | İşler → Zaman & İş Gücü |
| Onay | İşler → Onaylar |
| Mesai / Devam | İşler → Mesai & Devam |
| Alt Yüklenici İşleri | İşler → Saha Operasyonu |
| İş Akışları | İşler + Studio |
| Formlar | Studio → Formlar |
| Anketler | Studio / ilgili Solution |
| Alarm Yönetimi | Studio → Alarm Kuralları |
| Geçiş Kuralları | Studio → Kurallar |
| Bildiriciler | Studio → Notifications / Eskalasyon |
| Etiketler | Gelişmiş ayarlar / ilgili veri nesnesi |
| Risk Faktörleri | Studio / Safety Solution ayarları |
| Raporlar | Insights → Raporlar |
| Isı Haritası | Insights → Mekânsal Analiz |
| Dinamik Raporlar | Insights / Studio |
| Kullanıcılar | Yönetim |
| Roller | Yönetim |
| Sistem Günlükleri | Yönetim → Audit |
| API / Webhook | Altyapı → Entegrasyonlar |
| Marketplace | Çözümler → Keşfet |
| Kurulum Sihirbazı | Çözüm Ekle → Deployment |

---

# 10. Kişiselleştirilebilir sidebar

Herkes aynı sidebar'ı kullanmamalıdır.

Sidebar şu kaynaklara göre kişiselleştirilebilir:

- kullanıcı rolü
- lisanslanan çözümler
- kullanıcının sık kullandığı ekranlar
- yetkiler
- site/lokasyon kapsamı

## Örnek: operasyon yöneticisi

```text
Ana Sayfa
Canlı
İşler
  Süre Eşleştirme ★
  Aktif Görevler
  Onaylar
Kişiler
Insights
```

## Örnek: sistem yöneticisi

```text
Ana Sayfa
Canlı
Altyapı
  Cihazlar
  Gateway
  Sensörler
  Haritalar
Entegrasyonlar
Yönetim
```

## Örnek: İSG kullanıcısı

```text
Ana Sayfa
Canlı
Alarmlar & Olaylar
Acil Durum
Kişiler
Görevler
Insights
```

---

# 11. “Çalışma Alanım” / Favoriler

Her ekran kullanıcı tarafından sabitlenebilmelidir.

Örnek:

```text
ÇALIŞMA ALANIM

★ Süre Eşleştirme
★ Alarm Özeti
★ Personeller
★ Günlük Giriş Raporu
```

Sayfa header'ında `☆ / ★` davranışı olabilir.

Bu özellik:
- sık kullanılan sayfalara tek tık erişim sağlar,
- sidebar'ı şişirmeden kişiselleştirme sağlar,
- OneClick'in “kullanıcıya adapte olan platform” vizyonunu destekler.

---

# 12. Son Kullanılanlar korunmalı

Mevcut tasarımdaki üstteki tarayıcı sekmesine benzeyen `Son Kullanılanlar` alanı korunmalıdır.

Beklenen davranışlar:

- sayfayı açınca sekme oluşur
- sekme değiştirilebilir
- sekme kapatılabilir
- sekme pinlenebilir
- pinli sekmeler limitten korunabilir
- aktif sekme belirgin olmalı
- kullanıcı aynı sayfayı tekrar açarsa duplicate yerine mevcut sekmeye odaklanılabilir

Bu alan OneClick'in çok sayıda sayfasını kullanıcıya hızlı erişilebilir tutmak için önemli bir katmandır.

---

# 13. Global Search → OneClick Command

Üst arama yalnız metin araması olmamalıdır.

Gelecekte tek giriş noktası:

```text
✦ OneClick'a sor...
```

Şunları aynı anda destekleyebilir:

### Search
- kişi ara
- cihaz ara
- lokasyon ara
- rapor ara
- sayfa ara

### Navigation
- “Süre eşleştirmeyi aç”
- “Aktif alarmlara git”

### Query
- “Depo A'daki çevrimdışı cihazları göster”

### Action
- “Mehmet için görev oluştur”

### AI
- “Forklift güvenliği için nasıl çözüm kurabilirim?”

---

# 14. OneClick AI ayrı bir sidebar uygulaması olmamalı

`AI Solution Engineer` güçlü bir yetenektir fakat AI üründen ayrı hissedilmemelidir.

AI:
- Home'da,
- global command'da,
- Solution Builder'da,
- Reports/Insights'ta,
- Time Matching'de,
- Hardware planning'de

bağlama göre görünmelidir.

OneClick AI bir “uygulama” değil, **platform intelligence layer** olarak düşünülmelidir.

---

# 15. OneClick Studio

İleride şu alanı ekle:

```text
OneClick Studio

AI BUILD
Ne istediğini anlat.

ADVANCED BUILDER
Manuel oluştur.
```

Studio'nun kapsayabileceği şeyler:

- alarm rule
- workflow
- checklist
- görev şablonu
- form
- dashboard
- report
- automation
- notification / escalation

## Advanced Builder örneği

```text
Trigger
   ↓
Condition
   ↓
Detection
   ↓
Action
   ↓
Notification
```

---

# 16. Solutions yapısı

## Çözümlerim

Müşterinin aktif/pilot çözümleri:

- Site Workforce Intelligence
- Clinical Asset Flow
- Forklift Safety
- Emergency Muster
- Visitor Management

## Çözüm Ekle / Discover

Kullanıcı şu şekillerde çözüm bulabilir:

1. sektör üzerinden
2. operasyon problemi üzerinden
3. hazır Solution Marketplace üzerinden
4. OneClick AI üzerinden
5. Custom Solution Builder üzerinden

---

# 17. Solution Plan

OneClick'teki en önemli yeni obje `Solution Plan` olabilir.

Örnek:

```text
Forklift Safety Intelligence

HEDEF
Forklift-yaya kazalarını azalt

SAHALAR
İstanbul Fabrika
Depo A
Depo B

SOFTWARE
✓ Live Tracking
✓ Zone Control
✓ Proximity Detection
✓ Incident Management
✓ Analytics

HARDWARE
42 Asset Tag
118 Personnel Tag
20 UWB Anchor
4 Gateway

AUTOMATION
3 alarm rule
2 workflow
1 escalation policy

DASHBOARD
Safety Operations
Forklift Utilization

INTEGRATIONS
Microsoft Entra
SAP PM

ESTIMATE
Kurulum: 5–7 gün
Software: ...
Hardware: ...
```

Marketplace, AI Builder, Hardware Manager ve Deployment bu objenin farklı aşamaları olarak çalışabilir.

---

# 18. Hardware Planner

OneClick ileride müşterinin ihtiyaç duyduğu donanımı tahmin edebilmelidir.

Ancak AI kesinmiş gibi sayı üretmemelidir.

Örnek:

```text
Tahmini ihtiyaç: 16–22 UWB Anchor

Hesaplama girdileri
• 7.800 m² kapalı alan
• 2 kat
• Metal yoğunluğu: yüksek
• Hedef hassasiyet: ≤30 cm

Güven: %78

Kesin sayı için saha ölçümü önerilir.
```

Bu özellik:
- satış öncesi,
- teknik tasarım,
- kurulum,
- yatırım planlama

süreçlerini aynı platformda birleştirebilir.

---

# 19. AI by Exception

Gönderilen OneClick referanslarındaki en güçlü ürün fikirlerinden biri budur.

AI normal vakaları otomatik işler.

Kullanıcı yalnız istisnaları yönetir.

Örnek Time Matching:

```text
2.000 çalışan

1.824 otomatik eşleşti
  142 öneri hazır
   34 manuel kontrol gerekiyor
```

Kullanıcının işi 2.000 kayıtla uğraşmak değil, 34 problemli kaydı çözmek olmalıdır.

Bu yaklaşım OneClick'te özellikle:
- süre eşleştirme,
- alarm korelasyonu,
- görev atama,
- cihaz sağlık kontrolü,
- ziyaretçi doğrulama,
- anomali inceleme

alanlarında kullanılabilir.

---

# 20. İşler ana ekranı için öneri

`İşler` yalnız bir menü listesi olmamalıdır.

Örnek:

```text
İŞLER

Bugün

┌──────────────────────────────────────┐
│ Süre Eşleştirme                     │
│                                      │
│ 2.084 personel                       │
│ 1.916 eşleşti                        │
│ 124 kontrol gerekiyor                │
│ 44 eşleşmedi                         │
│                                      │
│ %91 tamamlandı          [Devam Et →] │
└──────────────────────────────────────┘

Bekleyen Onaylar       38
Geciken Görevler       12
Atanmamış İşler         6
```

Böylece yüksek frekanslı işlemler görünür kalır.

---

# 21. Home / Command Center

Ana sayfa yalnız KPI kartlarından oluşmamalıdır.

Önerilen hiyerarşi:

## 1. Attention / Today
“Bugün dikkat gerektiren 3 konu var.”

## 2. AI Brief
- kritik anomali
- fırsat
- risk
- optimizasyon önerisi

## 3. Active Solutions
- aktif çözüm
- site
- durum
- ana KPI

## 4. Today's Work
- onay
- alarm
- görev
- deployment

## 5. Live Operations
Gerçek operasyon haritası / saha özeti.

## 6. Recent Activity
Platform aktivitesi.

---

# 22. Digital Twin / Site Model

OneClick'in ortak altyapısı olarak site modeli kullanılmalıdır.

Örnek:

```text
ACME

Türkiye
├── İstanbul Factory
│   ├── A Building
│   │   ├── Floor 1
│   │   └── Floor 2
│   └── Warehouse
└── Ankara Warehouse
```

Her site altında:
- kat planı
- bölgeler
- kişiler
- varlıklar
- cihazlar
- sensörler
- gateway
- kameralar
- kurallar

bulunabilir.

Yeni bir çözüm kurulduğunda aynı site modelini tekrar kullanmalıdır.

---

# 23. Shared Infrastructure

Bir müşteri ikinci çözümü kurduğunda gereksiz tekrar yapılmamalıdır.

Örnek:

Müşteride zaten:
- site
- floor map
- 8 gateway
- kullanıcılar
- Entra entegrasyonu

varsa yeni çözüm bunları reuse edebilmelidir.

Solution Plan kullanıcıya şunu gösterebilir:

```text
Shared Infrastructure

✓ 8 mevcut gateway kullanılacak
✓ Mevcut harita kullanılacak
✓ Entra entegrasyonu kullanılacak

Tahmini altyapı tasarrufu: ...
```

---

# 24. Önerilen ürün katmanları

```text
ONECLICK
│
├── Experience Layer
│   ├── Home
│   ├── Live
│   ├── Work
│   ├── Insights
│   └── Solutions
│
├── Intelligence Layer
│   ├── AI Assistant
│   ├── AI Solution Engineer
│   ├── Recommendation
│   └── Anomaly / Optimization
│
├── Builder Layer
│   ├── Rules
│   ├── Workflow
│   ├── Dashboard
│   ├── Reports
│   └── Forms
│
├── Operational Platform
│   ├── Location
│   ├── Events
│   ├── Alarms
│   ├── Tasks
│   └── Analytics
│
└── Infrastructure
    ├── Sites & Maps
    ├── Hardware
    ├── Sensors
    ├── Cameras
    └── Integrations
```

---

# 25. Route migration prensibi

Şimdilik büyük route refactor'u yapılması zorunlu değildir.

İlk aşamada UI navigasyon değişebilir fakat mevcut route'lar çalışmaya devam edebilir.

Örnek:

Current:
`/modules/task-time-distributions/time-matching`

Future:
`/work/time-matching`

Geçiş stratejisi:

1. yeni semantik route ekle
2. mevcut component'i reuse et
3. eski route'u redirect veya alias olarak koru
4. internal linkleri zamanla yeni route'a taşı
5. bookmark/deep link kırma

---

# 26. Tasarım açısından ürün prensipleri

Bu doküman görsel spesifikasyon değildir fakat bilgi mimarisiyle doğrudan ilgili bazı UX kuralları vardır.

- Sidebar 7–10 ana öğeyi geçmemeli.
- Deep functionality flyout / secondary navigation ile açılmalı.
- Sık kullanılan operasyon ekranları minimum tıkla erişilmeli.
- En önemli aksiyonlar sayfa başlığının yanında görünmeli.
- AI aksiyonları mevcut manuel işlemleri tamamen gizlememeli.
- Kullanıcı AI önerisini görmeli, nedenini anlayabilmeli ve gerekiyorsa override edebilmeli.
- Kritik operasyonlarda insan onayı korunmalı.
- Kullanıcı hangi verinin canlı / gecikmeli / çevrimdışı olduğunu anlayabilmeli.
- Harita yalnız dekoratif hero görseli olarak kullanılmamalı; gerçek operasyon bağlamı göstermeli.
- “Wow effect” gerçek ürün değeriyle birleşmeli.

---

# 27. Şimdilik yapılmaması gerekenler

- Mevcut tüm sayfaları silmek.
- OneClick adına geçmek için bütün route'ları bir anda değiştirmek.
- AI'yı ayrı bir chatbot sayfasına hapsetmek.
- Her mevcut hizmeti sidebar'da göstermeye devam etmek.
- Marketplace'i sadece kart kataloğu gibi düşünmek.
- Dashboardlar için ayrı dev bir top-level alan yaratmak.
- Her role aynı sidebar'ı göstermek.
- AI'ın donanım veya ROI tahminini kesin gerçek gibi sunmak.
- Gerçek veriye bağlı olmayan 3D görselleri operasyon ekranının merkezine koymak.

---

# 28. Önerilen geçiş fazları

## Faz 1 — Bilgi mimarisi
Amaç: mevcut ürünü bozmadan OneClick'e hazırlamak.

- sidebar yeniden organize edilir
- Modüller kaldırılır
- İşler / Kişiler / Varlıklar / Lokasyonlar / Altyapı ayrımı gelir
- Son Kullanılanlar korunur
- favori/pin çalışma alanı eklenir
- global search güçlendirilir
- mevcut sayfalar reuse edilir

## Faz 2 — OneClick experience
- Çözümlerim
- Çözüm Ekle
- Solution Marketplace
- Solution Plan
- AI Solution Engineer
- OneClick Studio

## Faz 3 — AI operations
- AI by Exception
- Time Matching önerileri
- alarm korelasyonu
- görev önerileri
- anomaly detection
- Insights önerileri

## Faz 4 — Self-service platform
- Hardware Planner
- automated deployment
- lisans/paket önerileri
- shared infrastructure
- ROI/value tracking
- self-service solution deployment

---

# 29. Codex için uygulama önceliği

Kod değişikliği yapılırken şu sıra takip edilmeli:

### P0 — Mevcut fonksiyonları koru
Hiçbir mevcut işlev kaybolmamalı.

### P1 — Yeni navigasyon modelini oluştur
Önce sidebar ve route mapping.

### P2 — Sık kullanılan ekranları optimize et
Özellikle:
- Time Matching
- Live
- Alarms
- Tasks
- People
- Reports

### P3 — Personal workspace
Favorite / pin / recent.

### P4 — OneClick scaffolding
Solutions / Studio / Infrastructure.

### P5 — AI özellikleri
Backend yetenekleri hazır oldukça progressive enhancement.

---

# 30. Acceptance kriterleri

Yeni bilgi mimarisi başarılı kabul edilmek için:

- Süre Eşleştirme en fazla 2 tıkla açılabilmeli.
- Favoriye alınmış Süre Eşleştirme 1 tıkla açılabilmeli.
- Son kullanılan sayfa tek tıkla açılabilmeli.
- Mevcut önemli sayfaların hiçbiri erişilemez hale gelmemeli.
- Sidebar top-level öğe sayısı kontrollü kalmalı.
- Operasyon ile konfigürasyon ayrılmalı.
- Kullanıcı rolüne göre gereksiz menüler gizlenebilmeli.
- Eski deep linkler kırılmamalı.
- AI olmadan da tüm kritik operasyonlar yapılabilmeli.
- AI yalnız mevcut deneyimi hızlandırmalı ve akıllandırmalı.

---

# 31. Temel ürün cümlesi

**OneClick, şirketin operasyonel problemini anlayıp gerekli yazılım, donanım, kurallar, workflow'lar ve analitiği tek bir çözüm halinde tasarlayan, kuran, çalıştıran ve sürekli optimize eden AI-native operasyon platformudur.**

Bu nedenle gelecekte:

- **Navbea Live** → canlı operasyon motoru
- **Insights** → analitik motoru
- **Studio** → oluşturma / yapılandırma motoru
- **Hardware Manager** → fiziksel altyapı
- **Solutions / Marketplace** → çözüm katmanı
- **AI** → bütün katmanları bağlayan intelligence layer

olarak düşünülebilir.

---

# 32. Kaynak ürün kapsamı

Bu dönüşüm mevcut Navbea'nın şu gerçek işlevlerini koruma varsayımıyla hazırlanmıştır:

- canlı kişi/varlık izleme
- lokasyon / kat / bölge
- alarm ve olay yönetimi
- acil durum
- görev ve checklist
- personel / ziyaretçi / ekipman
- cihaz / gateway / beacon / sensör / kamera
- harita ve bölge yönetimi
- süre eşleştirme ve onay
- mesai ve devam
- iş akışları
- formlar
- raporlar ve analitik
- kullanıcı / rol / audit
- API / webhook / entegrasyonlar
- dashboardlar
- marketplace / çözüm yaklaşımı

Bu kapsamdaki işlevler OneClick'e geçişte **silinmeyecek, yeniden organize edilecektir.**
