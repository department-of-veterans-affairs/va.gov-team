#!/usr/bin/env python3
"""
Test Runner for Research Findings to Slack Scripts

This script runs all unit tests for the research finder and processor scripts.
It can be run from the command line to execute comprehensive testing.

Usage:
    python run_tests.py                    # Run all tests
    python run_tests.py -v                # Run with verbose output
    python run_tests.py TestClassName     # Run specific test class
    python run_tests.py -k pattern        # Run tests matching pattern
"""

import sys
import unittest
import os
from pathlib import Path

# Add current directory to Python path for imports
current_dir = Path(__file__).parent
sys.path.insert(0, str(current_dir))


def discover_and_run_tests():
    """Discover and run all tests in the tests directory."""
    # Set up test discovery
    test_dir = Path(__file__).parent
    loader = unittest.TestLoader()
    
    # Discover all test files in the tests directory
    suite = loader.discover(
        start_dir=str(test_dir),
        pattern='test_*.py',
        top_level_dir=str(test_dir)
    )
    
    # Configure test runner
    verbosity = 2 if '-v' in sys.argv or '--verbose' in sys.argv else 1
    
    runner = unittest.TextTestRunner(
        verbosity=verbosity,
        buffer=True,  # Capture stdout/stderr during tests
        failfast=False,  # Don't stop on first failure
        stream=sys.stdout
    )
    
    # Run the tests
    result = runner.run(suite)
    
    # Print summary
    print(f"\n{'='*70}")
    print(f"TEST SUMMARY")
    print(f"{'='*70}")
    print(f"Tests run: {result.testsRun}")
    print(f"Failures: {len(result.failures)}")
    print(f"Errors: {len(result.errors)}")
    print(f"Skipped: {len(result.skipped) if hasattr(result, 'skipped') else 0}")
    
    if result.failures:
        print(f"\nFAILURES:")
        for test, traceback in result.failures:
            print(f"  - {test}")
            
    if result.errors:
        print(f"\nERRORS:")
        for test, traceback in result.errors:
            print(f"  - {test}")
    
    # Return appropriate exit code
    return 0 if result.wasSuccessful() else 1


def run_specific_tests():
    """Run specific tests based on command line arguments."""
    if len(sys.argv) < 2:
        return discover_and_run_tests()
    
    # Handle specific test class or method
    test_name = sys.argv[1]
    
    if test_name in ['-h', '--help']:
        print(__doc__)
        return 0
    
    if test_name in ['-v', '--verbose']:
        return discover_and_run_tests()
    
    # Try to run specific test
    try:
        # Load specific test
        loader = unittest.TestLoader()
        suite = loader.loadTestsFromName(test_name)
        
        runner = unittest.TextTestRunner(verbosity=2, buffer=True)
        result = runner.run(suite)
        
        return 0 if result.wasSuccessful() else 1
        
    except Exception as e:
        print(f"Error running specific test '{test_name}': {e}")
        print("Available test classes:")
        print("  - test_research_finder.TestResearchFileFinder")
        print("  - test_research_processor.TestResearchContentProcessor")
        return 1


def main():
    """Main entry point for the test runner."""
    print("Research Findings to Slack - Test Runner")
    print("=" * 50)
    
    # Check if we're in the right directory
    script_dir = Path(__file__).parent.parent
    expected_files = ['research_finder.py', 'research_processor.py']
    
    missing_files = []
    for file in expected_files:
        if not (script_dir / file).exists():
            missing_files.append(file)
    
    if missing_files:
        print(f"Warning: Missing script files: {missing_files}")
        print(f"Expected location: {script_dir}")
        print("Tests may fail due to import errors.")
        print()
    
    # Run tests
    try:
        exit_code = run_specific_tests()
        sys.exit(exit_code)
    except KeyboardInterrupt:
        print("\nTest execution interrupted by user.")
        sys.exit(1)
    except Exception as e:
        print(f"Unexpected error during test execution: {e}")
        sys.exit(1)


if __name__ == '__main__':
    main()