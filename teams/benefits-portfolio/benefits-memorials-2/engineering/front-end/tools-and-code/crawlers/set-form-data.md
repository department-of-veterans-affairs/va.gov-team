
Crawls directory and outputs the path and content inside of `setFormData`

Example:
| File Path | Form Data |
|-----------|-----------|
| containers/App.jsx | `{ ...formData, reviewNavigation: shouldShowReviewButton, }` |
| containers/App.jsx | `{ ...formData, personalData: { ...personalData, veteranContactInformation: { email: email?.emailAddress, mobilePhone, address: mailingAddress, }, }, }` |

```js
const fs = require('fs').promises;
const path = require('path');

async function findSetFormData(dirPath, results) {
  try {
    const files = await fs.readdir(dirPath, { withFileTypes: true });
    await Promise.all(
      files.map(async file => {
        if (file.isDirectory()) {
          await findSetFormData(path.join(dirPath, file.name), results);
        } else if (file.name.endsWith('.js') || file.name.endsWith('.jsx')) {
          const filePath = path.join(dirPath, file.name);
          const contents = await fs.readFile(filePath, 'utf8');
          const regex = /setFormData\((\{[\s\S]*?\})\);?/g;
          let match;
          // eslint-disable-next-line no-cond-assign
          while ((match = regex.exec(contents)) !== null) {
            const relativePath = path.relative(__dirname, filePath);
            results.push(`${relativePath} --- ${match[1]}`);
          }
        }
      }),
    );
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Error processing directory ${dirPath}: ${err}`);
  }
}

function safeParseFormData(formData) {
  // Extract the main object properties using a regular expression.
  // Replace single quotes with double quotes for consistency

  return formData
    .replace(/\s*\n\s*/g, ' ') // Remove newlines and excess whitespace
    .replace(/,\s*$/, '') // Remove trailing commas
    .replace(/'/g, `"`);
}

async function writeResultsToFile(results, outputFile) {
  const tableRows = results.map(result => {
    const [filePath, formData] = result.split(' --- ');
    const formattedProps = safeParseFormData(formData);

    return `| ${filePath} | \`${formattedProps}\` |`;
  });

  const tableHeader = `| File Path | Form Data |\n|-----------|-----------|`;
  const markdownTable = `${tableHeader}\n${tableRows.join('\n')}`;

  await fs.writeFile(outputFile, markdownTable, 'utf8');
  // eslint-disable-next-line no-console
  console.log(`Results written to ${outputFile}`);
}

(async () => {
  const args = process.argv.slice(2);
  if (args.length !== 2) {
    // eslint-disable-next-line no-console
    console.log('Usage: node FormDataCrawler.js <directory> <output-file>');
    process.exit(1);
  }

  const directory = args[0];
  const outputFile = args[1];

  const results = [];
  await findSetFormData(directory, results);
  await writeResultsToFile(results, outputFile);
})();
```
