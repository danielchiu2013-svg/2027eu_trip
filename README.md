# 2027 中歐冬季旅程 App v4

## 核心架構
- `index.html`：App 介面與功能
- `trip-data.js`：唯一的行程資料來源；以後改行程主要改這裡
- `manifest.webmanifest`：加入手機主畫面的 PWA 設定
- `sw.js`：App Shell 快取
- `icon.svg`：App 圖示

## 行程基準
- Day 1 = 2027/2/3
- Day 13 = 2027/2/15
- 3 人
- 3 × 29 吋行李
- 固定飯店與航班依目前確認版本
- 一般觀光日行程從 09:00 開始；長途航班、機場移動與長途交通日按實際班次／路況安排
- 2/7 Zakopane 抵達日安排 Jaszczurówka、Gubałówka 與 Krupówki；不前往 Pęksowy Brzyzek；2/8 保留 Kasprowy Wierch 與 Snowmobile
- 修正景點卡片 Day 編號：2/11=D9、2/12=D10、2/13=D11
- 新增「攝影機位」分頁：27 個建議站位區域、可縮放地圖、城市／日期／關鍵字篩選、拍攝方向、焦段、位置標記與參考來源
- 總覽、每日卡片、景點卡片、頂部分頁及手機底部導覽皆可開啟攝影機位；直接連結 `#photo-map`，單一機位使用 `#photo-<id>`
- 圖片卡片顯示圖片來源／原圖連結；失效圖片自動隱藏

## 維護方式
日後只改行程資料：
1. 開啟 `trip-data.js`
2. 修改 `TRIP_DATA.days`、`flights`、`hotels` 等資料
3. 不要直接把行程資料寫死在 `index.html`

## 攝影機位地圖
- 共用資料為 `TRIP_DATA.photoSpots`，包括唯一 `id`、`city`、`dates`、`placeKeys`、`name`、`lat`、`lng`、`direction`、`time`、`lens`、`note` 與 `source`
- `dates` 使用 `days.date` 的日期，`placeKeys` 使用 `places.key`，讓每日與景點入口同步同一份機位資料
- 圖釘是建議站位區域，非精密測量的腳架位置；構圖與焦段屬攝影建議，現場須依入口、路況與視角微調
- 攝影時段不增加必到活動，不更動原本日期、住宿、預約或出發時間；湖區晨拍與 Košice 午餐順拍可省略
- Leaflet 1.9.4 在開啟攝影分頁時才載入；OpenStreetMap 底圖依供應端 HTTP 快取規則使用，不由 Service Worker 預先下載或永久快取
- 外部地圖載入失敗不阻擋其他分頁；機位清單、拍攝方向與 Google 地圖位置連結仍可使用，並提供重試按鈕
- 更新資料或介面時，同步調整 `index.html` 的資料版本、Service Worker 註冊版本及 `sw.js` 的快取名稱／版本資源

## GitHub Pages
將整個資料夾內容放在 Repository 根目錄，即可用 GitHub Pages 發布。

## 圖片
圖片採外部 URL，App 不需要圖片資料夾。景點卡片提供來源頁或原圖連結；失效圖片會自動隱藏，不影響行程文字。部分舊有照片仍需在出發前逐張核對授權與來源。

## PWA
在支援的手機瀏覽器中開啟 GitHub Pages 後，可使用「加入主畫面／Add to Home Screen」。首次開啟後 App Shell 可快取部分頁面資源；外部圖片仍需網路。

## 每日出門準備
- `TRIP_DATA.outingAdvice` 共用每日穿搭、當天加帶物品、攝影裝備與提醒；涵蓋 2/3–2/15。
- 每日卡片上方提供原生可展開區塊；搜尋包含每日出門準備文字。
- 交通／住宿頁集中顯示城市、雪山、移動三種穿法、每日基本包、攝影保養及官方參考來源與查核日期。
- 建議不是每日天氣預報，出發前按氣溫、風雪與業者提供的裝備調整。
- 2/14 機場接送摘要從每日行程取得，避免時間重複寫死。
