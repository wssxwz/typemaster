// Typing Practice Logic

class TypingPractice {
    constructor() {
        this.article = null;
        this.currentIndex = 0;
        this.errors = 0;
        this.startTime = null;
        this.timerInterval = null;
        this.isStarted = false;
        
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
            return `<span class="char" data-index="${index}">${char}</span>`;
        }).join('');
    }

    setupEventListeners() {
        const input = document.getElementById('typingInput');
        
        input.addEventListener('input', (e) => {
            if (!this.isStarted) {
                this.startPractice();
            }
            this.handleInput(e.target.value);
        });

        input.addEventListener('paste', (e) => {
            e.preventDefault();
        });

        // Settings toggle
        const settingsToggle = document.getElementById('settingsToggle');
        const settingsDropdown = document.getElementById('settingsDropdown');
        
        settingsToggle.addEventListener('click', () => {
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
            btn.addEventListener('click', () => {
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
        resetBtn.addEventListener('click', () => {
            this.resetPractice();
        });

        // Focus input on load
        input.focus();
    }

    startPractice() {
        this.isStarted = true;
        this.startTime = Date.now();
        this.timerInterval = setInterval(() => {
            this.updateTimer();
        }, 100);
    }

    handleInput(value) {
        const chars = document.querySelectorAll('.char');
        const targetText = this.article.content;
        
        // Reset all chars
        chars.forEach(char => {
            char.classList.remove('correct', 'incorrect', 'current');
        });

        // Mark characters
        let errorsCount = 0;
        for (let i = 0; i < value.length; i++) {
            if (i < targetText.length) {
                if (value[i] === targetText[i]) {
                    chars[i].classList.add('correct');
                } else {
                    chars[i].classList.add('incorrect');
                    errorsCount++;
                }
            }
        }

        // Mark current character
        if (value.length < targetText.length) {
            chars[value.length].classList.add('current');
        }

        this.currentIndex = value.length;
        this.errors = errorsCount;

        // Update stats
        this.updateStats();

        // Check if completed
        if (value.length >= targetText.length && value === targetText) {
            this.completePractice();
        }
    }

    updateStats() {
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
        const input = document.getElementById('typingInput');
        input.disabled = true;
        
        // Show completion message
        setTimeout(() => {
            alert(`🎉 Practice Complete!\n\nWPM: ${document.getElementById('wpmValue').textContent}\nAccuracy: ${document.getElementById('accuracyValue').textContent}\nTime: ${document.getElementById('timeValue').textContent}`);
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

        // Reset UI
        const input = document.getElementById('typingInput');
        input.value = '';
        input.disabled = false;
        input.focus();

        // Reset display
        this.renderTextDisplay();

        // Reset stats
        document.getElementById('wpmValue').textContent = '0';
        document.getElementById('accuracyValue').textContent = '100%';
        document.getElementById('timeValue').textContent = '0:00';
        document.getElementById('progressValue').textContent = '0%';
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
        const textDisplay = document.getElementById('textDisplay');
        if (color === '#1f2937') {
            textDisplay.style.color = '#d1d5db';
        } else {
            textDisplay.style.color = '#6b7280';
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