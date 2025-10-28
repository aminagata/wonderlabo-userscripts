// ==UserScript==
// @name         LMS : ページタイトルに講座情報を反映（開講＋括弧削除）
// @namespace    https://a-three.work/
// @version      1.0
// @description  タイトルに講座情報を追加（「開講（〇ヶ月）」を削除）
// @match        https://wonder-gym.jp/lecturer-portal/online-lesson-attendances/*
// @run-at       document-end
// @updateURL    https://raw.githubusercontent.com/aminagata/wonderlabo-userscripts/main/lms-title.user.js
// @downloadURL  https://raw.githubusercontent.com/aminagata/wonderlabo-userscripts/main/lms-title.user.js

// ==/UserScript==

(function () {
  "use strict";

  // 1. divの優先
  let textEl = document.querySelector(
    "div.my-4.text-center.text-2xl.font-bold"
  );

  // 2. もしdivがなければpの方を取得
  if (!textEl) {
    textEl = document.querySelector("p.mx-4");
  }

  if (textEl) {
    let titleText = textEl.textContent.trim();

    // 「開講（〇ヶ月）」の部分を削除
    titleText = titleText.replace(/開講（.*?）/g, "").trim();

    // タイトルを設定
    document.title = titleText;
  }
})();
