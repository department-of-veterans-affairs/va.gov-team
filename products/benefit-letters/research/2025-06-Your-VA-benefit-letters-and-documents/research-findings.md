

# [DRAFT] Your VA benefit letters and documents research study Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Benefit Letters, Benefit Management Team 2**

**Date:** 08/25/2025

**Contacts:** Lead UX Designer/Researcher: Shawn Collins, Lead Content Designer: Rick Allen 

## The Veteran’s journey
This research supports Veterans in the "[Taking care of myself](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)" phase of the Veteran journey by improving access to benefit letters needed to verify eligibility and status for various VA benefits and external services.

### Key moments benefit letters support:
* Veterans applying for property tax exemptions.
* Veterans verifying service-connected disabilities for employment.
* Veterans accessing financial services require benefit verification.
* Veterans obtaining documentation for state and local benefit programs.

### Outcomes we aimed to achieve:
* Remove barriers for Veterans trying to access benefit letters.
* Understand Veteran motivations for obtaining benefit letters.
* Assess the impact of mailing address requirements on letter accessibility.

## Research Goals
- **Goal 1:** Verify that the new design removes barriers for Veterans trying to find, understand, and use the benefit letters.
- **Goal 2:** Understand what motivates Veterans to get their benefit letters.
- **Goal 3:** Understand how the mailing address requirement affects different Veteran populations.

## Research Questions
### Goal 1: Verify that the new design removes barriers for Veterans trying to find, understand, and use the benefit letters
* Will Veterans feel they need to edit their address before downloading a letter?
* Do Veterans expand the accordions when looking for their letters?
* What do veterans expect when they click on a link to a benefits letter?
* What challenges do Veterans encounter when generating a customized Benefit Summary and Service Verification Letter?

### Goal 2: Understand why Veterans want benefit letters
* Which letters do Veterans find valuable?
* Do Veterans understand the different types of letters and why they are needed before they come to the page?
* Do Veterans know why they need to include or exclude certain information from their Benefit Summary and Service Verification Letter?
* What do Veterans do if they don't see the letter they're looking for?

### Goal 3: Understand the impact of the mailing address requirement on downloading and viewing benefit letters
* What problems can result from making letter access dependent on a required mailing address?
* What happens if a Veteran doesn't currently have a mailing address?
* Are we doing a good job communicating that this mailing address is the "latest and greatest" that appears on the Veteran's VA.gov profile?
* Do Veterans expect their customized Benefit Summary and Service Verification Letter to include their current mailing address, too?

## Methodology
Remote, moderated, one-hour, semi-structured interviews and usability testing with the "Your VA benefit letters and documents" screens on the fully functioning production version.
* **Method 1**: Semi-structured interview about letter usage and experiences.
* **Method 2**: Task-based usability testing on desktop and mobile devices.

## Hypotheses and Conclusions

### Veterans are more likely to find the letter type they need when presented with clear, concise categorization and descriptions up front rather than hidden on a secondary screen.
**Definitely true:** Veterans successfully navigated letter options and appreciated clear descriptions. P14: "It's pretty cut and paste standard...even if I didn't know what [a letter] was, I could read about it."

### Veterans who encounter the redesigned single-step page will complete the View Letters step at a rate higher than the current design (current: 60%).
**Likely true:** While most Veterans successfully completed tasks, navigation paths varied significantly, suggesting improvement but not elimination of all friction.

### Making the mailing address change to the VA.gov profile optional and the reasoning clear will increase download rates (current: 55%).
**Not enough info:** In the end, we couldn’t make the mailing address change to the VA.gov profile optional, and we also had to roll back the alerts we were using to clarify the address change and its reasoning. We did learn that 45% of our participants (P1, P5, P11, P12, P14) generally believed that the benefit letters shouldn’t be so closely tied to the veteran’s mailing address.

## Key Findings

1. Veterans successfully found benefit letters, but used different paths
2. Similar letter names caused confusion
3. Customization is highly valued
4. Impact of address changes is unclear
5. Access barriers for Veterans without a mailing address
6. Assistive technology missed critical information
7. Expectations for a complete online letter list
8. Address validation builds confidence

### Details of Findings
#### Finding 1: Veterans successfully found benefit letters, but used different paths.
Participants did not follow one clear path to reach benefit letters. Navigation methods varied—keyword search, dropdown menus, Records section, or site search—indicating the need for more intuitive navigation.
* "I would keyword search for benefit letters.” -P01
* “I normally search for it. I'd type 'document letter' or the specific name of the letter.” -P07
* "When [the dropdown menu] said just 'letters,' that didn't make sense to me...what kind of letters?" -P15 <img width="400" alt="dropdown showing letters" src="https://github.com/user-attachments/assets/65fc3240-be12-4822-af2c-4484abbc96aa" />

#### Finding 2: Similar letter names caused confusion.
Letters like the “Benefit Summary and Service Verification Letter” and the “Benefit Verification Letter” confused 6 out of 11 participants (55%).
* "Unclear what the difference is between 'Benefit Verification letter' and 'Benefit Summary and Verification Letter.’” -P01
* “What's the difference between ‘benefit summary and verification’ and ‘benefit verification’? I guess one is for sharing with others and one is for yourself...I see what the difference is, but don't understand why there needs to be two.” -P02
* “The names are a little confusing. I had to open both to understand the difference.” -P07
* "Benefit verification letter vs [top letter] it's not clear...it's definitely confusing.” -P12

#### Finding 3: Customization is highly valued.
Veterans appreciated being able to customize their Benefit Summary and Service Verification Letter.
* "The opportunity right there [to select what to include in the letter] is phenomenal.” -P03
* “This was a game-changer...we used to have to call and wait a few weeks, if you were lucky.” -P03
* "I like that it gave you the option to choose what you want and don't want in your letter...before it used to include everything.” -P14
* “I like that when you do go here to download benefit letters, it gives you one that I can pick and choose what I need.” -P15
* “I like that you can choose what to include in the letter.” -P11

#### Finding 4: Impact of address changes is unclear.
Nearly half of participants did not realize that updating their address on the benefit letters page updates their address in other VA services, which could lead to unintended consequences.
* "That was not clear to me...[that my address would be updated elsewhere].” -P01
* "In my mind, I thought it would just change my address in my letter, not in my profile...that's not an action I would typically expect.” -P11

#### Finding 5: Access barriers for Veterans without a mailing address.
Several participants expected to download letters even without a valid mailing address on file, raising concerns about homeless or transient Veterans.
* "I would hope the letters are still available. You might be in between homes or homeless—those documents are still needed.” -P07
* "If I were homeless, I would have a problem with [the letters not showing up without an address].” -P11
* “Even if I didn't have a mailing address listed in there, I would think that I could still go in there and access a benefit letter.” -P14

#### Finding 6: Assistive technology missed critical information.
Text-to-speech tool Speechify failed to read important context, such as customization options and alerts, creating accessibility gaps.
* Speechify skipped critical parts of the page - address, blue alert about address change, accordion. In screenshot mode, it did read the accordion headers.
* Speechify has problems with multiple column pages (example reading a scientific paper).
* Speechify save to library feature didn't save accordions.

#### Finding 7: Expectations for a complete online letter list.
Veterans wanted all applicable benefit letters available online, including state-specific documents, without needing to call VA or search elsewhere.
* "[I use letters for] financial aid for mother's medical procedure [and] summer pool pass discount.” - P01
* “It would be great if it said federal and then showed the state for things you can explore.” -P02
* “I needed a narrative summary...Neither I nor my VSO could find the letter on VA.gov. I had to call the VA to get it.” -P07
* "[I use letters] any time I need to certify or re-certify for SDVOSB application.” - P10
* “Is it possible to only show letters that apply to me?” -P12

#### Finding 8: Address validation builds confidence
While some questioned the mailing address requirement, Veterans valued validation checks that reduced errors and improved trust in their information.
* "I want to be careful about the address I want on my letter...my medications might go there, so I need to be careful about that.” -P10
* "I've entered an extra one or a zero by mistake [on other websites] at the end of my address and was glad they caught it...this is nice.” -P14

## Findings Beyond Original Research Plan

### Veterans confuse benefit letters with claim and decision letters
Some participants initially mistook benefit letters for claim or decision letters, revealing a mismatch in how Veterans think about VA letters.
* "Mixing up benefit and decision letters initially.” -P05
* P12 initially navigated to the Claim Status Tool when asked to return to benefit letters.

### Critical Text-to-Speech Compatibility Issues with Speechify
Speechify and similar commercial TTS tools struggled to interpret the page content logically.
* P07 noted Speechify required highlighting section by section to read pages logically.
* Commercial TTS tools missed interactive elements and critical alerts.

### Navigation challenges after viewing PDF letters
Some Veterans struggled to return to the benefit letters page after opening a PDF in a new tab.
* "Got stuck trying to get back to the previous page. Was unsure how to go back to the previous tab.” -P15
* Multiple participants struggled with PDF navigation back to the letters page.

### Skepticism about address updates across systems
Even when presented with alerts about address changes updating across VA services, some Veterans questioned the accuracy of this functionality.
* "I see the alert. Do I believe it? I'm more skeptical...If I believed the world was flat [I would believe the alert message].” -P01

### Desire for state-specific benefits tied to mailing address
Participants expressed interest in seeing benefits relevant to their state or locality based on their mailing address.
* "If you could put in this address, then these are benefits you could consider for your area and benefit situation.” -P02

### Positive reactions to page simplicity and clarity
Veterans appreciated the clean layout and directness of the page, describing it as straightforward and easy to use.
* “It's what I expected.” -P02
* “I really appreciate the brevity and cleanliness of the website overall. It’s so much better than in the past.” -P10
* “I think it is very direct about what the page is providing and how to get there...I also like that it shows a brief description of what each letter is about.”* -P11
* “It's pretty cut and [dry]...even if I didn't know what [a letter] was, I could read about it.” -P14

### DD214 access is critically important
Multiple participants emphasized the importance of DD214 documentation and appreciated its prominent placement.
* "DD214 is typically the letter that is problematic for Veterans.” -P03
* "Most important thing is to find the 214.” -P15


## Recommendations

Based on the research findings, here is a prioritized plan for improving the benefit letters tool:

### 1. Improve access and usability

- **Conduct an accessibility audit:** Ensure all interactive elements and critical alerts work with screen readers and commercial text-to-speech tools (e.g., Speechify).
- **Clarify address update impact:** Clearly explain that changing a mailing address on this page updates tother VA services.
- **Allow access without an address:** Provide a way for Veterans to download benefit letters even without a current mailing address, addressing the needs of homeless or transient users.

### 2. Increase document clarity and relevance

- **Revise letter names and descriptions:** Use clearer naming and descriptive text to distinguish similarly titled documents.
- **Expand online letter availability:** Make all frequently requested letters available online, including DD214, VA Percentage Narrative Letter, and relevant state-specific benefits.
- **Personalize letter listings:** Show only letters that apply to each Veteran, and highlight high-priority documents based on context and need.

### 3. Enhance overall user experience

- **Optimize search and navigation:** Improve keyword search and navigation so Veterans can find benefit letters through more intuitive pathways.
- **Provide state-specific benefit guidance:** Use mailing addresses to display relevant state and local benefit options.

## Appendix

### Research documents
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/benefit-letters/2025-06-design-intent.md)
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/benefit-letters/research/2025-06-Your-VA-benefit-letters-and-documents/research-plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/benefit-letters/research/2025-06-Your-VA-benefit-letters-and-documents/conversation-guide.md)
- [Interview transcripts](link here)
 
  
### Pages and applications used

- [Download VA benefit letters on Staging](https://staging.va.gov/records/download-va-letters/)



### Other supporting documents created

- [Figma](https://www.figma.com/design/61I2UcRPJDXdw0xCl9BlEe/Your-VA-benefit-letters-and-documents?node-id=3696-6535&t=qEEEXmFH86iEvuY4-1)


### Research participants 
_Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic._ 

[Example Research participants](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/ADE/research/2025-05-save-in-progress/research-report.md#research-participants)

#### Recruitment criteria

_If you had specific criteria that you recruited for, use this space to explain what those were along with other information you feel would be important to understanding your participants._

#### Demographics 

We talked to **11 Veterans.**

Gender:
* Male: 9 
* Female: 2 

Devices used during study: 
* Desktop: 8 
* Tablet: 1 
* Smart phone: 2 
* Assistive Technology: 5


Age:
* 35-44: 2
* 45-54: 3
* 55-64: 1
* 65+: 3
* Unknown: 2


Education:
* Some college (no degree): 3
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 2
* Master's degree: 4
* Doctorate degree: 1


Geographic location:
* Urban: 5
* Rural: 6


Race:
* White: 8
* Black: 3

Disability and Assistive Technology (AT):
* AT advanced user: 3
* Desktop screen reader: 2 (P1 opted not to use)
* Magnification/Zoom: 2 (P2 showed us how they use it but didn't use for full session)
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 1 (on iPad)
* Closed captioning: P1 uses about 30% of the time

