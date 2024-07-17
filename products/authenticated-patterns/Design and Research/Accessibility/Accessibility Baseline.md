# 508 and WCAG Compliance Baseline for Authenticated Experience Design Patterns																									
## Introduction to Accessibility Baseline Question
In order to ensure the authenticated design patterns we submit to VADS and USWDS meet the minimal baseline standards the VADS team uses and to be in accordance with the specifications of our work order, we are working to understand the baseline for accessibility compliance.
The [Work Order wording](https://docs.google.com/document/d/12_YfjCfKVMYtaX2kObeOC6FhKv4aj8HgZY46znp5OUQ/edit?usp=sharing): "All delivered web component and pattern code achieves perfect accessibility scores per Section 508 and Web Content Accessibility Guidelines 2.2 requirements via automated and manual testing"
## Acceptibility Criteria
The [Acceptibility Criteria](https://app.zenhub.com/workspaces/tmf-authenticated-experience-design-patterns-6679c93348f9b278c6b5d1af/issues/gh/department-of-veterans-affairs/tmf-auth-exp-design-patterns/14) for this issue is to Gain a measure of the current status of 508 and WGAC compliance. 
To better understand the baseline and testing that has been done, I interviewed members of the VADS team, Governance team, and other accessibility specialists at VA. From those interviews I've gained an understanding that components and patterns, when in context of how they are used in Veteran facing circumstances, are always 100% 508 and WCAG 2.2 (a combination of AA and AAA) compliant.
Furthermore, the component design process uses a trunkated collab cycle that skips to the staging review which involves the Governance Team. However, patterns do not have as established a process. That is something we may need to define. 
The current patterns and components that have been tested for accessibility are documented in design.va.gov and usually reference the [USWDS](https://designsystem.digital.gov/) site in regards to accessibility, which seems to indicate that they are using the same standards as USWDS. The documentation of the testing process and the findings is a [VADS project commencing on July 18th](https://github.com/department-of-veterans-affairs/va.gov-team/issues/87091).
## Conclusion
The patterns we put forth will need a review cycle, that involves other teams. According to our contract, we do not need to engage the complete collab cycle; however, we may want to include VADS, CAIA, and the Governance team at stages of our process.
At a minimum, we will need to do:
- [Inhouse manual testing for accessibility](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/shared-support/accessibility/documentation/how-we-audit.md). In addition to: trauma informed design checks for the components in our patterns.
- Establish a testing protocol for patterns according to their governance documentation.
- Consult with CIAI for accessibility testing.
- Consult with the either Governance team or CAIA for documentation review regarding the Governance of the design pattern.
## Next Steps
I suggest we have a discussion with Becky about what our workflow should look like and gather feedback on the above suggestion as a starting point. I also suggest that we meet with the VADS team.
## Additional Resources							
- https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review							
- https://designsystem.digital.gov/components/accordion/accessibility-tests/																									
- https://design.va.gov/components/accordion#accessibility-considerations																									
- https://designsystem.digital.gov/components/pagination/#accessibility-pagination																									
																									
																									
																									
																									
																									
Notes from discovery meeting with accessibility specialists on the topic of testing our patterns and understanding the current baseline we are required to conform to: 																									
"Issue with testing out of context
Patterns are usually configured within their context and then tweaked as needed when in use, so out of context testing may not be as ""real-world.""
Jaws nvda - GFE —> submit a ticket through a portal to get this
Siri screen reader is also used
USWDS monthly accessibility meeting may be beneficial to us 

Strengthening the collaboration cycle for how a pattern is used - governance - for any pattern we put forth will help to guide its use in various situations.

AA standard for WCAG and 508 compliance are bare minimum, VA goes above and beyond
More detailed instructions for the Governance accessibility audit - https://vfs.atlassian.net/wiki/spaces/PPS/pages/2059763776/How+to+complete+an+Accessibility+review+for+Staging+review+touchpoint

VADS accessibility testing is done in house before the governance team does their own testing. The governance team - these docs cover the reviews they do: https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/
Staging review, accessibility, 
But beforehand - axe scan, manual checking - zoom levels, screen readers, VoiceOver/safari/jaws/color contrast/hoverstates/browser text size, mobile size, : https://vfs.atlassian.net/wiki/spaces/PPST/pages/3079929923/Overview+of+accessibility+testing+coverage+and+tools
Hit all of those points

Documentation is a project that starts on the 18th of July: 
https://github.com/department-of-veterans-affairs/va.gov-team/issues/87091"																									
