## 21-686c Workflow Questions

### To Stakeholders
1. Who are the claimants mentioned in the 686; how often (estimated) do they use the 686 vs. the Veterans themselves?
2. Do you prefer mixed-use 686s (e.g. add spouse + report divorce + report married child) vs. single-purpose use (e.g. only add dependent child)?
3. Would multiple 'single-purpose' submissions be confusing for processors? Helpful maybe?
4. How often is 686 used to remove dependents vs. adding them? 
~~5. It seems applying to add dependent to a claim would be the more popular use of the form; is that the case?~~
6. Does VA have to “discover” deceased or divorced dependents, or do Veterans actually self-report? 
7. Do child dependents automatically age-out?
8. (That you're aware of) Is there any info/data that is not being collected from eBenefits that is collected by the paper form? The reverse? Info collected but not on the paper form? (e.g. Veteran’s birthdate, service #)
9. Is there any info or data that’s being collected differently? (e.g. Middle name vs. middle initial, birth or marriage locations).
10. Would it cause a problem if we handled 'location' information in two multi-purpose fields rather than a combination of four?
11. How do you handle the language/terminology of 'former spouses former spouses?' Or is this not confusing in practice?
~~12. When we need to provide in-line guidance and examples, do we have some flexibility in how we present the info? (We have a mandate for 'plain language' and 508 considerations)~~
13. In reporting stepchildren in a divorce, it seems the user is directed to fill-out Section VI regarding the death of a dependent; is this really required?
14. Removing a stepchild seems to be tied to the divorce info in the paper form. Is it really considered an independent workflow? Could it be a part of a broader removed child/dependent workflow?
~~15. We may need to change some details of how the form is presented to accomodate VA.gov conventions, particularly form labels (e.g. Middle Name vs. Middle Initial); do you see potential problems?~~
16. The curent eBenefits implementation seems to align with the June 2014 form; are you aware of any updatetraffic ties to align with the September 2018 version?
17. Was the June 2014 version of the 21-686c used to remove dependents from a Veteran's disability claim?
18. Is/was the Veteran responsible for "updating" dependents info via the 21-686c (e.g. a separated spouses address).
~~19. The paper form directs users to VA.gov for the digital version (it does not yet exist there); do you have staff that monitors/manages the digital version of forms (in the event of problems, changes, etc.)? As it exists on eBenefits?~~

### For Us / General
1. Can VA.gov support role-based access/permissions yet? Or is just Veterans accessing Authenticated Experiences?
 - SK: VA.gov doesn't support roles or permissions yet. However, any person who is in MPI (Master Person Index, formerly Master Veteran Index) can create an ID.me wallet, log in to VA.gov, and use any applications which populate with their known information. This includes dependents! There is just no way for anyone to use VA.gov "on behalf of" anyone else.
2. Is auto-fill known info from data source? Or make user enter/re-enter all (except Veteran info). Are data sources current, or will auto-fill propagate bad data?
- SK: Auto-fill, or "prefill" as it's known on the platform, pulls data from the user onject. The user object populates at login with data from MPI, VA-Profile (Vet360), and VADIR (military service history).
3. Where is VA.gov currently getting its profile info? Is this different from what VBA needs for the 686? And what about implementing Vet360?
- See #2; profile info comes from MPI, VA-Profile (Vet360), and VADIR.
4. How can we handle the “Place” data for marriages and births/deaths--two-piece combos of state/city, county/city, country/city etc.?
5. Should we default to “negative” (or closed) states for expanding form elements (e.g. Were you married before? No.)? This could 'hide' long form sections by 'default.'
- Yes, default to less information.
6. Should we link to the paper form(s)?
- I'd want to test this in user sessions when testing the designs. I don't believe we do this in other long applications.

## Concerns
1. Seems VA.gov is specific with their forms. They have a convention of calling-out the VA paper form number itself when presenting the digital equivalent; we may not be able to abstract them away, collect data and package it as a form submission.
2. So we may have to drive users to a specific 21-674 form if they want to request school attendance.
- SK: We should do what we can to mitigate this and to inculde the 674 experience in the broader Dependency Claims experience.
3. The loop and list feature looks wobbly in the Rainbows 686 implementation; appears to be styling problems with button placement, and I'd like to see the second element 'committed' using a button rather than just a blind 'Continue.'
4. We may need to add organizing styling or features to form generator. We may ned to ditch the progress bar.
5. Should we consider a landing page to 'home' a self-sort questionnaire and link to an independent 674? This could also be the target for redirects from the eBenefits site.
