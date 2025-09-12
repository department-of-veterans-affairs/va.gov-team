#!/usr/bin/env bats
load "./test_helpers.bash"

setup() {
  export SCRIPT_DIR="$(cd "${BATS_TEST_DIRNAME}/.." && pwd)"
  export SUCCESS_SCRIPT="$SCRIPT_DIR/build_slack_payload_success.sh"
  export ERROR_SCRIPT="$SCRIPT_DIR/build_slack_payload_error.sh"
}

@test "success payload contains expected fields and channel" {
  KEY_TXT="Preview line one. Second line."; KEY_B64=$(printf '%s' "$KEY_TXT" | base64 | tr -d '\n')
  run env SLACK_CHANNEL_ID=C123 RESEARCH_FILE=products/test-product/sample-findings.md \
      RESEARCH_TITLE="Sample Findings" KEY_FINDINGS_B64="$KEY_B64" PRODUCT_PATH="test-product/sample-findings.md" \
      STUDY_DATE=2025-09-01 AUTHORS="Researcher A" GITHUB_REPOSITORY=owner/repo GITHUB_SHA=deadbeef \
      EVENT_NAME=workflow_dispatch \
      bash "$SUCCESS_SCRIPT"
  echo "$output" >&2
  assert_success
  assert_line --partial 'payload='
  JSON=$(echo "$output" | sed -n 's/^payload=//p')
  if command -v jq >/dev/null 2>&1; then
    CHANNEL=$(echo "$JSON" | jq -r '.channel // empty')
    [ "$CHANNEL" = "C123" ] || fail "Channel mismatch: $CHANNEL"
    echo "$JSON" | jq -e '.blocks | length > 0' >/dev/null || fail "Blocks missing"
    echo "$JSON" | jq -r '.text' | grep -Fq "New Research Findings:" || fail "Primary text missing"
  else
    echo "$JSON" | grep -Fq "Sample Findings" || fail "Fallback JSON missing title"
  fi
}

@test "error payload includes provided error message" {
  run env SLACK_CHANNEL_ID=C555 ERROR_MESSAGE="File not found: bad.md" bash "$ERROR_SCRIPT"
  echo "$output" >&2
  assert_success
  JSON=$(echo "$output" | sed -n 's/^payload=//p')
  if command -v jq >/dev/null 2>&1; then
    echo "$JSON" | jq -r '.text' | grep -Fq "Research File Not Found" || fail "Missing error header"
  else
    echo "$JSON" | grep -Fq "File not found" || fail "Fallback JSON missing error"
  fi
}
