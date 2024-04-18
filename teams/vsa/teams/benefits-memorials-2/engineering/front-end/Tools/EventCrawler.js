const fs = require("fs").promises;
const path = require("path");

async function findRecordEvent(dirPath, results) {
  try {
    const files = await fs.readdir(dirPath, { withFileTypes: true });
    await Promise.all(
      files.map(async (file) => {
        if (file.isDirectory()) {
          await findRecordEvent(path.join(dirPath, file.name), results);
        } else if (file.name.endsWith(".js") || file.name.endsWith(".jsx")) {
          const filePath = path.join(dirPath, file.name);
          const contents = await fs.readFile(filePath, "utf8");
          const regex = /recordEvent\((\{[\s\S]*?\})\);?/g;
          let match;
          // eslint-disable-next-line no-cond-assign
          while ((match = regex.exec(contents)) !== null) {
            const relativePath = path.relative(__dirname, filePath);
            results.push(`${relativePath} --- ${match[1]}`);
          }
        }
      })
    );
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Error processing directory ${dirPath}: ${err}`);
  }
}

function safeParseEventDetails(eventDetails) {
  // Extract the event name using a regular expression.
  const eventMatch = eventDetails.match(
    /event:\s*(?:[`'"])?([^\s,`'"]+)(?:[`'"],)?/
  );
  const eventName = eventMatch ? eventMatch[1] : "Unknown";

  // Flatten additional properties to a string that's safe for Markdown.
  // This involves removing line breaks and trimming trailing commas.
  const additionalProps = eventDetails
    .replace(/event:\s*['"][^'"]+['"],?\s*/, "") // Remove the 'event' property
    .replace(/\s*\n\s*/g, " ") // Remove newlines and excess whitespace
    .replace(/,\s*$/, ""); // Remove trailing commas

  return {
    event: eventName,
    additionalProps: additionalProps.replace(/'/g, `"`), // Replace single quotes with double quotes for consistency
  };
}

async function writeResultsToFile(results, outputFile) {
  const tableRows = results.map((result) => {
    const [filePath, eventDetails] = result.split(" --- ");
    const { event: eventName, additionalProps } =
      safeParseEventDetails(eventDetails);

    // Ensuring additionalProps are displayed in a single line and Markdown-safe
    const formattedAdditionalProps =
      additionalProps.length > 0 ? `\`${additionalProps}\`` : "-";

    return `| ${filePath} | ${eventName} | ${formattedAdditionalProps} |`;
  });

  const tableHeader = `| File Path | Event Name | Additional Properties |\n|-----------|-----------|----------------------|`;
  const markdownTable = `${tableHeader}\n${tableRows.join("\n")}`;

  await fs.writeFile(outputFile, markdownTable, "utf8");
  // eslint-disable-next-line no-console
  console.log(`Results written to ${outputFile}`);
}

(async () => {
  const args = process.argv.slice(2);
  if (args.length !== 2) {
    // eslint-disable-next-line no-console
    console.log("Usage: node EventCrawler.js <directory> <output-file>");
    process.exit(1);
  }

  const directory = args[0];
  const outputFile = args[1];

  const results = [];
  await findRecordEvent(directory, results);
  await writeResultsToFile(results, outputFile);
})();
