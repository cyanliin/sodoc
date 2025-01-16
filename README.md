# SoDoc

以 VitePress 製作的開發文件模板，特色：
- 可同時使用 Markdown、HTML、Vue 格式編輯文件。
- 目錄可自定義編號、標籤。
- 白色 / 深色模式。
- 可獨立建立，或與 Vite 專案並存。

## 文件結構
```md{7,9-10}
.                          # 專案根目錄
├─ docs                    # 文件根目錄
│   ├─ .vitepress
│   │   ├─ theme
│   │   │   ├─ index.js    # 自訂主題設定
│   │   │   ├─ style.scss  # 自訂風格
│   │   ├─ config.mjs      # VitePress 設定
│   │   ├─ LabelList.js    # Label 種類定義
│   │   ├─ Nav.js          # 右上選單
│   │   ├─ Sidebar.js      # 左側目錄
│   ├─ index.md            # 文件首頁 
│   ├─ api/                # API 目錄（參考）
│   ├─ pages/              # 頁面目錄（參考）
│   ├─ components/         # 元件目錄（參考）
│   ├─ ...                 # 其他文件頁面
│  
├─ ...                     # 專案內容
```

## 執行
```
pnpm docs:dev
```
