const TRIP_DATA = {
  title: "2027 中歐冬季旅程",
  subtitle: "2/3–2/15｜13 天 12 夜｜3 人｜攝影 × 古城 × 高塔特拉雪景",
  meta: {
    travelers: 3,
    days: 13,
    nights: 12,
    start: "2027-02-03",
    end: "2027-02-15"
  },
  flights: [
    { date: "2/3", weekday: "三", flight: "TR867", route: "Taipei TPE → Singapore SIN", time: "16:40–21:15" },
    { date: "2/4", weekday: "四", flight: "TR60", route: "Singapore SIN → Vienna VIE", time: "02:45–08:30" },
    { date: "2/14", weekday: "日", flight: "TR61", route: "Vienna VIE → Singapore SIN", time: "10:00–04:40 (+1)" },
    { date: "2/15", weekday: "一", flight: "TR874", route: "Singapore SIN → Taipei TPE", time: "08:30–13:15" }
  ],
  hotels: [
    { date: "2/4–2/6", hotel: "InterContinental Budapest", city: "Budapest", map: "https://www.google.com/maps/search/?api=1&query=InterContinental+Budapest" },
    { date: "2/6–2/7", hotel: "Hotel Panorama", city: "Štrbské Pleso", map: "https://www.google.com/maps/search/?api=1&query=Hotel+Panorama+Strbske+Pleso" },
    { date: "2/7–2/9", hotel: "Aparthotel Cristina", city: "Zakopane", map: "https://www.google.com/maps/search/?api=1&query=Aparthotel+Cristina+Zakopane" },
    { date: "2/9–2/10", hotel: "Holiday Inn Krakow City Centre", city: "Kraków", map: "https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Krakow+City+Centre" },
    { date: "2/10–2/12", hotel: "IntercityHotel Budapest", city: "Budapest", map: "https://www.google.com/maps/search/?api=1&query=IntercityHotel+Budapest" },
    { date: "2/12–2/14", hotel: "InterContinental Vienna", city: "Vienna", map: "https://www.google.com/maps/search/?api=1&query=InterContinental+Vienna" }
  ],
  checklist: [
    { id: "passport", label: "護照／旅行文件", group: "出發前" },
    { id: "idp", label: "台灣國際駕照＋台灣駕照", group: "租車" },
    { id: "sixt", label: "SIXT 跨境許可：斯洛伐克＋波蘭", group: "租車" },
    { id: "winter-tires", label: "確認 4 條冬季胎／雪鏈備用", group: "租車" },
    { id: "hu-vignette", label: "匈牙利 e-vignette", group: "租車" },
    { id: "sk-vignette", label: "斯洛伐克 e-vignette", group: "租車" },
    { id: "krakow-sct", label: "確認租車車牌後完成 Kraków SCT 登錄", group: "租車" },
    { id: "kasprowy", label: "Kasprowy Wierch 纜車票", group: "預約" },
    { id: "snowmobile", label: "Snowmobile 預約", group: "預約" },
    { id: "train", label: "Budapest → Vienna 火車票", group: "預約" },
    { id: "airport-transfer", label: "2/14 清晨 VIE 接送／計程車", group: "交通" },
    { id: "backup", label: "雲端備份護照／訂單／租車文件", group: "出發前" }
  ],
  days: [
    {
      date: "2/3", weekday: "三", title: "台灣出發 → 新加坡轉機", city: "Taipei → Singapore", hotel: "機上／轉機", theme: "flight", photo: "https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=1400&q=82",
      summary: "第一天只處理出發、轉機與長途飛行。",
      highlights: ["TR867", "樟宜轉機 5 小時 30 分", "確認行李直掛 VIE", "洗澡／換衣／充電／休息"],
      items: [
        ["16:40", "flight", "TR867", "Taipei TPE → Singapore SIN", ""],
        ["21:15", "transfer", "抵達樟宜機場", "確認 TR60 登機門、行李是否直掛 VIE、登機證", ""],
        ["21:30–00:00", "rest", "轉機整理", "吃飯、洗澡、換衣服、充電", ""],
        ["00:00–01:30", "rest", "休息／前往候機區", "避免睡過頭，留足登機緩衝", ""],
        ["02:45", "flight", "TR60", "Singapore SIN → Vienna VIE", ""]
      ],
      notes: ["TPE 報到時直接確認行李是否可一路掛到 VIE。", "若為分開票券，是否需要入境新加坡／重新托運，以現場航空公司指示為準。"]
    },
    {
      date: "2/4", weekday: "四", title: "抵達維也納 → 布達佩斯", city: "Vienna → Budapest", hotel: "InterContinental Budapest", theme: "city", photo: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1400&q=82",
      summary: "抵達日保持輕量：交通、入住、休息，傍晚只做多瑙河夜景。",
      highlights: ["08:30 VIE", "前往 Budapest", "入住", "Danube／Chain Bridge 夜景"],
      items: [
        ["08:30–10:30", "arrival", "抵達 Vienna VIE", "入境、領行李；時間視排隊情況調整", "約 2h"],
        ["10:30–11:00", "transit", "VIE → Wien Hbf", "Railjet／S-Bahn；確認月台與轉乘方式", "約 30m"],
        ["約 11:00–14:00", "train", "Wien Hbf → Budapest-Keleti", "選直達 Railjet／EC；2027 班次以 ÖBB 開售時刻為準", "約 3h"],
        ["14:00–15:00", "transit", "Keleti → InterContinental Budapest", "大行李建議計程車；辦理入住或寄放行李", "約 1h"],
        ["15:00–17:00", "rest", "入住／休息／補水", "抵達日不安排需預約的景點", "2h"],
        ["17:00–18:00", "photo", "多瑙河河岸（選擇性）", "體力許可再散步；Chain Bridge 外觀", "1h"],
        ["18:00 後", "food", "晚餐與休息", "依精神狀況就近用餐", ""]
      ],
      notes: ["長途飛行與跨境轉乘日，保留彈性，不把河岸散步列為必到。", "列車班次與票價尚未開放，出發前依 ÖBB／MÁV 正式時刻表確認。"]
    },
    {
      date: "2/5", weekday: "五", title: "Szentendre → Buda Castle → Matthias Church → Fisherman’s Bastion", city: "Budapest", hotel: "InterContinental Budapest", theme: "city", photo: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1400&q=82",
      summary: "一次完成 Szentendre 與 Buda Castle 區；Fisherman’s Bastion 不在後續重複。",
      highlights: ["Szentendre 老城", "Buda Castle", "Matthias Church", "Fisherman’s Bastion 日落"],
      items: [
        ["09:00–09:15", "transit", "飯店 → Batthyány tér", "步行／市區電車；以 BudapestGO 查當日路線", "15m"],
        ["約 09:15–10:00", "transit", "H5 → Szentendre", "約 40–45 分鐘；班次以當日公告為準", "40–45m"],
        ["10:00–11:30", "place", "Szentendre 老城", "Fő tér、巷弄、河岸街景", "1h30"],
        ["11:30–12:15", "food", "午餐", "Szentendre；冬季先確認開店餐廳", "45m"],
        ["約 12:15–13:00", "transit", "Szentendre → Batthyány tér", "搭 H5 回市區", "45m"],
        ["13:00–13:30", "transit", "前往 Buda Castle 區", "公車 16 或步行上城；依當日路況選擇", "30m"],
        ["13:30–14:15", "place", "Buda Castle", "城堡區、庭院與 Danube 視角", "45m"],
        ["14:15–15:00", "place", "Matthias Church", "室內開放與票務出發前確認", "45m"],
        ["15:00–16:15", "photo", "Fisherman’s Bastion", "日光拍攝；露台收費區依現場規則", "1h15"],
        ["16:15–17:00", "photo", "城堡區藍調時刻", "依當日日落時間微調", "45m"],
        ["17:00 後", "food", "晚餐／返回飯店", "公車 16 或計程車下山", ""]
      ],
      notes: ["Szentendre 冬季屬淡季，店家／室內景點營業時間應於出發前再確認。", "Fisherman’s Bastion 已在本日完成，2/11 不再排。"]
    },
    {
      date: "2/6", weekday: "六", title: "Budapest → Miskolc → Košice → Prešov → Poprad → Štrbské Pleso", city: "Budapest → Štrbské Pleso", hotel: "Hotel Panorama", theme: "drive", photo: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=82",
      summary: "長途冬季自駕日，以高速／快速道路與路況緩衝為主。",
      highlights: ["10:00 SIXT", "約 380 km", "跨境：HU → SK", "山區冬季路況"],
      items: [
        ["10:00", "car", "SIXT Budapest 取車", "確認冬季胎、跨境許可、車況、租車文件", ""],
        ["10:30–12:30", "drive", "Budapest → Miskolc", "高速路段為主", "約 2h"],
        ["12:30–13:15", "food", "午餐／休息", "Miskolc 附近", "45m"],
        ["13:15–15:00", "drive", "Miskolc → Košice", "跨境進入 SK", "約 1h45"],
        ["15:00–15:30", "rest", "Košice 補給", "不安排正式觀光", "30m"],
        ["15:30–17:30", "drive", "Košice → Prešov → Poprad", "山區／冬季預留緩衝", "約 2h"],
        ["17:30–18:15", "drive", "Poprad → Štrbské Pleso", "山區路段", "約 45m"],
        ["18:15–19:00", "hotel", "Hotel Panorama", "入住", ""],
        ["19:00–20:00", "food", "晚餐", "", "1h"]
      ],
      notes: ["跨境許可需明確包含斯洛伐克與波蘭。", "匈牙利／斯洛伐克 e-vignette 於出發前依 2027 最新規則購買。", "冬季胎四條；雪鏈作為備用。"]
    },
    {
      date: "2/7", weekday: "日", title: "Štrbské Pleso → Zakopane｜Jaszczurówka → Pęksowy Brzyzek → Gubałówka → Krupówki", city: "Štrbské Pleso → Zakopane", hotel: "Aparthotel Cristina", theme: "winter", photo: "https://domalenka.pl/uploads/images/hotel-patria/hotel-patria-nove/hotel-patria-nove-zima.jpg",
      summary: "09:00 退房後自駕至 Zakopane，途中安排 Jaszczurówka 與 Pęksowy Brzyzek，再走 Gubałówka、Krupówki。",
      highlights: ["09:00 出發", "Jaszczurówka", "Pęksowy Brzyzek", "Gubałówka", "Krupówki"],
      items: [
        ["09:00–09:30", "hotel", "早餐、退房與裝車", "貴重物品隨身；確認車況與天候", "30m"],
        ["09:30–12:00", "drive", "Štrbské Pleso → Zakopane", "經 Poprad／Tatranská Javorina／Łysa Polana；冬季邊境路況留緩衝", "約 2h30"],
        ["12:00–12:30", "photo", "Jaszczurówka 木造教堂", "先確認停車與教堂開放；尊重宗教場所拍攝規範", "30m"],
        ["12:30–13:15", "food", "午餐", "Zakopane", "45m"],
        ["13:15–13:45", "photo", "Pęksowy Brzyzek 歷史墓園", "確認冬季開放；安靜參觀並尊重墓園禮儀", "30m"],
        ["13:45–14:15", "transit", "停車／前往 Gubałówka 下站", "停合法付費停車場，車內勿留貴重物", "30m"],
        ["14:15–16:00", "photo", "Gubałówka", "搭纜車或步行上山，依風雪與營運狀況", "1h45"],
        ["16:00–17:30", "photo", "Krupówki", "黃昏街景；可在此用晚餐", "1h30"],
        ["17:30–18:00", "transit", "前往 Aparthotel Cristina", "確認停車與最晚入住方式", "30m"],
        ["18:00 後", "hotel", "入住、與朋友會合／晚餐", "Morskie Oko 支線的回程交通須先確認", ""]
      ],
      notes: ["Aparthotel Cristina 無行李服務；16:00 前不提供標準入住。", "車內只放一般行李；護照、相機、現金等貴重物品隨身。", "冬季跨境山區行駛務必保留緩衝。"]
    },
    {
      date: "2/8", weekday: "一", title: "Kasprowy Wierch → Snowmobile", city: "Zakopane / Kościelisko", hotel: "Aparthotel Cristina", theme: "winter", photo: "https://www.pkl.pl/data/pages/338/cp_cp_cp_20200108_a6500ab606436ab2.jpg",
      summary: "09:00 出發前往 Kuźnice，上午搭 Kasprowy 纜車，下午只排已確認集合點的 Snowmobile。",
      highlights: ["09:00 前往 Kuźnice", "Kasprowy Wierch", "午餐／轉場", "14:30 Snowmobile"],
      items: [
        ["09:00–09:30", "transit", "飯店 → Kuźnice", "計程車／當地 minibus；私家車不可直達纜車站", "30m"],
        ["09:30–10:00", "transit", "報到／候車", "預留排隊與纜車班次緩衝", "30m"],
        ["10:00–12:30", "photo", "Kasprowy Wierch", "纜車與山頂雪景；受風雪、能見度與營運影響", "2h30"],
        ["12:30–13:15", "transit", "下山並返回 Zakopane", "排隊時間視現場調整", "45m"],
        ["13:15–14:00", "food", "午餐", "Zakopane", "45m"],
        ["14:00–14:20", "transit", "前往 Snowmobile 集合點", "必須先取得業者確切地址與接駁方式", "20m"],
        ["14:20–14:30", "adventure", "報到／裝備／安全說明", "依業者要求提前到場；不要把 5 分鐘當緩衝", "10m"],
        ["14:30–16:30", "adventure", "Snowmobile", "Kościelisko／Butorów 區域；2h 體驗", "2h"],
        ["18:00–19:30", "food", "晚餐", "Zakopane", "1h30"]
      ],
      notes: ["Jaszczurówka 與 Pęksowy Brzyzek 已移至 2/7，避免 2/8 纜車後趕景點再趕集合。", "Snowmobile 集合地址尚須向業者核實；雪況不足可能改期、取消或改活動。", "Kasprowy 纜車受風雪與營運影響；預約時選接近 10:00 的上山時段並確認退改規則。"]
    },
    {
      date: "2/9", weekday: "二", title: "Zakopane → Kraków｜Wawel → Old Town", city: "Zakopane → Kraków", hotel: "Holiday Inn Krakow City Centre", theme: "city", photo: "https://dcontent.inviacdn.net/shared/img/web-830/2018/1/11/m0/537301.jpg",
      summary: "只住 Kraków 一晚，將核心老城一次走完；不塞 Schindler Factory／Kazimierz。",
      highlights: ["Wawel", "Cathedral", "Kanonicza", "Main Market Square", "St Mary’s", "Old Town 夜景"],
      items: [
        ["09:00–11:30", "drive", "Zakopane → Kraków", "冬季道路與進城車流預留緩衝", "約 2h30"],
        ["11:30–12:00", "hotel", "抵達飯店／停車／寄放行李", "確認停車位；大行李留在飯店", "30m"],
        ["12:00–13:00", "food", "午餐並步行至 Wawel", "避免在老城核心再次移車", "1h"],
        ["13:00–15:00", "place", "Wawel Castle 室內展覽／城堡區", "先買指定時段票；冬季展覽與最後入場依官網", "2h"],
        ["15:00–15:45", "place", "Wawel Cathedral", "參觀區域及最後入場時間出發前確認", "45m"],
        ["15:45–16:15", "photo", "Kanonicza Street", "步行前往老城", "30m"],
        ["16:15–16:45", "photo", "Grodzka Street", "步行街拍", "30m"],
        ["16:45–17:30", "photo", "Main Market Square／Cloth Hall", "廣場與建築外觀；依日落調整", "45m"],
        ["17:30–18:00", "place", "St Mary’s Basilica", "外觀或可入內部分；先核對宗教活動與遊客時段", "30m"],
        ["晚上", "photo", "Kraków Old Town 夜景", "主要步行", ""]
      ],
      notes: ["Holiday Inn Krakow City Centre 內有受控停車，但名額有限，建議預訂／確認。", "租車為外國車牌，進入 Kraków SCT 前依當時規定完成登錄。", "大型行李盡量留在飯店，不帶進老城核心。"]
    },
    {
      date: "2/10", weekday: "三", title: "Kraków → Budapest", city: "Kraków → Budapest", hotel: "IntercityHotel Budapest", theme: "drive", photo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=82",
      summary: "09:00 出發，安排休息與冬季路況緩衝；抵達 Budapest 後還車並休息。",
      highlights: ["09:00 出發", "純駕駛約 5.5–6.5h", "16:00–17:00 還車區間", "不排景點"],
      items: [
        ["09:00–12:00", "drive", "Kraków → Slovakia 路段", "長途自駕；依導航與冬季路況", "約 3h"],
        ["12:00–12:45", "rest", "服務區午餐／駕駛休息", "不要為趕還車壓縮休息", "45m"],
        ["12:45–16:00", "drive", "繼續前往 Budapest SIXT", "純駕駛約 5.5–6.5 小時；如延誤先聯絡門市", "約 3h15"],
        ["16:00–17:00", "car", "SIXT Budapest 還車", "依訂單門市營業時間；檢查油量、車況與文件", "1h"],
        ["17:00 後", "hotel", "IntercityHotel Budapest", "前往飯店、入住與休息", ""],
        ["晚上", "rest", "不安排景點", "把體力留給 2/11", ""]
      ],
      notes: ["不要為了塞景點壓縮高速路程緩衝。", "Kraków SCT 登錄與還車地點依實際租車車牌／訂單資料處理。"]
    },
    {
      date: "2/11", weekday: "四", title: "Central Market → Váci utca → Basilica → Parliament → Shoes on the Danube → Chain Bridge", city: "Budapest", hotel: "IntercityHotel Budapest", theme: "city", photo: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1400&q=82",
      summary: "Budapest 第二個完整拍攝日，集中 Pest＋Danube；不回 Buda Castle。",
      highlights: ["Central Market Hall", "Váci utca／Basilica", "Parliament", "Shoes on the Danube", "Chain Bridge 藍調"],
      items: [
        ["09:00–09:30", "transit", "前往 Central Market Hall", "", "30m"],
        ["09:30–11:00", "place", "Central Market Hall", "市場建築與食物／小物", "1h30"],
        ["11:00–11:30", "photo", "Váci utca", "街拍、商店立面", "30m"],
        ["11:30–12:30", "place", "St. Stephen’s Basilica", "外觀／內部依開放時間", "1h"],
        ["12:30–13:30", "food", "午餐", "", "1h"],
        ["13:30–15:00", "photo", "Hungarian Parliament", "Kossuth Lajos tér 建築視角", "1h30"],
        ["15:00–15:30", "photo", "Shoes on the Danube", "紀念地；保持安靜與尊重", "30m"],
        ["15:30–16:15", "transit", "前往 Batthyány tér", "", "45m"],
        ["16:15–17:15", "photo", "Batthyány tér", "多瑙河對岸 Parliament 全景", "1h"],
        ["17:15–17:45", "transit", "前往 Chain Bridge", "", "30m"],
        ["17:45–18:45", "photo", "Chain Bridge＋Danube", "黃昏、藍調時刻", "1h"],
        ["晚上", "photo", "Budapest 夜景", "返回飯店", ""]
      ],
      notes: ["Parliament 可拍兩個方向：Kossuth Lajos tér 近拍，以及 Batthyány tér 對岸全景。", "不重複 Fisherman’s Bastion。"]
    },
    {
      date: "2/12", weekday: "五", title: "Budapest → Vienna", city: "Budapest → Vienna", hotel: "InterContinental Vienna", theme: "train", photo: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1400&q=82",
      summary: "退房後搭直達 Railjet／EC 前往 Wien Hbf；抵達後只走市中心夜景。",
      highlights: ["Budapest-Keleti", "直達 Railjet／EC", "Wien Hbf", "Stephansdom", "Graben／Kohlmarkt"],
      items: [
        ["09:00–09:30", "hotel", "退房並前往 Budapest-Keleti", "預留找月台與候車時間", "30m"],
        ["約 10:00–13:00", "train", "Budapest → Wien Hbf", "直達 Railjet／EC；2027 班次開售後選定", "約 2h40–3h"],
        ["13:00–13:30", "transit", "Wien Hbf → InterContinental Vienna", "大行李搭計程車，或依 Wiener Linien 路線規劃", "約 30m"],
        ["13:30–16:00", "hotel", "寄放行李／午餐／休息", "依房間是否可提前入住調整", "2h30"],
        ["16:00–17:00", "photo", "Stephansdom", "外觀拍攝；入內遵守禮拜時間", "1h"],
        ["17:00–18:00", "photo", "Graben／Kohlmarkt", "步行街景與商店立面", "1h"],
        ["18:00 後", "food", "晚餐／返回飯店", "市中心步行", ""]
      ],
      notes: ["國際火車票常在出發前數月逐步開放；2027 班次以 ÖBB 最終時刻表為準。", "不再安排 Szentendre；此日專心換城市。"]
    },
    {
      date: "2/13", weekday: "六", title: "Schönbrunn → Belvedere → Hofburg", city: "Vienna", hotel: "InterContinental Vienna", theme: "city", photo: "https://www.avanse.com/blogs/images/Blog-10july.jpg",
      summary: "09:00 出發參觀 Schönbrunn、Belvedere、Hofburg；市中心教堂與街景已於前一晚完成。",
      highlights: ["09:00 出發", "Schönbrunn", "Belvedere", "Hofburg", "市區自由晚餐"],
      items: [
        ["09:00–09:30", "transit", "飯店 → Schönbrunn", "搭 U4／計程車；依入場時段與當日路線", "30m"],
        ["09:30–12:00", "place", "Schönbrunn Palace", "宮殿＋庭園；2027 開放時間及票券再確認", "2h30"],
        ["12:00–13:00", "food", "午餐", "Schönbrunn 周邊或移動途中", "1h"],
        ["13:00–13:45", "transit", "前往 Belvedere", "U-Bahn／電車；用 Wiener Linien 查當日路線", "45m"],
        ["13:45–15:30", "place", "Belvedere Palace", "上宮／庭園；室內展覽依時段票", "1h45"],
        ["15:30–16:00", "transit", "前往 Hofburg", "電車／步行，依當日路況", "30m"],
        ["16:00–16:45", "photo", "Hofburg 外觀與廣場", "戶外建築拍攝；不排室內博物館", "45m"],
        ["16:45 後", "food", "晚餐／自由活動", "Stephansdom、Graben、Kohlmarkt 已於 2/12 完成", ""]
      ],
      notes: ["Schönbrunn 的 2027 冬季營業時間與入場方式出發前重查。", "最後完整拍攝日，不安排高強度步行。"]
    },
    {
      date: "2/14", weekday: "日", title: "Vienna → Singapore", city: "Vienna → Singapore", hotel: "機上", theme: "flight", photo: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=82",
      summary: "最後一天只做機場轉移與航班。",
      highlights: ["06:15 預約車出發", "約 06:45 抵達 VIE", "10:00 TR61"],
      items: [
        ["05:45–06:15", "hotel", "起床、退房與行李確認", "早餐採外帶或前一晚準備", "30m"],
        ["06:15–06:45", "transit", "預約車：飯店 → VIE", "前一晚再次確認司機與集合點", "約 30m"],
        ["06:45–09:00", "airport", "報到／托運／安檢／出境", "預留 3 小時以上國際線緩衝", "2h15"],
        ["10:00", "flight", "TR61", "Vienna VIE → Singapore SIN", ""]
      ],
      notes: ["最後一天不排任何觀光。", "清晨交通以預約車／可靠計程車為主。"]
    },
    {
      date: "2/15", weekday: "一", title: "Singapore → Taiwan", city: "Singapore → Taipei", hotel: "—", theme: "flight", photo: "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=1400&q=82",
      summary: "抵達桃園，旅程結束。",
      highlights: ["04:40 SIN", "08:30 TR874", "13:15 TPE"],
      items: [
        ["04:40", "arrival", "抵達 Singapore SIN", "轉機", ""],
        ["08:30", "flight", "TR874", "Singapore SIN → Taipei TPE", ""],
        ["13:15", "arrival", "抵達桃園 TPE", "旅程結束", ""]
      ],
      notes: ["回國後整理照片與租車／旅程文件備份。"]
    }
  ],
  places: [
    { key:"Szentendre", name:"Szentendre 老城", en:"Szentendre Old Town", day:3, tag:"古城／街拍", duration:"2h", lens:"X100VI／16–55mm", image:"https://images.unsplash.com/photo-1516550893923-42d6c1f0c7e9?auto=format&fit=crop&w=1200&q=80", map:"https://www.google.com/maps/search/?api=1&query=Szentendre+Old+Town" },
    { key:"Buda Castle", name:"Buda Castle", en:"Budavári Palota", day:3, tag:"城堡／城市景", duration:"1h", lens:"16–55mm／70–300mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Buda%20Castle.jpg", map:"https://www.google.com/maps/search/?api=1&query=Buda+Castle+Budapest" },
    { key:"Matthias Church", name:"Matthias Church", en:"Mátyás-templom", day:3, tag:"教堂／建築", duration:"1h", lens:"16–55mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/The%20Matthias%20Church%20%286001573321%29.jpg", map:"https://www.google.com/maps/search/?api=1&query=Matthias+Church+Budapest" },
    { key:"Fisherman's Bastion", name:"Fisherman’s Bastion", en:"Halászbástya", day:3, tag:"城市全景／黃昏", duration:"1h15", lens:"16–55mm／70–300mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Fisherman%20s%20Bastion.jpg", map:"https://www.google.com/maps/search/?api=1&query=Fishermans+Bastion+Budapest" },
    { key:"Strbske", name:"Štrbské Pleso 湖區", en:"Štrbské Pleso", day:5, tag:"雪景／山景", duration:"1h45", lens:"16–55mm／70–300mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Strbske%20pleso.jpg", map:"https://www.google.com/maps/search/?api=1&query=Strbske+Pleso" },
    { key:"Gubalowka", name:"Gubałówka", en:"Gubałówka", day:5, tag:"雪景／Tatra", duration:"1h45", lens:"70–300mm／16–55mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Zakopane%20Gubalowka%20dron%20%282%29.jpg", map:"https://www.google.com/maps/search/?api=1&query=Gubalowka+Zakopane" },
    { key:"Krupowki", name:"Krupówki", en:"Krupówki Street", day:5, tag:"街拍／夜景", duration:"1h25", lens:"X100VI", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Zakopane%20krup%C3%B3wki.jpg", map:"https://www.google.com/maps/search/?api=1&query=Krupowki+Zakopane" },
    { key:"Kasprowy", name:"Kasprowy Wierch", en:"Kasprowy Wierch", day:6, tag:"高山／雪景", duration:"3h", lens:"70–300mm／16–55mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Kasprowy%20Wierch.jpg", map:"https://www.google.com/maps/search/?api=1&query=Kasprowy+Wierch" },
    { key:"Jaszczurowka", name:"Jaszczurówka", en:"Jaszczurówka Chapel", day:5, tag:"木造建築", duration:"30m", lens:"16–55mm", image:"https://upload.wikimedia.org/wikipedia/commons/9/97/Kaplica_w_Jaszczur%C3%B3wce_zim%C4%85.jpg", imageSource:"https://commons.wikimedia.org/wiki/File:Kaplica_w_Jaszczur%C3%B3wce_zim%C4%85.jpg", map:"https://www.google.com/maps/search/?api=1&query=Jaszczurowka+Chapel" },
    { key:"Peksowy", name:"Pęksowy Brzyzek", en:"Cmentarz Zasłużonych na Pęksowym Brzyzku", day:5, tag:"木造墓園／攝影禮儀", duration:"30m", lens:"16–55mm／X100VI", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Stary%20Cmentarz%20na%20Peksowym%20Brzyzku%20-%2003.jpg", imageSource:"https://commons.wikimedia.org/wiki/File:Stary_Cmentarz_na_Peksowym_Brzyzku_-_03.jpg", map:"https://www.google.com/maps/search/?api=1&query=Peksowy+Brzyzek+Zakopane" },
    { key:"Snowmobile", name:"Snowmobile 雪地摩托", en:"Snowmobile / Kościelisko", day:6, tag:"雪地活動", duration:"2h", lens:"X100VI／16–55mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Snowmobile%20%E2%80%93%2020th%20Leysin%20Nescaf%C3%A9%20Champs%2C%208th%20-%2013th%20February%202011%20%283%29.jpg", map:"https://www.google.com/maps/search/?api=1&query=Snowmobile+Koscielisko" },
    { key:"Wawel", name:"Wawel Castle", en:"Zamek Królewski na Wawelu", day:7, tag:"古蹟／城堡", duration:"2h", lens:"16–55mm／70–300mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Wawel%20Castle%20in%20Krakow.jpg", map:"https://www.google.com/maps/search/?api=1&query=Wawel+Castle+Krakow" },
    { key:"WawelCathedral", name:"Wawel Cathedral", en:"Katedra Wawelska", day:7, tag:"教堂／歷史", duration:"30m", lens:"16–55mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Wawel%20Cathedral%2C%20Krak%C3%B3w.JPG", map:"https://www.google.com/maps/search/?api=1&query=Wawel+Cathedral" },
    { key:"Kanonicza", name:"Kanonicza Street", en:"ul. Kanonicza", day:7, tag:"街景／黃昏", duration:"30m", lens:"X100VI／16–55mm", image:"https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/483af9109628805.5fd851b49452b.jpg", map:"https://www.google.com/maps/search/?api=1&query=Kanonicza+Street+Krakow" },
    { key:"MainMarket", name:"Main Market Square", en:"Rynek Główny", day:7, tag:"廣場／夜景", duration:"45m", lens:"16–55mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Krakow%20Main%20Square%20%288125539580%29.jpg", map:"https://www.google.com/maps/search/?api=1&query=Rynek+Glowny+Krakow" },
    { key:"StMary", name:"St Mary’s Basilica", en:"Bazylika Mariacka", day:7, tag:"教堂／廣場", duration:"30m", lens:"16–55mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/St%20Mary%27s%20Basilica%2C%20Krak%C3%B3w%202024-08-12%2003.jpg", map:"https://www.google.com/maps/search/?api=1&query=St+Marys+Basilica+Krakow" },
    { key:"ClothHall", name:"Cloth Hall", en:"Sukiennice", day:7, tag:"建築／夜景", duration:"30m", lens:"16–55mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Krak%C3%B3w%20-%20Sukiennice%20%26%20Wie%C5%BCa%20Ratuszowa.jpg", map:"https://www.google.com/maps/search/?api=1&query=Cloth+Hall+Krakow" },
    { key:"Parliament", name:"Hungarian Parliament", en:"Országház", day:9, tag:"建築／河岸", duration:"2h", lens:"16–55mm／70–300mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/HungarianParliamentBuilding.jpg", map:"https://www.google.com/maps/search/?api=1&query=Hungarian+Parliament+Budapest" },
    { key:"Shoes", name:"Shoes on the Danube", en:"Shoes on the Danube Bank", day:9, tag:"紀念地／河岸", duration:"30m", lens:"X100VI", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Hungary-02400%20-%20Shoes%20on%20the%20Danube%20%2832460224482%29.jpg", map:"https://www.google.com/maps/search/?api=1&query=Shoes+on+the+Danube+Bank" },
    { key:"Basilica", name:"St. Stephen’s Basilica", en:"Szent István Bazilika", day:9, tag:"教堂／市中心", duration:"1h", lens:"16–55mm", image:"https://www.obletsvet.sk/images/e4c7ca00-75ba-419c-968c-76d85b2f7d50/bazilika-svateho-stepena--1080x1080.jpg", map:"https://www.google.com/maps/search/?api=1&query=St+Stephens+Basilica+Budapest" },
    { key:"Vaci", name:"Váci utca", en:"Váci Street", day:9, tag:"街拍／商店", duration:"1h", lens:"X100VI", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/V%C3%A1ci_utca.jpg", imageSource:"https://commons.wikimedia.org/wiki/File:V%C3%A1ci_utca.jpg", map:"https://www.google.com/maps/search/?api=1&query=Vaci+utca+Budapest" },
    { key:"CentralMarket", name:"Central Market Hall", en:"Nagycsarnok", day:9, tag:"市場／建築", duration:"1h30", lens:"16–55mm／X100VI", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Central%20Market%20Hall%20Budapest%201.jpg", map:"https://www.google.com/maps/search/?api=1&query=Central+Market+Hall+Budapest" },
    { key:"ChainBridge", name:"Chain Bridge", en:"Széchenyi Chain Bridge", day:9, tag:"藍調／夜景", duration:"1h", lens:"16–55mm／X100VI", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Chain%20Bridge%20in%20Budapest.jpg", map:"https://www.google.com/maps/search/?api=1&query=Chain+Bridge+Budapest" },
    { key:"Schonbrunn", name:"Schönbrunn Palace", en:"Schloss Schönbrunn", day:11, tag:"皇宮／建築", duration:"2h30", lens:"16–55mm", image:"https://www.avanse.com/blogs/images/Blog-10july.jpg", map:"https://www.google.com/maps/search/?api=1&query=Schonbrunn+Palace" },
    { key:"Belvedere", name:"Belvedere Palace", en:"Schloss Belvedere", day:11, tag:"宮殿／倒影", duration:"2h", lens:"16–55mm", image:"https://images.gowithguide.com/gowithguide/cities/4501/101127.jpg", map:"https://www.google.com/maps/search/?api=1&query=Belvedere+Palace+Vienna" },
    { key:"Hofburg", name:"Hofburg", en:"Hofburg Wien", day:11, tag:"宮殿／廣場", duration:"1h", lens:"16–55mm", image:"https://images.musement.com/cover/0165/16/thumb_16415080_cover_header.jpg?fit=crop&h=630&q=95&w=1200", map:"https://www.google.com/maps/search/?api=1&query=Hofburg+Vienna" },
    { key:"Stephansdom", name:"Stephansdom", en:"St. Stephen’s Cathedral", day:10, tag:"教堂／城市中心", duration:"45m", lens:"16–55mm／12mm", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Wien_-_Stephansdom_%281%29.JPG/800px-Wien_-_Stephansdom_%281%29.JPG", map:"https://www.google.com/maps/search/?api=1&query=Stephansdom+Vienna" },
    { key:"Graben", name:"Graben", en:"Graben", day:10, tag:"街景／夜景", duration:"1h", lens:"X100VI", image:"https://vienna.net/wp-content/uploads/2022/09/Wien_-_Graben_2.jpg", map:"https://www.google.com/maps/search/?api=1&query=Graben+Vienna" },
    { key:"Kohlmarkt", name:"Kohlmarkt", en:"Kohlmarkt", day:10, tag:"精品街／夜景", duration:"30m", lens:"X100VI", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Wien%20Kohlmarkt.jpg", imageSource:"https://commons.wikimedia.org/wiki/File:Wien_Kohlmarkt.jpg", map:"https://www.google.com/maps/search/?api=1&query=Kohlmarkt+Vienna" }
  ]
};

