#!/usr/bin/env bash
# (Relocated from scripts/research-share/)
# find_eligible_research_file.sh
# Adjusted to avoid set -e so that grep non-match does not terminate script.
set -u
# Outputs: eligible_file= path, skip=true|false, error_message=...
# See original comments for full description.
RESEARCH_FILE_PATH="${RESEARCH_FILE_PATH:-}"; export RESEARCH_FILE_PATH
IGNORE_TIME_DELAY="${IGNORE_TIME_DELAY:-false}"; export IGNORE_TIME_DELAY
WAIT_DAYS="${WAIT_DAYS:-3}"; export WAIT_DAYS
SHARED_FILES_LOG="${SHARED_FILES_LOG:-.github/workflows/shared-research-files.log}"; export SHARED_FILES_LOG
SEARCH_GLOB="${SEARCH_GLOB:-products/**/*.md}"; export SEARCH_GLOB
NOW_EPOCH="${NOW_EPOCH:-}"; export NOW_EPOCH
mkdir -p "$(dirname "$SHARED_FILES_LOG")" && touch "$SHARED_FILES_LOG"
emit() { echo "$1"; if [ -n "${GITHUB_OUTPUT:-}" ]; then echo "$1" >>"$GITHUB_OUTPUT"; fi; }
finish() { exit 0; }
match_target() { echo "$1" | grep -Eiq '(findings|report|insights)(\.md)$'; }
if [ -n "$RESEARCH_FILE_PATH" ]; then
  if [ -f "$RESEARCH_FILE_PATH" ]; then
    emit "eligible_file=$RESEARCH_FILE_PATH"; emit "skip=false"; finish
  else
    emit "skip=true"; emit "error_message=File not found: $RESEARCH_FILE_PATH"; finish
  fi
fi
if [ -z "$NOW_EPOCH" ]; then NOW_EPOCH=$(date +%s); fi
FIRST_FILE=""
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  FILE_LIST_CMD=(git ls-files $SEARCH_GLOB)
else
  # shellcheck disable=SC2206
  FILE_LIST_CMD=(bash -c "shopt -s globstar nullglob; for f in $SEARCH_GLOB; do echo \"$f\"; done")
fi
while IFS= read -r f; do
  [ -f "$f" ] || continue
  match_target "$f" || continue
  if grep -Fxq "$f" "$SHARED_FILES_LOG" 2>/dev/null; then
    continue
  fi
  if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    COMMIT_EPOCH=$(git log -1 --format=%ct -- "$f" 2>/dev/null || echo 0)
  else
    COMMIT_EPOCH=0
  fi
  if [ "$COMMIT_EPOCH" -eq 0 ]; then
    if stat -c %Y "$f" >/dev/null 2>&1; then COMMIT_EPOCH=$(stat -c %Y "$f"); else COMMIT_EPOCH=$(stat -f %m "$f" 2>/dev/null || echo 0); fi
  fi
  [ "$COMMIT_EPOCH" -eq 0 ] && continue
  AGE_DAYS=$(( (NOW_EPOCH - COMMIT_EPOCH) / 86400 ))
  if [ "$IGNORE_TIME_DELAY" != "true" ] && [ "$AGE_DAYS" -lt "$WAIT_DAYS" ]; then continue; fi
  FIRST_FILE="$f"; break
done < <("${FILE_LIST_CMD[@]}")

# Fallback: if no file selected and possibly due to globstar unsupported, use find
if [ -z "$FIRST_FILE" ] && [ -d products ]; then
  while IFS= read -r f; do
    [ -f "$f" ] || continue
    grep -Fxq "$f" "$SHARED_FILES_LOG" 2>/dev/null && continue
    if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
      COMMIT_EPOCH=$(git log -1 --format=%ct -- "$f" 2>/dev/null || echo 0)
    else
      COMMIT_EPOCH=0
    fi
    if [ "$COMMIT_EPOCH" -eq 0 ]; then
      if stat -c %Y "$f" >/dev/null 2>&1; then COMMIT_EPOCH=$(stat -c %Y "$f"); else COMMIT_EPOCH=$(stat -f %m "$f" 2>/dev/null || echo 0); fi
    fi
    [ "$COMMIT_EPOCH" -eq 0 ] && continue
    AGE_DAYS=$(( (NOW_EPOCH - COMMIT_EPOCH) / 86400 ))
    if [ "$IGNORE_TIME_DELAY" != "true" ] && [ "$AGE_DAYS" -lt "$WAIT_DAYS" ]; then continue; fi
    FIRST_FILE="$f"; break
  done < <(find products -type f \( -iname '*findings.md' -o -iname '*report.md' -o -iname '*insights.md' \) 2>/dev/null | sort)
fi

if [ -n "$FIRST_FILE" ]; then
  emit "eligible_file=$FIRST_FILE"; emit "skip=false"; finish
else
  emit "skip=true"; emit "error_message=No eligible files found"; finish
fi
