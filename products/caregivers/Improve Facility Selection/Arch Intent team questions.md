# Architecture Intent - Questions and Meeting Notes
- This is a new Collaboration Cycle touchpoint for VFS teams, and the first time our team will be going through the review.
- Architecture Intent review meeting scheduled for Tuesday, 11/26/2024 at 1:30p ET/12:30p CT/10:30a PT

### Artifacts & Resources
- [Architecture Intent Checklist](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/10-10%20Health%20Apps-10-10CG-11-06-2024.md)
- [10-10CG Sequence diagram](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/diagrams/1010-health-apps/10-10cg-sequence-diagram-10072024.md)
- Preparation ticket [#95815](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95815)
- [More details on what will be discussed at the Architecture Intent meeting](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/collab-cycle/architecture-intent-meeting.md)
  

### What questions do we have for the Architecture Intent meeting?
- What is meant by "threat modeling"?
     - ANSWER: Consider the worst threat for the application, How could a hacker get to this information and what could they use it for.
- Question around PII for the lat/long and mapbox since those are in query params. That functionality already exists in the facility locator, but I wanted to double check
     - ANSWER: This exists today, there is no new risk here.  The 10-10 team will not be asked to do anything differently.
     - There may be a future initiative that would cover all applications that do this to improve risk here.

---

## Architecture Intent - Meeting Notes
- **MUST**: Update the GET to a POST
     - The PII cannot show up in URLs
     - That's why they want them in a post so it's in the body.
     - From **Adrian** via Slack:
          - can we ask about using https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/initializers/filter_parameter_logging.rb instead?
          - Feel free to loop me into any discussions. personally I really don't like doing re-work and moving away from standard API design patterns to solve this.
          - FWIW datadog is also moving to fedramp high in the near future, if datadog is the source of this concern
- **MUST**: Confirm that there is no PII being logged
- **SHOULD**: Add some sort of monitor for Lighthouse API
- **SHOULD**: Review response times for search results
     - Current acceptable limit standard is around 4 seconds
     - **Adrian** suggested via Slack: look into using https://github.com/mfrachet/cypress-audit
          - lighthouse has built in network and cpu limiting for the mobile tests. Would appreciate hearing back anything y'all find out
- **CONSIDER**: Adding 'distance from' to each location
     - Future Iteration?
- 
