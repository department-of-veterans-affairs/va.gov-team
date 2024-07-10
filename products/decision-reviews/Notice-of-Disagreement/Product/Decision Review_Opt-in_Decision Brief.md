# Decision Brief - Making sense of Decision Review Opt-in
## Situation
- Veterans may submit an appeal to VA if they disagree with the outcome of a claim 
- The legacy mechanism is called an “appeal”
- As a result of the Appeals Modernization Act (AMA)<sup>1</sup>, Veterans may now submit “Decision Reviews”
- Notice of Disagreement (NoD), or “Board Appeal," is one of three Decision Review pathways available.
- As VA transitions from the legacy appeal process to new decision review processes, Veterans _may_ have the choice to opt into the new process
- The opt in is dependent on the circumstances of the claim they’re requesting an appeal on.
- We have run multiple studies to test an opt-in flow via prototypes

## Complication(s)
- However, we have learned that Veterans are confused by being unable to distinguish between claims eligible for opt in vs. claims that are not. 
- As a result, they’re more likely to pick up the phone and call VA for additional help. 
- A key finding in the studies is that the opt-in process is unclear, confusing and concerning to veterans.
- An attempt to clear up this confusion was made via design and content, where we indicate which issues are potentially in the legacy system.
- We have created clearer and easier to understand content based upon the results of usability testing


## Question(s)
How might we help Veterans understand the opt-in process for a Board Appeal and make them comfortable with their decision to opt-in? How might we show opt-in to only the users it applies to, as opposed to having everyone opt-in to the new process (even if they don't have to)?

## Potential Answer(s)
1. **Lighthouse updates their Claims API to help us distinguish between claims eligible for Decision Reviews and those that are not**
  - Scope:
  - Assumptions:
    - Time: Approximately 1 month (2 sprints)
    - [Technical] Feasibility: fair
    - Organizational Viability/Constraints:
    - Value to users: 
  - Evidence this will work:
  - Advantages: will not even show opt-in to some users (if user has no legacy issues), allowing users to see what issues may be legacy/need to be opted-in, in context to the opt-in checkbox and instructions
  - Disadvantages: Discovery and development time. Untested solution.
2. **Release NoD with language to help Veterans understand the difference in opt-in eligibility.**
  - Scope:
  - Assumptions: 
    - Value to users: We have viable language alternative
    - [Technical] Feasibility: 
    - Organizational Viability/Constraints:
    - Value to users: 
  - Evidence this will work:
  - Advantages: Faster MVP
  - Disadvantages: Users who do not need to opt-in will still be asked to do so, language and lack of context will likely be confusing to veterans - this may result in drop-offs, calls to VA, need for assistance, etc (as was discovered in testing)

<sup>1</sup> https://benefits.va.gov/benefits/appeals.asp






