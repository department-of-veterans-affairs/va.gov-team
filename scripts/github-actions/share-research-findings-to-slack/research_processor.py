#!/usr/bin/env python3
"""
Research Content Processor for Slack Notifications

Extracts and formats research findings content for sharing. 
"""

import os
import re
import sys
import subprocess
import unicodedata
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Optional

def is_markdown_file(filename):
    """Check if a file has a markdown extension."""
    return os.path.splitext(filename)[1].lower() == '.md'

class ResearchContentProcessor:
    """Processes research files to extract key information."""
    
    def __init__(self, file_path: str):
        normalized_path = unicodedata.normalize('NFKC', str(file_path).strip())
        self.file_path = Path(normalized_path)
        
    def extract_title(self, content:  str) -> str:
        """Extract title from markdown content."""
        lines = content.split('\n')
        
        # Look for H1 title first
        for line in lines:
            if line.startswith('# '):
                return line[2:].strip()
                
        # Fall back to H2 if no H1 found
        for line in lines: 
            if line.startswith('## '):
                return line[3:].strip()
                
        return "Research Findings"
    
    def extract_summary(self, content:  str) -> str:
        """Extract research summary/description from markdown content. 
        
        Looks for common summary section headers or extracts the first
        meaningful paragraph after the title.
        """
        lines = content.split('\n')
        
        # Common summary section patterns (case insensitive)
        summary_patterns = [
            r'^#{1,6}\s*(research\s+)?summary\s*$',
            r'^#{1,6}\s*overview\s*$',
            r'^#{1,6}\s*background\s*$',
            r'^#{1,6}\s*about\s+(this\s+)?(research|study)\s*$',
            r'^#{1,6}\s*description\s*$',
            r'^#{1,6}\s*introduction\s*$',
            r'^#{1,6}\s*purpose\s*$',
            r'^#{1,6}\s*goals?\s*$',
        ]
        
        summary_content = []
        in_summary_section = False
        summary_header_level = None
        
        for i, line in enumerate(lines):
            # Check if we're entering a summary section
            if not in_summary_section: 
                for pattern in summary_patterns:
                    if re.match(pattern, line.strip(), re.IGNORECASE):
                        in_summary_section = True
                        header_match = re.match(r'^(#{1,6})', line.strip())
                        summary_header_level = len(header_match. group(1)) if header_match else 1
                        break
                continue
            
            # If we're in summary section, collect content
            elif in_summary_section:
                # Stop at next section header of same or higher level
                if line.strip().startswith('#'):
                    current_header_match = re.match(r'^(#{1,6})', line.strip())
                    if current_header_match: 
                        current_header_level = len(current_header_match.group(1))
                        if current_header_level <= summary_header_level:
                            break
                
                # Skip empty lines at start
                if not summary_content and not line.strip():
                    continue
                summary_content.append(line)
                
                # Limit content length (first few paragraphs)
                if len(summary_content) >= 10:
                    break
        
        # If no explicit summary section found, try to get first paragraph after title
        if not summary_content: 
            found_title = False
            for line in lines: 
                if line.startswith('#'):
                    found_title = True
                    continue
                if found_title and line.strip():
                    # Skip if this is metadata (like "Last updated:", "Author:", etc.)
                    if re.match(r'^[\*\-]?\s*\*?\*?(last\s+updated|author|date|status|team):', line, re.IGNORECASE):
                        continue
                    # Skip if this is a link or badge
                    if re.match(r'^\[!\[', line) or re.match(r'^<', line):
                        continue
                    # Collect paragraph lines until empty line
                    if line.strip():
                        summary_content.append(line)
                    else:
                        if summary_content:
                            break
                    if len(summary_content) >= 5:
                        break
        
        if not summary_content: 
            return "See full report for research context and methodology."
        
        # Clean up and format - preserve some structure but normalize
        summary_text = ' '.join(line.strip() for line in summary_content if line.strip())
        summary_text = re. sub(r'\s+', ' ', summary_text)  # Normalize whitespace
        
        # Truncate if too long (Slack has limits)
        if len(summary_text) > 500:
            summary_text = summary_text[:497] + "..."
            
        return summary_text
        
    def extract_key_findings(self, content: str) -> str:
        """Extract key findings section from markdown content. 
        
        Preserves numbered/bulleted list formatting for Slack.
        """
        lines = content.split('\n')
        
        # Look for "Key Findings" section at any header level (H1-H6) - case insensitive
        key_findings_pattern = r'^#{1,6}\s*key\s+findings\s*$'
        
        findings_content = []
        in_findings_section = False
        findings_header_level = None
        
        for i, line in enumerate(lines):
            # Check if we're entering the Key Findings section
            if not in_findings_section:
                if re.match(key_findings_pattern, line.strip(), re.IGNORECASE):
                    in_findings_section = True
                    # Capture the header level to know when to stop
                    findings_header_level = len(re.match(r'^(#{1,6})', line.strip()).group(1))
                    continue
            
            # If we're in findings section, collect content
            elif in_findings_section:
                # Stop at next section header of same or higher level
                if line.strip().startswith('#'):
                    current_header_match = re.match(r'^(#{1,6})', line.strip())
                    if current_header_match:
                        current_header_level = len(current_header_match. group(1))
                        if current_header_level <= findings_header_level: 
                            break
                
                # Skip empty lines at start
                if not findings_content and not line.strip():
                    continue
                findings_content.append(line)
                
                # Limit content length
                if len(findings_content) >= 20:
                    break
                    
        # If no exact "Key Findings" section found, return helpful message
        if not findings_content: 
            return "Key findings not specified, make sure there is an explicit Key Findings section."
        
        # Format findings for Slack mrkdwn
        formatted_findings = self._format_findings_for_slack(findings_content)
        
        # Truncate if too long
        if len(formatted_findings) > 2000:
            formatted_findings = formatted_findings[:1997] + "..."
            
        return formatted_findings
    
    def _format_findings_for_slack(self, lines: List[str]) -> str:
        """Format findings content for Slack mrkdwn format. 
        
        Converts markdown lists to Slack-compatible format.
        """
        formatted_lines = []
        finding_number = 0
        
        for line in lines: 
            stripped = line.strip()
            
            # Skip empty lines but preserve them for spacing
            if not stripped:
                if formatted_lines and formatted_lines[-1] != '':
                    formatted_lines.append('')
                continue
            
            # Handle numbered lists (1. 2. 3. etc.)
            numbered_match = re.match(r'^(\d+)[.\)]\s*(.+)$', stripped)
            if numbered_match:
                finding_number += 1
                text = numbered_match. group(2)
                # Convert markdown bold to Slack bold
                text = self._convert_markdown_formatting(text)
                formatted_lines.append(f"{finding_number}. {text}")
                continue
            
            # Handle bullet points (-, *, •)
            bullet_match = re.match(r'^[\-\*•]\s*(.+)$', stripped)
            if bullet_match:
                finding_number += 1
                text = bullet_match.group(1)
                text = self._convert_markdown_formatting(text)
                formatted_lines.append(f"{finding_number}. {text}")
                continue
            
            # Handle continuation lines (indented content under a list item)
            if line.startswith('  ') or line.startswith('\t'):
                text = self._convert_markdown_formatting(stripped)
                formatted_lines.append(f"   {text}")
                continue
            
            # Regular paragraph text
            text = self._convert_markdown_formatting(stripped)
            formatted_lines.append(text)
        
        # Join with newlines to preserve list structure
        return '\n'.join(formatted_lines).strip()
    
    def _convert_markdown_formatting(self, text: str) -> str:
        """Convert common markdown formatting to Slack mrkdwn format. 
        
        Slack mrkdwn is similar but not identical to markdown. 
        """
        # Bold:  **text** or __text__ -> *text*
        text = re.sub(r'\*\*(.+?)\*\*', r'*\1*', text)
        text = re.sub(r'__(.+?)__', r'*\1*', text)
        
        # Italic: *text* or _text_ -> _text_ (Slack uses underscores)
        # Be careful not to convert already-converted bold
        text = re.sub(r'(?<!\*)_(.+?)_(?!\*)', r'_\1_', text)
        
        # Links: [text](url) -> <url|text>
        text = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', r'<\2|\1>', text)
        
        # Inline code: `code` stays the same in Slack
        
        return text
        
        # Links: [text](url) -> <url|text>
        text = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', r'<\2|\1>', text)
        
        # Inline code: `code` stays the same in Slack
        
        return text
            
    def get_last_modified_date(self) -> str:
        """Get last modification date from git."""
        try: 
            result = subprocess.run(
                ['git', 'log', '-1', '--format=%ai', str(self.file_path)],
                capture_output=True, text=True, check=True
            )
            
            if result.stdout.strip():
                return result.stdout. strip().split()[0]  # Just the date part
            else: 
                return datetime.now().strftime('%Y-%m-%d')
                
        except subprocess.CalledProcessError: 
            return datetime.now().strftime('%Y-%m-%d')
            
    def get_product_path(self) -> str:
        """Extract product/team path from file location."""
        path_parts = self.file_path.parts
        if len(path_parts) >= 3 and path_parts[0] == 'products':
            return '/'.join(path_parts[1:3])  # e.g., "health-care/appointments"
        return str(self.file_path.parent)
        
    def process_file(self) -> Dict[str, str]:
        """Process the research file and extract all key information."""
        if not self. file_path.exists():
            raise FileNotFoundError(f"Research file not found: {self.file_path}")
            
        try: 
            with open(self.file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except UnicodeDecodeError:
            # Try with different encoding if UTF-8 fails
            with open(self.file_path, 'r', encoding='latin-1') as f:
                content = f.read()
                
        return {
            'RESEARCH_FILE':  str(self.file_path),
            'RESEARCH_TITLE': self.extract_title(content),
            'RESEARCH_SUMMARY':  self.extract_summary(content),
            'KEY_FINDINGS': self.extract_key_findings(content),
            'STUDY_DATE': self.get_last_modified_date(),
            'PRODUCT_PATH': self.get_product_path()
        }


def main():
    """Main entry point for the script."""
    if len(sys. argv) < 2:
        print("Usage: python research_processor.py <file_path>")
        sys.exit(1)
        
    file_path = sys.argv[1]
    
    try:
        processor = ResearchContentProcessor(file_path)
        result = processor.process_file()
        
        # Output to GitHub Actions environment
        github_env = os.environ. get('GITHUB_ENV')
        if github_env: 
            with open(github_env, 'a') as f:
                for key, value in result.items():
                    if '\n' in value:  # Multi-line values need special handling
                        f. write(f"{key}<<EOF\n{value}\nEOF\n")
                    else: 
                        f. write(f"{key}={value}\n")
        
        print(f"Successfully processed: {file_path}")
        print(f"Title:  {result['RESEARCH_TITLE']}")
        print(f"Summary length: {len(result['RESEARCH_SUMMARY'])} characters")
        print(f"Findings length: {len(result['KEY_FINDINGS'])} characters")
        
    except Exception as e: 
        print(f"Error processing file {file_path}: {e}")
        sys.exit(1)


if __name__ == "__main__": 
    main()
