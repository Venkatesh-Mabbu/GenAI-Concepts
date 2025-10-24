import re
from collections import Counter

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

print("=" * 80)
print("DUPLICATE CHECK REPORT")
print("=" * 80)

# Check concept titles
concept_titles = re.findall(r"title: '([^']*)'", content)
title_counts = Counter(concept_titles)
duplicates = {title: count for title, count in title_counts.items() if count > 1}

print(f"\n📋 CONCEPT TITLES:")
print(f"Total titles found: {len(concept_titles)}")
print(f"Unique titles: {len(title_counts)}")
if duplicates:
    print(f"⚠️  DUPLICATES FOUND: {len(duplicates)}")
    for title, count in duplicates.items():
        print(f"  - '{title}' appears {count} times")
else:
    print("✅ No duplicate concept titles found")

# Check concept IDs
concept_ids = re.findall(r"id: '([boia]\d+)'", content)
id_counts = Counter(concept_ids)
id_duplicates = {cid: count for cid, count in id_counts.items() if count > 1}

print(f"\n🔢 CONCEPT IDs:")
print(f"Total IDs found: {len(concept_ids)}")
print(f"Unique IDs: {len(id_counts)}")
if id_duplicates:
    print(f"⚠️  DUPLICATES FOUND: {len(id_duplicates)}")
    for cid, count in id_duplicates.items():
        print(f"  - '{cid}' appears {count} times")
else:
    print("✅ No duplicate concept IDs found")

# Check glossary terms
glossary_terms = re.findall(r'term: "([^"]*)"', content)
term_counts = Counter(glossary_terms)
term_duplicates = {term: count for term, count in term_counts.items() if count > 1}

print(f"\n📚 GLOSSARY TERMS:")
print(f"Total terms found: {len(glossary_terms)}")
print(f"Unique terms: {len(term_counts)}")
if term_duplicates:
    print(f"⚠️  DUPLICATES FOUND: {len(term_duplicates)}")
    for term, count in term_duplicates.items():
        print(f"  - '{term}' appears {count} times")
else:
    print("✅ No duplicate glossary terms found")

# Summary
print("\n" + "=" * 80)
print("SUMMARY")
print("=" * 80)
total_issues = len(duplicates) + len(id_duplicates) + len(term_duplicates)
if total_issues == 0:
    print("✅ ✅ ✅ NO DUPLICATES FOUND - ALL CONTENT IS UNIQUE!")
else:
    print(f"⚠️  Found {total_issues} duplicate issues that need to be resolved")

print("\n✓ Duplicate check complete")
