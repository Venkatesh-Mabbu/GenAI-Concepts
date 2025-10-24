import re

# Read the data.js file
with open('data.js', 'r') as f:
    content = f.read()

# Find all concept IDs and their content
beginner_pattern = r"id: '(b\d+)',.*?content: `(.*?)`,"
intermediate_pattern = r"id: '(i\d+)',.*?content: `(.*?)`,"
advanced_pattern = r"id: '(a\d+)',.*?content: `(.*?)`,"

def analyze_concepts(pattern, level_name):
    matches = re.findall(pattern, content, re.DOTALL)
    print(f"\n{'='*60}")
    print(f"{level_name} CONCEPTS ANALYSIS")
    print(f"{'='*60}")
    
    full_concepts = []
    stub_concepts = []
    
    for concept_id, concept_content in matches:
        word_count = len(concept_content.split())
        if word_count >= 500:
            full_concepts.append((concept_id, word_count))
        else:
            stub_concepts.append((concept_id, word_count))
    
    print(f"\nFull Concepts (500+ words): {len(full_concepts)}")
    for cid, wc in full_concepts[:10]:
        print(f"  {cid}: {wc} words")
    if len(full_concepts) > 10:
        print(f"  ... and {len(full_concepts) - 10} more")
    
    print(f"\nStub/Incomplete Concepts (<500 words): {len(stub_concepts)}")
    for cid, wc in stub_concepts[:10]:
        print(f"  {cid}: {wc} words")
    if len(stub_concepts) > 10:
        print(f"  ... and {len(stub_concepts) - 10} more")
    
    return full_concepts, stub_concepts

b_full, b_stub = analyze_concepts(beginner_pattern, "BEGINNER")
i_full, i_stub = analyze_concepts(intermediate_pattern, "INTERMEDIATE")
a_full, a_stub = analyze_concepts(advanced_pattern, "ADVANCED")

print(f"\n{'='*60}")
print("OVERALL SUMMARY")
print(f"{'='*60}")
print(f"Beginner: {len(b_full)}/30 complete ({len(b_stub)} need work)")
print(f"Intermediate: {len(i_full)}/40 complete ({len(i_stub)} need work)")
print(f"Advanced: {len(a_full)}/35 complete ({len(a_stub)} need work)")
print(f"Total: {len(b_full) + len(i_full) + len(a_full)}/105 complete")

# Count glossary terms
glossary_matches = re.findall(r'term: "(.*?)"', content)
print(f"\nGlossary Terms: {len(glossary_matches)}")
