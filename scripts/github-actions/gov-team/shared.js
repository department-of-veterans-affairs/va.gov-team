const axios = require('axios');
const axiosRetry = require('axios-retry');

const {
  GOV_TEAM_TOKEN,
} = process.env;

const axiosInstance = axios.create({
  baseURL: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${GOV_TEAM_TOKEN}`,
    "Content-Type": "application/json",
    "GraphQL-Features": "sub_issues",
  },
});

axiosRetry(axiosInstance, {
  retries: 5, retryDelay: axiosRetry.exponentialDelay
});

async function getProjectId2(owner, projectNumber) {
  const query = `
    query ProjectID {
      organization(login: "${owner}"){
        projectV2(number: ${projectNumber}) {
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
                configuration {
                iterations {
                  id
                  title
                  startDate
                }
            }
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

// like Points, Sprint
async function getProjectField(projectId, fieldName) {
  try {
    const fields = await getBoardFields(projectId);
    for (const field of fields) {
      if (field.name === fieldName) {
        return field;
      }
    }
    return null;
  } catch {
    return null;
  }
}

// get all the issues
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

// get a specific issue
async function getItemId(projectId, title) {
  try {
    const items = await getProjectItems(projectId);
    const [{ id }] = items.filter(item => item.content.title === title);
    return id;
  } catch {
    return null;
  }
}

async function getItemId2(owner, projectNumber, title) {
  const query = `
  query FindItemIdViaSearch($searchQuery: String!) {
    search(query: $searchQuery, type: ISSUE, first:1) {
      nodes {
        ... on Issue {
          id 
          number
          title
        }
      }
    }
  }`;
  const searchQuery = `"is:issue project:\"${owner}/${projectNumber}\" in:title \"${title}" sort:created-desc`;
  try {
    const { data } = await axiosInstance.post('',
      {
        query,
        variables: {
          searchQuery
        }
      }
    );
    [{ id }] = data.data.search.nodes;
    return id;
  } catch {
    return null;
  }
  
}

//update a field value
async function updateIssue(projectId, itemId, fieldId, optionId, iterationField=false) {
  const mutation = `
    mutation UpdateField($projectId: ID!, $itemId: ID!, $fieldId: ID!, $optionId: String!) {
      updateProjectV2ItemFieldValue(input: {
        projectId: $projectId,
        itemId: $itemId,
        fieldId: $fieldId,
        value: {
          ${iterationField ? 'iterationId' : 'singleSelectOptionId'}: $optionId
        }
      }
    ) {
      projectV2Item {
        id
      }
    }
  }`;
  try {
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
  } catch (error) {
    console.log(error);
  }
}

module.exports  = {
  getProjectId2,
  getProjectField,
  getItemId,
  getItemId2,
  updateIssue
}
