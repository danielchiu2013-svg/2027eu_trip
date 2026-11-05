const TRIP_DATA = {
  mobilityPlan: {
  "checkedDate": "2026-11-01",
  "note": "依目前三人行程整理購買建議，不代表已購票。市區票通常每人一張；高速通行證每輛車一份。2027 票種、票價與管制出發前再核對；已購狀態以共用預約資料為準。",
  "products": {
    "krakow-walk": {
      "title": "Kraków 老城步行｜不預購市區日票",
      "status": "步行為主",
      "unit": "三人同行；無須交通票",
      "detail": "車停 Holiday Inn 後步行遊 Wawel、Kanonicza、Grodzka、聖母聖殿及主廣場。飯店至 Wawel 預留 15–20 分鐘，主廣場回飯店約 5–10 分鐘；冬季濕滑或走累可改搭合規計程車，在可通車路口上下車，車資另付。",
      "url": "https://www.ihg.com/holidayinn/hotels/us/en/krakow/krkcc/hoteldetail"
    },
    "vie-airport": {
      "title": "VIE → Wien Hbf 機場火車區間票",
      "status": "待確認／購買",
      "unit": "每人一張，三人",
      "detail": "2/4 已購 RJX 63 從 Wien Hbf 起，不能推定含機場段。先核對完整票券；未含就另買 Flughafen Wien Bahnhof → Wien Hbf 的 Railjet／IC 車票。不是 CAT，也不由維也納市區票自動涵蓋。",
      "url": "https://www.oebb.at/en/regionale-angebote/ueberregionale-angebote/anreise-zum-flughafen",
      "reservationId": "vie-airport-link-ticket"
    },
    "rjx-out": {
      "title": "2/4 Wien Hbf → Budapest-Keleti RJX 63",
      "reservationId": "oebb-vienna-budapest-20270204",
      "unit": "三人已購票",
      "detail": "13:40–16:29；市區地鐵、機場段和計程車不是這張跨城票的既定包含項目，須分別核對。",
      "url": "https://www.oebb.at/en/"
    },
    "bud-single": {
      "title": "Budapest 市區單程／時間票備案",
      "status": "視搭車購買",
      "unit": "每人各持有效票",
      "detail": "2/4、2/10 帶大行李以計程車為主；若改搭 BKK 就另買市區票。普通單程票通常不含公車／電車轉乘，需轉乘可比較 90 分鐘票；已持有效市區日票則不重複買。2/12 若前一日 24h 票已過期，去 Keleti 另買票或叫車。",
      "url": "https://bkk.hu/en/tickets-and-passes/prices/"
    },
    "bud24-first": {
      "title": "2/5 Budapest 24 小時交通票",
      "status": "建議購買",
      "unit": "每人一張，共三張",
      "detail": "從 2/5 第一段市區搭車開始設起始時間，涵蓋市界內地鐵、電車、公車與 H5 市區段。此次第一段停留不預設買 72h；2/4 若搭計程車且晚上步行，毋須提早啟用。不是景點套票 Budapest Card，不含聖安德烈市界外段、纜車或觀光遊船。紙本依票面時間，不需另打票；手機票依 App 掃碼／出示。",
      "url": "https://bkk.hu/en/tickets-and-passes/prices/24-hour-budapest-travelcard/"
    },
    "h5-extra": {
      "title": "H5 Békásmegyer ↔ Szentendre 市界外票",
      "status": "需額外購票",
      "unit": "三人來回；或比較一張共用 tour ticket",
      "detail": "2/5 的 Budapest 24h 只涵蓋到 Békásmegyer；超出市界必須另有有效票。可每人買去回區間票，或比較 H5 tour ticket：最多十人同車廂同行，僅涵蓋 Békásmegyer–Szentendre，仍要各自持市區票。先在車站售票機／售票處備齊來回，或由 MÁV 官方 App 購買適用產品；不必在 Békásmegyer 下車換車。",
      "url": "https://bkk.hu/en/tickets-and-passes/prices/suburban-railway-tour-ticket-h5-h8-h9-full-fare/",
      "reservationId": "h5-szentendre-extra-ticket"
    },
    "hu-pass": {
      "title": "匈牙利全國 10 日 e-vignette",
      "reservationId": "hu-vignette-purchase",
      "unit": "每輛車一份，不是三人三份",
      "detail": "2/6 取車後先問 SIXT 是否已有有效通行證，核對實際車牌及涵蓋範圍。未含才買全國 10 日票，建議有效期 2027/2/6–2/15（含首尾），可涵蓋 2/6 去程與 2/10 回程；不是跨國通用票。一般 ≤3.5t、最多七座且車籍為 M1／M1G 才屬 D1，按交付車籍核對。上 M3／M30 等收費段前生效，保存確認單；不另買不需要的郡票或奧地利 vignette。",
      "url": "https://ematrica.nemzetiutdij.hu/en",
      "sourceUrl": "https://nemzetiutdij.hu/en/e-vignette/tolls/e-vignette-rates"
    },
    "sk-pass": {
      "title": "斯洛伐克 10 日 eZnamka",
      "reservationId": "sk-vignette-purchase",
      "unit": "每輛車一份，與匈牙利分開",
      "detail": "先查 SIXT 是否已提供／代購；未含則依車牌及登記國購買。建議有效期 2027/2/6–2/15（10 個曆日），涵蓋去程與 2/10 回程的 D1／R4 等收費段，2/7 如走收費段亦沿用同一份。兩國通行證都須獨立有效，不必每天重買。官方 eznamka.sk 可購買並查核，進入收費段前完成。",
      "url": "https://eznamka.sk/en",
      "sourceUrl": "https://eznamka.sk/en/evignettes/glossary"
    },
    "pl-road": {
      "title": "波蘭小客車道路費用",
      "status": "主線不需多日 pass",
      "unit": "按實際車輛及路段",
      "detail": "以一般無拖車、核定總重不超過 3.5t 小客車為前提，本次 DK47／S7／DK7 等主線不購買全國 vignette，亦不需 e-TOLL。若導航改走民營收費高速段則另付費；A4 Kraków–Katowice 在 2027 年 2 月仍須按營運商規則付費，不能套用 3/16 起免費的公告。停車與 Kraków SCT 登錄另計。",
      "url": "https://etoll.gov.pl/en/news/are-you-planning-a-may-day-break-in-an-rv-or-a-car-with-a-caravan-check-whether-you-need-to-pay-for-your-journey-via-e-toll/",
      "sourceUrl": "https://www.gov.pl/web/gddkia/koniec-oplat-dla-kierowcow-osobowek-i-motocykli-na-a4-katowice---krakow"
    },
    "parking": {
      "title": "沿途／飯店停車費",
      "status": "依停車場另付",
      "unit": "每輛車，依時段／場地",
      "detail": "高速通行證不含停車。Košice、湖區、Zakopane、Kraków 與飯店分別看停車標誌、時段及車牌付款規則；飯店有停車位不等於免費或保證有位。可優先用現場售票機／櫃台，無須因 EasyPark／SkyCash 註冊問題預設不能付款。"
    },
    "gubalowka": {
      "title": "Gubałówka 登山纜車來回票",
      "status": "待購票",
      "unit": "三人各一張",
      "detail": "2/7 如按原行程搭登山纜車，另買 PKL Gubałówka 上下山票；不含在 Zakopane 公車日票或高速通行證。不是 Kasprowy Wierch 纜車票；日期、營運時間與雪況再確認。",
      "url": "https://www.pkl.pl/gubalowka/faq-gubalowka.html?setlang=2"
    },
    "zak24": {
      "title": "Zakopane 市營公車 24h／單程票",
      "status": "搭市營公車才買",
      "unit": "每人一張，共三人",
      "detail": "2/8 去回 Kuźnice 如都搭 TESKO 市營公車，可選 24h 票；只搭一趟就比較單程票。現行 24h 12 PLN、單程 6 PLN，2027 重新核價。一般私營 minibus、計程車與 PKL 纜車不包含。可在車上售票機購買並按票面打票規則操作；司機售票備剛好現金。全程改搭計程車就不必買公車日票；本次不預設買三日票。",
      "url": "https://www.zakopane.pl/komunikacjamiejska/informacje-praktyczne"
    },
    "kasprowy": {
      "title": "Kasprowy Wierch 纜車來回／時段票",
      "reservationId": "kasprowy-ticket",
      "unit": "三人，各按指定時段",
      "detail": "2/8 纜車上山票另購，不含在市營公車 24h 票中；先確認上山時段、下山安排與報到時間。",
      "url": "https://www.sklep.pkl.pl/en/"
    },
    "snow-transfer": {
      "title": "雪地摩托活動接送",
      "status": "待確認是否包含",
      "unit": "依業者訂單",
      "detail": "2/8 集合地址與接送尚未確認；若活動不含接送，另外安排計程車／交通費。不能假定 Zakopane 公車票涵蓋私人接駁。",
      "url": "https://www.zakopane.pl/komunikacjamiejska/rozklady-jazdy"
    },
    "sct": {
      "title": "Kraków SCT 外國車牌登錄",
      "reservationId": "krakow-sct",
      "unit": "每輛車，須確認通行資格",
      "detail": "2/6 取車取得實際車牌、登記國及車籍／排放資料後儘早辦，2/9 進城前確認成功，2/10 離城亦須有效。外國車牌即使符合排放標準也須登錄；符合資格不是一律要再買付費 pass，不符資格依 2027 官方付費／豁免規則核對。SCT 不取代老城限制車道及飯店停車許可。",
      "url": "https://sct.zdmk.krakow.pl/",
      "sourceUrl": "https://krakow.pl/getHtml?dok_id=303918"
    },
    "bud24-second": {
      "title": "2/11 Budapest 24 小時交通票",
      "status": "建議購買",
      "unit": "每人一張，共三張",
      "detail": "2/10 還車後若僅去公寓，可用計程車／單程票；2/11 第一次市區搭車再啟用 24h。記下結束日期與分鐘：2/12 去 Keleti 若仍在效期內可沿用，過期則另買市區票。2/5 的票早已到期，不能沿用；不預設為 2/10–2/12 買 72h。若實際搭車很少可比較單程／時間票。",
      "url": "https://bkk.hu/en/tickets-and-passes/prices/24-hour-budapest-travelcard/"
    },
    "rjx-return": {
      "title": "2/12 Budapest-Keleti → Wien Hbf 跨城火車票",
      "reservationId": "train-budapest-vienna",
      "unit": "三人車票及座位分別核對",
      "detail": "目前仍待購票；2027 班次與 Business 升等供應另確認。Budapest 與 Vienna 市區日票都不含這段跨國火車，跨城車票也不自動包含兩端所有地鐵。",
      "url": "https://www.oebb.at/en/"
    },
    "vienna-single": {
      "title": "2/12 Vienna 市區單程票／24h 比較",
      "status": "依搭乘次數購買",
      "unit": "每人各持有效票",
      "detail": "Wien Hbf → 飯店若搭 U1 轉 U4，用一張涵蓋單向連續轉乘的市區票；入住後再搭車需另票。當日若多次搭乘再比較 24 Stunden WIEN；下午啟用的 24h 通常不足以涵蓋 2/13 全日。若搭計程車且其他都步行，可不買市區票。",
      "url": "https://www.wien.info/en/travel-info/transport/tickets-361360"
    },
    "vienna24": {
      "title": "2/13 24 Stunden WIEN 市區交通票",
      "status": "建議購買",
      "unit": "每人一張，共三張",
      "detail": "2/13 出發去 Schönbrunn 前生效，涵蓋當日市區地鐵、電車與公車；如前一日票仍有效，先沿用並在到期前補足後續旅程。2026 起一般 48／72 小時 WIEN 票已停售；本次兩天市區停留通常比較單程＋24h／兩張24h，不預設買7 Tage WIEN。紙本需打票的版本在第一次搭車前打票；數位票核對起始時間及身分證明。市區票不含 VIE 外區或 CAT。",
      "url": "https://www.wienerlinien.at/24-stunden-wien",
      "sourceUrl": "https://www.wienerlinien.at/7-tage-wien",
      "reservationId": "vienna-city-tickets"
    },
    "airport-transfer": {
      "title": "2/14 06:15 Vienna 飯店 → VIE 預約接送",
      "reservationId": "airport-transfer-booking",
      "unit": "三人三件大行李，確認車型",
      "detail": "接送尚待預約；接送車費另付，不屬市區 pass。維持預約車主方案，不為此另買奧地利自駕通行證；若改搭火車／CAT，才另買涵蓋機場外區／該產品的票。",
      "url": "https://www.oebb.at/en/regionale-angebote/ueberregionale-angebote/anreise-zum-flughafen"
    }
  },
  "days": {
    "2/3": {
      "none": "飛行／轉機，無歐洲市區票需求",
      "items": []
    },
    "2/4": {
      "items": [
        {
          "id": "vie-airport",
          "tag": "另購：VIE→Hbf",
          "kind": "extra",
          "action": "先核對機場段是否已含，未含另買三人車票。"
        },
        {
          "id": "rjx-out",
          "tag": "已購：RJX 63",
          "kind": "booked",
          "action": "13:40–16:29，三人已購。"
        },
        {
          "id": "bud-single",
          "tag": "備案：Budapest 單程",
          "kind": "optional",
          "action": "Keleti→飯店搭計程車；改搭M2才買市區票，日票可留到2/5再開。"
        }
      ]
    },
    "2/5": {
      "items": [
        {
          "id": "bud24-first",
          "tag": "建議：Budapest 24h",
          "kind": "buy",
          "action": "三人各一張，第一段市區搭車前生效。"
        },
        {
          "id": "h5-extra",
          "tag": "另購：H5 市界外來回",
          "kind": "extra",
          "action": "Békásmegyer↔Szentendre另買，市區24h不含此段。"
        }
      ]
    },
    "2/6": {
      "items": [
        {
          "id": "hu-pass",
          "tag": "確認／購買：HU 10日",
          "kind": "road",
          "action": "先查SIXT已含與否；未含買2/6–2/15全國10日。"
        },
        {
          "id": "sk-pass",
          "tag": "確認／購買：SK 10日",
          "kind": "road",
          "action": "另查／買2/6–2/15 eZnamka；進收費段前生效。"
        },
        {
          "id": "sct",
          "tag": "開始辦：Kraków SCT",
          "kind": "road",
          "action": "取車取得車牌／車籍後儘早登錄，2/9前完成。"
        },
        {
          "id": "parking",
          "tag": "另付：停車",
          "kind": "road",
          "action": "Košice與湖區／飯店停車按現場或住宿規則另付。"
        }
      ]
    },
    "2/7": {
      "items": [
        {
          "id": "sk-pass",
          "tag": "查有效：沿用 SK pass",
          "kind": "road",
          "action": "如走SK收費段，沿用2/6確認的通行證，不重買。"
        },
        {
          "id": "pl-road",
          "tag": "PL：主線無多日 pass",
          "kind": "road",
          "action": "一般≤3.5t小客車按既定道路走；民營收費路段另核對。"
        },
        {
          "id": "gubalowka",
          "tag": "另購：Gubałówka 來回",
          "kind": "extra",
          "action": "三人PKL登山纜車票，與公車票分開。"
        },
        {
          "id": "parking",
          "tag": "另付：停車",
          "kind": "road",
          "action": "木教堂／Gubałówka／飯店分別確認停車費。"
        }
      ]
    },
    "2/8": {
      "items": [
        {
          "id": "zak24",
          "tag": "公車方案：Zakopane 24h",
          "kind": "optional",
          "action": "搭市營公車來回Kuźnice可選24h；搭計程車則不買。"
        },
        {
          "id": "kasprowy",
          "tag": "另購：Kasprowy 纜車",
          "kind": "extra",
          "action": "三人上山時段／來回票，公車日票不包含。"
        },
        {
          "id": "snow-transfer",
          "tag": "確認：雪地摩托接送",
          "kind": "optional",
          "action": "活動是否含接送待確認；未含的交通另付。"
        }
      ]
    },
    "2/9": {
      "items": [
        {
          "id": "krakow-walk",
          "tag": "老城步行：免買日票",
          "kind": "optional",
          "action": "車停飯店後步行；疲累時計程車另付，這天不預購市區多日票。"
        },
        {
          "id": "sct",
          "tag": "入城前確認：Kraków SCT",
          "kind": "road",
          "action": "外國車牌須已登錄並確認資格，非一律買付費pass。"
        },
        {
          "id": "pl-road",
          "tag": "PL：主線無多日 pass",
          "kind": "road",
          "action": "DK47／S7／DK7主線不需全國vignette；改走收費A4段另付。"
        },
        {
          "id": "parking",
          "tag": "另付：飯店停車",
          "kind": "road",
          "action": "飯店停車及老城合法車道分別確認；停妥後以步行為主。"
        }
      ]
    },
    "2/10": {
      "items": [
        {
          "id": "pl-road",
          "tag": "PL：依路段付費",
          "kind": "road",
          "action": "離城主線無全國pass；改走民營收費高速段另付。"
        },
        {
          "id": "sct",
          "tag": "離城仍需：SCT 有效",
          "kind": "road",
          "action": "出發前保持登錄及通行資格有效。"
        },
        {
          "id": "sk-pass",
          "tag": "查有效：沿用 SK pass",
          "kind": "road",
          "action": "核對2/6–2/15效期涵蓋今天，不重買。"
        },
        {
          "id": "hu-pass",
          "tag": "查有效：沿用 HU pass",
          "kind": "road",
          "action": "回到HU收費道路前核對車牌與效期，不重買。"
        },
        {
          "id": "bud-single",
          "tag": "備案：還車後市區票",
          "kind": "optional",
          "action": "還車後可叫車；改搭BKK才另買票，24h建議留2/11開。"
        }
      ]
    },
    "2/11": {
      "items": [
        {
          "id": "bud24-second",
          "tag": "建議：Budapest 24h",
          "kind": "buy",
          "action": "三人各一張；記下到期時間，2/12是否可沿用須核對。"
        }
      ]
    },
    "2/12": {
      "items": [
        {
          "id": "bud24-second",
          "tag": "查效期：Budapest 24h",
          "kind": "optional",
          "action": "去Keleti若在前一天日票效期內可沿用；過期另買或叫車。"
        },
        {
          "id": "rjx-return",
          "tag": "待購：Budapest→Vienna",
          "kind": "buy",
          "action": "三人跨城票／座位另購，不含在兩地市區pass。"
        },
        {
          "id": "vienna-single",
          "tag": "另購：Vienna 市區票",
          "kind": "extra",
          "action": "Hbf→飯店搭地鐵需市區票；多次搭乘再比較24h。"
        }
      ]
    },
    "2/13": {
      "items": [
        {
          "id": "vienna24",
          "tag": "建議：Vienna 24h",
          "kind": "buy",
          "action": "出發去Schönbrunn前生效；若前一天票仍有效，先沿用、到期前補票。"
        }
      ]
    },
    "2/14": {
      "items": [
        {
          "id": "airport-transfer",
          "tag": "待預約：06:15 機場接送",
          "kind": "buy",
          "action": "預約車費另付；不買市區pass來涵蓋機場，也不買奧地利自駕pass。"
        }
      ]
    },
    "2/15": {
      "none": "飛行／返台，無歐洲市區票需求",
      "items": []
    }
  }
},
  transportGuide: {
  "checkedDate": "2026-10-10",
  "note": "依三人、冬季、既定住宿與交通方式整理。已訂班次明確標示；其餘路線與時間為行程規劃，2027 班次、票價、路況與規則須在出發前再查。站名保留當地拼寫，便於現場找指標。",
  "alerts": [
    "維也納 2026/9/7–2027/10 底 S-Bahn 核心路段施工：S7 改至 St. Marx 起訖，Wien Mitte 的 S-Bahn 月台受影響；U3／U4 地鐵不是一起關閉。不要套用舊遊記「Wien Mitte 搭 S7 直達機場」。2/14 保留 06:15 預約接送。",
    "2/5 H5 到 Szentendre 超出 Budapest 市界；一般 Budapest 市區票不能單獨涵蓋全程。市界內與 Békásmegyer–Szentendre 區間須各有有效票。",
    "2/8 Kuźnice 一般私家車禁入；用當地公車／合規計程車到纜車下站。2/9 入 Kraków：匈牙利車牌須先查 SCT 資格與登錄，並確認飯店合法車道。",
    "2/6 09:00 SIXT 取車、預計 10:00 出發；沿用原車程估算約 16:45 抵達湖區，雪況／休息可能延誤，不保證天黑前到。2/10 的 5.5–6.5h 不能當冬季抵達保證。大雪／塞車時先聯絡飯店與 SIXT。"
  ],
  "alertSources": [
    {
      "name": "Wiener Linien｜2026–2027 S-Bahn 工程",
      "url": "https://www.wienerlinien.at/web/wl-en/modernisations/s-bahn-core-line-closure"
    },
    {
      "name": "BKK｜H5 市界外旅遊票",
      "url": "https://bkk.hu/en/tickets-and-passes/prices/suburban-railway-tour-ticket-h5-h8-h9-full-fare/"
    },
    {
      "name": "PKL｜Kuźnice 交通與纜車 FAQ",
      "url": "https://www.pkl.pl/post/kasprowy-wierch/news-kasprowy/zanim-wyruszysz-na-kasprowy-faq-kopia.html"
    },
    {
      "name": "Kraków 市府｜SCT 車輛規則",
      "url": "https://www.krakow.pl/otwarty_na_swiat_en/304104,artykul,low-emission-zone-in-krakow.html"
    }
  ],
  "essentials": [
    "取車前：三人的行李容量、四條冬季胎、適配雪鏈是否獲車廠／租車公司允許、HU→SK→PL 跨境書面許可、道路救援與還車門市／營業時間一起核對。AWD 不能取代冬季胎。",
    "本次雪鏈建議：四輪冬季胎優先，另向 SIXT 預約一組適配雪鏈備用。高塔特拉／Zakopane 的上坡、飯店入口及停車場可能積雪；這是路線裝備建議，不代表全程必須安裝或每天必定用到。清雪後的乾燥柏油路不要裝鏈行駛。",
    "何時需要裝鏈：依現場雪鏈標誌、附牌、管制與車輛說明操作。波蘭 C-18 要求至少兩個驅動輪裝鏈；斯洛伐克雪鏈標誌要求至少一個驅動軸使用雪鏈或等效裝置。四驅不自動豁免，沒有合規配備就改道或等候，不硬闖。",
    "雪鏈取車核對：請門市按實際交付車款與輪胎尺寸確認適配、允許的輪軸／鏈條厚度、安裝方式及租約限制。BMW xDrive 不自行猜前輪或後輪，也不預先按車組名稱買鏈。先練習安裝，準備防水手套；車速依車輛及雪鏈說明書較低上限，恢復不需／不宜用鏈的路面時安全拆除。SIXT 雪鏈只在部分國家／季節提供，須向 Budapest 門市確認供應與費用。",
    "隨身文件：台灣駕照正本＋有效國際駕照、護照、租約、車籍／保險文件。確認租車公司接受的證件、駕駛人資格；國際駕照不能單獨使用。",
    "取車拍照：四面車身、輪框、玻璃、內裝、油量／里程；找到警告三角牌、反光背心、急救包與補胎設備。背心放車內隨手可取的位置。",
    "導航以路況與路牌為準：保留高速道路選項，不為省通行費選不熟的山路；每天核對封路／降雪。需要操作手機時，請乘客處理或停妥車再操作。",
    "規劃每 1.5–2 小時休息，不等油箱見底。依油箱蓋確認 Diesel／B7 或 Petrol／95／E5／E10；AdBlue 不是柴油。加完確認油槍收好，再依站方指示報油泵號碼付款。",
    "停車先看 P 標誌、付費時段、車牌登錄與付款方式；私人停車場／道路停車可能用不同系統。保存票據；相機、護照、現金隨身。",
    "雪地先清除車頂、車窗、車燈上的雪與冰，拉長距離，避免急煞；霧、雪、隧道用近燈，不只靠日行燈。強風雪／結冰嚴重時取消非必要移動。",
    "故障先到安全位置、開警示燈，能安全下車時穿背心並到護欄外；聯絡租車救援。有人受傷或有立即危險撥 112。不要在車流旁停留拍照。"
  ],
  "essentialSources": [
    {
      "name": "SIXT｜冬季胎與雪鏈加購（供應依國家／季節）",
      "url": "https://www.sixt.com/help-center/articles/how-do-i-add-extras-to-my-sixt-booking/"
    },
    {
      "name": "波蘭警方｜C-18 雪鏈標誌與使用限制",
      "url": "https://tarnow.policja.gov.pl/kt/ruch-drogowy/piatkowy-przepis/7051,Odc-46-przepisy-zwiazane-z-oponami-cz-1.html"
    },
    {
      "name": "Slov-Lex｜雪鏈標誌 251（法規圖表）",
      "url": "https://static.slov-lex.sk/pdf/SK/ZZ/2020/30/ZZ_2020_30_20200401.pdf"
    },
    {
      "name": "斯洛伐克政府｜道路交通規則",
      "url": "https://www.slovensko.sk/en/life-situation/life-situation/_road-traffic-rules"
    },
    {
      "name": "ÖBB｜官方班次與購票",
      "url": "https://www.oebb.at/en/"
    },
    {
      "name": "FlixBus｜行李規則",
      "url": "https://support.flixbus.com/global/en/luggage"
    }
  ],
  "tickets": [
    {
      "city": "Budapest／Szentendre",
      "steps": [
        "BudapestGO 查路線；三人各持有效票，不能拿一張一般單程票輪流刷。",
        "紙本單程票：地鐵在進站驗票線前打票；公車／電車／HÉV 上車後立即打票。普通單程票跨公車／電車換乘通常須另票；地鐵系統內可依票種換線。",
        "24／72h 市區 travelcard 按票面開始時間使用，紙本不再打票；電子票／時間票依 App 指示完成啟用或掃碼，保持手機有電。",
        "2/5 可用市區有效票＋H5 市界外票。H5 tour ticket 只涵蓋 Békásmegyer–Szentendre，可供最多十人同車廂同行，適合比較三人來回成本；不是全程團體市區票。",
        "100E 機場巴士有專用票規則；本行程 2/4 抵達的是 VIE，勿誤買 BUD 機場交通。"
      ],
      "sources": [
        {
          "name": "BKK｜票券與驗票",
          "url": "https://bkk.hu/en/tickets-and-passes/validation-of-paper-tickets/"
        },
        {
          "name": "BKK｜H5 市界外旅遊票",
          "url": "https://bkk.hu/en/tickets-and-passes/prices/suburban-railway-tour-ticket-h5-h8-h9-full-fare/"
        },
        {
          "name": "BudapestGO｜路線查詢",
          "url": "https://futar.bkk.hu/"
        }
      ]
    },
    {
      "city": "Zakopane／Kuźnice",
      "steps": [
        "飯店在 Krupówki 周邊：以步行＋當地公車／計程車為主，避免反覆移車。",
        "目前市府 10、12 等公車服務 Kuźnice；先查最近站與方向，路線號碼／班次依 2027 官網。不要把所有 minibus 都當市營公車。",
        "市營車有單程、60 分鐘轉乘、24h 等票；依售票機／司機／App 指示購票及驗票，備少量 PLN。私營 minibus 要另核對票價與現金規則。",
        "2/8 上山票與市區公車票分開；約 10:00 纜車票不能免除下站交通與候車時間。回程也留排隊緩衝。"
      ],
      "sources": [
        {
          "name": "Zakopane 市府｜公車路線",
          "url": "https://www.zakopane.pl/komunikacjamiejska/rozklady-jazdy"
        },
        {
          "name": "Zakopane 市府｜公車票種",
          "url": "https://www.zakopane.pl/komunikacjamiejska/informacje-praktyczne"
        },
        {
          "name": "PKL｜Kuźnice 交通與纜車 FAQ",
          "url": "https://www.pkl.pl/post/kasprowy-wierch/news-kasprowy/zanim-wyruszysz-na-kasprowy-faq-kopia.html"
        }
      ]
    },
    {
      "city": "高塔特拉／Štrbské Pleso",
      "steps": [
        "本次主線維持租車；湖區住宿附近以步行為主。若選用公共運輸備案，查 ZSSK 的 TEŽ 電氣鐵路及 Štrba–Štrbské Pleso 齒軌鐵路，兩者不是同一條線。",
        "從 Poprad-Tatry 查至 Štrbské Pleso 的完整班次與轉乘，不假定每班直達。紙本區間票／預購票依票種指示打票；電子票按有效時間使用。",
        "SMS 票不能假定台灣門號可用；優先 ZSSK 正式售票或車站。此備案不能替代跨境到 Zakopane 的已定自駕。"
      ],
      "sources": [
        {
          "name": "ZSSK｜高塔特拉鐵路",
          "url": "https://www.zssk.sk/en/tatra-electric-railway-tez-and-cog-railway-oz-2/"
        }
      ]
    },
    {
      "city": "Vienna／維也納",
      "steps": [
        "WienMobil 查地鐵、電車、公車；ÖBB／Scotty 查跨城及機場火車。地鐵沒有閘門也要有有效票。",
        "紙本標示 Please validate 的票在開始旅程前打票；已印有效時間的票依票面，WienMobil 電子票按選定起始時間生效，不需再打紙本票。",
        "市區單程票可沿一個方向換乘，不能拿同票折返；多次搭乘時比較當時在售的多日票，不沿用 2025 舊票種與價格。",
        "Vienna core zone 市區票不含 VIE 機場外區、CAT 等特定產品。買機場交通時輸入完整起終點，不只買市區票。",
        "2027 二月受 S-Bahn 工程影響：機場鐵路備案從 Wien Hbf 查當日長途列車；S7 需配合 St. Marx。2/14 以已排預約車為主。"
      ],
      "sources": [
        {
          "name": "Wiener Linien｜票券使用",
          "url": "https://helpcenter.wienerlinien.at/s/topic/0TOQv0000001DXtOAM/unsere-tickets-richtig-nutzen?language=en_US"
        },
        {
          "name": "維也納市區票範圍／機場不包含",
          "url": "https://www.wienerlinien.at/web/wl-en/tickets/vienna-core-zone"
        },
        {
          "name": "Wiener Linien｜2026–2027 S-Bahn 工程",
          "url": "https://www.wienerlinien.at/web/wl-en/modernisations/s-bahn-core-line-closure"
        },
        {
          "name": "WienMobil｜路線查詢",
          "url": "https://www.wienmobil.at/"
        }
      ]
    }
  ],
  "countries": [
    {
      "code": "HU",
      "name": "匈牙利 Hungary",
      "speed": [
        "50",
        "90",
        "110",
        "130"
      ],
      "alcohol": "一般駕駛 0.0 g/L（零酒精）",
      "rules": [
        "城外白天也須開近燈或合規日行燈；夜間／能見度差改近燈。",
        "黃燈應停，除非已太近而無法安全停下；紅＋黃仍等綠燈。",
        "本次二月跨境山區要求租車配四條冬季胎；這是本次裝備要求，不把它寫成匈牙利全國一律強制冬季胎。"
      ],
      "toll": "M 系列收費道路先查有效 e-vignette。普通小客車常見 D1，但以車籍座位數、用途／類別判定；先問 SIXT 是否已含全國通行證。若未含，按實際車牌／國碼買有效期間覆蓋 2/6–2/10 的票，不重複買。",
      "sources": [
        {
          "name": "歐盟／匈牙利交通規則",
          "url": "https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/hungary/index_en.htm"
        },
        {
          "name": "匈牙利官方｜高速通行證",
          "url": "https://nemzetiutdij.hu/en/"
        }
      ]
    },
    {
      "code": "SK",
      "name": "斯洛伐克 Slovakia",
      "speed": [
        "50",
        "90",
        "130*",
        "130*"
      ],
      "alcohol": "一般駕駛 0.0 g/L（零酒精）",
      "rules": [
        "全年白天須近燈或合規日行燈；能見度差用近燈。",
        "路面有連續積雪、冰或霜時，四輪須合規冬季胎。",
        "塞車要留救援通道：最左車道向左，其餘向右；不跟著救援車鑽。高速道路穿越市區或特殊路段，核對現場限速與最新規定。"
      ],
      "toll": "收費 D／R 路段按 eZnamka 官方地圖核對。一般 ≤3.5t 小客車使用電子通行證；10 日票含指定起始日，2/6 起算可覆蓋本次兩次跨境用路。車牌、國碼、起日輸入後保留確認信，先查租車是否已含。",
      "sources": [
        {
          "name": "斯洛伐克政府｜道路交通規則",
          "url": "https://www.slovensko.sk/en/life-situation/life-situation/_road-traffic-rules"
        },
        {
          "name": "斯洛伐克政府｜速限與道路標誌",
          "url": "https://www.slovensko.sk/en/life-situation/life-situation/_road-traffic-rules"
        },
        {
          "name": "斯洛伐克官方｜eZnamka",
          "url": "https://eznamka.sk/en/evignettes/glossary"
        }
      ]
    },
    {
      "code": "PL",
      "name": "波蘭 Poland",
      "speed": [
        "50",
        "90",
        "100／120*",
        "140"
      ],
      "alcohol": "一般駕駛須低於 0.2 g/L；本行程一律不喝酒開車",
      "rules": [
        "全天開合規車燈；夜間與能見度差用近燈。",
        "快道路：單一車行道 100、雙車行道 120 km/h；一般道路雙車行道且各向至少兩線可為 100。住宅區標誌內 20，市區夜間也不是舊制 60。",
        "紅燈旁小綠箭頭是「有條件轉彎」：先完全停車，再讓行人與有優先權車輛；不是直接通行的綠燈。",
        "本次使用冬季胎是冬季山區安全要求；不寫成波蘭全國法定一律強制。"
      ],
      "toll": "小客車沒有全國統一 vignette；依實際路線核對國營／特許收費路段，不把大型車 e-TOLL 規則套到普通小客車。Kraków SCT 與停車／老城限制是另三件事。柴油小客車目前以 Euro 6 或 2014 年起製造判定；外國車牌先到 SCT 系統登錄／核對資格，勿靠 BMW 車型名稱推定。",
      "sources": [
        {
          "name": "歐盟／波蘭交通規則",
          "url": "https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/poland/index_en.htm"
        },
        {
          "name": "波蘭警察｜各類道路速限",
          "url": "https://info.policja.pl/ine/for-foreigners/police-tips-and-hints/road-safety/192726,Road-Safety.html"
        },
        {
          "name": "Kraków 市府｜SCT 車輛規則",
          "url": "https://www.krakow.pl/otwarty_na_swiat_en/304104,artykul,low-emission-zone-in-krakow.html"
        },
        {
          "name": "Kraków SCT｜查詢／登錄",
          "url": "https://sct.zdmk.krakow.pl/"
        }
      ]
    },
    {
      "code": "AT",
      "name": "奧地利 Austria",
      "speed": [
        "50",
        "100",
        "依道路標誌",
        "130"
      ],
      "alcohol": "一般駕駛須低於 0.5 g/L；新手等類別更嚴格",
      "rules": [
        "本行程在奧地利使用公共運輸，這裡供意外改用車時查閱。",
        "11/1–4/15 遇雪、雪泥或結冰，≤3.5t 車需四輪冬季胎；雪鏈替代條件很有限，不能視為普遍替代。",
        "綠燈閃爍表示快轉黃，不是催你加速；黃燈應停，除非已無法安全停下。"
      ],
      "toll": "若改為在奧地利自駕：先確認跨境許可及 ASFINAG 通行證／分段收費。沒有開車就不用買。線上不同期限產品生效規則可能不同，購買時確認開始日與是否立即有效。",
      "sources": [
        {
          "name": "歐盟／奧地利交通規則",
          "url": "https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/austria/index_en.htm"
        },
        {
          "name": "奧地利外交部｜開車資訊",
          "url": "https://www.bmeia.gv.at/en/austrian-embassy-pretoria/travels-to-austria/driving-in-austria"
        },
        {
          "name": "奧地利政府｜冬季胎規定",
          "url": "https://www.oesterreich.gv.at/en/themen/mobilitaet/kfz/10/2/Seite.063100"
        },
        {
          "name": "ASFINAG｜奧地利通行證",
          "url": "https://www.asfinag.at/en/toll/vignette/digital-vignette/"
        }
      ]
    }
  ],
  "speedNote": "單位 km/h；限 ≤3.5t、無拖車小客車的一般速限，現場標誌／施工／道路類別優先。*斯洛伐克特定路段與波蘭快道路須辨識道路類型；雪冰路面要低於上限。酒精數字是血液濃度 g/L，不是台灣呼氣值 mg/L；本行程統一零酒精。",
  "signs": [
    {
      "key": "stop",
      "name": "STOP／停車再開",
      "look": "紅色八角形",
      "action": "到停止線完全停妥，確認車輛／行人後才行駛；沒有線時在可看清交叉車流且不侵入的位置停。"
    },
    {
      "key": "yield",
      "name": "讓路／Give way",
      "look": "倒三角紅框；波蘭常為黃底",
      "action": "減速並讓優先車流；需要時停。圓環入口有此標誌時，讓環內車；不要只看到圓環圖案就推定優先權。"
    },
    {
      "key": "priority",
      "name": "優先道路",
      "look": "黃色菱形",
      "action": "表示所在道路具有優先權，仍遵守號誌、行人及轉彎義務；不是任何路口都能不減速。"
    },
    {
      "key": "priority-end",
      "name": "優先道路結束",
      "look": "黃菱形加黑斜線",
      "action": "之後不能再靠前一個黃菱形判斷；看下一路口號誌、讓路標誌與當地優先規則。"
    },
    {
      "key": "no-entry",
      "name": "禁止進入",
      "look": "紅圓白橫槓",
      "action": "不能由這方向進入，即使導航要你轉；常見於單行道反向入口。"
    },
    {
      "key": "no-vehicles",
      "name": "雙向禁止車輛通行",
      "look": "紅框白圓",
      "action": "不是限速解除。查看下方例外／時間附牌，租車或飯店訂房不自動取得進入資格。"
    },
    {
      "key": "limit",
      "name": "限速 50（示例）",
      "look": "紅圈數字",
      "action": "這裡數字是最高速度 km/h；進入村鎮也要注意聚落起點／區域牌，不等導航提醒。"
    },
    {
      "key": "limit-end",
      "name": "50 限制解除（示例）",
      "look": "數字加斜線",
      "action": "只解除指定限制，恢復適用的一般／區域限速；不表示可以不限速。"
    },
    {
      "key": "no-parking",
      "name": "禁止停車",
      "look": "藍圓紅框單斜線",
      "action": "不能停放車輛；短暫停靠的定義與例外依當地法規及附牌，不用雙黃燈當停車許可。"
    },
    {
      "key": "no-stopping",
      "name": "禁止停靠",
      "look": "藍圓紅框紅叉",
      "action": "限制比禁止停車嚴；不要停下上下客／拿行李。緊急情況按現場安全處理。"
    },
    {
      "key": "chains",
      "name": "必須裝雪鏈",
      "look": "藍圓輪胎＋雪鏈",
      "action": "依標誌及當地例外裝到規定驅動輪；四驅不自動免除。先確認車型能否裝鏈、尺寸與輪軸，不在車流旁臨時研究。"
    },
    {
      "key": "one-way",
      "name": "單行道",
      "look": "藍底白箭頭",
      "action": "只可依箭頭方向行駛；相鄰車道箭頭／自行車例外另看附牌，不因有人逆向就跟進。"
    }
  ],
  "signNote": "以下為辨識用簡化示意，字型、底色及附牌各國可能不同。波蘭警告／讓路牌常見黃底；以現場全套標誌、時間與例外附牌判斷。紅綠燈優先於上述無號誌路口的優先牌；警察指揮依其指示。",
  "signSources": [
    {
      "name": "WKO｜交通標誌圖表（奧地利）",
      "url": "https://www.wko.at/noe/transportverkehr/befoerderungpkw/aus-und-weiterbildung/verkehrszeichen.pdf"
    },
    {
      "name": "歐盟／波蘭交通規則",
      "url": "https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/poland/index_en.htm"
    },
    {
      "name": "斯洛伐克政府｜道路交通規則",
      "url": "https://www.slovensko.sk/en/life-situation/life-situation/_road-traffic-rules"
    }
  ],
  "signals": [
    [
      "紅燈／紅＋黃",
      "停在停止線前。紅＋黃只是準備變綠，不能先開；一般紅燈不能任意右轉。"
    ],
    [
      "黃燈",
      "能安全停車就停；已非常接近而無法安全停下時，按當地規則通過，不能加速搶燈。"
    ],
    [
      "奧地利閃綠",
      "快變黃，準備減速；不把它當作一直通行的綠燈。"
    ],
    [
      "波蘭紅燈＋小綠箭頭",
      "先完全停車，再按箭頭轉且讓行人及其他優先車流；與一般獨立方向綠燈不同。"
    ],
    [
      "行人／電車／車道專用訊號",
      "辨認自己車道的訊號。人形綠燈、電車白色棒狀訊號不是小客車綠燈；綠燈進路口前也確認出口不堵。"
    ]
  ],
  "days": {
    "2/4": {
      "mode": "火車／抵達",
      "title": "VIE → Wien Hbf → Budapest-Keleti → InterContinental Budapest",
      "countries": [
        "AT",
        "HU"
      ],
      "steps": [
        "08:30 航班預定抵達 VIE；先完成下機、護照查驗、領行李及海關。約 09:30–10:15 到機場火車站為規劃估計，遇排隊或航班延誤須順延。",
        "機場 → Wien Hbf：跟著火車／ÖBB 指標到 Flughafen Wien Bahnhof，搭直達 Wien Hbf 的 Railjet／IC，車程約 15 分鐘，通常每半小時一班。此已購票截圖從 Wien Hbf 起，機場段票券另行確認／購買；不要把 CAT 替代巴士當成到中央車站的火車。2026–2027 工程期間，機場至中央車站的 Railjet／IC 仍有服務，出發前再查班次。",
        "到 Wien Hbf 後留在站內午餐／休息；三件大行李可找美食區邊角座位，或買方便食用的外帶餐帶上火車。13:10 左右確認出發月台、車廂及座位，預留搬行李時間。",
        "ÖBB RJX 63 三人車票已購：2027/2/4（四）13:40 Wien Hbf → 16:29 Budapest-Keleti，車程 2 小時 49 分鐘；使用者已更正確認 13:40，時間均為當地時間。",
        "截圖的「Wien Hbf (Bahnsteige 3–12)」是車站月台區域，並非已指定的出發月台。實際月台、車廂、座位與 Business 艙等以完整票券、ÖBB App 及當日看板核對；本截圖未顯示艙等及座號。",
        "16:29 抵達 Budapest-Keleti 後，三人三件 29 吋大箱以搭合規計程車到 InterContinental Budapest 為主，叫車前確認行李容量；含下車、等車及交通約留 30–45 分鐘，規劃 17:00–17:15 抵達飯店，依實際路況調整。公共運輸備案：M2 往 Déli pályaudvar 至 Deák Ferenc tér，再步行到飯店；依 BudapestGO 查當日路線及無階梯通道。",
        "舊 FlixBus 車票曾已購；目前僅確認改搭火車，尚未確認巴士已取消或退款，請至管理訂單核對並處理。飯店入住與晚餐依實際抵達順延，河岸散步保留選擇性。"
      ],
      "sources": [
        {
          "name": "ÖBB｜班次與購票",
          "url": "https://www.oebb.at/en/"
        },
        {
          "name": "ÖBB｜機場 Railjet／IC",
          "url": "https://www.oebb.at/en/regionale-angebote/ueberregionale-angebote/anreise-zum-flughafen"
        },
        {
          "name": "Vienna Tourist Board｜2026–2027 機場交通施工安排",
          "url": "https://www.wien.info/en/travel-info/arrival-departure/airport-to-center/important-information-for-airport-travellers-2026-2027-1118558"
        },
        {
          "name": "BudapestGO｜末段交通查詢",
          "url": "https://futar.bkk.hu/"
        }
      ]
    },
    "2/5": {
      "mode": "公共運輸／市區",
      "title": "H5 聖安德烈 → 城堡山 → 遊船碼頭",
      "countries": [
        "HU"
      ],
      "steps": [
        "飯店 → Batthyány tér：先查過河路線；可由 Deák Ferenc tér 搭 M2 往 Déli pályaudvar 方向，到 Batthyány tér 再找 H5 郊區鐵路。地鐵與 H5 是不同月台。",
        "H5 去程看終點 Szentendre（不是提早終止的區間車），車上約 40–45 分鐘為草案估計；到站步行去 Fő tér 老城。回程往 Batthyány tér。",
        "市界內需有效 Budapest 票／pass，Békásmegyer 以外另買 H5 區間票；三人同行可比較 H5 tour ticket，但仍需市區票。先買好來回，避免回程找售票點。",
        "回市區後到城堡山：BudapestGO 查往 Dísz tér／Szentháromság tér，16 公車是候選；現場站位與方向再核對，步行上坡遇冰雪時改車。",
        "18:00 晚餐後下山前往船票指定碼頭；首選 Legenda Dock 7／Jane Haining rakpart。查公車／計程車＋步行末段，留到約 18:40 抵達的緩衝；以實際 2027 船票為準。"
      ],
      "sources": [
        {
          "name": "BKK｜票券與驗票",
          "url": "https://bkk.hu/en/tickets-and-passes/validation-of-paper-tickets/"
        },
        {
          "name": "BKK｜H5 市界外旅遊票",
          "url": "https://bkk.hu/en/tickets-and-passes/prices/suburban-railway-tour-ticket-h5-h8-h9-full-fare/"
        },
        {
          "name": "BKK｜16 公車",
          "url": "https://futar.bkk.hu/route/BKK_0160"
        },
        {
          "name": "Legenda｜Dock 7 集合位置",
          "url": "https://legenda.hu/en/directions"
        }
      ]
    },
    "2/6": {
      "mode": "自駕／HU → SK",
      "title": "Budapest → Košice → Prešov → Poprad → Štrbské Pleso",
      "countries": [
        "HU",
        "SK"
      ],
      "steps": [
        "已預訂 2027/2/6 09:00 SIXT Budapest Chain Bridge 取車：Apáczai Csere János u. 12–14, Budapest, 1052。預留至 10:00 辦理手續、車況拍照、裝行李、確認四輪冬季胎與適配雪鏈；預計 10:00 出發。",
        "取車後儘早取得實際車牌及車籍／排放資料，核對 SIXT 是否已辦 Kraków SCT 登錄；未完成則依官方系統申請，2/9 入城前確認資格。跨境書面許可與 SCT 是不同事項。",
        "主要道路候選：Budapest 的 M3 → M30，經 Miskolc 附近但不進城／不加景點，往 Tornyosnémeti／Milhosť 邊界接 SK R4 → Košice。路線依當日施工與封路調整。",
        "Košice 午餐：先選合法停車場再步行進中心，出發前記錄停車場名稱／車牌付費規則；不把禁行老城當導航終點。",
        "Košice → Prešov → Poprad 優先查 D1 幹線；Poprad → 湖區查當日開放道路，最後上山可能有積雪、霧與彎道。",
        "HU／SK 收費段在進入前確認通行證已生效。10:00 出發，沿用原草案純駕駛約 5h45＋午餐 1h，約 16:45 抵達只是規劃值，額外休息／風雪／塞車需另加時間；不保證天黑前到，不以趕日光為由超速。必要時縮短非必要停留並通知飯店。",
        "湖區末段與飯店入口可能積雪：建議備適配雪鏈，先確認車廠／SIXT 允許的尺寸與輪軸；依當日路面、標誌與管制決定是否安裝。冬季胎與四驅不等於所有雪況都能通行。完整安裝前核對事項見自駕實用操作。"
      ],
      "sources": [
        {
          "name": "匈牙利官方｜高速通行證",
          "url": "https://nemzetiutdij.hu/en/"
        },
        {
          "name": "斯洛伐克官方｜eZnamka",
          "url": "https://eznamka.sk/en/evignettes/glossary"
        },
        {
          "name": "斯洛伐克政府｜道路交通規則",
          "url": "https://www.slovensko.sk/en/life-situation/life-situation/_road-traffic-rules"
        }
      ]
    },
    "2/7": {
      "mode": "自駕／SK → PL",
      "title": "Štrbské Pleso → Jaszczurówka → Zakopane",
      "countries": [
        "SK",
        "PL"
      ],
      "steps": [
        "維持 09:30–12:00 的原自駕草案；Štrbské Pleso → Poprad 方向接山區幹道 → Tatranská Javorina → Łysa Polana 邊界 → PL 960／961 → Jaszczurówka／Zakopane。先核對山區道路是否開放，約 2h30 不含額外雪況延誤。",
        "上路前查雪胎、玻璃除霜與油量，山區不為追求最短路線穿小路；嚴重結冰時延後或另查安全路線。",
        "Jaszczurówka 停合法車位，接著到 Gubałówka 下站周邊合法付費停車場；Krupówki 步行，不把街道本身當汽車導航終點。",
        "Cristina 已知 16:00 前不提供標準入住及無行李服務；行李在車內完全遮蔽，相機證件隨身，停車不保證零風險。入住時問車位、出入方法與隔晨 Kuźnice 叫車。"
      ],
      "sources": [
        {
          "name": "斯洛伐克政府｜道路交通規則",
          "url": "https://www.slovensko.sk/en/life-situation/life-situation/_road-traffic-rules"
        },
        {
          "name": "歐盟／波蘭交通規則",
          "url": "https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/poland/index_en.htm"
        },
        {
          "name": "PKL｜Kuźnice 交通與纜車 FAQ",
          "url": "https://www.pkl.pl/post/kasprowy-wierch/news-kasprowy/zanim-wyruszysz-na-kasprowy-faq-kopia.html"
        }
      ]
    },
    "2/8": {
      "mode": "公共運輸＋活動接駁",
      "title": "Cristina → Kuźnice → Kasprowy → Snowmobile 集合點",
      "countries": [
        "PL"
      ],
      "steps": [
        "09:00 出門：優先飯店預約合規計程車，或查 Krupówki Pomnik hr. Wł. Zamoyskiego 等附近站往 Kuźnice 的市營 10／12 等公車。班次／站位以當日公告，雪天不保證 30 分鐘。",
        "Kuźnice 車道禁止一般私家車；不開租車直達纜車下站。若先開車到合法停車場，也要另算最後接駁與停車時間。",
        "纜車下站地址 Kuźnice 14；約 09:30 到站、10:00 上山只是原規劃，先取得時段票並按要求報到。記下下山票規則，午餐後還要轉活動集合點。",
        "回程市營公車／計程車到市區；Snowmobile 業者集合地址尚未指定，14:00–14:20 不能當固定可達保證。訂活動時確認是否接送、停車及提前報到時間，地址確認後才排實際末段。"
      ],
      "sources": [
        {
          "name": "Zakopane 市府｜公車路線",
          "url": "https://www.zakopane.pl/komunikacjamiejska/rozklady-jazdy"
        },
        {
          "name": "Zakopane 市府｜公車票種",
          "url": "https://www.zakopane.pl/komunikacjamiejska/informacje-praktyczne"
        },
        {
          "name": "PKL｜Kuźnice 交通與纜車 FAQ",
          "url": "https://www.pkl.pl/post/kasprowy-wierch/news-kasprowy/zanim-wyruszysz-na-kasprowy-faq-kopia.html"
        }
      ]
    },
    "2/9": {
      "mode": "自駕＋老城步行",
      "title": "自駕至飯店停車 → Wawel → 聖母聖殿 → 主廣場（步行）",
      "countries": [
        "PL"
      ],
      "steps": [
        "主要道路候選：Zakopane 的 DK47（Zakopianka）→ Nowy Targ／Rabka-Zdrój → S7／DK7 → Kraków；以導航與通行路段為準。09:00–11:30 是原草案，冬季及進城塞車可能延誤。",
        "2/6 取車後儘早辦 Kraków SCT，2/8 再確認申請狀態及通行資格。外國車牌即使符合排放／年份標準仍須登錄；準備實際車牌、車籍影本、品牌／型號、製造年份、燃料與 Euro 排放資料，未確認資格前不進入管制區。官方規則查核：2026/10/11，出發前再確認。",
        "自駕終點為 Holiday Inn Krakow City Centre（Wielopole 4, 31-072 Kraków）提供的合法停車入口，行前向飯店確認車位、入口及收費；名額有限，不假設抵達即可停到。SCT 通過不代表可以開進老城步行街。11:30 先停車、寄放大行李；客房一般 15:00 起入住，晚餐後再辦入住即可。",
        "飯店 → Wawel：步行約 15–20 分鐘，約 1 公里；可經 Planty 南側／Stradomska 接城堡上坡入口。12:00–13:00 的一小時包含簡單午餐及走路，約 12:40 前開始往 Wawel 走，不安排慢節奏套餐。",
        "13:00–13:45 看 Wawel Hill、主教座堂外觀及城堡庭院；13:45–15:00 預留 Castle | Second Floor（State Rooms）一個展區與報到緩衝，實際入場以買到的指定時段為準。主教座堂不入內，免買其室內票。",
        "Wawel → Kanonicza → Grodzka → Plac Mariacki：步行約 15–20 分鐘（約 1 公里，不含停拍）；15:00–16:00 留一小時慢走、拍照及購票。16:00–16:45 聖母聖殿入內：到 Plac Mariacki 7 購票，走南側遊客入口，勿走主廣場祈禱入口。",
        "16:45 後步行數分鐘到主廣場／紡織會館外觀，接晚餐和夜景；主廣場回飯店約 5–10 分鐘。全日連同庭院與街拍估約 3–5 公里，依繞行增減；冬季石板路濕滑放慢走。",
        "本日不預購 Kraków 市區多日交通票。太冷、疲累或結冰時可請飯店叫合規計程車至 Wawel 周邊可停靠處，山丘最後一段及老城核心仍需步行；不為景點重新移車。若臨時搭市營電車／公車，另買適用單次／時間票並依規定驗票。"
      ],
      "sources": [
        {
          "name": "Kraków 市府｜SCT 車輛規則",
          "url": "https://www.krakow.pl/otwarty_na_swiat_en/304104,artykul,low-emission-zone-in-krakow.html"
        },
        {
          "name": "Kraków SCT｜查詢／登錄",
          "url": "https://sct.zdmk.krakow.pl/"
        },
        {
          "name": "歐盟／波蘭交通規則",
          "url": "https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/poland/index_en.htm"
        },
        {
          "name": "Holiday Inn｜地址、停車與交通",
          "url": "https://www.ihg.com/holidayinn/hotels/us/en/krakow/krkcc/hoteldetail/directions"
        },
        {
          "name": "Wawel｜Castle Second Floor（State Rooms）",
          "url": "https://wawel.krakow.pl/en/route/castle-second-floor"
        },
        {
          "name": "聖母聖殿｜遊客時段、售票與南側入口",
          "url": "https://mariacki.com/en/tours-of-the-basilica/"
        }
      ]
    },
    "2/10": {
      "mode": "自駕／PL → SK → HU",
      "title": "Kraków → Budapest SIXT 還車",
      "countries": [
        "PL",
        "SK",
        "HU"
      ],
      "steps": [
        "09:00 出發維持規劃；訂單已確認 2027/2/10 19:30 在 SIXT Budapest Keleti Train Station 還車：Baross tér 7–8, Budapest, 1087，與取車門市不同。純駕駛 5.5–6.5h 不含午餐、加油、塞車與雪況；提早到可先詢問能否提前還車。",
        "中部幹道候選：Kraków → Rabka／Chyżne → Trstená → Ružomberok → Banská Bystrica → Šahy → Budapest。各段有山區與一般道路，逐段核對；不照导航走 Tisovec 山區捷徑。",
        "東側備選經 Prešov／Košice → R4／M30 → M3：若要少走不熟山路可比較，但繞行與時間可能增加。不能把東側備案也套成原 5.5–6.5h；先看實際路況及還車可行性。",
        "HU／SK 通行證要涵蓋回程日期。每 1.5–2h 到服務區休息，午餐、最後加油都另計；若預估無法準時，提早聯絡 SIXT，不壓縮休息或超速。",
        "按合約要求在還車前補油，保留收據；預留時間找到 Keleti 還車入口／車位，門市地址不等於可停在車站前任意位置。向 SIXT 核對 19:30 現場交車或鑰匙投遞流程，截圖沒有確認營業時間。記錄里程、油量、車況及交還證明；還車後依公寓實際地址搭車，三人及行李需確認車型容量。"
      ],
      "sources": [
        {
          "name": "匈牙利官方｜高速通行證",
          "url": "https://nemzetiutdij.hu/en/"
        },
        {
          "name": "斯洛伐克官方｜eZnamka",
          "url": "https://eznamka.sk/en/evignettes/glossary"
        },
        {
          "name": "斯洛伐克政府｜道路交通規則",
          "url": "https://www.slovensko.sk/en/life-situation/life-situation/_road-traffic-rules"
        },
        {
          "name": "歐盟／波蘭交通規則",
          "url": "https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/poland/index_en.htm"
        }
      ]
    },
    "2/11": {
      "mode": "公共運輸＋步行",
      "title": "Pest 景點 → Batthyány tér → 鏈橋",
      "countries": [
        "HU"
      ],
      "steps": [
        "租車訂單為 2/10 19:30 在 Budapest Keleti Train Station 還車；今天以公共運輸與步行為主。從公寓實際地址查 BudapestGO，不假定固定起站；中央市場目的地可查 Fővám tér。",
        "中央市場 → Váci utca → Basilica → Kossuth Lajos tér／Parliament 維持步行主線，電車只作走累備案，避免重複過河。",
        "去 Batthyány tér 對岸拍國會大廈：可步行至合適地鐵站轉 M2 往 Buda，到 Batthyány tér；詳細步行和轉乘按出發位置即時查。",
        "Batthyány tér → Chain Bridge 可沿河步行，結冰／寒風時改市區車；回程看當時最後班次與公寓地址。一般單程票不要跨公車／電車重複使用。"
      ],
      "sources": [
        {
          "name": "BKK｜票券與驗票",
          "url": "https://bkk.hu/en/tickets-and-passes/validation-of-paper-tickets/"
        },
        {
          "name": "BudapestGO｜路線查詢",
          "url": "https://futar.bkk.hu/"
        }
      ]
    },
    "2/12": {
      "mode": "跨城火車＋市區地鐵",
      "title": "Budapest-Keleti → Wien Hbf → InterContinental Vienna",
      "countries": [
        "HU",
        "AT"
      ],
      "steps": [
        "維持直達 Railjet／EC 優先；訂票起站核對 Budapest-Keleti，終點 Wien Hbf。2027 列車號／時刻未確認，不把每天固定班次先寫死。",
        "公寓 → Keleti 依地址查 BKK；有大箱時預約足夠容量的車。建議提早約 30 分鐘到站找月台，出發站大看板再核對車次與終點。",
        "三人車票與座位預訂分開核對；能選座時盡量同車廂。29 吋箱優先大型行李架，不預設頭頂架放得下；門口、逃生道不要堵。",
        "到 Wien Hbf：查 U1 往 Leopoldau → Karlsplatz，轉 U4 往 Heiligenstadt → Stadtpark，再步行至飯店；這是候選走法，當日站內電梯／轉乘公告再查，大箱可改計程車。",
        "Wien Hbf 到飯店的市區票與跨城火車票分開核對，跨城票不自動涵蓋所有地鐵。市區 S-Bahn 工程不等於直達 Wien Hbf 跨城車停駛，但出發前仍查工程改點。"
      ],
      "sources": [
        {
          "name": "ÖBB｜官方班次與購票",
          "url": "https://www.oebb.at/en/"
        },
        {
          "name": "WienMobil｜路線查詢",
          "url": "https://www.wienmobil.at/"
        },
        {
          "name": "Wiener Linien｜票券使用",
          "url": "https://helpcenter.wienerlinien.at/s/topic/0TOQv0000001DXtOAM/unsere-tickets-richtig-nutzen?language=en_US"
        },
        {
          "name": "Wiener Linien｜2026–2027 S-Bahn 工程",
          "url": "https://www.wienerlinien.at/web/wl-en/modernisations/s-bahn-core-line-closure"
        }
      ]
    },
    "2/13": {
      "mode": "公共運輸＋步行",
      "title": "Stadtpark → Schönbrunn → Belvedere → Hofburg",
      "countries": [
        "AT"
      ],
      "steps": [
        "飯店附近 Stadtpark 搭 U4 往 Hütteldorf → Schönbrunn，出站後步行至宮殿入口；依 09:30 入場目標留站到入口的步行緩衝。",
        "Schönbrunn → 上美景宮（Upper Belvedere）：WienMobil 查 U4 轉電車／市區車＋步行，不只輸入 Belvedere 模糊終點；上宮與下宮不是同一入口。",
        "美景宮 → Hofburg 查當日電車／步行組合；以已定景點順序安排，不加景點。回飯店整理行李，確認 2/14 車型、司機聯絡及集合點。",
        "市區多次乘車比較當時在售多日票；若是紙本需打票種類，要在首次旅程開始前完成。"
      ],
      "sources": [
        {
          "name": "WienMobil｜路線查詢",
          "url": "https://www.wienmobil.at/"
        },
        {
          "name": "Wiener Linien｜票券使用",
          "url": "https://helpcenter.wienerlinien.at/s/topic/0TOQv0000001DXtOAM/unsere-tickets-richtig-nutzen?language=en_US"
        }
      ]
    },
    "2/14": {
      "mode": "預約車／機場",
      "title": "InterContinental Vienna → VIE",
      "countries": [
        "AT"
      ],
      "steps": [
        "維持 06:15 預約接送、約 06:45 到 VIE、10:00 TR61；交通時間是原規劃，出發前確認航空公司報到航廈、截止時間與道路情況。",
        "確認三人＋大行李可裝車、飯店門口集合位置、費用／等待規則與司機聯絡。前晚確認，當天提早下樓。",
        "車輛未到先聯絡業者／飯店安排合規計程車。公共運輸只作預先查好的備案：從 Wien Hbf 查機場長途列車；不臨時照舊遊記走 Wien Mitte 的 S7。",
        "機場火車必須持涵蓋機場外區的票，Vienna core zone 票不足；清晨首班與工程班表以 2027 官方為準。"
      ],
      "sources": [
        {
          "name": "Wiener Linien｜2026–2027 S-Bahn 工程",
          "url": "https://www.wienerlinien.at/web/wl-en/modernisations/s-bahn-core-line-closure"
        },
        {
          "name": "維也納市區票範圍／機場不包含",
          "url": "https://www.wienerlinien.at/web/wl-en/tickets/vienna-core-zone"
        },
        {
          "name": "ÖBB｜官方班次與購票",
          "url": "https://www.oebb.at/en/"
        }
      ]
    }
  }
},
  title: "2027 中歐冬季旅程",
  subtitle: "2/3–2/15｜13 天 12 夜｜3 人｜攝影 × 古城 × 高塔特拉雪景",
  meta: {
    travelers: 3,
    days: 13,
    nights: 12,
    start: "2027-02-03",
    end: "2027-02-15"
  },
  travelGuide: {
    "checkedDate": "2026-10-08",
    "note": "文化禮貌是情境建議，並非每個人的固定習慣。基本語言提供中文與各國當地語對照，可直接出示短句；先問候，再提出需求。票價、營業、拍攝與交易規則出發前以官方及現場公告重查。",
    "common": [
      "先問候再提出問題；排隊、上下車與拍照時保留通道，音量放低。",
      "教堂與紀念地先看參觀／拍攝告示，禮拜進行時保持安靜；拍攝人物近照先詢問。",
      "餐廳先核對帳單是否含服務費，小費依服務與意願決定。刷卡前說清楚要付的總額，找零也直接說明。",
      "不把語言、國籍或政治歷史當成玩笑；不確定對方會哪種語言時，先問是否能用英文。"
    ],
    "dayCountries": {
      "2/3": [],
      "2/4": [
        "AT",
        "HU"
      ],
      "2/5": [
        "HU"
      ],
      "2/6": [
        "HU",
        "SK"
      ],
      "2/7": [
        "SK",
        "PL"
      ],
      "2/8": [
        "PL"
      ],
      "2/9": [
        "PL"
      ],
      "2/10": [
        "PL",
        "SK",
        "HU"
      ],
      "2/11": [
        "HU"
      ],
      "2/12": [
        "HU",
        "AT"
      ],
      "2/13": [
        "AT"
      ],
      "2/14": [
        "AT"
      ],
      "2/15": []
    },
    "countries": [
      {
        "code": "HU",
        "name": "匈牙利",
        "language": "匈牙利語",
        "lang": "hu",
        "currency": "HUF · 匈牙利福林",
        "intro": "Budapest 是布達佩斯；Bucharest 是羅馬尼亞的布加勒斯特。匈牙利語與此行其他國家的語言不同，先用一句當地問候，再轉英文即可。",
        "phrases": [
          [
            "你好／日安",
            "Jó napot!",
            "進店、飯店櫃檯",
            {
              "ipa": "/ˈjoː ˈnɒpot/",
              "reading": "YOH NAH-pot"
            }
          ],
          [
            "晚上好",
            "Jó estét!",
            "晚間見面",
            {
              "ipa": "/ˈjoː ˈɛʃteːt/",
              "reading": "YOH ESH-tayt"
            }
          ],
          [
            "謝謝",
            "Köszönöm.",
            "接受協助、用餐後",
            {
              "ipa": "/ˈkøsønøm/",
              "reading": "KEU-seu-neum"
            }
          ],
          [
            "不好意思",
            "Elnézést!",
            "引起注意、借過",
            {
              "ipa": "/ˈɛlneːzeːʃt/",
              "reading": "EL-nay-zaysht"
            }
          ],
          [
            "再見",
            "Viszontlátásra!",
            "離開店家",
            {
              "ipa": "/ˈvisontlaːtaːʃrɒ/",
              "reading": "VEE-sont-laa-taash-rah"
            }
          ],
          [
            "請結帳",
            "A számlát kérem!",
            "餐廳",
            {
              "ipa": "/ɒ ˈsaːmlaːt ˈkeːrɛm/",
              "reading": "ah SAAM-laat KAY-rem"
            }
          ]
        ],
        "quick": [
          "先看帳單的 szervizdíj（服務費），再決定是否加小費。",
          "問候可用 Jó napot；不要拿 Hungary／hungry 或 Budapest／Bucharest 開玩笑。"
        ],
        "etiquette": [
          "不必記一套特殊儀式；友善、禮貌最實用。Szia 是較熟悉、隨意的招呼，初次接觸可先用 Jó napot。",
          "官方提醒不要預設每個人都能說外語；備妥飯店地址、停車或訂單畫面可減少誤解。"
        ],
        "avoid": [
          "結帳前核對 szervizdíj（服務費）；追加小費依意願，不因刷卡畫面提示就重複支付。",
          "叫車使用可靠業者或 App；目的地與付款方式先確認。",
          "多瑙河畔之鞋是紀念地，拍照時保持尊重，避免踩踏或坐在裝置上。"
        ],
        "sources": [
          {
            "name": "Visit Hungary｜文化與注意事項",
            "url": "https://visithungary.com/articles/dos-and-dont%27s"
          },
          {
            "name": "ELTE 大學｜匈牙利語短句",
            "url": "https://www.elte.hu/en/about-hungary/hungarian-phrases"
          },
          {
            "name": "匈牙利法規資料庫｜服務費規則",
            "url": "https://njt.hu/jogszabaly/2024-44-20-2X"
          }
        ],
        "situations": [
          [
            "能用英文嗎？",
            "Beszél angolul?",
            "",
            {
              "ipa": "/ˈbɛseːl ˈɒŋɡolul/",
              "reading": "BEH-sayl AHNG-go-lool"
            }
          ],
          [
            "我們有三位。",
            "Hárman vagyunk.",
            "",
            {
              "ipa": "/ˈhaːrmɒn ˈvɒɟuŋk/",
              "reading": "HAAR-mahn VAH-dyoonk"
            }
          ],
          [
            "我今天有訂房。",
            "Mára van szobafoglalásom.",
            "",
            {
              "ipa": "/ˈmaːrɒ vɒn ˈsobɒfoɡlɒlaːʃom/",
              "reading": "MAA-rah vahn SO-bah-fog-lah-laa-shom"
            }
          ],
          [
            "我們訂了兩間房。",
            "Két szobát foglaltunk.",
            "",
            {
              "ipa": "/keːt ˈsobaːt ˈfoɡlɒltuŋk/",
              "reading": "KAYT SO-baat FOG-lahl-toonk"
            }
          ],
          [
            "請問停車場在哪裡？",
            "Hol van a parkoló?",
            "",
            {
              "ipa": "/hol vɒn ɒ ˈpɒrkoloː/",
              "reading": "HOL vahn ah PAHR-ko-loh"
            }
          ],
          [
            "請問怎麼繳停車費？",
            "Hogyan fizethetek a parkolásért?",
            "",
            {
              "ipa": "/ˈhoɟɒn ˈfizɛthɛtɛk ɒ ˈpɒrkolaːʃeːrt/",
              "reading": "HO-dyahn FEE-zet-heh-tek ah PAHR-ko-laa-shayrt"
            }
          ],
          [
            "可以寄放行李嗎？",
            "Itt hagyhatjuk a csomagjainkat?",
            "",
            {
              "ipa": "/itː ˈhɒɟhɒtjuk ɒ ˈtʃomɒɡjɒinkɒt/",
              "reading": "ITT HAHDY-haht-yook ah CHO-mahg-yah-in-kaht"
            }
          ],
          [
            "可以拍照嗎？",
            "Szabad itt fényképezni?",
            "",
            {
              "ipa": "/ˈsɒbɒd itː ˈfeːɲkeːpɛzni/",
              "reading": "SAH-bahd ITT FAYNY-kay-pez-nee"
            }
          ],
          [
            "請問廁所在哪裡？",
            "Hol van a mosdó?",
            "",
            {
              "ipa": "/hol vɒn ɒ ˈmoʒdoː/",
              "reading": "HOL vahn ah MOZH-doh"
            }
          ],
          [
            "請給我們帳單。",
            "A számlát kérem!",
            "",
            {
              "ipa": "/ɒ ˈsaːmlaːt ˈkeːrɛm/",
              "reading": "ah SAAM-laat KAY-rem"
            }
          ],
          [
            "帳單有包含服務費嗎？",
            "A számla tartalmazza a szervizdíjat?",
            "",
            {
              "ipa": "/ɒ ˈsaːmlɒ ˈtɒrtɒlmɒzːɒ ɒ ˈsɛrvizdiːjɒt/",
              "reading": "ah SAAM-lah TAHR-tahl-mahz-zah ah SEHR-veez-dee-yaht"
            }
          ],
          [
            "請找零，謝謝。",
            "Kérem a visszajárót, köszönöm.",
            "",
            {
              "ipa": "/ˈkeːrɛm ɒ ˈvisːɒjaːroːt ˈkøsønøm/",
              "reading": "KAY-rem ah VEES-sah-yaa-roht KEU-seu-neum"
            }
          ]
        ],
        "languageSources": [
          {
            "name": "HungarianPod101 · 旅遊基本句型",
            "url": "https://www.hungarianpod101.com/hungarianpod101-survival-phrases-curriculum/"
          }
        ],
        "pronunciationHints": [
          "重音通常在每個詞的第一音節；á、é、í、ó、ú、ő、ű 是長母音，不代表把重音移到那裡。",
          "s 讀 sh，sz 讀 s，cs 讀 ch；gy、ny 為軟音。ö／ő 與 ü／ű 請配合圓唇提示；r 是舌尖音。"
        ],
        "pronunciationSources": [
          {
            "name": "JIPA · 匈牙利語音系參考（Szende）",
            "url": "https://www.cambridge.org/core/journals/journal-of-the-international-phonetic-association/article/hungarian/DF52EB096930FFBB3103006F0A618AD6"
          }
        ]
      },
      {
        "code": "SK",
        "name": "斯洛伐克",
        "language": "斯洛伐克語",
        "lang": "sk",
        "currency": "EUR · 歐元",
        "intro": "Slovakia 是斯洛伐克，與 Slovenia 斯洛維尼亞是不同國家。Košice 與 Štrbské Pleso 的店家可先用 Dobrý deň 問候。",
        "phrases": [
          [
            "你好／日安",
            "Dobrý deň.",
            "初次見面、進店",
            {
              "ipa": "/ˈdɔbriː ɟɛɲ/",
              "reading": "DOH-bree DYEHNY"
            }
          ],
          [
            "晚上好",
            "Dobrý večer.",
            "晚間見面",
            {
              "ipa": "/ˈdɔbriː ˈvɛtʃɛr/",
              "reading": "DOH-bree VEH-chehr"
            }
          ],
          [
            "謝謝",
            "Ďakujem.",
            "接受協助、用餐後",
            {
              "ipa": "/ˈɟakujɛm/",
              "reading": "DYAH-koo-yem"
            }
          ],
          [
            "請／麻煩您",
            "Prosím.",
            "禮貌請求",
            {
              "ipa": "/ˈprɔsiːm/",
              "reading": "PROH-seem"
            }
          ],
          [
            "不好意思",
            "Prepáčte.",
            "借過、引起注意",
            {
              "ipa": "/ˈprɛpaːtʃcɛ/",
              "reading": "PREH-paach-tyeh"
            }
          ],
          [
            "再見",
            "Dovidenia.",
            "離開店家",
            {
              "ipa": "/ˈdɔviɟɛɲi̯a/",
              "reading": "DOH-vee-dyeh-nyah"
            }
          ]
        ],
        "quick": [
          "與陌生人先用 Dobrý deň；正式服務情境使用禮貌語氣。",
          "小費非強制，滿意桌邊服務時可湊整或約 5–10%。"
        ],
        "etiquette": [
          "官方介紹正式關係常用敬語；Ahoj 較適合熟人或輕鬆場合。",
          "若被邀進私人住家，先問是否脫鞋；店家與飯店公共區域依現場規定。"
        ],
        "avoid": [
          "山區店家付款方式先問，身上留少量歐元；某篇遊記遇到只收現金，不代表整個國家都只收現金。",
          "不要把 Slovakia 說成 Slovenia；提到現在的國家時使用 Slovakia。",
          "Košice 中途停車仍帶走護照、相機與貴重物品；別把有管理或室內停車場視為不會失竊。"
        ],
        "sources": [
          {
            "name": "Slovakia Travel｜習俗、小費與停車提醒",
            "url": "https://slovakia.travel/en/practical-information"
          },
          {
            "name": "Visit Bratislava｜斯洛伐克語短句",
            "url": "https://www.visitbratislava.com/informations/phrasebook/"
          }
        ],
        "situations": [
          [
            "能用英文嗎？",
            "Hovoríte po anglicky?",
            "",
            {
              "ipa": "/ˈɦɔvɔriːcɛ pɔ ˈaŋɡlitski/",
              "reading": "HOH-voh-ree-tyeh poh AHNG-glits-kee"
            }
          ],
          [
            "我們有三位。",
            "Sme traja.",
            "",
            {
              "ipa": "/smɛ ˈtraja/",
              "reading": "SMEH TRAH-yah"
            }
          ],
          [
            "我今天有訂房。",
            "Mám rezerváciu izby na dnes.",
            "",
            {
              "ipa": "/maːm ˈrɛzɛrvaːtsi̯u ˈizbi ˈna dɲɛs/",
              "reading": "MAAM REH-zehr-vaa-tsyoo IZ-bee NAH DNYEHS"
            }
          ],
          [
            "我們訂了兩間房。",
            "Máme rezervované dve izby.",
            "",
            {
              "ipa": "/ˈmaːmɛ ˈrɛzɛrvɔvanɛː dvɛ ˈizbi/",
              "reading": "MAA-meh REH-zehr-voh-vah-neh DVEH IZ-bee"
            }
          ],
          [
            "請問停車場在哪裡？",
            "Kde je parkovisko?",
            "",
            {
              "ipa": "/ɡɟɛ jɛ ˈparkɔviskɔ/",
              "reading": "GDYEH YEH PAHR-koh-vis-koh"
            }
          ],
          [
            "請問怎麼繳停車費？",
            "Ako môžem zaplatiť za parkovanie?",
            "",
            {
              "ipa": "/ˈakɔ ˈmu̯ɔʒɛm ˈzaplacic za ˈparkɔvaɲi̯ɛ/",
              "reading": "AH-koh MWOH-zhem ZAH-plah-tyi-ty ZAH PAHR-koh-vah-nyeh"
            }
          ],
          [
            "可以寄放行李嗎？",
            "Môžeme si tu nechať batožinu?",
            "",
            {
              "ipa": "/ˈmu̯ɔʒɛmɛ si tu ˈɲɛxac ˈbatɔʒinu/",
              "reading": "MWOH-zheh-meh see too NYEH-kha-ty BAH-toh-zhi-noo"
            }
          ],
          [
            "可以拍照嗎？",
            "Môžem tu fotografovať?",
            "",
            {
              "ipa": "/ˈmu̯ɔʒɛm tu ˈfɔtɔɡrafɔvac/",
              "reading": "MWOH-zhem too FOH-toh-grah-foh-va-ty"
            }
          ],
          [
            "請問廁所在哪裡？",
            "Kde je toaleta?",
            "",
            {
              "ipa": "/ɡɟɛ jɛ ˈtɔalɛta/",
              "reading": "GDYEH YEH TOH-ah-leh-tah"
            }
          ],
          [
            "請給我們帳單。",
            "Účet, prosím.",
            "",
            {
              "ipa": "/ˈuːtʃɛt ˈprɔsiːm/",
              "reading": "OO-cheht PROH-seem"
            }
          ],
          [
            "帳單有包含服務費嗎？",
            "Je poplatok za obsluhu zahrnutý v účte?",
            "",
            {
              "ipa": "/jɛ ˈpɔplatɔk za ˈɔpsluɦu ˈzaɦr̩nutiː v ˈuːtʃcɛ/",
              "reading": "YEH POH-plah-tok ZAH OHPS-loo-hoo ZAH-hr-noo-tee v OOCH-tyeh"
            }
          ],
          [
            "請找零，謝謝。",
            "Prosím, vráťte mi zvyšok. Ďakujem.",
            "",
            {
              "ipa": "/ˈprɔsiːm ˈvraːccɛ mi ˈzviʃɔk ˈɟakujɛm/",
              "reading": "PROH-seem VRAA-tty-tyeh mee ZVIH-shok DYAH-koo-yem"
            }
          ]
        ],
        "languageSources": [
          {
            "name": "IH Bratislava · 旅遊斯洛伐克語",
            "url": "https://www.ihbratislava.sk/en/t/essential-slovak-phrases-for-your-holiday-in-slovakia-959"
          }
        ],
        "pronunciationHints": [
          "重音通常在詞的第一音節；帶母音的短介詞可與後面的詞一起讀。長母音 á、é、í、ó、ú、ý 要拉長。",
          "ď／ť／ň 是軟音；ch 讀 kh，ž 讀 zh。ô 近似連在一起的 uo，拼讀以 mwoh 等方式提示，不讀成兩個音節。r 可自己形成音節，例如 zahrnutý 中的 r。"
        ],
        "pronunciationSources": [
          {
            "name": "JIPA · 斯洛伐克語音系與重音（Hanulíková、Hamann）",
            "url": "https://www.cambridge.org/core/journals/journal-of-the-international-phonetic-association/article/slovak/8FAED24E8632229E4D95E7694BB96D72"
          }
        ]
      },
      {
        "code": "PL",
        "name": "波蘭",
        "language": "波蘭語",
        "lang": "pl",
        "currency": "PLN · 波蘭茲羅提",
        "intro": "Zakopane 與 Kraków 初次進店、餐廳或飯店，用 Dzień dobry 比隨意的 Cześć 更適合。",
        "phrases": [
          [
            "你好／日安",
            "Dzień dobry.",
            "初次見面、進店",
            {
              "ipa": "/dʑɛɲ ˈdɔbrɨ/",
              "reading": "JENY DOH-brih"
            }
          ],
          [
            "晚上好",
            "Dobry wieczór.",
            "晚間見面",
            {
              "ipa": "/ˈdɔbrɨ ˈvjɛtʂur/",
              "reading": "DOH-brih VYEH-choor"
            }
          ],
          [
            "謝謝",
            "Dziękuję.",
            "接受協助、用餐後",
            {
              "ipa": "/dʑɛŋˈkujɛ/",
              "reading": "jen-KOO-yeh"
            }
          ],
          [
            "請／麻煩您",
            "Proszę.",
            "請求，也可表示請拿／不客氣",
            {
              "ipa": "/ˈprɔʂɛ/",
              "reading": "PROH-sheh"
            }
          ],
          [
            "不好意思",
            "Przepraszam.",
            "借過、引起注意",
            {
              "ipa": "/pʂɛˈpraʂam/",
              "reading": "psheh-PRAH-shahm"
            }
          ],
          [
            "再見",
            "Do widzenia.",
            "離開店家",
            {
              "ipa": "/dɔ viˈd͡zɛɲa/",
              "reading": "doh vee-DZEH-nyah"
            }
          ]
        ],
        "quick": [
          "陌生人用 Dzień dobry；Cześć 較隨意。",
          "2/7 是週日，零售店是否開門逐店確認，先備妥飲水零食。"
        ],
        "etiquette": [
          "服務人員、年長陌生人先用正式問候；有需要再用英文短句。",
          "Jaszczurówka、Wawel Cathedral 與 St Mary’s 都可能有禮拜或分區參觀規則，先確認入口與拍照告示。"
        ],
        "avoid": [
          "波蘭多數週日有零售限制；有交易週日及業者／店型例外，不能把 Krupówki 餐廳開門推論為所有超市都開。",
          "進教堂保持安靜、衣著得體；避免在禮拜時走動拍特寫，拍攝規定按各場館公告。",
          "餐廳先看有無服務費；小費可依服務表現與意願決定，付現想找零就明確說明。"
        ],
        "sources": [
          {
            "name": "Exploring Polski｜母語教師的問候與禮貌短句",
            "url": "https://www.exploringpolski.com/post/70-common-phrases-in-polish"
          },
          {
            "name": "波蘭政府｜週日零售限制",
            "url": "https://www.gov.pl/web/family/trade-on-sundays"
          },
          {
            "name": "Wawel｜參觀規則（城堡，非主教座堂）",
            "url": "https://wawel.krakow.pl/en/regulations-for-the-ticket-sales-and-exhibition-tours-at-the-wawel-royal-castle"
          }
        ],
        "situations": [
          [
            "能用英文嗎？",
            "Czy mówi Pan/Pani po angielsku?",
            "Pan 對男性；Pani 對女性，出示時可指向適用的一個。",
            {
              "ipa": "/tʂɨ ˈmuvi pan (ˈpaɲi) pɔ aŋˈɡʲɛlsku/",
              "reading": "CHIH MOO-vee PAHN (PAH-nyee) poh ahng-GYEHL-skoo"
            }
          ],
          [
            "我們有三位。",
            "Są nas trzy osoby.",
            "",
            {
              "ipa": "/sɔ̃ nas tʂɨ ɔˈsɔbɨ/",
              "reading": "SOHN nahs CHIH oh-SOH-bih"
            }
          ],
          [
            "我今天有訂房。",
            "Mam rezerwację pokoju na dzisiaj.",
            "",
            {
              "ipa": "/mam rɛzɛrˈvat͡sjɛ pɔˈkɔju na ˈdʑiɕaj/",
              "reading": "MAHM reh-zehr-VAH-tsyeh poh-KOH-yoo nah JEE-shy"
            }
          ],
          [
            "我們訂了兩間房。",
            "Mamy zarezerwowane dwa pokoje.",
            "",
            {
              "ipa": "/ˈmamɨ zarɛzɛrvɔˈvanɛ dva pɔˈkɔjɛ/",
              "reading": "MAH-mih zah-reh-zehr-voh-VAH-neh DVAH poh-KOH-yeh"
            }
          ],
          [
            "請問停車場在哪裡？",
            "Gdzie jest parking?",
            "",
            {
              "ipa": "/ɡdʑɛ jɛst ˈparkiŋk/",
              "reading": "GJEH YEHST PAHR-kink"
            }
          ],
          [
            "請問怎麼繳停車費？",
            "Jak mogę zapłacić za parking?",
            "",
            {
              "ipa": "/jak ˈmɔɡɛ zaˈpwat͡ɕit͡ɕ za ˈparkiŋk/",
              "reading": "YAHK MOH-geh zah-PWAH-chyich ZAH PAHR-kink"
            }
          ],
          [
            "可以寄放行李嗎？",
            "Czy możemy zostawić tutaj bagaż?",
            "",
            {
              "ipa": "/tʂɨ mɔˈʐɛmɨ zɔˈstavit͡ɕ ˈtutaj ˈbaɡaʂ/",
              "reading": "CHIH moh-ZHEH-mih zoh-STAH-vich TOO-tie BAH-gahsh"
            }
          ],
          [
            "可以拍照嗎？",
            "Czy mogę tu robić zdjęcia?",
            "",
            {
              "ipa": "/tʂɨ ˈmɔɡɛ tu ˈrɔbit͡ɕ ˈzdjɛɲt͡ɕa/",
              "reading": "CHIH MOH-geh TOO ROH-bich ZDYEHNY-chyah"
            }
          ],
          [
            "請問廁所在哪裡？",
            "Gdzie jest toaleta?",
            "",
            {
              "ipa": "/ɡdʑɛ jɛst tɔaˈlɛta/",
              "reading": "GJEH YEHST toh-ah-LEH-tah"
            }
          ],
          [
            "請給我們帳單。",
            "Poproszę rachunek.",
            "",
            {
              "ipa": "/pɔˈprɔʂɛ raˈxunɛk/",
              "reading": "poh-PROH-sheh rah-KHOO-nek"
            }
          ],
          [
            "帳單有包含服務費嗎？",
            "Czy opłata za obsługę jest wliczona w rachunek?",
            "",
            {
              "ipa": "/tʂɨ ɔˈpwata za ɔpˈswuɡɛ jɛst vliˈtʂɔna v raˈxunɛk/",
              "reading": "CHIH oh-PWAH-tah ZAH ohp-SWOO-geh YEHST vlee-CHOH-nah v rah-KHOO-nek"
            }
          ],
          [
            "請找零，謝謝。",
            "Poproszę resztę, dziękuję.",
            "",
            {
              "ipa": "/pɔˈprɔʂɛ ˈrɛʂtɛ dʑɛŋˈkujɛ/",
              "reading": "poh-PROH-sheh RESH-teh jen-KOO-yeh"
            }
          ]
        ],
        "languageSources": [
          {
            "name": "Exploring Polski · 常用波蘭語",
            "url": "https://www.exploringpolski.com/post/70-common-phrases-in-polish"
          }
        ],
        "pronunciationHints": [
          "重音通常落在倒數第二音節；字母 ł 近似英文 w，w 近似英文 v，j 近似英文 y。",
          "sz／cz 是較硬的 sh／ch；ś／ć／ź／dź 是舌頭更靠前的軟音，英文拼讀只作近似。y /ɨ/ 比英文 sit 的 i 更靠舌頭中央；ą 帶鼻音，不是完整的 n。",
          "句尾的 ę 常弱化鼻音或讀成 e；Pan 對男性，Pani 對女性，括號內為可替換的讀法。"
        ],
        "pronunciationSources": [
          {
            "name": "JIPA · 波蘭語音系參考（Jassem）",
            "url": "https://www.cambridge.org/core/journals/journal-of-the-international-phonetic-association/article/polish/8CDD2C699493A69A40A5E7D923629574"
          }
        ]
      },
      {
        "code": "AT",
        "name": "奧地利",
        "language": "德語",
        "lang": "de",
        "currency": "EUR · 歐元",
        "intro": "維也納常見 Grüß Gott，也可用通用的 Guten Tag。咖啡館、餐廳與飯店先問候，再提出需求。",
        "phrases": [
          [
            "你好／日安",
            "Grüß Gott! / Guten Tag!",
            "進店、飯店櫃檯",
            {
              "ipa": "/ɡʁyːs ɡɔt/ 或 /ˈɡuːtən taːk/",
              "reading": "GRUES GOT / GOO-tuhn TAAK"
            }
          ],
          [
            "晚上好",
            "Guten Abend!",
            "晚間見面",
            {
              "ipa": "/ˈɡuːtən ˈaːbənt/",
              "reading": "GOO-tuhn AA-buhnt"
            }
          ],
          [
            "謝謝",
            "Danke.",
            "接受協助、用餐後",
            {
              "ipa": "/ˈdaŋkə/",
              "reading": "DAHNG-kuh"
            }
          ],
          [
            "請／麻煩您",
            "Bitte.",
            "禮貌請求，也可表示不客氣",
            {
              "ipa": "/ˈbɪtə/",
              "reading": "BIH-tuh"
            }
          ],
          [
            "不好意思",
            "Entschuldigung.",
            "借過、引起注意",
            {
              "ipa": "/ɛntˈʃʊldɪɡʊŋ/",
              "reading": "ent-SHOOL-di-goong"
            }
          ],
          [
            "再見",
            "Auf Wiedersehen!",
            "離開店家",
            {
              "ipa": "/aʊ̯f ˈviːdɐzeːən/",
              "reading": "OWF VEE-duhr-zay-uhn"
            }
          ]
        ],
        "quick": [
          "小費常見約 5–10%，先確認帳單是否已含。",
          "2/14 週日返程，2/13 先準備早餐與途中零食。"
        ],
        "etiquette": [
          "Grüß Gott 是日常問候，可簡單回覆同一句；不用逐字翻譯成宗教對話。",
          "結帳想加小費時，付款前說清楚總額；例如帳單 €18，要付 €20，就說 Insgesamt zwanzig Euro, bitte. 想找零則直接提出。"
        ],
        "avoid": [
          "一般商店週日多休息，車站、機場或部分其他店型有例外；別把餐廳、博物館和超市視為同樣營業規則。",
          "熊布朗宮目前允許個人非商業拍攝；禁止閃光燈、腳架與自拍棒。大於約 A4 的包、背包等須依規則寄存，出發前再查。",
          "舊遊記的票價、可拍照區域與背包規則可能過時；進場時以官方及工作人員指示為準。"
        ],
        "sources": [
          {
            "name": "Vienna Tourist Board｜小費與付款",
            "url": "https://www.wien.info/en/travel-info/tourist-info/money-needs-352200?set_language=en"
          },
          {
            "name": "Vienna Tourist Board｜商店營業",
            "url": "https://www.wien.info/en/travel-info/frequently-asked-questions-346338"
          },
          {
            "name": "奧地利天主教會｜Grüß Gott 問候文化",
            "url": "https://www.katholisch.at/englisch/welcome"
          },
          {
            "name": "熊布朗宮｜現行拍攝與包袋規則",
            "url": "https://www.schoenbrunn.at/en/preserving-world-cultural-heritage-for-posterity"
          }
        ],
        "situations": [
          [
            "能用英文嗎？",
            "Sprechen Sie Englisch?",
            "",
            {
              "ipa": "/ˈʃpʁɛçən ziː ˈɛŋlɪʃ/",
              "reading": "SHPREH-hyuhn ZEE ENG-lish"
            }
          ],
          [
            "我們有三位。",
            "Wir sind zu dritt.",
            "",
            {
              "ipa": "/viːɐ̯ zɪnt tsuː dʁɪt/",
              "reading": "VEER ZINT TSOO DRIT"
            }
          ],
          [
            "我今天有訂房。",
            "Ich habe für heute eine Zimmerreservierung.",
            "",
            {
              "ipa": "/ɪç ˈhaːbə fyːɐ̯ ˈhɔʏ̯tə ˈaɪ̯nə ˈtsɪmɐʁezɛʁˌviːʁʊŋ/",
              "reading": "IHY HAA-buh FUER HOY-tuh EYE-nuh TSIM-uhr-reh-zehr-vee-roong"
            }
          ],
          [
            "我們訂了兩間房。",
            "Wir haben zwei Zimmer gebucht.",
            "",
            {
              "ipa": "/viːɐ̯ ˈhaːbən tsvaɪ̯ ˈtsɪmɐ ɡəˈbuːxt/",
              "reading": "VEER HAA-buhn TSVYE TSIM-uhr guh-BOOKHT"
            }
          ],
          [
            "請問停車場在哪裡？",
            "Wo ist der Parkplatz?",
            "",
            {
              "ipa": "/voː ɪst deːɐ̯ ˈpaʁkplats/",
              "reading": "VOH IST DAIR PAHRK-plahts"
            }
          ],
          [
            "請問怎麼繳停車費？",
            "Wie kann ich die Parkgebühr bezahlen?",
            "",
            {
              "ipa": "/viː kan ɪç diː ˈpaʁkɡəˌbyːɐ̯ bəˈtsaːlən/",
              "reading": "VEE KAHN IHY DEE PAHRK-guh-buer buh-TSAH-luhn"
            }
          ],
          [
            "可以寄放行李嗎？",
            "Können wir unser Gepäck hier aufbewahren lassen?",
            "",
            {
              "ipa": "/ˈkœnən viːɐ̯ ˈʊnzɐ ɡəˈpɛk hiːɐ̯ aʊ̯fbəˈvaːʁən ˈlasən/",
              "reading": "KEU-nuhn VEER OON-zuhr guh-PEHK HEER owf-buh-VAA-ruhn LAH-suhn"
            }
          ],
          [
            "可以拍照嗎？",
            "Darf ich hier fotografieren?",
            "",
            {
              "ipa": "/daʁf ɪç hiːɐ̯ fotoɡʁaˈfiːʁən/",
              "reading": "DAHRF IHY HEER foh-toh-grah-FEE-ruhn"
            }
          ],
          [
            "請問廁所在哪裡？",
            "Wo ist die Toilette?",
            "",
            {
              "ipa": "/voː ɪst diː to̯aˈlɛtə/",
              "reading": "VOH IST DEE toh-ah-LEH-tuh"
            }
          ],
          [
            "請給我們帳單。",
            "Die Rechnung, bitte.",
            "",
            {
              "ipa": "/diː ˈʁɛçnʊŋ ˈbɪtə/",
              "reading": "DEE REH-hy-noong BIH-tuh"
            }
          ],
          [
            "帳單有包含服務費嗎？",
            "Ist die Servicegebühr in der Rechnung enthalten?",
            "",
            {
              "ipa": "/ɪst diː ˈsœːɐ̯vɪsɡəˌbyːɐ̯ ɪn deːɐ̯ ˈʁɛçnʊŋ ɛntˈhaltən/",
              "reading": "IST DEE SEUR-vis-guh-buer IN DAIR REH-hy-noong ent-HAHL-tuhn"
            }
          ],
          [
            "請找零，謝謝。",
            "Ich hätte gern mein Wechselgeld, bitte.",
            "",
            {
              "ipa": "/ɪç ˈhɛtə ɡɛʁn maɪ̯n ˈvɛksəlɡɛlt ˈbɪtə/",
              "reading": "IHY HEH-tuh GEHRN MYNE VEK-suhl-gelt BIH-tuh"
            }
          ]
        ],
        "languageSources": [
          {
            "name": "GermanPod101 · 旅遊德語基本句型",
            "url": "https://www.germanpod101.com/blog/2019/11/21/german-travel-phrases/"
          }
        ],
        "pronunciationHints": [
          "使用標準德語作為參考；奧地利當地的 r、母音與語調可能不同。",
          "w 讀 v，z 讀 ts，sch 讀 sh；ich 的 ch 用 hy 提示，gebucht 的 ch 用 kh 提示。ö／ü 不直接讀英文 o／u；eu／äu 近似 OY。"
        ],
        "pronunciationSources": [
          {
            "name": "Goethe-Institut · 德語發音練習",
            "url": "https://www.goethe.de/prj/dlp/en/teachingmaterials/series/elementary_german_activities_and_exercises/pronunciation_training"
          },
          {
            "name": "Duden · Service 發音",
            "url": "https://www.duden.de/rechtschreibung/Service_Dienstleistung"
          }
        ]
      }
    ],
    "blogs": [
      {
        "id": "danube-emma",
        "country": "HU",
        "language": "中文",
        "title": "多瑙河夜遊：等船時間與旅行疲勞",
        "author": "Emma Tsai · Emma 的意識界。",
        "url": "https://vocus.cc/article/66912c67fd89780001704a02",
        "articleDate": "發表 2024-07-12；更新 2025-06-23",
        "travelDate": "夏季高溫旅行；實際年份未明寫",
        "disclosure": "中文親身圖文紀錄；本文未見業配／招待揭露或聯盟導購。",
        "dates": [
          "2/4",
          "2/5"
        ],
        "placeKeys": [
          "DanubeCruise",
          "ChainBridge"
        ],
        "takeaway": "作者記錄等船加遊河花了兩個多小時，遊船後因疲累直接回住處。可參考夜景照片及活動前後的體力緩衝。",
        "difference": "作者遇夏季高溫與生病；你在二月，需要防風保暖。等船經驗不是船公司固定報到規則，也不代表航程長度。"
      },
      {
        "id": "danube-shine",
        "country": "HU",
        "language": "中文",
        "title": "從船上拍國會大廈與多瑙河橋樑",
        "author": "shine girl · shine 的幽美幻境",
        "url": "https://blog.udn.com/shine016/180696974",
        "articleDate": "發表 2024-08-22",
        "travelDate": "2024 年 3 月奧匈跟團行程；本篇為白天遊船",
        "disclosure": "中文旅客跟團圖文紀錄；本文未見業配／招待揭露或票券導購。",
        "dates": [
          "2/5"
        ],
        "placeKeys": [
          "DanubeCruise",
          "Parliament",
          "ChainBridge"
        ],
        "takeaway": "大量船上實拍，可對照國會正面、城堡山與橋體構圖；作者也寫出逆光拍攝的困擾。",
        "difference": "白天跟團，登船地點與你規劃的 Legenda Dock 7 不同；只參考構圖，不套用碼頭、光線或航線。"
      },
      {
        "id": "budapest-peggy",
        "country": "HU",
        "language": "中文",
        "title": "布達佩斯晝夜散步、遊船與漁人堡實拍",
        "author": "珮姬 Peggy Liu",
        "url": "https://vocus.cc/article/69ae43a6fd897800016a4c55",
        "articleDate": "發表 2026-03-09",
        "travelDate": "雪季中歐旅行；文中未明寫旅行日期",
        "disclosure": "中文親身圖文紀錄；提到透過 Klook 購票，本文未見聯盟票券連結或業配揭露。",
        "dates": [
          "2/4",
          "2/5",
          "2/11"
        ],
        "placeKeys": [
          "DanubeCruise",
          "Fisherman's Bastion",
          "Parliament",
          "ChainBridge"
        ],
        "takeaway": "記錄一小時日落遊船、漁人堡不同光線與行李櫃實測；可參考河上和高處看國會的視角差別。",
        "difference": "你排約 19:00 夜遊，與作者日落時段不同；船公司尚待購票確認。行李櫃是否容納你的箱子要按實際尺寸核對。"
      },
      {
        "id": "szentendre-shine",
        "country": "HU",
        "language": "中文",
        "title": "Szentendre 老城巷弄、廣場與高處屋瓦",
        "author": "shine girl · shine 的幽美幻境",
        "url": "https://blog.udn.com/shine016/180571207",
        "articleDate": "發表 2024-06-06",
        "travelDate": "2024-03-22；奧匈跟團紀錄",
        "disclosure": "中文旅客跟團圖文紀錄；本文未見業配／招待揭露或票券導購。",
        "dates": [
          "2/5"
        ],
        "placeKeys": [
          "Szentendre"
        ],
        "takeaway": "照片涵蓋 Fő tér、彩色巷弄、店面招牌與高處屋瓦；可先認識老城街景，再按現場光線取景。",
        "difference": "作者一天走多瑙河灣三小鎮，你只到 Szentendre 再回布達城堡區；不增加 Visegrád 或 Esztergom，也不沿用跟團車程。"
      },
      {
        "id": "strbske-ice2005",
        "country": "SK",
        "language": "中文",
        "title": "Štrbské Pleso 湖畔、雪峰與 Poprad 小火車",
        "author": "花鼠妹 · 花鼠妹的異想世界",
        "url": "https://blog.udn.com/ice2005/189172427",
        "articleDate": "發表 2026-06-27",
        "travelDate": "2025 年 5 月（文中明寫五月湖景）",
        "disclosure": "中文親身圖文紀錄；本文未見業配／招待揭露或聯盟導購。",
        "dates": [
          "2/6"
        ],
        "placeKeys": [
          "Strbske"
        ],
        "takeaway": "親拍湖畔、飯店與雪峰，記錄環湖及從 Poprad 搭 TEŽ 小火車的經驗；適合看湖岸構圖和地形。",
        "difference": "五月未結冰湖景，你是二月自駕且傍晚抵達；不因此增加環湖或鐵路行程，不把作者票價與步行經驗套用到冰雪路面。"
      },
      {
        "id": "gubalowka-ice2005",
        "country": "PL",
        "language": "中文",
        "title": "Gubałówka 俯拍城鎮與塔特拉山；纜車停駛經驗",
        "author": "花鼠妹 · 花鼠妹的異想世界",
        "url": "https://blog.udn.com/ice2005/191346917",
        "articleDate": "發表 2026-08-01",
        "travelDate": "2025 年旅行；照片有綠地和野花，非二月冬景",
        "disclosure": "中文親身圖文紀錄；本文未見業配／招待揭露或聯盟導購。",
        "dates": [
          "2/7",
          "2/8"
        ],
        "placeKeys": [
          "Gubalowka",
          "Kasprowy"
        ],
        "takeaway": "多張 Gubałówka 屋頂與遠山實拍，可辨認城鎮與山脈的相對位置。作者原定 Kasprowy 纜車停駛，記錄改變活動的經驗。",
        "difference": "你只住兩晚，Gubałówka 排下午；不增加作者的海洋之眼或山區健行替代線，也不以綠地照片預測二月雪況。"
      },
      {
        "id": "zakopane-jessie",
        "country": "PL",
        "language": "中文",
        "title": "Zakopane 一月自駕、雪鏈尺寸與冬季花費",
        "author": "Jessieeeeee · Jessie 英國散散步",
        "url": "https://vocus.cc/article/67bcb4acfd89780001c0cf7e",
        "articleDate": "發表 2025-03-06",
        "travelDate": "2025-01-14–15",
        "disclosure": "中文親身圖文紀錄；本文未見業配／招待揭露或聯盟導購。",
        "dates": [
          "2/6",
          "2/7",
          "2/8",
          "2/9"
        ],
        "placeKeys": [
          "Gubalowka",
          "Krupowki",
          "Kasprowy",
          "Snowmobile"
        ],
        "takeaway": "冬季自駕親身經驗：租車櫃檯給錯雪鏈尺寸、兩個雪場的差異，以及裝備和餐食實付費用。可提醒取車時核對裝備。",
        "difference": "作者滑雪，你安排纜車觀景與雪地摩托車；不新增滑雪場、不把滑雪雪票當 Kasprowy 觀景票，也不沿用其租車公司的低價與車程。"
      },
      {
        "id": "kasprowy-wenfong",
        "country": "PL",
        "language": "中文",
        "title": "Kasprowy 纜車搭乘流程、回程限制與 Kuźnice 午餐",
        "author": "小蚌蚌嬉遊記",
        "url": "https://wenfong921.pixnet.net/blog/posts/1034238291",
        "articleDate": "發表 2025-08-21",
        "travelDate": "2025 年 7 月（日曜日現場購票）",
        "disclosure": "中文親身圖文紀錄；本文未見業配／招待揭露或聯盟導購。",
        "dates": [
          "2/7",
          "2/8"
        ],
        "placeKeys": [
          "Kasprowy",
          "Krupowki"
        ],
        "takeaway": "圖文記錄 Kuźnice 公車、纜車兩段轉乘、票面回程限制與下山用餐。可先看現場標示及轉乘樣貌。",
        "difference": "夏季現場購票，冬季人潮、路況與規則可能不同；你保留上午預約票。作者住宿、午休及票價是當次經驗，不替換你的酒店或時段。"
      },
      {
        "id": "kasprowy-ahpu",
        "country": "PL",
        "language": "中文",
        "title": "Kasprowy 四月雪山實拍：強風與回程時間",
        "author": "阿噗",
        "url": "https://vocus.cc/article/662939b7fd8978000194fb1e",
        "articleDate": "發表 2024-04-25；更新 2024-05-15",
        "travelDate": "2024-04-09",
        "disclosure": "中文親身圖文紀錄；本文未見業配／招待揭露或聯盟導購。",
        "dates": [
          "2/8"
        ],
        "placeKeys": [
          "Kasprowy"
        ],
        "takeaway": "作者記錄到 Kuźnice 的小巴、兩段纜車及票面時間限制；山上仍有積雪和強風，因缺少雪地經驗放棄走上更高處。",
        "difference": "四月平日排隊較少，不能推定二月也不用預約。你限開放觀景區；不加入文中的 Kalatówki 草原或雪山步行路線。"
      },
      {
        "id": "krakow-ahpu",
        "country": "PL",
        "language": "中文",
        "title": "Kraków 傍晚抵達、Wawel 外觀與老城人潮",
        "author": "阿噗",
        "url": "https://vocus.cc/article/663a2e31fd897800013a6697",
        "articleDate": "發表 2024-05-07；更新 2024-05-13",
        "travelDate": "2024-04-07（星期日）",
        "disclosure": "中文親身圖文紀錄；本文未見業配／招待揭露或聯盟導購。",
        "dates": [
          "2/9"
        ],
        "placeKeys": [
          "Wawel",
          "MainMarket",
          "Kanonicza"
        ],
        "takeaway": "作者傍晚抵達後遇到老城人潮，改先到 Wawel 看外觀；可參考移動日如何保留景點順序彈性與傍晚構圖。",
        "difference": "你從 Zakopane 自駕、星期二到訪，季節與人潮不同；不套用其 FlixBus 路線或個別手機無訊號經驗。"
      },
      {
        "id": "krakow-yolo-winter",
        "country": "PL",
        "language": "中文",
        "title": "Kraków 二月自由行：Wawel 參觀與步行疲勞",
        "author": "新陳帶謝",
        "url": "https://vocus.cc/article/65f185d8fd8978000135c744",
        "articleDate": "發表 2024-03-13；更新 2025-03-12",
        "travelDate": "2024-02-03–18 波蘭旅程；Kraków 段確切日期未明寫",
        "disclosure": "中文親身圖文紀錄；本文未見業配／招待揭露或聯盟導購。",
        "dates": [
          "2/9"
        ],
        "placeKeys": [
          "Wawel",
          "MainMarket",
          "Kanonicza"
        ],
        "takeaway": "二月親身遊記，含 Wawel 外觀、當時展覽套票與大量步行後的膝蓋疲勞；可用來估計室內外切換及體力需求。",
        "difference": "作者走多日波蘭行程，你只有一個下午和晚上；不新增鹽礦或集中營，舊套票與廁所條碼規則回官方確認。"
      },
      {
        "id": "vienna-gary-winter",
        "country": "AT",
        "language": "中文",
        "title": "維也納雪天：熊布朗宮步行、寄物與室內參觀",
        "author": "葛瑞葡 · 有去有回",
        "url": "https://vocus.cc/article/64e063dbfd8978000123e760",
        "articleDate": "發表 2023-08-20；更新 2024-06-25",
        "travelDate": "2023 年冬季（文中記錄農曆除夕雪天）",
        "disclosure": "中文親身圖文紀錄；本文未見業配／招待揭露或聯盟導購。",
        "dates": [
          "2/12",
          "2/13"
        ],
        "placeKeys": [
          "Schonbrunn"
        ],
        "takeaway": "作者記錄雪融泥水與結冰地面、從入口走到宮殿的距離、背包外套寄放及約一小時室內參觀。可參考冬季步行與暖身安排。",
        "difference": "作者的舊套票和當時室內禁拍描述不當作現行規則；你一天看多座宮殿，需限制庭園步行，不追加納許市場。",
        "officialCheck": {
          "name": "核對熊布朗宮官方票券",
          "url": "https://www.schoenbrunn.at/en/tickets-and-prices/all-tickets-tours"
        }
      },
      {
        "id": "vienna-brenda",
        "country": "AT",
        "language": "中文",
        "title": "美景宮上宮、格拉本大街與咖啡館排隊實錄",
        "author": "布蘭達的腰子 · 旅行遊記",
        "url": "https://brenda1987.pixnet.net/blog/posts/10357887196",
        "articleDate": "發表 2024-11-16",
        "travelDate": "2024-04-23",
        "disclosure": "中文親身圖文紀錄；本文未見業配／招待揭露或聯盟導購。",
        "dates": [
          "2/12",
          "2/13"
        ],
        "placeKeys": [
          "Belvedere",
          "Graben",
          "Stephansdom",
          "Hofburg"
        ],
        "takeaway": "作者只買美景宮上宮票看《吻》，之後走市中心、記錄咖啡館未訂位的等待；適合比對展館選擇、街拍視角與用餐緩衝。",
        "difference": "四月旅程與二月日照不同，文中票價不是 2027 價格；咖啡館只作休息線索，不增加固定必到餐廳。"
      },
      {
        "id": "tatras-lakes",
        "country": "SK",
        "title": "湖畔構圖、Poprad 補給與 Košice 街景",
        "author": "What You Know Travel",
        "url": "https://whatyouknowtravel.com/view_post.php?id=10",
        "articleDate": "發表 2025-09-23",
        "travelDate": "2023 年；有划船／夏季健行，非冬季",
        "disclosure": "個人鐵路旅行紀錄",
        "dates": [
          "2/6",
          "2/7"
        ],
        "placeKeys": [
          "Strbske"
        ],
        "takeaway": "湖畔照片可參考構圖；作者在 Poprad 採買，也記錄 Košice 市中心建築。只把這些作為停靠與補給線索。",
        "difference": "你是二月自駕：划船、游泳、健行時間與夏季山路均不直接適用；文中票價與班次也不是 2027 資料。",
        "language": "英文"
      },
      {
        "id": "vienna-winter",
        "country": "AT",
        "title": "維也納兩日冬遊：宮殿外觀與步行量",
        "author": "Jake Lee",
        "url": "https://jakelee.co.uk/vienna-reviews/",
        "articleDate": "發表 2024-01-02",
        "travelDate": "2023-12-20–22（文內事件與日期可核對）",
        "disclosure": "個人遊記及 Google Maps 評論",
        "dates": [
          "2/12",
          "2/13"
        ],
        "placeKeys": [
          "Schonbrunn",
          "Belvedere",
          "Hofburg"
        ],
        "takeaway": "作者遇雨；宮殿園區與咖啡館占用不少時間。可參考冬季空園構圖，安排室內休息並留意步行量。",
        "difference": "2023 遊記寫室內禁拍，但現行熊布朗宮官方允許個人非商業拍攝、禁閃光燈與腳架。作者的票價、入場及安全感受僅為當時經驗。",
        "officialCheck": {
          "name": "核對熊布朗宮現行規則",
          "url": "https://www.schoenbrunn.at/en/preserving-world-cultural-heritage-for-posterity"
        },
        "language": "英文"
      }
    ],
    "pronunciationGuide": {
      "note": "IPA 為分詞讀法的參考音標；ˈ 後為重音，ː 表示拉長。英文拼讀為近似提示，大寫表示重音，連字號分開音節；不必照英文字的原本發音讀。自然連讀及地方口音可能不同。",
      "key": [
        "ah 如 father 的 a；eh 如 bed 的 e；ee 如 see 的 ee；oo 如 food 的 oo；ih 如 sit 的 i；uh 如 about 開頭的弱讀音。",
        "sh 如 shop；zh 如 vision 中的 s；ch 如 chair；j 如 jam；y 如 yes；ny 接近 canyon 中的 ny。",
        "kh 是喉後摩擦音，近似 Scottish loch 的 ch；hy 是舌頭靠前的輕摩擦音，用於德語 ich 的 ch，不讀成 k。",
        "eu 表示 ö 類音：嘴唇圓起，舌頭維持 eh 的位置；ue 表示 ü 類音：嘴唇圓起，舌頭維持 ee 的位置。兩者都不是英文常見母音。",
        "ty、dy 是帶軟化的 t、d 提示，舌頭前部抬起；不要把 y 額外讀成一個音節。OW 如 now；EYE 如 eye；OY 如 boy。"
      ]
    },
    "blogsCheckedDate": "2026-10-09",
    "blogSelection": "優先中文、近年親身圖文；按本文可見內容篩選，排除明確業配、招待、聯盟票券導購與旅行社宣傳。文章日期與實際旅行日期分開標示，未寫明的年份不推定。"
  },
  outingAdvice: {
    "checkedDate": "2026-10-08",
    "note": "按二月冬季活動準備，並非每日天氣預報；出發前依氣溫、風、降水及個人怕冷程度調整。",
    "basicItems": [
      "手機、錢包與少量現金",
      "必要證件／票券",
      "行動電源與充電線",
      "水／保溫瓶、少量點心",
      "面紙、護唇膏、個人藥品",
      "使用的相機與備用電池",
      "帽子、手套、脖圍"
    ],
    "outfits": [
      {
        "name": "城市穿法",
        "text": "薄保暖內層＋可脫的刷毛／羊毛中層＋防風保暖外套；長褲、冬襪、防水且好走的鞋。帽子、手套、脖圍放包裡，傍晚與河岸再加強保暖。"
      },
      {
        "name": "雪山穿法",
        "text": "保暖排汗內層＋刷毛＋足夠厚的保暖層＋防水防風外層；保暖內搭褲、防水雪褲、保暖防水靴、帽子、脖圍、厚手套。依風雪與活動強度調整。"
      },
      {
        "name": "移動穿法",
        "text": "舒適內層＋拉鍊中層、彈性長褲；厚外套隨手可拿，進入暖氣車廂、機艙後方便脫下。"
      }
    ],
    "photography": [
      "全程攝影裝備為 X‑T50、X100VI、XF16‑55 II、Sigma 12mm F1.4 與 Sigma 50–120mm F2.8。機身含機內電池與記憶卡，合計約 1,994 g；相機包、背帶、備用電池與濾鏡另計。",
      "白天以 X‑T50＋XF16‑55 II 為主。城市拍完整建築立面時加帶 Sigma 12mm，上山拍遠峰與山景層次時加帶 Sigma 50–120mm。晚餐、咖啡館或散步可單帶 X100VI。",
      "備用電池放內層口袋保暖，避免裸露金屬接點接觸其他物品；低溫會降低可用容量。",
      "相機從冷處帶進暖室內前，先收妥於相機包或密封袋，逐漸回溫後再取出，減少結露。"
    ],
    "mountainNotes": [
      "Kasprowy 山頂可能比市區更冷、風更強；即使搭纜車上山，也要準備完整保暖與防風衣物。",
      "鞋底有紋路不代表冰面不滑。平緩結冰步道可依路況使用鞋用簡易冰爪，進室內前取下；它不取代陡峭雪山路線所需裝備與經驗。",
      "雪地摩托車需防風防水冬季服裝，脖圍優先於鬆垂長圍巾。選定業者後，確認雪衣、雪褲、靴子、手套、頭盔及護目鏡是否提供／需付費租借。",
      "騎雪地摩托車時，相機收進有保護的背包，停車休息再拍。"
    ],
    "sources": [
      {
        "name": "PKL｜Kasprowy 上山準備",
        "url": "https://www.pkl.pl/post/kasprowy-wierch/news-kasprowy/zanim-wyruszysz-na-kasprowy-faq-kopia.html?setlang=2"
      },
      {
        "name": "PKL｜冬季裝備與冰面",
        "url": "https://kasprowywierch.pkl.pl/koniec-sezonu-zimowego/"
      },
      {
        "name": "Snowdoo｜穿著與租借示例（實際依選定業者）",
        "url": "https://www.snowdoo.pl/faq/"
      },
      {
        "name": "Fujifilm｜低溫與電池",
        "url": "https://fujifilm-dsc.com/en-int/manual/x-t50/technical_notes/faq/"
      },
      {
        "name": "Fujifilm｜低溫拍攝與結露",
        "url": "https://digitalcamera-support-en.fujifilm.com/digitalcameraengpcdetail?aid=000008383"
      }
    ],
    "days": {
      "2/3": {
        "label": "移動／轉機",
        "clothing": [
          "舒適內層＋拉鍊中層、彈性長褲與好走的鞋。",
          "冬季厚外套帶上機，抵達歐洲前可直接取用。"
        ],
        "items": [
          "護照、票券與轉機資料",
          "耳塞／眼罩、充電用品",
          "換洗內衣襪放隨身包"
        ],
        "photo": "移動日以 X100VI 或手機隨手拍。",
        "notes": [
          "抵達日要穿的保暖衣物也放隨身行李，避免下機後才找大行李。"
        ]
      },
      "2/4": {
        "label": "城市／抵達日",
        "clothing": [
          "抵達後：薄保暖內層＋可脫刷毛／羊毛中層＋防風保暖外套，長褲、冬襪、防水步行鞋。",
          "河岸散步時加帽子、脖圍與手套；車內可脫外套。"
        ],
        "items": [
          "已購 ÖBB RJX 63 三人電子票：13:40 Wien Hbf → 16:29 Budapest-Keleti；保存完整票券、核對艙等／車廂／座號，機場段另行確認／購票",
          "抵達日衣物、充電用品",
          "水與少量點心"
        ],
        "photo": "抵達後若去河岸散步或吃晚餐，單帶 X100VI。",
        "notes": [
          "重要證件、衣物與充電用品放容易取用的位置。"
        ]
      },
      "2/5": {
        "label": "城市／長時間步行／晚間遊船",
        "clothing": [
          "薄保暖內層＋刷毛／羊毛中層＋防風保暖外套；長褲、冬襪、防水且能走整天的鞋。",
          "城堡區與傍晚拍攝時加帽子、脖圍、手套；怕冷可加內搭褲。",
          "遊船戶外甲板更需防風，帽子、脖圍和手套放隨手可取的位置。"
        ],
        "items": [
          "保溫瓶、點心、暖暖包",
          "相機備用電池",
          "有結冰路況時攜鞋用防滑裝備",
          "遊船電子票、集合碼頭資訊（購票後保存）"
        ],
        "photo": "X‑T50＋XF16‑55 II 為主。拍馬提亞斯教堂等建築完整立面時，可加帶 Sigma 12mm；晚間散步用 X100VI。",
        "notes": [
          "進室內脫外套或中層，步行時避免穿到流汗。",
          "購票時確認室內保暖與戶外區；船上拍照以手持為主，避免玻璃反光。"
        ]
      },
      "2/6": {
        "label": "自駕／抵達山區",
        "clothing": [
          "舒適內層＋拉鍊中層、彈性長褲，駕車用熟悉且不妨礙踩踏的鞋。",
          "厚外套、冬襪及雪地鞋方便取用，下車及抵達山區前加上。"
        ],
        "items": [
          "台灣駕照＋國際駕照、租車文件、信用卡",
          "手機車架／車充、道路與住宿資料",
          "水、點心、備用保暖衣物"
        ],
        "photo": "X‑T50＋XF16‑55 II 拍 Košice 老城與湖景；若要取 Štrbské Pleso 遠處雪峰，可加帶 Sigma 50–120mm。",
        "notes": [
          "當天要用的保暖衣物不要壓在行李箱最底層。"
        ]
      },
      "2/7": {
        "label": "雪地戶外／山上與黃昏",
        "clothing": [
          "保暖排汗內層＋刷毛＋防風保暖外套，視降雪加防水外層。",
          "長褲與保暖內搭褲、冬襪、防水保暖靴；帽子、脖圍、厚手套。"
        ],
        "items": [
          "墨鏡、保溫瓶、點心",
          "備用襪子、暖暖包、相機電池",
          "有結冰路況時攜鞋用簡易冰爪"
        ],
        "photo": "X‑T50＋XF16‑55 II 拍湖區、山城與全景，Sigma 50–120mm 留給 Gubałówka 的遠山和屋頂層次；晚餐或散步可單帶 X100VI。",
        "notes": [
          "車內可脫外套，Gubałówka 與黃昏街拍再加強保暖。"
        ]
      },
      "2/8": {
        "label": "雪山／雪地摩托車",
        "clothing": [
          "保暖排汗內層＋刷毛＋厚保暖層＋防水防風外層。",
          "保暖內搭褲＋防水雪褲、保暖防水靴、帽子、脖圍、防水厚手套；拍攝可配薄內手套。"
        ],
        "items": [
          "墨鏡／適用護目鏡、防曬、護唇膏",
          "熱飲、點心、暖暖包、備用手套襪子",
          "鞋用簡易冰爪（按冰面與路線使用）",
          "纜車及活動預約資料、集合聯絡資訊"
        ],
        "photo": "X‑T50＋XF16‑55 II 拍 Kasprowy 全景，Sigma 50–120mm 拍雪峰細節。騎雪地摩托車時相機收包，停車再拍。",
        "notes": [
          "確認業者提供或租借的雪衣、雪褲、靴子、手套、頭盔及護目鏡。",
          "簡易冰爪不取代陡峭雪山所需裝備與經驗；以當日開放觀景範圍為準。"
        ]
      },
      "2/9": {
        "label": "城市／室內與夜景",
        "clothing": [
          "薄保暖內層＋可脫中層＋防風保暖外套，長褲、冬襪、防水步行鞋。",
          "夜拍時加帽子、脖圍、手套；室內可脫外套。"
        ],
        "items": [
          "城堡 State Rooms 票券、聖母聖殿現場購票資料與飯店停車資訊",
          "保溫瓶、備用電池、暖暖包",
          "確定拍夜景才帶腳架"
        ],
        "photo": "X‑T50＋XF16‑55 II 為主；近距離拍城堡、教堂完整立面時加帶 Sigma 12mm。晚餐散步可單帶 X100VI。",
        "notes": [
          "入住或寄放行李後減少背包重量，方便老城步行。"
        ]
      },
      "2/10": {
        "label": "長途自駕／還車",
        "clothing": [
          "舒適內層＋拉鍊中層、彈性長褲與適合駕車的鞋。",
          "厚外套與手套隨手可拿，休息站下車時穿上。"
        ],
        "items": [
          "租車文件、還車門市資料、車充",
          "水、點心、加油收據",
          "還車後要隨身帶走的證件與物品"
        ],
        "photo": "移動日用 X100VI 或手機隨手拍；還車車況紀錄可用手機拍。",
        "notes": [
          "還車前檢查座椅下、門邊置物格、後廂及所有充電線。"
        ]
      },
      "2/11": {
        "label": "城市／河岸夜景",
        "clothing": [
          "薄保暖內層＋刷毛／羊毛中層＋防風保暖外套，長褲、冬襪、防水步行鞋。",
          "河岸長時間站著拍攝時加帽子、脖圍、厚手套；怕冷加內搭褲。"
        ],
        "items": [
          "保溫瓶、暖暖包、備用電池",
          "手套、帽子、脖圍",
          "確定長曝光夜拍才帶腳架"
        ],
        "photo": "X‑T50＋XF16‑55 II 拍河岸與建築全景。近距離拍完整立面可加帶 Sigma 12mm；若主拍對岸國會細節，選帶 Sigma 50–120mm。",
        "notes": [
          "步行與靜止拍照的保暖需求不同，等藍調時刻前先加衣。"
        ]
      },
      "2/12": {
        "label": "火車移動／晚間街拍",
        "clothing": [
          "舒適內層＋拉鍊中層、長褲與步行鞋，火車上方便脫穿。",
          "厚外套、帽子、手套與脖圍方便取用，抵達及晚間散步時穿上。"
        ],
        "items": [
          "火車票、座位與飯店資料",
          "水、點心、行動電源與充電線"
        ],
        "photo": "X‑T50＋XF16‑55 II 為主；近距離拍聖史蒂芬主教座堂完整立面時加帶 Sigma 12mm。晚餐散步可單帶 X100VI。",
        "notes": [
          "上車要用的物品先放小包，不必一路打開大行李。"
        ]
      },
      "2/13": {
        "label": "城市／宮殿室內外",
        "clothing": [
          "薄保暖內層＋容易脫穿的中層＋防風保暖外套；長褲、冬襪、步行鞋。",
          "戶外庭園與廣場加帽子、脖圍和手套；室內收妥外套。"
        ],
        "items": [
          "宮殿門票、輕便背包",
          "水、備用電池、帽子與手套"
        ],
        "photo": "X‑T50＋XF16‑55 II 為主；拍宮殿完整立面且站位受限時用 Sigma 12mm。遵守各參觀區拍攝規範。",
        "notes": [
          "依票券／展館規定確認背包與寄物安排。"
        ]
      },
      "2/14": {
        "label": "清晨機場／返程",
        "clothing": [
          "舒適內層＋拉鍊中層、彈性長褲。",
          "清晨出飯店穿厚外套，進機場與上機後方便脫下。"
        ],
        "items": [
          "護照、航班與接送聯絡資料",
          "耳塞／眼罩、充電用品",
          "換洗衣物放隨身包"
        ],
        "photo": "相機妥善收進隨身行李，以移動方便為主。",
        "notes": [
          "轉機與回台灣要穿的薄衣物放容易取用的位置。"
        ]
      },
      "2/15": {
        "label": "轉機／回台灣",
        "clothing": [
          "薄上衣＋輕中層、舒適長褲；按台灣當日天氣調整。",
          "厚冬季外套收起，機艙冷時可再取用。"
        ],
        "items": [
          "轉機及航班資料",
          "充電用品、換洗衣物"
        ],
        "photo": "相機收妥，返家後再整理與備份照片。",
        "notes": [
          "保持隨身行李整齊，登機前確認證件與充電用品。"
        ]
      }
    }
  },
  flights: [
    { date: "2/3", weekday: "三", flight: "TR867", route: "Taipei TPE → Singapore SIN", time: "16:40–21:15" },
    { date: "2/4", weekday: "四", flight: "TR60", route: "Singapore SIN → Vienna VIE", time: "02:45–08:30" },
    { date: "2/14", weekday: "日", flight: "TR61", route: "Vienna VIE → Singapore SIN", time: "10:00–04:40 (+1)" },
    { date: "2/15", weekday: "一", flight: "TR874", route: "Singapore SIN → Taipei TPE", time: "08:30–13:15" }
  ],
  hotels: [
    { date: "2/4–2/5", hotel: "InterContinental Budapest（布達佩斯洲際酒店）", city: "Budapest", map: "https://www.google.com/maps/search/?api=1&query=InterContinental+Budapest" },
    { date: "2/6", hotel: "Hotel Panorama（全景酒店）", city: "Štrbské Pleso", amenities: ["kitchen","washing-machine","breakfast"], map: "https://www.google.com/maps/search/?api=1&query=Hotel+Panorama+Strbske+Pleso" },
    { date: "2/7–2/8", hotel: "Aparthotel Cristina（克莉絲蒂娜公寓酒店）", city: "Zakopane", amenities: ["breakfast"], map: "https://www.google.com/maps/search/?api=1&query=Aparthotel+Cristina+Zakopane" },
    { date: "2/9", hotel: "Holiday Inn Krakow City Centre（克拉科夫市中心假日酒店）", city: "Kraków", map: "https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Krakow+City+Centre" },
    { date: "02/10-02/11", hotel: "Sleek premium Aprqtment with Park（附停車位的時尚高級公寓）", city: "Budapest", amenities: ["kitchen","washing-machine"], map: "https://www.google.com/maps/search/?api=1&query=Sleek+premium+Aprqtment+with+Park+Budapest" },
    { date: "2/12–2/13", hotel: "InterContinental Vienna（維也納洲際酒店）", city: "Vienna", map: "https://www.google.com/maps/search/?api=1&query=InterContinental+Vienna" }
  ],
  checklist: [
    { id: "passport", label: "護照／旅行文件", group: "出發前" },
    { id: "idp", label: "台灣國際駕照＋台灣駕照", group: "租車" },
    { id: "sixt", label: "SIXT 跨境許可：斯洛伐克＋波蘭", group: "租車" },
    { id: "winter-tires", label: "確認四輪冬季胎／預約適配雪鏈備用（尺寸、輪軸、安裝許可）", group: "租車" },
    { id: "krakow-sct", label: "Kraków 車輛進城許可｜SCT 外國車牌登錄與資格確認", group: "租車", date: "2/6 取車後儘早辦理；2/9 入城前確認", status: "待辦理", detail: "取車後取得實際車牌／登記國、車籍證明影本、品牌／型號、製造年份、燃料及 Euro 排放資料；先問 SIXT 是否已登錄，未完成則到官方系統申請並確認通行資格，保存確認畫面。外國車牌即使符合排放標準仍須登錄；尚未取得車牌，現在不能標記完成。SCT 資格不等於老城限制車道或飯店停車許可，另向 Holiday Inn 確認合法入口。依 2026/10/11 查核的官方規定整理，出發前再核對。", url: "https://sct.zdmk.krakow.pl/" },
    { id: "backup", label: "雲端備份護照／訂單／租車文件", group: "出發前" },
    { id: "budapest-day-pass", label: "Budapest 24h 市區票｜2/5、2/11 各三人", group: "車票／交通", date: "2/5、2/11 首次搭車前", status: "建議購買", detail: "各日每人一張；2/5 另買 H5 市界外來回。2/11 日票可否用到 2/12 去 Keleti，按到期時間核對；不是兩段住宿共用一張連續多日票。", url: "https://bkk.hu/en/tickets-and-passes/prices/24-hour-budapest-travelcard/" }
  ],
  // 共用預約待辦：網站所有訪客都會看到。確認訂妥後請更新 status；修改此區即可同步公開清單。
  reservations: [
    {
      "id": "vie-airport-link-ticket",
      "label": "VIE → Wien Hbf｜三人機場火車區間票",
      "group": "車票／交通預約",
      "date": "2/4 完成入境後",
      "status": "待確認／購買",
      "detail": "2/4 已購 RJX 63 從 Wien Hbf 起，不能推定含機場段。先核對完整票券；未含就另買 Flughafen Wien Bahnhof → Wien Hbf 的 Railjet／IC 車票。不是 CAT，也不由維也納市區票自動涵蓋。",
      "url": "https://www.oebb.at/en/regionale-angebote/ueberregionale-angebote/anreise-zum-flughafen"
    },
    {
      "id": "h5-szentendre-extra-ticket",
      "label": "H5 聖安德烈市界外來回｜與 Budapest 日票分開",
      "group": "車票／交通預約",
      "date": "2/5 出發前",
      "status": "待確認／購買",
      "detail": "2/5 的 Budapest 24h 只涵蓋到 Békásmegyer；超出市界必須另有有效票。可每人買去回區間票，或比較 H5 tour ticket：最多十人同車廂同行，僅涵蓋 Békásmegyer–Szentendre，仍要各自持市區票。先在車站售票機／售票處備齊來回，或由 MÁV 官方 App 購買適用產品；不必在 Békásmegyer 下車換車。",
      "url": "https://bkk.hu/en/tickets-and-passes/prices/suburban-railway-tour-ticket-h5-h8-h9-full-fare/"
    },
    {
      "id": "vienna-city-tickets",
      "label": "Vienna 市區交通票｜2/12 單程／2/13 24h",
      "group": "車票／交通預約",
      "date": "2/12–2/13 首次搭車前",
      "status": "待確認／購買",
      "detail": "2/13 出發去 Schönbrunn 前生效，涵蓋當日市區地鐵、電車與公車；如前一日票仍有效，先沿用並在到期前補足後續旅程。2026 起一般 48／72 小時 WIEN 票已停售；本次兩天市區停留通常比較單程＋24h／兩張24h，不預設買7 Tage WIEN。紙本需打票的版本在第一次搭車前打票；數位票核對起始時間及身分證明。市區票不含 VIE 外區或 CAT。",
      "url": "https://www.wienerlinien.at/24-stunden-wien"
    },
    {
      "id": "oebb-vienna-budapest-20270204",
      "label": "Wien Hbf → Budapest-Keleti｜ÖBB RJX 63 三人車票",
      "group": "車票／交通預約",
      "date": "2/4（四）13:40–16:29",
      "status": "已購票",
      "detail": "使用者票券截圖及更正確認：2027/2/4 13:40 Wien Hbf → 16:29 Budapest-Keleti，RJX 63，3 人，2h49（當地時間）。機場至 Wien Hbf 的票另行核對／購買；艙等、車廂及座位以完整票券為準，截圖未顯示。13:10 左右確認出發月台。抵達後搭可容納三件大行李的合規計程車到 InterContinental Budapest。",
      "url": "https://www.oebb.at/en/"
    },
    {
      "id": "flixbus-cancellation-20270204",
      "label": "確認原 VIE → Budapest FlixBus 取消／退款",
      "group": "車票／交通預約",
      "date": "2/4 舊巴士票｜改搭火車後處理",
      "status": "待確認退票",
      "detail": "原 11:40 Vienna Airport → 14:30 Budapest Népliget 三人車票曾已購；目前確認新購 RJX 63 火車票，未確認 FlixBus 已取消或退款。到原訂單核對退改條件、取消結果及退款／折抵狀態。舊票不再作為當日搭乘方案。",
      "url": "https://shop.flixbus.com/rebooking/login"
    },
    {
      "id": "danube-cruise-ticket",
      "label": "2/5 多瑙河夜景遊船｜三人船票",
      "group": "門票／活動預約",
      "date": "2/5（五）約 19:00（規劃時段）",
      "status": "待購票",
      "detail": "首選 Legenda Danube Legend 約一小時觀光船（非晚餐船）。待 2027 班表確認後購買三人船票；核對時間、Dock 7 或實際碼頭、室內保暖、戶外拍攝區、報到與退改規則。",
      "url": "https://legenda.hu/en/danube-legend"
    },
    {
      "id": "sixt-booking",
      "label": "SIXT Budapest 租車訂單｜已預訂",
      "group": "租車／道路通行",
      "date": "2/6（六）–2/10（三）",
      "status": "已預訂",
      "detail": "訂單截圖確認（當地時間）：2027/2/6 09:00 Budapest Chain Bridge 取車，Apáczai Csere János u. 12–14, Budapest, 1052；2027/2/10 19:30 Budapest Keleti Train Station 還車，Baross tér 7–8, Budapest, 1087。2/6 預計 10:00 出發。訂單已完成；跨境斯洛伐克／波蘭許可、冬季胎、雪鏈及保險另行核對，不能從此截圖推定已包含。",
      "url": "https://car-rental.sixt.com/php/terms/view?language=en_US&liso=HU&rtar=000&style=&tlang=en_US&view=EPP"
    },
    {
      "id": "kasprowy-ticket",
      "label": "Kasprowy Wierch 纜車來回票／上山時段",
      "group": "門票／活動預約",
      "date": "2/8（一）上午",
      "status": "待購票",
      "detail": "選接近 10:00 的上山時段；確認票種、下山安排與風雪停駛退改規則。",
      "url": "https://www.sklep.pkl.pl/en/"
    },
    {
      "id": "snowmobile-booking",
      "label": "Zakopane／Kościelisko 雪地摩托車體驗",
      "group": "門票／活動預約",
      "date": "2/8（一）14:30",
      "status": "待預約",
      "detail": "尚未指定業者；先確認集合地址、接送、報到時間、三人名額、裝備、雪況不足時的取消／改期規則。",
      "url": "https://www.google.com/maps/search/?api=1&query=snowmobile+Koscielisko+Zakopane"
    },
    {
      "id": "wawel-tickets",
      "label": "瓦維爾城堡｜Castle Second Floor／State Rooms 指定時段票",
      "group": "門票／活動預約",
      "date": "2/9（二）13:45 左右（預計）",
      "status": "待購票",
      "detail": "只選 State Rooms 所屬的 Castle | Second Floor 一個展區，不加皇家私人寓所／寶庫／軍械庫。13:45–15:00 為行程預留，實際報到及入場依所購時段；尚未購票。官方通常約一個月前開售，2027 開放內容與時段屆時確認。",
      "url": "https://bilety.wawel.krakow.pl/wawel"
    },
    {
      "id": "wawel-cathedral-entry",
      "label": "瓦維爾主教座堂｜改看外觀",
      "group": "門票／活動預約",
      "date": "2/9（二）",
      "status": "無須購室內票",
      "detail": "2/9 13:00–13:45 隨 Wawel Hill／庭院一起看主教座堂外觀；本次不入內，不購鐘樓／墓室參觀票。此項保留作安排核對，並非已購票。",
      "url": "https://www.katedra-wawelska.pl/en/"
    },
    {
      "id": "krakow-st-mary-entry",
      "label": "克拉科夫聖母聖殿｜入內參觀門票",
      "group": "門票／活動預約",
      "date": "2/9（二）16:00–16:45（預計）",
      "status": "待現場購票",
      "detail": "目前官網列週一至週六 11:30–18:00，售票處提早 15 分鐘關閉；到 Plac Mariacki 7 購票，南側遊客入口入內，重點看 Veit Stoss 木雕祭壇。2027 時段／禮拜調整出發前再確認；二月不排登塔。尚未購票，不預設勾選。",
      "url": "https://mariacki.com/en/tours-of-the-basilica/"
    },
    {
      "id": "train-budapest-vienna",
      "label": "Budapest-Keleti → Wien Hbf Railjet／EC 火車票",
      "group": "車票／交通預約",
      "date": "2/12（五）上午",
      "status": "待購票",
      "detail": "選直達班次並確認 2027 時刻表、座位需求、行李與改票條件。",
      "url": "https://www.oebb.at/en/tickets-kundenkarten/online-mobile-ticketing"
    },
    {
      "id": "schonbrunn-ticket",
      "label": "熊布朗宮室內參觀門票／固定入場時段",
      "group": "門票／活動預約",
      "date": "2/13（六）上午",
      "status": "待購票",
      "detail": "行程目標約 09:30 入場；依 2027 冬季開放內容選票。只從官方售票頁進入，避免仿冒票站。",
      "url": "https://www.schoenbrunn.at/en/tickets-and-prices/all-tickets-tours"
    },
    {
      "id": "belvedere-ticket",
      "label": "美景宮上宮指定時段門票",
      "group": "門票／活動預約",
      "date": "2/13（六）下午",
      "status": "待購票",
      "detail": "目標約 13:45 入場；確認上宮時段票及是否需要另排下宮或特展。",
      "url": "https://www.belvedere.at/en/tickets"
    },
    {
      "id": "airport-transfer-booking",
      "label": "InterContinental Vienna → VIE 清晨接送預約",
      "group": "車票／交通預約",
      "date": "2/14（日）06:15",
      "status": "待預約",
      "detail": "確認三人與行李可乘車型、接送地點、費用及司機聯絡方式；目標約 06:45 抵達機場。"
    },
    {
      "id": "hu-vignette-purchase",
      "label": "匈牙利高速公路 e-vignette（依租車車牌購買）",
      "group": "租車／道路通行",
      "date": "2/6 取車核對後、進收費段前；建議效期 2/6–2/15",
      "status": "待辦理",
      "detail": "2/6 取車後先問 SIXT 是否已有有效通行證，核對實際車牌及涵蓋範圍。未含才買全國 10 日票，建議有效期 2027/2/6–2/15（含首尾），可涵蓋 2/6 去程與 2/10 回程；不是跨國通用票。一般 ≤3.5t、最多七座且車籍為 M1／M1G 才屬 D1，按交付車籍核對。上 M3／M30 等收費段前生效，保存確認單；不另買不需要的郡票或奧地利 vignette。",
      "url": "https://ematrica.nemzetiutdij.hu/en"
    },
    {
      "id": "sk-vignette-purchase",
      "label": "斯洛伐克高速公路 e-vignette（依租車車牌購買）",
      "group": "租車／道路通行",
      "date": "2/6 取車核對後、進收費段前；建議效期 2/6–2/15",
      "status": "待辦理",
      "detail": "先查 SIXT 是否已提供／代購；未含則依車牌及登記國購買。建議有效期 2027/2/6–2/15（10 個曆日），涵蓋去程與 2/10 回程的 D1／R4 等收費段，2/7 如走收費段亦沿用同一份。兩國通行證都須獨立有效，不必每天重買。官方 eznamka.sk 可購買並查核，進入收費段前完成。",
      "url": "https://eznamka.sk/en"
    }
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
      "date": "2/4",
      "weekday": "四",
      "title": "抵達維也納 → 布達佩斯",
      "city": "Vienna → Budapest",
      "hotel": "InterContinental Budapest（布達佩斯洲際酒店）",
      "theme": "train",
      "photo": "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1400&q=82",
      "summary": "ÖBB RJX 63 三人車票已購：13:40 Wien Hbf → 16:29 Budapest-Keleti。機場先搭車到中央車站，站內午餐後前往 Budapest，約 17:00–17:15 到飯店為估計。",
      "highlights": [
        "08:30 VIE",
        "RJX 63 已購票 · 3 人",
        "13:40 Wien Hbf",
        "16:29 Keleti",
        "中央車站午餐",
        "入住／休息"
      ],
      "items": [
        [
          "08:30–約 10:15",
          "arrival",
          "抵達 Vienna VIE／入境領行李",
          "完成護照查驗、領行李及海關；到機場車站約 09:30–10:15 是估計，排隊或航班延誤時順延",
          "規劃緩衝"
        ],
        [
          "完成入境後",
          "train",
          "Flughafen Wien Bahnhof → Wien Hbf",
          "搭直達中央車站的 Railjet／IC，車程約 15 分鐘，另留候車時間；機場段票另行核對／購買，2027 班次出發前再查",
          "車程約 15m"
        ],
        [
          "到站後–13:10",
          "food",
          "Wien Hbf 站內午餐／休息",
          "找可放大行李的美食區座位，或買外帶餐上車吃；不要為逛市區壓縮候車時間",
          "依抵達時間"
        ],
        [
          "13:10–13:40",
          "transit",
          "確認月台／車廂／準備上車",
          "Bahnsteige 3–12 是車站月台區域，實際月台看當日看板；保存完整車票，核對艙等及座號，預留搬大行李時間",
          "規劃 30m"
        ],
        [
          "13:40–16:29",
          "train",
          "Wien Hbf → Budapest-Keleti｜ÖBB RJX 63 已購票",
          "2027/2/4，3 位乘客，當地時間；使用者已確認 13:40，Business 艙等及座號依完整票券核對",
          "2h49"
        ],
        [
          "16:29–約 17:15",
          "transit",
          "Budapest-Keleti → InterContinental Budapest（布達佩斯洲際酒店）",
          "以合規計程車為主，叫車前確認三件 29 吋大箱容量；含取行李、等車與市區交通為估計。地鐵備案 M2 至 Deák Ferenc tér 再步行",
          "規劃約 30–45m"
        ],
        [
          "約 17:00–18:00",
          "rest",
          "入住／休息／補水",
          "抵達日保留休息；列車或市區交通延誤時順延，不固定安排河岸拍攝",
          "依實際抵達"
        ],
        [
          "18:00 後",
          "food",
          "晚餐／河岸散步（選擇性）",
          "就近吃晚餐，體力許可再看 Danube／Chain Bridge 夜景；2/5 遊船安排另見每日行程",
          ""
        ]
      ],
      "notes": [
        "已購區間為 Wien Hbf → Budapest-Keleti；機場段另行確認／購票。13:40 為使用者更正確認時間。",
        "完整票券核對艙等、座號、車廂及退改條件；飯店交通、入住時間屬規劃估計，依實際抵達順延。",
        "原 FlixBus 車票尚未確認已取消或退款，清單保留待確認退票項目。"
      ]
    },
    {
      "date": "2/5",
      "weekday": "五",
      "title": "Szentendre → Buda Castle → Matthias Church → Fisherman’s Bastion → 多瑙河夜景遊船",
      "city": "Budapest",
      "hotel": "InterContinental Budapest（布達佩斯洲際酒店）",
      "theme": "city",
      "photo": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1400&q=82",
      "summary": "白天 Szentendre 與布達城堡區，保留漁人堡日落；晚餐後搭約一小時多瑙河夜景遊船。",
      "highlights": [
        "Szentendre 老城",
        "Buda Castle",
        "Matthias Church",
        "Fisherman’s Bastion 日落",
        "多瑙河夜景遊船（約 19:00，待購票）"
      ],
      "items": [
        [
          "09:00–09:15",
          "transit",
          "飯店 → Batthyány tér",
          "步行／市區電車；以 BudapestGO 查當日路線",
          "15m"
        ],
        [
          "約 09:15–10:00",
          "transit",
          "H5 → Szentendre",
          "約 40–45 分鐘；班次以當日公告為準",
          "40–45m"
        ],
        [
          "10:00–11:30",
          "place",
          "Szentendre 老城",
          "Fő tér、巷弄、河岸街景",
          "1h30"
        ],
        [
          "11:30–12:15",
          "food",
          "午餐｜匈牙利家常菜",
          "可試 Gulyás 燉牛肉湯或 Lángos 炸麵餅；冬季先確認餐廳營業",
          "45m"
        ],
        [
          "約 12:15–13:00",
          "transit",
          "Szentendre → Batthyány tér",
          "搭 H5 回市區",
          "45m"
        ],
        [
          "13:00–13:30",
          "transit",
          "前往 Buda Castle 區",
          "公車 16 或步行上城；依當日路況選擇",
          "30m"
        ],
        [
          "13:30–14:15",
          "place",
          "Buda Castle",
          "城堡區、庭院與 Danube 視角",
          "45m"
        ],
        [
          "14:15–15:00",
          "place",
          "Matthias Church",
          "室內開放與票務出發前確認",
          "45m"
        ],
        [
          "15:00–16:15",
          "photo",
          "Fisherman’s Bastion",
          "日光拍攝；露台收費區依現場規則",
          "1h15"
        ],
        [
          "16:15–17:00",
          "photo",
          "城堡區藍調時刻",
          "依當日日落時間微調",
          "45m"
        ],
        [
          "17:00–18:00",
          "food",
          "晚餐｜城堡區就近用餐",
          "可選 Paprikás csirke 雞肉紅椒燉或 Gulyás；用餐後下山前往碼頭",
          "1h"
        ],
        [
          "18:00–18:40",
          "transit",
          "城堡區 → 多瑙河遊船碼頭",
          "公車 16／計程車下山，再前往訂單指定碼頭；若選 Legenda，集合在 Dock 7（Jane Haining rakpart）；依路況留交通緩衝",
          "約 40m"
        ],
        [
          "18:40–19:00",
          "rest",
          "遊船報到／登船緩衝",
          "規劃提早約 20 分鐘抵達；以實際船票的集合地點與報到要求為準",
          "20m"
        ],
        [
          "約 19:00–20:00",
          "cruise",
          "多瑙河夜景遊船｜Danube Legend（首選、待購票）",
          "規劃約一小時觀光航程，欣賞國會大廈、鏈橋與城堡山夜景；不是晚餐船。2027 班表與票價待確認，購票後依實際時段調整",
          "約 1h"
        ],
        [
          "20:00 後",
          "hotel",
          "返回 InterContinental Budapest／休息",
          "遊船後回飯店，隔天 09:00 SIXT 取車、預計 10:00 出發；不再加排其他夜間景點",
          ""
        ]
      ],
      "notes": [
        "Szentendre 冬季屬淡季，店家／室內景點營業時間應於出發前再確認。",
        "Fisherman’s Bastion 已在本日完成，2/11 不再排。",
        "遊船安排 2/5，2/4 抵達日維持休息彈性。約 19:00 只是規劃時段：查核時官方仍為 2026 班表，尚未確認 2027-02-05 開航與座位，未完成訂票。",
        "首選 Legenda Danube Legend（一小時觀光船）；購票時確認室內保暖、戶外拍攝區、碼頭與退改規則。二月河上風冷，短暫到戶外拍照後回室內。",
        "船上拍攝以標準變焦為主，注意船身晃動與玻璃反光；提高快門速度並接受較高 ISO，腳架不適合在移動船上長曝光。"
      ],
      "sources": [
        {
          "name": "Legenda｜一小時夜景遊船",
          "url": "https://legenda.hu/en/danube-legend"
        },
        {
          "name": "Legenda｜官方班表（目前 2026）",
          "url": "https://legenda.hu/en/timetable"
        },
        {
          "name": "Legenda｜Dock 7 集合地點",
          "url": "https://legenda.hu/en/directions"
        }
      ]
    },
    {
      date: "2/6", weekday: "六", title: "Budapest → Košice（午餐）→ Prešov → Poprad → Štrbské Pleso", city: "Budapest → Štrbské Pleso", hotel: "Hotel Panorama（全景酒店）", theme: "drive", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Strbske_Pleso_winter.jpg/960px-Strbske_Pleso_winter.jpg",
      summary: "長途冬季自駕日，跳過 Miskolc，直接前往 Košice 午餐，再續行至 Štrbské Pleso。",
      highlights: ["09:00 SIXT 取車", "預計 10:00 出發", "Košice 午餐與休息", "跨境：HU → SK", "山區冬季路況"],
      items: [
        ["09:00–10:00", "car", "SIXT Budapest Chain Bridge 取車｜已預訂", "訂單 09:00：Apáczai Csere János u. 12–14, Budapest, 1052；預留手續、車況拍照、裝行李，核對冬季胎／雪鏈與跨境許可，取得車牌及車籍資料辦 Kraków SCT；預計 10:00 出發", "1h"],
        ["10:00–13:00", "drive", "Budapest → Košice", "直接前往 Košice，不停留 Miskolc；沿用原車程估算，額外休息與冬季延誤另加", "約 3h"],
        ["13:00–14:00", "food", "Košice 午餐／休息", "在 Košice 用午餐並讓駕駛休息", "1h"],
        ["14:00–16:00", "drive", "Košice → Prešov → Poprad", "沿用原車程估算；雪況／塞車可能延誤", "約 2h"],
        ["16:00–16:45", "drive", "Poprad → Štrbské Pleso", "山區末段，依積雪、能見度與管制調整", "約 45m"],
        ["約 16:45–18:00", "hotel", "Hotel Panorama（全景酒店）", "入住；16:45 為規劃值，不保證天黑前到，依冬季路況保留彈性", ""],
        ["18:00–19:00", "food", "晚餐｜斯洛伐克山區料理", "推薦 Bryndzové halušky 羊乳起司馬鈴薯麵疙瘩配培根；先確認餐廳供應", "1h"]
      ],
      notes: ["09:00 取車、預計 10:00 出發；約 16:45 抵達沿用原車程估算，額外休息、降雪與塞車會延後。", "跨境許可需明確包含斯洛伐克與波蘭。", "匈牙利／斯洛伐克 e-vignette 於出發前依 2027 最新規則購買。", "四輪冬季胎優先；建議向 SIXT 預約適配雪鏈備用，核對尺寸、允許輪軸與安裝方式。遇強制雪鏈標誌／管制須遵守；四驅不自動豁免。"]
    },
    {
      date: "2/7", weekday: "日", title: "Štrbské Pleso → Zakopane｜Jaszczurówka → Gubałówka → Krupówki", city: "Štrbské Pleso → Zakopane", hotel: "Aparthotel Cristina（克莉絲蒂娜公寓酒店）", theme: "winter", photo: "https://domalenka.pl/uploads/images/hotel-patria/hotel-patria-nove/hotel-patria-nove-zima.jpg",
      summary: "09:00 退房後自駕至 Zakopane，途中安排 Jaszczurówka，接著前往 Gubałówka、Krupówki。",
      highlights: ["09:00 出發", "Jaszczurówka", "Gubałówka", "Krupówki"],
      items: [
        ["09:00–09:30", "hotel", "早餐、退房與裝車", "貴重物品隨身；確認車況與天候", "30m"],
        ["09:30–12:00", "drive", "Štrbské Pleso → Zakopane", "經 Poprad／Tatranská Javorina／Łysa Polana；冬季邊境路況留緩衝", "約 2h30"],
        ["12:00–12:30", "photo", "Jaszczurówka 木造教堂", "先確認停車與教堂開放；尊重宗教場所拍攝規範", "30m"],
        ["12:30–13:15", "food", "午餐｜波蘭高塔特拉料理", "可點 kwaśnica 酸菜湯、moskole 馬鈴薯餅；煙燻羊乳起司依冬季供應為準", "45m"],
        ["13:15–13:45", "transit", "停車／前往 Gubałówka 下站", "停合法付費停車場，車內勿留貴重物", "30m"],
        ["13:45–15:30", "photo", "Gubałówka", "搭纜車或步行上山，依風雪與營運狀況", "1h45"],
        ["15:30–17:00", "photo", "Krupówki", "黃昏街景；可在此用晚餐", "1h30"],
        ["17:00–18:00", "transit", "前往 Aparthotel Cristina（克莉絲蒂娜公寓酒店）", "確認停車與最晚入住方式", "1h"],
        ["18:00 後", "hotel", "入住、與朋友會合／晚餐", "晚餐可選 kwaśnica 酸菜湯、pierogi 波蘭餃子或烤羊乳起司；用餐後回飯店休息", ""]
      ],
      notes: ["Aparthotel Cristina（克莉絲蒂娜公寓酒店） 無行李服務；16:00 前不提供標準入住。", "車內只放一般行李；護照、相機、現金等貴重物品隨身。", "冬季跨境山區行駛務必保留緩衝。"]
    },
    {
      date: "2/8", weekday: "一", title: "Kasprowy Wierch → Snowmobile", city: "Zakopane / Kościelisko", hotel: "Aparthotel Cristina（克莉絲蒂娜公寓酒店）", theme: "winter", photo: "https://www.pkl.pl/data/pages/338/cp_cp_cp_20200108_a6500ab606436ab2.jpg",
      summary: "09:00 出發前往 Kuźnice，上午搭 Kasprowy 纜車，下午只排已確認集合點的 Snowmobile。",
      highlights: ["09:00 前往 Kuźnice", "Kasprowy Wierch", "午餐／轉場", "14:30 Snowmobile"],
      items: [
        ["09:00–09:30", "transit", "飯店 → Kuźnice", "計程車／當地 minibus；私家車不可直達纜車站", "30m"],
        ["09:30–10:00", "transit", "報到／候車", "預留排隊與纜車班次緩衝", "30m"],
        ["10:00–12:30", "photo", "Kasprowy Wierch", "纜車與山頂雪景；受風雪、能見度與營運影響", "2h30"],
        ["12:30–13:15", "transit", "下山並返回 Zakopane", "排隊時間視現場調整", "45m"],
        ["13:15–14:00", "food", "午餐｜波蘭高塔特拉料理", "可點 kwaśnica 酸菜湯、moskole 馬鈴薯餅；煙燻羊乳起司依冬季供應為準", "45m"],
        ["14:00–14:20", "transit", "前往 Snowmobile 集合點", "必須先取得業者確切地址與接駁方式", "20m"],
        ["14:20–14:30", "adventure", "報到／裝備／安全說明", "依業者要求提前到場；不要把 5 分鐘當緩衝", "10m"],
        ["14:30–16:30", "adventure", "Snowmobile", "Kościelisko／Butorów 區域；2h 體驗", "2h"],
        ["18:00–19:30", "food", "晚餐｜波蘭山地料理", "可選 kwaśnica 酸菜湯、pierogi 波蘭餃子或烤羊乳起司；冬季起司供應依店家為準", "1h30"]
      ],
      notes: ["Jaszczurówka 排在 2/7，避免 2/8 纜車後趕景點再趕集合。", "Snowmobile 集合地址尚須向業者核實；雪況不足可能改期、取消或改活動。", "Kasprowy 纜車受風雪與營運影響；預約時選接近 10:00 的上山時段並確認退改規則。"]
    },
    {
      "date": "2/9",
      "weekday": "二",
      "title": "Zakopane → Kraków｜Wawel → Old Town",
      "city": "Zakopane → Kraków",
      "hotel": "Holiday Inn Krakow City Centre（克拉科夫市中心假日酒店）",
      "theme": "city",
      "photo": "https://dcontent.inviacdn.net/shared/img/web-830/2018/1/11/m0/537301.jpg",
      "summary": "自駕到飯店停車後步行：主教座堂看外觀，城堡只選 State Rooms；16:00 聖母聖殿入內，再逛主廣場、晚餐與夜景。",
      "highlights": [
        "主教座堂外觀",
        "城堡 State Rooms",
        "Kanonicza／Grodzka",
        "16:00 聖母聖殿入內",
        "Main Market Square",
        "老城全程步行"
      ],
      "items": [
        [
          "09:00–11:30",
          "drive",
          "Zakopane → Kraków",
          "自駕 DK47 → S7／DK7 → 飯店合法停車入口；2h30 為預估，冬季道路與進城車流可能延誤",
          "約 2h30"
        ],
        [
          "11:30–12:00",
          "hotel",
          "飯店停車／寄放行李",
          "Holiday Inn，Wielopole 4；車位及合法入口預先確認。先寄放大行李，客房一般 15:00 起入住",
          "30m"
        ],
        [
          "12:00–13:00",
          "food",
          "簡單午餐＋步行至 Wawel",
          "選湯品、pierogi 等簡單午餐；約 12:40 前出發，飯店至 Wawel 步行約 15–20 分鐘（約 1 公里，含上坡緩衝），不再移車",
          "1h 含步行"
        ],
        [
          "13:00–13:45",
          "photo",
          "Wawel Hill／Wawel Cathedral 外觀／城堡庭院",
          "主教座堂只看外觀，免購其室內票；在山丘、庭院拍建築，不排鐘樓與墓室",
          "45m"
        ],
        [
          "13:45–15:00",
          "place",
          "Wawel Castle｜State Rooms",
          "只選 Castle | Second Floor（含 State Rooms）一個展區，重點看王室大廳、掛毯與天花板；預留約 50 分鐘參觀及報到緩衝。13:45 為預計，依實際可售時段訂票，尚未購票",
          "1h15 含緩衝"
        ],
        [
          "15:00–15:30",
          "photo",
          "Kanonicza Street",
          "從 Wawel 步行下山，沿卡諾尼察街慢走街拍，往老城方向前進",
          "30m"
        ],
        [
          "15:30–16:00",
          "photo",
          "Grodzka Street → 聖母聖殿售票處",
          "沿格羅茲卡街到 Plac Mariacki 7 購票；Wawel 到聖母聖殿純步行約 15–20 分鐘，這一小時含兩街拍照和購票",
          "30m"
        ],
        [
          "16:00–16:45",
          "place",
          "St Mary’s Basilica｜入內參觀",
          "南側遊客入口，重點看 Veit Stoss 木雕祭壇與哥德式室內；主廣場正門供祈禱使用。現行週二遊客時段 11:30–18:00，2027 出發前再確認；二月不排登塔",
          "45m"
        ],
        [
          "16:45–18:00",
          "photo",
          "Main Market Square／Cloth Hall 外觀",
          "步行數分鐘即到；拍廣場、雙塔和紡織會館拱廊，依天色彈性安排暖身休息",
          "1h15"
        ],
        [
          "18:00–19:00",
          "food",
          "晚餐｜克拉科夫經典菜",
          "可試 bigos 燉酸菜肉或 pierogi；老城餐館用餐",
          "1h"
        ],
        [
          "19:00 後",
          "photo",
          "Kraków Old Town 夜景 → 步行回飯店",
          "按體力簡短夜拍；主廣場回 Holiday Inn 約 5–10 分鐘，全日含庭院與街拍估約 3–5 公里",
          "彈性"
        ]
      ],
      "notes": [
        "Holiday Inn 停車名額有限，預先確認合法入口、車位與收費；到店先寄放行李，晚間回來再入住。",
        "租車為外國車牌，2/9 進 Kraków SCT 前確認登錄及通行資格；SCT 不等於可開進老城步行街。",
        "城堡展覽與聖母聖殿門票分開購買；主教座堂改看外觀。2027 開放時段與宗教活動再確認，未購項目保持未勾選。",
        "若冬季塞車延誤，先縮短午餐／外觀拍照；不要為了拍街景錯過城堡已訂時段或聖母聖殿遊客時間。嚴重延誤時優先保留聖母聖殿，城堡依票券退改規則處理。",
        "老城不預購市區日票；全程步行，太冷或走累則計程車另付，在可通車路口上下車。"
      ]
    },
    {
      date: "2/10", weekday: "三", title: "Kraków → Budapest", city: "Kraków → Budapest", hotel: "Sleek premium Aprqtment with Park（附停車位的時尚高級公寓）", theme: "drive", photo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=82",
      summary: "09:00 出發，保留休息與冬季路況緩衝；已預訂 19:30 在 Budapest Keleti Train Station 還車，之後前往公寓休息。",
      highlights: ["09:00 出發", "純駕駛約 5.5–6.5h", "19:30 Keleti 還車｜已預訂", "不排景點"],
      items: [
        ["09:00–12:00", "drive", "Kraków → Slovakia 路段", "長途自駕；依導航與冬季路況", "約 3h"],
        ["12:00–12:45", "rest", "服務區午餐／駕駛休息", "以熱湯或 Gulyás 匈牙利燉牛肉為優先；不要為趕還車壓縮休息", "45m"],
        ["12:45–約 16:00", "drive", "繼續前往 Budapest", "純駕駛約 5.5–6.5 小時是估算；塞車／雪況會延後，如可能超過 19:30 還車先聯絡 SIXT", "約 3h15"],
        ["抵達後–19:00", "rest", "路況緩衝／休息／還車前補油", "抵達時間為估算，保留休息、加油與市區交通時間；若提早到，先詢問能否提前還車，不額外排景點", "依路況"],
        ["19:00–19:30", "car", "SIXT Budapest Keleti Train Station 還車準備", "Baross tér 7–8, Budapest, 1087；訂單還車時間 19:30。預先核對入口、停車位及晚間交還流程，拍油量／里程／車況並保留交還證明", "約 30m"],
        ["19:30 後", "hotel", "Sleek premium Aprqtment with Park（附停車位的時尚高級公寓）", "還車後按公寓實際地址搭車、入住；通知房東晚間抵達，入住及晚餐時間依交車／交通順延", ""],
        ["入住後", "food", "晚餐／休息", "按實際時間選公寓附近營業餐廳或外帶，把體力留給 2/11", ""]
      ],
      notes: ["不要為了塞景點壓縮高速路程緩衝。", "取車 Chain Bridge、還車 Keleti，兩處門市不同；2/10 19:30 為已預訂時間，現場交車／鑰匙投遞及提前還車須向 SIXT 核對。", "Kraków SCT 依實際車牌完成；回程出發前仍要確認通行資格。"]
    },
    {
      date: "2/11", weekday: "四", title: "Central Market → Váci utca → Basilica → Parliament → Shoes on the Danube → Chain Bridge", city: "Budapest", hotel: "Sleek premium Aprqtment with Park（附停車位的時尚高級公寓）", theme: "city", photo: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1400&q=82",
      summary: "Budapest 第二個完整拍攝日，集中 Pest＋Danube；不回 Buda Castle。",
      highlights: ["Central Market Hall", "Váci utca／Basilica", "Parliament", "Shoes on the Danube", "Chain Bridge 藍調"],
      items: [
        ["09:00–09:30", "transit", "前往 Central Market Hall", "", "30m"],
        ["09:30–11:00", "place", "Central Market Hall", "市場建築與食物／小物", "1h30"],
        ["11:00–11:30", "photo", "Váci utca", "街拍、商店立面", "30m"],
        ["11:30–12:30", "place", "St. Stephen’s Basilica", "外觀／內部依開放時間", "1h"],
        ["12:30–13:30", "food", "午餐｜布達佩斯經典菜", "可試 Gulyás 燉牛肉湯、Lángos 炸麵餅；市中心找當日營業店家", "1h"],
        ["13:30–15:00", "photo", "Hungarian Parliament", "Kossuth Lajos tér 建築視角", "1h30"],
        ["15:00–15:30", "photo", "Shoes on the Danube", "紀念地；保持安靜與尊重", "30m"],
        ["15:30–16:15", "transit", "前往 Batthyány tér", "", "45m"],
        ["16:15–17:15", "photo", "Batthyány tér", "多瑙河對岸 Parliament 全景", "1h"],
        ["17:15–17:45", "transit", "前往 Chain Bridge", "", "30m"],
        ["17:45–18:45", "photo", "Chain Bridge＋Danube", "黃昏、藍調時刻", "1h"],
        ["18:45–19:45", "food", "晚餐｜匈牙利經典菜", "可選燉牛肉 Gulyás 或雞肉紅椒燉 Paprikás csirke", "1h"],
        ["19:45 後", "photo", "Budapest 夜景", "返回飯店", ""]
      ],
      notes: ["Parliament 可拍兩個方向：Kossuth Lajos tér 近拍，以及 Batthyány tér 對岸全景。", "不重複 Fisherman’s Bastion。"]
    },
    {
      date: "2/12", weekday: "五", title: "Budapest → Vienna", city: "Budapest → Vienna", hotel: "InterContinental Vienna（維也納洲際酒店）", theme: "train", photo: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1400&q=82",
      summary: "退房後搭直達 Railjet／EC 前往 Wien Hbf；抵達後只走市中心夜景。",
      highlights: ["Budapest-Keleti", "直達 Railjet／EC", "Wien Hbf", "Stephansdom", "Graben／Kohlmarkt"],
      items: [
        ["09:00–09:30", "hotel", "退房並前往 Budapest-Keleti", "預留找月台與候車時間", "30m"],
        ["約 10:00–13:00", "train", "Budapest → Wien Hbf", "直達 Railjet／EC；2027 班次開售後選定", "約 2h40–3h"],
        ["13:00–13:30", "transit", "Wien Hbf → InterContinental Vienna（維也納洲際酒店）", "大行李搭計程車，或依 Wiener Linien 路線規劃", "約 30m"],
        ["13:30–16:00", "hotel", "寄放行李／午餐／休息", "午餐可吃 Wiener Schnitzel 維也納炸肉排；依房間是否可提前入住調整", "2h30"],
        ["16:00–17:00", "photo", "Stephansdom", "外觀拍攝；入內遵守禮拜時間", "1h"],
        ["17:00–18:00", "photo", "Graben／Kohlmarkt", "步行街景與商店立面", "1h"],
        ["18:00 後", "food", "晚餐／返回飯店", "可選 Wiener Schnitzel 維也納炸肉排或 Tafelspitz 水煮牛肉；市中心步行", ""]
      ],
      notes: ["國際火車票常在出發前數月逐步開放；2027 班次以 ÖBB 最終時刻表為準。", "不再安排 Szentendre；此日專心換城市。"]
    },
    {
      date: "2/13", weekday: "六", title: "Schönbrunn → Belvedere → Hofburg", city: "Vienna", hotel: "InterContinental Vienna（維也納洲際酒店）", theme: "city", photo: "https://www.avanse.com/blogs/images/Blog-10july.jpg",
      summary: "09:00 出發參觀 Schönbrunn、Belvedere、Hofburg；市中心教堂與街景已於前一晚完成。",
      highlights: ["09:00 出發", "Schönbrunn", "Belvedere", "Hofburg", "市區自由晚餐"],
      items: [
        ["09:00–09:30", "transit", "飯店 → Schönbrunn", "搭 U4／計程車；依入場時段與當日路線", "30m"],
        ["09:30–12:00", "place", "Schönbrunn Palace", "宮殿＋庭園；2027 開放時間及票券再確認", "2h30"],
        ["12:00–13:00", "food", "午餐", "Schönbrunn 周邊可找 Wiener Schnitzel 炸肉排、Gulasch 燉牛肉或香腸小吃", "1h"],
        ["13:00–13:45", "transit", "前往 Belvedere", "U-Bahn／電車；用 Wiener Linien 查當日路線", "45m"],
        ["13:45–15:30", "place", "Belvedere Palace", "上宮／庭園；室內展覽依時段票", "1h45"],
        ["15:30–16:00", "transit", "前往 Hofburg", "電車／步行，依當日路況", "30m"],
        ["16:00–16:45", "photo", "Hofburg 外觀與廣場", "戶外建築拍攝；不排室內博物館", "45m"],
        ["16:45 後", "food", "晚餐／自由活動", "可選 Tafelspitz 水煮牛肉或 Wiener Schnitzel 維也納炸肉排；市中心景點已於 2/12 完成", ""]
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
  // 攝影圖釘為建議站位區域，日期只連結既有行程，不增加必到活動。
  photoSpots: [
  {
    "id": "chain-river",
    "city": "Budapest",
    "dates": [
      "2/4",
      "2/11"
    ],
    "placeKeys": [
      "ChainBridge"
    ],
    "name": "鏈橋｜佩斯側河岸步道",
    "lat": 47.4986,
    "lng": 19.0466,
    "direction": "站在鏈橋南側的河岸步道，往西北拍橋體與布達城堡山。",
    "time": "黃昏／藍調時刻",
    "lens": "XF16–55mm；X100VI",
    "note": "使用人行步道，避開車道與電車軌道；不保證每日亮燈時間。",
    "source": "https://www.budapestinfo.hu/"
  },
  {
    "id": "szentendre-square",
    "city": "Szentendre",
    "dates": [
      "2/5"
    ],
    "placeKeys": [
      "Szentendre"
    ],
    "name": "聖安德烈｜Fő tér 廣場",
    "lat": 47.6678,
    "lng": 19.0761,
    "direction": "從廣場邊緣以石板路作前景，拍彩色立面與教堂塔尖。",
    "time": "原行程上午",
    "lens": "X100VI；XF16–55mm",
    "note": "站位可沿廣場邊緣微調，避免擋住商店入口。",
    "source": "https://iranyszentendre.hu/en/"
  },
  {
    "id": "castle-terrace",
    "city": "Budapest",
    "dates": [
      "2/5"
    ],
    "placeKeys": [
      "Buda Castle"
    ],
    "name": "布達城堡｜東側觀景區",
    "lat": 47.4963,
    "lng": 19.0404,
    "direction": "在城堡面向多瑙河的觀景區，往東北拍鏈橋與佩斯河岸。",
    "time": "原行程下午",
    "lens": "XF16–55mm；Sigma 50–120mm拍河岸細節",
    "note": "標記為東側觀景區約略位置；施工圍籬或入口開放以現場為準。",
    "source": "https://www.budapestinfo.hu/"
  },
  {
    "id": "matthias-square",
    "city": "Budapest",
    "dates": [
      "2/5"
    ],
    "placeKeys": [
      "Matthias Church"
    ],
    "name": "馬提亞斯教堂｜聖三一廣場",
    "lat": 47.5016,
    "lng": 19.0328,
    "direction": "由教堂西側廣場往東拍正面、尖塔與彩色屋瓦。",
    "time": "原行程下午",
    "lens": "XF16–55mm",
    "note": "廣角保持相機水平；室內攝影與腳架另依教堂規定。",
    "source": "https://www.budapestinfo.hu/"
  },
  {
    "id": "bastion-arches",
    "city": "Budapest",
    "dates": [
      "2/5"
    ],
    "placeKeys": [
      "Fisherman's Bastion"
    ],
    "name": "漁人堡｜面河拱廊",
    "lat": 47.502,
    "lng": 19.0345,
    "direction": "沿面向多瑙河的拱廊，往東至東北以石拱框住國會大廈。",
    "time": "下午／藍調時刻",
    "lens": "XF16–55mm；Sigma 50–120mm拍國會細節",
    "note": "圖釘為拱廊區域；選可合法進入的露台，部分區域可能收費。",
    "source": "https://www.budapestinfo.hu/"
  },
  {
    "id": "parliament-across",
    "city": "Budapest",
    "dates": [
      "2/5",
      "2/11"
    ],
    "placeKeys": [
      "Parliament"
    ],
    "name": "國會大廈｜Batthyány tér 對岸河岸",
    "lat": 47.507,
    "lng": 19.0395,
    "direction": "從布達側河岸往東拍國會全貌，以河面作前景。",
    "time": "2/5 順拍；2/11 原行程傍晚",
    "lens": "XF16–55mm；Sigma 50–120mm壓縮立面",
    "note": "2/5 經 Batthyány tér 時可順拍；2/11 原行程也在此拍對岸全景。與 Kossuth Lajos tér 近拍機位不同。",
    "source": "https://www.budapestinfo.hu/"
  },
  {
    "id": "kosice-cathedral",
    "city": "Košice",
    "dates": [
      "2/6"
    ],
    "placeKeys": ["Kosice"],
    "name": "科西策｜聖米迦勒禮拜堂旁",
    "lat": 48.7202,
    "lng": 21.2581,
    "direction": "在大教堂南側、禮拜堂附近的行人區，往北拍聖伊莉莎白大教堂。",
    "time": "午餐休息時順拍",
    "lens": "XF16–55mm；X100VI",
    "note": "只在午餐停留時間與停車位置允許時順拍；不另加教堂參觀行程。",
    "source": "https://visitkosice.org/en/vidiet-a-zazit/st-elisabeths-cathedral"
  },
  {
    "id": "lake-south",
    "city": "Štrbské Pleso",
    "dates": [
      "2/6",
      "2/7"
    ],
    "placeKeys": [
      "Strbske"
    ],
    "name": "斯特爾布斯克湖｜南岸觀景步道",
    "lat": 49.119782,
    "lng": 20.058144,
    "direction": "從南岸往北拍湖面、雪山與湖畔建築；用岸邊樹木作前景。",
    "time": "2/7 早餐前若有餘裕；2/6 視到達天色",
    "lens": "XF16–55mm；Sigma 50–120mm取雪峰",
    "note": "2/6 原定傍晚抵達，可能已暗；晨拍不延後 2/7 出發。只走開放步道，不踏上冰湖。",
    "source": "https://www.outdooractive.com/en/poi/slovakia/view-to-the-strbske-pleso-lake/31493722/"
  },
  {
    "id": "jas-chapel",
    "city": "Zakopane",
    "dates": [
      "2/7"
    ],
    "placeKeys": [
      "Jaszczurowka"
    ],
    "name": "Jaszczurówka｜木教堂前方步道",
    "lat": 49.284355,
    "lng": 20.001141,
    "direction": "沿入口步道拍木造教堂與樹林，用斜側角度呈現屋頂層次。",
    "time": "原行程中午",
    "lens": "XF16–55mm；X100VI",
    "note": "站位參考攝影座標；不用道路當機位，尊重宗教活動，樓梯結冰時改在較低處拍。",
    "source": "https://malopolska.szlaki.pttk.pl/3074-pttk-malopolska-kaplica-najswietszego-serca-pana-jezusa"
  },
  {
    "id": "gubalowka-view",
    "access": "cable",
    "city": "Zakopane",
    "dates": [
      "2/7"
    ],
    "placeKeys": [
      "Gubalowka"
    ],
    "name": "Gubałówka｜上站旁觀景步道",
    "lat": 49.306807,
    "lng": 19.933019,
    "direction": "在上站旁面山的觀景步道往南拍 Zakopane 與塔特拉山群峰。",
    "time": "原行程下午",
    "lens": "XF16–55mm 拍全景；Sigma 50–120mm取山峰",
    "note": "圖釘靠近上站，沿面山步道選不被商攤遮擋的位置；不要進入滑雪道。",
    "source": "https://www.sklep.pkl.pl/en/resorts/details%2C4%2Cgubalowka.html"
  },
  {
    "id": "krupowki-street",
    "city": "Zakopane",
    "dates": [
      "2/7"
    ],
    "placeKeys": [
      "Krupowki"
    ],
    "name": "Krupówki｜中段步行街",
    "lat": 49.2937,
    "lng": 19.952,
    "direction": "沿街道軸線拍燈光、木屋與行人；換方向找較少遮擋的背景。",
    "time": "原行程黃昏／夜景",
    "lens": "X100VI；XF16–55mm",
    "note": "機位為步行街中段區域；留意人潮、積雪與車輛出入口。",
    "source": "https://www.sklep.pkl.pl/en/resorts/details%2C4%2Cgubalowka.html"
  },
  {
    "id": "kasprowy-top",
    "access": "cable",
    "city": "Zakopane",
    "dates": [
      "2/8"
    ],
    "placeKeys": [
      "Kasprowy"
    ],
    "name": "Kasprowy Wierch｜纜車上站外",
    "lat": 49.232,
    "lng": 19.9817,
    "direction": "在上站外開放觀景範圍拍周邊塔特拉群峰，依能見度選方向。",
    "time": "原行程上午",
    "lens": "XF16–55mm；Sigma 50–120mm取雪峰",
    "note": "標記為上站周邊，不是稜線登山路線；風雪時服從工作人員指示。",
    "source": "https://mapakasprowy.pkl.pl/203-pkl-jeden-bilet-dwie-atrakcje"
  },
  {
    "id": "wawel-courtyard",
    "city": "Kraków",
    "dates": [
      "2/9"
    ],
    "placeKeys": [
      "Wawel",
      "WawelCathedral"
    ],
    "name": "瓦維爾｜城堡庭院",
    "lat": 50.0542,
    "lng": 19.9367,
    "direction": "從庭院邊緣拍拱廊與對稱建築，以柱列製造前後層次。",
    "time": "2/9 13:00–13:45（含主教座堂外觀）",
    "lens": "XF16–55mm",
    "note": "主教座堂只看外觀；庭院開放依現場。接續城堡 State Rooms 室內展區，拍攝規則另行確認。",
    "source": "https://www.krakow.com/guides/krakow-photography-guide"
  },
  {
    "id": "kanonicza-street",
    "city": "Kraków",
    "dates": [
      "2/9"
    ],
    "placeKeys": [
      "Kanonicza"
    ],
    "name": "Kanonicza｜南段石板街",
    "lat": 50.0558,
    "lng": 19.9375,
    "direction": "沿石板街向南拍通往瓦維爾的街景，或用門框與立面細節構圖。",
    "time": "原行程下午／黃昏",
    "lens": "X100VI；XF16–55mm",
    "note": "選街邊站位，不擋通行；不進入私人庭院。",
    "source": "https://www.krakow.com/guides/krakow-photography-guide"
  },
  {
    "id": "market-mary",
    "city": "Kraków",
    "dates": [
      "2/9"
    ],
    "placeKeys": [
      "MainMarket",
      "StMary"
    ],
    "name": "中央集市廣場｜紡織會館東側",
    "lat": 50.0614,
    "lng": 19.9383,
    "direction": "由紡織會館東側往東拍聖母聖殿雙塔，以廣場行人作尺度。",
    "time": "黃昏／夜景",
    "lens": "XF16–55mm；X100VI",
    "note": "標記為廣場站位區域；腳架不要堵住拱廊入口。",
    "source": "https://www.krakow.com/guides/krakow-photography-guide"
  },
  {
    "id": "cloth-arcades",
    "city": "Kraków",
    "dates": [
      "2/9"
    ],
    "placeKeys": [
      "ClothHall"
    ],
    "name": "紡織會館｜西側拱廊外",
    "lat": 50.0615,
    "lng": 19.9367,
    "direction": "沿拱廊外緣斜拍柱列，或退到廣場拍會館長立面。",
    "time": "黃昏／夜景",
    "lens": "XF16–55mm；X100VI",
    "note": "商店營業與人潮會影響站位，可沿廣場微調。",
    "source": "https://www.krakow.com/guides/krakow-photography-guide"
  },
  {
    "id": "market-budapest",
    "city": "Budapest",
    "dates": [
      "2/11"
    ],
    "placeKeys": [
      "CentralMarket"
    ],
    "name": "中央市場｜Fővám tér 廣場",
    "lat": 47.4873,
    "lng": 19.0573,
    "direction": "由市場西側廣場往東拍正面與彩色屋頂。",
    "time": "原行程上午",
    "lens": "XF16–55mm",
    "note": "圖釘在市場外廣場；室內另依現場允許範圍拍攝。",
    "source": "https://www.budapestinfo.hu/"
  },
  {
    "id": "vaci-street",
    "city": "Budapest",
    "dates": [
      "2/11"
    ],
    "placeKeys": [
      "Vaci"
    ],
    "name": "瓦茨街｜南段步行街",
    "lat": 47.4891,
    "lng": 19.056,
    "direction": "以街道消失點、櫥窗與行人拍城市生活，順行程向北移動。",
    "time": "原行程上午",
    "lens": "X100VI；XF16–55mm",
    "note": "不要為拍人像阻擋行人；近距離拍攝人物先取得同意。",
    "source": "https://www.budapestinfo.hu/"
  },
  {
    "id": "basilica-square",
    "city": "Budapest",
    "dates": [
      "2/11"
    ],
    "placeKeys": [
      "Basilica"
    ],
    "name": "聖史蒂芬大教堂｜前方廣場",
    "lat": 47.5008,
    "lng": 19.0524,
    "direction": "從教堂西側廣場往東拍雙塔與圓頂；走到中軸取對稱構圖。",
    "time": "原行程白天",
    "lens": "XF16–55mm",
    "note": "先在廣場拍外觀；圓頂登高與室內拍攝依票務及規定。",
    "source": "https://www.budapestinfo.hu/"
  },
  {
    "id": "parliament-square",
    "city": "Budapest",
    "dates": [
      "2/11"
    ],
    "placeKeys": [
      "Parliament"
    ],
    "name": "國會大廈｜Kossuth Lajos tér",
    "lat": 47.5067,
    "lng": 19.047,
    "direction": "由國會東側廣場往西拍正面與圓頂，選較寬的視角容納立面。",
    "time": "原行程下午",
    "lens": "XF16–55mm",
    "note": "與對岸河岸機位不同；留意警戒線及臨時封閉區。",
    "source": "https://www.budapestinfo.hu/"
  },
  {
    "id": "shoes-river",
    "city": "Budapest",
    "dates": [
      "2/11"
    ],
    "placeKeys": [
      "Shoes"
    ],
    "name": "多瑙河畔之鞋｜紀念碑步道",
    "lat": 47.5038,
    "lng": 19.0448,
    "direction": "在紀念碑旁步道低角度拍鞋雕塑，以河面與布達側作背景。",
    "time": "原行程下午",
    "lens": "X100VI；XF16–55mm",
    "note": "以安靜方式拍攝，不踩踏雕塑，不跨越河岸邊緣。",
    "source": "https://www.budapestinfo.hu/"
  },
  {
    "id": "stephansplatz",
    "city": "Vienna",
    "dates": [
      "2/12"
    ],
    "placeKeys": [
      "Stephansdom"
    ],
    "name": "聖史蒂芬主教座堂｜西側廣場",
    "lat": 48.2081,
    "lng": 16.372,
    "direction": "從西側廣場拍正面；移到西南側可將南塔與屋瓦一起入鏡。",
    "time": "原行程下午",
    "lens": "XF16–55mm；X100VI",
    "note": "站在廣場可通行範圍，室內拍攝規定另依教堂公告。",
    "source": "https://www.wien.info/en/see-do/sights-from-a-to-z"
  },
  {
    "id": "graben-column",
    "city": "Vienna",
    "dates": [
      "2/12"
    ],
    "placeKeys": [
      "Graben"
    ],
    "name": "Graben｜瘟疫紀念柱附近",
    "lat": 48.2086,
    "lng": 16.3694,
    "direction": "從步行街側邊斜拍紀念柱與街道立面，夜景保留店面燈光。",
    "time": "原行程下午／夜景",
    "lens": "X100VI；XF16–55mm",
    "note": "機位為紀念柱附近區域，不擋住步行街主要動線。",
    "source": "https://www.wien.info/en/see-do/sights-from-a-to-z"
  },
  {
    "id": "kohlmarkt-axis",
    "city": "Vienna",
    "dates": [
      "2/12"
    ],
    "placeKeys": [
      "Kohlmarkt"
    ],
    "name": "Kohlmarkt｜街道中段",
    "lat": 48.2086,
    "lng": 16.3673,
    "direction": "沿街道往西南拍霍夫堡圓頂與精品櫥窗。",
    "time": "原行程下午／夜景",
    "lens": "X100VI；XF16–55mm",
    "note": "站在行人區安全位置，不堵商店入口。",
    "source": "https://www.wien.info/en/see-do/sights-from-a-to-z"
  },
  {
    "id": "schonbrunn-court",
    "city": "Vienna",
    "dates": [
      "2/13"
    ],
    "placeKeys": [
      "Schonbrunn"
    ],
    "name": "熊布朗宮｜前庭中軸",
    "lat": 48.1855,
    "lng": 16.313,
    "direction": "從宮殿北側前庭沿中軸往南拍黃色正面與對稱窗列。",
    "time": "原行程上午",
    "lens": "XF16–55mm",
    "note": "標記為前庭區域；不另加登高點，避免壓縮室內參觀時間。",
    "source": "https://www.wien.info/en/livable-vienna/parks-green-spaces/baroque-gardens-palace-parks-340340"
  },
  {
    "id": "belvedere-pond",
    "city": "Vienna",
    "dates": [
      "2/13"
    ],
    "placeKeys": [
      "Belvedere"
    ],
    "name": "美景宮｜上宮南側池畔",
    "lat": 48.1908,
    "lng": 16.3805,
    "direction": "由上宮南側池畔往北拍宮殿正面，水面平靜時取倒影。",
    "time": "原行程下午",
    "lens": "XF16–55mm",
    "note": "二月池水可能結冰、排空或圍閉，不保證倒影；以開放步道站位。",
    "source": "https://www.belvedere.at/en/belvedere/gardens"
  },
  {
    "id": "hofburg-michael",
    "city": "Vienna",
    "dates": [
      "2/13"
    ],
    "placeKeys": [
      "Hofburg"
    ],
    "name": "霍夫堡｜Michaelerplatz 廣場",
    "lat": 48.2076,
    "lng": 16.366,
    "direction": "從廣場往西南拍米迦勒翼圓頂與弧形立面。",
    "time": "原行程下午",
    "lens": "XF16–55mm；X100VI",
    "note": "圖釘為廣場站位區域；留意馬車與行人動線。",
    "source": "https://www.wien.info/en/see-do/sights-from-a-to-z"
  }
],
  places: [
    {"key":"Kosice","name":"科西策老城／聖伊莉莎白大教堂","en":"Košice · Hlavná / St. Elisabeth Cathedral","description":"2/6 午餐停靠城市。Hlavná 老城廣場周邊可見聖伊莉莎白大教堂與聖烏爾班塔；只有停車位置及午餐時間允許時才順拍外觀，不另排入內參觀。","day":4,"tag":"午餐停靠／老城外觀","duration":"午餐時視餘裕順拍","lens":"X100VI／16–55mm","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Ko%C5%A1ice_-_Hlavn%C3%A1_%28Main_Street%29_-_Hlavn%C3%A9_n%C3%A1mestie_%28Main_Square%29_-_View_of_St_Urban_Tower_and_the_Cathedral_of_Saint_Elisabeth_from_the_city_park_%28December_2025%29.jpg/960px-Ko%C5%A1ice_-_Hlavn%C3%A1_%28Main_Street%29_-_Hlavn%C3%A9_n%C3%A1mestie_%28Main_Square%29_-_View_of_St_Urban_Tower_and_the_Cathedral_of_Saint_Elisabeth_from_the_city_park_%28December_2025%29.jpg","imageSource":"https://commons.wikimedia.org/wiki/File:Ko%C5%A1ice_-_Hlavn%C3%A1_%28Main_Street%29_-_Hlavn%C3%A9_n%C3%A1mestie_%28Main_Square%29_-_View_of_St_Urban_Tower_and_the_Cathedral_of_Saint_Elisabeth_from_the_city_park_%28December_2025%29.jpg","images":["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Cathedral_of_St._Elizabeth_in_Ko%C5%A1ice.jpg/960px-Cathedral_of_St._Elizabeth_in_Ko%C5%A1ice.jpg"],"imageSources":["https://commons.wikimedia.org/wiki/File:Cathedral_of_St._Elizabeth_in_Ko%C5%A1ice.jpg"],"map":"https://www.google.com/maps/search/?api=1&query=St+Elisabeth+Cathedral+Kosice"},
    { key:"Szentendre", name:"聖安德烈老城（Szentendre）", en:"Szentendre Old Town", description:"多瑙河畔的巴洛克小鎮，沿巷弄可看彩色立面、藝廊與河岸風景。", day:3, tag:"古城／街拍", duration:"2h", lens:"X100VI／16–55mm", image:"https://upload.wikimedia.org/wikipedia/commons/2/2c/Szentendre_l%C3%A1tk%C3%A9p_a_Duna_fel%C5%91l.jpg", imageSource:"https://commons.wikimedia.org/wiki/File:Szentendre_l%C3%A1tk%C3%A9p_a_Duna_fel%C5%91l.jpg", images:["https://panadea.com/images/st4/utazasi-kalauz-utikonyv/hu-szentendre-magyarorszag-panadea-gb-sd-3044681-0065.jpg","https://cdn.borsonline.hu/2025/12/yBvx6_9cvl0n8Zzh9GbtxPn_R47hU7CovRujGy3h8tE/fit/1200/800/no/1/aHR0cHM6Ly9jbXNjZG4uYXBwLmNvbnRlbnQucHJpdmF0ZS9jb250ZW50L2YwMTEwZTZmYTM2ZTRiNzM5N2RiYmRjNTZjYjBiM2Yw.webp","https://commons.wikimedia.org/wiki/Special:Redirect/file/Szentendre%20l%C3%A1tk%C3%A9p%20a%20Duna%20fel%C5%91l.jpg"], imageSources:["https://www.panadea.com/hu/utazasi-kalauz-utikonyv/europa/magyarorszag/budapest-es-kornyeke/dunakanyar/szentendre/fotogaleria/gal-002","https://www.borsonline.hu/belfoldi-utazas/2026/02/szentendre-latnivaloi-telen-is","https://commons.wikimedia.org/wiki/File:Szentendre_l%C3%A1tk%C3%A9p_a_Duna_fel%C5%91l.jpg"], map:"https://www.google.com/maps/search/?api=1&query=Szentendre+Old+Town" },
    { key:"Buda Castle", name:"布達城堡", en:"Budavári Palota", description:"布達城堡區俯瞰多瑙河與佩斯市區，可逛庭院並欣賞王宮外觀。", day:3, tag:"城堡／城市景", duration:"1h", lens:"16–55mm／Sigma 50–120mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Buda%20Castle.jpg", images:["https://welovebudapest.com/i/d0/teli-budapest_bodis-krisztian_20160104.inbox1560x1170.jpg","https://www.budapestinfo.hu/storage/og-images/u208shpv4fdLwQy2g0GJAhVMLfjBLic0vYpffx0F.jpg","https://peika.bg/pictures/89277_715_.jpg"], imageSources:["https://welovebudapest.com/hely/budai-var","https://www.budapestinfo.hu/vallasi-sokszinuseg-budapesten","https://www.peika.bg/statia/Budapeshta_prez_zimata_toplina_pod_snega_i_svetlini_nad_Dunava_l.a_i.136761.html"], map:"https://www.google.com/maps/search/?api=1&query=Buda+Castle+Budapest" },
    { key:"Matthias Church", name:"馬提亞斯教堂", en:"Mátyás-templom", description:"哥德式教堂以彩色屋瓦和尖塔聞名；室內參觀依開放時間。", day:3, tag:"教堂／建築", duration:"1h", lens:"16–55mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/The%20Matthias%20Church%20%286001573321%29.jpg", images:["https://www.visitesztergom-budapest.hu/storage/photos/shares/Latnivalok/Templomok/Matyas_templom/matyas_templom_4_1.jpg","https://www.budapestinfo.hu/storage/og-images/u208shpv4fdLwQy2g0GJAhVMLfjBLic0vYpffx0F.jpg","https://welovebudapest.com/i/d0/teli-budapest_bodis-krisztian_20160104.inbox1560x1170.jpg"], imageSources:["https://www.visitesztergom-budapest.hu/en/the-church-of-our-lady-of-buda-castle","https://www.budapestinfo.hu/vallasi-sokszinuseg-budapesten","https://welovebudapest.com/hely/budai-var"], map:"https://www.google.com/maps/search/?api=1&query=Matthias+Church+Budapest" },
    { key:"Fisherman's Bastion", name:"漁人堡", en:"Halászbástya", description:"白色觀景廊台可拍國會大廈、多瑙河與佩斯河岸全景。", day:3, tag:"城市全景／黃昏", duration:"1h15", lens:"16–55mm／Sigma 50–120mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Fisherman%20s%20Bastion.jpg", images:["https://www.budapestinfo.hu/storage/og-images/u208shpv4fdLwQy2g0GJAhVMLfjBLic0vYpffx0F.jpg","https://welovebudapest.com/i/d0/teli-budapest_bodis-krisztian_20160104.inbox1560x1170.jpg","https://peika.bg/pictures/89277_715_.jpg"], imageSources:["https://www.budapestinfo.hu/vallasi-sokszinuseg-budapesten","https://welovebudapest.com/hely/budai-var","https://www.peika.bg/statia/Budapeshta_prez_zimata_toplina_pod_snega_i_svetlini_nad_Dunava_l.a_i.136761.html"], map:"https://www.google.com/maps/search/?api=1&query=Fishermans+Bastion+Budapest" },
    {"key":"Strbske","name":"斯特爾布斯克湖區（Štrbské Pleso）","en":"Štrbské Pleso","description":"高塔特拉山湖畔步道，冬季可賞雪山湖景，留意結冰路面。","day":5,"tag":"雪景／山景","duration":"1h45","lens":"16–55mm／Sigma 50–120mm","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Strbske_Pleso_winter.jpg/960px-Strbske_Pleso_winter.jpg","images":["https://commons.wikimedia.org/wiki/Special:Redirect/file/Strbske%20pleso.jpg"],"imageSources":["https://commons.wikimedia.org/wiki/File:Strbske_pleso.jpg"],"map":"https://www.google.com/maps/search/?api=1&query=Strbske+Pleso","imageSource":"https://commons.wikimedia.org/wiki/File:Strbske_Pleso_winter.jpg"},
    { key:"Gubalowka", name:"古巴沃夫卡山", en:"Gubałówka", description:"搭纜車登上山脊，俯瞰 Zakopane 屋頂與塔特拉山群峰。", day:5, tag:"雪景／Tatra", duration:"1h45", lens:"Sigma 50–120mm／16–55mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Zakopane%20Gubalowka%20dron%20%282%29.jpg", images:["https://www.pkl.pl/data/posts/569/570x0px_gubalowka-nowa.jpg","https://sielok.hu/fotodir/lengyelorszag-telen/lengyelorszag-teli-kepek-tatra28.jpg","https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dauto%2Cquality%3D60%2Cwidth%3D450%2Cheight%3D450%2Cdpr%3D2/tour_img/e470ede57c0af50804fa3e9c8beede25e6dc426041df6d821d6bba91124076d7.jpg"], imageSources:["https://www.pkl.pl/the-history-of-pkl.html?setlang=2","https://sielok.hu/fotoalbum/lengyelorszag-telen/kep/5/","https://www.getyourguide.com/tr-tr/krakow-l40/krakow-dan-ozel-sofor-ile-zakopane-ve-termal-banyolar-t934798/"], map:"https://www.google.com/maps/search/?api=1&query=Gubalowka+Zakopane" },
    { key:"Krupowki", name:"克魯波夫基街", en:"Krupówki Street", description:"Zakopane 熱鬧步行街，木造風格店舖、餐館與街頭小吃集中。", day:5, tag:"街拍／夜景", duration:"1h25", lens:"X100VI", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Zakopane%20krup%C3%B3wki.jpg", images:["https://s30.flog.pl/media/foto/13961844_zakopane--krupowki-.jpg","https://d.wpimg.pl/999483127-325828036/Zakopane_ulica_Krupowki_zima_noc-by_Robert_Parma.jpg","https://static.webcamera.pl/camsbig/zakopane-krupowki-street-poland.jpg?nc=1764169738"], imageSources:["https://piotrzegar.flog.pl/wpis/13961844/zakopane--krupowki-","https://turystyka.wp.pl/zakopane-6049946277500033c","https://zakopane-krupowki-street-poland.webcamera.pl/"], map:"https://www.google.com/maps/search/?api=1&query=Krupowki+Zakopane" },
    { key:"Kasprowy", name:"卡斯普羅維峰", en:"Kasprowy Wierch", description:"搭纜車登上塔特拉高山觀景點；風雪可能影響營運，山頂注意保暖。", day:6, tag:"高山／雪景", duration:"3h", lens:"Sigma 50–120mm／16–55mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Kasprowy%20Wierch.jpg", images:["https://i.iplsc.com/000M9LTSPOCOG6KD-C323-F4.webp","https://z-ne.pl/images/20181115_-_PKL_Kasprowy_Wierch_1.jpg","https://ff4.xcdn.pl/i/I18FAAAABRQC7gAknnWJ/8d83d583f3bd6de6cdee2bf949b91692.jpg"], imageSources:["https://kobieta.interia.pl/podroze/news-ferie-w-pelni-a-w-zakopanem-pusto-malopolska-nigdy-zbytnio-n%2CnId%2C22545504","https://z-ne.pl/s%2Cdocid%2C59316%2Ctatry_kolej_linowa_pkl_na_kasprowy_wierch_przygotowana_na_sezon_zimowy.html","https://krakow.gosc.pl/doc/8076024.Zima-na-Podhalu-Kolejka-na-Kasprowy-Wierch-od-7-lutego-bedzie"], map:"https://www.google.com/maps/search/?api=1&query=Kasprowy+Wierch" },
    { key:"Jaszczurowka", name:"亞斯楚羅夫卡木造教堂", en:"Jaszczurówka Chapel", description:"山地木構風格的聖心教堂，可細看木作、屋頂與冬日林景。", day:5, tag:"木造建築", duration:"30m", lens:"16–55mm", image:"https://upload.wikimedia.org/wikipedia/commons/9/97/Kaplica_w_Jaszczur%C3%B3wce_zim%C4%85.jpg", imageSource:"https://commons.wikimedia.org/wiki/File:Kaplica_w_Jaszczur%C3%B3wce_zim%C4%85.jpg", images:["https://upload.wikimedia.org/wikipedia/commons/9/97/Kaplica_w_Jaszczur%C3%B3wce_zim%C4%85.jpg","https://upload.wikimedia.org/wikipedia/commons/5/52/Jaszczur%C3%B3wka_at_Winter.jpg","https://infoturystyka.pl/uploads/seeing/tok308040229395/1666270144.jpg"], imageSources:["https://commons.wikimedia.org/wiki/File:Kaplica_w_Jaszczur%C3%B3wce_zim%C4%85.jpg","https://commons.wikimedia.org/wiki/File:Jaszczur%C3%B3wka_at_Winter.jpg","https://infoturystyka.pl/warto-zobaczyc/1041%2Ckaplica-na-jaszczurowce-zakopane.html"], map:"https://www.google.com/maps/search/?api=1&query=Jaszczurowka+Chapel" },
    { key:"Snowmobile", name:"雪地摩托車體驗（Snowmobile）", en:"Snowmobile / Kościelisko", description:"由業者帶隊的雪地摩托體驗；集合地址、裝備和雪況須事先確認。", day:6, tag:"雪地活動", duration:"2h", lens:"X100VI／16–55mm", image:"https://www.skutery.pl/wp-content/uploads/2023/02/8-1024x683.jpg", images:["https://www.skutery.pl/wp-content/uploads/2023/02/8-1024x683.jpg","https://www.skutery.pl/wp-content/uploads/2023/02/6-1024x683.jpg","https://www.witowextreme.pl/uploads/files/images/58e5f5f432b76.jpg"], imageSources:["https://www.skutery.pl/oferta/","https://www.skutery.pl/","https://www.witowextreme.pl/en/snowmobiles-gallery"], map:"https://www.google.com/maps/search/?api=1&query=Snowmobile+Koscielisko" },
    { key:"Wawel", name:"瓦維爾皇家城堡", en:"Zamek Królewski na Wawelu", description:"波蘭王室城堡與維斯瓦河畔高地；本次 2/9 只選 Castle | Second Floor 的 State Rooms，一個展區看王室大廳、掛毯與天花板，不加私人寓所／寶庫／軍械庫。", day:7, tag:"古蹟／城堡", duration:"1h15＋外觀", lens:"16–55mm／Sigma 50–120mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Wawel%20Castle%20in%20Krakow.jpg", images:["https://pictolic.com/img/2023/heres-a-glimpse-into-a/heres-a-glimpse-into-a-13.jpg","https://ocdn.eu/pulscms-transforms/1/DVik9kpTURBXy82NzE4ODUyMzc0NTk2ZWY3MThkN2U3YWZjOTA2ZDY5YS5qcGeTlQMAzKfNFODNC76TCaY0YmJmOWQGkwXNBLDNAnbeAAGhMAE/krakowski-rynek.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Florianska_street%2C_Old_Town%2C_Krakow%2C_Poland.jpg/1280px-Florianska_street%2C_Old_Town%2C_Krakow%2C_Poland.jpg"], imageSources:["https://pictolic.com/article/heres-a-glimpse-into-a-snowy-journey-throughout-the-medieval-town-of-krakow-captured-with-my-camera-lens.html","https://wiadomosci.onet.pl/krakow/kiedy-drzewa-na-krakowskim-rynku-glownym-padla-data/cmc3s02","https://commons.wikimedia.org/wiki/File:Florianska_street%2C_Old_Town%2C_Krakow%2C_Poland.jpg"], map:"https://www.google.com/maps/search/?api=1&query=Wawel+Castle+Krakow" },
    { key:"WawelCathedral", name:"瓦維爾主教座堂", en:"Katedra Wawelska", description:"波蘭君主加冕與安葬之地，融合多時期建築。本次 2/9 隨 Wawel Hill 看外觀，不入內、不購鐘樓／墓室票，把室內參觀時間留給城堡 State Rooms 與聖母聖殿。", day:7, tag:"教堂／歷史", duration:"外觀約 15–20m", lens:"16–55mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Wawel%20Cathedral%2C%20Krak%C3%B3w.JPG", images:["https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Florianska_street%2C_Old_Town%2C_Krakow%2C_Poland.jpg/1280px-Florianska_street%2C_Old_Town%2C_Krakow%2C_Poland.jpg","https://photos.smugmug.com/Krakow/Krakow-Winter/i-PvqKSnm/0/MvWMNnCbcfvJXJgrfQqLJwnwxFvzZK2J9gPdWXkQJ/L/krakow-winter-snowy-archway-L.jpg","https://parade.com/.image/ODowMDAwMDAwMDAxNDYyMzYz/wonderful-snowy-winter-day-on-old-streets-of-krakow-city-poland.jpg?io=1&profile=w2560"], imageSources:["https://commons.wikimedia.org/wiki/File:Florianska_street%2C_Old_Town%2C_Krakow%2C_Poland.jpg","https://visitkrakow.com/krakow-winter-weekend-itinerary/","https://parade.com/travel/cozy-winter-getaways"], map:"https://www.google.com/maps/search/?api=1&query=Wawel+Cathedral" },
    { key:"Kanonicza", name:"卡諾尼察街", en:"ul. Kanonicza", description:"克拉科夫保存完好的歷史街道，石板路與文藝復興立面適合街拍。", day:7, tag:"街景／黃昏", duration:"30m", lens:"X100VI／16–55mm", image:"https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/483af9109628805.5fd851b49452b.jpg", images:["https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ab825a159090891.63980a91d0568.jpg","https://mir-s3-cdn-cf.behance.net/project_modules/fs/dc8713113668005.602c9a3605fc2.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Florianska_street%2C_Old_Town%2C_Krakow%2C_Poland.jpg/1280px-Florianska_street%2C_Old_Town%2C_Krakow%2C_Poland.jpg"], imageSources:["https://www.behance.net/gallery/159090891/Winter-Krakow-part-I","https://www.behance.net/gallery/113668005/Winter-in-the-center-of-Krakow/modules/649377461","https://commons.wikimedia.org/wiki/File:Florianska_street%2C_Old_Town%2C_Krakow%2C_Poland.jpg"], map:"https://www.google.com/maps/search/?api=1&query=Kanonicza+Street+Krakow" },
    { key:"MainMarket", name:"克拉科夫中央集市廣場", en:"Rynek Główny", description:"中世紀廣場，周圍串連聖母聖殿、市政塔與紡織會館。", day:7, tag:"廣場／夜景", duration:"45m", lens:"16–55mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Krakow%20Main%20Square%20%288125539580%29.jpg", images:["https://ocdn.eu/pulscms-transforms/1/DVik9kpTURBXy82NzE4ODUyMzc0NTk2ZWY3MThkN2U3YWZjOTA2ZDY5YS5qcGeTlQMAzKfNFODNC76TCaY0YmJmOWQGkwXNBLDNAnbeAAGhMAE/krakowski-rynek.jpg","https://photos.smugmug.com/Krakow/Krakow-Winter/i-PvqKSnm/0/MvWMNnCbcfvJXJgrfQqLJwnwxFvzZK2J9gPdWXkQJ/L/krakow-winter-snowy-archway-L.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Florianska_street%2C_Old_Town%2C_Krakow%2C_Poland.jpg/1280px-Florianska_street%2C_Old_Town%2C_Krakow%2C_Poland.jpg"], imageSources:["https://wiadomosci.onet.pl/krakow/kiedy-drzewa-na-krakowskim-rynku-glownym-padla-data/cmc3s02","https://visitkrakow.com/krakow-winter-weekend-itinerary/","https://commons.wikimedia.org/wiki/File:Florianska_street%2C_Old_Town%2C_Krakow%2C_Poland.jpg"], map:"https://www.google.com/maps/search/?api=1&query=Rynek+Glowny+Krakow" },
    { key:"StMary", name:"克拉科夫聖母聖殿", en:"Bazylika Mariacka", description:"主廣場雙塔哥德式地標，Veit Stoss 木雕祭壇是入內重點。本次 2/9 16:00–16:45 參觀室內；到 Plac Mariacki 7 購票，由南側遊客入口進入。二月不排登塔，宗教活動與 2027 時段再確認。", day:7, tag:"教堂／廣場", duration:"45m", lens:"16–55mm", image:"https://upload.wikimedia.org/wikipedia/commons/a/a1/Church_of_the_Assumption_of_the_Blessed_Virgin_Mary%2C_Winter%2C_Mariacki_square%2C_Old_Town%2C_Krak%C3%B3w%2C_Poland.jpg", images:["https://parade.com/.image/ODowMDAwMDAwMDAxNDYyMzYz/wonderful-snowy-winter-day-on-old-streets-of-krakow-city-poland.jpg?io=1&profile=w2560","https://ocdn.eu/pulscms-transforms/1/DVik9kpTURBXy82NzE4ODUyMzc0NTk2ZWY3MThkN2U3YWZjOTA2ZDY5YS5qcGeTlQMAzKfNFODNC76TCaY0YmJmOWQGkwXNBLDNAnbeAAGhMAE/krakowski-rynek.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Florianska_street%2C_Old_Town%2C_Krakow%2C_Poland.jpg/1280px-Florianska_street%2C_Old_Town%2C_Krakow%2C_Poland.jpg"], imageSources:["https://parade.com/travel/cozy-winter-getaways","https://wiadomosci.onet.pl/krakow/kiedy-drzewa-na-krakowskim-rynku-glownym-padla-data/cmc3s02","https://commons.wikimedia.org/wiki/File:Florianska_street%2C_Old_Town%2C_Krakow%2C_Poland.jpg"], map:"https://www.google.com/maps/search/?api=1&query=St+Marys+Basilica+Krakow" },
    { key:"ClothHall", name:"克拉科夫紡織會館", en:"Sukiennice", description:"廣場中央的文藝復興紡織會館，拱廊與長廊適合拍建築細節。", day:7, tag:"建築／夜景", duration:"30m", lens:"16–55mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Krak%C3%B3w%20-%20Sukiennice%20%26%20Wie%C5%BCa%20Ratuszowa.jpg", images:["https://ocdn.eu/pulscms-transforms/1/DVik9kpTURBXy82NzE4ODUyMzc0NTk2ZWY3MThkN2U3YWZjOTA2ZDY5YS5qcGeTlQMAzKfNFODNC76TCaY0YmJmOWQGkwXNBLDNAnbeAAGhMAE/krakowski-rynek.jpg","https://i.pinimg.com/736x/17/5e/9b/175e9bcc786d9a1de4538c116bc9c06b.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Florianska_street%2C_Old_Town%2C_Krakow%2C_Poland.jpg/1280px-Florianska_street%2C_Old_Town%2C_Krakow%2C_Poland.jpg"], imageSources:["https://wiadomosci.onet.pl/krakow/kiedy-drzewa-na-krakowskim-rynku-glownym-padla-data/cmc3s02","https://in.pinterest.com/pin/696439529904253598/","https://commons.wikimedia.org/wiki/File:Florianska_street%2C_Old_Town%2C_Krakow%2C_Poland.jpg"], map:"https://www.google.com/maps/search/?api=1&query=Cloth+Hall+Krakow" },
    { key:"Parliament", name:"匈牙利國會大廈", en:"Országház", description:"新哥德式國會建築沿多瑙河展開，可在廣場近拍或河對岸取景。", day:9, tag:"建築／河岸", duration:"2h", lens:"16–55mm／Sigma 50–120mm", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/HungarianParliamentBuilding.jpg", images:["https://peika.bg/pictures/89277_715_.jpg","https://amadeus-rivercruises.com/fileadmin/_processed_/4/b/csm__c_Budapest_Winter_LU793746169_851c8df2a4.webp","https://www.reisewelt.at/fileadmin/_processed_/9/f/csm_Budapest_im_Winter_afa913ef6e.png"], imageSources:["https://www.peika.bg/statia/Budapeshta_prez_zimata_toplina_pod_snega_i_svetlini_nad_Dunava_l.a_i.136761.html","https://www.amadeus-rivercruises.com/river-cruises/detail/2026/new-years-eve-cruise-on-the-danube-7-days.html","https://www.reisewelt.at/de/reisen/rv/silvester-auf-der-donau-flusskreuzfahrt"], map:"https://www.google.com/maps/search/?api=1&query=Hungarian+Parliament+Budapest" },
    { key:"Shoes", name:"多瑙河畔之鞋紀念碑", en:"Shoes on the Danube Bank", description:"河岸紀念二戰期間遇害的猶太人，請以安靜、尊重的方式參觀。", day:9, tag:"紀念地／河岸", duration:"30m", lens:"X100VI", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Hungary-02400%20-%20Shoes%20on%20the%20Danube%20%2832460224482%29.jpg", images:["https://www.reisewelt.at/fileadmin/_processed_/9/f/csm_Budapest_im_Winter_afa913ef6e.png","https://peika.bg/pictures/89277_715_.jpg","https://www.amadeus-rivercruises.com/fileadmin/_processed_/4/b/csm__c_Budapest_Winter_LU793746169_851c8df2a4.webp"], imageSources:["https://www.reisewelt.at/de/reisen/rv/silvester-auf-der-donau-2026.html","https://www.peika.bg/statia/Budapeshta_prez_zimata_toplina_pod_snega_i_svetlini_nad_Dunava_l.a_i.136761.html","https://www.amadeus-rivercruises.com/river-cruises/detail/2026/new-years-eve-cruise-on-the-danube-7-days.html"], map:"https://www.google.com/maps/search/?api=1&query=Shoes+on+the+Danube+Bank" },
    { key:"Basilica", name:"布達佩斯聖史蒂芬大教堂", en:"Szent István Bazilika", description:"布達佩斯重要教堂，圓頂可登高看市景；留意服裝與禮拜時段。", day:9, tag:"教堂／市中心", duration:"1h", lens:"16–55mm", image:"https://www.obletsvet.sk/images/e4c7ca00-75ba-419c-968c-76d85b2f7d50/bazilika-svateho-stepena--1080x1080.jpg", images:["https://shewandersabroad.com/wp-content/uploads/2026/01/St.-Stephens-Basilica-Budapest-8.jpg","https://www.rivieratravel.co.uk/sites/default/files/assetbank/RCY_budapest-snow-GettyImages-1087617696.jpg","https://img-fotki.yandex.ru/get/4422/3134664.5/0_7bdf0_65bf671f_-1-XL.jpg"], imageSources:["https://shewandersabroad.com/things-to-do-in-budapest-in-winter/","https://tourhub.co/tour/riviera-travel/new-year-on-the-danube-river-cruise-ms-riviera-radiance/rcyn","https://ru-travel.livejournal.com/20627487.html"], map:"https://www.google.com/maps/search/?api=1&query=St+Stephens+Basilica+Budapest" },
    { key:"Vaci", name:"瓦茨街", en:"Váci Street", description:"市中心購物步行街，連接中央市場與廣場，適合沿途街拍。", day:9, tag:"街拍／商店", duration:"1h", lens:"X100VI", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/V%C3%A1ci_utca.jpg", imageSource:"https://commons.wikimedia.org/wiki/File:V%C3%A1ci_utca.jpg", images:["https://hips.hearstapps.com/hmg-prod/images/illuminated-cityscape-of-zrinyi-street-in-budapest-royalty-free-image-1607319848.?crop=0.66635xw%3A1xh%3Bcenter%2Ctop","https://static.liligo.com/img/cms/content-gallery/inspirational-new-year/istock-ny-budapest/classic/320/image%4012.0.webp","https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/12/24/5f15f0773e79f.jpeg"], imageSources:["https://www.redbookmag.com/life/g34886089/winter-scenes-around-the-world/","https://www.liligo.fr/ou-partir-au-nouvel-an","https://www.lavanguardia.com/ocio/viajes/20191229/472464052759/budapest-historia-contemporanea-orillas-del-danubio.html"], map:"https://www.google.com/maps/search/?api=1&query=Vaci+utca+Budapest" },
    { key:"CentralMarket", name:"布達佩斯中央市場大廳", en:"Nagycsarnok", description:"大型室內市場，可賞鐵構和彩色屋頂，也能找匈牙利食材與小吃。", day:9, tag:"市場／建築", duration:"1h30", lens:"16–55mm／X100VI", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Central%20Market%20Hall%20Budapest%201.jpg", images:["https://commons.wikimedia.org/wiki/Special:Redirect/file/Central%20Market%20Hall%20Budapest%201.jpg","https://www.rivieratravel.co.uk/sites/default/files/assetbank/RCY_budapest-snow-GettyImages-1087617696.jpg","https://img-fotki.yandex.ru/get/4422/3134664.5/0_7bdf0_65bf671f_-1-XL.jpg"], imageSources:["https://commons.wikimedia.org/wiki/File:Central_Market_Hall_Budapest_1.jpg","https://tourhub.co/tour/riviera-travel/new-year-on-the-danube-river-cruise-ms-riviera-radiance/rcyn","https://ru-travel.livejournal.com/20627487.html"], map:"https://www.google.com/maps/search/?api=1&query=Central+Market+Hall+Budapest" },
    { key:"ChainBridge", name:"塞切尼鏈橋", en:"Széchenyi Chain Bridge", description:"連接布達與佩斯的多瑙河地標，黃昏可拍橋體與城堡山燈景。", day:9, tag:"藍調／夜景", duration:"1h", lens:"16–55mm／X100VI", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Chain%20Bridge%20in%20Budapest.jpg", images:["https://peika.bg/pictures/89277_715_.jpg","https://traveladvo.com/wp-content/uploads/2019/11/budapest.jpg","https://www.amadeus-rivercruises.com/fileadmin/_processed_/4/b/csm__c_Budapest_Winter_LU793746169_851c8df2a4.webp"], imageSources:["https://www.peika.bg/statia/Budapeshta_prez_zimata_toplina_pod_snega_i_svetlini_nad_Dunava_l.a_i.136761.html","https://traveladvo.com/best-5-places-to-travel-in-december-travel-traveladvo-best-december/","https://www.amadeus-rivercruises.com/river-cruises/detail/2026/new-years-eve-cruise-on-the-danube-7-days.html"], map:"https://www.google.com/maps/search/?api=1&query=Chain+Bridge+Budapest" },
    { key:"Schonbrunn", name:"熊布朗宮", en:"Schloss Schönbrunn", description:"哈布斯堡夏宮；宮殿室內與花園分開安排，冬季依開放時間取捨。", day:11, tag:"皇宮／建築", duration:"2h30", lens:"16–55mm", image:"https://www.avanse.com/blogs/images/Blog-10july.jpg", images:["https://everythingaboutvienna.com/wp-content/uploads/2025/03/best-time-to-visit-vienna-winter-vme_4319.webp","https://www.viaggiaconalice.it/images/blog/2017/Mini-guida/Vienna/citt-europee-mini-guida-vienna15.jpg","https://www.alaturka.info/images/austria/vienna/schoenbrunn-im-winter-02.jpg"], imageSources:["https://everythingaboutvienna.com/best-time-to-visit-vienna/","https://www.viaggiaconalice.it/i-nostri-viaggi/europa/terzo-giorno-il-castello-di-shonbrunn-e-il-palazzo-dell-hofburg","https://www.alaturka.info/en/austria/vienna/3690-schoenbrunn-palace-the-roman-ruin-and-the-palm-tree-houses"], map:"https://www.google.com/maps/search/?api=1&query=Schonbrunn+Palace" },
    { key:"Belvedere", name:"美景宮", en:"Schloss Belvedere", description:"巴洛克宮殿群，以對稱庭園和藝術收藏聞名，可拍水池倒影。", day:11, tag:"宮殿／倒影", duration:"2h", lens:"16–55mm", image:"https://images.gowithguide.com/gowithguide/cities/4501/101127.jpg", images:["https://penguin-199a3.kxcdn.com/wp-content/uploads/2020/01/where-to-stay-in-vienna-austria-landstrasse-district-3.jpg","https://tabithaschr.com/wp-content/uploads/2020/01/Belvedere-Palace-Snowy-in-winter--683x1024.jpg","https://pimg.1px.tw/moonish06/1702657764-2402649260-g.jpg"], imageSources:["https://www.penguinandpia.com/en/where-to-stay-in-vienna/","https://tabithaschr.com/30-photos-that-will-inspire-you-to-visit-vienna-in-winter/","https://moonish06.pixnet.net/blog/posts/9575982336"], map:"https://www.google.com/maps/search/?api=1&query=Belvedere+Palace+Vienna" },
    { key:"Hofburg", name:"霍夫堡皇宮", en:"Hofburg Wien", description:"哈布斯堡冬宮群，外圍廣場與宏偉立面適合散步拍照。", day:11, tag:"宮殿／廣場", duration:"1h", lens:"16–55mm", image:"https://images.musement.com/cover/0165/16/thumb_16415080_cover_header.jpg?fit=crop&h=630&q=95&w=1200", images:["https://tabicoffret.com/uploads/AT20171202_1.jpg","https://www.burghauptmannschaft.at/dam/jcr%3A7858edf0-7b6f-4f27-9065-ed689fbbc551/HBW_Reichskanzleitrakt.jpg","https://upload.wikimedia.org/wikipedia/commons/6/6b/The_Hofburg_Winter_Palace_in_Vienna%2C_Austria._%2816556035096%29.jpg"], imageSources:["https://tabicoffret.com/article/73956/","https://www.burghauptmannschaft.at/Liegenschaften/Liegenschaften/Wien/Hofburg-Wien-/Reichskanzleitrakt.html","https://commons.wikimedia.org/wiki/File:The_Hofburg_Winter_Palace_in_Vienna,_Austria._(16556035096).jpg"], map:"https://www.google.com/maps/search/?api=1&query=Hofburg+Vienna" },
    { key:"Stephansdom", name:"維也納聖史蒂芬主教座堂", en:"St. Stephen’s Cathedral", description:"維也納市中心哥德式主教座堂，以彩色屋瓦與南塔聞名。", day:10, tag:"教堂／城市中心", duration:"45m", lens:"16–55mm／12mm", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Wien_-_Stephansdom_%281%29.JPG/800px-Wien_-_Stephansdom_%281%29.JPG", images:["https://i.pinimg.com/originals/c2/7d/d5/c27dd57399a8b514f05d0605fec36c17.jpg","https://i.pinimg.com/originals/dd/5a/f5/dd5af558c0398bca3c02ccbfc922d003.jpg","https://fuutazbsb.filerobot.com/Freigegeben/Winterlicher-Michaelerplatz-in-der-Wiener-Innenstadt_Oesterreich-Werbung_sommertageblog.jpeg"], imageSources:["https://www.pinterest.com/pin/snowy-vienna-is-very-beautiful-follow-us-vienna_go-vienna_go-ph-by-natalie_wien--80994493284645506/","https://ca.pinterest.com/pin/snow-falling-vienna-austria-by-greg-sideris-gregsideris-on-instagram--700380179581940827/","https://www.austria.info/it/luoghi/hofburg/"], map:"https://www.google.com/maps/search/?api=1&query=Stephansdom+Vienna" },
    { key:"Graben", name:"格拉本大街", en:"Graben", description:"市中心歷史步行街，巴洛克瘟疫紀念柱與典雅店面是主要看點。", day:10, tag:"街景／夜景", duration:"1h", lens:"X100VI", image:"https://vienna.net/wp-content/uploads/2022/09/Wien_-_Graben_2.jpg", images:["https://i.pinimg.com/originals/dd/5a/f5/dd5af558c0398bca3c02ccbfc922d003.jpg","https://i.pinimg.com/originals/c2/7d/d5/c27dd57399a8b514f05d0605fec36c17.jpg","https://www.ganz-wien.at/fileadmin/_processed_/5/7/xcsm_hofburg-heldenplatz-wien_tourismus-willfried_gredler-oxenbauer_511677032b.jpg.pagespeed.ic.ojmWBFFNnm.jpg"], imageSources:["https://ca.pinterest.com/pin/snow-falling-vienna-austria-by-greg-sideris-gregsideris-on-instagram--700380179581940827/","https://www.pinterest.com/pin/snowy-vienna-is-very-beautiful-follow-us-vienna_go-vienna_go-ph-by-natalie_wien--80994493284645506/","https://www.ganz-wien.at/wien/sehenswuerdigkeiten/hofburg-wien-rundgang-durch-die-kaiserliche-residenz.html"], map:"https://www.google.com/maps/search/?api=1&query=Graben+Vienna" },
    { key:"Kohlmarkt", name:"科爾市場街", en:"Kohlmarkt", description:"連接霍夫堡與格拉本的精品街，可欣賞歷史立面與夜間櫥窗。", day:10, tag:"精品街／夜景", duration:"30m", lens:"X100VI", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Wien%20Kohlmarkt.jpg", imageSource:"https://commons.wikimedia.org/wiki/File:Wien_Kohlmarkt.jpg", images:["https://fuutazbsb.filerobot.com/Freigegeben/Winterlicher-Michaelerplatz-in-der-Wiener-Innenstadt_Oesterreich-Werbung_sommertageblog.jpeg","https://assets.st-note.com/production/uploads/images/25481966/rectangle_large_type_2_42c8d47f67717e25c5ada99735281651.jpg?width=1280","https://i.pinimg.com/originals/c2/7d/d5/c27dd57399a8b514f05d0605fec36c17.jpg"], imageSources:["https://www.austria.info/it/luoghi/hofburg/","https://note.com/hyorowien/n/n615f91d4aa3b","https://www.pinterest.com/pin/snowy-vienna-is-very-beautiful-follow-us-vienna_go-vienna_go-ph-by-natalie_wien--80994493284645506/"], map:"https://www.google.com/maps/search/?api=1&query=Kohlmarkt+Vienna" },
    {"key":"DanubeCruise","name":"多瑙河夜景遊船","en":"Danube Legend · Legenda","description":"2/5 晚上規劃約一小時觀光船，從河上看國會大廈、鏈橋與城堡山。首選 Legenda Dock 7；2027 時段及票價待確認，尚未購票。","day":3,"tag":"夜景／遊船／待購票","duration":"約 1h＋報到緩衝","lens":"16–55mm／X100VI；手持提高快門","image":"https://commons.wikimedia.org/wiki/Special:Redirect/file/HungarianParliamentBuilding.jpg","map":"https://www.google.com/maps/search/?api=1&query=Legenda+Dock+7+Jane+Haining+rakpart+Budapest"}
  ]
};

// Representative photos: reference images do not change bookings, routes, or meal choices.
TRIP_DATA.timelinePhotoCatalog = {
  "Scoot": {
    "key": "Scoot",
    "name": "酷航 Boeing 787（航空公司參考，實際機型依航班）",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/(SGP-Singapore)_Scoot_Boeing_787-9_9V-OJG_%40_WSSS_2024-02-09_(1).jpg/960px-(SGP-Singapore)_Scoot_Boeing_787-9_9V-OJG_%40_WSSS_2024-02-09_(1).jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:(SGP-Singapore)_Scoot_Boeing_787-9_9V-OJG_%40_WSSS_2024-02-09_(1).jpg",
    "credit": "S5A-0043",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0/"
  },
  "VIE": {
    "key": "VIE",
    "name": "維也納機場 VIE（機場外觀參考）",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Vienna_Airport_VIE_2018.jpeg/960px-Vienna_Airport_VIE_2018.jpeg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Vienna_Airport_VIE_2018.jpeg",
    "credit": "JTs",
    "license": "CC0 1.0",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  "TPE": {
    "key": "TPE",
    "name": "桃園機場第一航廈（航廈場景參考）",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/%E6%A1%83%E5%9C%92%E5%9C%8B%E9%9A%9B%E6%A9%9F%E5%A0%B4%E7%AC%AC%E4%B8%80%E8%88%AA%E5%BB%88%E5%87%BA%E5%A2%83%E5%A4%A7%E5%BB%B3.jpg/960px-%E6%A1%83%E5%9C%92%E5%9C%8B%E9%9A%9B%E6%A9%9F%E5%A0%B4%E7%AC%AC%E4%B8%80%E8%88%AA%E5%BB%88%E5%87%BA%E5%A2%83%E5%A4%A7%E5%BB%B3.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:%E6%A1%83%E5%9C%92%E5%9C%8B%E9%9A%9B%E6%A9%9F%E5%A0%B4%E7%AC%AC%E4%B8%80%E8%88%AA%E5%BB%88%E5%87%BA%E5%A2%83%E5%A4%A7%E5%BB%B3.jpg",
    "credit": "LookJamesWu",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  "Railjet": {
    "key": "Railjet",
    "name": "ÖBB Railjet／Wien Hbf 月台（車型與車站參考）",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/%C3%96BB_Railjet_at_Wien_Hauptbahnhof.jpg/960px-%C3%96BB_Railjet_at_Wien_Hauptbahnhof.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:%C3%96BB_Railjet_at_Wien_Hauptbahnhof.jpg",
    "credit": "JIP",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  "HEV": {
    "key": "HEV",
    "name": "H5 HÉV 列車／Szentendre 車站（參考）",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Szentendre%2C_H%C3%89V_%C3%A1llom%C3%A1s.jpg/960px-Szentendre%2C_H%C3%89V_%C3%A1llom%C3%A1s.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Szentendre%2C_H%C3%89V_%C3%A1llom%C3%A1s.jpg",
    "credit": "Christo",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  "GubalowkaRail": {
    "key": "GubalowkaRail",
    "name": "Gubałówka 登山纜車（歷史車輛照片參考）",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Zakopane_-_skiing_(86).JPG/960px-Zakopane_-_skiing_(86).JPG",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Zakopane_-_skiing_(86).JPG",
    "credit": "Jonathanawhite",
    "license": "Public domain",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  "Kuznice": {
    "key": "Kuznice",
    "name": "Kuźnice 纜車下站（站體參考）",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Zakopane_Kuznice_dolna_stacja_2.jpg/960px-Zakopane_Kuznice_dolna_stacja_2.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Zakopane_Kuznice_dolna_stacja_2.jpg",
    "credit": "Andrzej Otrębski",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  "Gulyas": {
    "key": "Gulyas",
    "name": "Gulyás 匈牙利燉牛肉湯（餐點參考）",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Guly%C3%A1s_soup.jpg/960px-Guly%C3%A1s_soup.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Guly%C3%A1s_soup.jpg",
    "credit": "Top Budapest",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0/"
  },
  "Paprikash": {
    "key": "Paprikash",
    "name": "Paprikás csirke 紅椒燉雞（餐點參考）",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Paprikahuhn.jpg/960px-Paprikahuhn.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Paprikahuhn.jpg",
    "credit": "Kobako",
    "license": "CC BY-SA 2.5",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  "Halusky": {
    "key": "Halusky",
    "name": "Bryndzové halušky 羊乳起司麵疙瘩（餐點參考）",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bryndzov%C3%A9_halu%C5%A1ky_so_slaninou.jpg/960px-Bryndzov%C3%A9_halu%C5%A1ky_so_slaninou.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Bryndzov%C3%A9_halu%C5%A1ky_so_slaninou.jpg",
    "credit": "Gregory finster",
    "license": "CC0 1.0",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  "Pierogi": {
    "key": "Pierogi",
    "name": "Pierogi 波蘭餃子（餐點參考）",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/20250426_Pierogi.jpg/960px-20250426_Pierogi.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:20250426_Pierogi.jpg",
    "credit": "Rakoon",
    "license": "CC0 1.0",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  "Bigos": {
    "key": "Bigos",
    "name": "Bigos 燉酸菜肉（餐點參考）",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Bigos_in_bread.jpg/960px-Bigos_in_bread.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Bigos_in_bread.jpg",
    "credit": "Ratoncito Perez",
    "license": "CC0 1.0",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  "Schnitzel": {
    "key": "Schnitzel",
    "name": "Wiener Schnitzel 維也納炸肉排（餐點參考）",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Wiener_Schnitzel.jpg/960px-Wiener_Schnitzel.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Wiener_Schnitzel.jpg",
    "credit": "Leipnizkeks",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  "Tafelspitz": {
    "key": "Tafelspitz",
    "name": "Tafelspitz 水煮牛肉（餐點參考）",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tafelspitz_of_veal%2C_Vienna.jpg/960px-Tafelspitz_of_veal%2C_Vienna.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Tafelspitz_of_veal%2C_Vienna.jpg",
    "credit": "Gerda Arendt",
    "license": "CC0 1.0",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  "Presov": {
    "key": "Presov",
    "name": "Prešov 冬季市景（途經城市參考，不另加停留）",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Presov10Slovakia31.JPG/960px-Presov10Slovakia31.JPG",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Presov10Slovakia31.JPG",
    "credit": "Ing. Mgr. Jozef Kotulič",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  "Changi": {
    "key": "Changi",
    "name": "樟宜機場候機區（場景參考）",
    "image": "https://changiairport.scene7.com/is/image/changiairport/THA%20photo%3A7by5?hei=679&qlt=85%2C0&resMode=sharp2&wid=950",
    "imageSource": "https://www.changiairport.com/en/corporate/our-media-hub/publications/changi-journeys.how-changi-creates-a-safe-but-positive-transit-experience.2020.changi-experience.html",
    "credit": "Changi Airport"
  },
  "Keleti": {
    "key": "Keleti",
    "name": "Budapest-Keleti 車站外觀（車站參考）",
    "image": "https://bkk.hu/static/content/2025/08/keletipu_2.webp",
    "imageSource": "https://bkk.hu/hirek/2025/08/expresszvillamossal-es-jaratsuritesekkel-segiti-a-bkk-a-kozlekedoket-a-keleti-palyaudvar-lezarasa-idejen.15164/",
    "credit": "BKK"
  },
  "ICBudapest": {
    "key": "ICBudapest",
    "name": "InterContinental Budapest 外觀",
    "image": "https://cdn.prod.website-files.com/64d62cbfcfb74dd7d238dcf7/693ac8ba53893abcd8be054d_InterContinental%20Budapest_exterior_small.jpg",
    "imageSource": "https://www.budapest.intercontinental.com/en/home",
    "credit": "InterContinental Budapest"
  },
  "Panorama": {
    "key": "Panorama",
    "name": "Hotel Panorama 冬季外觀",
    "image": "https://cdn.prod.website-files.com/66fad8b9c90f9ed155a02ce0/6714d46dd76a8f4aa37af8f6_DSC09189.webp",
    "imageSource": "https://www.hotelpanorama.sk/",
    "credit": "Hotel Panorama"
  },
  "Cristina": {
    "key": "Cristina",
    "name": "Aparthotel Cristina 外觀",
    "image": "https://wa-uploads.profitroom.com/aparthotelcristina/580x460/17792725148316_dsc8178.jpg",
    "imageSource": "https://aparthotelcristina.pl/en",
    "credit": "Aparthotel Cristina"
  },
  "HIKrakow": {
    "key": "HIKrakow",
    "name": "Holiday Inn Krakow City Centre 外觀",
    "image": "https://digital.ihg.com/is/image/ihg/holiday-inn-krakow-4037544566-2x1?wid=960",
    "imageSource": "https://www.ihg.com/holidayinn/hotels/us/en/krakow/krkcc/hoteldetail",
    "credit": "IHG"
  },
  "ICVienna": {
    "key": "ICVienna",
    "name": "InterContinental Vienna 外觀",
    "image": "https://digital.ihg.com/is/image/ihg/intercontinental-vienna-6114070505-16x9?wid=960",
    "imageSource": "https://www.ihg.com/intercontinental/hotels/us/en/vienna/vieha/hoteldetail",
    "credit": "IHG"
  },
  "Moskole": {
    "key": "Moskole",
    "name": "Moskole 高地馬鈴薯餅（餐點參考）",
    "image": "https://www.dietamojapasja.com/wp-content/uploads/2021/10/Moskole-przepis-768x576.jpg",
    "imageSource": "https://www.dietamojapasja.com/2021/10/moskole-przepis.html",
    "credit": "Dieta Moja Pasja"
  },
  "Poprad": {
    "key": "Poprad",
    "name": "Poprad 冬季市景（途經城市參考，不另加停留）",
    "image": "https://www.visitpoprad.sk/wp-content/uploads/2020/07/0Q2A7870-1200x800.jpg",
    "imageSource": "https://www.visitpoprad.sk/tipy-na-vylety-v-zime/",
    "credit": "Visit Poprad"
  },
  "ParliamentFebruaryNight": {
    "key": "ParliamentFebruaryNight",
    "name": "多瑙河與國會大廈 · 二月亮燈夜景",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Danube_and_Hungarian_Parliament_Building_by_night.jpg/960px-Danube_and_Hungarian_Parliament_Building_by_night.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Danube_and_Hungarian_Parliament_Building_by_night.jpg",
    "credit": "Florian Fèvre",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  "ParliamentBlue": {
    "key": "ParliamentBlue",
    "name": "多瑙河上的國會大廈 · 藍調光線參考",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Hungarian_Parliament_Building_from_the_Danube_during_blue_hour.jpg/960px-Hungarian_Parliament_Building_from_the_Danube_during_blue_hour.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Hungarian_Parliament_Building_from_the_Danube_during_blue_hour.jpg",
    "credit": "Vermont",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  "BudaTwilight": {
    "key": "BudaTwilight",
    "name": "布達城堡 · 傍晚亮燈參考",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Buda_Castle_at_night_20180824.jpg/960px-Buda_Castle_at_night_20180824.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Buda_Castle_at_night_20180824.jpg",
    "credit": "Suicasmo",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  "KeletiNight": {
    "key": "KeletiNight",
    "name": "Budapest-Keleti 車站外觀 · 夜間參考",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Keleti_p%C3%A1lyaudvar_%C3%A9jszaka_-_Budapest.jpg/960px-Keleti_p%C3%A1lyaudvar_%C3%A9jszaka_-_Budapest.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Keleti_p%C3%A1lyaudvar_%C3%A9jszaka_-_Budapest.jpg",
    "credit": "Civertan",
    "license": "CC BY-SA 2.5",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  "KrupowkiFebruary": {
    "key": "KrupowkiFebruary",
    "name": "Krupówki · 二月雪夜街景",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Zakopane_ulica_Krupowki_zima_noc-by_Robert_Parma.jpg/960px-Zakopane_ulica_Krupowki_zima_noc-by_Robert_Parma.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Zakopane_ulica_Krupowki_zima_noc-by_Robert_Parma.jpg",
    "credit": "Robert Parma",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  "KasprowyWinter": {
    "key": "KasprowyWinter",
    "name": "Kasprowy Wierch 山頂 · 冬季白天雪景",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/20161230_Kasprowy_Wierch_2612.jpg/960px-20161230_Kasprowy_Wierch_2612.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:20161230_Kasprowy_Wierch_2612.jpg",
    "credit": "Jakub Hałun",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  "WawelWinter": {
    "key": "WawelWinter",
    "name": "瓦維爾皇家城堡 · 冬季白天外觀",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Wawel_Royal_Castle_Krakow_Poland_by_blaat.jpg/960px-Wawel_Royal_Castle_Krakow_Poland_by_blaat.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Wawel_Royal_Castle_Krakow_Poland_by_blaat.jpg",
    "credit": "ATom",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  "WawelHillWinter": {
    "key": "WawelHillWinter",
    "name": "瓦維爾山丘 · 冬季白天外觀",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Wzg%C3%B3rze_wawelskie_zim%C4%85.jpg/960px-Wzg%C3%B3rze_wawelskie_zim%C4%85.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Wzg%C3%B3rze_wawelskie_zim%C4%85.jpg",
    "credit": "Christinagrabelusshaikh",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  "SchonbrunnWinter": {
    "key": "SchonbrunnWinter",
    "name": "熊布朗宮 · 冬季白天外觀",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/01_Schloss_Sch%C3%B6nbrunn%2C_Winter_2023.jpg/960px-01_Schloss_Sch%C3%B6nbrunn%2C_Winter_2023.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:01_Schloss_Sch%C3%B6nbrunn%2C_Winter_2023.jpg",
    "credit": "Michellethewise",
    "license": "CC0 1.0",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  "SchonbrunnGardenWinter": {
    "key": "SchonbrunnGardenWinter",
    "name": "熊布朗宮與花園 · 冬季白天",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/1130_Schloss_Sch%C3%B6nbrunn_im_Schnee_IMG_1807.jpg/960px-1130_Schloss_Sch%C3%B6nbrunn_im_Schnee_IMG_1807.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:1130_Schloss_Sch%C3%B6nbrunn_im_Schnee_IMG_1807.jpg",
    "credit": "Ewald Judt",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  "StephansdomNight": {
    "key": "StephansdomNight",
    "name": "維也納聖史蒂芬主教座堂 · 入夜亮燈參考",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Wien_Stephansdom_Nacht-03.jpg/960px-Wien_Stephansdom_Nacht-03.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Wien_Stephansdom_Nacht-03.jpg",
    "credit": "Radler59",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  "KohlmarktNight": {
    "key": "KohlmarktNight",
    "name": "維也納 Kohlmarkt · 入夜光線參考",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Kohlmarkt_Wien_at_night_2022-08-08_04.jpg/960px-Kohlmarkt_Wien_at_night_2022-08-08_04.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Kohlmarkt_Wien_at_night_2022-08-08_04.jpg",
    "credit": "Leonhard Lenz",
    "license": "CC0 1.0",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  "ChainBridgeWinterNight": {
    "key": "ChainBridgeWinterNight",
    "name": "塞切尼鏈橋 · 冬夜亮燈與河上霧景",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/20231223.Kettenbr%C3%BCcke_Budapest.-015.jpg/960px-20231223.Kettenbr%C3%BCcke_Budapest.-015.jpg",
    "imageSource": "https://commons.wikimedia.org/wiki/File:20231223.Kettenbr%C3%BCcke_Budapest.-015.jpg",
    "credit": "Bybbisch94",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  "BudaWinter": {
    "key": "BudaWinter",
    "name": "布達城堡山 · 冬季白天市景",
    "image": "https://welovebudapest.com/i/d0/teli-budapest_bodis-krisztian_20160104.inbox1560x1170.jpg",
    "imageSource": "https://welovebudapest.com/hely/budai-var",
    "credit": "Bódis Krisztián／We Love Budapest"
  },
  "FishermanWinter": {
    "key": "FishermanWinter",
    "name": "漁人堡 · 冬季白天觀景台",
    "image": "https://runway-media-production.global.ssl.fastly.net/us/originals/2024/12/Tourists-enjoy-the-view-from-Fishermans-Bastion-in-Budapest-Hungary_-Stevens-Fremont.jpg?width=2048",
    "imageSource": "https://thepointsguy.com/travel/great-european-winter-destinations/",
    "credit": "Stevens Frémont／The Points Guy"
  },
  "GubalowkaRailWinter": {
    "key": "GubalowkaRailWinter",
    "name": "Gubałówka 登山纜車 · 冬季場景",
    "image": "https://www.pkl.pl/data/pages/38/20181216_a9dsc06983v1.jpg",
    "imageSource": "https://www.pkl.pl/gubalowka/gubalowka.html",
    "credit": "PKL"
  },
  "KuzniceWinter": {
    "key": "KuzniceWinter",
    "name": "Kuźnice 纜車下站 · 冬季白天",
    "image": "https://d-art.ppstatic.pl/kadry/k/r/1/c9/a2/5c503c37be010_o_medium.jpg",
    "imageSource": "https://gazetakrakowska.pl/zakopane-piekna-pogoda-w-tatrach-tlumy-chca-wjechac-na-kasprowy-wierch-zdjecia/ar/13844764",
    "credit": "Gazeta Krakowska"
  },
  "KrakowMarketWinterNight": {
    "key": "KrakowMarketWinterNight",
    "name": "克拉科夫主廣場與紡織會館 · 冬季亮燈夜景",
    "image": "https://images.pexels.com/photos/19606024/pexels-photo-19606024.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "imageSource": "https://www.pexels.com/photo/main-market-in-krakow-at-night-19606024/",
    "credit": "Janusz Mitura／Pexels"
  },
  "KrakowFebruaryNight": {
    "key": "KrakowFebruaryNight",
    "name": "克拉科夫老城 · 冬季雪夜街景",
    "image": "https://images.unsplash.com/photo-1613159263819-c9ce2636c225?auto=format&fit=crop&w=1200&q=82",
    "imageSource": "https://unsplash.com/photos/brown-concrete-building-during-daytime-FjRuqY6LZhk",
    "credit": "Jacek Dylag／Unsplash"
  },
  "GrabenNight": {
    "key": "GrabenNight",
    "name": "維也納 Graben · 入夜光線參考",
    "image": "https://images.squarespace-cdn.com/content/v1/569e766e69492e9dd5373ef6/1722855398565-U2A64LQ7GB7X5O5NCBIA/_ABZ4683-alex.jpg",
    "imageSource": "https://www.aperturetours.com/vienna-night-photo-tour",
    "credit": "Aperture Tours"
  },
  "HofburgWinter": {
    "key": "HofburgWinter",
    "name": "霍夫堡皇宮 · 冬季白天外觀",
    "image": "https://i0.wp.com/www.lescarnetsderoutedesophie.com/wp-content/uploads/2023/12/visiter-vienne-5.jpeg?resize=960%2C723&ssl=1",
    "imageSource": "https://www.lescarnetsderoutedesophie.com/en/visit-vienna-what-to-do-in-the-austrian-capital/",
    "credit": "Les Carnets de Route de Sophie"
  },
  "VIENight": {
    "key": "VIENight",
    "name": "維也納機場 · 夜間外觀與清晨抵達光線參考",
    "image": "https://moodiedavittreport.com/wp-content/uploads/2023/07/Vienna-Airport-terminal-shot-scaled.jpg",
    "imageSource": "https://moodiedavittreport.com/vienna-airport-reports-leap-in-revenue-and-passenger-traffic-in-2022/",
    "credit": "The Moodie Davitt Report"
  },
  "ScootNight": {
    "key": "ScootNight",
    "name": "酷航客機 · 夜間場景參考",
    "image": "https://ik.imgkit.net/3vlqs5axxjf/TW-Asia/ik-seo/uploadedImages/Industry/Aviation/Scott-goes-hangzhou/Scoot-takes-over-Hangzhou-from-SilkAir.jpg?tr=w-780%2Ch-440%2Cfo-auto",
    "imageSource": "https://www.travelweekly-asia.com/Travel-News/Airline-News/Scoot-takes-over-Hangzhou-from-SilkAir",
    "credit": "Travel Weekly Asia"
  },
  "SzentendreWinter": {
    "key": "SzentendreWinter",
    "name": "Szentendre 老城 · 冬季白天街景",
    "image": "https://panadea.com/images/st5/travel-guide-guidebook/en-szentendre-hungary-panadea-gb-sd-3044681-0057.jpg",
    "imageSource": "https://www.panadea.com/en/travel-guide-guidebook/europe/hungary/budapest-and-surrounding/danube-bend/szentendre/photo-gallery/gal-002",
    "credit": "Panadea"
  },
  "BelvedereWinter": {
    "key": "BelvedereWinter",
    "name": "上美景宮 · 冬季白天外觀",
    "image": "https://www.novo-monde.com/app/uploads/2022/09/Belvedere-Vienne.jpg",
    "imageSource": "https://www.novo-monde.com/en/vienna-in-winter-christmas/",
    "credit": "Novo-monde"
  }
};
TRIP_DATA.timelinePhotoRefs = {
  "2/3": {
    "TR867": [
      "Scoot"
    ],
    "抵達樟宜機場": [
      "Changi"
    ],
    "轉機整理": [
      "Changi"
    ],
    "休息／前往候機區": [
      "Changi"
    ],
    "TR60": [
      "ScootNight"
    ]
  },
  "2/4": {
    "抵達 Vienna VIE／入境領行李": [
      "VIE"
    ],
    "Flughafen Wien Bahnhof → Wien Hbf": [
      "Railjet"
    ],
    "Wien Hbf 站內午餐／休息": [
      "Railjet"
    ],
    "確認月台／車廂／準備上車": [
      "Railjet"
    ],
    "Wien Hbf → Budapest-Keleti｜ÖBB RJX 63 已購票": [
      "Railjet"
    ],
    "Budapest-Keleti → InterContinental Budapest（布達佩斯洲際酒店）": [
      "Keleti",
      "ICBudapest"
    ],
    "入住／休息／補水": [
      "ICBudapest"
    ],
    "晚餐／河岸散步（選擇性）": [
      "ChainBridge"
    ]
  },
  "2/5": {
    "飯店 → Batthyány tér": [
      "Batthyany"
    ],
    "H5 → Szentendre": [
      "HEV"
    ],
    "午餐｜匈牙利家常菜": [
      "Gulyas"
    ],
    "Szentendre → Batthyány tér": [
      "HEV"
    ],
    "前往 Buda Castle 區": [
      "Buda Castle"
    ],
    "晚餐｜城堡區就近用餐": [
      "Paprikash"
    ],
    "城堡區 → 多瑙河遊船碼頭": [
      "ParliamentFebruaryNight"
    ],
    "遊船報到／登船緩衝": [
      "ParliamentFebruaryNight"
    ],
    "返回 InterContinental Budapest／休息": [
      "ICBudapest"
    ],
    "城堡區藍調時刻": [
      "BudaTwilight"
    ]
  },
  "2/6": {
    "SIXT Budapest Chain Bridge 取車｜已預訂": [
      "ICBudapest"
    ],
    "Budapest → Košice": [
      "Kosice"
    ],
    "Košice → Prešov → Poprad": [
      "Presov",
      "Poprad"
    ],
    "Poprad → Štrbské Pleso": [
      "Strbske"
    ],
    "Hotel Panorama（全景酒店）": [
      "Panorama"
    ],
    "晚餐｜斯洛伐克山區料理": [
      "Halusky"
    ]
  },
  "2/7": {
    "Štrbské Pleso → Zakopane": [
      "Jaszczurowka"
    ],
    "午餐｜波蘭高塔特拉料理": [
      "Moskole"
    ],
    "停車／前往 Gubałówka 下站": [
      "GubalowkaRailWinter"
    ],
    "前往 Aparthotel Cristina（克莉絲蒂娜公寓酒店）": [
      "Cristina"
    ],
    "入住、與朋友會合／晚餐": [
      "Cristina",
      "Pierogi"
    ]
  },
  "2/8": {
    "飯店 → Kuźnice": [
      "KuzniceWinter"
    ],
    "報到／候車": [
      "KuzniceWinter"
    ],
    "下山並返回 Zakopane": [
      "KuzniceWinter"
    ],
    "午餐｜波蘭高塔特拉料理": [
      "Moskole"
    ],
    "報到／裝備／安全說明": [
      "Snowmobile"
    ],
    "晚餐｜波蘭山地料理": [
      "Pierogi"
    ]
  },
  "2/9": {
    "Zakopane → Kraków": [
      "WawelHillWinter"
    ],
    "飯店停車／寄放行李": [
      "HIKrakow"
    ],
    "簡單午餐＋步行至 Wawel": [
      "Pierogi"
    ],
    "晚餐｜克拉科夫經典菜": [
      "Bigos"
    ],
    "Wawel Hill／Wawel Cathedral 外觀／城堡庭院": [
      "WawelHillWinter"
    ],
    "Main Market Square／Cloth Hall 外觀": [
      "KrakowMarketWinterNight"
    ],
    "Kraków Old Town 夜景 → 步行回飯店": [
      "KrakowFebruaryNight"
    ]
  },
  "2/10": {
    "服務區午餐／駕駛休息": [
      "Gulyas"
    ],
    "繼續前往 Budapest": [
      "Parliament"
    ],
    "SIXT Budapest Keleti Train Station 還車準備": [
      "KeletiNight"
    ]
  },
  "2/11": {
    "前往 Central Market Hall": [
      "CentralMarket"
    ],
    "午餐｜布達佩斯經典菜": [
      "Gulyas"
    ],
    "前往 Batthyány tér": [
      "Batthyany"
    ],
    "前往 Chain Bridge": [
      "ChainBridge"
    ],
    "晚餐｜匈牙利經典菜": [
      "Paprikash"
    ],
    "Batthyány tér": [
      "ParliamentBlue"
    ]
  },
  "2/12": {
    "退房並前往 Budapest-Keleti": [
      "Keleti"
    ],
    "Budapest → Wien Hbf": [
      "Railjet"
    ],
    "Wien Hbf → InterContinental Vienna（維也納洲際酒店）": [
      "ICVienna"
    ],
    "寄放行李／午餐／休息": [
      "ICVienna",
      "Schnitzel"
    ],
    "晚餐／返回飯店": [
      "Tafelspitz"
    ]
  },
  "2/13": {
    "飯店 → Schönbrunn": [
      "Schonbrunn"
    ],
    "午餐": [
      "Schnitzel"
    ],
    "前往 Belvedere": [
      "Belvedere"
    ],
    "前往 Hofburg": [
      "Hofburg"
    ],
    "晚餐／自由活動": [
      "Tafelspitz"
    ]
  },
  "2/14": {
    "起床、退房與行李確認": [
      "ICVienna"
    ],
    "預約車：飯店 → VIE": [
      "VIENight"
    ],
    "報到／托運／安檢／出境": [
      "VIENight"
    ],
    "TR61": [
      "Scoot"
    ]
  },
  "2/15": {
    "抵達 Singapore SIN": [
      "Changi"
    ],
    "TR874": [
      "Scoot"
    ],
    "抵達桃園 TPE": [
      "TPE"
    ]
  }
};

// Winter and time-of-day reference photos for the itinerary and place cards.
TRIP_DATA.seasonalPlacePhotos = {
  "Szentendre": [
    "SzentendreWinter"
  ],
  "Buda Castle": [
    "BudaWinter",
    "BudaTwilight"
  ],
  "Fisherman's Bastion": [
    "FishermanWinter"
  ],
  "Gubalowka": [
    "GubalowkaRailWinter"
  ],
  "Krupowki": [
    "KrupowkiFebruary"
  ],
  "Kasprowy": [
    "KasprowyWinter",
    "KuzniceWinter"
  ],
  "Wawel": [
    "WawelWinter",
    "WawelHillWinter"
  ],
  "MainMarket": [
    "KrakowMarketWinterNight"
  ],
  "ClothHall": [
    "KrakowMarketWinterNight"
  ],
  "ChainBridge": [
    "ChainBridgeWinterNight"
  ],
  "Schonbrunn": [
    "SchonbrunnWinter",
    "SchonbrunnGardenWinter"
  ],
  "Belvedere": [
    "BelvedereWinter"
  ],
  "Hofburg": [
    "HofburgWinter"
  ],
  "Stephansdom": [
    "StephansdomNight"
  ],
  "Graben": [
    "GrabenNight"
  ],
  "Kohlmarkt": [
    "KohlmarktNight"
  ],
  "DanubeCruise": [
    "ParliamentFebruaryNight",
    "ParliamentBlue"
  ]
};
TRIP_DATA.seasonalDayCovers = {
  "2/3": "Scoot",
  "2/4": "ICBudapest",
  "2/5": "BudaWinter",
  "2/6": "Strbske",
  "2/7": "GubalowkaRailWinter",
  "2/8": "KasprowyWinter",
  "2/9": "WawelHillWinter",
  "2/10": "KeletiNight",
  "2/11": "ParliamentFebruaryNight",
  "2/12": "StephansdomNight",
  "2/13": "SchonbrunnWinter",
  "2/14": "VIENight",
  "2/15": "TPE"
};
