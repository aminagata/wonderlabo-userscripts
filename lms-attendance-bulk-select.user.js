// ==UserScript==
// @name         LMS : 良い/参加を一括選択（完全一致）
// @namespace    https://a-three.work/
// @version      1.0
// @description  出欠編集ページで「良い」（完全一致）&「参加」を自動選択するボタンを右上に追加
// @match        https://wonder-gym.jp/*/edit
// @grant        none
// @updateURL    https://raw.githubusercontent.com/aminagata/wonderlabo-userscripts/main/lms-attendance-bulk-select.user.js
// @downloadURL  https://raw.githubusercontent.com/aminagata/wonderlabo-userscripts/main/lms-attendance-bulk-select.user.js
// ==/UserScript==

(function () {
  "use strict";

  // --- ボタン作成 ---
  const btn = document.createElement("button");
  btn.textContent = "全員：良い／参加を選択";
  btn.style.position = "fixed";
  btn.style.top = "85px";
  btn.style.right = "20px";
  btn.style.zIndex = "9999";
  btn.style.padding = "10px 16px";
  btn.style.background = "#2563eb";
  btn.style.color = "white";
  btn.style.border = "none";
  btn.style.borderRadius = "6px";
  btn.style.cursor = "pointer";
  btn.style.fontSize = "14px";
  btn.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
  document.body.appendChild(btn);

  // --- ボタン押下時の処理 ---
  btn.addEventListener("click", () => {
    const selects = document.querySelectorAll("select");

    let count = 0;
    selects.forEach((select) => {
      // 「良い」を完全一致で探す
      const goodOption = Array.from(select.options).find(
        (opt) => opt.text.trim() === "良い"
      );
      // 「参加」は部分一致で探す
      const attendOption = Array.from(select.options).find((opt) =>
        opt.text.includes("参加")
      );

      if (goodOption) {
        select.value = goodOption.value;
        count++;
      } else if (attendOption) {
        select.value = attendOption.value;
        count++;
      }

      // changeイベント発火（反映させる）
      const event = new Event("change", { bubbles: true });
      select.dispatchEvent(event);
    });

    // alert(`✅ ${count} 件の出欠を「良い／参加」に設定しました`);
  });

  console.log("[Tampermonkey] 出欠自動選択ボタンを追加しました。");
})();
