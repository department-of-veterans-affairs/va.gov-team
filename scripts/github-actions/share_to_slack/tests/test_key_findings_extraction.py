import pytest
import re

RESEARCH_FILE = "files/research-findings.md"

# Helper to extract the Key Findings section from markdown
def extract_key_findings(text):
    # Look for a heading like '# Key Findings' or '## Key Findings'
    match = re.search(r"^#+\s*Key Findings\s*$", text, re.MULTILINE | re.IGNORECASE)
    if not match:
        return None
    start = match.end()
    # Find the next heading of the same or higher level
    next_heading = re.search(r"^#+\s+", text[start:], re.MULTILINE)
    end = start + next_heading.start() if next_heading else len(text)
    return text[start:end].strip()

def get_research_text():
    with open(RESEARCH_FILE, encoding="utf-8") as f:
        return f.read()

def test_key_findings_section_exists():
    text = get_research_text()
    findings = extract_key_findings(text)
    assert findings is not None, "Key Findings section not found"
    assert len(findings) > 0, "Key Findings section is empty"

def test_key_findings_bullets_present():
    text = get_research_text()
    findings = extract_key_findings(text)
    # Check that at least 3 bullet points or numbered items are present
    bullets = re.findall(r"^\s*([0-9]+\.|[-*]) ", findings, re.MULTILINE)
    assert len(bullets) >= 3, "Expected at least 3 key findings bullets/numbered items"

def test_key_findings_content():
    text = get_research_text()
    findings = extract_key_findings(text)
    # Example: check for a known phrase from the findings
    assert "Decision Letters via the Claim Status Tool" in findings
    assert "date and recency sorting" in findings
    assert "Claim Letters entrypoint was not discoverable" in findings
