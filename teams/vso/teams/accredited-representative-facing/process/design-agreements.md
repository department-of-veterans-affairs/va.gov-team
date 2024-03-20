# Design Agreements

Jump to...

[How we work](https://docs.google.com/document/d/1SBZzZxYbqcpVWrgaX_X1kjwcFxpx3fBCxYEyaEIqEGk/edit#heading=h.j9t9la5jdojm)

[Tickets creation and pointing](https://docs.google.com/document/d/1SBZzZxYbqcpVWrgaX_X1kjwcFxpx3fBCxYEyaEIqEGk/edit#heading=h.kwpmaiflqxcp)

[Team capacity planning](https://docs.google.com/document/d/1SBZzZxYbqcpVWrgaX_X1kjwcFxpx3fBCxYEyaEIqEGk/edit#heading=h.ei0hmfae17hi)

[Team collaboration and QA](https://docs.google.com/document/d/1SBZzZxYbqcpVWrgaX_X1kjwcFxpx3fBCxYEyaEIqEGk/edit#heading=h.dz2zhqu8wrpu)

[Expectations of our work](https://docs.google.com/document/d/1SBZzZxYbqcpVWrgaX_X1kjwcFxpx3fBCxYEyaEIqEGk/edit#heading=h.it6fbmypln93)

[Defining terms](https://docs.google.com/document/d/1SBZzZxYbqcpVWrgaX_X1kjwcFxpx3fBCxYEyaEIqEGk/edit#heading=h.mbw0jn9xs8y0)

[Design fidelity](https://docs.google.com/document/d/1SBZzZxYbqcpVWrgaX_X1kjwcFxpx3fBCxYEyaEIqEGk/edit#heading=h.2pk47oyou7rz)

[Interaction fidelity](https://docs.google.com/document/d/1SBZzZxYbqcpVWrgaX_X1kjwcFxpx3fBCxYEyaEIqEGk/edit#heading=h.znpx91xvhy7)

[Content fidelity](https://docs.google.com/document/d/1SBZzZxYbqcpVWrgaX_X1kjwcFxpx3fBCxYEyaEIqEGk/edit#heading=h.9pfns2bjbz4k)

[Research fidelity](https://docs.google.com/document/d/1SBZzZxYbqcpVWrgaX_X1kjwcFxpx3fBCxYEyaEIqEGk/edit#heading=h.q7sijl848xol)

How we work
===========

Tickets creation and pointing
-----------------------------

**Who creates tickets? How are they pointed? When are they considered done?**

Tickets and epics should follow agreed templates and arf-des tag conventions.

-   [Epic template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/arf-epic.md)

-   [Design template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/arf-des-design-issue.md)

-   [Research template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/arf-des-research-issue.md)

  Tickets are created in accordance with the [Design/Research Roadmap](https://docs.google.com/document/d/1Ksk88KhZcXFJxySHNC9icoacRUoISJznsGb0VfFSqX0/edit#heading=h.m4rk6edp852v), which ARF Design is aligning with the product roadmap on a monthly or bimonthly basis. Work is planned in detail in 1-2 month periods of time. 

-   Tickets should follow the Design and Research ticket templates in Github (see links above).

-   Body of the ticket should contain details about the ticket and work planned.

-   Indicate a "Lead" and "Co-lead" or contributor for work, if appropriate.

-   Comments should be used for updates and tags (for review).

-   Acceptance criteria (AC) should be formatted as checkboxes and include a full list of things that need to be completed in order for the ticket to be closed. 

-   For tickets that involve exploring ambiguous areas that might result in more tickets, it is recommended to include an AC to "create follow up tickets, as needed," to remind the team member to create tickets for any additional tasks that arise.

-   Tickets are pointed by ARF Design collectively, either synchronously or asynchronously.

**How do we refine tickets?**

-   First pass is done either during weekly design syncs (pre-refinement) or asynchronously in ARF Design Slack discussions.

-   Tickets coming into a sprint should be created and added to the appropriate epic prior to team refinement and sprint planning ceremonies. 

Team capacity planning
----------------------

**How are we planning work?**

We are aiming for 20-30 points per sprint: 

-   5 points/person assigned at sprint planning, giving room for 3 potential points pick-up if an individual has available capacity.

If we find we have available capacity:

-   Check in with ARF Design, collaborate on work if others need help.

-   Pick up additional tickets based on priority.

-   Capacity checks/proactive burnout monitoring:

-   Weekly check-ins on Slack at the start and end of the week to see how we're doing and redistribute workload if needed.

-   If redistribution can't happen, raise a flag to Harold/Mike.

Team collaboration and QA
-------------------------

**How do we document collaborative work?**

-   In the body of Design tickets, we will name a "Lead" and "Co-lead" or Contributor. Indicate who is responsible for what output and AC.

**How do we review/QA completed work?**

Pre-review: Owner of output/AC to spell check, grammar check, and fix any visual design concerns. Owner to document any open questions that require ARF Design input, but the scope of input should be limited.

Step 1: Initial/internal review

-   Move the ticket to the Review/QA column in Zenhub. Tag Designers in Slack to see who has capacity to do an internal review. 

-   Reviewer will tag the ticket creator in Zenhub and Slack when feedback is finished or let them know when the ticket can be moved to the Done column in Zenhub.

  Step 2: PM review 

-   After moving a ticket to the Done column, notify the PM, preferably 1-2 days prior to sprint end, so that PM has time to review work.

  Step 3: External stakeholder share-out

-   Depending on the AC, may be shared in Slack, Sharepoint, Github, in sprint review, etc.

**What does internal review entail?**

Research

-   Reviewer is in suggestion mode. If there are only a handful of typographical errors, the reviewer can make changes in the artifact. If there are substantial changes, the reviewer will comment and ask the document owner to make the changes themselves. 

-   Focus should be on complete methodology, RQs/Hypotheses documented and clearly answered, data analysis free from errors, research report free from errors.

  Design

-   Comment in the design file rather than fixing spellings and adjusting content. 

Documenting Bets and Assumptions
================================

Our team tries our best to make data-informed decisions. However, sometimes we aren't able to collect data (we don't have access to users, our time frame is too short, etc.) and we have to work off of assumptions. In these cases, we will articulate and share what our assumptions and bets are, and follow up later to test these bets. Major bets should be discussed among the disciplines so that everyone has an understanding of the areas in our tool that need validation.

Major bets and assumptions should be listed in a [Canvas](https://dsva.slack.com/docs/T03FECE8V/F06PMJPHMJQ) in the #benefits-representative-facing OCTO Slack channel, which will be reviewed prior to each research effort to determine if the upcoming research can answer some of these questions.

Bets and assumptions should be written in a way that conveys:

-   What data we are missing (e.g. "Do VSOfficers prefer to view PoA requests for a single VSOrg at a time, or do they prefer to see a comprehensive list of PoA requests for all the orgs through which they are accredited?")

-   Our assumption (e.g. "We assumed VSOfficers would be comfortable seeing all PoA requests at once and being able to filter and sort by VSOrg.") 

-   If relevant, the screen or flow that we want to test (e.g. "When research participants land on screen 3a, ask their thoughts on the PoA requests in the list to see if they can identify that they are from different VSOrgs, and learn their thoughts about that.")

Expectations of our work
========================

Defining terms
--------------

-   Wireframe: A rough outline of pages or tools, usually without written content or full color. This is typically the lowest fidelity design. The lack of detail helps keep the conversations at a more general level, without getting caught up on details. 

-   Mockup: A static design of the product. Mockups are not interactive. Usually refers to a more polished (medium or high fidelity) design, as wireframes are lower-fidelity than mockups.

-   Prototype: Can refer to any degree of fidelity, clickable/interactive or not. When using this word, clarify the specific artifact. For example: "The wireframes in Balsamiq," "the static mockups in Figma," or "the clickable prototype in the staging environment."

Design fidelity
---------------

-   Low: High-level, black and white, placeholder titles and headers (if any). Gray boxes, "sketchy," typically lives in Mural or Balsamiq.

-   Medium: Not necessarily a fully conceptualized design, waiting for research-informed decisions. Best guesses are documented. Usually lives in Figma.

-   High: Research-informed; ideally has been tested/validated with users and ready for a second round of user testing. Usually lives in Figma.

-   Ready for staging: The fully interactive design.

Interaction fidelity
--------------------

-   No/none: Static; ready for feedback from users/stakeholders but not clickable.

-   Low: A few things are clickable.

-   Medium: Critical functionality is clickable.

-   High: All flows are flickable.

Content fidelity
----------------

Added to design tickets to describe the specific content fidelity of a prototype.

-   No/none: Gray boxes

-   Low: Lorem ipsum or the Bee movie script

-   Medium: Draft content. As close to what is expected to go to staging.

-   High: Fully conceived content.

Research fidelity
-----------------

Defining choices around data analysis. May correspond to methodology and size of overall study effort.

-   Low: Lean, quick passes, sticky notes or affinity-mapping. 1-2 person effort. 

-   Output could be: summary, cleaned up spreadsheet, bullet points

-   Timing/effort: 2-3 days

-   Medium: 3 or fewer research study questions, or hypotheses.

-   Output could be: Shorter research report/presentation

-   Timing/effort: Approx. 1 week

-   High: In-depth, substantial number of RQs, tasks, or hypotheses to answer. Data requires substantial time investment to analyze and requires multiple people to work on the data from different angles. Could affect the design significantly or necessitate a new design artifact.

-   Output could be: Research report, statistical analysis, detailed explanations of findings.

-   Timing/effort: Approx. 2 weeks/1 sprint if not longer
