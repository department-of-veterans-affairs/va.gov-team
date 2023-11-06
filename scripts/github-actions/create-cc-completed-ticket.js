

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

async function main() {
  const repoId = await getVaGovTeamRepoId();
  console.log('repoId', repoId);
}

main();