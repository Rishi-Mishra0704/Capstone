// Imports
const navBar = document.getElementById('nav-bar');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('close');
const navList = document.getElementById('nav-list');
const featuredSpeakers = document.getElementById('featured-speakers');
const moreBtn = document.getElementById('more');
const lessBtn = document.getElementById('less');
// End of imports ------------------------------------------------------------------
// Navbar algorithm
menuBtn.onclick = function display() {
  navBar.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'block';
  navBar.style.position = 'absolute';
  navBar.style.display = 'flex';
  navBar.style.justifyContent = 'center';
  navBar.style.alignItems = 'center';
  navList.style.display = 'flex';
  navList.style.flexDirection = 'column';
};
closeBtn.onclick = function close() {
  navBar.style.display = 'none';
  menuBtn.style.display = 'block';
};
window.onclick = function exit(event) {
  if (event.target === navBar) {
    navBar.style.display = 'none';
  }
};
// End of navbar -------------------------------------------------------------------
// Speakers algorithm
const speakers = [
  {
    key: 0,
    speakerName: 'Garry Kasparov',
    speakerImg: './assets/garry.jpeg',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, tempore?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos incidunt quasi aspernatur temporibus quam?',
  },
  {
    key: 1,
    speakerName: 'Vishwanathan Anand',
    speakerImg: './assets/anand.jpeg',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, tempore?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos incidunt quasi aspernatur temporibus quam.',
  },
  {
    key: 2,
    speakerName: 'Magnus Carlsen',
    speakerImg: './assets/magnus.jpeg',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, tempore?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos incidunt quasi aspernatur temporibus quam.',
  },
  {
    key: 3,
    speakerName: 'Vladimir Kramnik',
    speakerImg: './assets/kramnik.jpeg',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, tempore?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos incidunt quasi aspernatur temporibus quam.',
  },
  {
    key: 4,
    speakerName: 'Hikaru Nakamura',
    speakerImg: './assets/hikaru.jpeg',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, tempore?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos incidunt quasi aspernatur temporibus quam.',
  },
  {
    key: 5,
    speakerName: 'Anish Giri',
    speakerImg: './assets/anish.jpeg',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, tempore?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos incidunt quasi aspernatur temporibus quam.',
  },
];
for (let i = 0; i <= speakers.length; i += 1) {
  const listItem = document.createElement('li');
  listItem.className = 'featured-speaker active';
  listItem.innerHTML = `<div class="featured-speaker-profile-container">
  <img src="${speakers[i].speakerImg}" alt="${speakers[i].speakerName}">
</div>
<div class="featured-speaker__info">
  <h4 class="featured-speaker__name">${speakers[i].speakerName}</h4>
  <p class="featured-speaker__title">${speakers[i].title}</p>
  <hr />
  <p class="featured-speaker__about">${speakers[i].description}</p>
</div>`;
  featuredSpeakers.appendChild(listItem);
  if (i >= 2) {
    listItem.className = 'featured-speaker hidden';
  }
  moreBtn.addEventListener('click', () => {
    listItem.className = 'featured-speaker active';
    lessBtn.style.display = 'block';
    moreBtn.style.display = 'none';
  });
  if (i >= 2) {
    lessBtn.addEventListener('click', () => {
      listItem.className = 'featured-speaker hidden';
      lessBtn.style.display = 'none';
      moreBtn.style.display = 'block';
    });
  }
}

// END of speakers
