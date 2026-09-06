// ====== الملفات: ضيفي أسماء ملفاتك هنا ======
const photos = [
  "password_photo.jpg",
  "dunia_photo_2.jpeg",
  "dunia_photo_3.jpeg",
  // "photo1.jpg",
  // "photo2.jpg",
  // "photo3.jpg",
  // "photo4.jpg",
];

const videos = [
  "memory_1.mp4",
  "memory_2.mp4",
  "memory_3.mp4",
  "memory_4.mov",
  "memory_5.mp4",
  "memory_6.mov",
  "memory_7.mp4",
  "memory_8.mov",
];

const audios = [
  {file:"for_you_1.m4a", title:"FOR YOU • 01 ❤️"},
  {file:"for_you_2.m4a", title:"FOR YOU • 02 ❤️"},
  {file:"for_you_3.m4a", title:"FOR YOU • 03 ❤️"},
];

// لو عندك أغنية، ضعيها داخل audio ثم اكتبي اسمها هنا
const musicFile = "baby_one_more_time.mp3";

const password = "تونيا";

const welcome = document.getElementById("welcome");
const yallaSound = document.getElementById("yallaSound");
const letsGo = document.getElementById("letsGo");
letsGo.addEventListener("click", async () => {
  welcome.classList.add("hidden");
  document.getElementById("lock").classList.remove("hidden");
  try { await yallaSound.play(); } catch(e) {}
  document.getElementById("pass").focus();
});

const $ = id => document.getElementById(id);
const pass = $("pass"), wrong = $("wrong");

$("enter").onclick = unlock;
pass.addEventListener("keydown", e => { if(e.key==="Enter") unlock(); });

$("showPass").onclick = () => {
  pass.type = pass.type === "password" ? "text" : "password";
};

function unlock(){
  if(pass.value.trim() !== password){
    wrong.textContent = "الباسورد مش صح... حاولي تاني ❤️";
    pass.value = "";
    return;
  }
  $("lock").classList.add("hidden");
  $("site").classList.remove("hidden");
  startHearts();
  typeLetter();
  const m = $("bgMusic");
  if (m.src) { m.volume = 0.7; m.play().then(()=>{$("music").textContent="❚❚"}).catch(()=>{}); }
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

function typeLetter(){
  const el = $("typed");
  let i=0;
  const timer=setInterval(()=>{
    el.textContent=message.slice(0,++i);
    if(i>=message.length) clearInterval(timer);
  },28);
}

function render(){
  if(photos.length){
    $("photos").innerHTML="";
    photos.forEach(f=>{
      const img=document.createElement("img");
      img.src=""+f; img.alt="ذكرى"; img.loading="lazy";
      $("photos").appendChild(img);
    });
  }
  if(videos.length){
    $("videos").innerHTML="";
    videos.forEach(f=>{
      const v=document.createElement("video");
      v.src=""+f; v.controls=true; v.playsInline=true;
      $("videos").appendChild(v);
    });
  }
  if(audios.length){
    $("audios").innerHTML="";
    audios.forEach(a=>{
      const box=document.createElement("div"); box.className="audio-item";
      box.innerHTML=`<p>${a.title||"تسجيل صوتي ❤️"}</p>`;
      const au=document.createElement("audio"); au.src=""+a.file; au.controls=true;
      box.appendChild(au); $("audios").appendChild(box);
    });
  }
  if(musicFile){
    $("bgMusic").src=""+musicFile;
    const m = $("bgMusic");
    m.addEventListener("timeupdate", () => {
      if (m.currentTime >= musicMaxSeconds) {
        m.pause();
        m.currentTime = 0;
        $("music").textContent = "♫";
      }
    });
    $("music").onclick=async()=>{
      try {
        if(m.paused){
          if(m.currentTime >= musicMaxSeconds) m.currentTime = 0;
          await m.play();
          $("music").textContent="❚❚";
        }else{
          m.pause();
          $("music").textContent="♫";
        }
      } catch(e) {}
    };
  }else{
    $("music").style.display="none";
  }
}

function startHearts(){
  setInterval(()=>{
    const h=document.createElement("div");h.className="heart";h.textContent=Math.random()>.25?"♥":"♡";
    h.style.left=Math.random()*100+"vw";
    h.style.fontSize=12+Math.random()*22+"px";
    h.style.animationDuration=5+Math.random()*5+"s";
    $("hearts").appendChild(h);setTimeout(()=>h.remove(),11000);
  },650);
}
for(let i=0;i<80;i++){
  const s=document.createElement("i");s.className="star";
  s.style.left=Math.random()*100+"vw";s.style.top=Math.random()*100+"vh";
  s.style.opacity=.15+Math.random()*.5;
  $("stars").appendChild(s);
}
render();

// آخر مفاجأة: تشغيل الريكورد ثم إطلاق البلالين عند انتهائه
const finalButton = document.getElementById("finalButton");
const finalAudio = document.getElementById("finalAudio");
const finalStatus = document.getElementById("finalStatus");
const balloons = document.getElementById("balloons");

if (finalButton && finalAudio) {
  finalButton.addEventListener("click", async () => {
    try {
      finalAudio.currentTime = 0;
      await finalAudio.play();
      finalButton.textContent = "بيشتغل دلوقتي 🎙️";
      finalStatus.textContent = "اسمعي للآخر... ❤️";
    } catch (e) {
      finalStatus.textContent = "دوسي مرة تانية لتشغيل الريكورد ❤️";
    }
  });

  finalAudio.addEventListener("ended", () => {
    finalButton.textContent = "المفاجأة خلصت 🎈";
    finalStatus.textContent = "كل سنة وإنتِ طيبة يا Dunia ❤️";
    launchBalloons();
  });
}

function launchBalloons(){
  const count = 28;
  for(let i=0;i<count;i++){
    const b=document.createElement("div");
    b.className="balloon";
    b.style.left=(Math.random()*100)+"%";
    b.style.animationDelay=(Math.random()*1.8)+"s";
    b.style.animationDuration=(4+Math.random()*3)+"s";
    const size=32+Math.random()*28;
    b.style.width=size+"px";
    b.style.height=(size*1.32)+"px";
    b.style.color="hsl("+(Math.random()*360)+", 70%, 65%)";
    b.style.background="hsl("+(Math.random()*360)+", 70%, 65%)";
    balloons.appendChild(b);
    setTimeout(()=>b.remove(),8500);
  }
}


// ===== EXTRA FEATURES =====
document.querySelectorAll(".game-option").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const result=document.getElementById("gameResult");
    if(btn.textContent.includes("Dunia")){
      result.textContent="صح! إنتِ طبعًا ❤️😂";
      result.style.color="#d10067";
      for(let i=0;i<12;i++) setTimeout(()=>createHeart(),i*70);
    }else{
      result.textContent="غلط 😂 جربي تاني… الإجابة واضحة جدًا: Dunia ❤️";
      result.style.color="#000";
    }
  });
});

const giftBox=document.getElementById("giftBox");
if(giftBox){
  giftBox.addEventListener("click",()=>{
    giftBox.classList.add("opened");
    document.getElementById("giftMessage").classList.remove("hidden");
    for(let i=0;i<18;i++) setTimeout(()=>createHeart(),i*45);
  });
}

const cdAudio=document.getElementById("cdAudio");
const cdDisc=document.getElementById("cdDisc");
const cdPlay=document.getElementById("cdPlay");
const cdPause=document.getElementById("cdPause");
if(cdAudio){
  cdPlay.addEventListener("click",async()=>{
    try{await cdAudio.play();cdDisc.classList.add("playing")}catch(e){}
  });
  cdPause.addEventListener("click",()=>{
    cdAudio.pause();cdDisc.classList.remove("playing");
  });
  cdAudio.addEventListener("ended",()=>cdDisc.classList.remove("playing"));
}

const eggTrigger=document.getElementById("eggTrigger");
if(eggTrigger){
  eggTrigger.addEventListener("click",()=>{
    document.getElementById("eggMessage").classList.remove("hidden");
    for(let i=0;i<25;i++) setTimeout(()=>createHeart(),i*35);
  });
}

// ===== FINAL LETTER REVEAL =====
const finalScreen=document.getElementById("finalMessageScreen");
const finalCard=finalScreen?.querySelector(".final-message-card");
const finalTyped=document.getElementById("finalTypedMessage");
const finalSignature=document.getElementById("finalSignature");

function revealFinalLetter(){
  if(!finalScreen || !finalTyped || finalTyped.dataset.started==="1") return;
  finalTyped.dataset.started="1";
  finalCard?.classList.add("reveal");
  const msg=finalTyped.dataset.message || "";
  finalTyped.innerHTML="";
  const lines=msg.split("\n");
  lines.forEach((line,i)=>{
    const span=document.createElement("span");
    span.className="line";
    span.textContent=line || "\u00A0";
    finalTyped.appendChild(span);
    setTimeout(()=>span.classList.add("show"),900+i*420);
  });
  setTimeout(()=>{
    finalSignature?.classList.add("show");
    finalScreen.classList.add("finished");
    for(let i=0;i<18;i++) setTimeout(()=>createHeart(),i*55);
  },900+lines.length*420+600);
}

if(finalScreen){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting) revealFinalLetter();});
  },{threshold:.35});
  obs.observe(finalScreen);
}
