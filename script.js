const photos = [
  "password_photo.jpg",
  "dunia_photo_2.jpeg",
  "dunia_photo_3.jpeg"
];

const videos = [
  "memory_1.mp4",
  "memory_2.mp4",
  "memory_3.mp4",
  "memory_4.mov",
  "memory_5.mp4",
  "memory_6.mov",
  "memory_7.mp4",
  "memory_8.mov"
];

const audios = [
  {file:"for_you_1.m4a", title:"FOR YOU • 01 ❤️"},
  {file:"for_you_2.m4a", title:"FOR YOU • 02 ❤️"},
  {file:"for_you_3.m4a", title:"FOR YOU • 03 ❤️"}
];

const musicFile = "baby_one_more_time.mp3";
const musicMaxSeconds = 60;
const password = "تونيا";

const $ = id => document.getElementById(id);

const welcome = $("welcome");
const yallaSound = $("yallaSound");
const letsGo = $("letsGo");

if (letsGo) {
  letsGo.addEventListener("click", async () => {
    if (welcome) welcome.classList.add("hidden");

    const lock = $("lock");
    if (lock) lock.classList.remove("hidden");

    try {
      if (yallaSound) {
        yallaSound.currentTime = 0;
        await yallaSound.play();
      }
    } catch(e) {}

    if ($("pass")) $("pass").focus();
  });
}

const pass = $("pass");
const wrong = $("wrong");

if ($("enter")) $("enter").onclick = unlock;

if (pass) {
  pass.addEventListener("keydown", e => {
    if (e.key === "Enter") unlock();
  });
}

if ($("showPass")) {
  $("showPass").onclick = () => {
    pass.type = pass.type === "password" ? "text" : "password";
  };
}

function unlock() {
  if (!pass) return;

  if (pass.value.trim() !== password) {
    if (wrong) wrong.textContent = "الباسورد مش صح... حاولي تاني ❤️";
    pass.value = "";
    return;
  }

  if ($("lock")) $("lock").classList.add("hidden");
  if ($("site")) $("site").classList.remove("hidden");

  startHearts();
  typeLetter();

  const m = $("bgMusic");

  if (m && musicFile) {
    m.src = musicFile;
    m.volume = 0.7;

    m.play()
      .then(() => {
        if ($("music")) $("music").textContent = "❚❚";
      })
      .catch(() => {});
  }
}

const message = `دنيا،

النهارده حبيت أعملك حاجة مختلفة...
مش مجرد رسالة تتبعت وتخلص،
لكن مكان صغير تفضلي تفتكريه كل ما تحبيه.

يمكن الكلام ساعات ما يكفيش،
بس أتمنى كل تفصيلة هنا توصلك حاجة واحدة:
إن وجودك مميز،
وإن ضحكتك ليها مكان خاص جدًا.

في عيد ميلادك، أتمنى لك سنة جديدة
تكون أهدى، وأجمل، ومليانة حاجات تستاهليها.

كل سنة وإنتِ طيبة يا دنيا،
وكل سنة وإنتِ أحلى "دنيا". ❤️`;

function typeLetter() {
  const el = $("typed");

  if (!el) return;

  let i = 0;

  const timer = setInterval(() => {
    el.textContent = message.slice(0, ++i);

    if (i >= message.length) {
      clearInterval(timer);
    }
  }, 28);
}

function render() {

  const photoContainer = $("photos");

  if (photoContainer && photos.length) {
    photoContainer.innerHTML = "";

    photos.forEach(file => {
      const img = document.createElement("img");

      img.src = file;
      img.alt = "Dunia ❤️";
      img.loading = "lazy";

      photoContainer.appendChild(img);
    });
  }

  const videoContainer = $("videos");

  if (videoContainer && videos.length) {
    videoContainer.innerHTML = "";

    videos.forEach(file => {
      const v = document.createElement("video");

      v.src = file;
      v.controls = true;
      v.playsInline = true;
      v.preload = "metadata";

      videoContainer.appendChild(v);
    });
  }

  const audioContainer = $("audios");

  if (audioContainer && audios.length) {
    audioContainer.innerHTML = "";

    audios.forEach(audio => {

      const box = document.createElement("div");

      box.className = "audio-item";

      const title = document.createElement("p");

      title.textContent = audio.title;

      const au = document.createElement("audio");

      au.src = audio.file;
      au.controls = true;
      au.preload = "metadata";

      box.appendChild(title);
      box.appendChild(au);

      audioContainer.appendChild(box);
    });
  }

  const m = $("bgMusic");

  if (m && musicFile) {

    m.src = musicFile;

    m.addEventListener("timeupdate", () => {

      if (m.currentTime >= musicMaxSeconds) {

        m.pause();
        m.currentTime = 0;

        if ($("music")) {
          $("music").textContent = "♫";
        }
      }
    });

    if ($("music")) {

      $("music").onclick = async () => {

        try {

          if (m.paused) {

            if (m.currentTime >= musicMaxSeconds) {
              m.currentTime = 0;
            }

            await m.play();

            $("music").textContent = "❚❚";

          } else {

            m.pause();

            $("music").textContent = "♫";
          }

        } catch(e) {}
      };
    }

  } else {

    if ($("music")) {
      $("music").style.display = "none";
    }
  }
}

function createHeart() {

  const container = $("hearts");

  if (!container) return;

  const h = document.createElement("div");

  h.className = "heart";

  h.textContent = Math.random() > .25 ? "♥" : "♡";

  h.style.left = Math.random() * 100 + "vw";

  h.style.fontSize =
    14 + Math.random() * 24 + "px";

  h.style.animationDuration =
    4 + Math.random() * 4 + "s";

  container.appendChild(h);

  setTimeout(() => h.remove(), 9000);
}

function startHearts() {

  setInterval(() => {
    createHeart();
  }, 650);
}

const starsContainer = $("stars");

if (starsContainer) {

  for (let i = 0; i < 80; i++) {

    const s = document.createElement("i");

    s.className = "star";

    s.style.left = Math.random() * 100 + "vw";

    s.style.top = Math.random() * 100 + "vh";

    s.style.opacity =
      .15 + Math.random() * .5;

    starsContainer.appendChild(s);
  }
}

render();


// =====================================
// LAST SURPRISE
// =====================================

const finalButton = $("finalButton");
const finalAudio = $("finalAudio");
const finalStatus = $("finalStatus");
const balloons = $("balloons");

if (finalButton && finalAudio) {

  finalButton.addEventListener("click", async () => {

    try {

      finalAudio.currentTime = 0;

      await finalAudio.play();

      finalButton.textContent =
        "بيشتغل دلوقتي 🎙️";

      if (finalStatus) {
        finalStatus.textContent =
          "اسمعي للآخر... ❤️";
      }

    } catch(e) {

      if (finalStatus) {
        finalStatus.textContent =
          "دوسي مرة تانية لتشغيل الريكورد ❤️";
      }
    }
  });

  finalAudio.addEventListener("ended", () => {

    finalButton.textContent =
      "المفاجأة خلصت 🎈";

    if (finalStatus) {
      finalStatus.textContent =
        "كل سنة وإنتِ طيبة يا Dunia ❤️";
    }

    launchBalloons();
  });
}

function launchBalloons() {

  if (!balloons) return;

  const count = 28;

  for (let i = 0; i < count; i++) {

    const b = document.createElement("div");

    b.className = "balloon";

    b.style.left =
      Math.random() * 100 + "%";

    b.style.animationDelay =
      Math.random() * 1.8 + "s";

    b.style.animationDuration =
      4 + Math.random() * 3 + "s";

    const size =
      32 + Math.random() * 28;

    b.style.width =
      size + "px";

    b.style.height =
      size * 1.32 + "px";

    const hue =
      Math.random() * 360;

    b.style.color =
      `hsl(${hue}, 70%, 65%)`;

    b.style.background =
      `hsl(${hue}, 70%, 65%)`;

    balloons.appendChild(b);

    setTimeout(() => b.remove(), 8500);
  }
}


// =====================================
// MINI GAME
// =====================================

document.querySelectorAll(".game-option")
.forEach(button => {

  button.addEventListener("click", () => {

    const result = $("gameResult");

    if (!result) return;

    if (button.textContent.includes("Dunia")) {

      result.textContent =
        "صح! إنتِ طبعًا ❤️😂";

      result.style.color =
        "#d10067";

      for (let i = 0; i < 12; i++) {
        setTimeout(createHeart, i * 70);
      }

    } else {

      result.textContent =
        "غلط 😂 جربي تاني… الإجابة واضحة جدًا: Dunia ❤️";

      result.style.color =
        "#000";
    }
  });
});


// =====================================
// SURPRISE BOX
// =====================================

const giftBox = $("giftBox");

if (giftBox) {

  giftBox.addEventListener("click", () => {

    giftBox.classList.add("opened");

    const giftMessage =
      $("giftMessage");

    if (giftMessage) {
      giftMessage.classList.remove("hidden");
    }

    for (let i = 0; i < 18; i++) {
      setTimeout(createHeart, i * 45);
    }
  });
}


// =====================================
// CD PLAYER
// =====================================

const cdAudio = $("cdAudio");
const cdDisc = $("cdDisc");
const cdPlay = $("cdPlay");
const cdPause = $("cdPause");

if (cdAudio) {

  if (cdPlay) {

    cdPlay.addEventListener("click", async () => {

      try {

        await cdAudio.play();

        if (cdDisc) {
          cdDisc.classList.add("playing");
        }

      } catch(e) {}
    });
  }

  if (cdPause) {

    cdPause.addEventListener("click", () => {

      cdAudio.pause();

      if (cdDisc) {
        cdDisc.classList.remove("playing");
      }
    });
  }

  cdAudio.addEventListener("ended", () => {

    if (cdDisc) {
      cdDisc.classList.remove("playing");
    }
  });
}


// =====================================
// EASTER EGG
// =====================================

const eggTrigger = $("eggTrigger");

if (eggTrigger) {

  eggTrigger.addEventListener("click", () => {

    const eggMessage =
      $("eggMessage");

    if (eggMessage) {
      eggMessage.classList.remove("hidden");
    }

    for (let i = 0; i < 25; i++) {
      setTimeout(createHeart, i * 35);
    }
  });
}


// =====================================
// FINAL LETTER
// =====================================

const finalScreen =
  $("finalMessageScreen");

const finalCard =
  finalScreen?.querySelector(".final-message-card");

const finalTyped =
  $("finalTypedMessage");

const finalSignature =
  $("finalSignature");

function revealFinalLetter() {

  if (
    !finalScreen ||
    !finalTyped ||
    finalTyped.dataset.started === "1"
  ) {
    return;
  }

  finalTyped.dataset.started = "1";

  if (finalCard) {
    finalCard.classList.add("reveal");
  }

  const msg =
    finalTyped.dataset.message || "";

  finalTyped.innerHTML = "";

  const lines =
    msg.split("\n");

  lines.forEach((line, i) => {

    const span =
      document.createElement("span");

    span.className = "line";

    span.textContent =
      line || "\u00A0";

    finalTyped.appendChild(span);

    setTimeout(() => {

      span.classList.add("show");

    }, 900 + i * 420);
  });

  setTimeout(() => {

    if (finalSignature) {
      finalSignature.classList.add("show");
    }

    finalScreen.classList.add("finished");

    for (let i = 0; i < 18; i++) {
      setTimeout(createHeart, i * 55);
    }

  }, 900 + lines.length * 420 + 600);
}

if (finalScreen) {

  const observer =
    new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          revealFinalLetter();
        }

      });

    }, {
      threshold: 0.35
    });

  observer.observe(finalScreen);
// ===== FINAL SCREEN FIX ONLY =====

const finalFixStyle = document.createElement("style");

finalFixStyle.textContent = `
#finalMessageScreen {
  min-height: 100vh !important;
  position: relative !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 60px 16px !important;
  box-sizing: border-box !important;
  overflow: hidden !important;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #fff5fa 50%,
    #ffe8f3 100%
  ) !important;
}

#finalMessageScreen .final-message-card {
  width: min(800px, 100%) !important;
  box-sizing: border-box !important;
  position: relative !important;
  z-index: 10 !important;
  background: rgba(255,255,255,.97) !important;
  color: #111 !important;
  text-align: center !important;
  direction: rtl !important;
  border: 3px solid #111 !important;
  border-radius: 25px !important;
  padding: 40px 25px !important;
  box-shadow: 10px 10px 0 #111 !important;
}

#finalMessageScreen h1 {
  color: #111 !important;
  font-size: clamp(30px, 7vw, 60px) !important;
  line-height: 1.2 !important;
  margin: 15px 0 20px !important;
}

#finalMessageScreen .final-intro {
  color: #555 !important;
  font-size: 17px !important;
  line-height: 1.8 !important;
  margin-bottom: 25px !important;
}

#finalMessageScreen .user-final-message {
  color: #111 !important;
  width: 100% !important;
  max-width: 700px !important;
  margin: 0 auto !important;
  font-size: clamp(18px, 4vw, 25px) !important;
  font-weight: 600 !important;
  line-height: 2 !important;
  text-align: center !important;
  direction: rtl !important;
  overflow: visible !important;
}

#finalMessageScreen .user-final-message .line {
  display: block !important;
  color: #111 !important;
  opacity: 0 !important;
  transform: translateY(15px) !important;
  margin: 5px 0 !important;
  white-space: pre-wrap !important;
  transition: opacity .8s ease, transform .8s ease !important;
}

#finalMessageScreen .user-final-message .line.show {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

#finalMessageScreen .user-final-message .line:first-child {
  color: #d10067 !important;
  font-size: 1.15em !important;
  font-weight: 900 !important;
}

#finalMessageScreen .signature {
  position: relative !important;
  z-index: 20 !important;
  color: #d10067 !important;
  font-size: 20px !important;
  font-weight: 900 !important;
  margin-top: 30px !important;
}

#finalMessageScreen .tiny-stars {
  position: relative !important;
  z-index: 20 !important;
  color: #d10067 !important;
}

#finalMessageScreen .final-glow {
  pointer-events: none !important;
}

#finalMessageScreen .heart,
#finalMessageScreen .balloon {
  z-index: 1 !important;
  pointer-events: none !important;
}

@media(max-width:600px) {
  #finalMessageScreen {
    padding: 45px 12px !important;
  }

  #finalMessageScreen .final-message-card {
    padding: 30px 17px !important;
    border-width: 2px !important;
    box-shadow: 7px 7px 0 #111 !important;
  }

  #finalMessageScreen .user-final-message {
    font-size: 18px !important;
    line-height: 1.85 !important;
  }
}
`;

document.head.appendChild(finalFixStyle);


// Fix heart function used by the final effects
if (typeof createHeart !== "function") {
  window.createHeart = function() {
    const container = document.getElementById("hearts");
    if (!container) return;

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.textContent = Math.random() > .25 ? "♥" : "♡";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 14 + Math.random() * 24 + "px";
    heart.style.animationDuration = 4 + Math.random() * 4 + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 9000);
  };
}


// Rebuild the final message cleanly
const finalScreenFix = document.getElementById("finalMessageScreen");
const finalMessageFix = document.getElementById("finalTypedMessage");

if (finalScreenFix && finalMessageFix) {

  const messageText =
    finalMessageFix.dataset.message || "";

  finalMessageFix.innerHTML = "";

  messageText.split("\n").forEach((line, index) => {

    const span = document.createElement("span");

    span.className = "line";
    span.textContent = line || "\u00A0";

    finalMessageFix.appendChild(span);

    setTimeout(() => {
      span.classList.add("show");
    }, 700 + index * 450);
  });

  const signature =
    document.getElementById("finalSignature");

  if (signature) {
    setTimeout(() => {
      signature.classList.add("show");
    }, 700 + messageText.split("\n").length * 450 + 700);
  }
}
