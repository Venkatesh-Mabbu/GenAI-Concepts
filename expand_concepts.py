import re

# Read the data.js file
with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Dictionary of expansions for each concept (adding ~20-30 words to reach 500+)
expansions = {
    'i6': '''
            
            <h3>LangChain Ecosystem</h3>
            <p>LangChain provides a unified framework for connecting LLMs with external data sources, APIs, and tools. The framework enables developers to build complex chains of operations, where each step can involve model calls, data retrieval, or custom logic. This modular approach simplifies the development of sophisticated AI applications that go beyond simple prompt-response patterns.</p>''',
    
    'i7': '''
            
            <h3>Semantic vs Traditional Search</h3>
            <p>Unlike keyword-based search that matches exact terms, semantic search understands the meaning and context of queries. It uses embeddings to represent both queries and documents in vector space, where semantically similar content clusters together. This enables finding relevant results even when different vocabulary is used, dramatically improving search quality and user experience.</p>''',
    
    'i11': '''
            
            <h3>Instruction Datasets</h3>
            <p>Instruction tuning relies on carefully curated datasets where tasks are formatted as natural language instructions with corresponding outputs. Popular datasets include FLAN, P3, and Alpaca. The diversity of tasks in these datasets helps models generalize to new instructions at inference time, making them more capable and versatile assistants.</p>''',
    
    'i12': '''
            
            <h3>Cross-Modal Understanding</h3>
            <p>Multimodal models learn shared representations across different data types, enabling tasks like image captioning, visual question answering, and text-to-image generation. These models use techniques like contrastive learning to align different modalities in a common embedding space, allowing them to understand relationships between text, images, audio, and video.</p>''',
    
    'i14': '''
            
            <h3>Denoising Process</h3>
            <p>Stable Diffusion works by gradually adding noise to training images until they become pure noise, then learning to reverse this process. At inference, the model starts with random noise and iteratively denoises it, guided by text embeddings, to generate coherent images. This approach offers excellent control and quality compared to earlier generative models like GANs.</p>''',
    
    'i16': '''
            
            <h3>Latent Space Properties</h3>
            <p>VAEs learn a continuous, structured latent space where similar inputs map to nearby points. This property enables smooth interpolation between different data points and controlled generation by manipulating latent variables. The variational inference framework ensures the latent space follows a known distribution, typically a Gaussian, making sampling straightforward.</p>''',
    
    'i17': '''
            
            <h3>Quantization Techniques</h3>
            <p>Model quantization reduces precision from float32 to int8 or even lower bit widths, achieving 4x model size reduction with minimal accuracy loss. Post-training quantization is simple but less accurate, while quantization-aware training maintains better performance by simulating quantization during training. Modern techniques like GPTQ and AWQ enable even 3-4 bit quantization for LLMs.</p>''',
    
    'i18': '''
            
            <h3>Knowledge Transfer</h3>
            <p>Distillation transfers knowledge from a large "teacher" model to a smaller "student" model through techniques like matching soft probability distributions or intermediate representations. The student learns to mimic the teacher's behavior, often achieving 90-95% of the performance with 10x fewer parameters. This makes deployment more practical while retaining most capabilities.</p>''',
    
    'i19': '''
            
            <h3>Tokenization Approaches</h3>
            <p>Different tokenization strategies balance vocabulary size with granularity. Byte Pair Encoding (BPE) used by GPT models merges frequently co-occurring character pairs into subword tokens. WordPiece (BERT) and SentencePiece (T5) offer similar subword approaches. Character-level tokenization is simple but results in longer sequences, while word-level creates huge vocabularies with unknown token issues.</p>''',
    
    'i20': '''
            
            <h3>Position Information</h3>
            <p>Since Transformers process all tokens simultaneously, they need explicit position information. Sinusoidal encodings use fixed trigonometric functions at different frequencies. Learned positional embeddings are trainable parameters for each position. More advanced approaches like rotary (RoPE) and ALiBi enable better extrapolation to longer sequences than seen during training.</p>''',
    
    'i21': '''
            
            <h3>Attention Computation</h3>
            <p>Self-attention computes attention scores between all pairs of positions in a sequence. For each position, it creates query, key, and value vectors, then computes similarity between queries and keys to determine how much to attend to each position. The weighted sum of values produces contextual representations. This O(n²) complexity is the main computational bottleneck in Transformers.</p>''',
    
    'i22': '''
            
            <h3>Multiple Attention Heads</h3>
            <p>Multi-head attention runs multiple self-attention operations in parallel, each with different learned projection matrices. This allows the model to attend to different representation subspaces simultaneously - some heads might focus on syntax, others on semantics or long-range dependencies. The outputs are concatenated and linearly projected to produce the final result.</p>''',
    
    'i26': '''
            
            <h3>Encoder-Decoder Structure</h3>
            <p>Sequence-to-sequence models map input sequences to output sequences of potentially different lengths. The encoder processes the input into contextual representations, while the decoder generates outputs auto-regressively, attending to both previously generated tokens and encoder outputs through cross-attention. This architecture excels at translation, summarization, and other transformation tasks.</p>''',
    
    'i30': '''
            
            <h3>Zero-Shot Capabilities</h3>
            <p>Zero-shot classification enables models to categorize examples into classes never seen during training, using only class descriptions. Large language models leverage their broad pre-training to perform this task through clever prompting. For example, by framing classification as a natural language inference problem, BERT-based models can classify texts into arbitrary categories specified at inference time.</p>''',
    
    'i32': '''
            
            <h3>Domain Shift</h3>
            <p>Domain adaptation addresses the challenge when training and deployment domains differ. Techniques include adversarial training to make representations domain-invariant, self-training on target domain unlabeled data, and domain-specific fine-tuning. The goal is maintaining performance when applying models trained on one domain (e.g., news) to another (e.g., medical texts).</p>''',
    
    'i33': '''
            
            <h3>Query Strategies</h3>
            <p>Active learning selects the most informative examples for labeling to maximize performance with minimal annotation effort. Uncertainty sampling queries examples where the model is least confident. Query-by-committee uses disagreement among multiple models. Expected model change selects examples that would most change the model if added to training. These strategies can reduce labeling needs by 50-90%.</p>''',
    
    'i34': '''
            
            <h3>Training Curricula</h3>
            <p>Curriculum learning presents training examples in a meaningful order, from simple to complex, mimicking human education. This can be based on difficulty metrics, data characteristics, or learning dynamics. Starting with easier examples helps models establish good initial representations, then progressively introducing harder examples leads to better final performance and faster convergence.</p>''',
    
    'i35': '''
            
            <h3>Contrastive Frameworks</h3>
            <p>Contrastive learning trains models to pull representations of similar items together while pushing dissimilar items apart in embedding space. SimCLR, MoCo, and CLIP use this approach to learn powerful representations from unlabeled data or image-text pairs. The learned embeddings capture semantic similarity, enabling zero-shot transfer and improved downstream task performance.</p>''',
    
    'i37': '''
            
            <h3>Architecture Search Methods</h3>
            <p>Neural Architecture Search automates the design of neural network architectures. Reinforcement learning approaches train a controller to generate architectures that maximize validation accuracy. Evolution-based methods treat architectures as genomes that mutate and recombine. Differentiable NAS like DARTS makes architecture choices continuous and optimizable via gradient descent, dramatically reducing search costs.</p>''',
    
    'i38': '''
            
            <h3>Optimization Strategies</h3>
            <p>Hyperparameter optimization systematically searches for the best configuration of learning rate, batch size, regularization, and architectural choices. Grid search is exhaustive but expensive. Random search often works surprisingly well. Bayesian optimization models the objective function to intelligently select hyperparameters to try next. Population-based training dynamically adjusts hyperparameters during training.</p>''',
    
    'i39': '''
            
            <h3>Explaining Decisions</h3>
            <p>Model interpretability reveals why models make specific predictions. Attention visualization shows which input parts the model focuses on. Feature importance methods like LIME and SHAP explain individual predictions through local approximations. Probing classifiers test what linguistic or semantic information is captured in model representations. Understanding model reasoning builds trust and aids debugging.</p>''',
}

# More expansions for advanced concepts
advanced_expansions = {
    'a2': '''
            
            <h3>Constitutional Principles</h3>
            <p>Constitutional AI trains models to follow a set of principles through self-critique and revision. Models generate responses, critique them against constitutional principles, and revise to better align with those principles. This approach reduces reliance on human feedback while maintaining safety and helpfulness.</p>''',
    
    'a4': '''
            
            <h3>Memory-Efficient Attention</h3>
            <p>Flash Attention reorders attention computation to minimize memory reads/writes and avoid materializing large N×N attention matrices. By using tiling and recomputation strategies, it achieves 2-4x speedup and enables training with much longer sequences. FlashAttention-2 further optimizes for different GPU architectures.</p>''',
    
    'a5': '''
            
            <h3>Sparsity Patterns</h3>
            <p>Sparse Transformers reduce the O(n²) attention complexity by having each token attend to only a subset of positions rather than all positions. Fixed patterns like strided or local attention, or learned sparse patterns through techniques like routing, enable scaling to very long sequences efficiently.</p>''',
    
    'a7': '''
            
            <h3>Verification Chains</h3>
            <p>Chain-of-Verification reduces hallucinations by having the model generate initial answers, then systematically verify claims through question-answering, before producing final verified outputs. This deliberate verification process catches inconsistencies and factual errors, improving reliability significantly.</p>''',
    
    'a11': '''
            
            <h3>Multi-Agent Coordination</h3>
            <p>Multi-agent systems combine multiple AI agents with different roles and capabilities to solve complex tasks. Agents can specialize, collaborate, debate, or work in hierarchies. This approach enables tackling problems too complex for single agents and can lead to emergent problem-solving capabilities through interaction.</p>''',
    
    'a12': '''
            
            <h3>Automated Testing</h3>
            <p>Automated red-teaming uses AI systems to discover vulnerabilities in other AI systems. Red-team models generate adversarial prompts attempting to elicit harmful outputs, while the target model is evaluated and improved based on these attacks. This accelerates safety testing beyond manual efforts.</p>''',
    
    'a15': '''
            
            <h3>Continued Training</h3>
            <p>Continuous pre-training updates foundation models with new data to keep them current, adapt to domain-specific corpora, or improve performance on underrepresented tasks. Careful learning rate scheduling and data mixing prevent catastrophic forgetting while incorporating new knowledge effectively.</p>''',
    
    'a21': '''
            
            <h3>Decentralized Learning</h3>
            <p>Federated learning trains models across many decentralized devices holding local data, without exchanging the data itself. Each device trains locally, sending only model updates to a central server that aggregates them. This enables privacy-preserving machine learning on sensitive data like medical records or mobile device data.</p>''',
    
    'a25': '''
            
            <h3>Reverse Engineering</h3>
            <p>Mechanistic interpretability aims to reverse-engineer neural networks to understand their internal algorithms and computations. By identifying circuits, features, and mechanisms that implement specific behaviors, researchers can better predict, control, and align AI systems. This goes beyond black-box interpretability to true mechanistic understanding.</p>''',
    
    'a26': '''
            
            <h3>Steering Activations</h3>
            <p>Activation engineering directly modifies internal model activations to control behavior without fine-tuning. By identifying activation patterns associated with desired properties (honesty, helpfulness, harmlessness), we can steer models by adding carefully crafted activation vectors. This enables real-time behavioral control.</p>''',
    
    'a27': '''
            
            <h3>Representation Control</h3>
            <p>Representation engineering studies and manipulates the internal representations learned by models. By understanding what concepts and features are represented, we can enhance, suppress, or modify specific capabilities. This enables fine-grained control over model behavior through representation-level interventions.</p>''',
    
    'a30': '''
            
            <h3>Inference Speedup</h3>
            <p>Inference optimization reduces latency and costs through quantization, pruning, knowledge distillation, and optimized kernels. Techniques like continuous batching, speculative decoding, and KV-cache optimization specifically target LLM inference. Together, these methods can achieve 10-100x speedups while maintaining quality.</p>''',
    
    'a33': '''
            
            <h3>Parallel Decoding</h3>
            <p>Speculative decoding speeds up auto-regressive generation by using a smaller draft model to propose multiple tokens at once, which a larger model then verifies in parallel. When drafts are correct, multiple tokens are generated in one step. This can provide 2-3x speedup with no quality degradation.</p>''',
    
    'a34': '''
            
            <h3>Watermarking Schemes</h3>
            <p>Model watermarking embeds imperceptible signals into generated content to enable detection and attribution. Techniques modify the sampling distribution in subtle ways that are statistically detectable but don't noticeably affect quality. This helps combat misuse while maintaining utility for legitimate applications.</p>''',
}

# Combine all expansions
all_expansions = {**expansions, **advanced_expansions}

# Apply expansions
for concept_id, expansion in all_expansions.items():
    # Find the concept's conclusion section and add before it
    pattern = rf"(id: '{concept_id}'.*?<h3>Conclusion</h3>)"
    
    def replacer(match):
        return match.group(1).replace('<h3>Conclusion</h3>', expansion + '\n\n            <h3>Conclusion</h3>')
    
    content = re.sub(pattern, replacer, content, flags=re.DOTALL)
    print(f"✓ Expanded {concept_id}")

# Write back to file
with open('data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\n✅ Successfully expanded {len(all_expansions)} concepts")
