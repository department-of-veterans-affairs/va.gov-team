F# VAOS back end engineering practices and tips

## Working on the va.gov platform

- The VA has been using Ruby on Rails since 2016. This Rails backend acts as an orchestration layer for many downstream service integrations across the VA.
   - We have to be careful when adding/removing gems because of dependencies to other teams working across the platform.
   - Legacy code patterns use traditional MVC with downstream service integrations in the lib folder. Modern code patterns use Rails engines. Our project follows this modern approach.
- The vets-api master branch is deployed to production every day, keep this in mind when deciding to merge your changes
   - For example, the production release is cut at 2pm ET. If you need to test something in staging, merging it at 1:45 pm ET will give you very little time to do that testing.
    
## Working on the VAOS BE team

- Despite the limitations of working on a shared platform, within the VAOS application we have a lot of freedom as a team to decide what works best for us
   - The important thing is the outcome, that we meet the platform's quality, performance, and security best practices.
   - Adding new dependencies and changing team conventions should be conversations among the team, and can be started by anyone, not just senior folks or leads.
- Automated testing is critical to how we maintain the quality of VAOS; We maintain 98% code coverage across the entire vets-api code repo; and 90% or better coverage across each individual file.
- Because most of us can't directly connect to VAMF from our location machines, we use mock data in development. This makes it really important that we test our changes in review instances and on staging before they go live. In fact, these mock responses are recorded using a gem called "VCR" while SSHed into one of the review instances.
- Everyone should review each other's code, regardless of experience level or project familiarity.
   - We should strive for having any PR reviewed within 24 hours.
   - PR comments are normal and expected and not a sign that something is wrong. The expectation should be that every PR has questions or comments from reviewers
   - Bigger changes should have an approval from the technical lead.
   - When doing a PR review, it is usually best to try to phrase your comment in the form of a question. This tends to be a more diplomatic approach and limits the potential for ruffling feathers. 
- Prefer more, smaller PRs to fewer, larger PRs.
   - Smaller PRs are easier to review
   - It's a good idea to check and see how much code you've written for a ticket as you go, and keep note of good places to divide up your changes
   - Try to put refactoring or unrelated improvements in separate PRs, rather than folding them into feature work
   - If a ticket is just too big, work with the team to break it into smaller tickets
   - Ideally, 300 lines of changes is a good size, but we do often see 600-700 line PRs. Over 1000 lines of changes should always prompt team members to help think of ways of breaking the work down, now or in the future.

## Working with the broader VAOS team

- VAOS is more than just the front end and back end team on va.gov, we have a variety of dependencies and stakeholders on other teams
   - These other team members often have important context, especially around how upstream systems like VistA operate and how VA staff handle scheduling
- The [VAOS Confluence page](https://wiki.mobilehealth.va.gov/pages/viewpage.action?pageId=97259406) is a good entry point for documentation for the broader team.
