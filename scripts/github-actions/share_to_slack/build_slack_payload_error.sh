#!/usr/bin/env bash
# (Relocated from scripts/research-share/)
# build_slack_payload_error.sh
set -u
: "${SLACK_CHANNEL_ID:?SLACK_CHANNEL_ID required}" || true
: "${ERROR_MESSAGE:?ERROR_MESSAGE required}" || true
emit() { echo "$1"; [ -n "${GITHUB_OUTPUT:-}" ] && echo "$1" >>"$GITHUB_OUTPUT"; }
if command -v jq >/dev/null 2>&1; then
  PAYLOAD=$(jq -c -n --arg channel_id "$SLACK_CHANNEL_ID" --arg err "$ERROR_MESSAGE" '{ channel:$channel_id, text:"Research File Not Found", blocks:[ {type:"section", text:{type:"mrkdwn", text:("❌ *Could not process research findings*\n\n" + $err + "\n\nPlease verify the file path or availability.")}} ] }')
else
  SAFE_ERR=$(printf '%s' "$ERROR_MESSAGE" | sed 's/"/\\"/g')
  PAYLOAD="{\"channel\":\"$SLACK_CHANNEL_ID\",\"text\":\"Research File Not Found: $SAFE_ERR\"}"
fi
emit "payload=$PAYLOAD"
exit 0
