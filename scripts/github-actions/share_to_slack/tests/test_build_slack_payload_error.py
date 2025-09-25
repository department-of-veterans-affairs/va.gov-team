import os
import json
import subprocess
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent.parent
SCRIPT = SCRIPT_DIR / "build_slack_payload_error.py"


def run(env):
    env_vars = os.environ.copy()
    env_vars.update(env)
    proc = subprocess.run([os.environ.get("PYTHON", "python3"), str(SCRIPT)], capture_output=True, text=True, cwd=SCRIPT_DIR, env=env_vars)
    return proc.returncode, proc.stdout, proc.stderr


def extract_payload(stdout: str):
    for line in stdout.splitlines():
        if line.startswith("payload="):
            return json.loads(line[len("payload="):])
    raise AssertionError("payload= line not found in output. stdout was:\n" + stdout)


def test_error_payload_with_channel_and_message():
    code, out, err = run({
        "SLACK_CHANNEL_ID": "CERR1",
        "ERROR_MESSAGE": "File products/xyz/findings.md not found"
    })
    assert code == 0, err
    payload = extract_payload(out)
    assert payload["channel"] == "CERR1"
    assert "blocks" in payload
    block_text = payload["blocks"][0]["text"]["text"]
    assert "Could not process research findings" in block_text
    assert "File products/xyz/findings.md not found" in block_text
    assert "error" not in payload  # no top-level error when channel provided


def test_error_payload_missing_channel():
    code, out, err = run({
        "ERROR_MESSAGE": "Some failure happened"
    })
    assert code == 0, err
    payload = extract_payload(out)
    assert payload["text"] == "Research File Not Found"
    assert payload["error"] == "Missing SLACK_CHANNEL_ID"
    assert payload["detail"] == "Some failure happened"
    assert payload["channel"] == "unknown"


def test_error_payload_default_message():
    code, out, err = run({
        "SLACK_CHANNEL_ID": "CERR2"
    })
    assert code == 0, err
    payload = extract_payload(out)
    block_text = payload["blocks"][0]["text"]["text"]
    assert "Unspecified error" in block_text
