### 作答說明：
- Open API 是採用 `{JSON} Placeholder` 的 https://jsonplaceholder.typicode.com/photos
- 分類是直接將回傳的 json 分成 01-30, 31-60 ... 筆，共四個分類, 40 筆資料。
- 因為方便面試官檢視 code ，沒有將檔案分得太細。
- 預設倒數計時是 20 sec 20 min，也可待  `hours` 參數進去。
- 簡單說明資料結構：
  - App.js
    - SearchBar 實現搜尋框功能
    - BannerCarousel 輪播功能
    - Counter 倒數計時功能
    - Products 產品頁面
      - ProductsLists.js
        - ProductsCategories 產品分類
        - Products 產品列表
          - PopUp 點擊產品彈窗功能
        - GoTop 回上方功能
      
[Demo](https://backas36.github.io/mrctech-pretest)