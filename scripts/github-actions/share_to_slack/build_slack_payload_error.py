#!/usr/bin/env python3
"""build_slack_payload_error.py
Emits a Slack payload JSON for an error condition.
Output: payload=JSON
Mirrors original Bash behavior.
"""
from __future__ import annotations
import os
import json
import sys

GITHUB_OUTPUT = os.environ.get("GITHUB_OUTPUT")

def emit(line: str) -> None:
    print(line)
    if GITHUB_OUTPUT:
        try:
            with open(GITHUB_OUTPUT, "a", encoding="utf-8") as f:
                f.write(line + "\n")
        except Exception:
            pass

def main() -> int:
    channel = os.environ.get("SLACK_CHANNEL_ID")
    error_message = os.environ.get("ERROR_MESSAGE")
    if not error_message:
        error_message = "Unspecified error"
    if not channel:
        payload = {"channel": channel or "unknown", "text": "Research File Not Found", "error": "Missing SLACK_CHANNEL_ID", "detail": error_message}
    else:
        blocks = [
            {"type": "section", "text": {"type": "mrkdwn", "text": f"❌ *Could not process research findings*\n\n{error_message}\n\nPlease verify the file path or availability."}}
        ]
        payload = {"channel": channel, "text": "Research File Not Found", "blocks": blocks}
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
