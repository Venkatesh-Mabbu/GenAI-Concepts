import re

# Read data.js
with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# New glossary terms to add (35+ terms)
new_terms = [
    {
        "term": "Adapter",
        "definition": "Small trainable module inserted into frozen pre-trained models to enable parameter-efficient fine-tuning. Adapters add only a few million parameters while keeping the base model frozen, enabling efficient multi-task learning and domain adaptation.",
        "relatedConcepts": ["b8", "i9", "i10"],
        "category": "Training"
    },
    {
        "term": "Alignment",
        "definition": "Process of ensuring AI systems behave in accordance with human values and intentions. Includes techniques like RLHF, Constitutional AI, and red teaming to make models helpful, harmless, and honest.",
        "relatedConcepts": ["a1", "a2", "a12"],
        "category": "Safety"
    },
    {
        "term": "Anthropic's Claude",
        "definition": "Large language model developed by Anthropic with focus on safety and helpfulness. Uses Constitutional AI and RLHF to align with human values while maintaining strong capabilities across diverse tasks.",
        "relatedConcepts": ["b5", "a1", "a2"],
        "category": "Models"
    },
    {
        "term": "API (Application Programming Interface)",
        "definition": "Interface that allows applications to access AI model capabilities programmatically. Major providers like OpenAI, Anthropic, and Google offer APIs for their LLMs, enabling integration into applications.",
        "relatedConcepts": ["b5", "a31"],
        "category": "Deployment"
    },
    {
        "term": "Batch Size",
        "definition": "Number of training examples processed together in one forward/backward pass. Larger batches provide more stable gradients but require more memory. Typical values range from 8-128 for LLM fine-tuning.",
        "relatedConcepts": ["b2", "b19", "i38"],
        "category": "Training"
    },
    {
        "term": "Benchmark",
        "definition": "Standardized test to evaluate AI model performance. Common benchmarks include GLUE, SuperGLUE for NLP, ImageNet for vision, and HELM, MMLU for comprehensive LLM evaluation.",
        "relatedConcepts": ["i8", "i29"],
        "category": "Evaluation"
    },
    {
        "term": "BPE (Byte Pair Encoding)",
        "definition": "Subword tokenization algorithm that iteratively merges most frequent character pairs. Used by GPT models, it balances vocabulary size with ability to handle rare words and multiple languages.",
        "relatedConcepts": ["b6", "i19"],
        "category": "NLP"
    },
    {
        "term": "Catastrophic Forgetting",
        "definition": "Problem where neural networks forget previously learned information when trained on new tasks. Addressed through techniques like elastic weight consolidation, rehearsal, and parameter isolation.",
        "relatedConcepts": ["b8", "i34", "a15"],
        "category": "Challenges"
    },
    {
        "term": "ChatGPT",
        "definition": "Conversational AI system from OpenAI based on GPT models, fine-tuned with RLHF for dialogue. Popularized LLMs for general audiences and demonstrated chatbot capabilities at scale.",
        "relatedConcepts": ["b5", "a1", "i24"],
        "category": "Models"
    },
    {
        "term": "Chinchilla",
        "definition": "LLM from DeepMind demonstrating optimal compute allocation between model size and training data. Showed that many models were undertrained, leading to better scaling practices.",
        "relatedConcepts": ["a6", "a28", "a29"],
        "category": "Models"
    },
    {
        "term": "Compute Budget",
        "definition": "Total computational resources (measured in FLOPs) available for training or inference. Scaling laws help determine optimal allocation between model size, data, and training time.",
        "relatedConcepts": ["a28", "a29", "a6"],
        "category": "Infrastructure"
    },
    {
        "term": "Data Augmentation",
        "definition": "Techniques to artificially expand training datasets through transformations like rotation, cropping, back-translation, or paraphrasing. Improves model robustness and reduces overfitting.",
        "relatedConcepts": ["b17", "b18"],
        "category": "Training"
    },
    {
        "term": "Epoch",
        "definition": "One complete pass through the entire training dataset. Models typically train for multiple epochs, with performance monitored to prevent overfitting through early stopping.",
        "relatedConcepts": ["b2", "b7"],
        "category": "Training"
    },
    {
        "term": "F1 Score",
        "definition": "Harmonic mean of precision and recall, providing balanced evaluation metric for classification tasks. Particularly useful for imbalanced datasets where accuracy alone is misleading.",
        "relatedConcepts": ["b17", "i8"],
        "category": "Evaluation"
    },
    {
        "term": "Gemini",
        "definition": "Multimodal AI model from Google DeepMind capable of processing text, images, audio, and video. Represents Google's latest generation of foundation models with native multimodal capabilities.",
        "relatedConcepts": ["b5", "i12", "i13"],
        "category": "Models"
    },
    {
        "term": "GPTQ",
        "definition": "Post-training quantization method for LLMs that achieves 3-4 bit precision with minimal quality loss. Enables running large models on consumer hardware through aggressive compression.",
        "relatedConcepts": ["i17", "a30"],
        "category": "Optimization"
    },
    {
        "term": "Hugging Face",
        "definition": "Platform and company providing open-source tools, model repositories, and datasets for NLP and ML. Transformers library has become the standard for working with pre-trained models.",
        "relatedConcepts": ["b5", "b8", "i9"],
        "category": "Frameworks"
    },
    {
        "term": "Jailbreak",
        "definition": "Techniques to circumvent safety guardrails in AI systems, eliciting harmful or unintended outputs. Addressed through red teaming, safety fine-tuning, and input filtering.",
        "relatedConcepts": ["a13", "a12", "a2"],
        "category": "Safety"
    },
    {
        "term": "KV Cache",
        "definition": "Optimization storing key-value pairs from previous tokens during auto-regressive generation, avoiding redundant computation. Crucial for efficient long-form generation.",
        "relatedConcepts": ["b5", "a30", "a32"],
        "category": "Optimization"
    },
    {
        "term": "Learning Rate",
        "definition": "Hyperparameter controlling how much to adjust weights during training. Too high causes instability; too low leads to slow convergence. Typically 1e-5 to 5e-5 for LLM fine-tuning.",
        "relatedConcepts": ["b19", "i38"],
        "category": "Training"
    },
    {
        "term": "LLaMA",
        "definition": "Family of open-source foundation models from Meta with sizes from 7B to 70B parameters. Designed for research and fine-tuning, spawned many derivatives like Alpaca and Vicuna.",
        "relatedConcepts": ["b5", "i9", "a28"],
        "category": "Models"
    },
    {
        "term": "Mistral",
        "definition": "Series of high-performance open-source LLMs using techniques like sliding window attention and mixture of experts. Known for efficiency and strong performance relative to size.",
        "relatedConcepts": ["b5", "a3", "a5"],
        "category": "Models"
    },
    {
        "term": "NVIDIA A100/H100",
        "definition": "High-end GPUs designed for AI training and inference. H100 offers 3x performance over A100 with Transformer Engine for accelerated training. Essential infrastructure for LLM development.",
        "relatedConcepts": ["b7", "a38", "a31"],
        "category": "Infrastructure"
    },
    {
        "term": "One-Shot Learning",
        "definition": "Learning from a single example per class. In LLMs, refers to providing one example in the prompt to demonstrate the desired task format and output style.",
        "relatedConcepts": ["i1", "i3"],
        "category": "Learning Paradigms"
    },
    {
        "term": "OpenAI",
        "definition": "AI research company that created GPT series, DALL-E, and ChatGPT. Pioneered large-scale language models and popularized AI applications for general audiences.",
        "relatedConcepts": ["b5", "i24", "i14"],
        "category": "Organizations"
    },
    {
        "term": "Precision",
        "definition": "Ratio of true positives to all positive predictions. Measures how many retrieved items are relevant. Important when false positives are costly.",
        "relatedConcepts": ["b17", "i8"],
        "category": "Evaluation"
    },
    {
        "term": "Recall",
        "definition": "Ratio of true positives to all actual positives. Measures how many relevant items were retrieved. Important when missing items is costly.",
        "relatedConcepts": ["b17", "i8"],
        "category": "Evaluation"
    },
    {
        "term": "Regularization",
        "definition": "Techniques to prevent overfitting by constraining model complexity. Includes L1/L2 weight penalties, dropout, and early stopping. Essential for models with high capacity.",
        "relatedConcepts": ["b18", "b24"],
        "category": "Training"
    },
    {
        "term": "RoPE (Rotary Position Embedding)",
        "definition": "Position encoding technique rotating query and key vectors based on position. Enables better extrapolation to longer sequences than seen during training. Used in many modern LLMs.",
        "relatedConcepts": ["i20", "a32"],
        "category": "Architectures"
    },
    {
        "term": "Scaling Law",
        "definition": "Empirical relationships between model size, dataset size, compute budget, and performance. Guides efficient allocation of resources for training large models.",
        "relatedConcepts": ["a28", "a29", "a6"],
        "category": "Theory"
    },
    {
        "term": "SFT (Supervised Fine-Tuning)",
        "definition": "Fine-tuning on supervised examples of desired inputs and outputs. First stage in RLHF pipeline, teaching models to follow instructions before preference learning.",
        "relatedConcepts": ["i9", "i11", "a1"],
        "category": "Training"
    },
    {
        "term": "System Prompt",
        "definition": "Initial instructions defining an AI assistant's role, behavior, and constraints. Set at conversation start to establish personality, expertise domain, and safety guidelines.",
        "relatedConcepts": ["i1", "i2"],
        "category": "Prompting"
    },
    {
        "term": "Token Limit",
        "definition": "Maximum number of tokens a model can process in a single request (input + output). Varies by model: GPT-4 supports up to 128K, Claude up to 200K tokens.",
        "relatedConcepts": ["b6", "b14", "a32"],
        "category": "Models"
    },
    {
        "term": "Validation Set",
        "definition": "Data held out from training used to tune hyperparameters and monitor for overfitting. Distinct from test set which evaluates final model performance.",
        "relatedConcepts": ["b2", "b18", "i8"],
        "category": "Training"
    },
    {
        "term": "Vision Transformer (ViT)",
        "definition": "Transformer architecture adapted for image classification by treating image patches as tokens. Demonstrated transformers can match or exceed CNNs for vision tasks.",
        "relatedConcepts": ["b25", "i13"],
        "category": "Architectures"
    },
    {
        "term": "Weight",
        "definition": "Learnable parameters in neural networks adjusted during training. LLMs have billions of weights stored as matrices, determining the model's knowledge and capabilities.",
        "relatedConcepts": ["b4", "b15"],
        "category": "Fundamentals"
    },
]

# Find the insertion point (before the closing bracket of glossaryTerms array)
insertion_point = content.rfind("];", content.find("const glossaryTerms = ["))

# Format new terms
new_terms_str = ""
for term in new_terms:
    related = str(term['relatedConcepts']).replace("'", '"')
    new_terms_str += f'''    {{
        term: "{term['term']}",
        definition: "{term['definition']}",
        relatedConcepts: {related},
        category: "{term['category']}"
    }},
'''

# Insert new terms before the closing bracket
content = content[:insertion_point] + ",\n" + new_terms_str + content[insertion_point:]

# Write back
with open('data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"✅ Added {len(new_terms)} new glossary terms")
print(f"📚 Total glossary terms: {68 + len(new_terms)}")
