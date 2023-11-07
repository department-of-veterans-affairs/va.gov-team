const axios = require('axios');

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

// instance for making ZenHub api calls
const axiosInstanceZH = axios.create({
  baseURL: 'https://api.zenhub.com/public/graphql',
  headers: {
    Authorization: `Bearer ${ZENHUB_API_KEY}`,
  }
});

// instance for making Github api calls
const axiosInstanceGH = axios.create({
  baseURL: `https://api.github.com/repos/${owner}/${repo}/`,
  headers: {
    'Authorization': `Bearer ${GITHUB_TOKEN}`,
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.github.v3+json',
  }
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
  const teamName = extract('### VFS team name', '### Product name', issue);
  const productName = extract('### Product name', '### Feature name', issue);
  const featureName = extract('### Feature name', '### GitHub label for product', issue);
  return { teamName, productName, featureName };
}

// generate the title of the "created" ticket
function getTitleInfo(issueBody) {
  const labelMap = {
    'cc-kickoff': 'Kickoff',
    'design-intent': 'Design Intent',
    'midpoint-review': 'Midpoint Review',
    'staging-review': 'Staging Review'
  }

  const touchpoint = labelMap[EVENT_LABEL];

  const { teamName, productName, featureName } = parse(issueBody);
  let titleInfo = `Completed: ${touchpoint} - ${teamName} - ${productName}`;
  if (productName !== featureName && featureName) {
    titleInfo = `${titleInfo}/${featureName}`
  }
  return titleInfo;
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
}

// get the id for a pipeline on the Gov Team board
async function getPipelineId(pipeline) {
  const query = `query GetPipelinesWorkspace($workspaceId: ID!) {
       workspace(id: $workspaceId) {
         pipelines {
     			name
           id
        }
     }}`

  const { data } = await axiosInstanceZH.post('', {
    query,
    variables: {
      workspaceId: GOV_TEAM_BOARD_ID
    }
  });
  const [{ id }] = data.data.workspace.pipelines.filter(_pipeline => _pipeline.name === pipeline);
  return id;
}

// get the id of an epic based upon title of a ZenHub issue
async function getEpicId(epicTitle) {
  const query = `query epicsFromWorkspace($workspaceId: ID!, $epicTitle: String!) {
    workspace(id: $workspaceId) {
      epics (first: 1, query: $epicTitle) {
        nodes {
          id
          issue {
            title
            number
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
  const [{ id }] = data.data.workspace.epics.nodes;
  return id;
}

// add an issue to an array of epics
async function addIssueToEpic(issueId, epicArray) {
  const query = `mutation AddIssuesToEpics($input: AddIssuesToEpicsInput!) {
    addIssuesToEpics(input: $input) {
        clientMutationId
    }
  }`;
  
  await axiosInstanceZH.post('', {
    query,
    variables: {
      input: {
        issueIds: [issueId],
        epicIds: epicArray
      }
    }
  });
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

  await axiosInstanceZH.post('', {
    query,
    variables: {
      input: {
        issueId,
        value
      }
    }
  });
}

// move issue to new pipeline
async function moveIssue(issueId, pipelineId) {
  const query = `mutation MoveIssue($input: MoveIssueInput!) {
    moveIssue(input: $input) {
        clientMutationId
    }
  }`;
  axiosInstanceZH.post('', {
    query,
    variables: {
      input: {
        pipelineId,
        issueId
      }
    }
  });
}

async function main() {
  try {
    // generate title for created ticket
    const data = await getGHIssue(ISSUE_NUMBER);
    const title = getTitleInfo(data.body);

    // create issue
    const repoId = await getVaGovTeamRepoId();
    const { id: newTicketId, number: newTicketNumber } = await createIssue(title, repoId);
  
    // add milestone to new ticket
    await addMilestone(newTicketNumber, data.milestone.number);

    //get id of epics
    const epicId = await getEpicId(data.title);
    const ccEpicId = await getEpicId(CUSTOMER_SUPPORT_EPIC_NAME);
  
    //update ticket
    await addIssueToEpic(newTicketId, [epicId, ccEpicId]);
    await setEstimate(newTicketId);
    await addIssueToCurrentSprint(newTicketId);

    //move to closed pipeline
    const closedId = await getPipelineId('Closed');
    await moveIssue(newTicketId, closedId);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
