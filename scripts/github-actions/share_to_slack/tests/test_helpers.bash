#!/usr/bin/env bash
# test_helpers.bash - minimal assertion helpers (no external bats libs required)
fail() { echo "-- FAIL: $*" >&2; return 1; }
assert_success() { if [ "${status:-0}" -ne 0 ]; then fail "Expected success (status 0) got $status"; fi; }
assert_line() {
  local exact=1 needle
  if [ "$1" = "--partial" ]; then exact=0; shift; fi
  needle="$1"
  while IFS= read -r line; do
    if [ $exact -eq 1 ]; then [ "$line" = "$needle" ] && return 0; else printf '%s' "$line" | grep -Fq "$needle" && return 0; fi
  done <<<"$output"
  if [ $exact -eq 1 ]; then fail "Did not find exact line: $needle"; else fail "Did not find partial match: $needle"; fi
}
# Provide REPO_ROOT for tests needing original fixtures
if [ -z "${REPO_ROOT:-}" ]; then REPO_ROOT="$(cd "${BATS_TEST_DIRNAME}/../../../../" && pwd)"; export REPO_ROOT; fi
