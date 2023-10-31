const { Octokit } = require('@octokit/rest');

const {
  // GITHUB_REPOSITORY,
  // BOT_GITHUB_TOKEN: auth,
  GITHUB_TOKEN: auth
} = process.env;

const octokit = new Octokit({ auth });
// const [owner, repo] = GITHUB_REPOSITORY.split('/');

async function createTicket() {
  console.log('creating issue...');
  try {
    const resp = await octokit.issues.create({
      owner: 'department-of-veterans-affairs',
      repo: 'va.gov-team',
      title: 'this is a test',
      body: 'this is a test'
    })
    console.log(resp);
  } catch (error) {
    console.log('ticket failed to create:', error);
  }
}

createTicket();
