// Typing Practice Logic

class TypingPractice {
    constructor() {
        this.article = null;
        this.currentIndex = 0;
        this.errors = 0;
        this.startTime = null;
        this.timerInterval = null;
        this.isStarted = false;
        this.userInput = '';
        
        // Settings
        this.settings = {
            backgroundColor: localStorage.getItem('bgColor') || '#ffffff',
            fontFamily: localStorage.getItem('fontFamily') || "'Inter', sans-serif",
            fontSize: localStorage.getItem('fontSize') || '20'
        };

        this.init();
    }

    init() {
        this.loadArticle();
        this.applySettings();
        this.setupEventListeners();
    }

    loadArticle() {
        const articleId = parseInt(localStorage.getItem('currentArticleId'));
        this.article = articles.find(a => a.id === articleId);
        
        if (!this.article) {
            window.location.href = 'index.html';
            return;
        }

        // Set article title
        document.getElementById('articleTitle').textContent = this.article.title;
        
        // Render text display
        this.renderTextDisplay();
    }

    renderTextDisplay() {
        const textDisplay = document.getElementById('textDisplay');
        const content = this.article.content;
        
        textDisplay.innerHTML = content.split('').map((char, index) => {
            return `<span class="char" data-index="${index}">${char === ' ' ? '&nbsp;' : char}</span>`;
        }).join('');
    }

    setupEventListeners() {
        const typingArea = document.getElementById('typingArea');
        const input = document.getElementById('typingInput');
        
        // Click anywhere in typing area to focus hidden input
        typingArea.addEventListener('click', () => {
            input.focus();
        });

        // Handle keyboard input
        document.addEventListener('keydown', (e) => {
            // Ignore if settings dropdown is open
            const settingsDropdown = document.getElementById('settingsDropdown');
            if (settingsDropdown.classList.contains('active')) {
                return;
            }

            // Prevent default for typing keys
            if (e.key.length === 1 || e.key === 'Backspace' || e.key === 'Delete') {
                e.preventDefault();
                input.focus();

                if (!this.isStarted && e.key.length === 1) {
                    this.startPractice();
                }

                this.handleKeyPress(e.key);
            }
        });

        // Prevent paste
        input.addEventListener('paste', (e) => {
            e.preventDefault();
        });

        // Settings toggle
        const settingsToggle = document.getElementById('settingsToggle');
        const settingsDropdown = document.getElementById('settingsDropdown');
        
        settingsToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            settingsDropdown.classList.toggle('active');
        });

        // Close settings when clicking outside
        document.addEventListener('click', (e) => {
            if (!settingsToggle.contains(e.target) && !settingsDropdown.contains(e.target)) {
                settingsDropdown.classList.remove('active');
            }
        });

        // Background color buttons
        const colorBtns = document.querySelectorAll('.color-btn');
        colorBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const color = btn.dataset.color;
                this.updateBackgroundColor(color);
                colorBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Font family select
        const fontSelect = document.getElementById('fontSelect');
        fontSelect.value = this.settings.fontFamily;
        fontSelect.addEventListener('change', (e) => {
            this.updateFontFamily(e.target.value);
        });

        // Font size slider
        const fontSizeSlider = document.getElementById('fontSizeSlider');
        const fontSizeDisplay = document.getElementById('fontSizeDisplay');
        fontSizeSlider.value = this.settings.fontSize;
        fontSizeDisplay.textContent = `${this.settings.fontSize}px`;
        
        fontSizeSlider.addEventListener('input', (e) => {
            const size = e.target.value;
            fontSizeDisplay.textContent = `${size}px`;
            this.updateFontSize(size);
        });

        // Reset button
        const resetBtn = document.getElementById('resetBtn');
        resetBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.resetPractice();
        });

        // Focus input on load
        input.focus();
    }

    handleKeyPress(key) {
        const targetText = this.article.content;

        if (key === 'Backspace') {
            if (this.userInput.length > 0) {
                this.userInput = this.userInput.slice(0, -1);
                this.currentIndex = this.userInput.length;
            }
        } else if (key.length === 1) {
            if (this.currentIndex < targetText.length) {
                this.userInput += key;
                this.currentIndex = this.userInput.length;
            }
        }

        this.updateDisplay();
        this.updateStats();

        // Check if completed
        if (this.userInput.length >= targetText.length && 
            this.userInput === targetText) {
            this.completePractice();
        }
    }

    updateDisplay() {
        const chars = document.querySelectorAll('.char');
        const targetText = this.article.content;
        const typingHint = document.getElementById('typingHint');

        // Hide hint after first character
        if (this.userInput.length > 0) {
            typingHint.classList.add('hidden');
        } else {
            typingHint.classList.remove('hidden');
        }

        // Reset all chars
        chars.forEach(char => {
            char.classList.remove('typed-correct', 'typed-incorrect', 'current');
        });

        // Count errors
        let errorsCount = 0;

        // Mark typed characters
        for (let i = 0; i < this.userInput.length; i++) {
            if (i < targetText.length) {
                if (this.userInput[i] === targetText[i]) {
                    chars[i].classList.add('typed-correct');
                } else {
                    chars[i].classList.add('typed-incorrect');
                    errorsCount++;
                }
            }
        }

        // Mark current character
        if (this.currentIndex < targetText.length) {
            chars[this.currentIndex].classList.add('current');
        }

        this.errors = errorsCount;
    }

    startPractice() {
        this.isStarted = true;
        this.startTime = Date.now();
        this.timerInterval = setInterval(() => {
            this.updateTimer();
        }, 100);
    }

    updateStats() {
        if (!this.isStarted) return;

        // Calculate WPM (Words Per Minute)
        const timeElapsed = (Date.now() - this.startTime) / 1000 / 60; // minutes
        const wordsTyped = this.currentIndex / 5; // Standard: 5 chars = 1 word
        const wpm = timeElapsed > 0 ? Math.round(wordsTyped / timeElapsed) : 0;

        // Calculate Accuracy
        const totalTyped = this.currentIndex;
        const accuracy = totalTyped > 0 ? Math.round(((totalTyped - this.errors) / totalTyped) * 100) : 100;

        // Calculate Progress
        const progress = Math.round((this.currentIndex / this.article.content.length) * 100);

        // Update display
        document.getElementById('wpmValue').textContent = wpm;
        document.getElementById('accuracyValue').textContent = `${accuracy}%`;
        document.getElementById('progressValue').textContent = `${progress}%`;
    }

    updateTimer() {
        const timeElapsed = Math.floor((Date.now() - this.startTime) / 1000);
        const minutes = Math.floor(timeElapsed / 60);
        const seconds = timeElapsed % 60;
        document.getElementById('timeValue').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    completePractice() {
        clearInterval(this.timerInterval);
        
        const wpm = document.getElementById('wpmValue').textContent;
        const accuracy = document.getElementById('accuracyValue').textContent;
        const time = document.getElementById('timeValue').textContent;
        
        // Show completion message
        setTimeout(() => {
            const message = `🎉 练习完成！\n\n速度：${wpm} WPM\n准确率：${accuracy}\n用时：${time}`;
            
            if (confirm(message + '\n\n要再试一次吗？')) {
                this.resetPractice();
            }
        }, 500);
    }

    resetPractice() {
        // Clear timer
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        // Reset state
        this.currentIndex = 0;
        this.errors = 0;
        this.startTime = null;
        this.isStarted = false;
        this.userInput = '';

        // Reset display
        this.renderTextDisplay();
        document.getElementById('typingHint').classList.remove('hidden');

        // Reset stats
        document.getElementById('wpmValue').textContent = '0';
        document.getElementById('accuracyValue').textContent = '100%';
        document.getElementById('timeValue').textContent = '0:00';
        document.getElementById('progressValue').textContent = '0%';

        // Focus input
        document.getElementById('typingInput').focus();
    }

    applySettings() {
        const typingArea = document.getElementById('typingArea');
        const textDisplay = document.getElementById('textDisplay');
        
        typingArea.style.backgroundColor = this.settings.backgroundColor;
        textDisplay.style.fontFamily = this.settings.fontFamily;
        textDisplay.style.fontSize = `${this.settings.fontSize}px`;

        // Mark active color button
        const colorBtns = document.querySelectorAll('.color-btn');
        colorBtns.forEach(btn => {
            if (btn.dataset.color === this.settings.backgroundColor) {
                btn.classList.add('active');
            }
        });
    }

    updateBackgroundColor(color) {
        this.settings.backgroundColor = color;
        localStorage.setItem('bgColor', color);
        document.getElementById('typingArea').style.backgroundColor = color;

        // Update text color for dark backgrounds
        const chars = document.querySelectorAll('.char:not(.typed-correct):not(.typed-incorrect)');
        if (color === '#1f2937') {
            chars.forEach(char => char.style.color = '#9ca3af');
        } else {
            chars.forEach(char => char.style.color = '#d1d5db');
        }
    }

    updateFontFamily(font) {
        this.settings.fontFamily = font;
        localStorage.setItem('fontFamily', font);
        document.getElementById('textDisplay').style.fontFamily = font;
    }

    updateFontSize(size) {
        this.settings.fontSize = size;
        localStorage.setItem('fontSize', size);
        document.getElementById('textDisplay').style.fontSize = `${size}px`;
    }
}

// Initialize practice when DOM is ready
let practice;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        practice = new TypingPractice();
    });
} else {
    practice = new TypingPractice();
}