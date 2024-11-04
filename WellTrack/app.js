const textElement = document.querySelector(".greet");
const words = textElement.innerText.split(" ");
const tipsSection = document.querySelector("#tipsSection");
const tipsText = document.querySelector("#tipsText");
const randomBtn = document.querySelector("#randomBtn");

//First animation
// Golește textul
textElement.innerHTML = "";

// Adaugă fiecare cuvânt ca un element span
words.forEach((word) => {
  const span = document.createElement("span");
  span.innerText = word + " "; // Adaugă spațiu după fiecare cuvânt
  textElement.appendChild(span);
});

// Animează fiecare cuvânt
gsap.from(".greet span", {
  opacity: 0,
  stagger: 0.1,
  duration: 0.4,
});

//Tips
const tipsArray = [
  "Drink genoeg water elke dag.",
  "Eet dagelijks groenten en fruit.",
  "Neem regelmatig pauzes bij het werken.",
  "Doe aan lichaamsbeweging, zoals wandelen of fietsen.",
  "Zorg voor een goede nachtrust.",
];
const bgArray = ["#A8E6CF", "#DCEDC2", "#FFAAA5", "#FF8C94", "#4DB6AC"];

function loadRandomTip() {
  const randomTip = tipsArray[Math.floor(Math.random() * tipsArray.length)];
  const randomBg = bgArray[Math.floor(Math.random() * bgArray.length)];
  // tipsText.textContent = randomTip;
  // tipsSection.style.backgroundColor = randomBg;

  const tl = gsap.timeline();
  tl.to(tipsText, { opacity: 0, duration: 0.5 }) // ascunde textul
    .to(tipsSection, { backgroundColor: randomBg, duration: 0.5 }, "<") // schimbă fundalul
    .call(() => {
      tipsText.textContent = randomTip;
    }) // schimbă textul
    .to(tipsText, { opacity: 1, duration: 0.5 }); // afișează noul text
}
setInterval(loadRandomTip, 5000);

randomBtn.addEventListener("click", loadRandomTip);

//Steps
// Înregistrăm plugin-ul ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Configurăm animația pentru bara de progres
gsap.to("#progress-circle", {
  width: "100%", // Bara de progres va crește până la 100%
  ease: "power1.inOut", // Setează o funcție de easing pentru a face animația mai fluidă
  scrollTrigger: {
    trigger: "#progress-circle",
    start: "bottom 80%", // Animația începe când elementul ajunge 80% în viewport
    toggleActions: "play none none none",
    scrub: true,
    onUpdate: function (self) {
      //self is scroll trigger
      const progressText = document.querySelector(".progress-text");
      let progress = self.progress * 100; // Obținem progresul în %
      progressText.innerText = `${Math.round(progress)}%`;
    },
  },
});

//Weight Tracker
gsap.fromTo(
  ".weightTracker",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".weightTracker",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  }
);
const xValues = ["Januari", "Februari", "Maart", "April", "Mei"];
const yValues = [80, 75, 70, 67, 63];

const barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Your weight tracker",
    },
    animation: {
      duration: 2000,
    },
  },
});
//Calorieen tracker
const x2Values = ["Gebruikte Calorieen", "Nog te gebruiken"];
const y2Values = [63, 37];
const bar2Colors = ["#b91d47", "#00aba9"];

new Chart("mySecondChart", {
  type: "pie",
  data: {
    labels: x2Values,
    datasets: [
      {
        backgroundColor: bar2Colors,
        data: y2Values,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Calorieen tracker",
    },
  },
});
