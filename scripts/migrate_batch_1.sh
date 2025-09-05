#!/bin/bash

# Simple batch migration script
echo "🚀 Continuing LFS migration with files 7-12..."

# Process files one by one
echo ""
echo "🔄 [7/25] File: products/burials-memorials/product-guide/Pre-Need Video Application Guide (1).zip"
printf "y\n" | git lfs migrate import --include="products/burials-memorials/product-guide/Pre-Need Video Application Guide (1).zip" --verbose
echo "✅ [7/25] Completed"

echo ""
echo "🔄 [8/25] File: platform/design/sketch-backup/MHV-APT-HUB/medical-records/medical-records-Hi-Fi-version-2.sketch.zip"
printf "y\n" | git lfs migrate import --include="platform/design/sketch-backup/MHV-APT-HUB/medical-records/medical-records-Hi-Fi-version-2.sketch.zip" --verbose
echo "✅ [8/25] Completed"

echo ""
echo "🔄 [9/25] File: platform/design/sketch-backup/pension-benefits/pension-benefit-claim-form-527.sketch.zip"
printf "y\n" | git lfs migrate import --include="platform/design/sketch-backup/pension-benefits/pension-benefit-claim-form-527.sketch.zip" --verbose
echo "✅ [9/25] Completed"

echo ""
echo "🔄 [10/25] File: platform/design/sketch-backup/public-website/VA-tier3.sketch.zip"
printf "y\n" | git lfs migrate import --include="platform/design/sketch-backup/public-website/VA-tier3.sketch.zip" --verbose
echo "✅ [10/25] Completed"

echo ""
echo "🔄 [11/25] File: products/va-mobile-app/features/secure-messaging/existing state/Web View SM Current State.pdf.zip"
printf "y\n" | git lfs migrate import --include="products/va-mobile-app/features/secure-messaging/existing state/Web View SM Current State.pdf.zip" --verbose
echo "✅ [11/25] Completed"

echo ""
echo "🔄 [12/25] File: platform/design/sketch-backup/health-care-applications/patient-check-in/Playground.sketch.zip"
printf "y\n" | git lfs migrate import --include="platform/design/sketch-backup/health-care-applications/patient-check-in/Playground.sketch.zip" --verbose
echo "✅ [12/25] Completed"

echo ""
echo "🎉 Batch 1 completed (files 7-12)!"
echo "📊 Total migrated so far: 12/25 files"
echo ""
echo "Run the second batch script for files 13-25"
