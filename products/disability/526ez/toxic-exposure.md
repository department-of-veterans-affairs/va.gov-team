# Toxic Exposure

## Keywords

Disability compensation, disability benefits, toxic exposure, PACT Act, 526 ez

## Resources

1. Figma file: [526 toxic exposure](https://www.figma.com/file/dBKlB23Hs2oa53euXcXmmK/526-toxic-exposure?type=design&node-id=0%3A411&mode=design&t=B73IymSk8l8Cc4TB-1) 
2. Epic: [Toxic Exposure - 526ez](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/64536) (also contains other key project documents)
3. Documentation ticket: [Toxic Exposure - clean up documentation](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/71950)
4. Review documentation
    - [Collaboration Cycle milestone](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1075) (includes guidance from 2 midpoint reviews)
    - [CAIA Content Feedback Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76216) (service connection question content, February, 2024)
    - [CAIA intake request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/71168) (December, 2023)

## Team

1. Design: [@Kate-allbee](https://github.com/Kate-allbee),  [@mengA6](https://github.com/mengA6)
2. Front end engineering: [@christinec-fftc](https://github.com/christinec-fftc) 
3. Research: Lydia Hooper, Shannon Ford, [@evelynhilbrichdavis](https://github.com/evelynhilbrichdavis)
4. Product: [@RakshindaAslam](https://github.com/RakshindaAslam) 

## Current design

We are adding a toxic exposure section to the 526 ez disability benefits claim form, allowing Veterans to specify some aspects of their service history that might qualify them for additional disability benefits related to toxic exposure. This brings the digital form into parity with the paper 526 ez form on these exposure questions. 

### MVP First Release

For our initial release, we will: 

1. include this toxic exposure section only for new conditions (not already-rated conditions or claims for increase)
2. separate the "service connection" question into two screens (one for the radio button choice and another for the fields that follow it), per the one question per page guidance

![service connection second screen following first radio button choice](https://github.com/department-of-veterans-affairs/va.gov-team/assets/151068099/53c08f8d-d43d-499f-917a-74be4d5816e8)


See Figma file: [526 toxic exposure](https://www.figma.com/file/dBKlB23Hs2oa53euXcXmmK/526-toxic-exposure?type=design&node-id=0%3A411&mode=design&t=oJsLDpd2NrXJIAgB-1) and the page under "----------Current Workspace----------" for details.

### Second Release

After the initial release, there are more content and component updates to implement. This includes:

1. Content updates on radio button choices for the first "service connection" screen
2. Content and component updates on second "service connection" screen following from "service connection" radio button choices 2-4
3. Content and component updates on second "service connection" screen in the Benefits Delivery at Discharge flow

![second release service connection screens](https://github.com/department-of-veterans-affairs/va.gov-team/assets/151068099/4514293d-89b3-4caa-9601-771fbe6d2a59)

The Figma file: [526 toxic exposure](https://www.figma.com/file/dBKlB23Hs2oa53euXcXmmK/526-toxic-exposure?type=design&node-id=929-8828&mode=design) in the page under "----------Future Versions----------" has the details. 

The Zenhub ticket [Update content and components on "how is your condition related to your service?" and follow-up question for all radio button options #77226](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/77226) shows the content feedback.

Note [the background on this scope decision](#scope-of-content-to-update).

## Project background

Lydia Hooper led usability research in August 2023. See [research findings](https://docs.google.com/presentation/d/1VLqXexB72C_fPjUyw1MwL2Pjznvsg_q_UYbg16xk-iM/edit#).  

## Outstanding questions and next steps

See ticket: [Create Toxic Exposure Evaluation Research Questions and Approach #73031](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/73031)

1. Accessibility-focused usability testing
   We have introduced some new variations on form components that we have accessibility questions about. For example, we are including a "not sure" checkbox that sets other fields to null when checked. We want to ensure this interaction between fields is apparent, consistent with user expectations, and does not cause confusion, particularly to screen reader users.
2. Measure usage in production:
   What might we learn from how people are using the form / where they are dropping off / error logs?
3. Seek feedback / user data from support teams
4. Seek feedback from VSRs on real-world usage
   How useful is the toxic exposure data received from the digital form? What might not be useful and could be worth eliminating or formatting differently?
5. Expand the toxic exposure section to other disability claims (extending beyond new conditions)
6. Enhance design system to better clarify optional fields with the one question per page approach (comes up with the "I'm not sure" checkbox behavior)

## Background on decisions

### Scope of content to update

[@RakshindaAslam](https://github.com/RakshindaAslam) recommended the <a href="#mvp-first-release">MVP scope outlined in this document</a> due to scope concerns for the first release. ([Slack](https://dsva.slack.com/archives/C053UDWMH7U/p1708440601672289?thread_ts=1707932158.968349&cid=C053UDWMH7U))

### Entry point to toxic exposure questions

#### Current approach 

The current approach is to keep the "How is your condition related to your service?" question mostly unchanged.

<img width="306" alt="Screenshot of 'How is your condition related to your service?' question, showing 4 radio button options" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/151068099/b0ea39bc-5c35-49d5-ae24-d0e5872cd31c">


Later, we ask if any conditions are related to toxic exposure and list all newly entered conditions in checkboxes. The Veteran can check which, if any, of these conditions are related to toxic exposure.

<img alt="Screenshot of 'Are any of your conditions related to toxic exxposure?' question, showing a checkbox for each newly entered condition and a final checkbox of 'I am not claiming any conditions related to toxic exposure' " src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/151068099/066fb0f1-30df-4ba3-b0cc-e3f3574b7fbd">


#### Other approaches considered

We considered adding a radio button indicating toxic exposure to the "How is your condition related to your service?" question.

<img width="316" alt="Screenshot of 'How is your condition related to your service?' question - a variation with an additional radio button of 'My condition was caused by toxic exposure during my military service' " src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/151068099/1a72c2b8-c7c9-4cde-b0a2-b813fd8f48d0">

At another point, we had a yes / no question asking if the Veteran would like to answer questions related to toxic exposure.

![would-you-like-to-answer-questions-related-to-toxic-exposure](https://github.com/department-of-veterans-affairs/va.gov-team/assets/151068099/91e70c7a-1687-4eed-a6f3-0b616d73c28a)


#### Rationale

Keeping these two questions ("How is your condition related to your service?" and "Are any of your conditions related to toxic exposure during your military service?") separate will eventually (when we add the toxic exposure section for all types of disability claims) allow the Veteran to indicate toxic exposure along with any other existing answer for "How is your condition related to your service?". 

If we used the approach with the designated radio button for toxic exposure, we would make toxic exposure mutually exclusive of any of the other service connection options. This would not reflect reality for many cases and would mean that the Veteran would only be able to provide information on follow-up questions related to one of these radio button options.

With the yes / no question asking if the Veteran would like to answer questions related to toxic exposure, we suspected this would be a very confusing question to answer without knowing all the questions that would follow it and what the impact would be of answering versus not answering them. 

### Content of toxic exposure intro question

#### Current approach

<img alt="Screenshot of 'Are any of your conditions related to toxic exxposure?' question, showing a checkbox for each newly entered condition and a final checkbox of 'I am not claiming any conditions related to toxic exposure' " src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/151068099/066fb0f1-30df-4ba3-b0cc-e3f3574b7fbd">

1. Qustion content ends with "Check any that are related".
2. We show a "What is toxic exposure?" additional info component above the checkboxes.

#### Other approaches considered

1. Question content used to end in "Check any that apply."
2. The "What is toxic exposure?" additional info component used to appear below the checkboxes.

#### Rationale

1. CAIA wants to avoid using "apply" in this way across va.gov because we often talk about applying for benefits, so just want to limit using the word "apply" to that use case.
2. [Accessibility feedback from 2nd midpoint review](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/75429) was to place the "What is toxic exposure?" additional info component above the checkboxes "Since the toxic exposure additional info provides definitions that might be needed to know how to answer the question". "whenever possible we should be trying to provide information in the sequence that users need it."
    - previously, CAIA accessibility feedback, somewhat went against this ([Slack](https://dsva.slack.com/archives/C04KW0B46N5/p1706893979585209?thread_ts=1706545750.653139&cid=C04KW0B46N5)), but the 2nd midpoint review feedback took that into consideration when making the above recommendation.  

### None of these locations and I'm not sure checkboxes

#### Current approach 

The current approach is to keep "I’m not sure" mainly as a comfort choice for Veterans, "None of the locations" is also a helper for users, to ease discomfort with leaving it blank. 
They can select I’m not sure as well as locations. If a Veteran selects None of these locations and a location, that will trigger a validation error for them to uncheck either a location or "None of these locations" in order to move forward.

"I'm not sure" has no impact on what gets written to the PDF, per [Check in on Toxic Exposure content feedback 12/22/23](https://dsva.slack.com/docs/T03FECE8V/F068SQT00MC?focus_section_id=temp:C:fcI9c2eb88b6a2d476bb1062672f)

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/151068099/bf22e5d2-9556-436b-b0a9-762e5bea9e6e" alt="Screen showing a checkbox group of service locations plus 'None of these locations' and 'I'm not sure'. 'Lebanon' and 'None of these locations' are both checked. There's a displayed error message of 'You selected a location, and 'None of these locations'. You'll need to uncheck one of these options to continue."/>

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/151068099/ea2344fb-7ea5-4b9e-bb17-493e60a7dad4" alt="Screen showing a checkbox group of conditions plus 'I am not claiming any conditions related to toxic exposure'. 'Tinnitus' and 'I am not claiming any conditions related to toxic exposure' are both checked. There's a displayed error message of 'You selected a condition, and 'I am not claiming any conditions related to toxic exposure. You'll need to uncheck one of these options to continue.'" />

#### Other approaches considered
 
<ul>
   <li>Track the order in which a user selects checkboxes and display a more tailored error message with the assumption that their intention is to select the option most recently selected, like "If you want to select 'None of these locations', you'll need to uncheck other locations in this list." <a href="https://dsva.slack.com/archives/C01K37HRUAH/p1704404867063769?thread_ts=1704323164.991569&cid=C01K37HRUAH">per Slack</a> </li>
   <li>Having "I’m not sure" dynamically uncheck previously checked options</li>
  <li>Replacing the "I’m not sure" checkbox with copy that instead communicates if they’re not sure, that’s okay.</li>
   <li>A change to the design system to make it more clear with only one question per screen, when a question is optional **(we might still pursue this)**</li>
    <li>Content of the checkbox was "Not sure" rather than "I'm not sure"</li>
</ul>

#### Rationale
<ul> 
   <li>We have a precedent for showing validation errors on screen click vs on clicking continue.</li>
   <li>Concerns around people reading the entirety vs calling it out as optional</li>
<li>If they said not sure plus a location, no real consequence for backend downstream impact
</li>
<li>   CAIA rec: We suggest leaving the "Not sure" option in the list, but recommend changing the "Not sure" to "I'm not sure" throughout and making this the very last option of the lists.
</li>
   <li> **Larger scope:** Whatever the not sure pattern ends up being, it should be repeated across the form. Otherwise this is going to confuse users with multiple patterns throughout</li>
    <li> For not going with I’m not sure triggering an automatic uncheck of other boxes: 
The proposed pattern - unchecking "Not sure" results in the "From" and "To" fields going back to null - will be very hard to make accessible to users of assistive technology. The field changes will need to be announced. And the more conditional logic on a page, the harder it is to announce properly, and the more confusing it will be for AT users to keep track of. - per <a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/Deliverables/Benefits%20Disability%20Experience%20526EZ/202312-design-review.md#conditional-logic-not-sure-checkbox">CAIA accessibility review feedback</a></li>
    <li>Content feedback from CAIA was that "I'm not sure" adds clarity and is more conversational, compared to "Not sure"</li>
</ul>

### Page titles

#### Current approach

The current approach is to have each page in the TE flow have its own unique page title as a heading.  

<img width="1109" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/139385562/6cbaff6e-dc11-403d-a466-e9858d8f8256">

#### Other approaches considered

The [condition name] (for example, "Toxic exposure"), is repeated as a header across the entire flow. That heading isn't indicative of what's actually contained in that section of the page. 

<img width="965" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/139385562/b17e4289-9f92-42b8-b749-9be8b6b620af">

#### Rationale

CAIA noted that unique headings representing the page title will help many assistive tech users use headings to navigate, and it will indicate the content of the page to them. Additionally, we changed the title suggestion from "service location in" to "Service location:[country]". [@christinec-fftc](https://github.com/christinec-fftc) noted it’s good to use a sentence structure like this for consideration of page translation in other languages.

### Dates on locations pages

#### Current approach

Have location pages follow the same pattern as hazards.
The user checks which locations apply to them, and we provide the opportunity to give a single time frame per location.

![dates on locations pages - 3 screens](https://github.com/department-of-veterans-affairs/va.gov-team/assets/151068099/fa4f552c-e473-4bbb-8b21-0ba82cc7e8d0)


**Note, we may need to revisit this decision, since it is difficult to implement technically**

#### Rationale

Our understanding is that 99% of time, the service records are discoverable by looking up the service history of the veteran. However, there is about 1% chance that the record does not come up and needs more investigation. This time period helps the VSR identify one of the many records they may have and help reduce the time it may take to verify the service connection. 

While we expect this solution to add many screens, we think they are likely to be the least confusing overall, and we do have test data that backs this up. We want to amp up the optional message to help people who have a complex service history get through these more easily. Metrics would give us a clear picture on whether we need to walk it back, which could help with discussions with all of our stakeholders.

#### Other Approaches considered
- Multiple locations selected, one screen for dates entry. 

<img width="532" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/139385562/afc742b0-9ffd-42da-8417-5e1d6c7c4e2b">

We haven't tested any approximation of this screen design (two tasks, lots of content, ambiguity on providing date).

- Y/N question about whether they served in a list of locations, follow up screen shows no locations, just a date entry. 

<img width="642" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/139385562/cef72767-6e42-409a-bd9c-ed71817131c2">

In testing found this to be unhelpful/confusing to veterans who wanted to see the list they were referring to in front of them in order to think about the dates screen.

- All locations and dates entered on one screen. 
<img width="166" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/139385562/b396436f-e8c5-471e-a047-12aabbda3417">

It's a long list and appears cumbersome, especially on mobile. This goes against the one task per screen guideline. Having the locations hidden in an additional info comonent makes that content hidden for screen readers. 

Feedback from CAIA: 

"We recommend showing this full list to the user, instead of nesting it in an additional info component as the prototype suggests. Every user will need to see this list in full in order to answer the question."

"The original list is of 23 locations for burn pit exposures and Gulf War locations for undiagnosed illness presumptive conditions, for service periods post 1990 and post 2001. We recommend splitting the original list of 23 locations into shorter lists so that the locations are easier for the Veteran to scan. We’ve updated this question to ask only about presumptive locations for burn pit exposures on or after September 11, 2001. The prototype currently displays the list in an additional information component. We recommend displaying these shorter lists in full, without asking the Veteran to expand a list, instead. Every user will need to review the full list in order to answer the question (as in, the list is not targeted to a specific audience. It’s for everyone), so showing it in full will cut down on clicking"

"If we need the Veteran to provide the dates of potential exposures, I propose asking it this way (allow the Veteran to designate a date range for each chosen option). I know we want to limit the number of screens. I think whether VBA needs Veterans to provide dates for specific hazard exposures. If VBA needs locations too, we can add that to this question."

### Removal of "service-connected" from radio button choice and removal of "service connected" additional info component 

#### Current approach

<img width="306" alt="Screenshot of 'How is your condition related to your service?' question, showing 4 radio button options" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/151068099/b0ea39bc-5c35-49d5-ae24-d0e5872cd31c">

1. Removed "service-connected" from the second radio button choice
2. Removed "additional info" component explaining what "service-connected" means

#### Original design

<img width="711" alt="service-connected-additional-info" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/151068099/d789e12d-0bbf-4ccc-9b46-91a702c1e86b">


#### Rationale

We removed this "service-connected" language since it was unnecessary and likely to cause confusion. Some background [in Slack](https://dsva.slack.com/archives/C053UDWMH7U/p1709139850455649?thread_ts=1709138243.496729&cid=C053UDWMH7U)

### Allowing Veterans to edit answers in a section

There are many sections of toxic exposure questions and loops within each section. We want to give Veterans the ability to make edits easily and also better understand where they are in the flow. 

#### Current approach

We present "mini" summary screens at the end of each section (set of locations or hazards), with the ability to edit that section. We also show a heading like "1 of 3: Afghanistan" to assist with orientation within the section.

![section-review-1990](https://github.com/department-of-veterans-affairs/va.gov-team/assets/151068099/370c9dae-8453-4d3c-9baf-e1ba53c2cb78)

Another example from a later section in the flow:

![section-review-agent-orange](https://github.com/department-of-veterans-affairs/va.gov-team/assets/151068099/676d77b9-c699-49a7-8e13-837b04694643)


#### Other approaches considered
- Large summary page at the end - headings for each location

![summary-of-toxic-exposure-list-approach](https://github.com/department-of-veterans-affairs/va.gov-team/assets/151068099/2beb90d9-35b7-4840-9ab1-6f01d8a9893c)

The HTML approach is to use headings for each location, like so:

`<h4>Service Dates on or after August 2, 1990</h4>` <br />
`<h5>Afghanistan</h5>` <br />
`<p>September 1992 - September 1993</p>` <br />
`<h5>Iraq</h5>` <br />
`<p>1994-> 1995</p>` <br />
`<h5>Saudi Arabia</h5>` <br />
`<p>I'm not sure of the dates.</p>` <br />

- Large summary page at the end - using `<ul>` and `<li>` elements

![summary-of-toxic-exposure-table-approach](https://github.com/department-of-veterans-affairs/va.gov-team/assets/151068099/e089b4aa-7a5b-488c-ae9a-069abaac3d9f)

With the HTML, we also considered using `<ul>` and `<li>` elements, potentially specifying "location:" and "dates served:" with text.

- Large summary page at the end - using tables

![Intermediary summary](https://github.com/department-of-veterans-affairs/va.gov-team/assets/151068099/4abcdf39-93dc-4488-a362-7747baa4d575)


#### Rationale

[IA feedback](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75362) and [design feedback](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75239) from our second midpoint review recommended mini review steps and headings to orient Veterans within each section.

Per [CAIA accessibility guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/Deliverables/Benefits%20Disability%20Experience%20526EZ/202312-design-review.md#toxic-exposure-summary-dont-use-the-table-pattern), we want to avoid tables since [The VADS's table component page](https://design.va.gov/components/table#when-to-consider-something-else) recommends that you "use tables sparingly" and that lists are "generally more accessible on mobile screens." Tables are trickly for assistive technology users to navigate, even if they're coded properly.  

For the HTML, [Sara Smith gave the recommendation in #accessibility-help](https://dsva.slack.com/archives/C8E985R32/p1705154213264839?thread_ts=1704903482.413669&cid=C8E985R32). Headings give enough structure to separate locations from dates. The other approach of specifying "location:" and "dates served:" caused the text to wrap to additional lines on mobile, making it difficult to parse the summary and extending an already long page.
