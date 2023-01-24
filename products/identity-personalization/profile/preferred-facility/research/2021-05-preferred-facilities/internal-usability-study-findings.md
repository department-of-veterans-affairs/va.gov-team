# Profile "Your VA Health Facilities" Internal Research Study Findings 

**Digital Services Veterans Affairs (DSVA), VSA, Authenticated Experience**<br>

Liz Lantz, May 10, 2021
Updated May 23, 2021

View the [conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/preferred-facility/discovery-and-research/conversation-guide.md) and [project brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/preferred-facility/README.md).

## Overview

We're building a new section of profile to allow Veterans to set their facility preferences, which will in turn inform the list of options Veterans see when they use VAOS to schedule an appointment online. Prior to conducting a collaborative study with the VAOS team, we did some usability testing to validate our overall design and get insights into how Veterans understand this section of profile outside of the VAOS context.

We ran 5 moderated sessions on Zoom with internal colleagues who are also Veterans.

## Findings

1. All participants understood the facility list to be places where a Veteran had received health care.

2. All participants expected that unchecking the checkbox would remove a facility from the list.

3. All participants understood the content* that appeared after removing a facility from the list.

4. 2 participants were initially unsure if edits to their list were limited to just their profile, or their broader VA record.

   > The edit thing, if it's actually deleting, that's a little unclear to me with that functionality. - P3

   > Is that going to just change the list on this page, or is its actually going to update which hospital or VA I went to see? - P5

   This may have been due to how the prototype was wired up, since only one configuration of checkboxes (out of more than 12 possible outcomes) would be correctly displayed after clicking the `update` button. 

   Once they saw the content* replacing the facility they unchecked, the outcome after making edits made sense to them. 

5. 4 of 5 people assumed the facility list was sorted chronologically based on when they had gone to the facilities. One of those participants also commented that they expected to see facilities delineated by type.

   > I would think there would be a VA clinic section, and a medical center section.  Maybe it's a timeline thing and these are added in the corresponding times that you've used them. - P4 

   > The newest [most recent] should be at the top. I would expect that. Imagine some people have been in the VA for 20 years, they could have a very large list here and it would be silly to make them scroll to the bottom. - P5

6. There is a use case we hadn't previously considered: a user does not currently receive VA health care, but is registered at VA facilities because they had received medical care through the VA in the past. 

7. We heard a few things worth digging into in future studies related to facility contact information, online scheduling, and new facility registrations.

   - One participant wondered what they could do if they had followed the steps inside the `How can I add a new facility?` FAQ, but still didn't see the new facility in their list.

   - One participant wanted to see wanted to see facility contact information. 

     > The purpose for me going there [to this section of profile] is not to know, I mean, I know where I go. I'm registered with them. I want driving directions, or contact information, links to phone numbers. - P5

   - A participant who is not enrolled in health care at the VA expected the `schedule an appointment online` link to allow them to schedule any kind of appointment they could make over the phone, such as a fingerprinting appointment. It makes sense that they wouldn't immediately associate scheduling with medical appointments since they don't receiveVA health care.

     > I would expect to schedule any appointment through here that I could schedule by calling. - P3

   - Two participants talked about wanting to be able to add a new facility from this page in their profile. 

   

## Recommendations

- Our study shows there were no major usability issues, and people easily navigated our design to update the list of facilites. We should move forward with our overall design pattern for the study with VAOS.

- Since 4 of 5 participants incorrectly assumed the list was sorted chronologically, we should add text above the list to communicate how it is sorting to minimize the cognitive effort required to process long lists. 

- We should explore making the impacts of editing the facility list more clear. If people think unchecking a facility will unregister them from that facility, they may not use this tool, making it unusable. 

- We need to update our research questions and conversation guide for our VAOS study to dig in to some of the findings we uncovered.  We should:

  - Evaluate if people still have questions about the scope of the edits to their list (finding 2) after we make changes.  We'll add this to our research with VAOS. 
  - Evaluate expectations around the `schedule an appointment online` link. If needed, we can make that language more specific.
  - See if there are additional data points around facilities that would make sense to include here.

-  We should understand the timeline between a person registering at a facility and it becoming a part of their MPI data. This will inform how we might provide a good UX for the scenario where someone registers with a facility but doesn't yet see the facility listed in their profile. The VAOS study can proceed regardless of having this information, but we should have the following questions answered so we can evaluate any solutions to address them in a subsequent round of usability testing:

  - How long does it take for new facility registration to reflect in MPI
  - Is the timeline different if they register by phone or in person? 
  - Does it vary by facility?

  If we learn there could be a delay for a user in this scenario, we can update the language in/around that FAQ to answer this question for Veterans.
  
  **Update, 5/23/2021**: [From Danny Read in Slack](https://dsva.slack.com/archives/GM5JJ5388/p1620758554022000): there is NO delay in the updating of the VA MPI with the new VistA site, it is a real-time interaction between the VA MPI and VistA Registration process.  If something happens with communication there could be a delay because that identity is put into a queue and there is a background job that runs on an interval (10 min currently) but it could be longer if comms are down between that site and VA MPI but in most cases it should be immediate.

Given this, I don't think we need to do anything special to solve for this use case.

- We need to re-evaluate if the logic we planned to use to show/hide this section of profile still makes sense, given the new use case we uncovered (finding 6).  You could be in the system but not actively receiving care, which means you might not be able to do things like schedule an appointment online. The VAOS study can proceed without answers to this question.  Before we release our MVP, we'll need to determine:

  - What is the VAOS UX for a person who fits this use case?
  - Do we still want to show this section to users who have health care but can't use VAOS?

**Update, 5/23/2021**: A user can still get into the scheduling flow; appointment schedulers would handle any issues w/ them having an appointment.    Our team is using the same logic as VAOS to determine health care, so we don't have to worry about different experiences in each of our products. We don't need to make any updates; I recommend moving forward with our plans as-is.

### Pages and applications used

https://preview.uxpin.com/2c99ba26116e28b032d83eb4f636b448c9bde2b2#/pages/138665581/simulate/no-panels?mode=i

[Notes/synthesis doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/preferred-facility/discovery-and-research/health-facilities-internal-study-notes.xlsx)



*Content:  "**Note: **You're registered at 1 other facility where you've received care in the past. You can edit this list to add that facility at any time."

