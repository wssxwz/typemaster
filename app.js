// Main Application Logic for Home Page

class TypeMasterApp {
    constructor() {
        this.currentFilter = 'all';
        this.searchQuery = '';
        this.init();
    }

    init() {
        this.renderArticles();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Filter tabs
        const filterTabs = document.querySelectorAll('.filter-tab');
        filterTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                filterTabs.forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.lang;
                this.renderArticles();
            });
        });

        // Search input
        const searchInput = document.querySelector('.search-input');
        searchInput.addEventListener('input', (e) => {
            this.searchQuery = e.target.value.toLowerCase();
            this.renderArticles();
        });
    }

    filterArticles() {
        let filtered = articles;

        // Language filter
        if (this.currentFilter !== 'all') {
            filtered = filtered.filter(article => article.language === this.currentFilter);
        }

        // Search filter
        if (this.searchQuery) {
            filtered = filtered.filter(article => 
                article.title.toLowerCase().includes(this.searchQuery) ||
                article.description.toLowerCase().includes(this.searchQuery) ||
                article.category.toLowerCase().includes(this.searchQuery)
            );
        }

        return filtered;
    }

    renderArticles() {
        const grid = document.getElementById('articlesGrid');
        const filtered = this.filterArticles();

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="margin: 0 auto 1rem;">
                        <circle cx="11" cy="11" r="8" stroke-width="2"/>
                        <path d="M21 21l-4.35-4.35" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <h3 style="margin-bottom: 0.5rem;">No articles found</h3>
                    <p>Try adjusting your filters or search query</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = filtered.map(article => `
            <div class="article-card" onclick="app.openArticle(${article.id})">
                <div class="article-header">
                    <span class="article-category">${article.category}</span>
                    <span class="difficulty-badge difficulty-${article.difficulty}">${this.capitalize(article.difficulty)}</span>
                </div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-description">${article.description}</p>
                <div class="article-meta">
                    <span class="meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        ${article.type}
                    </span>
                    <span class="meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="10" stroke-width="2"/>
                            <path d="M12 6v6l4 2" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        ${article.duration}
                    </span>
                    <span class="meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        ${article.chars} chars
                    </span>
                </div>
                <button class="start-button">Start Practice</button>
            </div>
        `).join('');
    }

    openArticle(articleId) {
        // Save article ID to localStorage
        localStorage.setItem('currentArticleId', articleId);
        // Navigate to practice page
        window.location.href = 'practice.html';
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

// Initialize app when DOM is ready
let app;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        app = new TypeMasterApp();
    });
} else {
    app = new TypeMasterApp();
}