#!/usr/bin/env bats
load "./test_helpers.bash"

setup() {
  export SCRIPT_DIR="$(cd "${BATS_TEST_DIRNAME}/.." && pwd)"
  export PROCESS_SCRIPT="$SCRIPT_DIR/process_research_file.sh"
  export FIXTURE_DIR="$BATS_TEST_DIRNAME/fixtures_process"
  mkdir -p "$FIXTURE_DIR/products/sample-product"
  cat > "$FIXTURE_DIR/products/sample-product/custom-findings.md" <<'EOF'
# Improving Application Flow

Date: 2025-09-01

## Key Findings
Users experience confusion around required supporting document types.
Clear progress indicators increase completion confidence.
Terminology inconsistencies cause hesitation.

## Methods
Moderated sessions.
EOF
}

teardown() { rm -rf "$FIXTURE_DIR"; }

@test "process extracts expected metadata and key findings" {
  pushd "$FIXTURE_DIR" >/dev/null || true
  run bash "$PROCESS_SCRIPT" products/sample-product/custom-findings.md
  popd >/dev/null || true
  echo "$output" >&2
  assert_success
  assert_line --partial "RESEARCH_TITLE=Improving Application Flow"
  assert_line --partial "RESEARCH_FILE=products/sample-product/custom-findings.md"
  assert_line --partial "AUTHORS=Unknown"
  assert_line --partial "PRODUCT_PATH=sample-product/custom-findings.md"
  KF_B64=$(echo "$output" | grep '^KEY_FINDINGS_B64=' | cut -d'=' -f2-)
  KF=$(printf '%s' "$KF_B64" | { base64 -d 2>/dev/null || base64 --decode 2>/dev/null || cat; })
  [[ "$KF" == *"confusion around required supporting document"* ]] || fail "Key findings content missing expected phrase"
}
