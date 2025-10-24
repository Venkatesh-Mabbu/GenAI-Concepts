import re

with open('data.js', 'r') as f:
    content = f.read()

# Extract beginner concepts
beginner_section = re.search(r'beginner: \[(.*?)\],\s*intermediate:', content, re.DOTALL)
if beginner_section:
    concepts = re.findall(r"\{[^}]*id: '(b\d+)'[^}]*title: '([^']*)'[^}]*content: `(.*?)`[^}]*\}", beginner_section.group(1), re.DOTALL)
    
    print(f"Found {len(concepts)} beginner concepts\n")
    print("="*80)
    
    for concept_id, title, concept_content in concepts:
        word_count = len(concept_content.split())
        status = "✅ COMPLETE" if word_count >= 500 else "⚠️  NEEDS WORK"
        print(f"{status} | {concept_id} | {title[:50]:<50} | {word_count:>5} words")
        
    print("\n" + "="*80)
    complete = sum(1 for _, _, c in concepts if len(c.split()) >= 500)
    print(f"Summary: {complete}/{len(concepts)} complete ({complete/len(concepts)*100:.1f}%)")
