#!/usr/bin/env bash
# (Relocated from scripts/research-share/)
set -u
# process_research_file.sh <markdown_file>
# See original version for full documentation.
FILE="${1:-}"; [ -z "$FILE" ] && { echo "ERR: file path required" >&2; exit 0; } ; [ ! -f "$FILE" ] && { echo "ERR: file not found: $FILE" >&2; exit 0; }
MAX_FINDINGS_CHARS="${MAX_FINDINGS_CHARS:-2000}"; PREVIEW_LIMIT="${PREVIEW_LIMIT:-200}"; KEY_SECTION_CANDIDATES="${KEY_SECTION_CANDIDATES:-Key findings,Key Findings,Summary,Findings,Results,Insights}"
emit(){ echo "$1"; [ -n "${GITHUB_OUTPUT:-}" ] && echo "$1" >>"$GITHUB_OUTPUT"; [ -n "${GITHUB_ENV:-}" ] && echo "$1" >>"$GITHUB_ENV"; }
if TITLE_LINE=$(grep -m1 '^# ' "$FILE" 2>/dev/null); then TITLE=${TITLE_LINE#\# };
elif TITLE_LINE=$(grep -m1 '^## ' "$FILE" 2>/dev/null); then TITLE=${TITLE_LINE#\#\# }; else TITLE='Research Findings'; fi
KEY_FINDINGS=""; IFS=',' read -r -a SECTIONS <<<"$KEY_SECTION_CANDIDATES"; for pattern in "${SECTIONS[@]}"; do if grep -qi "^##.*$pattern" "$FILE"; then KEY_FINDINGS=$(awk -v pattern="$pattern" 'BEGIN{IGNORECASE=1;f=0;c=0} tolower($0) ~ /^##/ && f==1 {exit} f==1 {print; if(++c>=20) exit} tolower($0) ~ /^##/ && tolower($0) ~ tolower(pattern) {f=1}' "$FILE"); [ -n "$KEY_FINDINGS" ] && break; fi; done
[ -z "$KEY_FINDINGS" ] && KEY_FINDINGS=$(awk 'NR>3 && NF>0 {print; if(++c>=10) exit}' "$FILE")
KEY_FINDINGS=$(printf '%s' "$KEY_FINDINGS" | sed '/^$/d' | tr '\n' ' ' | sed 's/  */ /g; s/^ //; s/ $//')
[ ${#KEY_FINDINGS} -gt "$MAX_FINDINGS_CHARS" ] && KEY_FINDINGS="${KEY_FINDINGS:0:$((MAX_FINDINGS_CHARS-3))}..."
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then AUTHORS=$(git log --format='%an' -- "$FILE" 2>/dev/null | sort -u | head -3 | paste -sd ', ' - || true); else AUTHORS=""; fi; [ -z "$AUTHORS" ] && AUTHORS="Unknown"
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then STUDY_DATE=$(git log -1 --format='%ai' -- "$FILE" 2>/dev/null | cut -d' ' -f1 || true); else STUDY_DATE=""; fi
if [ -z "$STUDY_DATE" ]; then
  if stat -c %Y "$FILE" >/dev/null 2>&1; then EPOCH=$(stat -c %Y "$FILE"); elif stat -f %m "$FILE" >/dev/null 2>&1; then EPOCH=$(stat -f %m "$FILE"); else EPOCH=$(date +%s); fi
  if date -d @${EPOCH} +%Y-%m-%d >/dev/null 2>&1; then
    STUDY_DATE=$(date -d @${EPOCH} +%Y-%m-%d)
  else
    STUDY_DATE=$(date -r ${EPOCH} +%Y-%m-%d 2>/dev/null || date +%Y-%m-%d)
  fi
fi
PRODUCT_PATH=$(echo "$FILE" | cut -d'/' -f2-3)
if base64 --version >/dev/null 2>&1; then KEY_FINDINGS_B64=$(printf '%s' "$KEY_FINDINGS" | base64 -w0 2>/dev/null || printf '%s' "$KEY_FINDINGS" | base64 | tr -d '\n'); else KEY_FINDINGS_B64=$(printf '%s' "$KEY_FINDINGS" | base64 | tr -d '\n'); fi
printf 'Preview: %s\n' "${KEY_FINDINGS:0:$PREVIEW_LIMIT}" >&2
emit "RESEARCH_FILE=$FILE"; emit "RESEARCH_TITLE=$TITLE"; emit "KEY_FINDINGS_B64=$KEY_FINDINGS_B64"; emit "AUTHORS=$AUTHORS"; emit "STUDY_DATE=$STUDY_DATE"; emit "PRODUCT_PATH=$PRODUCT_PATH"
exit 0
