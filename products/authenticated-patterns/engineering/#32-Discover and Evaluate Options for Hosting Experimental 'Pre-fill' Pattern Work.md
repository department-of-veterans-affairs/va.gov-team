# 1) vets-website _mock-form folder

**Kevin mentioned doing it this way. Might be strong suggestion**

**Pros:**
- Minimal setup, ease of deployment, direct integration with existing codebase
- Can do code reviews/PRs in GitHub
- All patterns can live in this repo together

**Cons:**
- How do we separate different variations of patterns/components?
- Our work may inadvertently affect other parts of the mock-form app
- May require coordination with other teams working on vets-website, need to inform them of changes we do

### **FINDINGS**

- We created a new mock form app, which is separate from the other apps and should not affect them.
- To display different pattern variations, we can add all variations into a single form app with each variation being a separate, different page.
- One caveat to further look into: sharing test user creds with users in the user exercise.
  
# 2) Local vets-website repo branch with tunneling (Ngrok)

**Pros:**
- Ease of sharing app without deploying to a remote server
- Get to code directly in vets-website
- Can do code reviews/PRs in GitHub
- All patterns can live in this repo together

**Cons:**
- Security considerations: URLs are publicly accessible 
- Potential learning curve for understanding its setup
- Dependency on service: requires an active, decent internet connection and relies on Ngrok’s servers, which may impact reliability in certain scenarios
- Free version has limited capabilities. 

## 2a) VSCode has a port forwarding feature! [Link to video](https://www.youtube.com/watch?v=Yigzm_ecs0c)

**Pros:**
- No setup required

**Cons:**
- Will need to have VSCode

### **FINDINGS**
For tunneling, before we forward the port, we need to run the command, `yarn watch --env api=https://staging-api.va.gov` to tell the app to point to the staging API (otherwise it would look for localhost:3000 for the API and error out). However, after logging in with a test user, the page gets redirected to https://staging.va.gov/. After logging in, if you try to go back to the original tunneling address such as https://dm1rw53f-3001.usw3.devtunnels.ms/mock-form, you will be signed out. 

# 3) Online code prototyping tools (CodePen, CodeSandbox)

**Pros:**
- Easy to start coding in since there is not much to set up.

**Cons:**
- Not ideal to code in, might be a hassle to enter all the boilerplate code in there.
- Will need to come up with a way to collaborate and give feedback
- Each pattern will have a separate CodePen
- Does not support backend functionality

Summary of notes on this discovery work are here: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/engineering/Codepen-notes.md

# 4) Separate repo with static site deployment (Netlify, GitHub Pages)

**Pros:**
- Netlify has good docs, won’t be too difficult to deploy
- Can start our own repo without worrying about interfering/breaking something on the existing site
- Can push the repo on GitHub so we can collaborate and do code reviews/PRs

**Cons:**
- Will require work to create a new repo
- Security considerations: publicly accessible URLs
- Meant for static sites, limitations on server-side functionality and backend processing 

**Question:** Will each pattern have a separate site deployed? Or is this one all-encompassing repo with all the patterns?

**Update from 7/15 working session with Adam and Belle**: Chose not to move forward with Option 4 due to security concerns and the substantial workload involved in creating a completely new repo separate from vets-website.

#5) Bonus: Codespaces hosted directly from Github branches of vets-website

https://depo-platform-documentation.scrollhelp.site/developer-docs/using-github-codespaces

**Pros:**

- Does not require SOCKS Proxy access to view
- Can be built from a GitHub pull request or any published branch, this makes previewing variations much easier than deploying multiple apps
- Relatively similar to how review instances work
- Great for setting up an application that doesn’t require authentication, or with minimal reliance on authenticated data
- Stable URL (doesn’t change after stopping & starting)

Cons

- Developer dependent on setting up and refreshing the codespace
- Setting up a full content build (include all static pages) did not appear to work, and takes a long time to build (not hugely important if testing a form app)
- It can be connected to staging’s API, but doesn’t allow authentication due to CORS problems. Using the “Allow CORS” browser extension didn’t work.
- Setting up a mock server can be made to work, but api mock responses do need to be created and the mock server run alongside the FE in 'watch' mode
- Codespaces spin down after 30 minutes of inactivity, but can be configured to up to 4 hours. Unlike review instances, this is a paid service, so it won’t stay live for days.


# Conclusion

Option 1: Creating a mock form app in the vets-website repo and using staging to host pattern work. 
[Staging link](https://staging.va.gov/mock-form-ae-design-patterns)

Option 1 currently stands as the most viable choice due to its straightforward deployment and direct integration with our existing codebase. However, further discovery is needed in a few key areas:

1) Displaying Pattern Variations: We need to determine the optimal way to present different pattern variations. Initially, we considered incorporating all variations into a single form app, with each variation on a separate page. However, if a variation requires a different intro page, this could pose a UX challenge.
   
One potential solution is to include a new intro page for each variation within the form app (even if it appears in the middle of the form process). This approach requires further investigation to address the following questions:

- Will adding an introductory page in the middle of the form process be user-friendly or more confusing for test participants? If it's more confusing, how can we make it less confusing and more user-friendly for them? 
- Can we easily technically implement this solution within the current codebase?

2) Prefill Endpoint: We need to develop an endpoint in the vets-api to ensure that the prefill functionality works correctly in staging for our mock form app.

3) Test User Login Issue: There is a login issue with our mock form app on staging (staging.va.gov/mock-form-ae-design-patterns). When attempting to log in as a test user, the login times out. If you reload the page, the login is successful. We suspect this issue may be related to the vets-api endpoint problem mentioned above and will plan to do more discovery work on this.
