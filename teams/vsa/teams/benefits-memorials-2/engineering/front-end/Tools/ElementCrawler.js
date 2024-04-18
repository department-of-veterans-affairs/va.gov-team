const fs = require('fs').promises;
import path from  'path/posix'

async function findCustomElementsWithoutUSWDS(dirPath, results) {
  try {
    const files = await fs.readdir(dirPath, { withFileTypes: true });
    await Promise.all(
      files.map(async file => {
        if (file.isDirectory()) {
          await findCustomElementsWithoutUSWDS(
            path.join(dirPath, file.name),
            results,
          );
        } else if (file.name.endsWith('.js') || file.name.endsWith('.jsx')) {
          const filePath = path.join(dirPath, file.name);
          const contents = await fs.readFile(filePath, 'utf8');
          // Adjusted regex to find <va- elements
          const regex = /<Va[\w-]+(\s+[^>]*?)?>/g;
          let match;
          // eslint-disable-next-line no-cond-assign
          while ((match = regex.exec(contents)) !== null) {
            // Check if the found tag does not include 'uswds' attribute
            if (!match[0].includes('uswds')) {
              const relativePath = path.relative(__dirname, filePath);
              results.push(`${relativePath} --- ${match[0]}`);
            }
          }
        }
      }),
    );
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Error processing directory ${dirPath}: ${err}`);
  }
}

async function writeResultsToFile(results) {
  try {
    const markdownList = results
      .map(result => {
        const [filePath, snippet] = result.split(' --- ');
        const formattedSnippet = snippet
          // Use a single replace with a regex capturing all special characters
          .replace(/[\n`|{}\[\]]/g, match => {
            // Map each character to its escaped version
            const escapeMap = {
              '\n': ' ', // Convert newlines to spaces
              '`': '\\`',
              '|': '\\|',
              '{': '\\{',
              '}': '\\}',
              '[': '\\[',
              ']': '\\]',
            };
            return escapeMap[match] || match; // Use the escaped version or default to the original
          });
        return `- **Path**: ${filePath}\n  **Snippet**:\n  \`\`\`jsx\n  ${formattedSnippet}\n  \`\`\``;
      })
      .join('\n\n');

    await fs.writeFile('output.md', markdownList.trim(), 'utf8');
    // eslint-disable-next-line no-console
    console.log('Results written to output.md');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Error writing to file: ${err}`);
  }
}

(async () => {
  const results = [];
  await findCustomElementsWithoutUSWDS(__dirname, results);
  await writeResultsToFile(results);
})();
