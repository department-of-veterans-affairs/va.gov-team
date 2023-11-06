# Launch Plan for Benefits and Claims - Dependent Experience Team, Dependency Claims, VA Form 21-686C Military Base Outside the U.S. Address Issues November 2023
*Plans for launch of changes to 686c ZIP validations and error messaging.* 

## Background
Briefly describe the background of your product. Consider:
- Claims are getting rejected due to incorrect entries for mailing addresses on military bases outside the U.S.
- Veterans are not notified that their claims have been rejected.
- Until recent updates, the VA was not notified of these rejections, either.
- Part of a code-yellow project; triggering null claims.
- [Related Zenhub ticket](https://app.zenhub.com/workspaces/benefits-dependents-experience-6459139e7d64bf0015f6af13/issues/gh/department-of-veterans-affairs/va.gov-team/63545)
- Where is your product situated on VA.gov? Within 686c form flow to add or change dependents - specifically, any mailing address form that allows the Veteran to select the option of living outside of the U.S. on a military base.
- This is an iteration of an existing tool.

**Note: Ryan Thurlwell is working on a more holistic, long-term solution to the address component - this work is only intended as a short-term fix to limit the number of null claims we're seeing from this issue**

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/21-686C-military-base-outside-the-US-address-issues/initiative-brief.md).

### OCTO Priorities 

Which [OCTO priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202023.md) does this research support? Work with your VA lead and product manager as needed.
2. Solidify the VA.gov platform
7. Fast-track disability claims

### Veteran Journey
Where does your product fit into the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)?
Getting out: Engaging VA to access benefits and services
Putting down roots: Taking care of my family
Retiring: Finding additional sources of income

## Launch Goals	
- Discover whether the updates to ZIP code validation helping move our null claims numbers closer to 0?
- Discover whether the updates to error message language helping Veterans complete 686c claims successfully?

### Outcome
- Research will help validate hypothesese around changes
- We'll share findings with teams working on more holistic, long-term solutions to address components.

### Hypothesis
What do you intend to learn and measure from this study? Think through these prompts to develop a strong hypothesis.
- Updates to ZIP code validations and error messaging will help move the null claims for 686c closer to 0 and therefore improve the numbers of successful claims for 686c. 

## Methodology	
Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design. 

- Typical ramped launch
- Track zipCode errors from BIS and hopefully see the number reduce to near zero here: [http://sentry.vfs.va.gov/organizations/vsp/discover/results/?environment=production&[…]+zipcode%22&sort=-message&statsPeriod=7d&widths=-1&widths=-1](http://sentry.vfs.va.gov/organizations/vsp/discover/results/?environment=production&field=message&field=error.value&name=Top+Errors&project=3&query=%28+controller_name%3Adependents_applications+OR+SubmitForm686cJob+OR+SubmitForm674Job+OR+job%3ABGS%3A%3ASubmitForm686cJob+OR+job%3ABGS%3A%3ASubmitForm674+%29+level%3Aerror+message%3A%22%28ns0%3AServer%29+insertBenefitClaim%3A+Invalid+zipcode+Savon%3A%3ASOAPFault+lib%2Fbgs%2Fservice.rb+insert_benefit_claim+Sidekiq%2FBGS%3A%3ASubmitForm686cJob%22+error.value%3A%22%28ns0%3AServer%29+insertBenefitClaim%3A+Invalid+zipcode%22&sort=-message&statsPeriod=7d&widths=-1&widths=-1)
	- Compare against null claims numbers for week-long increments prior to launch



Additional resources:
- Please review the [PRA primer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-paperwork-reduction-act.md) to educate yourself on how PRA impacts the research we do as a government project. 
- Review the [Perigean recruitment guidance](https://depo-platform-documentation.scrollhelp.site/research-design/Recruiting-Participants.1958773044.html) to understand how Perigean recruits, and what types of research they can support. 
- If conducting testing on mobile, refer to the [mobile research guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/Conducting-Research-Sessions.1958773061.html#ConductingResearchSessions-Researchingwithmobileusers)
- If conducting [unmoderated usability research, refer to the guidance here.](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html) 
- If conducting [research with disabled Veterans, refer to this checklist](https://depo-platform-documentation.scrollhelp.site/research-design/research-with-assistive-technology-users) and [follow disability etiquette guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/disability-etiquette)
- In the rare event of an emergency during research, be prepared by reviewing guidelines for [research safety and emergency exit strategies](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html).


### Research materials
*Note: your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.*

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

For [unmoderated testing:](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html) 
- [Link to staging site TBA](url goes here)
- [Link to where we'll track null claims results in BIS](http://sentry.vfs.va.gov/organizations/vsp/discover/results/?environment=production&field=message&field=error.value&name=Top+Errors&project=3&query=%28+controller_name%3Adependents_applications+OR+SubmitForm686cJob+OR+SubmitForm674Job+OR+job%3ABGS%3A%3ASubmitForm686cJob+OR+job%3ABGS%3A%3ASubmitForm674+%29+level%3Aerror+message%3A%22%28ns0%3AServer%29+insertBenefitClaim%3A+Invalid+zipcode+Savon%3A%3ASOAPFault+lib%2Fbgs%2Fservice.rb+insert_benefit_claim+Sidekiq%2FBGS%3A%3ASubmitForm686cJob%22+error.value%3A%22%28ns0%3AServer%29+insertBenefitClaim%3A+Invalid+zipcode%22&sort=-message&statsPeriod=7d&widths=-1&widths=-1)
- [Link to where we'll track successful form completion in GA TBA](url goes here)
