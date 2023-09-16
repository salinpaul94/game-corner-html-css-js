const main = document.querySelector("main");
const textarea = document.getElementById("voice");
const readBtn = document.getElementById("text");
const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close");

const data = [
  {
    image: "zbirdwoodpecker.jpg",
    text: "woodpecker",
  },
  {
    image: "zbirdpigeon.jpg",
    text: "pigeon",
  },
  {
    image: "zbirdturkey.jpg",
    text: "turke",
  },
  {
    image: "zbirdpeacock.jpg",
    text: "peacock",
  },
  {
    image: "zbirdowl.jpg",
    text: "owl",
  },
  {
    image: "zbirdeagle.jpg",
    text: "eagle",
  },
  {
    image: "zbirdduck.jpg",
    text: "duck",
  },
  {
    image: "zbirdpenguin.jpg",
    text: "penguin",
  },
];

data.forEach(createBox);

function createBox(item) {
  const box = document.createElement("div");
  const { image, text } = item;
  box.classList.add("box");
  box.innerHtml = `
    <img srd="${image}" alt="${text}" />
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
  voices = speechSynthesis.getVoice();
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;
    voiceSelect.appendChild(option);
  });
}

speechSynthesis.addEventListener("voiceschanged", getVoice);
getVoice();
