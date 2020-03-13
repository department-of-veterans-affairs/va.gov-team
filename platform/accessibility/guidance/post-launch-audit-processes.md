# Accessibility Post-launch Audit Processes
Post-launch audit processes are designed to evaluate applications and static content using a wider set of devices than the [accessibility staging review](./staging-review-processes.md). The accessibility specialist(s) will also schedule your application or content for a VA 508 office quick test.

You should [request a full audit](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=1Copenut%2C+jenstrickland&labels=508%2FAccessibility%2C+product+support&template=full-accessibility-and-508-office-audit.md&title=Full+Accessibility+%26+508+Office+Audit+%5BFeature-Name%5D) when your application is relatively code-stable in production. Ideally all issues identified during the staging review have been fixed, but your accessibility specialist will communicate known issues to the VA 508 office.

## How The Post-launch Audit is Different from a Staging Review
The post-launch audit will focus on manual testing with mobile and assistive technology:

* Windows 7/10 IE11 + JAWS
* Windows 7/10 Chrome + JAWS
* Windows 7/10 NVDA + Firefox
* MacOS Safari + VoiceOver
* iOS and Android mobile devices as available
* Browsers such as Edge Chromium, AVG, or Waterfox. Additional software may be tested as time allows. Preferered pairings may change depending on analytics data.

## Issue Gathering and Triage
* Issues will be collected as issues in a new ZenHub epic. The accessibility specialist will assign this epic to the person who requested the staging review.
* Issues will be triaged according to their severity. Some issues will be launch blockers. Others can be fixed post-launch. Teams should review the [accessibility defect severity rubric](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md) if they have questions about issue severity or impact.
* The accessibility specialist will communciate the application or content's readiness for review to the VA 508 office. The specialist will list known issues and serve as a liaison between the requesting team and the VA 508 representative.
* Accessibility specialists will work with stakeholders as issues are ready to be re-tested. When an issue has been resolved, the specialist or project manager should close it with a brief comment like _"Issue has been tested, and success criteria met. Moving to close."_
