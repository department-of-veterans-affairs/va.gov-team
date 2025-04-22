```js
#!/usr/bin/env node

/**
 * Claims Status App Code Analyzer
 * 
 * This script analyzes the claims-status application for:
 * - Class-based React components
 * - Performance red flags
 * - Functions with excessive lines
 * - Expensive compute logic
 */

const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const readDir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

// Configuration
const APP_DIR = path.join(process.cwd(), 'src/applications/claims-status');
const LINE_THRESHOLD = 100; // Functions with more than this many lines are flagged
const MAX_FUNCTION_PARAMS = 4; // Flag functions with more parameters than this

// Patterns to search for
const PATTERNS = {
  CLASS_COMPONENT: /class\s+\w+\s+extends\s+(React\.)?Component/g,
  INLINE_FUNCTION: /{[\s\n]*\([^)]*\)[\s\n]*=>[\s\n]*{/g,
  EXPENSIVE_ARRAY_METHODS: /\.(map|filter|reduce|forEach|some|every|find|findIndex)\(/g,
  NESTED_LOOPS: /for\s*\([^{]*\)\s*{[^}]*for\s*\([^{]*\)/g,
  EXPENSIVE_STATE_UPDATE: /setState\(\{\s*.*,.*,.*,.*,/g, // Multiple state updates at once
  RENDER_METHOD: /render\(\)\s*{/g,
  FUNCTION_DECLARATION: /function\s+([A-Za-z0-9_$]+)\s*\(([^)]*)\)/g,
  ARROW_FUNCTION: /const\s+([A-Za-z0-9_$]+)\s*=\s*(\([^)]*\)|[A-Za-z0-9_$]+)\s*=>/g,
  USE_EFFECT_EMPTY_DEPS: /useEffect\(\(\)\s*=>\s*{[^}]*},\s*\[\]\)/g,
  INLINE_OBJECT_CREATION: /<[A-Za-z0-9]+[^>]*\{[\s\n]*\{[^}]*\}[\s\n]*\}/g,
};

// Results storage
const results = {
  classComponents: [],
  largeFunctions: [],
  performanceIssues: [],
  expensiveCompute: [],
};

/**
 * Checks if a file is a JavaScript or JSX file
 */
const isJsFile = (filePath) => {
  return /\.(js|jsx)$/.test(filePath);
};

/**
 * Counts parameters in a function signature
 */
const countParameters = (params) => {
  if (!params || params.trim() === '') return 0;
  return params.split(',').length;
};

/**
 * Find all JS/JSX files in a directory and its subdirectories
 */
async function findJsFiles(dir) {
  const files = [];
  
  async function traverse(currentDir) {
    const entries = await readDir(currentDir);
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry);
      const stats = await stat(fullPath);
      
      if (stats.isDirectory() && entry !== 'node_modules') {
        await traverse(fullPath);
      } else if (stats.isFile() && isJsFile(fullPath)) {
        files.push(fullPath);
      }
    }
  }
  
  await traverse(dir);
  return files;
}

/**
 * Analyze a single file for code quality issues
 */
async function analyzeFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    const lines = content.split('\n');
    const relativePath = path.relative(process.cwd(), filePath);
    
    // Check for class components
    const classMatches = content.match(PATTERNS.CLASS_COMPONENT);
    if (classMatches) {
      results.classComponents.push({
        file: relativePath,
        count: classMatches.length,
      });
    }
    
    // Check for inline functions in JSX
    const inlineFunctionMatches = content.match(PATTERNS.INLINE_FUNCTION);
    if (inlineFunctionMatches) {
      results.performanceIssues.push({
        file: relativePath,
        issue: 'Inline function in JSX',
        count: inlineFunctionMatches.length,
      });
    }
    
    // Check for inline object creation in JSX
    const inlineObjectMatches = content.match(PATTERNS.INLINE_OBJECT_CREATION);
    if (inlineObjectMatches) {
      results.performanceIssues.push({
        file: relativePath,
        issue: 'Inline object creation in JSX',
        count: inlineObjectMatches.length,
      });
    }
    
    // Check for expensive array methods
    const arrayMethodMatches = content.match(PATTERNS.EXPENSIVE_ARRAY_METHODS);
    if (arrayMethodMatches && arrayMethodMatches.length > 5) {
      results.expensiveCompute.push({
        file: relativePath,
        issue: 'Heavy use of array methods',
        count: arrayMethodMatches.length,
      });
    }
    
    // Check for nested loops
    const nestedLoopMatches = content.match(PATTERNS.NESTED_LOOPS);
    if (nestedLoopMatches) {
      results.expensiveCompute.push({
        file: relativePath,
        issue: 'Nested loops detected',
        count: nestedLoopMatches.length,
      });
    }
    
    // Check for large state updates
    const stateUpdateMatches = content.match(PATTERNS.EXPENSIVE_STATE_UPDATE);
    if (stateUpdateMatches) {
      results.performanceIssues.push({
        file: relativePath,
        issue: 'Large state update',
        count: stateUpdateMatches.length,
      });
    }
    
    // Check for useEffect with empty deps array
    const emptyDepsMatches = content.match(PATTERNS.USE_EFFECT_EMPTY_DEPS);
    if (emptyDepsMatches) {
      results.performanceIssues.push({
        file: relativePath,
        issue: 'useEffect with empty deps array',
        count: emptyDepsMatches.length,
      });
    }
    
    // Find function declarations and check their length and parameter count
    let match;
    while ((match = PATTERNS.FUNCTION_DECLARATION.exec(content)) !== null) {
      const functionName = match[1];
      const params = match[2];
      const startLine = content.substring(0, match.index).split('\n').length;
      
      // Find the function body and count its lines
      const bodyStartIndex = content.indexOf('{', match.index + match[0].length);
      if (bodyStartIndex !== -1) {
        let openBraces = 1;
        let currentIndex = bodyStartIndex + 1;
        
        while (openBraces > 0 && currentIndex < content.length) {
          if (content[currentIndex] === '{') openBraces++;
          if (content[currentIndex] === '}') openBraces--;
          currentIndex++;
        }
        
        if (openBraces === 0) {
          const functionBody = content.substring(bodyStartIndex, currentIndex);
          const lineCount = functionBody.split('\n').length;
          
          if (lineCount > LINE_THRESHOLD) {
            results.largeFunctions.push({
              file: relativePath,
              function: functionName,
              lines: lineCount,
              startLine,
            });
          }
          
          if (countParameters(params) > MAX_FUNCTION_PARAMS) {
            results.performanceIssues.push({
              file: relativePath,
              issue: `Function ${functionName} has too many parameters`,
              count: countParameters(params),
            });
          }
        }
      }
    }
    
    // Find arrow functions and check their length
    while ((match = PATTERNS.ARROW_FUNCTION.exec(content)) !== null) {
      const functionName = match[1];
      const params = match[2];
      const startLine = content.substring(0, match.index).split('\n').length;
      
      // Find the function body (more complex for arrow functions)
      const afterArrow = content.indexOf('=>', match.index);
      if (afterArrow !== -1) {
        const bodyStartIndex = content.indexOf('{', afterArrow);
        if (bodyStartIndex !== -1) {
          let openBraces = 1;
          let currentIndex = bodyStartIndex + 1;
          
          while (openBraces > 0 && currentIndex < content.length) {
            if (content[currentIndex] === '{') openBraces++;
            if (content[currentIndex] === '}') openBraces--;
            currentIndex++;
          }
          
          if (openBraces === 0) {
            const functionBody = content.substring(bodyStartIndex, currentIndex);
            const lineCount = functionBody.split('\n').length;
            
            if (lineCount > LINE_THRESHOLD) {
              results.largeFunctions.push({
                file: relativePath,
                function: `${functionName} (arrow)`,
                lines: lineCount,
                startLine,
              });
            }
            
            if (params && countParameters(params.replace(/[\(\)]/g, '')) > MAX_FUNCTION_PARAMS) {
              results.performanceIssues.push({
                file: relativePath,
                issue: `Arrow function ${functionName} has too many parameters`,
                count: countParameters(params.replace(/[\(\)]/g, '')),
              });
            }
          }
        }
      }
    }
    
    // Find render methods in class components and check their length
    if (classMatches) {
      let renderMatch;
      const renderMatches = [...content.matchAll(PATTERNS.RENDER_METHOD)];
      
      for (renderMatch of renderMatches) {
        const startLine = content.substring(0, renderMatch.index).split('\n').length;
        
        // Find the render method body
        const bodyStartIndex = content.indexOf('{', renderMatch.index);
        if (bodyStartIndex !== -1) {
          let openBraces = 1;
          let currentIndex = bodyStartIndex + 1;
          
          while (openBraces > 0 && currentIndex < content.length) {
            if (content[currentIndex] === '{') openBraces++;
            if (content[currentIndex] === '}') openBraces--;
            currentIndex++;
          }
          
          if (openBraces === 0) {
            const methodBody = content.substring(bodyStartIndex, currentIndex);
            const lineCount = methodBody.split('\n').length;
            
            if (lineCount > LINE_THRESHOLD) {
              results.largeFunctions.push({
                file: relativePath,
                function: 'render method',
                lines: lineCount,
                startLine,
              });
            }
          }
        }
      }
    }
    
  } catch (error) {
    console.error(`Error analyzing ${filePath}:`, error);
  }
}

/**
 * Format and output results
 */
function outputResults() {
  console.log('\n= Claims Status App Code Analysis =\n');
  
  console.log('== Class-based Components ==');
  if (results.classComponents.length === 0) {
    console.log('No class-based components found.');
  } else {
    results.classComponents.forEach(item => {
      console.log(`${item.file}: ${item.count} class component(s)`);
    });
  }
  
  console.log('\n== Large Functions (> 100 lines) ==');
  if (results.largeFunctions.length === 0) {
    console.log('No large functions found.');
  } else {
    results.largeFunctions
      .sort((a, b) => b.lines - a.lines)
      .forEach(item => {
        console.log(`${item.file}:${item.startLine} - ${item.function} (${item.lines} lines)`);
      });
  }
  
  console.log('\n== Performance Issues ==');
  if (results.performanceIssues.length === 0) {
    console.log('No performance issues found.');
  } else {
    results.performanceIssues.forEach(item => {
      console.log(`${item.file}: ${item.issue} (${item.count} occurrence(s))`);
    });
  }
  
  console.log('\n== Expensive Compute Logic ==');
  if (results.expensiveCompute.length === 0) {
    console.log('No expensive compute logic found.');
  } else {
    results.expensiveCompute.forEach(item => {
      console.log(`${item.file}: ${item.issue} (${item.count} occurrence(s))`);
    });
  }
  
  // Summary statistics
  const totalClassComponents = results.classComponents.reduce((sum, item) => sum + item.count, 0);
  const totalLargeFunctions = results.largeFunctions.length;
  const totalPerformanceIssues = results.performanceIssues.reduce((sum, item) => sum + item.count, 0);
  const totalExpensiveCompute = results.expensiveCompute.reduce((sum, item) => sum + item.count, 0);
  
  console.log('\n== Summary ==');
  console.log(`Total class components: ${totalClassComponents}`);
  console.log(`Total large functions: ${totalLargeFunctions}`);
  console.log(`Total performance issues: ${totalPerformanceIssues}`);
  console.log(`Total expensive compute patterns: ${totalExpensiveCompute}`);
}

/**
 * Main function to run the analysis
 */
async function main() {
  console.log('Analyzing claims-status application code...');
  
  try {
    const jsFiles = await findJsFiles(APP_DIR);
    console.log(`Found ${jsFiles.length} JavaScript/JSX files to analyze.`);
    
    for (const file of jsFiles) {
      await analyzeFile(file);
    }
    
    outputResults();
  } catch (error) {
    console.error('Error during analysis:', error);
  }
}

// Run the script
main();
```
