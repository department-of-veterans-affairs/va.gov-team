# Engineering Design Docs

VSP has a practice of writing "design docs" for engineering projects in order to best set up the project implementation for success. Design docs serve a variety of purposes, including identifying likely pitfalls, communication about technical plans, consensus-building, and documentation to future stakeholders.

Product outlines explain _what_ to build, design docs explain _how_ to build them. 

The process of writing and reviewing design docs accomplishes a number of important things:

*   Acts as a forcing-function for the "driver's seat" developer to think through unclarified product questions, integrations, likely technical issues and edge cases.
*   Provides an opportunity for more technical eyes to review the proposal and provide technical feedback, making it less likely to hit unexpected technical issues during implementation.
*   Aids in consensus-building around the technical solution to a problem. In particular, the act of naming reviewers who must _explicitly approve_ the design doc creates a forcing-function for building consensus with (at minimum) that set of reviewers, and helps ensure that, months from now, we’re not questioning the approach we started with.
*   Creates a record of decision-making and tradeoffs for future readers, so we can revisit "why did we do this?" later. This also contributes to improving our culture of documentation overall!

In short, they help us build _the right thing_, keep everyone _on the same page_, and provide _records for later._ 


## What a design doc should contain

*   Design docs should propose a technical solution to a known product need. The solution should be expressed in just enough detail that a reader can understand the technical context, the changes being made, and not have any further questions about _how_ it will be implemented.

    > **Rule of thumb:** a hypothetical engineer who just joined your team should be able to implement the solution from the design doc without having to make further technical decisions.
*   Questions and unknowns should all have proposed answers, so that reviewers can agree or disagree with the _specific_ proposed course of action.
    *   Examples: _How will this change affect dependent services? Which third-party libraries will be used? Which S3 buckets do artifacts live in?_ These should not be left as open questions.
*   Design docs should think through downstream implications, including (but not limited to) security and privacy concerns, changes to CI/CD, performance considerations, and analytics.
*   Design docs should have explicit **approvers** ("C" in RACI) and **status**. Approvers are typically stakeholders of products and systems affected by your design. The combined set of approvers on your design doc should include authority for all affected systems.
    *   Note on approver selection: if a key stakeholder is likely to question your technical direction mid-implementation, they should be an approver on your design doc. Get their buy-in on your plan _before_ implementation.
    *   Approvers should mark their approval in the document when they agree enough with the proposal to proceed with implementation. All approvers must approve the document for it to be considered approved.


## When to write a design doc

Major features and major technical changes should all have design docs before jumping into implementation.

Whether a given project is "major" can be decided by the PM + implementer + tech lead. If **any** of those stakeholders think the feature is significant enough to need a design doc, that's a good sign it should have one.

> **Rule of thumb**: if a feature/project/change is going to take more than one engineer-sprint of time to build (including dealing with downstream effects of the change), it's probably a good idea to have a design doc for it.


## Guidelines for reviewing

*   Approvers should focus on _understanding_ the proposal and its technical implications, particularly any implications that affect that specific approver and their domain.

*   Approvers should ask questions toward ensuring the author has provided enough detail on technical direction. A complete design doc should not have substantial "open questions" that may undermine the key features of the design, and approvers should be looking for those kinds of gaps.

*   Approvers should approve the document as soon as they’re comfortable with the direction it's headed in and the main decision points. Approval doesn’t need to wait for 100% design doc perfection --- just enough to feel comfortable with the high-level approach.


## Lifecycle / process


### Drafting

Use one of the [Templates](#templates) to start filling out a draft design doc. This may involve some prototyping implementation as research, to understand the technical feasibility of the approach being proposed.

At this stage, you may consider looping in an early reviewer --- for example, a collaborator close to the project, or your tech lead --- to give early feedback and get closer to a reasonable implementation.


### Reviewing

Send your design doc to reviewers, asking them each to review the document (see [Guidelines for reviewing](#guidelines-for-reviewing) above). As they make suggestions, update your design doc to reflect answers to their comments. This will likely take several rounds of back-and-forth as you converge on an acceptable technical solution, anticipating and addressing potential problems in collaboration with reviewers.

If a reviewer asks for clarifying technical details, don’t just answer the question inline; update the design doc with the extra details! (_Goal: "The design doc has been updated to clarify your question."_)

In some cases, it can be acceptable to start implementation in this phase, once it's clear that reviewers are OK with the relevant parts of your design --- but with awareness that your implementation is at higher risk of requiring change.

> **Tip**: when you’re trying to get final approvals after a few rounds of review, directly ping reviewers and ask: "what else needs to be changed to get your sign-off?"


### Implementation

Once docs are approved by all reviewers (with review approval in GitHub, or filling in the approval "[x]"), commit the design doc to GitHub. You can begin implementation!


## Templates

There are templates you can use with many of the requisite components:

*   [Google Docs](https://docs.google.com/document/d/1jAQwmSIrM_TT83rAS0U8K-dEnFkixBQgfj9jCV4Xaxg/edit#heading=h.ql5zxv5qycy)
    *   _easier for comment discussions and iteration, more work to check in_
*   [GitHub in va.gov-team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/design-docs/design-doc-template.md)

Clone this template, filling out each section as you see fit. It's OK to mark sections "N/A" with a short explanation of why they’re not relevant to that design.


## Location

When design docs are completed, they should be checked into [platform/engineering/design-docs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/design-docs), with files named format `YYYY-MM-DD-[design-doc-name].md`.

If the document has supporting artifacts, such as images, they should be stored in `images/[design-doc-name]/`.


### Examples

*   VSP: check out examples in the [design-docs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/design-docs) directory
*   Some examples from Chromium project \
_NB: these examples don’t include "approvers", but are good examples of technical investigation, evaluating tradeoffs, and explaining technical consequences._
    *   [Design Doc: WebSocket Protocol Stack in chrome/net](https://docs.google.com/document/d/11n3hpwb9lD9YVqnjX3OwzE_jHgTmKIqd6GvXE9bDGUg/edit) 
    *   [Chrome: Plugin Power Saver](https://docs.google.com/document/d/1r4xFSsR4gtjBf1gOP4zHGWIFBV7WWZMgCiAHeepoHVw/edit) 
    *   [Material Design Downloads](https://docs.google.com/document/d/1XkUDOc6085tir4D5yYEyjL2GsIGBslJBHXiNQDzJawI/edit#heading=h.xgjl2srtytjt) 


### Further reading

*   [How to write a good software design doc](https://www.freecodecamp.org/news/how-to-write-a-good-software-design-document-66fcf019569c/) (Angela Zhang, Plaid)
*   [Design docs - A design doc](https://medium.com/dev-channel/design-docs-a-design-doc-a152f4484c6b) (Malte Ubl, Google)
