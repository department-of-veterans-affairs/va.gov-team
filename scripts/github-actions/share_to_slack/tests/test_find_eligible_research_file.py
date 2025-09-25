import os
import subprocess
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent.parent
SCRIPT = SCRIPT_DIR / "find_eligible_research_file.py"


def run(env=None, cwd=None):
    env_vars = os.environ.copy()
    if env:
        env_vars.update(env)
    proc = subprocess.run([
        os.environ.get("PYTHON", "python3"), str(SCRIPT)
    ], capture_output=True, text=True, cwd=cwd or SCRIPT_DIR, env=env_vars)
    return proc.returncode, proc.stdout.strip().splitlines(), proc.stderr


def test_explicit_path_success():
    static_path = "tests/files/findings.md"
    code, out_lines, _ = run({"RESEARCH_FILE_PATH": static_path})
    assert code == 0
    joined = "\n".join(out_lines)
    assert f"eligible_file={static_path}" in joined
    assert "skip=false" in joined


def test_explicit_path_missing():
    missing_path = "tests/files/nonexistent-file.md"
    code, out_lines, _ = run({"RESEARCH_FILE_PATH": missing_path})
    assert code == 0
    joined = "\n".join(out_lines)
    assert "skip=true" in joined
    assert any(l.startswith(f"error_message=File not found: {missing_path}") for l in out_lines)
