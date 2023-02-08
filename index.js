// Imports
const navBar = document.getElementById("nav-bar");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("close");
const navList = document.getElementById("nav-list");
const speakerContainer = document.getElementById("speaker-container");
const featuredSpeakers = document.getElementById("featured-speakers");
//End of imports ------------------------------------------------------------------
// Navbar algorithm
menuBtn.onclick = function display() {
  navBar.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  navBar.style.position = "absolute";
  navBar.style.display = "flex";
  navBar.style.justifyContent = "center";
  navBar.style.alignItems = "center";
};
closeBtn.onclick = function close() {
  navBar.style.display = "none";
  menuBtn.style.display = "block";
};
window.onclick = function exit(event) {
  if (event.target === navBar) {
    navBar.style.display = "none";
  }
};
// End of navbar -------------------------------------------------------------------
// Speakers algorithm
const speakers = [
  {
    key: 0,
    speakerName: "Yochai Benkler",
    speakerImg: "./assets/benkler.png",
    title:
      "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, sint.",
  },
  {
    key: 1,
    speakerName: "Yochai Benkler",
    speakerImg: "./assets/roh.png",
    title:
      "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, sint.",
  },
  {
    key: 2,
    speakerName: "Yochai Benkler",
    speakerImg: "./assets/chon.png",
    title:
      "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, sint.",
  },
  {
    key: 3,
    speakerName: "Yochai Benkler",
    speakerImg: "./assets/julia.png",
    title:
      "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, sint.",
  },
  {
    key: 4,
    speakerName: "Yochai Benkler",
    speakerImg: "./assets/lila.png",
    title:
      "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, sint.",
  },
  {
    key: 5,
    speakerName: "Yochai Benkler",
    speakerImg: "./assets/merkley.png",
    title:
      "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, sint.",
  },
];
speakers.forEach((speaker) => {
  const listItem = document.createElement("li");
  listItem.className = "featured-speaker";
  listItem.innerHTML = `<div class="featured-speaker-profile-container">
            <img src="${speaker.speakerImg}" alt="${speaker.speakerName}">
        </div>
        <div class="featured-speaker__info">
            <h4 class="featured-speaker__name">${speaker.speakerName}</h4>
            <p class="featured-speaker__title">${speaker.title}</p>
            <hr />
            <p class="featured-speaker__about">${speaker.description}</p>
        </div>`;
  featuredSpeakers.appendChild(listItem);
});
