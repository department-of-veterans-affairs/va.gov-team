# Evidence Submission Usability Testing Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Benefits Claimant Experience Management Tools, Claim Status Tool**

Date: 06/26/2023

Skyler Schain · skyler@coforma.io

[Research readout](https://github.com/department-of-veterans-affairs/va.gov-team/files/11875309/Evidence.Submission.Research.Findings.pdf) (PDF)


## Research Goals
With this research we were hoping to validate the usability of our design concepts for "Track 1" Evidence Submission work. "Track 1" is a set of near-term, concrete user experience and accessibility updates we want to make to CST.

See the [full Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2023-05-Evidence-Submission/research-plan.md) for more details.


## Research Questions

* Does this new design make it easier for Veterans to understand when they have an evidence submission request in CST? Are they better able to understand exactly what that request is and how to act on it?
* Does including the claim ID in the claim card make it easier for Veterans to distinguish between different claims in CST?
* Do Veterans respond positively to the new layout of the Claim Details page, with separate sections dedicated to Veteran actions and VA actions?
* Do Veterans respond positively to other UX improvements in this version of CST?
  

## Methodology 

Remote usability testing sessions with Veteran participants.

## Hypotheses and Conclusions

*1. The new design will help Veterans distinguish between different claims in CST.*

**MAYBE TRUE**. Participants didn't appear to have any problems distinguishing between claims in CST. There wasn't any conclusive evidence,     however, that the new design was responsible, since we didn't compare the new design directly to the current design as a control. We also didn't see Claim IDs impact this in any significant way, as we were expecting they might. In sum, users had no trouble distinguishing between the two claims in the prototype, but it wasn't clear exactly why. 

*2. Veterans will prefer the new Status page to the old Status page overall.*

**TRUE**. When asked, 9/10 participants said that they prefer the new design to the current design. Participants cited the visual design and specifcity of detail as the primary reasons why they preferred it. 


*3. The new design will give Veterans a strong understanding of what is happening with their claim at any given time.*

**TRUE**. 9/10 participants expressed a clear understanding of the Status page. In response to the question "How much would you say you understand what's going on with this claim on a scale of 1-5?" 7/10 participants responded with a 5/5. Two othe participants did not give a number but said that they clearly understood.

*4. The new design will help Veterans distinguish between requests for them that they need to act on and requests for third parties that they don't need to act on.*

**LIKELY TRUE.** We did not have any participants confuse third party evidence requests for first party requests. That said, we did not provide a scenario in the prototype where there was a third party request that the Veteran _could_ provide if they so choose. There is no evidence to suggest that that woud be confusing with the new design, but to be 100% sure we should test that scenario explicitly.

*5. The new design will make it easy for Veterans to see requests for evidence submission and understand what those requests are.*

**TRUE.** There were no issues with participants noticing the evidence submission request or finding their way to it within the claim details page. Participants especially liked the blurb that describes what exactly the request is and how to fulfill it that appears in the request page (Buddy Statement page in the prototype). 

*6. The new design will make it clear to Veterans whether or not they need to take any action to advance their claim.*

**TRUE.** All participants were able to see that there was a request for them in the second flow, which showed them the CST home page with an evidence request alert for their in-progress claim. Participants stated that they would take action to fulfill the Buddy Statement request.

## Key Findings

1. Most participants said they prefer the new CST design to the current design. In particular, they prefer the visual design and specificity of detail. 

2. Participants were able to navigate the evidence request flow without much difficulty.

3. Participants like seeing the “Recent activity” section because they like clearly seeing that the VA is taking action to gather necessary information for the claim.

4. Participants seemed neutral about Claim IDs. Without a clear reason for needing it, the use value to these (sighted) users is not very clear. 

5. Participants responded well to the CST status page framing of “What you need to do” and “What we’re doing.”

## Secondary Findings

1. More than anything, participants want to know how long it will take for the request to be fulfilled. This is the question behind many of the other questions they have.

2. Participants like the blurb associated with the evidence request that explains what the request is and how to fulfill it.

3. It’s not always clear where files are coming from in the “Document files” section of the Files tab.

4. Participants responded well to the line “This is the longest step in the process.” Transparent, self-aware language like this seems to set better expectations and put Veterans at ease.

5. After seeing the Status page, the Overview page with the claim stepper feels redundant to most participants

## Details of Findings 

### 1. Most participants said they prefer the new CST design to the current design. In particular, they prefer the visual design and specificity of detail. 

Labels: label 1, label 2 

_List all labels that apply to this finding from the [research repository label list](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels?page=1&sort=name-asc)._

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

* Stay the course of updating the Claims Status Tool iteratively based on these findings. 
    * Participants preferred the new design to the current design.  
* In general, be proactive in reassuring Veterans about what they do and don’t have to do while a claim is in progress.
    * The reassuring messaging of "You don't need to do anything right now" really resonated with participants. Multiple Veterans called that out as useful and anxiety-reducing. 
* Consider how Claim IDs could be less prominent visually, considering that for sighted users they don’t seem to be crucial information.
    * Given that it doesn't seem to be an important part of the UI for sighted users, we might consider reducing. its visual prominence. 
* Explore ways to ensure Veterans use the request widget to add evidence, rather than the Files tab.
    * A couple participants would have uploaded evidence via the Files tab, and files uploaded in this way are not expedited in the same way evidence request files are. They do not get looked at by the VSR as quickly as they would if they'd been uploaded via the request widget. 
* Explore ways to make it clearer where Documents Filed items came from, and way to clarify the relationship Documents Filed and Recent Activity.
    * Participants were not able to tell where files in the "Documents filed" section of the Files tab came from, because the UI does not specify. 
* Going forward, consider ways to consolidate information even more between the three tabs (Status, Files, and Overview), given that participants found some of the information to be redundant.
    * A number of participants found the Overview tab to be redundant and not providing unique value. There might be a way to further optimize the page and reduce the clicks necessary to get to all relevant information.


## Next Steps

_Next steps here. Include owners if appropriate._


## Further research needed

- We should figure out how to convey to Veterans that they need to upload their evidence via the submission request widget and _not_ the Files tab widget. Working with the content team will be key to figuring this out. 
- As noted above, we should conduct research on the scenario when there is a third party request that a Veteran has the option of fulfilling if they want, to see whether or not that introduces confusion or provides value. 

## Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2023-05-Evidence-Submission/research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2023-05-Evidence-Submission/conversation-guide.md)


## Tools used for Synthesis

[Mural board ](https://app.mural.co/t/coforma8350/m/coforma8350/1686321516166/8a42c94042663df1108c85662a7e32096552b448?sender=uf0ac39cb9487bbab2ebe3184)


## Pages and applications used

[Prototype](https://www.sketch.com/s/98e35645-34eb-40cf-80c1-6c4952943584/prototype/a/252DFC7E-C58A-478F-A521-5C082886DA75)


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
