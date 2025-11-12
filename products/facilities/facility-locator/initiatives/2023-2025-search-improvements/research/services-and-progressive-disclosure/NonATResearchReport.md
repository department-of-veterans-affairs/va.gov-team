---
title: "Facility Locator Autosuggest and Progressive Disclosure Research Findings"
product: "Facility Locator"
team: "Facilities"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "10/30/2025"
researchers:
  - "Tina Kambil, Agile6"

research_goals:
  - "Evaluate autosuggest combobox component for Facility Locator"
  - "Confirm progressive disclosure is not hindering users"
methodology:
  - Task-based usability interview
  
devices_used:
    desktop: 5
    tablet: 1
    smartphone: 2
    assistive_technology: 0
participants_total: 8
demographics:
  veterans: 7
  service_members: X
  caregivers: 1
  dependents: X
  VA_staff: X
  age:
    "25-34": 2
    "35-44": 1
    "45-54": 1
    "55-64": 2
    "65+": 2
    unknown: X
  education:
    high_school: 3
    some_college: 1
    associates: 1
    bachelors: 1
    masters: 2
    doctorate: X
    unknown: X
  location:
    urban: 4
    rural: 4
    unknown: X
  race:
    white: 3
    black: 3
    hispanic: 0
    biracial: 1
    asian: X
    native: 1
  disability:
    cognitive: 1
    AT_beginner: 1
    AT_advanced: X
    screen_reader_desktop: X
    screen_reader_mobile: X
    magnification_zoom: 1
    speech_input: X
    hearing_aids: 1
    sighted_keyboard: X
    captions: X
key_findings:
  - "1. Most participants successfully located desired services using the service-type field."
  - "2. Task failure was often due to lack of visible system feedback that created false confidence and unnoticed selection errors."
  - "3. Participants did not always notice that they could type and scroll in the service-type dropdown."
  - "4. Some common search terms returned incomplete or unexpected results.  "
  - "5. Most participants understood why the service type field was conditionally revealed and changed depending on facility type. "
  - "6. Veterans expressed strong trust in the facility locator and valued the ability to see & choose specific service types."
recommendations:
  - "Increase visibility into what the system is searching and what has been selected to prevent errors"
  - "Improve content matching"
  - "Provide helpful next steps when no results are found in the service-type dropdown"
  - Clarify how to use the service-type field.
  - Address mobile-specific usability barriers 
kpi_alignment:
  - "Task success"
  - "Efficiency"
  - "Quality"
  - "Conversion"
    
outcomes:
  user: "Help Veterans identify the services they need and find a facility that provides specified services within a given location"
  business: "Reduce phone calls, increase knowedge of services, increase visits to correct facility type"
opportunity_areas:
  - "Understanding what services VA offers"
  - "VA Staff usage of this tool"
further_research_needed:
  - "User mental model"
  - "Taxonomy coverage"
  - "Evaluate map interactions"
underserved_groups_missing:
  - "AT users"

secondary_research:
  - "Web analytics"
synthesis_tools_used:
  - "Mural"
  - "Excel"
---

---

# Facility Locator Autosuggest and Progressive Disclosure Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Product Name, Team Name**

**Date:** 10/30/2025

**Contacts:** Tina Kambil, Agile6

**[Research Readout (PDF)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/354dcada2b76d677abf82ea89348972e7d3b18cf/products/facilities/facility-locator/initiatives/2023-2025-search-improvements/research/services-and-progressive-disclosure/NonATResearchReadout.pdf)**  


**Jump to:**
- [Hypotheses and conclusions](#user-content-hypotheses-and-conclusions)
- [Key findings](#user-content-key-findings)
- [Recommendations](#user-content-recommendations)
- [Product User and Business Outcomes](#user-content-product-user-and-business-outcomes)
- [Key Performance Indicators](#user-content-key-performance-indicators)
- [Next Steps](#user-content-next-steps)
- [Further research needed](#user-content-further-research-needed)
- [Appendix](#user-content-appendix)
- [Research participants](#user-content-research-participants)

## Research Goals

The Sitewide team is updating the appearance and usability of the service type field on the [VA.gov](http://va.gov/) [facility locator tool](https://www.va.gov/find-locations/). The new experience includes two new features:

1. **Progressive disclosure:** Where the Service type field only displays when a linked Facility type is selected, e.g. Urgent care;  
2. **Autosuggest:** Where users who select a VA Health Facility can use the Service type field to begin to type a service and receive a list of suggested queries, e.g. Allergy & Immunology.

The facility locator is an unauthenticated experience that Veterans and their families use as a source of truth to discover where they can access VA health care, services, and benefits. The team wants to perform usability testing to ensure the new service type field experience and content is intuitive and easy to use. 

Through this research we will: 

* Confirm that Veterans and their families (incl. assistive tech users) are able to find VA Health services using the AutoSuggest feature and measure ease of use (SEQ) for desktop and mobile.   
* Confirm that the progressive disclosure pattern does not interfere with finding the right facility  
* Identify barriers Veterans might face when using the facility locator services search to find a particular service at VA Health facilities nearest to them including confusing language, interaction patterns, or instructional content.

Using the Facility Locator to find locations with services that I need is related to several moments in the Veteran Journey, particularly around getting set up in a new location.

* Starting up (Finding something to do, Attending to health needs)  
* Taking care of myself (Recognizing and addressing mental health needs, Managing primary care and chronic health issues, Seeking support for an acute health event, Maintaining my health)  
* Putting down roots (Maintaining my financial, social, and emotional health, Engaging VA to access benefits and services)

[See the Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)
## Research Questions

* Do Veterans and their families understand how to use the autosuggest feature to find VA Health facilities?  
* Do Veterans and their families know intuitively what terms to use when typing in the autosuggest feature?  
* Do Veterans and their families understand the service types that populate when typing in the autosuggest field?  
* Do Veterans and their families understand that the service type field narrows their search results?  
* Do Veterans and their families understand why the service type field is conditionally revealed?

## Methodology

- Method: Remote moderated usability testing to observe 8 research participants using a coded (staging) prototype on desktop and mobile devices in 1 hour sessions.  
  - The prototype uses up-to-date real world data  
  - Self-defined user task with think aloud to approximate real-world usage  
  - 3 standardized tasks (cemetery, medical center, get new glasses) to identify similarities and differences in experience and ease of use.  
  - Additional user-defined tasks  
  - Measure SEQ (Single Ease Question) after each task

## Hypotheses and Conclusions

**Hypothesis Statement 1:** The service type field for VA Health facilities is intuitive, allowing Veterans and their families to find desired services by navigating a drop-down or using the autosuggest feature.  

**Likely True on Desktop, Maybe True on mobile**

*Evidence Supporting Hypothesis:*

- 6 out of 8 participants simulating real-world, ‘first-time’ use were able to successfully find facilities that offered their desired services by navigating the drop down and/or using the autosuggest feature.   
  - 5 out of 8 users naturally discovered the typeahead autosuggest feature. 2 discovered the dropdown only (and required a prompt to recognize that they could type). Regardless of method used, all rated it easy to use and ratings increased once they understood that there were multiple options for use.   
  - Participants all understood that selecting an option from the service type field would enable them to see facilities near a location that offered a very specific service.

*Evidence Contradicting Hypothesis:*

- Three participants (3/8) believed they had successfully selected a service type when they had not, resulting in facility lists that did not fully match their intended criteria.  
  - Some scenarios led to incomplete results in the dropdown (For example: “glasses” not matching the word ‘eyeglasses’, “back pain” leading to ‘no results’, “therapy” does not pull up ‘mental health care (behavioral health)’)  
  - One participant on a mobile device experienced the keyboard interfering with visibility of the dropdown which made it impossible to select a service type. 


**Hypothesis Statement 2:** Progressive disclosure functionality reduces visual complexity without confusing users.

**Likely True**

*Evidence Supporting Hypothesis:*

- On mobile and desktop most users appreciated that progressive disclosure of the service type field was not required and enabled them to be specific in what they would find. 

**Hypothesis Statement 3:** Assistive technology users are able to use the autosuggest feature with no issues.   
**False (Mobile)- 10/10/2025 Pilot test revealed needed fixes**

*Evidence Contradicting Hypothesis:*

- Screenreader functionality is broken on mobile with autosuggest component, does not read options. This will be addressed before testing with AT users. 

## Key Findings

1. Most participants successfully located desired services using the service-type field.   
2. Task failure was often due to lack of visible system feedback that created false confidence and unnoticed selection errors.   
3. Participants did not always notice that they could type and scroll in the service-type dropdown.   
4. Some common search terms returned incomplete or unexpected results.  
5. Most participants understood why the service type field was conditionally revealed and changed depending on facility type.   
6. Veterans expressed strong trust in the facility locator and valued the ability to see & choose specific service types.

## Details of Findings

### Finding 1: Most participants successfully located desired services using the service-type field.

All participants recognized that they could specify a service, though they used the field in different ways—some scrolled through the dropdown, others began typing, and a few relied on the default “All” option. 

- **Performance:** 6 of 8 participants successfully completed their initial task (one required a restart due to a staging issue). One mobile user was blocked by the keyboard overlapping the dropdown, and one mistakenly believed they had made a selection. Across all VA health-related tasks, **38 of 48 (80%)** were successful.  
- **Discovery and Ease of Use:** 5 of 8 participants discovered autosuggest without prompting (2 typed first, 3 after scrolling). The **a**verage SEQ score was 5.8/7 for the first self-defined tasks and increased throughout tasks, reflecting ease of use and speed once users understood available search methods. Lower ratings reflected the small dropdown size, long scrolling, and mobile layout issues.  
- **Implication:** Confirms users can locate health services using autosuggest and dropdown functions. Immediate and long-term improvement opportunities remain around visibility and mobile interaction.

### Finding 2: Task failure was often due to lack of visible system feedback that created false confidence and unnoticed selection errors. 

Several participants made selection errors without realizing it because the interface appeared to function normally. When users typed but did not select from the autosuggest list, the system defaulted to “All” (or, for Location, to a preset radius), returning unexpected results. Some participants expressed confidence despite incomplete results, while others were frustrated or uncertain.

- In 3/8 sessions, participants typed a service rather than selecting from the provided list (E.g. typing “Dental” and clicking search without selecting the option “Dental/oral surgery (mouth, teeth, gum, and oral care). When this occurred, the system defaulted to showing *all* facilities instead of filtering by the intended service, without clearly indicating that a default search would be or had been applied.   
- In 4/8 sessions, participants attempted to search within a specific state or map area. Participants were unaware that the system had automatically applied a preset search radius from the center of the state or map, leading to confusion about which facilities were being displayed.   
- Keyboard navigation selects an option & updates the result header but doesn’t actually execute search.  
- Mobile issue where keyboard covered screen hid all system feedback.   
- **Implication:** Indicates the current design may undermine understanding of how the autosuggest and conditional logic work, affecting user confidence and perceived accuracy.

### Finding 3: Participants did not always notice that they could type and scroll in the service-type dropdown. 

Participants interacted with the field in different ways—typing, scrolling, or using defaults. 5/8 scrolled the full list first (3 of those 5 then discovered typing after scrolling unprompted). 2/8 discovered typing first and did not scroll the full list.1 discovered neither typing nor scrolling without prompting and used the default only. In some cases, participants preferred the default option of ‘All VA health’ over selecting a specific service, to see all facilities near a location. 

- After completing the planned session tasks they were prompted to notice another input pattern, and several then expressed interest in exploring the tool further. Only **2 participants read the instructional hint text** above the input.  
- **Implication:** Suggests discovery of autosuggest is inconsistent; clarifying instructions or affordances could support faster learning and improve accessibility.

### Finding 4: Some common search terms returned incomplete or unexpected results

Participants generally knew what terms to use and often switched to medical terminology (e.g., “Optometry” instead of “glasses”). However, some plain language terms yielded no or incomplete results—for example, “glasses,” “tooth,” “back pain,” yielded no results and “therapy” or “mental” yielded incomplete results. These mismatches caused confusion about available services. Participants also encountered duplicate or lengthy dropdown items in the list that made scanning difficult.

- Often, participants would type a full word rather than a partial word. Full words would often get no results, even if the partial word did show relevant items (e.g. “bac-” pulls up relevant items but “back pain” does not. “Dentist” does not show “Dental”.   
- Spelling errors are common and lead to no results.   
- There was some confusion about whether Vet Centers are medical centers.  
- **Implication:** Confirms users could generally navigate content structure but re-tries for various terms suggests a need to improve synonym mapping for common scenarios, simplify some list item labels, and handle spelling and terminology variations to align better with user expectations.

### Finding 5: Most participants understood why the service type field was conditionally revealed and changed depending on facility type. 

Participants easily understood the progressive disclosure pattern and why a service type field only appeared for certain facility types. Many appreciated that it was not required for VA Health type. Some appreciated selecting facility types such as “Urgent Care” or “Emergency Care” before narrowing to a service, which reinforced confidence in the results.

- QUOTE: “It's only ever three boxes you have to fill out which I like, starting with two. Some of the third box is nice, but it's not telling me \[what the results are\] in the other categories… I don't know if you need all three but without \[them\] it might be more overwhelming.” \-S1  
- **Implication:** Confirms that progressive disclosure supports rather than hinders task success and may enhance clarity during facility selection.

### Finding 6: Veterans expressed strong trust in the facility locator and valued the ability to see & choose specific service types.

All participants viewed the facility locator as a trustworthy and accurate resource. Several preferred it over external search tools because it clearly listed services and felt more reliable. Currently, users typically find facilities through phone calls to the VA and external search tools. They believed the detailed service options would reduce phone calls and improve their confidence in finding the right facility.

- QUOTE: “I’m going to look at it like this. If they have it on there…they better have them glasses. I’m going to trust that if they put it on here \[they have them\] because \[if not\] that would be more frustrating for me as a Veteran.” \-S4   
- “I like this because it answers all the questions. \[As the caregiver\] I’m the one looking for this, taking the Veteran to and from, it’s so much easier…the systems \[now\] are so frustrating, getting on the phone and getting transferred again and again. Veterans get so frustrated they hang up and don’t get their appointments. And they are sick and by the time they get through they are in the emergency room. This is so user friendly, I can just pop on the computer, flip through, give em a call, and go.” \-S4  
- QUOTE: ”I think it would be helpful, because it would keep someone from making a pointless phone call”. \-S6  
- QUOTE: “This is better than Google, because it’s more trustworthy.” \-S7   
- QUOTE: “I like that there are so many different options, it can get very specific. That way I know that I'm not going to show up to the facility and be turned away. Especially since some of these things are hard to just blatantly ask a general office for. For example, *\[hovering mouse over suicide crisis line in dropdown\]* it’s not that easy to go in and say this is what I'm calling for, do you provide this kind of service? So being able to discreetly seek this out and know that that service is going to be able to be provided there alleviates some of the stress of going in person or even just calling. \-S1

**Implication:** Demonstrates that the locator is viewed as a credible, high-value tool and that specificity in service listings enhances user confidence and satisfaction. This also increases harm risk and impact when displaying inaccurate or out-of-date data. 

---

## Additional Insights and Questions

*These insights are out of the scope of the study,  or do not represent patterns across all sessions but are still valuable \- representing unexpected issues, powerful user comments, and usability implications to the overall experience of using facility locator.*

1. **Veterans and their caregivers would use this tool primarily when moving, traveling, or planning transitions.** Getting set up in a new location or even evaluating where to move based on the care available and finding continuing specialty care or urgent and emergency care when traveling.   
   1. How can Veterans find this tool? Some mentioned wishing it existed and not realizing there is a version that is currently available. Others mentioned needing to bookmark it, or wanting to see it in the MyHealthyVet app.   
2. **Participants indicated that when they are looking for care, they think VA first, and when options are too far or not available, then they will consider community care.** They have higher trust in VA-provided content than community care content on the page (often due to prior negative experiences). An exception is around urgent/emergency care which is expected to be complete and accurate.  
   1. Participants were surprised to find more than VA health within the locator tool, and were happy to see other VA options like benefits and Vet Centers (expressed interest in exploring these options, with one participant noting Vet Centers being especially important when looking for mental health services). How might we help Veterans understand what they will find in the tool and how might we help them access services they need across different facility types?  
   2. One participant who explored both community and VA health options expressed a preference for the VA health autosuggest over the current community care typeahead. How can we balance user expectations with data/tech limitations for different facility types? (See Clip S2)  
   3. How might we continue to enable quick access to accurate emergency & urgent care options?  
3. **Surfacing the taxonomy promotes discovery of services.** Participants consistently were surprised by the variety of options in the service type menu. Some were pleased, and noted that the VA had really expanded what it offers in the last 20 years, while others were unsure why certain items appeared but didn’t mind overall as long as primary care popped up. Some noted that they were part of programs they could now see in the list but had previously only found out about through specific interactions with VA staff.   
   1. Are Veterans aware of the scope of services available to them? How does access/exposure to the taxonomy of service types support veterans in accessing care?   
   2. How can we bring services taxonomy consistency to users across different VA digital products beyond facility locator?

4. The combination of extremely high trust and unnoticed errors in the map as well as the search results is a large risk. Additionally, the current experience creates a memory recall burden. Users must remember information from earlier content and prior understanding of facility types when interacting with/interpreting the locator results, rather than being supported with in-context information.  
   1. How might we clarify what information users can trust, and deliver that information at the right time? All users missed the top of page banner, and some had varying understanding of the different facility types (like Vet Centers and Community care).   
   2. How might we utilize progressive disclosure, other design principles and page context to enable recognition and help users be confident in their selections and the results?

   

Bugs identified outside the scope of the study

5. **The map, while initially called out as very noticeable and a positive for participants, did not meet user expectations for searching and caused significant frustration.**  
   1. Error on search  
   2. Center of state or search issue (red dot is unclear to users)  
   3. Unclear radius  
   4. Pagination issue- 2nd page restarts the numbering)  
   5. Stacking of providers at the same location (e.g. 5 providers at the same location only show a number 5, because 1-4 are hidden underneath)  
6. **Error banners are not accurately representing an issue or next steps**\- not sure if this is a staging issue.   
   1. Map/location error banner needs to be re-worded  
7. Mobile and AT functionality have more issues that must be resolved before release (already documented in Github).

## Recommendations

*Actionable recommendations based on what was observed in user sessions before releasing this feature.* 

1. **Recommendation:** **Increase visibility into what the system is searching and what has been selected to prevent errors**  
   *Related findings: 2 : Participants were often unaware when the system defaulted to “All” or when a preset radius was used. These invisible defaults led to unnoticed errors and false confidence.*  
   - 1.1 Add soft error messaging when no item is selected in the service type list but a user has interacted with it e.g. “No service selected — results show all services.”  
   - 1.2 Explore how to provide **visual confirmation** of active selections (e.g., highlight/bold selected option within the input*,* briefly display “Searching all services” message, or other affordances*).*  
   - 1.3 Clearly display radius and location parameters in results description(e.g., “Showing results within 50 miles of X” not “near \[state\])  
     - 2.3.1 Match this visually on the map by showing a radius.  
   - 1.4 BUG- Ensure the Results Description updates only upon search, not upon selection. Ensure keyboard navigation is behaving appropriately.  
2. **Recommendation: Improve content matching**  
   - *Related Findings: 1,4 Several terms users expected to work returned no or incomplete results (“glasses,” “therapy,” “back pain”). Long or duplicate entries increased scrolling effort and caused confusion.*  
   - 2.1 Implement fuzzy or whole-word matching, accounting for pluralization, spacing, and common misspellings.  
   - 2.2 Review taxonomy coverage & results populated for common user needs (e.g., “therapy,” “toothache”) and add relevant synonyms. See appendix for common searches). **Document synonym and taxonomy updates** to support ongoing maintenance.  
   - 2.3 Ensure most common current searches have complete coverage & synonyms (e.g. mental health, dental)  
   - 2.4 For duplicate entries, display only one item in the dropdown but map both terms to the same search result; label Tricare-specific options clearly within resulting locations.  
   - 2.5 Shorten overly long entries to two lines max (e.g., “LGBQ+ Care” and “Outpatient Surgery” instead of the full descriptor) while retaining all search keywords for matching.   
3. **Recommendation:** Provide helpful next steps when no results are found in the service-type dropdown   
   - *Related findings: 2,4 Users who saw “no results” in the dropdown often didn’t know what to do next and assumed the system had failed.*  
   - 3.1 Offer a quick action in the dropdown to search All when no results are found  
   - 3.2 Log no-result queries to identify frequent missing synonyms or taxonomy gaps. 

4. **Recommendation:** **Clarify how to use the service-type field.**   
   *Related findings: 1,3 : Participants understood that they could select a service but did not consistently discover that typing was an option. Most ignored the existing hint text and began interacting immediately.*

   *4.1 Update  **hint text** to indicate that services will populate when the user begins typing*  
   *4.2 Use **subtle visual cues to indicate users can type** (e.g., X used in the VADS component).*  
   *4.3 Show affordances for additional list items in drop down*

5. **Recommendation:** Address mobile-specific usability barriers  
   - *Related findings: 1,2 On mobile, the on-screen keyboard often covered the dropdown, making selection impossible for some users. On mobile some fields use system default dropdown styling and others don’t.*  
   - 5.1 Adjust layout so dropdown results remain visible above the keyboard.  
   - 5.2 Ensure that scroll and autosuggest behaviors are consistent across screen sizes.  
   - 5.3 Re-test on multiple mobile devices to confirm visibility and touch accuracy \+ compare default dropdown layouts (may be part of AT testing).  
6. **Recommendation:** Test with VA Staff who currently help Veterans find specific locations over the phone to verify result coverage/accuracy and AT users after some changes are made. Possibly run as a comparison study.  
   - *Related Finding: 6, known issues*  
   - 6.1 Ensure common scenarios are covered appropriately  
   - 6.2 Quickly pilot test any updates made, establish value metrics (verify potential phone call reduction)  
   - 6.3 Fix announcements for autosuggest (AT use).  
   - 6.4 Validate keyboard navigation and focus order (AT use).
## Product User and Business Outcomes

### Desired User Outcome

This usability research was intended to evaluate whether the newly implemented features (progressive disclosure and VA health service types autosuggest) help Veterans identify the services they need and find a facility that provides specified services within a given location. If successful, this could reduce time spent calling facilities, increase confidence in the information provided, and ultimately improve access to VA services.

### KPIs

The goal is for users to identify a correct facility to visit based on the services they need within a given location with the first try. The following KPIs are intended to capture clarity of information, specificity of user needs, discoverability of facilities and accuracy of results based on user selections.   

1. Task success  
   1. Satisfaction score (can users find the services they need/intended)  
   2. Facility match rate (do facility results match selection in the locator tool)  
   3. No results rate  
   4. Refinement loop (how many times the user changes the selections before identifying a facility to visit for a specific service)  
2. Efficiency  
   1. Time spent to identify a facility to visit for a specific service  
   2. Number of steps to identify a facility to visit for a specific service  
   3. Abandonment rate  
3. Quality  
   1. Confidence of the results  
   2. Results accuracy (incorrect facility identified for a specific service)  
4. Conversion  
   1. Clicks for directions  
   2. Clicks for call  
   3. Return rate

## Next Steps

1. Determine immediate and long-term priorities based on research findings, user impact, technical feasibility, product vision and sustainability, and team capacity.  
   1. What effort is required to implement [recommendations](https://docs.google.com/document/d/1gWOM8pQ7II5vC8aiCDn40qaaw5HpLxfx-ejgX-sK0-I/edit?pli=1&tab=t.0#heading=h.8x2edr8xxqwz) shared by the UX team (**soft error messaging, content matching, and improved system status visibility)**?  
   2. What effort is required to maintain custom design components (outside of VADS) and support the complexity of current autosuggest field customizations?  
   3. Can **no-result query logging** be enabled to inform taxonomy updates?  
   4. What effort is required to refine and maintain services taxonomy?  
   5. How will VA health services taxonomy, and the UI design supporting it, impact taxonomies for other facility types and the overall locator UI as they are implemented?  
2. Address known A11y issues that are currently preventing testing with AT users (see [Further Research Recommendations](https://docs.google.com/document/d/1gWOM8pQ7II5vC8aiCDn40qaaw5HpLxfx-ejgX-sK0-I/edit?pli=1&tab=t.0#heading=h.bjwgrwd990e8) section).   
3. Establish an internal testing plan of common scenarios and on mobile devices for facility locator updates. 

## Further research recommendations

* As a follow-up to this usability testing study:  
  * Cognitive walkthroughs using the scenarios generated in this study after minor design and content updates made.   
  * Testing with AT Users  
  * Testing with super-users at various facilities who have a role involving letting veterans know where they can receive different services, may be able to measure KPI’s and even improve the phone call experience for Veterans who choose to call.   
* Additional research opportunities emerged from observing how users interact with the facility locator tool:  
  * Explore how Veterans learn about VA services, and identify what facility locator improvements are needed to support service types for each facility type in ways that align with Veteran expectations (e.g., facility- and services-related criteria filtering)  
  * Validate service taxonomy and terminology for the facility locator and across other VA digital products   
  * Evaluate map interactivity patterns and alternative map service provider options.

## Appendix

### Research documents
- [Product Outline](link here)
- [Research plan](link here)
- [Conversation guide](link here)
- [Interview transcripts](link here)

### Tools used for Synthesis

*Mural, [Excel task document](https://docs.google.com/spreadsheets/d/1MCDK6FAB6sf2uoSgYUnpyTG8qzruS6DVF8top6KOvcA/edit?gid=0#gid=0)*

### Pages and applications used

*staging.va.gov/find-locations*

### Other supporting documents created

*PDF presentation*

### Secondary research

*Most common current searches Github, mobile map usability study, prior studies, form dropdown study* 

### Research participants

We talked to **8 participants.**

Audience segment:

* Veterans: 7  
* Caregivers: 1

Gender:

* Male: 3  
* Female: 5

LGBTQ+:

* Transgender: 1  
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 1  
* Gay, lesbian, or bisexual: unknown

Devices used during study:

* Desktop: 4  
* Tablet: 1  
* Smart phone: 2  
* Assistive Technology: 0

Age:

* 25-34: 2  
* 35-44: 1  
* 45-54: 1  
* 55-64: 2  
* 65+: 2

Education:

* High school degree or equivalent: x  
* Some college (no degree): x  
* Associate's degree, trade certificate or vocational training: x  
* Bachelor's degree: x  
* Master's degree: x  
* Doctorate degree: x  
* Unknown: x

Geographic location:

* Urban: 4  
* Rural: 4

Race:

* White: 3  
* Black: 3  
* Hispanic: 0  
* Biracial: 1  
* Asian: 0  
* Native: 1

Disability and Assistive Technology (AT):

* Cognitive: 1  
* AT beginner: 1  
* AT advanced user: 0  
* Desktop screen reader: 0  
* Mobile screen reader: 0  
* Magnification/Zoom: 1  
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0  
* Hearing aids: 1  
* Sighted keyboard: 0  
* Captions: 0

#### Underserved groups we haven’t talked to


This research does not include the perspectives of the following marginalized Veteran groups:
* AT users  
* People of Latino, Asian, or Native Hawaiian descent

➡️ _[insert screenshot of completed recruitment checker in the format below]_

![Table of underserved groups of Veterans showing how many of each were in this study as compared to target numbers. Data available in the table below this image](link - add image to github folder and link here with .png)

#### A more accessible version of the table in the above image

### Recruitment of underserved groups in this study
| Group/Type                                                                                                             | Category    | %      | Count | Col5 | Col6 | Col7 | Col8 | Col9 | Col10 | Col11 | Col12 | Col13 | Col14 | Col15 |
|------------------------------------------------------------------------------------------------------------------------|-------------|--------|-------|------|------|------|------|------|-------|-------|-------|-------|-------|-------|
| All participants                                                                                                      | Total       | n/a    | n/a   | 8    | n/a  | n/a  | n/a  | n/a  | n/a   | n/a   | n/a   | n/a   | n/a   | n/a   |
| Assistive Tech (AT) users                                                                                             | Total       | n/a    | n/a   | 0    | n/a  | n/a  | n/a  | n/a  | n/a   | n/a   | n/a   | n/a   | n/a   | n/a   |
| No-show participants                                                                                                  | Total       | n/a    | n/a   | 6    | n/a  | n/a  | n/a  | n/a  | n/a   | n/a   | n/a   | n/a   | n/a   | n/a   |
| Age 55-64+                                                                                                            | General     | 50%    | 4     | 4    | yes  | 0    | 0    | 1    | 1     | 0     | 0     | 1     | 1     |       |
| Cognitive Disability                                                                                                  | General     | 50%    | 4     | 1    | no   | 1    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| Mobile user                                                                                                           | General     | 50%    | 4     | 3    | no   | 0    | 0    | 1    | 0     | 0     | 0     | 1     | 1     |       |
| Rural                                                                                                                 | General     | 25%    | 2     | 4    | yes  | 1    | 0    | 0    | 1     | 1     | 0     | 1     | 0     |       |
| No degree                                                                                                             | General     | 25%    | 2     | 4    | yes  | 0    | 1    | 1    | 1     | 0     | 0     | 0     | 1     |       |
| Other than honorable                                                                                                  | General     | n/a    | n/a   | 0    | no   | 0    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| Immigrant origin                                                                                                      | General     | n/a    | n/a   | 0    | no   | 0    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| Women                                                                                                                 | General     | 10%    | 1     | 5    | yes  | 1    | 0    | 0    | 1     | 1     | 1     | 1     | 0     |       |
| Expat (living abroad)                                                                                                 | General     | n/a    | n/a   | 0    | no   | 0    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| Black or African American                                                                                             | Race        | 15%    | 2     | 3    | yes  | 0    | 0    | 1    | 1     | 0     | 0     | 1     | 0     |       |
| Hispanic, Latino, or Spanish origin                                                                                   | Race        | 12%    | 1     | 0    | no   | 0    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| Biracial                                                                                                              | Race        | 3.9%   | 1     | 1    | yes  | 0    | 0    | 0    | 1     | 0     | 0     | 0     | 0     |       |
| Asian                                                                                                                 | Race        | 2.7%   | 1     | 0    | no   | 0    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| Native Hawaiian or other Pacific Islander                                                                             | Race        | .3%    | 1     | 0    | no   | 0    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| First Nations (Canada)                                                                                                | Race        | n/a    | 1     | 0    | no   | 0    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| Native, American Indian or Alaska Native                                                                              | Race        | 1.6%   | 1     | 1    | yes  | 1    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| Gay, lesbian, or bisexual                                                                                             | LGBTQ+      | n/a    | 1     | 1    | yes  | 0    | 1    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| Transgender                                                                                                           | LGBTQ+      | n/a    | 1     | 2    | yes  | 0    | 0    | 0    | 0     | 1     | 1     | 0     | 0     |       |
| Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman            | LGBTQ+      | n/a    | 1     | 1    | yes  | 1    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| Beginner AT User                                                                                                      | AT          | 50%    | 0     | 0    | no   | 0    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| Experienced AT User                                                                                                   | AT          | 50%    | 0     | 0    | no   | 0    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| Desktop Screen Reader (SR)                                                                                            | AT          | 20%    | 0     | 0    | no   | 0    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| Mobile Screen Reader (SR)                                                                                             | AT          | 20%    | 0     | 0    | no   | 0    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| Magnification/Zoom                                                                                                    | AT          | 20%    | 0     | 0    | no   | 0    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| Speech Input Tech (Siri, Dragon)                                                                                      | AT          | 20%    | 0     | 0    | no   | 0    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| Hearing Aids                                                                                                          | AT          | 20%    | 0     | 0    | no   | 0    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| Sighted Keyboard                                                                                                      | AT          | 10%    | 0     | 0    | no   | 0    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| Captions                                                                                                              | AT          | n/a    | 1     | 0    | no   | 0    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| Switch Device                                                                                                         | AT          | n/a    | 1     | 0    | no   | 0    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
| Braille Reader                                                                                                        | AT          | n/a    | 1     | 0    | no   | 0    | 0    | 0    | 0     | 0     | 0     | 0     | 0     |       |
