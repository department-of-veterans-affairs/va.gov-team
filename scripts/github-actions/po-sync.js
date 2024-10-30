const axios = require('axios');
const axiosRetry = require('axios-retry');

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

async function getBoardFields(projectId) {
  const query = `
    query getFields($projectId: ID!, $after: String) {
      node(id: $projectId) {
        ... on ProjectV2 {
          fields(first: 100, after: $after) {
            nodes {
              ... on ProjectV2SingleSelectField {
                id
                name
                options {
                  name
                  id
                }
              }
              ... on ProjectV2IterationField {
                id
                name
              }
              ... on ProjectV2Field {
                id
                name
              }
            }
            pageInfo {
              endCursor
              hasNextPage
            }
          }
        }
      }
    }
  `;
  const fields = [];
  let after = "";
  while (true) {
    const { data: { data } } = await axiosInstance.post('',
      {
        query,
        variables: {
          projectId,
          after: after
        }
      }
    );
    fields.push(...data.node.fields.nodes);
    const { node: { fields: { pageInfo } } } = data;
    if (pageInfo.hasNextPage) {
      after = pageInfo.endCursor;
    } else {
      break;
    }
  }
  return fields;
}

async function getPOSyncField(projectId) {
  const fields = await getBoardFields(projectId);
  for (const field of fields) {
    if (field.name === 'PO Sync') {
      return field;
    }
  }
  throw new Error('could not find PO Sync id');
}

async function updateIssue(projectId, itemId, fieldId, optionId) {
  const mutation = `
    mutation UpdateField($projectId: ID!, $itemId: ID!, $fieldId: ID!, $optionId: String!) {
      updateProjectV2ItemFieldValue(input: {
        projectId: $projectId,
        itemId: $itemId,
        fieldId: $fieldId,
        value: {
          singleSelectOptionId: $optionId
        }
      }
    ) {
      projectV2Item {
        id
      }
    }
  }`;
  await axiosInstance.post('',
    {
      query: mutation,
      variables: {
        projectId,
        itemId,
        fieldId,
        optionId
      }
    },
  );
}

async function getProjectId2() {
  const query = `
    query ProjectID {
      organization(login: "${owner}"){
        projectV2(number: ${PROJECT_NUMBER}) {
          id
        }
      }
    }
  `;

  const { data: { data: { organization: { projectV2 } } } } = await axiosInstance.post('',
      { query },
    )
  return projectV2.id;
}

async function getProjectItems(projectId) {
  const query = `
    query GetProjectItems($projectId: ID!, $after: String) {
      node(id: $projectId) {
        ... on ProjectV2 {
          items(first: 100, after: $after) {
            nodes {
              id
              content {
                ... on Issue {
                  id
                  title
                }
              }
            }
            pageInfo {
              endCursor
              hasNextPage
            }
          }
        }
      }
    }
  }`;
  const items = [];
  let after = "";
  while (true) {
    const { data: { data } } = await axiosInstance.post(
      '',
      {
        query,
        variables: {
          projectId,
          after: after
        }
      },
    );
    items.push(...data.node.items.nodes);
    const { node: { items: { pageInfo } } } = data;
    if (pageInfo.hasNextPage) {
      after = pageInfo.endCursor;
    } else {
      break;
    }
  }
  return items;
}

async function getItemId(projectId, title) {
  const items = await getProjectItems(projectId);
  const [{ id }] = items.filter(item => item.content.title === title);
  return id;
}

async function main() {
  try {
    const projectId = await getProjectId2();
    const { id: fieldId, options} = await getPOSyncField(projectId);
    const [{id: optionId}] = options.filter(option => option.name === 'Approved');
    const itemId = await getItemId(projectId, ISSUE_TITLE);
    await updateIssue(projectId, itemId, fieldId, optionId);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
