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

    // Kids mode & sound
    this.mode = localStorage.getItem('kidsMode') || 'explore';
    this.soundOn = (localStorage.getItem('kidsSound') ?? 'on') === 'on';
    this.fingerOn = (localStorage.getItem('kidsFingerGuide') ?? (this.mode === 'create' ? 'on' : 'off')) === 'on';

    // Key repeat / long-press guard
    this.lastKeyAt = 0;
    this.minKeyIntervalMs = 45;

    this.init();
  }

  init() {
    const animalId = localStorage.getItem('kidsAnimalId') || 'panda';
    this.animal = kidsAnimals.find(a => a.id === animalId) || kidsAnimals[0];

    // Lines source depends on mode
    if (this.mode === 'create') {
      this.lesson = this.getCreateLesson(this.animal);
      this.lines = this.lesson.lines;
    } else {
      this.lesson = null;
      this.lines = this.animal.lines;
    }

    this.lineCompleted = new Array(this.lines.length).fill(false);

    this.setupHeader();
    this.buildUnifiedCard();
    this.setupCreateStage();
    // Ensure start hint is visible on entry
    const hint = document.getElementById('kidsStartHint');
    if (hint) hint.classList.remove('hide');

    // Finger guide UI (create mode default on)
    if (this.mode !== 'create' && localStorage.getItem('kidsFingerGuide') == null) {
      this.fingerOn = false;
    }
    this.setupFingerGuide();

    // Sound toggle UI
    const btn = document.getElementById('kidsSoundBtn');
    if (btn) {
      const paint = () => {
        btn.textContent = this.soundOn ? '🔊' : '🔇';
        btn.classList.toggle('off', !this.soundOn);
      };
      paint();
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.soundOn = !this.soundOn;
        localStorage.setItem('kidsSound', this.soundOn ? 'on' : 'off');
        paint();
        if (this.soundOn) this.speak('sound on', 1.0, 1.0);
      });
    }
    this.updateProgressBadge();
    this.setupInput();
    // Do NOT auto-focus on load for kids; show tap-to-start hint.
    // Timer starts on first keypress.
    this.updateTimer();
    this.updateStats();
  }

  setupHeader() {
    const titleEl = document.getElementById('practiceAnimalEmoji');
    const nameEl  = document.getElementById('practiceAnimalName');
    if (this.mode === 'create' && this.lesson) {
      // Create mode: show magic wand + lesson title
      if (titleEl) titleEl.textContent = '🪄';
      if (nameEl) nameEl.textContent = `创作模式 · ${this.lesson.title}`;
      document.title = `TypeKids - Create - ${this.lesson.title}`;
    } else {
      if (titleEl) titleEl.textContent = this.animal.emoji;
      if (nameEl) nameEl.textContent = `${this.animal.name} · ${this.animal.nameEn}`;
      document.title = `TypeKids - ${this.animal.name}`;
    }
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

    const N = this.lines.length;

    // Calculate band height: each band = 100% / N of card height
    // Card aspect ratio: we want card to be roughly square-ish,
    // with each row tall enough to type comfortably (~70-90px min for wrapped text)
    // Slightly larger bands for kids eye comfort
    const rowHeightPx = Math.max(86, Math.min(120, Math.floor((window.innerHeight - 160) / N)));
    const cardHeightPx = rowHeightPx * N;

    card.style.height = cardHeightPx + 'px';

    // Inject animal photo (real photo preferred, SVG fallback)
    const photoHTML = (typeof getAnimalPhotoHTML !== 'undefined')
      ? getAnimalPhotoHTML(this.animal.id)
      : '';
    bgLayer.innerHTML = photoHTML || this.animal.svg;

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
    const target = this.lines[lineIndex];
    return target.split('').map((ch, i) => {
      let cls = 'k-char';
      if (i < typedSoFar.length) {
        cls += typedSoFar[i] === ch ? ' k-correct' : ' k-wrong';
      } else if (i === typedSoFar.length && lineIndex === this.currentLineIndex) {
        cls += ' k-current';
      }
      const display = ch === ' ' ? '&nbsp;' : ch;
      return `<span class="${cls}" data-i="${i}" data-line="${lineIndex}">${display}</span>`;
    }).join('');
  }

  updateProgressBadge() {
    const done = this.lineCompleted.filter(Boolean).length;
    const total = this.lines.length;
    const progEl = document.getElementById('progressValue');
    if (progEl) progEl.textContent = `${done}/${total}`;

    // Create mode: keep the stage caption in sync
    if (this.mode === 'create') {
      this.updateCreateCaption();
    }
  }

  getCreateLesson(animal) {
    // Minimal V1.0 create lesson: 3-step prompt building
    // (subject -> action -> scene)
    const title = 'AI 魔法指令：小机器人';
    return {
      id: 'robot_prompt',
      title,
      emoji: '🤖',
      lines: [
        'A cool robot',
        'is dancing',
        'on the moon'
      ]
    };
  }

  setupCreateStage() {
    const stage = document.getElementById('kidsCreateStage');
    const bgLayer = document.getElementById('animalBgLayer');
    const card = document.getElementById('unifiedCard');
    if (!stage || !card) return;

    if (this.mode !== 'create') {
      stage.classList.remove('show');
      stage.innerHTML = '';
      // explore mode uses animal bg reveal
      if (bgLayer) {
        // keep photo hidden until first line is completed
        bgLayer.style.display = '';
      }
      card.classList.remove('bg-ready');
      return;
    }

    // Create mode: show stage and hide animal photo
    stage.classList.add('show');
    if (bgLayer) {
      bgLayer.style.display = 'none';
    }

    stage.innerHTML = `
      <div class="create-stage-bg" id="createStageBg"></div>
      <div class="moon-stars" id="moonStars"></div>
      <div class="create-stage-caption" id="createStageCaption">输入第1行：主语（谁/什么）</div>
      <div class="create-stage-center">
        <div class="robot-outline" id="robotOutline">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <rect x="55" y="40" width="90" height="80" rx="16" fill="none" stroke="#4b5563" stroke-width="6"/>
            <circle cx="85" cy="75" r="9" fill="#4b5563"/>
            <circle cx="115" cy="75" r="9" fill="#4b5563"/>
            <rect x="85" y="95" width="30" height="10" rx="5" fill="#4b5563" opacity="0.8"/>
            <rect x="70" y="120" width="60" height="55" rx="14" fill="none" stroke="#4b5563" stroke-width="6"/>
            <line x1="70" y1="140" x2="40" y2="160" stroke="#4b5563" stroke-width="6" stroke-linecap="round"/>
            <line x1="130" y1="140" x2="160" y2="160" stroke="#4b5563" stroke-width="6" stroke-linecap="round"/>
            <line x1="85" y1="175" x2="75" y2="195" stroke="#4b5563" stroke-width="6" stroke-linecap="round"/>
            <line x1="115" y1="175" x2="125" y2="195" stroke="#4b5563" stroke-width="6" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="robot-dance" id="robotDance"></div>
      </div>
    `;

    // reset stage state
    this.updateCreateStageForStep(-1);
  }

  updateCreateCaption() {
    const cap = document.getElementById('createStageCaption');
    if (!cap) return;
    const step = this.currentLineIndex;
    const text = step === 0
      ? '输入第1行：主语（谁/什么）'
      : step === 1
        ? '输入第2行：动作（在做什么）'
        : step === 2
          ? '输入第3行：场景（在哪里）'
          : '完成啦！';
    cap.textContent = text;
  }

  updateCreateStageForStep(stepCompleted) {
    // stepCompleted: 0->subject, 1->action, 2->scene
    const outline = document.getElementById('robotOutline');
    const dance = document.getElementById('robotDance');
    const bg = document.getElementById('createStageBg');
    const stars = document.getElementById('moonStars');

    if (!outline || !bg || !stars) return;

    if (stepCompleted >= 0) {
      outline.classList.add('show');
    }

    if (stepCompleted >= 1) {
      // turn on dance
      if (dance) {
        dance.classList.add('show', 'dancing');
      }
      outline.classList.add('show');
      outline.style.filter = 'drop-shadow(0 10px 18px rgba(0,0,0,0.12))';
    }

    if (stepCompleted >= 2) {
      bg.classList.add('moon');
      stars.classList.add('show');
    } else {
      bg.classList.remove('moon');
      stars.classList.remove('show');
    }
  }

  // ============ Timer & Stats ============
  startTimer() {
    if (this.timerInterval) return;
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
    // Progress always updates
    const done = this.lineCompleted.filter(Boolean).length;
    const total = this.lines?.length || 0;
    const progEl = document.getElementById('progressValue');
    if (progEl) progEl.textContent = `${done}/${total}`;

    // Before starting: keep default stats visible
    if (!this.isStarted || !this.startTime) {
      const accEl = document.getElementById('accuracyValue');
      if (accEl) accEl.textContent = '100%';
      return;
    }

    // Kids-friendly (final) accuracy: count only CURRENT uncorrected mistakes
    const completedChars = this.lines
      .slice(0, this.currentLineIndex)
      .reduce((s, line) => s + line.length, 0);

    const target = this.lines[this.currentLineIndex] || '';
    const typed = this.userInput || '';
    let wrongNow = 0;
    for (let i = 0; i < typed.length; i++) {
      if (typed[i] !== target[i]) wrongNow++;
    }

    const finalTyped = completedChars + typed.length;
    const accuracy = finalTyped > 0
      ? Math.round(((finalTyped - wrongNow) / finalTyped) * 100)
      : 100;

    const accEl = document.getElementById('accuracyValue');
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
    const progEl = document.getElementById('progressValue');
    const accEl = document.getElementById('accuracyValue');
    return {
      time: timeEl ? timeEl.textContent : '0:00',
      progress: progEl ? progEl.textContent : '0/0',
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

    // Click card → focus (avoid global click stealing focus)
    card.addEventListener('click', () => this.focusInput());

    /* Desktop keyboard: keydown */
    document.addEventListener('keydown', (e) => {
      // Ignore while IME is composing
      if (this.isComposing) return;

      const overlay = document.getElementById('kidsCompletionOverlay');
      if (overlay.classList.contains('show')) return;

      // long-press guard
      if (e.repeat) return;
      const now = Date.now();
      if (now - this.lastKeyAt < this.minKeyIntervalMs) return;
      this.lastKeyAt = now;

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

      // basic throttle for mobile long-press
      const now = Date.now();
      if (now - this.lastKeyAt < this.minKeyIntervalMs) return;
      this.lastKeyAt = now;

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

  speak(text, rate=0.95, pitch=1.15) {
    try {
      if (!this.soundOn) return;
      if (!('speechSynthesis' in window)) return;
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = rate;
      u.pitch = pitch;
      // keep it short & interruptible
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    } catch (_) {}
  }

  setupFingerGuide() {
    const wrap = document.getElementById('kidsFingerGuide');
    if (!wrap) return;

    // Render simple 10-finger strip (L5..L1 R1..R5)
    wrap.innerHTML = `
      <div class="finger-strip" id="fingerStrip">
        ${['L5','L4','L3','L2','L1','R1','R2','R3','R4','R5'].map(k =>
          `<div class="finger-dot small" data-finger="${k}">${k}</div>`
        ).join('')}
      </div>
      <div class="finger-legend">🖐️ 指法引导：高亮 = 下一键建议手指</div>
    `;

    const btn = document.getElementById('kidsFingerBtn');
    const paint = () => {
      wrap.classList.toggle('show', this.fingerOn);
      if (btn) btn.classList.toggle('off', !this.fingerOn);
    };

    // default visibility by mode
    paint();

    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.fingerOn = !this.fingerOn;
        localStorage.setItem('kidsFingerGuide', this.fingerOn ? 'on' : 'off');
        paint();
      });
    }

    // update highlight once
    this.updateFingerHighlight();
  }

  getFingerForChar(ch) {
    const c = (ch || '').toLowerCase();
    // Very lightweight mapping for letters (can be refined)
    const map = {
      'q':'L5','a':'L5','z':'L5',
      'w':'L4','s':'L4','x':'L4',
      'e':'L3','d':'L3','c':'L3',
      'r':'L2','f':'L2','v':'L2','t':'L2','g':'L2','b':'L2',
      'y':'R2','h':'R2','n':'R2','u':'R2','j':'R2','m':'R2',
      'i':'R3','k':'R3',',':'R3',
      'o':'R4','l':'R4','.':'R4',
      'p':'R5',';':'R5','/':'R5'
    };
    return map[c] || null;
  }

  updateFingerHighlight() {
    if (!this.fingerOn) return;
    const wrap = document.getElementById('kidsFingerGuide');
    if (!wrap) return;
    const target = this.lines?.[this.currentLineIndex] || '';
    const next = target[this.userInput.length] || '';
    const finger = this.getFingerForChar(next);

    wrap.querySelectorAll('.finger-dot').forEach(el => {
      el.classList.toggle('on', finger && el.dataset.finger === finger);
    });
  }

  handleChar(ch) {
    if (this.currentLineIndex >= this.lines.length) return;
    const target = this.lines[this.currentLineIndex];
    if (this.userInput.length >= target.length) return;

    // Start on first char (and start timer)
    if (!this.isStarted && this.currentLineIndex === 0 && this.userInput.length === 0) {
      this.isStarted = true;
      this.startTimer();
      // hide tap-to-start hint
      const hint = document.getElementById('kidsStartHint');
      if (hint) hint.classList.add('hide');
      // ensure finger guide visibility matches mode
      if (this.mode !== 'create') {
        // explore mode default: hide guide unless user explicitly turned it on
        // (keep current this.fingerOn state)
      }
    }

    // keystroke stats kept for potential future use
    const expectedChar = target[this.userInput.length];
    const isCorrect = ch === expectedChar;
    // keep finger guide in create mode only by default
    if (!isCorrect) {
      this.totalErrors++;
    }

    this.userInput += ch;
    this.totalCharsTyped++;
    this.refreshBandChars(this.currentLineIndex);
    this.updateFingerHighlight();

    // hit feedback (non-blocking)
    const pos = this.userInput.length - 1;
    const el = document.querySelector(`#chars-${this.currentLineIndex} .k-char[data-i="${pos}"]`);
    if (el) {
      el.classList.add(isCorrect ? 'hit-correct' : 'hit-wrong');
      setTimeout(() => el.classList.remove('hit-correct', 'hit-wrong'), 240);
    }

    // phonics: speak on correct hit in explore mode
    if (this.mode === 'explore' && isCorrect) {
      const say = expectedChar === ' ' ? 'space' : expectedChar;
      this.speak(say);
    }

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
    this.updateFingerHighlight();
  }

  refreshBandChars(lineIndex) {
    const charsDiv = document.getElementById(`chars-${lineIndex}`);
    if (!charsDiv) return;
    charsDiv.innerHTML = this.buildCharsHTML(lineIndex, this.userInput);
  }

  unlockCurrentLine() {
    const idx = this.currentLineIndex;
    this.lineCompleted[idx] = true;

    // Update band: completed (direct reveal, no mid-mask animation)
    const band = document.getElementById(`band-${idx}`);
    if (band) {
      band.classList.remove('active', 'locked', 'unlocking');
      band.classList.add('completed');
    }

    // Explore mode: after first line completed, show photo.
    // Create mode: update stage by step completion.
    if (this.mode !== 'create' && idx === 0) {
      const card = document.getElementById('unifiedCard');
      if (card) card.classList.add('bg-ready');
    }
    if (this.mode === 'create') {
      this.updateCreateStageForStep(idx);
    }

    // Pill → check
    const pill = document.getElementById(`pill-${idx}`);
    if (pill) pill.textContent = '✅';

    // Show sparkles
    this.showSparkle(band);

    // Add to completed log
    const lineText = this.lines[idx];
    this.addToLog(idx, lineText);

    // Speak full word/line after completion (explore mode)
    if (this.mode === 'explore') {
      const phrase = (lineText || '').trim();
      if (phrase) this.speak(phrase, 0.9, 1.05);
    }

    // Update progress badge
    this.updateProgressBadge();

    // Move to next line
    const next = idx + 1;
    if (next >= this.lines.length) {
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
        this.updateFingerHighlight();
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
    const totalChars = this.lines.reduce((sum, line) => sum + line.length, 0);

    // 保存到 sessionStorage，首页会读取
    sessionStorage.setItem('kidsCompleted', totalChars.toString());

    // 获取最终统计
    const stats = this.getFinalStats();

    document.getElementById('completionAnimalEmoji').textContent = this.animal.emoji;
    document.getElementById('completionSubtitle').textContent =
      this.mode === 'create'
        ? `你完成了创作指令：${this.lesson?.title || 'Prompt'}！`
        : `你解锁了完整的 ${this.animal.name}！`;

    // 显示最终统计
    const finalStatsEl = document.getElementById('completionFinalStats');
    if (finalStatsEl) {
      finalStatsEl.innerHTML = `
        <div class="completion-stat-row">
          <span class="stat-label">⏱️ 用时</span>
          <span class="stat-value">${stats.time}</span>
        </div>
        <div class="completion-stat-row">
          <span class="stat-label">⭐ 进度</span>
          <span class="stat-value">${stats.progress}</span>
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
    this.lineCompleted = new Array(this.lines.length).fill(false);
    this.isStarted = false;
    this.totalCharsTyped = 0;
    this.totalErrors = 0;
    this.startTime = null;

    // Reset stats display
    document.getElementById('timerValue').textContent = '0:00';
    const progEl = document.getElementById('progressValue');
    if (progEl) progEl.textContent = `0/${this.lines.length}`;
    document.getElementById('accuracyValue').textContent = '100%';

    // Show hint again
    const hint = document.getElementById('kidsStartHint');
    if (hint) hint.classList.remove('hide');

    // Rebuild
    this.buildUnifiedCard();
    const card = document.getElementById('unifiedCard');
    if (card) card.classList.remove('bg-ready');
    this.updateProgressBadge();
    this.updateFingerHighlight();

    // Clear log
    const list = document.getElementById('completedLogList');
    list.innerHTML = '<span class="completed-log-empty">打对一行就会出现在这里～</span>';

    // Reset create stage
    this.setupCreateStage();

    // Restart timer
    this.startTimer();
    this.focusInput();
  }
}

let kidsPractice;
document.addEventListener('DOMContentLoaded', () => {
  kidsPractice = new KidsPractice();
});
