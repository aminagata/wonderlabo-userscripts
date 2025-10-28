// ==UserScript==
// @name         Notion : faviconをデフォルトに戻す
// @namespace    https://a-three.work/
// @version      1.0
// @description  ページアイコンが絵文字になってしまう場合に、Notionの元アイコンをfaviconとして設定
// @match        https://*.notion.site/*
// @match        https://www.notion.so/*
// @run-at       document-end
// @updateURL    https://raw.githubusercontent.com/aminagata/wonderlabo-userscripts/main/notion-favicon-reset.user.js
// @downloadURL  https://raw.githubusercontent.com/aminagata/wonderlabo-userscripts/main/notion-favicon-reset.user.js
// ==/UserScript==

(function () {
  "use strict";

  // Notionのデフォルトfavicon
  const defaultFavicon = "https://www.notion.so/images/favicon.ico";

  function replaceFavicon() {
    // 既存のfaviconを削除
    document
      .querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')
      .forEach((el) => el.remove());

    // 新しいfaviconを追加
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = defaultFavicon;
    document.head.appendChild(link);
  }

  // 初回実行
  replaceFavicon();

  // ページ遷移やfavicon変化にも対応
  const observer = new MutationObserver(() => {
    const currentHref = document.querySelector('link[rel="icon"]')?.href || "";
    if (!currentHref.includes("notion.so/images/favicon.ico")) {
      replaceFavicon();
    }
  });
  observer.observe(document.head, { childList: true, subtree: true });
})();
