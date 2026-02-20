// TypeKids - 幼儿版练习逻辑 v2
// 设计：统一区域 = 动物图片 + 打字条带叠加
// 每打完一行，该行遮罩消失，图片逐渐显露
// 输入：纯 keydown 事件，避免移动端 input 事件双触发

class KidsPractice {
  constructor() {
    this.animal = null;
    this.currentLineIndex = 0;
    this.userInput = '';           // 当前行已输入的字符串
    this.lineCompleted = [];
    this.confettiActive = false;
    this.isComposing = false;      // IME 输入法组合状态

    // Timer & Stats
    this.startTime = null;
    this.timerInterval = null;
    this.isStarted = false;
    this.totalCharsTyped = 0;
    this.totalErrors = 0;

    this.init();
  }

  init() {
    const animalId = localStorage.getItem('kidsAnimalId') || 'panda';
    this.animal = kidsAnimals.find(a => a.id === animalId) || kidsAnimals[0];
    this.lineCompleted = new Array(this.animal.lines.length).fill(false);

    this.setupHeader();
    this.buildUnifiedCard();
    this.updateProgressBadge();
    this.setupInput();
    this.focusInput();
    this.startTimer();  // 开始计时
  }

  setupHeader() {
    document.getElementById('practiceAnimalEmoji').textContent = this.animal.emoji;
    document.getElementById('practiceAnimalName').textContent =
      `${this.animal.name} · ${this.animal.nameEn}`;
    document.title = `TypeKids - ${this.animal.name}`;
  }

  /* ----------------------------------------------------------
     Build the unified card:
     - animal SVG as background (absolute, fills entire card)
     - N typing band rows (relative, stacked, equal height)
     ---------------------------------------------------------- */
  buildUnifiedCard() {
    const card = document.getElementById('unifiedCard');
    const bgLayer = document.getElementById('animalBgLayer');
    const overlay = document.getElementById('typingRowsOverlay');

    const N = this.animal.lines.length;

    // Calculate band height: each band = 100% / N of card height
    // Card aspect ratio: we want card to be roughly square-ish,
    // with each row tall enough to type comfortably (~70-90px min for wrapped text)
    const rowHeightPx = Math.max(72, Math.min(100, Math.floor((window.innerHeight - 180) / N)));
    const cardHeightPx = rowHeightPx * N;

    card.style.height = cardHeightPx + 'px';

    // Inject animal SVG
    bgLayer.innerHTML = this.animal.svg;

    // Build overlay bands
    overlay.innerHTML = '';
    for (let i = 0; i < N; i++) {
      const band = document.createElement('div');
      band.className = 'typing-row-band ' + (i === 0 ? 'active' : 'locked');
      band.id = `band-${i}`;
      band.style.height = rowHeightPx + 'px';
      band.style.minHeight = rowHeightPx + 'px';
      band.style.maxHeight = rowHeightPx + 'px';

      // State icon
      const pill = document.createElement('span');
      pill.className = 'row-state-pill';
      pill.id = `pill-${i}`;
      pill.textContent = i === 0 ? '✏️' : '🔒';
      band.appendChild(pill);

      // Chars display
      const charsDiv = document.createElement('div');
      charsDiv.className = 'kids-chars-display';
      charsDiv.id = `chars-${i}`;
      charsDiv.innerHTML = this.buildCharsHTML(i, '');
      band.appendChild(charsDiv);

      overlay.appendChild(band);
    }
  }

  buildCharsHTML(lineIndex, typedSoFar) {
    const target = this.animal.lines[lineIndex];
    return target.split('').map((ch, i) => {
      let cls = 'k-char';
      if (i < typedSoFar.length) {
        cls += typedSoFar[i] === ch ? ' k-correct' : ' k-wrong';
      } else if (i === typedSoFar.length && lineIndex === this.currentLineIndex) {
        cls += ' k-current';
      }
      const display = ch === ' ' ? '&nbsp;' : ch;
      return `<span class="${cls}">${display}</span>`;
    }).join('');
  }

  updateProgressBadge() {
    const done = this.lineCompleted.filter(Boolean).length;
    const total = this.animal.lines.length;
    const badge = document.getElementById('practiceProgressBadge');
    if (badge) badge.textContent = `⭐ ${done} / ${total}`;
  }

  // ============ Timer & Stats ============
  startTimer() {
    this.startTime = Date.now();
    this.timerInterval = setInterval(() => {
      this.updateTimer();
      this.updateStats();
    }, 500);
  }

  updateTimer() {
    if (!this.startTime) return;
    const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    const timerEl = document.getElementById('timerValue');
    if (timerEl) timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  updateStats() {
    if (!this.isStarted || !this.startTime) return;

    // Time in minutes
    const timeMinutes = (Date.now() - this.startTime) / 1000 / 60;

    // WPM (Words Per Minute): 5 chars = 1 word
    const wordsTyped = this.totalCharsTyped / 5;
    const wpm = timeMinutes > 0 ? Math.round(wordsTyped / timeMinutes) : 0;

    // Accuracy
    const accuracy = this.totalCharsTyped > 0
      ? Math.round(((this.totalCharsTyped - this.totalErrors) / this.totalCharsTyped) * 100)
      : 100;

    // Update display
    const wpmEl = document.getElementById('wpmValue');
    const accEl = document.getElementById('accuracyValue');
    if (wpmEl) wpmEl.textContent = wpm;
    if (accEl) accEl.textContent = `${accuracy}%`;
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  getFinalStats() {
    const timeEl = document.getElementById('timerValue');
    const wpmEl = document.getElementById('wpmValue');
    const accEl = document.getElementById('accuracyValue');
    return {
      time: timeEl ? timeEl.textContent : '0:00',
      wpm: wpmEl ? wpmEl.textContent : '0',
      accuracy: accEl ? accEl.textContent : '100%'
    };
  }

  /* ----------------------------------------------------------
     INPUT HANDLING
     Strategy: use ONLY keydown for desktop.
     For mobile keyboards, use compositionstart/end + input.
     Clear the hidden input value immediately after each event
     to prevent accumulation that causes cursor jump.
     ---------------------------------------------------------- */
  setupInput() {
    const input = document.getElementById('kidsHiddenInput');
    const card = document.getElementById('unifiedCard');

    // Click card → focus
    card.addEventListener('click', () => this.focusInput());
    document.addEventListener('click', () => this.focusInput());

    /* Desktop keyboard: keydown */
    document.addEventListener('keydown', (e) => {
      // Ignore while IME is composing
      if (this.isComposing) return;

      const overlay = document.getElementById('kidsCompletionOverlay');
      if (overlay.classList.contains('show')) return;

      if (e.key === 'Backspace') {
        e.preventDefault();
        this.handleBackspace();
      } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        this.handleChar(e.key);
      }
    });

    /* Mobile: track IME composition to avoid double-fire */
    input.addEventListener('compositionstart', () => {
      this.isComposing = true;
    });

    input.addEventListener('compositionend', (e) => {
      this.isComposing = false;
      // On mobile, composition end gives us the final character(s)
      const data = e.data || '';
      input.value = ''; // Clear immediately
      for (const ch of data) {
        this.handleChar(ch);
      }
    });

    /* Mobile input fallback: only fires if NOT in composition */
    input.addEventListener('input', (e) => {
      if (this.isComposing) return;
      const val = input.value;
      input.value = ''; // Clear immediately to prevent accumulation
      if (!val) return;
      for (const ch of val) {
        if (ch === '\b') {
          this.handleBackspace();
        } else {
          this.handleChar(ch);
        }
      }
    });
  }

  focusInput() {
    const input = document.getElementById('kidsHiddenInput');
    input.focus();
    // Keep cursor at end of empty string
    input.value = '';
    input.setSelectionRange(0, 0);
  }

  handleChar(ch) {
    if (this.currentLineIndex >= this.animal.lines.length) return;
    const target = this.animal.lines[this.currentLineIndex];
    if (this.userInput.length >= target.length) return;

    // Start timer on first char
    if (!this.isStarted && this.currentLineIndex === 0 && this.userInput.length === 0) {
      this.isStarted = true;
    }

    // Check if correct before adding
    const expectedChar = target[this.userInput.length];
    if (ch !== expectedChar) {
      this.totalErrors++;
    }

    this.userInput += ch;
    this.totalCharsTyped++;
    this.refreshBandChars(this.currentLineIndex);
    this.updateStats();

    // Check line completion
    if (this.userInput.length === target.length && this.userInput === target) {
      setTimeout(() => this.unlockCurrentLine(), 80);
    }
  }

  handleBackspace() {
    if (this.userInput.length === 0) return;
    this.userInput = this.userInput.slice(0, -1);
    this.refreshBandChars(this.currentLineIndex);
  }

  refreshBandChars(lineIndex) {
    const charsDiv = document.getElementById(`chars-${lineIndex}`);
    if (!charsDiv) return;
    charsDiv.innerHTML = this.buildCharsHTML(lineIndex, this.userInput);
  }

  unlockCurrentLine() {
    const idx = this.currentLineIndex;
    this.lineCompleted[idx] = true;

    // Update band: completed (transparent, image shows through)
    const band = document.getElementById(`band-${idx}`);
    if (band) {
      band.classList.remove('active', 'locked');
      band.classList.add('unlocking');
      setTimeout(() => {
        band.classList.remove('unlocking');
        band.classList.add('completed');
      }, 560);
    }

    // Pill → check
    const pill = document.getElementById(`pill-${idx}`);
    if (pill) pill.textContent = '✅';

    // Show sparkles
    this.showSparkle(band);

    // Add to completed log
    this.addToLog(idx, this.animal.lines[idx]);

    // Update progress badge
    this.updateProgressBadge();

    // Move to next line
    const next = idx + 1;
    if (next >= this.animal.lines.length) {
      setTimeout(() => this.showCompletion(), 700);
    } else {
      this.currentLineIndex = next;
      this.userInput = '';

      const nextBand = document.getElementById(`band-${next}`);
      if (nextBand) {
        nextBand.classList.remove('locked');
        nextBand.classList.add('active');
        const nextPill = document.getElementById(`pill-${next}`);
        if (nextPill) nextPill.textContent = '✏️';
        this.refreshBandChars(next);
        nextBand.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }

  showSparkle(anchorEl) {
    const rect = anchorEl
      ? anchorEl.getBoundingClientRect()
      : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 200 };

    const emojis = ['✨', '⭐', '🌟', '💫', '🎉', '🎊'];
    for (let i = 0; i < 5; i++) {
      const s = document.createElement('div');
      s.className = 'sparkle-burst';
      s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      s.style.left = (rect.left + Math.random() * (rect.width || 200)) + 'px';
      s.style.top  = (rect.top + 10) + 'px';
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 900);
    }
  }

  addToLog(idx, text) {
    const list = document.getElementById('completedLogList');
    if (!list) return;

    // Remove empty placeholder
    const empty = list.querySelector('.completed-log-empty');
    if (empty) empty.remove();

    const item = document.createElement('div');
    item.className = 'completed-log-item';
    item.innerHTML = `
      <span class="log-num">${idx + 1}.</span>
      <span class="log-text">${text}</span>
    `;
    list.appendChild(item);
  }

  showCompletion() {
    // 停止计时器
    this.stopTimer();

    // 计算总字数
    const totalChars = this.animal.lines.reduce((sum, line) => sum + line.length, 0);

    // 保存到 sessionStorage，首页会读取
    sessionStorage.setItem('kidsCompleted', totalChars.toString());

    // 获取最终统计
    const stats = this.getFinalStats();

    document.getElementById('completionAnimalEmoji').textContent = this.animal.emoji;
    document.getElementById('completionSubtitle').textContent =
      `你解锁了完整的 ${this.animal.name}！`;

    // 显示最终统计
    const finalStatsEl = document.getElementById('completionFinalStats');
    if (finalStatsEl) {
      finalStatsEl.innerHTML = `
        <div class="completion-stat-row">
          <span class="stat-label">⏱️ 用时</span>
          <span class="stat-value">${stats.time}</span>
        </div>
        <div class="completion-stat-row">
          <span class="stat-label">🚀 速度</span>
          <span class="stat-value">${stats.wpm} WPM</span>
        </div>
        <div class="completion-stat-row">
          <span class="stat-label">✅ 准确率</span>
          <span class="stat-value">${stats.accuracy}</span>
        </div>
      `;
    }

    document.getElementById('kidsCompletionOverlay').classList.add('show');
    this.startConfetti();
  }

  startConfetti() {
    const canvas = document.getElementById('kidsConfettiCanvas');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx    = canvas.getContext('2d');
    const colors = ['#ff6b9d','#ffd93d','#6bcb77','#4d96ff','#c77dff','#ff8f00','#26c6da'];
    const pieces = [];

    function makePiece() {
      return {
        x: Math.random() * canvas.width,
        y: -20,
        w: Math.random() * 12 + 6,
        h: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vy: Math.random() * 3 + 2,
        vx: (Math.random() - 0.5) * 2.5,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.18,
      };
    }

    for (let i = 0; i < 90; i++) {
      const p = makePiece();
      p.y = Math.random() * canvas.height;
      pieces.push(p);
    }

    const animate = () => {
      if (!this.confettiActive) { ctx.clearRect(0,0,canvas.width,canvas.height); return; }
      ctx.clearRect(0,0,canvas.width,canvas.height);
      pieces.forEach(p => {
        p.y += p.vy; p.x += p.vx; p.angle += p.spin;
        if (p.y > canvas.height) Object.assign(p, makePiece());
        ctx.save();
        ctx.globalAlpha = 0.9;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
        ctx.restore();
      });
      requestAnimationFrame(animate);
    };

    this.confettiActive = true;
    animate();
    setTimeout(() => { this.confettiActive = false; }, 5500);
  }

  restart() {
    this.confettiActive = false;
    const canvas = document.getElementById('kidsConfettiCanvas');
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

    document.getElementById('kidsCompletionOverlay').classList.remove('show');

    // Stop timer
    this.stopTimer();

    // Reset state
    this.currentLineIndex = 0;
    this.userInput = '';
    this.lineCompleted = new Array(this.animal.lines.length).fill(false);
    this.isStarted = false;
    this.totalCharsTyped = 0;
    this.totalErrors = 0;
    this.startTime = null;

    // Reset stats display
    document.getElementById('timerValue').textContent = '0:00';
    document.getElementById('wpmValue').textContent = '0';
    document.getElementById('accuracyValue').textContent = '100%';

    // Rebuild
    this.buildUnifiedCard();
    this.updateProgressBadge();

    // Clear log
    const list = document.getElementById('completedLogList');
    list.innerHTML = '<span class="completed-log-empty">打对一行就会出现在这里～</span>';

    // Restart timer
    this.startTimer();
    this.focusInput();
  }
}

let kidsPractice;
document.addEventListener('DOMContentLoaded', () => {
  kidsPractice = new KidsPractice();
});
