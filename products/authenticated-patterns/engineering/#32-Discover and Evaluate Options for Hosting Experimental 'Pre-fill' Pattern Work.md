# 1) using a vets-website _mock-form folder app folder and deploying prototypes to staging environment

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

# 5) Bonus: Codespaces hosted directly from Github branches of vets-website

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

### Codespaces update 8/15/2024

We have continued to explore the codespaces option, and there are some promising things that have been learned about it that address the above cons:

> Developer dependent on setting up and refreshing the codespace

Since a codespace does exist for specific branches the developer does have to initialize one, but refreshing can be configured to wait for 4 hours of inactivity, and as long as anyone is interacting with the codespace then that shouldn't be a problem and it will stay active. Having the ability to start a codespace on any branch of the code also bring advantages of being able to test changes that are not on the main branch yet.

> Setting up a full content build (include all static pages) did not appear to work, and takes a long time to build (not hugely important if testing a form app)

Setting up content build would only be an issue if we needed to have users view a static content page, so for our user research sessions that should not be a problem

> It can be connected to staging’s API, but doesn’t allow authentication due to CORS problems. Using the “Allow CORS” browser extension didn’t work.

Connecting to the staging api within a codespace requires using a staging user and the authentication flow, so it wouldn't do us any good to try this for mocking the authentication, therefore we would want to use a mock server that runs within the codespace itself and can be controlled on a lower level to provide authentication mocking and other response mocking on demand

> Setting up a mock server can be made to work, but api mock responses do need to be created and the mock server run alongside the FE in 'watch' mode

Setting up the mock server has been what Belle and I have done for working locally, so while it does incur some setup effort, it is already set up and works for most all of our needs. It can also be manipulated on the fly to respond with whatever data we would want, and not rely on staging user credentials whatsoever. Once the mock api is running, it will stay running as long as the codepsace stays active.

> Codespaces spin down after 30 minutes of inactivity, but can be configured to up to 4 hours. Unlike review instances, this is a paid service, so it won’t stay live for days.

Codespaces are easily configured to stay active for 4 hours, and Adam has already done that on his codespace experiments and verified that. Although the codespaces don't stay up for days, the same can be said for a review instance in that it will be disposed of after 48 hours. When a review instance is recreated it receives a url, vs when a codespace is restarted due to inactivity the same URL is used, which is convientient. 

# Conclusion

We have considered 2 main paths forward, Codespaces and Staging environement. We have decided to use Codespaces to run user research sessions.

### Codespaces notes:

1) Within Codespaces it is possible to completely mock auth, use a mock server for all backend interactions, and provide exactly the experience that we are looking to show to the user. There are still downsides, but overall provides a way to show a prototype to a user that is almost identical to the production website, and doesn't require logging into the site or exposing PII or other sensitive data.
2) Complex api interactions need to be considered. The mock api is skin deep, and when updating things like the address or phone number, there is typically no database to persist these changes in the mock data. One solution that we have used is an in memory data store that can semi-persist while the mock server is running. This allows lookups of user data to occur and the appearance that the data has saved. Since the data only persists in memory, once the server is restarted, all the original mock data is reset for future sessions and no information is stored.
3) Documenting the solution space is valuable for other teams, and so far noone else that we have seen has been able to fully mock out the backend server in a codespace and get it working like we have. We think it warrants contributing to the platform docs if these experiments are deemed successful.
3) Since the Codespace runs on any branch of the vets-website repo, an experimental branch can be used and the main branch does not have to be what is displayed to a research participant. Furthermore you can update code on the fly, api responses, or styles if desired.
4) Potential downsides include 4 hour limit of uptime of the Codespace (there are ways to extend this), a unique url for each codespace, required coordination between engineers and researchers to make sure Codespace is ready, and other logistical considerations. 


### Staging environment notes:

[Staging link](https://staging.va.gov/mock-form-ae-design-patterns)

1) Staging provides a liveurl that is easily accessible, but requires a user to have staging credentials. These staging credentials will have to be shared and research participants will have to log into the site to do research sessions. After the session, the password should be revoked / changed.
2) Having custom data for users is difficult and data will persist if changes are made to staging, so there is the potential for accidental PII to be entered into a staging account by a research participant during a session. Complex data mocking scenarios are pretty much impossible in staging. One example would be getting a staging user that has a specific date of birth, has unique benefit enrollment data, and has a specific disability rating. Since the staging environement does connect to upstream services, it is very difficult to simulate complex data scenarios.
3) Prefill Endpoint: if we want to create specific information to come back from the prefill form endpoint, that is not possible. In progress form status will persist, and prefilled data will come from the respective services.
4) We initially tried to mock auth in a skin-deep method for our app only and ran into lots of issues with it and couldn't make it work in a way that wasn't buggy or unreliable.


