# Profile: Multi-feature UAT and generative research findings summary

October 23, 2023

## Background
Over the last 3 months, we’ve worked on improvements related to our notification settings feature, and how users update profile information while in the middle of another task. They’re closely related, and will be part of the same release so we conducted UAT on all 3 features at once. [The specific features we tested are outlined in our research plan.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-UAT-edit-as-subtask-default-send-checkbox-ui/research-plan.md#features-to-be-tested)

In case a session went smoothly and we had extra time, we prepared some additional questions to ask participants about two other profile initiatives we haven’t had a chance to talk to Veterans about yet:
1. The `Dependents` and `Letters` links that were recently added to the authenticated menu ([project outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/authenticated-menu#product-outline-authenticated-menu)).
   **Goal:** Gather impressions of the items in the menu, and evaluate whether or not the pages the links point to align with expectations.
2. Enhancing our military information page by adding additional data points related to service history ([project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/2023-enhanced-military-information/README.md))
   **Goal:** Understand how Veterans use the current information on the page, and how they might use additional data about their service history.
## UAT Tasks and Outcomes
### Add mobile number
All participants were able to successfully add their mobile number through the sub-task flow, and all validation messages and the confirmation modal functioned as expected.

Additionally, the phone number and success alerts displayed as expected on the notification settings page.
### Update mobile number
All participants were able to successfully update their mobile number through the sub-task flow.
### Update notification settings 
All notification setting options behaved as expected.
### Bugs
None found

## Generative research
### Review the authenticated menu
We asked participants to share where they expected each item in the menu to take them   
- All items were clear to all but one participant; one participant wasn't sure about the difference between My VA and My HealtheVet.
- 6 of 6 participant’s expectations for letters links in the authenticated menu aligned with what they found when they landed on the page.  
  - Interestingly, the pilot participant (whose data is not included in this report outside of this note) stated the page did not contain the letters they expected. They expected to find their Certificate of Eligibility, and “basically every letter the VA mailed to me”.
- 3 of 4 participant’s expectations for the dependents page aligned with what they found on the page.
  - 1 expected to see contact information for each dependent, since they are beneficiaries that would need to be contacted in the event of an emergency.
  - 2 participants didn’t have dependents and were not asked to review the page.
- 3 of 6 participants referred to My VA as the VA.gov homepage.

### Review military information page 
We asked participants to share how the information on the page was helpful, and if there was anything missing that would be helpful for them to see on the page
- 4 out of 6 participants couldn’t think of any other data off the top of their head that would be useful to surface on their military information page.  
  - One participant said it’d be helpful to see their DD214 on the page, so they could easily print it off.
  - 2 participants wanted to see the duty status listed with their period of service, e.g. “active duty” or “inactive duty reserves”
- One participant brought up the topic of caregivers, and that caregivers may not be familiar with a Veteran’s service and any additional service history in the profile could be useful for a caregiver advocating on behalf of a Veteran.

#### Specific military data points
We asked  our last 3 participants to share thoughts about how they’d use the list of data points we’re considering for military information.

##### Units with which the Veteran or service member served
2 of 3 felt it would be nice to have that information there for nostalgic purposes, but couldn’t think of a reason outside of that they would need this information

##### Deployment locations and start and end dates of deployments 
All 3 participants felt this information would be useful in helping Veterans verify they were in locations where they may have been exposed to toxins.
> It would be really helpful to have it automatically part of my record, and then government would already know so I don't have to explain it.  That would be all I need to put to corroborate what I'm saying on the national hazmat registry. - P8

##### Military occupational specialties (MOS)
2 of 3 participants stated MOS wouldn’t be useful to them:
> I know these by heart, that wouldn’t be useful. - P7

> My MOS was my MOS the entire time I was in the army. So I wouldn't need that. - P9

The third participant had mixed feelings about how helpful this would be to them. They stated they’re retired, so it wouldn’t really matter to them and “that’s what the DD214 is for.” They then went on to say they could see how this information would be useful for younger Veterans building resumes.

##### Training courses
2 of 3 participants could see this being useful, but both stated it would be need to be quite detailed to be more valuable than documents they already have access to (transcripts and ATRSS, an Army record management system)

##### Military awards and decorations
All 3 participants felt this would be valuable to see.
- 2 of the 3 stated it would be more for nostalgia or vanity reasons
- 1 called out the additional usefulness for caregivers who may not be aware of a Veterans awards/decorations

##### Non-military deployment data
2 of 3 participants location data about non-military deployment would be useful in case of toxic exposure.  We ran out of time and weren’t able to ask the third participant about this data point.

##### A registry that verifies participation in a Toxic Exposure Risk Activity (TERA) memorandum 
All participants felt this would be useful to have this included in their profile military information.
> That would be the most useful thing you could put on there except the deployment locations. That would be very important to have quick access to, especially if you're gathering information for some sort of claim. - P8

## Other interesting findings

### Profile
* One user found the autosave functionality for notification settings surprising, and expected there to be a button to save updates.	
* One participant has 2 middle initials in their name, and expressed frustration that the 2nd initial isn’t capitalized in their name. 
  - Engineering note: the middle initial comes back as it's own property from the api, so the assumption is the the middle name is probably coming to the FE as `G m` so not sure there would be much we could do since multiple middle names aren't really supported.
- All participants easily used the profile hub page to navigate
- 4 of 6 participants used the auth menu to navigate to profile
  - 1 used the `Go to profile` link on My VA.
  - 1 participant wasn’t aware of the auth menu or the `Go to profile` link on My VA and had to be guided by the moderator.
### Letters tool
- One participant shared a pain point about having to go to a regional office to get their compensation and pension examination letter, and wished it was available in the letters tool
- One participant expected the Letters section of the site to contain anything the VA mailed to them, and was disappointed not to find a Certificate of Eligibility or Benefit Decision letter on that page
- One participant was confused by having to verify their address prior to seeing their letters 

>  I’m not sure why on that first page all it's asking me for is my address. Not sure what that purpose of that is. Why doesn't it just give me the list of letters on the second page? It seems like they could give my address and the list of letters on one page instead of having to click twice. - P4
### Other areas of interest
#### Travel pay painpoint
One participant shared frustration that they’ve never been able to successfully use BTSSS to submit a claim for travel pay, and had missed out on $350 to date.  They felt the site had a bug, and had attempted to call the MHV help line, and get help in person at their VAMC with no luck.

## Who we talked to
* 6 Veterans
* 4 identified as Caucasian
* 1 identified as Black
* 1 identified as American Indian or Alaska Native
* 2 identified as female, 4 identified as male
* Age range between 40 - 75
* 3 participated on a desktop device, 1 participated on a tablet, 2 participated on a smartphone

## Next steps
1. We’ll have a go/no go discussion the week of 10/23/2023.
2. We looked into how a Veteran can get help for travel pay issues, and passed along info to the Veteran through Perigean.
   - A Veteran can call *~[1-855-574-7292](tel:18555747292)~*, which is a Member Services contact center that handles BTSSS questions in addition to many other topics.
   - There is a somewhat common problem with users trying to log in whereby there are two records in MPI that BTSSS can't disambiguate. 
   - The help desk process is supposed to go something like:
     * User contacts member services for Tier 1.
     * If unable to assist member services contacts BTSSS production support (a small contract team with BAH)
     * If needed, that team brings in other parties, often Identity Access Management (IAM)
     * ([Slack thread](https://dsva.slack.com/archives/CE4304QPK/p1697722503292559?thread_ts=1697646505.735719&cid=CE4304QPK)) with more details
3. We created a ticket ([\#68144](https://github.com/department-of-veterans-affairs/va.gov-team/issues/68144)) to explore whether or not the name tag can support capitalization for multiple middle initials. 
