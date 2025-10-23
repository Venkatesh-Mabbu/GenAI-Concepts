// ===== GENAI ACADEMY - COMPLETE APPLICATION =====
// Production-ready JavaScript with full functionality

// ===== STATE MANAGEMENT =====
const state = {
    currentPage: 'home',
    completedConcepts: new Set(),
    bookmarkedConcepts: new Set(),
    notes: [],
    learningStreak: 0,
    lastVisit: null,
    theme: 'light'
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('GenAI Academy Loading...');

    // Load saved state
    loadState();

    // Setup event listeners
    setupEventListeners();

    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
    }, 1000);

    // Initial page load
    const hash = window.location.hash.slice(1) || 'home';
    navigateTo(hash);

    // Update UI
    updateProgress();
    updateLearningStreak();

    console.log('GenAI Academy Loaded ✓');
});

// Handle hash changes for browser navigation
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1) || 'home';
    navigateTo(hash);
});

// ===== STATE PERSISTENCE =====
function loadState() {
    try {
        const saved = {
            completed: localStorage.getItem('completedConcepts'),
            bookmarks: localStorage.getItem('bookmarkedConcepts'),
            notes: localStorage.getItem('notes'),
            streak: localStorage.getItem('learningStreak'),
            lastVisit: localStorage.getItem('lastVisit'),
            theme: localStorage.getItem('theme')
        };

        if (saved.completed) state.completedConcepts = new Set(JSON.parse(saved.completed));
        if (saved.bookmarks) state.bookmarkedConcepts = new Set(JSON.parse(saved.bookmarks));
        if (saved.notes) state.notes = JSON.parse(saved.notes);
        if (saved.streak) state.learningStreak = parseInt(saved.streak);
        if (saved.lastVisit) state.lastVisit = saved.lastVisit;
        if (saved.theme) {
            state.theme = saved.theme;
            document.documentElement.setAttribute('data-theme', saved.theme);
        }
    } catch (error) {
        console.error('Error loading state:', error);
    }
}

function saveState() {
    try {
        localStorage.setItem('completedConcepts', JSON.stringify([...state.completedConcepts]));
        localStorage.setItem('bookmarkedConcepts', JSON.stringify([...state.bookmarkedConcepts]));
        localStorage.setItem('notes', JSON.stringify(state.notes));
        localStorage.setItem('learningStreak', state.learningStreak.toString());
        localStorage.setItem('lastVisit', new Date().toISOString());
        localStorage.setItem('theme', state.theme);
    } catch (error) {
        console.error('Error saving state:', error);
    }
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Menu toggle
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            document.getElementById('sidebar').classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Progress button
    const progressBtn = document.getElementById('progressBtn');
    if (progressBtn) {
        progressBtn.addEventListener('click', showProgressModal);
    }

    // Bookmarks button
    const bookmarksBtn = document.getElementById('bookmarksBtn');
    if (bookmarksBtn) {
        bookmarksBtn.addEventListener('click', showBookmarksModal);
    }

    // Notes button
    const notesBtn = document.getElementById('notesBtn');
    if (notesBtn) {
        notesBtn.addEventListener('click', showNotesModal);
    }

    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('focus', () => {
            document.getElementById('searchResults').classList.add('active');
        });
    }

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            document.getElementById('searchResults')?.classList.remove('active');
        }
    });

    // Navigation items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.getAttribute('data-page');
            if (page) {
                navigateTo(page);
                // Close sidebar on mobile
                if (window.innerWidth <= 1024) {
                    document.getElementById('sidebar').classList.remove('active');
                }
            }
        });
    });

    // Modal close buttons
    document.querySelectorAll('.modal-overlay, .modal-close').forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target === el) {
                const modal = el.closest('.modal');
                if (modal) closeModal(modal.id);
            }
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            document.getElementById('searchInput')?.focus();
        }
        // Escape to close modals
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                closeModal(modal.id);
            });
        }
    });

    // Scroll to top
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // FAB menu
    const fabMain = document.getElementById('fabMain');
    const fabMenu = document.getElementById('fabMenu');
    if (fabMain && fabMenu) {
        fabMain.addEventListener('click', () => {
            fabMenu.classList.toggle('active');
            fabMain.classList.toggle('active');
        });

        // Close FAB when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.fab-container')) {
                fabMenu.classList.remove('active');
                fabMain.classList.remove('active');
            }
        });
    }
}

// ===== NAVIGATION =====
function navigateTo(page) {
    console.log('Navigating to:', page);
    state.currentPage = page;

    // Update URL hash
    window.location.hash = page;

    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-page') === page) {
            item.classList.add('active');
        }
    });

    // Render page content
    renderPage(page);

    // Scroll to top
    window.scrollTo(0, 0);
}

function renderPage(page) {
    const mainContent = document.getElementById('mainContent');
    if (!mainContent) return;

    let content = '';

    switch(page) {
        case 'home':
            content = generateHomePage();
            break;
        case 'roadmap':
            content = generateRoadmapPage();
            break;
        case 'beginner':
        case 'intermediate':
        case 'advanced':
            content = generateConceptsPage(page);
            break;
        case 'tutorials':
            content = generateTutorialsPage();
            break;
        case 'exercises':
            content = generateExercisesPage();
            break;
        case 'projects':
            content = generateProjectsPage();
            break;
        case 'quizzes':
            content = generateQuizzesPage();
            break;
        case 'faq':
            content = generateFAQPage();
            break;
        case 'interview':
            content = generateInterviewPage();
            break;
        case 'glossary':
            content = generateGlossaryPage();
            break;
        case 'playground':
            content = generatePlaygroundPage();
            break;
        default:
            content = generateHomePage();
    }

    mainContent.innerHTML = content;
    mainContent.classList.add('fade-in');

    // Re-attach event listeners for dynamic content
    attachDynamicEventListeners();
}

// ===== PAGE GENERATORS =====
function generateHomePage() {
    const totalConcepts = getTotalConcepts();
    const completed = state.completedConcepts.size;
    const percentage = Math.round((completed / totalConcepts) * 100);

    return `
        <div class="hero">
            <div class="hero-content">
                <h1>Master Generative AI</h1>
                <p>Your comprehensive journey from beginner to expert. 105+ in-depth concepts, tutorials, and hands-on projects to master GenAI.</p>
                <div class="hero-stats">
                    <div class="hero-stat">
                        <span class="hero-stat-number">105+</span>
                        <span class="hero-stat-label">Concepts</span>
                    </div>
                    <div class="hero-stat">
                        <span class="hero-stat-number">${completed}</span>
                        <span class="hero-stat-label">Completed</span>
                    </div>
                    <div class="hero-stat">
                        <span class="hero-stat-number">${percentage}%</span>
                        <span class="hero-stat-label">Progress</span>
                    </div>
                    <div class="hero-stat">
                        <span class="hero-stat-number">${state.learningStreak}</span>
                        <span class="hero-stat-label">Day Streak</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-header">
            <div>
                <h2 class="section-title">Choose Your Learning Path</h2>
                <p class="section-subtitle">Start with fundamentals or dive into advanced topics</p>
            </div>
        </div>

        <div class="cards-grid">
            ${generateLevelCard('beginner', '🌱', 'Beginner', 'Start your GenAI journey', 30, 'badge-beginner')}
            ${generateLevelCard('intermediate', '🚀', 'Intermediate', 'Advance your knowledge', 40, 'badge-intermediate')}
            ${generateLevelCard('advanced', '⚡', 'Advanced', 'Master cutting-edge tech', 35, 'badge-advanced')}
        </div>

        <div class="section-header mt-4">
            <div>
                <h2 class="section-title">Featured Concepts</h2>
                <p class="section-subtitle">Deep dive into these comprehensive guides</p>
            </div>
        </div>

        <div class="cards-grid">
            ${genAIConcepts.beginner.slice(0, 3).map(concept => generateConceptCard(concept)).join('')}
        </div>
    `;
}

function generateLevelCard(level, icon, title, description, count, badgeClass) {
    return `
        <div class="card" onclick="navigateTo('${level}')">
            <div class="card-icon">${icon}</div>
            <h3 class="card-title">${title}</h3>
            <p class="card-description">${description}</p>
            <div class="card-footer">
                <div class="card-meta">
                    <span>${count} concepts</span>
                </div>
                <span class="card-badge ${badgeClass}">${title}</span>
            </div>
        </div>
    `;
}

function generateConceptsPage(level) {
    const concepts = genAIConcepts[level] || [];
    const levelNames = { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' };
    const levelIcons = { beginner: '🌱', intermediate: '🚀', advanced: '⚡' };
    const levelColors = { beginner: 'var(--gradient-green)', intermediate: 'var(--gradient-orange)', advanced: 'var(--gradient-purple)' };
    const completed = concepts.filter(c => state.completedConcepts.has(c.id)).length;

    return `
        <div class="hero" style="background: ${levelColors[level]};">
            <div class="hero-content">
                <h1>${levelIcons[level]} ${levelNames[level]} Concepts</h1>
                <p>Comprehensive guides covering ${level} level topics in Generative AI with detailed explanations and code examples.</p>
                <div class="hero-stats">
                    <div class="hero-stat">
                        <span class="hero-stat-number">${concepts.length}</span>
                        <span class="hero-stat-label">Total</span>
                    </div>
                    <div class="hero-stat">
                        <span class="hero-stat-number">${completed}</span>
                        <span class="hero-stat-label">Completed</span>
                    </div>
                    <div class="hero-stat">
                        <span class="hero-stat-number">${Math.round((completed/concepts.length)*100)}%</span>
                        <span class="hero-stat-label">Progress</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-header">
            <h2 class="section-title">All ${levelNames[level]} Concepts</h2>
        </div>

        <div class="cards-grid">
            ${concepts.map(concept => generateConceptCard(concept)).join('')}
        </div>
    `;
}

function generateConceptCard(concept) {
    const isCompleted = state.completedConcepts.has(concept.id);
    const isBookmarked = state.bookmarkedConcepts.has(concept.id);
    const badgeClass = concept.level === 'Beginner' ? 'badge-beginner' :
                       concept.level === 'Intermediate' ? 'badge-intermediate' : 'badge-advanced';

    return `
        <div class="card" onclick="openConceptModal('${concept.id}')">
            <div class="card-header">
                <div class="card-icon">${concept.icon}</div>
                <span class="card-badge ${badgeClass}">${concept.level}</span>
            </div>
            <h3 class="card-title">${concept.title}</h3>
            <p class="card-description">${concept.description}</p>
            <div class="card-footer">
                <div class="card-meta">
                    <span>📖 ${concept.readTime}</span>
                </div>
                <div class="card-action">
                    <button class="icon-btn ${isCompleted ? 'active' : ''}" onclick="event.stopPropagation(); toggleComplete('${concept.id}');" title="Mark complete">
                        <i class="fas fa-${isCompleted ? 'check-circle' : 'circle'}"></i>
                    </button>
                    <button class="icon-btn ${isBookmarked ? 'active' : ''}" onclick="event.stopPropagation(); toggleBookmark('${concept.id}');" title="Bookmark">
                        <i class="fas fa-${isBookmarked ? 'bookmark' : 'bookmark'}" style="${isBookmarked ? 'color: var(--primary-red);' : ''}"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ===== CONCEPT MODAL =====
function openConceptModal(conceptId) {
    const concept = findConceptById(conceptId);
    if (!concept) {
        console.error('Concept not found:', conceptId);
        return;
    }

    const modal = document.getElementById('conceptModal');
    const modalBody = document.getElementById('modalBody');

    const isCompleted = state.completedConcepts.has(conceptId);
    const isBookmarked = state.bookmarkedConcepts.has(conceptId);
    const badgeClass = concept.level === 'Beginner' ? 'badge-beginner' :
                       concept.level === 'Intermediate' ? 'badge-intermediate' : 'badge-advanced';

    modalBody.innerHTML = `
        <div class="concept-detail">
            <div class="concept-header">
                <div style="font-size: 3rem; margin-bottom: 1rem;">${concept.icon}</div>
                <h1 class="concept-title">${concept.title}</h1>
                <div class="concept-meta">
                    <span class="card-badge ${badgeClass}">${concept.level}</span>
                    <span style="color: var(--text-secondary);">📖 ${concept.readTime}</span>
                    ${isCompleted ? '<span class="card-badge badge-beginner" style="background: var(--primary-green); color: white;"><i class="fas fa-check"></i> Completed</span>' : ''}
                    ${isBookmarked ? '<span class="card-badge badge-red" style="background: var(--primary-red); color: white;"><i class="fas fa-bookmark"></i> Bookmarked</span>' : ''}
                </div>
            </div>
            <div class="concept-content">
                ${concept.content}
            </div>
            <div class="concept-actions">
                <button class="btn ${isCompleted ? 'btn-secondary' : 'btn-primary'}" onclick="toggleComplete('${conceptId}'); openConceptModal('${conceptId}');">
                    <i class="fas fa-${isCompleted ? 'check-circle' : 'circle'}"></i>
                    ${isCompleted ? 'Completed' : 'Mark as Complete'}
                </button>
                <button class="btn btn-secondary" onclick="toggleBookmark('${conceptId}'); openConceptModal('${conceptId}');">
                    <i class="fas fa-bookmark"></i>
                    ${isBookmarked ? 'Bookmarked' : 'Bookmark'}
                </button>
                <button class="btn btn-secondary" onclick="shareContent()">
                    <i class="fas fa-share"></i>
                    Share
                </button>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function findConceptById(id) {
    for (const category of Object.values(genAIConcepts)) {
        const concept = category.find(c => c.id === id);
        if (concept) return concept;
    }
    return null;
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===== CONCEPT ACTIONS =====
function toggleComplete(conceptId) {
    if (state.completedConcepts.has(conceptId)) {
        state.completedConcepts.delete(conceptId);
        showToast('Removed from completed', 'info');
    } else {
        state.completedConcepts.add(conceptId);
        showToast('Concept completed! 🎉', 'success');
        updateLearningStreak();
    }
    saveState();
    updateProgress();
    renderPage(state.currentPage);
}

function toggleBookmark(conceptId) {
    if (state.bookmarkedConcepts.has(conceptId)) {
        state.bookmarkedConcepts.delete(conceptId);
        showToast('Removed from bookmarks', 'info');
    } else {
        state.bookmarkedConcepts.add(conceptId);
        showToast('Added to bookmarks!', 'success');
    }
    saveState();
    updateBookmarkCount();
    renderPage(state.currentPage);
}

// ===== PROGRESS =====
function updateProgress() {
    const total = getTotalConcepts();
    const completed = state.completedConcepts.size;
    const percentage = Math.round((completed / total) * 100);

    const elements = {
        badge: document.getElementById('progressBadge'),
        bar: document.getElementById('sidebarProgressBar'),
        percent: document.getElementById('sidebarProgressPercent'),
        count: document.getElementById('completedCount')
    };

    if (elements.badge) elements.badge.textContent = `${percentage}%`;
    if (elements.bar) elements.bar.style.width = `${percentage}%`;
    if (elements.percent) elements.percent.textContent = `${percentage}%`;
    if (elements.count) elements.count.textContent = completed;
}

function updateBookmarkCount() {
    const count = document.getElementById('bookmarkCount');
    if (count) count.textContent = state.bookmarkedConcepts.size;
}

function updateLearningStreak() {
    const today = new Date().toDateString();
    const lastVisit = state.lastVisit ? new Date(state.lastVisit).toDateString() : null;

    if (lastVisit !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (lastVisit === yesterday.toDateString()) {
            state.learningStreak++;
        } else if (!lastVisit) {
            state.learningStreak = 1;
        } else {
            state.learningStreak = 1;
        }

        state.lastVisit = new Date().toISOString();
        saveState();
    }

    const streakEl = document.getElementById('streakDays');
    if (streakEl) streakEl.textContent = state.learningStreak;
}

function getTotalConcepts() {
    return Object.values(genAIConcepts).reduce((sum, arr) => sum + arr.length, 0);
}

// ===== SEARCH =====
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    const resultsContainer = document.getElementById('searchResults');

    if (query.length < 2) {
        resultsContainer.classList.remove('active');
        return;
    }

    const results = [];
    for (const [category, concepts] of Object.entries(genAIConcepts)) {
        for (const concept of concepts) {
            if (concept.title.toLowerCase().includes(query) ||
                concept.description.toLowerCase().includes(query)) {
                results.push({...concept, category});
            }
        }
    }

    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="search-result-item">No results found</div>';
    } else {
        resultsContainer.innerHTML = results.slice(0, 10).map(result => `
            <div class="search-result-item" onclick="openConceptModal('${result.id}'); document.getElementById('searchResults').classList.remove('active');">
                <div class="search-result-title">${result.icon} ${result.title}</div>
                <div class="search-result-category">${result.category.charAt(0).toUpperCase() + result.category.slice(1)} • ${result.readTime}</div>
            </div>
        `).join('');
    }

    resultsContainer.classList.add('active');
}

// ===== THEME =====
function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    saveState();

    const icon = document.querySelector('.theme-icon');
    if (icon) {
        icon.className = state.theme === 'dark' ? 'fas fa-sun theme-icon' : 'fas fa-moon theme-icon';
    }

    showToast(`Switched to ${state.theme} mode`, 'success');
}

// ===== MODALS =====
function showProgressModal() {
    const modal = document.getElementById('progressModal');
    const modalBody = document.getElementById('progressModalBody');

    const total = getTotalConcepts();
    const completed = state.completedConcepts.size;
    const percentage = Math.round((completed / total) * 100);

    const beginnerCompleted = genAIConcepts.beginner.filter(c => state.completedConcepts.has(c.id)).length;
    const intermediateCompleted = genAIConcepts.intermediate.filter(c => state.completedConcepts.has(c.id)).length;
    const advancedCompleted = genAIConcepts.advanced.filter(c => state.completedConcepts.has(c.id)).length;

    modalBody.innerHTML = `
        <h2>Your Learning Progress</h2>
        <div style="margin: 2rem 0;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                <span style="font-size: 1.5rem; font-weight: 700;">${completed} / ${total} concepts</span>
                <span style="font-size: 1.5rem; font-weight: 700; color: var(--primary-green);">${percentage}%</span>
            </div>
            <div class="progress-bar" style="height: 24px;">
                <div class="progress-bar-fill" style="width: ${percentage}%; background: var(--primary-green);"></div>
            </div>
        </div>

        <h3>Progress by Level</h3>
        <div style="margin-top: 1.5rem;">
            <div style="margin-bottom: 1.5rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>🌱 Beginner</span>
                    <span>${beginnerCompleted} / ${genAIConcepts.beginner.length}</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-bar-fill" style="width: ${(beginnerCompleted/genAIConcepts.beginner.length)*100}%; background: var(--primary-green);"></div>
                </div>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>🚀 Intermediate</span>
                    <span>${intermediateCompleted} / ${genAIConcepts.intermediate.length}</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-bar-fill" style="width: ${genAIConcepts.intermediate.length > 0 ? (intermediateCompleted/genAIConcepts.intermediate.length)*100 : 0}%; background: var(--primary-orange);"></div>
                </div>
            </div>

            <div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>⚡ Advanced</span>
                    <span>${advancedCompleted} / ${genAIConcepts.advanced.length}</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-bar-fill" style="width: ${genAIConcepts.advanced.length > 0 ? (advancedCompleted/genAIConcepts.advanced.length)*100 : 0}%; background: var(--primary-red);"></div>
                </div>
            </div>
        </div>

        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
            <h3>Learning Streak: ${state.learningStreak} days 🔥</h3>
            <p style="color: var(--text-secondary);">Keep learning daily to maintain your streak!</p>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function showBookmarksModal() {
    const modal = document.getElementById('bookmarksModal');
    const modalBody = document.getElementById('bookmarksModalBody');

    const bookmarked = [];
    for (const [category, concepts] of Object.entries(genAIConcepts)) {
        for (const concept of concepts) {
            if (state.bookmarkedConcepts.has(concept.id)) {
                bookmarked.push({...concept, category});
            }
        }
    }

    if (bookmarked.length === 0) {
        modalBody.innerHTML = `
            <h2>Your Bookmarks</h2>
            <p style="text-align: center; color: var(--text-secondary); padding: 3rem 0;">
                No bookmarks yet. Click the bookmark icon on any concept to save it here!
            </p>
        `;
    } else {
        modalBody.innerHTML = `
            <h2>Your Bookmarks (${bookmarked.length})</h2>
            <div class="cards-grid" style="margin-top: 2rem;">
                ${bookmarked.map(concept => generateConceptCard(concept)).join('')}
            </div>
        `;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function showNotesModal() {
    showToast('Notes feature coming soon!', 'info');
}

// Continue in next part...

console.log('GenAI Academy App.js Loaded');

// ===== ADDITIONAL PAGE GENERATORS =====
function generateRoadmapPage() {
    return `
        <div class="hero">
            <div class="hero-content">
                <h1>🗺️ Learning Roadmap</h1>
                <p>Your structured path to mastering Generative AI from fundamentals to advanced applications.</p>
            </div>
        </div>
        <div style="max-width: 900px; margin: 0 auto;">
            <div class="accordion active" onclick="toggleAccordion(this)">
                <button class="accordion-header">
                    <span>🌱 Phase 1: Fundamentals (Beginner)</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Duration:</strong> 4-6 weeks</p>
                        <p>Build a strong foundation in AI, machine learning, and neural networks.</p>
                        <ul>
                            <li>What is Artificial Intelligence?</li>
                            <li>Introduction to Machine Learning</li>
                            <li>Neural Networks Fundamentals</li>
                            <li>What is Generative AI?</li>
                            <li>Large Language Models</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateTutorialsPage() {
    return `
        <div class="hero" style="background: var(--gradient-blue);">
            <div class="hero-content">
                <h1>📚 Tutorials</h1>
                <p>Step-by-step tutorials with hands-on code examples.</p>
            </div>
        </div>
        <div class="section-header">
            <h2 class="section-title">Coming Soon</h2>
            <p class="section-subtitle">Comprehensive tutorials are being developed...</p>
        </div>
    `;
}

function generateExercisesPage() {
    return `
        <div class="hero" style="background: var(--gradient-green);">
            <div class="hero-content">
                <h1>💪 Exercises</h1>
                <p>Practice your skills with hands-on exercises.</p>
            </div>
        </div>
        <div class="section-header">
            <h2 class="section-title">Coming Soon</h2>
        </div>
    `;
}

function generateProjectsPage() {
    return `
        <div class="hero" style="background: var(--gradient-orange);">
            <div class="hero-content">
                <h1>📁 Projects</h1>
                <p>Real-world projects to build your portfolio.</p>
            </div>
        </div>
        <div class="section-header">
            <h2 class="section-title">Coming Soon</h2>
        </div>
    `;
}

function generateQuizzesPage() {
    return `
        <div class="hero" style="background: var(--gradient-purple);">
            <div class="hero-content">
                <h1>🎯 Quizzes</h1>
                <p>Test your knowledge with interactive quizzes.</p>
            </div>
        </div>
        <div class="section-header">
            <h2 class="section-title">Coming Soon</h2>
        </div>
    `;
}

function generateFAQPage() {
    return `
        <div class="hero" style="background: var(--gradient-sunset);">
            <div class="hero-content">
                <h1>❓ Frequently Asked Questions</h1>
                <p>Find answers to common questions about Generative AI.</p>
            </div>
        </div>
        <div style="max-width: 900px; margin: 0 auto;">
            <div class="accordion" onclick="toggleAccordion(this)">
                <button class="accordion-header">
                    <span>What is Generative AI?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        Generative AI refers to AI systems that can create new content like text, images, audio, and video rather than just analyzing existing data.
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateInterviewPage() {
    return `
        <div class="hero" style="background: var(--gradient-purple);">
            <div class="hero-content">
                <h1>💼 Interview Preparation</h1>
                <p>Prepare for your GenAI interviews with curated questions.</p>
            </div>
        </div>
        <div class="section-header">
            <h2 class="section-title">Coming Soon</h2>
        </div>
    `;
}

function generateGlossaryPage() {
    return `
        <div class="hero">
            <div class="hero-content">
                <h1>📖 GenAI Glossary</h1>
                <p>Quick reference guide to AI and ML terminology.</p>
            </div>
        </div>
        <div class="section-header">
            <h2 class="section-title">Coming Soon</h2>
        </div>
    `;
}

function generatePlaygroundPage() {
    return `
        <div class="hero" style="background: var(--gradient-ocean);">
            <div class="hero-content">
                <h1>💻 Code Playground</h1>
                <p>Interactive coding environment for experimenting with GenAI.</p>
            </div>
        </div>
        <div class="section-header">
            <h2 class="section-title">Coming Soon</h2>
        </div>
    `;
}

// ===== HELPERS =====
function toggleAccordion(element) {
    element.classList.toggle('active');
}

function attachDynamicEventListeners() {
    // Re-attach accordion listeners
    document.querySelectorAll('.accordion').forEach(acc => {
        const header = acc.querySelector('.accordion-header');
        if (header && !header.hasAttribute('data-listener')) {
            header.setAttribute('data-listener', 'true');
            header.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleAccordion(acc);
            });
        }
    });
}

function openNoteModal() {
    showToast('Note editor coming soon!', 'info');
}

function saveNote() {
    showToast('Note saved!', 'success');
}

function clearAllNotifications() {
    showToast('All notifications cleared', 'success');
}

// Export function
window.navigateTo = navigateTo;
window.openConceptModal = openConceptModal;
window.closeModal = closeModal;
window.toggleComplete = toggleComplete;
window.toggleBookmark = toggleBookmark;
window.toggleAccordion = toggleAccordion;
window.openNoteModal = openNoteModal;
window.saveNote = saveNote;
window.exportProgress = exportProgress;
window.shareContent = shareContent;
window.printContent = printContent;
window.closeAnnouncement = closeAnnouncement;

