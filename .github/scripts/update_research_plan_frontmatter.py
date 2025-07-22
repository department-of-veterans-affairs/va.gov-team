import argparse
import os
import re
import yaml
import spacy
import sys
import traceback
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
                try:
                    doc_nlp = nlp(doc[:1000000])  # Limit doc size for NLP processing
                    kw_nlp = nlp(kw)
                    if len(kw_nlp) > 0 and len(doc_nlp) > 0:
                        for sent in doc_nlp.sents:
                            if len(sent.text.strip()) > 0:
                                sent_nlp = nlp(sent.text)
                                if len(sent_nlp) > 0 and len(kw_nlp) > 0:
                                    if kw_nlp[0].similarity(sent_nlp[0]) > 0.75:
                                        tag_scores[label] += 0.5
                except Exception as e:
                    print(f"Warning: NLP similarity check failed: {e}", file=sys.stderr)
    tags = [tag for tag, score in tag_scores.items() if score > 0]
    tag_confidence = {tag: min(1.0, tag_scores[tag]/2) for tag in tags}
    return tags, tag_confidence

def insert_frontmatter(text, frontmatter):
    return f"---\n{yaml.dump(frontmatter, sort_keys=False)}---\n{text}"

def main():
    try:
        parser = argparse.ArgumentParser()
        parser.add_argument('--file-path', required=True)
        parser.add_argument('--labels-file', required=True)
        parser.add_argument('--template-path', required=True)
        parser.add_argument('--report-path', required=True)
        args = parser.parse_args()

        print(f"Processing file: {args.file_path}")
        print(f"Labels file: {args.labels_file}")
        print(f"Template file: {args.template_path}")
        print(f"Report file: {args.report_path}")

        # Check if files exist
        if not os.path.exists(args.file_path):
            print(f"Error: Research plan file not found: {args.file_path}", file=sys.stderr)
            sys.exit(1)
        
        if not os.path.exists(args.labels_file):
            print(f"Error: Labels file not found: {args.labels_file}", file=sys.stderr)
            sys.exit(1)
            
        if not os.path.exists(args.template_path):
            print(f"Error: Template file not found: {args.template_path}", file=sys.stderr)
            sys.exit(1)

        # Load spaCy
        print("Loading spaCy model...")
        try:
            nlp = spacy.load("en_core_web_sm")
        except Exception as e:
            print(f"Error loading spaCy model: {e}", file=sys.stderr)
            print("Trying to download the model...", file=sys.stderr)
            os.system("python -m spacy download en_core_web_sm")
            nlp = spacy.load("en_core_web_sm")

        # Load file
        print(f"Loading research plan from: {args.file_path}")
        with open(args.file_path, "r", encoding="utf-8") as f:
            doc = f.read()
        
        print(f"Document length: {len(doc)} characters")

        if has_frontmatter(doc):
            print("Frontmatter already exists. Skipping update.")
            with open(args.report_path, "w") as report:
                report.write("Frontmatter already exists in this research plan. No changes made.\n")
            return

        # Load template frontmatter (YAML block at start)
        print("Loading template...")
        with open(args.template_path, "r", encoding="utf-8") as f:
            template = f.read()
        
        template_match = re.search(r"^---\s*\n(.*?)^---\s*\n", template, re.DOTALL | re.MULTILINE)
        template_yaml = template_match.group(1) if template_match else ""
        
        if not template_yaml:
            print("Warning: No frontmatter found in template file", file=sys.stderr)
            template_dict = {}
        else:
            try:
                template_dict = yaml.safe_load(template_yaml)
                if not isinstance(template_dict, dict):
                    template_dict = {}
            except Exception as e:
                print(f"Error parsing template YAML: {e}", file=sys.stderr)
                template_dict = {}

        # Extract fields from doc
        print("Extracting metadata from document...")
        title, title_conf = extract_title(doc)
        product, product_conf = extract_product(doc)
        methodology, meth_conf = extract_methodology(doc)
        author, author_conf = extract_author()
        date_created, date_conf = extract_date()

        # Tagging
        print("Loading labels and performing NLP tagging...")
        try:
            label_dict = load_labels(args.labels_file)
            print(f"Loaded {len(label_dict)} labels")
        except Exception as e:
            print(f"Error loading labels: {e}", file=sys.stderr)
            label_dict = {}
            
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
        print("Inserting frontmatter into document...")
        new_doc = insert_frontmatter(doc, frontmatter)
        
        # Write the updated document
        print(f"Writing updated document to: {args.file_path}")
        try:
            with open(args.file_path, "w", encoding="utf-8") as f:
                f.write(new_doc)
            print("Successfully wrote updated document")
        except Exception as e:
            print(f"Error writing updated document: {e}", file=sys.stderr)
            raise

        # Write report
        print(f"Writing report to: {args.report_path}")
        try:
            with open(args.report_path, "w", encoding="utf-8") as report:
                report.write("\n".join(report_lines) + "\n")
            print("Successfully wrote report")
        except Exception as e:
            print(f"Error writing report: {e}", file=sys.stderr)
            raise

        print("Script completed successfully")

    except Exception as e:
        print(f"Fatal error: {e}", file=sys.stderr)
        traceback.print_exc()
        sys.exit(1)

if __name__ == "__main__":
    main()
