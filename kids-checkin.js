// TypeKids - 打卡详情页逻辑

const STORAGE_KEY = 'typekids_tree';

// ==================== 数据读取 ====================
function getState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return JSON.parse(saved);
  return { totalChars: 0, dailyRecords: {}, startDate: new Date().toISOString().split('T')[0] };
}

function getToday() {
  return new Date().toISOString().split('T')[0];
}

function getTreeAge() {
  const state = getState();
  const start = new Date(state.startDate);
  const now = new Date();
  return Math.max(1, Math.floor((now - start) / (1000 * 60 * 60 * 24)));
}

function getTodayChars() {
  const state = getState();
  return state.dailyRecords[getToday()] || 0;
}

// 成长阶段配置
const STAGES = [
  { name: '小树苗', nameEn: 'Sprout',   min: 0,    max: 500  },
  { name: '小树',   nameEn: 'Sapling',  min: 500,  max: 1500 },
  { name: '中树',   nameEn: 'Young',    min: 1500, max: 3000 },
  { name: '大树',   nameEn: 'Grown',    min: 3000, max: 5000 },
  { name: '茂盛',   nameEn: 'Mighty',   min: 5000, max: Infinity },
];

function getStage(total) {
  for (let i = STAGES.length - 1; i >= 0; i--) {
    if (total >= STAGES[i].min) return i; // 0-indexed
  }
  return 0;
}

// ==================== 大树渲染 ====================
function renderBigTree(stageIdx) {
  const treeColors = [
    { trunk: '#8d6e63', leaves: '#81c784', bg: '#e8f5e9' },
    { trunk: '#795548', leaves: '#66bb6a', bg: '#c8e6c9' },
    { trunk: '#6d4c41', leaves: '#4caf50', bg: '#a5d6a7' },
    { trunk: '#5d4037', leaves: '#43a047', bg: '#81c784' },
    { trunk: '#4e342e', leaves: '#388e3c', bg: '#66bb6a' },
  ];
  const c = treeColors[stageIdx];

  const svgs = [
    // Stage 0: 小树苗
    `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="${c.bg}" rx="100"/>
      <rect x="95" y="120" width="10" height="60" fill="${c.trunk}" rx="3"/>
      <ellipse cx="100" cy="100" rx="35" ry="40" fill="${c.leaves}"/>
      <ellipse cx="100" cy="90" rx="20" ry="25" fill="#a5d6a7" opacity="0.55"/>
    </svg>`,
    // Stage 1: 小树
    `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="${c.bg}" rx="100"/>
      <rect x="92" y="110" width="16" height="70" fill="${c.trunk}" rx="4"/>
      <ellipse cx="100" cy="80" rx="50" ry="55" fill="${c.leaves}"/>
      <ellipse cx="68" cy="95" rx="28" ry="32" fill="${c.leaves}"/>
      <ellipse cx="132" cy="95" rx="28" ry="32" fill="${c.leaves}"/>
      <ellipse cx="100" cy="68" rx="32" ry="36" fill="#a5d6a7" opacity="0.5"/>
    </svg>`,
    // Stage 2: 中树
    `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="${c.bg}" rx="100"/>
      <rect x="88" y="98" width="24" height="82" fill="${c.trunk}" rx="6"/>
      <ellipse cx="100" cy="65" rx="62" ry="66" fill="${c.leaves}"/>
      <ellipse cx="55" cy="82" rx="38" ry="42" fill="${c.leaves}"/>
      <ellipse cx="145" cy="82" rx="38" ry="42" fill="${c.leaves}"/>
      <ellipse cx="100" cy="50" rx="42" ry="46" fill="#a5d6a7" opacity="0.6"/>
      <circle cx="68" cy="70" r="9" fill="#ef9a9a" opacity="0.7"/>
      <circle cx="133" cy="75" r="9" fill="#ef9a9a" opacity="0.7"/>
    </svg>`,
    // Stage 3: 大树
    `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="${c.bg}" rx="100"/>
      <rect x="82" y="82" width="36" height="98" fill="${c.trunk}" rx="8"/>
      <ellipse cx="100" cy="50" rx="72" ry="76" fill="${c.leaves}"/>
      <ellipse cx="42" cy="72" rx="42" ry="46" fill="${c.leaves}"/>
      <ellipse cx="158" cy="72" rx="42" ry="46" fill="${c.leaves}"/>
      <ellipse cx="100" cy="35" rx="52" ry="56" fill="#a5d6a7" opacity="0.7"/>
      <circle cx="60" cy="60" r="11" fill="#ef9a9a" opacity="0.8"/>
      <circle cx="140" cy="65" r="11" fill="#ef9a9a" opacity="0.8"/>
      <circle cx="52" cy="90" r="8" fill="#fff9c4" opacity="0.8"/>
      <circle cx="148" cy="85" r="8" fill="#fff9c4" opacity="0.8"/>
    </svg>`,
    // Stage 4: 茂盛大树
    `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="${c.bg}" rx="100"/>
      <rect x="78" y="72" width="44" height="108" fill="${c.trunk}" rx="10"/>
      <ellipse cx="100" cy="40" rx="82" ry="86" fill="${c.leaves}"/>
      <ellipse cx="28" cy="65" rx="46" ry="50" fill="${c.leaves}"/>
      <ellipse cx="172" cy="65" rx="46" ry="50" fill="${c.leaves}"/>
      <ellipse cx="100" cy="25" rx="62" ry="66" fill="#a5d6a7" opacity="0.8"/>
      <circle cx="50" cy="48" r="13" fill="#ef9a9a" opacity="0.9"/>
      <circle cx="150" cy="55" r="13" fill="#ef9a9a" opacity="0.9"/>
      <circle cx="90" cy="70" r="11" fill="#ef9a9a" opacity="0.8"/>
      <circle cx="42" cy="82" r="10" fill="#fff9c4" opacity="0.9"/>
      <circle cx="158" cy="78" r="10" fill="#fff9c4" opacity="0.9"/>
      <circle cx="72" cy="88" r="9" fill="#fff9c4" opacity="0.8"/>
      <circle cx="128" cy="84" r="9" fill="#fff9c4" opacity="0.8"/>
    </svg>`,
  ];

  document.getElementById('bigTreeContainer').innerHTML = svgs[stageIdx];
}

// ==================== 进度条 ====================
function renderProgress(total, stageIdx) {
  const stage = STAGES[stageIdx];
  const isMax = stageIdx === STAGES.length - 1;

  document.getElementById('stageLabel').textContent =
    `第 ${stageIdx + 1} 阶段 · ${stage.name}`;

  if (isMax) {
    document.getElementById('progressFrom').textContent = `${total.toLocaleString()} 字`;
    document.getElementById('progressTo').textContent = '🎉 已达最高阶段！';
    document.getElementById('stageProgressFill').style.width = '100%';
    document.getElementById('progressTip').textContent = '你的树已经茂盛成林！继续保持吧 🌳';
    return;
  }

  const rangeMin = stage.min;
  const rangeMax = stage.max;
  const pct = Math.min(100, Math.round(((total - rangeMin) / (rangeMax - rangeMin)) * 100));
  const remaining = rangeMax - total;

  document.getElementById('progressFrom').textContent = `${total.toLocaleString()} 字`;
  document.getElementById('progressTo').textContent = `${rangeMax.toLocaleString()} 字`;
  document.getElementById('progressTip').textContent =
    remaining > 0 ? `再打 ${remaining} 字，小树升级！🌱` : '即将升级！';

  setTimeout(() => {
    document.getElementById('stageProgressFill').style.width = pct + '%';
  }, 100);
}

// ==================== 连续打卡 streak ====================
function calcStreak(dailyRecords) {
  const today = getToday();
  let streak = 0;
  let d = new Date();

  while (true) {
    const key = d.toISOString().split('T')[0];
    const hasPractice = (dailyRecords[key] || 0) > 0;
    if (!hasPractice && key !== today) break;
    if (hasPractice) streak++;
    else if (key === today) { /* today未打卡不中断 */ }
    d.setDate(d.getDate() - 1);
    if (streak > 365) break; // 防死循环
  }

  return streak;
}

function renderStreak(dailyRecords) {
  const streak = calcStreak(dailyRecords);
  const todayDone = (dailyRecords[getToday()] || 0) > 0;

  document.getElementById('streakNumber').textContent = streak;

  const subs = [
    '加油！今天练一练，开启你的连续记录！',
    '太棒了！连续打卡中，继续！💪',
    '坚持2天，继续下去！',
    '三天打鱼——但你没有！🎉',
    '一周啦！你真厉害！🌟',
    '10天连续，超级厉害！🏆',
  ];

  let sub;
  if (streak === 0) sub = subs[0];
  else if (streak === 1) sub = todayDone ? subs[1] : '昨天练了，今天继续加油！';
  else if (streak < 3) sub = subs[2];
  else if (streak < 7) sub = subs[3];
  else if (streak < 10) sub = subs[4];
  else sub = subs[5];

  document.getElementById('streakSub').textContent = sub;
}

// ==================== 14天柱状图 ====================
function renderBarChart(dailyRecords) {
  const container = document.getElementById('barChart');
  const days = 14;
  const today = new Date();
  const dataArr = [];

  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = d.toISOString().split('T')[0];
    const chars = dailyRecords[key] || 0;
    const label = `${d.getMonth() + 1}/${d.getDate()}`;
    dataArr.push({ key, chars, label, isToday: i === 0 });
  }

  const maxChars = Math.max(...dataArr.map(d => d.chars), 1);

  container.innerHTML = dataArr.map(d => {
    const heightPct = Math.max(3, Math.round((d.chars / maxChars) * 76));
    return `
      <div class="bar-col" title="${d.label}: ${d.chars}字">
        <div class="bar-fill ${d.isToday ? 'today-bar' : ''}"
             style="height:${heightPct}px"></div>
        <div class="bar-label">${d.label}</div>
      </div>
    `;
  }).join('');
}

// ==================== 热力图 ====================
function renderHeatmap(dailyRecords) {
  const grid = document.getElementById('heatmapGrid');
  const today = new Date();
  const tooltip = document.getElementById('heatmapTooltip');

  // 找出最大字数，用于色阶
  const values = Object.values(dailyRecords);
  const maxVal = Math.max(...values, 1);

  // 计算要展示的天数：从10周前的周一 到 本周日
  // 先找到今天是周几（JS: 0=日, 1=一...6=六）
  const todayDow = today.getDay(); // 0=日
  const todayMon = (todayDow + 6) % 7; // 转为周一=0, 周日=6

  // 找本周周一
  const thisMonday = new Date(today);
  thisMonday.setDate(today.getDate() - todayMon);

  // 往前10周
  const startDate = new Date(thisMonday);
  startDate.setDate(thisMonday.getDate() - 9 * 7);

  // 本周日
  const endDate = new Date(thisMonday);
  endDate.setDate(thisMonday.getDate() + 6);

  // 生成所有日期
  const totalDays = Math.round((endDate - startDate) / 86400000) + 1;
  const cells = [];
  for (let i = 0; i < totalDays; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    cells.push(d);
  }

  // 按周分组 (7 天一组)
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }

  const todayStr = today.toISOString().split('T')[0];

  function levelFromChars(chars) {
    if (!chars || chars === 0) return 0;
    const pct = chars / maxVal;
    if (pct < 0.2) return 1;
    if (pct < 0.45) return 2;
    if (pct < 0.75) return 3;
    return 4;
  }

  grid.innerHTML = weeks.map(week => {
    const cells = week.map(d => {
      const key = d.toISOString().split('T')[0];
      const chars = dailyRecords[key] || 0;
      const isFuture = d > today;
      const isToday = key === todayStr;
      const level = isFuture ? 'future' : `level-${levelFromChars(chars)}`;
      const todayCls = isToday ? ' today' : '';

      return `<div class="heatmap-cell ${level}${todayCls}"
                   data-date="${key}" data-chars="${chars}"
                   data-label="${d.getMonth()+1}月${d.getDate()}日: ${chars}字"></div>`;
    }).join('');
    return `<div class="heatmap-week">${cells}</div>`;
  }).join('');

  // Tooltip
  grid.querySelectorAll('.heatmap-cell:not(.future)').forEach(cell => {
    cell.addEventListener('mousemove', e => {
      tooltip.style.display = 'block';
      tooltip.textContent = cell.dataset.label;
      tooltip.style.left = (e.clientX + 12) + 'px';
      tooltip.style.top  = (e.clientY - 30) + 'px';
    });
    cell.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
  });
}

// ==================== 激励语 ====================
function renderMotivation(total, streak, todayChars) {
  const messages = [
    // [condition fn, text, sub]
    [() => total === 0,        '🌱 种下第一颗种子吧！', '开始打字，你的树就会发芽'],
    [() => todayChars === 0 && total > 0, '☀️ 今天还没练习哦！', '打几个字，给小树浇浇水 💧'],
    [() => streak >= 7,        `🔥 连续 ${streak} 天！你是打字小英雄！`, '坚持就是胜利，继续加油！'],
    [() => streak >= 3,        `🌳 连续 ${streak} 天，进步很大！`, '每天练习，树越长越高！'],
    [() => total >= 5000,      '🏆 茂盛大树！你太厉害了！', '5000字的努力，小树感谢你！'],
    [() => total >= 1000,      '🌲 你的树越来越高啦！', '继续练习，向茂盛大树进发！'],
    [() => todayChars > 0,     '✨ 今天打卡成功！', '每一个字都让小树更强壮 💪'],
    [() => true,               '🌱 每天一点点，小树慢慢长！', '坚持是最好的礼物'],
  ];

  const match = messages.find(([cond]) => cond());
  document.getElementById('motivationText').textContent = match[1];
  document.getElementById('motivationSub').textContent = match[2];
}

// ==================== 主函数 ====================
function init() {
  const state = getState();
  const total = state.totalChars;
  const daily = state.dailyRecords;
  const stageIdx = getStage(total);
  const todayChars = getTodayChars();
  const streak = calcStreak(daily);
  const age = getTreeAge();

  // 大树
  renderBigTree(stageIdx);
  renderProgress(total, stageIdx);

  // 统计格
  document.getElementById('statTotalChars').textContent = total.toLocaleString();
  document.getElementById('statTodayChars').textContent = todayChars.toLocaleString();
  document.getElementById('statTreeAge').textContent = age;

  // 连续打卡
  renderStreak(daily);

  // 柱状图
  renderBarChart(daily);

  // 热力图
  renderHeatmap(daily);

  // 激励语
  renderMotivation(total, streak, todayChars);
}

document.addEventListener('DOMContentLoaded', init);
