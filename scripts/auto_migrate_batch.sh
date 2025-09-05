#!/bin/bash

# Auto-migrate remaining files with automatic confirmation
echo "🚀 Starting batch LFS migration of remaining files..."

# Files 7-15 (next batch)
files=(
    "products/burials-memorials/product-guide/Pre-Need Video Application Guide (1).zip"
    "platform/design/sketch-backup/MHV-APT-HUB/medical-records/medical-records-Hi-Fi-version-2.sketch.zip"
    "platform/design/sketch-backup/pension-benefits/pension-benefit-claim-form-527.sketch.zip"
    "platform/design/sketch-backup/public-website/VA-tier3.sketch.zip"
    "products/va-mobile-app/features/secure-messaging/existing state/Web View SM Current State.pdf.zip"
    "platform/design/sketch-backup/health-care-applications/patient-check-in/Playground.sketch.zip"
    "products/health-care/1095b-tax-form/Final documents/Accessible 1095-B demo radio-downloads-video.mov"
    "platform/design/sketch-backup/authenticated-experience/my-VA.sketch.zip"
    "platform/design/sketch-backup/authenticated-experience/my-VA-no-MHV.sketch.zip"
)

success_count=0
start_num=7

for i in "${!files[@]}"; do
    file_num=$((start_num + i))
    echo ""
    echo "🔄 [$file_num/25] Migrating: ${files[$i]}"
    
    # Use expect to automatically respond 'y' to the confirmation
    expect << EOF
spawn git lfs migrate import --include="${files[$i]}" --verbose
expect "override changes in your working copy?  All uncommitted changes will be lost! \[y/N\]" { send "y\r" }
expect eof
EOF
    
    if [ $? -eq 0 ]; then
        echo "✅ [$file_num/25] Success: ${files[$i]}"
        ((success_count++))
    else
        echo "❌ [$file_num/25] Failed: ${files[$i]}"
    fi
    
    # Small delay between migrations
    sleep 2
done

echo ""
echo "📊 Batch migration completed!"
echo "✅ Successfully migrated: $success_count files from this batch"
echo "🎯 Total migrated in session: $((success_count + 6)) files"
echo ""
echo "Next: Run script again for files 16-25"
