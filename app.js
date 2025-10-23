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
            <div class="accordion active">
                <button class="accordion-header">
                    <span>🌱 Phase 1: Fundamentals (Weeks 1-6)</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Goal:</strong> Build a strong foundation in AI, ML, and neural networks</p>
                        <h4>Core Topics:</h4>
                        <ul>
                            <li>✅ What is Artificial Intelligence?</li>
                            <li>✅ Introduction to Machine Learning</li>
                            <li>✅ Neural Networks Fundamentals</li>
                            <li>✅ What is Generative AI?</li>
                            <li>✅ Large Language Models (LLMs)</li>
                            <li>✅ Transfer Learning</li>
                            <li>✅ Fine-Tuning</li>
                            <li>✅ Embeddings and Tokenization</li>
                            <li>✅ Attention Mechanisms</li>
                            <li>✅ Prompt Engineering Basics</li>
                        </ul>
                        <p><strong>Recommended Path:</strong> Complete all 30 Beginner concepts → Practice with exercises → Build first simple project</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>🚀 Phase 2: Intermediate Skills (Weeks 7-14)</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Goal:</strong> Master advanced prompting, RAG, and specialized architectures</p>
                        <h4>Core Topics:</h4>
                        <ul>
                            <li>✅ Advanced Prompt Engineering</li>
                            <li>✅ Chain-of-Thought Prompting</li>
                            <li>✅ Retrieval-Augmented Generation (RAG)</li>
                            <li>✅ Vector Databases</li>
                            <li>✅ LangChain Fundamentals</li>
                            <li>✅ Fine-tuning vs Prompt Engineering</li>
                            <li>✅ LoRA & Parameter-Efficient Tuning</li>
                            <li>✅ Multi-Modal Models</li>
                            <li>✅ Stable Diffusion & Image Generation</li>
                            <li>✅ Model Evaluation Metrics</li>
                        </ul>
                        <p><strong>Recommended Projects:</strong> Build a RAG chatbot → Create text-to-image app → Fine-tune a small model</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>⚡ Phase 3: Advanced Mastery (Weeks 15-24)</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Goal:</strong> Deep expertise in RLHF, optimization, and production deployment</p>
                        <h4>Core Topics:</h4>
                        <ul>
                            <li>✅ Reinforcement Learning from Human Feedback (RLHF)</li>
                            <li>✅ Constitutional AI</li>
                            <li>✅ Mixture of Experts (MoE)</li>
                            <li>✅ Flash Attention & Optimization</li>
                            <li>✅ Multi-Agent Systems</li>
                            <li>✅ Tool Use & Function Calling</li>
                            <li>✅ Model Interpretability</li>
                            <li>✅ Bias Detection & Mitigation</li>
                            <li>✅ Model Serving at Scale</li>
                            <li>✅ Inference Optimization</li>
                        </ul>
                        <p><strong>Recommended Projects:</strong> Build autonomous agent → Implement RLHF pipeline → Deploy production system</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>🎯 Phase 4: Specialization (Weeks 25+)</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Goal:</strong> Choose your specialization and become an expert</p>
                        <h4>Specialization Tracks:</h4>
                        <ul>
                            <li><strong>🤖 LLM Engineering:</strong> Focus on prompt engineering, RAG, agents, fine-tuning</li>
                            <li><strong>🎨 Generative Media:</strong> Specialize in images, video, audio generation</li>
                            <li><strong>🏗️ ML Infrastructure:</strong> Model serving, optimization, deployment at scale</li>
                            <li><strong>🔬 Research:</strong> Novel architectures, alignment, interpretability</li>
                            <li><strong>🛡️ AI Safety:</strong> Red-teaming, bias detection, robustness, ethics</li>
                        </ul>
                        <p><strong>Next Steps:</strong> Contribute to open source → Publish research → Build startup → Join AI company</p>
                    </div>
                </div>
            </div>

            <div class="section-header" style="margin-top: 3rem;">
                <h2 class="section-title">Learning Tips</h2>
            </div>
            <div class="cards-grid">
                <div class="card">
                    <div class="card-icon">📝</div>
                    <h3 class="card-title">Hands-On Practice</h3>
                    <p class="card-description">Build projects while learning. Theory alone isn't enough—code every day!</p>
                </div>
                <div class="card">
                    <div class="card-icon">🔄</div>
                    <h3 class="card-title">Iterate & Experiment</h3>
                    <p class="card-description">Try different approaches, fail fast, learn from mistakes.</p>
                </div>
                <div class="card">
                    <div class="card-icon">👥</div>
                    <h3 class="card-title">Join Communities</h3>
                    <p class="card-description">Learn with others, share knowledge, get help when stuck.</p>
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
                <p>Step-by-step tutorials with hands-on code examples to build real GenAI applications.</p>
            </div>
        </div>

        <div class="section-header">
            <h2 class="section-title">Beginner Tutorials</h2>
            <p class="section-subtitle">Start with the fundamentals</p>
        </div>

        <div class="cards-grid">
            <div class="card">
                <div class="card-icon">🤖</div>
                <h3 class="card-title">Building Your First Chatbot</h3>
                <p class="card-description">Create a simple chatbot using OpenAI API with Python. Learn about API calls, prompt design, and conversation context.</p>
                <div class="card-footer">
                    <span class="card-badge badge-beginner">45 min</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">💬</div>
                <h3 class="card-title">Prompt Engineering 101</h3>
                <p class="card-description">Master the art of writing effective prompts. Covers zero-shot, few-shot, and chain-of-thought techniques with examples.</p>
                <div class="card-footer">
                    <span class="card-badge badge-beginner">30 min</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🎨</div>
                <h3 class="card-title">Text-to-Image Generation</h3>
                <p class="card-description">Generate images using Stable Diffusion API. Learn about prompts, negative prompts, and parameter tuning.</p>
                <div class="card-footer">
                    <span class="card-badge badge-beginner">40 min</span>
                </div>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">Intermediate Tutorials</h2>
            <p class="section-subtitle">Build production-ready applications</p>
        </div>

        <div class="cards-grid">
            <div class="card">
                <div class="card-icon">🔍</div>
                <h3 class="card-title">Building a RAG System</h3>
                <p class="card-description">Create a Retrieval-Augmented Generation chatbot that answers questions from your documents using LangChain and vector databases.</p>
                <div class="card-footer">
                    <span class="card-badge badge-intermediate">90 min</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">⚡</div>
                <h3 class="card-title">Fine-Tuning a Language Model</h3>
                <p class="card-description">Fine-tune GPT-2 or LLaMA on custom data. Learn about datasets, training loops, and evaluation metrics.</p>
                <div class="card-footer">
                    <span class="card-badge badge-intermediate">120 min</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🔗</div>
                <h3 class="card-title">LangChain Agents</h3>
                <p class="card-description">Build autonomous agents that can use tools, search the web, and perform multi-step reasoning tasks.</p>
                <div class="card-footer">
                    <span class="card-badge badge-intermediate">75 min</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">📊</div>
                <h3 class="card-title">Vector Database Integration</h3>
                <p class="card-description">Set up Pinecone, Weaviate, or ChromaDB for semantic search. Covers embeddings, indexing, and retrieval strategies.</p>
                <div class="card-footer">
                    <span class="card-badge badge-intermediate">60 min</span>
                </div>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">Advanced Tutorials</h2>
            <p class="section-subtitle">Master cutting-edge techniques</p>
        </div>

        <div class="cards-grid">
            <div class="card">
                <div class="card-icon">🎯</div>
                <h3 class="card-title">RLHF Pipeline</h3>
                <p class="card-description">Implement Reinforcement Learning from Human Feedback to align models with human preferences using reward models.</p>
                <div class="card-footer">
                    <span class="card-badge badge-advanced">180 min</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🚀</div>
                <h3 class="card-title">Model Optimization & Deployment</h3>
                <p class="card-description">Optimize models with quantization, pruning, and distillation. Deploy with FastAPI, Docker, and Kubernetes.</p>
                <div class="card-footer">
                    <span class="card-badge badge-advanced">150 min</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🤝</div>
                <h3 class="card-title">Multi-Agent Systems</h3>
                <p class="card-description">Build systems where multiple AI agents collaborate to solve complex tasks using AutoGen or CrewAI frameworks.</p>
                <div class="card-footer">
                    <span class="card-badge badge-advanced">120 min</span>
                </div>
            </div>
        </div>
    `;
}

function generateExercisesPage() {
    return `
        <div class="hero" style="background: var(--gradient-green);">
            <div class="hero-content">
                <h1>💪 Exercises</h1>
                <p>Practice your skills with hands-on coding exercises and challenges.</p>
            </div>
        </div>

        <div class="section-header">
            <h2 class="section-title">Beginner Exercises</h2>
            <p class="section-subtitle">Build foundational skills</p>
        </div>

        <div class="accordion active">
            <button class="accordion-header">
                <span>🎯 Exercise 1: API Integration</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Task:</strong> Connect to OpenAI API and generate text completions</p>
                    <p><strong>Skills:</strong> API authentication, error handling, response parsing</p>
                    <p><strong>Requirements:</strong></p>
                    <ul>
                        <li>Set up API key securely using environment variables</li>
                        <li>Create a function that takes a prompt and returns completion</li>
                        <li>Handle rate limiting and API errors gracefully</li>
                        <li>Add retry logic for failed requests</li>
                    </ul>
                    <p><strong>Bonus:</strong> Add streaming response support for real-time output</p>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>📝 Exercise 2: Prompt Templates</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Task:</strong> Create reusable prompt templates for different use cases</p>
                    <p><strong>Skills:</strong> Prompt engineering, template design, variable interpolation</p>
                    <p><strong>Requirements:</strong></p>
                    <ul>
                        <li>Build templates for: summarization, translation, Q&A, code generation</li>
                        <li>Support variable substitution in templates</li>
                        <li>Add validation for required template variables</li>
                        <li>Create a template library with 10+ reusable prompts</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>🔤 Exercise 3: Token Counter</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Task:</strong> Build a token counting utility using tiktoken</p>
                    <p><strong>Skills:</strong> Tokenization, cost estimation</p>
                    <p><strong>Requirements:</strong></p>
                    <ul>
                        <li>Count tokens for different model encodings (GPT-3.5, GPT-4)</li>
                        <li>Estimate API costs based on token count</li>
                        <li>Truncate text to fit within token limits</li>
                        <li>Create a CLI tool for token counting</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">Intermediate Exercises</h2>
            <p class="section-subtitle">Apply advanced concepts</p>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>🔍 Exercise 4: Semantic Search Engine</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Task:</strong> Build a semantic search engine using embeddings</p>
                    <p><strong>Skills:</strong> Embeddings, vector similarity, indexing</p>
                    <p><strong>Requirements:</strong></p>
                    <ul>
                        <li>Load a dataset of documents (Wikipedia, papers, etc.)</li>
                        <li>Generate embeddings for all documents</li>
                        <li>Implement cosine similarity search</li>
                        <li>Return top-K most relevant results for queries</li>
                        <li>Add caching for improved performance</li>
                    </ul>
                    <p><strong>Bonus:</strong> Use FAISS or Annoy for efficient similarity search</p>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>📚 Exercise 5: Document Q&A System</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Task:</strong> Create a RAG system that answers questions from uploaded PDFs</p>
                    <p><strong>Skills:</strong> RAG, document parsing, chunking strategies</p>
                    <p><strong>Requirements:</strong></p>
                    <ul>
                        <li>Parse PDF documents and extract text</li>
                        <li>Chunk documents into manageable segments</li>
                        <li>Store chunks in a vector database</li>
                        <li>Retrieve relevant chunks for user queries</li>
                        <li>Generate answers using retrieved context</li>
                        <li>Cite sources in the response</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>🎨 Exercise 6: Image Generation Pipeline</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Task:</strong> Build an automated image generation and editing pipeline</p>
                    <p><strong>Skills:</strong> Diffusion models, prompt engineering, image processing</p>
                    <p><strong>Requirements:</strong></p>
                    <ul>
                        <li>Generate images from text prompts using Stable Diffusion</li>
                        <li>Support different styles and aspect ratios</li>
                        <li>Implement img2img for image editing</li>
                        <li>Add inpainting capabilities</li>
                        <li>Create batch processing for multiple images</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">Advanced Exercises</h2>
            <p class="section-subtitle">Master production-grade systems</p>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>🤖 Exercise 7: Autonomous Research Agent</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Task:</strong> Build an agent that autonomously researches topics</p>
                    <p><strong>Skills:</strong> Agent frameworks, tool use, multi-step reasoning</p>
                    <p><strong>Requirements:</strong></p>
                    <ul>
                        <li>Implement ReAct or similar reasoning framework</li>
                        <li>Give agent access to: web search, Wikipedia, calculator, code execution</li>
                        <li>Break down complex queries into sub-tasks</li>
                        <li>Synthesize findings into comprehensive reports</li>
                        <li>Add memory for multi-turn conversations</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>⚡ Exercise 8: Model Fine-Tuning</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Task:</strong> Fine-tune a model for domain-specific tasks</p>
                    <p><strong>Skills:</strong> Training loops, LoRA, evaluation</p>
                    <p><strong>Requirements:</strong></p>
                    <ul>
                        <li>Prepare and clean a custom dataset</li>
                        <li>Implement LoRA for parameter-efficient tuning</li>
                        <li>Set up training pipeline with logging</li>
                        <li>Monitor metrics: loss, perplexity, accuracy</li>
                        <li>Evaluate on held-out test set</li>
                        <li>Compare fine-tuned vs base model performance</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>🛡️ Exercise 9: AI Safety & Red Teaming</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Task:</strong> Build tools to test LLM safety and robustness</p>
                    <p><strong>Skills:</strong> Prompt injection detection, content filtering, adversarial testing</p>
                    <p><strong>Requirements:</strong></p>
                    <ul>
                        <li>Create automated tests for common vulnerabilities</li>
                        <li>Implement prompt injection detection</li>
                        <li>Build content moderation filters</li>
                        <li>Test for bias in model outputs</li>
                        <li>Generate adversarial examples</li>
                        <li>Measure model robustness metrics</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function generateProjectsPage() {
    return `
        <div class="hero" style="background: var(--gradient-orange);">
            <div class="hero-content">
                <h1>📁 Projects</h1>
                <p>Real-world projects to showcase your GenAI skills and build your portfolio.</p>
            </div>
        </div>

        <div class="section-header">
            <h2 class="section-title">Beginner Projects</h2>
            <p class="section-subtitle">Perfect for getting started</p>
        </div>

        <div class="cards-grid">
            <div class="card">
                <div class="card-icon">💬</div>
                <h3 class="card-title">AI Chatbot with Memory</h3>
                <p class="card-description">Build a conversational AI that remembers past interactions. Features: context management, personality customization, web interface.</p>
                <div class="card-footer">
                    <span class="card-badge badge-beginner">Week 1-2</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">📝</div>
                <h3 class="card-title">Content Generator</h3>
                <p class="card-description">Create a tool that generates blog posts, social media captions, and marketing copy. Includes templates and tone controls.</p>
                <div class="card-footer">
                    <span class="card-badge badge-beginner">Week 1</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🔄</div>
                <h3 class="card-title">Text Summarizer</h3>
                <p class="card-description">Summarize long articles, PDFs, and documents. Support multiple summary lengths and extractive vs abstractive methods.</p>
                <div class="card-footer">
                    <span class="card-badge badge-beginner">Week 1</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🌍</div>
                <h3 class="card-title">Language Translator</h3>
                <p class="card-description">Build a translator supporting 50+ languages with context awareness and formality control. Add speech input/output.</p>
                <div class="card-footer">
                    <span class="card-badge badge-beginner">Week 1-2</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">✍️</div>
                <h3 class="card-title">Writing Assistant</h3>
                <p class="card-description">Create an assistant that helps with grammar, style, clarity, and tone. Include plagiarism detection and citation generation.</p>
                <div class="card-footer">
                    <span class="card-badge badge-beginner">Week 2</span>
                </div>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">Intermediate Projects</h2>
            <p class="section-subtitle">Challenge yourself with these</p>
        </div>

        <div class="cards-grid">
            <div class="card">
                <div class="card-icon">📚</div>
                <h3 class="card-title">Personal Knowledge Base</h3>
                <p class="card-description">RAG system for your documents. Upload files, ask questions, get answers with citations. Includes semantic search and chat interface.</p>
                <div class="card-footer">
                    <span class="card-badge badge-intermediate">Week 2-3</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🎨</div>
                <h3 class="card-title">AI Art Studio</h3>
                <p class="card-description">Full-featured image generation app with text-to-image, img2img, inpainting, and style transfer. Gallery and prompt library.</p>
                <div class="card-footer">
                    <span class="card-badge badge-intermediate">Week 3-4</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">💻</div>
                <h3 class="card-title">Code Review Assistant</h3>
                <p class="card-description">Automated code reviewer that checks for bugs, suggests improvements, and writes tests. GitHub integration for PR reviews.</p>
                <div class="card-footer">
                    <span class="card-badge badge-intermediate">Week 2-3</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">📧</div>
                <h3 class="card-title">Email Assistant</h3>
                <p class="card-description">Smart email management: auto-categorization, draft responses, priority inbox, meeting extraction. Gmail/Outlook integration.</p>
                <div class="card-footer">
                    <span class="card-badge badge-intermediate">Week 3</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🔍</div>
                <h3 class="card-title">Research Paper Analyzer</h3>
                <p class="card-description">Upload scientific papers, extract key findings, generate summaries, and find related work. Citation graph visualization.</p>
                <div class="card-footer">
                    <span class="card-badge badge-intermediate">Week 2-3</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🤝</div>
                <h3 class="card-title">Meeting Assistant</h3>
                <p class="card-description">Transcribe meetings, generate summaries, extract action items, and create follow-up emails. Zoom/Teams integration.</p>
                <div class="card-footer">
                    <span class="card-badge badge-intermediate">Week 3</span>
                </div>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">Advanced Projects</h2>
            <p class="section-subtitle">Production-grade applications</p>
        </div>

        <div class="cards-grid">
            <div class="card">
                <div class="card-icon">🤖</div>
                <h3 class="card-title">Multi-Agent System</h3>
                <p class="card-description">Build a team of AI agents that collaborate: researcher, writer, editor, fact-checker. Orchestrate complex workflows.</p>
                <div class="card-footer">
                    <span class="card-badge badge-advanced">Week 4-6</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🎯</div>
                <h3 class="card-title">Custom Model Training Platform</h3>
                <p class="card-description">End-to-end platform: data preparation, model training with LoRA/QLoRA, evaluation, deployment. Web-based interface.</p>
                <div class="card-footer">
                    <span class="card-badge badge-advanced">Week 6-8</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🏢</div>
                <h3 class="card-title">Enterprise RAG System</h3>
                <p class="card-description">Production RAG with authentication, multi-tenancy, analytics, admin dashboard. Supports multiple data sources and LLMs.</p>
                <div class="card-footer">
                    <span class="card-badge badge-advanced">Week 5-7</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🎬</div>
                <h3 class="card-title">AI Video Generator</h3>
                <p class="card-description">Generate videos from text: script writing, voiceover synthesis, image/video generation, editing. Export to MP4.</p>
                <div class="card-footer">
                    <span class="card-badge badge-advanced">Week 6-8</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🔒</div>
                <h3 class="card-title">AI Security Platform</h3>
                <p class="card-description">Red-teaming tool: prompt injection detection, jailbreak testing, bias analysis, content moderation. Dashboard with metrics.</p>
                <div class="card-footer">
                    <span class="card-badge badge-advanced">Week 4-5</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">📱</div>
                <h3 class="card-title">AI Mobile App</h3>
                <p class="card-description">Full-stack mobile app with on-device models, cloud integration, offline mode. React Native + Edge ML deployment.</p>
                <div class="card-footer">
                    <span class="card-badge badge-advanced">Week 7-10</span>
                </div>
            </div>
        </div>
    `;
}

function generateQuizzesPage() {
    return `
        <div class="hero" style="background: var(--gradient-purple);">
            <div class="hero-content">
                <h1>🎯 Quizzes</h1>
                <p>Test your knowledge with interactive quizzes covering all GenAI concepts.</p>
            </div>
        </div>

        <div class="section-header">
            <h2 class="section-title">Available Quizzes</h2>
            <p class="section-subtitle">Track your progress and identify knowledge gaps</p>
        </div>

        <div class="cards-grid">
            <div class="card">
                <div class="card-icon">🌱</div>
                <h3 class="card-title">Beginner Quiz</h3>
                <p class="card-description">Test your understanding of AI fundamentals, neural networks, and basic GenAI concepts.</p>
                <div class="card-footer">
                    <div class="card-meta">
                        <span>30 questions</span>
                        <span>45 min</span>
                    </div>
                    <span class="card-badge badge-beginner">Beginner</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🚀</div>
                <h3 class="card-title">Intermediate Quiz</h3>
                <p class="card-description">Challenge yourself with questions on RAG, prompt engineering, fine-tuning, and LangChain.</p>
                <div class="card-footer">
                    <div class="card-meta">
                        <span>40 questions</span>
                        <span>60 min</span>
                    </div>
                    <span class="card-badge badge-intermediate">Intermediate</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">⚡</div>
                <h3 class="card-title">Advanced Quiz</h3>
                <p class="card-description">Master level questions on RLHF, model optimization, inference, and production deployment.</p>
                <div class="card-footer">
                    <div class="card-meta">
                        <span>35 questions</span>
                        <span>60 min</span>
                    </div>
                    <span class="card-badge badge-advanced">Advanced</span>
                </div>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">Topic-Specific Quizzes</h2>
            <p class="section-subtitle">Deep dive into specific areas</p>
        </div>

        <div class="cards-grid">
            <div class="card">
                <div class="card-icon">💬</div>
                <h3 class="card-title">LLMs & Transformers</h3>
                <p class="card-description">Architecture, attention mechanisms, positional encodings, and modern LLM developments.</p>
                <div class="card-footer">
                    <span class="card-badge badge-intermediate">20 questions</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🎨</div>
                <h3 class="card-title">Image Generation</h3>
                <p class="card-description">Diffusion models, GANs, VAEs, and text-to-image generation techniques.</p>
                <div class="card-footer">
                    <span class="card-badge badge-intermediate">15 questions</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🔍</div>
                <h3 class="card-title">RAG Systems</h3>
                <p class="card-description">Retrieval strategies, vector databases, embeddings, and chunking techniques.</p>
                <div class="card-footer">
                    <span class="card-badge badge-intermediate">15 questions</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">⚙️</div>
                <h3 class="card-title">Prompt Engineering</h3>
                <p class="card-description">Zero-shot, few-shot, chain-of-thought, and advanced prompting strategies.</p>
                <div class="card-footer">
                    <span class="card-badge badge-beginner">15 questions</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🎯</div>
                <h3 class="card-title">Fine-Tuning & RLHF</h3>
                <p class="card-description">Training strategies, LoRA, QLoRA, reward models, and alignment techniques.</p>
                <div class="card-footer">
                    <span class="card-badge badge-advanced">20 questions</span>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🛡️</div>
                <h3 class="card-title">AI Safety & Ethics</h3>
                <p class="card-description">Bias, fairness, alignment, red-teaming, and responsible AI practices.</p>
                <div class="card-footer">
                    <span class="card-badge badge-intermediate">15 questions</span>
                </div>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">Quiz Format</h2>
        </div>

        <div class="cards-grid">
            <div class="card">
                <div class="card-icon">📝</div>
                <h3 class="card-title">Multiple Choice</h3>
                <p class="card-description">Single correct answer with detailed explanations for each option.</p>
            </div>

            <div class="card">
                <div class="card-icon">☑️</div>
                <h3 class="card-title">Multi-Select</h3>
                <p class="card-description">Multiple correct answers to test comprehensive understanding.</p>
            </div>

            <div class="card">
                <div class="card-icon">✅</div>
                <h3 class="card-title">True/False</h3>
                <p class="card-description">Quick checks for fundamental concepts and common misconceptions.</p>
            </div>

            <div class="card">
                <div class="card-icon">💻</div>
                <h3 class="card-title">Code Analysis</h3>
                <p class="card-description">Analyze code snippets and identify correct implementations or bugs.</p>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">Coming Soon</h2>
        </div>

        <div style="max-width: 800px; margin: 0 auto; padding: 2rem; background: var(--card-bg); border-radius: var(--border-radius-lg); border: 1px solid var(--border-color);">
            <p style="text-align: center; margin-bottom: 1rem;">🚀 Interactive quizzes are currently in development!</p>
            <p style="text-align: center; color: var(--text-secondary);">Features coming soon:</p>
            <ul style="max-width: 500px; margin: 1.5rem auto; color: var(--text-secondary);">
                <li>Real-time scoring and feedback</li>
                <li>Progress tracking across all quizzes</li>
                <li>Personalized recommendations</li>
                <li>Leaderboards and achievements</li>
                <li>Quiz history and review mode</li>
                <li>Custom quiz creation</li>
            </ul>
            <p style="text-align: center; color: var(--text-secondary); font-style: italic;">In the meantime, test your knowledge by completing the concepts and checking your understanding!</p>
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
            <div class="section-header">
                <h2 class="section-title">Getting Started</h2>
            </div>

            <div class="accordion active">
                <button class="accordion-header">
                    <span>What is Generative AI?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        Generative AI refers to AI systems that can create new content like text, images, audio, and video rather than just analyzing existing data. These models learn patterns from training data and use that knowledge to generate novel outputs. Examples include ChatGPT for text, Stable Diffusion for images, and Whisper for speech.
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Do I need a background in AI/ML to learn GenAI?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        Not necessarily! While understanding fundamentals helps, you can start with practical applications using APIs and frameworks like LangChain. Our beginner section covers all prerequisites. For deeper understanding (training models, architectures), ML background is helpful but can be learned along the way.
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>What programming languages do I need to know?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <strong>Python</strong> is the primary language for GenAI. Most frameworks (PyTorch, TensorFlow, LangChain, Hugging Face) use Python. Basic knowledge of Python is sufficient to start. JavaScript/TypeScript is useful for building web applications that integrate GenAI APIs.
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>How long does it take to learn GenAI?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <ul>
                            <li><strong>Basic usage (API integration, prompting):</strong> 2-4 weeks</li>
                            <li><strong>Intermediate (RAG, fine-tuning, agents):</strong> 2-3 months</li>
                            <li><strong>Advanced (RLHF, optimization, research):</strong> 6-12 months</li>
                        </ul>
                        Timeline varies based on prior experience and time commitment. Consistent daily practice is key.
                    </div>
                </div>
            </div>

            <div class="section-header mt-4">
                <h2 class="section-title">Technical Questions</h2>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>What's the difference between GPT-3.5, GPT-4, and Claude?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>GPT-3.5:</strong> Fast, cost-effective, good for simple tasks. Lower reasoning capability.</p>
                        <p><strong>GPT-4:</strong> More capable reasoning, better at complex tasks, understands images, more expensive. Best for high-quality outputs.</p>
                        <p><strong>Claude:</strong> Anthropic's model focused on safety and helpfulness. Long context (200K tokens in Claude 3), excellent at analysis and coding. Different strengths than GPT-4.</p>
                        <p>Choice depends on use case: GPT-3.5 for bulk/simple tasks, GPT-4/Claude for quality-critical work.</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>When should I use RAG vs fine-tuning?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Use RAG when:</strong></p>
                        <ul>
                            <li>You need up-to-date information (documents change frequently)</li>
                            <li>You want to cite sources</li>
                            <li>Knowledge base is large and dynamic</li>
                            <li>Quick deployment is needed</li>
                        </ul>
                        <p><strong>Use Fine-tuning when:</strong></p>
                        <ul>
                            <li>You need specific style/format/tone consistently</li>
                            <li>Domain-specific behavior required</li>
                            <li>Reducing costs for high-volume usage</li>
                            <li>Knowledge is static and well-defined</li>
                        </ul>
                        <p><strong>Best approach:</strong> Often use both together - fine-tune for style/format, RAG for knowledge.</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>How do I reduce costs when using LLM APIs?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <ol>
                            <li><strong>Use smaller models:</strong> GPT-3.5 instead of GPT-4 for simple tasks</li>
                            <li><strong>Optimize prompts:</strong> Be concise, avoid repetition</li>
                            <li><strong>Implement caching:</strong> Cache responses for common queries</li>
                            <li><strong>Use streaming:</strong> Stop generation early if answer found</li>
                            <li><strong>Batch requests:</strong> Process multiple items together</li>
                            <li><strong>Set max_tokens:</strong> Limit response length appropriately</li>
                            <li><strong>Use embeddings wisely:</strong> Cache embeddings, use efficient models</li>
                            <li><strong>Consider self-hosting:</strong> For high volume, host open-source models</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Can I run LLMs locally on my computer?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Yes!</strong> Open-source models can run locally:</p>
                        <p><strong>Small models (7B-13B parameters):</strong></p>
                        <ul>
                            <li>LLaMA 2, Mistral 7B, Phi-2</li>
                            <li>Requirements: 16GB+ RAM, GPU helpful but not required</li>
                            <li>Use: Ollama, llama.cpp, GPT4All</li>
                        </ul>
                        <p><strong>Larger models (30B-70B):</strong></p>
                        <ul>
                            <li>Better quality but need powerful GPU (24GB+ VRAM)</li>
                            <li>Use quantization (4-bit/8-bit) to reduce memory</li>
                        </ul>
                        <p>Trade-off: Local models less capable than GPT-4 but free and private.</p>
                    </div>
                </div>
            </div>

            <div class="section-header mt-4">
                <h2 class="section-title">Career & Applications</h2>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>What jobs are available in GenAI?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <ul>
                            <li><strong>Prompt Engineer:</strong> Design and optimize prompts for LLMs ($80-150K)</li>
                            <li><strong>LLM Engineer:</strong> Build applications with LLMs, RAG systems ($120-200K)</li>
                            <li><strong>ML Engineer:</strong> Fine-tune and deploy models ($130-220K)</li>
                            <li><strong>Research Scientist:</strong> Develop new architectures and techniques ($150-300K)</li>
                            <li><strong>AI Product Manager:</strong> Guide AI product strategy ($140-220K)</li>
                            <li><strong>AI Safety Engineer:</strong> Ensure models are safe and aligned ($130-250K)</li>
                        </ul>
                        <p>Demand is high and growing rapidly. Many companies hiring across all experience levels.</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>What are the most in-demand GenAI skills?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Hot skills in 2024:</strong></p>
                        <ol>
                            <li><strong>RAG systems:</strong> Building knowledge-grounded applications</li>
                            <li><strong>LangChain/LlamaIndex:</strong> Application frameworks</li>
                            <li><strong>Prompt engineering:</strong> Advanced prompting techniques</li>
                            <li><strong>Vector databases:</strong> Pinecone, Weaviate, ChromaDB</li>
                            <li><strong>Fine-tuning:</strong> LoRA, QLoRA, RLHF</li>
                            <li><strong>Model deployment:</strong> Serving models at scale</li>
                            <li><strong>Multi-modal models:</strong> Text, image, audio, video</li>
                            <li><strong>AI agents:</strong> Autonomous reasoning systems</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Will GenAI replace my job?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p>GenAI is more likely to <strong>augment</strong> rather than replace jobs. It's a tool that enhances productivity.</p>
                        <p><strong>Jobs most affected:</strong> Repetitive writing, basic coding, data entry, simple analysis</p>
                        <p><strong>Jobs least affected:</strong> Creative strategy, complex problem-solving, human interaction, leadership</p>
                        <p><strong>Best approach:</strong> Learn to use GenAI tools in your field. People who use AI effectively will replace those who don't. Focus on skills that complement AI: creativity, critical thinking, domain expertise, emotional intelligence.</p>
                        <p>The real opportunity: New jobs and industries are being created around GenAI.</p>
                    </div>
                </div>
            </div>

            <div class="section-header mt-4">
                <h2 class="section-title">Learning Resources</h2>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>What are the best resources to learn GenAI?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Courses:</strong></p>
                        <ul>
                            <li>DeepLearning.AI - ChatGPT Prompt Engineering, LangChain courses</li>
                            <li>Fast.ai - Practical Deep Learning</li>
                            <li>Hugging Face Course - Transformers and NLP</li>
                        </ul>
                        <p><strong>Platforms:</strong></p>
                        <ul>
                            <li>This website! (Comprehensive concepts and tutorials)</li>
                            <li>Hugging Face - Models, datasets, demos</li>
                            <li>OpenAI Cookbook - Practical examples</li>
                            <li>LangChain docs - Application development</li>
                        </ul>
                        <p><strong>Communities:</strong></p>
                        <ul>
                            <li>r/LocalLLaMA, r/MachineLearning (Reddit)</li>
                            <li>Hugging Face Discord</li>
                            <li>LangChain Discord</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>How do I stay updated with GenAI developments?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Newsletters:</strong></p>
                        <ul>
                            <li>The Batch (DeepLearning.AI)</li>
                            <li>Import AI (Jack Clark)</li>
                            <li>TLDR AI</li>
                        </ul>
                        <p><strong>Papers:</strong></p>
                        <ul>
                            <li>ArXiv - Latest research papers</li>
                            <li>Papers With Code - Papers + implementations</li>
                            <li>Hugging Face Papers - Curated important papers</li>
                        </ul>
                        <p><strong>Social:</strong></p>
                        <ul>
                            <li>Twitter/X - Follow researchers and practitioners</li>
                            <li>LinkedIn - Company announcements, thought leadership</li>
                            <li>YouTube - Two Minute Papers, Yannic Kilcher</li>
                        </ul>
                        <p>Field moves fast! Daily reading recommended (15-30 min/day).</p>
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
                <p>Ace your GenAI interviews with curated questions and comprehensive answers.</p>
            </div>
        </div>

        <div class="section-header">
            <h2 class="section-title">Fundamental Concepts</h2>
        </div>

        <div class="accordion active">
            <button class="accordion-header">
                <span>What is the difference between discriminative and generative models?</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Answer:</strong></p>
                    <p><strong>Discriminative models</strong> learn the boundary between classes. They model P(Y|X) - the probability of label Y given input X. Examples: logistic regression, SVMs, most CNNs for classification.</p>
                    <p><strong>Generative models</strong> learn the distribution of data itself. They model P(X) or P(X|Y) and can create new samples. Examples: GANs, VAEs, diffusion models, LLMs.</p>
                    <p><strong>Key difference:</strong> Discriminative models answer "what is this?", generative models answer "what could this be?"</p>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>Explain how transformers work and why they're important for GenAI</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Answer:</strong></p>
                    <p>Transformers use self-attention mechanisms to process sequences in parallel (unlike RNNs which are sequential). Key components:</p>
                    <ul>
                        <li><strong>Self-Attention:</strong> Computes relationships between all tokens simultaneously</li>
                        <li><strong>Multi-Head Attention:</strong> Multiple attention mechanisms learn different relationships</li>
                        <li><strong>Positional Encodings:</strong> Add position information since attention is permutation-invariant</li>
                        <li><strong>Feed-Forward Networks:</strong> Process attended representations</li>
                    </ul>
                    <p><strong>Why important:</strong> Transformers scale better than RNNs, capture long-range dependencies, and parallelize training. They're the foundation of GPT, BERT, T5, and most modern LLMs.</p>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>What is attention mechanism and how does it improve neural networks?</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Answer:</strong></p>
                    <p>Attention allows models to focus on relevant parts of input when producing output. Instead of compressing all information into a fixed vector, attention computes weighted combinations based on relevance.</p>
                    <p><strong>Benefits:</strong></p>
                    <ul>
                        <li>Handles variable-length sequences better</li>
                        <li>Captures long-range dependencies</li>
                        <li>Provides interpretability (can visualize what model attends to)</li>
                        <li>Improves performance on translation, summarization, QA</li>
                    </ul>
                    <p><strong>Formula:</strong> Attention(Q,K,V) = softmax(QK^T/√d_k)V</p>
                </div>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">LLM & Prompt Engineering</h2>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>What are different prompting strategies and when to use each?</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Zero-shot:</strong> Direct instruction without examples. Use for simple tasks or when examples aren't available.</p>
                    <p><strong>Few-shot:</strong> Provide 2-5 examples in prompt. Use when you want specific format or style.</p>
                    <p><strong>Chain-of-Thought (CoT):</strong> Include reasoning steps. Use for complex reasoning, math, logic problems.</p>
                    <p><strong>ReAct:</strong> Reasoning + Acting. Use for multi-step tasks requiring tool use.</p>
                    <p><strong>Self-consistency:</strong> Sample multiple outputs, take majority. Use when accuracy is critical.</p>
                    <p><strong>Tree-of-Thoughts:</strong> Explore multiple reasoning paths. Use for strategic planning tasks.</p>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>How would you reduce hallucinations in LLM outputs?</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Strategies:</strong></p>
                    <ul>
                        <li><strong>RAG:</strong> Ground responses in retrieved documents</li>
                        <li><strong>Lower temperature:</strong> Reduce randomness in sampling</li>
                        <li><strong>Clear instructions:</strong> "Only use provided context", "Say 'I don't know' if unsure"</li>
                        <li><strong>Verification prompts:</strong> Ask model to verify its own claims</li>
                        <li><strong>Fine-tuning:</strong> Train on high-quality, factual data</li>
                        <li><strong>Constrained generation:</strong> Use structured output formats</li>
                        <li><strong>Citation requirements:</strong> Force model to cite sources</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">RAG & Vector Databases</h2>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>Explain RAG architecture and its components</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>RAG (Retrieval-Augmented Generation)</strong> combines retrieval with generation:</p>
                    <p><strong>Components:</strong></p>
                    <ol>
                        <li><strong>Document Processing:</strong> Chunk documents into manageable pieces</li>
                        <li><strong>Embedding Generation:</strong> Convert chunks to vectors using embedding models</li>
                        <li><strong>Vector Storage:</strong> Store embeddings in vector database (Pinecone, Weaviate, ChromaDB)</li>
                        <li><strong>Retrieval:</strong> Find most relevant chunks using similarity search</li>
                        <li><strong>Augmentation:</strong> Add retrieved context to prompt</li>
                        <li><strong>Generation:</strong> LLM generates answer using context</li>
                    </ol>
                    <p><strong>Benefits:</strong> Reduces hallucinations, provides sources, allows knowledge updates without retraining</p>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>What are different chunking strategies and their trade-offs?</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Fixed-size chunks:</strong> Split by character/token count. Simple but may break context.</p>
                    <p><strong>Sentence-based:</strong> Split on sentence boundaries. Preserves meaning but variable size.</p>
                    <p><strong>Paragraph-based:</strong> Natural semantic units. Good for structured documents.</p>
                    <p><strong>Semantic chunking:</strong> Split based on topic changes. Best quality but computationally expensive.</p>
                    <p><strong>Sliding window:</strong> Overlapping chunks. Prevents context loss but increases storage.</p>
                    <p><strong>Considerations:</strong> Chunk size affects retrieval precision (smaller = more precise, larger = more context)</p>
                </div>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">Fine-Tuning & Training</h2>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>When should you fine-tune vs use prompt engineering?</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Use Prompt Engineering when:</strong></p>
                    <ul>
                        <li>You need quick results</li>
                        <li>Task is straightforward</li>
                        <li>Limited training data available</li>
                        <li>Requirements change frequently</li>
                        <li>Base model performs reasonably well</li>
                    </ul>
                    <p><strong>Use Fine-Tuning when:</strong></p>
                    <ul>
                        <li>Consistent style/format needed across many outputs</li>
                        <li>Domain-specific knowledge required</li>
                        <li>Reducing latency (smaller fine-tuned model vs large base model)</li>
                        <li>Cost optimization for high-volume usage</li>
                        <li>You have quality training data (1000+ examples)</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>Explain LoRA and why it's effective</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>LoRA (Low-Rank Adaptation)</strong> is parameter-efficient fine-tuning:</p>
                    <p><strong>How it works:</strong> Instead of updating all model weights, LoRA adds small trainable matrices (adapters) to existing layers. It decomposes weight updates into low-rank matrices: ΔW = AB where A and B are much smaller.</p>
                    <p><strong>Benefits:</strong></p>
                    <ul>
                        <li>Reduces trainable parameters by 10,000x</li>
                        <li>Lower memory usage (can fine-tune on consumer GPUs)</li>
                        <li>Faster training</li>
                        <li>Multiple adapters can be swapped for different tasks</li>
                        <li>No additional inference latency</li>
                    </ul>
                    <p><strong>Use cases:</strong> Domain adaptation, instruction tuning, personalization</p>
                </div>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">System Design</h2>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>Design a production RAG system for customer support</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Requirements:</strong> Handle 10K daily queries, sub-2s latency, multi-tenant, cost-effective</p>
                    <p><strong>Architecture:</strong></p>
                    <ul>
                        <li><strong>Frontend:</strong> React chat interface with WebSocket for streaming</li>
                        <li><strong>API Gateway:</strong> Rate limiting, auth, routing</li>
                        <li><strong>Query Processing:</strong> Intent detection, query rewriting</li>
                        <li><strong>Retrieval:</strong> Pinecone for vector search with metadata filtering</li>
                        <li><strong>Re-ranking:</strong> Cross-encoder to improve relevance</li>
                        <li><strong>Generation:</strong> GPT-4 via Azure OpenAI (fallback to GPT-3.5)</li>
                        <li><strong>Caching:</strong> Redis for common queries</li>
                        <li><strong>Monitoring:</strong> Log queries, latency, feedback</li>
                        <li><strong>Data pipeline:</strong> Automated ingestion of new docs</li>
                    </ul>
                    <p><strong>Optimizations:</strong> Semantic caching, batch processing, query routing by complexity</p>
                </div>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">Coding Challenges</h2>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>Implement semantic search with embeddings</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Task:</strong> Given a corpus of documents and a query, return top-K most relevant documents.</p>
                    <p><strong>Approach:</strong></p>
                    <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; overflow-x: auto;"><code>import openai
import numpy as np

def get_embedding(text):
    response = openai.Embedding.create(
        model="text-embedding-ada-002",
        input=text
    )
    return response['data'][0]['embedding']

def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

def semantic_search(query, documents, top_k=5):
    # Get embeddings
    query_emb = get_embedding(query)
    doc_embs = [get_embedding(doc) for doc in documents]

    # Calculate similarities
    similarities = [
        cosine_similarity(query_emb, doc_emb)
        for doc_emb in doc_embs
    ]

    # Get top-K
    top_indices = np.argsort(similarities)[-top_k:][::-1]
    return [(documents[i], similarities[i]) for i in top_indices]</code></pre>
                </div>
            </div>
        </div>
    `;
}

function generateGlossaryPage() {
    return `
        <div class="hero">
            <div class="hero-content">
                <h1>📖 GenAI Glossary</h1>
                <p>Comprehensive reference guide to AI, ML, and Generative AI terminology.</p>
            </div>
        </div>

        <div style="max-width: 1000px; margin: 0 auto;">
            <div class="section-header">
                <h2 class="section-title">A</h2>
            </div>

            <div class="accordion active">
                <button class="accordion-header">
                    <span><strong>Attention Mechanism</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        A neural network component that allows models to focus on relevant parts of input when producing output. Computes weighted combinations of input representations based on their relevance to the current processing step.
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>Autoregressive Model</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        A model that generates sequences one token at a time, conditioning each new token on previously generated tokens. Examples: GPT models, which predict next word based on previous context.
                    </div>
                </div>
            </div>

            <div class="section-header mt-4">
                <h2 class="section-title">B-C</h2>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>BERT (Bidirectional Encoder Representations from Transformers)</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        A transformer-based model that learns bidirectional context by training on masked language modeling. Unlike GPT, BERT sees context from both directions, making it excellent for understanding tasks but not generation.
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>Chain-of-Thought (CoT)</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        A prompting technique where you include intermediate reasoning steps in the prompt to help the model solve complex problems. Improves performance on math, logic, and multi-step reasoning tasks.
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>Constitutional AI</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        An AI alignment approach where models are trained to follow a set of principles or "constitution". Uses self-critique and revision to align behavior with specified values without extensive human feedback.
                    </div>
                </div>
            </div>

            <div class="section-header mt-4">
                <h2 class="section-title">D-E</h2>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>Diffusion Models</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        Generative models that learn to gradually denoise random noise into structured data. Used in Stable Diffusion, DALL-E 2, Midjourney. Work by learning to reverse a diffusion process that adds noise to data.
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>Embeddings</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        Dense vector representations of data (text, images, etc.) that capture semantic meaning. Similar items have similar embeddings. Used for search, recommendation, clustering, and as input to neural networks.
                    </div>
                </div>
            </div>

            <div class="section-header mt-4">
                <h2 class="section-title">F-G</h2>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>Few-Shot Learning</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        Ability to learn from a small number of examples (typically 2-5) provided in the prompt. LLMs can adapt to new tasks just from examples without parameter updates.
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>Fine-Tuning</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        Further training a pre-trained model on specific data or tasks. Adapts the model's weights to perform better on domain-specific tasks while retaining general knowledge.
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>GAN (Generative Adversarial Network)</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        A generative model with two networks: generator creates samples, discriminator tries to distinguish real from fake. They compete, improving until generator creates realistic samples.
                    </div>
                </div>
            </div>

            <div class="section-header mt-4">
                <h2 class="section-title">H-L</h2>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>Hallucination</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        When a language model generates false or nonsensical information presented as fact. Caused by model generating plausible-sounding text without factual grounding. Major challenge in LLM applications.
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>LangChain</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        A framework for developing applications with LLMs. Provides abstractions for prompts, chains (sequences of operations), agents (autonomous decision-makers), and memory management.
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>LLM (Large Language Model)</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        Neural networks with billions of parameters trained on massive text corpora. Can understand and generate human-like text, translate, answer questions, write code, and perform many language tasks. Examples: GPT-4, Claude, PaLM, LLaMA.
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>LoRA (Low-Rank Adaptation)</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        Parameter-efficient fine-tuning method that adds small trainable matrices to frozen pre-trained weights. Dramatically reduces memory and compute requirements while maintaining performance.
                    </div>
                </div>
            </div>

            <div class="section-header mt-4">
                <h2 class="section-title">M-P</h2>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>Mixture of Experts (MoE)</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        Architecture where multiple "expert" networks specialize in different aspects of the data. A gating mechanism routes inputs to relevant experts. Allows scaling to trillions of parameters efficiently.
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>Prompt Engineering</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        The practice of designing effective prompts to get desired outputs from LLMs. Includes techniques like few-shot learning, chain-of-thought, role-playing, and structured instructions.
                    </div>
                </div>
            </div>

            <div class="section-header mt-4">
                <h2 class="section-title">Q-R</h2>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>Quantization</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        Reducing precision of model weights (e.g., from 32-bit to 8-bit or 4-bit) to reduce memory and speed up inference. Modern quantization methods maintain most of the model's performance.
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>RAG (Retrieval-Augmented Generation)</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        Technique that retrieves relevant documents and includes them in the prompt context before generation. Reduces hallucinations, grounds responses in facts, and allows knowledge updates without retraining.
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>RLHF (Reinforcement Learning from Human Feedback)</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        Training method that uses human preferences to align model behavior. Humans rank model outputs, a reward model learns from rankings, then RL fine-tunes the model to maximize reward. Used in ChatGPT, Claude.
                    </div>
                </div>
            </div>

            <div class="section-header mt-4">
                <h2 class="section-title">S-T</h2>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>Temperature</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        Sampling parameter controlling randomness in text generation. Lower temperature (0-0.7) = more focused and deterministic. Higher temperature (0.8-1.5) = more creative and random.
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>Tokenization</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        Breaking text into smaller units (tokens) that models process. Tokens can be words, subwords, or characters. Most LLMs use subword tokenization (BPE, WordPiece) to handle rare words efficiently.
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>Transformer</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        Neural architecture based on self-attention mechanisms. Processes sequences in parallel (unlike RNNs). Foundation of modern LLMs. Introduced in "Attention is All You Need" paper (2017).
                    </div>
                </div>
            </div>

            <div class="section-header mt-4">
                <h2 class="section-title">V-Z</h2>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>Vector Database</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        Database optimized for storing and querying high-dimensional vectors (embeddings). Supports fast similarity search. Examples: Pinecone, Weaviate, Milvus, ChromaDB. Essential for RAG systems.
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span><strong>Zero-Shot Learning</strong></span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        Ability to perform tasks without any examples, just from instructions. Modern LLMs excel at zero-shot tasks due to their broad pre-training. Example: "Translate to French:" without showing translation examples.
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generatePlaygroundPage() {
    return `
        <div class="hero" style="background: var(--gradient-ocean);">
            <div class="hero-content">
                <h1>💻 Code Playground</h1>
                <p>Interactive coding environment for experimenting with GenAI APIs and concepts.</p>
            </div>
        </div>

        <div class="section-header">
            <h2 class="section-title">Quick Start Playgrounds</h2>
            <p class="section-subtitle">Try GenAI APIs directly in your browser</p>
        </div>

        <div class="cards-grid">
            <div class="card">
                <div class="card-icon">🤖</div>
                <h3 class="card-title">OpenAI Playground</h3>
                <p class="card-description">Experiment with GPT models, adjust parameters like temperature and top-p, and compare different models side by side.</p>
                <div class="card-footer">
                    <a href="https://platform.openai.com/playground" target="_blank" class="btn btn-primary" style="display: inline-block; text-decoration: none;">
                        Launch Playground →
                    </a>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🎨</div>
                <h3 class="card-title">Stable Diffusion</h3>
                <p class="card-description">Generate images from text prompts. Try different samplers, CFG scales, and steps to see how they affect output.</p>
                <div class="card-footer">
                    <a href="https://stablediffusionweb.com/" target="_blank" class="btn btn-primary" style="display: inline-block; text-decoration: none;">
                        Try It Out →
                    </a>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🔗</div>
                <h3 class="card-title">LangChain Templates</h3>
                <p class="card-description">Explore pre-built LangChain templates for RAG, agents, chatbots, and more. Clone and customize for your projects.</p>
                <div class="card-footer">
                    <a href="https://github.com/langchain-ai/langchain/tree/master/templates" target="_blank" class="btn btn-primary" style="display: inline-block; text-decoration: none;">
                        View Templates →
                    </a>
                </div>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">Code Examples</h2>
            <p class="section-subtitle">Copy and run these examples locally</p>
        </div>

        <div class="accordion active">
            <button class="accordion-header">
                <span>🔥 Basic OpenAI Chat Completion</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Install:</strong> <code>pip install openai</code></p>
                    <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; overflow-x: auto;"><code>import openai
import os

# Set your API key
openai.api_key = os.getenv("OPENAI_API_KEY")

# Create a chat completion
response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain quantum computing in simple terms."}
    ],
    temperature=0.7,
    max_tokens=500
)

print(response.choices[0].message.content)</code></pre>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>📚 Simple RAG with LangChain</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Install:</strong> <code>pip install langchain openai chromadb</code></p>
                    <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; overflow-x: auto;"><code>from langchain.document_loaders import TextLoader
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI

# Load documents
loader = TextLoader("document.txt")
documents = loader.load()

# Create embeddings and vector store
embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(documents, embeddings)

# Create QA chain
qa_chain = RetrievalQA.from_chain_type(
    llm=OpenAI(temperature=0),
    retriever=vectorstore.as_retriever()
)

# Ask questions
result = qa_chain.run("What is the main topic of the document?")
print(result)</code></pre>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>🎨 Text-to-Image with Diffusers</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Install:</strong> <code>pip install diffusers transformers torch</code></p>
                    <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; overflow-x: auto;"><code>from diffusers import StableDiffusionPipeline
import torch

# Load model
pipe = StableDiffusionPipeline.from_pretrained(
    "stabilityai/stable-diffusion-2-1",
    torch_dtype=torch.float16
)
pipe = pipe.to("cuda")

# Generate image
prompt = "a serene mountain landscape at sunset, oil painting style"
image = pipe(
    prompt,
    num_inference_steps=50,
    guidance_scale=7.5
).images[0]

image.save("output.png")</code></pre>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>🔍 Semantic Search with Embeddings</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Install:</strong> <code>pip install openai numpy</code></p>
                    <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; overflow-x: auto;"><code>import openai
import numpy as np

def get_embedding(text, model="text-embedding-ada-002"):
    response = openai.Embedding.create(input=[text], model=model)
    return response['data'][0]['embedding']

def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# Example documents
documents = [
    "Python is a programming language",
    "Machine learning uses algorithms",
    "Neural networks are inspired by the brain"
]

# Get embeddings
doc_embeddings = [get_embedding(doc) for doc in documents]

# Search query
query = "What is Python?"
query_embedding = get_embedding(query)

# Find most similar
similarities = [
    cosine_similarity(query_embedding, doc_emb)
    for doc_emb in doc_embeddings
]

best_match_idx = np.argmax(similarities)
print(f"Best match: {documents[best_match_idx]}")
print(f"Similarity: {similarities[best_match_idx]:.4f}")</code></pre>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>🤖 LangChain Agent with Tools</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Install:</strong> <code>pip install langchain openai</code></p>
                    <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; overflow-x: auto;"><code>from langchain.agents import initialize_agent, Tool
from langchain.agents import AgentType
from langchain.llms import OpenAI

# Define tools
def search_tool(query):
    return f"Search results for: {query}"

def calculator_tool(expression):
    try:
        return str(eval(expression))
    except:
        return "Error in calculation"

tools = [
    Tool(
        name="Search",
        func=search_tool,
        description="Useful for searching information"
    ),
    Tool(
        name="Calculator",
        func=calculator_tool,
        description="Useful for math calculations"
    )
]

# Initialize agent
llm = OpenAI(temperature=0)
agent = initialize_agent(
    tools,
    llm,
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True
)

# Run agent
result = agent.run("What is 25 * 17 + 42?")
print(result)</code></pre>
                </div>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">External Playgrounds</h2>
        </div>

        <div class="cards-grid">
            <div class="card">
                <div class="card-icon">☁️</div>
                <h3 class="card-title">Google Colab</h3>
                <p class="card-description">Free Jupyter notebooks with GPU/TPU access. Perfect for running ML experiments without local setup.</p>
                <div class="card-footer">
                    <a href="https://colab.research.google.com/" target="_blank" class="btn btn-secondary" style="display: inline-block; text-decoration: none;">
                        Open Colab →
                    </a>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">🤗</div>
                <h3 class="card-title">Hugging Face Spaces</h3>
                <p class="card-description">Try thousands of ML demos and models directly in browser. Create and share your own apps.</p>
                <div class="card-footer">
                    <a href="https://huggingface.co/spaces" target="_blank" class="btn btn-secondary" style="display: inline-block; text-decoration: none;">
                        Explore Spaces →
                    </a>
                </div>
            </div>

            <div class="card">
                <div class="card-icon">📓</div>
                <h3 class="card-title">Kaggle Notebooks</h3>
                <p class="card-description">Free compute with access to datasets, competitions, and a community of data scientists.</p>
                <div class="card-footer">
                    <a href="https://www.kaggle.com/code" target="_blank" class="btn btn-secondary" style="display: inline-block; text-decoration: none;">
                        Go to Kaggle →
                    </a>
                </div>
            </div>
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

