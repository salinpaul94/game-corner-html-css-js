const main = document.querySelector("main");
const voiceSelect = document.getElementById("voice");
const textarea = document.getElementById("text");
const readBtn = document.getElementById("read");
const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close");

const data = [
  {
    image: "zshapecircle.png",
    text: "circle",
  },
  {
    image: "zshapehexagon.png",
    text: "hexagon",
  },
  {
    image: "zshapeheptagon.png",
    text: "heptagon",
  },
  {
    image: "zshapeoval.png",
    text: "oval",
  },
  {
    image: "zshaperectangle.png",
    text: "rectangle",
  },
  {
    image: "zshapesquare.png",
    text: "square",
  },
  {
    image: "zshapestar.png",
    text: "star",
  },
  {
    image: "zshapetriangle.png",
    text: "triangel",
  },
  {
    image: "zshapepentagon.png",
    text: "pentagon",
  },
];

data.forEach(createBox);

function createBox(item) {
  const box = document.createElement("div");
  const { image, text } = item;
  box.classList.add("box");
  box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;
  box.addEventListener("click", () => {
    setTextMessage(text);
    speakText();
    box.classList.add("active");
    setTimeout(() => box.classList.remove("active"), 800);
  });
  main.appendChild(box);
}

const message = new SpeechSynthesisUtterance();

function setTextMessage(text) {
  message.text = text;
}

function speakText() {
  speechSynthesis.speak(message);
}

let voices = [];
function getVoice() {
  voices = SpeechSynthesis.getVoice();
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;
    voiceSelect.appendChild(option);
  });
}
speechSynthesis.addEventListener("voicescanged", getVoice);
getVoice();
