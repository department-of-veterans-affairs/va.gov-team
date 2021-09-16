----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Threat-Model-in-Practice.1886879813.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

### Introduction 
The vets.gov team is collaboratively developing a [threat model document](/Products/Vets.gov%20Platform/Infrastructure/threat_model/vetsgov_threat_model.md) that identifies general security threats, specific vulnerabilities, and mitigation strategies. This document in turn describes how to use the threat model during our development process.

_This document was initially written by and for the Kudos team - until and unless this process is adopted across the board, follow your own team's guidance._

### Overview
In order for the threat model to be useful, we need to integrate it into our development process. As we add new features and update existing features, we will use the existing threat model to consider whether we are introducing any vulnerabilities. We will also consider whether a given change to vets.gov suggests any new classes of threat that should be added to the model.

Threat modeling, and risk analysis in general, is not a programmatic process. It relies on the expertise of developers and other team members to judge when to assess threats, what threats are applicable, and what level of mitigation is practical. Having a documented threat model serves as a job aid to ensure that this assessment process is thorough.

### Checkpoints
Both the threat model document and the vets.gov platform will evolve over time, so this analysis is not a one-time operation. We suggest the following checkpoints for reviewing the threat model against the vets.gov features that your team owns:
- **Adding a new feature**
By "new feature" we generally mean a top-level product feature like "secure messaging". The implementation of such a feature clearly qualifies for a review against the threat model.

(Ideally this threat model analysis will be enforced as part of an overall feature readiness checklist -- approximately what is described in the [launch guide](/Practice%20Areas/Product%20Management/Product_Launch_Guide.md) -- which will also includes things like documenting new API interactions, documenting external service integrations, ensuring devops monitoring, etc.)

- **Significant change to an existing feature**
"Significant" is up to the judgement of the developer, but might include:
  - Significant refactoring of the code base.
  - Changes to how data flows through the product, for example addition of caching, addition of locally-stored data, etc.
  - Changes to how we interact with external services, e.g. if an external service changes their API interaction mdoel.

- **Time-based**
As a backstop, the threat model should be reviewed against current product implementation at regular intervals. Initially we suggest doing so once a quarter. If the above checkpoints are followed then this time-based review will primarily be for assessing any new threats that have been identified by other teams/team members to see if they apply to your product(s).

A threat model assessment is _not_ warranted on every pull request, but any time a team member reviewing a pull request feels like threats and vulnerabilties should be considered in the context of a given code change, they should feel free to put a hold on a merge pending a more thorough review, and refer to the threat model document as needed.
