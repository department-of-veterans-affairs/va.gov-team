# Git LFS Migration Plan for va.gov-team Repository

## 🎯 **Objective**
Safely migrate 502 large files (2.5 GB) to Git LFS to reduce repository size and improve performance.

## 📊 **Current Status**
- **Repository size**: 20GB
- **Files needing LFS**: 502 files (2.5GB)
- **Priority files (>1MB)**: 13 files
- **Already in LFS**: 3,009 files
- **Corruption fixed**: 4 DOCX files restored to regular git

## 🛠️ **Improved Script Features**

### **Key Improvements Made**
1. **Uses `git lfs migrate`** instead of manual file operations
2. **Automatic backup branches** for safety
3. **Batch processing** (50 files per batch)
4. **Priority mode** (files >1MB first)
5. **LFS object verification** to prevent corruption
6. **Better error handling** with rollback capability
7. **Environment validation** before migration

### **Safety Features**
- ✅ **Backup branch creation** before any migration
- ✅ **Automatic rollback** on errors
- ✅ **LFS object verification** after each batch
- ✅ **Repository state validation** before starting
- ✅ **Dry-run mode** for testing

## 📋 **Migration Strategy**

### **Phase 1: Priority Files (Recommended)**
```bash
# Test first
ruby scripts/convert-files-to-lfs.rb --migrate --priority-only --dry-run --verbose

# Migrate priority files (>1MB) - 13 files
ruby scripts/convert-files-to-lfs.rb --migrate --priority-only --verbose
```

### **Phase 2: Remaining Files (After Phase 1 success)**
```bash
# Migrate all remaining files - 489 smaller files
ruby scripts/convert-files-to-lfs.rb --migrate --verbose
```

## 🔍 **File Breakdown**

### **Priority Files (>1MB) - 13 files**
- **1 MP4 file**: 72.6 MB
- **4 DOCX files**: 14.6 MB total
- **8 large ZIP/MOV files**: ~33 MB total

### **Remaining Files - 489 files**
- **482 ZIP files**: Mostly smaller archives
- **7 smaller MOV files**: Various sizes

## ⚠️ **Critical Warnings**

### **Before Migration**
1. **Coordinate with team** - migration rewrites git history
2. **Clean repository** - commit or stash all changes
3. **Backup important work** - automatic backups created but verify
4. **Test on branch** - don't migrate directly on master

### **After Migration**
1. **Test repository operations** thoroughly
2. **Verify LFS objects** are accessible
3. **Check file integrity** of migrated files
4. **Coordinate team pull** after push

## 🚀 **Recommended Workflow**

### **Step 1: Create Migration Branch**
```bash
git checkout -b feature/lfs-migration
git push -u origin feature/lfs-migration
```

### **Step 2: Run Priority Migration**
```bash
# Test first
ruby scripts/convert-files-to-lfs.rb --migrate --priority-only --dry-run

# Migrate if test looks good
ruby scripts/convert-files-to-lfs.rb --migrate --priority-only --verbose
```

### **Step 3: Verify and Test**
```bash
# Check status
git status
git lfs ls-files | grep -E "\.(docx|mp4|mov)" | head -10

# Test repository operations
git clone --depth 1 /tmp/test-clone
cd /tmp/test-clone && git lfs pull
```

### **Step 4: Create PR**
```bash
git add -A
git commit -m "feat: migrate priority files (>1MB) to Git LFS

- Migrated 13 large files totaling ~120MB
- Used git lfs migrate for safe conversion
- Automatic backup branch created: lfs-migration-backup-YYYYMMDD-HHMMSS

Files migrated:
- 4 DOCX files (14.6 MB)
- 1 MP4 file (72.6 MB)
- 8 large ZIP/MOV files (~33 MB)"

git push origin feature/lfs-migration
```

## 🔧 **Script Usage Examples**

### **Analysis Only**
```bash
# Get detailed analysis
ruby scripts/convert-files-to-lfs.rb --analyze --verbose
```

### **Priority Migration (Recommended First)**
```bash
# Dry run first
ruby scripts/convert-files-to-lfs.rb --migrate --priority-only --dry-run --verbose

# Actual migration
ruby scripts/convert-files-to-lfs.rb --migrate --priority-only --verbose
```

### **Full Migration (After priority success)**
```bash
# All remaining files
ruby scripts/convert-files-to-lfs.rb --migrate --verbose --batch-size 25
```

## 🚨 **Troubleshooting**

### **If Migration Fails**
1. **Automatic rollback** should restore repository
2. **Check backup branch**: `git branch | grep lfs-migration-backup`
3. **Manual restore**: `git reset --hard lfs-migration-backup-YYYYMMDD-HHMMSS`

### **If LFS Objects Corrupt**
1. **Check LFS status**: `git lfs status`
2. **Verify objects**: `git lfs fsck`
3. **Re-pull objects**: `git lfs pull`

### **If Repository Too Large**
1. **Use sparse checkout** for clones
2. **Consider partial migrations** (smaller batches)
3. **Monitor disk space** during operations

## 📈 **Expected Benefits**

### **After Priority Migration (13 files)**
- **Repository size reduction**: ~120 MB
- **Clone performance**: Slightly improved
- **Risk assessment**: Low risk, high value files

### **After Full Migration (502 files)**
- **Repository size reduction**: ~2.5 GB
- **Clone performance**: Significantly improved
- **LFS bandwidth**: Will increase (team consideration)

## ✅ **Success Criteria**

1. **All target files** successfully migrated to LFS
2. **No corruption** in LFS objects
3. **Repository operations** work normally
4. **Team can clone/pull** without issues
5. **File integrity** maintained after migration

---

**Last Updated**: June 6, 2024  
**Script Version**: 2.0 (with git lfs migrate integration)  
**Status**: Ready for Phase 1 (Priority Files)
</content>
</invoke>
