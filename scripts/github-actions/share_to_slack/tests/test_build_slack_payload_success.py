import os
import json
import subprocess
from pathlib import Path
import tempfile
import shutil
import pwd
import datetime
import base64

SCRIPT_DIR = Path(__file__).resolve().parent.parent
SCRIPT = SCRIPT_DIR / "build_slack_payload_success.py"


def run(env):
    env_vars = os.environ.copy()
    env_vars.update(env)
    proc = subprocess.run([os.environ.get("PYTHON", "python3"), str(SCRIPT)], capture_output=True, text=True, cwd=SCRIPT_DIR, env=env_vars)
    return proc.returncode, proc.stdout, proc.stderr


def extract_payload(stdout: str):
    for line in stdout.splitlines():
        if line.startswith("payload="):
            return json.loads(line[len("payload="):])
    raise AssertionError("payload= line not found in output")


def create_test_research_file():
    content = """# Test Research Study

## Key Findings

1. Test finding one.
2. Test finding two.
3. Test finding three.

## Next Section
Other content.
"""
    tmpdir = tempfile.mkdtemp()
    file_path = Path(tmpdir) / "test-findings.md"
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    # Set a known modification time
    mod_time = datetime.datetime(2025, 9, 25, 12, 0, 0).timestamp()
    os.utime(file_path, (mod_time, mod_time))
    return file_path, mod_time, tmpdir


def test_build_payload_minimal():
    code, out, err = run({
        "SLACK_CHANNEL_ID": "C12345",
        "RESEARCH_TITLE": "Example Study",
        "PRODUCT_PATH": "some-product/path",
        "STUDY_DATE": "2025-09-01",
        "KEY_FINDINGS_B64": base64.b64encode("Test findings here.".encode()).decode(),
        "RESEARCH_FILE": "products/test-product/findings.md",
        "GITHUB_REPOSITORY": "department-of-veterans-affairs/va.gov-team",
        "GITHUB_SHA": "abcdef123456",
        "EVENT_NAME": "schedule"
    })
    assert code == 0
    payload = extract_payload(out)
    assert payload["channel"] == "C12345"
    assert "blocks" in payload
    header = payload["blocks"][0]
    assert header["type"] == "header"
    assert "Research Findings" in header["text"]["text"]


def test_missing_channel_returns_error():
    code, out, _ = run({})
    assert code == 0
    payload = extract_payload(out)
    assert "error" in payload
    assert payload["error"].startswith("SLACK_CHANNEL_ID")


def test_payload_includes_key_findings_and_metadata():
    file_path, mod_time, tmpdir = create_test_research_file()
    # Encode the key findings as base64 like the process script would do
    key_findings = "1. Test finding one.\n2. Test finding two.\n3. Test finding three."
    key_findings_b64 = base64.b64encode(key_findings.encode()).decode()
    
    code, out, err = run({
        "SLACK_CHANNEL_ID": "C12345",
        "RESEARCH_TITLE": "Test Study", 
        "PRODUCT_PATH": "test-product/path",
        "RESEARCH_FILE": str(file_path),
        "STUDY_DATE": "2025-09-25",
        "KEY_FINDINGS_B64": key_findings_b64,
        "GITHUB_REPOSITORY": "department-of-veterans-affairs/va.gov-team",
        "GITHUB_SHA": "abcdef123456",
        "EVENT_NAME": "schedule"
    })
    try:
        assert code == 0
        payload = extract_payload(out)
        blocks = payload["blocks"]
        
        # Check that author field is NOT present (since we removed it)
        found_author = False
        found_date = None
        for field in blocks[1]["fields"]:
            if field["text"].startswith("*Author:*"):
                found_author = True
            if field["text"].startswith("*Date:*"):
                found_date = field["text"].split("\n", 1)[1]
        
        # Author should NOT be present
        assert not found_author, "Author field should not be present in Slack message"
        
        # Date should be present
        assert found_date == "2025-09-25"
        
        # Check key findings section is present and correct
        findings_block = blocks[3]["text"]["text"]
        assert "Test finding one." in findings_block
        assert "Test finding two." in findings_block
        assert "Test finding three." in findings_block
    finally:
        shutil.rmtree(tmpdir)


def test_payload_structure_only_key_findings_and_link():
    file_path, mod_time, tmpdir = create_test_research_file()
    # Encode the key findings as base64 like the process script would do
    key_findings = "1. Test finding one.\n2. Test finding two.\n3. Test finding three."
    key_findings_b64 = base64.b64encode(key_findings.encode()).decode()
    
    code, out, err = run({
        "SLACK_CHANNEL_ID": "C12345",
        "RESEARCH_TITLE": "Test Study",
        "PRODUCT_PATH": "test-product/path",
        "RESEARCH_FILE": str(file_path),
        "STUDY_DATE": "2025-09-25",
        "KEY_FINDINGS_B64": key_findings_b64,
        "GITHUB_REPOSITORY": "department-of-veterans-affairs/va.gov-team",
        "GITHUB_SHA": "abcdef123456",
        "EVENT_NAME": "schedule"
    })
    try:
        assert code == 0
        payload = extract_payload(out)
        blocks = payload["blocks"]
        # After metadata (blocks[1]), should be divider, then key findings, then divider, then button, then context
        assert blocks[2]["type"] == "divider"
        assert blocks[3]["type"] == "section"
        findings_block = blocks[3]["text"]["text"]
        assert findings_block.startswith("*Key Findings:*")
        assert "Test finding one." in findings_block
        assert "Test finding two." in findings_block
        # Next block should be divider
        assert blocks[4]["type"] == "divider"
        # Next block should be actions (button)
        assert blocks[5]["type"] == "actions"
        button = blocks[5]["elements"][0]
        assert button["type"] == "button"
        assert "github.com" in button["url"]
        # Structure should be: header, metadata (without author), divider, findings, divider, button, context
        assert len(blocks) == 7
    finally:
        shutil.rmtree(tmpdir)
