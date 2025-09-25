#!/usr/bin/env python3
"""build_slack_payload_success.py
Builds a Slack message payload describing research findings.
Emits: payload=JSON
Mirrors the original Bash implementation.
"""
from __future__ import annotations
import os
import sys
import json
import base64

GITHUB_OUTPUT = os.environ.get("GITHUB_OUTPUT")

def emit(line: str) -> None:
    print(line)
    if GITHUB_OUTPUT:
        try:
            with open(GITHUB_OUTPUT, "a", encoding="utf-8") as f:
                f.write(line + "\n")
        except Exception:
            pass

def b64_decode(val: str) -> str:
    if not val:
        return ""
    try:
        return base64.b64decode(val).decode("utf-8", "replace")
    except Exception:
        return ""

def main() -> int:
    channel = os.environ.get("SLACK_CHANNEL_ID")
    title = os.environ.get("RESEARCH_TITLE", "Research Findings")
    product_path = os.environ.get("PRODUCT_PATH", "unknown")
    research_file = os.environ.get("RESEARCH_FILE", "")
    repo = os.environ.get("GITHUB_REPOSITORY", "department-of-veterans-affairs/va.gov-team")
    sha = os.environ.get("GITHUB_SHA", "main")
    event_name = os.environ.get("EVENT_NAME", "")

    # Get author and date from the research file
    import pathlib
    import pwd
    file_path = pathlib.Path(research_file)
    try:
        stat = file_path.stat()
        author = pwd.getpwuid(stat.st_uid).pw_name
        date = stat.st_mtime
        import datetime
        study_date = datetime.datetime.fromtimestamp(date).strftime('%Y-%m-%d')
    except Exception:
        author = "Unknown"
        study_date = "unknown"

    # Extract key findings section from the research file
    findings = ""
    try:
        with open(research_file, encoding="utf-8") as f:
            lines = f.readlines()
        in_section = False
        for line in lines:
            if line.strip().lower().startswith("# **key findings".lower()):
                in_section = True
                continue
            if in_section and line.strip().startswith("#"):
                break
            if in_section:
                findings += line
        findings = findings.strip() or 'See full report for details'
    except Exception:
        findings = 'See full report for details'

    url = f"https://github.com/{repo}/blob/{sha}/{research_file}" if research_file else f"https://github.com/{repo}/tree/{sha}"
    context_msg = "🧪 _Test notification - not tracked as shared_" if event_name == 'workflow_dispatch' else "✨ _Shared after waiting period_"

    if not channel:
        payload = {"error": "SLACK_CHANNEL_ID missing", "text": "Missing channel", "channel": channel or "unknown"}
    else:
        blocks = [
            {"type": "header", "text": {"type": "plain_text", "text": "📊 New Research Findings Available", "emoji": True}},
            {"type": "section", "fields": [
                {"type": "mrkdwn", "text": f"*Study:*\n{title}"},
                {"type": "mrkdwn", "text": f"*Product Area:*\n{product_path}"},
                {"type": "mrkdwn", "text": f"*Date:*\n{study_date}"},
                {"type": "mrkdwn", "text": f"*Author:*\n{author}"},
            ]},
            {"type": "divider"},
            {"type": "section", "text": {"type": "mrkdwn", "text": f"*Key Findings:*\n{findings}"}},
            {"type": "divider"},
            {"type": "actions", "elements": [
                {"type": "button", "text": {"type": "plain_text", "text": "📖 Read Full Report", "emoji": True}, "url": url, "style": "primary"}
            ]},
            {"type": "context", "elements": [{"type": "mrkdwn", "text": context_msg}]}
        ]
        payload = {"channel": channel, "text": f"New Research Findings: {title}", "blocks": blocks}

    emit("payload=" + json.dumps(payload, separators=(",", ":")))
    return 0

if __name__ == '__main__':
    try:
        sys.exit(main())
    except SystemExit:
        raise
    except Exception as ex:
        emit("payload=" + json.dumps({"error": f"Unexpected exception: {ex}"}))
        sys.exit(0)
