// ===== GenAI Academy Application =====
// Main JavaScript file handling all interactions, routing, and functionality

// ===== State Management =====
const state = {
    currentPage: 'home',
    completedConcepts: new Set(),
    bookmarkedConcepts: new Set(),
    searchQuery: '',
    theme: 'light',
    selectedConcept: null
};

// Load state from localStorage
function loadState() {
    try {
        const savedCompleted = localStorage.getItem('completedConcepts');
        const savedBookmarks = localStorage.getItem('bookmarkedConcepts');
        const savedTheme = localStorage.getItem('theme');

        if (savedCompleted) {
            state.completedConcepts = new Set(JSON.parse(savedCompleted));
        }
        if (savedBookmarks) {
            state.bookmarkedConcepts = new Set(JSON.parse(savedBookmarks));
        }
        if (savedTheme) {
            state.theme = savedTheme;
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    } catch (error) {
        console.error('Error loading state:', error);
    }
}

// Save state to localStorage
function saveState() {
    try {
        localStorage.setItem('completedConcepts', JSON.stringify([...state.completedConcepts]));
        localStorage.setItem('bookmarkedConcepts', JSON.stringify([...state.bookmarkedConcepts]));
        localStorage.setItem('theme', state.theme);
    } catch (error) {
        console.error('Error saving state:', error);
    }
}

// ===== Progress Management =====
function updateProgress() {
    const total = getTotalConcepts();
    const completed = state.completedConcepts.size;
    const percentage = Math.round((completed / total) * 100);

    const progressBadge = document.getElementById('progressBadge');
    const sidebarProgressBar = document.getElementById('sidebarProgressBar');
    const completedCount = document.getElementById('completedCount');

    if (progressBadge) progressBadge.textContent = `${percentage}%`;
    if (sidebarProgressBar) sidebarProgressBar.style.width = `${percentage}%`;
    if (completedCount) completedCount.textContent = completed;
}

function getTotalConcepts() {
    return Object.values(genAIConcepts).reduce((sum, category) => sum + category.length, 0);
}

function toggleConceptCompletion(conceptId) {
    if (state.completedConcepts.has(conceptId)) {
        state.completedConcepts.delete(conceptId);
    } else {
        state.completedConcepts.add(conceptId);
    }
    saveState();
    updateProgress();
}

function toggleBookmark(conceptId) {
    if (state.bookmarkedConcepts.has(conceptId)) {
        state.bookmarkedConcepts.delete(conceptId);
    } else {
        state.bookmarkedConcepts.add(conceptId);
    }
    saveState();
}

// ===== Page Content Generators =====
function generateHomePage() {
    const totalConcepts = getTotalConcepts();
    const completed = state.completedConcepts.size;
    const percentage = Math.round((completed / totalConcepts) * 100);

    return `
        <div class="hero">
            <div class="hero-content">
                <h1>Master Generative AI</h1>
                <p>Your comprehensive guide to GenAI, from fundamentals to advanced techniques. Learn 105+ concepts with detailed explanations, tutorials, and hands-on exercises.</p>
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
                </div>
            </div>
        </div>

        <div class="section-header">
            <div>
                <h2 class="section-title">Start Your Journey</h2>
                <p class="section-subtitle">Choose your learning path based on your experience level</p>
            </div>
        </div>

        <div class="cards-grid">
            ${generateCategoryCard('beginner', 'Beginner', '🌱', 'Start with the fundamentals of AI and GenAI', 30, 'badge-beginner')}
            ${generateCategoryCard('intermediate', 'Intermediate', '🚀', 'Dive deeper into advanced concepts and techniques', 40, 'badge-intermediate')}
            ${generateCategoryCard('advanced', 'Advanced', '⚡', 'Master cutting-edge GenAI technologies', 35, 'badge-advanced')}
        </div>

        <div class="section-header mt-4">
            <div>
                <h2 class="section-title">Popular Topics</h2>
                <p class="section-subtitle">Most viewed concepts this week</p>
            </div>
        </div>

        <div class="cards-grid">
            ${generateConceptCard(genAIConcepts.beginner[0])}
            ${generateConceptCard(genAIConcepts.beginner[1])}
            ${generateConceptCard(genAIConcepts.beginner[2])}
        </div>
    `;
}

function generateCategoryCard(category, title, icon, description, count, badgeClass) {
    return `
        <div class="card" onclick="navigateTo('${category}')">
            <div class="card-icon">${icon}</div>
            <h3 class="card-title">${title} Concepts</h3>
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
                    <button class="icon-btn ${isCompleted ? 'active' : ''}" onclick="event.stopPropagation(); toggleConceptCompletion('${concept.id}'); renderCurrentPage();" title="Mark as complete">
                        ${isCompleted ? '✅' : '☐'}
                    </button>
                    <button class="icon-btn ${isBookmarked ? 'active' : ''}" onclick="event.stopPropagation(); toggleBookmark('${concept.id}'); renderCurrentPage();" title="Bookmark">
                        ${isBookmarked ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function generateCategoryPage(category) {
    const concepts = genAIConcepts[category] || [];
    const categoryNames = {
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced'
    };
    const categoryIcons = {
        beginner: '🌱',
        intermediate: '🚀',
        advanced: '⚡'
    };

    return `
        <div class="hero" style="background: ${category === 'beginner' ? 'var(--gradient-green)' : category === 'intermediate' ? 'var(--gradient-orange)' : 'var(--gradient-purple)'};">
            <div class="hero-content">
                <h1>${categoryIcons[category]} ${categoryNames[category]} Concepts</h1>
                <p>Master the ${category} level concepts of Generative AI with comprehensive explanations and practical examples.</p>
                <div class="hero-stats">
                    <div class="hero-stat">
                        <span class="hero-stat-number">${concepts.length}</span>
                        <span class="hero-stat-label">Total Concepts</span>
                    </div>
                    <div class="hero-stat">
                        <span class="hero-stat-number">${concepts.filter(c => state.completedConcepts.has(c.id)).length}</span>
                        <span class="hero-stat-label">Completed</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-header">
            <div>
                <h2 class="section-title">All ${categoryNames[category]} Concepts</h2>
            </div>
        </div>

        <div class="cards-grid">
            ${concepts.map(concept => generateConceptCard(concept)).join('')}
        </div>
    `;
}

function generateRoadmapPage() {
    return `
        <div class="hero">
            <div class="hero-content">
                <h1>🗺️ Learning Roadmap</h1>
                <p>A structured path to mastering Generative AI, from fundamentals to advanced applications.</p>
            </div>
        </div>

        <div style="max-width: 900px; margin: 0 auto;">
            <h2>Phase 1: Foundations (Beginner)</h2>
            <p style="color: var(--text-secondary); margin-bottom: 2rem;">Build a strong foundation in AI, machine learning, and neural networks before diving into generative AI.</p>

            <div class="accordion active" onclick="toggleAccordion(this)">
                <button class="accordion-header">
                    <span>🤖 Core AI Concepts</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <ul>
                            <li>What is Artificial Intelligence?</li>
                            <li>Introduction to Machine Learning</li>
                            <li>Supervised vs Unsupervised Learning</li>
                            <li>Neural Networks Fundamentals</li>
                            <li>Training vs Inference</li>
                        </ul>
                        <p><strong>Time estimate:</strong> 2-3 weeks</p>
                    </div>
                </div>
            </div>

            <div class="accordion" onclick="toggleAccordion(this)">
                <button class="accordion-header">
                    <span>✨ Introduction to Generative AI</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <ul>
                            <li>What is Generative AI?</li>
                            <li>Large Language Models (LLMs)</li>
                            <li>Tokens and Tokenization</li>
                            <li>Embeddings and Vector Representations</li>
                            <li>Prompt Engineering Basics</li>
                        </ul>
                        <p><strong>Time estimate:</strong> 2-3 weeks</p>
                    </div>
                </div>
            </div>

            <h2 class="mt-4">Phase 2: Deep Dive (Intermediate)</h2>
            <p style="color: var(--text-secondary); margin-bottom: 2rem;">Explore advanced architectures, techniques, and applications of generative AI.</p>

            <div class="accordion" onclick="toggleAccordion(this)">
                <button class="accordion-header">
                    <span>🏗️ Advanced Architectures</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <ul>
                            <li>Transformer Architecture Deep Dive</li>
                            <li>BERT and Bidirectional Models</li>
                            <li>GPT Architecture</li>
                            <li>Diffusion Models</li>
                            <li>Multi-Modal Models</li>
                        </ul>
                        <p><strong>Time estimate:</strong> 4-6 weeks</p>
                    </div>
                </div>
            </div>

            <div class="accordion" onclick="toggleAccordion(this)">
                <button class="accordion-header">
                    <span>🛠️ Practical Applications</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <ul>
                            <li>Retrieval-Augmented Generation (RAG)</li>
                            <li>Vector Databases</li>
                            <li>Fine-Tuning Models</li>
                            <li>AI Agents and Autonomous Systems</li>
                            <li>Function Calling</li>
                        </ul>
                        <p><strong>Time estimate:</strong> 4-6 weeks</p>
                    </div>
                </div>
            </div>

            <h2 class="mt-4">Phase 3: Mastery (Advanced)</h2>
            <p style="color: var(--text-secondary); margin-bottom: 2rem;">Master cutting-edge techniques, optimization, and ethical considerations.</p>

            <div class="accordion" onclick="toggleAccordion(this)">
                <button class="accordion-header">
                    <span>⚡ Advanced Techniques</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <ul>
                            <li>Reinforcement Learning from Human Feedback (RLHF)</li>
                            <li>Model Parallelism and Distributed Training</li>
                            <li>Mixture of Experts (MoE)</li>
                            <li>Neural Architecture Search</li>
                            <li>Meta-Learning</li>
                        </ul>
                        <p><strong>Time estimate:</strong> 6-8 weeks</p>
                    </div>
                </div>
            </div>

            <div class="accordion" onclick="toggleAccordion(this)">
                <button class="accordion-header">
                    <span>🔒 Ethics and Safety</span>
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">
                        <ul>
                            <li>Bias in AI Systems</li>
                            <li>AI Safety and Alignment</li>
                            <li>Privacy-Preserving ML</li>
                            <li>Model Interpretability</li>
                            <li>Responsible AI Development</li>
                        </ul>
                        <p><strong>Time estimate:</strong> 3-4 weeks</p>
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
                <h1>📚 Interactive Tutorials</h1>
                <p>Hands-on tutorials to help you master GenAI concepts through practical examples and code.</p>
            </div>
        </div>

        <div class="section-header">
            <h2 class="section-title">Featured Tutorials</h2>
        </div>

        <div class="cards-grid">
            ${generateTutorialCard('Building Your First Chatbot', 'Create a simple chatbot using GPT API', 'Beginner', '45 min')}
            ${generateTutorialCard('Image Generation with Stable Diffusion', 'Generate custom images using AI', 'Intermediate', '60 min')}
            ${generateTutorialCard('Implementing RAG Systems', 'Build a retrieval-augmented generation system', 'Advanced', '90 min')}
            ${generateTutorialCard('Fine-Tuning LLMs', 'Customize language models for specific tasks', 'Advanced', '120 min')}
            ${generateTutorialCard('Prompt Engineering Mastery', 'Advanced techniques for better AI outputs', 'Intermediate', '30 min')}
            ${generateTutorialCard('Building AI Agents', 'Create autonomous AI agents', 'Advanced', '90 min')}
        </div>
    `;
}

function generateTutorialCard(title, description, level, duration) {
    const badgeClass = level === 'Beginner' ? 'badge-beginner' :
                       level === 'Intermediate' ? 'badge-intermediate' : 'badge-advanced';

    return `
        <div class="card">
            <div class="card-header">
                <div class="card-icon">📖</div>
                <span class="card-badge ${badgeClass}">${level}</span>
            </div>
            <h3 class="card-title">${title}</h3>
            <p class="card-description">${description}</p>
            <div class="card-footer">
                <div class="card-meta">
                    <span>⏱️ ${duration}</span>
                </div>
            </div>
        </div>
    `;
}

function generateExercisesPage() {
    return `
        <div class="hero" style="background: var(--gradient-green);">
            <div class="hero-content">
                <h1>💪 Practice Exercises</h1>
                <p>Reinforce your learning with practical exercises and real-world challenges.</p>
            </div>
        </div>

        <div class="tabs">
            <button class="tab active" onclick="switchTab(this, 'coding')">Coding Exercises</button>
            <button class="tab" onclick="switchTab(this, 'conceptual')">Conceptual Challenges</button>
            <button class="tab" onclick="switchTab(this, 'projects')">Projects</button>
        </div>

        <div id="tab-content">
            ${generateExercisesList()}
        </div>
    `;
}

function generateExercisesList() {
    return `
        <div class="cards-grid">
            ${generateExerciseCard('Build a Text Classifier', 'Create a sentiment analysis model', 'Beginner', '30 min')}
            ${generateExerciseCard('Implement Attention Mechanism', 'Code the self-attention from scratch', 'Intermediate', '60 min')}
            ${generateExerciseCard('Optimize Model Performance', 'Reduce inference time by 50%', 'Advanced', '90 min')}
            ${generateExerciseCard('Create Custom Embeddings', 'Train domain-specific word embeddings', 'Intermediate', '45 min')}
            ${generateExerciseCard('Build RAG Pipeline', 'Implement end-to-end RAG system', 'Advanced', '120 min')}
            ${generateExerciseCard('Prompt Optimization Challenge', 'Achieve 95%+ accuracy through prompting', 'Intermediate', '30 min')}
        </div>
    `;
}

function generateExerciseCard(title, description, difficulty, time) {
    const badgeClass = difficulty === 'Beginner' ? 'badge-beginner' :
                       difficulty === 'Intermediate' ? 'badge-intermediate' : 'badge-advanced';

    return `
        <div class="card">
            <div class="card-header">
                <div class="card-icon">💻</div>
                <span class="card-badge ${badgeClass}">${difficulty}</span>
            </div>
            <h3 class="card-title">${title}</h3>
            <p class="card-description">${description}</p>
            <div class="card-footer">
                <div class="card-meta">
                    <span>⏱️ ${time}</span>
                </div>
            </div>
        </div>
    `;
}

function generateQuizzesPage() {
    return `
        <div class="hero" style="background: var(--gradient-orange);">
            <div class="hero-content">
                <h1>🎯 Test Your Knowledge</h1>
                <p>Challenge yourself with quizzes covering all aspects of Generative AI.</p>
            </div>
        </div>

        <div class="section-header">
            <h2 class="section-title">Available Quizzes</h2>
        </div>

        <div class="cards-grid">
            ${generateQuizCard('AI Fundamentals Quiz', '20 questions', 'Beginner', '15 min')}
            ${generateQuizCard('Machine Learning Basics', '25 questions', 'Beginner', '20 min')}
            ${generateQuizCard('Neural Networks Quiz', '30 questions', 'Intermediate', '25 min')}
            ${generateQuizCard('LLM Architecture Quiz', '20 questions', 'Intermediate', '15 min')}
            ${generateQuizCard('Advanced GenAI Concepts', '35 questions', 'Advanced', '30 min')}
            ${generateQuizCard('RLHF and Alignment', '15 questions', 'Advanced', '12 min')}
        </div>
    `;
}

function generateQuizCard(title, questions, level, duration) {
    const badgeClass = level === 'Beginner' ? 'badge-beginner' :
                       level === 'Intermediate' ? 'badge-intermediate' : 'badge-advanced';

    return `
        <div class="card">
            <div class="card-header">
                <div class="card-icon">❓</div>
                <span class="card-badge ${badgeClass}">${level}</span>
            </div>
            <h3 class="card-title">${title}</h3>
            <p class="card-description">${questions} • ${duration}</p>
            <div class="card-footer">
                <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Start Quiz</button>
            </div>
        </div>
    `;
}

function generateFAQPage() {
    const faqs = [
        {
            question: 'What is Generative AI and how is it different from traditional AI?',
            answer: 'Generative AI refers to artificial intelligence systems that can create new content (text, images, audio, etc.) rather than just analyzing or classifying existing data. Traditional AI typically focuses on recognition and prediction tasks, while generative AI synthesizes new outputs based on patterns learned from training data.'
        },
        {
            question: 'Do I need a strong mathematics background to learn GenAI?',
            answer: 'While a solid understanding of mathematics (linear algebra, calculus, probability) is helpful, it\'s not absolutely necessary to get started. You can begin learning GenAI concepts and applications with basic programming skills, then deepen your mathematical understanding as you progress. Many modern frameworks abstract away much of the complex math.'
        },
        {
            question: 'Which programming language should I learn for GenAI?',
            answer: 'Python is the de facto standard for AI and machine learning. It has the most comprehensive ecosystem of libraries (TensorFlow, PyTorch, Hugging Face) and the largest community. Start with Python, and you\'ll have access to virtually all GenAI tools and resources.'
        },
        {
            question: 'How long does it take to become proficient in GenAI?',
            answer: 'It depends on your starting point and time commitment. With consistent effort: Beginner level (understanding concepts and using APIs): 2-3 months. Intermediate level (building custom applications): 6-9 months. Advanced level (training and fine-tuning models): 12-18 months. Remember, GenAI is evolving rapidly, so continuous learning is essential.'
        },
        {
            question: 'What are the hardware requirements for working with GenAI?',
            answer: 'For learning and using APIs: Any modern computer will suffice. For training small models: A GPU with at least 8GB VRAM (like NVIDIA RTX 3060). For training larger models: High-end GPUs (RTX 4090, A100) or cloud computing resources. For production applications: Cloud services (AWS, Google Cloud, Azure) are often more practical than local hardware.'
        },
        {
            question: 'Can I use GenAI commercially?',
            answer: 'Yes, but with considerations: API-based services (OpenAI, Anthropic) have terms of service you must follow. Open-source models have various licenses (some allow commercial use, others don\'t). Generated content may have copyright implications. Always check the specific licenses and terms for the tools you\'re using.'
        },
        {
            question: 'How do I prevent my AI from generating biased or harmful content?',
            answer: 'Implement multiple safety layers: Use models with built-in safety features. Add content filtering and moderation. Implement human review for critical applications. Test extensively with diverse inputs. Stay updated on best practices for responsible AI. Use techniques like RLHF and constitutional AI.'
        },
        {
            question: 'What\'s the difference between GPT, BERT, and other models?',
            answer: 'GPT (Generative Pre-trained Transformer): Autoregressive, generates text left-to-right, excellent for generation tasks. BERT (Bidirectional Encoder Representations from Transformers): Bidirectional, better for understanding tasks like classification. T5, LLaMA, Claude: Various architectures optimized for different use cases. Each has trade-offs in speed, quality, and capability.'
        },
        {
            question: 'How much does it cost to use GenAI services?',
            answer: 'Costs vary widely: API calls: $0.001-$0.12 per 1K tokens depending on the model. Cloud GPU rentals: $0.50-$5 per hour. Training large models: Can cost thousands to millions of dollars. Many services offer free tiers for learning and experimentation.'
        },
        {
            question: 'What are hallucinations and how do I handle them?',
            answer: 'Hallucinations occur when AI generates plausible-sounding but incorrect information. Mitigation strategies: Always verify factual claims. Use retrieval-augmented generation (RAG) for grounded responses. Implement confidence scoring. Add human review for critical applications. Use techniques like chain-of-thought to improve reasoning.'
        },
        {
            question: 'Is my data safe when using AI services?',
            answer: 'It depends on the service: Major providers (OpenAI, Anthropic, Google) have privacy policies. Enterprise tiers often guarantee data isn\'t used for training. Self-hosted open-source models give you full control. Always read privacy policies and terms of service. For sensitive data, consider on-premise solutions.'
        },
        {
            question: 'Will AI replace programmers and creators?',
            answer: 'AI is more likely to augment rather than replace humans. It can: Automate repetitive tasks. Accelerate creative processes. Generate drafts and ideas. Handle routine work. However, human judgment, creativity, and domain expertise remain crucial. The future likely involves human-AI collaboration rather than replacement.'
        }
    ];

    return `
        <div class="hero" style="background: var(--gradient-sunset);">
            <div class="hero-content">
                <h1>❓ Frequently Asked Questions</h1>
                <p>Find answers to common questions about Generative AI, learning paths, and practical applications.</p>
            </div>
        </div>

        <div style="max-width: 900px; margin: 0 auto;">
            ${faqs.map((faq, index) => `
                <div class="accordion ${index === 0 ? 'active' : ''}" onclick="toggleAccordion(this)">
                    <button class="accordion-header">
                        <span>${faq.question}</span>
                        <span class="accordion-icon">▼</span>
                    </button>
                    <div class="accordion-content">
                        <div class="accordion-body">
                            ${faq.answer}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function generateInterviewPage() {
    const questions = [
        {
            category: 'Fundamentals',
            questions: [
                'Explain the difference between supervised and unsupervised learning.',
                'What is a neural network and how does it learn?',
                'Describe the backpropagation algorithm.',
                'What are activation functions and why are they important?',
                'Explain overfitting and how to prevent it.'
            ]
        },
        {
            category: 'Generative AI',
            questions: [
                'What is a Large Language Model (LLM)?',
                'Explain the Transformer architecture.',
                'What is the attention mechanism?',
                'Describe how diffusion models work.',
                'What is prompt engineering and why is it important?'
            ]
        },
        {
            category: 'Advanced Topics',
            questions: [
                'Explain RLHF (Reinforcement Learning from Human Feedback).',
                'What are the challenges in training large language models?',
                'Describe Retrieval-Augmented Generation (RAG).',
                'How does model quantization work?',
                'Explain the concept of few-shot learning.'
            ]
        },
        {
            category: 'Practical Applications',
            questions: [
                'How would you build a chatbot for customer service?',
                'Describe the process of fine-tuning a model.',
                'What considerations are important for deploying AI in production?',
                'How do you evaluate the performance of a generative model?',
                'Explain how you would handle bias in AI systems.'
            ]
        }
    ];

    return `
        <div class="hero" style="background: var(--gradient-purple);">
            <div class="hero-content">
                <h1>💼 Interview Questions</h1>
                <p>Prepare for your GenAI interviews with our comprehensive question bank covering all difficulty levels.</p>
            </div>
        </div>

        <div style="max-width: 1000px; margin: 0 auto;">
            ${questions.map(category => `
                <div class="mb-4">
                    <h2 class="mb-2">${category.category}</h2>
                    <div class="cards-grid">
                        ${category.questions.map((q, idx) => `
                            <div class="card">
                                <div class="card-header">
                                    <span style="font-size: 1.5rem; color: var(--primary-purple); font-weight: bold;">Q${idx + 1}</span>
                                </div>
                                <p class="card-description">${q}</p>
                                <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="alert('Detailed answer coming soon!')">View Answer</button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function generateGlossaryPage() {
    return `
        <div class="hero">
            <div class="hero-content">
                <h1>📖 GenAI Glossary</h1>
                <p>Your quick reference guide to GenAI terminology and concepts.</p>
            </div>
        </div>

        <div style="max-width: 900px; margin: 0 auto;">
            <p class="text-muted mb-3">A comprehensive glossary of terms used in Generative AI and machine learning.</p>

            ${generateGlossarySection('A', [
                ['Activation Function', 'A mathematical function that determines the output of a neural network node.'],
                ['Attention Mechanism', 'A technique that allows models to focus on relevant parts of input data.'],
                ['Autoencoder', 'A neural network that learns to compress and reconstruct data.']
            ])}

            ${generateGlossarySection('B', [
                ['Backpropagation', 'Algorithm for training neural networks by propagating errors backward.'],
                ['BERT', 'Bidirectional Encoder Representations from Transformers, a language model.'],
                ['Bias', 'An offset added to the weighted sum in neural networks, or systematic errors in models.']
            ])}

            ${generateGlossarySection('C', [
                ['CNN', 'Convolutional Neural Network, specialized for processing grid-like data such as images.'],
                ['Context Window', 'The maximum amount of text an LLM can process at once.'],
                ['Cross-Entropy', 'A loss function commonly used in classification tasks.']
            ])}

            ${generateGlossarySection('D', [
                ['Diffusion Model', 'Generative model that creates data by iteratively denoising.'],
                ['Dropout', 'Regularization technique that randomly deactivates neurons during training.']
            ])}

            ${generateGlossarySection('E', [
                ['Embedding', 'Dense vector representation of data (text, images) in a continuous space.'],
                ['Epoch', 'One complete pass through the entire training dataset.']
            ])}

            ${generateGlossarySection('F', [
                ['Fine-Tuning', 'Adapting a pre-trained model to a specific task with additional training.'],
                ['Few-Shot Learning', 'Learning from a small number of examples.']
            ])}

            ${generateGlossarySection('G', [
                ['GAN', 'Generative Adversarial Network, two networks competing to generate realistic data.'],
                ['Gradient Descent', 'Optimization algorithm that minimizes loss by following gradients.'],
                ['GPT', 'Generative Pre-trained Transformer, a family of language models.']
            ])}

            ${generateGlossarySection('H', [
                ['Hallucination', 'When AI generates plausible but incorrect or nonsensical information.'],
                ['Hyperparameter', 'Configuration variable set before training (e.g., learning rate).']
            ])}

            ${generateGlossarySection('L', [
                ['LLM', 'Large Language Model, neural networks trained on vast text corpora.'],
                ['Loss Function', 'Measures how well a model\'s predictions match the actual values.'],
                ['LoRA', 'Low-Rank Adaptation, efficient fine-tuning technique.']
            ])}

            ${generateGlossarySection('R', [
                ['RAG', 'Retrieval-Augmented Generation, combining retrieval with generation.'],
                ['ReLU', 'Rectified Linear Unit, popular activation function.'],
                ['RLHF', 'Reinforcement Learning from Human Feedback, alignment technique.']
            ])}

            ${generateGlossarySection('T', [
                ['Token', 'Basic unit of text processed by language models.'],
                ['Transformer', 'Neural network architecture based on attention mechanisms.'],
                ['Transfer Learning', 'Using knowledge from one task to improve performance on another.']
            ])}

            ${generateGlossarySection('V', [
                ['VAE', 'Variational Autoencoder, generative model using probabilistic encoding.'],
                ['Vector Database', 'Database optimized for storing and querying vector embeddings.']
            ])}
        </div>
    `;
}

function generateGlossarySection(letter, terms) {
    return `
        <div class="mb-4">
            <h2 style="color: var(--primary-purple); font-size: 2.5rem; margin-bottom: 1rem;">${letter}</h2>
            ${terms.map(([term, definition]) => `
                <div style="background: var(--bg-card); padding: 1.5rem; border-radius: var(--border-radius); margin-bottom: 1rem; box-shadow: var(--shadow-sm);">
                    <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">${term}</h4>
                    <p style="color: var(--text-secondary); margin: 0;">${definition}</p>
                </div>
            `).join('')}
        </div>
    `;
}

// ===== Modal Management =====
function openConceptModal(conceptId) {
    const concept = findConceptById(conceptId);
    if (!concept) return;

    state.selectedConcept = conceptId;
    const modal = document.getElementById('conceptModal');
    const modalBody = document.getElementById('modalBody');

    const isCompleted = state.completedConcepts.has(conceptId);
    const isBookmarked = state.bookmarkedConcepts.has(conceptId);

    modalBody.innerHTML = `
        <div class="concept-detail">
            <div class="concept-header">
                <div style="font-size: 3rem; margin-bottom: 1rem;">${concept.icon}</div>
                <h1 class="concept-title">${concept.title}</h1>
                <div class="concept-meta">
                    <span class="card-badge ${concept.level === 'Beginner' ? 'badge-beginner' : concept.level === 'Intermediate' ? 'badge-intermediate' : 'badge-advanced'}">${concept.level}</span>
                    <span style="color: var(--text-secondary);">📖 ${concept.readTime}</span>
                </div>
            </div>
            <div class="concept-content">
                ${concept.content}
            </div>
            <div class="concept-actions">
                <button class="btn ${isCompleted ? 'btn-secondary' : 'btn-primary'}" onclick="toggleConceptCompletion('${conceptId}'); openConceptModal('${conceptId}');">
                    ${isCompleted ? '✅ Completed' : '☐ Mark as Complete'}
                </button>
                <button class="btn btn-secondary" onclick="toggleBookmark('${conceptId}'); openConceptModal('${conceptId}');">
                    ${isBookmarked ? '❤️ Bookmarked' : '🤍 Bookmark'}
                </button>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function findConceptById(id) {
    for (const category of Object.values(genAIConcepts)) {
        const concept = category.find(c => c.id === id);
        if (concept) return concept;
    }
    return null;
}

// ===== Search Functionality =====
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (query.length < 2) {
            searchResults.classList.remove('active');
            return;
        }

        const results = searchConcepts(query);
        displaySearchResults(results, searchResults);
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });
}

function searchConcepts(query) {
    const results = [];

    for (const [category, concepts] of Object.entries(genAIConcepts)) {
        for (const concept of concepts) {
            if (concept.title.toLowerCase().includes(query) ||
                concept.description.toLowerCase().includes(query)) {
                results.push({...concept, category});
            }
        }
    }

    return results.slice(0, 10); // Limit to 10 results
}

function displaySearchResults(results, container) {
    if (results.length === 0) {
        container.innerHTML = '<div class="search-result-item">No results found</div>';
    } else {
        container.innerHTML = results.map(result => `
            <div class="search-result-item" onclick="openConceptModal('${result.id}'); document.getElementById('searchResults').classList.remove('active');">
                <div class="search-result-title">${result.icon} ${result.title}</div>
                <div class="search-result-category">${result.category.charAt(0).toUpperCase() + result.category.slice(1)} • ${result.readTime}</div>
            </div>
        `).join('');
    }

    container.classList.add('active');
}

// ===== Navigation =====
function navigateTo(page) {
    state.currentPage = page;

    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-page') === page) {
            item.classList.add('active');
        }
    });

    renderCurrentPage();

    // Close sidebar on mobile
    if (window.innerWidth <= 1024) {
        document.getElementById('sidebar').classList.remove('active');
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

function renderCurrentPage() {
    const mainContent = document.getElementById('mainContent');
    let content = '';

    switch(state.currentPage) {
        case 'home':
            content = generateHomePage();
            break;
        case 'roadmap':
            content = generateRoadmapPage();
            break;
        case 'beginner':
        case 'intermediate':
        case 'advanced':
            content = generateCategoryPage(state.currentPage);
            break;
        case 'tutorials':
            content = generateTutorialsPage();
            break;
        case 'exercises':
            content = generateExercisesPage();
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
        default:
            content = generateHomePage();
    }

    mainContent.innerHTML = content;
    mainContent.classList.add('fade-in');
}

// ===== UI Interactions =====
function toggleAccordion(element) {
    element.classList.toggle('active');
}

function switchTab(tabElement, tabName) {
    // Update tab active state
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    tabElement.classList.add('active');

    // Update content based on tab
    // This would be expanded with actual tab content
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    saveState();
}

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
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="font-size: 1.5rem; font-weight: 600;">${completed} / ${total} concepts</span>
                <span style="font-size: 1.5rem; font-weight: 600; color: var(--primary-green);">${percentage}%</span>
            </div>
            <div class="progress-bar" style="height: 20px;">
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
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function showBookmarksModal() {
    const modal = document.getElementById('bookmarksModal');
    const modalBody = document.getElementById('bookmarksModalBody');

    const bookmarkedConcepts = [];
    for (const [category, concepts] of Object.entries(genAIConcepts)) {
        for (const concept of concepts) {
            if (state.bookmarkedConcepts.has(concept.id)) {
                bookmarkedConcepts.push({...concept, category});
            }
        }
    }

    if (bookmarkedConcepts.length === 0) {
        modalBody.innerHTML = `
            <h2>Your Bookmarks</h2>
            <p style="text-align: center; color: var(--text-secondary); padding: 3rem 0;">
                You haven't bookmarked any concepts yet. Click the heart icon on any concept to save it here!
            </p>
        `;
    } else {
        modalBody.innerHTML = `
            <h2>Your Bookmarks (${bookmarkedConcepts.length})</h2>
            <div class="cards-grid" style="margin-top: 2rem;">
                ${bookmarkedConcepts.map(concept => generateConceptCard(concept)).join('')}
            </div>
        `;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Menu toggle
    document.getElementById('menuToggle')?.addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('active');
    });

    // Theme toggle
    document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

    // Progress button
    document.getElementById('progressBtn')?.addEventListener('click', showProgressModal);

    // Bookmarks button
    document.getElementById('bookmarksBtn')?.addEventListener('click', showBookmarksModal);

    // Modal close buttons
    document.getElementById('modalClose')?.addEventListener('click', () => closeModal('conceptModal'));
    document.getElementById('progressModalClose')?.addEventListener('click', () => closeModal('progressModal'));
    document.getElementById('bookmarksModalClose')?.addEventListener('click', () => closeModal('bookmarksModal'));

    // Close modal when clicking overlay
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal(overlay.closest('.modal').id);
            }
        });
    });

    // Navigation items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.getAttribute('data-page');
            if (page) navigateTo(page);
        });
    });

    // Handle browser back/forward
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.slice(1) || 'home';
        navigateTo(hash);
    });
}

// ===== Initialization =====
function init() {
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
    }, 1000);

    // Load saved state
    loadState();

    // Setup search
    setupSearch();

    // Setup event listeners
    setupEventListeners();

    // Initial render
    const hash = window.location.hash.slice(1) || 'home';
    navigateTo(hash);

    // Update progress
    updateProgress();
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
