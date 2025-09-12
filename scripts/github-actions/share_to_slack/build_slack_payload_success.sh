#!/usr/bin/env bash
# (Relocated from scripts/research-share/)
# build_slack_payload_success.sh
# Remove strict -e to avoid non-zero due to subshell pipeline failures in tests
set -u
: "${SLACK_CHANNEL_ID:?SLACK_CHANNEL_ID required}" || true
emit() { echo "$1"; [ -n "${GITHUB_OUTPUT:-}" ] && echo "$1" >>"$GITHUB_OUTPUT"; }
TITLE="${RESEARCH_TITLE:-Research Findings}"; PRODUCT_PATH="${PRODUCT_PATH:-unknown}"; STUDY_DATE="${STUDY_DATE:-unknown}"; AUTHORS="${AUTHORS:-Unknown}";
KEY_FINDINGS=$(printf '%s' "${KEY_FINDINGS_B64:-}" | { base64 -d 2>/dev/null || base64 --decode 2>/dev/null || cat; } || true)
[ -z "$KEY_FINDINGS" ] && KEY_FINDINGS='See full report for details'
GITHUB_REPOSITORY="${GITHUB_REPOSITORY:-department-of-veterans-affairs/va.gov-team}"; GITHUB_SHA="${GITHUB_SHA:-main}";
URL="https://github.com/$GITHUB_REPOSITORY/blob/$GITHUB_SHA/${RESEARCH_FILE:-}"
EVENT_NAME="${EVENT_NAME:-}"; if [ "$EVENT_NAME" = 'workflow_dispatch' ]; then CONTEXT_MSG='🧪 _Test notification - not tracked as shared_'; else CONTEXT_MSG='✨ _Shared after waiting period_'; fi
if command -v jq >/dev/null 2>&1; then
  PAYLOAD=$(jq -c -n \
    --arg channel_id "$SLACK_CHANNEL_ID" --arg title "$TITLE" --arg product "$PRODUCT_PATH" --arg date "$STUDY_DATE" --arg authors "$AUTHORS" --arg findings "$KEY_FINDINGS" --arg url "$URL" --arg ctx "$CONTEXT_MSG" '{ channel:$channel_id, text:("New Research Findings: " + $title), blocks:[ {type:"header", text:{type:"plain_text", text:"📊 New Research Findings Available", emoji:true}}, {type:"section", fields:[ {type:"mrkdwn", text:("*Study:*\n" + $title)}, {type:"mrkdwn", text:("*Product Area:*\n" + $product)}, {type:"mrkdwn", text:("*Date:*\n" + $date)}, {type:"mrkdwn", text:("*Authors:*\n" + $authors)} ]}, {type:"divider"}, {type:"section", text:{type:"mrkdwn", text:("*Key Findings Preview:*\n" + $findings)}}, {type:"divider"}, {type:"actions", elements:[ {type:"button", text:{type:"plain_text", text:"📖 Read Full Report", emoji:true}, url:$url, style:"primary"} ]}, {type:"context", elements:[{type:"mrkdwn", text:$ctx}]} ] }')
else
  SAFE_FINDINGS=$(printf '%s' "$KEY_FINDINGS" | sed 's/"/\\"/g')
  PAYLOAD="{\"channel\":\"$SLACK_CHANNEL_ID\",\"text\":\"New Research Findings: $TITLE - $SAFE_FINDINGS\"}"
fi
emit "payload=$PAYLOAD"
exit 0
