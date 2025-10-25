// ==UserScript==
// @name         LMS : セレクトメニューで自分の名前を選択
// @namespace    https://a-three.work/
// @version      1.0
// @description  ログイン中ユーザーの名前をセレクトメニューで一番上に移動 & 選択
// @match        https://wonder-gym.jp/*/edit
// @run-at       document-end
// @updateURL    https://raw.githubusercontent.com/aminagata/wonderlabo-userscripts/main/lms-select-myname.user.js
// @downloadURL  https://raw.githubusercontent.com/aminagata/wonderlabo-userscripts/main/lms-select-myname.user.js
// ==/UserScript==

(function () {
  "use strict";

  // 名前を含むボタンを探す
  const nameButton = Array.from(document.querySelectorAll("button")).find((b) =>
    b.textContent.includes(" さん")
  );
  if (!nameButton) return;

  // テキストから「 さん」の前までを取得
  const fullText = nameButton.textContent.trim();
  const nameMatch = fullText.match(/(.+?) さん/);
  if (!nameMatch) return;

  const userName = nameMatch[1].trim();
  console.log("Detected user name:", userName);

  // セレクト要素を探す
  const select = document.querySelector('select[name="lecturer_user_id"]');
  if (!select) return;

  // 名前を含むoptionを探す
  const options = Array.from(select.options);
  const target = options.find((o) => o.text.includes(userName));

  if (target) {
    // 自分の名前を先頭に移動
    select.insertBefore(target, select.firstChild);

    // 自動選択したくない場合はここをコメントアウト
    select.value = target.value;
  }
})();
