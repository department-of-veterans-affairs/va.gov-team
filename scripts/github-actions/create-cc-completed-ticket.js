const { Octokit } = require('@octokit/rest');

const {
  GITHUB_REPOSITORY,
  // BOT_GITHUB_TOKEN: auth,
  GITHUB_TOKEN: auth
} = process.env;

const octokit = new Octokit({ auth });
const [owner, repo] = GITHUB_REPOSITORY.split('/');

async function createTicket() {
  console.log('creating issue...');
  try {
    const r = await octokit.issues.create({
      owner,
      repo,
      title: 'this is a test',
      body: 'this is only a test.'
    }); 
    console.log(r);
  } catch (error) {
    console.log('ticket failed to create:', error);
  }
}

createTicket();
