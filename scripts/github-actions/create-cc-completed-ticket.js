const fetch = require('fetch');

const {
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

async function getTeamInfo() {
  try {
    const response = await fetch(ENDPOINT);
    const { body } = await response.json();
    const { teamName, productName, featureName } = parse(body);
    let titleInfo = `Completed: Kickoff - ${teamName} - ${productName}`;
    if (productName !== featureName && featureName) {
      titleInfo = `${titleInfo}/${featureName}`
    }
    console.log(`echo "{titleInfo}=${titleInfo}" >> $GITHUB_OUTPUT`);
  } catch (error) {
    process.exitCode = 1;
  }
}

getTeamInfo();
