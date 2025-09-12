#!/usr/bin/env bats
load "./test_helpers.bash"

setup() {
  export SCRIPT_DIR="$(cd "${BATS_TEST_DIRNAME}/.." && pwd)"
  export FIND_SCRIPT="$SCRIPT_DIR/find_eligible_research_file.sh"
  export FIXTURE_DIR="$BATS_TEST_DIRNAME/fixtures"
  mkdir -p "$FIXTURE_DIR/products/test-product"
  cp "$REPO_ROOT/products/test-product/sample-findings.md" "$FIXTURE_DIR/products/test-product/sample-findings.md"
}

teardown() { rm -rf "$FIXTURE_DIR"; }

@test "manual explicit path succeeds when file exists" {
  run env RESEARCH_FILE_PATH="products/test-product/sample-findings.md" bash "$FIND_SCRIPT"
  echo "$output" >&2
  assert_success
  assert_line --partial "eligible_file=products/test-product/sample-findings.md"
  assert_line "skip=false"
}

@test "manual explicit path fails when file missing" {
  run env RESEARCH_FILE_PATH="products/test-product/missing-findings.md" bash "$FIND_SCRIPT"
  assert_success
  assert_line "skip=true"
  assert_line --partial "File not found"
}

@test "discovery picks eligible file when age gating ignored" {
  pushd "$FIXTURE_DIR" >/dev/null || true
  run env IGNORE_TIME_DELAY=true NOW_EPOCH=2000000000 bash "$FIND_SCRIPT"
  popd >/dev/null || true
  assert_success
  assert_line --partial "eligible_file=products/test-product/sample-findings.md"
  assert_line "skip=false"
}
