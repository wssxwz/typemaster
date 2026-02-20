// TypeKids - 幼儿版首页逻辑

function renderAnimalCards() {
  const grid = document.getElementById('kidsAnimalsGrid');
  if (!grid || typeof kidsAnimals === 'undefined') return;

  const cardColors = [
    '#f8c8d4', '#ffe0b2', '#b3e5fc',
    '#fff9c4', '#c8e6c9', '#e1bee7'
  ];

  grid.innerHTML = kidsAnimals.map((animal, idx) => {
    const starsHtml = '⭐'.repeat(animal.stars) + '☆'.repeat(3 - animal.stars);
    return `
      <div class="kids-animal-card"
           style="background: ${animal.color};"
           onclick="startAnimal('${animal.id}')">
        <span class="card-emoji">${animal.emoji}</span>
        <div class="card-animal-name">${animal.name}</div>
        <div class="card-animal-name-en">${animal.nameEn}</div>
        <div class="card-desc">${animal.description}</div>
        <div class="card-stars">${starsHtml}</div>
        <button class="card-start-btn">开始练习 →</button>
      </div>
    `;
  }).join('');
}

function startAnimal(animalId) {
  localStorage.setItem('kidsAnimalId', animalId);
  window.location.href = 'kids-practice.html';
}

// Init
document.addEventListener('DOMContentLoaded', renderAnimalCards);
