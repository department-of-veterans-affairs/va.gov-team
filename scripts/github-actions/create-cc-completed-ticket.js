const axios = require('axios');

const {
  GITHUB_TOKEN,
  GITHUB_REPOSITORY,
  ZENHUB_API_KEY,
  GOV_TEAM_BOARD_ID,
  ISSUE_NUMBER
} = process.env;

// const GOV_TEAM_BOARD_ID = '5f85b91c14d8df0018fac414';
const [owner, repo] = GITHUB_REPOSITORY.split('/');

const axiosInstanceZH = axios.create({
  baseURL: 'https://api.zenhub.com/public/graphql',
  headers: {
    Authorization: `Bearer ${ZENHUB_API_KEY}`,
  }
});

const axiosInstanceGH = axios.create({
  baseURL: `https://api.github.com/repos/${owner}/${repo}/`,
  headers: {
    'Authorization': `Bearer ${GITHUB_TOKEN}`,
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.github.v3+json',
  }
});

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

function getTitleInfo(issueBody) {
  const { teamName, productName, featureName } = parse(issueBody);
  let titleInfo = `Completed: Kickoff - ${teamName} - ${productName}`;
  if (productName !== featureName && featureName) {
    titleInfo = `${titleInfo}/${featureName}`
  }
  return titleInfo;
}

async function getGHIssue(number) {
  try {
    const URL = `issues/${number}`
    const {data} = await axiosInstanceGH.get(URL);
    return data; 
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

async function addMilestone(number, milestone) {
  try {
    const URL = `issues/${number}`
    await axiosInstanceGH.patch(URL, {
      milestone
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

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
  try {
    const {data} = await axiosInstanceZH.post('', {
      query
    });
    const repos = data.data.viewer.searchWorkspaces.nodes[0].repositoriesConnection.nodes;
    const [{ id }] = repos.filter(repo => repo.name === 'va.gov-team');
    return id;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

async function createIssue(title, repoId) {
  const query = `mutation createIssue {
    createIssue(input: {
        title: "${title}",
        repositoryId: "${repoId}",
        labels: ["governance-team"],
        assignees: ["it-harrison"]
    }) {
        issue {
            id
            title
            number
        }
    }
  }`
  try {
    const {data} = await axiosInstanceZH.post('', {
      query,
    });
    const { id, number } = data.data.createIssue.issue;
    return { id, number }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

function isWithinSprint(start, end) {
  const today = (new Date(Date.now())).setHours(0,0,0,0);
  const _start = new Date(start);
  const _end = new Date(end);
  return (today >= _start && today <= _end);
}

function checkSprint(sprint) {
  let [start, end] = sprint.replace('Sprint: ', '').split(' - ');
  const [year] = end.split(' ').reverse();
  start = `${start}, ${year}`;
  return isWithinSprint(start, end);
}

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
  try {
    const { data } = await axiosInstanceZH.post('', {
      query,
      variables: {
        workspaceId: GOV_TEAM_BOARD_ID
      }
    });
    const sprints = data.data.workspace.sprints.nodes;
    const id = findSprint(sprints);
    return id;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

async function addIssueToCurrentSprint(id) {
  const query = `mutation AddIssuesToSprints($input: AddIssuesToSprintsInput!) {
    addIssuesToSprints(input: $input) {
        clientMutationId
    }
  }`;
  try {
    const sprintId = await getSprintId();
    await axiosInstanceZH.post('', {
      query,
      variables: {
        input: {
          issueIds: [id],
          sprintIds: [sprintId]
        }
      }
    })
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

async function getPipelineId(pipeline) {
  const query = `query GetPipelinesWorkspace($workspaceId: ID!) {
       workspace(id: $workspaceId) {
         pipelines {
     			name
           id
        }
     }}`
  try {
    const { data } = await axiosInstanceZH.post('', {
      query,
      variables: {
        workspaceId: GOV_TEAM_BOARD_ID
      }
    });
    const [{ id }] = data.data.workspace.pipelines.filter(_pipeline => _pipeline.name === pipeline);
    return id;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

async function getIssueId(pipelineId, issueTitle) {
  const query = `query {
    searchIssuesByPipeline(
        pipelineId: "${pipelineId}",
        query: "${issueTitle}"
        filters: {}
    ) {
      nodes {
          id
          number
          title
      }
    }
    }
  `
  try {
    const { data } = await axiosInstanceZH.post('', {
      query,
    });
    const [{ id }] = data.data.searchIssuesByPipeline.nodes
    return id;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

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
  try {
    const { data } = await axiosInstanceZH.post('', {
      query,
      variables: {
        workspaceId: GOV_TEAM_BOARD_ID,
        epicTitle
      }
    });
    const [{ id }] = data.data.workspace.epics.nodes;
    return id;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

async function addIssueToEpic(issueId, epicId, ccEpicId) {
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
          epicIds: [epicId, ccEpicId]
        }
      }
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

async function setEstimate(issueId, value) {
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
    })
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

async function moveIssue(issueId, pipelineId) {
  const query = `mutation MoveIssue($input: MoveIssueInput!) {
    moveIssue(input: $input) {
        clientMutationId
    }
  }`;
  try {
    axiosInstanceZH.post('', {
      query,
      variables: {
        input: {
          pipelineId,
          issueId
        }
      }
    })
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

async function main() {
  // generate title for created ticket
  const data = await getGHIssue(67119);
  let title = getTitleInfo(data.body);
  title = `TEST: ${title}`;

  // create issue
  const repoId = await getVaGovTeamRepoId();
  const { id: newTicketId, number: newTicketNumber } = await createIssue(title, repoId);
  
  // add milestone to new ticket
  await addMilestone(newTicketNumber, data.milestone.number);

  //get id of epics
  const epicId = await getEpicId(data.title);
  const ccEpicId = await getEpicId(CUSTOMER_SUPPORT_EPIC_NAME);
  
  //update ticket
  await addIssueToEpic(newTicketId, epicId, ccEpicId);
  await setEstimate(newTicketId, 3);
  await addIssueToCurrentSprint(newTicketId);

  //move to closed pipeline
  const closedId = await getPipelineId('Review/QA');
  await moveIssue(newTicketId, closedId);
}

main();