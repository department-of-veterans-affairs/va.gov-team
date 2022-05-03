# VAOS front end engineering practices and tips

## Working on the va.gov platform

- The VA has been building React apps in vets-website for about four years. There's a lot of history and dependencies to be mindful of
   - We have to be careful when adding/removing dependencies, because they're shared across teams
   - Some common set up code assumes older core dependencies (primarily Redux and React-Router)
   - Code organization and patterns are in some cases reflective of React best practices from four years ago, not necessarily today
- The vets-website main branch is deployed to production every day, keep this in mind when deciding to merge your changes
   - For example, the production release is cut at 2pm ET. If you need to test something in staging, merging it at 1:45 pm ET will give you very little time to do that testing.
    
## Working on the VAOS FE team

- Despite the limitations of working on a shared platform, within the VAOS application we have a lot of freedom as a team to decide what works best for us
   - The important thing is the outcome, that we meet the platform's quality, design, and accesssibility standards
   - Adding new dependencies and changing team conventions should be conversations among the team, and can be started by anyone, not just senior folks or leads.
- Automated testing is critical to how we maintain the quality of VAOS; see our [testing guidelines](testing/fe_testing_guidance.md)
- Because most of us can't directly connect to VAMF from our location machines, we use mock data in development. This makes it really important that we test our changes in review instances and on staging before they go live.
- Everyone should review each other's code, regardless of experience level or project familiarity.
   - We should strive for having any PR reviewed within 24 hours.
   - PR comments are normal and expected and not a sign that something is wrong. The expectation should be that every PR has questions or comments from reviewers
   - Bigger changes should have an approval from Jeff or Narin
- Prefer more, smaller PRs to fewer, larger PRs.
   - Smaller PRs are easier to review
   - It's a good idea to check and see how much code you've written for a ticket as you go, and keep note of good places to divide up your changes
   - Try to put refactoring or unrelated improvements in separate PRs, rather than folding them into feature work
   - If a ticket is just too big, work with the team to break it into smaller tickets
   - Ideally, 300 lines of changes is a good size, but we do often see 600-700 line PRs. Over 1000 lines of changes should always prompt team members to help think of ways of breaking the work down, now or in the future.

## Working with the broader VAOS team

- VAOS is more than just the front end team on va.gov, we have a variety of dependencies and stakeholders on other teams
   - These other team members often have important context, especially around how upstream systems like VistA operate and how VA staff handle scheduling
- The [VAOS Confluence page](https://wiki.mobilehealth.va.gov/pages/viewpage.action?pageId=97259406) is a good entry point for documentation for the broader team.
