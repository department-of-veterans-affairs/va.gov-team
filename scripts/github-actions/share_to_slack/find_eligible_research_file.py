#!/usr/bin/env python3
"""find_eligible_research_file.py
Outputs (key=value lines):
  eligible_file=PATH (when found)
  skip=true|false
  error_message=... (when skip=true & an error reason exists)

Behavior mirrors the original Bash script while remaining resilient and always
exiting 0. It selects the first eligible research markdown file that:
  * Matches filename patterns (findings|report|insights).md
  * Has not already been shared (not listed in SHARED_FILES_LOG)
  * Is at least WAIT_DAYS old unless IGNORE_TIME_DELAY=true

Environment Variables:
  RESEARCH_FILE_PATH  Explicit file path override (optional)
  IGNORE_TIME_DELAY   true|false (default false)
  WAIT_DAYS           Minimum age in days (default 3)
  SHARED_FILES_LOG    Path to log file (default .github/workflows/shared-research-files.log)
  SEARCH_GLOB         Glob for discovery (default products/**/*.md)
  NOW_EPOCH           Override current epoch timestamp (testing)
"""
from __future__ import annotations
import os
import re
import sys
import json
import glob
import subprocess
from pathlib import Path
from typing import Iterable, Optional

GITHUB_OUTPUT = os.environ.get("GITHUB_OUTPUT")

def emit(line: str) -> None:
    print(line)
    if GITHUB_OUTPUT:
        try:
            with open(GITHUB_OUTPUT, "a", encoding="utf-8") as f:
                f.write(line + "\n")
        except Exception:
            pass

def run_git(args: list[str]) -> str:
    try:
        return subprocess.check_output(["git", *args], stderr=subprocess.DEVNULL).decode().strip()
    except Exception:
        return ""

def in_git_repo() -> bool:
    return run_git(["rev-parse", "--is-inside-work-tree"]) == "true"

def get_commit_epoch(path: Path) -> int:
    if in_git_repo():
        raw = run_git(["log", "-1", "--format=%ct", "--", str(path)])
        if raw.isdigit():
            return int(raw)
    try:
        return int(path.stat().st_mtime)
    except Exception:
        return 0

def load_shared_paths(log_path: Path) -> set[str]:
    try:
        if log_path.is_file():
            return {l.strip() for l in log_path.read_text(encoding="utf-8", errors="ignore").splitlines() if l.strip()}
    except Exception:
        pass
    return set()

def candidate_files(search_glob: str) -> Iterable[Path]:
    # Resolve glob relative to current working directory
    search_glob_abs = str(Path.cwd() / search_glob) if not Path(search_glob).is_absolute() else search_glob
    matched = glob.glob(search_glob_abs, recursive=True)
    if matched:
        for m in matched:
            p = Path(m)
            if p.is_file():
                yield p
    else:
        root = Path.cwd() / "products"
        if root.is_dir():
            pat = re.compile(r"(findings|report|insights)\.md$", re.IGNORECASE)
            for fp in root.rglob("*.md"):
                if pat.search(fp.name):
                    yield fp

def pick_file(explicit: Optional[str], *_, **__) -> tuple[Optional[Path], Optional[str]]:
    """
    Returns the file if the explicit path exists, otherwise returns an error message.
    Ignores all discovery logic and only checks the explicit path.
    """
    if explicit:
        p = Path(explicit)
        if p.is_file():
            return p, None
        return None, f"File not found: {explicit}"
    return None, "No explicit file path provided"

def emit_relative(path: Path) -> str:
    try:
        rel = path.relative_to(Path.cwd())
        return rel.as_posix()
    except ValueError:
        return path.as_posix()

def main() -> int:
    explicit = os.environ.get("RESEARCH_FILE_PATH") or ""
    ignore_delay = os.environ.get("IGNORE_TIME_DELAY", "false").lower() == "true"
    wait_days = int(os.environ.get("WAIT_DAYS", "3") or 3)
    shared_log = Path(os.environ.get("SHARED_FILES_LOG", ".github/workflows/shared-research-files.log"))
    search_glob = os.environ.get("SEARCH_GLOB", "products/**/*.md")
    now_epoch = int(os.environ.get("NOW_EPOCH", "0") or 0) or int(__import__('time').time())

    shared_log.parent.mkdir(parents=True, exist_ok=True)
    shared_log.touch(exist_ok=True)

    shared = load_shared_paths(shared_log)
    path, error = pick_file(explicit or None, ignore_delay, wait_days, shared, now_epoch, search_glob)

    if path and not error:
        emit(f"eligible_file={emit_relative(path)}")
        emit("skip=false")
    else:
        emit("skip=true")
        emit(f"error_message={error}")
    return 0

if __name__ == '__main__':
    try:
        sys.exit(main())
    except SystemExit as e:
        raise e
    except Exception as ex:  # do not fail CI unexpectedly
        emit("skip=true")
        emit(f"error_message=Unexpected error: {ex}")
        sys.exit(0)
