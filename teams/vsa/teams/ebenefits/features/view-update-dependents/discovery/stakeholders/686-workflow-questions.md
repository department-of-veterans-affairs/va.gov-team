## 21-686c Workflow Questions

### To Stakeholders
1. Who are the claimants mentioned in the 686; how often do they use the 686 vs. the Veterans themselves?
2. Do you prefer mixed-use 686s (e.g. add spouse + report divorce + report married child) vs. single-purpose use (e.g. only add dependent child)?
3. Would multiple 'single-purpose' submissions be confusing for processors? Helpful maybe?
4. How often is 686 used to remove dependents vs. adding them? 
5. Does VA have to “discover” deceased or divorced dependents, or do Veterans actually self-report? 
6. Do child dependents automatically age-out?
7. Seems applying to add dependent to a claim would be the more popular use of the form. 
8. (That you're aware of) Is there any info/data that is not being collected from eBenefits that is collected by the paper form? The reverse? Info collected but not on the paper form? (e.g. Veteran’s birthdate, service #)
9. Is there any info or data that’s being collected differently? (e.g. Middle name vs. middle initial, birth or marriage locations).
10. Would it cause a problem if we made Country, State/Province and City required, and allowed optional County info? This may save on biz logic and validation for varying requirements.
11. How do you handle the language/terminology of 'former spouses former spouses?'
12. Do we need to provide in-line guidance and examples?
13. In reporting stepchildren in a divorce, it seems the user is directed to fill-out Section VI regarding the death of a dependent; is this really required?
14. Removing a stepchild seems to be tied to the divorce info in the paper form. Is it really considered an independent workflow? Could it be a part of a broader removed child/dependent workflow?
15. We may need to change some details of how the form is presented to accomodate VA.gov conventions, particularly form labels (e.g. Middle Name vs. Middle Initial); do you see potential problems?

### For Us / General
1. Can VA.gov support role-based access/permissions yet? Or is just Veterans accessing Authenticated Experiences?
2. Is auto-fill known info from data source? Or make user enter/re-enter all (except Veteran info). Are data sources current, or will auto-fill propagate bad data?
3. Where is VA.gov currently getting it’s profile info? Is this different from what VBA needs for the 686? And what about implementing Vets360?
4. How can we handle the “Place” data for marriages and births/deaths--two-piece combos of state/city, county/city, country/city etc.?
5. Should we default to “negative” (or closed) states for expanding form elements (e.g. Were you married before? No.)? This could 'hide' long form sections by 'default.'
6. Should we link to the paper form(s)?

## Concerns
1. Seems VA.gov is specific with their forms. They have a convention of calling-out the VA paper form number itself when presenting the digital equivalent; we may not be able to abstract them away, collect data and package it as a form submission.
2. So we may have to drive users to a specific 21-674 form if they want to request school attendance.
3. The loop and list feature looks wobbly in the Rainbows 686 implementation; appears to be styling problems with button placement, and I'd like to see the second element 'committed' using a button rather than just a blind 'Continue.'
4. We may need to add organizing styling or features to form generator. We may ned to ditch the progress bar.
5. Should we consider a landing page to 'home' a self-sort questionnaire and link to an independent 674? This could also be the target for redirects from the eBenefits site.
