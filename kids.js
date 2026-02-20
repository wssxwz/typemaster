// TypeKids - 幼儿版首页逻辑 + 成长树系统

let currentFilter = 'english';

// ============ 成长树系统 ============
const TreeSystem = {
  STORAGE_KEY: 'typekids_tree',

  getState() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) return JSON.parse(saved);
    return {
      totalChars: 0,
      dailyRecords: {},  // { '2026-02-20': 150 }
      startDate: new Date().toISOString().split('T')[0]
    };
  },

  saveState(state) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
  },

  addChars(count) {
    const state = this.getState();
    const today = new Date().toISOString().split('T')[0];
    state.totalChars += count;
    state.dailyRecords[today] = (state.dailyRecords[today] || 0) + count;
    this.saveState(state);
    return state;
  },

  getTodayChars() {
    const state = this.getState();
    const today = new Date().toISOString().split('T')[0];
    return state.dailyRecords[today] || 0;
  },

  getTreeAge() {
    const state = this.getState();
    const start = new Date(state.startDate);
    const now = new Date();
    const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    return Math.max(1, diff);
  },

  // 计算树的成长阶段 (1-5)
  getGrowthStage() {
    const state = this.getState();
    const total = state.totalChars;
    // 成长速度：每 500 字升一级，最高 5 级
    if (total < 500) return 1;
    if (total < 1500) return 2;
    if (total < 3000) return 3;
    if (total < 5000) return 4;
    return 5;
  },

  // 渲染 SVG 树
  render(containerId) {
    const stage = this.getGrowthStage();
    const container = document.getElementById(containerId);
    if (!container) return;

    const treeColors = [
      { trunk: '#8d6e63', leaves: '#81c784', bg: '#e8f5e9' },
      { trunk: '#795548', leaves: '#66bb6a', bg: '#c8e6c9' },
      { trunk: '#6d4c41', leaves: '#4caf50', bg: '#a5d6a7' },
      { trunk: '#5d4037', leaves: '#43a047', bg: '#81c784' },
      { trunk: '#4e342e', leaves: '#388e3c', bg: '#66bb6a' }
    ];
    const colors = treeColors[stage - 1];

    // 树的大小随阶段增长
    const scale = 0.7 + (stage * 0.06);

    const svgs = [
      // Stage 1: 小树苗
      `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="transform:scale(${scale})">
        <rect width="200" height="200" fill="${colors.bg}" rx="100"/>
        <rect x="95" y="120" width="10" height="60" fill="${colors.trunk}" rx="3"/>
        <ellipse cx="100" cy="100" rx="35" ry="40" fill="${colors.leaves}"/>
        <ellipse cx="100" cy="95" rx="20" ry="25" fill="#a5d6a7" opacity="0.5"/>
      </svg>`,
      // Stage 2: 小树
      `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="transform:scale(${scale})">
        <rect width="200" height="200" fill="${colors.bg}" rx="100"/>
        <rect x="92" y="110" width="16" height="70" fill="${colors.trunk}" rx="4"/>
        <ellipse cx="100" cy="85" rx="50" ry="55" fill="${colors.leaves}"/>
        <ellipse cx="75" cy="95" rx="25" ry="30" fill="${colors.leaves}"/>
        <ellipse cx="125" cy="95" rx="25" ry="30" fill="${colors.leaves}"/>
        <ellipse cx="100" cy="75" rx="30" ry="35" fill="#a5d6a7" opacity="0.5"/>
        <circle cx="85" cy="160" r="8" fill="#8d6e63"/>
        <circle cx="115" cy="165" r="6" fill="#8d6e63"/>
      </svg>`,
      // Stage 3: 中树
      `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="transform:scale(${scale})">
        <rect width="200" height="200" fill="${colors.bg}" rx="100"/>
        <rect x="88" y="100" width="24" height="80" fill="${colors.trunk}" rx="6"/>
        <ellipse cx="100" cy="70" rx="60" ry="65" fill="${colors.leaves}"/>
        <ellipse cx="60" cy="85" rx="35" ry="40" fill="${colors.leaves}"/>
        <ellipse cx="140" cy="85" rx="35" ry="40" fill="${colors.leaves}"/>
        <ellipse cx="100" cy="55" rx="40" ry="45" fill="#a5d6a7" opacity="0.6"/>
        <circle cx="70" cy="75" r="8" fill="#ef9a9a" opacity="0.7"/>
        <circle cx="130" cy="80" r="8" fill="#ef9a9a" opacity="0.7"/>
        <circle cx="95" cy="95" r="6" fill="#ef9a9a" opacity="0.6"/>
        <ellipse cx="80" cy="170" rx="25" ry="8" fill="#6d4c41"/>
        <ellipse cx="120" cy="172" rx="20" ry="6" fill="#6d4c41"/>
      </svg>`,
      // Stage 4: 大树
      `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="transform:scale(${scale})">
        <rect width="200" height="200" fill="${colors.bg}" rx="100"/>
        <rect x="82" y="85" width="36" height="95" fill="${colors.trunk}" rx="8"/>
        <ellipse cx="100" cy="55" rx="70" ry="75" fill="${colors.leaves}"/>
        <ellipse cx="45" cy="75" rx="40" ry="45" fill="${colors.leaves}"/>
        <ellipse cx="155" cy="75" rx="40" ry="45" fill="${colors.leaves}"/>
        <ellipse cx="100" cy="40" rx="50" ry="55" fill="#a5d6a7" opacity="0.7"/>
        <circle cx="65" cy="65" r="10" fill="#ef9a9a" opacity="0.8"/>
        <circle cx="135" cy="70" r="10" fill="#ef9a9a" opacity="0.8"/>
        <circle cx="95" cy="85" r="8" fill="#ef9a9a" opacity="0.7"/>
        <circle cx="55" cy="95" r="7" fill="#fff9c4" opacity="0.8"/>
        <circle cx="145" cy="90" r="7" fill="#fff9c4" opacity="0.8"/>
        <ellipse cx="70" cy="175" rx="30" ry="10" fill="#5d4037"/>
        <ellipse cx="130" cy="177" rx="25" ry="8" fill="#5d4037"/>
        <circle cx="50" cy="170" r="5" fill="#81c784"/>
        <circle cx="150" cy="172" r="5" fill="#81c784"/>
      </svg>`,
      // Stage 5: 茂盛大树
      `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="transform:scale(${scale})">
        <rect width="200" height="200" fill="${colors.bg}" rx="100"/>
        <rect x="78" y="75" width="44" height="105" fill="${colors.trunk}" rx="10"/>
        <ellipse cx="100" cy="45" rx="80" ry="85" fill="${colors.leaves}"/>
        <ellipse cx="30" cy="70" rx="45" ry="50" fill="${colors.leaves}"/>
        <ellipse cx="170" cy="70" rx="45" ry="50" fill="${colors.leaves}"/>
        <ellipse cx="100" cy="30" rx="60" ry="65" fill="#a5d6a7" opacity="0.8"/>
        <circle cx="55" cy="55" r="12" fill="#ef9a9a" opacity="0.9"/>
        <circle cx="145" cy="60" r="12" fill="#ef9a9a" opacity="0.9"/>
        <circle cx="95" cy="75" r="10" fill="#ef9a9a" opacity="0.8"/>
        <circle cx="45" cy="85" r="9" fill="#fff9c4" opacity="0.9"/>
        <circle cx="155" cy="80" r="9" fill="#fff9c4" opacity="0.9"/>
        <circle cx="75" cy="95" r="8" fill="#fff9c4" opacity="0.8"/>
        <circle cx="125" cy="90" r="8" fill="#fff9c4" opacity="0.8"/>
        <ellipse cx="60" cy="175" rx="35" ry="12" fill="#4e342e"/>
        <ellipse cx="140" cy="177" rx="30" ry="10" fill="#4e342e"/>
        <circle cx="40" cy="168" r="6" fill="#81c784"/>
        <circle cx="160" cy="170" r="6" fill="#81c784"/>
        <circle cx="55" cy="182" r="4" fill="#66bb6a"/>
        <circle cx="145" cy="184" r="4" fill="#66bb6a"/>
      </svg>`
    ];

    container.innerHTML = svgs[stage - 1];
  }
};

// ============ 动物卡片渲染 ============
function renderAnimalCards() {
  const grid = document.getElementById('kidsAnimalsGrid');
  if (!grid || typeof kidsAnimals === 'undefined') return;

  const filtered = currentFilter === 'all'
    ? kidsAnimals
    : kidsAnimals.filter(a => a.language === currentFilter);

  const isEn = currentFilter === 'english';

  // 更新副标题
  const sub = document.querySelector('.kids-hero-sub');
  if (sub) sub.textContent = isEn
    ? 'Pick an animal and start typing!'
    : '选一只小动物，开始打字冒险吧！';

  grid.innerHTML = filtered.map((animal) => {
    const starsHtml = '⭐'.repeat(animal.stars) + '☆'.repeat(4 - animal.stars);
    const displayName = isEn ? animal.nameEn : animal.name;
    const displayDesc = isEn
      ? (animal.descriptionEn || animal.description)
      : animal.description;
    const btnText = isEn ? 'Start →' : '开始练习 →';
    return `
      <div class="kids-animal-card"
           style="background: ${animal.color};"
           onclick="startAnimal('${animal.id}')">
        <span class="card-emoji">${animal.emoji}</span>
        <div class="card-animal-name">${displayName}</div>
        <div class="card-desc">${displayDesc}</div>
        <div class="card-stars">${starsHtml}</div>
        <button class="card-start-btn">${btnText}</button>
      </div>
    `;
  }).join('');
}

function startAnimal(animalId) {
  localStorage.setItem('kidsAnimalId', animalId);
  window.location.href = 'kids-practice.html';
}

// ============ 更新树统计 ============
function updateTreeStats() {
  const state = TreeSystem.getState();
  document.getElementById('totalChars').textContent = state.totalChars.toLocaleString();
  document.getElementById('todayChars').textContent = TreeSystem.getTodayChars().toLocaleString();
  document.getElementById('treeDays').textContent = TreeSystem.getTreeAge();
}

// ============ 语言筛选 ============
function setupFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.dataset.lang;
      renderAnimalCards();
    });
  });
}

// ============ 完成监听 ============
function listenForCompletion() {
  // 从 practice 页面返回时检查是否有新完成的字数
  window.addEventListener('focus', () => {
    const completed = sessionStorage.getItem('kidsCompleted');
    if (completed) {
      const chars = parseInt(completed) || 0;
      if (chars > 0) {
        TreeSystem.addChars(chars);
        TreeSystem.render('treeContainer');
        updateTreeStats();
      }
      sessionStorage.removeItem('kidsCompleted');
    }
  });
}

// ============ Init ============
document.addEventListener('DOMContentLoaded', () => {
  TreeSystem.render('treeContainer');
  updateTreeStats();
  renderAnimalCards();
  setupFilterTabs();
  listenForCompletion();
});
