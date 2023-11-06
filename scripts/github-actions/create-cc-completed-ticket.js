const axios = require('axios');

const {
  GITHUB_TOKEN,
  GITHUB_REPOSITORY,
  GOV_TEAM_BOARD_ID,
  ZENHUB_API_KEY
} = process.env;

const axiosInstance = axios.create({
  baseURL: 'https://api.zenhub.com/public/graphql',
  headers: {
    Authorization: `Bearer ${ZENHUB_API_KEY}`,
  }
});

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
    const {data} = await axiosInstance.post('', {
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
    const { data } = await axiosInstance.post('', {
      query,
      variables: {
        workspaceId: GOV_TEAM_BOARD_ID
      }
    });
    console.log(data.data.workspace);
    // const sprints = data.data.workspace.sprints.nodes;
    const id = findSprint(sprints);
    return id;
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  const repoId = await getVaGovTeamRepoId();
  const sprintId = await getSprintId();
  console.log('repoId', repoId);
  console.log('sprintId', sprintId);
}

main();