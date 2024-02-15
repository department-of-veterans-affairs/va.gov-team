const axios = require('axios');
const axiosRetry = require('axios-retry');

const {
  GITHUB_TOKEN,
  GITHUB_REPOSITORY,
  ZENHUB_API_KEY,
  GOV_TEAM_BOARD_ID,
  ISSUE_NUMBER,
  EVENT_LABEL
} = process.env;

const CUSTOMER_SUPPORT_EPIC_NAME = 'Governance Team Collaboration Cycle Customer Support';

const [owner, repo] = GITHUB_REPOSITORY.split('/');

const TICKET_STRINGS = {
  teamName: '### VFS team name',
  productName: '### Product name',
  featureName: '### Feature name',
  labelText: '### GitHub label for'
}

const axiosInstanceZH = axios.create({
  baseURL: 'https://api.zenhub.com/public/graphql',
  headers: {
    Authorization: `Bearer ${ZENHUB_API_KEY}`,
  }
});

// instance for making ZenHub api calls
axiosRetry(axiosInstanceZH, {
  retries: 5, retryDelay: axiosRetry.exponentialDelay
});

const axiosInstanceGH = axios.create({
  baseURL: `https://api.github.com/repos/${owner}/${repo}/`,
  headers: {
    'Authorization': `Bearer ${GITHUB_TOKEN}`,
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.github.v3+json',
  }
});

// instance for making Github api calls
axiosRetry(axiosInstanceGH, {
  retries: 5, retryDelay: axiosRetry.exponentialDelay
});

// extract data from issue body bordered by two strings
function extract(first, last, issue) {
  const [_, _name] = issue.split(first);
  const [name] = _name.split(last);
  const target = name.replace(/[\n\r]/g, '');
  return target;
}

// assemble the relevant data from the issue body for the title
function parse(issue) {
  const teamName = extract(TICKET_STRINGS.teamName, TICKET_STRINGS.productName, issue);
  const productName = extract(TICKET_STRINGS.productName, TICKET_STRINGS.featureName, issue);
  const featureName = extract(TICKET_STRINGS.featureName, TICKET_STRINGS.labelText, issue);
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
    'cc-kickoff': 'Kickoff',
    'design-intent': 'Design Intent',
    'midpoint-review': 'Midpoint Review',
    'staging-review': 'Staging Review'
  }

  return labelMap[EVENT_LABEL];
}

// generate the title of the "created" ticket
function getTitleInfo(issueBody) {
  let title = `Completed: ${getTouchpoint()}`;
  if (checkIfTicketValid(issueBody)) {
    const { teamName, productName, featureName } = parse(issueBody);
    title = `${title} - ${teamName} - ${productName}`;
    if (featureName && productName !== featureName) {
      title = `${title}/${featureName}`
    }
  }
  return title;
}

// retrieve GH ticket
async function getGHIssue(number) {
  const URL = `issues/${number}`
  const {data} = await axiosInstanceGH.get(URL);
  return data; 
}

// add milestone to a GH ticket
async function addMilestone(number, milestone) {
  const URL = `issues/${number}`
  await axiosInstanceGH.patch(URL, {
    milestone
  });
}

// close the completed ticket
async function closeIssue(number) {
  const URL = `issues/${number}`;
  await axiosInstanceGH.patch(URL, {
    state: "closed"
  });
}

// get the va.gov-team's repo id
async function getVaGovTeamRepoId() {
  const query = `query {
    viewer {
      id
      searchWorkspaces(query: "Platform Governance Team") {
          nodes {
              id
              name
              repositoriesConnection {
                  nodes {
                      id
                      name
                  }
              }
          }
      }
    }
    }`;

  const {data} = await axiosInstanceZH.post('', {
    query
  });
  const repos = data.data.viewer.searchWorkspaces.nodes[0].repositoriesConnection.nodes;
  const [{ id }] = repos.filter(repo => repo.name === 'va.gov-team');
  return id;
}

// create an issue via ZenHub
async function createIssue(title, repoId) {
  const query = `mutation createIssue {
    createIssue(input: {
        title: "${title}",
        repositoryId: "${repoId}",
        labels: ["governance-team"],
        assignees: ["shiragoodman"],
        body: "This ticket is for Platform tracking purposes only. There is no VFS action needed."
    }) {
        issue {
            id
            title
            number
        }
    }
  }`

  const {data} = await axiosInstanceZH.post('', {
    query,
  });
  const { id, number } = data.data.createIssue.issue;
  return { id, number }
}

// check if today's date is within the bounds of a sprint
function isWithinSprint(start, end) {
  const today = (new Date(Date.now())).setHours(0,0,0,0);
  const _start = new Date(start);
  const _end = new Date(end);
  return (today >= _start && today <= _end);
}

// parse the sprint text to check date
function checkSprint(sprint) {
  let [start, end] = sprint.replace('Sprint: ', '').split(' - ');
  const [year] = end.split(' ').reverse();
  start = `${start}, ${year}`;
  return isWithinSprint(start, end);
}

// return current sprint
function findSprint(sprints) {
  for (const sprint of sprints) {
    if (checkSprint(sprint.name)) {
      return sprint.id;
    }
  }
  return null;
}

async function getSprintId() {
  const query = `query GetSprints($workspaceId: ID!) {
    workspace(id: $workspaceId) {
      sprints (first: 100) {
        nodes {
          id
          name
        }
    }
  }}`

  const { data } = await axiosInstanceZH.post('', {
    query,
    variables: {
      workspaceId: GOV_TEAM_BOARD_ID
    }
  });
  const sprints = data.data.workspace.sprints.nodes;
  return findSprint(sprints);
}

// add ZenHub issue to the current sprint if today is part of a sprint
async function addIssueToCurrentSprint(id) {
  const query = `mutation AddIssuesToSprints($input: AddIssuesToSprintsInput!) {
    addIssuesToSprints(input: $input) {
        clientMutationId
    }
  }`;

  try {
    const sprintId = await getSprintId();
    if (sprintId) {
      await axiosInstanceZH.post('', {
        query,
        variables: {
          input: {
            issueIds: [id],
            sprintIds: [sprintId]
          }
        }
      });
    }
  } catch {
    console.log('error in addIssueToCurrentSprint');
  }
}

// get the id of an epic based upon title of a ZenHub issue
async function getEpicId(epicTitle, returnLabelId) {
  const query = `query epicsFromWorkspace($workspaceId: ID!, $epicTitle: String!) {
    workspace(id: $workspaceId) {
      epics (first: 1, query: $epicTitle) {
        nodes {
          id
          issue {
            labels {
              nodes {
                id
                name
              }
            }
          }
        }
      }
    }
  }`

  const { data } = await axiosInstanceZH.post('', {
    query,
    variables: {
      workspaceId: GOV_TEAM_BOARD_ID,
      epicTitle
    }
  });
  
  const [{ id: epicId, issue }] = data.data.workspace.epics.nodes;
  let labelId = null;

  // get the id of the label added to the CC Request ticket so that it can be added to the completed ticket
  if (returnLabelId) {
    const [{ id }] = issue.labels.nodes.filter(label => label.name === EVENT_LABEL);
    labelId = id;
  }
  return { epicId, labelId };
}

// add an issue to an array of epics
async function addIssueToEpic(issueId, epicArray) {
  const query = `mutation AddIssuesToEpics($input: AddIssuesToEpicsInput!) {
    addIssuesToEpics(input: $input) {
        clientMutationId
    }
  }`;
  

  try {
    await axiosInstanceZH.post('', {
      query,
      variables: {
        input: {
          issueIds: [issueId],
          epicIds: epicArray
        }
      }
    });
  } catch {
    console.log('error in addIssueToEpic');
  }
}

// set point estimate of completed ticket based on touchpoint
async function setEstimate(issueId) {
  // get value of this completed ticket based on touchpoint
  const valueMap = {
    'cc-kickoff': 1,
    'design-intent': 5,
    'midpoint-review': 5,
    'staging-review': 8
  }

  const value = valueMap[EVENT_LABEL];

  const query = `mutation SetEstimate($input: SetEstimateInput!) {
    setEstimate(input: $input) {
        clientMutationId
    }
  }`;

  try {
    await axiosInstanceZH.post('', {
      query,
      variables: {
        input: {
          issueId,
          value
        }
      }
    });
  } catch {
    console.log('error in setEstimate');
  }
  
}

async function addLabelToIssue(issueId, labelId) {
  const query = `mutation AddLabelsToIssues($input: AddLabelsToIssuesInput!) {
    addLabelsToIssues(input: $input) {
      clientMutationId
    }
  }`;
  
  try {
    await axiosInstanceZH.post('', {
      query,
      variables: {
        input: {
          issueIds: [issueId],
          labelIds: [labelId]
        }
      }
    });
  } catch {
    console.log('error in addLabelToIssue');
  }
}

function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function main() {
  try {    
    // generate title for created ticket
    const { title, body, milestone } = await getGHIssue(ISSUE_NUMBER);
    const newTitle = getTitleInfo(body);

    // create completed ticket
    const repoId = await getVaGovTeamRepoId();
    const { id: newTicketId, number: newTicketNumber } = await createIssue(newTitle, repoId);
  
    // add milestone to new ticket
    await addMilestone(newTicketNumber, milestone.number);

    //get ids of epics
    const { epicId, labelId } = await getEpicId(title, true);

    const { epicId: ccEpicId } = await getEpicId(CUSTOMER_SUPPORT_EPIC_NAME, false);
  
    // update completed ticket
    await addLabelToIssue(newTicketId, labelId);

    await addIssueToCurrentSprint(newTicketId);

    await setEstimate(newTicketId);

    await addIssueToEpic(newTicketId, [epicId, ccEpicId]);

    // close the completed ticket
    await closeIssue(newTicketNumber);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
