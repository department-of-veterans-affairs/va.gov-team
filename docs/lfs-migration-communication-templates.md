# LFS Migration Communication Templates

## Slack Announcement (Copy/Paste Ready)

```
🚀 **Repository Performance Improvement Complete!**

We've successfully migrated large files to Git LFS, making our repository much faster for everyone! 🎉

**✅ Good news:**
- Repository clones are now ~2.5 GB smaller
- Much faster downloads for new team members
- Better handling of large files (PDFs, videos, documents)

**🔧 If you have an existing clone:**
You may see some "Invalid OID" warnings from `git lfs pull` - these are expected from the migration process and won't affect your work. 

**Quick fixes if needed:**
1. Try a fresh clone (it's much faster now!)
2. Or run: `rm -rf .git/lfs && git lfs install && git lfs pull`
3. See troubleshooting guide: `docs/lfs-migration-notice.md`

**For new team members:** Everything should just work seamlessly!

Questions? Check #platform-support or see our LFS guides in the docs/ folder.
```

## Email Template

**Subject:** Repository Performance Upgrade - Git LFS Migration Complete

Hi team,

We've completed a major performance improvement to our shared repository! Large files (documents, videos, design files) are now managed through Git LFS, which provides these benefits:

**Immediate Benefits:**
- Repository downloads are now significantly smaller (~2.5 GB reduction)
- Faster clone times for new team members
- More efficient handling of large binary files
- Reduced bandwidth usage for everyone

**What You Might Experience:**
If you have an existing repository clone, you may encounter some temporary issues related to the migration:
- "Invalid OID" warnings during LFS operations (these are harmless)
- Files appearing as "modified" when you didn't change them

**Recommended Action:**
For the best experience, consider doing a fresh clone of the repository. It will be much faster than before and avoid any migration artifacts.

**Troubleshooting Resources:**
- Quick reference: `docs/git-lfs-quick-reference.md`
- Detailed guide: `docs/lfs-migration-notice.md`
- Team support: #platform-support channel

This improvement will benefit everyone's daily workflow. Thanks for your patience during the transition!

Best regards,
[Your Name]

## Teams Message

```
📢 **Repository Performance Update**

✅ **Completed:** Git LFS migration for better performance
🎯 **Result:** Repository downloads now ~2.5 GB smaller & much faster

**For existing users:** You may see some LFS warnings - these are expected and harmless
**For new users:** Everything should work seamlessly and much faster

**Need help?** See `docs/lfs-migration-notice.md` or ask in #platform-support
```

## GitHub Issue Template

```markdown
# Post-LFS Migration Support

If you're experiencing issues after the LFS migration, this template will help us assist you.

## What's happening?
- [ ] "Invalid OID" errors during `git lfs pull`
- [ ] Files showing as modified when I didn't change them  
- [ ] Large files appear as small text files
- [ ] Repository clone/pull is slower than expected
- [ ] Other: ___________

## Quick fixes to try first:
1. **Fresh clone** (recommended - much faster now):
   ```bash
   git clone https://github.com/department-of-veterans-affairs/va.gov-team.git
   ```

2. **Reset LFS cache**:
   ```bash
   rm -rf .git/lfs && git lfs install && git lfs pull
   ```

3. **Force checkout specific file**:
   ```bash
   git checkout HEAD -- "path/to/file"
   ```

## Still need help?
Please provide:
- Operating system: 
- Git version: `git --version`
- Git LFS version: `git lfs version`
- Specific error message:
- What you were trying to do:

## Resources
- [LFS Migration Notice](docs/lfs-migration-notice.md)
- [LFS Quick Reference](docs/git-lfs-quick-reference.md)
- [LFS Full Guide](docs/git-lfs-guide.md)
```

---

*These templates can be customized for your team's communication channels and needs.*
