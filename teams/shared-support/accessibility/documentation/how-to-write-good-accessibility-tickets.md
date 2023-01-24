# How to Write Good Accessibility Tickets
Here we’ll be taking a look at how Shared Support accessibility specialists report issues found during an [accessibility audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/shared-support/accessibility/documentation/whats-needed-to-start-an-accessibility-audit.md). This is where we have an opportunity to explain the importance of correcting accessibility related issues and sharing with teams helpful recommendations on how to improve and address these issues.

## Information to Include within an Issue Ticket
After an accessibility audit is complete, a next step is to gather your findings and create accessibility related GitHub tickets for the appropriate teams to address. Listed below are the key types of information that are important to include when creating tickets. This information will help ensure that teams understand the accessibility issues found and their context. At a minimum, each ticket needs to include these criteria. Optional sections can be excluded if they are not relevant to a particular issue.

### Proper pipelines, labels and epics
To ensure that the right teams are notified of accessibility issues, it’s important to select the correct pipeline or GitHub repository (repo). A repo is a centralized area where all of a team’s project content, issues, and revision history is stored.

Be sure to also select GitHub labels relevant to the accessibility issue being created. When possible, use labels that have already been established. Oftentimes teams may have certain preferred labels, so be sure to communicate with the team beforehand. In general, you should include tags related to accessibility, such as the defect severity and type of accessibility issue.

Epics are higher level goals or summaries of a project. They contain a collection of issues. An accessibility issue ticket may be associated with a larger epic ticket.

<img width="312" alt="Examples of GitHub pipelines - Forms Library Platform Spike Team, Accessibility Issues, Platform Design System, and VA.gov Platform." src="https://user-images.githubusercontent.com/25351510/189417902-131d0b22-89ee-4f7e-9cac-8c31b17ab5d9.png"> <img width="310" alt="Examples of GitHub labels - 508-defect-1, 508-issue-focus-mgmt, 508/Accessibility, and VA Forms System Core." src="https://user-images.githubusercontent.com/25351510/189417899-b030b7c0-28c9-4464-97d4-ff4af6736c76.png"> <img width="312" alt="Example of GitHub epic selection - VAFSC Accessibility Support." src="https://user-images.githubusercontent.com/25351510/189417895-57abf1b6-9714-40e9-a89e-cf34a3baadcc.png">

### Descriptive title
Ensure that the title includes a very concise summary of the issue. It’s worthwhile to include the issue type followed by a brief descriptive statement about the problem. A few examples of good descriptive titles include the following:
* [SCREENREADER]: No ALT text available for images
* [COLOR]: Text color contrast in summary content area is too light and difficult to see
* [PROFILE A11Y AUDIT - COGNITION]: Textarea field labels and hint text not descriptive

### Point of contact
Include in the ticket the name of the Accessibility Specialist who will be the main point of contact for the team addressing the issue.

### Accessibility defect severity rubric
When crafting tickets, consider the severity level of the issue and how the issue will impact users if not addressed. The VA Platform offers a great [guide to determine the defect severity level](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-defect-severity-rubric).

### User Statement or Job Story
This statement can help clearly identify the gap in the current functionality by centering the issue from the perspective of the affected user. Typically a [user statement](https://www.nngroup.com/articles/user-need-statements/) includes the following format: “As a (insert user role), I want (insert a function or goal) so that (user need)”. Alternatively, you may choose a [job story](https://www.mountaingoatsoftware.com/blog/job-stories-offer-a-viable-alternative-to-user-stories) format, which shifts focus from the specific user to the job or function being completed. A job story format can typically follow the following format: “When (insert a situation), I want (insert a function or goal) so I can (insert an expected result)”.

***Example User Statement***: As a screen reader user, I want to navigate the content of the page via my screen reader rotor or element list so that I can understand each link's purpose and context.

***Example Job Story***: When navigating page content via my screen reader rotor or element list, I want each link listed so that I can understand each link's purpose and context and quickly navigate around the webpage.

### Details
Here is your opportunity to provide more background information and a detailed description of the accessibility issue. Use this section to explain the issue in a way that anyone reading it can understand.

### Reproduction Steps (*optional*)
Depending on the issue, reproduction steps aren’t always needed. Try to include them if you think they are relevant or helpful to the team. Consider including information such as:
* Website URL
* Environment the issue was seen
  * Operating system and version
  * Browser and version
  * Screen reader device, if applicable
  * Server (localhost, staging, prod, etc.)
* A brief, step-by-step walkthrough of how to recreate the issue
  * If an authenticated experience, provide the login user ID or level of access (LOA)

### Proposed Solution (*optional*)
If there is a specific solution or a few recommendations for solutions, include the details here. This can be HTML, CSS, Javascript, or some other coding snippet, paired with a brief explanation of how this may resolve the issue.

### Reference Material (*optional*)
Use this section to include links to related reference materials, WCAG guidelines or other guidance. This is especially important if the issue is directly related to a WCAG violation. You can point to documentation that may offer guidance around the particular issue or offer a solution.

### Screenshots or Recordings (*optional*)
Provide screenshots or brief recordings of the issue if you think they may be helpful in clarifying and demonstrating the exact problem. Be sure to include text describing the images or recordings.

## Sample Ticket Structure
Typically, accessibility issue tickets can be [formatted manually in markdown](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=508%2FAccessibility&template=508-issue.md&title=) or you can use the [a11y issue form template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=508%2FAccessibility&template=a11y-issue.yaml&title=508-defect-x%3A) available in GitHub. Both options include the information above, so you can feel free to go with what you’re most comfortable with.

### GitHub Example Tickets
* [[AXE-CORE]: Change some of the H2s to H3s #9722](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9722)
* [[SCREENREADER]: No h1 heading on page #9721](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9721)
* [[A11y]: VA Forms System Core [Demo Content]: Link text is not descriptive #551](https://github.com/department-of-veterans-affairs/va-forms-system-core/issues/551)

### Markdown Resources 
* [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [Markdown Basic Syntax](https://www.markdownguide.org/basic-syntax/)
