// ==UserScript==
// @name         LMS : 参加・不参加ボタンを名前下に追加
// @namespace    https://a-three.work/
// @version      1.0
// @description  出欠編集ページで「参加」「不参加」ボタンを各行の名前下に追加。関連selectを自動設定。
// @match        https://wonder-gym.jp/*/edit
// @grant        none
// @run-at       document-end
// @updateURL    https://raw.githubusercontent.com/aminagata/wonderlabo-userscripts/main/lms-attendance-buttons.user.js
// @downloadURL  https://raw.githubusercontent.com/aminagata/wonderlabo-userscripts/main/lms-attendance-buttons.user.js
// ==/UserScript==

(function () {
  "use strict";

  // すべての出欠selectを取得
  const attendanceSelects = document.querySelectorAll(
    'select[name^="attendances"][name$="[is_attended]"]'
  );

  attendanceSelects.forEach((select) => {
    const match = select.name.match(/attendances\[(\d+)\]\[is_attended\]/);
    if (!match) return;
    const id = match[1];

    // 該当行（tr）を取得
    const tr = select.closest("tr");
    if (!tr) return;

    // 名前セル（2番目のtd）
    const nameTd = tr.querySelector("td:nth-child(2)");
    if (!nameTd) return;

    // --- ボタン共通スタイル ---
    const makeBtn = (label, color) => {
      const btn = document.createElement("button");
      btn.textContent = label;
      btn.style.display = "block";
      btn.style.marginTop = "4px";
      btn.style.padding = "4px 8px";
      btn.style.background = color;
      btn.style.color = "#fff";
      btn.style.border = "none";
      btn.style.borderRadius = "4px";
      btn.style.fontSize = "12px";
      btn.style.cursor = "pointer";
      btn.style.width = "100%";
      return btn;
    };

    // --- 不参加ボタン ---
    const absentBtn = makeBtn("不参加を選択", "#ef4444");
    absentBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // 不参加を選択
      const option = Array.from(select.options).find((opt) =>
        opt.text.includes("不参加")
      );
      if (option) {
        select.value = option.value;
        select.dispatchEvent(new Event("change", { bubbles: true }));
      }

      // motivation と progress を空に
      ["motivation_level", "progress_level"].forEach((field) => {
        const s = document.querySelector(
          `select[name="attendances[${id}][${field}]"]`
        );
        if (s) {
          s.value = "";
          s.dispatchEvent(new Event("change", { bubbles: true }));
        }
      });
    });

    // --- 参加ボタン ---
    const presentBtn = makeBtn("参加を選択", "#22c55e");
    presentBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // 参加を選択
      const option = Array.from(select.options).find((opt) =>
        opt.text.includes("参加")
      );
      if (option) {
        select.value = option.value;
        select.dispatchEvent(new Event("change", { bubbles: true }));
      }

      // motivation と progress を「良い」に
      ["motivation_level", "progress_level"].forEach((field) => {
        const s = document.querySelector(
          `select[name="attendances[${id}][${field}]"]`
        );
        if (s) {
          const goodOpt = Array.from(s.options).find(
            (opt) => opt.text.includes("良い") && !opt.text.includes("大変")
          );
          if (goodOpt) {
            s.value = goodOpt.value;
            s.dispatchEvent(new Event("change", { bubbles: true }));
          }
        }
      });
    });

    // --- 名前欄の下にボタン挿入 ---
    nameTd.appendChild(presentBtn);
    nameTd.appendChild(absentBtn);
  });

  console.log("[Tampermonkey] 参加・不参加ボタンを追加");
})();
