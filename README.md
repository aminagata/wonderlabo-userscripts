# 🧩 wonderlabo-userscripts

ワンダーラボ関連の便利スクリプト集（Tampermonkey 用）  
LMS 管理画面や Notion の操作を少し楽にするためのユーザースクリプトをまとめています。

---

## 🚀 使い方

### 1️⃣ Tampermonkey をインストール

まだ入れていない場合は、ブラウザに拡張機能を追加します。

- [Tampermonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- [Tampermonkey for Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

---

### ⚙️ 2️⃣ Chrome の設定を変更

Tampermonkey でユーザースクリプトを正しく動かすには、  
Chrome 側の拡張機能設定を有効化する必要があります。

1. Chrome 右上の「︙」メニューから **[設定] → [拡張機能]** を開く  
   　（またはアドレスバーに `chrome://extensions/` と入力）
2. 右上の **「デベロッパーモード」** を **ON** にする
3. Tampermonkey のカード内にある **「詳細」ボタン** をクリック
4. **「Allow user scripts（ユーザースクリプトを許可）」** を **ON** にする

> 🔸 この 2 つ（デベロッパーモード ＆ Allow user scripts）を有効化しないと、  
> スクリプトが動作しません。

---

### 🧩 3️⃣ スクリプトをインストール

以下のリンクをクリックすると Tampermonkey が自動で起動し、  
「このスクリプトをインストールしますか？」と表示されます。  
そのまま「**インストール**」を押せば完了です ✅

---

## 📘 スクリプト一覧

### 🎓 LMS 関連

| スクリプト名                       | 説明                                                     | インストール                                                                                                           |
| ---------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **lms-attendance-buttons.user.js** | 各生徒名の下に「参加」「不参加」ボタンを追加し、自動選択 | [インストール](https://raw.githubusercontent.com/aminagata/wonderlabo-userscripts/main/lms-attendance-buttons.user.js) |
| **lms-select-myname.user.js**      | 出欠編集ページで自分の名前を自動で一番上に移動・選択     | [インストール](https://raw.githubusercontent.com/aminagata/wonderlabo-userscripts/main/lms-select-myname.user.js)      |
| **lms-title.user.js**              | ページタイトルに講座情報を反映（`(〇ヶ月)`を削除）       | [インストール](https://raw.githubusercontent.com/aminagata/wonderlabo-userscripts/main/lms-title.user.js)              |

---

### 🧠 Notion 関連

| スクリプト名                     | 説明                                               | インストール                                                                                                         |
| -------------------------------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **notion-auto-loadmore.user.js** | 「さらに読み込む」ボタンを自動クリックして全件表示 | [インストール](https://raw.githubusercontent.com/aminagata/wonderlabo-userscripts/main/notion-auto-loadmore.user.js) |

---

## 🔄 更新について

スクリプトには自動更新設定（`@updateURL` / `@downloadURL`）が含まれています。  
リポジトリに更新をプッシュすれば、次回 Tampermonkey 起動時に自動で最新版が反映されます。

---

## 🛠️ カスタマイズしたい場合

スクリプトは自由に改変して利用できます。  
ただし、自動更新が有効なままだとリポジトリ更新時に上書きされるため、  
**`@updateURL` / `@downloadURL` の行を削除** してください。

---

## 💬 制作者

**ami nagata**  
https://a-three.work/

---

## ⚠️ 注意

- これらのスクリプトは **非公式ツール** です。
- 動作環境や管理画面の変更によって正常に動かなくなる可能性があります。
- 自己責任での利用をお願いします。

---
