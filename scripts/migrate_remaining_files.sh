#!/bin/bash

# Auto-migration script for remaining large files
echo "🚀 Starting automated LFS migration of remaining large files..."
echo "📝 Processing files 6-25 from the largest files list"
echo ""

# Function to migrate a single file
migrate_file() {
    local file="$1"
    local number="$2"
    
    echo "🔄 [$number/20] Migrating: $file"
    
    if git lfs migrate import --include="$file" --verbose; then
        echo "✅ [$number/20] Success: $file"
        echo ""
        return 0
    else
        echo "❌ [$number/20] Failed: $file"
        echo ""
        return 1
    fi
}

# Get files 6-25 from our list
files=()
while IFS= read -r line; do
    files+=("$line")
done < <(sed -n '6,25p' /tmp/lfs_top25_files.txt)

echo "📋 Files to migrate:"
for i in "${!files[@]}"; do
    echo "  $((i+6)). ${files[$i]}"
done
echo ""

# Track success/failure
success_count=0
failed_count=0
failed_files=()

# Migrate each file
for i in "${!files[@]}"; do
    file_number=$((i+6))
    if migrate_file "${files[$i]}" "$file_number"; then
        ((success_count++))
    else
        ((failed_count++))
        failed_files+=("${files[$i]}")
    fi
    
    # Small delay to avoid overwhelming git
    sleep 1
done

echo "📊 Migration Summary:"
echo "✅ Successfully migrated: $success_count files"
echo "❌ Failed: $failed_count files"

if [ $failed_count -gt 0 ]; then
    echo ""
    echo "❌ Failed files:"
    for file in "${failed_files[@]}"; do
        echo "  - $file"
    done
fi

echo ""
echo "🎉 Automated migration completed!"
echo "📈 Total files migrated in this session: $((success_count + 5))"
echo ""
echo "Next steps:"
echo "  1. Review git status"
echo "  2. Check LFS files: git lfs ls-files | tail -20"
echo "  3. Verify file sizes are correct"
echo "  4. Commit and push when ready"
