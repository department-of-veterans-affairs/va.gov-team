# Git LFS Guide

## What is Git LFS?

Git LFS (Large File Storage) is a system that helps manage large files (like PDFs, videos, presentations, etc.) in GitHub repositories. Instead of storing the full file in the repository, it stores a small pointer file and keeps the actual large file in a separate storage system.

## Why Do I Need to Know About This?

If you're working with the va.gov-team repository and encounter:

- Missing files that show as small text files with strange content
- Files that won't open properly
- Error messages about LFS when trying to download files

You likely need to properly download the LFS files.

---

## 🖥️ GitHub Desktop (Recommended)

GitHub Desktop automatically handles Git LFS files, making it the easiest option for most users.

### Setting Up GitHub Desktop with LFS

1. **Download GitHub Desktop** from [desktop.github.com](https://desktop.github.com/) or on your GFE via a YourIT ticket.
2. **Clone the repository** through GitHub Desktop (not through browser download)
3. **LFS files will download automatically** when you clone or pull changes

### If You're Missing LFS Files in GitHub Desktop

1. **Open GitHub Desktop**
2. **Select your va.gov-team repository**
3. **Click "Repository" menu** → **"Pull"** (or press Ctrl/Cmd + Shift + P)
4. **Wait for the download to complete** - LFS files will be downloaded automatically

### Adding Large Files with GitHub Desktop

1. **Drag and drop your large file** into the repository folder on your computer
2. **Open GitHub Desktop** - it will detect the new file
3. **GitHub Desktop will automatically use LFS** for files larger than 100MB
4. **Add a commit message** and click **"Commit to [branch-name]"**
5. **Click "Push origin"** to upload to GitHub

---

## 🌐 GitHub Web Interface

The GitHub web interface has limitations with LFS files, but here's what you can do:

### Downloading Individual LFS Files

1. **Navigate to the file** in the GitHub web interface
2. **Click "Download"** button - this will download the actual file (not the LFS pointer)
3. **If the file appears as text** with content like `version https://git-lfs.github.com/spec/v1`, this means you need to use GitHub Desktop or command line

### Uploading Large Files via Web Interface

⚠️ **Important**: The GitHub web interface does **NOT** automatically use LFS for large files.

#### For files under 25MB

1. **Navigate to the folder** where you want to add the file
2. **Click "Add file"** → **"Upload files"**
3. **Drag and drop or select your file**
4. **Add a commit message** and commit

#### For files over 25MB

- **Use GitHub Desktop instead** - the web interface cannot upload files larger than 25MB
- GitHub Desktop will automatically handle LFS for these large files

---

## 🔧 VS Code with GitHub Extension

If you're using VS Code, you can manage LFS files through the interface:

### Setup

1. **Install the GitHub extension** for VS Code
2. **Clone the repository** through VS Code (Ctrl/Cmd + Shift + P → "Git: Clone")
3. **LFS files will be handled automatically**

### Downloading Missing LFS Files

1. **Open the Source Control panel** (Ctrl/Cmd + Shift + G)
2. **Click the "..." menu** → **"Pull"**
3. **LFS files will download automatically**

---

## 📱 GitHub Mobile App

The GitHub mobile app has very limited support for LFS files:

- **Can view LFS file information** but not download actual content
- **Cannot upload large files**
- **Use GitHub Desktop or web interface instead** for LFS file management

---

## 🆘 Troubleshooting Common Issues

### "File appears as text with weird content"

**Problem**: You're seeing LFS pointer content instead of the actual file
**Solution**:
    - Use GitHub Desktop to clone/pull the repository
    - Or download the individual file using the "Download" button on GitHub.com

### "File won't upload - too large"

**Problem**: File is larger than 25MB and you're using the web interface
**Solution**:
    - Use GitHub Desktop to add and commit the file
    - GitHub Desktop will automatically use LFS for large files

### "Repository download is missing files"

**Problem**: You downloaded a ZIP file from GitHub instead of cloning
**Solution**:
    - Use GitHub Desktop to properly clone the repository
    - ZIP downloads from GitHub.com don't include LFS files

### "Changes not showing up for teammates"

**Problem**: Large files aren't syncing properly
**Solution**:
    - Make sure you're using GitHub Desktop or proper Git tools
    - The web interface doesn't handle LFS uploads correctly

### "Windows users can't checkout repository"

**Problem**: Files with Windows-incompatible names (like `design:final.pdf` or `meeting|notes.docx`)
**Solution**:
    - Rename files to use only safe characters: `a-z A-Z 0-9 - _ .`
    - See our [File Naming Conventions Guide](./file-naming-conventions.md) for detailed guidelines
    - Use kebab-case like `design-final.pdf` or `meeting-notes.docx`

---

## 🎯 Best Practices

### ✅ Do

- **Use GitHub Desktop** for all repository operations when possible
- **Clone repositories** instead of downloading ZIP files
- **Let GitHub Desktop handle LFS automatically** for files over 100MB
- **Use descriptive commit messages** when adding large files
- **Follow file naming conventions** to ensure cross-platform compatibility (see [File Naming Conventions](./file-naming-conventions.md))

### ❌ Don't

- **Upload large files through the web interface** (over 25MB won't work, under 25MB won't use LFS)
- **Download repository as ZIP** (you'll miss LFS files)
- **Ignore file size warnings** in GitHub Desktop
- **Use Windows-incompatible filenames** (characters like `< > : " | ? * \` cause checkout issues)

---

## 🆘 When All Else Fails

If you're still having issues with LFS files:

1. **Ask a technical team member** to help with command line: `git lfs pull`
2. **Delete and re-clone the repository** using GitHub Desktop
3. **Check with your team's technical lead** for repository-specific instructions

---

## 📚 Additional Resources

- [File Naming Conventions](./file-naming-conventions.md) - **Essential for cross-platform compatibility**
- [GitHub Desktop Documentation](https://docs.github.com/en/desktop)
- [GitHub LFS Documentation](https://docs.github.com/en/repositories/working-with-files/managing-large-files)
- [VA.gov Team Repository Guidelines](./repo-guidelines.md)
