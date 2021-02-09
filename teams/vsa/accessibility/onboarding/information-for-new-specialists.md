Information for New Specialists
-------------------------------

### Disability statistics among veterans

Accessibility and inclusion is incredibly important in our veteran community. [24% of Veterans have a service-connected disability (2018)](https://docs.google.com/document/d/1HDusb9mADDZpQtAl3UMzmHX-ARgcMQi2VcoEyz9idrY/edit?ts=601c1513#slide=id.g9fe759a492_0_127). A service-connected disability is an injury, disease, or disability that full time service in the armed forces (active-duty) either caused or aggravated.

[43% of Post-9/11 veterans have a service-connected disability](https://docs.google.com/document/d/1HDusb9mADDZpQtAl3UMzmHX-ARgcMQi2VcoEyz9idrY/edit?ts=601c1513#slide=id.g9fe759a492_0_93). This statistic is significantly higher than veterans from other service periods. Advances in battlefield medicine and rapid evacuations have resulted in more Veterans surviving wounds, but an increase in invisible injuries like Traumatic Brain Injury (TBI).

The most common disabilities among the Veteran population include:

* hearing loss
* post-traumatic stress disorder (PTSD)
* scars
* back and neck pain
* migraines

There are also 158,000 legally blind veterans. Every year, 7000 veterans become newly blind or visually impaired.

### Tasks VSA specialists do

VSA specialists are primarily responsible for helping teams produce services and products that are both inclusive and accessible.

Our aim is to integrate VSA specialists within teams as early as possible in the product development process from research to post-launch. We hope this will help:

-   set the expectation that accessibility must be included throughout the entire product lifecycle instead of being remediated post-launch
-   naturally disseminate accessibility knowledge through collaboration with researchers, designers, and developers
-   introduce accessibility specialists to team members as collaborators instead of strictly enforcers
-   launch products with as few a11y issues as possible

We use the following tasks and methods:

-   **The Collaboration Cycle**: a series of "checkpoints" to help teams at various points in the product development process
-   **Spot check requests**: where team members can formally request a review outside of the collaboration cycle's checkpoints
-   "Ad hoc" team support, like informal questions or requests over slack
-   **Full accessibility audits**: a post-launch accessibility audit to make sure any remaining issues are documented
-   **Continuing education**, like internal workshops to level up accessibility knowledge of members across teams
-   **Embedding**: where an accessibility specialist is assigned to collaborate with a team throughout the full product development process

#### The Collaboration Cycle

We work with the platform team (VSP) to help our VSA teams at various points in their product development process. To this end, "checkpoints" are set up to allow us to review teams' work.  The checkpoints our specialists are included in include: 

* P**roject kickoffs**: A brief 30 minute meeting that introduces a new work initiative. Covers existing solutions, team member expectations, and an opportunity to identify any areas that may need additional support or attention.
* **Design intent meetings**: Draft ideas are presented to VSP and other expert designers including you, the accessibility specialist. Accessibility specialists provide early guidance, considerations, and critique to designs. 
* **Usability test prep meetings**: A meeting to review prototypes and mockups are consistent with existing patterns and standards. Accessibility specialists provide feedback for the prototypes and usability testing strategy.. 
* **Staging reviews**: Specialists provide full feedback on completed build before rolling out to users. This involves creating a new epic on github where accessibility defects can be documented for fixing. Testing should include:
   * Keyboard navigation
   * Content resizing and zoom
   * Screen readers (JAWS, NVDA, and Voice Over)
   * Axe and axe-coconut scans

VSA product managers request these checkpoints using tickets on github. When they make these requests, they should make sure you are added.

VSA a11y specialists then:

1.  Review or test the work provided

2.  Write up tickets on github documenting accessibility concerns or defects

3.  Share those tickets with VSP accessibility specialists to review who then deliver the feedback in meetings

4.  [Update the product testing review list](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-product-review-list.md) to document all open and closed tickets which is delivered to the VA 508 accessibility office

[For more on the collaboration cycle and the various checkpoints, you can explore the github folder hosted by VSP.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/working-with-vsp/vsp-collaboration-cycle)

You can also [view the board where collaboration cycle checkpoints are listed](https://app.zenhub.com/workspaces/vsp---product-support-5f85b91c14d8df0018fac414/board?labels=collab-cycle-review&filterLogic=any&useDefaultFilterLogic=false&repos=133843125&showEstimates=false&showMilestones=false&showEpics=false&showReleases=false&showDependencies=false).

#### Spot check requests

In addition to the collaboration cycle, our VSA team members [can request spot check requests](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=1Copenut%2C+joshkimux&labels=508%2FAccessibility%2C+development+review%2C+product+support&template=vsa_request_dev_review.md&title=Request+a+VSA+dev+intent+or+spot+check+review+for+ENTER_PRODUCT_NAME). VSA specialists will be notified when this happens and will be expected to prioritize these along with other work. If you need help prioritizing, reach out to our VSA design lead or consult your fellow VSA specialists.

#### Other "ad hoc" team support - e.g. slack requests

Team members may send an informal slack message to a VSA specialist directly to ask for support. You may reply right away if it's easy to answer, or let the team member know when you will get to the request.

We recommend asking the team member to provide a date a response is needed by. This will help you prioritize your list of responsibilities.

Additionally, there is a Digital Service at VA (DEPO) slack channel, #vetsgov-accessibility, where folks may ask questions. You may answer questions there, but it is not required.

#### Full accessibility audits

After teams launch products, we are expected to run a full a11y audit to make sure any remaining issues or accessibility defects are documented. Currently the backlog of audits that still need to be done includes:

-   [Medical Device Re-ordering - March 2020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6595)
-   [Facilities Locator - October 2020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14321)
-   [Authenticated Experience Profile 2.0 - October 2020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15247)
-   [BAM1 Higher Level Reviews - October 2020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14458)

In-progress audits include:

-   [Benefits Delivery at Discharge - May 2020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9081), Josh Kim
-   [eBenefits PCPG Chapter 36 - October 2020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14449), Josh Kim

VA Medical Center audits include:

-   [Altoona health care - June 2020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10484)
-   [Coatesville health care - June 2020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10483)
-   [Erie health care - June 2020](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10482)

Before starting a full audit, please reach out to the product manager (PM) responsible for the product you will be auditing. In a short 30 minute kick off call, you'll want to discuss the following:

-   Explain the purpose of the full a11y audit and confirm the PM understands what is needed for it to be conducted
-   Determine if there are any remaining accessibility tickets from previous collaboration cycle checkpoints remaining
-   Identify if anything in the product has changed since post-launch that may require additional review
-   Plan out a schedule and next steps to complete the audit

[Once you have run an audit, be sure to update the 508 product list for testing page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-product-review-list.md).

#### Education

We ran a program called [the "VSA accessibility champions" program](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/accessibility/a11y-champs) where we recruited one person from each team who was interested in learning more and ran them through a curriculum. This program is currently on hold but we could do it again if folks have the bandwidth.

We also have [written out guidelines per practice area on github to help team members do their own work and scans](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/vsa-accessibility-expectations.md).

Finally, [we have a WCAG checklist on github to help team members think through their design and code](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/WCAG-Checklist.md).

#### Embedding

When possible, we will embed a specialist on an individual VSA team to assist in researching, designing, and coding in an inclusive manner. This can be a more informal and natural way for our specialists to assist teams rather than relying on checkpoints and requests.

### Writing accessibility (a11y) tickets

#### Introduction

A11y tickets are tickets we create on github to document accessibility issues and recommendations for teams to reference. They capture the following:

-   **Severity**, which captures how harmful or defective an issue is. For example, a defect level 0 means the issue may physically harm a Veteran.
-   **Category**, which identifies the type of issue. For example, [KEYBOARD] means the issue is related to keyboard inaccessibility.
-   **Point of contact**, which tells the team member which accessibility specialist wrote the ticket.
-   U**ser story**, which explains the issue and need concisely in a problem statement. For example, "as a keyboard user, I expect to be able to tab to the table of contents so that I can navigate easily through the page."
-   **Description**, which explains the "what" of the issue and its context.
-   A**cceptance criteria**, which explains to the team the required changes needed to close the issue. For example, "The table of contents is accessible by the tab key."
-   **Environment**, which explains the tools and context in which the issue emerges. For example, you may list the screen reader and device used to spot the issue.
-   **Steps to recreate**, which explains how a team member can recreate the issue step by step.
-   **Solution**, which is an optional section to provide ways to resolve the issue. For example, "add a tab-index of "0" to the element."
-   **WCAG or vendor guidance**, which serves as a citations list for any recommendations or the issue. For example, you may cite WCAG 2.1.1 Keyboard to provide further reading to your team. Feel free to include other non-WCAG resources to from blogs like Marcy Sutton, Adrian Roselli, etc.
-   **Screenshots or tracelogs**, any screenshots of the issue that must be fixed.

[For more on writing a11y tickets, you can reference this tutorial on github.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/writing-508-issue-tickets.md)

#### Staging review instructions

1.  Read through the staging ticket you were assigned. This ticket should be an epic. If it isn't, convert it into one.
2.  Create a new epic in github and name it "Accessibility Feedback for Staging Review [Project Name]." For example, "[Accessibility Feedback for Staging Review [Authenticated Experience - Direct Deposit for Edu]](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19495)."
3.  Add your newly created epic as a child epic beneath the original staging ticket.
4.  Begin writing accessibility tickets and be sure to attach them to the newly created Accessibility Feedback epic.

#### Ticketing resources

-   [Platform accessibility guidance](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/accessibility)

-   [Defect severity rubric](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md)

-   [Post launch audit process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/post-launch-audit-processes.md)

-   [Staging review process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md)

### Additional resources

-   [Veteran disability statistics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/veterans-disability-statistics.md) 

-   [Inclusive research recommendations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/inclusive-research-recommendations.md)

### You are supported

There is more work possible than you can do on VSA, so try to stick to 40 hours a week! Speak with Shawna and/or Ariel if you need help figuring out priorities and how to stick with a manageable schedule.

You're not alone, there are others in the community. The following are support options you can take advantage of:

-   Private a11y-specialist channel on the Ad Hoc slack (we'll add you to this when you join) 
-   Coffee chat and introduction to your fellow VA accessibility specialists
-   Calendar invitations to all accessibility specialist strategy and collaboration meetings
