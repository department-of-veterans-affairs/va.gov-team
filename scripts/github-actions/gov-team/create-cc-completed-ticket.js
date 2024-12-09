const axios = require('axios');
const axiosRetry = require('axios-retry');

const {
  getProjectId2,
  getProjectField,
  getItemId,
  updateIssue,
} = require("./shared");
const { sleep } = require('./utils');

const {
  GOV_TEAM_TOKEN,
  GITHUB_REPOSITORY,
  ISSUE_NUMBER,
  EVENT_LABEL,
  GOV_TEAM_PROJECT_BOARD_NUMBER
} = process.env;

const CUSTOMER_SUPPORT_EPIC_NAME = 'Governance Team Collaboration Cycle Customer Support';
const [owner, repo] = GITHUB_REPOSITORY.split('/');

const TICKET_STRINGS = {
  teamName: "### VFS team name",
  productName: "### Product name",
  featureName: "### Feature name",
  labelText: "### GitHub label for",
};

const axiosInstanceGH = axios.create({
  baseURL: `https://api.github.com/repos/${owner}/${repo}/`,
  headers: {
    Authorization: `Bearer ${GOV_TEAM_TOKEN}`,
    "Content-Type": "application/json",
    Accept: "application/vnd.github.v3+json",
  },
});

axiosRetry(axiosInstanceGH, {
  retries: 5, retryDelay: axiosRetry.exponentialDelay
});

const axiosInstanceGPL = axios.create({
  baseURL: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${GOV_TEAM_TOKEN}`,
    "Content-Type": "application/json",
    "GraphQL-Features": "sub_issues",
  },
});

axiosRetry(axiosInstanceGPL, {
  retries: 5, retryDelay: axiosRetry.exponentialDelay
});

// extract data from issue body bordered by two strings
function extract(first, last, issue) {
  const [_, _name] = issue.split(first);
  const [name] = _name.split(last);
  const target = name.replace(/[\n\r]/g, "");
  return target;
}

// assemble the relevant data from the issue body for the title
function parse(issue) {
  const teamName = extract(
    TICKET_STRINGS.teamName,
    TICKET_STRINGS.productName,
    issue
  );
  const productName = extract(
    TICKET_STRINGS.productName,
    TICKET_STRINGS.featureName,
    issue
  );
  const featureName = extract(
    TICKET_STRINGS.featureName,
    TICKET_STRINGS.labelText,
    issue
  );
  return { teamName, productName, featureName };
}

// make sure ticket body can be parsed
function checkIfTicketValid(issueBody) {
  for (const value of Object.values(TICKET_STRINGS)) {
    if (!issueBody.includes(value)) {
      return false;
    }
  }
  return true;
}

//get the current touchpoint of the CC-Request ticket
function getTouchpoint() {
  const labelMap = {
    "cc-kickoff": "Kickoff",
    "design-intent": "Design Intent",
    "midpoint-review": "Midpoint Review",
    "staging-review": "Staging Review",
  };
  return labelMap[EVENT_LABEL];
}

// generate the title of the "created" ticket
function getTitleInfo(issueBody) {
  let title = `Completed: ${getTouchpoint()}`;
  if (checkIfTicketValid(issueBody)) {
    const { teamName, productName, featureName } = parse(issueBody);
    title = `${title} - ${teamName} - ${productName}`;
    if (featureName && productName !== featureName) {
      title = `${title}/${featureName}`;
    }
  }
  return title;
}

// retrieve GH ticket
async function getGHIssue(number) {
  const URL = `issues/${number}`;
  const { data } = await axiosInstanceGH.get(URL);
  return data;
}

// close the completed ticket
async function closeIssue(number) {
  const URL = `issues/${number}`;
  await axiosInstanceGH.patch(URL, {
    state: "closed",
  });
}

// create completed ticket
async function createCompletedTicket(title, milestone) {
  const payload = {
    owner,
    repo,
    title,
    body: "This ticket is for Platform tracking purposes only. There is no VFS action needed.",
    labels: [EVENT_LABEL, "governance-team"],
  }

  if (milestone !== null) {
    payload.milestone = milestone;
  }

  const { data: { number } } = await axiosInstanceGH.post("issues", payload);
  return number;
}

async function linkSubIssue(initiativeId, issueId) {
  const mutation = `
  mutation addSubIssue {
    addSubIssue(input: { issueId: "${initiativeId}", subIssueId: "${issueId}" }) {
      issue {
        title
      }
      subIssue {
        title
      }
    }
  }`;
  const data = await axiosInstanceGPL.post("", {
    query: mutation,
  });
  return data;
}

async function getInitiativeTicketId() {
  const query = `
      query($text: String!) {
      search(query: $text, type: ISSUE, first: 1) {
        edges {
          node {
            ... on Issue {
              id
            }
          }
        }
      }
    }
  `;

  const {
    data: {
      data: {
        search: { edges },
      },
    },
  } = await axiosInstanceGPL.post("", {
    query,
    variables: {
      text: `"${CUSTOMER_SUPPORT_EPIC_NAME}:" in:title sort:created-desc`,
    },
  });

  const [{ node: { id } }] = edges;
  return id;
}

async function getIssueId(number) {
  const query = `
    query  {
    repository(owner: "${owner}", name: "${repo}") {
      issue(number: ${number}) {
        id
      }
    }
  }`;
  const {
    data: {
      data: {
        repository: {
          issue: { id },
        },
      },
    },
  } = await axiosInstanceGPL.post("", {
    query,
  });

  return id;
}

function getSprintId(sprints) {
  const now = Date.now();
  for (const i = 0; i < sprints.length - 2; i++) {
    const { startDate: start, id } = sprints[i];
    const { startDate: end } = sprints[i + 1];
    if (new Date(start) <= now && now < new Date(end)) {
      return id;
    }
  }
}

function doPointMap({ name }) {
  return (
    name ===
    {
      "staging-review": "8",
      "midpoint-review": "5",
      "design-intent": "5",
    }[EVENT_LABEL]
  );
}

async function main() {
  try {
    const { body, milestone } = await getGHIssue(ISSUE_NUMBER);
    const newTitle = getTitleInfo(body);
    const _milestone = milestone?.number ?? null;

    // create completed ticket
    const newTicketNumber = await createCompletedTicket(newTitle, _milestone);

    // close ticket
    await closeIssue(newTicketNumber);
    
    // let things settle
    await sleep(1000);

    // link completed ticket to parent
    const newTicketId = await getIssueId(newTicketNumber);
    const initiativeId = await getInitiativeTicketId();
    await linkSubIssue(initiativeId, newTicketId);

    // update sprint and point fields in project board
    const projectId = await getProjectId2(owner, GOV_TEAM_PROJECT_BOARD_NUMBER);
    const itemId = await getItemId(projectId, newTitle);

    // only update an item's fields if we have the item's id
    if (itemId) {
      // Sprint
      const sprintData = await getProjectField(projectId, "Sprint");
      if (sprintData !== null) {
        const { id: sprintFieldId, configuration: { iterations: sprints } } = sprintData;
        const sprintOptionId = getSprintId(sprints);
        
        if (sprintOptionId) {
          await updateIssue(
            projectId,
            itemId,
            sprintFieldId,
            sprintOptionId,
            true
          );
        }
      }
      // Points
      const pointData = await getProjectField(projectId, "Points");
      if (pointData !== null) {
        const { id: pointFieldId, options: pointOptions } = pointData;
        const [{ id: pointOptionId }] = pointOptions.filter(doPointMap);
        
        if (pointOptionId) {
          await updateIssue(
            projectId,
            itemId,
            pointFieldId,
            pointOptionId,
          );
        }
      }
    } 
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
