#!/usr/bin/env python3
"""process_research_file.py
-------------------------------------------------------------------------------
Purpose:
  Extract metadata and a concise key findings preview from a research Markdown
  file so it can be sent to Slack (or other downstream automation).

Behavior mirrors the existing Bash script (process_research_file.sh) while
staying idempotent and always exiting with status 0. Outputs are printed as
key=value lines and, when GITHUB_OUTPUT / GITHUB_ENV are set, appended to those
files for GitHub Actions interoperability.

Inputs (positional):
  1) Path to the markdown file

Environment variables (optional):
  MAX_FINDINGS_CHARS      Max length of extracted key findings text (default 2000)
  PREVIEW_LIMIT           Stderr preview length (default 200)
  KEY_SECTION_CANDIDATES  Comma-separated candidates for key findings section
                          (default: Key findings,Key Findings,Summary,Findings,Results,Insights)

Outputs (lines + optional GITHUB_OUTPUT / GITHUB_ENV):
  RESEARCH_FILE=...
  RESEARCH_TITLE=...
  KEY_FINDINGS_B64=...
  AUTHORS=...
  STUDY_DATE=...
  PRODUCT_PATH=...
-------------------------------------------------------------------------------
"""
from __future__ import annotations
import base64
import os
import re
import subprocess
import sys
from datetime import datetime
from pathlib import Path
from typing import List, Optional

# ------------------------------ Configuration ---------------------------------
MAX_FINDINGS_CHARS = int(os.environ.get("MAX_FINDINGS_CHARS", "2000") or 2000)
PREVIEW_LIMIT = int(os.environ.get("PREVIEW_LIMIT", "200") or 200)
KEY_SECTION_CANDIDATES = os.environ.get(
    "KEY_SECTION_CANDIDATES",
    "Key findings,Key Findings",
)

GITHUB_OUTPUT = os.environ.get("GITHUB_OUTPUT")
GITHUB_ENV = os.environ.get("GITHUB_ENV")

# ------------------------------ Helpers ---------------------------------------

def log(msg: str) -> None:
    print(msg, file=sys.stderr)

def emit(kv: str) -> None:
    print(kv)
    if GITHUB_OUTPUT:
        try:
            with open(GITHUB_OUTPUT, "a", encoding="utf-8") as f:
                f.write(kv + "\n")
        except Exception:
            pass
    if GITHUB_ENV:
        try:
            with open(GITHUB_ENV, "a", encoding="utf-8") as f:
                f.write(kv + "\n")
        except Exception:
            pass

def run_git(args: List[str], cwd: Optional[Path] = None) -> str:
    try:
        out = subprocess.check_output(["git", *args], cwd=cwd, stderr=subprocess.DEVNULL)
        return out.decode("utf-8", "replace").strip()
    except Exception:
        return ""

def in_git_repo() -> bool:
    return run_git(["rev-parse", "--is-inside-work-tree"]) == "true"

def get_authors(path: Path) -> str:
    if not in_git_repo():
        return "Unknown"
    out = run_git(["log", "--format=%an", "--", str(path)])
    authors = sorted({a for a in out.splitlines() if a.strip()})[:3]
    return ", ".join(authors) if authors else "Unknown"

def get_study_date(path: Path) -> str:
    date_str = ""
    if in_git_repo():
        raw = run_git(["log", "-1", "--format=%ai", "--", str(path)])
        if raw:
            date_str = raw.split()[0]
    if not date_str:
        try:
            epoch = path.stat().st_mtime
            date_str = datetime.utcfromtimestamp(epoch).strftime("%Y-%m-%d")
        except Exception:
            date_str = datetime.utcnow().strftime("%Y-%m-%d")
    return date_str

def extract_title(text: str) -> str:
    for line in text.splitlines():
        if line.startswith("# "):
            return line[2:].strip() or "Research Findings"
    for line in text.splitlines():
        if line.startswith("## "):
            return line[3:].strip() or "Research Findings"
    return "Research Findings"

def lines_after_heading(text: str, heading_pattern: str, max_lines: int = 20) -> Optional[str]:
    lines = text.splitlines()
    capture = False
    collected: List[str] = []
    heading_regex = re.compile(r"^##.*" + re.escape(heading_pattern), re.IGNORECASE)
    any_h2 = re.compile(r"^##\s+")
    for line in lines:
        if not capture and heading_regex.search(line):
            capture = True
            continue
        if capture:
            if any_h2.match(line):
                break
            if line.strip():
                collected.append(line)
            else:
                collected.append("")
            if len([l for l in collected if l.strip()]) >= max_lines:
                break
    if not collected:
        return None
    return "\n".join(collected).strip()

def extract_key_findings(text: str) -> str:
    candidates = [c.strip() for c in KEY_SECTION_CANDIDATES.split(",") if c.strip()]
    for cand in candidates:
        section = lines_after_heading(text, cand, max_lines=20)
        if section:
            return section
    # fallback: first 10 non-empty lines after the first 3 lines
    lines = [l for l in text.splitlines()[3:] if l.strip()]
    return "\n".join(lines[:10])

def flatten(text: str) -> str:
    parts = [p.strip() for p in text.splitlines() if p.strip()]
    flat = " ".join(parts)
    # collapse multiple spaces
    return re.sub(r"\s+", " ", flat).strip()

def truncate(text: str, limit: int) -> str:
    if len(text) > limit:
        return text[: limit - 3] + "..."
    return text

def encode_b64(text: str) -> str:
    return base64.b64encode(text.encode("utf-8")).decode("ascii")

def derive_product_path(path: Path) -> str:
    parts = path.parts
    if "products" in parts:
        idx = parts.index("products")
        tail = parts[idx + 1 : idx + 3]
        if tail:
            return "/".join(tail)
    # fallback: attempt similar to bash cut -d'/' -f2-3
    if len(parts) >= 3:
        return "/".join(parts[1:3])
    if len(parts) >= 2:
        return parts[1]
    return path.name

# ------------------------------ Main -----------------------------------------

def main() -> int:
    if len(sys.argv) < 2:
        log("ERR: file path required")
        return 0
    file_path = Path(sys.argv[1])
    if not file_path.is_file():
        log(f"ERR: file not found: {file_path}")
        return 0

    try:
        text = file_path.read_text(encoding="utf-8", errors="replace")
    except Exception as e:
        log(f"ERR: unable to read file: {e}")
        return 0

    title = extract_title(text)
    raw_section = extract_key_findings(text)
    flattened = flatten(raw_section)
    key_findings = truncate(flattened, MAX_FINDINGS_CHARS)
    authors = get_authors(file_path)
    study_date = get_study_date(file_path)
    product_path = derive_product_path(file_path)
    key_findings_b64 = encode_b64(key_findings)

    log(f"Preview: {key_findings[:PREVIEW_LIMIT]}")

    emit(f"RESEARCH_FILE={file_path.as_posix()}")
    emit(f"RESEARCH_TITLE={title}")
    emit(f"KEY_FINDINGS_B64={key_findings_b64}")
    emit(f"AUTHORS={authors}")
    emit(f"STUDY_DATE={study_date}")
    emit(f"PRODUCT_PATH={product_path}")

    return 0

if __name__ == "__main__":
    try:
        sys.exit(main())
    except SystemExit as e:
        raise e
    except Exception as ex:  # Defensive: never propagate non-zero
        log(f"ERR: unexpected exception: {ex}")
        sys.exit(0)
