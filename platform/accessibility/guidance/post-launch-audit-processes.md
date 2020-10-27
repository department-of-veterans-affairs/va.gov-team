# Accessibility Post-launch Audit Processes
Post-launch audit processes are designed to evaluate applications and static content using a wider set of devices than the [accessibility staging review](./staging-review-processes.md). The post-launch audit is the last evaluation before requesting a VA 508 office quick test.

You should [file a "Full Accessibility & 508 Office Audit" issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new/choose) when your application is relatively code-stable in production. Ideally all issues identified during the staging review have been fixed ahead of the post-launch audit request.

## How The Post-launch Audit is Different from a Staging Review
The post-launch audit will focus on manual testing with mobile and assistive technology:

* Windows 7/10 IE11 + JAWS
* Windows 7/10 Chrome + JAWS
* Windows 7/10 NVDA + Firefox
* MacOS Safari + VoiceOver
* iOS and Android mobile devices as available
* Browsers such as Edge Chromium, AVG, or Waterfox. Additional software may be tested as time allows. Preferered pairings may change depending on analytics data.

## Issue Gathering and Triage
* Issues will be collected as issues in a new ZenHub epic. The accessibility specialist will assign this epic to the project manager (PM) after the audit is complete.
* Issues will be triaged according to their severity. Severity 0 and 1 issues must be fixed as soon as possible. Severity 2-4 issues should be prioritized and fixed in upcoming sprints. Teams should review the [accessibility defect severity rubric](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md) if they have questions about issue severity or impact.
* The project manager will email the VA 508 office when their application or content is ready for review. The project manager should notify the VA 508 office by email, and CC their VSP/VFS accessibility specialist. This email will list staging URLs, test user credentials, and any known issues.
* VA 508 office suggestions or defects will be communicated to the project manager who requested the full audit:
  * VSP will create tickets for teams who do not have an accessibility specialist
  * VFS accessibility specialists will create tickets for their teams
* VSP/VFS accessibility specialists will work with stakeholders as issues are ready to be re-tested. When an issue has been resolved, the specialist or project manager should close it with a brief comment like _"Issue has been tested, and success criteria met. Moving to close."_
