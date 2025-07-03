const apps = [
  { name: "Subway Surfers", size: "88 MB", category: "games", desc: "Run fast, dodge trains!", img: "images/subway.png" },
  { name: "Talking Jerry", size: "145 MB", category: "games", desc: "Talk with cute Jerry!", img: "images/chess.png" },
  { name: "Alien Blaster", size: "180 MB", category: "games", desc: "Blast invading aliens!", img: "images/alien.png" },
  { name: "Tips from Google", size: "250 MB", category: "tools", desc: "Useful Android tips!", img: "images/google.png" },
  { name: "Jungle Hunt", size: "158 MB", category: "games", desc: "Adventure in the jungle!", img: "images/jungle.png" },
  { name: "GTA", size: "1.30 GB", category: "games", desc: "Crime, cars, chaos!", img: "images/gta.png" },
  { name: "Trade with Abishek US", size: "390 MB", category: "tools", desc: "Simple trading made easy!", img: "images/logo.png" },
  { name: "Shades", size: "259 MB", category: "games", desc: "Stylish puzzle game!", img: "images/shadow.png" },
  { name: "Acrobrat", size: "60 MB", category: "tools", desc: "High-flying fun!", img: "images/pdf.png" }
];
const container = document.getElementById('appContainer');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalSize = document.getElementById('modalSize');
const modalDesc = document.getElementById('modalDesc');
const modalFeedback = document.getElementById('modalFeedback');
const modalComment = document.getElementById('modalComment');
const modalSubmit = document.getElementById('modalSubmit');
let currentApp = null;
apps.forEach(app => {
  const card = document.createElement('div');
  card.className = 'app-card';
  card.innerHTML = `
    <img src="${app.img}" alt="${app.name}">
    <h3>${app.name}</h3>
    <p>${app.size}</p>
    <button onclick="openModal('${app.name}')">Install</button>
  `;
  container.appendChild(card);
});
function openModal(name) {
  currentApp = apps.find(a => a.name === name);
  modal.style.display = 'block';
  modalImg.src = currentApp.img;
  modalTitle.textContent = currentApp.name;
  modalSize.textContent = "Size: " + currentApp.size;
  modalDesc.textContent = currentApp.desc;
  modalFeedback.innerHTML = '<p class="no-feedback">No feedback yet. Be the first to comment!</p>';
  modalComment.value = "";
  document.querySelectorAll('.rating-stars input').forEach(input => input.checked = false);
}
document.querySelector('.modal-close').onclick = () => {
  modal.style.display = 'none';
};
modalSubmit.onclick = () => {
  const comment = modalComment.value.trim();
  const rating = document.querySelector('.rating-stars input:checked');
  if (!comment && !rating) return;
  modalFeedback.innerHTML += `<p>⭐ ${rating ? rating.value : 'N/A'} - ${comment || 'No comment'}</p>`;
};
document.getElementById('themeToggle').onclick = () => {
  document.body.classList.toggle('dark');
};
document.getElementById('searchBar').oninput = (e) => {
  const keyword = e.target.value.toLowerCase();
  const cards = document.querySelectorAll('.app-card');
  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(keyword) ? '' : 'none';
  });
};
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.onclick = () => {
    const category = btn.dataset.category;
    const cards = document.querySelectorAll('.app-card');
    cards.forEach((card, i) => {
      card.style.display = category === 'all' || apps[i].category === category ? '' : 'none';
    });
  };
});
