# 2027 中歐冬季旅程 App v3

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
- 2/8 不再安排 Gubałówka，改為 Jaszczurówka + Pęksowy Brzyzek + Snowmobile

## 維護方式
日後只改行程資料：
1. 開啟 `trip-data.js`
2. 修改 `TRIP_DATA.days`、`flights`、`hotels` 等資料
3. 不要直接把行程資料寫死在 `index.html`

## GitHub Pages
將整個資料夾內容放在 Repository 根目錄，即可用 GitHub Pages 發布。

## 圖片
圖片採外部 URL，App 不需要圖片資料夾。部分圖片來自官方／Wikimedia／公開旅遊圖片來源；若外部圖片失效，卡片會自動隱藏圖片，不影響行程文字。

## PWA
在支援的手機瀏覽器中開啟 GitHub Pages 後，可使用「加入主畫面／Add to Home Screen」。首次開啟後 App Shell 可快取部分頁面資源；外部圖片仍需網路。
