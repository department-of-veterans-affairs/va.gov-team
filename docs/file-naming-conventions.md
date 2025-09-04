# File Naming Conventions for va.gov-team Repository

## 🚨 Why File Naming Matters

**Problem**: Mac users can create files that Windows users can't checkout, causing repository sync issues and preventing team collaboration.

**Solution**: Follow cross-platform file naming conventions to ensure everyone can work with all files.

---

## ❌ Common Problems That Break Windows Checkout

### Reserved Characters (Windows Can't Handle These)
- `< > : " | ? * \`
- **Bad**: `meeting-notes:today.md`, `design>final.pdf`, `user|feedback.docx`
- **Good**: `meeting-notes-today.md`, `design-final.pdf`, `user-feedback.docx`

### Reserved Names (Windows System Files)
- `CON`, `PRN`, `AUX`, `NUL`
- `COM1` through `COM9`
- `LPT1` through `LPT9`
- **Bad**: `con.txt`, `aux.docx`, `COM1.pdf`
- **Good**: `contact.txt`, `auxiliary.docx`, `communication-1.pdf`

### Case Sensitivity Issues
- Mac: `README.md` and `readme.md` are different files
- Windows: They're the same file (causes conflicts)
- **Bad**: Having both `Design.pdf` and `design.pdf`
- **Good**: Use consistent casing like `design-mockup.pdf`

### Trailing Spaces and Dots
- **Bad**: `filename .txt`, `document..pdf`
- **Good**: `filename.txt`, `document.pdf`

---

## ✅ Cross-Platform File Naming Best Practices

### 1. Use Safe Characters Only
```
✅ Allowed: a-z A-Z 0-9 - _ .
❌ Avoid: < > : " | ? * \ / spaces at end
```

### 2. Use Kebab-Case (Recommended)
```
✅ Good: meeting-notes-2024-09-04.md
✅ Good: user-research-findings.pdf
✅ Good: wireframe-homepage-v2.png
```

### 3. Alternative: Snake_Case
```
✅ Good: meeting_notes_2024_09_04.md
✅ Good: user_research_findings.pdf
✅ Good: wireframe_homepage_v2.png
```

### 4. Use Descriptive Names
```
✅ Good: accessibility-audit-checklist.pdf
✅ Good: team-retrospective-q3-2024.md
❌ Bad: doc1.pdf, untitled.md, new-file.docx
```

### 5. Include Dates in ISO Format
```
✅ Good: 2024-09-04-meeting-notes.md
✅ Good: user-testing-results-2024-08-15.pdf
❌ Bad: 9/4/24-notes.md, Aug-15-results.pdf
```

---

## 📁 Directory Naming Guidelines

### Team and Portfolio Directories
```
✅ Good: benefits-portfolio/
✅ Good: digital-experience/
✅ Good: health-care-team/
❌ Bad: Benefits Portfolio/, Digital:Experience/
```

### Product Directories
```
✅ Good: claim-appeal-status/
✅ Good: disability-benefits/
✅ Good: find-va-forms/
❌ Bad: Claim & Appeal Status/, disability_benefits/
```

---

## 🔧 File Type Specific Guidelines

### Documentation Files
```
✅ README.md (standard case)
✅ team-charter.md
✅ product-requirements.md
✅ user-research-plan.md
```

### Design Files
```
✅ wireframe-homepage-desktop.png
✅ mockup-login-flow-v3.sketch
✅ design-system-components.fig
✅ user-journey-map.pdf
```

### Data and Analysis
```
✅ analytics-report-q3-2024.xlsx
✅ user-survey-results.csv
✅ performance-metrics-august.json
```

### Meeting and Process Documents
```
✅ sprint-planning-2024-09-04.md
✅ retrospective-team-alpha.md
✅ stakeholder-feedback-summary.docx
```

---

## 🚫 Files to Avoid Adding

### Temporary Files
- `.DS_Store` (Mac system files)
- `Thumbs.db` (Windows thumbnail cache)
- `*.tmp`, `*.temp`
- `~$*` (Office temporary files)

### IDE and Editor Files
- `.vscode/`, `.idea/`
- `*.swp`, `*.swo` (Vim files)
- `.sublime-*`

### Build and Cache Files
- `node_modules/`
- `.cache/`, `dist/`, `build/`
- `*.log`

---

## 🔍 How to Check Your Files

### Before Committing (Mac Users)
1. **Check for reserved characters**: Look for `< > : " | ? * \` in filenames
2. **Check for reserved names**: Avoid `CON`, `PRN`, `AUX`, etc.
3. **Check for trailing spaces**: Filenames shouldn't end with spaces or dots
4. **Check case consistency**: Don't have files that differ only by case

### Before Committing (All Users)
```bash
# Check for problematic filenames
find . -name "*[<>:\"|?*]*" -o -name "*. " -o -name "* "
```

### In GitHub Desktop
- **Look for warning icons** next to files
- **Check commit messages** for any filename warnings
- **Test checkout** on a Windows machine if possible

---

## 🆘 Fixing Existing Problem Files

### If You Created a Problem File
1. **Rename the file** to follow conventions
2. **Commit the rename** with a clear message
3. **Let the team know** about the filename change

### If You Can't Checkout Due to Bad Filenames
1. **Ask the file creator** to rename it
2. **Use GitHub web interface** to download individual files if needed
3. **Clone to a different location** and copy files manually (temporary workaround)

### GitHub Desktop Rename Process
1. **Right-click the file** in your repository folder
2. **Rename** following the conventions above
3. **GitHub Desktop will detect the change**
4. **Commit** with message like "Rename file for cross-platform compatibility"

---

## 🎯 Quick Reference Checklist

Before adding any file, check:

- [ ] **No reserved characters** (`< > : " | ? * \`)
- [ ] **No reserved names** (`CON`, `PRN`, `AUX`, etc.)
- [ ] **Consistent case** (no files differing only by case)
- [ ] **No trailing spaces or dots**
- [ ] **Descriptive filename** with context
- [ ] **Kebab-case or snake_case** consistently
- [ ] **ISO date format** if date is included (YYYY-MM-DD)

---

## 📚 Additional Resources

- [GitHub Desktop Documentation](https://docs.github.com/en/desktop)
- [Windows Reserved Filenames](https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file)
- [Cross-Platform Development Best Practices](https://docs.github.com/en/repositories/working-with-files/managing-files)

---

*Following these conventions ensures that all team members, regardless of their operating system, can successfully work with repository files.*
