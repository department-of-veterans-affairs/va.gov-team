const fs = require("fs");
const fetch = require('node-fetch');

const {
  GITHUB_TOKEN,
  GITHUB_REPOSITORY,
} = process.env;

const [owner, repo] = GITHUB_REPOSITORY.split('/');

const ENDPOINT = `https://api.github.com/repos/${owner}/${repo}/issues/65064`;

function extract(first, last, issue) {
  const [_, _name] = issue.split(first);
  const [name] = _name.split(last);
  const target = name.replace(/[\n\r]/g, '');
  return target;
}

function parse(issue) {
  const teamName = extract('### VFS team name', '### Product name', issue);
  const productName = extract('### Product name', '### Feature name', issue);
  const featureName = extract('### Feature name', '### GitHub label for product', issue);
  return { teamName, productName, featureName };
}

function removeParens(title) {
  return title.replace(/\(/g, '[').replace(/\)/g, ']');
}

async function getTeamInfo() {
  try {
    const response = await fetch(ENDPOINT);
    const { body } = await response.json();
    const { teamName, productName, featureName } = parse(body);
    let titleInfo = `Completed: Kickoff - ${teamName} - ${productName}`;
    if (productName !== featureName && featureName) {
      titleInfo = `${titleInfo}/${featureName}`
    }

    const response2 = await fetch(ENDPOINT, {
      method: 'post',
      body: {
        title: titleInfo,
        body: 'this is a test'
      },
      headers: {
        'authorization': `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    const r2 = await response2.json();
    console.log('r2 is....', r2);

    fs.writeFileSync("issue_title.txt", removeParens(titleInfo));
  } catch (error) {
    process.exitCode = 1;
  }
}

getTeamInfo();
