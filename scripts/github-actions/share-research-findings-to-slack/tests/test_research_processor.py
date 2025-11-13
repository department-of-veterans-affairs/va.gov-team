#!/usr/bin/env python3
"""
Unit tests for research_processor.py

Tests the ResearchContentProcessor class functionality including:
- Title extraction from markdown
- Key findings extraction (strict matching)
- Git integration for dates
- Product path determination
- GitHub Actions environment integration
"""

import unittest
import tempfile
import shutil
import os
import sys
from pathlib import Path
from datetime import datetime
from unittest.mock import Mock, patch, MagicMock
import subprocess

# Add the parent directory to Python path to import the module
sys.path.insert(0, str(Path(__file__).parent.parent))
from research_processor import ResearchContentProcessor


class TestResearchContentProcessor(unittest.TestCase):
    """Test cases for ResearchContentProcessor class."""
    
    def setUp(self):
        """Set up test environment with temporary files."""
        self.test_dir = tempfile.mkdtemp()
        self.original_cwd = os.getcwd()
        os.chdir(self.test_dir)
        
        # Create test research files with different content structures
        self.test_files = {
            "products/health-care/research/findings.md": """# Health Care Accessibility Study

## Background
This study examined accessibility barriers in VA health care.

## Key Findings
- 80% of veterans found the mobile app easy to navigate
- Screen reader compatibility improved satisfaction by 40%
- Voice navigation reduced task completion time

## Recommendations
We recommend implementing these changes immediately.
""",
            "products/disability/study-report.md": """# Disability Claims Process Research

## Executive Summary
This report analyzes the disability claims submission process.

## Research Results
Veterans expressed frustration with the current multi-step process.
The average completion time was 45 minutes.

## Next Steps
Further research is needed to optimize the workflow.
""",
            "products/benefits/insights.md": """## Benefits Portal Usability Study

### Background
User research on the benefits portal.

### Summary
- Users completed tasks successfully 85% of the time  
- Average task completion time: 3.2 minutes
- Most common pain point: confusing navigation labels

### Additional Insights
Mobile users had different patterns than desktop users.
""",
            "products/platform/no-title.md": """This file has no clear title structure.

Just some content here without proper headers.

Some findings might be buried in here but they're not well structured.
""",
            "products/education/unicode-test.md": """# Education Research Findings 📚

## Key Findings
- Unicode characters work fine: ✓ ✗ → ←
- Special symbols: © ® ™
- Accented characters: café naïve résumé

## Summary  
Testing unicode handling in content extraction.
"""
        }
        
        for file_path, content in self.test_files.items():
            file_obj = Path(file_path)
            file_obj.parent.mkdir(parents=True, exist_ok=True)
            file_obj.write_text(content, encoding='utf-8')
        
    def tearDown(self):
        """Clean up test environment."""
        os.chdir(self.original_cwd)
        shutil.rmtree(self.test_dir)
    
    def test_init(self):
        """Test ResearchContentProcessor initialization."""
        processor = ResearchContentProcessor("products/health-care/research/findings.md")
        self.assertEqual(processor.file_path, Path("products/health-care/research/findings.md"))
    
    def test_extract_title_h1(self):
        """Test title extraction from H1 header."""
        processor = ResearchContentProcessor("products/health-care/research/findings.md")
        content = self.test_files["products/health-care/research/findings.md"]
        
        title = processor.extract_title(content)
        self.assertEqual(title, "Health Care Accessibility Study")
    
    def test_extract_title_h2_fallback(self):
        """Test title extraction falling back to H2 when no H1."""
        processor = ResearchContentProcessor("products/benefits/insights.md")
        content = self.test_files["products/benefits/insights.md"]
        
        title = processor.extract_title(content)
        self.assertEqual(title, "Benefits Portal Usability Study")
    
    def test_extract_title_no_headers(self):
        """Test title extraction with no clear headers."""
        processor = ResearchContentProcessor("products/platform/no-title.md")
        content = self.test_files["products/platform/no-title.md"]
        
        title = processor.extract_title(content)
        self.assertEqual(title, "Research Findings")  # Default fallback
    
    def test_extract_key_findings_section(self):
        """Test extracting content from Key Findings section."""
        processor = ResearchContentProcessor("products/health-care/research/findings.md")
        content = self.test_files["products/health-care/research/findings.md"]
        
        findings = processor.extract_key_findings(content)
        
        self.assertIn("80% of veterans", findings)
        self.assertIn("Screen reader compatibility", findings)
        self.assertIn("Voice navigation", findings)
        # Should not include content from other sections
        self.assertNotIn("Background", findings)
        self.assertNotIn("Recommendations", findings)
    
    def test_extract_key_findings_exact_match_only(self):
        """Test that only exact 'Key Findings' sections are extracted."""
        content_with_wrong_section = """# Test Study

## Summary
This should not be extracted.

## Research Results
This should also not be extracted.

## Key Findings
This should be extracted because it matches exactly.

## Other Findings
This should not be extracted.
"""
        
        processor = ResearchContentProcessor("test.md")
        findings = processor.extract_key_findings(content_with_wrong_section)
        
        self.assertIn("This should be extracted", findings)
        self.assertNotIn("This should not be extracted", findings)
        self.assertNotIn("This should also not be extracted", findings)
        
    def test_extract_key_findings_no_exact_match(self):
        """Test behavior when no exact 'Key Findings' section exists."""
        content_without_key_findings = """# Test Study

## Summary
Some summary content here.

## Results
Some results content here.
"""
        
        processor = ResearchContentProcessor("test.md")
        findings = processor.extract_key_findings(content_without_key_findings)
        
        self.assertEqual(findings, "Key findings not specified, make sure there is an explicit Key Findings section.")
    
    def test_extract_key_findings_length_limit(self):
        """Test that extracted findings are limited to reasonable length."""
        # Create content with very long findings section
        long_content = """# Test Study

## Key Findings
""" + ("This is a very long finding that repeats many times. " * 100)
        
        processor = ResearchContentProcessor("test.md")
        findings = processor.extract_key_findings(long_content)
        
        # Should be truncated to 2000 characters max
        self.assertLessEqual(len(findings), 2000)
        self.assertTrue(findings.endswith("..."))
    
    def test_extract_key_findings_unicode(self):
        """Test extracting findings with unicode characters."""
        processor = ResearchContentProcessor("products/education/unicode-test.md")
        content = self.test_files["products/education/unicode-test.md"]
        
        findings = processor.extract_key_findings(content)
        
        self.assertIn("Unicode characters work fine", findings)
        self.assertIn("✓ ✗ → ←", findings)
        self.assertIn("café naïve résumé", findings)
    
    @patch('subprocess.run')
    def test_get_last_modified_date_success(self, mock_run):
        """Test successful last modified date extraction."""
        mock_run.return_value.stdout = "2025-11-10 14:30:00 -0500"
        mock_run.return_value.check = True
        
        processor = ResearchContentProcessor("products/health-care/research/findings.md")
        date = processor.get_last_modified_date()
        
        self.assertEqual(date, "2025-11-10")
    
    @patch('subprocess.run')
    def test_get_last_modified_date_no_history(self, mock_run):
        """Test last modified date when no git history."""
        mock_run.return_value.stdout = ""
        mock_run.return_value.check = True
        
        processor = ResearchContentProcessor("products/health-care/research/findings.md")
        date = processor.get_last_modified_date()
        
        # Should return today's date
        expected_date = datetime.now().strftime('%Y-%m-%d')
        self.assertEqual(date, expected_date)
    
    @patch('subprocess.run')
    def test_get_last_modified_date_error(self, mock_run):
        """Test last modified date when git command fails."""
        mock_run.side_effect = subprocess.CalledProcessError(1, 'git')
        
        processor = ResearchContentProcessor("products/health-care/research/findings.md")
        date = processor.get_last_modified_date()
        
        # Should return today's date as fallback
        expected_date = datetime.now().strftime('%Y-%m-%d')
        self.assertEqual(date, expected_date)
    
    def test_get_product_path_standard(self):
        """Test product path extraction for standard products structure."""
        processor = ResearchContentProcessor("products/health-care/appointments/research/findings.md")
        path = processor.get_product_path()
        
        self.assertEqual(path, "health-care/appointments")
    
    def test_get_product_path_shallow(self):
        """Test product path extraction for shallow directory structure."""
        processor = ResearchContentProcessor("products/identity/findings.md")
        path = processor.get_product_path()
        
        expected_parts = Path("products/identity/findings.md").parts
        if len(expected_parts) >= 3 and expected_parts[0] == 'products':
            expected_path = '/'.join(expected_parts[1:3])  # "identity"
        else:
            expected_path = str(Path("products/identity/findings.md").parent)  # "products/identity"
            
        self.assertEqual(path, expected_path)
    
    def test_get_product_path_non_products(self):
        """Test product path extraction for non-products directory."""
        processor = ResearchContentProcessor("platform/research/findings.md")
        path = processor.get_product_path()
        
        self.assertEqual(path, "platform/research")
    
    def test_process_file_missing(self):
        """Test processing a file that doesn't exist."""
        processor = ResearchContentProcessor("products/nonexistent/findings.md")
        
        with self.assertRaises(FileNotFoundError):
            processor.process_file()
    
    @patch.object(ResearchContentProcessor, 'get_last_modified_date')
    def test_process_file_success(self, mock_date):
        """Test successful file processing."""
        mock_date.return_value = "2025-11-10"
        
        processor = ResearchContentProcessor("products/health-care/research/findings.md")
        result = processor.process_file()
        
        expected_keys = ['RESEARCH_FILE', 'RESEARCH_TITLE', 'KEY_FINDINGS', 'STUDY_DATE', 'PRODUCT_PATH']
        for key in expected_keys:
            self.assertIn(key, result)
        
        self.assertEqual(result['RESEARCH_FILE'], "products/health-care/research/findings.md")
        self.assertEqual(result['RESEARCH_TITLE'], "Health Care Accessibility Study")
        self.assertIn("80% of veterans", result['KEY_FINDINGS'])
        self.assertEqual(result['STUDY_DATE'], "2025-11-10")
        self.assertEqual(result['PRODUCT_PATH'], "health-care/research")
    
    def test_process_file_encoding_fallback(self):
        """Test processing file with encoding issues."""
        # Create a file with latin-1 encoding
        latin_file = Path("products/test/latin-encoded.md")
        latin_file.parent.mkdir(parents=True, exist_ok=True)
        
        # Write content with latin-1 specific characters
        with open(latin_file, 'w', encoding='latin-1') as f:
            f.write("# Test Study\n\n## Key Findings\nSome findings with special chars: café")
        
        processor = ResearchContentProcessor(str(latin_file))
        
        # Should handle encoding gracefully
        result = processor.process_file()
        self.assertEqual(result['RESEARCH_TITLE'], "Test Study")


class TestMainFunction(unittest.TestCase):
    """Test cases for the main function and CLI interface."""
    
    def setUp(self):
        """Set up temporary test environment."""
        self.test_dir = tempfile.mkdtemp()
        self.original_cwd = os.getcwd()
        os.chdir(self.test_dir)
        
        # Create a test file
        test_file = Path("products/test/findings.md")
        test_file.parent.mkdir(parents=True, exist_ok=True)
        test_file.write_text("# Test Study\n\n## Key Findings\nSome findings here.")
        
    def tearDown(self):
        """Clean up test environment."""
        os.chdir(self.original_cwd)
        shutil.rmtree(self.test_dir)
    
    @patch('sys.argv', ['research_processor.py'])
    def test_main_insufficient_args(self):
        """Test main function with insufficient arguments."""
        with self.assertRaises(SystemExit):
            from research_processor import main
            main()
    
    @patch('sys.argv', ['research_processor.py', 'nonexistent.md'])
    def test_main_missing_file(self):
        """Test main function with missing file."""
        with self.assertRaises(SystemExit):
            from research_processor import main
            main()
    
    @patch('sys.argv', ['research_processor.py', 'products/test/findings.md'])
    @patch.dict('os.environ', {})
    @patch('builtins.print')
    def test_main_success_no_github_env(self, mock_print):
        """Test main function success without GitHub environment."""
        from research_processor import main
        main()
        
        # Should print success messages
        mock_print.assert_called()
        print_calls = [call.args[0] for call in mock_print.call_args_list]
        success_messages = [msg for msg in print_calls if "Successfully processed" in msg]
        self.assertGreater(len(success_messages), 0)
    
    @patch('sys.argv', ['research_processor.py', 'products/test/findings.md'])
    @patch('builtins.print')
    def test_main_success_with_github_env(self, mock_print):
        """Test main function success with GitHub environment."""
        with tempfile.NamedTemporaryFile(mode='w', delete=False) as tmp:
            with patch.dict('os.environ', {'GITHUB_ENV': tmp.name}):
                try:
                    from research_processor import main
                    main()
                    
                    # Verify environment variables were written
                    with open(tmp.name, 'r') as f:
                        content = f.read()
                        self.assertIn('RESEARCH_FILE=', content)
                        self.assertIn('RESEARCH_TITLE=', content)
                        self.assertIn('KEY_FINDINGS=', content)
                        
                finally:
                    os.unlink(tmp.name)


if __name__ == '__main__':
    # Configure test runner
    unittest.main(verbosity=2)