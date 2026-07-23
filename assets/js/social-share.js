(function () {
  "use strict";

  var button = document.getElementById("shareButton");
  if (!button) return;

  var canonicalUrl = window.location.origin + window.location.pathname;
  var shareData = {
    title: "마크의 마지막 수리 · CASE 01",
    text: "폭풍우가 치던 밤, 전기 수리공 마크의 죽음에 숨겨진 진실을 추리해 보세요.",
    url: canonicalUrl
  };

  function showFeedback(message) {
    var root = document.getElementById("toastRoot") || document.body;
    var feedback = document.createElement("div");
    feedback.className = "share-feedback";
    feedback.setAttribute("role", "status");
    feedback.textContent = message;
    root.appendChild(feedback);
    window.setTimeout(function () {
      feedback.classList.add("is-leaving");
      window.setTimeout(function () {
        feedback.remove();
      }, 220);
    }, 2200);
  }

  function copyWithLegacyFallback(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    var copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  }

  async function copyGameUrl() {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(canonicalUrl);
      } else if (!copyWithLegacyFallback(canonicalUrl)) {
        throw new Error("copy failed");
      }
      showFeedback("게임 주소를 복사했습니다.");
    } catch (error) {
      window.prompt("아래 게임 주소를 복사해 주세요.", canonicalUrl);
    }
  }

  button.addEventListener("click", function () {
    if (typeof navigator.share === "function") {
      navigator.share(shareData).catch(function (error) {
        if (error && error.name === "AbortError") return;
        copyGameUrl();
      });
      return;
    }
    copyGameUrl();
  });
})();
