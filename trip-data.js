const TRIP_DATA = {
  "title": "2027 中歐 13天12夜｜旅行 App",
  "subtitle": "2/3–2/15｜台灣 → 新加坡 → 維也納 → 布達佩斯 → 高塔特拉 → Zakopane → Kraków → Vienna → 新加坡 → 台灣",
  "flights": [
    {
      "date": "2/3",
      "weekday": "三",
      "flight": "TR867",
      "route": "Taipei TPE → Singapore SIN",
      "time": "16:40–21:15"
    },
    {
      "date": "2/4",
      "weekday": "四",
      "flight": "TR60",
      "route": "Singapore SIN → Vienna VIE",
      "time": "02:45–08:30"
    },
    {
      "date": "2/14",
      "weekday": "日",
      "flight": "TR61",
      "route": "Vienna VIE → Singapore SIN",
      "time": "10:00–04:40 (+1)"
    },
    {
      "date": "2/15",
      "weekday": "一",
      "flight": "TR874",
      "route": "Singapore SIN → Taipei TPE",
      "time": "08:30–13:15"
    }
  ],
  "hotels": [
    {
      "date": "2/4–2/6",
      "hotel": "InterContinental Budapest",
      "city": "Budapest"
    },
    {
      "date": "2/6–2/7",
      "hotel": "Hotel Panorama",
      "city": "Štrbské Pleso"
    },
    {
      "date": "2/7–2/9",
      "hotel": "Aparthotel Cristina",
      "city": "Zakopane"
    },
    {
      "date": "2/9–2/10",
      "hotel": "Holiday Inn Krakow City Centre",
      "city": "Kraków"
    },
    {
      "date": "2/10–2/12",
      "hotel": "IntercityHotel Budapest",
      "city": "Budapest"
    },
    {
      "date": "2/12–2/14",
      "hotel": "InterContinental Vienna",
      "city": "Vienna"
    }
  ],
  "days": [
    {
      "date": "2/3",
      "weekday": "三",
      "title": "台灣出發 → 新加坡轉機",
      "city": "Taipei → Singapore",
      "hotel": "機上 / 新加坡轉機",
      "items": [
        [
          "16:40",
          "TR867｜Taipei TPE → Singapore SIN"
        ],
        [
          "21:15",
          "抵達樟宜機場｜確認 TR60 登機門、行李是否直掛 VIE"
        ],
        [
          "21:30–00:00",
          "吃飯、洗澡、換衣服、充電"
        ],
        [
          "00:00–01:30",
          "休息／前往候機區"
        ],
        [
          "02:45",
          "TR60｜Singapore SIN → Vienna VIE"
        ]
      ],
      "notes": "去程新加坡轉機約 5 小時 30 分。TPE 報到時確認：行李是否直掛 VIE、TR60 登機證是否可一起取得、是否需要入境新加坡。"
    },
    {
      "date": "2/4",
      "weekday": "四",
      "title": "抵達維也納 → 布達佩斯",
      "city": "Vienna → Budapest",
      "hotel": "InterContinental Budapest",
      "items": [
        [
          "08:30",
          "抵達 Vienna VIE"
        ],
        [
          "上午",
          "入境、領取行李／前往 Budapest"
        ],
        [
          "下午",
          "抵達 Budapest、入住／休息"
        ],
        [
          "傍晚",
          "Danube / Chain Bridge 夜景（輕鬆拍攝，不安排正式景點行程）"
        ]
      ],
      "notes": "抵達日以休息、適應時差為主。"
    },
    {
      "date": "2/5",
      "weekday": "五",
      "title": "Szentendre → Buda Castle → Matthias Church → Fisherman’s Bastion",
      "city": "Budapest",
      "hotel": "InterContinental Budapest",
      "items": [
        [
          "上午",
          "Szentendre｜舊城、Main Square、巷弄"
        ],
        [
          "中午",
          "返回 Budapest／午餐"
        ],
        [
          "下午",
          "Buda Castle"
        ],
        [
          "下午",
          "Matthias Church"
        ],
        [
          "下午",
          "Fisherman’s Bastion"
        ],
        [
          "晚上",
          "Budapest 市區自由活動"
        ]
      ],
      "notes": "這天完成 Fisherman’s Bastion，不在後續 2/11 重複。"
    },
    {
      "date": "2/6",
      "weekday": "六",
      "title": "Budapest → Miskolc → Košice → Prešov → Poprad → Štrbské Pleso",
      "city": "Budapest → Štrbské Pleso",
      "hotel": "Hotel Panorama",
      "items": [
        [
          "10:00",
          "Budapest SIXT 取車"
        ],
        [
          "上午–中午",
          "Miskolc → Košice"
        ],
        [
          "中午",
          "Košice 午餐／補給"
        ],
        [
          "下午",
          "Košice → Prešov → Poprad"
        ],
        [
          "傍晚",
          "抵達 Štrbské Pleso、入住"
        ]
      ],
      "notes": "冬季自駕：確認跨境許可、匈牙利／斯洛伐克電子通行證、四條冬季胎。"
    },
    {
      "date": "2/7",
      "weekday": "日",
      "title": "Štrbské Pleso → Zakopane｜Gubałówka → Krupówki",
      "city": "Štrbské Pleso → Zakopane",
      "hotel": "Aparthotel Cristina",
      "items": [
        [
          "07:00",
          "早餐"
        ],
        [
          "08:00",
          "退房"
        ],
        [
          "08:30–10:15",
          "Štrbské Pleso 湖區雪景／攝影"
        ],
        [
          "10:15–13:00",
          "自駕前往 Zakopane"
        ],
        [
          "13:00–13:40",
          "午餐"
        ],
        [
          "14:15–16:00",
          "Gubałówka"
        ],
        [
          "16:20–17:45",
          "Krupówki"
        ],
        [
          "18:00",
          "Aparthotel Cristina Check-in"
        ],
        [
          "18:30–20:00",
          "晚餐／與朋友會合"
        ]
      ],
      "notes": "Aparthotel Cristina 無行李寄放；16:00 才能入住。行李留車內時不要留下護照、相機、現金等貴重物品。"
    },
    {
      "date": "2/8",
      "weekday": "一",
      "title": "Kasprowy Wierch → Jaszczurówka → Pęksowy Brzyzek → Snowmobile",
      "city": "Zakopane / Kościelisko",
      "hotel": "Aparthotel Cristina",
      "items": [
        [
          "07:20–07:30",
          "抵達 Kuźnice 周邊"
        ],
        [
          "08:00",
          "Kasprowy Wierch Cable Car"
        ],
        [
          "上午",
          "山頂雪景／攝影"
        ],
        [
          "中午",
          "午餐"
        ],
        [
          "下午",
          "Jaszczurówka 木造教堂"
        ],
        [
          "下午",
          "Pęksowy Brzyzek 木造墓園"
        ],
        [
          "14:30–16:30",
          "Snowmobile｜Kościelisko / Butorów 區域"
        ],
        [
          "晚上",
          "Zakopane 晚餐"
        ]
      ],
      "notes": "不重複 Gubałówka。Snowmobile 建議下午早段結束，避免 16:30 後光線快速變暗。"
    },
    {
      "date": "2/9",
      "weekday": "二",
      "title": "Zakopane → Kraków｜Wawel → Old Town",
      "city": "Zakopane → Kraków",
      "hotel": "Holiday Inn Krakow City Centre",
      "items": [
        [
          "09:30",
          "Zakopane 出發"
        ],
        [
          "11:15–12:00",
          "抵達 Kraków／飯店停車"
        ],
        [
          "中午",
          "午餐"
        ],
        [
          "13:00–15:00",
          "Wawel Castle"
        ],
        [
          "15:00–15:30",
          "Wawel Cathedral / Kanonicza"
        ],
        [
          "15:30–16:00",
          "Grodzka"
        ],
        [
          "16:00–17:00",
          "Main Market Square"
        ],
        [
          "17:00–17:40",
          "St Mary’s Basilica"
        ],
        [
          "17:40–18:10",
          "Cloth Hall"
        ],
        [
          "18:10–18:40",
          "Floriańska"
        ],
        [
          "晚上",
          "Kraków Old Town 夜景"
        ]
      ],
      "notes": "只住一晚，省略 Schindler Factory / Kazimierz，避免行程過滿。"
    },
    {
      "date": "2/10",
      "weekday": "三",
      "title": "Kraków → Budapest",
      "city": "Kraków → Budapest",
      "hotel": "IntercityHotel Budapest",
      "items": [
        [
          "08:30",
          "Kraków 出發"
        ],
        [
          "上午–下午",
          "高速公路返回 Budapest"
        ],
        [
          "約14:00–14:30",
          "SIXT Budapest 還車"
        ],
        [
          "下午",
          "前往 IntercityHotel Budapest／休息"
        ]
      ],
      "notes": "當天不安排 Budapest 景點，保留交通緩衝。Kraków 外國車牌進 SCT 前須確認登錄要求。"
    },
    {
      "date": "2/11",
      "weekday": "四",
      "title": "Central Market → Váci utca → Basilica → Parliament → Danube",
      "city": "Budapest",
      "hotel": "IntercityHotel Budapest",
      "items": [
        [
          "上午",
          "Central Market Hall"
        ],
        [
          "上午",
          "Váci utca"
        ],
        [
          "中午",
          "St Stephen’s Basilica"
        ],
        [
          "下午",
          "Hungarian Parliament｜Kossuth Lajos tér"
        ],
        [
          "下午",
          "Shoes on the Danube Bank"
        ],
        [
          "傍晚",
          "Batthyány tér｜多瑙河對岸 Parliament 全景"
        ],
        [
          "晚上",
          "Chain Bridge → Danube night view"
        ]
      ],
      "notes": "這天是正式 Parliament / Danube 拍攝日；2/4 的 Chain Bridge 僅作抵達夜景，不算正式景點行程。"
    },
    {
      "date": "2/12",
      "weekday": "五",
      "title": "Budapest → Vienna",
      "city": "Budapest → Vienna",
      "hotel": "InterContinental Vienna",
      "items": [
        [
          "上午",
          "Budapest 前往 Budapest-Keleti"
        ],
        [
          "上午–中午",
          "直達 Railjet / EC 前往 Wien Hbf"
        ],
        [
          "抵達後",
          "Wien Hbf → 飯店"
        ],
        [
          "傍晚",
          "Stephansdom → Graben → Kohlmarkt 夜景"
        ]
      ],
      "notes": "朋友同行版本另有 Szentendre／Budapest 購物或溫泉安排；你的版本不再重複 Szentendre。"
    },
    {
      "date": "2/13",
      "weekday": "六",
      "title": "Schönbrunn → Belvedere → Hofburg → Stephansdom",
      "city": "Vienna",
      "hotel": "InterContinental Vienna",
      "items": [
        [
          "上午",
          "Schönbrunn Palace"
        ],
        [
          "中午",
          "午餐"
        ],
        [
          "下午",
          "Belvedere Palace"
        ],
        [
          "下午",
          "Hofburg"
        ],
        [
          "傍晚",
          "Stephansdom"
        ],
        [
          "晚上",
          "Graben / Kohlmarkt / Vienna night"
        ]
      ],
      "notes": "完整 Vienna 景點日；2/12 晚上只做市中心夜景，不造成重複。"
    },
    {
      "date": "2/14",
      "weekday": "日",
      "title": "Vienna → Singapore",
      "city": "Vienna → Singapore",
      "hotel": "機上",
      "items": [
        [
          "06:30–06:45",
          "飯店出發前往 VIE"
        ],
        [
          "10:00",
          "TR61｜Vienna VIE → Singapore SIN"
        ],
        [
          "04:40 (+1)",
          "抵達 Singapore SIN"
        ]
      ],
      "notes": "以 10:00 航班倒推機場報到時間；最後一天不安排額外景點。"
    },
    {
      "date": "2/15",
      "weekday": "一",
      "title": "Singapore → Taiwan",
      "city": "Singapore → Taipei",
      "hotel": "—",
      "items": [
        [
          "08:30",
          "TR874｜Singapore SIN → Taipei TPE"
        ],
        [
          "13:15",
          "抵達桃園 TPE"
        ]
      ],
      "notes": "旅程結束。"
    }
  ]
};
