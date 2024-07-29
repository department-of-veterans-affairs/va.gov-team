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

We created a new mock form app, which is separate from the other apps and should not affect them.

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
