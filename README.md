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
- 2/7 將 Jaszczurówka、Pęksowy Brzyzek 移至 Zakopane 抵達日；2/8 保留 Kasprowy Wierch 與 Snowmobile
- 修正景點卡片 Day 編號：2/11=D9、2/12=D10、2/13=D11
- 圖片卡片顯示圖片來源／原圖連結；失效圖片自動隱藏

## 維護方式
日後只改行程資料：
1. 開啟 `trip-data.js`
2. 修改 `TRIP_DATA.days`、`flights`、`hotels` 等資料
3. 不要直接把行程資料寫死在 `index.html`

## GitHub Pages
將整個資料夾內容放在 Repository 根目錄，即可用 GitHub Pages 發布。

## 圖片
圖片採外部 URL，App 不需要圖片資料夾。景點卡片提供來源頁或原圖連結；失效圖片會自動隱藏，不影響行程文字。部分舊有照片仍需在出發前逐張核對授權與來源。

## PWA
在支援的手機瀏覽器中開啟 GitHub Pages 後，可使用「加入主畫面／Add to Home Screen」。首次開啟後 App Shell 可快取部分頁面資源；外部圖片仍需網路。

