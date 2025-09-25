import os
import json
import subprocess
from pathlib import Path
import tempfile
import shutil
import pwd
import datetime

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
    content = """
# **Key Findings**
1. Test finding one.
2. Test finding two.
# Next Section
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
        "AUTHORS": "Tester One, Tester Two",
        "KEY_FINDINGS_B64": "VGVzdCBmaW5kaW5ncyBoZXJlLg==",
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
    code, out, err = run({
        "SLACK_CHANNEL_ID": "C12345",
        "RESEARCH_TITLE": "Test Study",
        "PRODUCT_PATH": "test-product/path",
        "RESEARCH_FILE": str(file_path),
        "GITHUB_REPOSITORY": "department-of-veterans-affairs/va.gov-team",
        "GITHUB_SHA": "abcdef123456",
        "EVENT_NAME": "schedule"
    })
    try:
        assert code == 0
        payload = extract_payload(out)
        blocks = payload["blocks"]
        # Check author is the file owner
        author = pwd.getpwuid(os.stat(file_path).st_uid).pw_name
        found_author = None
        found_date = None
        for field in blocks[1]["fields"]:
            if field["text"].startswith("*Author:*"):
                found_author = field["text"].split("\n", 1)[1]
            if field["text"].startswith("*Date:*"):
                found_date = field["text"].split("\n", 1)[1]
        assert found_author == author
        expected_date = datetime.datetime.fromtimestamp(mod_time).strftime('%Y-%m-%d')
        assert found_date == expected_date
        # Check key findings section is present and correct
        findings_block = blocks[3]["text"]["text"]
        assert "Test finding one." in findings_block
        assert "Test finding two." in findings_block
        assert "Next Section" not in findings_block  # Should stop at next header
    finally:
        shutil.rmtree(tmpdir)


def test_payload_structure_only_key_findings_and_link():
    file_path, mod_time, tmpdir = create_test_research_file()
    code, out, err = run({
        "SLACK_CHANNEL_ID": "C12345",
        "RESEARCH_TITLE": "Test Study",
        "PRODUCT_PATH": "test-product/path",
        "RESEARCH_FILE": str(file_path),
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
        assert button["url"].endswith(str(file_path)) or button["url"].startswith("https://github.com/")
        # No other findings, previews, or extra sections
        assert len(blocks) == 7  # header, metadata, divider, findings, divider, button, context
    finally:
        shutil.rmtree(tmpdir)
