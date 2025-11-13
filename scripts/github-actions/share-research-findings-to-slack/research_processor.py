#!/usr/bin/env python3
"""
Research Content Processor for Slack Notifications

Extracts and formats research findings content for sharing.
"""

import os
import re
import sys
import subprocess
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Optional


class ResearchContentProcessor:
    """Processes research files to extract key information."""
    
    def __init__(self, file_path: str):
        self.file_path = Path(file_path)
        
    def extract_title(self, content: str) -> str:
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
        
    def extract_key_findings(self, content: str) -> str:
        """Extract key findings section from markdown content."""
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
                        current_header_level = len(current_header_match.group(1))
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
                        
        # Clean up and format
        findings_text = ' '.join(findings_content).strip()
        findings_text = re.sub(r'\s+', ' ', findings_text)  # Normalize whitespace
        
        # Truncate if too long
        if len(findings_text) > 2000:
            findings_text = findings_text[:1997] + "..."
            
        return findings_text
            
    def get_last_modified_date(self) -> str:
        """Get last modification date from git."""
        try:
            result = subprocess.run(
                ['git', 'log', '-1', '--format=%ai', str(self.file_path)],
                capture_output=True, text=True, check=True
            )
            
            if result.stdout.strip():
                return result.stdout.strip().split()[0]  # Just the date part
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
        if not self.file_path.exists():
            raise FileNotFoundError(f"Research file not found: {self.file_path}")
            
        try:
            with open(self.file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except UnicodeDecodeError:
            # Try with different encoding if UTF-8 fails
            with open(self.file_path, 'r', encoding='latin-1') as f:
                content = f.read()
                
        return {
            'RESEARCH_FILE': str(self.file_path),
            'RESEARCH_TITLE': self.extract_title(content),
            'KEY_FINDINGS': self.extract_key_findings(content),
            'STUDY_DATE': self.get_last_modified_date(),
            'PRODUCT_PATH': self.get_product_path()
        }


def main():
    """Main entry point for the script."""
    if len(sys.argv) < 2:
        print("Usage: python research_processor.py <file_path>")
        sys.exit(1)
        
    file_path = sys.argv[1]
    
    try:
        processor = ResearchContentProcessor(file_path)
        result = processor.process_file()
        
        # Output to GitHub Actions environment
        github_env = os.environ.get('GITHUB_ENV')
        if github_env:
            with open(github_env, 'a') as f:
                for key, value in result.items():
                    if '\n' in value:  # Multi-line values need special handling
                        f.write(f"{key}<<EOF\n{value}\nEOF\n")
                    else:
                        f.write(f"{key}={value}\n")
        
        print(f"Successfully processed: {file_path}")
        print(f"Title: {result['RESEARCH_TITLE']}")
        print(f"Findings length: {len(result['KEY_FINDINGS'])} characters")
        
    except Exception as e:
        print(f"Error processing file {file_path}: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()