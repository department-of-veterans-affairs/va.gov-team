```js
const fs = require('fs');
const glob = require('glob');

const outputFile = './aria-results.txt';

// Function to search for aria attributes
const searchForAttributes = filePath => {
  let content;

  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error reading file ${filePath}:`, error);
    return { found: [], notFound: [filePath] };
  }

  let matchesFound = false;
  const results = [];
  const regexQuoted = /\s(aria-label|aria-labelledby|ariaLabel|close-btn-aria-label)=["']([^"']*)["']/g;
  const regexJSX = /\s(aria-label|aria-labelledby|ariaLabel|close-btn-aria-label)={([^}]*)}/g;
  let match;

  // Check for quoted attributes
  // eslint-disable-next-line no-cond-assign
  while ((match = regexQuoted.exec(content)) !== null) {
    matchesFound = true;
    results.push(`${filePath}: ${match[1]}="${match[2]}"`);
  }

  // Check for JSX expressions
  // eslint-disable-next-line no-cond-assign
  while ((match = regexJSX.exec(content)) !== null) {
    matchesFound = true;
    results.push(`${filePath}: ${match[1]}={${match[2]}}`);
  }

  return {
    found: matchesFound ? results : [],
    notFound: matchesFound ? [] : [filePath],
  };
};

// Starts the glob pattern match to find all relevant files
glob('./components/**/*.{jsx,js,html}', (err, files) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error('Error finding files:', err);
    return;
  }

  const found = [];
  const notFound = [];

  files.forEach(file => {
    const result = searchForAttributes(file);
    found.push(...result.found);
    notFound.push(...result.notFound);
  });

  const foundResults = found.join('\n');
  const notFoundResults = notFound.join(
    '\nNo aria-label or aria-labelledby attributes found in ',
  );

  const allResults = `Found aria-label or aria-labelledby attributes in:\n${foundResults}\n\nNo aria-label or aria-labelledby attributes found in:\n${notFoundResults}`;

  fs.writeFileSync(outputFile, allResults);
  // eslint-disable-next-line no-console
  console.log(`Results written to ${outputFile}`);
});
```
