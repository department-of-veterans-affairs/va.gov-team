import argparse
import os
import re
import yaml
import spacy
from collections import defaultdict

def has_frontmatter(text):
    return bool(re.match(r"^---\s*\n.*?^---\s*\n", text, re.DOTALL | re.MULTILINE))

def extract_title(doc):
    # Heuristic: First H1 or first line that looks like a title
    for line in doc.split('\n'):
        if line.startswith('# '):
            return line.replace('# ', '').strip(), 0.9
    # Fallback: first non-empty line
    for line in doc.split('\n'):
        if line.strip():
            return line.strip(), 0.6
    return "Research Plan", 0.3

def extract_product(doc):
    # Look for 'product' or 'Product Name' in the file
    m = re.search(r'[Pp]roduct[:\-]?\s*([^\n]+)', doc)
    if m:
        return m.group(1).strip(), 0.8
    return "", 0.3

def extract_methodology(doc):
    # Try to find a section mentioning methodology, methods, or similar
    methods = []
    for line in doc.split('\n'):
        if re.search(r'(methodology|methods|approach)', line, re.IGNORECASE):
            # Take subsequent lines as methods if they look like a list
            idx = doc.split('\n').index(line)
            for l in doc.split('\n')[idx+1:]:
                if l.strip().startswith('-'):
                    methods.append(l.strip('-').strip())
                elif l.strip() == "":
                    break
            if methods:
                return methods, 0.7
    return [], 0.2

def extract_author():
    # Could use git log or leave as TODO
    return "[TODO: Author]", 0.1

def extract_date():
    from datetime import datetime
    # Use today's date
    return datetime.utcnow().strftime("%Y-%m-%d"), 1.0

def load_labels(labels_path):
    with open(labels_path, "r") as f:
        labels = yaml.safe_load(f)
    label_dict = {}
    for entry in labels:
        if isinstance(entry, dict) and 'name' in entry and 'match' in entry:
            label_dict[entry['name']] = entry['match']
    return label_dict

def nlp_tagging(doc, label_dict, nlp):
    tag_scores = defaultdict(float)
    for label, keywords in label_dict.items():
        for kw in keywords:
            if kw.lower() in doc.lower():
                tag_scores[label] += 1
            else:
                # Use spaCy similarity if available
                for sent in nlp(doc).sents:
                    if nlp(kw)[0].similarity(nlp(sent.text)[0]) > 0.75:
                        tag_scores[label] += 0.5
    tags = [tag for tag, score in tag_scores.items() if score > 0]
    tag_confidence = {tag: min(1.0, tag_scores[tag]/2) for tag in tags}
    return tags, tag_confidence

def insert_frontmatter(text, frontmatter):
    return f"---\n{yaml.dump(frontmatter, sort_keys=False)}---\n{text}"

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--file-path', required=True)
    parser.add_argument('--labels-file', required=True)
    parser.add_argument('--template-path', required=True)
    parser.add_argument('--report-path', required=True)
    args = parser.parse_args()

    # Load spaCy
    nlp = spacy.load("en_core_web_sm")

    # Load file
    with open(args.file_path, "r", encoding="utf-8") as f:
        doc = f.read()

    if has_frontmatter(doc):
        print("Frontmatter already exists. Skipping update.")
        with open(args.report_path, "w") as report:
            report.write("Frontmatter already exists in this research plan. No changes made.\n")
        return

    # Load template frontmatter (YAML block at start)
    with open(args.template_path, "r", encoding="utf-8") as f:
        template = f.read()
    template_match = re.search(r"^---\s*\n(.*?)^---\s*\n", template, re.DOTALL | re.MULTILINE)
    template_yaml = template_match.group(1) if template_match else ""
    template_dict = yaml.safe_load(template_yaml) if template_yaml else {}

    # Extract fields from doc
    title, title_conf = extract_title(doc)
    product, product_conf = extract_product(doc)
    methodology, meth_conf = extract_methodology(doc)
    author, author_conf = extract_author()
    date_created, date_conf = extract_date()

    # Tagging
    label_dict = load_labels(args.labels_file)
    tags, tag_confidence = nlp_tagging(doc, label_dict, nlp)

    # Build frontmatter
    frontmatter = template_dict.copy()
    report_lines = []

    # Fill fields, add confidence report
    frontmatter['title'] = title
    report_lines.append(f"**title**: `{title}` (confidence: {title_conf:.2f})" + (" – review needed" if title_conf < 0.8 else ""))

    frontmatter['date_created'] = date_created
    report_lines.append(f"**date_created**: `{date_created}` (auto-filled)")

    frontmatter['author'] = author
    report_lines.append(f"**author**: `{author}` (confidence: {author_conf:.2f}) – review needed")

    frontmatter['product'] = product
    report_lines.append(f"**product**: `{product}` (confidence: {product_conf:.2f})" + (" – review needed" if product_conf < 0.8 else ""))

    frontmatter['methodology'] = methodology if methodology else ["[TODO: Add methodology]"]
    report_lines.append(f"**methodology**: `{methodology if methodology else '[TODO: Add methodology]'}` (confidence: {meth_conf:.2f})" + (" – review needed" if meth_conf < 0.8 else ""))

    frontmatter['tags'] = tags if tags else ["[TODO: Add tags]"]
    tag_report = []
    for tag in tags:
        tag_report.append(f"  - `{tag}` (confidence: {tag_confidence.get(tag, 0):.2f}" + (" – review needed" if tag_confidence.get(tag, 0) < 0.8 else "") + ")")
    if not tags:
        tag_report.append("  - [TODO: Add tags] – review needed")
    report_lines.append("**tags**:\n" + "\n".join(tag_report))

    # Copy through other template fields if present
    for key in template_dict:
        if key not in frontmatter:
            frontmatter[key] = template_dict[key]

    # Insert frontmatter
    new_doc = insert_frontmatter(doc, frontmatter)
    with open(args.file_path, "w", encoding="utf-8") as f:
        f.write(new_doc)

    # Write report
    with open(args.report_path, "w", encoding="utf-8") as report:
        report.write("\n".join(report_lines) + "\n")

if __name__ == "__main__":
    main()
