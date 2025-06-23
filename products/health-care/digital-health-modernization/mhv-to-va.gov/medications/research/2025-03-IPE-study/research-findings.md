# Medications on VA.gov IPE Study Research Findings

**Office of the CTO - Digital Experience (OCTO-DE), My HealtheVet, Medications**

April-May 2025

Melissa Stern, Dan Van Vleck

[Research Report PDF](https://github.com/department-of-veterans-affairs/va.gov-team/blob/49430c857b99216c23092bdcea6fbe1d9ad47157/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2025-03-IPE-study/IPE_Readout.pdf)

Jump to:

[Hypotheses and Conclusions](#hypotheses-and-conclusions)

[Key Findings](#key-findings)

[Recommendations](#recommendations)

[Further research needed](#further-research-needed)

[Who we talked to](#who-we-talked-to)

## Most Applicable Law

- Which law does this support the most?
  - Section 508 of the Rehabilitation Act (1973)
- How is this work related to the law?
  - Section 508 requires that Medications on VA.gov be compatible with assistive technologies such as screen readers, voice recognition software, and screen magnifiers.
  - This research was conducted to ensure that Veterans dependent on such technologies can access their medical records.
- What part of the law relates to this work?
  - 502 Interoperability with Assistive Technology
  - 503 Applications

## Research Goals

1. Understand if sceen reader users notice the in-product education (IPE) components.
2. Understand how screen reader users interact with the IPE components.
3. Understand screen reader users’ perception of the IPE components.
4. Identify any pain points screen reader users may experience in using the IPE components to help them understand Medications.  

## Research Questions

- Does the in-product education (IPE) component help those who are dependent on screen readers to accomplish their goals in Medications on VA.gov?
- How do screen reader users interact with the IPE components?
- What are screen reader users’ perceptions of the IPE components?

## Methodology

We will conduct moderated usability testing sessions in which we will ask users to navigate a prototype while we observe their behavior, and ask follow-up prompts as needed.

## Hypotheses and Conclusions

_Hypothesis 1: Most screen reader users will notice the IPE components._

FALSE: Only 2 of 5 participants acknowledged the IPE, though all 5 participants heard the IPE.

_Hypothesis 2: Most screen reader users will ignore the component on first seeing it but will choose “Don’t show again” on subsequent sightings._

FALSE: Only 1 of 5 participants dismissed the IPE the second time they encountered it. All other participants left the IPE there. However, 4 of 5 participants commented that the “Stop showing this hint” button was nice to have.

_Hypothesis 3: Most screen reader users will find the IPE components helpful._

FALSE: Participants did not understand that the IPE was meant to direct them to the filter component. It took participants an average of ~3.5-5 minutes to find each medication. None of the participants used the filter successfully to locate the medications.

## Mapping to the Veteran journey

This research fits into these points of a Veteran's Journey:

- Starting up
- Taking care of myself
- Retiring
- Aging

## Key Findings

1. All participants (5 of 5) assumed the IPE was directing them to the sort feature.
    1. 2 of 5 participants expanded the filter on their own, but did not use it successfully.
2. About half of the participants (2 of 5) acknowledged the IPE while navigating through Medications for the first time.
    1. The other 3 of 5 participants navigated past the IPE, but did not say anything.
3. Most participants (4 of 5) appreciated the ability to dismiss the hint.
    1. All participants (5 of 5) expressed that the hint added audible clutter to their screen reader dictation, or that they wouldn’t have encountered it in the first place due to their navigation methods.
4. About half of the participants (2 of 5) requested a different placement for the IPE once they learned that it was meant for the filter component.
5. About half of the participants (2 of 5) commented on the content of the IPE message.
6. Almost all participants found both discontinued medications when asked to search for them within the medications list. 4 of 5 found the discontinued Albuterol medication, and 3 of 3 found the discontinued Metformin medication.

## Details of Findings

### Finding 1

5 of 5 participants assumed the IPE was pointing to the sort feature. Participants heard the word “filter” within their screen reader dictation yet still navigated to the sort component or referred to the sort while answering follow up questions about the IPE.

2 of 5 participants expanded the filter dropdown independently, though both participants were unable to successfully apply a filter to their medications list. One participant tried to select plain text about the filter and got lost on the page, and the other participant selected a filter option using its radio button but failed to apply the filter before returning to the medications list. This participant was unaware that the filter had not been applied.

After the moderator clarified that the IPE was meant for the filter, the remaining 3 of 5 participants stated that they missed the filter entirely.

_“I totally missed that... when I heard the hint earlier about filtering your medications, I thought it was the combo box that it was filtering and it's actually not.”_ \- Participant 04 (JAWS)

### Finding 2

2 of 5 participants acknowledged the IPE while navigating through Medications for the first time, while the other 3 participants navigated through it, but did not comment.

Most participants explained that the first time they visit a new website, they typically navigate header by header, then line by line using their arrow keys to gain an understanding of how the page is laid out. All participants heard the IPE.

### Finding 3

4 of 5 participants expressed appreciation for the “Stop showing this hint” button, specifically calling it out after hearing the dictation from their screen reader. Only 1 of 5 participants dismissed the IPE during the session, but all 5 of 5 participants explained that the IPE contributes to audible clutter or they wouldn’t have encountered it at all if they were more familiar with the site given their navigation methods.

_"The hint the first time is great, but it's typically not something that I want to see again. But I do like that the user has the option to continue to have that alert if they choose, or to have that alert hidden"_ - Participant 03 (JAWS)

_"A hint. Why do I need a hint? VoiceOver gives me enough hints."_ \- Participant 06 (VoiceOver)

### Finding 4

2 of 5 participants suggested an alternative placement for the IPE after learning that it was intended for the filter component. One participant noted that the hint might have caught their attention more effectively if it were placed directly above or below the Medications heading, while another suggested that the IPE would be clearer if positioned above the filter accordion rather than below it.

_"Then maybe putting \[the hint\] first... because I missed entirely that that was a section I could expand."_ - Participant 04 (JAWS)

### Finding 5

2 of 5 participants suggested the IPE message would be more effective with some changes. The participant who dismissed the IPE suggested it must have been missing something for them to dismiss it, while another participant stated that the IPE would have been clearer if it pointed to both the filter _and_ the sort.

_"\[The IPE content\] gotta be missing something because I was too eager to dismiss it."_ - Participant 06 (VoiceOver)

_"\[A message\] like ‘Hey, there are two ways to sort this information. There... this button or this combo box and if you click this button, it’ll show you all of these things. If you use the combo box, it will refresh upon your selection.’"_ \- Participant 03 (JAWS)

### Finding 6

4 of 5 participants successfully found the discontinued Albuterol medication, and 3 of 3 found the discontinued Metformin medication.

On average participants took approximately 3.5 minutes to find the Albuterol record and 5 minutes to find the Metformin record.

# Additional Insights

### Additional Finding 1

Participants were unable to hear the IPE message when tabbing down the page rather than using down arrows. This issue has now been fixed with the addition of the &lt;aside&gt; element.

### Additional Finding 2

1 of 6 participants expected to download a date range of lab and test results from the Download your Medical Records page, while the remaining 5 participants incorrectly expected to find the functionality in the Lab and test results page. Given that all participants were reliant on a screen reader, the first heading they heard under “Medical records” was “Lab and test results,” and almost all participants stopped navigating through the page after hearing that option.

This finding is consistent with the research done in Medical Records Usability Testing Round 4 (AT), where most participants exhibited the same behavior.

### Additional Finding 3

3 of 6 participants sorted their medications at some point in the study. 1 participant chose to sort by last filled first when searching for Albuterol within their list, then switched the sort order to alphabetically by name when searching for Metformin. Another participant sorted alphabetically by name, and the final participant who used the sort component changed their sort order to last filled first, then switched it back to the default alphabetically by status.

### Additional Finding 4

Participants used various navigation methods while visiting Medications. During their initial visit, 5 of 6 participants utilized the arrow keys to navigate line by line through the content. On the second visit, this method was used by only 4 of 6 participants.

As familiarity with the Medications page increased, additional navigation strategies emerged. Whereas only 1 participant used link-by-link navigation during the first visit, this approach was used by 3 participants during the second visit. Furthermore, none of the participants accessed the JAWS links list on their first visit; however, two out of five JAWS users queried the links list during their second interaction with the page.

Participants who used the links list were able to determine whether a specific medication was present on the current page or located on a different page further down the list. For these users, the links list functioned as a limited search tool, constrained to the content of the current page.

### Additional Finding 5

Participants were unable to hear the different sort options without selecting them. This is a result of the “sort” button removal, and it happens when the participant immediately arrows through the component after shifting focus to the sort button. If the user selected the sort _then_ arrowed through the component, they would be able to hear the sort options without selecting.

## Recommendations

- Adjust the placement of the IPE so that it comes before the filter.
  - _Participants were unaware that the IPE was meant for the filter and not the sort. This was possibly due to its placement after the filter and before the sort component._
- Consider the technical feasibility of adding a search component.
  - _Given that none of the participants were able to find or use the filter, it may be more useful to implement a search component. The participants who leveraged the JAWS links list were treating it like a search field, but its limited capabilities only allowed them to search within their current page. A search component would expand those abilities._

## Next Steps

_Consider alternative ways to guide users to the filter: Alexia Wunder and Justine Chou_

_Conduct additional research with designs: Anne Costello Kennedy and Melissa Stern_

## Further research needed

_Unmoderated testing on updated IPE: Melissa Stern and Anne Costello Kennedy_

## Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/0f2f9a27d5781f1301ba7e774b7ba3bd38835a88/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2025-03-IPE-study/research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/148f4bc0b98023cd6714327338d3a3580cddaadf/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2025-03-IPE-study/conversation-guide.md)

### Tools used for Synthesis

[Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1742571728250/2c50820ba91b353adb946c57293cbc419235282c?sender=uc25af8ff25ccd51fc95e0323)

### Pages and applications used

[VA.gov Staging](https://staging.va.gov/?next=loginModal&oauth=true)

### Who we talked to

We talked to 6 **participants.**

Audience segment:

- VA Employees: 6  

Gender:

- Male: N/A
- Female: N/A

LGBTQ+:

- Transgender: N/A
- Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: N/A
- Gay, lesbian, or bisexual: N/A

Devices used during study:

- Desktop: 5
- Tablet: 1
- Mobile: 0
- Assistive Technology: 6

Age:

- 25-34: N/A
- 35-44: N/A
- 55-64: N/A
- 65-74: N/A
- Unknown: N/A

Education:

- High school degree or equivalent: N/A
- Some college (no degree): N/A
- Certificates and certifications: N/A
- Associate's degree: N/A
- Bachelor's degree: N/A
- Master's degree: N/A
- Doctorate degree: N/A
- Unknown: N/A

Geographic location:

- Urban: N/A
- Rural: N/A
- Unknown: N/A

Race:

- White: N/A
- Black: N/A
- Hispanic: N/A
- Biracial: N/A
- Asian: N/A
- Native: N/A

Disability and Assistive Technology

- Cognitive: N/A
- AT Beginner: 0
- AT Advanced User: 6
- Desktop Screen Reader (SR): 5
- Mobile Screen Reader (SR): 0
- Magnification/Zoom: 0
- Voice AT like Siri/Dragon Naturally Speaking: 0
- Hearing Aids: N/A
- Sighted keyboard: N/A
- Captions: N/A
