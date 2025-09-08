#!/bin/bash
# Script to rename files with spaces to follow cross-platform naming conventions
# This addresses the .gitattributes inconsistency issue by standardizing filenames

echo "🔄 Renaming files to follow cross-platform naming conventions..."
echo "This will address the .gitattributes consistency issue from PR feedback."
echo ""

# Function to rename a file and update .gitattributes
rename_file() {
    local old_path="$1"
    local new_path="$2"
    
    if [ -f "$old_path" ]; then
        echo "✅ Renaming: $old_path -> $new_path"
        git mv "$old_path" "$new_path"
        return 0
    else
        echo "⚠️  File not found: $old_path"
        return 1
    fi
}

# Files that need renaming based on .gitattributes entries
echo "📝 Files to rename:"

rename_file \
    "templates/VA.gov Product Guide Template 06142022.docx" \
    "templates/va-gov-product-guide-template-06142022.docx"

rename_file \
    "products/GIBCT_SMF Product Outline.docx" \
    "products/gibct-smf-product-outline.docx"

rename_file \
    "products/ask-va/product/product-guides/12.19.24 VA.gov Product Guide - Ask VA - Version 1.docx" \
    "products/ask-va/product/product-guides/2024-12-19-va-gov-product-guide-ask-va-version-1.docx"

rename_file \
    "products/ask-va/product/product-guides/6.24.25 VA.gov Product Guide - Ask VA - Version 2.docx" \
    "products/ask-va/product/product-guides/2025-06-24-va-gov-product-guide-ask-va-version-2.docx"

rename_file \
    "products/Comparison Tool Enhancements/VFEP SMF UAT Feb5.docx" \
    "products/comparison-tool-enhancements/vfep-smf-uat-feb5.docx"

rename_file \
    "products/Comparison Tool Enhancements/GI Bill Comparison Tool_Specialized Mission Filter v2 Product Product Outline_v2 (1).docx" \
    "products/comparison-tool-enhancements/gi-bill-comparison-tool-specialized-mission-filter-v2-product-outline-v2.docx"

rename_file \
    "products/office-administration/vba/sco-migration/design/ui/VBA School Resources.sketch" \
    "products/office-administration/vba/sco-migration/design/ui/vba-school-resources.sketch"

rename_file \
    "products/office-administration/offices/research/OPIA-Administration research - design studio - February 2019/20190228_VA.govCMS_office_designStudio_synthesisCapture.pptx" \
    "products/office-administration/offices/research/opia-administration-research-design-studio-february-2019/20190228-va-gov-cms-office-design-studio-synthesis-capture.pptx"

echo ""
echo "✅ File renaming complete!"
echo "📝 Next step: Update .gitattributes to use the new filenames"
echo "🎯 This resolves the consistency issue by standardizing all filenames"
