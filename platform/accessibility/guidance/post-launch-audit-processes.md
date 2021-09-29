
# We're moving our docs!
### You can find the [latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/How-to-prepare-for-an-accessibility-post-launch-audit.1909063817.html) on the Platform website.
### Still can't find what you're looking for? Reach out to #vfs-platform-support on Slack.

-------


# Accessibility post-launch audit processes
Post-launch audit processes are designed to evaluate applications and static content using a wider set of devices than the [accessibility staging review](./staging-review-processes.md). The post-launch audit is the last evaluation before requesting a VA 508 office quick test.

You should [file a "Full Accessibility & 508 Office Audit" issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new/choose) when your application is relatively code-stable in production. All accessibility defects that were identified at Staging Review must be fixed before requesting a full audit.* 

**Note:** This touchpoint should be scheduled as early as possible.

_* VSP understands that other teams may be accountable for fixing the defects identified at Staging Review. These defects are exempt and will not block a team from scheduling this touchpoint._

## How The post-launch audit is different from a staging review
The post-launch audit will focus on manual testing with mobile and assistive technology:

* Windows 7/10 IE11 + JAWS
* Windows 7/10 Chrome + JAWS
* Windows 7/10 NVDA + Firefox
* MacOS Safari + VoiceOver
* iOS and Android mobile devices as available
* Browsers such as Edge Chromium, AVG, or Waterfox. Additional software may be tested as time allows. Preferered pairings may change depending on analytics data.

## Post-launch audit preparation
Teams must conduct their own accessibility testing **before** scheduling a VSP Collaboration Cycle [Full Accessibility & 508 Office Audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#full-accessibility-and-508-office-audit).

### Foundational accessibility tests (required)

- [ ] Axe scans in daily development - [read more about the axe browser plugin](#axe-scans-in-daily-development)
- [ ] Axe scans included in end-to-end (e2e) tests - [read more about e2e tests with axe checks](#axe-scans-in-end-to-end-tests)
- [ ] Color tests for proper contrast and colorblindness - [read more about contrast and colorblindness](#color-tests)
- [ ] Content zoomed to 200%, 300%, 400% - [read more about zoomed layouts](#content-resize-check)
- [ ] Keyboard navigation - [read more about navigating with the keyboard](#keyboard-navigation-check)

### Advanced accessibility tests (recommended)

- [ ] Screen reader tests (VoiceOver + Safari or NVDA + Firefox) - [read more about getting started with screen readers](#screen-reader-tests). Teams are encouraged to conduct their own screen reader tests as part of the software development lifecycle (SDC). _DEPO Platform acknowledges this testing is aspirational._
- [ ] Axe-coconut scans in daily development - [read more about the axe-coconut experimental plugin](https://www.deque.com/blog/test-leading-edge-accessibility-axe-coconut-axe-core-3-0/)
- [ ] WAVE tool spot checks - [read more about the WebAIM WAVE tool](https://wave.webaim.org/)

## What to expect from accessibility specialists during post-launch audit
After you request a post-launch audit, the accessibility specialist will review your foundational tests. When the foundational tests have been verified, the specialist will review your product.

### VFS teams that have an accessibility specialist
- VFS product teams will create accessibility tickets for any known issues that could not be resolved in foundational testing
- VFS specialists will start the post-launch audit after product teams have completed the [foundational testing checklist](#how-to-document-that-your-team-has-completed-the-checklist). VFS specialists have the right to stop a post-launch audit if foundational testing was not completed.
- VFS specialists will gather known issues and enter any new tickets into a ZenHub epic
- DEPO Platform will review the feedback tickets and discuss any questions with the VFS product team
- VFS specialists will answer questions and help the product team resolve issues
- The VFS product team requesting the full audit will notify the VA 508 office of the product or feature in production
  - The product team should email the VA 508 office and CC the DEPO platform accessibility specialist. This email should include information such as a staging URL, test user credentials, user flows, and any known issues.
  - The DEPO Platform accessibilty specialist will communicate any VA 508 office fixes to the product manager (PM) who requested the full audit

### VFS teams that do not have an accessibility specialist
VFS product teams who do not have their own accessibility specialist will work directly with the DEPO Platform to complete their Collaboration Cycle accessibility requirements.

- VFS product teams will create accessibility tickets for any known issues that could not be resolved in foundational testing
- DEPO Platform will start the post-launch audit after product teams have completed the [foundational testing checklist](#how-to-document-that-your-team-has-completed-the-checklist).  DEPO Platform the right to stop a post-launch audit if foundational testing was not completed.
- DEPO Platform will gather known issues and enter any new tickets into a ZenHub epic
- DEPO Platform will answer questions and help the product team resolve issues
- The VFS product team requesting the full audit will notify the VA 508 office of the product or feature in production
  - The product team should email the VA 508 office and CC the DEPO platform accessibility specialist. This email should include information such as a staging URL, test user credentials, user flows, and any known issues.
  - The DEPO Platform accessibilty specialist will communicate any VA 508 office fixes to the product manager (PM) who requested the full audit
  
## How to document that your team has completed the checklist
1. Choose one of these 2 options: 
    * **(preferred)** Use the [TestRail VSP foundational accessibility testing checklist](https://dsvavsp.testrail.io/index.php?/projects/overview/13). The accessibility test cases template is available in TestRail for you to copy into your test plan and includes all the required accessibility checks.   \
OR
    *   Copy the required and recommended checklists from this doc into a doc in your product folder. _Note that this artifact can be used for the Collaboration Cycle staging review._

2. Link to any open accessibility issues in your staging review request ticket. These issues should be recorded using the [508 accessibility issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=508%2FAccessibility&template=508-issue.md&title=) template. See an example of an [open accessibility issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/182).

## How to request help
* If your team discovers an accessibility issue before the staging review: 
    * Use the [508 Accessibility Issue template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=508%2FAccessibility&template=508-issue.md&title=) to create a GitHub/ZenHub ticket. 
    * If an issue is not resolved before the staging review, include a link to it in the staging review ticket. 
* For general accessibility questions: [#vetsgov-accessibility](https://dsva.slack.com/archives/C8E985R32)
* For general questions about the collaboration cycle: [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1)
