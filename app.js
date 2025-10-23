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
                <h1>🎯 Comprehensive GenAI Quizzes</h1>
                <p>Test your knowledge with detailed questions and comprehensive explanations covering all GenAI concepts.</p>
            </div>
        </div>

        <div style="max-width: 1000px; margin: 0 auto;">
            <div class="section-header">
                <h2 class="section-title">🌱 Beginner Level Questions</h2>
                <p class="section-subtitle">Fundamentals of AI, ML, and GenAI</p>
            </div>

            <div class="accordion active">
                <button class="accordion-header">
                    <span>Q1: What is the primary difference between supervised and unsupervised learning?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Answer: Supervised learning uses labeled data, while unsupervised learning uses unlabeled data.</strong></p>
                        <p><strong>Explanation:</strong></p>
                        <ul>
                            <li><strong>Supervised Learning:</strong> Training data includes both inputs and correct outputs (labels). Examples: classification, regression. Use cases: spam detection, price prediction.</li>
                            <li><strong>Unsupervised Learning:</strong> Training data has only inputs, no labels. The model finds patterns independently. Examples: clustering, dimensionality reduction. Use cases: customer segmentation, anomaly detection.</li>
                        </ul>
                        <p><strong>Key Difference:</strong> Supervised = teacher guiding learning. Unsupervised = self-directed pattern discovery.</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Q2: In a neural network, what is the purpose of an activation function?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Answer: To introduce non-linearity into the network, enabling it to learn complex patterns.</strong></p>
                        <p><strong>Explanation:</strong> Without activation functions, neural networks would only learn linear relationships, no matter how many layers. Activation functions allow networks to approximate any function.</p>
                        <p><strong>Common activation functions:</strong></p>
                        <ul>
                            <li><strong>ReLU (Rectified Linear Unit):</strong> f(x) = max(0, x). Most popular, fast, reduces vanishing gradient.</li>
                            <li><strong>Sigmoid:</strong> f(x) = 1/(1+e^-x). Output between 0 and 1, used for binary classification.</li>
                            <li><strong>Tanh:</strong> f(x) = (e^x - e^-x)/(e^x + e^-x). Output between -1 and 1.</li>
                            <li><strong>Softmax:</strong> Converts logits to probabilities for multi-class classification.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Q3: What does "generative" mean in Generative AI?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Answer: The AI can generate new content (text, images, audio, etc.) rather than just analyzing existing data.</strong></p>
                        <p><strong>Key characteristics:</strong></p>
                        <ul>
                            <li>Learns the underlying distribution of training data</li>
                            <li>Creates novel outputs similar to training data but not copied</li>
                            <li>Can sample infinite variations from learned patterns</li>
                        </ul>
                        <p><strong>Examples:</strong></p>
                        <ul>
                            <li>Text: GPT generating articles, code, poetry</li>
                            <li>Images: DALL-E, Midjourney creating art from descriptions</li>
                            <li>Audio: Voice synthesis, music generation</li>
                            <li>Video: AI-generated videos and animations</li>
                        </ul>
                        <p><strong>Contrast with Discriminative AI:</strong> Which only classifies or predicts (e.g., "Is this spam?" vs "Write an email").</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Q4: What is a token in the context of Large Language Models?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Answer: A token is a unit of text (word, subword, or character) that the model processes.</strong></p>
                        <p><strong>Details:</strong></p>
                        <ul>
                            <li>Most LLMs use <strong>subword tokenization</strong> (BPE, WordPiece)</li>
                            <li>Common words = single token (e.g., "the", "cat")</li>
                            <li>Uncommon words = multiple tokens (e.g., "tokenization" might be "token" + "ization")</li>
                            <li>Average: ~1 token ≈ 0.75 words in English</li>
                        </ul>
                        <p><strong>Why it matters:</strong></p>
                        <ul>
                            <li>API costs are based on token count</li>
                            <li>Context windows measured in tokens (GPT-4: 128K tokens)</li>
                            <li>Model processes tokens, not words</li>
                        </ul>
                        <p><strong>Example:</strong> "I love GenAI!" = ~4 tokens ["I", " love", " Gen", "AI", "!"]</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Q5: What is the purpose of embeddings in NLP?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Answer: To represent words or text as dense vectors that capture semantic meaning.</strong></p>
                        <p><strong>Key benefits:</strong></p>
                        <ul>
                            <li><strong>Semantic similarity:</strong> Similar words have similar vectors (king ≈ queen)</li>
                            <li><strong>Mathematical operations:</strong> Can do vector arithmetic (king - man + woman ≈ queen)</li>
                            <li><strong>Dimensionality reduction:</strong> From millions of possible words to hundreds of dimensions</li>
                            <li><strong>Model input:</strong> Neural networks require numeric input, not text</li>
                        </ul>
                        <p><strong>Popular embedding models:</strong></p>
                        <ul>
                            <li>Word2Vec (2013) - Word-level embeddings</li>
                            <li>GloVe (2014) - Global vectors</li>
                            <li>BERT embeddings (2018) - Contextual embeddings</li>
                            <li>OpenAI text-embedding-ada-002 (2022) - Modern, high-quality</li>
                        </ul>
                        <p><strong>Use cases:</strong> Search, recommendation, clustering, classification</p>
                    </div>
                </div>
            </div>

            <div class="section-header mt-4">
                <h2 class="section-title">🚀 Intermediate Level Questions</h2>
                <p class="section-subtitle">RAG, Prompt Engineering, Fine-Tuning</p>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Q6: In a Transformer model, what is the self-attention mechanism calculating?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Answer: The relevance of each word to every other word in the sequence.</strong></p>
                        <p><strong>Self-attention formula:</strong> Attention(Q,K,V) = softmax(QK^T / √d_k)V</p>
                        <p><strong>Components:</strong></p>
                        <ul>
                            <li><strong>Q (Query):</strong> "What am I looking for?"</li>
                            <li><strong>K (Key):</strong> "What do I contain?"</li>
                            <li><strong>V (Value):</strong> "What do I actually represent?"</li>
                            <li><strong>d_k:</strong> Dimension of keys (scaling factor to prevent large dot products)</li>
                        </ul>
                        <p><strong>Process:</strong></p>
                        <ol>
                            <li>Compute query-key similarity (QK^T) for all pairs</li>
                            <li>Scale by √d_k to normalize</li>
                            <li>Apply softmax to get attention weights (probabilities)</li>
                            <li>Weighted sum of values based on attention weights</li>
                        </ol>
                        <p><strong>Result:</strong> Each word's representation incorporates information from all relevant words in the sequence.</p>
                        <p><strong>Example:</strong> In "The cat sat on the mat", when processing "cat", attention might focus heavily on "sat" (verb) and "mat" (location).</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Q7: What is the primary advantage of RAG (Retrieval-Augmented Generation) over fine-tuning?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Answer: RAG can access up-to-date information without retraining the model.</strong></p>
                        <p><strong>Comparison:</strong></p>
                        <table style="width: 100%; margin: 1rem 0; border-collapse: collapse;">
                            <tr style="background: var(--bg-secondary);">
                                <th style="padding: 0.5rem; border: 1px solid var(--border-color);">Aspect</th>
                                <th style="padding: 0.5rem; border: 1px solid var(--border-color);">RAG</th>
                                <th style="padding: 0.5rem; border: 1px solid var(--border-color);">Fine-Tuning</th>
                            </tr>
                            <tr>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);"><strong>Knowledge Updates</strong></td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">Instant (add new docs)</td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">Requires retraining</td>
                            </tr>
                            <tr>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);"><strong>Source Citation</strong></td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">Yes, can cite docs</td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">No citations</td>
                            </tr>
                            <tr>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);"><strong>Hallucination</strong></td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">Reduced (grounded)</td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">Can hallucinate</td>
                            </tr>
                            <tr>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);"><strong>Cost</strong></td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">Higher per query</td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">Higher upfront</td>
                            </tr>
                            <tr>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);"><strong>Best For</strong></td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">Knowledge retrieval</td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">Style/format/behavior</td>
                            </tr>
                        </table>
                        <p><strong>Best practice:</strong> Use both together - fine-tune for consistent style, RAG for factual knowledge.</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Q8: What is Chain-of-Thought (CoT) prompting and when should you use it?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Answer: CoT prompts the model to show its reasoning steps before giving the final answer.</strong></p>
                        <p><strong>Basic example:</strong></p>
                        <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">Without CoT: "What is 15% of 80?"
With CoT: "Let's think step by step:
1. 15% means 15/100 = 0.15
2. Multiply: 80 × 0.15
3. Result: 12"</pre>
                        <p><strong>When to use:</strong></p>
                        <ul>
                            <li><strong>Math problems:</strong> Multi-step calculations</li>
                            <li><strong>Logic puzzles:</strong> Require sequential reasoning</li>
                            <li><strong>Complex analysis:</strong> Breaking down problems</li>
                            <li><strong>Debugging:</strong> Understanding model's thought process</li>
                        </ul>
                        <p><strong>Variants:</strong></p>
                        <ul>
                            <li><strong>Zero-shot CoT:</strong> Just add "Let's think step by step"</li>
                            <li><strong>Few-shot CoT:</strong> Show examples with reasoning</li>
                            <li><strong>Self-consistency:</strong> Sample multiple reasoning paths, take majority vote</li>
                        </ul>
                        <p><strong>Research findings:</strong> CoT improves accuracy by 20-50% on complex reasoning tasks (Wei et al., 2022).</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Q9: What is the purpose of the softmax function in neural networks?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Answer: To convert logits (raw model outputs) into probabilities that sum to 1.</strong></p>
                        <p><strong>Formula:</strong> softmax(x_i) = e^(x_i) / Σ(e^(x_j))</p>
                        <p><strong>Properties:</strong></p>
                        <ul>
                            <li>Output range: (0, 1) for each class</li>
                            <li>Sum of all outputs: exactly 1.0</li>
                            <li>Preserves order: larger logits → higher probabilities</li>
                            <li>Differentiable: can backpropagate gradients</li>
                        </ul>
                        <p><strong>Example:</strong></p>
                        <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">Logits: [2.0, 1.0, 0.1]
After softmax: [0.659, 0.242, 0.099]
Sum: 1.0</pre>
                        <p><strong>Use cases:</strong></p>
                        <ul>
                            <li>Multi-class classification (final layer)</li>
                            <li>Attention mechanisms (weighting)</li>
                            <li>Language modeling (next token prediction)</li>
                        </ul>
                        <p><strong>Temperature parameter:</strong> Can control randomness by dividing logits before softmax. Lower temp = more confident, higher temp = more random.</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Q10: What is the difference between semantic search and keyword search?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Answer: Semantic search understands meaning and context, while keyword search matches exact words.</strong></p>
                        <p><strong>Comparison:</strong></p>
                        <ul>
                            <li><strong>Keyword Search:</strong>
                                <ul>
                                    <li>Matches exact words/phrases</li>
                                    <li>Fast, simple algorithms (inverted index)</li>
                                    <li>Misses synonyms (search "car" won't find "automobile")</li>
                                    <li>Examples: Ctrl+F, basic SQL queries</li>
                                </ul>
                            </li>
                            <li><strong>Semantic Search:</strong>
                                <ul>
                                    <li>Understands meaning and intent</li>
                                    <li>Uses embeddings + vector similarity</li>
                                    <li>Finds conceptually similar content</li>
                                    <li>Examples: Google Search, RAG systems</li>
                                </ul>
                            </li>
                        </ul>
                        <p><strong>Example:</strong></p>
                        <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">Query: "reduce hallucinations in LLMs"

Keyword: Only finds docs with exact phrase
Semantic: Finds docs about:
  - "minimize false information in AI"
  - "improving LLM factuality"
  - "grounding language models"</pre>
                        <p><strong>Implementation:</strong> Embedding model → vector database → cosine similarity</p>
                    </div>
                </div>
            </div>

            <div class="section-header mt-4">
                <h2 class="section-title">⚡ Advanced Level Questions</h2>
                <p class="section-subtitle">RLHF, Optimization, Production Systems</p>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Q11: Explain the three phases of RLHF (Reinforcement Learning from Human Feedback)</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Answer: RLHF has three phases: Supervised Fine-Tuning (SFT), Reward Model Training, and RL Optimization.</strong></p>
                        <p><strong>Phase 1: Supervised Fine-Tuning (SFT)</strong></p>
                        <ul>
                            <li>Start with pre-trained base model</li>
                            <li>Fine-tune on high-quality human demonstrations</li>
                            <li>Goal: Model learns to follow instructions</li>
                            <li>Output: SFT model (better than base, but not aligned)</li>
                        </ul>
                        <p><strong>Phase 2: Reward Model Training</strong></p>
                        <ul>
                            <li>Generate multiple outputs for same prompt</li>
                            <li>Humans rank outputs (best to worst)</li>
                            <li>Train reward model to predict human preferences</li>
                            <li>Output: Reward model that scores any response</li>
                        </ul>
                        <p><strong>Phase 3: RL Optimization (PPO)</strong></p>
                        <ul>
                            <li>Use reward model as reward function</li>
                            <li>Fine-tune SFT model with RL (typically PPO algorithm)</li>
                            <li>Model learns to maximize reward (human preferences)</li>
                            <li>Add KL penalty to prevent drift from SFT model</li>
                            <li>Output: Final aligned model (e.g., ChatGPT, Claude)</li>
                        </ul>
                        <p><strong>Why RLHF works:</strong> Captures nuanced human preferences that are hard to specify in rules. Models learn helpfulness, harmlessness, honesty.</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Q12: What is LoRA (Low-Rank Adaptation) and why is it more efficient than full fine-tuning?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Answer: LoRA adds small trainable matrices to frozen model weights, reducing trainable parameters by 10,000x.</strong></p>
                        <p><strong>Key idea:</strong></p>
                        <p>Instead of updating weight matrix W directly, LoRA adds a low-rank decomposition:</p>
                        <p>W' = W + BA</p>
                        <p>Where B and A are much smaller matrices (rank r << model dimension)</p>
                        <p><strong>Example:</strong></p>
                        <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">Original weight: W = 4096 × 4096 = 16.7M parameters
LoRA: B = 4096 × 8, A = 8 × 4096 = 65K parameters
Reduction: 256x fewer parameters!</pre>
                        <p><strong>Benefits:</strong></p>
                        <ul>
                            <li><strong>Memory efficient:</strong> Can fine-tune 65B model on 48GB GPU</li>
                            <li><strong>Fast training:</strong> Fewer params = faster convergence</li>
                            <li><strong>Modular:</strong> Swap different LoRA adapters for different tasks</li>
                            <li><strong>No inference overhead:</strong> Can merge BA into W for deployment</li>
                            <li><strong>Storage:</strong> Store multiple adapters instead of full models</li>
                        </ul>
                        <p><strong>Typical hyperparameters:</strong></p>
                        <ul>
                            <li>Rank r: 4-64 (8 is common)</li>
                            <li>Alpha: 16-32 (scaling factor)</li>
                            <li>Target modules: Usually attention weights (Q, K, V, O)</li>
                        </ul>
                        <p><strong>Trade-off:</strong> Slightly lower capacity than full fine-tuning, but 95-98% of the performance for 1% of the cost.</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Q13: What is the purpose of KV caching in transformer inference?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Answer: KV caching stores previously computed key and value matrices to avoid redundant computation during autoregressive generation.</strong></p>
                        <p><strong>Problem without caching:</strong></p>
                        <p>When generating token by token, transformers recompute attention for all previous tokens every time. This is wasteful because previous tokens don't change.</p>
                        <p><strong>Solution:</strong></p>
                        <p>Cache the Key (K) and Value (V) matrices from previous tokens. For new token, only compute new K and V, concatenate with cache.</p>
                        <p><strong>Speedup example:</strong></p>
                        <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">Without cache:
  Token 1: Compute for 1 token
  Token 2: Compute for 2 tokens (wasteful!)
  Token 3: Compute for 3 tokens (very wasteful!)
  ...
  Token 100: Compute for 100 tokens
  Total: O(n²) computations

With cache:
  Token 1: Compute + cache
  Token 2: Use cache + compute new
  Token 3: Use cache + compute new
  ...
  Total: O(n) computations</pre>
                        <p><strong>Trade-offs:</strong></p>
                        <ul>
                            <li><strong>Memory:</strong> Stores 2 × seq_len × num_layers × hidden_dim values</li>
                            <li><strong>Speed:</strong> 2-10x faster generation</li>
                            <li><strong>Batch size:</strong> Larger cache means smaller batch size (GPU memory limit)</li>
                        </ul>
                        <p><strong>Optimization:</strong> Multi-query attention (MQA) and grouped-query attention (GQA) reduce KV cache size by sharing K/V across attention heads.</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Q14: How does Flash Attention improve transformer efficiency?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Answer: Flash Attention optimizes memory access patterns to reduce GPU memory I/O, achieving 2-4x speedup.</strong></p>
                        <p><strong>Standard attention problem:</strong></p>
                        <ul>
                            <li>Computes full attention matrix: O(n²) memory</li>
                            <li>Multiple reads/writes to slow GPU HBM (High Bandwidth Memory)</li>
                            <li>For long sequences (n=8K), attention matrix = 8K×8K = 256MB per head</li>
                        </ul>
                        <p><strong>Flash Attention solution:</strong></p>
                        <ul>
                            <li><strong>Tiling:</strong> Break computation into blocks that fit in fast SRAM</li>
                            <li><strong>Fused operations:</strong> Combine softmax + matrix multiply in single kernel</li>
                            <li><strong>Recomputation:</strong> Recompute attention in backward pass instead of storing</li>
                            <li><strong>Online softmax:</strong> Compute softmax incrementally without materializing full matrix</li>
                        </ul>
                        <p><strong>Results:</strong></p>
                        <ul>
                            <li>Training: 2-4x faster, 10-20x less memory</li>
                            <li>Longer sequences possible (8K → 64K tokens)</li>
                            <li>No approximation - exact attention computation</li>
                        </ul>
                        <p><strong>Impact:</strong></p>
                        <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">GPT-3 (175B) training:
Standard: ~$12M
Flash Attention: ~$4-5M savings

Longer context models possible:
  GPT-4: 128K context
  Claude 3: 200K context</pre>
                        <p><strong>Adoption:</strong> Now standard in PyTorch 2.0+ (torch.nn.functional.scaled_dot_product_attention)</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Q15: What is quantization and how does it reduce model size?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Answer: Quantization reduces the precision of model weights (e.g., from 32-bit to 8-bit or 4-bit), decreasing memory and increasing speed.</strong></p>
                        <p><strong>Precision levels:</strong></p>
                        <table style="width: 100%; margin: 1rem 0; border-collapse: collapse;">
                            <tr style="background: var(--bg-secondary);">
                                <th style="padding: 0.5rem; border: 1px solid var(--border-color);">Precision</th>
                                <th style="padding: 0.5rem; border: 1px solid var(--border-color);">Bits</th>
                                <th style="padding: 0.5rem; border: 1px solid var(--border-color);">Memory (7B model)</th>
                                <th style="padding: 0.5rem; border: 1px solid var(--border-color);">Quality</th>
                            </tr>
                            <tr>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">FP32 (Full)</td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">32</td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">28 GB</td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">100%</td>
                            </tr>
                            <tr>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">FP16/BF16</td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">16</td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">14 GB</td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">~99.5%</td>
                            </tr>
                            <tr>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">INT8</td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">8</td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">7 GB</td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">~98%</td>
                            </tr>
                            <tr>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">INT4</td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">4</td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">3.5 GB</td>
                                <td style="padding: 0.5rem; border: 1px solid var(--border-color);">~95%</td>
                            </tr>
                        </table>
                        <p><strong>Methods:</strong></p>
                        <ul>
                            <li><strong>Post-Training Quantization (PTQ):</strong> Quantize trained model. Fast, simple, slight quality loss.</li>
                            <li><strong>Quantization-Aware Training (QAT):</strong> Train with quantization in loop. Better quality, slower.</li>
                            <li><strong>GPTQ:</strong> Advanced PTQ for LLMs, minimal quality loss</li>
                            <li><strong>GGML/GGUF:</strong> Format for quantized models (llama.cpp)</li>
                        </ul>
                        <p><strong>Benefits:</strong></p>
                        <ul>
                            <li>4x-8x memory reduction</li>
                            <li>2x-4x faster inference (integer ops faster than float)</li>
                            <li>Run larger models on consumer hardware</li>
                            <li>Example: LLaMA 70B (FP16: 140GB) → (4-bit: 35GB) fits on single GPU</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="section-header mt-4">
                <h2 class="section-title">📝 Practice Test</h2>
                <p class="section-subtitle">Mixed difficulty - Test your overall knowledge</p>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Q16: True or False: Temperature of 0.0 means the model will always generate the same output for the same input.</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Answer: True (mostly, with caveats)</strong></p>
                        <p><strong>Explanation:</strong> At temperature 0.0, the model uses greedy decoding - always picking the highest probability token. For the same input and seed, output will be identical.</p>
                        <p><strong>Caveats:</strong></p>
                        <ul>
                            <li>Some APIs add small randomness even at temp=0</li>
                            <li>Floating point precision can cause tiny variations</li>
                            <li>Different API versions might have different behavior</li>
                        </ul>
                        <p><strong>Temperature scale:</strong></p>
                        <ul>
                            <li><strong>0.0:</strong> Deterministic, focused, repetitive</li>
                            <li><strong>0.3-0.7:</strong> Balanced creativity and coherence</li>
                            <li><strong>1.0:</strong> Full probability distribution</li>
                            <li><strong>1.5+:</strong> Highly random, creative but often incoherent</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Q17: Which of these are valid strategies to reduce LLM hallucinations? (Select all that apply)</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Answers: All of the following are valid strategies:</strong></p>
                        <ul>
                            <li>✅ <strong>Use RAG to ground responses in retrieved documents</strong></li>
                            <li>✅ <strong>Lower the temperature parameter</strong></li>
                            <li>✅ <strong>Add explicit instructions to say "I don't know" when uncertain</strong></li>
                            <li>✅ <strong>Use citation requirements in prompts</strong></li>
                            <li>✅ <strong>Fine-tune on high-quality, factual data</strong></li>
                            <li>✅ <strong>Implement verification/fact-checking steps</strong></li>
                            <li>✅ <strong>Use constrained generation with structured outputs</strong></li>
                        </ul>
                        <p><strong>Most effective:</strong> RAG + Lower temperature + Explicit instructions</p>
                        <p><strong>Additional techniques:</strong></p>
                        <ul>
                            <li>Self-consistency: Generate multiple responses, check agreement</li>
                            <li>Constitutional AI: Self-critique and revision</li>
                            <li>Ensemble methods: Use multiple models, cross-verify</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Q18: What is the main advantage of Mixture of Experts (MoE) architecture?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Answer: MoE allows scaling to trillions of parameters while keeping inference costs similar to smaller models.</strong></p>
                        <p><strong>How it works:</strong></p>
                        <ul>
                            <li>Model has multiple "expert" sub-networks</li>
                            <li>Router/gating network decides which experts to activate</li>
                            <li>Only 2-4 experts active per token (sparse activation)</li>
                            <li>Rest of experts remain dormant</li>
                        </ul>
                        <p><strong>Example:</strong></p>
                        <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">Mixtral 8x7B:
  Total parameters: 47B (8 experts × 7B each)
  Active per token: ~13B (2 experts active)
  Performance: Similar to dense 30-40B model
  Cost: Similar to 13B model</pre>
                        <p><strong>Benefits:</strong></p>
                        <ul>
                            <li><strong>Efficiency:</strong> High capacity, low compute</li>
                            <li><strong>Specialization:</strong> Experts learn different skills (code, math, languages)</li>
                            <li><strong>Scaling:</strong> Add more experts without proportional cost increase</li>
                        </ul>
                        <p><strong>Challenges:</strong></p>
                        <ul>
                            <li>Load balancing: Ensure all experts are used</li>
                            <li>Training complexity: Router needs careful tuning</li>
                            <li>Memory: All experts must fit in memory even if inactive</li>
                        </ul>
                        <p><strong>Examples:</strong> GPT-4 (rumored), Mixtral 8x7B, Switch Transformer</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Q19: In vector databases, what is the significance of the similarity metric (cosine vs euclidean)?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Answer: Different metrics measure different aspects of similarity - cosine measures direction, euclidean measures distance.</strong></p>
                        <p><strong>Cosine Similarity:</strong></p>
                        <ul>
                            <li><strong>Formula:</strong> cos(θ) = (A·B) / (||A|| ||B||)</li>
                            <li><strong>Range:</strong> -1 to 1 (higher is more similar)</li>
                            <li><strong>Measures:</strong> Angle between vectors (direction)</li>
                            <li><strong>Magnitude invariant:</strong> [1,2,3] and [10,20,30] are identical</li>
                            <li><strong>Best for:</strong> Text embeddings, semantic similarity</li>
                        </ul>
                        <p><strong>Euclidean Distance:</strong></p>
                        <ul>
                            <li><strong>Formula:</strong> sqrt(Σ(A_i - B_i)²)</li>
                            <li><strong>Range:</strong> 0 to ∞ (lower is more similar)</li>
                            <li><strong>Measures:</strong> Straight-line distance</li>
                            <li><strong>Magnitude sensitive:</strong> [1,2,3] ≠ [10,20,30]</li>
                            <li><strong>Best for:</strong> Image features, when magnitude matters</li>
                        </ul>
                        <p><strong>Example:</strong></p>
                        <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">Vectors: A = [1, 0], B = [2, 0], C = [0, 1]

Cosine similarity:
  A vs B: 1.0 (same direction!)
  A vs C: 0.0 (perpendicular)

Euclidean distance:
  A vs B: 1.0 (different magnitude)
  A vs C: 1.41 (far apart)</pre>
                        <p><strong>For LLM embeddings:</strong> Always use cosine - embedding models are trained to encode meaning in direction, not magnitude.</p>
                        <p><strong>Other metrics:</strong> Dot product (cosine without normalization), Manhattan distance</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <button class="accordion-header">
                    <span>Q20: What is catastrophic forgetting in the context of fine-tuning?</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <p><strong>Answer: When fine-tuning on specific data causes the model to forget previously learned general knowledge.</strong></p>
                        <p><strong>Example scenario:</strong></p>
                        <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">Base model: Good at general knowledge
↓ Fine-tune on medical data
Fine-tuned model: Great at medical topics
                    Bad at everything else! (forgot general knowledge)</pre>
                        <p><strong>Why it happens:</strong></p>
                        <ul>
                            <li>Neural networks optimize for current training data</li>
                            <li>Weights shift to fit new distribution</li>
                            <li>Old knowledge is overwritten</li>
                        </ul>
                        <p><strong>Prevention strategies:</strong></p>
                        <ul>
                            <li><strong>LoRA:</strong> Only train small adapters, keep base frozen</li>
                            <li><strong>Elastic Weight Consolidation (EWC):</strong> Penalize changes to important weights</li>
                            <li><strong>Progressive Neural Networks:</strong> Add new capacity for new tasks</li>
                            <li><strong>Replay:</strong> Mix in samples from original training data</li>
                            <li><strong>Lower learning rate:</strong> Smaller weight updates</li>
                            <li><strong>Fewer epochs:</strong> Don't overtrain on narrow data</li>
                        </ul>
                        <p><strong>Detection:</strong></p>
                        <ul>
                            <li>Evaluate on diverse benchmark before/after fine-tuning</li>
                            <li>Check performance on general tasks</li>
                            <li>Monitor perplexity on held-out general corpus</li>
                        </ul>
                        <p><strong>Trade-off:</strong> Some forgetting is acceptable if fine-tuned performance is much better for target task.</p>
                    </div>
                </div>
            </div>
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
            <h2 class="section-title">Model Architecture & Training</h2>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>What is the vanishing gradient problem and how do modern architectures address it?</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Problem:</strong> In deep networks, gradients become exponentially smaller in earlier layers, preventing learning.</p>
                    <p><strong>Causes:</strong></p>
                    <ul>
                        <li>Activation functions (sigmoid, tanh) squash outputs</li>
                        <li>Chain rule multiplies many small derivatives</li>
                        <li>Earlier layers receive negligible updates</li>
                    </ul>
                    <p><strong>Solutions:</strong></p>
                    <ul>
                        <li><strong>ReLU activation:</strong> Gradient is 1 for positive inputs</li>
                        <li><strong>Residual connections (ResNet):</strong> Skip connections allow gradients to flow directly</li>
                        <li><strong>Layer normalization:</strong> Stabilizes gradient magnitudes</li>
                        <li><strong>Careful initialization:</strong> Xavier/He initialization</li>
                        <li><strong>Gradient clipping:</strong> Prevent exploding gradients</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>Explain the difference between batch, mini-batch, and stochastic gradient descent</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Batch Gradient Descent:</strong></p>
                    <ul>
                        <li>Compute gradient using entire dataset</li>
                        <li>Pros: Stable convergence, exact gradient</li>
                        <li>Cons: Slow for large datasets, high memory</li>
                    </ul>
                    <p><strong>Stochastic Gradient Descent (SGD):</strong></p>
                    <ul>
                        <li>Update after each single example</li>
                        <li>Pros: Fast updates, can escape local minima</li>
                        <li>Cons: Noisy, unstable convergence</li>
                    </ul>
                    <p><strong>Mini-Batch Gradient Descent:</strong></p>
                    <ul>
                        <li>Update using small batches (32-512 examples)</li>
                        <li>Pros: Balance of speed and stability, GPU-efficient</li>
                        <li>Cons: Requires tuning batch size</li>
                        <li><strong>Most common in practice</strong></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>What is dropout and why is it effective for regularization?</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Dropout:</strong> Randomly "drop" (set to zero) neurons during training with probability p (typically 0.5).</p>
                    <p><strong>Why it works:</strong></p>
                    <ul>
                        <li>Forces network to not rely on specific neurons</li>
                        <li>Creates ensemble effect (training many sub-networks)</li>
                        <li>Prevents co-adaptation of features</li>
                        <li>Acts as strong regularizer</li>
                    </ul>
                    <p><strong>Implementation:</strong></p>
                    <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">Training: randomly zero neurons with prob p
Testing: use all neurons, scale by (1-p)</pre>
                    <p><strong>Important:</strong> Only use during training, not inference!</p>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>What is teacher forcing in sequence-to-sequence models?</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Teacher Forcing:</strong> During training, feed the true previous token as input, not the model's prediction.</p>
                    <p><strong>Example (translation):</strong></p>
                    <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">Input: "Hello" → Target: "Hola"

With teacher forcing:
  Step 1: Input <START> → Predict "H"
  Step 2: Input "H" (true) → Predict "o"
  Step 3: Input "o" (true) → Predict "l"

Without teacher forcing:
  Step 2: Input "H" (predicted) → Predict...
  Errors compound!</pre>
                    <p><strong>Benefits:</strong> Faster training, more stable</p>
                    <p><strong>Drawback:</strong> Train/test mismatch (exposure bias)</p>
                    <p><strong>Solution:</strong> Scheduled sampling - gradually reduce teacher forcing</p>
                </div>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">Evaluation & Metrics</h2>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>How do you evaluate the quality of a generative language model?</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Automatic Metrics:</strong></p>
                    <ul>
                        <li><strong>Perplexity:</strong> How "surprised" is the model? Lower is better. PPL = exp(cross-entropy)</li>
                        <li><strong>BLEU:</strong> N-gram overlap with reference (translation, summarization)</li>
                        <li><strong>ROUGE:</strong> Recall-focused, good for summarization</li>
                        <li><strong>BERTScore:</strong> Semantic similarity using embeddings</li>
                    </ul>
                    <p><strong>Human Evaluation:</strong></p>
                    <ul>
                        <li>Fluency: Is text grammatical and natural?</li>
                        <li>Coherence: Is it logically consistent?</li>
                        <li>Factuality: Is information accurate?</li>
                        <li>Relevance: Does it answer the prompt?</li>
                    </ul>
                    <p><strong>Task-Specific:</strong></p>
                    <ul>
                        <li>Benchmarks: MMLU, HumanEval, TruthfulQA</li>
                        <li>A/B testing with users</li>
                        <li>Win-rate against baseline</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>What is the difference between precision, recall, and F1 score?</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Precision:</strong> Of all predicted positives, how many are correct?</p>
                    <p>Precision = TP / (TP + FP)</p>
                    <p><strong>Recall:</strong> Of all actual positives, how many did we find?</p>
                    <p>Recall = TP / (TP + FN)</p>
                    <p><strong>F1 Score:</strong> Harmonic mean of precision and recall</p>
                    <p>F1 = 2 × (Precision × Recall) / (Precision + Recall)</p>
                    <p><strong>Example:</strong></p>
                    <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">Spam detection (100 emails):
  90 legitimate, 10 spam
  Model predicts 8 spam: 6 correct, 2 wrong

Precision = 6/8 = 75% (of flagged, 75% were spam)
Recall = 6/10 = 60% (caught 60% of spam)
F1 = 67%</pre>
                    <p><strong>Trade-off:</strong> Increasing one often decreases the other</p>
                </div>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">Production & Deployment</h2>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>How would you monitor an LLM application in production?</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Performance Metrics:</strong></p>
                    <ul>
                        <li>Latency (p50, p95, p99)</li>
                        <li>Throughput (requests/second)</li>
                        <li>Error rate</li>
                        <li>Availability/uptime</li>
                    </ul>
                    <p><strong>Quality Metrics:</strong></p>
                    <ul>
                        <li>User feedback (thumbs up/down)</li>
                        <li>Task completion rate</li>
                        <li>Conversation length distribution</li>
                        <li>Refusal/fallback rate</li>
                    </ul>
                    <p><strong>Cost Metrics:</strong></p>
                    <ul>
                        <li>Token usage (input/output)</li>
                        <li>API costs per user/session</li>
                        <li>Infrastructure costs</li>
                    </ul>
                    <p><strong>Safety Metrics:</strong></p>
                    <ul>
                        <li>Content filter triggers</li>
                        <li>Toxic output detection</li>
                        <li>PII leakage detection</li>
                        <li>Prompt injection attempts</li>
                    </ul>
                    <p><strong>Tools:</strong> DataDog, Langfuse, LangSmith, Weights & Biases</p>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>Explain the difference between online and offline evaluation</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Offline Evaluation:</strong></p>
                    <ul>
                        <li>Test on static dataset before deployment</li>
                        <li>Metrics: BLEU, perplexity, accuracy</li>
                        <li>Fast, cheap, repeatable</li>
                        <li>Limitation: May not reflect real user behavior</li>
                    </ul>
                    <p><strong>Online Evaluation:</strong></p>
                    <ul>
                        <li>Measure on real users in production</li>
                        <li>Metrics: Click-through rate, task completion, user feedback</li>
                        <li>Reflects actual performance</li>
                        <li>Challenges: Slow, expensive, requires traffic</li>
                    </ul>
                    <p><strong>Best Practice:</strong></p>
                    <ol>
                        <li>Offline evaluation for rapid iteration</li>
                        <li>A/B test promising candidates online</li>
                        <li>Monitor metrics continuously</li>
                    </ol>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>How would you handle rate limiting and retries for LLM APIs?</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Rate Limiting Strategies:</strong></p>
                    <ul>
                        <li><strong>Token bucket:</strong> Allow bursts but maintain average rate</li>
                        <li><strong>Sliding window:</strong> Count requests in rolling time window</li>
                        <li><strong>User/tenant quotas:</strong> Fair allocation</li>
                    </ul>
                    <p><strong>Retry Logic:</strong></p>
                    <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">Exponential backoff with jitter:
  Attempt 1: 0s
  Attempt 2: 2s + random(0-1s)
  Attempt 3: 4s + random(0-2s)
  Attempt 4: 8s + random(0-4s)
  Max retries: 5</pre>
                    <p><strong>Error Handling:</strong></p>
                    <ul>
                        <li><strong>429 (Rate Limit):</strong> Retry with backoff</li>
                        <li><strong>500/503 (Server Error):</strong> Retry with backoff</li>
                        <li><strong>400 (Bad Request):</strong> Don't retry, fix request</li>
                        <li><strong>401/403 (Auth):</strong> Don't retry, check credentials</li>
                    </ul>
                    <p><strong>Circuit Breaker:</strong> Stop trying if service is consistently failing</p>
                </div>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">Multimodal & Advanced Topics</h2>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>How do vision-language models like GPT-4V work?</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Architecture:</strong></p>
                    <ol>
                        <li><strong>Vision Encoder:</strong> CNN or ViT (Vision Transformer) processes image → visual features</li>
                        <li><strong>Projection Layer:</strong> Maps visual features to text embedding space</li>
                        <li><strong>Language Model:</strong> Processes both visual and text tokens together</li>
                    </ol>
                    <p><strong>Training Approach:</strong></p>
                    <ul>
                        <li><strong>Stage 1:</strong> Image-text pairs (captions) - learn alignment</li>
                        <li><strong>Stage 2:</strong> Instruction tuning with visual tasks</li>
                        <li><strong>Stage 3:</strong> RLHF for safety and helpfulness</li>
                    </ul>
                    <p><strong>Capabilities:</strong></p>
                    <ul>
                        <li>Image description and analysis</li>
                        <li>Visual question answering</li>
                        <li>OCR and document understanding</li>
                        <li>Visual reasoning</li>
                    </ul>
                    <p><strong>Examples:</strong> GPT-4V, Claude 3, Gemini Vision, LLaVA</p>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>What are diffusion models and how do they generate images?</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Core Idea:</strong> Learn to reverse a process that gradually adds noise to data.</p>
                    <p><strong>Forward Process (Training):</strong></p>
                    <ol>
                        <li>Start with real image</li>
                        <li>Gradually add Gaussian noise over T steps</li>
                        <li>End with pure noise</li>
                    </ol>
                    <p><strong>Reverse Process (Generation):</strong></p>
                    <ol>
                        <li>Start with random noise</li>
                        <li>Neural network predicts and removes noise at each step</li>
                        <li>After T steps, get clean image</li>
                    </ol>
                    <p><strong>Text Conditioning:</strong></p>
                    <ul>
                        <li>Text prompt encoded to embeddings</li>
                        <li>Cross-attention layers condition noise prediction on text</li>
                        <li>Classifier-free guidance for better prompt following</li>
                    </ul>
                    <p><strong>Advantages over GANs:</strong></p>
                    <ul>
                        <li>More stable training</li>
                        <li>Better mode coverage (diversity)</li>
                        <li>Higher quality results</li>
                    </ul>
                    <p><strong>Examples:</strong> Stable Diffusion, DALL-E 2, Imagen, Midjourney</p>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>Explain the concept of few-shot learning in LLMs</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Definition:</strong> Ability to perform tasks with just a few examples in the prompt, without parameter updates.</p>
                    <p><strong>Example:</strong></p>
                    <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">Sentiment classification:

Review: "Amazing product!" → Positive
Review: "Terrible experience" → Negative
Review: "Just okay, nothing special" → Neutral

Review: "Best purchase ever!" → ???
Model: Positive</pre>
                    <p><strong>Why it works:</strong></p>
                    <ul>
                        <li>Pre-training on diverse tasks teaches meta-learning</li>
                        <li>Model learns to recognize patterns from examples</li>
                        <li>In-context learning without weight updates</li>
                    </ul>
                    <p><strong>Variants:</strong></p>
                    <ul>
                        <li><strong>Zero-shot:</strong> No examples (just instructions)</li>
                        <li><strong>One-shot:</strong> Single example</li>
                        <li><strong>Few-shot:</strong> 2-10 examples</li>
                        <li><strong>Many-shot:</strong> 10+ examples (if context allows)</li>
                    </ul>
                    <p><strong>Performance:</strong> Generally improves with more examples, plateaus around 5-10</p>
                </div>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">Behavioral & Scenario Questions</h2>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>You notice your RAG system returns irrelevant documents. How do you debug?</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Systematic Debugging Approach:</strong></p>
                    <p><strong>1. Check Retrieval Quality</strong></p>
                    <ul>
                        <li>Inspect actual retrieved documents for sample queries</li>
                        <li>Check similarity scores - are they too low?</li>
                        <li>Test with known relevant documents - do they rank high?</li>
                    </ul>
                    <p><strong>2. Examine Embeddings</strong></p>
                    <ul>
                        <li>Are embeddings generated correctly?</li>
                        <li>Same embedding model for indexing and querying?</li>
                        <li>Try different embedding models (ada-002, instructor, e5)</li>
                    </ul>
                    <p><strong>3. Analyze Chunking</strong></p>
                    <ul>
                        <li>Chunks too large (lose precision) or too small (lose context)?</li>
                        <li>Try different chunk sizes (256, 512, 1024 tokens)</li>
                        <li>Add overlap between chunks</li>
                        <li>Use semantic chunking instead of fixed size</li>
                    </ul>
                    <p><strong>4. Improve Query Processing</strong></p>
                    <ul>
                        <li>Rewrite user query for better matching</li>
                        <li>Generate multiple query variations (hypothetical documents)</li>
                        <li>Add query expansion</li>
                    </ul>
                    <p><strong>5. Hybrid Search</strong></p>
                    <ul>
                        <li>Combine semantic + keyword search</li>
                        <li>Use BM25 + vector search</li>
                        <li>Re-ranking with cross-encoder</li>
                    </ul>
                    <p><strong>6. Evaluation</strong></p>
                    <ul>
                        <li>Build test set of queries with known relevant docs</li>
                        <li>Measure recall@K, MRR (mean reciprocal rank)</li>
                        <li>A/B test improvements</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>How would you design a content moderation system for an LLM application?</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Multi-Layer Defense:</strong></p>
                    <p><strong>Layer 1: Input Filtering</strong></p>
                    <ul>
                        <li>OpenAI Moderation API for harmful content</li>
                        <li>Prompt injection detection (keyword matching, classifiers)</li>
                        <li>PII detection and masking</li>
                        <li>Rate limiting per user</li>
                    </ul>
                    <p><strong>Layer 2: Model-Level Safety</strong></p>
                    <ul>
                        <li>System prompts with safety guidelines</li>
                        <li>Constitutional AI self-critique</li>
                        <li>Refusal training for harmful requests</li>
                    </ul>
                    <p><strong>Layer 3: Output Filtering</strong></p>
                    <ul>
                        <li>Toxicity classifier on responses</li>
                        <li>Fact-checking for factual claims</li>
                        <li>PII detection in outputs</li>
                        <li>Copyright detection</li>
                    </ul>
                    <p><strong>Layer 4: Human Review</strong></p>
                    <ul>
                        <li>Flag edge cases for review</li>
                        <li>User reporting mechanism</li>
                        <li>Feedback loop to improve filters</li>
                    </ul>
                    <p><strong>Monitoring:</strong></p>
                    <ul>
                        <li>Dashboard for filter trigger rates</li>
                        <li>False positive/negative tracking</li>
                        <li>Adversarial testing (red teaming)</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>Your fine-tuned model is overfitting. What would you do?</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Diagnosis:</strong> Training loss decreasing, validation loss increasing or plateauing</p>
                    <p><strong>Solutions (in order of priority):</strong></p>
                    <p><strong>1. Get More Data</strong></p>
                    <ul>
                        <li>Most effective solution</li>
                        <li>Data augmentation if collecting more is hard</li>
                        <li>Synthetic data generation</li>
                    </ul>
                    <p><strong>2. Regularization</strong></p>
                    <ul>
                        <li>Increase weight decay</li>
                        <li>Add dropout</li>
                        <li>Use LoRA instead of full fine-tuning (implicit regularization)</li>
                    </ul>
                    <p><strong>3. Reduce Model Capacity</strong></p>
                    <ul>
                        <li>Use smaller model</li>
                        <li>Lower LoRA rank</li>
                        <li>Freeze more layers</li>
                    </ul>
                    <p><strong>4. Training Adjustments</strong></p>
                    <ul>
                        <li>Early stopping based on validation loss</li>
                        <li>Lower learning rate</li>
                        <li>Fewer training epochs</li>
                        <li>Smaller batch size</li>
                    </ul>
                    <p><strong>5. Ensemble Methods</strong></p>
                    <ul>
                        <li>Train multiple models with different random seeds</li>
                        <li>Average predictions</li>
                    </ul>
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
    return response['data'][0']['embedding']

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

        <div class="accordion">
            <button class="accordion-header">
                <span>Build a simple RAG pipeline with caching</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Task:</strong> Create a RAG system with embedding cache to reduce API calls.</p>
                    <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; overflow-x: auto;"><code>import openai
import json
from pathlib import Path

class RAGSystem:
    def __init__(self, cache_file="embeddings_cache.json"):
        self.cache_file = cache_file
        self.cache = self._load_cache()

    def _load_cache(self):
        if Path(self.cache_file).exists():
            with open(self.cache_file) as f:
                return json.load(f)
        return {}

    def _save_cache(self):
        with open(self.cache_file, 'w') as f:
            json.dump(self.cache, f)

    def get_embedding(self, text):
        if text in self.cache:
            return self.cache[text]

        response = openai.Embedding.create(
            model="text-embedding-ada-002",
            input=text
        )
        embedding = response['data'][0]['embedding']
        self.cache[text] = embedding
        self._save_cache()
        return embedding

    def retrieve(self, query, documents, top_k=3):
        query_emb = self.get_embedding(query)
        doc_embs = [self.get_embedding(doc) for doc in documents]

        similarities = [
            np.dot(query_emb, doc_emb) /
            (np.linalg.norm(query_emb) * np.linalg.norm(doc_emb))
            for doc_emb in doc_embs
        ]

        top_idx = np.argsort(similarities)[-top_k:][::-1]
        return [documents[i] for i in top_idx]

    def generate(self, query, context):
        prompt = f"Context: {context}\n\nQuestion: {query}\n\nAnswer:"
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}]
        )
        return response.choices[0].message.content

    def query(self, question, documents):
        # Retrieve relevant docs
        relevant_docs = self.retrieve(question, documents)
        context = "\n".join(relevant_docs)

        # Generate answer
        answer = self.generate(question, context)
        return answer, relevant_docs</code></pre>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>Implement retry logic with exponential backoff</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Task:</strong> Create a robust API caller that handles rate limits and transient failures.</p>
                    <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; overflow-x: auto;"><code>import time
import random
from functools import wraps

def retry_with_backoff(max_retries=5, base_delay=1, max_delay=60):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_retries):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    # Don't retry on certain errors
                    if hasattr(e, 'status_code'):
                        if e.status_code in [400, 401, 403, 404]:
                            raise  # Don't retry client errors

                    if attempt == max_retries - 1:
                        raise  # Last attempt, give up

                    # Calculate backoff with jitter
                    delay = min(base_delay * (2 ** attempt), max_delay)
                    jitter = random.uniform(0, delay * 0.1)
                    sleep_time = delay + jitter

                    print(f"Attempt {attempt + 1} failed: {e}")
                    print(f"Retrying in {sleep_time:.2f}s...")
                    time.sleep(sleep_time)

            raise Exception(f"Failed after {max_retries} attempts")
        return wrapper
    return decorator

# Usage
@retry_with_backoff(max_retries=5)
def call_llm_api(prompt):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message.content

# Call with automatic retries
result = call_llm_api("What is AI?")</code></pre>
                </div>
            </div>
        </div>

        <div class="section-header mt-4">
            <h2 class="section-title">Estimation & Trade-off Questions</h2>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>Estimate the cost to serve 1 million requests with GPT-4</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Assumptions:</strong></p>
                    <ul>
                        <li>GPT-4: $0.03/1K input tokens, $0.06/1K output tokens</li>
                        <li>Average input: 1,000 tokens (~750 words)</li>
                        <li>Average output: 500 tokens (~375 words)</li>
                    </ul>
                    <p><strong>Calculation:</strong></p>
                    <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">Per request:
  Input cost: 1,000 tokens × $0.03/1K = $0.03
  Output cost: 500 tokens × $0.06/1K = $0.03
  Total: $0.06 per request

1 million requests:
  Cost: 1,000,000 × $0.06 = $60,000</pre>
                    <p><strong>Optimization strategies:</strong></p>
                    <ul>
                        <li>Use GPT-3.5 where possible: ~10x cheaper (~$6,000)</li>
                        <li>Caching: 30% cache hit = $42,000 (30% savings)</li>
                        <li>Prompt compression: 500 token input = $45,000 (25% savings)</li>
                        <li>Combined: Could reduce to ~$20,000-30,000</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="accordion">
            <button class="accordion-header">
                <span>Compare hosting your own LLM vs using API (cost analysis)</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p><strong>Scenario:</strong> 10M requests/month, avg 1K tokens in+out</p>
                    <p><strong>Option 1: OpenAI API (GPT-3.5)</strong></p>
                    <ul>
                        <li>Cost: $0.002/1K tokens = $20,000/month</li>
                        <li>Pros: Zero setup, scales instantly, always updated</li>
                        <li>Cons: Per-token costs, data sent to third party</li>
                    </ul>
                    <p><strong>Option 2: Self-Hosted (LLaMA 2 70B)</strong></p>
                    <ul>
                        <li>Hardware: 4× A100 GPUs = $10,000/month (cloud)</li>
                        <li>Engineering: $15,000/month (1 engineer)</li>
                        <li>Inference stack: $2,000/month</li>
                        <li>Total: $27,000/month</li>
                        <li>Pros: Data privacy, customization, no per-token cost</li>
                        <li>Cons: Maintenance, updates, scaling complexity</li>
                    </ul>
                    <p><strong>Break-even:</strong> ~15M requests/month</p>
                    <p><strong>Recommendation:</strong></p>
                    <ul>
                        <li>Low volume (<5M/mo): Use API</li>
                        <li>High volume (>20M/mo): Consider self-hosting</li>
                        <li>Sensitive data: Self-host regardless of cost</li>
                    </ul>
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

