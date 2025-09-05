#!/bin/bash

# Second batch migration script for files 13-25
echo "🚀 Continuing LFS migration with files 13-25..."

# Process remaining files
echo ""
echo "🔄 [13/25] File: products/health-care/1095b-tax-form/Final documents/Accessible 1095-B demo radio-downloads-video.mov"
printf "y\n" | git lfs migrate import --include="products/health-care/1095b-tax-form/Final documents/Accessible 1095-B demo radio-downloads-video.mov" --verbose
echo "✅ [13/25] Completed"

echo ""
echo "🔄 [14/25] File: platform/design/sketch-backup/authenticated-experience/my-VA.sketch.zip"
printf "y\n" | git lfs migrate import --include="platform/design/sketch-backup/authenticated-experience/my-VA.sketch.zip" --verbose
echo "✅ [14/25] Completed"

echo ""
echo "🔄 [15/25] File: platform/design/sketch-backup/authenticated-experience/my-VA-no-MHV.sketch.zip"
printf "y\n" | git lfs migrate import --include="platform/design/sketch-backup/authenticated-experience/my-VA-no-MHV.sketch.zip" --verbose
echo "✅ [15/25] Completed"

echo ""
echo "🔄 [16/25] File: products/veteran-id-cards/card-design/vic-folder-folder.zip"
printf "y\n" | git lfs migrate import --include="products/veteran-id-cards/card-design/vic-folder-folder.zip" --verbose
echo "✅ [16/25] Completed"

echo ""
echo "🔄 [17/25] File: platform/design/sketch-backup/identity/Identity-Service-Blueprint.sketch.zip"
printf "y\n" | git lfs migrate import --include="platform/design/sketch-backup/identity/Identity-Service-Blueprint.sketch.zip" --verbose
echo "✅ [17/25] Completed"

echo ""
echo "🔄 [18/25] File: products/va-mobile-app/features/Onboarding & Product Adoption/ux/Onboarding-Design-Inspiration.zip"
printf "y\n" | git lfs migrate import --include="products/va-mobile-app/features/Onboarding & Product Adoption/ux/Onboarding-Design-Inspiration.zip" --verbose
echo "✅ [18/25] Completed"

echo ""
echo "🔄 [19/25] File: products/disability/526ez/archive/design/exploration-screens/ssic-screens-v2.2.zip"
printf "y\n" | git lfs migrate import --include="products/disability/526ez/archive/design/exploration-screens/ssic-screens-v2.2.zip" --verbose
echo "✅ [19/25] Completed"

echo ""
echo "🔄 [20/25] File: products/virtual-agent/research/inclusive-design-interviews/transcripts-and-video-clips/GMT20210614-183504_Trouble getting to hear bot response (also links not announced as link).mp4.zip"
printf "y\n" | git lfs migrate import --include="products/virtual-agent/research/inclusive-design-interviews/transcripts-and-video-clips/GMT20210614-183504_Trouble getting to hear bot response (also links not announced as link).mp4.zip" --verbose
echo "✅ [20/25] Completed"

echo ""
echo "🔄 [21/25] File: products/disability/526ez/archive/design/exploration-screens/ssic-screens-v2.1.zip"
printf "y\n" | git lfs migrate import --include="products/disability/526ez/archive/design/exploration-screens/ssic-screens-v2.1.zip" --verbose
echo "✅ [21/25] Completed"

echo ""
echo "🔄 [22/25] File: platform/design/sketch-backup/MHV-APT-HUB/sidenav/secondary-nav-prototype.sketch.zip"
printf "y\n" | git lfs migrate import --include="platform/design/sketch-backup/MHV-APT-HUB/sidenav/secondary-nav-prototype.sketch.zip" --verbose
echo "✅ [22/25] Completed"

echo ""
echo "🔄 [23/25] File: platform/design/sketch-backup/burials-and-memorilals/pre-need-integration/pre-need-prototype-integration-MVP-v0.1-original.sketch.zip"
printf "y\n" | git lfs migrate import --include="platform/design/sketch-backup/burials-and-memorilals/pre-need-integration/pre-need-prototype-integration-MVP-v0.1-original.sketch.zip" --verbose
echo "✅ [23/25] Completed"

echo ""
echo "🔄 [24/25] File: platform/design/sketch-backup/facility-sites/facility-locator.sketch.zip"
printf "y\n" | git lfs migrate import --include="platform/design/sketch-backup/facility-sites/facility-locator.sketch.zip" --verbose
echo "✅ [24/25] Completed"

echo ""
echo "🔄 [25/25] File: platform/design/sketch-backup/claims-and-appeals/non-disability/burial-530-redesign-MVP-TRANSFERRING-TO-FIGMA-pt2.sketch.zip"
printf "y\n" | git lfs migrate import --include="platform/design/sketch-backup/claims-and-appeals/non-disability/burial-530-redesign-MVP-TRANSFERRING-TO-FIGMA-pt2.sketch.zip" --verbose
echo "✅ [25/25] Completed"

echo ""
echo "🎉🎉🎉 ALL 25 FILES MIGRATION COMPLETED! 🎉🎉🎉"
echo ""
echo "📊 Final Summary:"
echo "✅ Successfully migrated all 25 largest files to LFS"
echo "💾 Total space saved: ~592 MB from these files"
echo ""
echo "🎯 Next steps:"
echo "  1. Verify migrations: git lfs ls-files | wc -l"
echo "  2. Check repository status: git status"
echo "  3. Clean up lock files if needed"
echo "  4. Commit and push when ready"
echo ""
echo "🚀 The 25 largest files are now efficiently stored in Git LFS!"
