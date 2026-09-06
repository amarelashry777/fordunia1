// ===== FINAL SCREEN FINAL FIX =====

window.addEventListener("load", function () {

  const screen = document.getElementById("finalMessageScreen");
  const card = document.querySelector("#finalMessageScreen .final-message-card");
  const title = document.querySelector("#finalMessageScreen h1");
  const intro = document.querySelector("#finalMessageScreen .final-intro");
  const message = document.getElementById("finalTypedMessage");
  const signature = document.getElementById("finalSignature");

  if (!screen || !card || !message) return;

  // الشاشة
  screen.style.setProperty("min-height", "100vh", "important");
  screen.style.setProperty("display", "flex", "important");
  screen.style.setProperty("align-items", "center", "important");
  screen.style.setProperty("justify-content", "center", "important");
  screen.style.setProperty("padding", "50px 15px", "important");
  screen.style.setProperty("background", "linear-gradient(180deg,#fff,#fff5fa,#ffe8f3)", "important");
  screen.style.setProperty("overflow", "hidden", "important");

  // الكارت
  card.style.setProperty("width", "min(800px,100%)", "important");
  card.style.setProperty("background", "#ffffff", "important");
  card.style.setProperty("color", "#111111", "important");
  card.style.setProperty("text-align", "center", "important");
  card.style.setProperty("direction", "rtl", "important");
  card.style.setProperty("opacity", "1", "important");
  card.style.setProperty("transform", "none", "important");
  card.style.setProperty("position", "relative", "important");
  card.style.setProperty("z-index", "20", "important");
  card.style.setProperty("padding", "35px 20px", "important");
  card.style.setProperty("border-radius", "25px", "important");
  card.style.setProperty("border", "3px solid #111", "important");
  card.style.setProperty("box-shadow", "9px 9px 0 #111", "important");

  // العنوان
  if (title) {
    title.style.setProperty("color", "#111111", "important");
    title.style.setProperty("opacity", "1", "important");
  }

  // المقدمة
  if (intro) {
    intro.style.setProperty("color", "#555555", "important");
    intro.style.setProperty("opacity", "1", "important");
  }

  // الرسالة
  const text = message.dataset.message || "";

  message.innerHTML = "";

  message.style.setProperty("color", "#111111", "important");
  message.style.setProperty("opacity", "1", "important");
  message.style.setProperty("display", "block", "important");
  message.style.setProperty("width", "100%", "important");
  message.style.setProperty("max-width", "700px", "important");
  message.style.setProperty("margin", "0 auto", "important");
  message.style.setProperty("font-size", "20px", "important");
  message.style.setProperty("line-height", "1.9", "important");
  message.style.setProperty("text-align", "center", "important");
  message.style.setProperty("direction", "rtl", "important");

  text.split("\n").forEach(function(line, index) {

    const span = document.createElement("span");

    span.textContent = line || "\u00A0";

    span.style.display = "block";
    span.style.color = index === 0 ? "#d10067" : "#111111";
    span.style.opacity = "0";
    span.style.transform = "translateY(12px)";
    span.style.transition = "opacity .7s ease, transform .7s ease";
    span.style.margin = "5px 0";

    if (index === 0) {
      span.style.fontWeight = "900";
      span.style.fontSize = "1.15em";
    }

    message.appendChild(span);

    setTimeout(function() {
      span.style.opacity = "1";
      span.style.transform = "translateY(0)";
    }, 500 + index * 350);

  });

  // التوقيع
  if (signature) {

    signature.style.setProperty("color", "#d10067", "important");
    signature.style.setProperty("opacity", "0", "important");
    signature.style.setProperty("transform", "translateY(10px)", "important");
    signature.style.setProperty("position", "relative", "important");
    signature.style.setProperty("z-index", "30", "important");

    setTimeout(function() {
      signature.style.setProperty("opacity", "1", "important");
      signature.style.setProperty("transform", "translateY(0)", "important");
    }, 500 + text.split("\n").length * 350 + 700);
  }

});
