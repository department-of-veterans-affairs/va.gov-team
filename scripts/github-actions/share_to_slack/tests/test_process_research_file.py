import os
import base64
import subprocess
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent.parent
SCRIPT = SCRIPT_DIR / "process_research_file.py"


def run(args, env=None):
    env_vars = os.environ.copy()
    if env:
        env_vars.update(env)
    proc = subprocess.run([os.environ.get("PYTHON", "python3"), str(SCRIPT), *args], capture_output=True, text=True, cwd=SCRIPT_DIR, env=env_vars)
    return proc.returncode, proc.stdout, proc.stderr


def parse_outputs(stdout: str):
    data = {}
    for line in stdout.splitlines():
        if "=" in line:
            k, v = line.split("=", 1)
            data[k.strip()] = v.strip()
    return data


def b64decode(val: str) -> str:
    return base64.b64decode(val.encode()).decode()


def test_process_research_file_key_findings_extraction(tmp_path):
    md = tmp_path / "research.md"
    md.write_text(
        """# Amazing Study\n\nIntro paragraph about context.\nMore intro detail.\nYet more context.\n\n## Key findings\n- First insight improves task success\n- Second insight reduces errors\n\n## Appendix\nExtra stuff\n""",
        encoding="utf-8",
    )
    code, out, err = run([str(md)])
    assert code == 0, err
    kv = parse_outputs(out)
    assert kv["RESEARCH_TITLE"] == "Amazing Study"
    decoded = b64decode(kv["KEY_FINDINGS_B64"])
    assert "First insight" in decoded and "Second insight" in decoded
    assert kv["RESEARCH_FILE"].endswith("research.md")
    assert kv["PRODUCT_PATH"] in {"research.md", md.name} or kv["PRODUCT_PATH"]  # just ensure present


def test_process_research_file_truncation(tmp_path):
    md = tmp_path / "trunc.md"
    md.write_text(
        """# Title\n\nIntro A\nIntro B\nIntro C\n\n## Key findings\n""" + ("Long insight text " * 20) + "\n",
        encoding="utf-8",
    )
    code, out, err = run([str(md)], env={"MAX_FINDINGS_CHARS": "50"})
    assert code == 0, err
    kv = parse_outputs(out)
    decoded = b64decode(kv["KEY_FINDINGS_B64"])
    assert len(decoded) <= 50
    assert decoded.endswith("...")


def test_process_research_file_fallback_no_heading(tmp_path):
    md = tmp_path / "fallback.md"
    md.write_text(
        """# Title\nLine1\nLine2\nLine3\nLine4 should appear\nLine5 should appear\n""",
        encoding="utf-8",
    )
    code, out, err = run([str(md)])
    assert code == 0, err
    kv = parse_outputs(out)
    decoded = b64decode(kv["KEY_FINDINGS_B64"])
    # Fallback skips first 3 lines after header; ensure Line4 present
    assert "Line4 should appear" in decoded


def test_process_research_file_missing_file():
    code, out, err = run(["/nonexistent/path/xyz.md"])
    assert code == 0
    kv = parse_outputs(out)
    # Should not emit RESEARCH_FILE when file missing
    assert "RESEARCH_FILE" not in kv
    assert "ERR:" in err or "file not found" in err.lower()
