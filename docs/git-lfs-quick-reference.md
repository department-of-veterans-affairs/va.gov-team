# Git LFS Quick Reference for va.gov-team

## 🚨 Having LFS Issues? Here's What to Do:

### Option 1: GitHub Desktop (Easiest)

1. **Download GitHub Desktop** from [desktop.github.com](https://desktop.github.com/)
2. **Clone the va.gov-team repository** through GitHub Desktop
3. **Pull changes** via Repository menu → Pull
4. ✅ **LFS files download automatically**

### Option 2: Command Line (If You Know It)

```bash
git lfs pull
```

### Option 3: Re-download Individual Files

1. **Go to the file on GitHub.com**
2. **Click the "Download" button** (not "Raw")
3. ✅ **Gets the actual file, not the LFS pointer**

---

## 📤 Uploading Large Files?

### ✅ Use GitHub Desktop

- **Drag files into your repository folder**
- **GitHub Desktop automatically uses LFS** for files >100MB
- **Commit and push** normally

### ❌ Don't Use GitHub Web Interface

- **Files >25MB won't upload**
- **Files <25MB won't use LFS** (causes problems later)

---

## 🔍 How to Tell if You Have LFS Issues

**You might see:**

- Files that show as text starting with `version https://git-lfs.github.com/...`
- PDF/video files that won't open properly
- Files much smaller than expected

**Solution:** Use GitHub Desktop or the command line `git lfs pull`

---

## 🚨 Can't Checkout Repository? (Windows Users)

**Common problem:** Mac users create files with names Windows can't handle

**Quick fixes:**

- Ask file creator to rename files (remove `< > : " | ? * \` characters)
- Use kebab-case: `meeting-notes.pdf` instead of `meeting:notes.pdf`
- **See full guide:** [File Naming Conventions](./file-naming-conventions.md)

---

## 📞 Need Help?

1. **Try GitHub Desktop first** (handles everything automatically)
2. **Ask a technical team member** to run `git lfs pull` for you
3. **Check the full guide:** [Git LFS Guide](./git-lfs-guide.md)

---

*Quick tip: Always clone repositories through GitHub Desktop instead of downloading ZIP files from GitHub.com*
