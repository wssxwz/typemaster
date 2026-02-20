// TypeKids - 幼儿版练习逻辑
// 核心机制：每打完一行，解锁一行动物图片

class KidsPractice {
  constructor() {
    this.animal = null;
    this.currentLineIndex = 0;
    this.userInput = '';
    this.lineCompleted = []; // 每行是否完成
    this.confettiActive = false;

    this.init();
  }

  init() {
    // Load animal
    const animalId = localStorage.getItem('kidsAnimalId') || 'panda';
    this.animal = kidsAnimals.find(a => a.id === animalId) || kidsAnimals[0];
    this.lineCompleted = new Array(this.animal.lines.length).fill(false);

    // Setup UI
    this.setupAnimalHeader();
    this.setupAnimalReveal();
    this.setupProgressStars();
    this.renderLines();
    this.setupInput();

    // Focus the typing area
    this.focusInput();
  }

  setupAnimalHeader() {
    document.getElementById('practiceAnimalEmoji').textContent = this.animal.emoji;
    document.getElementById('practiceAnimalName').textContent = this.animal.name + ' - ' + this.animal.nameEn;
    document.title = `TypeKids - ${this.animal.name}`;
  }

  setupAnimalReveal() {
    const svgLayer = document.getElementById('animalSvgLayer');
    const maskContainer = document.getElementById('maskRowsContainer');
    const totalLines = this.animal.lines.length;

    // Inject SVG
    svgLayer.innerHTML = this.animal.svg;

    // Create mask rows (one per line)
    maskContainer.innerHTML = '';
    for (let i = 0; i < totalLines; i++) {
      const row = document.createElement('div');
      row.className = 'mask-row';
      row.id = `mask-row-${i}`;
      // Color hint on each mask row
      row.style.background = i % 2 === 0 ? '#e0e0e0' : '#d5d5d5';
      maskContainer.appendChild(row);
    }
  }

  setupProgressStars() {
    const row = document.getElementById('progressStarsRow');
    const totalLines = this.animal.lines.length;
    row.innerHTML = '';
    for (let i = 0; i < totalLines; i++) {
      const star = document.createElement('span');
      star.className = 'progress-star';
      star.id = `progress-star-${i}`;
      star.textContent = '⭐';
      row.appendChild(star);
    }
  }

  renderLines() {
    const container = document.getElementById('kidsLinesContainer');
    const totalLines = this.animal.lines.length;
    container.innerHTML = '';

    for (let i = 0; i < totalLines; i++) {
      const row = document.createElement('div');
      row.className = 'kids-line-row' + (i === 0 ? ' active' : '');
      row.id = `line-row-${i}`;

      const lineText = this.animal.lines[i];

      row.innerHTML = `
        <span class="line-number">${i + 1}</span>
        <span class="line-lock-icon" id="lock-icon-${i}">${this.lineCompleted[i] ? '✅' : (i === 0 ? '✏️' : '🔒')}</span>
        <div class="kids-chars-display" id="chars-display-${i}">
          ${lineText.split('').map((ch, ci) => {
            const cls = (i === 0 && ci === 0) ? 'k-char k-current' : 'k-char';
            const display = ch === ' ' ? '&nbsp;' : ch;
            return `<span class="${cls}" data-line="${i}" data-pos="${ci}">${display}</span>`;
          }).join('')}
        </div>
      `;
      container.appendChild(row);
    }
  }

  setupInput() {
    const input = document.getElementById('kidsHiddenInput');
    const typingArea = document.getElementById('kidsTypingArea');

    // Click typing area to focus
    typingArea.addEventListener('click', () => this.focusInput());

    // Global keydown
    document.addEventListener('keydown', (e) => {
      const overlay = document.getElementById('kidsCompletionOverlay');
      if (overlay.classList.contains('show')) return;

      if (e.key === 'Backspace') {
        e.preventDefault();
        this.handleBackspace();
      } else if (e.key.length === 1) {
        e.preventDefault();
        this.handleChar(e.key);
      }
    });

    // Mobile: use input event on hidden input
    input.addEventListener('input', (e) => {
      const val = e.target.value;
      if (!val) return;
      // Process each char
      for (const ch of val) {
        this.handleChar(ch);
      }
      input.value = '';
    });
  }

  focusInput() {
    document.getElementById('kidsHiddenInput').focus();
    document.getElementById('typingAreaTip').textContent = '⌨️ 打对每一行，动物图片就出现啦！';
  }

  handleChar(ch) {
    if (this.currentLineIndex >= this.animal.lines.length) return;

    const targetLine = this.animal.lines[this.currentLineIndex];
    const maxLen = targetLine.length;

    if (this.userInput.length >= maxLen) return; // Line full

    this.userInput += ch;
    this.updateLineDisplay(this.currentLineIndex);

    // Check if line is fully typed
    if (this.userInput.length === maxLen) {
      // Check if correct
      if (this.userInput === targetLine) {
        setTimeout(() => this.unlockLine(this.currentLineIndex), 100);
      }
    }
  }

  handleBackspace() {
    if (this.userInput.length === 0) return;
    this.userInput = this.userInput.slice(0, -1);
    this.updateLineDisplay(this.currentLineIndex);
  }

  updateLineDisplay(lineIndex) {
    const targetLine = this.animal.lines[lineIndex];
    const charsContainer = document.getElementById(`chars-display-${lineIndex}`);
    if (!charsContainer) return;

    const spans = charsContainer.querySelectorAll('.k-char');
    const typedLen = this.userInput.length;

    spans.forEach((span, i) => {
      span.classList.remove('k-correct', 'k-wrong', 'k-current');
      if (i < typedLen) {
        if (this.userInput[i] === targetLine[i]) {
          span.classList.add('k-correct');
        } else {
          span.classList.add('k-wrong');
        }
      } else if (i === typedLen) {
        span.classList.add('k-current');
      }
    });
  }

  unlockLine(lineIndex) {
    this.lineCompleted[lineIndex] = true;

    // Update line row UI -> completed style
    const row = document.getElementById(`line-row-${lineIndex}`);
    if (row) {
      row.classList.remove('active');
      row.classList.add('completed');
    }

    // Update lock icon
    const lockIcon = document.getElementById(`lock-icon-${lineIndex}`);
    if (lockIcon) lockIcon.textContent = '✅';

    // Unlock progress star
    const star = document.getElementById(`progress-star-${lineIndex}`);
    if (star) star.classList.add('unlocked');

    // Animate the mask row away
    const maskRow = document.getElementById(`mask-row-${lineIndex}`);
    if (maskRow) {
      maskRow.classList.add('unlocking');
      // Show sparkle
      this.showSparkle(maskRow);
      // After animation, hide permanently
      setTimeout(() => {
        maskRow.classList.add('unlocked');
        maskRow.classList.remove('unlocking');
      }, 650);
    }

    // Move to next line
    const nextLine = lineIndex + 1;

    if (nextLine >= this.animal.lines.length) {
      // All lines done!
      setTimeout(() => this.showCompletion(), 800);
    } else {
      this.currentLineIndex = nextLine;
      this.userInput = '';

      // Activate next row
      const nextRow = document.getElementById(`line-row-${nextLine}`);
      if (nextRow) {
        nextRow.classList.add('active');
        const lockIconNext = document.getElementById(`lock-icon-${nextLine}`);
        if (lockIconNext) lockIconNext.textContent = '✏️';
        // Reset chars display to all untyped
        this.updateLineDisplay(nextLine);
        // Scroll into view
        nextRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Update reveal hint
      const hint = document.getElementById('revealHint');
      if (hint) {
        hint.textContent = `🔓 已解锁 ${nextLine}/${this.animal.lines.length} 行！继续加油！`;
      }
    }
  }

  showSparkle(element) {
    const rect = element.getBoundingClientRect();
    const emojis = ['✨', '⭐', '🌟', '💫', '🎉'];
    const count = 4;

    for (let i = 0; i < count; i++) {
      const spark = document.createElement('div');
      spark.className = 'sparkle-burst';
      spark.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      spark.style.left = (rect.left + Math.random() * rect.width) + 'px';
      spark.style.top = (rect.top + Math.random() * 30) + 'px';
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 900);
    }
  }

  showCompletion() {
    // Update reveal hint to full unlock
    const hint = document.getElementById('revealHint');
    if (hint) hint.textContent = '🎉 完整解锁！太厉害了！';

    // Update overlay
    document.getElementById('completionAnimalEmoji').textContent = this.animal.emoji;
    document.getElementById('completionSubtitle').textContent =
      `你解锁了完整的 ${this.animal.name}！`;

    // Show overlay
    const overlay = document.getElementById('kidsCompletionOverlay');
    overlay.classList.add('show');

    // Start confetti
    this.startConfetti();
  }

  startConfetti() {
    const canvas = document.getElementById('kidsConfettiCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    const colors = ['#ff6b9d', '#ffd93d', '#6bcb77', '#4d96ff', '#c77dff', '#ff8f00', '#26c6da'];
    const particles = [];

    class ConfettiPiece {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.w = Math.random() * 12 + 6;
        this.h = Math.random() * 6 + 4;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.vy = Math.random() * 3 + 2;
        this.vx = (Math.random() - 0.5) * 2;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = (Math.random() - 0.5) * 0.2;
        this.alpha = 1;
      }
      update() {
        this.y += this.vy;
        this.x += this.vx;
        this.angle += this.spin;
        if (this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
        ctx.restore();
      }
    }

    for (let i = 0; i < 80; i++) {
      const p = new ConfettiPiece();
      p.y = Math.random() * canvas.height; // Spread initial positions
      particles.push(p);
    }

    const animate = () => {
      if (!this.confettiActive) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animate);
    };

    this.confettiActive = true;
    animate();

    // Stop after 5 seconds
    setTimeout(() => {
      this.confettiActive = false;
    }, 5000);
  }

  restart() {
    // Stop confetti
    this.confettiActive = false;
    const canvas = document.getElementById('kidsConfettiCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Hide overlay
    document.getElementById('kidsCompletionOverlay').classList.remove('show');

    // Reset state
    this.currentLineIndex = 0;
    this.userInput = '';
    this.lineCompleted = new Array(this.animal.lines.length).fill(false);

    // Re-render
    this.setupAnimalReveal();
    this.setupProgressStars();
    this.renderLines();

    // Reset hint
    document.getElementById('revealHint').textContent = '🔒 打完每一行，解锁一行图片！';
    document.getElementById('typingAreaTip').textContent = '点击这里开始打字';

    this.focusInput();
  }
}

// Init on load
let kidsPractice;
document.addEventListener('DOMContentLoaded', () => {
  kidsPractice = new KidsPractice();
});
