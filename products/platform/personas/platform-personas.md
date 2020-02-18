# Platform Personas

## External Team: Brand New (Group dynamic)

>_The challenge for us isn’t doing the work. It’s figuring out how DSVA wants us to do the work._

- First time VA contractor
- New to Agile process

#### Needs
- Validation they are on the right track
- Context for reasons behind recommendations and decisions
- Time to learn new processes, tools, and languages
- Relationships with people who are assigned to providing them support and guidance 
- Frequent communication and guidance during VSP orientation

#### Motivations
- Launching product or service by deadline
- Doing meaningful work

#### Attitudes
- Excited and eager to build successful services that help Veterans
- Willing to adapt to new ways of doing things
- Anxious when deadlines are at risk
- Frustrated when expertise isn’t trusted
- Resistant to feedback when delivered late or from unexpected sources

#### Key Challenges
- Feels like they must choose between sacrificing quality, adherence to process, curiosity, exploration in order to meet deadlines
- Contractor team is much larger than the internal support team, which can result in feeling delayed, isolated, and ultimately subverting the process in order to proceed

## Internal Support: Developer (Individual contributor)

>_It was unclear to them and us who had the decision-making authority._

- Gets brought into support external team by getting mentioned in Slack support channel or via GitHub PR review 

#### Needs
- Context for pull requests 
  - Contractor PRs are often much, much longer than the ones the developer writes
  - PR reviews are sometimes the first a developer has heard of a product, and to properly evaluate it they need to understand what the product or service aims to do
- Help prioritizing the irregular flow of support requests
  - Expectations set in advance if external support is needed
- Documentation that explains in more depth the intricacies and unique patterns for system structures on VA.gov, which would allow them to be more hands-off

#### Motivations
- Delivering on prioritized sprint goals set by product team
  - Resolving blockers for external teams quickly

#### Attitudes
- Conflicting concern with contractor's adherence to code standards and patterns 
  - Deviation from standards requires more time to review PRs
  - Ultimately, code will get turned over to the internal team anyway, and developers can refactor as needed
- Frustrated that regular work is disrupted unexpectedly with requests for support

#### Key Challenges
- Balancing unpredictable flow of support requests with regular work cadence and priorities 
- Quality of code is compromised because of the size and amount of PR reviews, creating more refactoring and QA work later
  - Impacted by external developers lack of experience with Ruby
- Getting external teams connected to dependencies and services is difficult but worthwhile

---

## Primary takeaway:
DSVA wanted developers, design, and content to be as hands-off as possible to see how it went but the external teams felt they could not succeed without guidance, frequent communication, and support.

### How might we...
- Encourage teams to explore and ideate within the bounds of their deadlines?
- Build in time for support when the need for it is unpredictable?
- Create the foundation for relationships between team members of all role-types from the beginning?
- Improve our documentation to carry some of the weight of support?
