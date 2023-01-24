# My VA 2023 Audit Usability Testing - Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Authenticated Experience, My VA**

Last updated: 1/23/2023

[Angela Agosto - email](angela.agosto@adhocteam.us)

[Research readout](link here)

<br>

**Jump to:**

[Hypotheses and conclusions](#hypotheses-and-conclusions)

[Key findings](#key-findings)

[Recommendations](#recommendations)

[Who we talked to](#who-we-talked-to)

[Further research needed](#further-research-needed)

<br>

## Research Goals
Since Veterans can apply for and manage their benefits any time after getting out of the military, this work impacts the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) from Starting Up and beyond.

Our goals for this research were:

* Determine if the updated information architecture of My VA still aligns with Veterans' mental model.
* Determine if showing all sections all the time on My VA has made the page more, less, or equally usable compared to its current state.


## Research Questions
* Are Veterans able to find their top tasks on My VA and act on them if applicable? 
* Is there any important information about top tasks or any categories missing on My VA?
* Is the new education section in a good place on the page for Veterans who are interested in those benefits? What about Veterans who are not interested?
* Is it clear what "saved applications" are and are they in a good place at the bottom of My VA?
* For users who do not have claims, health care, debt, payments, education, or saved applications, how do they feel about seeing those sections presented on My VA?
* Do users know how to find out more about benefits they are not currently enrolled in?
* Do empty sections get in the way of Veterans trying to find out information about their current benefits or bring attention to benefits that Veterans may be interested in?

## Methodology 

We conducted remote moderated usability testing on Zoom using real Veteran data behind a feature flag in production. We used this method because:

* We wanted to recruit an audience who was using a range of benefits and see their real data in testing so we could get accurate feedback that is specific to their use cases and does not require any hypothetical scenarios.
* We were able to test with assistive technology users in code. This was important to do early on in usability testing rather than later in UAT because we did not want to make any significant changes coming out of UAT and wanted to know if there are any accessibility issues with this pattern sooner than later.
* We didn't anticipate a lot of changes to the implementation or anything that would be very time-consuming to alter based on usability testing.
* We had the research method conversation as a team early enough that the timeline allowed for coding and testing in production.


## Hypotheses and Conclusions

1. We expect that in the new design Veterans will still be able to find what they're looking for upon login and act on it as needed.
   * **Definitely true.** We started the research session by asking what benefits each Veteran had throigh VA and what online tools they use to manage them. All Veterans were able to find information on My VA that was relevant to the benefits they had and perform all actions thye would normally do with other online tools like My HealtheVet, eBenefits, and the mobile app.
  
2. We expect that showing all sections all the time to LOA3 users will not be distracting and will help highlight benefits that Veterans may be interested in if they are not currently enrolled.
   * **Definitely true.** When questioned about empty sections, no one said that these sections were distracting to them or negatively impacted the experience at all. Several participants said that it was nice to see those empty sections on My VA to be reminded that those benefits might be of interest to them.
   
3. We expect that most important top tasks will be present and have all important details on My VA, possibly with the exception of military records.
    * **Definitely true.** We heard 1 Veteran say they would like to see a link to important documents and 1 Veteran say they would like to see contact information for VSOs. Other than these 2 participants, we did not hear Veterans say that any important tasks or information was missing from My VA. 
  
4. We hypothesize that based on analytics we have presented the sections on My VA in such a way that the most popular actions and links will be closest to the top.
    * **Maybe true.** We heard 4 out of 13 Veterans say that they would like the ability to reorganize My VA so that their top categories were listed first and sections that they would be least likely to use would be at the bottom, or they would like to be able to collapse empty sections. It's worth noting that this feedback was only elicited by asking "Is there anything you would change about this page if you could?" No specific questions around the order of the sections were asked.
    

## Key Findings

1. **All participants had positive reactions to seeing My VA immediately upon login.** Many seemed that they had not logged into VA.gov since the [recent redirect](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/my-va-redirect) and they preferred seeing My VA to the homepage because it was more personalized and showed them "their stuff." 

2. **My VA encompasses all top tasks for Veterans.** We started each session by asking Veterans about their VA benefits and how they like to manage them online and/or manually. Once logged in, 100% of Veterans were able to find information and/or actions to manage their most important benefits. 

3. **Veterans generally don't mind seeing empty sections on My VA and some find them helpful to have on the page.** We asked Veterans how they felt about seeing empty sections on My VA, and the particular sections that were empty varied depending on the user's benefits. 

4. **The "Saved Applications" section is confusing to Veterans.**

5. **The "Education and Training" section is positioned well on the page and important to have present on My VA, but some of the terminology in the links is unfamiliar to Veterans, and for Veterans who have education benefits, they would like to see dynamic content here about their remaining benefits.**

6. **Accessibility: My VA is highly accessible to disabled Veterans using assistive technology, but the smallest font is still a little too small for some Veterans.**


## Details of Findings 

_For each finding, list details with supporting quotes and images when possible. Please **add relevant keywords/labels to your findings** selected from the [research repository label list](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels?page=1&sort=name-asc). Adding keywords/labels to your findings will help others find research relevant to their work._

**Finding 1**

Brief description

> _Supporting data: Quote here_

> _Supporting data: Quote here_


**Finding 2**

Labels: label 1, label 2 

_List all labels that apply to this finding from the [research repository label list](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels?page=1&sort=name-asc)._

Brief description

> _Supporting data: Quote here_

> _Supporting data: Quote here_


**Finding 3**

Labels: label 1, label 2 

_List all labels that apply to this finding from the [research repository label list](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels?page=1&sort=name-asc)._

Brief description

> _Supporting data: Quote here_

> _Supporting data: Quote here_


## Additional Insights

_Any additional insights that aren't "key findings." These can be powerful comments from users that don’t represent a pattern in this study, but may be part of one outside this study._


## Recommendations

_Put together initial recommendations here based on your findings along with supporting evidence. Review with your team, then edit as needed._

* Recommendation 1
    * _Supporting evidence_
* Recommendation 2
    * _Supporting evidence_


## Next Steps

_Next steps here. Include owners if appropriate._


## Further research needed

_If there are demographics that were not included in this study or you discovered that more research should be done, make note of that here._


## Appendix

[Research plan](link here)

[Conversation guide](link here)

[Interview transcripts](link here)


## Tools used for Synthesis

e.g. mural boards, etc.  


## Pages and applications used

Link to prototypes or pages that were tested


## Other supporting documents created

e.g. user flows, personas, etc.


## Secondary research

Include any secondary research you may have. 

E.g. web analytics, ForeSee data, SME interviews, competitive analysis, or other relevant research studies.


## Who we talked to 
_Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic._ 
_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/post-mvp-releases/research/research-findings.md#who-we-talked-to)_

**Recruitment criteria**

_If you had specific criteria that you recruited for, use this space to explain what those were along with other information you feel would be important to understanding your participants._

We talked to **x participants.**

Audience segment:
* Veterans: x 
* Caregivers: x 
* Family members of a Veteran: x  


Gender:
* Male: x 
* Female: x 


LGBTQ+:
* Transgender: x 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: x
* Gay, lesbian, or bisexual: x


Devices used during study: 
* Desktop: x 
* Tablet: x 
* Smart phone: x 
* Assistive Technology: x


Age:
* 25-34: x
* 35-44: x
* 45-54: x
* 55-64: x
* 65+: x
* Unknown: x


Education:
* High school degree or equivalent: x
* Some college (no degree): x
* Associate's degree, trade certificate or vocational training: x
* Bachelor's degree: x
* Master's degree: x
* Doctorate degree: x
* Unknown: x


Geographic location:
* Urban: x
* Rural: x
* Unknown: x


Race:
* White: x
* Black: x
* Hispanic: x
* Biracial: x
* Asian: x
* Native: x


Disability and Assistive Technology (AT):
* Cognitive: x
* AT beginner: x
* AT advanced user: x
* Desktop screen reader: x
* Mobile screen reader: x
* Magnification/Zoom: x
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: x
* Hearing aids: x
* Sighted keyboard: x
* Captions: x


## Underserved groups we haven’t talked to 

_[Complete the VA recruitment checker for marginalized Veteran groups](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1221033726)_

This research does not include the perspectives of the following marginalized Veteran groups:
_List all groups in red from the spreadsheet_
* Group 1
* Group 2
* Group 3

_[insert screenshot of completed recruitment checker]_
![VA-recruitment-checker](link - add image to github folder and link here with .png)
