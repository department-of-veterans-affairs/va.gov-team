const axios = require('axios');
const axiosRetry = require('axios-retry');
const {
  getProjectId2,
  getProjectField,
  getItemId,
  updateIssue,
} = require("./shared");

const {
  GOV_TEAM_TOKEN,
  GITHUB_REPOSITORY,
  PROJECT_NUMBER,
  ISSUE_TITLE
} = process.env;


const [owner, _] = GITHUB_REPOSITORY.split('/');

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${GOV_TEAM_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

axiosRetry(axiosInstance, {
  retries: 5,
  retryDelay: axiosRetry.exponentialDelay
})

async function main() {
  try {
    const projectId = await getProjectId2(owner, PROJECT_NUMBER);
    const { id: fieldId, options} = await getProjectField(projectId, "PO Sync");
    const [{id: optionId}] = options.filter(option => option.name === 'Approved');
    const itemId = await getItemId(projectId, ISSUE_TITLE);
    await updateIssue(projectId, itemId, fieldId, optionId);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
