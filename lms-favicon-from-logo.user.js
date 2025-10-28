// ==UserScript==
// @name         LMS : faviconをページ内SVGから生成
// @namespace    https://a-three.work/
// @version      1.0
// @description  LMSヘッダーのSVGロゴをfaviconとして設定する
// @match        https://wonder-gym.jp/*
// @run-at       document-end
// @updateURL    https://raw.githubusercontent.com/aminagata/wonderlabo-userscripts/main/lms-favicon-from-logo.user.js
// @downloadURL  https://raw.githubusercontent.com/aminagata/wonderlabo-userscripts/main/lms-favicon-from-logo.user.js
// ==/UserScript==

(function () {
  "use strict";

  function replaceFaviconFromSVG() {
    // headerロゴ内のsvgを取得（最初のもの）
    const svgEl = document.querySelector(".shrink-0.flex.items-center svg");
    if (!svgEl) return; // SVGがまだ読み込まれてなければ中断

    // SVGを文字列化
    const svgString = svgEl.outerHTML.trim();

    // data URL化
    const svgDataUrl = "data:image/svg+xml," + encodeURIComponent(svgString);

    // 既存のfavicon削除
    document
      .querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')
      .forEach((el) => el.remove());

    // 新favicon作成
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.href = svgDataUrl;
    document.head.appendChild(link);
  }

  // 一定間隔でSVGが読み込まれたら実行（SPA対応）
  const observer = new MutationObserver(() => replaceFaviconFromSVG());
  observer.observe(document.body, { childList: true, subtree: true });

  // 初回実行
  replaceFaviconFromSVG();
})();
