# Decision Record

This file tracks the key decisions made for the Picklist project.

## How to use this document

For any substanial decision to make or made by the team, add it here. Substantial is defined as a decision the team may regret forgetting later. Some examples include: Project scope, design decisions, technical decisions, etc. You should still document those decisions in tickets, but pull substantial ones out here for easier future reference. Whenever possible, link to existing tickets for better context.

## Decisions to make for the picklist in Add/Remove Dependents

| Date added | Decision | Background | Why make this decision |
| :--- | :--- | :--- | :--- |
| | | | |
| | | | |
| | | | |

## Decisions made

### DR 5: Which removals should we support?

Date: 2025-10-02

**Status**

Accepted

**Context**

The team added this as a question when the picklist it planned to include the picklist in the dependent verification form (0538). We needed to decide if we were going to expand removal use cases beyond what the current form supported.

**Decision**

This question was also more relevant when the team wanted to launch the picklist feature in the dependent verification form (0538). Because that form doesn't include all removal use cases, a decision would need to be made around which ones to include in a first attempt. However, because the Add/remove dependents form (686/674) includes more use cases for removals, it's less an a high-priority question. After deciding to launch the picklist in the Add/remove dependents form (686/674), the team decided in focus on the child, parent and spouse removal cases.

**Consequences**

The consequences for this decision are minimal because of the switch between forms.

### DR 4: Should we ask the death-related questions separately?

Date: 2025-10-02

**Status**

Accepted

**Context**

The team had concerns around how to ask about death in the picklist since our original wireframes could potentially show questions about death multiple times if a Veteran had multiple dependents. The question could reintroduce trauma for Veterans. We also received feedback during the design intent session to research how Veterans might feel about the approach.

**Decision**

[Based on research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/research/2025-08-dependent-verification-with-picklist/initial-findings.md):

"Looking at data for how the participants preferred to be asked about the death of dependents, Design 2 (where the question was an option for each dependent) was preferred by 5 of 10 participants. Two participants preferred Design 1 (where the question was asked first and on its own page), 2 had no preference, and we didn't cover this with 1 participant. Preference didn't depend on which design participants saw first."

Based on this, and further conversations with the team, we decided to put the question/options around death in the questions per dependent and not separately. The team feels it's more trauma informed to ask about death in each dependent with other options because it lessens the weight of the question that doesn't happen when the question gets asked alone.

Also, the team felt it was more trauma-informed to get to the point and be clear for Veterans. Clarity is kindness best describes this approach.

**Consequences**

Pros

- Puts death related question with other choices, thus deemphasizing it.
- Based on research with Veterans.
- Slightly easier technical solution.
- One less page in the flow.

Cons

- Some Veterans could still see multiple death-related choices if they have more than one dependent and be turned off by it.

### DR 3: Do we want to show all dependents or one at a time?

Date: 2025-10-02

**Status**

Accepted

**Context**

This question was more relevant when the team wanted to launch the picklist feature in the dependent verification form (0538). Because that form is about verifying your current dependents, no matter how many you have, it made sense to wrestle with this question. That context has changed though since the team decided to put the picklist first in the the Add/remove dependents form (686/674).

**Decision**

Since the team decided to place the picklist in the Add/remove dependents form (686/674), the flow works differently. So this question didn't have as much importance. It could come up again in the future if verification gets added to the 686/674. The decision here is to not worry about this question in the Add/remove dependents form (686/674).

**Consequences**

The consequences for this decision are minimal because of the switch between forms.

### DR 2: Where does the picklist go first? 686/674 or 0538?

Date: 2025-09-08

#### Status

Accepted

#### Context

The [picklist feature](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/Initiative%20Brief%3A%20Dependent%20Picklist%20Component.md) can go in either form.

The team and stakeholders kept questioning our past decision as we dug deeper into the problem space.

This happened as a result of our exploration of the disability benefits landscape, and further design work on the picklist.

#### Decision

The team, along with the VA Product Lead, VA Design Lead and VBA stakeholder decided to change course and work on putting the picklist in the 686.

#### Consequences

Pros

- Almost all removal use cases are handled by the 686/674, whereas the 0538 only allows some removal types.
  - All programs (disability, pension, and survivor payments) use this form for adds/removals, rather than the 0538 (which is just for disability)
- The 686 can be auto-processed by RBPS (leading to faster processing and reducing overpayment due to delay), whereas the 0538 cannot (no changes only can be auto-processed)
  - This is with the caveat that our current digital form CANNOT be processed by RBPS, but we are planning to prioritize a back-end fix to that soon
  - Dependent removals submitted using an 0538 are manually processed and, given the lower priority of EP130s in the manual queue, these claims could take months to process
- If the team is able to process verifications and changes to dependents in the future via the 686/674, the picklist may not need to go into the 0538.

Cons

- Risk for dropoff when transitioning between 0538 and 686
- Increased technical complexity (assumed), since we are attempting to change the VBA process to better align with veteran needs/expectations, rather than just digitizing the process as-is

### DR 1: Where does the picklist go first? 686/674 or 0538?
Date: 2025-07-17

#### Status
Superseded

#### Context
The [picklist feature](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/Initiative%20Brief%3A%20Dependent%20Picklist%20Component.md) can go in either form. Placing it in the 0538 means less complexities from both a design and engineering perspective. However, it that form covers fewer use cases for Veterans. Placing it in the 686/674 means that more dependent use cases would be covered. However, the complexities increase because they are more screens and edge cases.

#### Decision
The team, along with the OCTO Design Lead, decided to start with the 0538.

#### Consequences
Positive impacts:

- Should be easier to implement from a design/engineering perspective, comparted to the 686/674.
- We could take our learning there, and carry them over to the 686/674 when we get to that project.
- Both forms need the picklist, so there isn't really a one vs. the other mistake that could happen.

Risks:

- Veterans could want to do more than what the current scope of the 0538 provides with the picklist.

### Decisions made template

DR {DR_NUMBER}: {DR_TITLE}
Date: YYYY-MM-DD

Status
Describe the status of the decision. Options are "proposed", "accepted", "rejected", "deprecated", "superseded".

Context
Describe the context and problem statement, including any forces influencing the decision.

Decision
Describe the change we are proposing/doing.

Consequences
Describe the consequences of the decision. This could include positive and negative impacts, as well as any risks and how they will be mitigated.
