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
        ["08:30", "arrival", "抵達 Vienna VIE", "入境、領行李", ""],
        ["上午", "transfer", "Vienna → Budapest", "交通方式待最後確認；預留充足入境與長途轉移緩衝", "約 2.5–3.5h"],
        ["下午", "hotel", "InterContinental Budapest", "入住／休息", ""],
        ["16:00–18:00", "photo", "Danube 河畔／Chain Bridge", "Buda Castle 遠景；抵達日輕拍，不塞正式景點", ""],
        ["19:30–20:30", "photo", "多瑙河夜景", "藍調與夜景攝影", ""]
      ],
      notes: ["以恢復體力為主。", "29 吋行李當天避免安排大量步行。"]
    },
    {
      date: "2/5", weekday: "五", title: "Szentendre → Buda Castle → Matthias Church → Fisherman’s Bastion", city: "Budapest", hotel: "InterContinental Budapest", theme: "city", photo: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1400&q=82",
      summary: "一次完成 Szentendre 與 Buda Castle 區；Fisherman’s Bastion 不在後續重複。",
      highlights: ["Szentendre 老城", "Buda Castle", "Matthias Church", "Fisherman’s Bastion 日落"],
      items: [
        ["08:00–08:45", "transit", "早餐／前往 Batthyány tér", "準備搭 H5", ""],
        ["09:15–10:00", "transit", "H5 → Szentendre", "約 40–45 分鐘", "40–45m"],
        ["10:00–12:00", "place", "Szentendre 老城", "Fő tér、巷弄、河畔街景", "2h"],
        ["12:00–12:45", "food", "午餐", "Szentendre", ""],
        ["12:45–13:30", "transit", "Szentendre → Budapest", "H5", "45m"],
        ["14:00–15:00", "place", "Buda Castle", "城堡區與 Danube 視角", "1h"],
        ["15:00–16:00", "place", "Matthias Church", "教堂外觀／室內視時間", "1h"],
        ["16:00–17:15", "photo", "Fisherman’s Bastion", "重點拍攝；安排在下午至黃昏", "1h15"],
        ["17:15–18:00", "photo", "藍調時刻", "Danube／Parliament 方向", "45m"],
        ["18:00–19:30", "food", "晚餐", "", "1h30"]
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
      date: "2/7", weekday: "日", title: "Štrbské Pleso → Zakopane｜Gubałówka → Krupówki", city: "Štrbské Pleso → Zakopane", hotel: "Aparthotel Cristina", theme: "winter", photo: "https://domalenka.pl/uploads/images/hotel-patria/hotel-patria-nove/hotel-patria-nove-zima.jpg",
      summary: "早上拍高塔特拉雪景，下午抵達 Zakopane；行李留車內，但貴重物品隨身。",
      highlights: ["湖區雪景", "約 13:00 Zakopane", "Gubałówka", "Krupówki 夜景"],
      items: [
        ["07:00", "food", "早餐", "", ""],
        ["08:00", "hotel", "Hotel Panorama Check-out", "行李上車", ""],
        ["08:30–10:15", "photo", "Štrbské Pleso 湖區", "湖畔、雪景、Tatra 山景攝影", "1h45"],
        ["10:15–13:00", "drive", "Štrbské Pleso → Zakopane", "冬季道路／邊境預留緩衝", "2h45"],
        ["13:00–13:40", "food", "午餐", "Zakopane", "40m"],
        ["13:40–14:15", "drive", "前往 Gubałówka 下站", "29 吋行李留後車廂；相機／護照隨身", "35m"],
        ["14:15–16:00", "photo", "Gubałówka", "Tatra 視野、雪景、下午光線", "1h45"],
        ["16:00–16:20", "transit", "下山", "", "20m"],
        ["16:20–17:45", "photo", "Krupówki", "街拍、商店、夜色漸入", "1h25"],
        ["18:00", "hotel", "Aparthotel Cristina Check-in", "標準入住時間 16:00", ""],
        ["18:30–20:00", "food", "晚餐＋與朋友會合", "朋友完成 Morskie Oko 後會合", "1h30"],
        ["20:00–21:00", "photo", "Zakopane 夜景", "輕量夜拍", "1h"]
      ],
      notes: ["Aparthotel Cristina 無行李服務；16:00 前不提供標準入住。", "車內只放一般行李；護照、相機、現金等貴重物品隨身。", "冬季跨境山區行駛務必保留緩衝。"]
    },
    {
      date: "2/8", weekday: "一", title: "Kasprowy Wierch → Jaszczurówka → Pęksowy Brzyzek → Snowmobile", city: "Zakopane / Kościelisko", hotel: "Aparthotel Cristina", theme: "winter", photo: "https://www.pkl.pl/data/pages/338/cp_cp_cp_20200108_a6500ab606436ab2.jpg",
      summary: "以高山纜車＋木造建築攝影為主，下午安排 Snowmobile，避免太晚入山。",
      highlights: ["08:00 Cable Car", "高山雪景", "Jaszczurówka", "Pęksowy Brzyzek", "14:30 Snowmobile"],
      items: [
        ["06:30–07:00", "food", "早餐", "", ""],
        ["07:00–07:30", "transit", "前往 Kuźnice", "私家車不可直達纜車站區，改用接駁／計程車等", "30m"],
        ["07:30–08:00", "transit", "排隊／準備", "提前到場", "30m"],
        ["08:00–11:00", "photo", "Kasprowy Wierch", "纜車＋山頂雪景攝影；天候不佳時調整", "3h"],
        ["11:00–12:00", "transit", "下山／回 Zakopane", "", "1h"],
        ["12:00–13:00", "food", "午餐", "", "1h"],
        ["13:00–13:15", "rest", "短暫休息／換裝", "準備下午戶外活動", "15m"],
        ["13:15–13:45", "photo", "Jaszczurówka", "木造教堂；建議 16–55mm", "30m"],
        ["13:45–14:05", "transit", "前往 Pęksowy Brzyzek", "", "20m"],
        ["14:05–14:25", "photo", "Pęksowy Brzyzek", "木造墓園、雕刻十字架；尊重現場禮儀", "20m"],
        ["14:25–14:30", "transit", "前往 Snowmobile 報到點", "預留最後 5 分鐘", "5m"],
        ["14:30–16:30", "adventure", "Snowmobile", "Kościelisko／Butorów 區域；2h 體驗", "2h"],
        ["18:00–19:30", "food", "晚餐", "Zakopane", "1h30"]
      ],
      notes: ["下午已重新排成不重疊版本：Jaszczurówka → Pęksowy Brzyzek → 14:30 Snowmobile。", "Snowmobile 雪況不足時，業者可能調整為其他活動；出發前重新確認。", "Kasprowy Wierch 受風雪與纜車營運影響，票券宜提前處理。"]
    },
    {
      date: "2/9", weekday: "二", title: "Zakopane → Kraków｜Wawel → Old Town", city: "Zakopane → Kraków", hotel: "Holiday Inn Krakow City Centre", theme: "city", photo: "https://dcontent.inviacdn.net/shared/img/web-830/2018/1/11/m0/537301.jpg",
      summary: "只住 Kraków 一晚，將核心老城一次走完；不塞 Schindler Factory／Kazimierz。",
      highlights: ["Wawel", "Cathedral", "Kanonicza", "Main Market Square", "St Mary’s", "Old Town 夜景"],
      items: [
        ["09:30", "drive", "Zakopane 出發", "", ""],
        ["11:15–12:00", "hotel", "抵達 Kraków／飯店停車", "放行李／短休", ""],
        ["12:00–13:00", "food", "午餐", "", "1h"],
        ["13:00–15:00", "photo", "Wawel Castle", "城堡外觀、庭院、河畔視角", "2h"],
        ["15:00–15:30", "place", "Wawel Cathedral", "大教堂／周邊", "30m"],
        ["15:30–16:00", "photo", "Kanonicza Street", "黃昏前街景", "30m"],
        ["16:00–16:30", "photo", "Grodzka Street", "向 Main Market Square 前進", "30m"],
        ["16:30–17:15", "photo", "Main Market Square", "廣場、Cloth Hall、塔樓", "45m"],
        ["17:15–17:45", "place", "St Mary’s Basilica", "外觀／入內依開放時間", "30m"],
        ["17:45–18:15", "photo", "Cloth Hall", "藍調時刻", "30m"],
        ["18:15–18:45", "photo", "Floriańska Street", "夜間街景", "30m"],
        ["晚上", "photo", "Kraków Old Town 夜景", "主要步行", ""]
      ],
      notes: ["Holiday Inn Krakow City Centre 內有受控停車，但名額有限，建議預訂／確認。", "租車為外國車牌，進入 Kraków SCT 前依當時規定完成登錄。", "大型行李盡量留在飯店，不帶進老城核心。"]
    },
    {
      date: "2/10", weekday: "三", title: "Kraków → Budapest", city: "Kraków → Budapest", hotel: "IntercityHotel Budapest", theme: "drive", photo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=82",
      summary: "整天是長途交通日，回 Budapest 還車後只入住休息。",
      highlights: ["08:30 出發", "約 5.5–6.5h", "14:00–14:30 還車目標", "不排景點"],
      items: [
        ["08:30", "drive", "Kraków 出發", "", ""],
        ["上午–下午", "drive", "Kraków → Budapest", "長途高速／冬季緩衝", "約 5.5–6.5h"],
        ["約14:00–14:30", "car", "SIXT Budapest 還車", "確認還車文件／車況紀錄", ""],
        ["下午", "hotel", "IntercityHotel Budapest", "入住、休息", ""],
        ["晚上", "rest", "不安排景點", "把體力留給 2/11", ""]
      ],
      notes: ["不要為了塞景點壓縮高速路程緩衝。", "Kraków SCT 登錄與還車地點依實際租車車牌／訂單資料處理。"]
    },
    {
      date: "2/11", weekday: "四", title: "Parliament → Shoes on the Danube → Basilica → Váci utca → Central Market → Chain Bridge", city: "Budapest", hotel: "IntercityHotel Budapest", theme: "city", photo: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1400&q=82",
      summary: "Budapest 第二個完整拍攝日，集中 Pest＋Danube；不回 Buda Castle。",
      highlights: ["Parliament", "Shoes on the Danube", "Batthyány tér", "Chain Bridge", "Danube 藍調"],
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
        ["上午", "hotel", "IntercityHotel Budapest Check-out", "前往 Budapest-Keleti", ""],
        ["上午–中午", "train", "Budapest → Wien Hbf", "直達 Railjet／EC；2027 班次開放後再選", "約 2h40–3h"],
        ["抵達後", "transit", "Wien Hbf → 飯店", "大行李建議 Taxi／Uber 等", "約 15–30m"],
        ["下午", "hotel", "InterContinental Vienna", "入住／休息", ""],
        ["傍晚", "photo", "Stephansdom", "市中心夜景起點", ""],
        ["晚上", "photo", "Graben／Kohlmarkt", "黃昏街景與商店立面", ""]
      ],
      notes: ["國際火車票常在出發前數月逐步開放；2027 班次以 ÖBB 最終時刻表為準。", "不再安排 Szentendre；此日專心換城市。"]
    },
    {
      date: "2/13", weekday: "六", title: "Schönbrunn → Belvedere → Hofburg → Stephansdom → Vienna 夜景", city: "Vienna", hotel: "InterContinental Vienna", theme: "city", photo: "https://www.avanse.com/blogs/images/Blog-10july.jpg",
      summary: "完整 Vienna 景點日，集中宮殿、教堂與市中心街景。",
      highlights: ["Schönbrunn", "Belvedere", "Hofburg", "Stephansdom", "Graben／Kohlmarkt"],
      items: [
        ["07:30–08:15", "food", "早餐", "", "45m"],
        ["08:15–08:30", "transit", "前往 Schönbrunn", "", "15m"],
        ["08:30–11:00", "place", "Schönbrunn Palace", "冬季宮殿＋庭園；2027 營業時間再確認", "2h30"],
        ["11:30–12:30", "food", "午餐", "", "1h"],
        ["13:00–15:00", "photo", "Belvedere Palace", "上宮外觀與水池倒影", "2h"],
        ["15:00–15:30", "transit", "前往 Hofburg", "", "30m"],
        ["15:30–16:30", "place", "Hofburg", "外觀／廣場；室內依票券與時間", "1h"],
        ["16:30–17:15", "photo", "Stephansdom", "藍調時刻前後", "45m"],
        ["17:15–18:15", "photo", "Graben／Kohlmarkt", "夜間街景", "1h"],
        ["18:15–19:30", "food", "晚餐", "", "1h15"],
        ["20:00–21:30", "photo", "Vienna 夜景", "Opera／Stephansdom／市中心", "1h30"]
      ],
      notes: ["Schönbrunn 的 2027 冬季營業時間與入場方式出發前重查。", "最後完整拍攝日，不安排高強度步行。"]
    },
    {
      date: "2/14", weekday: "日", title: "Vienna → Singapore", city: "Vienna → Singapore", hotel: "機上", theme: "flight", photo: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=82",
      summary: "最後一天只做機場轉移與航班。",
      highlights: ["06:30–06:45 出發", "VIE", "10:00 TR61"],
      items: [
        ["05:45", "rest", "起床", "", ""],
        ["06:00–06:30", "hotel", "早餐／退房", "", "30m"],
        ["06:30–06:45", "transit", "飯店 → VIE", "大行李＋攝影器材，建議預約", "20–30m"],
        ["約07:15", "airport", "抵達 Vienna Airport", "", ""],
        ["07:15–09:00", "airport", "報到／安檢／出境", "保留國際航班緩衝", "1h45"],
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
    { key:"Buda Castle", name:"Buda Castle", en:"Budavári Palota", day:3, tag:"城堡／城市景", duration:"1h", lens:"16–55mm／70–300mm", image:"https://media4.thrillophilia.com/images/photos/000/398/541/original/1759831603_Hungary.jpg?aio=w-753%253Bh-450%253Bcrop&dpr=2", map:"https://www.google.com/maps/search/?api=1&query=Buda+Castle+Budapest" },
    { key:"Matthias Church", name:"Matthias Church", en:"Mátyás-templom", day:3, tag:"教堂／建築", duration:"1h", lens:"16–55mm", image:"https://images.myguide-cdn.com/budapest/activities/castle-district-guided-walking-tour/large/castle-district-guided-walking-tour-7351510.jpg", map:"https://www.google.com/maps/search/?api=1&query=Matthias+Church+Budapest" },
    { key:"Fisherman's Bastion", name:"Fisherman’s Bastion", en:"Halászbástya", day:3, tag:"城市全景／黃昏", duration:"1h15", lens:"16–55mm／70–300mm", image:"https://ak-d.tripcdn.com/images/1mi52224x8yzzge7fFF90.jpg?proc=source%2Ftrip", map:"https://www.google.com/maps/search/?api=1&query=Fishermans+Bastion+Budapest" },
    { key:"Strbske", name:"Štrbské Pleso 湖區", en:"Štrbské Pleso", day:5, tag:"雪景／山景", duration:"1h45", lens:"16–55mm／70–300mm", image:"https://domalenka.pl/uploads/images/hotel-patria/hotel-patria-nove/hotel-patria-nove-zima.jpg", map:"https://www.google.com/maps/search/?api=1&query=Strbske+Pleso" },
    { key:"Gubalowka", name:"Gubałówka", en:"Gubałówka", day:5, tag:"雪景／Tatra", duration:"1h45", lens:"70–300mm／16–55mm", image:"https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80", map:"https://www.google.com/maps/search/?api=1&query=Gubalowka+Zakopane" },
    { key:"Krupowki", name:"Krupówki", en:"Krupówki Street", day:5, tag:"街拍／夜景", duration:"1h25", lens:"X100VI", image:"https://kasprowy-zakopane.pl/storage/2024/07/Krupowki1-1024x576.jpeg", map:"https://www.google.com/maps/search/?api=1&query=Krupowki+Zakopane" },
    { key:"Kasprowy", name:"Kasprowy Wierch", en:"Kasprowy Wierch", day:6, tag:"高山／雪景", duration:"3h", lens:"70–300mm／16–55mm", image:"https://www.pkl.pl/data/pages/338/cp_cp_cp_20200108_a6500ab606436ab2.jpg", map:"https://www.google.com/maps/search/?api=1&query=Kasprowy+Wierch" },
    { key:"Jaszczurowka", name:"Jaszczurówka", en:"Jaszczurówka Chapel", day:6, tag:"木造建築", duration:"45m", lens:"16–55mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Jaszczur%C3%B3wka%20at%20Winter.jpg", map:"https://www.google.com/maps/search/?api=1&query=Jaszczurowka+Chapel" },
    { key:"Peksowy", name:"Pęksowy Brzyzek", en:"Cmentarz Zasłużonych na Pęksowym Brzyzku", day:6, tag:"木造墓園／攝影禮儀", duration:"30m", lens:"16–55mm／X100VI", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Peksowy-frasobliwy.jpg", map:"https://www.google.com/maps/search/?api=1&query=Peksowy+Brzyzek+Zakopane" },
    { key:"Wawel", name:"Wawel Castle", en:"Zamek Królewski na Wawelu", day:7, tag:"古蹟／城堡", duration:"2h", lens:"16–55mm／70–300mm", image:"https://dcontent.inviacdn.net/shared/img/web-830/2018/1/11/m0/537301.jpg", map:"https://www.google.com/maps/search/?api=1&query=Wawel+Castle+Krakow" },
    { key:"WawelCathedral", name:"Wawel Cathedral", en:"Katedra Wawelska", day:7, tag:"教堂／歷史", duration:"30m", lens:"16–55mm", image:"https://dcontent.inviacdn.net/shared/img/web-830/2018/1/11/m0/537301.jpg", map:"https://www.google.com/maps/search/?api=1&query=Wawel+Cathedral" },
    { key:"Kanonicza", name:"Kanonicza Street", en:"ul. Kanonicza", day:7, tag:"街景／黃昏", duration:"30m", lens:"X100VI／16–55mm", image:"https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/483af9109628805.5fd851b49452b.jpg", map:"https://www.google.com/maps/search/?api=1&query=Kanonicza+Street+Krakow" },
    { key:"MainMarket", name:"Main Market Square", en:"Rynek Główny", day:7, tag:"廣場／夜景", duration:"45m", lens:"16–55mm", image:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Krak%C3%B3w_Cloth_Hall%2C_view_from_W%2C_3_Main_Market_square%2C_Old_Town%2C_Krakow%2C_Poland.jpg", map:"https://www.google.com/maps/search/?api=1&query=Rynek+Glowny+Krakow" },
    { key:"StMary", name:"St Mary’s Basilica", en:"Bazylika Mariacka", day:7, tag:"教堂／廣場", duration:"30m", lens:"16–55mm", image:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Krak%C3%B3w_Cloth_Hall%2C_view_from_W%2C_3_Main_Market_square%2C_Old_Town%2C_Krakow%2C_Poland.jpg", map:"https://www.google.com/maps/search/?api=1&query=St+Marys+Basilica+Krakow" },
    { key:"ClothHall", name:"Cloth Hall", en:"Sukiennice", day:7, tag:"建築／夜景", duration:"30m", lens:"16–55mm", image:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Krak%C3%B3w_Cloth_Hall%2C_view_from_W%2C_3_Main_Market_square%2C_Old_Town%2C_Krakow%2C_Poland.jpg", map:"https://www.google.com/maps/search/?api=1&query=Cloth+Hall+Krakow" },
    { key:"Parliament", name:"Hungarian Parliament", en:"Országház", day:10, tag:"建築／河岸", duration:"2h", lens:"16–55mm／70–300mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Hungarian%20Parliament%20Building%2C%20Budapest.jpg", map:"https://www.google.com/maps/search/?api=1&query=Hungarian+Parliament+Budapest" },
    { key:"Shoes", name:"Shoes on the Danube", en:"Shoes on the Danube Bank", day:10, tag:"紀念地／河岸", duration:"30m", lens:"X100VI", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Shoes%20on%20the%20Danube%20Promenade%202.jpg", map:"https://www.google.com/maps/search/?api=1&query=Shoes+on+the+Danube+Bank" },
    { key:"Basilica", name:"St. Stephen’s Basilica", en:"Szent István Bazilika", day:10, tag:"教堂／市中心", duration:"1h", lens:"16–55mm", image:"https://www.obletsvet.sk/images/e4c7ca00-75ba-419c-968c-76d85b2f7d50/bazilika-svateho-stepena--1080x1080.jpg", map:"https://www.google.com/maps/search/?api=1&query=St+Stephens+Basilica+Budapest" },
    { key:"Vaci", name:"Váci utca", en:"Váci Street", day:10, tag:"街拍／商店", duration:"1h", lens:"X100VI", image:"https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80", map:"https://www.google.com/maps/search/?api=1&query=Vaci+utca+Budapest" },
    { key:"CentralMarket", name:"Central Market Hall", en:"Nagycsarnok", day:10, tag:"市場／建築", duration:"1h30", lens:"16–55mm／X100VI", image:"https://cdn.prod.website-files.com/673a573180570e7cba7c7f1f/67fcfd7a00ab7a9ea42cc6ad_market-hall-4422896_1280.webp", map:"https://www.google.com/maps/search/?api=1&query=Central+Market+Hall+Budapest" },
    { key:"ChainBridge", name:"Chain Bridge", en:"Széchenyi Chain Bridge", day:10, tag:"藍調／夜景", duration:"1h", lens:"16–55mm／X100VI", image:"https://slevomat.sgcdn.cz/images/t/1080/10/09/10090666-d7813a.jpg", map:"https://www.google.com/maps/search/?api=1&query=Chain+Bridge+Budapest" },
    { key:"Schonbrunn", name:"Schönbrunn Palace", en:"Schloss Schönbrunn", day:13, tag:"皇宮／建築", duration:"2h30", lens:"16–55mm", image:"https://www.avanse.com/blogs/images/Blog-10july.jpg", map:"https://www.google.com/maps/search/?api=1&query=Schonbrunn+Palace" },
    { key:"Belvedere", name:"Belvedere Palace", en:"Schloss Belvedere", day:13, tag:"宮殿／倒影", duration:"2h", lens:"16–55mm", image:"https://images.gowithguide.com/gowithguide/cities/4501/101127.jpg", map:"https://www.google.com/maps/search/?api=1&query=Belvedere+Palace+Vienna" },
    { key:"Hofburg", name:"Hofburg", en:"Hofburg Wien", day:13, tag:"宮殿／廣場", duration:"1h", lens:"16–55mm", image:"https://images.musement.com/cover/0165/16/thumb_16415080_cover_header.jpg?fit=crop&h=630&q=95&w=1200", map:"https://www.google.com/maps/search/?api=1&query=Hofburg+Vienna" },
    { key:"Stephansdom", name:"Stephansdom", en:"St. Stephen’s Cathedral", day:12, tag:"教堂／城市中心", duration:"45m", lens:"16–55mm／12mm", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Wien_-_Stephansdom_%281%29.JPG/800px-Wien_-_Stephansdom_%281%29.JPG", map:"https://www.google.com/maps/search/?api=1&query=Stephansdom+Vienna" },
    { key:"Graben", name:"Graben", en:"Graben", day:12, tag:"街景／夜景", duration:"1h", lens:"X100VI", image:"https://vienna.net/wp-content/uploads/2022/09/Wien_-_Graben_2.jpg", map:"https://www.google.com/maps/search/?api=1&query=Graben+Vienna" },
    { key:"Kohlmarkt", name:"Kohlmarkt", en:"Kohlmarkt", day:12, tag:"精品街／夜景", duration:"30m", lens:"X100VI", image:"https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1200&q=80", map:"https://www.google.com/maps/search/?api=1&query=Kohlmarkt+Vienna" }
  ]
};
