const root = document.querySelector("#root");

const images = [
  "https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg",
  "https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688461053_kartin-papik-pro-p-kartinki-priroda-leto-krasivie-v-khoroshem-56.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400",
];

const frame = document.createElement("div");
frame.classList.add("frame");
const cards = document.createElement("div");
cards.classList.add("cards");
const triggers = document.createElement("div");
triggers.classList.add("triggers");

const leftBtn = document.createElement("button");
leftBtn.classList.add("leftBtn");
leftBtn.textContent = "<";
const rightBtn = document.createElement("button");
rightBtn.classList.add("rightBtn");
rightBtn.textContent = ">";

triggers.append(leftBtn, rightBtn);
frame.append(cards, triggers);
root.append(frame);
