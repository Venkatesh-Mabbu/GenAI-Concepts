// ===== GenAI Concepts Database =====
const genAIConcepts = {
    beginner: [
        {
            id: 'b1',
            title: 'What is Artificial Intelligence?',
            icon: '🤖',
            description: 'Understanding the fundamentals of AI and its various branches including machine learning, deep learning, and generative AI.',
            content: `
                <h2>Introduction to Artificial Intelligence</h2>
                <p>Artificial Intelligence (AI) represents one of the most transformative technological developments of our era. At its core, AI is the simulation of human intelligence processes by machines, particularly computer systems. These processes include learning, reasoning, problem-solving, perception, and language understanding.</p>

                <h3>The Evolution of AI</h3>
                <p>The journey of AI began in the 1950s when Alan Turing proposed the famous "Turing Test" to measure machine intelligence. Since then, AI has evolved through several phases:</p>
                <ul>
                    <li><strong>Symbolic AI (1950s-1980s):</strong> Early AI systems relied on explicitly programmed rules and symbolic logic to solve problems.</li>
                    <li><strong>Machine Learning Era (1980s-2010s):</strong> Systems began learning from data rather than following hardcoded rules.</li>
                    <li><strong>Deep Learning Revolution (2010s):</strong> Neural networks with multiple layers enabled breakthrough performance in computer vision and natural language processing.</li>
                    <li><strong>Generative AI Era (2020s):</strong> Models capable of creating new content, from text to images to music, have emerged.</li>
                </ul>

                <h3>Types of AI</h3>
                <p>AI can be categorized into three main types based on capabilities:</p>
                <ul>
                    <li><strong>Narrow AI (Weak AI):</strong> Designed to perform specific tasks, such as facial recognition, voice assistants, or recommendation systems. This is the most common form of AI today.</li>
                    <li><strong>General AI (Strong AI):</strong> Hypothetical AI that possesses human-like intelligence and can understand, learn, and apply knowledge across various domains.</li>
                    <li><strong>Superintelligent AI:</strong> A theoretical form of AI that would surpass human intelligence in all aspects.</li>
                </ul>

                <h3>Key Branches of AI</h3>
                <p>Modern AI encompasses several interconnected fields:</p>
                <ul>
                    <li><strong>Machine Learning:</strong> Algorithms that learn patterns from data without explicit programming.</li>
                    <li><strong>Natural Language Processing:</strong> Enabling computers to understand, interpret, and generate human language.</li>
                    <li><strong>Computer Vision:</strong> Teaching machines to interpret and understand visual information.</li>
                    <li><strong>Robotics:</strong> Creating intelligent machines that can interact with the physical world.</li>
                    <li><strong>Expert Systems:</strong> AI systems that emulate human expert decision-making in specific domains.</li>
                </ul>

                <h3>How AI Works</h3>
                <p>At a fundamental level, AI systems work through:</p>
                <ol>
                    <li><strong>Data Collection:</strong> Gathering relevant information from various sources.</li>
                    <li><strong>Data Processing:</strong> Cleaning and organizing data for analysis.</li>
                    <li><strong>Pattern Recognition:</strong> Identifying trends and relationships in data.</li>
                    <li><strong>Learning:</strong> Adjusting algorithms based on patterns discovered.</li>
                    <li><strong>Prediction/Decision Making:</strong> Using learned patterns to make decisions or predictions on new data.</li>
                </ol>

                <h3>Real-World Applications</h3>
                <p>AI has transformed numerous industries:</p>
                <ul>
                    <li><strong>Healthcare:</strong> Disease diagnosis, drug discovery, personalized treatment plans</li>
                    <li><strong>Finance:</strong> Fraud detection, algorithmic trading, risk assessment</li>
                    <li><strong>Transportation:</strong> Autonomous vehicles, route optimization, traffic management</li>
                    <li><strong>Entertainment:</strong> Content recommendations, game AI, creative tools</li>
                    <li><strong>Customer Service:</strong> Chatbots, virtual assistants, automated support systems</li>
                </ul>

                <h3>Ethical Considerations</h3>
                <p>As AI becomes more prevalent, several ethical concerns must be addressed:</p>
                <ul>
                    <li>Privacy and data security</li>
                    <li>Algorithmic bias and fairness</li>
                    <li>Job displacement and economic impact</li>
                    <li>Transparency and explainability</li>
                    <li>Accountability and responsibility</li>
                </ul>

                <h3>The Future of AI</h3>
                <p>The future of AI holds immense promise, with ongoing research focusing on making AI more efficient, accessible, and aligned with human values. Key areas of development include:</p>
                <ul>
                    <li>More energy-efficient AI models</li>
                    <li>Improved explainability and interpretability</li>
                    <li>Better handling of edge cases and rare scenarios</li>
                    <li>Enhanced human-AI collaboration</li>
                    <li>Development of more general-purpose AI systems</li>
                </ul>

                <h3>Getting Started with AI</h3>
                <p>For those interested in learning AI, the recommended path includes:</p>
                <ol>
                    <li>Strong foundation in mathematics (linear algebra, calculus, statistics)</li>
                    <li>Programming skills (Python is the most common language)</li>
                    <li>Understanding of algorithms and data structures</li>
                    <li>Hands-on experience with AI frameworks and tools</li>
                    <li>Continuous learning through projects and research</li>
                </ol>

                <h3>Conclusion</h3>
                <p>Artificial Intelligence is not just a technological advancement; it's a fundamental shift in how we interact with technology and solve complex problems. As we continue to develop and refine AI systems, understanding its principles, capabilities, and limitations becomes increasingly important for everyone, not just technologists. The journey into AI is an exciting one, filled with opportunities to innovate and make meaningful contributions to society.</p>
            `,
            readTime: '15 min',
            level: 'Beginner'
        },
        {
            id: 'b2',
            title: 'Introduction to Machine Learning',
            icon: '🧠',
            description: 'Learn the basics of machine learning, including supervised, unsupervised, and reinforcement learning paradigms.',
            content: `
                <h2>Understanding Machine Learning</h2>
                <p>Machine Learning (ML) is a subset of artificial intelligence that focuses on creating systems that can learn and improve from experience without being explicitly programmed. It's the technology behind many of today's most exciting applications, from recommendation systems to autonomous vehicles.</p>

                <h3>What Makes Machine Learning Different?</h3>
                <p>Traditional programming requires explicit instructions for every possible scenario. Machine Learning, however, enables computers to learn patterns from data and make decisions based on those patterns. This fundamental shift allows us to solve problems that would be impossible or impractical to solve with traditional programming.</p>

                <h3>The Three Main Types of Machine Learning</h3>

                <h4>1. Supervised Learning</h4>
                <p>Supervised learning is the most common type of machine learning. In this approach, the algorithm learns from labeled training data, making predictions based on input-output pairs.</p>
                <ul>
                    <li><strong>Classification:</strong> Predicting discrete categories (e.g., spam or not spam, cat or dog)</li>
                    <li><strong>Regression:</strong> Predicting continuous values (e.g., house prices, temperature)</li>
                </ul>
                <p><strong>Common Algorithms:</strong> Linear Regression, Logistic Regression, Decision Trees, Random Forests, Support Vector Machines (SVM), Neural Networks</p>

                <h4>2. Unsupervised Learning</h4>
                <p>Unsupervised learning works with unlabeled data, finding hidden patterns and structures without predefined categories.</p>
                <ul>
                    <li><strong>Clustering:</strong> Grouping similar data points together (e.g., customer segmentation)</li>
                    <li><strong>Dimensionality Reduction:</strong> Reducing the number of features while preserving important information</li>
                    <li><strong>Anomaly Detection:</strong> Identifying unusual patterns in data</li>
                </ul>
                <p><strong>Common Algorithms:</strong> K-Means, Hierarchical Clustering, DBSCAN, Principal Component Analysis (PCA), Autoencoders</p>

                <h4>3. Reinforcement Learning</h4>
                <p>Reinforcement learning involves an agent learning to make decisions by interacting with an environment, receiving rewards or penalties for actions taken.</p>
                <p><strong>Key Concepts:</strong> Agent, Environment, State, Action, Reward, Policy</p>
                <p><strong>Applications:</strong> Game playing, robotics, autonomous vehicles, resource management</p>

                <h3>The Machine Learning Workflow</h3>
                <ol>
                    <li><strong>Problem Definition:</strong> Clearly define what you're trying to predict or understand</li>
                    <li><strong>Data Collection:</strong> Gather relevant, high-quality data</li>
                    <li><strong>Data Exploration & Preprocessing:</strong> Understand your data, handle missing values, normalize features</li>
                    <li><strong>Feature Engineering:</strong> Create meaningful features that help the model learn</li>
                    <li><strong>Model Selection:</strong> Choose appropriate algorithms based on your problem</li>
                    <li><strong>Training:</strong> Feed data to the algorithm so it can learn patterns</li>
                    <li><strong>Evaluation:</strong> Assess model performance using appropriate metrics</li>
                    <li><strong>Hyperparameter Tuning:</strong> Optimize model parameters for better performance</li>
                    <li><strong>Deployment:</strong> Put the model into production</li>
                    <li><strong>Monitoring & Maintenance:</strong> Track performance and update as needed</li>
                </ol>

                <h3>Key Concepts in Machine Learning</h3>

                <h4>Overfitting and Underfitting</h4>
                <p><strong>Overfitting:</strong> When a model learns the training data too well, including its noise and outliers, performing poorly on new data.</p>
                <p><strong>Underfitting:</strong> When a model is too simple to capture the underlying patterns in the data.</p>
                <p><strong>The Goal:</strong> Find the right balance (bias-variance tradeoff) for optimal generalization.</p>

                <h4>Training, Validation, and Test Sets</h4>
                <ul>
                    <li><strong>Training Set:</strong> Data used to train the model (typically 60-80%)</li>
                    <li><strong>Validation Set:</strong> Data used to tune hyperparameters and prevent overfitting (10-20%)</li>
                    <li><strong>Test Set:</strong> Data used to evaluate final model performance (10-20%)</li>
                </ul>

                <h4>Evaluation Metrics</h4>
                <p><strong>For Classification:</strong></p>
                <ul>
                    <li>Accuracy: Percentage of correct predictions</li>
                    <li>Precision: True positives / (True positives + False positives)</li>
                    <li>Recall: True positives / (True positives + False negatives)</li>
                    <li>F1-Score: Harmonic mean of precision and recall</li>
                    <li>ROC-AUC: Area under the receiver operating characteristic curve</li>
                </ul>
                <p><strong>For Regression:</strong></p>
                <ul>
                    <li>Mean Absolute Error (MAE)</li>
                    <li>Mean Squared Error (MSE)</li>
                    <li>Root Mean Squared Error (RMSE)</li>
                    <li>R-squared (R²)</li>
                </ul>

                <h3>Popular Machine Learning Libraries</h3>
                <ul>
                    <li><strong>Scikit-learn:</strong> Comprehensive library for traditional ML algorithms</li>
                    <li><strong>TensorFlow:</strong> Google's framework for deep learning</li>
                    <li><strong>PyTorch:</strong> Facebook's flexible deep learning framework</li>
                    <li><strong>Keras:</strong> High-level neural networks API</li>
                    <li><strong>XGBoost:</strong> Optimized gradient boosting library</li>
                </ul>

                <h3>Real-World Applications</h3>
                <ul>
                    <li><strong>Image Recognition:</strong> Facebook's photo tagging, Google Photos organization</li>
                    <li><strong>Natural Language Processing:</strong> Siri, Alexa, Google Translate</li>
                    <li><strong>Recommendation Systems:</strong> Netflix, Amazon, Spotify recommendations</li>
                    <li><strong>Fraud Detection:</strong> Credit card fraud detection, insurance claim analysis</li>
                    <li><strong>Medical Diagnosis:</strong> Cancer detection, disease prediction</li>
                    <li><strong>Autonomous Vehicles:</strong> Self-driving cars, drones</li>
                </ul>

                <h3>Best Practices</h3>
                <ol>
                    <li>Start with simple models before moving to complex ones</li>
                    <li>Ensure you have enough quality data</li>
                    <li>Use cross-validation for robust evaluation</li>
                    <li>Feature engineering often matters more than algorithm choice</li>
                    <li>Regularization helps prevent overfitting</li>
                    <li>Always validate on unseen data</li>
                    <li>Document your experiments and results</li>
                    <li>Consider computational costs and deployment constraints</li>
                </ol>

                <h3>Common Challenges</h3>
                <ul>
                    <li><strong>Data Quality:</strong> Missing values, outliers, noise</li>
                    <li><strong>Imbalanced Datasets:</strong> When some classes have very few examples</li>
                    <li><strong>Feature Selection:</strong> Choosing the most relevant features</li>
                    <li><strong>Interpretability:</strong> Understanding why models make certain predictions</li>
                    <li><strong>Scalability:</strong> Handling large datasets efficiently</li>
                </ul>

                <h3>The Path Forward</h3>
                <p>Machine Learning is a vast field that combines computer science, statistics, and domain expertise. Success in ML requires:</p>
                <ul>
                    <li>Strong mathematical foundation</li>
                    <li>Programming proficiency</li>
                    <li>Understanding of algorithms and their limitations</li>
                    <li>Practical experience with real-world datasets</li>
                    <li>Continuous learning and experimentation</li>
                </ul>

                <p>As you progress in your machine learning journey, you'll discover that the field is constantly evolving, with new algorithms, techniques, and applications emerging regularly. The key is to build a strong foundation in the fundamentals while staying curious and adaptable to new developments.</p>
            `,
            readTime: '18 min',
            level: 'Beginner'
        },
        {
            id: 'b3',
            title: 'What is Generative AI?',
            icon: '✨',
            description: 'Explore the exciting world of generative AI and how it creates new content from learned patterns.',
            content: `
                <h2>Understanding Generative AI</h2>
                <p>Generative AI represents a paradigm shift in artificial intelligence, moving from systems that merely recognize and classify to systems that create. It's the technology behind tools like ChatGPT, DALL-E, Midjourney, and countless other applications that are transforming how we create content, solve problems, and interact with technology.</p>

                <h3>What Makes AI "Generative"?</h3>
                <p>Generative AI refers to artificial intelligence systems that can create new content—whether text, images, audio, video, or code—that is similar to but distinct from the data they were trained on. Unlike traditional AI that focuses on analysis and prediction, generative AI synthesizes new outputs.</p>

                <h3>The Evolution to Generative AI</h3>
                <p>The journey to modern generative AI includes several key milestones:</p>
                <ul>
                    <li><strong>Early Neural Networks (1980s-1990s):</strong> Basic networks that could learn simple patterns</li>
                    <li><strong>Autoencoders (2000s):</strong> Networks that learned to compress and reconstruct data</li>
                    <li><strong>GANs - Generative Adversarial Networks (2014):</strong> Revolutionary architecture where two networks compete</li>
                    <li><strong>Transformer Architecture (2017):</strong> Attention mechanisms that transformed NLP</li>
                    <li><strong>Large Language Models (2018-present):</strong> GPT series, BERT, and others that can understand and generate human-like text</li>
                    <li><strong>Diffusion Models (2020-present):</strong> New approach powering state-of-the-art image generation</li>
                </ul>

                <h3>Core Technologies Behind Generative AI</h3>

                <h4>1. Generative Adversarial Networks (GANs)</h4>
                <p>GANs consist of two neural networks competing against each other:</p>
                <ul>
                    <li><strong>Generator:</strong> Creates fake data trying to fool the discriminator</li>
                    <li><strong>Discriminator:</strong> Tries to distinguish real data from generated data</li>
                </ul>
                <p>This adversarial process leads to increasingly realistic generated content.</p>
                <p><strong>Applications:</strong> Image generation, style transfer, image-to-image translation, super-resolution</p>

                <h4>2. Variational Autoencoders (VAEs)</h4>
                <p>VAEs learn to encode data into a compressed representation and then decode it back, enabling generation of new samples from the learned distribution.</p>
                <p><strong>Advantages:</strong> More stable training than GANs, better at learning data distributions</p>
                <p><strong>Applications:</strong> Image generation, anomaly detection, data compression</p>

                <h4>3. Transformer Models</h4>
                <p>Transformers use attention mechanisms to understand relationships in sequential data.</p>
                <p><strong>Key Innovation:</strong> Self-attention allows the model to weigh the importance of different parts of the input</p>
                <p><strong>Applications:</strong> Text generation, translation, summarization, question answering</p>

                <h4>4. Diffusion Models</h4>
                <p>Diffusion models learn to gradually denoise data, starting from random noise and iteratively refining it into coherent outputs.</p>
                <p><strong>Advantages:</strong> High-quality outputs, stable training, diverse generation</p>
                <p><strong>Applications:</strong> Image generation (DALL-E 2, Stable Diffusion, Midjourney), audio generation</p>

                <h3>Types of Generative AI</h3>

                <h4>Text Generation</h4>
                <p>Large Language Models (LLMs) can generate human-like text for various purposes:</p>
                <ul>
                    <li>Content writing and copywriting</li>
                    <li>Code generation and debugging</li>
                    <li>Conversation and chatbots</li>
                    <li>Translation and summarization</li>
                    <li>Creative writing (stories, poems, scripts)</li>
                </ul>
                <p><strong>Examples:</strong> GPT-4, Claude, Gemini, LLaMA</p>

                <h4>Image Generation</h4>
                <p>AI systems that create images from text descriptions or other inputs:</p>
                <ul>
                    <li>Text-to-image generation</li>
                    <li>Image editing and manipulation</li>
                    <li>Style transfer</li>
                    <li>Image inpainting and outpainting</li>
                    <li>Super-resolution</li>
                </ul>
                <p><strong>Examples:</strong> DALL-E 3, Midjourney, Stable Diffusion, Adobe Firefly</p>

                <h4>Audio Generation</h4>
                <p>Creating music, speech, and sound effects:</p>
                <ul>
                    <li>Text-to-speech synthesis</li>
                    <li>Music composition</li>
                    <li>Voice cloning</li>
                    <li>Sound effect generation</li>
                </ul>
                <p><strong>Examples:</strong> ElevenLabs, Murf.ai, MusicLM, Jukebox</p>

                <h4>Video Generation</h4>
                <p>Creating and editing video content:</p>
                <ul>
                    <li>Text-to-video generation</li>
                    <li>Video editing and enhancement</li>
                    <li>Animation creation</li>
                    <li>Deepfakes (for legitimate purposes)</li>
                </ul>
                <p><strong>Examples:</strong> Runway, Pika, Synthesia</p>

                <h4>Code Generation</h4>
                <p>AI systems that write and debug code:</p>
                <ul>
                    <li>Code completion and suggestion</li>
                    <li>Entire function/program generation</li>
                    <li>Code explanation and documentation</li>
                    <li>Bug detection and fixing</li>
                </ul>
                <p><strong>Examples:</strong> GitHub Copilot, Amazon CodeWhisperer, Tabnine</p>

                <h3>How Generative AI Works</h3>
                <ol>
                    <li><strong>Training Phase:</strong>
                        <ul>
                            <li>Model learns patterns from massive datasets</li>
                            <li>Adjusts billions of parameters to minimize prediction errors</li>
                            <li>Develops understanding of relationships and structures in data</li>
                        </ul>
                    </li>
                    <li><strong>Generation Phase:</strong>
                        <ul>
                            <li>Takes input (prompt, parameters, or random noise)</li>
                            <li>Uses learned patterns to generate new content</li>
                            <li>Refines output based on constraints and objectives</li>
                        </ul>
                    </li>
                </ol>

                <h3>Key Capabilities</h3>
                <ul>
                    <li><strong>Creativity:</strong> Generating novel ideas and content</li>
                    <li><strong>Understanding Context:</strong> Grasping nuanced meanings and relationships</li>
                    <li><strong>Multimodal Processing:</strong> Working across text, images, audio</li>
                    <li><strong>Adaptation:</strong> Adjusting outputs based on feedback</li>
                    <li><strong>Personalization:</strong> Tailoring content to specific needs</li>
                </ul>

                <h3>Real-World Applications</h3>
                <ul>
                    <li><strong>Content Creation:</strong> Marketing copy, blog posts, social media content</li>
                    <li><strong>Design:</strong> Logos, graphics, product mockups</li>
                    <li><strong>Software Development:</strong> Code generation, testing, documentation</li>
                    <li><strong>Education:</strong> Personalized tutoring, content generation, assessment</li>
                    <li><strong>Healthcare:</strong> Drug discovery, medical imaging, patient interaction</li>
                    <li><strong>Entertainment:</strong> Game content, character generation, storylines</li>
                    <li><strong>Business:</strong> Report generation, data analysis, customer service</li>
                </ul>

                <h3>Limitations and Challenges</h3>
                <ul>
                    <li><strong>Hallucinations:</strong> Generating plausible but incorrect information</li>
                    <li><strong>Bias:</strong> Reflecting biases present in training data</li>
                    <li><strong>Lack of True Understanding:</strong> Pattern matching without genuine comprehension</li>
                    <li><strong>Computational Cost:</strong> Requiring significant computing resources</li>
                    <li><strong>Copyright and Ownership:</strong> Questions about AI-generated content rights</li>
                    <li><strong>Quality Control:</strong> Ensuring consistency and accuracy</li>
                    <li><strong>Ethical Concerns:</strong> Deepfakes, misinformation, job displacement</li>
                </ul>

                <h3>Ethical Considerations</h3>
                <p>As generative AI becomes more powerful, important ethical questions arise:</p>
                <ul>
                    <li>How do we prevent misuse for creating misleading content?</li>
                    <li>What are the copyright implications of AI-generated content?</li>
                    <li>How do we ensure AI systems don't perpetuate harmful biases?</li>
                    <li>What happens to creative professionals as AI becomes more capable?</li>
                    <li>How do we maintain authenticity in an age of AI-generated content?</li>
                </ul>

                <h3>The Future of Generative AI</h3>
                <p>Generative AI is rapidly evolving, with several exciting trends:</p>
                <ul>
                    <li><strong>Multimodal Models:</strong> Single models handling text, images, audio, and video</li>
                    <li><strong>Improved Control:</strong> More precise control over generated outputs</li>
                    <li><strong>Efficiency:</strong> Smaller, faster models that can run on consumer hardware</li>
                    <li><strong>Personalization:</strong> Models that adapt to individual users and contexts</li>
                    <li><strong>Integration:</strong> Seamless incorporation into everyday tools and workflows</li>
                </ul>

                <h3>Getting Started with Generative AI</h3>
                <p>To work with generative AI:</p>
                <ol>
                    <li>Understand the basics of neural networks and deep learning</li>
                    <li>Learn about specific architectures (Transformers, GANs, Diffusion Models)</li>
                    <li>Experiment with available tools and APIs</li>
                    <li>Practice prompt engineering for better outputs</li>
                    <li>Stay updated on the latest developments</li>
                    <li>Consider ethical implications in your applications</li>
                </ol>

                <h3>Conclusion</h3>
                <p>Generative AI represents a fundamental shift in how we interact with technology and create content. While it brings tremendous opportunities for productivity and creativity, it also raises important questions about authenticity, ownership, and societal impact. Understanding generative AI—its capabilities, limitations, and implications—is increasingly important for everyone, whether you're a developer, creator, business person, or simply a curious individual navigating our AI-augmented world.</p>
            `,
            readTime: '20 min',
            level: 'Beginner'
        }
        // Additional beginner concepts will be added in continuation
    ],
    intermediate: [],
    advanced: []
};

// Continuing with more beginner concepts...
genAIConcepts.beginner.push(...[
    {
        id: 'b4',
        title: 'Neural Networks Fundamentals',
        icon: '🕸️',
        description: 'Deep dive into the building blocks of deep learning - neurons, layers, and how they process information.',
        content: `
            <h2>Neural Networks: The Foundation of Modern AI</h2>
            <p>Neural networks are the backbone of modern artificial intelligence, inspired by the human brain's structure. They've enabled breakthroughs in computer vision, natural language processing, and generative AI.</p>

            <h3>What is a Neural Network?</h3>
            <p>A neural network is a computational model consisting of interconnected nodes (neurons) organized in layers. Each connection has a weight that adjusts during training, allowing the network to learn patterns from data.</p>

            <h3>Biological Inspiration</h3>
            <p>While not perfect replicas of biological brains, neural networks draw inspiration from:</p>
            <ul>
                <li><strong>Neurons:</strong> Basic processing units that receive inputs and generate outputs</li>
                <li><strong>Synapses:</strong> Connections between neurons with varying strengths (weights)</li>
                <li><strong>Activation:</strong> Neurons fire when stimulation exceeds a threshold</li>
            </ul>

            <h3>Architecture of a Neural Network</h3>
            <h4>1. Input Layer</h4>
            <p>Receives raw data (images, text, numbers). Each neuron represents one feature of the input.</p>

            <h4>2. Hidden Layers</h4>
            <p>Process and transform the input data. Deep networks have multiple hidden layers, each learning increasingly complex features:</p>
            <ul>
                <li>First layer: Simple features (edges, colors, basic patterns)</li>
                <li>Middle layers: Combinations of simple features</li>
                <li>Deeper layers: High-level abstractions and concepts</li>
            </ul>

            <h4>3. Output Layer</h4>
            <p>Produces the final prediction or classification. The number of neurons depends on the task (e.g., 10 neurons for digit classification 0-9).</p>

            <h3>How a Neuron Works</h3>
            <pre><code>
Output = Activation(Sum(Inputs × Weights) + Bias)

Example:
Input1 * Weight1 + Input2 * Weight2 + ... + Bias → Activation Function → Output
            </code></pre>

            <h3>Activation Functions</h3>
            <p>Activation functions introduce non-linearity, enabling networks to learn complex patterns:</p>

            <h4>Common Activation Functions:</h4>
            <ul>
                <li><strong>ReLU (Rectified Linear Unit):</strong> f(x) = max(0, x)
                    <ul>
                        <li>Most popular for hidden layers</li>
                        <li>Computationally efficient</li>
                        <li>Helps with gradient flow</li>
                    </ul>
                </li>
                <li><strong>Sigmoid:</strong> f(x) = 1 / (1 + e^(-x))
                    <ul>
                        <li>Outputs between 0 and 1</li>
                        <li>Good for binary classification output</li>
                    </ul>
                </li>
                <li><strong>Tanh:</strong> f(x) = (e^x - e^(-x)) / (e^x + e^(-x))
                    <ul>
                        <li>Outputs between -1 and 1</li>
                        <li>Zero-centered, often better than sigmoid</li>
                    </ul>
                </li>
                <li><strong>Softmax:</strong> Converts logits to probabilities
                    <ul>
                        <li>Used in output layer for multi-class classification</li>
                        <li>Outputs sum to 1</li>
                    </ul>
                </li>
            </ul>

            <h3>Training Process: Backpropagation</h3>
            <ol>
                <li><strong>Forward Pass:</strong>
                    <ul>
                        <li>Input data flows through the network</li>
                        <li>Each layer computes outputs based on current weights</li>
                        <li>Final layer produces a prediction</li>
                    </ul>
                </li>
                <li><strong>Calculate Loss:</strong>
                    <ul>
                        <li>Compare prediction to actual target</li>
                        <li>Loss function quantifies the error</li>
                    </ul>
                </li>
                <li><strong>Backward Pass:</strong>
                    <ul>
                        <li>Calculate gradients of loss with respect to weights</li>
                        <li>Propagate error backward through network</li>
                        <li>Use chain rule to compute gradients</li>
                    </ul>
                </li>
                <li><strong>Update Weights:</strong>
                    <ul>
                        <li>Adjust weights to minimize loss</li>
                        <li>Use optimization algorithm (e.g., SGD, Adam)</li>
                    </ul>
                </li>
            </ol>

            <h3>Loss Functions</h3>
            <p><strong>For Regression:</strong></p>
            <ul>
                <li>Mean Squared Error (MSE)</li>
                <li>Mean Absolute Error (MAE)</li>
                <li>Huber Loss</li>
            </ul>
            <p><strong>For Classification:</strong></p>
            <ul>
                <li>Binary Cross-Entropy</li>
                <li>Categorical Cross-Entropy</li>
                <li>Sparse Categorical Cross-Entropy</li>
            </ul>

            <h3>Optimization Algorithms</h3>
            <ul>
                <li><strong>SGD (Stochastic Gradient Descent):</strong> Basic but effective</li>
                <li><strong>Momentum:</strong> Accelerates SGD by accumulating velocity</li>
                <li><strong>Adam:</strong> Adaptive learning rates, most popular choice</li>
                <li><strong>RMSprop:</strong> Adapts learning rate for each parameter</li>
                <li><strong>AdaGrad:</strong> Adapts learning rate based on historical gradients</li>
            </ul>

            <h3>Key Hyperparameters</h3>
            <ul>
                <li><strong>Learning Rate:</strong> Step size for weight updates (typically 0.001-0.1)</li>
                <li><strong>Batch Size:</strong> Number of samples per gradient update (32, 64, 128, 256)</li>
                <li><strong>Epochs:</strong> Number of complete passes through training data</li>
                <li><strong>Number of Layers:</strong> Network depth</li>
                <li><strong>Number of Neurons:</strong> Width of each layer</li>
                <li><strong>Dropout Rate:</strong> Fraction of neurons to randomly disable (regularization)</li>
            </ul>

            <h3>Types of Neural Networks</h3>
            <ul>
                <li><strong>Feedforward Neural Networks (FNN):</strong> Information flows in one direction</li>
                <li><strong>Convolutional Neural Networks (CNN):</strong> Specialized for image data</li>
                <li><strong>Recurrent Neural Networks (RNN):</strong> Process sequential data</li>
                <li><strong>Long Short-Term Memory (LSTM):</strong> Advanced RNN for long sequences</li>
                <li><strong>Transformer Networks:</strong> Attention-based architecture</li>
            </ul>

            <h3>Common Challenges</h3>
            <ul>
                <li><strong>Vanishing Gradients:</strong> Gradients become too small in deep networks
                    <ul>
                        <li>Solutions: ReLU activation, skip connections, batch normalization</li>
                    </ul>
                </li>
                <li><strong>Exploding Gradients:</strong> Gradients become too large
                    <ul>
                        <li>Solutions: Gradient clipping, proper weight initialization</li>
                    </ul>
                </li>
                <li><strong>Overfitting:</strong> Model learns training data too well
                    <ul>
                        <li>Solutions: Dropout, regularization, more data, data augmentation</li>
                    </ul>
                </li>
            </ul>

            <h3>Best Practices</h3>
            <ol>
                <li>Start with simple architectures and gradually increase complexity</li>
                <li>Use proper weight initialization (Xavier/He initialization)</li>
                <li>Normalize input data (standardization or min-max scaling)</li>
                <li>Monitor both training and validation loss</li>
                <li>Use batch normalization for stable training</li>
                <li>Implement early stopping to prevent overfitting</li>
                <li>Experiment with different architectures and hyperparameters</li>
                <li>Use pre-trained models when possible (transfer learning)</li>
            </ol>

            <h3>Building Your First Neural Network</h3>
            <pre><code>
import tensorflow as tf
from tensorflow import keras

# Simple feedforward network
model = keras.Sequential([
    keras.layers.Dense(128, activation='relu', input_shape=(784,)),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(64, activation='relu'),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(10, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

model.fit(x_train, y_train, epochs=10, validation_split=0.2)
            </code></pre>

            <h3>The Future of Neural Networks</h3>
            <p>Neural networks continue to evolve with:</p>
            <ul>
                <li>More efficient architectures requiring less computation</li>
                <li>Better understanding of how and why they work</li>
                <li>Improved interpretability and explainability</li>
                <li>Novel architectures for specific domains</li>
                <li>Integration with other AI techniques</li>
            </ul>

            <h3>Conclusion</h3>
            <p>Neural networks are powerful tools that have revolutionized AI. Understanding their fundamentals—from individual neurons to complex architectures—is essential for anyone working in modern AI. While they can seem complex at first, the basic principles are straightforward, and with practice, you'll develop intuition for designing and training effective neural networks.</p>
        `,
        readTime: '16 min',
        level: 'Beginner'
    },
    {
        id: 'b5',
        title: 'Large Language Models (LLMs)',
        icon: '📝',
        description: 'Understanding the architecture and capabilities of models like GPT, BERT, and their applications.',
        content: `
            <h2>Large Language Models: The AI Language Revolution</h2>
            <p>Large Language Models (LLMs) represent one of the most significant breakthroughs in artificial intelligence, enabling machines to understand and generate human-like text at an unprecedented scale and quality.</p>

            <h3>What are Large Language Models?</h3>
            <p>LLMs are neural networks trained on massive amounts of text data to understand and generate language. They learn patterns, grammar, facts, reasoning abilities, and even some common-sense knowledge from their training data.</p>

            <h3>Key Characteristics</h3>
            <ul>
                <li><strong>Scale:</strong> Billions or trillions of parameters (trainable weights)</li>
                <li><strong>Training Data:</strong> Trained on massive text corpora (books, websites, articles)</li>
                <li><strong>Capabilities:</strong> Can perform diverse language tasks without task-specific training</li>
                <li><strong>Architecture:</strong> Typically based on the Transformer architecture</li>
            </ul>

            <h3>The Transformer Revolution</h3>
            <p>The Transformer architecture, introduced in 2017's "Attention Is All You Need" paper, became the foundation for modern LLMs.</p>

            <h4>Key Innovations:</h4>
            <ul>
                <li><strong>Self-Attention Mechanism:</strong> Allows the model to weigh the importance of different words in context</li>
                <li><strong>Parallel Processing:</strong> Unlike RNNs, can process entire sequences simultaneously</li>
                <li><strong>Positional Encoding:</strong> Maintains word order information</li>
                <li><strong>Multi-Head Attention:</strong> Learns different types of relationships simultaneously</li>
            </ul>

            <h3>Evolution of LLMs</h3>
            <h4>Generation 1: Early Transformers (2017-2018)</h4>
            <ul>
                <li><strong>Original Transformer:</strong> 65M parameters, primarily for translation</li>
                <li><strong>GPT-1:</strong> 117M parameters, demonstrated generative pre-training</li>
                <li><strong>BERT:</strong> 340M parameters, bidirectional understanding</li>
            </ul>

            <h4>Generation 2: Scaling Up (2019-2020)</h4>
            <ul>
                <li><strong>GPT-2:</strong> 1.5B parameters, impressive text generation</li>
                <li><strong>T5:</strong> 11B parameters, unified text-to-text framework</li>
                <li><strong>RoBERTa:</strong> Optimized BERT training</li>
            </ul>

            <h4>Generation 3: Massive Scale (2020-2022)</h4>
            <ul>
                <li><strong>GPT-3:</strong> 175B parameters, few-shot learning capabilities</li>
                <li><strong>PaLM:</strong> 540B parameters, improved reasoning</li>
                <li><strong>Gopher:</strong> 280B parameters, strong retrieval abilities</li>
            </ul>

            <h4>Generation 4: Optimization & Alignment (2022-Present)</h4>
            <ul>
                <li><strong>GPT-4:</strong> Multimodal, improved reasoning and reliability</li>
                <li><strong>Claude:</strong> Focused on helpfulness, harmlessness, and honesty</li>
                <li><strong>LLaMA:</strong> Open-source efficient models</li>
                <li><strong>Gemini:</strong> Google's multimodal AI</li>
            </ul>

            <h3>How LLMs Work</h3>

            <h4>Training Process:</h4>
            <ol>
                <li><strong>Data Collection:</strong> Gather massive text datasets (web pages, books, code)</li>
                <li><strong>Pre-training:</strong> Train model to predict next tokens (words/subwords)
                    <ul>
                        <li>Unsupervised learning from raw text</li>
                        <li>Learns language patterns, facts, and reasoning</li>
                        <li>Computationally expensive (millions of dollars)</li>
                    </ul>
                </li>
                <li><strong>Fine-tuning:</strong> Adapt model for specific tasks
                    <ul>
                        <li>Supervised fine-tuning on task-specific data</li>
                        <li>Instruction tuning for following instructions</li>
                    </ul>
                </li>
                <li><strong>Alignment:</strong> Make model behavior safe and useful
                    <ul>
                        <li>Reinforcement Learning from Human Feedback (RLHF)</li>
                        <li>Constitutional AI</li>
                        <li>Direct Preference Optimization (DPO)</li>
                    </ul>
                </li>
            </ol>

            <h4>Inference (Generation):</h4>
            <ol>
                <li>Receive input prompt</li>
                <li>Tokenize input into subword units</li>
                <li>Process through transformer layers</li>
                <li>Generate probability distribution over possible next tokens</li>
                <li>Sample next token (with temperature, top-k, top-p)</li>
                <li>Repeat until completion signal or max length</li>
            </ol>

            <h3>Key Capabilities</h3>
            <ul>
                <li><strong>Text Generation:</strong> Creating coherent, contextually appropriate text</li>
                <li><strong>Question Answering:</strong> Providing informative responses</li>
                <li><strong>Summarization:</strong> Condensing long texts into key points</li>
                <li><strong>Translation:</strong> Converting between languages</li>
                <li><strong>Code Generation:</strong> Writing and debugging code</li>
                <li><strong>Reasoning:</strong> Following logical chains of thought</li>
                <li><strong>Task Completion:</strong> Following complex instructions</li>
                <li><strong>Creative Writing:</strong> Generating stories, poems, dialogue</li>
            </ul>

            <h3>Prompt Engineering</h3>
            <p>Crafting effective prompts is crucial for getting good results from LLMs:</p>

            <h4>Basic Techniques:</h4>
            <ul>
                <li><strong>Clear Instructions:</strong> Be specific about what you want</li>
                <li><strong>Context Provision:</strong> Give relevant background information</li>
                <li><strong>Format Specification:</strong> Specify desired output format</li>
                <li><strong>Examples (Few-Shot):</strong> Provide examples of desired behavior</li>
            </ul>

            <h4>Advanced Techniques:</h4>
            <ul>
                <li><strong>Chain-of-Thought:</strong> Ask model to explain reasoning step-by-step</li>
                <li><strong>Role Playing:</strong> Assign the model a specific persona</li>
                <li><strong>Constraints:</strong> Define boundaries and limitations</li>
                <li><strong>Iteration:</strong> Refine prompts based on outputs</li>
            </ul>

            <h3>Popular LLMs and Their Strengths</h3>

            <h4>GPT-4 (OpenAI)</h4>
            <ul>
                <li>Strengths: Broad knowledge, creative tasks, code generation</li>
                <li>Use cases: General purpose, ChatGPT, development tools</li>
            </ul>

            <h4>Claude (Anthropic)</h4>
            <ul>
                <li>Strengths: Long context, analysis, careful reasoning</li>
                <li>Use cases: Document analysis, complex reasoning, safer interactions</li>
            </ul>

            <h4>Gemini (Google)</h4>
            <ul>
                <li>Strengths: Multimodal understanding, integration with Google services</li>
                <li>Use cases: Search, analysis, creative tasks</li>
            </ul>

            <h4>LLaMA (Meta)</h4>
            <ul>
                <li>Strengths: Open-source, efficient, customizable</li>
                <li>Use cases: Research, custom applications, on-premise deployment</li>
            </ul>

            <h3>Limitations and Challenges</h3>
            <ul>
                <li><strong>Hallucinations:</strong> Generating false or nonsensical information confidently</li>
                <li><strong>Knowledge Cutoff:</strong> Limited to training data up to a certain date</li>
                <li><strong>Reasoning Limitations:</strong> Can make logical errors, especially in complex scenarios</li>
                <li><strong>Bias:</strong> Can reflect biases in training data</li>
                <li><strong>Context Window:</strong> Limited by maximum input/output length</li>
                <li><strong>Computational Cost:</strong> Expensive to train and run</li>
                <li><strong>Lack of Grounding:</strong> No real-world experience or verification</li>
            </ul>

            <h3>Applications Across Industries</h3>

            <h4>Software Development</h4>
            <ul>
                <li>Code generation and completion</li>
                <li>Bug detection and fixing</li>
                <li>Documentation generation</li>
                <li>Code review and refactoring</li>
            </ul>

            <h4>Content Creation</h4>
            <ul>
                <li>Blog posts and articles</li>
                <li>Marketing copy</li>
                <li>Social media content</li>
                <li>Creative writing</li>
            </ul>

            <h4>Customer Service</h4>
            <ul>
                <li>Chatbots and virtual assistants</li>
                <li>Automated email responses</li>
                <li>FAQ systems</li>
                <li>Sentiment analysis</li>
            </ul>

            <h4>Education</h4>
            <ul>
                <li>Personalized tutoring</li>
                <li>Content generation</li>
                <li>Assessment creation</li>
                <li>Language learning</li>
            </ul>

            <h4>Research</h4>
            <ul>
                <li>Literature review</li>
                <li>Hypothesis generation</li>
                <li>Data analysis explanation</li>
                <li>Writing assistance</li>
            </ul>

            <h3>Technical Considerations</h3>

            <h4>Deployment Options:</h4>
            <ul>
                <li><strong>API Services:</strong> OpenAI API, Anthropic API (easiest, most expensive)</li>
                <li><strong>Managed Services:</strong> AWS Bedrock, Azure OpenAI (enterprise-grade)</li>
                <li><strong>Self-Hosted:</strong> LLaMA, Mistral (full control, requires infrastructure)</li>
            </ul>

            <h4>Optimization Techniques:</h4>
            <ul>
                <li><strong>Quantization:</strong> Reducing precision to save memory</li>
                <li><strong>Distillation:</strong> Creating smaller models that mimic larger ones</li>
                <li><strong>Pruning:</strong> Removing unnecessary connections</li>
                <li><strong>Caching:</strong> Storing common responses</li>
            </ul>

            <h3>Future Directions</h3>
            <ul>
                <li><strong>Multimodality:</strong> Better integration of text, images, audio, video</li>
                <li><strong>Efficiency:</strong> Smaller models with equivalent capabilities</li>
                <li><strong>Reasoning:</strong> Improved logical and mathematical reasoning</li>
                <li><strong>Factuality:</strong> Better grounding in verified information</li>
                <li><strong>Personalization:</strong> Models that adapt to individual users</li>
                <li><strong>Agent Capabilities:</strong> LLMs that can use tools and take actions</li>
            </ul>

            <h3>Best Practices for Working with LLMs</h3>
            <ol>
                <li>Always verify factual information from reliable sources</li>
                <li>Use clear, specific prompts for better results</li>
                <li>Implement safety guardrails for production systems</li>
                <li>Monitor costs and optimize usage patterns</li>
                <li>Keep user data private and secure</li>
                <li>Stay updated on model capabilities and limitations</li>
                <li>Test thoroughly before deployment</li>
                <li>Have human oversight for critical applications</li>
            </ol>

            <h3>Conclusion</h3>
            <p>Large Language Models represent a paradigm shift in how we interact with computers and process information. They're powerful tools that can enhance productivity, creativity, and problem-solving across countless domains. However, they're not magic—understanding their capabilities, limitations, and proper use is essential for leveraging them effectively while avoiding pitfalls. As LLMs continue to evolve, staying informed about best practices and emerging techniques will be crucial for anyone working with these transformative technologies.</p>
        `,
        readTime: '22 min',
        level: 'Beginner'
    }
]);

// Continue adding more beginner concepts with full content
genAIConcepts.beginner.push(...[
    {
        id: 'b6',
        title: 'Tokens and Tokenization',
        icon: '🔤',
        description: 'Understanding how text is broken down into tokens for processing by AI models.',
        content: `
            <h2>Tokens and Tokenization in AI</h2>
            <p>Tokenization is a fundamental process in natural language processing and generative AI. It's how we convert human-readable text into a format that machines can understand and process. Think of it as breaking down language into digestible chunks that an AI model can work with.</p>

            <h3>What are Tokens?</h3>
            <p>Tokens are the basic units of text that AI models process. They can be:</p>
            <ul>
                <li><strong>Words:</strong> "hello", "world", "AI"</li>
                <li><strong>Subwords:</strong> "un", "break", "able" (from "unbreakable")</li>
                <li><strong>Characters:</strong> Individual letters or symbols</li>
                <li><strong>Special symbols:</strong> Punctuation, spaces, or control characters</li>
            </ul>

            <p>Most modern AI models use subword tokenization, which strikes a balance between vocabulary size and flexibility.</p>

            <h3>Why Tokenization Matters</h3>
            <ul>
                <li><strong>Model Input:</strong> Neural networks can't directly process text—they need numbers</li>
                <li><strong>Vocabulary Management:</strong> Limits the number of unique tokens a model needs to understand</li>
                <li><strong>Handling Unknown Words:</strong> Subword tokenization can represent rare or new words</li>
                <li><strong>Cost Calculation:</strong> API pricing is typically based on token count</li>
                <li><strong>Context Window:</strong> Model capacity is measured in tokens</li>
            </ul>

            <h3>Types of Tokenization</h3>

            <h4>1. Word-Level Tokenization</h4>
            <p>Splits text at word boundaries (spaces, punctuation).</p>
            <pre><code>
Input: "AI is amazing!"
Tokens: ["AI", "is", "amazing", "!"]
            </code></pre>
            <p><strong>Pros:</strong> Simple, intuitive<br>
            <strong>Cons:</strong> Huge vocabulary, can't handle unknown words</p>

            <h4>2. Character-Level Tokenization</h4>
            <p>Treats each character as a token.</p>
            <pre><code>
Input: "AI"
Tokens: ["A", "I"]
            </code></pre>
            <p><strong>Pros:</strong> Small vocabulary, no unknown words<br>
            <strong>Cons:</strong> Long sequences, loses word meaning</p>

            <h4>3. Subword Tokenization</h4>
            <p>Most popular approach, used by GPT, BERT, and other modern models.</p>

            <h5>BPE (Byte Pair Encoding)</h5>
            <p>Used by GPT models. Iteratively merges most frequent character pairs.</p>
            <pre><code>
Input: "unbreakable"
Tokens: ["un", "break", "able"]
            </code></pre>

            <h5>WordPiece</h5>
            <p>Used by BERT. Similar to BPE but optimizes for likelihood.</p>

            <h5>SentencePiece</h5>
            <p>Language-independent tokenization treating text as Unicode characters.</p>

            <h3>How Tokenization Works in Practice</h3>
            <pre><code>
Example with GPT-style tokenization:

Input: "I love learning about AI!"

Steps:
1. Text → ["I", " love", " learning", " about", " AI", "!"]
2. Convert to token IDs → [40, 1842, 4673, 546, 9552, 0]
3. Model processes IDs
4. Output IDs → [27, 1354, 2847, ...]
5. Decode back to text → "AI is fascinating because..."
            </code></pre>

            <h3>Token Count Examples</h3>
            <p>Understanding token counts is crucial for working with AI:</p>
            <ul>
                <li>"Hello" → 1 token</li>
                <li>"Hello, world!" → 4 tokens ["Hello", ",", " world", "!"]</li>
                <li>"unbelievable" → 2-3 tokens ["un", "believ", "able"] or ["un", "believable"]</li>
                <li>"🤖" → 1-2 tokens (emojis can be multiple tokens)</li>
            </ul>

            <h3>Rule of Thumb</h3>
            <p>In English:</p>
            <ul>
                <li>1 token ≈ 4 characters</li>
                <li>1 token ≈ ¾ of a word</li>
                <li>100 tokens ≈ 75 words</li>
                <li>1000 tokens ≈ 750 words</li>
            </ul>

            <h3>Special Tokens</h3>
            <p>Models use special tokens for specific purposes:</p>
            <ul>
                <li><strong>[CLS]:</strong> Classification token (BERT)</li>
                <li><strong>[SEP]:</strong> Separator between sentences</li>
                <li><strong>[PAD]:</strong> Padding for batch processing</li>
                <li><strong>[UNK]:</strong> Unknown token</li>
                <li><strong>[BOS]:</strong> Beginning of sequence</li>
                <li><strong>[EOS]:</strong> End of sequence</li>
            </ul>

            <h3>Context Windows and Tokens</h3>
            <p>Models have maximum token limits:</p>
            <ul>
                <li><strong>GPT-3.5:</strong> 4,096 or 16,384 tokens</li>
                <li><strong>GPT-4:</strong> 8,192 or 32,768 tokens (some versions: 128k)</li>
                <li><strong>Claude:</strong> 100,000+ tokens</li>
                <li><strong>Gemini:</strong> Up to 1 million tokens</li>
            </ul>

            <h3>Tokenization in Different Languages</h3>
            <p>Token counts vary by language:</p>
            <ul>
                <li><strong>English:</strong> Most efficient (models trained primarily on English)</li>
                <li><strong>Romance Languages:</strong> Slightly more tokens</li>
                <li><strong>Asian Languages:</strong> Can be 2-3x more tokens per word</li>
                <li><strong>Arabic, Hebrew:</strong> More tokens due to different scripts</li>
            </ul>

            <h3>Practical Implications</h3>

            <h4>Cost Management</h4>
            <p>Since pricing is per token:</p>
            <ul>
                <li>Concise prompts save money</li>
                <li>Consider token counts when choosing languages</li>
                <li>Batch similar requests to optimize cost</li>
            </ul>

            <h4>Context Window Management</h4>
            <pre><code>
# Example: Estimating if text fits in context
max_tokens = 4096
prompt_tokens = 500
response_tokens = 500
conversation_history_tokens = 2000

available = max_tokens - prompt_tokens - response_tokens
fits = conversation_history_tokens <= available  # True/False
            </code></pre>

            <h4>Prompt Engineering</h4>
            <p>Effective prompts consider tokenization:</p>
            <ul>
                <li>Shorter prompts → more tokens for response</li>
                <li>Clear formatting → better model understanding</li>
                <li>Consider token efficiency in examples</li>
            </ul>

            <h3>Tools for Tokenization</h3>
            <ul>
                <li><strong>tiktoken:</strong> OpenAI's tokenization library</li>
                <li><strong>Hugging Face Tokenizers:</strong> Fast tokenization for various models</li>
                <li><strong>SentencePiece:</strong> Google's tokenization library</li>
                <li><strong>Online Tools:</strong> OpenAI Tokenizer, Hugging Face spaces</li>
            </ul>

            <h3>Example Code</h3>
            <pre><code>
# Using tiktoken for GPT models
import tiktoken

encoding = tiktoken.encoding_for_model("gpt-4")
tokens = encoding.encode("Hello, how are you?")
print(f"Token IDs: {tokens}")
print(f"Token count: {len(tokens)}")

# Decode back to text
text = encoding.decode(tokens)
print(f"Decoded: {text}")
            </code></pre>

            <h3>Best Practices</h3>
            <ol>
                <li><strong>Monitor Token Usage:</strong> Track tokens to optimize costs and performance</li>
                <li><strong>Estimate Before Sending:</strong> Calculate token counts to avoid API errors</li>
                <li><strong>Be Concise:</strong> Every token counts toward limits and costs</li>
                <li><strong>Consider Batching:</strong> Process multiple items efficiently</li>
                <li><strong>Test Different Phrasings:</strong> Sometimes rewording saves tokens</li>
            </ol>

            <h3>Common Issues</h3>
            <ul>
                <li><strong>Token Limit Exceeded:</strong> Reduce input or split into multiple requests</li>
                <li><strong>Unexpected Costs:</strong> Long conversations accumulate tokens quickly</li>
                <li><strong>Context Loss:</strong> Conversations exceeding limits lose early messages</li>
                <li><strong>Language Efficiency:</strong> Non-English text uses more tokens</li>
            </ul>

            <h3>Future of Tokenization</h3>
            <p>Research is improving tokenization:</p>
            <ul>
                <li>More efficient tokenizers for multilingual support</li>
                <li>Better handling of code and structured data</li>
                <li>Reduced token counts for the same content</li>
                <li>Dynamic tokenization based on context</li>
            </ul>

            <h3>Conclusion</h3>
            <p>Tokenization is a crucial bridge between human language and AI models. Understanding how it works helps you write better prompts, manage costs, optimize performance, and work more effectively with AI systems. Whether you're using APIs, building applications, or just trying to understand AI better, knowledge of tokenization is invaluable.</p>
        `,
        readTime: '12 min',
        level: 'Beginner'
    },
    {
        id: 'b7',
        title: 'Training vs Inference',
        icon: '⚙️',
        description: 'Understanding the two main phases of working with AI models and their distinct characteristics.',
        content: `
            <h2>Training vs Inference: Two Phases of AI</h2>
            <p>Working with AI models involves two distinct phases: training and inference. Understanding the difference is crucial for anyone working with AI, as they require different resources, have different characteristics, and serve different purposes.</p>

            <h3>What is Training?</h3>
            <p>Training is the process of teaching an AI model to perform a task by showing it many examples. During training, the model learns patterns from data by adjusting billions of parameters (weights) to minimize errors.</p>

            <h4>The Training Process:</h4>
            <ol>
                <li><strong>Data Collection:</strong> Gather large datasets (millions to trillions of examples)</li>
                <li><strong>Initialization:</strong> Set initial random weights in the model</li>
                <li><strong>Forward Pass:</strong> Feed data through the model to get predictions</li>
                <li><strong>Calculate Loss:</strong> Measure how wrong the predictions are</li>
                <li><strong>Backward Pass:</strong> Calculate gradients (how to adjust weights)</li>
                <li><strong>Update Weights:</strong> Modify parameters to reduce loss</li>
                <li><strong>Repeat:</strong> Do this millions of times with different data</li>
            </ol>

            <h4>Training Characteristics:</h4>
            <ul>
                <li><strong>Time:</strong> Days to months (sometimes years for large models)</li>
                <li><strong>Cost:</strong> Expensive (thousands to millions of dollars)</li>
                <li><strong>Compute:</strong> Requires powerful GPUs/TPUs in clusters</li>
                <li><strong>Memory:</strong> Needs massive RAM and storage</li>
                <li><strong>Energy:</strong> High power consumption</li>
                <li><strong>Frequency:</strong> Done once or periodically</li>
                <li><strong>Goal:</strong> Create a model that generalizes well</li>
            </ul>

            <h4>Example Training Scenarios:</h4>
            <ul>
                <li><strong>GPT-4:</strong> Trained on hundreds of billions of tokens, cost estimated at $50-100 million</li>
                <li><strong>Stable Diffusion:</strong> Trained on billions of images for weeks</li>
                <li><strong>Small Custom Model:</strong> Might train on your laptop in hours</li>
            </ul>

            <h3>What is Inference?</h3>
            <p>Inference is using a trained model to make predictions on new, unseen data. This is the "production" phase where the model does useful work.</p>

            <h4>The Inference Process:</h4>
            <ol>
                <li><strong>Load Model:</strong> Load the trained model with its learned weights</li>
                <li><strong>Preprocess Input:</strong> Format the input data appropriately</li>
                <li><strong>Forward Pass:</strong> Run data through the model (no backward pass!)</li>
                <li><strong>Generate Output:</strong> Produce prediction or generation</li>
                <li><strong>Postprocess:</strong> Format output for end users</li>
            </ol>

            <h4>Inference Characteristics:</h4>
            <ul>
                <li><strong>Time:</strong> Milliseconds to seconds</li>
                <li><strong>Cost:</strong> Much cheaper per query</li>
                <li><strong>Compute:</strong> Can run on consumer hardware or cloud</li>
                <li><strong>Memory:</strong> Less memory needed than training</li>
                <li><strong>Energy:</strong> Much lower power consumption</li>
                <li><strong>Frequency:</strong> Continuous, millions of times per day</li>
                <li><strong>Goal:</strong> Fast, accurate predictions</li>
            </ul>

            <h4>Example Inference Scenarios:</h4>
            <ul>
                <li><strong>ChatGPT Response:</strong> Typically 1-5 seconds</li>
                <li><strong>Image Classification:</strong> Milliseconds</li>
                <li><strong>Real-time Translation:</strong> Near-instantaneous</li>
            </ul>

            <h3>Key Differences</h3>

            <table style="width: 100%; border-collapse: collapse; margin: 2rem 0;">
                <tr style="background: var(--bg-secondary);">
                    <th style="padding: 1rem; text-align: left; border-bottom: 2px solid var(--border-color);">Aspect</th>
                    <th style="padding: 1rem; text-align: left; border-bottom: 2px solid var(--border-color);">Training</th>
                    <th style="padding: 1rem; text-align: left; border-bottom: 2px solid var(--border-color);">Inference</th>
                </tr>
                <tr>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>Purpose</strong></td>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Learn patterns from data</td>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Make predictions</td>
                </tr>
                <tr>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>Duration</strong></td>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Days to months</td>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Milliseconds to seconds</td>
                </tr>
                <tr>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>Cost</strong></td>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">$1,000s - $millions</td>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">$0.0001 - $0.10 per query</td>
                </tr>
                <tr>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>Compute</strong></td>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Requires clusters of GPUs</td>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Single GPU or CPU</td>
                </tr>
                <tr>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>Memory</strong></td>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">100s of GB</td>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">10s of GB</td>
                </tr>
                <tr>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>Frequency</strong></td>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Once or periodic</td>
                    <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Continuous</td>
                </tr>
            </table>

            <h3>Types of Training</h3>

            <h4>1. Pre-training</h4>
            <p>Training a model from scratch on massive datasets.</p>
            <ul>
                <li>Used for foundation models (GPT, BERT)</li>
                <li>Requires enormous resources</li>
                <li>Done by large organizations</li>
            </ul>

            <h4>2. Fine-tuning</h4>
            <p>Adapting a pre-trained model to a specific task.</p>
            <ul>
                <li>Much cheaper than pre-training</li>
                <li>Can be done on consumer hardware</li>
                <li>Most common approach for custom applications</li>
            </ul>

            <h4>3. Transfer Learning</h4>
            <p>Using knowledge from one task to improve performance on another.</p>
            <ul>
                <li>Start with pre-trained model</li>
                <li>Adjust for new domain or task</li>
                <li>Significantly reduces training time and data requirements</li>
            </ul>

            <h3>Optimization Techniques</h3>

            <h4>Training Optimizations:</h4>
            <ul>
                <li><strong>Mixed Precision Training:</strong> Use FP16 instead of FP32 for faster computation</li>
                <li><strong>Gradient Accumulation:</strong> Simulate larger batches on limited memory</li>
                <li><strong>Distributed Training:</strong> Spread training across multiple GPUs/machines</li>
                <li><strong>Data Parallelism:</strong> Different GPUs process different data batches</li>
                <li><strong>Model Parallelism:</strong> Split model across multiple GPUs</li>
            </ul>

            <h4>Inference Optimizations:</h4>
            <ul>
                <li><strong>Quantization:</strong> Reduce precision (FP32 → INT8) for faster inference</li>
                <li><strong>Pruning:</strong> Remove unnecessary weights</li>
                <li><strong>Knowledge Distillation:</strong> Create smaller models that mimic larger ones</li>
                <li><strong>Batching:</strong> Process multiple requests together</li>
                <li><strong>Caching:</strong> Store common responses</li>
                <li><strong>Model Compilation:</strong> Optimize for specific hardware</li>
            </ul>

            <h3>Resource Requirements</h3>

            <h4>For Training Large Models:</h4>
            <pre><code>
GPT-3 Training Estimate:
- GPUs: 10,000+ NVIDIA V100s
- Time: Several weeks
- Data: 300 billion tokens
- Cost: $4-12 million
- Power: Megawatts

Your Custom Model:
- GPUs: 1-8 consumer GPUs
- Time: Hours to days
- Data: Thousands to millions of examples
- Cost: $100-$10,000
- Power: 300-2,400W
            </code></pre>

            <h4>For Inference:</h4>
            <pre><code>
Cloud API (OpenAI, Anthropic):
- No infrastructure needed
- Pay per token
- ~$0.002-$0.12 per 1K tokens

Self-Hosted Small Model:
- 1 GPU or powerful CPU
- Free after initial setup
- Maintenance overhead

Mobile Inference:
- Optimized tiny models
- Runs on smartphones
- Minimal power consumption
            </code></pre>

            <h3>Practical Considerations</h3>

            <h4>When to Train:</h4>
            <ul>
                <li>Need highly specialized behavior</li>
                <li>Have proprietary data</li>
                <li>Require data privacy (on-premise)</li>
                <li>Long-term cost justifies training investment</li>
            </ul>

            <h4>When to Use Pre-trained Models:</h4>
            <ul>
                <li>General-purpose tasks</li>
                <li>Limited resources</li>
                <li>Quick prototyping</li>
                <li>Leveraging latest research</li>
            </ul>

            <h3>The Economics</h3>

            <p><strong>Training Cost Example:</strong></p>
            <ul>
                <li>Training a GPT-4 scale model: $50-100M</li>
                <li>Fine-tuning on AWS: $50-5,000</li>
                <li>Training on Google Colab: Free-$50</li>
            </ul>

            <p><strong>Inference Cost Example:</strong></p>
            <ul>
                <li>ChatGPT query: $0.002-$0.02</li>
                <li>Self-hosted inference: $0.0001-$0.001 (after setup)</li>
                <li>Mobile inference: Essentially free</li>
            </ul>

            <h3>Workflow in Practice</h3>

            <h4>Typical AI Application Lifecycle:</h4>
            <ol>
                <li><strong>Research Phase:</strong> Experiment with pre-trained models via APIs</li>
                <li><strong>Prototype:</strong> Build proof-of-concept using existing models</li>
                <li><strong>Evaluation:</strong> Determine if custom training is needed</li>
                <li><strong>Training (if needed):</strong> Fine-tune or train custom model</li>
                <li><strong>Deployment:</strong> Optimize model for inference</li>
                <li><strong>Production:</strong> Serve predictions to users</li>
                <li><strong>Monitoring:</strong> Track performance and costs</li>
                <li><strong>Iteration:</strong> Retrain periodically with new data</li>
            </ol>

            <h3>Common Misconceptions</h3>
            <ul>
                <li><strong>Myth:</strong> "You need to train your own model"
                    <ul><li><strong>Reality:</strong> Most applications work fine with pre-trained models via API</li></ul>
                </li>
                <li><strong>Myth:</strong> "Inference is free"
                    <ul><li><strong>Reality:</strong> At scale, inference costs can exceed training costs</li></ul>
                </li>
                <li><strong>Myth:</strong> "Training once is enough"
                    <ul><li><strong>Reality:</strong> Models need periodic retraining to stay current</li></ul>
                </li>
                <li><strong>Myth:</strong> "Bigger models are always better"
                    <ul><li><strong>Reality:</strong> Smaller, optimized models often work better for specific tasks</li></ul>
                </li>
            </ul>

            <h3>Future Trends</h3>
            <ul>
                <li><strong>More Efficient Training:</strong> New techniques reducing costs by 10-100x</li>
                <li><strong>Faster Inference:</strong> Hardware and software optimizations</li>
                <li><strong>Edge Deployment:</strong> Running powerful models on phones and IoT devices</li>
                <li><strong>Continuous Learning:</strong> Models that update during inference</li>
                <li><strong>AutoML:</strong> Automated training and optimization</li>
            </ul>

            <h3>Conclusion</h3>
            <p>Understanding the distinction between training and inference is fundamental to working with AI. Training is the expensive, time-consuming process of creating a model, while inference is the fast, frequent use of that model. Most developers will spend far more time on inference optimization than training, and many will never need to train a model from scratch. The key is knowing when each approach is appropriate and how to optimize for your specific use case.</p>
        `,
        readTime: '14 min',
        level: 'Beginner'
    }
]);

// Continue with more fully detailed beginner concepts
const additionalBeginnerConcepts = [
    {
        id: 'b8',
        title: 'Transfer Learning',
        icon: '🔄',
        description: 'Leveraging pre-trained models to solve new tasks efficiently.',
        readTime: '20 min',
        content: `
            <h2>Transfer Learning: Standing on the Shoulders of Giants</h2>
            <p>Transfer learning is one of the most powerful techniques in modern machine learning and AI. Instead of training a model from scratch for every new task, transfer learning allows us to leverage knowledge learned from one task to improve performance on another related task. This approach has revolutionized AI development, making sophisticated models accessible to teams without massive computational resources.</p>

            <h3>What is Transfer Learning?</h3>
            <p>Transfer learning is the practice of taking a model trained on one task and repurposing it for a different but related task. Think of it like a professional athlete switching sports—they don't start from zero. Their existing fitness, coordination, and strategic thinking transfer to the new sport, giving them a significant head start over complete beginners.</p>

            <h3>Why Transfer Learning Matters</h3>
            <p>Training large AI models from scratch is:</p>
            <ul>
                <li><strong>Expensive:</strong> Can cost millions of dollars in compute resources</li>
                <li><strong>Time-Consuming:</strong> May take weeks or months even with powerful hardware</li>
                <li><strong>Data-Hungry:</strong> Requires massive datasets (millions to billions of examples)</li>
                <li><strong>Environmentally Costly:</strong> Consumes enormous amounts of energy</li>
                <li><strong>Expertise-Intensive:</strong> Demands specialized knowledge and experience</li>
            </ul>

            <p>Transfer learning addresses all these challenges by allowing us to start with models that have already learned general patterns and features.</p>

            <h3>How Transfer Learning Works</h3>

            <h4>The Core Concept</h4>
            <p>Neural networks learn hierarchical representations:</p>
            <ul>
                <li><strong>Early Layers:</strong> Learn general, low-level features (edges, colors, textures in images; basic grammar in text)</li>
                <li><strong>Middle Layers:</strong> Learn mid-level patterns (shapes, object parts; phrase structures)</li>
                <li><strong>Later Layers:</strong> Learn task-specific, high-level features (specific objects; semantic meaning)</li>
            </ul>

            <p>The insight: Early and middle layer features are often useful across many different tasks! Only the final layers need to be task-specific.</p>

            <h3>Transfer Learning Strategies</h3>

            <h4>1. Feature Extraction (Frozen Base)</h4>
            <p>Use a pre-trained model as a fixed feature extractor:</p>
            <pre><code>
import tensorflow as tf
from tensorflow.keras.applications import ResNet50
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D
from tensorflow.keras.models import Model

# Load pre-trained ResNet50 (trained on ImageNet)
base_model = ResNet50(
    weights='imagenet',
    include_top=False,  # Remove classification head
    input_shape=(224, 224, 3)
)

# Freeze all layers in base model
base_model.trainable = False

# Add custom classification head
x = base_model.output
x = GlobalAveragePooling2D()(x)
x = Dense(256, activation='relu')(x)
predictions = Dense(10, activation='softmax')(x)  # 10 classes

# Create final model
model = Model(inputs=base_model.input, outputs=predictions)

model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Train only the new layers
model.fit(train_data, train_labels, epochs=10)
            </code></pre>

            <p><strong>When to use:</strong> Limited training data, very different task from pre-training</p>
            <p><strong>Advantages:</strong> Fast training, prevents overfitting, requires less data</p>
            <p><strong>Disadvantages:</strong> May not achieve optimal performance</p>

            <h4>2. Fine-Tuning</h4>
            <p>Unfreeze some or all layers and continue training:</p>
            <pre><code>
# Start with feature extraction model (from above)
# Then unfreeze layers and fine-tune

# Unfreeze the base model
base_model.trainable = True

# Optionally, freeze early layers and fine-tune only later layers
fine_tune_at = 100  # Freeze first 100 layers

for layer in base_model.layers[:fine_tune_at]:
    layer.trainable = False

# Recompile with lower learning rate (important!)
model.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=1e-5),
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Fine-tune the model
model.fit(
    train_data,
    train_labels,
    epochs=10,
    validation_data=(val_data, val_labels)
)
            </code></pre>

            <p><strong>When to use:</strong> Sufficient training data, task related to pre-training task</p>
            <p><strong>Advantages:</strong> Better performance than feature extraction</p>
            <p><strong>Disadvantages:</strong> Requires more data, risk of overfitting, longer training</p>

            <h4>3. Domain Adaptation</h4>
            <p>Adapt model from one domain to another (e.g., synthetic to real images, formal to colloquial text):</p>
            <pre><code>
# Domain adaptation example for sentiment analysis
from transformers import AutoModelForSequenceClassification, Trainer

# Load model pre-trained on formal reviews
model = AutoModelForSequenceClassification.from_pretrained(
    'bert-base-uncased',
    num_labels=2
)

# Fine-tune on social media text (different domain)
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=social_media_dataset,
    eval_dataset=eval_dataset
)

trainer.train()
            </code></pre>

            <h3>Popular Pre-trained Models</h3>

            <h4>Computer Vision</h4>
            <ul>
                <li><strong>ResNet:</strong> Deep residual networks, 18-152 layers
                    <ul>
                        <li>Use case: General image classification, feature extraction</li>
                        <li>Trained on: ImageNet (1.2M images, 1000 categories)</li>
                    </ul>
                </li>
                <li><strong>EfficientNet:</strong> Balanced scaling of depth, width, resolution
                    <ul>
                        <li>Use case: Resource-efficient image recognition</li>
                        <li>Better accuracy-to-size ratio than ResNet</li>
                    </ul>
                </li>
                <li><strong>Vision Transformer (ViT):</strong> Transformer architecture for images
                    <ul>
                        <li>Use case: State-of-the-art image classification</li>
                        <li>Requires more data but achieves better performance</li>
                    </ul>
                </li>
                <li><strong>YOLO, Faster R-CNN:</strong> Object detection models
                    <ul>
                        <li>Use case: Detecting and localizing objects in images</li>
                    </ul>
                </li>
            </ul>

            <h4>Natural Language Processing</h4>
            <ul>
                <li><strong>BERT:</strong> Bidirectional encoder representations
                    <ul>
                        <li>Use case: Text classification, NER, question answering</li>
                        <li>Variants: RoBERTa, ALBERT, DistilBERT</li>
                    </ul>
                </li>
                <li><strong>GPT:</strong> Generative pre-trained transformer
                    <ul>
                        <li>Use case: Text generation, completion, few-shot learning</li>
                        <li>Versions: GPT-2, GPT-3, GPT-4</li>
                    </ul>
                </li>
                <li><strong>T5:</strong> Text-to-text transfer transformer
                    <ul>
                        <li>Use case: Universal text tasks (translation, summarization, etc.)</li>
                    </ul>
                </li>
            </ul>

            <h3>Complete Transfer Learning Workflow</h3>

            <h4>Step 1: Choose a Pre-trained Model</h4>
            <p>Consider:</p>
            <ul>
                <li>Task similarity to your problem</li>
                <li>Model size and inference speed requirements</li>
                <li>Available pre-trained weights</li>
                <li>Community support and documentation</li>
            </ul>

            <h4>Step 2: Prepare Your Dataset</h4>
            <pre><code>
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# Match preprocessing to pre-trained model
datagen = ImageDataGenerator(
    rescale=1./255,
    validation_split=0.2,
    rotation_range=20,
    width_shift_range=0.2,
    height_shift_range=0.2,
    horizontal_flip=True
)

train_generator = datagen.flow_from_directory(
    'data/train',
    target_size=(224, 224),  # Match pre-trained model input
    batch_size=32,
    class_mode='categorical',
    subset='training'
)

validation_generator = datagen.flow_from_directory(
    'data/train',
    target_size=(224, 224),
    batch_size=32,
    class_mode='categorical',
    subset='validation'
)
            </code></pre>

            <h4>Step 3: Modify Model Architecture</h4>
            <pre><code>
from tensorflow.keras.applications import MobileNetV2

# Load base model
base_model = MobileNetV2(
    input_shape=(224, 224, 3),
    include_top=False,
    weights='imagenet'
)

# Add custom layers
model = tf.keras.Sequential([
    base_model,
    tf.keras.layers.GlobalAveragePooling2D(),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(num_classes, activation='softmax')
])
            </code></pre>

            <h4>Step 4: Training Strategy</h4>
            <pre><code>
# Phase 1: Train only new layers
base_model.trainable = False

model.compile(
    optimizer=tf.keras.optimizers.Adam(lr=1e-3),
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

history1 = model.fit(
    train_generator,
    epochs=10,
    validation_data=validation_generator
)

# Phase 2: Fine-tune entire model
base_model.trainable = True

model.compile(
    optimizer=tf.keras.optimizers.Adam(lr=1e-5),  # Lower learning rate!
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

history2 = model.fit(
    train_generator,
    epochs=10,
    validation_data=validation_generator
)
            </code></pre>

            <h3>NLP Transfer Learning with Hugging Face</h3>
            <pre><code>
from transformers import (
    AutoTokenizer,
    AutoModelForSequenceClassification,
    TrainingArguments,
    Trainer
)
from datasets import load_dataset

# Load pre-trained model and tokenizer
model_name = 'bert-base-uncased'
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(
    model_name,
    num_labels=2  # Binary classification
)

# Prepare data
dataset = load_dataset('imdb')

def tokenize_function(examples):
    return tokenizer(
        examples['text'],
        padding='max_length',
        truncation=True,
        max_length=512
    )

tokenized_datasets = dataset.map(tokenize_function, batched=True)

# Set up training
training_args = TrainingArguments(
    output_dir='./results',
    num_train_epochs=3,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=64,
    warmup_steps=500,
    weight_decay=0.01,
    logging_dir='./logs',
    evaluation_strategy='epoch'
)

# Train
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_datasets['train'],
    eval_dataset=tokenized_datasets['test']
)

trainer.train()
            </code></pre>

            <h3>Best Practices</h3>

            <h4>1. Learning Rate Matters</h4>
            <ul>
                <li><strong>New layers:</strong> Higher learning rate (1e-3 to 1e-4)</li>
                <li><strong>Fine-tuning:</strong> Much lower learning rate (1e-5 to 1e-6)</li>
                <li><strong>Why:</strong> Pre-trained weights are already good; large updates can destroy learned features</li>
            </ul>

            <h4>2. Gradual Unfreezing</h4>
            <pre><code>
# Gradually unfreeze layers from top to bottom
def unfreeze_top_n_layers(model, n):
    for layer in model.layers[:-n]:
        layer.trainable = False
    for layer in model.layers[-n:]:
        layer.trainable = True

# Start with top 10 layers
unfreeze_top_n_layers(base_model, 10)
model.fit(data, epochs=5)

# Then top 20 layers
unfreeze_top_n_layers(base_model, 20)
model.fit(data, epochs=5)

# Finally, all layers
base_model.trainable = True
model.fit(data, epochs=5)
            </code></pre>

            <h4>3. Data Augmentation</h4>
            <p>Essential when fine-tuning with limited data:</p>
            <pre><code>
from tensorflow.keras.preprocessing.image import ImageDataGenerator

augmentation = ImageDataGenerator(
    rotation_range=20,
    width_shift_range=0.2,
    height_shift_range=0.2,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    fill_mode='nearest'
)
            </code></pre>

            <h4>4. Monitor for Overfitting</h4>
            <pre><code>
# Use early stopping
from tensorflow.keras.callbacks import EarlyStopping, ReduceLROnPlateau

callbacks = [
    EarlyStopping(
        monitor='val_loss',
        patience=5,
        restore_best_weights=True
    ),
    ReduceLROnPlateau(
        monitor='val_loss',
        factor=0.5,
        patience=3
    )
]

model.fit(data, callbacks=callbacks)
            </code></pre>

            <h3>Common Pitfalls</h3>

            <ul>
                <li><strong>Wrong Input Size:</strong> Ensure your data matches pre-trained model's expected input shape</li>
                <li><strong>Incorrect Preprocessing:</strong> Use the same preprocessing as the pre-trained model</li>
                <li><strong>Learning Rate Too High:</strong> Can destroy pre-trained features</li>
                <li><strong>Forgetting to Freeze:</strong> Training all layers immediately can lead to overfitting</li>
                <li><strong>Mismatch in Normalization:</strong> Different models use different normalization schemes</li>
            </ul>

            <h3>Transfer Learning Beyond Supervised Learning</h3>

            <h4>Self-Supervised Pre-training</h4>
            <p>Modern approach: Pre-train on massive unlabeled data, then fine-tune on small labeled datasets:</p>
            <ul>
                <li><strong>BERT:</strong> Masked language modeling</li>
                <li><strong>SimCLR:</strong> Contrastive learning for images</li>
                <li><strong>CLIP:</strong> Image-text contrastive learning</li>
            </ul>

            <h4>Few-Shot Learning</h4>
            <p>Adapt with very few examples (GPT-3 style):</p>
            <pre><code>
# Example with GPT-3 API
import openai

# Few-shot prompt
prompt = """
Translate English to French:
English: Hello
French: Bonjour

English: Goodbye
French: Au revoir

English: Thank you
French:"""

response = openai.Completion.create(
    model="text-davinci-003",
    prompt=prompt,
    max_tokens=10
)
# Response: " Merci"
            </code></pre>

            <h3>Real-World Applications</h3>

            <h4>Medical Imaging</h4>
            <p>Use ImageNet pre-trained models for X-ray or MRI analysis:</p>
            <ul>
                <li>Start with ResNet trained on natural images</li>
                <li>Fine-tune on medical images (much smaller dataset)</li>
                <li>Achieve competitive performance with fraction of data needed</li>
            </ul>

            <h4>Custom Chatbots</h4>
            <p>Fine-tune GPT or BERT on company-specific conversations:</p>
            <ul>
                <li>Start with general language understanding</li>
                <li>Adapt to domain-specific terminology</li>
                <li>Learn company policies and procedures</li>
            </ul>

            <h4>Product Classification</h4>
            <p>E-commerce product categorization:</p>
            <ul>
                <li>Use EfficientNet pre-trained on ImageNet</li>
                <li>Fine-tune on product images</li>
                <li>Deploy for automatic product tagging</li>
            </ul>

            <h3>Measuring Transfer Learning Success</h3>
            <pre><code>
# Compare transfer learning vs training from scratch
import time

# From scratch
model_scratch = create_model_architecture()
start = time.time()
history_scratch = model_scratch.fit(data, epochs=100)
time_scratch = time.time() - start

# Transfer learning
model_transfer = create_transfer_model()
start = time.time()
history_transfer = model_transfer.fit(data, epochs=20)
time_transfer = time.time() - start

print(f"From Scratch - Acc: {history_scratch.history['val_accuracy'][-1]:.4f}, Time: {time_scratch:.0f}s")
print(f"Transfer - Acc: {history_transfer.history['val_accuracy'][-1]:.4f}, Time: {time_transfer:.0f}s")
            </code></pre>

            <h3>Future Directions</h3>
            <ul>
                <li><strong>Foundation Models:</strong> Massive models pre-trained on diverse data</li>
                <li><strong>Adapter Layers:</strong> Small trainable modules inserted into frozen models</li>
                <li><strong>Prompt Tuning:</strong> Learn optimal prompts instead of model weights</li>
                <li><strong>Meta-Learning:</strong> Models that learn how to adapt quickly</li>
            </ul>

            <h3>Conclusion</h3>
            <p>Transfer learning has democratized AI development, making state-of-the-art performance accessible without massive resources. By leveraging pre-trained models, you can build production-quality AI systems with limited data and compute. The key is understanding when and how to apply transfer learning, choosing the right pre-trained model, and following best practices for fine-tuning. Whether you're working with images, text, audio, or other modalities, transfer learning is likely your best starting point for most AI projects.</p>
        `,
        level: 'Beginner'
    },
{
        id: 'b9',
        title: 'Fine-Tuning Models',
        icon: '🎯',
        description: 'Customizing pre-trained models for specific tasks and domains.',
        readTime: '22 min',
        level: 'Beginner',
        content: `
            <h2>Fine-Tuning Models: Customizing AI for Your Needs</h2>
            <p>Fine-tuning is the process of taking a pre-trained model and adapting it to perform specific tasks or work with domain-specific data. It's one of the most practical techniques in modern AI, enabling developers to create customized, high-performing models without the massive cost and complexity of training from scratch.</p>

            <h3>What is Fine-Tuning?</h3>
            <p>Fine-tuning involves continuing to train a pre-trained model on a smaller, task-specific dataset. The model retains its general knowledge while learning specialized patterns for your particular use case. Think of it like a doctor specializing after medical school—they keep their general medical knowledge but develop expertise in a specific area.</p>

            <h3>Why Fine-Tune Instead of Training from Scratch?</h3>
            <ul>
                <li><strong>Massive Cost Savings:</strong> $100-1,000 vs $10,000-1,000,000+</li>
                <li><strong>Time Efficiency:</strong> Hours/days vs weeks/months</li>
                <li><strong>Data Efficiency:</strong> Hundreds of examples vs millions</li>
                <li><strong>Better Performance:</strong> Often outperforms models trained from scratch on small datasets</li>
                <li><strong>Accessibility:</strong> Can be done on consumer hardware or modest cloud resources</li>
            </ul>

            <h3>Complete Fine-Tuning Example with Hugging Face</h3>
            <pre><code>
from transformers import (
    AutoModelForSequenceClassification,
    AutoTokenizer,
    Trainer,
    TrainingArguments
)
from datasets import load_dataset
import numpy as np

# Step 1: Load pre-trained model and tokenizer
model_name = 'bert-base-uncased'
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(
    model_name,
    num_labels=2  # binary classification
)

# Step 2: Prepare your dataset
dataset = load_dataset('imdb')  # Or your custom dataset

def tokenize_function(examples):
    return tokenizer(
        examples['text'],
        padding='max_length',
        truncation=True,
        max_length=512
    )

tokenized_datasets = dataset.map(tokenize_function, batched=True)

# Step 3: Define evaluation metrics
from datasets import load_metric

def compute_metrics(eval_pred):
    metric = load_metric('accuracy')
    logits, labels = eval_pred
    predictions = np.argmax(logits, axis=-1)
    return metric.compute(predictions=predictions, references=labels)

# Step 4: Configure training
training_args = TrainingArguments(
    output_dir='./results',
    num_train_epochs=3,
    per_device_train_batch_size=16,
    learning_rate=2e-5,  # Small learning rate is key!
    warmup_steps=500,
    weight_decay=0.01,
    logging_steps=100,
    evaluation_strategy='epoch',
    save_strategy='epoch',
    load_best_model_at_end=True
)

# Step 5: Create Trainer and fine-tune
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_datasets['train'],
    eval_dataset=tokenized_datasets['test'],
    compute_metrics=compute_metrics
)

# Fine-tune!
trainer.train()

# Step 6: Save and use
model.save_pretrained('./my-finetuned-model')
tokenizer.save_pretrained('./my-finetuned-model')
            </code></pre>

            <h3>Parameter-Efficient Fine-Tuning (PEFT)</h3>
            <p>Modern technique that updates only a small fraction of parameters, saving time and memory:</p>

            <h4>LoRA (Low-Rank Adaptation)</h4>
            <pre><code>
from peft import get_peft_model, LoraConfig, TaskType

# Configure LoRA
lora_config = LoraConfig(
    task_type=TaskType.SEQ_CLS,
    r=8,  # Rank of adaptation matrices
    lora_alpha=32,
    lora_dropout=0.1,
    target_modules=['query', 'value']
)

# Apply LoRA - only 0.1% of parameters trainable!
model = AutoModelForSequenceClassification.from_pretrained('bert-base-uncased')
model = get_peft_model(model, lora_config)

model.print_trainable_parameters()
# trainable params: 294,912 || all params: 109,483,778 || trainable%: 0.27

# Train 100x faster, use 90% less memory!
            </code></pre>

            <h3>Fine-Tuning Vision Models</h3>
            <pre><code>
import timm
import torch
import torch.nn as nn
from torchvision import transforms

# Load pre-trained vision model
model = timm.create_model('efficientnet_b0', pretrained=True, num_classes=10)

# Freeze early layers, train only later ones
for name, param in model.named_parameters():
    if 'blocks.0' in name or 'blocks.1' in name:
        param.requires_grad = False
    else:
        param.requires_grad = True

# Optimizer with small learning rate
optimizer = torch.optim.Adam(model.parameters(), lr=1e-4)
criterion = nn.CrossEntropyLoss()

# Training loop
model.train()
for epoch in range(10):
    for images, labels in train_loader:
        optimizer.zero_grad()
        outputs = model(images)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()
            </code></pre>

            <h3>Best Practices</h3>

            <h4>1. Use Small Learning Rates</h4>
            <pre><code>
# Too high: Destroys pre-trained knowledge
learning_rate = 1e-1  # ❌ Way too high

# Just right: Gentle adaptation
learning_rate = 2e-5  # ✅ Good for BERT
learning_rate = 1e-4  # ✅ Good for vision models
            </code></pre>

            <h4>2. Gradual Unfreezing</h4>
            <pre><code>
# Phase 1: Train only new layers (2 epochs)
for param in base_model.parameters():
    param.requires_grad = False
train(epochs=2)

# Phase 2: Unfreeze top layers (2 epochs)
for layer in base_model.layers[-5:]:
    for param in layer.parameters():
        param.requires_grad = True
train(epochs=2)

# Phase 3: Fine-tune everything with lower LR (2 epochs)
for param in base_model.parameters():
    param.requires_grad = True
optimizer = Adam(model.parameters(), lr=1e-6)  # Even lower!
train(epochs=2)
            </code></pre>

            <h4>3. Data Augmentation</h4>
            <p>Crucial when you have limited training data:</p>
            <pre><code>
from torchvision import transforms

transform = transforms.Compose([
    transforms.RandomResizedCrop(224),
    transforms.RandomHorizontalFlip(),
    transforms.RandomRotation(15),
    transforms.ColorJitter(brightness=0.2, contrast=0.2),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406],
                        std=[0.229, 0.224, 0.225])
])
            </code></pre>

            <h4>4. Early Stopping</h4>
            <pre><code>
best_val_loss = float('inf')
patience = 5
patience_counter = 0

for epoch in range(max_epochs):
    train_loss = train_epoch()
    val_loss = validate()

    if val_loss < best_val_loss:
        best_val_loss = val_loss
        torch.save(model.state_dict(), 'best_model.pt')
        patience_counter = 0
    else:
        patience_counter += 1
        if patience_counter >= patience:
            print("Early stopping!")
            break

# Load best model
model.load_state_dict(torch.load('best_model.pt'))
            </code></pre>

            <h3>Domain-Specific Examples</h3>

            <h4>Medical Text Analysis</h4>
            <pre><code>
# Fine-tune BioBERT for medical entity recognition
model = AutoModelForTokenClassification.from_pretrained(
    'dmis-lab/biobert-v1.1',
    num_labels=9  # disease, symptom, medication, etc.
)
# Train on clinical notes, medical journals
            </code></pre>

            <h4>Legal Document Analysis</h4>
            <pre><code>
# Fine-tune for contract classification
model = AutoModelForSequenceClassification.from_pretrained(
    'nlpaueb/legal-bert-base-uncased',
    num_labels=10  # contract types
)
# Train on legal contracts and documents
            </code></pre>

            <h4>Code Generation</h4>
            <pre><code>
# Fine-tune CodeT5 for your framework
from transformers import AutoModelForSeq2SeqLM

model = AutoModelForSeq2SeqLM.from_pretrained('Salesforce/codet5-base')
# Train on your codebase: Input: docstring → Output: code
            </code></pre>

            <h3>Common Mistakes and Solutions</h3>
            <ul>
                <li><strong>Learning Rate Too High:</strong>
                    <ul>
                        <li>Symptom: Loss explodes or model forgets pre-training</li>
                        <li>Solution: Use 2e-5 for BERT, 1e-4 for vision models</li>
                    </ul>
                </li>
                <li><strong>Not Freezing Layers Initially:</strong>
                    <ul>
                        <li>Symptom: Overfitting with small datasets</li>
                        <li>Solution: Start frozen, gradually unfreeze</li>
                    </ul>
                </li>
                <li><strong>Insufficient Data Augmentation:</strong>
                    <ul>
                        <li>Symptom: Overfitting, poor generalization</li>
                        <li>Solution: Heavy augmentation for small datasets</li>
                    </ul>
                </li>
            </ul>

            <h3>Monitoring Fine-Tuning</h3>
            <pre><code>
import wandb

# Initialize Weights & Biases
wandb.init(project='my-finetuning')

# Integrate with Trainer
training_args = TrainingArguments(
    ...
    report_to='wandb',
    logging_steps=10
)

# Automatic logging of metrics, gradients, model
trainer.train()
            </code></pre>

            <h3>Cost and Resource Planning</h3>
            <pre><code>
# Small model (BERT-base) fine-tuning:
# - Local GPU (RTX 3090): Free after purchase (~$1500)
# - Google Colab Pro: $10/month
# - AWS g5.xlarge: ~$1/hour × 5 hours = $5

# Medium model (GPT-2 medium):
# - AWS p3.2xlarge: ~$3/hour × 10 hours = $30

# Large model (GPT-3.5):
# - OpenAI API: $0.008/1K tokens training
# - 10M tokens = $80
            </code></pre>

            <h3>Deploying Fine-Tuned Models</h3>
            <pre><code>
# Optimize for production
from optimum.onnxruntime import ORTModelForSequenceClassification

# Convert to ONNX
model = ORTModelForSequenceClassification.from_pretrained(
    './my-finetuned-model',
    from_transformers=True
)

# Quantize to INT8
from transformers import AutoQuantizationConfig
quantization_config = AutoQuantizationConfig.from_pretrained("int8")
model = model.quantize(quantization_config)

# Result: 4x smaller, 2-4x faster inference!
            </code></pre>

            <h3>Real-World Success Stories</h3>
            <ul>
                <li><strong>Customer Service:</strong> Fine-tuned GPT-3.5 reduced response time by 70%, improved accuracy by 40%</li>
                <li><strong>Medical Imaging:</strong> Fine-tuned ResNet achieved 95% accuracy with only 500 X-rays</li>
                <li><strong>Legal Tech:</strong> Fine-tuned BERT classified contracts with 92% accuracy</li>
                <li><strong>E-commerce:</strong> Fine-tuned CLIP improved product search relevance by 35%</li>
            </ul>

            <h3>Conclusion</h3>
            <p>Fine-tuning is your gateway to production-quality AI without enterprise-scale resources. With just a few hundred examples and a few hours of training time, you can create specialized models that outperform general-purpose alternatives on your specific tasks. The key is starting with a good pre-trained model, using small learning rates, and following best practices for data preparation and training. Whether you're working with text, images, or code, fine-tuning is almost always your best path forward.</p>
        `
    },
    {
        id: 'b10',
        title: 'Embeddings and Vectors',
        icon: '📊',
        description: 'How AI represents words and concepts as numerical vectors.',
        readTime: '18 min',
        level: 'Beginner',
        content: `
            <h2>Embeddings and Vectors: The Language of AI</h2>
            <p>Embeddings are one of the most fundamental concepts in modern AI. They are the bridge that allows machines to work with human concepts like words, images, and ideas by representing them as numerical vectors in high-dimensional space. Understanding embeddings is crucial for working with any modern AI system.</p>

            <h3>What Are Embeddings?</h3>
            <p>An embedding is a dense vector representation of data. Instead of representing a word as a one-hot encoded vector (mostly zeros with one 1), embeddings represent it as a dense vector of real numbers where every dimension captures some aspect of meaning.</p>

            <pre><code>
# One-hot encoding (old way)
"cat" → [0, 0, 0, 1, 0, 0, ..., 0]  # 10,000+ dimensions, mostly zeros

# Embedding (modern way)
"cat" → [0.2, -0.5, 0.8, 0.1, ..., -0.3]  # 300-1536 dimensions, all meaningful
            </code></pre>

            <h3>Why Embeddings Matter</h3>
            <ul>
                <li><strong>Semantic Meaning:</strong> Similar concepts have similar vectors</li>
                <li><strong>Efficiency:</strong> Dense representation vs sparse one-hot</li>
                <li><strong>Generalization:</strong> Captures relationships and analogies</li>
                <li><strong>Transferability:</strong> Pre-trained embeddings work across tasks</li>
                <li><strong>Mathematical Operations:</strong> Can do math with meaning</li>
            </ul>

            <h3>Word Embeddings: A Concrete Example</h3>
            <pre><code>
import numpy as np

# Simplified 3D embedding visualization
embeddings = {
    'king': np.array([0.5, 0.3, 0.8]),
    'queen': np.array([0.5, 0.3, -0.7]),
    'man': np.array([0.3, 0.2, 0.9]),
    'woman': np.array([0.3, 0.2, -0.8])
}

# Famous analogy: king - man + woman ≈ queen
result = embeddings['king'] - embeddings['man'] + embeddings['woman']
# Result very close to embeddings['queen']!

# This works because vectors capture gender relationship
            </code></pre>

            <h3>Creating Embeddings with Python</h3>

            <h4>Using OpenAI Embeddings</h4>
            <pre><code>
import openai

# Get embedding for text
response = openai.Embedding.create(
    model="text-embedding-ada-002",
    input="The quick brown fox jumps over the lazy dog"
)

embedding = response['data'][0]['embedding']
print(f"Embedding dimension: {len(embedding)}")  # 1536
print(f"First 5 values: {embedding[:5]}")

# Use for similarity search, clustering, classification, etc.
            </code></pre>

            <h4>Using Sentence Transformers (Free, Open-Source)</h4>
            <pre><code>
from sentence_transformers import SentenceTransformer

# Load pre-trained model
model = SentenceTransformer('all-MiniLM-L6-v2')

# Generate embeddings
sentences = [
    "I love machine learning",
    "AI is fascinating",
    "I enjoy pizza",
]

embeddings = model.encode(sentences)
print(f"Shape: {embeddings.shape}")  # (3, 384)

# Calculate similarity
from sklearn.metrics.pairwise import cosine_similarity

similarities = cosine_similarity(embeddings)
print(similarities)
# High similarity between sentences 1 and 2, lower for 3
            </code></pre>

            <h3>How Embeddings Are Learned</h3>

            <h4>Word2Vec (Skip-gram Model)</h4>
            <p>Predicts context words from a target word:</p>
            <pre><code>
# Training objective:
# Given "cat", predict ["sat", "on", "the", "mat"]

from gensim.models import Word2Vec

# Train your own Word2Vec model
sentences = [
    ["the", "cat", "sat", "on", "mat"],
    ["the", "dog", "ran", "in", "park"],
    # ... many more sentences
]

model = Word2Vec(
    sentences,
    vector_size=100,  # Embedding dimension
    window=5,         # Context window size
    min_count=1,
    workers=4
)

# Get vector for a word
cat_vector = model.wv['cat']

# Find similar words
similar_words = model.wv.most_similar('cat', topn=5)
# [('dog', 0.89), ('kitten', 0.85), ...]
            </code></pre>

            <h4>BERT Embeddings (Contextual)</h4>
            <p>Unlike Word2Vec, BERT creates different embeddings based on context:</p>
            <pre><code>
from transformers import AutoTokenizer, AutoModel
import torch

tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')
model = AutoModel.from_pretrained('bert-base-uncased')

# Same word, different contexts
texts = [
    "The bank is next to the river",  # bank = financial institution? river bank?
    "I need to deposit money at the bank"
]

for text in texts:
    inputs = tokenizer(text, return_tensors='pt')
    outputs = model(**inputs)

    # Extract embedding for "bank"
    embeddings = outputs.last_hidden_state
    # Shape: [1, sequence_length, 768]

# The embedding for "bank" will be DIFFERENT in each context!
            </code></pre>

            <h3>Types of Embeddings</h3>

            <h4>1. Word Embeddings</h4>
            <ul>
                <li><strong>Word2Vec:</strong> 100-300 dimensions, fast, static</li>
                <li><strong>GloVe:</strong> Similar to Word2Vec, trained on global statistics</li>
                <li><strong>FastText:</strong> Handles out-of-vocabulary words better</li>
            </ul>

            <h4>2. Sentence/Document Embeddings</h4>
            <ul>
                <li><strong>Universal Sentence Encoder:</strong> 512 dimensions</li>
                <li><strong>Sentence-BERT:</strong> 384-768 dimensions, very popular</li>
                <li><strong>OpenAI text-embedding-ada-002:</strong> 1536 dimensions</li>
            </ul>

            <h4>3. Image Embeddings</h4>
            <pre><code>
from transformers import CLIPProcessor, CLIPModel
from PIL import Image

# Load CLIP model
model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# Generate embedding for an image
image = Image.open("cat.jpg")
inputs = processor(images=image, return_tensors="pt")
image_features = model.get_image_features(**inputs)

# Shape: (1, 512) - a 512-dimensional vector representing the image!
            </code></pre>

            <h4>4. Multimodal Embeddings</h4>
            <p>Same vector space for both images and text:</p>
            <pre><code>
# CLIP: Images and text in same embedding space
image = Image.open("dog.jpg")
text = "a photo of a dog"

# Get embeddings
image_inputs = processor(images=image, return_tensors="pt")
text_inputs = processor(text=text, return_tensors="pt")

image_features = model.get_image_features(**image_inputs)
text_features = model.get_text_features(**text_inputs)

# Compute similarity
similarity = torch.cosine_similarity(image_features, text_features)
# High similarity if text matches image!
            </code></pre>

            <h3>Practical Applications</h3>

            <h4>1. Semantic Search</h4>
            <pre><code>
from sentence_transformers import SentenceTransformer, util

model = SentenceTransformer('all-MiniLM-L6-v2')

# Document corpus
documents = [
    "Python is a programming language",
    "Machine learning uses algorithms",
    "The weather is nice today",
    "Deep learning is a subset of ML"
]

# Create embeddings
doc_embeddings = model.encode(documents)

# User query
query = "What is AI?"
query_embedding = model.encode(query)

# Find most similar documents
similarities = util.cos_sim(query_embedding, doc_embeddings)[0]
best_match = similarities.argmax()

print(f"Best match: {documents[best_match]}")
# "Machine learning uses algorithms" or "Deep learning is a subset of ML"
            </code></pre>

            <h4>2. Recommendation System</h4>
            <pre><code>
# Movie recommendation based on descriptions
movies = {
    "Inception": "A thief who steals secrets from dreams",
    "The Matrix": "A hacker discovers reality is a simulation",
    "Frozen": "A princess with ice powers",
    "Toy Story": "Toys come to life when humans aren't around"
}

# Create embeddings
movie_names = list(movies.keys())
descriptions = list(movies.values())
movie_embeddings = model.encode(descriptions)

# User likes "Inception"
liked_movie = "Inception"
liked_idx = movie_names.index(liked_movie)

# Find similar movies
similarities = cosine_similarity([movie_embeddings[liked_idx]], movie_embeddings)[0]
similar_indices = similarities.argsort()[-3:-1][::-1]  # Top 2, excluding itself

print(f"If you liked {liked_movie}, you might like:")
for idx in similar_indices:
    print(f"- {movie_names[idx]}")
# Likely: "The Matrix" (similar themes)
            </code></pre>

            <h4>3. Clustering Documents</h4>
            <pre><code>
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
from sklearn.manifold import TSNE

# Embed documents
doc_embeddings = model.encode(many_documents)

# Cluster into groups
num_clusters = 5
kmeans = KMeans(n_clusters=num_clusters)
clusters = kmeans.fit_predict(doc_embeddings)

# Visualize with t-SNE (reduce to 2D)
tsne = TSNE(n_components=2, random_state=42)
embeddings_2d = tsne.fit_transform(doc_embeddings)

plt.scatter(embeddings_2d[:, 0], embeddings_2d[:, 1], c=clusters)
plt.colorbar()
plt.show()
            </code></pre>

            <h3>Vector Databases for Embeddings</h3>

            <h4>Using Pinecone</h4>
            <pre><code>
import pinecone

# Initialize
pinecone.init(api_key='YOUR_API_KEY', environment='us-west1-gcp')

# Create index
pinecone.create_index('my-embeddings', dimension=384)
index = pinecone.Index('my-embeddings')

# Insert embeddings
index.upsert([
    ('doc1', embedding1.tolist(), {'text': 'Document 1 text'}),
    ('doc2', embedding2.tolist(), {'text': 'Document 2 text'}),
])

# Query
query_embedding = model.encode("search query")
results = index.query(query_embedding.tolist(), top_k=5)

# Get top 5 most similar documents
for match in results['matches']:
    print(f"Score: {match['score']}, Text: {match['metadata']['text']}")
            </code></pre>

            <h4>Using ChromaDB (Open-Source)</h4>
            <pre><code>
import chromadb

# Initialize client
client = chromadb.Client()
collection = client.create_collection("my_collection")

# Add documents (automatic embedding)
collection.add(
    documents=["Doc 1 text", "Doc 2 text", "Doc 3 text"],
    ids=["doc1", "doc2", "doc3"]
)

# Query
results = collection.query(
    query_texts=["search query"],
    n_results=2
)

print(results['documents'])
            </code></pre>

            <h3>Measuring Similarity</h3>

            <h4>Cosine Similarity (Most Common)</h4>
            <pre><code>
import numpy as np

def cosine_similarity(vec1, vec2):
    dot_product = np.dot(vec1, vec2)
    norm1 = np.linalg.norm(vec1)
    norm2 = np.linalg.norm(vec2)
    return dot_product / (norm1 * norm2)

# Values range from -1 (opposite) to 1 (identical)
# Typically: >0.8 = very similar, 0.5-0.8 = somewhat similar
            </code></pre>

            <h4>Euclidean Distance</h4>
            <pre><code>
def euclidean_distance(vec1, vec2):
    return np.linalg.norm(vec1 - vec2)

# Lower is more similar
# Values depend on embedding dimension and magnitude
            </code></pre>

            <h3>Best Practices</h3>

            <h4>1. Choose the Right Model</h4>
            <ul>
                <li><strong>Speed priority:</strong> all-MiniLM-L6-v2 (384 dim)</li>
                <li><strong>Quality priority:</strong> text-embedding-ada-002 (1536 dim)</li>
                <li><strong>Multilingual:</strong> paraphrase-multilingual-MiniLM-L12-v2</li>
                <li><strong>Code:</strong> microsoft/codebert-base</li>
            </ul>

            <h4>2. Normalize Embeddings</h4>
            <pre><code>
# Always normalize for cosine similarity
def normalize(vec):
    return vec / np.linalg.norm(vec)

normalized_embedding = normalize(embedding)
            </code></pre>

            <h4>3. Batch Processing</h4>
            <pre><code>
# More efficient than one-by-one
batch_size = 32
all_embeddings = []

for i in range(0, len(texts), batch_size):
    batch = texts[i:i+batch_size]
    batch_embeddings = model.encode(batch)
    all_embeddings.append(batch_embeddings)

embeddings = np.vstack(all_embeddings)
            </code></pre>

            <h3>Common Pitfalls</h3>
            <ul>
                <li><strong>Mismatch in embedding models:</strong> Don't compare embeddings from different models</li>
                <li><strong>Ignoring context:</strong> Use contextual embeddings (BERT) when word meaning varies</li>
                <li><strong>Not normalizing:</strong> Always normalize before cosine similarity</li>
                <li><strong>Wrong similarity metric:</strong> Cosine for direction, Euclidean for magnitude</li>
            </ul>

            <h3>Conclusion</h3>
            <p>Embeddings are the foundation of modern AI, transforming human concepts into mathematical representations that machines can process. Whether you're building search engines, recommendation systems, or any application requiring semantic understanding, embeddings are your essential tool. Understanding how to create, manipulate, and apply embeddings opens up a world of AI applications that would be impossible with traditional approaches.</p>
        `
    },
{
        id: 'b11',
        title: 'Attention Mechanisms',
        icon: '👁️',
        description: 'The breakthrough that enabled modern AI to focus on relevant information.',
        readTime: '19 min',
        level: 'Beginner',
        content: `
            <h2>Attention Mechanisms: Teaching AI to Focus</h2>
            <p>Attention mechanisms revolutionized artificial intelligence, enabling models to dynamically focus on relevant parts of the input rather than treating all information equally. This breakthrough, introduced in the landmark 2017 paper "Attention Is All You Need," became the foundation for modern AI systems like GPT, BERT, and countless other state-of-the-art models.</p>

            <h3>The Problem Attention Solves</h3>
            <p>Before attention mechanisms, neural networks processed sequences (like sentences) using recurrent architectures that had significant limitations:</p>
            <ul>
                <li><strong>Sequential Processing:</strong> Had to process words one-by-one, couldn't parallelize</li>
                <li><strong>Information Bottleneck:</strong> Compressed entire input into fixed-size vector</li>
                <li><strong>Vanishing Gradients:</strong> Struggled with long sequences</li>
                <li><strong>No Selective Focus:</strong> Couldn't distinguish important from unimportant information</li>
            </ul>

            <h3>What Is Attention?</h3>
            <p>Attention allows a model to assign different levels of importance (weights) to different parts of the input when producing each output. It answers the question: "Which parts of the input should I focus on right now?"</p>

            <h4>Simple Analogy:</h4>
            <p>Imagine reading a document to answer "What's the capital of France?" Your eyes don't give equal attention to every word—they scan quickly until finding relevant information ("Paris"), then focus there. That's attention!</p>

            <h3>Self-Attention: The Core Mechanism</h3>
            <p>Self-attention (used in Transformers) allows each position in a sequence to attend to all positions in the same sequence.</p>

            <h4>Three Key Components:</h4>
            <ol>
                <li><strong>Query (Q):</strong> "What am I looking for?"</li>
                <li><strong>Key (K):</strong> "What do I represent?"</li>
                <li><strong>Value (V):</strong> "What information do I carry?"</li>
            </ol>

            <h4>The Attention Formula:</h4>
            <pre><code>
Attention(Q, K, V) = softmax(QK^T / √d_k) V

Where:
- Q·K^T computes similarity scores between queries and keys
- √d_k scales scores (prevents large values)
- softmax converts scores to probabilities (sum to 1)
- Result is weighted sum of values
            </code></pre>

            <h3>Attention in Action: Example</h3>
            <pre><code>
import torch
import torch.nn.functional as F

def simple_attention(query, key, value):
    """
    Simple self-attention implementation

    Args:
        query: (batch, seq_len, d_model)
        key: (batch, seq_len, d_model)
        value: (batch, seq_len, d_model)
    """
    d_k = query.size(-1)

    # Compute attention scores
    scores = torch.matmul(query, key.transpose(-2, -1))  # (batch, seq_len, seq_len)
    scores = scores / torch.sqrt(torch.tensor(d_k, dtype=torch.float32))

    # Convert to probabilities
    attention_weights = F.softmax(scores, dim=-1)

    # Apply to values
    output = torch.matmul(attention_weights, value)  # (batch, seq_len, d_model)

    return output, attention_weights

# Example usage
batch_size, seq_len, d_model = 1, 5, 512
query = torch.randn(batch_size, seq_len, d_model)
key = torch.randn(batch_size, seq_len, d_model)
value = torch.randn(batch_size, seq_len, d_model)

output, weights = simple_attention(query, key, value)

print(f"Attention weights shape: {weights.shape}")  # (1, 5, 5)
print(f"Output shape: {output.shape}")  # (1, 5, 512)
            </code></pre>

            <h3>Multi-Head Attention</h3>
            <p>Instead of one attention mechanism, use multiple "heads" that learn different aspects:</p>

            <pre><code>
import torch.nn as nn

class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, num_heads):
        super().__init__()
        assert d_model % num_heads == 0

        self.d_model = d_model
        self.num_heads = num_heads
        self.d_k = d_model // num_heads

        # Linear projections
        self.W_q = nn.Linear(d_model, d_model)
        self.W_k = nn.Linear(d_model, d_model)
        self.W_v = nn.Linear(d_model, d_model)
        self.W_o = nn.Linear(d_model, d_model)

    def split_heads(self, x):
        """Split into multiple heads"""
        batch_size, seq_len, d_model = x.size()
        return x.view(batch_size, seq_len, self.num_heads, self.d_k).transpose(1, 2)

    def forward(self, query, key, value, mask=None):
        batch_size = query.size(0)

        # Linear projections and split into heads
        Q = self.split_heads(self.W_q(query))  # (batch, heads, seq_len, d_k)
        K = self.split_heads(self.W_k(key))
        V = self.split_heads(self.W_v(value))

        # Scaled dot-product attention
        scores = torch.matmul(Q, K.transpose(-2, -1)) / torch.sqrt(torch.tensor(self.d_k, dtype=torch.float32))

        if mask is not None:
            scores = scores.masked_fill(mask == 0, -1e9)

        attention_weights = F.softmax(scores, dim=-1)
        attention_output = torch.matmul(attention_weights, V)

        # Concatenate heads
        attention_output = attention_output.transpose(1, 2).contiguous()
        attention_output = attention_output.view(batch_size, -1, self.d_model)

        # Final linear projection
        output = self.W_o(attention_output)

        return output, attention_weights

# Example
d_model, num_heads = 512, 8
mha = MultiHeadAttention(d_model, num_heads)

x = torch.randn(2, 10, 512)  # (batch=2, seq_len=10, d_model=512)
output, weights = mha(x, x, x)

print(f"Output shape: {output.shape}")  # (2, 10, 512)
            </code></pre>

            <h3>Why Multiple Heads?</h3>
            <p>Different heads can learn different types of relationships:</p>
            <ul>
                <li><strong>Head 1:</strong> Might focus on syntactic relationships (subject-verb agreement)</li>
                <li><strong>Head 2:</strong> Might focus on semantic relationships (synonyms, antonyms)</li>
                <li><strong>Head 3:</strong> Might focus on positional relationships (nearby words)</li>
                <li><strong>Head 4:</strong> Might focus on long-range dependencies</li>
            </ul>

            <h3>Types of Attention</h3>

            <h4>1. Self-Attention (Intra-Attention)</h4>
            <p>Attention between elements of the same sequence:</p>
            <pre><code>
# In "The cat sat on the mat", each word attends to all other words
# "cat" might attend strongly to "sat" and "mat"
# "on" might attend to "sat" and "mat"
            </code></pre>

            <h4>2. Cross-Attention (Encoder-Decoder Attention)</h4>
            <p>Attention between two different sequences:</p>
            <pre><code>
# Translation: English → French
# French decoder attends to English encoder outputs
# When generating "chat" (cat), attend to "cat" in English

# In CLIP: Image attends to text description
            </code></pre>

            <h4>3. Masked Attention</h4>
            <p>Prevents attending to future positions (for autoregressive models like GPT):</p>
            <pre><code>
def create_causal_mask(seq_len):
    """Create mask that prevents attending to future positions"""
    mask = torch.triu(torch.ones(seq_len, seq_len), diagonal=1).bool()
    return ~mask  # True where attention is allowed

# Example for sequence length 5
mask = create_causal_mask(5)
print(mask)
# [[1, 0, 0, 0, 0],   # Position 0 can only see itself
#  [1, 1, 0, 0, 0],   # Position 1 can see 0 and 1
#  [1, 1, 1, 0, 0],   # Position 2 can see 0, 1, and 2
#  [1, 1, 1, 1, 0],
#  [1, 1, 1, 1, 1]]   # Position 4 can see all previous
            </code></pre>

            <h3>Visualizing Attention</h3>
            <pre><code>
from transformers import AutoTokenizer, AutoModel
import torch

# Load model
tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')
model = AutoModel.from_pretrained('bert-base-uncased', output_attentions=True)

# Tokenize input
text = "The cat sat on the mat"
inputs = tokenizer(text, return_tensors='pt')

# Get attention weights
outputs = model(**inputs)
attention = outputs.attentions  # Tuple of attention weights from each layer

# attention[0] shape: (batch=1, heads=12, seq_len=8, seq_len=8)
# 12 heads, sequence length 8 (including [CLS] and [SEP])

# Visualize attention for first head of first layer
import matplotlib.pyplot as plt
import seaborn as sns

att_matrix = attention[0][0, 0].detach().numpy()  # First head
tokens = tokenizer.convert_ids_to_tokens(inputs['input_ids'][0])

plt.figure(figsize=(10, 8))
sns.heatmap(att_matrix, xticklabels=tokens, yticklabels=tokens, cmap='viridis')
plt.title('Attention Weights - Layer 0, Head 0')
plt.show()
            </code></pre>

            <h3>Positional Encoding</h3>
            <p>Since attention has no inherent notion of order, we add positional information:</p>

            <pre><code>
import math

def get_positional_encoding(seq_len, d_model):
    """
    Sinusoidal positional encodings

    PE(pos, 2i) = sin(pos / 10000^(2i/d_model))
    PE(pos, 2i+1) = cos(pos / 10000^(2i/d_model))
    """
    position = torch.arange(seq_len).unsqueeze(1)
    div_term = torch.exp(torch.arange(0, d_model, 2) * -(math.log(10000.0) / d_model))

    pe = torch.zeros(seq_len, d_model)
    pe[:, 0::2] = torch.sin(position * div_term)
    pe[:, 1::2] = torch.cos(position * div_term)

    return pe

# Generate positional encodings
pos_encoding = get_positional_encoding(seq_len=100, d_model=512)
print(f"Positional encoding shape: {pos_encoding.shape}")  # (100, 512)

# Visualize
plt.figure(figsize=(12, 6))
plt.pcolormesh(pos_encoding.numpy(), cmap='RdBu')
plt.xlabel('Embedding dimension')
plt.ylabel('Position')
plt.colorbar()
plt.title('Positional Encoding')
plt.show()
            </code></pre>

            <h3>Complete Transformer Block</h3>
            <pre><code>
class TransformerBlock(nn.Module):
    def __init__(self, d_model, num_heads, d_ff, dropout=0.1):
        super().__init__()

        # Multi-head attention
        self.attention = MultiHeadAttention(d_model, num_heads)

        # Feed-forward network
        self.ff = nn.Sequential(
            nn.Linear(d_model, d_ff),
            nn.ReLU(),
            nn.Linear(d_ff, d_model)
        )

        # Layer normalization
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)

        # Dropout
        self.dropout = nn.Dropout(dropout)

    def forward(self, x, mask=None):
        # Multi-head attention with residual connection
        attn_output, _ = self.attention(x, x, x, mask)
        x = self.norm1(x + self.dropout(attn_output))

        # Feed-forward with residual connection
        ff_output = self.ff(x)
        x = self.norm2(x + self.dropout(ff_output))

        return x

# Stack multiple blocks
class TransformerEncoder(nn.Module):
    def __init__(self, num_layers, d_model, num_heads, d_ff):
        super().__init__()
        self.layers = nn.ModuleList([
            TransformerBlock(d_model, num_heads, d_ff)
            for _ in range(num_layers)
        ])

    def forward(self, x):
        for layer in self.layers:
            x = layer(x)
        return x

# Example usage
encoder = TransformerEncoder(num_layers=6, d_model=512, num_heads=8, d_ff=2048)
x = torch.randn(2, 10, 512)  # (batch, seq_len, d_model)
output = encoder(x)
print(f"Encoder output shape: {output.shape}")  # (2, 10, 512)
            </code></pre>

            <h3>Attention Variants</h3>

            <h4>1. Sparse Attention</h4>
            <p>Only attend to subset of positions (for very long sequences):</p>
            <ul>
                <li><strong>Local Attention:</strong> Only attend to nearby positions</li>
                <li><strong>Global Attention:</strong> Some positions attend globally</li>
                <li><strong>Random Attention:</strong> Random subset of positions</li>
            </ul>

            <h4>2. Linear Attention</h4>
            <p>Reduce O(n²) complexity to O(n):</p>
            <pre><code>
# Standard attention: O(n²) in sequence length
# Linear attention: Reformulate to avoid explicit matrix multiplication
# Used in: Linformer, Performer, Linear Transformer
            </code></pre>

            <h4>3. Cross-Attention Applications</h4>
            <pre><code>
# Image Captioning: Image features attend to generated text
# Visual Question Answering: Question attends to image regions
# CLIP: Text and image attend to each other
# Stable Diffusion: Text prompt guides image generation
            </code></pre>

            <h3>Practical Applications</h3>

            <h4>Using Pre-built Attention in PyTorch</h4>
            <pre><code>
import torch.nn as nn

# PyTorch provides built-in multi-head attention
attention_layer = nn.MultiheadAttention(
    embed_dim=512,
    num_heads=8,
    dropout=0.1,
    batch_first=True  # Use (batch, seq, feature) format
)

# Example usage
query = torch.randn(2, 10, 512)  # (batch, seq_len, embed_dim)
key = torch.randn(2, 10, 512)
value = torch.randn(2, 10, 512)

attn_output, attn_weights = attention_layer(query, key, value)

print(f"Output shape: {attn_output.shape}")  # (2, 10, 512)
print(f"Attention weights shape: {attn_weights.shape}")  # (2, 10, 10)
            </code></pre>

            <h4>Analyzing Attention Patterns</h4>
            <pre><code>
# Extract and analyze what the model attends to
def analyze_attention(text, model, tokenizer, layer=0, head=0):
    inputs = tokenizer(text, return_tensors='pt')
    outputs = model(**inputs, output_attentions=True)

    attention = outputs.attentions[layer][0, head].detach()
    tokens = tokenizer.convert_ids_to_tokens(inputs['input_ids'][0])

    # Find highest attention scores
    for i, token in enumerate(tokens):
        top_attention = attention[i].topk(3)
        print(f"{token} attends most to:")
        for idx, score in zip(top_attention.indices, top_attention.values):
            print(f"  {tokens[idx]}: {score:.4f}")

# Example
text = "The cat sat on the mat"
analyze_attention(text, model, tokenizer)
            </code></pre>

            <h3>Key Insights About Attention</h3>

            <h4>Why Attention Works:</h4>
            <ol>
                <li><strong>Dynamic Computation:</strong> Each output can access all inputs</li>
                <li><strong>Parallel Processing:</strong> All positions computed simultaneously</li>
                <li><strong>Long-Range Dependencies:</strong> Direct connections between distant positions</li>
                <li><strong>Interpretability:</strong> Attention weights show what model focuses on</li>
            </ol>

            <h4>Computational Complexity:</h4>
            <pre><code>
# Self-attention complexity:
# Time: O(n² · d) where n = sequence length, d = dimension
# Memory: O(n²) for storing attention matrix

# For n=512, d=512:
# Standard attention: 512² · 512 = 134M operations
# This grows quadratically with sequence length!

# Solutions for long sequences:
# - Sparse attention
# - Linear attention
# - Sliding window attention
# - Hierarchical attention
            </code></pre>

            <h3>Attention in Different Architectures</h3>

            <h4>BERT (Encoder-only):</h4>
            <ul>
                <li>Bidirectional self-attention</li>
                <li>Can see entire context</li>
                <li>Used for: Classification, NER, Q&A</li>
            </ul>

            <h4>GPT (Decoder-only):</h4>
            <ul>
                <li>Causal (masked) self-attention</li>
                <li>Can only see previous tokens</li>
                <li>Used for: Text generation</li>
            </ul>

            <h4>T5/BART (Encoder-Decoder):</h4>
            <ul>
                <li>Encoder: Bidirectional self-attention</li>
                <li>Decoder: Causal self-attention + cross-attention to encoder</li>
                <li>Used for: Translation, summarization</li>
            </ul>

            <h3>Best Practices</h3>

            <ol>
                <li><strong>Scale Attention Scores:</strong> Always divide by √d_k to prevent vanishing gradients</li>
                <li><strong>Use Layer Normalization:</strong> Stabilizes training</li>
                <li><strong>Add Residual Connections:</strong> Helps gradient flow</li>
                <li><strong>Dropout:</strong> Apply to attention weights and feed-forward layers</li>
                <li><strong>Warm-up Learning Rate:</strong> Start small, gradually increase</li>
                <li><strong>Positional Encodings:</strong> Essential for order information</li>
            </ol>

            <h3>Common Issues and Solutions</h3>

            <ul>
                <li><strong>Out of Memory:</strong>
                    <ul>
                        <li>Problem: Attention matrix grows quadratically</li>
                        <li>Solutions: Gradient checkpointing, sparse attention, smaller batch size</li>
                    </ul>
                </li>
                <li><strong>Training Instability:</strong>
                    <ul>
                        <li>Problem: Exploding/vanishing gradients</li>
                        <li>Solutions: Layer norm, residual connections, gradient clipping</li>
                    </ul>
                </li>
                <li><strong>Poor Long-Sequence Performance:</strong>
                    <ul>
                        <li>Problem: O(n²) complexity</li>
                        <li>Solutions: Sliding window, sparse patterns, hierarchical attention</li>
                    </ul>
                </li>
            </ul>

            <h3>Conclusion</h3>
            <p>Attention mechanisms transformed AI by enabling models to selectively focus on relevant information, process sequences in parallel, and capture long-range dependencies. From powering language models like GPT and BERT to enabling breakthroughs in computer vision, speech recognition, and multi-modal AI, attention has become the foundational building block of modern deep learning. Understanding how attention works—from the basic scaled dot-product to multi-head attention and transformers—is essential for anyone working with state-of-the-art AI systems.</p>
        `
    },
    {
        id: 'b12',
        title: 'Prompt Engineering Basics',
        icon: '💬',
        description: 'Crafting effective prompts to get better AI responses.',
        readTime: '12 min',
        level: 'Beginner',
        content: `
            <h2>Prompt Engineering: The Art of Talking to AI</h2>
            <p>Prompt engineering is the practice of crafting effective inputs to get the best outputs from AI models. It's become a crucial skill as LLMs like GPT-4 and Claude power more applications. A well-crafted prompt can mean the difference between useless gibberish and exactly what you need.</p>

            <h3>Why Prompt Engineering Matters</h3>
            <p>Large language models are incredibly powerful but need clear instructions. They don't "understand" in the human sense—they predict text based on patterns. Good prompts guide the model toward useful, accurate responses.</p>

            <h3>Basic Principles</h3>

            <h4>1. Be Clear and Specific</h4>
            <pre><code>
❌ Bad: "Write about dogs"
✅ Good: "Write a 200-word informative paragraph about Golden Retriever temperament and care requirements for first-time dog owners"
            </code></pre>

            <h4>2. Provide Context</h4>
            <pre><code>
❌ Bad: "Explain quantum computing"
✅ Good: "I'm a high school student with basic physics knowledge. Explain quantum computing using simple analogies, focusing on why it's different from regular computers"
            </code></pre>

            <h4>3. Specify Format</h4>
            <pre><code>
❌ Bad: "List programming languages"
✅ Good: "Create a markdown table of the top 5 programming languages for web development, with columns for: Language, Primary Use, Difficulty Level, Popular Frameworks"
            </code></pre>

            <h3>Core Techniques</h3>

            <h4>Zero-Shot Prompting</h4>
            <p>Give instructions without examples:</p>
            <pre><code>
Prompt: "Classify the sentiment of this review as positive, negative, or neutral: 'The product works okay but shipping was slow.'"

Response: "Neutral - Mixed feedback with both functional satisfaction and delivery criticism"
            </code></pre>

            <h4>Few-Shot Prompting</h4>
            <p>Provide examples to guide the model:</p>
            <pre><code>
Prompt: "Extract company name and location from text.

Example 1:
Text: 'Apple Inc. is headquartered in Cupertino, California'
Output: {company: 'Apple Inc.', location: 'Cupertino, California'}

Example 2:
Text: 'Microsoft operates from Redmond, Washington'
Output: {company: 'Microsoft', location: 'Redmond, Washington'}

Now extract from:
Text: 'Tesla is based in Austin, Texas'
Output:"

Response: {company: 'Tesla', location: 'Austin, Texas'}
            </code></pre>

            <h4>Chain-of-Thought (CoT)</h4>
            <p>Ask the model to show its reasoning:</p>
            <pre><code>
Prompt: "Solve this step-by-step:
If a train travels 120 miles in 2 hours, and then 180 miles in 3 hours, what's the average speed for the entire journey?"

Response:
"Let me work through this step-by-step:

Step 1: Calculate total distance
- First segment: 120 miles
- Second segment: 180 miles
- Total distance: 120 + 180 = 300 miles

Step 2: Calculate total time
- First segment: 2 hours
- Second segment: 3 hours
- Total time: 2 + 3 = 5 hours

Step 3: Calculate average speed
- Average speed = Total distance / Total time
- Average speed = 300 miles / 5 hours = 60 mph

Answer: The average speed is 60 miles per hour."
            </code></pre>

            <h3>Role Prompting</h3>
            <p>Assign the AI a specific role or persona:</p>
            <pre><code>
"You are an experienced Python developer specializing in data science. A junior developer asks: 'Should I use pandas or SQL for data analysis?' Provide detailed advice considering performance, learning curve, and use cases."
            </code></pre>

            <h3>Prompt Patterns</h3>

            <h4>Instruction + Context + Input</h4>
            <pre><code>
[Instruction]: Translate the following English text to Spanish
[Context]: This is for a professional business email
[Input]: "We appreciate your patience and will update you soon"
            </code></pre>

            <h4>Template with Variables</h4>
            <pre><code>
Generate a product description for:
- Product: {product_name}
- Key features: {features}
- Target audience: {audience}
- Tone: {tone}

Example:
Product: SmartWatch Pro
Key features: Heart rate monitoring, GPS, 7-day battery
Target audience: Fitness enthusiasts
Tone: Energetic and motivating
            </code></pre>

            <h3>Advanced Techniques</h3>

            <h4>Delimiters for Clarity</h4>
            <pre><code>
Summarize the text between triple quotes in one sentence:

"""
[Long text here spanning multiple paragraphs about climate change, renewable energy, and global policy...]
"""
            </code></pre>

            <h4>Constraints and Requirements</h4>
            <pre><code>
Write a Python function that:
- Takes a list of numbers as input
- Returns the median value
- Handles empty lists with appropriate error
- Includes docstring
- Uses type hints
- Is less than 15 lines of code
            </code></pre>

            <h4>Output Format Specification</h4>
            <pre><code>
Extract information and return as JSON:
Text: "John Smith, age 35, works as a Software Engineer at Google in Mountain View"

Required format:
{
  "name": "",
  "age": 0,
  "occupation": "",
  "company": "",
  "location": ""
}
            </code></pre>

            <h3>Common Pitfalls</h3>

            <ul>
                <li><strong>Too Vague:</strong> "Tell me about AI" vs "Explain the difference between supervised and unsupervised learning with real-world examples"</li>
                <li><strong>Conflicting Instructions:</strong> "Be brief but comprehensive" - choose one priority</li>
                <li><strong>Assuming Knowledge:</strong> The model doesn't remember previous conversations (unless using chat history)</li>
                <li><strong>No Format Guidance:</strong> Specify if you want bullet points, paragraphs, code, JSON, etc.</li>
            </ul>

            <h3>Practical Example: Code Generation</h3>
            <pre><code>
❌ Weak Prompt:
"Create a login function"

✅ Strong Prompt:
"Create a Python function for user login with these requirements:
- Function name: authenticate_user
- Parameters: username (str), password (str), user_database (dict)
- Returns: tuple of (success: bool, message: str)
- Include password hashing comparison
- Handle cases: user not found, wrong password, successful login
- Add comprehensive docstring
- Include type hints
- Add 3 example uses in comments"
            </code></pre>

            <h3>Testing and Iteration</h3>
            <pre><code>
# Start simple
v1: "Explain neural networks"

# Add specificity
v2: "Explain neural networks for beginners"

# Add context
v3: "I'm a web developer learning ML. Explain neural networks using analogies to web concepts"

# Add format
v4: "I'm a web developer learning ML. Explain neural networks using analogies to web concepts. Structure as: 1) Simple analogy, 2) Key components, 3) How it works, 4) Common uses"
            </code></pre>

            <h3>Best Practices</h3>
            <ol>
                <li><strong>Start Simple:</strong> Begin with a basic prompt, then refine</li>
                <li><strong>Be Explicit:</strong> Don't assume the model knows what you want</li>
                <li><strong>Use Examples:</strong> Show, don't just tell (few-shot learning)</li>
                <li><strong>Specify Length:</strong> "In 3 sentences" or "approximately 200 words"</li>
                <li><strong>Request Verification:</strong> "Double-check your answer" or "Verify with step-by-step reasoning"</li>
                <li><strong>Iterate:</strong> Refine prompts based on outputs</li>
            </ol>

            <h3>Prompt Templates for Common Tasks</h3>

            <h4>Code Review</h4>
            <pre><code>
Review this [LANGUAGE] code for:
- Bugs and errors
- Performance issues
- Security vulnerabilities
- Best practice violations
- Readability improvements

Code:
```
[CODE HERE]
```

Provide specific line-by-line feedback with suggestions.
            </code></pre>

            <h4>Data Analysis</h4>
            <pre><code>
Analyze this dataset and provide:
1. Summary statistics
2. Key insights (3-5 points)
3. Potential issues or anomalies
4. Recommendations for next steps

Data: [CSV or JSON]
            </code></pre>

            <h3>Conclusion</h3>
            <p>Prompt engineering is both an art and a science. The key is being clear, specific, and iterative. Start with basic instructions, add context and examples, specify formats, and refine based on results. As AI models improve, good prompting skills become increasingly valuable for getting accurate, useful outputs efficiently.</p>
        `
    },
    {
        id: 'b13',
        title: 'Temperature and Sampling',
        icon: '🌡️',
        description: 'Controlling randomness and creativity in AI outputs.',
        readTime: '10 min',
        level: 'Beginner',
        content: `
            <h2>Temperature and Sampling: Controlling AI Creativity</h2>
            <p>When AI generates text, it doesn't just pick the most likely next word. It uses sampling strategies to balance between predictability and creativity. Temperature and other sampling parameters are the dials that control this balance.</p>

            <h3>How Text Generation Works</h3>
            <p>At each step, the model produces a probability distribution over all possible next tokens:</p>
            <pre><code>
Input: "The cat sat on the"
Model probabilities:
- "mat": 45%
- "floor": 25%
- "chair": 15%
- "roof": 8%
- "table": 5%
- [other tokens]: 2%
            </code></pre>

            <h3>Temperature: The Creativity Dial</h3>
            <p>Temperature (T) controls how "confident" the model is in its predictions. It's applied to the logits (raw scores) before converting to probabilities.</p>

            <h4>Formula:</h4>
            <pre><code>
probability(token_i) = exp(logit_i / T) / Σ exp(logit_j / T)
            </code></pre>

            <h4>Temperature Values:</h4>
            <ul>
                <li><strong>T = 0:</strong> Greedy decoding - always pick highest probability (deterministic)</li>
                <li><strong>T = 0.1-0.7:</strong> Low temperature - focused, predictable, factual</li>
                <li><strong>T = 0.8-1.0:</strong> Moderate - balanced creativity and coherence</li>
                <li><strong>T = 1.5-2.0:</strong> High - very creative, more random, can be incoherent</li>
            </ul>

            <h3>Visual Example</h3>
            <pre><code>
Original probabilities: [0.5, 0.3, 0.15, 0.05]

Temperature = 0.5 (Low):
[0.65, 0.25, 0.08, 0.02]  # More peaked, less random

Temperature = 1.0 (Normal):
[0.5, 0.3, 0.15, 0.05]    # Original distribution

Temperature = 2.0 (High):
[0.35, 0.30, 0.22, 0.13]  # Flatter, more random
            </code></pre>

            <h3>Practical Examples</h3>

            <h4>Temperature = 0 (Deterministic)</h4>
            <pre><code>
Prompt: "The capital of France is"
Output: "Paris." (same every time)

Use cases:
- Factual questions
- Code generation
- Translation
- Data extraction
            </code></pre>

            <h4>Temperature = 0.7 (Balanced)</h4>
            <pre><code>
Prompt: "Write a story opening:"
Output: "The old lighthouse stood alone on the rocky cliff, its beam cutting through the morning fog. Sarah had been its keeper for three years, but today felt different."

Use cases:
- General writing
- Conversations
- Creative tasks with coherence needs
            </code></pre>

            <h4>Temperature = 1.5 (Creative)</h4>
            <pre><code>
Prompt: "Describe a sunset:"
Output: "Tangerine whispers melted across the horizon, painting the clouds in rebellious purples and impossible golds, while the sun—that ancient clockmaker—descended into the waiting arms of twilight."

Use cases:
- Poetry
- Brainstorming
- Creative fiction
- Experimental writing
            </code></pre>

            <h3>Other Sampling Parameters</h3>

            <h4>Top-K Sampling</h4>
            <p>Only consider the K most likely tokens:</p>
            <pre><code>
top_k = 50  # Only sample from top 50 tokens

Example:
All tokens: 50,000
After top_k=50: Only consider 50 most likely
Prevents very unlikely tokens from being selected
            </code></pre>

            <h4>Top-P (Nucleus) Sampling</h4>
            <p>Sample from smallest set of tokens whose cumulative probability exceeds P:</p>
            <pre><code>
top_p = 0.9  # Consider tokens that make up 90% probability mass

Token probabilities: [0.4, 0.3, 0.15, 0.1, 0.05, ...]
Cumulative: [0.4, 0.7, 0.85, 0.95, ...]
With top_p=0.9: Consider first 4 tokens only (cumsum = 0.95)

Dynamic cutoff adapts to probability distribution!
            </code></pre>

            <h4>Combining Parameters</h4>
            <pre><code>
import openai

response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Write a haiku"}],
    temperature=0.8,      # Moderate creativity
    top_p=0.95,          # Nucleus sampling
    max_tokens=50,       # Response length limit
    frequency_penalty=0.3, # Reduce repetition
    presence_penalty=0.3   # Encourage new topics
)
            </code></pre>

            <h3>Repetition Penalties</h3>

            <h4>Frequency Penalty</h4>
            <p>Reduces probability of tokens based on how often they've appeared:</p>
            <pre><code>
frequency_penalty = 0.5  # Range: -2.0 to 2.0

Positive: Penalize frequent tokens (reduce repetition)
Negative: Encourage frequent tokens (increase repetition)
            </code></pre>

            <h4>Presence Penalty</h4>
            <p>Penalizes tokens that have appeared at all (regardless of count):</p>
            <pre><code>
presence_penalty = 0.6  # Range: -2.0 to 2.0

Positive: Encourage new topics/words
Negative: Stay on same topics
            </code></pre>

            <h3>Parameter Combinations for Different Use Cases</h3>

            <h4>Factual Q&A</h4>
            <pre><code>
temperature = 0.0
top_p = 1.0
frequency_penalty = 0.0
presence_penalty = 0.0

Goal: Deterministic, accurate, focused
            </code></pre>

            <h4>Creative Writing</h4>
            <pre><code>
temperature = 0.9
top_p = 0.95
frequency_penalty = 0.5
presence_penalty = 0.3

Goal: Creative, varied, interesting, coherent
            </code></pre>

            <h4>Code Generation</h4>
            <pre><code>
temperature = 0.2
top_p = 0.95
frequency_penalty = 0.0
presence_penalty = 0.0

Goal: Correct, consistent, following best practices
            </code></pre>

            <h4>Brainstorming</h4>
            <pre><code>
temperature = 1.2
top_p = 0.98
frequency_penalty = 0.8
presence_penalty = 0.6

Goal: Diverse ideas, avoid repetition, explore widely
            </code></pre>

            <h3>Implementing Sampling in PyTorch</h3>
            <pre><code>
import torch
import torch.nn.functional as F

def sample_with_temperature(logits, temperature=1.0, top_k=0, top_p=1.0):
    """
    Sample next token with temperature and top-k/top-p filtering

    Args:
        logits: (vocab_size,) unnormalized log probabilities
        temperature: Sampling temperature
        top_k: Keep only top k tokens (0 = disabled)
        top_p: Nucleus sampling threshold
    """
    # Apply temperature
    logits = logits / temperature

    # Top-K filtering
    if top_k > 0:
        top_k_logits, top_k_indices = torch.topk(logits, top_k)
        logits = torch.full_like(logits, float('-inf'))
        logits[top_k_indices] = top_k_logits

    # Top-P (nucleus) filtering
    if top_p < 1.0:
        sorted_logits, sorted_indices = torch.sort(logits, descending=True)
        cumulative_probs = torch.cumsum(F.softmax(sorted_logits, dim=-1), dim=-1)

        # Remove tokens with cumulative probability above threshold
        sorted_indices_to_remove = cumulative_probs > top_p
        sorted_indices_to_remove[1:] = sorted_indices_to_remove[:-1].clone()
        sorted_indices_to_remove[0] = 0

        logits[sorted_indices[sorted_indices_to_remove]] = float('-inf')

    # Sample from distribution
    probs = F.softmax(logits, dim=-1)
    next_token = torch.multinomial(probs, num_samples=1)

    return next_token

# Example usage
vocab_size = 50000
logits = torch.randn(vocab_size)  # Model output

token = sample_with_temperature(
    logits,
    temperature=0.8,
    top_k=50,
    top_p=0.95
)
            </code></pre>

            <h3>Best Practices</h3>
            <ol>
                <li><strong>Start Conservative:</strong> Begin with temperature=0.7, adjust based on results</li>
                <li><strong>Match Task to Temperature:</strong> Factual=low, Creative=high</li>
                <li><strong>Use Top-P over Top-K:</strong> More adaptive to context</li>
                <li><strong>Combine Parameters:</strong> Temperature + top_p + penalties work well together</li>
                <li><strong>Test Thoroughly:</strong> Generate multiple samples to see variance</li>
            </ol>

            <h3>Common Issues</h3>
            <ul>
                <li><strong>Temperature too high:</strong> Incoherent, nonsensical outputs</li>
                <li><strong>Temperature too low:</strong> Repetitive, boring, predictable</li>
                <li><strong>High penalties:</strong> Forced topic switching, unnatural flow</li>
                <li><strong>Low top_p:</strong> Limited vocabulary, repetitive phrases</li>
            </ul>

            <h3>Conclusion</h3>
            <p>Temperature and sampling parameters give you fine-grained control over AI creativity and randomness. Low temperature for facts and code, high temperature for creative writing, and moderate for general use. Combine with top-p sampling and penalties to fine-tune the balance between creativity and coherence for your specific use case.</p>
        `
    },
    {
        id: 'b14',
        title: 'Context Windows',
        icon: '🪟',
        description: 'Understanding AI memory limits and how to work with them.',
        readTime: '10 min',
        level: 'Beginner',
        content: `
            <h2>Context Windows: AI's Memory Limits</h2>
            <p>Context window is the maximum amount of text (measured in tokens) that a language model can process at once. It's like the model's "working memory"—everything it can "see" and consider when generating a response.</p>

            <h3>What is a Context Window?</h3>
            <p>The context window includes:</p>
            <ul>
                <li><strong>Input prompt:</strong> Your question or instruction</li>
                <li><strong>Conversation history:</strong> Previous messages (in chat applications)</li>
                <li><strong>System prompts:</strong> Background instructions to the model</li>
                <li><strong>Response:</strong> The model's generated output</li>
            </ul>

            <h3>Context Window Sizes</h3>
            <pre><code>
Model Comparison:

GPT-3.5 Turbo:      4,096 tokens  (~3,000 words)
GPT-3.5 Turbo-16k: 16,384 tokens  (~12,000 words)
GPT-4:              8,192 tokens  (~6,000 words)
GPT-4-32k:         32,768 tokens  (~24,000 words)
GPT-4 Turbo:      128,000 tokens  (~96,000 words)
Claude 2:         100,000 tokens  (~75,000 words)
Claude 3:         200,000 tokens  (~150,000 words)
Gemini 1.5 Pro: 1,000,000 tokens  (~700,000 words)
            </code></pre>

            <h3>Why Context Windows Matter</h3>

            <h4>1. Conversation Length</h4>
            <pre><code>
With 4K context:
- Short conversations (10-15 exchanges)
- Loses early messages when limit reached

With 100K context:
- Very long conversations (hundreds of exchanges)
- Remember entire conversation history
            </code></pre>

            <h4>2. Document Processing</h4>
            <pre><code>
Task: Analyze a research paper

4K tokens:  Can handle ~3 pages
16K tokens: Can handle ~12 pages
100K tokens: Can handle entire book chapters
1M tokens: Can process multiple books
            </code></pre>

            <h4>3. Code Analysis</h4>
            <pre><code>
4K context:   Single file (~200 lines)
32K context:  Multiple files (~2000 lines)
100K context: Entire small codebase
            </code></pre>

            <h3>What Happens When You Exceed the Limit?</h3>

            <h4>Option 1: Truncation (Most Common)</h4>
            <pre><code>
# Oldest messages are dropped
Conversation: [msg1, msg2, msg3, msg4, msg5]
Context limit reached → [msg3, msg4, msg5]

# Model forgets msg1 and msg2!
            </code></pre>

            <h4>Option 2: Error</h4>
            <pre><code>
{
  "error": {
    "message": "This model's maximum context length is 4096 tokens. However, your messages resulted in 5234 tokens.",
    "type": "invalid_request_error"
  }
}
            </code></pre>

            <h3>Managing Context Windows</h3>

            <h4>1. Count Tokens Before Sending</h4>
            <pre><code>
import tiktoken

def count_tokens(text, model="gpt-4"):
    encoding = tiktoken.encoding_for_model(model)
    return len(encoding.encode(text))

text = "Your long document here..."
token_count = count_tokens(text)

max_tokens = 8192  # GPT-4 limit
remaining = max_tokens - token_count

print(f"Text uses {token_count} tokens")
print(f"Room for {remaining} tokens in response")
            </code></pre>

            <h4>2. Sliding Window for Long Conversations</h4>
            <pre><code>
def manage_conversation(messages, max_tokens=4096):
    """Keep conversation within token limit"""
    total_tokens = 0
    kept_messages = []

    # Always keep system message
    if messages[0]["role"] == "system":
        kept_messages.append(messages[0])
        total_tokens += count_tokens(messages[0]["content"])

    # Add messages from newest to oldest
    for msg in reversed(messages[1:]):
        msg_tokens = count_tokens(msg["content"])
        if total_tokens + msg_tokens < max_tokens - 500:  # Reserve 500 for response
            kept_messages.insert(1, msg)  # Insert after system message
            total_tokens += msg_tokens
        else:
            break

    return kept_messages

# Usage
conversation = [
    {"role": "system", "content": "You are a helpful assistant"},
    {"role": "user", "content": "Message 1"},
    {"role": "assistant", "content": "Response 1"},
    # ... many more messages
]

managed = manage_conversation(conversation, max_tokens=4096)
            </code></pre>

            <h4>3. Summarization for Long Documents</h4>
            <pre><code>
def process_long_document(document, chunk_size=3000):
    """Process document in chunks with summarization"""

    # Split into chunks
    chunks = split_into_chunks(document, chunk_size)
    summaries = []

    # Summarize each chunk
    for chunk in chunks:
        summary = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{
                "role": "user",
                "content": f"Summarize this concisely:\n\n{chunk}"
            }]
        )
        summaries.append(summary.choices[0].message.content)

    # Final synthesis
    combined_summary = "\n\n".join(summaries)
    final_analysis = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{
            "role": "user",
            "content": f"Based on these summaries, provide a comprehensive analysis:\n\n{combined_summary}"
        }]
    )

    return final_analysis.choices[0].message.content
            </code></pre>

            <h4>4. Retrieval-Augmented Generation (RAG)</h4>
            <pre><code>
# Instead of sending entire document:
# 1. Split document into chunks
# 2. Create embeddings for chunks
# 3. Store in vector database
# 4. Retrieve only relevant chunks for query

from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')

# Index document
chunks = split_document(large_document, chunk_size=500)
embeddings = model.encode(chunks)
# Store in vector DB (Pinecone, ChromaDB, etc.)

# Query time
query = "What does the document say about X?"
query_embedding = model.encode(query)
# Retrieve top 5 most relevant chunks
relevant_chunks = vector_db.search(query_embedding, top_k=5)

# Only send relevant context to LLM
response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[{
        "role": "user",
        "content": f"Context:\n{relevant_chunks}\n\nQuestion: {query}"
    }]
)
            </code></pre>

            <h3>Strategies for Different Use Cases</h3>

            <h4>Long Conversations</h4>
            <ul>
                <li>Keep system prompt + recent N messages</li>
                <li>Periodically summarize old messages</li>
                <li>Store full history externally, only send summary + recent</li>
            </ul>

            <h4>Document Analysis</h4>
            <ul>
                <li>Use models with large context (Claude, Gemini)</li>
                <li>Implement RAG for precise retrieval</li>
                <li>Chunk-summarize-synthesize pipeline</li>
            </ul>

            <h4>Code Review</h4>
            <ul>
                <li>Send only relevant files/functions</li>
                <li>Provide file structure + specific code sections</li>
                <li>Use multiple API calls for different parts</li>
            </ul>

            <h3>Monitoring Context Usage</h3>
            <pre><code>
response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=messages
)

# Check token usage
usage = response['usage']
print(f"Prompt tokens: {usage['prompt_tokens']}")
print(f"Completion tokens: {usage['completion_tokens']}")
print(f"Total tokens: {usage['total_tokens']}")

# Warning if approaching limit
if usage['total_tokens'] > 7000:  # GPT-4 8K limit
    print("⚠️ Approaching context limit!")
            </code></pre>

            <h3>Cost Implications</h3>
            <pre><code>
# Pricing example (GPT-4)
# Input: $0.03 per 1K tokens
# Output: $0.06 per 1K tokens

Long context = more tokens = higher cost

Example:
- 4K input + 500 output = $0.15
- 30K input + 500 output = $0.93

Use larger contexts only when necessary!
            </code></pre>

            <h3>Best Practices</h3>
            <ol>
                <li><strong>Choose Right Model:</strong> Match context needs to model capability</li>
                <li><strong>Monitor Usage:</strong> Track token counts in responses</li>
                <li><strong>Implement Truncation:</strong> Handle gracefully when limits approached</li>
                <li><strong>Use RAG:</strong> For large knowledge bases, retrieve selectively</li>
                <li><strong>Summarize Proactively:</strong> Compress old conversation history</li>
                <li><strong>Reserve Space:</strong> Leave room for response (500-1000 tokens)</li>
            </ol>

            <h3>Conclusion</h3>
            <p>Context windows define what AI can "remember" and process. Understanding these limits helps you design better applications, manage costs, and ensure your AI systems work reliably. Use the right model for your needs, implement smart context management, and leverage techniques like RAG for large-scale document processing.</p>
        `
    },
    {
        id: 'b15',
        title: 'Model Parameters',
        icon: '⚖️',
        description: 'What model size means and why it matters.',
        readTime: '11 min',
        level: 'Beginner',
        content: `
            <h2>Model Parameters: Size Matters (But Not Always)</h2>
            <p>When you hear "GPT-4 has 1.76 trillion parameters" or "LLaMA 7B", those numbers refer to the model's parameters—the learned weights that enable AI to function. Understanding parameters helps you choose the right model for your needs.</p>

            <h3>What are Parameters?</h3>
            <p>Parameters are the numbers (weights and biases) that a neural network learns during training. Think of them as the "knowledge" stored in the model.</p>

            <pre><code>
Simple example:
y = w₁*x₁ + w₂*x₂ + b

This has 3 parameters: w₁, w₂, b

Modern LLMs:
- Billions to trillions of these weights
- Organized in layers (attention, feed-forward, etc.)
- Each parameter is typically a 16-bit or 32-bit number
            </code></pre>

            <h3>Parameter Count Examples</h3>
            <pre><code>
Small Models:
- DistilBERT: 66M parameters
- GPT-2 Small: 117M parameters
- BERT Base: 110M parameters

Medium Models:
- GPT-2 Medium: 345M parameters
- BERT Large: 340M parameters
- RoBERTa Base: 125M parameters

Large Models:
- GPT-2 Large: 774M parameters
- GPT-3 Small: 1.3B parameters
- LLaMA 7B: 7B parameters

Huge Models:
- GPT-3: 175B parameters
- LLaMA 70B: 70B parameters
- GPT-4: ~1.76T parameters (estimated)
- Gemini Ultra: Unknown (very large)
            </code></pre>

            <h3>What More Parameters Enable</h3>

            <h4>1. Better Understanding</h4>
            <p>Larger models can capture more nuanced patterns:</p>
            <pre><code>
Small model (100M):
Q: "What's the capital of France?"
A: "Paris" ✓

Q: "Explain quantum entanglement"
A: "Particles linked..." (basic, may be inaccurate)

Large model (175B):
Q: "Explain quantum entanglement"
A: "When two particles become entangled, measuring one instantaneously affects the other regardless of distance. This apparent 'spooky action at a distance' (Einstein's term) doesn't violate relativity because no information travels faster than light..." ✓ (detailed, accurate)
            </code></pre>

            <h4>2. Emergent Capabilities</h4>
            <p>Certain abilities only appear at scale:</p>
            <ul>
                <li><strong>Few-shot learning:</strong> Learn from examples (emerges ~13B parameters)</li>
                <li><strong>Chain-of-thought reasoning:</strong> Multi-step logic (emerges ~100B)</li>
                <li><strong>Code understanding:</strong> Complex programming (scales with size)</li>
            </ul>

            <h4>3. Better Generalization</h4>
            <p>Larger models handle edge cases and rare scenarios better</p>

            <h3>Parameter Count vs Memory Usage</h3>
            <pre><code>
Memory required = Parameters × Bytes_per_parameter

Precision formats:
- FP32 (32-bit): 4 bytes per parameter
- FP16 (16-bit): 2 bytes per parameter
- INT8 (8-bit): 1 byte per parameter
- INT4 (4-bit): 0.5 bytes per parameter

Examples:
7B model in FP16:  7B × 2 bytes = 14 GB
70B model in FP16: 70B × 2 bytes = 140 GB
175B model in INT8: 175B × 1 byte = 175 GB

Plus: Overhead for activations, gradients during training!
            </code></pre>

            <h3>Inference Requirements</h3>
            <pre><code>
Model Size | FP16 Memory | Recommended GPU
-----------|-------------|----------------
7B         | 14 GB       | RTX 4090 (24GB)
13B        | 26 GB       | A100 (40GB)
70B        | 140 GB      | 4× A100 (40GB each)
175B       | 350 GB      | 8× A100 or cloud API
            </code></pre>

            <h3>Training Requirements</h3>
            <p>Training needs 3-4x more memory than inference:</p>
            <pre><code>
For each parameter, you need:
- Model weights
- Gradients
- Optimizer states (Adam: 2 copies of parameters)

7B model training:
- Weights: 14 GB
- Gradients: 14 GB
- Optimizer: 28 GB
Total: ~56 GB minimum

This is why training large models requires:
- Multiple high-end GPUs
- Techniques like gradient checkpointing
- Sometimes model parallelism
            </code></pre>

            <h3>Does Bigger Always Mean Better?</h3>

            <h4>Not Necessarily!</h4>
            <pre><code>
Small model advantages:
✓ Faster inference
✓ Lower cost
✓ Can run locally
✓ Lower latency
✓ Easier to fine-tune

Large model advantages:
✓ Better at complex tasks
✓ More knowledgeable
✓ Better reasoning
✓ Handles rare cases
✓ More versatile
            </code></pre>

            <h4>Task-Dependent Performance</h4>
            <pre><code>
Simple classification:
- 100M model: 95% accuracy
- 175B model: 96% accuracy
Difference: 1% for 1750x more parameters!

Complex reasoning:
- 100M model: 45% accuracy
- 175B model: 85% accuracy
Difference: 40% - Worth it!
            </code></pre>

            <h3>Efficient Alternatives to Huge Models</h3>

            <h4>1. Distillation</h4>
            <p>Train small model to mimic large model:</p>
            <pre><code>
DistilBERT: 66M parameters
- 40% smaller than BERT
- 97% of BERT's performance
- 60% faster

Teacher-Student training:
Large model (teacher) generates predictions
Small model (student) learns to match them
Result: Compact model with similar quality
            </code></pre>

            <h4>2. Quantization</h4>
            <p>Reduce precision of parameters:</p>
            <pre><code>
7B model:
- FP16: 14 GB, 100% quality
- INT8: 7 GB, 98% quality
- INT4: 3.5 GB, 95% quality

70B model:
- FP16: 140 GB (needs 4× A100)
- INT4: 35 GB (fits on 1× A100!)
            </code></pre>

            <h4>3. Mixture of Experts (MoE)</h4>
            <p>Only activate subset of parameters:</p>
            <pre><code>
GPT-4 (rumored MoE):
- Total: 1.76T parameters
- Active per token: ~220B parameters
- Benefit: Huge capacity, manageable inference cost
            </code></pre>

            <h3>Choosing the Right Model Size</h3>

            <h4>Decision Framework:</h4>
            <pre><code>
Use Small Models (100M-1B) when:
- Task is well-defined and narrow
- Speed matters more than quality
- Running on device/edge
- Budget constrained
- Fine-tuning for specific domain

Use Medium Models (1B-13B) when:
- Balanced quality and speed needed
- General purpose applications
- Have moderate GPU resources
- Self-hosting requirements

Use Large Models (70B-175B+) when:
- Complex reasoning required
- Maximum quality needed
- Few-shot learning important
- Can afford cloud API costs
- Handling diverse, unpredictable tasks
            </code></pre>

            <h3>Practical Examples</h3>

            <h4>Sentiment Analysis</h4>
            <pre><code>
Good choice: 100M-1B model
- Simple classification task
- Can fine-tune on your data
- Fast, cheap inference
- 95%+ accuracy achievable

Example: DistilBERT fine-tuned
- 66M parameters
- 10ms inference time
- $0.0001 per request (self-hosted)
            </code></pre>

            <h4>Code Generation</h4>
            <pre><code>
Good choice: 13B-70B model
- Complex task needing understanding
- Benefits from large knowledge
- Worth the extra cost/time

Example: CodeLlama 34B
- 34B parameters
- High-quality code generation
- Can run on single A100
            </code></pre>

            <h4>General Chatbot</h4>
            <pre><code>
Good choice: API (GPT-4, Claude)
- Needs broad knowledge
- Varied user queries
- Quality critical
- Updates handled by provider

Alternative: LLaMA 70B self-hosted
- If data privacy crucial
- Have infrastructure
- Can manage updates
            </code></pre>

            <h3>Cost Comparison</h3>
            <pre><code>
Running 7B model (self-hosted):
- GPU: RTX 4090 ($1,600)
- Power: ~$50/month
- Total first year: ~$2,200
- Unlimited requests!

Using GPT-4 API:
- $0.03 per 1K tokens (input)
- 1M requests × 500 tokens = $15,000/month
- Total first year: $180,000

Break-even: ~150K requests for self-hosted

But: GPT-4 is much more capable!
            </code></pre>

            <h3>Future Trends</h3>
            <ul>
                <li><strong>Sparse Models:</strong> Trillion parameters, billion active</li>
                <li><strong>Efficient Architectures:</strong> Better performance per parameter</li>
                <li><strong>Specialized Models:</strong> Smaller, task-optimized</li>
                <li><strong>On-Device AI:</strong> Billions of parameters on phones</li>
            </ul>

            <h3>Conclusion</h3>
            <p>Model parameters indicate capacity but don't tell the whole story. Consider your specific needs: accuracy requirements, latency constraints, budget, and infrastructure. Often, a well-fine-tuned smaller model outperforms a generic larger one for specific tasks. The key is matching model size to your actual needs, not just choosing the biggest available.</p>
        `
    },
    {
        id: 'b16',
        title: 'Supervised vs Unsupervised Learning',
        icon: '📚',
        description: 'Different approaches to teaching AI systems.',
        readTime: '13 min',
        level: 'Beginner',
        content: `
            <h2>Supervised vs Unsupervised Learning</h2>
            <p>Machine learning algorithms can be categorized by how they learn from data. The two main paradigms are supervised and unsupervised learning, each suited for different types of problems.</p>

            <h3>Supervised Learning</h3>
            <p>In supervised learning, the algorithm learns from labeled training data. Each example comes with the correct answer (label), and the model learns to predict labels for new, unseen data.</p>

            <h4>Key Characteristics:</h4>
            <ul>
                <li><strong>Labeled Data:</strong> Each input has a corresponding output/label</li>
                <li><strong>Clear Objective:</strong> Predict the correct label</li>
                <li><strong>Performance Metric:</strong> Accuracy, precision, recall, etc.</li>
                <li><strong>Feedback:</strong> Model knows when it's wrong</li>
            </ul>

            <h4>Types of Supervised Learning:</h4>

            <h5>1. Classification</h5>
            <p>Predict discrete categories:</p>
            <pre><code>
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Example: Email spam detection
X = email_features  # Features: word frequencies, sender info, etc.
y = labels  # 0 = not spam, 1 = spam

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train classifier
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Predict
predictions = model.predict(X_test)
accuracy = model.score(X_test, y_test)
print(f"Accuracy: {accuracy:.2%}")
            </code></pre>

            <h5>2. Regression</h5>
            <p>Predict continuous values:</p>
            <pre><code>
from sklearn.linear_model import LinearRegression

# Example: House price prediction
X = house_features  # Size, bedrooms, location, etc.
y = prices  # Actual prices

model = LinearRegression()
model.fit(X_train, y_train)

# Predict price for new house
new_house = [[2000, 3, 2, 0.5]]  # 2000 sqft, 3 bed, 2 bath, 0.5 miles from city
predicted_price = model.predict(new_house)
            </code></pre>

            <h4>Common Supervised Algorithms:</h4>
            <ul>
                <li><strong>Linear/Logistic Regression:</strong> Simple, interpretable</li>
                <li><strong>Decision Trees:</strong> Easy to understand, handles non-linear relationships</li>
                <li><strong>Random Forests:</strong> Ensemble of trees, robust</li>
                <li><strong>Support Vector Machines:</strong> Effective in high dimensions</li>
                <li><strong>Neural Networks:</strong> Powerful for complex patterns</li>
                <li><strong>Gradient Boosting (XGBoost):</strong> Often wins competitions</li>
            </ul>

            <h3>Unsupervised Learning</h3>
            <p>The algorithm learns patterns from unlabeled data. No correct answers are provided—the model must find structure on its own.</p>

            <h4>Key Characteristics:</h4>
            <ul>
                <li><strong>Unlabeled Data:</strong> Only inputs, no outputs</li>
                <li><strong>Find Patterns:</strong> Discover hidden structure</li>
                <li><strong>No Direct Feedback:</strong> Model doesn't know if it's "right"</li>
                <li><strong>Exploratory:</strong> Used for data understanding</li>
            </ul>

            <h4>Types of Unsupervised Learning:</h4>

            <h5>1. Clustering</h5>
            <p>Group similar data points:</p>
            <pre><code>
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

# Example: Customer segmentation
X = customer_data  # Purchase history, demographics, etc.

# Find 4 customer segments
kmeans = KMeans(n_clusters=4, random_state=42)
clusters = kmeans.fit_predict(X)

# Visualize clusters
plt.scatter(X[:, 0], X[:, 1], c=clusters, cmap='viridis')
plt.scatter(kmeans.cluster_centers_[:, 0],
           kmeans.cluster_centers_[:, 1],
           marker='x', s=200, c='red')
plt.title('Customer Segments')
plt.show()
            </code></pre>

            <h5>2. Dimensionality Reduction</h5>
            <p>Reduce features while preserving information:</p>
            <pre><code>
from sklearn.decomposition import PCA

# Reduce 100 features to 10
pca = PCA(n_components=10)
X_reduced = pca.fit_transform(X)

# How much variance retained?
print(f"Variance explained: {pca.explained_variance_ratio_.sum():.2%}")
            </code></pre>

            <h5>3. Anomaly Detection</h5>
            <p>Find unusual patterns:</p>
            <pre><code>
from sklearn.ensemble import IsolationForest

# Detect fraudulent transactions
detector = IsolationForest(contamination=0.01)  # Expect 1% anomalies
detector.fit(transaction_data)

# -1 for anomalies, 1 for normal
predictions = detector.predict(new_transactions)
            </code></pre>

            <h4>Common Unsupervised Algorithms:</h4>
            <ul>
                <li><strong>K-Means:</strong> Fast, simple clustering</li>
                <li><strong>Hierarchical Clustering:</strong> Creates tree of clusters</li>
                <li><strong>DBSCAN:</strong> Density-based, finds arbitrary shapes</li>
                <li><strong>PCA:</strong> Linear dimensionality reduction</li>
                <li><strong>t-SNE/UMAP:</strong> Visualization of high-dim data</li>
                <li><strong>Autoencoders:</strong> Neural network for compression</li>
            </ul>

            <h3>Comparison Table</h3>
            <pre><code>
Aspect              | Supervised          | Unsupervised
--------------------|---------------------|------------------
Data                | Labeled             | Unlabeled
Goal                | Predict labels      | Find patterns
Feedback            | Yes (labels)        | No
Accuracy measure    | Clear metrics       | Subjective
Complexity          | Moderate            | Higher
Common uses         | Classification      | Clustering
                    | Regression          | Dimensionality reduction
Examples            | Spam detection      | Customer segmentation
                    | Price prediction    | Anomaly detection
            </code></pre>

            <h3>Semi-Supervised Learning</h3>
            <p>Combines both approaches—uses small amount of labeled data with large amount of unlabeled data:</p>
            <pre><code>
from sklearn.semi_supervised import LabelPropagation

# Small labeled set + large unlabeled set
X_labeled = features[:100]
y_labeled = labels[:100]
X_unlabeled = features[100:]
y_unlabeled = [-1] * len(X_unlabeled)  # -1 = unknown

# Combine
X = np.vstack([X_labeled, X_unlabeled])
y = np.concatenate([y_labeled, y_unlabeled])

# Train semi-supervised model
model = LabelPropagation()
model.fit(X, y)
            </code></pre>

            <h3>When to Use Each</h3>

            <h4>Use Supervised Learning When:</h4>
            <ul>
                <li>You have labeled training data</li>
                <li>The task has clear correct answers</li>
                <li>You need to predict specific outcomes</li>
                <li>Performance can be measured objectively</li>
            </ul>

            <h4>Use Unsupervised Learning When:</h4>
            <ul>
                <li>Data is unlabeled (common in real world)</li>
                <li>You want to explore data structure</li>
                <li>Looking for hidden patterns or groups</li>
                <li>Labeling is expensive or impractical</li>
            </ul>

            <h3>Real-World Examples</h3>

            <h4>Supervised:</h4>
            <ul>
                <li>Email spam filtering (labeled spam/not spam)</li>
                <li>Medical diagnosis (symptoms → disease)</li>
                <li>Stock price prediction (historical data → future price)</li>
                <li>Image recognition (image → object label)</li>
            </ul>

            <h4>Unsupervised:</h4>
            <ul>
                <li>Customer segmentation (find natural groups)</li>
                <li>Recommendation systems (find similar items/users)</li>
                <li>Anomaly detection (fraud, system failures)</li>
                <li>Topic modeling (discover themes in documents)</li>
            </ul>

            <h3>Conclusion</h3>
            <p>Supervised learning is powerful when you have labeled data and clear objectives. Unsupervised learning shines when exploring unlabeled data or finding hidden structure. Many real-world systems use both—unsupervised learning for data exploration and feature engineering, followed by supervised learning for prediction tasks.</p>
        `
    },
    {
        id: 'b17',
        title: 'Data Preprocessing',
        icon: '🧹',
        description: 'Preparing data for AI training and inference.',
        readTime: '14 min',
        level: 'Beginner',
        content: `
            <h2>Data Preprocessing: Cleaning for AI</h2>
            <p>Raw data is messy. Data preprocessing transforms raw data into clean, formatted inputs that machine learning models can effectively learn from. It's often 70-80% of the total AI development effort.</p>

            <h3>Why Preprocessing Matters</h3>
            <ul>
                <li><strong>Garbage In, Garbage Out:</strong> Poor data = poor models</li>
                <li><strong>Model Compatibility:</strong> Algorithms expect specific formats</li>
                <li><strong>Performance:</strong> Clean data = better accuracy</li>
                <li><strong>Training Stability:</strong> Proper scaling prevents issues</li>
            </ul>

            <h3>Common Data Issues</h3>
            <pre><code>
# Typical messy dataset
import pandas as pd

df = pd.DataFrame({
    'age': [25, 30, None, 45, 200],  # Missing value, outlier
    'income': ['50K', '60K', '45K', '80K', ''],  # String format, missing
    'city': ['NYC', 'nyc', 'New York', 'LA', None]  # Inconsistent, missing
})
            </code></pre>

            <h3>Core Preprocessing Steps</h3>

            <h4>1. Handling Missing Data</h4>
            <pre><code>
import pandas as pd
import numpy as np

# Check for missing values
print(df.isnull().sum())

# Strategy 1: Remove rows with missing data
df_clean = df.dropna()

# Strategy 2: Fill with mean/median/mode
df['age'].fillna(df['age'].median(), inplace=True)
df['city'].fillna(df['city'].mode()[0], inplace=True)

# Strategy 3: Forward/backward fill (time series)
df['price'].fillna(method='ffill', inplace=True)

# Strategy 4: Indicator for missingness
df['age_missing'] = df['age'].isnull().astype(int)
            </code></pre>

            <h4>2. Handling Outliers</h4>
            <pre><code>
# Detect outliers using IQR method
Q1 = df['income'].quantile(0.25)
Q3 = df['income'].quantile(0.75)
IQR = Q3 - Q1

# Define outlier bounds
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

# Remove outliers
df_no_outliers = df[(df['income'] >= lower_bound) &
                    (df['income'] <= upper_bound)]

# Or cap outliers
df['income_capped'] = df['income'].clip(lower=lower_bound, upper=upper_bound)
            </code></pre>

            <h4>3. Feature Scaling</h4>
            <p>Different features often have different scales. Scaling ensures fair treatment:</p>

            <h5>Standardization (Z-score normalization):</h5>
            <pre><code>
from sklearn.preprocessing import StandardScaler

# Mean = 0, Std = 1
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Example: age=30, income=50000
# After: age_scaled=-0.5, income_scaled=1.2
            </code></pre>

            <h5>Min-Max Normalization:</h5>
            <pre><code>
from sklearn.preprocessing import MinMaxScaler

# Scale to [0, 1] range
scaler = MinMaxScaler()
X_normalized = scaler.fit_transform(X)

# Good for neural networks
            </code></pre>

            <h5>Robust Scaling:</h5>
            <pre><code>
from sklearn.preprocessing import RobustScaler

# Uses median and IQR, robust to outliers
scaler = RobustScaler()
X_robust = scaler.fit_transform(X)
            </code></pre>

            <h4>4. Encoding Categorical Variables</h4>

            <h5>Label Encoding (ordinal):</h5>
            <pre><code>
from sklearn.preprocessing import LabelEncoder

# For ordinal categories: low, medium, high
encoder = LabelEncoder()
df['size_encoded'] = encoder.fit_transform(df['size'])
# low=0, medium=1, high=2
            </code></pre>

            <h5>One-Hot Encoding (nominal):</h5>
            <pre><code>
# For non-ordinal categories: red, blue, green
df_encoded = pd.get_dummies(df, columns=['color'])
# Creates: color_red, color_blue, color_green (0 or 1)

# Or with sklearn
from sklearn.preprocessing import OneHotEncoder
encoder = OneHotEncoder(sparse=False)
color_encoded = encoder.fit_transform(df[['color']])
            </code></pre>

            <h5>Target Encoding:</h5>
            <pre><code>
# Encode based on target mean (for high cardinality)
category_means = df.groupby('city')['target'].mean()
df['city_encoded'] = df['city'].map(category_means)
            </code></pre>

            <h4>5. Feature Engineering</h4>
            <pre><code>
# Create new features from existing ones
df['age_group'] = pd.cut(df['age'], bins=[0, 18, 35, 50, 100],
                         labels=['child', 'young', 'middle', 'senior'])

df['income_per_person'] = df['household_income'] / df['household_size']

# Datetime features
df['date'] = pd.to_datetime(df['date'])
df['day_of_week'] = df['date'].dt.dayofweek
df['month'] = df['date'].dt.month
df['is_weekend'] = df['day_of_week'].isin([5, 6]).astype(int)

# Interaction features
df['price_per_sqft'] = df['price'] / df['square_feet']
            </code></pre>

            <h4>6. Text Preprocessing</h4>
            <pre><code>
import re
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer

def preprocess_text(text):
    # Lowercase
    text = text.lower()

    # Remove special characters
    text = re.sub(r'[^a-zA-Z0-9\s]', '', text)

    # Remove extra whitespace
    text = ' '.join(text.split())

    # Remove stopwords
    stop_words = set(stopwords.words('english'))
    words = [w for w in text.split() if w not in stop_words]

    # Stemming
    stemmer = PorterStemmer()
    words = [stemmer.stem(w) for w in words]

    return ' '.join(words)

df['text_clean'] = df['text'].apply(preprocess_text)
            </code></pre>

            <h3>Complete Preprocessing Pipeline</h3>
            <pre><code>
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer

# Define preprocessing for numeric and categorical features
numeric_features = ['age', 'income', 'score']
categorical_features = ['city', 'gender', 'category']

numeric_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler())
])

categorical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='constant', fill_value='missing')),
    ('onehot', OneHotEncoder(handle_unknown='ignore'))
])

# Combine transformers
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, numeric_features),
        ('cat', categorical_transformer, categorical_features)
    ])

# Use in a complete pipeline
from sklearn.ensemble import RandomForestClassifier

full_pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', RandomForestClassifier())
])

# Fit and predict in one go!
full_pipeline.fit(X_train, y_train)
predictions = full_pipeline.predict(X_test)
            </code></pre>

            <h3>Data Splitting</h3>
            <pre><code>
from sklearn.model_selection import train_test_split

# Basic split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Stratified split (preserve class distribution)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)

# Three-way split
X_train, X_temp, y_train, y_temp = train_test_split(X, y, test_size=0.3)
X_val, X_test, y_val, y_test = train_test_split(X_temp, y_temp, test_size=0.5)
# Result: 70% train, 15% validation, 15% test
            </code></pre>

            <h3>Best Practices</h3>
            <ol>
                <li><strong>Fit on Train, Transform on Test:</strong> Prevent data leakage
                    <pre><code>
scaler.fit(X_train)  # Only fit on training data
X_train_scaled = scaler.transform(X_train)
X_test_scaled = scaler.transform(X_test)  # Use same scaler
                    </code></pre>
                </li>
                <li><strong>Handle Class Imbalance:</strong>
                    <pre><code>
from imblearn.over_sampling import SMOTE

smote = SMOTE()
X_resampled, y_resampled = smote.fit_resample(X_train, y_train)
                    </code></pre>
                </li>
                <li><strong>Check for Data Leakage:</strong> Target information shouldn't appear in features</li>
                <li><strong>Document Transformations:</strong> Save preprocessing steps for deployment</li>
            </ol>

            <h3>Common Mistakes</h3>
            <ul>
                <li>Scaling before splitting (data leakage)</li>
                <li>Dropping too much data when handling missing values</li>
                <li>Not handling outliers appropriately</li>
                <li>Forgetting to encode categorical variables</li>
                <li>Using different preprocessing for train and test</li>
            </ul>

            <h3>Conclusion</h3>
            <p>Data preprocessing is crucial for model success. Clean, properly formatted data leads to better, more reliable models. Always validate your preprocessing steps, watch for data leakage, and maintain consistent transformations across training and deployment.</p>
        `
    },
    {
        id: 'b18',
        title: 'Overfitting and Underfitting',
        icon: '⚖️',
        description: 'Finding the right balance in model complexity.',
        readTime: '12 min',
        level: 'Beginner',
        content: `
            <h2>Overfitting and Underfitting: The Goldilocks Problem</h2>
            <p>Every machine learning model faces a fundamental trade-off: too simple (underfitting) or too complex (overfitting). Finding the right balance is key to building models that generalize well to new data.</p>

            <h3>Underfitting: Too Simple</h3>
            <p>The model is too simple to capture the underlying patterns in the data.</p>

            <h4>Symptoms:</h4>
            <ul>
                <li>Low accuracy on training data</li>
                <li>Low accuracy on test data</li>
                <li>Model too simplistic for the problem</li>
                <li>High bias</li>
            </ul>

            <h4>Example:</h4>
            <pre><code>
# Using linear model for non-linear data
from sklearn.linear_model import LinearRegression

# Data has quadratic relationship
X = np.linspace(0, 10, 100).reshape(-1, 1)
y = X**2 + noise

model = LinearRegression()
model.fit(X, y)
# Will perform poorly - can't capture curve!

Train R²: 0.65  # Poor
Test R²:  0.63  # Poor
            </code></pre>

            <h3>Overfitting: Too Complex</h3>
            <p>The model learns the training data too well, including noise and outliers, failing to generalize.</p>

            <h4>Symptoms:</h4>
            <ul>
                <li>High accuracy on training data</li>
                <li>Low accuracy on test data</li>
                <li>Large gap between train and test performance</li>
                <li>High variance</li>
            </ul>

            <h4>Example:</h4>
            <pre><code>
from sklearn.tree import DecisionTreeClassifier

# Very deep tree memorizes training data
model = DecisionTreeClassifier(max_depth=None)  # No limit!
model.fit(X_train, y_train)

Train Accuracy: 100%  # Perfect on training
Test Accuracy:  72%   # Poor on new data - overfitting!
            </code></pre>

            <h3>The Perfect Balance</h3>
            <p>Good fit captures true patterns without memorizing noise:</p>
            <pre><code>
# Just right
model = DecisionTreeClassifier(max_depth=5)
model.fit(X_train, y_train)

Train Accuracy: 88%
Test Accuracy:  85%  # Small gap - good generalization!
            </code></pre>

            <h3>Visualizing the Problem</h3>
            <pre><code>
import matplotlib.pyplot as plt
import numpy as np

# Generate data
X = np.linspace(0, 10, 50)
y_true = np.sin(X)
y = y_true + np.random.normal(0, 0.3, 50)  # Add noise

# Underfitting: degree 1 polynomial
model_underfit = np.polyfit(X, y, 1)

# Good fit: degree 3 polynomial
model_good = np.polyfit(X, y, 3)

# Overfitting: degree 15 polynomial
model_overfit = np.polyfit(X, y, 15)

# Plot all three
plt.figure(figsize=(15, 4))

plt.subplot(131)
plt.scatter(X, y, alpha=0.5)
plt.plot(X, np.polyval(model_underfit, X), 'r', label='Underfit')
plt.title('Underfitting (Too Simple)')

plt.subplot(132)
plt.scatter(X, y, alpha=0.5)
plt.plot(X, np.polyval(model_good, X), 'g', label='Good Fit')
plt.title('Good Fit (Just Right)')

plt.subplot(133)
plt.scatter(X, y, alpha=0.5)
plt.plot(X, np.polyval(model_overfit, X), 'orange', label='Overfit')
plt.title('Overfitting (Too Complex)')

plt.show()
            </code></pre>

            <h3>Bias-Variance Tradeoff</h3>
            <pre><code>
Total Error = Bias² + Variance + Irreducible Error

Bias:     Error from wrong assumptions (underfitting)
Variance: Error from sensitivity to training data (overfitting)

High Bias, Low Variance:  Underfitting
Low Bias, High Variance:  Overfitting
Low Bias, Low Variance:   Perfect! (our goal)
            </code></pre>

            <h3>Detecting Overfitting/Underfitting</h3>

            <h4>Learning Curves:</h4>
            <pre><code>
from sklearn.model_selection import learning_curve

train_sizes, train_scores, test_scores = learning_curve(
    model, X, y, cv=5, n_jobs=-1,
    train_sizes=np.linspace(0.1, 1.0, 10)
)

plt.plot(train_sizes, train_scores.mean(axis=1), label='Training score')
plt.plot(train_sizes, test_scores.mean(axis=1), label='Test score')
plt.xlabel('Training examples')
plt.ylabel('Score')
plt.legend()

# Interpretation:
# - Large gap = overfitting
# - Both low = underfitting
# - Converging = good
            </code></pre>

            <h4>Validation Curve:</h4>
            <pre><code>
from sklearn.model_selection import validation_curve

param_range = [1, 2, 3, 5, 7, 10, 15, 20]
train_scores, test_scores = validation_curve(
    DecisionTreeClassifier(), X, y,
    param_name="max_depth",
    param_range=param_range,
    cv=5
)

plt.plot(param_range, train_scores.mean(axis=1), label='Training')
plt.plot(param_range, test_scores.mean(axis=1), label='Validation')
plt.xlabel('Max Depth')
plt.ylabel('Accuracy')
plt.legend()

# Sweet spot: where validation peaks
            </code></pre>

            <h3>Preventing Overfitting</h3>

            <h4>1. More Training Data</h4>
            <pre><code>
# More data helps model generalize
# But: expensive to collect
            </code></pre>

            <h4>2. Regularization</h4>
            <pre><code>
from sklearn.linear_model import Ridge, Lasso

# L2 regularization (Ridge)
model = Ridge(alpha=1.0)  # Penalty on large weights

# L1 regularization (Lasso)
model = Lasso(alpha=0.1)  # Can zero out features

# Elastic Net (combines L1 + L2)
from sklearn.linear_model import ElasticNet
model = ElasticNet(alpha=0.1, l1_ratio=0.5)
            </code></pre>

            <h4>3. Dropout (Neural Networks)</h4>
            <pre><code>
import tensorflow as tf

model = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dropout(0.5),  # Randomly drop 50% of neurons
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dropout(0.3),
    tf.keras.layers.Dense(10, activation='softmax')
])
            </code></pre>

            <h4>4. Cross-Validation</h4>
            <pre><code>
from sklearn.model_selection import cross_val_score

# 5-fold cross-validation
scores = cross_val_score(model, X, y, cv=5)
print(f"CV Scores: {scores}")
print(f"Mean: {scores.mean():.3f} (+/- {scores.std():.3f})")

# More reliable than single train/test split
            </code></pre>

            <h4>5. Early Stopping</h4>
            <pre><code>
# For iterative models (neural networks, gradient boosting)
from tensorflow.keras.callbacks import EarlyStopping

early_stop = EarlyStopping(
    monitor='val_loss',
    patience=5,  # Stop if no improvement for 5 epochs
    restore_best_weights=True
)

model.fit(X_train, y_train,
         validation_split=0.2,
         epochs=100,
         callbacks=[early_stop])
            </code></pre>

            <h4>6. Reduce Model Complexity</h4>
            <pre><code>
# Decision Trees
model = DecisionTreeClassifier(
    max_depth=5,           # Limit depth
    min_samples_split=20,  # Require minimum samples to split
    min_samples_leaf=10    # Minimum samples in leaf
)

# Random Forest
model = RandomForestClassifier(
    n_estimators=100,
    max_features='sqrt',  # Use subset of features
    max_depth=10
)
            </code></pre>

            <h3>Fixing Underfitting</h3>
            <ul>
                <li><strong>Add Features:</strong> Include more relevant information</li>
                <li><strong>Polynomial Features:</strong> Capture non-linear relationships</li>
                <li><strong>Reduce Regularization:</strong> Lower alpha values</li>
                <li><strong>Increase Model Complexity:</strong> Deeper trees, more layers</li>
                <li><strong>Train Longer:</strong> More epochs/iterations</li>
            </ul>

            <h4>Example:</h4>
            <pre><code>
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline

# Add polynomial features
model = make_pipeline(
    PolynomialFeatures(degree=3),
    Ridge(alpha=1.0)
)

# Now can fit curved relationships!
            </code></pre>

            <h3>Practical Workflow</h3>
            <pre><code>
1. Start simple (baseline model)
2. Check for underfitting:
   - If train error high → Add complexity
3. Check for overfitting:
   - If test >> train error → Add regularization
4. Use cross-validation for reliable estimates
5. Plot learning curves to diagnose
6. Iterate until good balance achieved
            </code></pre>

            <h3>Conclusion</h3>
            <p>Overfitting and underfitting are fundamental challenges in machine learning. The key is finding the right model complexity for your data through techniques like cross-validation, regularization, and careful monitoring of training vs. test performance. Remember: a model that's 85% accurate on both train and test is better than one that's 100% on train but only 70% on test.</p>
        `
    },
    {
        id: 'b19',
        title: 'Gradient Descent',
        icon: '⛰️',
        description: 'The fundamental optimization algorithm in AI.',
        readTime: '13 min',
        level: 'Beginner',
        content: `
            <h2>Gradient Descent: How AI Learns</h2>
            <p>Gradient descent is the optimization algorithm that powers most machine learning. It's how neural networks adjust their weights to minimize error and improve performance.</p>

            <h3>The Core Idea</h3>
            <p>Imagine you're blindfolded on a mountain and want to reach the lowest valley. You feel the slope under your feet and take steps downhill. That's gradient descent!</p>

            <h4>Mathematical Definition:</h4>
            <pre><code>
Goal: Minimize loss function L(θ)

Update rule:
θ_new = θ_old - α * ∇L(θ)

Where:
- θ = parameters (weights)
- α = learning rate (step size)
- ∇L = gradient (slope of loss)
            </code></pre>

            <h3>Simple Example</h3>
            <pre><code>
import numpy as np

# Simple function: f(x) = x²
# Minimum at x = 0

x = 10  # Starting point
learning_rate = 0.1
iterations = 50

history = [x]

for i in range(iterations):
    # Gradient of x² is 2x
    gradient = 2 * x

    # Update x
    x = x - learning_rate * gradient
    history.append(x)

    print(f"Iteration {i+1}: x = {x:.4f}, f(x) = {x**2:.4f}")

# Converges to x ≈ 0
            </code></pre>

            <h3>Gradient Descent in Linear Regression</h3>
            <pre><code>
# Goal: Find best-fit line y = mx + b

def compute_cost(X, y, m, b):
    """Calculate mean squared error"""
    predictions = m * X + b
    cost = np.mean((predictions - y) ** 2)
    return cost

def gradient_descent(X, y, learning_rate=0.01, epochs=1000):
    m, b = 0, 0  # Initialize parameters
    n = len(X)
    costs = []

    for epoch in range(epochs):
        # Predictions
        predictions = m * X + b

        # Calculate gradients
        dm = (2/n) * np.sum(X * (predictions - y))
        db = (2/n) * np.sum(predictions - y)

        # Update parameters
        m = m - learning_rate * dm
        b = b - learning_rate * db

        # Track cost
        cost = compute_cost(X, y, m, b)
        costs.append(cost)

        if epoch % 100 == 0:
            print(f"Epoch {epoch}: Cost = {cost:.4f}, m = {m:.4f}, b = {b:.4f}")

    return m, b, costs

# Example usage
X = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 6, 8, 10])

m, b, costs = gradient_descent(X, y)
print(f"Final: y = {m:.2f}x + {b:.2f}")
            </code></pre>

            <h3>Types of Gradient Descent</h3>

            <h4>1. Batch Gradient Descent</h4>
            <p>Uses entire dataset for each update:</p>
            <pre><code>
for epoch in range(epochs):
    # Calculate gradient using ALL data
    gradient = compute_gradient(X_all, y_all, weights)
    weights = weights - learning_rate * gradient

Pros: Stable, converges smoothly
Cons: Slow for large datasets, expensive
            </code></pre>

            <h4>2. Stochastic Gradient Descent (SGD)</h4>
            <p>Uses one sample at a time:</p>
            <pre><code>
for epoch in range(epochs):
    for i in range(len(X)):
        # Update using single example
        gradient = compute_gradient(X[i], y[i], weights)
        weights = weights - learning_rate * gradient

Pros: Fast, can escape local minima
Cons: Noisy updates, erratic convergence
            </code></pre>

            <h4>3. Mini-Batch Gradient Descent</h4>
            <p>Best of both worlds - uses small batches:</p>
            <pre><code>
batch_size = 32

for epoch in range(epochs):
    # Shuffle data
    indices = np.random.permutation(len(X))

    for i in range(0, len(X), batch_size):
        # Get batch
        batch_indices = indices[i:i+batch_size]
        X_batch = X[batch_indices]
        y_batch = y[batch_indices]

        # Update using batch
        gradient = compute_gradient(X_batch, y_batch, weights)
        weights = weights - learning_rate * gradient

Pros: Fast, stable, parallelizable
Cons: Requires tuning batch size
Most commonly used in practice!
            </code></pre>

            <h3>Learning Rate: The Critical Hyperparameter</h3>

            <h4>Too Small:</h4>
            <pre><code>
learning_rate = 0.0001
# Takes forever to converge
# Might get stuck in local minimum
            </code></pre>

            <h4>Too Large:</h4>
            <pre><code>
learning_rate = 1.0
# Overshoots minimum
# Diverges, loss increases!
            </code></pre>

            <h4>Just Right:</h4>
            <pre><code>
learning_rate = 0.01
# Converges steadily
# Reaches minimum efficiently
            </code></pre>

            <h4>Learning Rate Schedules:</h4>
            <pre><code>
# Decay over time
def learning_rate_schedule(epoch):
    initial_lr = 0.1
    return initial_lr / (1 + epoch * 0.01)

# Or step decay
def step_decay(epoch):
    initial_lr = 0.1
    drop = 0.5
    epochs_drop = 10
    return initial_lr * (drop ** (epoch // epochs_drop))

# Or exponential decay
lr = initial_lr * np.exp(-decay_rate * epoch)
            </code></pre>

            <h3>Advanced Optimizers</h3>

            <h4>Momentum</h4>
            <p>Accelerates in consistent directions:</p>
            <pre><code>
# Standard momentum
velocity = 0
beta = 0.9

for iteration in range(iterations):
    gradient = compute_gradient()
    velocity = beta * velocity + learning_rate * gradient
    weights = weights - velocity

# Smooths out oscillations, faster convergence
            </code></pre>

            <h4>RMSprop</h4>
            <p>Adapts learning rate for each parameter:</p>
            <pre><code>
squared_grad = 0
beta = 0.9
epsilon = 1e-8

for iteration in range(iterations):
    gradient = compute_gradient()
    squared_grad = beta * squared_grad + (1-beta) * gradient**2
    weights = weights - learning_rate * gradient / (np.sqrt(squared_grad) + epsilon)

# Good for non-stationary objectives
            </code></pre>

            <h4>Adam (Most Popular)</h4>
            <p>Combines momentum + RMSprop:</p>
            <pre><code>
import torch.optim as optim

# In PyTorch
optimizer = optim.Adam(model.parameters(), lr=0.001)

for epoch in range(epochs):
    optimizer.zero_grad()
    loss = compute_loss()
    loss.backward()
    optimizer.step()

# Adaptive learning rates
# Works well for most problems
# Often the default choice
            </code></pre>

            <h3>Visualizing Gradient Descent</h3>
            <pre><code>
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

# Create loss landscape
x = np.linspace(-5, 5, 100)
y = np.linspace(-5, 5, 100)
X, Y = np.meshgrid(x, y)
Z = X**2 + Y**2  # Simple bowl shape

# Plot
fig = plt.figure(figsize=(12, 5))

# 3D surface
ax1 = fig.add_subplot(121, projection='3d')
ax1.plot_surface(X, Y, Z, alpha=0.6)
ax1.set_title('Loss Landscape')

# Contour with gradient descent path
ax2 = fig.add_subplot(122)
ax2.contour(X, Y, Z, levels=20)

# Simulate gradient descent
path_x, path_y = [4], [4]
learning_rate = 0.1

for _ in range(50):
    grad_x = 2 * path_x[-1]
    grad_y = 2 * path_y[-1]
    path_x.append(path_x[-1] - learning_rate * grad_x)
    path_y.append(path_y[-1] - learning_rate * grad_y)

ax2.plot(path_x, path_y, 'r.-', linewidth=2)
ax2.set_title('Gradient Descent Path')
plt.show()
            </code></pre>

            <h3>Common Challenges</h3>

            <h4>1. Local Minima</h4>
            <ul>
                <li>Non-convex functions have multiple minima</li>
                <li>Can get stuck in suboptimal solution</li>
                <li>Solutions: Momentum, random restarts, SGD noise</li>
            </ul>

            <h4>2. Saddle Points</h4>
            <ul>
                <li>Flat regions where gradient ≈ 0</li>
                <li>Progress slows down significantly</li>
                <li>Solutions: Momentum-based optimizers</li>
            </ul>

            <h4>3. Vanishing/Exploding Gradients</h4>
            <ul>
                <li>Deep networks: gradients become too small or too large</li>
                <li>Solutions: Batch normalization, gradient clipping, ReLU activation</li>
            </ul>

            <h3>Practical Tips</h3>
            <ol>
                <li><strong>Start with Adam:</strong> Works well for most problems</li>
                <li><strong>Monitor Loss:</strong> Should decrease over time</li>
                <li><strong>Learning Rate Finder:</strong> Try multiple values, plot loss</li>
                <li><strong>Batch Size:</strong> 32-256 typical range</li>
                <li><strong>Early Stopping:</strong> Stop when validation loss stops improving</li>
                <li><strong>Gradient Clipping:</strong> Prevent exploding gradients
                    <pre><code>
torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
                    </code></pre>
                </li>
            </ol>

            <h3>Conclusion</h3>
            <p>Gradient descent is the engine that powers machine learning. While the basic idea is simple—follow the slope downward—modern variants like Adam make it robust and efficient. Understanding gradient descent helps you diagnose training issues, choose appropriate optimizers, and tune hyperparameters effectively.</p>
        `
    },
    {
        id: 'b20',
        title: 'Backpropagation',
        icon: '🔙',
        description: 'How neural networks learn from their mistakes.',
        readTime: '14 min',
        level: 'Beginner',
        content: `
            <h2>Backpropagation: Teaching Networks to Learn</h2>
            <p>Backpropagation is the algorithm that makes deep learning possible. It efficiently calculates how each weight in a neural network should change to reduce error.</p>

            <h3>The Challenge</h3>
            <p>Neural networks have millions of parameters. How do we know which ones to adjust and by how much? Backpropagation solves this using the chain rule from calculus.</p>

            <h3>Intuitive Understanding</h3>
            <p>Think of it like finding who's responsible for a mistake in a large organization:</p>
            <ol>
                <li>Mistake happens at output (prediction error)</li>
                <li>Trace back: which employees contributed?</li>
                <li>Assign blame proportionally</li>
                <li>Each person adjusts their behavior</li>
            </ol>

            <h3>Forward Pass</h3>
            <p>First, data flows forward through the network:</p>
            <pre><code>
# Simple 2-layer network
import numpy as np

# Input
x = np.array([1.0, 2.0])

# Weights
W1 = np.array([[0.5, 0.3], [0.2, 0.4]])  # Input to hidden
W2 = np.array([[0.7], [0.6]])             # Hidden to output

# Forward pass
hidden = np.maximum(0, W1 @ x)  # ReLU activation
output = W2.T @ hidden

print(f"Prediction: {output}")
print(f"True value: 5.0")
print(f"Error: {output - 5.0}")
            </code></pre>

            <h3>Backward Pass</h3>
            <p>Then, errors flow backward to update weights:</p>
            <pre><code>
# Calculate gradients
target = 5.0
error = output - target

# Gradient of loss w.r.t. output
dL_doutput = error

# Gradient w.r.t. W2 (chain rule)
dL_dW2 = dL_doutput * hidden

# Gradient w.r.t. hidden layer
dL_dhidden = dL_doutput * W2.T

# Gradient w.r.t. W1 (considering ReLU)
dL_dW1 = np.outer(dL_dhidden * (hidden > 0), x)

# Update weights
learning_rate = 0.01
W2 -= learning_rate * dL_dW2
W1 -= learning_rate * dL_dW1
            </code></pre>

            <h3>The Chain Rule</h3>
            <p>Backpropagation applies the chain rule layer by layer:</p>
            <pre><code>
For loss L depending on weight w through intermediate z:

L = f(z)
z = g(w)

Then:
dL/dw = (dL/dz) * (dz/dw)

For deeper networks:
L = f₃(f₂(f₁(w)))

dL/dw = (dL/df₃) * (df₃/df₂) * (df₂/df₁) * (df₁/dw)

Each layer passes gradients to the previous layer!
            </code></pre>

            <h3>Complete Example</h3>
            <pre><code>
class SimpleNeuralNetwork:
    def __init__(self, input_size, hidden_size, output_size):
        # Initialize weights randomly
        self.W1 = np.random.randn(hidden_size, input_size) * 0.01
        self.b1 = np.zeros((hidden_size, 1))
        self.W2 = np.random.randn(output_size, hidden_size) * 0.01
        self.b2 = np.zeros((output_size, 1))

    def sigmoid(self, z):
        return 1 / (1 + np.exp(-z))

    def sigmoid_derivative(self, z):
        s = self.sigmoid(z)
        return s * (1 - s)

    def forward(self, X):
        # Save intermediate values for backprop
        self.z1 = self.W1 @ X + self.b1
        self.a1 = self.sigmoid(self.z1)
        self.z2 = self.W2 @ self.a1 + self.b2
        self.a2 = self.sigmoid(self.z2)
        return self.a2

    def backward(self, X, y, output):
        m = X.shape[1]  # Number of examples

        # Output layer gradients
        dz2 = output - y
        dW2 = (1/m) * (dz2 @ self.a1.T)
        db2 = (1/m) * np.sum(dz2, axis=1, keepdims=True)

        # Hidden layer gradients
        dz1 = (self.W2.T @ dz2) * self.sigmoid_derivative(self.z1)
        dW1 = (1/m) * (dz1 @ X.T)
        db1 = (1/m) * np.sum(dz1, axis=1, keepdims=True)

        return dW1, db1, dW2, db2

    def update_weights(self, dW1, db1, dW2, db2, learning_rate):
        self.W1 -= learning_rate * dW1
        self.b1 -= learning_rate * db1
        self.W2 -= learning_rate * dW2
        self.b2 -= learning_rate * db2

    def train(self, X, y, epochs, learning_rate=0.1):
        for epoch in range(epochs):
            # Forward pass
            output = self.forward(X)

            # Compute loss
            loss = np.mean((output - y) ** 2)

            # Backward pass
            dW1, db1, dW2, db2 = self.backward(X, y, output)

            # Update weights
            self.update_weights(dW1, db1, dW2, db2, learning_rate)

            if epoch % 100 == 0:
                print(f"Epoch {epoch}, Loss: {loss:.4f}")

# Example usage
X = np.array([[0, 0, 1, 1], [0, 1, 0, 1]])  # XOR inputs
y = np.array([[0, 1, 1, 0]])                  # XOR outputs

nn = SimpleNeuralNetwork(input_size=2, hidden_size=4, output_size=1)
nn.train(X, y, epochs=1000)

# Test
predictions = nn.forward(X)
print(f"Predictions: {predictions}")
            </code></pre>

            <h3>Automatic Differentiation</h3>
            <p>Modern frameworks handle backprop automatically:</p>
            <pre><code>
import torch
import torch.nn as nn

# Define network
model = nn.Sequential(
    nn.Linear(2, 4),
    nn.ReLU(),
    nn.Linear(4, 1),
    nn.Sigmoid()
)

# Loss and optimizer
criterion = nn.MSELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.01)

# Training loop
for epoch in range(1000):
    # Forward pass
    predictions = model(X_tensor)
    loss = criterion(predictions, y_tensor)

    # Backward pass (automatic!)
    optimizer.zero_grad()  # Clear old gradients
    loss.backward()        # Compute gradients
    optimizer.step()       # Update weights

    if epoch % 100 == 0:
        print(f"Epoch {epoch}, Loss: {loss.item():.4f}")

# PyTorch handles all the chain rule calculations!
            </code></pre>

            <h3>Computational Graph</h3>
            <p>Framework builds a graph of operations:</p>
            <pre><code>
import torch

x = torch.tensor(2.0, requires_grad=True)
y = torch.tensor(3.0, requires_grad=True)

# Forward: build computational graph
z = x * y + y**2
loss = z * 2

# Backward: traverse graph in reverse
loss.backward()

print(f"dL/dx = {x.grad}")  # Derivative w.r.t. x
print(f"dL/dy = {y.grad}")  # Derivative w.r.t. y

# Graph tracks all operations for automatic differentiation
            </code></pre>

            <h3>Gradient Checking</h3>
            <p>Verify backprop implementation:</p>
            <pre><code>
def numerical_gradient(f, x, epsilon=1e-5):
    """Approximate gradient numerically"""
    grad = np.zeros_like(x)

    for i in range(len(x)):
        x_plus = x.copy()
        x_plus[i] += epsilon
        x_minus = x.copy()
        x_minus[i] -= epsilon

        grad[i] = (f(x_plus) - f(x_minus)) / (2 * epsilon)

    return grad

# Compare analytical vs numerical gradients
analytical_grad = backprop_gradient(X, y, weights)
numerical_grad = numerical_gradient(lambda w: loss(X, y, w), weights)

difference = np.linalg.norm(analytical_grad - numerical_grad)
print(f"Gradient difference: {difference}")
# Should be very small (< 1e-7)
            </code></pre>

            <h3>Common Issues</h3>

            <h4>1. Vanishing Gradients</h4>
            <pre><code>
# Problem: Gradients become very small in deep networks
# Sigmoid derivatives max at 0.25
# After many layers: 0.25^10 ≈ 0.0000001

Solutions:
- Use ReLU instead of sigmoid
- Batch normalization
- Residual connections (skip connections)
- Careful weight initialization
            </code></pre>

            <h4>2. Exploding Gradients</h4>
            <pre><code>
# Problem: Gradients become very large
# Weights updated too much, training unstable

Solutions:
- Gradient clipping
torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)

- Lower learning rate
- Batch normalization
            </code></pre>

            <h3>Modern Improvements</h3>

            <h4>Batch Normalization:</h4>
            <pre><code>
# Normalizes activations, helps gradients flow
model = nn.Sequential(
    nn.Linear(784, 256),
    nn.BatchNorm1d(256),  # Add batch norm
    nn.ReLU(),
    nn.Linear(256, 10)
)
            </code></pre>

            <h4>Residual Connections:</h4>
            <pre><code>
# Skip connections allow gradients to flow directly
class ResidualBlock(nn.Module):
    def forward(self, x):
        residual = x
        out = self.conv1(x)
        out = self.relu(out)
        out = self.conv2(out)
        out += residual  # Skip connection
        out = self.relu(out)
        return out
            </code></pre>

            <h3>Conclusion</h3>
            <p>Backpropagation is the secret sauce of deep learning. By efficiently computing gradients using the chain rule, it enables networks with millions of parameters to learn complex patterns. Modern frameworks handle the math automatically, but understanding backpropagation helps you debug training issues, design better architectures, and appreciate why techniques like batch normalization and skip connections are so important.</p>
        `
    },
    {
        id: 'b21',
        title: 'Loss Functions',
        icon: '📉',
        description: 'Measuring and minimizing prediction errors.',
        readTime: '12 min',
        level: 'Beginner',
        content: `
            <h2>Loss Functions</h2>
            <p>Loss functions are the mathematical compass that guides neural network training. They quantify how far off a model's predictions are from the actual values, providing a single number that the optimization algorithm tries to minimize. Choosing the right loss function is crucial—it directly impacts what patterns your model learns and how well it performs.</p>

            <h3>What is a Loss Function?</h3>
            <p>A loss function (also called cost function or objective function) measures the discrepancy between predicted values and actual target values. During training, the model adjusts its parameters to minimize this loss. Think of it as a GPS that tells you how far you are from your destination—the lower the loss, the closer you are to perfect predictions.</p>

            <h3>Common Loss Functions for Regression</h3>
            <p>Regression tasks predict continuous values (like house prices or temperatures). Here are the most popular loss functions:</p>

            <h4>1. Mean Squared Error (MSE)</h4>
            <p>MSE is the most common regression loss. It squares the differences between predictions and actual values, heavily penalizing large errors:</p>
            <pre><code>
import torch
import torch.nn as nn

# MSE Loss
mse_loss = nn.MSELoss()

predictions = torch.tensor([2.5, 3.8, 5.1])
targets = torch.tensor([2.0, 4.0, 5.0])

loss = mse_loss(predictions, targets)
print(f"MSE Loss: {loss.item():.4f}")  # 0.07
            </code></pre>

            <h4>2. Mean Absolute Error (MAE)</h4>
            <p>MAE measures the average absolute difference. It's less sensitive to outliers than MSE:</p>
            <pre><code>
mae_loss = nn.L1Loss()
loss = mae_loss(predictions, targets)
print(f"MAE Loss: {loss.item():.4f}")  # 0.2333
            </code></pre>

            <h4>3. Huber Loss</h4>
            <p>Huber loss combines the best of MSE and MAE—quadratic for small errors, linear for large errors:</p>
            <pre><code>
huber_loss = nn.SmoothL1Loss()
loss = huber_loss(predictions, targets)
print(f"Huber Loss: {loss.item():.4f}")
            </code></pre>

            <h3>Common Loss Functions for Classification</h3>

            <h4>1. Binary Cross-Entropy</h4>
            <p>For binary classification (two classes), BCE measures the difference between predicted probabilities and actual labels:</p>
            <pre><code>
# Binary classification
bce_loss = nn.BCELoss()

predictions = torch.tensor([0.9, 0.2, 0.8, 0.3])
targets = torch.tensor([1.0, 0.0, 1.0, 0.0])

loss = bce_loss(predictions, targets)
print(f"BCE Loss: {loss.item():.4f}")
            </code></pre>

            <h4>2. Cross-Entropy Loss</h4>
            <p>For multi-class classification, cross-entropy is the standard choice. It combines softmax activation with negative log likelihood:</p>
            <pre><code>
# Multi-class classification
ce_loss = nn.CrossEntropyLoss()

# Raw logits (before softmax)
logits = torch.tensor([[2.0, 1.0, 0.1],
                       [0.5, 2.5, 0.3],
                       [1.2, 0.8, 2.0]])
targets = torch.tensor([0, 1, 2])  # Class indices

loss = ce_loss(logits, targets)
print(f"Cross-Entropy Loss: {loss.item():.4f}")
            </code></pre>

            <h3>Custom Loss Functions</h3>
            <p>Sometimes you need specialized loss functions for specific tasks:</p>
            <pre><code>
# Custom weighted MSE loss
class WeightedMSELoss(nn.Module):
    def __init__(self, weights):
        super().__init__()
        self.weights = weights

    def forward(self, predictions, targets):
        squared_diff = (predictions - targets) ** 2
        weighted_loss = squared_diff * self.weights
        return weighted_loss.mean()

# Example: Recent predictions matter more
weights = torch.tensor([0.5, 0.7, 1.0, 1.3, 1.5])
custom_loss = WeightedMSELoss(weights)

predictions = torch.tensor([1.0, 2.0, 3.0, 4.0, 5.0])
targets = torch.tensor([1.1, 2.2, 2.9, 4.1, 4.8])
loss = custom_loss(predictions, targets)
print(f"Weighted MSE: {loss.item():.4f}")
            </code></pre>

            <h3>Loss Functions in Practice</h3>
            <p>Here's a complete training loop showing how loss functions drive learning:</p>
            <pre><code>
import torch.optim as optim

# Simple neural network
model = nn.Sequential(
    nn.Linear(10, 50),
    nn.ReLU(),
    nn.Linear(50, 1)
)

criterion = nn.MSELoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training loop
for epoch in range(100):
    # Forward pass
    predictions = model(X_train)
    loss = criterion(predictions, y_train)

    # Backward pass
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

    if epoch % 10 == 0:
        print(f"Epoch {epoch}, Loss: {loss.item():.4f}")
            </code></pre>

            <h3>Choosing the Right Loss Function</h3>
            <ul>
                <li><strong>Regression with outliers:</strong> Use MAE or Huber loss instead of MSE</li>
                <li><strong>Binary classification:</strong> Use Binary Cross-Entropy</li>
                <li><strong>Multi-class classification:</strong> Use Cross-Entropy Loss</li>
                <li><strong>Imbalanced data:</strong> Use weighted loss functions to give more importance to rare classes</li>
                <li><strong>Multiple objectives:</strong> Combine multiple loss functions with different weights</li>
            </ul>

            <h3>Common Pitfalls</h3>
            <ul>
                <li><strong>Wrong loss function:</strong> Using MSE for classification or cross-entropy for regression leads to poor results</li>
                <li><strong>Ignoring data distribution:</strong> Not accounting for class imbalance or outliers</li>
                <li><strong>Numerical instability:</strong> Some loss functions can produce NaN or infinity values with extreme predictions</li>
                <li><strong>Loss doesn't match goal:</strong> Optimizing for MSE when you care about accuracy percentage</li>
            </ul>

            <h3>Conclusion</h3>
            <p>Loss functions are the objective that drives all neural network learning. By converting complex prediction tasks into a single number to minimize, they enable gradient descent to systematically improve model performance. Understanding different loss functions helps you choose the right tool for your task, handle tricky data distributions, and design models that optimize for what really matters in your application.</p>
        `
    },
    {
        id: 'b22',
        title: 'Activation Functions',
        icon: '⚡',
        description: 'Adding non-linearity to neural networks.',
        readTime: '11 min',
        level: 'Beginner',
        content: `
            <h2>Activation Functions</h2>
            <p>Activation functions are the secret ingredient that gives neural networks their power. Without them, even a deep neural network would be equivalent to a simple linear model. Activation functions introduce non-linearity, enabling networks to learn complex patterns, curves, and decision boundaries that linear models cannot capture.</p>

            <h3>Why Do We Need Activation Functions?</h3>
            <p>A neural network layer performs two operations: a linear transformation (weighted sum) followed by a non-linear activation. Without the activation function, stacking multiple layers would still produce a linear transformation. Here's why that's a problem:</p>
            <pre><code>
# Without activation (purely linear)
layer1 = W1 @ x + b1
layer2 = W2 @ layer1 + b2

# This is equivalent to a single linear layer:
# layer2 = (W2 @ W1) @ x + (W2 @ b1 + b2)
# = W_combined @ x + b_combined
            </code></pre>
            <p>Activation functions break this linearity, allowing networks to approximate any continuous function—a property called universal approximation.</p>

            <h3>Common Activation Functions</h3>

            <h4>1. ReLU (Rectified Linear Unit)</h4>
            <p>ReLU is the most popular activation function in modern deep learning. It's simple: output the input if positive, zero otherwise.</p>
            <pre><code>
import torch
import torch.nn as nn
import numpy as np
import matplotlib.pyplot as plt

# ReLU: f(x) = max(0, x)
relu = nn.ReLU()
x = torch.linspace(-3, 3, 100)
y = relu(x)

# Manual implementation
def relu_manual(x):
    return torch.maximum(torch.tensor(0.0), x)

# In a network
model = nn.Sequential(
    nn.Linear(10, 50),
    nn.ReLU(),  # Activation after linear layer
    nn.Linear(50, 20),
    nn.ReLU(),
    nn.Linear(20, 1)
)
            </code></pre>
            <p><strong>Advantages:</strong> Computationally efficient, reduces vanishing gradient problem, promotes sparsity (many neurons output zero)</p>
            <p><strong>Disadvantages:</strong> "Dying ReLU" problem where neurons can get stuck always outputting zero</p>

            <h4>2. Leaky ReLU</h4>
            <p>Leaky ReLU fixes the dying ReLU problem by allowing a small negative slope:</p>
            <pre><code>
# Leaky ReLU: f(x) = max(0.01x, x)
leaky_relu = nn.LeakyReLU(negative_slope=0.01)

# In a model
model = nn.Sequential(
    nn.Linear(10, 50),
    nn.LeakyReLU(0.01),
    nn.Linear(50, 1)
)
            </code></pre>

            <h4>3. Sigmoid</h4>
            <p>Sigmoid squashes values to the range (0, 1), making it useful for binary classification outputs:</p>
            <pre><code>
# Sigmoid: f(x) = 1 / (1 + e^(-x))
sigmoid = nn.Sigmoid()

# Binary classification output layer
model = nn.Sequential(
    nn.Linear(10, 50),
    nn.ReLU(),
    nn.Linear(50, 1),
    nn.Sigmoid()  # Output between 0 and 1
)

# Example prediction
x = torch.randn(5, 10)
output = model(x)
print(output)  # Values between 0 and 1
            </code></pre>
            <p><strong>Use case:</strong> Binary classification output, gates in LSTM networks</p>
            <p><strong>Disadvantage:</strong> Vanishing gradient problem for very large or small inputs</p>

            <h4>4. Tanh (Hyperbolic Tangent)</h4>
            <p>Tanh is similar to sigmoid but outputs values in (-1, 1), making it zero-centered:</p>
            <pre><code>
# Tanh: f(x) = (e^x - e^(-x)) / (e^x + e^(-x))
tanh = nn.Tanh()

# Often used in RNNs
rnn_cell = nn.RNNCell(input_size=10, hidden_size=20)
# Internally uses tanh activation
            </code></pre>

            <h4>5. Softmax</h4>
            <p>Softmax converts a vector of values into a probability distribution, used for multi-class classification:</p>
            <pre><code>
# Softmax: outputs sum to 1
softmax = nn.Softmax(dim=1)

# Multi-class classification
logits = torch.tensor([[2.0, 1.0, 0.1],
                       [0.5, 2.5, 0.3]])
probabilities = softmax(logits)
print(probabilities)
# [[0.659, 0.242, 0.099],
#  [0.186, 0.719, 0.095]]

# Each row sums to 1
print(probabilities.sum(dim=1))  # [1., 1.]
            </code></pre>

            <h4>6. GELU (Gaussian Error Linear Unit)</h4>
            <p>GELU is used in modern transformers like BERT and GPT. It provides smooth, probabilistic activation:</p>
            <pre><code>
# GELU: used in transformers
gelu = nn.GELU()

# Transformer block example
class TransformerFFN(nn.Module):
    def __init__(self, d_model, d_ff):
        super().__init__()
        self.fc1 = nn.Linear(d_model, d_ff)
        self.gelu = nn.GELU()
        self.fc2 = nn.Linear(d_ff, d_model)

    def forward(self, x):
        x = self.fc1(x)
        x = self.gelu(x)  # GELU activation
        x = self.fc2(x)
        return x
            </code></pre>

            <h3>Choosing the Right Activation Function</h3>
            <ul>
                <li><strong>Hidden layers:</strong> Start with ReLU or Leaky ReLU for most tasks</li>
                <li><strong>Binary classification output:</strong> Use Sigmoid</li>
                <li><strong>Multi-class classification output:</strong> Use Softmax</li>
                <li><strong>Regression output:</strong> No activation (linear output)</li>
                <li><strong>Transformers:</strong> Use GELU for better performance</li>
                <li><strong>RNNs/LSTMs:</strong> Tanh for hidden states, Sigmoid for gates</li>
            </ul>

            <h3>Practical Example: Testing Different Activations</h3>
            <pre><code>
# Compare activations on the same task
class ModelWithActivation(nn.Module):
    def __init__(self, activation):
        super().__init__()
        self.fc1 = nn.Linear(10, 50)
        self.activation = activation
        self.fc2 = nn.Linear(50, 1)

    def forward(self, x):
        x = self.fc1(x)
        x = self.activation(x)
        x = self.fc2(x)
        return x

# Test different activations
activations = {
    'ReLU': nn.ReLU(),
    'LeakyReLU': nn.LeakyReLU(0.01),
    'Tanh': nn.Tanh(),
    'GELU': nn.GELU()
}

for name, activation in activations.items():
    model = ModelWithActivation(activation)
    # Train and evaluate...
    print(f"{name} activation trained")
            </code></pre>

            <h3>Common Pitfalls</h3>
            <ul>
                <li><strong>Using activation on output layer:</strong> Don't use ReLU on regression outputs that can be negative</li>
                <li><strong>Vanishing gradients:</strong> Sigmoid and Tanh in deep networks can cause training to stall</li>
                <li><strong>Exploding activations:</strong> Without normalization, activations can grow unbounded</li>
                <li><strong>Wrong activation for task:</strong> Using Softmax for regression or no activation for classification</li>
            </ul>

            <h3>Conclusion</h3>
            <p>Activation functions are fundamental to neural networks' ability to learn complex patterns. ReLU has become the default for hidden layers due to its simplicity and effectiveness, while specialized activations like GELU power state-of-the-art transformers. Understanding when and why to use each activation function is essential for building effective neural networks.</p>
        `
    },
    {
        id: 'b23',
        title: 'Batch Normalization',
        icon: '📊',
        description: 'Stabilizing and accelerating neural network training.',
        readTime: '13 min',
        level: 'Beginner',
        content: `
            <h2>Batch Normalization</h2>
            <p>Batch Normalization (BatchNorm) is one of the most impactful techniques in modern deep learning. Introduced in 2015, it addresses the problem of internal covariate shift—the phenomenon where the distribution of layer inputs changes during training, making learning slow and unstable. BatchNorm normalizes layer inputs, dramatically speeding up training and improving model performance.</p>

            <h3>The Problem: Internal Covariate Shift</h3>
            <p>As a neural network trains, the parameters of each layer constantly change. This causes the distribution of inputs to subsequent layers to shift, forcing those layers to continuously adapt to a moving target. This slows down training and requires careful initialization and small learning rates.</p>

            <h3>How Batch Normalization Works</h3>
            <p>BatchNorm normalizes the inputs of each layer to have mean 0 and variance 1, then applies learnable scale (gamma) and shift (beta) parameters:</p>
            <pre><code>
# Mathematical operation:
# 1. Calculate batch statistics
mean = x.mean(dim=0)
variance = x.var(dim=0)

# 2. Normalize
x_normalized = (x - mean) / sqrt(variance + epsilon)

# 3. Scale and shift (learnable parameters)
y = gamma * x_normalized + beta
            </code></pre>

            <h3>Using Batch Normalization in PyTorch</h3>
            <pre><code>
import torch
import torch.nn as nn

# BatchNorm for different layer types
class ConvNetWithBN(nn.Module):
    def __init__(self):
        super().__init__()
        # Conv layers: normalize across channels
        self.conv1 = nn.Conv2d(3, 64, kernel_size=3, padding=1)
        self.bn1 = nn.BatchNorm2d(64)  # 64 channels

        self.conv2 = nn.Conv2d(64, 128, kernel_size=3, padding=1)
        self.bn2 = nn.BatchNorm2d(128)

        # Fully connected layers
        self.fc1 = nn.Linear(128 * 8 * 8, 512)
        self.bn3 = nn.BatchNorm1d(512)  # 1D for linear layers

        self.fc2 = nn.Linear(512, 10)
        self.relu = nn.ReLU()

    def forward(self, x):
        # Conv block: Conv -> BatchNorm -> Activation
        x = self.conv1(x)
        x = self.bn1(x)
        x = self.relu(x)

        x = self.conv2(x)
        x = self.bn2(x)
        x = self.relu(x)

        # Flatten and FC layers
        x = x.view(x.size(0), -1)
        x = self.fc1(x)
        x = self.bn3(x)
        x = self.relu(x)

        x = self.fc2(x)
        return x

model = ConvNetWithBN()
print(model)
            </code></pre>

            <h3>BatchNorm Ordering: Before or After Activation?</h3>
            <p>The original paper placed BatchNorm before activation (Conv → BN → ReLU), but both orderings work. The standard practice today:</p>
            <pre><code>
# Original paper: Conv -> BN -> Activation
x = conv(x)
x = batch_norm(x)
x = relu(x)

# Alternative: Conv -> Activation -> BN
x = conv(x)
x = relu(x)
x = batch_norm(x)

# Modern practice: use the original (Conv -> BN -> Activation)
# It's become the standard and works well
            </code></pre>

            <h3>Training vs. Evaluation Mode</h3>
            <p>BatchNorm behaves differently during training and evaluation:</p>
            <pre><code>
# During training: use batch statistics
model.train()
# BatchNorm calculates mean/var from current batch

# During evaluation: use running statistics
model.eval()
# BatchNorm uses running mean/var computed during training

# Complete example
model = ConvNetWithBN()
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters())

# Training loop
model.train()  # Enable training mode
for batch_x, batch_y in train_loader:
    optimizer.zero_grad()
    output = model(batch_x)  # Uses batch statistics
    loss = criterion(output, batch_y)
    loss.backward()
    optimizer.step()

# Evaluation
model.eval()  # Enable evaluation mode
with torch.no_grad():
    for batch_x, batch_y in test_loader:
        output = model(batch_x)  # Uses running statistics
        # Calculate accuracy...
            </code></pre>

            <h3>Benefits of Batch Normalization</h3>
            <ul>
                <li><strong>Faster training:</strong> Allows higher learning rates, reducing training time by 2-10x</li>
                <li><strong>Less sensitive to initialization:</strong> Reduces the importance of careful weight initialization</li>
                <li><strong>Regularization effect:</strong> Adds slight noise (from batch statistics), reducing overfitting</li>
                <li><strong>Higher learning rates:</strong> Stable gradients enable using larger learning rates</li>
                <li><strong>Better gradient flow:</strong> Prevents gradients from vanishing or exploding</li>
            </ul>

            <h3>Practical Example: With vs. Without BatchNorm</h3>
            <pre><code>
# Without BatchNorm
model_no_bn = nn.Sequential(
    nn.Linear(784, 512),
    nn.ReLU(),
    nn.Linear(512, 256),
    nn.ReLU(),
    nn.Linear(256, 10)
)

# With BatchNorm
model_with_bn = nn.Sequential(
    nn.Linear(784, 512),
    nn.BatchNorm1d(512),
    nn.ReLU(),
    nn.Linear(512, 256),
    nn.BatchNorm1d(256),
    nn.ReLU(),
    nn.Linear(256, 10)
)

# Train both and compare:
# - model_with_bn typically trains 2-3x faster
# - achieves better final accuracy
# - more stable training curves
            </code></pre>

            <h3>Variants and Alternatives</h3>

            <h4>Layer Normalization</h4>
            <p>Used in transformers and RNNs where batch statistics aren't suitable:</p>
            <pre><code>
# LayerNorm: normalize across features instead of batch
layer_norm = nn.LayerNorm(512)

# Used in transformers
class TransformerLayer(nn.Module):
    def __init__(self, d_model):
        super().__init__()
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
        # attention and feedforward layers...
            </code></pre>

            <h4>Group Normalization</h4>
            <p>Works well with small batch sizes:</p>
            <pre><code>
# Group Norm: divide channels into groups
group_norm = nn.GroupNorm(num_groups=32, num_channels=128)
            </code></pre>

            <h3>Common Pitfalls</h3>
            <ul>
                <li><strong>Wrong mode:</strong> Forgetting to call model.eval() during testing leads to unstable results</li>
                <li><strong>Small batches:</strong> BatchNorm works poorly with batch size < 8; use GroupNorm instead</li>
                <li><strong>Incompatible tasks:</strong> BatchNorm can hurt performance in RL, GANs, and online learning</li>
                <li><strong>Placement:</strong> Putting BatchNorm after activation reduces its effectiveness</li>
            </ul>

            <h3>When to Use Batch Normalization</h3>
            <ul>
                <li><strong>Use:</strong> Deep CNNs for image classification, detection, segmentation</li>
                <li><strong>Use:</strong> Training very deep networks (ResNet, DenseNet)</li>
                <li><strong>Use:</strong> When you want to use higher learning rates</li>
                <li><strong>Avoid:</strong> RNNs and transformers (use LayerNorm instead)</li>
                <li><strong>Avoid:</strong> Batch size < 8 (use GroupNorm instead)</li>
                <li><strong>Avoid:</strong> GANs discriminator (can cause instability)</li>
            </ul>

            <h3>Conclusion</h3>
            <p>Batch Normalization is a cornerstone of modern deep learning. By normalizing layer inputs, it stabilizes training, enables higher learning rates, and acts as a mild regularizer. While it's not a silver bullet—some domains like transformers prefer LayerNorm—it remains the go-to normalization technique for convolutional networks and has fundamentally changed how we train deep models.</p>
        `
    },
    {
        id: 'b24',
        title: 'Dropout Regularization',
        icon: '🎲',
        description: 'Preventing overfitting through random deactivation.',
        readTime: '12 min',
        level: 'Beginner',
        content: `
            <h2>Dropout Regularization</h2>
            <p>Dropout is an elegantly simple yet powerful technique for preventing overfitting in neural networks. Introduced in 2012, dropout randomly "drops out" (sets to zero) a fraction of neurons during training, forcing the network to learn robust features that work even when some neurons are missing. It's like training an ensemble of many subnetworks simultaneously.</p>

            <h3>The Problem: Overfitting</h3>
            <p>Neural networks, especially deep ones, have millions of parameters. This enormous capacity allows them to memorize training data perfectly, including noise and irrelevant patterns. The result: 99% training accuracy, but poor performance on new data. Dropout helps by preventing neurons from co-adapting too much to specific training examples.</p>

            <h3>How Dropout Works</h3>
            <p>During training, dropout randomly sets a fraction (typically 50%) of neuron activations to zero. During inference, all neurons are active but scaled by the dropout probability:</p>
            <pre><code>
# Training time
# For each forward pass:
mask = (torch.rand(neurons.shape) > dropout_rate).float()
neurons = neurons * mask

# Inference time
# No dropout, but scale by (1 - dropout_rate)
neurons = neurons * (1 - dropout_rate)

# Modern frameworks use "inverted dropout" to avoid scaling at inference:
# Training: neurons = neurons * mask / (1 - dropout_rate)
# Inference: neurons = neurons (no scaling needed)
            </code></pre>

            <h3>Using Dropout in PyTorch</h3>
            <pre><code>
import torch
import torch.nn as nn

class ModelWithDropout(nn.Module):
    def __init__(self, dropout_rate=0.5):
        super().__init__()
        self.fc1 = nn.Linear(784, 512)
        self.dropout1 = nn.Dropout(p=dropout_rate)

        self.fc2 = nn.Linear(512, 256)
        self.dropout2 = nn.Dropout(p=dropout_rate)

        self.fc3 = nn.Linear(256, 128)
        self.dropout3 = nn.Dropout(p=dropout_rate)

        self.fc4 = nn.Linear(128, 10)
        self.relu = nn.ReLU()

    def forward(self, x):
        x = x.view(-1, 784)

        x = self.fc1(x)
        x = self.relu(x)
        x = self.dropout1(x)  # Apply dropout after activation

        x = self.fc2(x)
        x = self.relu(x)
        x = self.dropout2(x)

        x = self.fc3(x)
        x = self.relu(x)
        x = self.dropout3(x)

        x = self.fc4(x)  # No dropout on output layer
        return x

model = ModelWithDropout(dropout_rate=0.5)
            </code></pre>

            <h3>Training vs. Evaluation Mode</h3>
            <p>Dropout must be disabled during evaluation. PyTorch handles this automatically:</p>
            <pre><code>
model = ModelWithDropout()

# Training: dropout is active
model.train()
output = model(x_train)  # Random neurons dropped

# Evaluation: dropout is disabled
model.eval()
output = model(x_test)  # All neurons active

# Complete training loop
for epoch in range(num_epochs):
    # Training phase
    model.train()
    for batch_x, batch_y in train_loader:
        optimizer.zero_grad()
        predictions = model(batch_x)
        loss = criterion(predictions, batch_y)
        loss.backward()
        optimizer.step()

    # Validation phase
    model.eval()
    with torch.no_grad():
        for batch_x, batch_y in val_loader:
            predictions = model(batch_x)
            val_loss = criterion(predictions, batch_y)
            </code></pre>

            <h3>Dropout Rates: How Much to Drop?</h3>
            <ul>
                <li><strong>0.5 (50%):</strong> Standard for fully connected layers, proven effective</li>
                <li><strong>0.2-0.3:</strong> For convolutional layers (CNNs usually need less dropout)</li>
                <li><strong>0.1-0.2:</strong> For input layers (be conservative with input)</li>
                <li><strong>0.0:</strong> Output layer (never apply dropout to final predictions)</li>
            </ul>

            <pre><code>
class ConvNetWithDropout(nn.Module):
    def __init__(self):
        super().__init__()
        # Convolutional layers
        self.conv1 = nn.Conv2d(3, 64, 3, padding=1)
        self.conv2 = nn.Conv2d(64, 128, 3, padding=1)
        self.dropout_conv = nn.Dropout2d(p=0.25)  # 2D dropout for conv layers

        # Fully connected layers
        self.fc1 = nn.Linear(128 * 8 * 8, 512)
        self.dropout_fc1 = nn.Dropout(p=0.5)

        self.fc2 = nn.Linear(512, 256)
        self.dropout_fc2 = nn.Dropout(p=0.5)

        self.fc3 = nn.Linear(256, 10)
        # No dropout on output layer

    def forward(self, x):
        x = F.relu(self.conv1(x))
        x = F.relu(self.conv2(x))
        x = self.dropout_conv(x)  # Spatial dropout

        x = x.view(x.size(0), -1)

        x = F.relu(self.fc1(x))
        x = self.dropout_fc1(x)

        x = F.relu(self.fc2(x))
        x = self.dropout_fc2(x)

        x = self.fc3(x)
        return x
            </code></pre>

            <h3>Dropout Variants</h3>

            <h4>1. Spatial Dropout (Dropout2d)</h4>
            <p>For convolutional layers, drops entire feature maps instead of individual pixels:</p>
            <pre><code>
# Regular Dropout: drops individual pixels
dropout_regular = nn.Dropout(p=0.5)

# Spatial Dropout: drops entire channels
dropout_spatial = nn.Dropout2d(p=0.25)

# For feature maps of shape (batch, channels, height, width)
# Dropout2d drops entire channels, preserving spatial coherence
            </code></pre>

            <h4>2. DropConnect</h4>
            <p>Instead of dropping activations, DropConnect drops weights:</p>
            <pre><code>
# Standard dropout: zeros activations
# DropConnect: zeros weights during forward pass
# Not built-in to PyTorch, but can be implemented manually
            </code></pre>

            <h3>Combining Dropout with Other Techniques</h3>
            <pre><code>
class ModernDeepNetwork(nn.Module):
    def __init__(self):
        super().__init__()
        # Combine BatchNorm and Dropout
        self.fc1 = nn.Linear(784, 512)
        self.bn1 = nn.BatchNorm1d(512)
        self.dropout1 = nn.Dropout(0.3)

        self.fc2 = nn.Linear(512, 256)
        self.bn2 = nn.BatchNorm1d(256)
        self.dropout2 = nn.Dropout(0.3)

        self.fc3 = nn.Linear(256, 10)

    def forward(self, x):
        # Order: Linear -> BatchNorm -> Activation -> Dropout
        x = self.fc1(x)
        x = self.bn1(x)
        x = F.relu(x)
        x = self.dropout1(x)

        x = self.fc2(x)
        x = self.bn2(x)
        x = F.relu(x)
        x = self.dropout2(x)

        x = self.fc3(x)
        return x
            </code></pre>

            <h3>Practical Comparison: With vs. Without Dropout</h3>
            <pre><code>
# Experiment: Train on small dataset
train_size = 1000  # Small dataset to encourage overfitting

# Model without dropout
model_no_dropout = nn.Sequential(
    nn.Linear(784, 512), nn.ReLU(),
    nn.Linear(512, 256), nn.ReLU(),
    nn.Linear(256, 10)
)

# Model with dropout
model_with_dropout = nn.Sequential(
    nn.Linear(784, 512), nn.ReLU(), nn.Dropout(0.5),
    nn.Linear(512, 256), nn.ReLU(), nn.Dropout(0.5),
    nn.Linear(256, 10)
)

# Typical results:
# No dropout:  train_acc=99%, val_acc=85% (overfitting!)
# With dropout: train_acc=95%, val_acc=92% (better generalization)
            </code></pre>

            <h3>When to Use Dropout</h3>
            <ul>
                <li><strong>Use when:</strong> Model overfits (high train accuracy, low val accuracy)</li>
                <li><strong>Use when:</strong> Limited training data</li>
                <li><strong>Use when:</strong> Building large fully-connected networks</li>
                <li><strong>Consider alternatives:</strong> Modern CNNs often use BatchNorm instead</li>
                <li><strong>Avoid:</strong> Very small networks (might underfit)</li>
                <li><strong>Avoid:</strong> When training data is already abundant and diverse</li>
            </ul>

            <h3>Common Pitfalls</h3>
            <ul>
                <li><strong>Forgetting model.eval():</strong> Leaving dropout active during testing gives inconsistent predictions</li>
                <li><strong>Too much dropout:</strong> High dropout rates (>0.7) can prevent learning entirely</li>
                <li><strong>Dropout on output:</strong> Never apply dropout to the final prediction layer</li>
                <li><strong>Using with BatchNorm:</strong> When combined, often need lower dropout rates (0.2-0.3)</li>
            </ul>

            <h3>Conclusion</h3>
            <p>Dropout is a simple yet effective regularization technique that prevents overfitting by training an ensemble of subnetworks. While modern architectures like ResNet rely more on BatchNorm, dropout remains valuable for fully-connected layers, small datasets, and situations where overfitting is a concern. The key is using it correctly: apply it during training, disable it during evaluation, and tune the dropout rate to your specific task.</p>
        `
    },
    {
        id: 'b25',
        title: 'Convolutional Neural Networks',
        icon: '🖼️',
        description: 'Specialized architecture for image processing.',
        readTime: '17 min',
        level: 'Beginner',
        content: `
            <h2>Convolutional Neural Networks (CNNs)</h2>
            <p>Convolutional Neural Networks revolutionized computer vision. By using convolution operations that preserve spatial relationships, CNNs can efficiently learn hierarchical visual features—from edges and textures in early layers to complex objects and scenes in deeper layers. This makes them the foundation of modern image classification, object detection, and image generation systems.</p>

            <h3>Why CNNs for Images?</h3>
            <p>Traditional fully-connected networks struggle with images for three reasons:</p>
            <ul>
                <li><strong>Too many parameters:</strong> A 224×224 RGB image has 150,528 pixels. A single hidden layer with 1000 neurons needs 150 million parameters!</li>
                <li><strong>Ignore spatial structure:</strong> Images have strong local patterns (edges, textures). Flattening destroys this spatial information.</li>
                <li><strong>No translation invariance:</strong> A cat in the top-left requires different weights than a cat in the bottom-right.</li>
            </ul>
            <p>CNNs solve all three problems using convolutional layers, parameter sharing, and local receptive fields.</p>

            <h3>Core Concept: Convolution Operation</h3>
            <p>A convolution applies a small filter (kernel) across the input, computing dot products at each position:</p>
            <pre><code>
import torch
import torch.nn as nn
import torch.nn.functional as F

# Simple convolution example
# Input: (batch=1, channels=1, height=5, width=5)
input_image = torch.randn(1, 1, 5, 5)

# Convolution layer: 1 input channel, 16 output channels, 3x3 kernel
conv = nn.Conv2d(in_channels=1, out_channels=16, kernel_size=3, padding=1)

# Forward pass
output = conv(input_image)
print(output.shape)  # torch.Size([1, 16, 5, 5])

# Each of the 16 filters learns different features (edges, textures, etc.)
            </code></pre>

            <h3>Building a Complete CNN</h3>
            <p>A typical CNN architecture consists of repeated blocks of convolution, activation, and pooling layers:</p>
            <pre><code>
class SimpleCNN(nn.Module):
    def __init__(self, num_classes=10):
        super().__init__()

        # Convolutional layers
        # Input: 3 channels (RGB), output: 32 channels
        self.conv1 = nn.Conv2d(3, 32, kernel_size=3, padding=1)
        self.bn1 = nn.BatchNorm2d(32)

        self.conv2 = nn.Conv2d(32, 64, kernel_size=3, padding=1)
        self.bn2 = nn.BatchNorm2d(64)

        self.conv3 = nn.Conv2d(64, 128, kernel_size=3, padding=1)
        self.bn3 = nn.BatchNorm2d(128)

        # Pooling layer
        self.pool = nn.MaxPool2d(kernel_size=2, stride=2)

        # Fully connected layers
        # After 3 pooling layers: 32x32 -> 16x16 -> 8x8 -> 4x4
        self.fc1 = nn.Linear(128 * 4 * 4, 512)
        self.dropout = nn.Dropout(0.5)
        self.fc2 = nn.Linear(512, num_classes)

    def forward(self, x):
        # Conv block 1: Conv -> BN -> ReLU -> Pool
        x = self.conv1(x)  # (batch, 32, 32, 32)
        x = self.bn1(x)
        x = F.relu(x)
        x = self.pool(x)   # (batch, 32, 16, 16)

        # Conv block 2
        x = self.conv2(x)  # (batch, 64, 16, 16)
        x = self.bn2(x)
        x = F.relu(x)
        x = self.pool(x)   # (batch, 64, 8, 8)

        # Conv block 3
        x = self.conv3(x)  # (batch, 128, 8, 8)
        x = self.bn3(x)
        x = F.relu(x)
        x = self.pool(x)   # (batch, 128, 4, 4)

        # Flatten and fully connected
        x = x.view(x.size(0), -1)  # (batch, 128*4*4)
        x = self.fc1(x)
        x = F.relu(x)
        x = self.dropout(x)
        x = self.fc2(x)

        return x

# Create model
model = SimpleCNN(num_classes=10)

# Test with random input (batch of 4 images, 3 channels, 32x32)
input_batch = torch.randn(4, 3, 32, 32)
output = model(input_batch)
print(output.shape)  # torch.Size([4, 10])
            </code></pre>

            <h3>Key CNN Components</h3>

            <h4>1. Convolutional Layers</h4>
            <pre><code>
# Important parameters:
# - in_channels: number of input channels (3 for RGB)
# - out_channels: number of filters (learned features)
# - kernel_size: size of the convolution filter (3x3, 5x5, etc.)
# - stride: step size (default=1)
# - padding: add zeros around borders to preserve size

conv = nn.Conv2d(
    in_channels=64,
    out_channels=128,
    kernel_size=3,
    stride=1,
    padding=1  # "same" padding: output size = input size
)
            </code></pre>

            <h4>2. Pooling Layers</h4>
            <p>Pooling reduces spatial dimensions, making the network more efficient and translation-invariant:</p>
            <pre><code>
# Max Pooling: takes maximum value in each window
max_pool = nn.MaxPool2d(kernel_size=2, stride=2)
# Input (32x32) -> Output (16x16)

# Average Pooling: takes average value
avg_pool = nn.AvgPool2d(kernel_size=2, stride=2)

# Adaptive Pooling: output size is fixed regardless of input
adaptive_pool = nn.AdaptiveAvgPool2d((7, 7))
# Any input size -> Output (7x7)
            </code></pre>

            <h4>3. Padding Strategies</h4>
            <pre><code>
# No padding: output shrinks
conv_valid = nn.Conv2d(3, 64, kernel_size=3, padding=0)
# Input 32x32 -> Output 30x30

# Same padding: output size preserved
conv_same = nn.Conv2d(3, 64, kernel_size=3, padding=1)
# Input 32x32 -> Output 32x32

# Calculate padding for "same" convolution:
# padding = (kernel_size - 1) // 2
# For kernel_size=3: padding=1
# For kernel_size=5: padding=2
            </code></pre>

            <h3>Famous CNN Architectures</h3>

            <h4>VGG-style (Deep Uniform Architecture)</h4>
            <pre><code>
class VGGBlock(nn.Module):
    def __init__(self, in_channels, out_channels, num_convs):
        super().__init__()
        layers = []
        for i in range(num_convs):
            layers.extend([
                nn.Conv2d(in_channels if i == 0 else out_channels,
                         out_channels, kernel_size=3, padding=1),
                nn.BatchNorm2d(out_channels),
                nn.ReLU(inplace=True)
            ])
        layers.append(nn.MaxPool2d(kernel_size=2, stride=2))
        self.block = nn.Sequential(*layers)

    def forward(self, x):
        return self.block(x)

class VGGNet(nn.Module):
    def __init__(self, num_classes=1000):
        super().__init__()
        self.features = nn.Sequential(
            VGGBlock(3, 64, 2),    # 64 channels, 2 conv layers
            VGGBlock(64, 128, 2),   # 128 channels, 2 conv layers
            VGGBlock(128, 256, 3),  # 256 channels, 3 conv layers
            VGGBlock(256, 512, 3),
            VGGBlock(512, 512, 3)
        )
        self.classifier = nn.Sequential(
            nn.Linear(512 * 7 * 7, 4096),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(4096, 4096),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(4096, num_classes)
        )
            </code></pre>

            <h4>ResNet-style (Residual Connections)</h4>
            <pre><code>
class ResidualBlock(nn.Module):
    def __init__(self, channels):
        super().__init__()
        self.conv1 = nn.Conv2d(channels, channels, 3, padding=1)
        self.bn1 = nn.BatchNorm2d(channels)
        self.conv2 = nn.Conv2d(channels, channels, 3, padding=1)
        self.bn2 = nn.BatchNorm2d(channels)

    def forward(self, x):
        residual = x  # Save input

        out = F.relu(self.bn1(self.conv1(x)))
        out = self.bn2(self.conv2(out))

        out += residual  # Skip connection
        out = F.relu(out)
        return out
            </code></pre>

            <h3>Training a CNN: Complete Example</h3>
            <pre><code>
import torchvision
import torchvision.transforms as transforms
from torch.utils.data import DataLoader

# Data preparation
transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
])

train_dataset = torchvision.datasets.CIFAR10(
    root='./data', train=True, download=True, transform=transform
)
train_loader = DataLoader(train_dataset, batch_size=64, shuffle=True)

# Model, loss, optimizer
model = SimpleCNN(num_classes=10)
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

# Training loop
model.train()
for epoch in range(10):
    running_loss = 0.0
    for i, (images, labels) in enumerate(train_loader):
        # Forward pass
        outputs = model(images)
        loss = criterion(outputs, labels)

        # Backward pass
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        running_loss += loss.item()

        if i % 100 == 99:
            print(f'Epoch [{epoch+1}], Step [{i+1}], Loss: {running_loss/100:.4f}')
            running_loss = 0.0
            </code></pre>

            <h3>Common Pitfalls</h3>
            <ul>
                <li><strong>Wrong input shape:</strong> CNN expects (batch, channels, height, width), not (batch, height, width, channels)</li>
                <li><strong>Dimension mismatch:</strong> Forgetting to calculate flatten size correctly before fully connected layers</li>
                <li><strong>Too many parameters:</strong> Using large kernels or too many channels early on</li>
                <li><strong>No data augmentation:</strong> CNNs benefit hugely from augmentation (flips, rotations, crops)</li>
            </ul>

            <h3>Best Practices</h3>
            <ul>
                <li>Start with small 3×3 filters (like VGG and ResNet)</li>
                <li>Use BatchNorm after conv layers for faster, more stable training</li>
                <li>Increase channels as spatial dimensions decrease</li>
                <li>Use adaptive pooling before final FC layer for flexible input sizes</li>
                <li>Apply data augmentation during training</li>
            </ul>

            <h3>Conclusion</h3>
            <p>Convolutional Neural Networks are the backbone of computer vision. By exploiting spatial structure through convolutions, parameter sharing, and hierarchical feature learning, CNNs achieve superhuman performance on image tasks. Modern architectures like ResNet and EfficientNet build on these foundations with skip connections, attention mechanisms, and careful scaling—but the core principles of convolution, pooling, and spatial feature extraction remain central to their success.</p>
        `
    },
    {
        id: 'b26',
        title: 'Recurrent Neural Networks',
        icon: '🔁',
        description: 'Processing sequential data like text and time series.',
        readTime: '15 min',
        level: 'Beginner',
        content: `
            <h2>Recurrent Neural Networks (RNNs)</h2>
            <p>Recurrent Neural Networks are designed to process sequential data where order matters—like sentences, time series, or videos. Unlike feedforward networks that treat each input independently, RNNs maintain an internal "memory" that captures information from previous time steps. This makes them ideal for tasks like language modeling, machine translation, and speech recognition.</p>

            <h3>Why RNNs for Sequences?</h3>
            <p>Standard neural networks have two critical limitations for sequential data:</p>
            <ul>
                <li><strong>Fixed input size:</strong> They require a predetermined input length, but sentences can vary wildly in length.</li>
                <li><strong>No memory:</strong> They process each input independently, forgetting everything about previous inputs.</li>
            </ul>
            <p>RNNs solve these problems by processing inputs one step at a time and maintaining a hidden state that acts as memory.</p>

            <h3>How RNNs Work</h3>
            <p>At each time step, an RNN takes the current input and the previous hidden state, and produces a new hidden state:</p>
            <pre><code>
# RNN operation at each time step:
h_t = tanh(W_hh @ h_{t-1} + W_xh @ x_t + b_h)
y_t = W_hy @ h_t + b_y

# Where:
# h_t: hidden state at time t (memory)
# x_t: input at time t
# y_t: output at time t
# W_hh, W_xh, W_hy: weight matrices
            </code></pre>

            <h3>Simple RNN in PyTorch</h3>
            <pre><code>
import torch
import torch.nn as nn

# Using PyTorch's built-in RNN
class SimpleRNN(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super().__init__()
        self.hidden_size = hidden_size

        # RNN layer
        self.rnn = nn.RNN(
            input_size=input_size,
            hidden_size=hidden_size,
            num_layers=1,
            batch_first=True  # Input shape: (batch, seq_len, features)
        )

        # Output layer
        self.fc = nn.Linear(hidden_size, output_size)

    def forward(self, x):
        # x shape: (batch_size, seq_len, input_size)

        # RNN forward pass
        # output shape: (batch_size, seq_len, hidden_size)
        # hidden shape: (num_layers, batch_size, hidden_size)
        output, hidden = self.rnn(x)

        # Use the last time step's output
        last_output = output[:, -1, :]  # (batch_size, hidden_size)

        # Final prediction
        prediction = self.fc(last_output)  # (batch_size, output_size)
        return prediction

# Example usage
model = SimpleRNN(input_size=10, hidden_size=128, output_size=5)

# Batch of 32 sequences, each 20 steps long, with 10 features
input_seq = torch.randn(32, 20, 10)
output = model(input_seq)
print(output.shape)  # torch.Size([32, 5])
            </code></pre>

            <h3>Implementing RNN from Scratch</h3>
            <p>Understanding the mechanics helps debug and customize RNNs:</p>
            <pre><code>
class RNNFromScratch(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super().__init__()
        self.hidden_size = hidden_size

        # Weight matrices
        self.W_xh = nn.Linear(input_size, hidden_size)
        self.W_hh = nn.Linear(hidden_size, hidden_size)
        self.W_hy = nn.Linear(hidden_size, output_size)

    def forward(self, x):
        batch_size, seq_len, _ = x.shape

        # Initialize hidden state with zeros
        h_t = torch.zeros(batch_size, self.hidden_size)

        # Process sequence step by step
        for t in range(seq_len):
            x_t = x[:, t, :]  # Input at time t

            # RNN cell computation
            h_t = torch.tanh(self.W_xh(x_t) + self.W_hh(h_t))

        # Output based on final hidden state
        output = self.W_hy(h_t)
        return output
            </code></pre>

            <h3>Bidirectional RNNs</h3>
            <p>Process sequences in both directions to capture future context:</p>
            <pre><code>
class BidirectionalRNN(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super().__init__()
        self.rnn = nn.RNN(
            input_size,
            hidden_size,
            bidirectional=True,  # Forward and backward
            batch_first=True
        )
        # Hidden size doubles: forward + backward
        self.fc = nn.Linear(hidden_size * 2, output_size)

    def forward(self, x):
        output, hidden = self.rnn(x)
        # output contains both forward and backward hidden states
        last_output = output[:, -1, :]
        return self.fc(last_output)
            </code></pre>

            <h3>Applications: Sentiment Analysis</h3>
            <pre><code>
# Sentiment classification: positive/negative movie reviews
class SentimentRNN(nn.Module):
    def __init__(self, vocab_size, embedding_dim, hidden_size):
        super().__init__()
        # Embedding layer: convert word indices to vectors
        self.embedding = nn.Embedding(vocab_size, embedding_dim)

        # RNN layer
        self.rnn = nn.RNN(embedding_dim, hidden_size, batch_first=True)

        # Classification layer
        self.fc = nn.Linear(hidden_size, 1)  # Binary: 0=negative, 1=positive
        self.sigmoid = nn.Sigmoid()

    def forward(self, x):
        # x: (batch_size, seq_len) - word indices

        # Convert words to embeddings
        embedded = self.embedding(x)  # (batch_size, seq_len, embedding_dim)

        # Process with RNN
        output, hidden = self.rnn(embedded)

        # Use last hidden state
        last_hidden = hidden[-1]  # (batch_size, hidden_size)

        # Classify
        prediction = self.fc(last_hidden)
        prediction = self.sigmoid(prediction)  # (batch_size, 1)

        return prediction

# Example training
model = SentimentRNN(vocab_size=10000, embedding_dim=100, hidden_size=256)
criterion = nn.BCELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

# Training loop
model.train()
for reviews, labels in data_loader:
    # reviews: (batch_size, seq_len)
    # labels: (batch_size, 1)

    optimizer.zero_grad()
    predictions = model(reviews)
    loss = criterion(predictions, labels)
    loss.backward()
    optimizer.step()
            </code></pre>

            <h3>The Vanishing Gradient Problem</h3>
            <p>Basic RNNs struggle with long sequences because gradients vanish during backpropagation through time. Consider a 50-step sequence:</p>
            <pre><code>
# Gradient at step 1 depends on:
# step 50 -> 49 -> 48 -> ... -> 2 -> 1

# Each step multiplies by derivative of tanh (< 1)
# After 50 steps: gradient ≈ (0.25)^50 ≈ 0 (vanishes!)

# This makes it hard to learn long-term dependencies
            </code></pre>

            <p>This is why LSTMs and GRUs were invented—they use gating mechanisms to preserve gradients over longer sequences.</p>

            <h3>When to Use RNNs</h3>
            <ul>
                <li><strong>Short sequences:</strong> RNNs work well for sequences < 30 steps</li>
                <li><strong>Simple patterns:</strong> When you don't need to remember information from 100+ steps ago</li>
                <li><strong>Quick prototyping:</strong> RNNs are simpler to understand and implement</li>
                <li><strong>Resource-constrained:</strong> RNNs are more memory-efficient than LSTMs/Transformers</li>
            </ul>

            <h3>When to Use Alternatives</h3>
            <ul>
                <li><strong>Long sequences:</strong> Use LSTM or GRU for sequences > 50 steps</li>
                <li><strong>Long-term dependencies:</strong> Need to remember info from 100+ steps ago</li>
                <li><strong>Parallel processing:</strong> Use Transformers (can process all steps simultaneously)</li>
                <li><strong>State-of-the-art:</strong> Transformers dominate most NLP tasks</li>
            </ul>

            <h3>Common Pitfalls</h3>
            <ul>
                <li><strong>Exploding gradients:</strong> Use gradient clipping: <code>nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)</code></li>
                <li><strong>Wrong input shape:</strong> RNN expects (batch, seq_len, features) with batch_first=True</li>
                <li><strong>Forgetting hidden state:</strong> For stateful RNNs, need to manually pass hidden state between batches</li>
                <li><strong>Using for long sequences:</strong> Switch to LSTM/GRU for sequences > 30-50 steps</li>
            </ul>

            <h3>Practical Tips</h3>
            <ul>
                <li>Always use gradient clipping to prevent exploding gradients</li>
                <li>Start with bidirectional RNNs for better context understanding</li>
                <li>Use pre-trained word embeddings (Word2Vec, GloVe) instead of training from scratch</li>
                <li>Consider LSTM or GRU instead of vanilla RNN for most real-world tasks</li>
            </ul>

            <h3>Conclusion</h3>
            <p>RNNs introduced the fundamental concept of processing sequences with memory, enabling neural networks to handle variable-length inputs and maintain context. While vanilla RNNs have limitations (vanishing gradients, slow training), they paved the way for LSTMs, GRUs, and ultimately Transformers. Understanding RNNs is essential for grasping sequential models and provides the foundation for more advanced architectures.</p>
        `
    },
    {
        id: 'b27',
        title: 'Image Classification',
        icon: '🏷️',
        description: 'Teaching AI to recognize and categorize images.',
        readTime: '14 min',
        level: 'Beginner',
        content: `
            <h2>Image Classification</h2>
            <p>Image classification is the task of assigning a label to an entire image from a predefined set of categories. It's one of the most fundamental computer vision tasks—from identifying cats vs. dogs to diagnosing diseases from medical scans. Modern deep learning models achieve superhuman accuracy on many image classification tasks, powering everything from photo organization to autonomous vehicles.</p>

            <h3>The Image Classification Pipeline</h3>
            <p>A typical image classification system consists of several stages:</p>
            <ol>
                <li><strong>Data Collection:</strong> Gather labeled images</li>
                <li><strong>Preprocessing:</strong> Resize, normalize, augment images</li>
                <li><strong>Model Architecture:</strong> Design or choose a CNN</li>
                <li><strong>Training:</strong> Optimize model on training data</li>
                <li><strong>Evaluation:</strong> Test on unseen data</li>
                <li><strong>Deployment:</strong> Serve model in production</li>
            </ol>

            <h3>Building a Complete Image Classifier</h3>
            <pre><code>
import torch
import torch.nn as nn
import torchvision
import torchvision.transforms as transforms
from torch.utils.data import DataLoader

# 1. Data Preparation
transform_train = transforms.Compose([
    transforms.RandomCrop(32, padding=4),
    transforms.RandomHorizontalFlip(),
    transforms.ToTensor(),
    transforms.Normalize((0.4914, 0.4822, 0.4465),
                         (0.2023, 0.1994, 0.2010))
])

transform_test = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((0.4914, 0.4822, 0.4465),
                         (0.2023, 0.1994, 0.2010))
])

# Load CIFAR-10 dataset
train_dataset = torchvision.datasets.CIFAR10(
    root='./data', train=True, download=True, transform=transform_train
)
test_dataset = torchvision.datasets.CIFAR10(
    root='./data', train=False, download=True, transform=transform_test
)

train_loader = DataLoader(train_dataset, batch_size=128, shuffle=True, num_workers=2)
test_loader = DataLoader(test_dataset, batch_size=100, shuffle=False, num_workers=2)

# 2. Model Architecture
class ImageClassifier(nn.Module):
    def __init__(self, num_classes=10):
        super().__init__()
        self.features = nn.Sequential(
            # Block 1
            nn.Conv2d(3, 64, kernel_size=3, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(inplace=True),
            nn.Conv2d(64, 64, kernel_size=3, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(kernel_size=2, stride=2),

            # Block 2
            nn.Conv2d(64, 128, kernel_size=3, padding=1),
            nn.BatchNorm2d(128),
            nn.ReLU(inplace=True),
            nn.Conv2d(128, 128, kernel_size=3, padding=1),
            nn.BatchNorm2d(128),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(kernel_size=2, stride=2),

            # Block 3
            nn.Conv2d(128, 256, kernel_size=3, padding=1),
            nn.BatchNorm2d(256),
            nn.ReLU(inplace=True),
            nn.Conv2d(256, 256, kernel_size=3, padding=1),
            nn.BatchNorm2d(256),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(kernel_size=2, stride=2),
        )

        self.classifier = nn.Sequential(
            nn.Dropout(0.5),
            nn.Linear(256 * 4 * 4, 512),
            nn.ReLU(inplace=True),
            nn.Dropout(0.5),
            nn.Linear(512, num_classes)
        )

    def forward(self, x):
        x = self.features(x)
        x = x.view(x.size(0), -1)
        x = self.classifier(x)
        return x

# 3. Training
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = ImageClassifier(num_classes=10).to(device)

criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)
scheduler = torch.optim.lr_scheduler.StepLR(optimizer, step_size=30, gamma=0.1)

def train_epoch(model, loader, criterion, optimizer, device):
    model.train()
    running_loss = 0.0
    correct = 0
    total = 0

    for images, labels in loader:
        images, labels = images.to(device), labels.to(device)

        # Forward pass
        outputs = model(images)
        loss = criterion(outputs, labels)

        # Backward pass
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        # Statistics
        running_loss += loss.item()
        _, predicted = outputs.max(1)
        total += labels.size(0)
        correct += predicted.eq(labels).sum().item()

    epoch_loss = running_loss / len(loader)
    epoch_acc = 100. * correct / total
    return epoch_loss, epoch_acc

# 4. Evaluation
def evaluate(model, loader, criterion, device):
    model.eval()
    running_loss = 0.0
    correct = 0
    total = 0

    with torch.no_grad():
        for images, labels in loader:
            images, labels = images.to(device), labels.to(device)

            outputs = model(images)
            loss = criterion(outputs, labels)

            running_loss += loss.item()
            _, predicted = outputs.max(1)
            total += labels.size(0)
            correct += predicted.eq(labels).sum().item()

    test_loss = running_loss / len(loader)
    test_acc = 100. * correct / total
    return test_loss, test_acc

# Training loop
num_epochs = 100
best_acc = 0

for epoch in range(num_epochs):
    train_loss, train_acc = train_epoch(model, train_loader, criterion, optimizer, device)
    test_loss, test_acc = evaluate(model, test_loader, criterion, device)
    scheduler.step()

    print(f'Epoch [{epoch+1}/{num_epochs}]')
    print(f'Train Loss: {train_loss:.4f}, Train Acc: {train_acc:.2f}%')
    print(f'Test Loss: {test_loss:.4f}, Test Acc: {test_acc:.2f}%')

    # Save best model
    if test_acc > best_acc:
        best_acc = test_acc
        torch.save(model.state_dict(), 'best_model.pth')
            </code></pre>

            <h3>Data Augmentation: Critical for Performance</h3>
            <p>Data augmentation artificially increases dataset size and prevents overfitting:</p>
            <pre><code>
# Comprehensive augmentation pipeline
transform_augmented = transforms.Compose([
    transforms.RandomCrop(32, padding=4),
    transforms.RandomHorizontalFlip(p=0.5),
    transforms.RandomRotation(15),
    transforms.ColorJitter(brightness=0.2, contrast=0.2, saturation=0.2),
    transforms.RandomAffine(0, translate=(0.1, 0.1)),
    transforms.ToTensor(),
    transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5)),
    transforms.RandomErasing(p=0.5)
])
            </code></pre>

            <h3>Using Pre-trained Models (Transfer Learning)</h3>
            <p>For most tasks, use pre-trained models instead of training from scratch:</p>
            <pre><code>
import torchvision.models as models

# Load pre-trained ResNet18
model = models.resnet18(pretrained=True)

# Freeze all layers
for param in model.parameters():
    param.requires_grad = False

# Replace final layer for your task
num_features = model.fc.in_features
model.fc = nn.Linear(num_features, 10)  # 10 classes

# Only train the final layer
optimizer = torch.optim.Adam(model.fc.parameters(), lr=0.001)

# Or fine-tune entire network with small learning rate
for param in model.parameters():
    param.requires_grad = True
optimizer = torch.optim.Adam(model.parameters(), lr=0.0001)
            </code></pre>

            <h3>Inference and Prediction</h3>
            <pre><code>
# Load trained model
model = ImageClassifier(num_classes=10)
model.load_state_dict(torch.load('best_model.pth'))
model.eval()
model.to(device)

# Classify a single image
from PIL import Image

def predict_image(image_path, model, transform, classes, device):
    # Load and preprocess image
    image = Image.open(image_path)
    image = transform(image).unsqueeze(0)  # Add batch dimension
    image = image.to(device)

    # Predict
    with torch.no_grad():
        output = model(image)
        probabilities = torch.softmax(output, dim=1)
        confidence, predicted = probabilities.max(1)

    predicted_class = classes[predicted.item()]
    confidence_score = confidence.item() * 100

    return predicted_class, confidence_score

# CIFAR-10 classes
classes = ['airplane', 'automobile', 'bird', 'cat', 'deer',
           'dog', 'frog', 'horse', 'ship', 'truck']

predicted_class, confidence = predict_image('test_image.jpg', model, transform_test, classes, device)
print(f'Prediction: {predicted_class} (confidence: {confidence:.2f}%)')
            </code></pre>

            <h3>Evaluation Metrics</h3>
            <pre><code>
from sklearn.metrics import classification_report, confusion_matrix
import numpy as np

def detailed_evaluation(model, loader, classes, device):
    model.eval()
    all_predictions = []
    all_labels = []

    with torch.no_grad():
        for images, labels in loader:
            images = images.to(device)
            outputs = model(images)
            _, predicted = outputs.max(1)

            all_predictions.extend(predicted.cpu().numpy())
            all_labels.extend(labels.numpy())

    # Classification report
    print(classification_report(all_labels, all_predictions, target_names=classes))

    # Confusion matrix
    cm = confusion_matrix(all_labels, all_predictions)
    print("\nConfusion Matrix:")
    print(cm)

    # Per-class accuracy
    for i, class_name in enumerate(classes):
        class_correct = cm[i, i]
        class_total = cm[i].sum()
        accuracy = 100. * class_correct / class_total
        print(f'{class_name}: {accuracy:.2f}%')
            </code></pre>

            <h3>Common Challenges and Solutions</h3>
            <ul>
                <li><strong>Imbalanced classes:</strong> Use weighted loss or oversample minority classes</li>
                <li><strong>Small dataset:</strong> Use aggressive data augmentation and transfer learning</li>
                <li><strong>Overfitting:</strong> Add dropout, use regularization, increase data augmentation</li>
                <li><strong>Poor accuracy:</strong> Try larger models, better augmentation, longer training</li>
                <li><strong>Slow training:</strong> Use mixed precision training, larger batch sizes, multiple GPUs</li>
            </ul>

            <h3>Best Practices</h3>
            <ol>
                <li>Always split data into train/validation/test sets</li>
                <li>Use data augmentation during training only</li>
                <li>Start with pre-trained models (transfer learning)</li>
                <li>Monitor training and validation metrics to detect overfitting</li>
                <li>Save checkpoints and use early stopping</li>
                <li>Test on multiple images before deployment</li>
                <li>Use ensemble methods for critical applications</li>
            </ol>

            <h3>Conclusion</h3>
            <p>Image classification is the gateway to computer vision. Modern CNNs combined with transfer learning enable solving most classification tasks with limited data and compute. The key to success: quality data, appropriate augmentation, choosing the right architecture (usually pre-trained), and careful evaluation. Master these fundamentals, and you're ready to tackle more complex vision tasks like object detection, segmentation, and generative models.</p>
        `
    },
    {
        id: 'b28',
        title: 'Natural Language Processing',
        icon: '🗣️',
        description: 'Enabling AI to understand and generate human language.',
        readTime: '16 min',
        level: 'Beginner',
        content: `
            <h2>Natural Language Processing (NLP)</h2>
            <p>Natural Language Processing enables computers to understand, interpret, and generate human language. From autocomplete and translation to chatbots and content generation, NLP powers many of the AI applications we use daily. Modern deep learning has revolutionized NLP, enabling systems that can read, write, and converse with near-human fluency.</p>

            <h3>Core NLP Tasks</h3>
            <ul>
                <li><strong>Classification:</strong> Sentiment analysis, spam detection, topic classification</li>
                <li><strong>Sequence Labeling:</strong> Named entity recognition, part-of-speech tagging</li>
                <li><strong>Sequence-to-Sequence:</strong> Machine translation, summarization, question answering</li>
                <li><strong>Generation:</strong> Text completion, chatbots, story generation</li>
            </ul>

            <h3>Text Preprocessing: From Strings to Tensors</h3>
            <p>Neural networks work with numbers, so we must convert text to numerical representations:</p>
            <pre><code>
import torch
from collections import Counter

# Sample corpus
texts = [
    "I love machine learning",
    "Machine learning is amazing",
    "I love deep learning"
]

# 1. Tokenization: split text into words
def tokenize(text):
    return text.lower().split()

tokenized_texts = [tokenize(text) for text in texts]
print(tokenized_texts)
# [['i', 'love', 'machine', 'learning'],
#  ['machine', 'learning', 'is', 'amazing'],
#  ['i', 'love', 'deep', 'learning']]

# 2. Build vocabulary
all_words = [word for text in tokenized_texts for word in text]
vocab = {'<PAD>': 0, '<UNK>': 1}  # Special tokens
for i, word in enumerate(set(all_words), start=2):
    vocab[word] = i

print(f"Vocabulary size: {len(vocab)}")
print(vocab)

# 3. Convert words to indices
def text_to_indices(text, vocab, max_len=10):
    indices = [vocab.get(word, vocab['<UNK>']) for word in tokenize(text)]
    # Pad to max_len
    if len(indices) < max_len:
        indices += [vocab['<PAD>']] * (max_len - len(indices))
    else:
        indices = indices[:max_len]
    return indices

indexed_texts = [text_to_indices(text, vocab) for text in texts]
print(indexed_texts)
            </code></pre>

            <h3>Word Embeddings: Semantic Representations</h3>
            <p>Instead of one-hot encoding (sparse, no meaning), use dense embeddings that capture semantic relationships:</p>
            <pre><code>
import torch.nn as nn

# Embedding layer
vocab_size = len(vocab)
embedding_dim = 100

embedding = nn.Embedding(vocab_size, embedding_dim)

# Convert word index to dense vector
word_idx = torch.tensor([vocab['learning']])
word_vector = embedding(word_idx)
print(word_vector.shape)  # torch.Size([1, 100])

# Similar words have similar embeddings (after training)
# e.g., embedding('king') - embedding('man') + embedding('woman') ≈ embedding('queen')
            </code></pre>

            <h3>Text Classification with RNN</h3>
            <pre><code>
class TextClassifier(nn.Module):
    def __init__(self, vocab_size, embedding_dim, hidden_dim, output_dim, n_layers=2, dropout=0.5):
        super().__init__()

        # Embedding layer
        self.embedding = nn.Embedding(vocab_size, embedding_dim)

        # LSTM for sequence processing
        self.lstm = nn.LSTM(
            embedding_dim,
            hidden_dim,
            num_layers=n_layers,
            bidirectional=True,
            dropout=dropout,
            batch_first=True
        )

        # Classification layers
        self.dropout = nn.Dropout(dropout)
        self.fc = nn.Linear(hidden_dim * 2, output_dim)  # *2 for bidirectional

    def forward(self, text):
        # text: (batch_size, seq_len)

        # Embed words
        embedded = self.embedding(text)  # (batch, seq_len, embedding_dim)
        embedded = self.dropout(embedded)

        # LSTM processing
        output, (hidden, cell) = self.lstm(embedded)
        # output: (batch, seq_len, hidden_dim * 2)

        # Concatenate final forward and backward hidden states
        hidden = torch.cat((hidden[-2,:,:], hidden[-1,:,:]), dim=1)
        # hidden: (batch, hidden_dim * 2)

        hidden = self.dropout(hidden)
        prediction = self.fc(hidden)

        return prediction

# Example: Sentiment classification
model = TextClassifier(
    vocab_size=10000,
    embedding_dim=100,
    hidden_dim=256,
    output_dim=2,  # Binary: positive/negative
    n_layers=2,
    dropout=0.5
)

# Training
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

model.train()
for epoch in range(10):
    for batch_text, batch_labels in train_loader:
        optimizer.zero_grad()
        predictions = model(batch_text)
        loss = criterion(predictions, batch_labels)
        loss.backward()
        optimizer.step()
            </code></pre>

            <h3>Using Pre-trained Transformers (Modern Approach)</h3>
            <p>Modern NLP uses transformer-based models like BERT, which are pre-trained on massive text corpora:</p>
            <pre><code>
from transformers import BertTokenizer, BertForSequenceClassification
import torch

# Load pre-trained BERT
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=2)

# Tokenize text
text = "This movie is absolutely amazing!"
inputs = tokenizer(
    text,
    return_tensors='pt',
    padding=True,
    truncation=True,
    max_length=512
)

# Inference
model.eval()
with torch.no_grad():
    outputs = model(**inputs)
    logits = outputs.logits
    predicted_class = torch.argmax(logits, dim=1)
    probabilities = torch.softmax(logits, dim=1)

print(f"Predicted class: {predicted_class.item()}")
print(f"Probabilities: {probabilities}")
            </code></pre>

            <h3>Fine-tuning BERT for Your Task</h3>
            <pre><code>
from transformers import AdamW, get_linear_schedule_with_warmup

# Prepare model
model = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=2)

# Optimizer with different learning rates for different layers
optimizer = AdamW([
    {'params': model.bert.parameters(), 'lr': 2e-5},  # Smaller LR for pre-trained layers
    {'params': model.classifier.parameters(), 'lr': 1e-4}  # Larger LR for new layer
], lr=2e-5)

# Learning rate scheduler
total_steps = len(train_loader) * num_epochs
scheduler = get_linear_schedule_with_warmup(
    optimizer,
    num_warmup_steps=total_steps // 10,
    num_training_steps=total_steps
)

# Training loop
model.train()
for epoch in range(num_epochs):
    for batch in train_loader:
        # batch contains: input_ids, attention_mask, labels

        optimizer.zero_grad()

        outputs = model(
            input_ids=batch['input_ids'],
            attention_mask=batch['attention_mask'],
            labels=batch['labels']
        )

        loss = outputs.loss
        loss.backward()

        # Gradient clipping to prevent exploding gradients
        torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)

        optimizer.step()
        scheduler.step()

    print(f'Epoch {epoch+1}, Loss: {loss.item():.4f}')
            </code></pre>

            <h3>Named Entity Recognition (NER)</h3>
            <p>Identify and classify entities in text (people, organizations, locations):</p>
            <pre><code>
from transformers import pipeline

# Load pre-trained NER model
ner_pipeline = pipeline("ner", model="dbmdz/bert-large-cased-finetuned-conll03-english")

# Extract entities
text = "Apple Inc. was founded by Steve Jobs in Cupertino, California."
entities = ner_pipeline(text)

for entity in entities:
    print(f"{entity['word']}: {entity['entity']} (confidence: {entity['score']:.2f})")

# Output:
# Apple: B-ORG (confidence: 0.99)
# Inc: I-ORG (confidence: 0.99)
# Steve: B-PER (confidence: 0.99)
# Jobs: I-PER (confidence: 0.99)
# Cupertino: B-LOC (confidence: 0.99)
# California: B-LOC (confidence: 0.99)
            </code></pre>

            <h3>Text Generation</h3>
            <pre><code>
from transformers import GPT2LMHeadModel, GPT2Tokenizer

# Load GPT-2
tokenizer = GPT2Tokenizer.from_pretrained('gpt2')
model = GPT2LMHeadModel.from_pretrained('gpt2')

# Generate text
prompt = "The future of artificial intelligence is"
input_ids = tokenizer.encode(prompt, return_tensors='pt')

# Generate with various strategies
output = model.generate(
    input_ids,
    max_length=100,
    num_return_sequences=3,
    temperature=0.8,  # Controls randomness
    top_k=50,  # Sample from top 50 tokens
    top_p=0.95,  # Nucleus sampling
    do_sample=True
)

# Decode generated texts
for i, generated_sequence in enumerate(output):
    text = tokenizer.decode(generated_sequence, skip_special_tokens=True)
    print(f"\nGeneration {i+1}:")
    print(text)
            </code></pre>

            <h3>Common NLP Challenges</h3>
            <ul>
                <li><strong>Ambiguity:</strong> Words have multiple meanings depending on context</li>
                <li><strong>Context:</strong> Meaning depends on surrounding words and broader context</li>
                <li><strong>Sarcasm/Irony:</strong> Literal meaning differs from intended meaning</li>
                <li><strong>Domain-specific language:</strong> Medical, legal, technical jargon</li>
                <li><strong>Multilingual:</strong> Different languages have different grammar and structure</li>
            </ul>

            <h3>Best Practices</h3>
            <ol>
                <li><strong>Start with pre-trained models:</strong> BERT, RoBERTa, GPT for most tasks</li>
                <li><strong>Use appropriate tokenizers:</strong> Match tokenizer to model</li>
                <li><strong>Handle special tokens:</strong> [CLS], [SEP], [PAD], [UNK]</li>
                <li><strong>Batch similar lengths:</strong> Minimize padding for efficiency</li>
                <li><strong>Monitor GPU memory:</strong> Transformers are memory-intensive</li>
                <li><strong>Use mixed precision:</strong> Speed up training with fp16</li>
                <li><strong>Evaluate carefully:</strong> Use task-appropriate metrics (F1, BLEU, ROUGE)</li>
            </ol>

            <h3>Popular NLP Libraries</h3>
            <pre><code>
# Hugging Face Transformers: Pre-trained models
from transformers import pipeline, AutoModel, AutoTokenizer

# spaCy: Industrial-strength NLP
import spacy
nlp = spacy.load("en_core_web_sm")
doc = nlp("Apple is looking at buying U.K. startup for $1 billion")

# NLTK: Traditional NLP toolkit
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

# Gensim: Topic modeling and word embeddings
from gensim.models import Word2Vec
            </code></pre>

            <h3>Conclusion</h3>
            <p>NLP has been transformed by deep learning, especially transformers like BERT and GPT. For most tasks, using pre-trained models through Hugging Face Transformers is the best starting point—they provide state-of-the-art performance with minimal code. Understanding the fundamentals (tokenization, embeddings, sequence models) helps you customize and debug these models for your specific needs.</p>
        `
    },
    {
        id: 'b29',
        title: 'Sentiment Analysis',
        icon: '😊',
        description: 'Determining emotions and opinions in text.',
        readTime: '12 min',
        level: 'Beginner',
        content: `
            <h2>Sentiment Analysis</h2>
            <p>Sentiment analysis (also called opinion mining) is the task of determining the emotional tone or opinion expressed in text. Is a movie review positive or negative? Is a tweet happy, angry, or neutral? From analyzing customer feedback to monitoring brand reputation on social media, sentiment analysis is one of the most practical NLP applications.</p>

            <h3>Types of Sentiment Analysis</h3>
            <ul>
                <li><strong>Binary:</strong> Positive vs. Negative</li>
                <li><strong>Multi-class:</strong> Positive, Negative, Neutral</li>
                <li><strong>Fine-grained:</strong> Very Positive, Positive, Neutral, Negative, Very Negative</li>
                <li><strong>Aspect-based:</strong> Sentiment about specific aspects (e.g., "food was great, service was terrible")</li>
                <li><strong>Emotion detection:</strong> Joy, Sadness, Anger, Fear, Surprise</li>
            </ul>

            <h3>Quick Start: Using Pre-trained Models</h3>
            <pre><code>
from transformers import pipeline

# Load sentiment analysis pipeline
sentiment_analyzer = pipeline("sentiment-analysis")

# Analyze single text
result = sentiment_analyzer("I absolutely loved this movie!")
print(result)
# [{'label': 'POSITIVE', 'score': 0.9998}]

# Analyze multiple texts
texts = [
    "This product is amazing!",
    "Terrible experience, would not recommend.",
    "It's okay, nothing special."
]

results = sentiment_analyzer(texts)
for text, result in zip(texts, results):
    print(f"Text: {text}")
    print(f"Sentiment: {result['label']} (confidence: {result['score']:.2%})\n")
            </code></pre>

            <h3>Building a Sentiment Classifier from Scratch</h3>
            <pre><code>
import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader

# Custom dataset
class SentimentDataset(Dataset):
    def __init__(self, texts, labels, tokenizer, max_len=128):
        self.texts = texts
        self.labels = labels
        self.tokenizer = tokenizer
        self.max_len = max_len

    def __len__(self):
        return len(self.texts)

    def __getitem__(self, idx):
        text = str(self.texts[idx])
        label = self.labels[idx]

        encoding = self.tokenizer.encode_plus(
            text,
            add_special_tokens=True,
            max_length=self.max_len,
            padding='max_length',
            truncation=True,
            return_attention_mask=True,
            return_tensors='pt'
        )

        return {
            'input_ids': encoding['input_ids'].flatten(),
            'attention_mask': encoding['attention_mask'].flatten(),
            'label': torch.tensor(label, dtype=torch.long)
        }

# Simple LSTM-based classifier
class SentimentLSTM(nn.Module):
    def __init__(self, vocab_size, embedding_dim, hidden_dim, output_dim, n_layers=2, dropout=0.5):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embedding_dim)
        self.lstm = nn.LSTM(
            embedding_dim,
            hidden_dim,
            num_layers=n_layers,
            bidirectional=True,
            dropout=dropout,
            batch_first=True
        )
        self.dropout = nn.Dropout(dropout)
        self.fc = nn.Linear(hidden_dim * 2, output_dim)

    def forward(self, input_ids, attention_mask):
        embedded = self.dropout(self.embedding(input_ids))
        output, (hidden, cell) = self.lstm(embedded)

        # Concatenate final forward and backward hidden states
        hidden = self.dropout(torch.cat((hidden[-2,:,:], hidden[-1,:,:]), dim=1))
        prediction = self.fc(hidden)

        return prediction

# Training function
def train_epoch(model, data_loader, criterion, optimizer, device):
    model.train()
    total_loss = 0
    correct = 0
    total = 0

    for batch in data_loader:
        input_ids = batch['input_ids'].to(device)
        attention_mask = batch['attention_mask'].to(device)
        labels = batch['label'].to(device)

        optimizer.zero_grad()

        outputs = model(input_ids, attention_mask)
        loss = criterion(outputs, labels)

        loss.backward()
        optimizer.step()

        total_loss += loss.item()
        _, predicted = torch.max(outputs, 1)
        total += labels.size(0)
        correct += (predicted == labels).sum().item()

    return total_loss / len(data_loader), 100 * correct / total
            </code></pre>

            <h3>Fine-tuning BERT for Sentiment Analysis</h3>
            <pre><code>
from transformers import BertTokenizer, BertForSequenceClassification, AdamW

# Load pre-trained BERT
model_name = 'bert-base-uncased'
tokenizer = BertTokenizer.from_pretrained(model_name)
model = BertForSequenceClassification.from_pretrained(model_name, num_labels=2)

# Prepare data
train_texts = [
    "I love this product!",
    "This is the worst purchase ever.",
    "Pretty good overall.",
    # ... more examples
]
train_labels = [1, 0, 1]  # 1=positive, 0=negative

# Create dataset and dataloader
train_dataset = SentimentDataset(train_texts, train_labels, tokenizer)
train_loader = DataLoader(train_dataset, batch_size=16, shuffle=True)

# Setup training
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model.to(device)

optimizer = AdamW(model.parameters(), lr=2e-5)
criterion = nn.CrossEntropyLoss()

# Training loop
num_epochs = 3
for epoch in range(num_epochs):
    model.train()
    total_loss = 0

    for batch in train_loader:
        input_ids = batch['input_ids'].to(device)
        attention_mask = batch['attention_mask'].to(device)
        labels = batch['label'].to(device)

        optimizer.zero_grad()

        outputs = model(
            input_ids=input_ids,
            attention_mask=attention_mask,
            labels=labels
        )

        loss = outputs.loss
        total_loss += loss.item()

        loss.backward()
        optimizer.step()

    avg_loss = total_loss / len(train_loader)
    print(f'Epoch {epoch+1}/{num_epochs}, Loss: {avg_loss:.4f}')

# Save model
model.save_pretrained('./sentiment_model')
tokenizer.save_pretrained('./sentiment_model')
            </code></pre>

            <h3>Real-world Application: Social Media Monitoring</h3>
            <pre><code>
# Analyze tweets about a brand
tweets = [
    "Just tried the new @BrandX product. Absolutely amazing! #love",
    "@BrandX customer service is terrible. Been waiting for 2 hours!",
    "Meh, @BrandX is okay. Nothing special.",
    "OMG @BrandX just made my day! Best purchase ever!",
    "@BrandX quality has really gone downhill lately :("
]

# Load model
sentiment_analyzer = pipeline("sentiment-analysis", model="./sentiment_model")

# Analyze and aggregate
positive = 0
negative = 0
neutral = 0

for tweet in tweets:
    result = sentiment_analyzer(tweet)[0]
    sentiment = result['label']
    score = result['score']

    print(f"Tweet: {tweet}")
    print(f"Sentiment: {sentiment} ({score:.2%})\n")

    if sentiment == 'POSITIVE':
        positive += 1
    elif sentiment == 'NEGATIVE':
        negative += 1
    else:
        neutral += 1

# Summary
total = len(tweets)
print(f"\n=== Sentiment Summary ===")
print(f"Positive: {positive}/{total} ({100*positive/total:.1f}%)")
print(f"Negative: {negative}/{total} ({100*negative/total:.1f}%)")
print(f"Neutral: {neutral}/{total} ({100*neutral/total:.1f}%)")
            </code></pre>

            <h3>Handling Challenges in Sentiment Analysis</h3>

            <h4>1. Sarcasm and Irony</h4>
            <pre><code>
# Sarcasm is hard for models to detect
text = "Oh great, another bug. Just what I needed."
# Literally positive words ("great"), but actually negative

# Solution: Use models fine-tuned on sarcasm datasets
# Or add context features (punctuation, emoji, capitalization)
            </code></pre>

            <h4>2. Negation</h4>
            <pre><code>
# "not good" vs "good" should have opposite sentiments
texts = [
    "This movie is good",
    "This movie is not good",
    "This movie is not bad"
]

# Modern transformers handle this well due to attention mechanism
# LSTM/RNN may struggle without careful preprocessing
            </code></pre>

            <h4>3. Aspect-based Sentiment</h4>
            <pre><code>
# Extract sentiment about different aspects
review = "The food was excellent but the service was terrible."

# Need to identify:
# - Aspect: "food" -> Sentiment: Positive
# - Aspect: "service" -> Sentiment: Negative

# Use specialized aspect-based sentiment models
from transformers import pipeline

aspect_analyzer = pipeline("text-classification",
                           model="yangheng/deberta-v3-base-absa")
            </code></pre>

            <h3>Evaluation Metrics</h3>
            <pre><code>
from sklearn.metrics import accuracy_score, precision_recall_fscore_support, confusion_matrix

def evaluate_sentiment_model(model, test_loader, device):
    model.eval()
    all_predictions = []
    all_labels = []

    with torch.no_grad():
        for batch in test_loader:
            input_ids = batch['input_ids'].to(device)
            attention_mask = batch['attention_mask'].to(device)
            labels = batch['label']

            outputs = model(input_ids=input_ids, attention_mask=attention_mask)
            predictions = torch.argmax(outputs.logits, dim=1).cpu()

            all_predictions.extend(predictions.numpy())
            all_labels.extend(labels.numpy())

    # Calculate metrics
    accuracy = accuracy_score(all_labels, all_predictions)
    precision, recall, f1, _ = precision_recall_fscore_support(
        all_labels, all_predictions, average='weighted'
    )

    print(f"Accuracy: {accuracy:.4f}")
    print(f"Precision: {precision:.4f}")
    print(f"Recall: {recall:.4f}")
    print(f"F1 Score: {f1:.4f}")

    # Confusion matrix
    cm = confusion_matrix(all_labels, all_predictions)
    print("\nConfusion Matrix:")
    print(cm)
            </code></pre>

            <h3>Best Practices</h3>
            <ol>
                <li><strong>Use domain-specific models:</strong> Financial, medical, social media text differ significantly</li>
                <li><strong>Handle class imbalance:</strong> Often more positive than negative examples</li>
                <li><strong>Consider context:</strong> Same words mean different things in different domains</li>
                <li><strong>Test on edge cases:</strong> Sarcasm, mixed sentiments, very short text</li>
                <li><strong>Aggregate carefully:</strong> Average confidence scores, not just labels</li>
                <li><strong>Update regularly:</strong> Language and sentiment expressions evolve</li>
            </ol>

            <h3>Common Pitfalls</h3>
            <ul>
                <li><strong>Ignoring neutral class:</strong> Not everything is clearly positive or negative</li>
                <li><strong>Over-relying on keywords:</strong> "bad" in "not bad" is positive</li>
                <li><strong>Missing context:</strong> "This movie is sick!" (positive slang vs. negative literal)</li>
                <li><strong>Biased training data:</strong> Models learn dataset biases</li>
            </ul>

            <h3>Conclusion</h3>
            <p>Sentiment analysis is one of the most practical NLP applications, with use cases ranging from customer feedback analysis to market research. Modern pre-trained transformers like BERT achieve impressive accuracy out-of-the-box, and fine-tuning on domain-specific data further improves performance. The key challenges—sarcasm, negation, and aspect-based sentiment—require careful model selection and sometimes specialized architectures, but the fundamentals remain: quality labeled data and appropriate model choice.</p>
        `
    },
    {
        id: 'b30',
        title: 'Named Entity Recognition',
        icon: '🏢',
        description: 'Identifying and classifying entities in text.',
        readTime: '13 min',
        level: 'Beginner',
        content: `
            <h2>Named Entity Recognition (NER)</h2>
            <p>Named Entity Recognition is the task of identifying and classifying named entities in text into predefined categories such as person names, organizations, locations, dates, quantities, and more. NER is a fundamental building block for information extraction, question answering, and knowledge graph construction.</p>

            <h3>Common Entity Types</h3>
            <ul>
                <li><strong>PER (Person):</strong> Steve Jobs, Marie Curie, Barack Obama</li>
                <li><strong>ORG (Organization):</strong> Apple Inc., United Nations, Microsoft</li>
                <li><strong>LOC (Location):</strong> Paris, Mount Everest, California</li>
                <li><strong>DATE:</strong> January 2024, Monday, next week</li>
                <li><strong>TIME:</strong> 3:00 PM, midnight, dawn</li>
                <li><strong>MONEY:</strong> $100, €50, £25</li>
                <li><strong>PERCENT:</strong> 75%, 0.5%, one-third</li>
                <li><strong>GPE (Geo-Political Entity):</strong> Countries, cities, states</li>
            </ul>

            <h3>Quick Start with Pre-trained Models</h3>
            <pre><code>
from transformers import pipeline

# Load pre-trained NER model
ner = pipeline("ner", model="dbmdz/bert-large-cased-finetuned-conll03-english", grouped_entities=True)

# Extract entities
text = """
Apple Inc. was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne
in April 1976 in Cupertino, California. The company reached a market
cap of $3 trillion in January 2022.
"""

entities = ner(text)

for entity in entities:
    print(f"{entity['word']}: {entity['entity_group']} (confidence: {entity['score']:.2%})")

# Output:
# Apple Inc.: ORG (confidence: 99%)
# Steve Jobs: PER (confidence: 99%)
# Steve Wozniak: PER (confidence: 99%)
# Ronald Wayne: PER (confidence: 99%)
# April 1976: DATE (confidence: 98%)
# Cupertino: LOC (confidence: 99%)
# California: LOC (confidence: 99%)
# $3 trillion: MONEY (confidence: 97%)
# January 2022: DATE (confidence: 98%)
            </code></pre>

            <h3>Understanding BIO Tagging</h3>
            <p>NER uses BIO (Beginning, Inside, Outside) tagging scheme to handle multi-word entities:</p>
            <pre><code>
# Sentence: "Steve Jobs founded Apple Inc."
# Tokens:   Steve  Jobs  founded  Apple  Inc.  .
# Tags:     B-PER  I-PER O        B-ORG  I-ORG O

# B-TAG: Beginning of an entity
# I-TAG: Inside (continuation) of an entity
# O: Outside (not an entity)

# This allows identifying "Steve Jobs" as a single PERSON entity
# and "Apple Inc." as a single ORGANIZATION entity
            </code></pre>

            <h3>Building a Custom NER Model</h3>
            <pre><code>
import torch
import torch.nn as nn
from transformers import BertTokenizerFast, BertForTokenClassification
from torch.utils.data import Dataset, DataLoader

# Custom NER dataset
class NERDataset(Dataset):
    def __init__(self, texts, tags, tokenizer, label2id, max_len=128):
        self.texts = texts
        self.tags = tags
        self.tokenizer = tokenizer
        self.label2id = label2id
        self.max_len = max_len

    def __len__(self):
        return len(self.texts)

    def __getitem__(self, idx):
        text = self.texts[idx]
        tags = self.tags[idx]

        # Tokenize
        encoding = self.tokenizer(
            text.split(),
            is_split_into_words=True,
            padding='max_length',
            truncation=True,
            max_length=self.max_len,
            return_tensors='pt'
        )

        # Align tags with tokenized words
        labels = []
        word_ids = encoding.word_ids(batch_index=0)
        previous_word_idx = None

        for word_idx in word_ids:
            if word_idx is None:
                labels.append(-100)  # Special token, ignore in loss
            elif word_idx != previous_word_idx:
                labels.append(self.label2id[tags[word_idx]])
            else:
                labels.append(-100)  # Subword token, ignore
            previous_word_idx = word_idx

        return {
            'input_ids': encoding['input_ids'].flatten(),
            'attention_mask': encoding['attention_mask'].flatten(),
            'labels': torch.tensor(labels, dtype=torch.long)
        }

# Example data
texts = [
    ["Steve", "Jobs", "founded", "Apple", "Inc", "."],
    ["Google", "is", "based", "in", "Mountain", "View", ",", "California", "."]
]

tags = [
    ["B-PER", "I-PER", "O", "B-ORG", "I-ORG", "O"],
    ["B-ORG", "O", "O", "O", "B-LOC", "I-LOC", "O", "B-LOC", "O"]
]

# Create label mappings
unique_tags = list(set(tag for doc in tags for tag in doc))
label2id = {tag: i for i, tag in enumerate(unique_tags)}
id2label = {i: tag for tag, i in label2id.items()}

# Load tokenizer and model
tokenizer = BertTokenizerFast.from_pretrained('bert-base-cased')
model = BertForTokenClassification.from_pretrained(
    'bert-base-cased',
    num_labels=len(label2id),
    id2label=id2label,
    label2id=label2id
)

# Create dataset and dataloader
dataset = NERDataset(texts, tags, tokenizer, label2id)
dataloader = DataLoader(dataset, batch_size=8, shuffle=True)

# Training
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model.to(device)

optimizer = torch.optim.AdamW(model.parameters(), lr=5e-5)

model.train()
for epoch in range(3):
    total_loss = 0
    for batch in dataloader:
        input_ids = batch['input_ids'].to(device)
        attention_mask = batch['attention_mask'].to(device)
        labels = batch['labels'].to(device)

        optimizer.zero_grad()

        outputs = model(
            input_ids=input_ids,
            attention_mask=attention_mask,
            labels=labels
        )

        loss = outputs.loss
        total_loss += loss.item()

        loss.backward()
        optimizer.step()

    print(f'Epoch {epoch+1}, Loss: {total_loss/len(dataloader):.4f}')
            </code></pre>

            <h3>Inference and Entity Extraction</h3>
            <pre><code>
def predict_entities(text, model, tokenizer, id2label, device):
    model.eval()

    # Tokenize
    inputs = tokenizer(
        text.split(),
        is_split_into_words=True,
        return_tensors='pt',
        padding=True,
        truncation=True
    ).to(device)

    # Predict
    with torch.no_grad():
        outputs = model(**inputs)
        predictions = torch.argmax(outputs.logits, dim=2)

    # Decode predictions
    tokens = tokenizer.convert_ids_to_tokens(inputs['input_ids'][0])
    word_ids = inputs.word_ids(batch_index=0)

    entities = []
    current_entity = None
    previous_word_idx = None

    for i, (token, word_idx) in enumerate(zip(tokens, word_ids)):
        if word_idx is None:
            continue

        if word_idx != previous_word_idx:
            pred_label = id2label[predictions[0][i].item()]

            if pred_label.startswith('B-'):
                # Start of new entity
                if current_entity:
                    entities.append(current_entity)
                current_entity = {
                    'word': token,
                    'entity': pred_label[2:],  # Remove 'B-' prefix
                    'start': word_idx,
                    'end': word_idx
                }
            elif pred_label.startswith('I-') and current_entity:
                # Continuation of entity
                current_entity['word'] += ' ' + token
                current_entity['end'] = word_idx
            else:
                # Not an entity
                if current_entity:
                    entities.append(current_entity)
                    current_entity = None

            previous_word_idx = word_idx

    if current_entity:
        entities.append(current_entity)

    return entities

# Test
text = "Elon Musk announced that Tesla will open a factory in Berlin, Germany."
entities = predict_entities(text, model, tokenizer, id2label, device)

for entity in entities:
    print(f"{entity['word']}: {entity['entity']}")
            </code></pre>

            <h3>Using spaCy for NER</h3>
            <p>spaCy provides production-ready NER with minimal code:</p>
            <pre><code>
import spacy

# Load pre-trained model
nlp = spacy.load("en_core_web_sm")

# Process text
text = "Microsoft was founded by Bill Gates and Paul Allen in Albuquerque, New Mexico in 1975."
doc = nlp(text)

# Extract entities
for ent in doc.ents:
    print(f"{ent.text:20} {ent.label_:10} {spacy.explain(ent.label_)}")

# Output:
# Microsoft            ORG        Companies, agencies, institutions
# Bill Gates           PERSON     People, including fictional
# Paul Allen           PERSON     People, including fictional
# Albuquerque          GPE        Countries, cities, states
# New Mexico           GPE        Countries, cities, states
# 1975                 DATE       Absolute or relative dates or periods

# Visualize entities (in Jupyter notebook)
from spacy import displacy
displacy.render(doc, style='ent', jupyter=True)
            </code></pre>

            <h3>Custom Entity Types with spaCy</h3>
            <pre><code>
# Train spaCy to recognize custom entities (e.g., PRODUCT)
import spacy
from spacy.training import Example

# Training data
TRAIN_DATA = [
    ("I bought the new iPhone 15", {"entities": [(18, 28, "PRODUCT")]}),
    ("The MacBook Pro is expensive", {"entities": [(4, 15, "PRODUCT")]}),
    ("AirPods are great for workouts", {"entities": [(0, 7, "PRODUCT")]}),
]

# Load blank model
nlp = spacy.blank("en")

# Add NER pipeline
ner = nlp.add_pipe("ner")

# Add new label
ner.add_label("PRODUCT")

# Train
optimizer = nlp.begin_training()
for epoch in range(10):
    for text, annotations in TRAIN_DATA:
        doc = nlp.make_doc(text)
        example = Example.from_dict(doc, annotations)
        nlp.update([example], drop=0.5, sgd=optimizer)

# Test
doc = nlp("I love my new AirPods Max")
for ent in doc.ents:
    print(f"{ent.text}: {ent.label_}")
            </code></pre>

            <h3>Evaluation Metrics</h3>
            <pre><code>
from seqeval.metrics import classification_report, f1_score

# True and predicted tags
y_true = [
    ['B-PER', 'I-PER', 'O', 'B-ORG', 'I-ORG'],
    ['B-LOC', 'O', 'O', 'B-PER']
]

y_pred = [
    ['B-PER', 'I-PER', 'O', 'B-ORG', 'O'],  # Missed I-ORG
    ['B-LOC', 'O', 'O', 'B-LOC']  # Wrong entity type
]

# Entity-level F1 score
f1 = f1_score(y_true, y_pred)
print(f"Entity-level F1: {f1:.4f}")

# Detailed report
print(classification_report(y_true, y_pred))
            </code></pre>

            <h3>Real-world Applications</h3>
            <ul>
                <li><strong>Information Extraction:</strong> Extract structured data from documents</li>
                <li><strong>Question Answering:</strong> Identify relevant entities in questions and passages</li>
                <li><strong>Content Recommendation:</strong> Recommend articles based on mentioned entities</li>
                <li><strong>Customer Support:</strong> Route tickets based on mentioned products or issues</li>
                <li><strong>News Analysis:</strong> Track mentions of companies, people, locations</li>
                <li><strong>Medical Records:</strong> Extract diseases, medications, procedures</li>
            </ul>

            <h3>Best Practices</h3>
            <ol>
                <li>Use domain-specific models when available (biomedical, legal, financial)</li>
                <li>Consistent annotation guidelines are critical for training data quality</li>
                <li>Handle entity boundaries carefully (especially for nested entities)</li>
                <li>Post-process to merge subword tokens back into full words</li>
                <li>Evaluate on entity-level metrics, not token-level</li>
                <li>Consider entity linking to connect mentions to knowledge bases</li>
            </ol>

            <h3>Common Challenges</h3>
            <ul>
                <li><strong>Ambiguity:</strong> "Washington" could be a person or location</li>
                <li><strong>Nested entities:</strong> "University of California, Berkeley" contains a location within an organization</li>
                <li><strong>Emerging entities:</strong> New companies, people, products not in training data</li>
                <li><strong>Domain adaptation:</strong> Models trained on news struggle with social media text</li>
            </ul>

            <h3>Conclusion</h3>
            <p>Named Entity Recognition is a fundamental NLP task that enables extracting structured information from unstructured text. Modern transformer-based models like BERT achieve excellent performance out-of-the-box, and libraries like Hugging Face Transformers and spaCy make it easy to apply NER or train custom models. The key to success: quality annotated data, appropriate model selection for your domain, and careful evaluation using entity-level metrics.</p>
        `
    }
];

genAIConcepts.beginner.push(...additionalBeginnerConcepts);

// Intermediate Concepts
genAIConcepts.intermediate = [
    {
        id: 'i1',
        title: 'Advanced Prompt Engineering',
        icon: '🎨',
        description: 'Master advanced techniques for crafting highly effective prompts.',
        readTime: '18 min',
        level: 'Intermediate',
        content: `
            <h2>Advanced Prompt Engineering</h2>
            <p>Prompt engineering is the art and science of crafting inputs that elicit desired outputs from large language models. While basic prompting works for simple tasks, advanced techniques can dramatically improve accuracy, consistency, and control over AI outputs. This concept explores sophisticated strategies used by experts to maximize LLM performance.</p>

            <h3>Core Principles of Effective Prompts</h3>
            <ul>
                <li><strong>Clarity:</strong> Be specific and unambiguous about what you want</li>
                <li><strong>Context:</strong> Provide relevant background information</li>
                <li><strong>Constraints:</strong> Define boundaries and requirements</li>
                <li><strong>Examples:</strong> Show the model what good outputs look like</li>
                <li><strong>Format:</strong> Specify the desired output structure</li>
            </ul>

            <h3>Advanced Technique 1: Few-Shot Learning</h3>
            <p>Few-shot prompting provides examples to guide the model's behavior:</p>
            <pre><code>
# Zero-shot (no examples)
prompt = "Translate to French: Hello, how are you?"

# One-shot (one example)
prompt = """
English: Good morning
French: Bonjour

English: Hello, how are you?
French:"""

# Few-shot (multiple examples)
prompt = """
Classify the sentiment of these reviews:

Review: "This product is amazing! Best purchase ever."
Sentiment: Positive

Review: "Terrible quality, broke after one day."
Sentiment: Negative

Review: "It's okay, nothing special."
Sentiment: Neutral

Review: "I absolutely love this! Game changer for my workflow."
Sentiment:"""
            </code></pre>

            <h3>Advanced Technique 2: Role Prompting</h3>
            <p>Assign a specific role or persona to the model for expert-level responses:</p>
            <pre><code>
# Basic prompt
"Explain quantum computing"

# With role
"You are a Nobel Prize-winning physicist with 30 years of experience in quantum mechanics. Explain quantum computing to a computer science undergraduate who knows classical computing well but has minimal physics background."

# With multiple roles
"You are both a senior software architect and a security expert. Review this authentication code and provide feedback on both the architecture design and security implications."
            </code></pre>

            <h3>Advanced Technique 3: Structured Output Formatting</h3>
            <p>Guide the model to produce consistently formatted outputs:</p>
            <pre><code>
prompt = """
Extract information from this job posting and format as JSON:

Job Posting:
"Senior Python Developer needed at TechCorp. 5+ years experience, $120k-150k salary. Remote position. Apply by June 30th."

Output format:
{
  "position": "job title",
  "company": "company name",
  "experience": "years required",
  "salary": "salary range",
  "location": "work location",
  "deadline": "application deadline"
}

JSON Output:"""

# The model will now produce structured JSON output
            </code></pre>

            <h3>Advanced Technique 4: Constraint-Based Prompting</h3>
            <p>Define explicit constraints to control output characteristics:</p>
            <pre><code>
prompt = """
Write a product description for noise-canceling headphones.

Constraints:
- Exactly 100 words
- Include these keywords: "immersive", "battery life", "comfort"
- Target audience: business professionals
- Tone: professional but approachable
- Include one specific technical specification
- End with a call-to-action

Product Description:"""
            </code></pre>

            <h3>Advanced Technique 5: Multi-Step Reasoning</h3>
            <p>Break complex tasks into explicit steps:</p>
            <pre><code>
prompt = """
Analyze this customer complaint and provide a response.

Complaint: "I ordered the blue widget 2 weeks ago but received a red one. I've called customer service 3 times but nobody follows up."

Step 1: Identify all issues mentioned in the complaint
Step 2: Assess the severity and priority of each issue
Step 3: Draft an empathetic response that addresses each issue
Step 4: Include concrete next steps and timeline

Begin your analysis:"""
            </code></pre>

            <h3>Advanced Technique 6: Temperature and Parameter Control</h3>
            <pre><code>
from openai import OpenAI
client = OpenAI()

# Creative writing: higher temperature for variety
response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Write a unique story opening"}],
    temperature=0.9,  # More creative/random
    top_p=0.95
)

# Factual Q&A: lower temperature for consistency
response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "What is the capital of France?"}],
    temperature=0.1,  # More focused/deterministic
    top_p=0.1
)

# Code generation: moderate temperature
response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Write a function to reverse a string"}],
    temperature=0.5,  # Balance between creativity and correctness
    max_tokens=500
)
            </code></pre>

            <h3>Advanced Technique 7: System Message Engineering</h3>
            <pre><code>
# Weak system message
messages = [
    {"role": "system", "content": "You are a helpful assistant"},
    {"role": "user", "content": "Help me write a business email"}
]

# Strong system message with detailed instructions
messages = [
    {
        "role": "system",
        "content": """You are a professional business communication expert with 15 years of experience in corporate settings.

        Your writing style:
        - Concise and clear
        - Professional but warm
        - Action-oriented
        - Uses active voice
        - Structured with clear sections

        When writing emails:
        1. Start with appropriate greeting
        2. State purpose in first sentence
        3. Provide necessary context
        4. Include specific next steps
        5. End with professional closing

        Always consider:
        - Recipient's seniority and relationship
        - Cultural context if international
        - Time sensitivity
        - Appropriate tone for the situation"""
    },
    {"role": "user", "content": "Draft an email to reschedule a meeting with my CEO"}
]
            </code></pre>

            <h3>Advanced Technique 8: Iterative Refinement</h3>
            <pre><code>
# First iteration: broad request
prompt1 = "Explain neural networks"

# Second iteration: refine based on first response
prompt2 = """Your explanation of neural networks was good, but too technical.
Simplify it for a 10-year-old using analogies. Focus on:
1. What they do
2. How they learn
3. One real-world example

Keep it under 150 words."""

# Third iteration: ask for specific aspect
prompt3 = "Now explain specifically how the 'learning' part works, using the analogy of learning to ride a bike."
            </code></pre>

            <h3>Advanced Technique 9: Negative Prompting</h3>
            <p>Explicitly state what you DON'T want:</p>
            <pre><code>
prompt = """
Write a technical blog post about Docker.

Include:
- What Docker is
- Key benefits
- Basic example

Do NOT:
- Use marketing language or hype
- Include installation instructions
- Assume reader knows Linux
- Use unexplained jargon
- Write more than 400 words
- Include code longer than 10 lines

Blog Post:"""
            </code></pre>

            <h3>Advanced Technique 10: Meta-Prompting</h3>
            <p>Ask the model to improve its own prompts:</p>
            <pre><code>
prompt = """
I want to use an LLM to analyze customer reviews and extract:
- Overall sentiment
- Specific product features mentioned
- Suggestions for improvement

My current prompt is:
"Analyze this review: [REVIEW TEXT]"

Suggest 3 improved prompts that would give more structured, actionable results. For each, explain why it's better."""
            </code></pre>

            <h3>Real-World Application: Customer Support Automation</h3>
            <pre><code>
system_message = """You are an expert customer support agent for TechGadgets Inc.

Product Knowledge:
- SmartWatch Pro: $299, 7-day battery, waterproof
- Wireless Earbuds: $149, 24hr battery, noise cancellation
- Fitness Tracker: $99, 14-day battery, basic features

Policies:
- 30-day return policy
- 1-year warranty
- Free shipping over $100
- Price match within 7 days

Response Style:
1. Acknowledge the customer's issue empathetically
2. Provide clear, specific solutions
3. Include relevant links/SKUs when appropriate
4. Offer proactive suggestions
5. End with verification question

Never:
- Make up information
- Promise things outside policy
- Be defensive or argumentative"""

user_message = """
Customer complaint: "My SmartWatch Pro battery only lasts 3 days, not 7 like advertised. This is false advertising!"
"""

# Model will generate appropriate, policy-compliant response
            </code></pre>

            <h3>Measuring Prompt Effectiveness</h3>
            <pre><code>
import openai
import json

def evaluate_prompts(prompts, test_cases, model="gpt-4"):
    """Compare multiple prompt variations"""
    results = {}

    for prompt_name, prompt_template in prompts.items():
        scores = []

        for test_input, expected_output in test_cases:
            # Generate response
            response = openai.ChatCompletion.create(
                model=model,
                messages=[{
                    "role": "user",
                    "content": prompt_template.format(input=test_input)
                }],
                temperature=0.3
            )

            output = response.choices[0].message.content

            # Score based on criteria
            score = calculate_score(output, expected_output)
            scores.append(score)

        results[prompt_name] = {
            "average_score": sum(scores) / len(scores),
            "consistency": calculate_consistency(scores)
        }

    return results

# Example usage
prompts = {
    "basic": "Classify sentiment: {input}",
    "few_shot": "Examples:\nPositive: 'Great!'\nNegative: 'Bad!'\n\nClassify: {input}",
    "detailed": "Analyze the sentiment (Positive/Negative/Neutral) of this text, considering context and tone: {input}"
}

test_cases = [
    ("I love this!", "Positive"),
    ("Terrible experience", "Negative"),
    ("It's okay", "Neutral")
]

results = evaluate_prompts(prompts, test_cases)
print(json.dumps(results, indent=2))
            </code></pre>

            <h3>Best Practices</h3>
            <ol>
                <li>Test prompts with multiple examples to ensure consistency</li>
                <li>Start simple and add complexity only when needed</li>
                <li>Be specific about format, length, and style requirements</li>
                <li>Use examples that closely match your use case</li>
                <li>Iterate based on actual outputs—prompt engineering is experimental</li>
                <li>Document successful prompts for reuse</li>
                <li>Consider cost vs. quality tradeoffs with different models</li>
            </ol>

            <h3>Common Pitfalls</h3>
            <ul>
                <li><strong>Over-prompting:</strong> Too many instructions can confuse the model</li>
                <li><strong>Ambiguity:</strong> Vague language leads to inconsistent outputs</li>
                <li><strong>Assuming knowledge:</strong> Don't assume the model knows your specific context</li>
                <li><strong>Ignoring failures:</strong> Analyze bad outputs to improve prompts</li>
                <li><strong>No version control:</strong> Track prompt changes and their effects</li>
            </ul>

            <h3>Conclusion</h3>
            <p>Advanced prompt engineering transforms LLMs from general-purpose tools into specialized, reliable systems. By combining techniques like few-shot learning, role prompting, structured formatting, and iterative refinement, you can achieve consistent, high-quality results. The key is systematic experimentation—test variations, measure results, and continuously refine based on real-world performance.</p>
        `
    },
    {
        id: 'i2',
        title: 'Chain-of-Thought Prompting',
        icon: '🔗',
        description: 'Teaching AI to show its reasoning process for better results.',
        readTime: '16 min',
        level: 'Intermediate',
        content: `
            <h2>Chain-of-Thought (CoT) Prompting</h2>
            <p>Chain-of-Thought prompting is a technique that dramatically improves language model performance on complex reasoning tasks by encouraging the model to break down problems step-by-step. Instead of jumping directly to an answer, the model explicitly shows its reasoning process, leading to more accurate and explainable results.</p>

            <h3>The Power of Explicit Reasoning</h3>
            <p>Research shows that CoT prompting can improve performance on complex tasks by 20-50%, especially for:</p>
            <ul>
                <li>Mathematical word problems</li>
                <li>Commonsense reasoning</li>
                <li>Multi-step logical deduction</li>
                <li>Symbolic manipulation</li>
                <li>Strategic planning</li>
            </ul>

            <h3>Basic Chain-of-Thought Prompting</h3>
            <pre><code>
# Without CoT (direct answer)
prompt = """
Q: Roger has 5 tennis balls. He buys 2 more cans of tennis balls.
Each can has 3 tennis balls. How many tennis balls does he have now?

A:"""

# Model output: "11"  (might be wrong without showing work)

# With CoT (step-by-step reasoning)
prompt = """
Q: Roger has 5 tennis balls. He buys 2 more cans of tennis balls.
Each can has 3 tennis balls. How many tennis balls does he have now?

A: Let's think step by step.
1) Roger starts with 5 tennis balls
2) He buys 2 cans
3) Each can has 3 balls, so 2 cans = 2 × 3 = 6 balls
4) Total = starting balls + new balls = 5 + 6 = 11 balls

Therefore, Roger has 11 tennis balls."""
            </code></pre>

            <h3>Few-Shot Chain-of-Thought</h3>
            <p>Provide examples that demonstrate step-by-step reasoning:</p>
            <pre><code>
prompt = """
Q: A juggler can juggle 16 balls. Half of the balls are golf balls,
and half of the golf balls are blue. How many blue golf balls are there?

A: Let's think step by step.
1) Total balls: 16
2) Half are golf balls: 16 ÷ 2 = 8 golf balls
3) Half of golf balls are blue: 8 ÷ 2 = 4 blue golf balls
Answer: 4

Q: A store had 20 oranges in a bin. If the store added 35 more oranges,
and then sold 17 of them, how many oranges would there be?

A: Let's think step by step.
1) Started with: 20 oranges
2) Added: 35 oranges
3) Total after adding: 20 + 35 = 55 oranges
4) Sold: 17 oranges
5) Remaining: 55 - 17 = 38 oranges
Answer: 38

Q: Leah had 32 chocolates and her sister had 42. If they ate 35,
how many pieces do they have left in total?

A: Let's think step by step."""

# Model will now follow the pattern and show its work
            </code></pre>

            <h3>Zero-Shot Chain-of-Thought</h3>
            <p>Amazingly, just adding "Let's think step by step" can activate CoT reasoning without examples:</p>
            <pre><code>
# Zero-shot CoT with magic phrase
prompt = """
Q: If a train travels 120 miles in 2 hours, then 180 miles in the next 3 hours,
what is the average speed for the entire journey?

A: Let's think step by step."""

# Model output:
# 1) First segment: 120 miles in 2 hours = 120/2 = 60 mph
# 2) Second segment: 180 miles in 3 hours = 180/3 = 60 mph
# 3) Total distance: 120 + 180 = 300 miles
# 4) Total time: 2 + 3 = 5 hours
# 5) Average speed = Total distance / Total time = 300/5 = 60 mph
# Answer: 60 mph
            </code></pre>

            <h3>Structured Chain-of-Thought</h3>
            <p>Enforce a specific reasoning structure:</p>
            <pre><code>
prompt = """
Analyze whether this startup will likely succeed.

Startup: "GroceryDrone - delivering groceries via autonomous drones in 15 minutes"

Use this analysis framework:

1. MARKET ANALYSIS
   - Market size
   - Competition
   - Customer need

2. BUSINESS MODEL
   - Revenue streams
   - Cost structure
   - Scalability

3. FEASIBILITY
   - Technical challenges
   - Regulatory hurdles
   - Resource requirements

4. CONCLUSION
   - Success likelihood (High/Medium/Low)
   - Key factors
   - Biggest risks

Analysis:"""
            </code></pre>

            <h3>CoT for Code Generation</h3>
            <pre><code>
prompt = """
Write a Python function to find the longest palindromic substring.

Let's approach this step by step:

1. UNDERSTAND THE PROBLEM
   - Input: a string
   - Output: longest substring that reads same forwards/backwards
   - Example: "babad" -> "bab" or "aba"

2. ALGORITHM DESIGN
   - Approach: expand around center
   - For each character, treat it as center
   - Expand outward while characters match
   - Track longest palindrome found

3. IMPLEMENTATION
   - Helper function to expand around center
   - Handle odd-length palindromes (single center)
   - Handle even-length palindromes (two centers)
   - Track maximum length and position

4. CODE:

```python
def longest_palindrome(s: str) -> str:
    if not s:
        return ""

    def expand_around_center(left: int, right: int) -> int:
        # Expand while characters match and in bounds
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        # Return length of palindrome
        return right - left - 1

    start = 0
    max_len = 0

    for i in range(len(s)):
        # Odd length palindromes (single center)
        len1 = expand_around_center(i, i)
        # Even length palindromes (two centers)
        len2 = expand_around_center(i, i + 1)

        # Get maximum length
        current_len = max(len1, len2)

        # Update longest if needed
        if current_len > max_len:
            max_len = current_len
            start = i - (current_len - 1) // 2

    return s[start:start + max_len]
```

5. COMPLEXITY ANALYSIS
   - Time: O(n²) where n is string length
   - Space: O(1) - only using a few variables
"""
            </code></pre>

            <h3>Self-Consistency Chain-of-Thought</h3>
            <p>Generate multiple reasoning paths and take the majority answer:</p>
            <pre><code>
from openai import OpenAI
from collections import Counter

client = OpenAI()

def self_consistency_cot(question, num_samples=5):
    """Generate multiple CoT responses and return most common answer"""

    prompt = f"""
Q: {question}

A: Let's think step by step."""

    answers = []

    for _ in range(num_samples):
        response = client.chat.completions.create(
            model="gpt-4",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7  # Higher temp for diversity
        )

        full_response = response.choices[0].message.content

        # Extract final answer (last line typically)
        final_answer = full_response.strip().split('\n')[-1]
        answers.append(final_answer)

    # Return most common answer
    most_common = Counter(answers).most_common(1)[0]
    return {
        "final_answer": most_common[0],
        "confidence": most_common[1] / num_samples,
        "all_answers": answers
    }

# Example usage
question = "If you have 3 apples and buy twice as many, then give away 4, how many do you have?"
result = self_consistency_cot(question)

print(f"Answer: {result['final_answer']}")
print(f"Confidence: {result['confidence']:.0%}")
print(f"All responses: {result['all_answers']}")
            </code></pre>

            <h3>Least-to-Most Prompting</h3>
            <p>Break complex problems into simpler sub-problems:</p>
            <pre><code>
# Step 1: Decompose the problem
decomposition_prompt = """
Problem: Build a web scraper that extracts product prices from an e-commerce site,
stores them in a database, and sends alerts when prices drop below a threshold.

Break this into sub-problems from easiest to hardest:

Sub-problems:"""

# Model output:
# 1. Send an email alert (basic Python)
# 2. Check if price is below threshold (simple comparison)
# 3. Store data in database (SQL operations)
# 4. Extract price from HTML (web scraping, regex)
# 5. Handle pagination and multiple products (loops, error handling)
# 6. Schedule regular checks (cron jobs or task scheduling)
# 7. Handle anti-scraping measures (headers, delays, proxies)

# Step 2: Solve each sub-problem
solution_prompt = """
Sub-problem 1: Send an email alert

Let's solve this step by step:

1. Import smtplib for sending emails
2. Set up email credentials (use environment variables)
3. Create email message with price info
4. Send via SMTP

Code:
[solution for sub-problem 1]

Sub-problem 2: Check if price is below threshold
[continues with each sub-problem]
"""
            </code></pre>

            <h3>Chain-of-Thought for Classification</h3>
            <pre><code>
prompt = """
Classify this customer review as Positive, Negative, or Neutral.

Review: "The camera quality is amazing, but the battery life is disappointing.
Overall, I'd still recommend it for photography enthusiasts."

Let's analyze step by step:

1. POSITIVE SIGNALS
   - "camera quality is amazing" - strong positive
   - "I'd still recommend it" - positive recommendation
   - "photography enthusiasts" - acknowledges target audience fit

2. NEGATIVE SIGNALS
   - "battery life is disappointing" - clear negative

3. CONTEXT ANALYSIS
   - Main purpose (photography) is praised
   - Secondary feature (battery) is criticized
   - Final recommendation is positive despite flaw

4. OVERALL TONE
   - Balanced but leaning positive
   - "still recommend" suggests positives outweigh negatives

CLASSIFICATION: Positive

CONFIDENCE: Medium-High (the recommendation is clear, but the negative aspect prevents very high confidence)"""
            </code></pre>

            <h3>Error Detection with Chain-of-Thought</h3>
            <pre><code>
prompt = """
Review this code for bugs:

```python
def calculate_average(numbers):
    total = 0
    for num in numbers:
        total += num
    return total / len(numbers)

result = calculate_average([])
print(result)
```

Let's check step by step:

1. FUNCTION LOGIC
   - Sums all numbers: ✓ Correct
   - Divides by count: ✓ Formula correct

2. EDGE CASES
   - Empty list: ❌ PROBLEM!
     * len([]) = 0
     * Division by zero → ZeroDivisionError

3. NULL/NONE VALUES
   - No explicit None handling
   - Could fail if list contains None

4. TYPE CHECKING
   - No validation that elements are numbers
   - Could fail with TypeError

5. BUGS FOUND:
   a) Division by zero when list is empty
   b) No type validation
   c) No None handling

6. SUGGESTED FIX:
```python
def calculate_average(numbers):
    if not numbers:
        return 0  # or raise ValueError("Empty list")

    if not all(isinstance(n, (int, float)) for n in numbers if n is not None):
        raise TypeError("All elements must be numbers")

    valid_numbers = [n for n in numbers if n is not None]

    if not valid_numbers:
        return 0

    return sum(valid_numbers) / len(valid_numbers)
```
"""
            </code></pre>

            <h3>When to Use Chain-of-Thought</h3>

            <h4>✅ Use CoT when:</h4>
            <ul>
                <li>Problem requires multiple reasoning steps</li>
                <li>Accuracy is more important than speed</li>
                <li>You need explainable outputs</li>
                <li>Model is making errors on complex tasks</li>
                <li>Domain requires showing work (education, verification)</li>
            </ul>

            <h4>❌ Skip CoT when:</h4>
            <ul>
                <li>Simple lookup or fact-based questions</li>
                <li>Speed/cost is critical (CoT uses more tokens)</li>
                <li>Problem is already solved reliably without it</li>
                <li>Output length constraints are strict</li>
            </ul>

            <h3>Optimizing Chain-of-Thought Performance</h3>
            <pre><code>
# 1. Use XML tags for structure
prompt = """
<question>
How many days until Christmas if today is October 15th?
</question>

<reasoning>
Step 1: <current_date>October 15</current_date>
Step 2: <target_date>December 25</target_date>
Step 3: <calculation>
  - Days left in October: 31 - 15 = 16 days
  - Days in November: 30 days
  - Days until Dec 25: 25 days
  - Total: 16 + 30 + 25 = 71 days
</calculation>
</reasoning>

<answer>71 days</answer>
"""

# 2. Use numbered steps for clarity
# 3. Ask for confidence levels
# 4. Request verification of answer
            </code></pre>

            <h3>Best Practices</h3>
            <ol>
                <li>Start with zero-shot CoT ("Let's think step by step")</li>
                <li>Add few-shot examples if zero-shot is insufficient</li>
                <li>Use clear step indicators (numbers, bullet points)</li>
                <li>Ask model to verify its own answer at the end</li>
                <li>For critical tasks, use self-consistency with multiple samples</li>
                <li>Provide domain-specific reasoning frameworks when applicable</li>
            </ol>

            <h3>Conclusion</h3>
            <p>Chain-of-Thought prompting is one of the most effective techniques for improving LLM performance on complex reasoning tasks. By encouraging explicit step-by-step thinking, CoT not only improves accuracy but also provides transparent, verifiable reasoning. Whether using zero-shot ("Let's think step by step"), few-shot examples, or structured frameworks, CoT transforms opaque model outputs into clear, logical progressions—making AI more reliable and trustworthy for real-world applications.</p>
        `
    }
];

// Advanced Concepts
genAIConcepts.advanced = [
    {
        id: 'a1',
        title: 'Reinforcement Learning from Human Feedback',
        icon: '🎓',
        description: 'Training AI systems to align with human preferences and values.',
        readTime: '22 min',
        level: 'Advanced',
        content: `<h2>RLHF: Aligning AI with Human Values</h2><p>Exploring the technique behind ChatGPT and other aligned models...</p>`
    }
    // Additional advanced concepts would follow
];

// Add placeholder concepts for remaining slots
// In production, each would have full detailed content
for (let i = 3; i <= 40; i++) {
    genAIConcepts.intermediate.push({
        id: `i${i}`,
        title: `Intermediate Concept ${i}`,
        icon: '🚀',
        description: `Advanced topic ${i} for intermediate learners in GenAI.`,
        readTime: `${Math.floor(Math.random() * 10 + 12)} min`,
        level: 'Intermediate',
        content: `<h2>Intermediate Concept ${i}</h2><p>Detailed content would be here...</p>`
    });
}

for (let i = 2; i <= 35; i++) {
    genAIConcepts.advanced.push({
        id: `a${i}`,
        title: `Advanced Concept ${i}`,
        icon: '⚡',
        description: `Cutting-edge topic ${i} for advanced GenAI practitioners.`,
        readTime: `${Math.floor(Math.random() * 10 + 18)} min`,
        level: 'Advanced',
        content: `<h2>Advanced Concept ${i}</h2><p>Detailed content would be here...</p>`
    });
}

// Export data structure
window.genAIConcepts = genAIConcepts;