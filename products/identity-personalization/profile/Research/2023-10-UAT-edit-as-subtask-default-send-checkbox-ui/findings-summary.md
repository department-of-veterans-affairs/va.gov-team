# Profile: Multi-feature UAT and generative research findings summary

`draft`

October 23, 2023
## Background
Over the last 3 months, we’ve worked on improvements related to our notification settings feature, and how users update profile information while in the middle of another task. They’re closely related, and will be part of the same release so we conducted UAT on all 3 features at once.[The specific features we tested are outlined in our research plan.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-UAT-edit-as-subtask-default-send-checkbox-ui/research-plan.md#features-to-be-tested)

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
- All items were clear to all but one participant; one participant was unclear about the difference between My VA and My HealtheVet.
- 6 of 6 participant’s expectations for letters links in the authenticated menu aligned with what they found when they landed on the page.  
  - Interestingly, the pilot participant (whose data is not included in this report outside of this note) stated the page did not contain the letters they expected. They expected to find their Certificate of Eligibility, and “basically every letter the VA mailed to me”.
- 3 of 4 participant’s expectations for the dependents page aligned with what they found on the page.
  - 1 expected to see contact information for each dependent, since they are beneficiaries that would need to be contacted in the event of an emergency.
  - 2 participants didn’t have dependents and were not asked to review the page.
- 3 of 6 participants referred to My VA as the VA.gov homepage.

### Review military information page 
We asked participants to share how the information on the page was helpful, and if there was anything missing that would be helpful for them to see on the page
- X out of X participants couldn’t think of any other data off the top of their head that would be useful to surface on their military information page. 
- We reviewed the list of data points we’re considering for military information with 2 participants:
  - Units with which the Veteran or Service member served
    - unsure how they would use it
  * Deployment locations and start and end dates of deployments 
    * Could see utility in this for toxic exposure data
  * Military occupational specialties 
    * “I know these by heart, that wouldn’t be useful.”
  * Training courses
    * “I’m not sure how I would use that.”
  * Military awards and decorations
    * That would be valuable, to not have to go through records and have it all in one place
  * Non-military deployment data
    * Not useful for me personally, but maybe others
  * A registry that verifies participation in a Toxic Exposure Risk Activity (TERA) memorandum 
    * I have been asked if I was part of this, it’d be helpful to be able to verify
- 2 out of X participants commented that the ability to download their DD214 from this page would be helpful
- 1 out of X participants wanted to see the duty status listed with their period of service, e.g. “active duty” or “inactive duty reserves”
- 2 participants commented that the dates listed were incorrect. Since one was only off by a day, they weren’t concerned. The other participant stated it didn’t matter because that was for their time in inactive reserves.
### Findings

## Other interesting findings

### Profile
* One user found the autosave functionality for notification settings surprising, and expected there to be a button to save updates.	
* One participant has 2 middle initials in their name, and expressed frustration that the 2nd initial isn’t capitalized in their name. 
  - Engineering note: the middle initial comes back as it's own property from the api, so the assumption is the the middle name is probably coming to the FE as `G m` so not sure there would be much we could do since multiple middle names aren't really supported.
- X of X participants easily used the profile hub page to navigate
- 2 of X participants used the auth menu to navigate to profile
  - 1 participant wasn’t aware of the auth menu or the `Go to profile` link on My VA and had to be guided by the moderator.
### Letters tool
- One participant shared a pain point about having to go to a regional office to get their compensation and pension examination letter, and wished it was available in the letters tool
- One participant expected the Letters section of the site to contain anything the VA mailed to them, and was disappointed not to find a Certificate of Eligibility or Benefit Decision letter on that page
- One participant was confused by having to verify their address prior to seeing theIR letters 

>  I’m not sure why on that first page all it's asking me for is my address. Not sure what that purpose of that is. Why doesn't it just give me the list of letters on the second page? It seems like they could give my address and the list of letters on one page instead of having to click twice. - P4
### Other parts of the site
* 
* 
## Who we talked to
* 6 Veterans
* 4 identified as Caucasian
* 1 identified as Black
* 1 identified as American Indian or Alaska Native
* 2 identified as female, 4 identified as male
* Age range between 40 - 75
* 3 participated on a desktop device, 1 participated on a tablet, 2 participated on a smartphone
