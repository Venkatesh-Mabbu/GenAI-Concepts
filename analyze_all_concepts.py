import re

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

def analyze_section(pattern_prefix, section_name, expected_count):
    print(f"\n{'='*90}")
    print(f"{section_name.upper()} CONCEPTS")
    print(f"{'='*90}")
    
    results = []
    for i in range(1, expected_count + 1):
        concept_id = f"{pattern_prefix}{i}"
        
        # Find the concept block
        pattern = rf"id: '{concept_id}'.*?content: `(.*?)`"
        match = re.search(pattern, content, re.DOTALL)
        
        if match:
            concept_content = match.group(1)
            word_count = len(concept_content.split())
            
            # Extract title
            title_match = re.search(rf"id: '{concept_id}'.*?title: '([^']*)'", content, re.DOTALL)
            title = title_match.group(1) if title_match else "Unknown"
            
            status = "✅" if word_count >= 500 else "⚠️ "
            results.append((concept_id, title, word_count, word_count >= 500))
            print(f"{status} {concept_id:>4} | {title[:55]:<55} | {word_count:>5} words")
        else:
            print(f"❌ {concept_id:>4} | NOT FOUND OR NO CONTENT")
            results.append((concept_id, "NOT FOUND", 0, False))
    
    complete = sum(1 for _, _, _, is_complete in results if is_complete)
    total = len(results)
    
    print(f"\n{section_name} Summary: {complete}/{total} complete ({complete/total*100:.1f}%)")
    
    return results

# Analyze all sections
beginner_results = analyze_section('b', 'Beginner', 30)
intermediate_results = analyze_section('i', 'Intermediate', 40)
advanced_results = analyze_section('a', 'Advanced', 35)

# Overall summary
print(f"\n{'='*90}")
print("OVERALL SUMMARY")
print(f"{'='*90}")

all_results = beginner_results + intermediate_results + advanced_results
complete_total = sum(1 for _, _, _, is_complete in all_results if is_complete)
total_concepts = len(all_results)

print(f"Total Concepts Complete: {complete_total}/{total_concepts} ({complete_total/total_concepts*100:.1f}%)")
print(f"Remaining to Complete: {total_concepts - complete_total}")
print(f"\nTarget: All concepts should have 500-2000 words")
