import pytest
import re
import os
from pathlib import Path

# Get the correct path to the test file
TEST_DIR = Path(__file__).resolve().parent
RESEARCH_FILE = TEST_DIR / "files" / "research-findings.md"

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
    assert len(bullets) >= 3, f"Expected at least 3 key findings bullets/numbered items, found {len(bullets)}"

def test_key_findings_content():
    text = get_research_text()
    findings = extract_key_findings(text)
    # Check for content that should be in the key findings
    # Make this more flexible since we don't know the exact content
    assert len(findings) > 50, "Key findings section should contain substantial content"
    # Check that it contains some kind of structured content (bullets, numbers, or paragraphs)
    has_structure = bool(re.search(r"(^\s*[-*0-9]+\.?\s+|\n\s*\n)", findings, re.MULTILINE))
    assert has_structure, "Key findings should have structured content (bullets, numbers, or paragraphs)"
