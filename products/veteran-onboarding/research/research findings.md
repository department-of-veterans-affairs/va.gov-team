# Welcome to My VA and Profile Completion, Usability Study, Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Welcome to My VA, IIRe**

Date: 08/31/2024

Liza McRuer, elizabeth.mcruer@va.gov, liza.mcruer@adhocteam.us

[Stakeholder Presentation Deck - Research Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-onboarding/research/images/Welcome%20to%20My%20VA%20Research%20Findings%20(V2%20-%20Presentation%20Version).pdf.zip)   

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Further research needed](#further-research-needed)
- [Who we talked to](#who-we-talked-to)


## Research Goals
As Veterans create accounts and login to VA.gov, we want to provide a more welcoming experience that establishes VA as a source of support and assistance as Veterans navigate the site and authenticated experience for the first time, whether they are in the process of separating from active duty or returning years later to better understand their benefits. Previous research focused on transitioning service members indicates that “people new to VA are generally having a positive experience,” but that “service members would find it helpful to receive structured and specific resources about VA and benefit eligibility." While there are separate initiatives focused on helping Veterans understand their personalized benefits, we want to welcome Veterans and establish contact information as soon as possible so that Veterans can be contacted about their benefits. 
In the Veteran Journey, the work most closely aligns with "Getting Out" and "Starting Up", but as we discovered in our research, some older Veterans are now exploring their accounts for the first time to see what benefits they may be entitled to receive, so it also aligns with "Retiring."
_[See the Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)_

Our goals for this research were focused on:   
1. Identifying areas for improvement for Veterans creating accounts for the first time. We want to provide a more welcoming experience that establishes VA as a source of support for Veterans as they navigate the site and My VA for the first time.
2. Testing a new task list component to see how Veterans respond to requests for action or information.
3. Understanding what Veterans think about providing contact information to VA

## Research Questions
1. What do Veterans expect the first time they create an account on VA.gov?   
2. What kind of onboarding experience will help Veterans feel welcome and supported as they explore their benefits?   
3. What changes, if any, can we make to improve the onboarding experience to help Veterans determine their first actions on VA.gov?   
4. What are the challenges Veterans face when first engaging with VA.gov and setting up their account?   
5. How do Veterans engage with their profile and information upon first logging in to their account?   

## Methodology 

We conducted hour-long remote moderated research sessions via Zoom August 5 - August 9, 2024. We used a [Figma prototype](https://www.figma.com/proto/CertVj7cu66kFv9TnseR30/Welcome-to-My-VA?page-id=300%3A11104&node-id=300-11287&viewport=282%2C610%2C0.05&t=AdaosOCQ6SDCjCyl-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=300%3A11287&show-proto-sidebar=1) to assess engagement with onboarding tasks and willingness to provide personal information. The study was broken down into 5 sections:   
1. Background and separation - Verbal discussion around service branch and separation to gauge participants' knowledge of VA while they were leaving active duty.
2. Welcome message on My VA - Prototype engagement to determine a Veteran's first actions upon landing on My VA post-account creation. Note: We started with the existing alert component, although we know they don't stack. It was what was available in the DSC at the time. We wanted test the reception to the message itself, then work on the UI.
3. Task list on My VA - Prototype engagement with a new component (after a simulated verification flow) to determine how participants responded to requests for information and onboarding "tasks."
4. Adding contact information - Prototype flow to assess Veteran williness to provide contact information and complete profile, after being prompted.
5. Confirmation and next task - Prototype confirmation page and a return to the task list to determine participant willingness to continue with subsequent tasks.

Images from the prototype can also be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/veteran-onboarding/research/images).


## Hypotheses and Conclusions

1. Veterans want specific and personalized eligibility recommendations. Veterans will immediately want to engage with their benefits upon account creation.
- TRUE. 10 out of 10 participants stated that the first thing they wanted to do upon account creation was find out what benefits they might be qualified for. Participants acknowledged the welcome message, but it wasn't as impactful to them as finding out what they might be entitled to receive from VA.
2. The onboarding experience can be improved by a more human-centered approach, such as affirmative messaging and focused tasks.
  - TRUE. Veterans expected a welcome message the first time they login, although they didn't engage with the additional resources. However, the task list and profile completion prompts did provide them with a focused list of items to complete. 8 out of 10 Veterans were willing to provide their contact information, as long as they understood the value to them (i.e. If VA has my accurate information, they will be able to contact me about my benefits). 2 out of 10 Veterans did state that they assumed VA already had or should have this information on file already.   

## Key Findings    

1. **Engagement during out-processing varied.**   
2. **Upon login, the focus should remain on a single task - verification.**   
3. **The task list was well-received by participants, but it doesn't stand out enough from the page enough in its current form.** 
4. **Participants were willing to provide their information, if they understood the value to them.**
5. **Participants immediately noticed the task change to “completed” and stated they would go complete the second task, indicating a strong association with list-based prompts done in order.**   


## Details of Findings 

**Finding 1: Engagement during outprocessing is varied**

Labels: Veteran Onboarding, VETJNY: Getting out Military

As the TSM team noted in their [research review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onboarding/discovery-research/research-review.md), the separation experience can be very different, based upon branch, reason for separation, time of separation, command support, and installation, to name a few factors. Our research reiterated that we can't take for granted that Veterans will approach My VA and their benefits with the same baseline knowledge of VA, so there are ways we can improve the initial introduction. Participants were usually aware of common benefits, like education and healthcare, but lacked knowledge of additional benefits, and also admitted to not fully understanding the information they received when they separated and were unsure what questions to ask.   

> “At the time it felt rushed and it felt checkboxy [...] I didn't really feel, at the time, especially at that age, that I was really comprehending the information that I was getting, to be honest [...] But it seems like a lot of terms were thrown out that I would understand in today's world that I wouldn't have understood at that point in time, not really having the work experience outside the military." (P4)   

> "We did the whole transition readiness course, weeklong...with someone associated with the VA that talked about different benefits and avenues to get help and exploring those benefits. When I transitioned from the reserves, there was nothing...I was with the unit one day and the next zero communication after that." (P3)   
>
> "I was not told anything. Okay, and everything was blamed on me. And then my husband. And so for me it was a very hard, very hard time to transition and to find out information, and, like I said, my information came from when my daughter came back from Afghanistan. And she's telling me, Mom, these are your benefits, and I'm sitting there like nobody ever told me I had any benefits. The only benefits I ever had were from my husband. It was like you know, they didn't tell me anything." (P7)   

**Finding 2: Upon login, the focus should remain on a single task - verification**

Labels: PRDT: My VA

Going into this study we hypothesized that benefits would be of utmost importance to participants. While there are other teams focusing on benefits recommendations, we wanted to note that our study does overwhelmingly support the need for personalization and tools that better connect Veterans to the benefits they are qualified for and to which they are entitled. The welcome message was acknowledged, but every participant (10 out of 10) immediately wanted to explore benefits and generally ignored the verification prompt as well as our message. 

> "How do I feel welcome if I still gotta do..if I'm still not through the door? Oh, you got through one door. Now let me present to you another door that you have to walk through." (P4)   

> "Like I said, I'm reiterating myself again. But benefits should be something that should be there at the beginning. "These are your benefits." Okay? Because this benefits application draft - like I said, that is totally to me, seems useless. Okay, it just needs to be your benefits." (P7)

> "You one level - if you're relatively new to this, it would send you an introductory welcome email outlining all the benefits from VA...it should be able to say, 'here's the things you qualify for'...the next step would be to remind the individual, 'hey, you have the opportunity to participate in VA healthcare.' Because I got out and it's like, why would I go to healthcare? That's for old people." (P2)   


**Finding 3: The task list was well-received by participants, but it doesn't stand out enough from the page enough in its current form**

Labels:  PRDT: My VA

Once they were verified, however, the task list on My VA was well-received. 3 out of 10 participants had to be prompted to start it and we received feedback that it doesn’t stand out enough from the page. Additionally, Participants didn’t resonate with the “Get Started” verbiage, as most felt that “Complete Profile” or “Finish Profile” would be more accurate. They also expressed a strong desire to understand the value of each task and the reasons for adding their information. However, paradoxically, several of them skimmed the pages that offered additional context.   

> "It should say 'Let's go ahead and set up your profile so that we can better customize your assistance so that we get you into all the benefits that you're due or are applicable for you.’ So a little more encouragement that we're collecting so we can help you...but it's also a roadmap to make sure." (P2)  

> "I might make the little checklist stand out a little bit more like when you first click the page, you know, color coded something. Make it bigger. Just make it stand out. It looks monotonous. It looks just like everything else on the page." (P6)

> "You know, maybe start to browse a little bit, but my first instinct would be to update my information." (P8)   

**Finding 4: Participants were willing to provide their information, if they understood the value to them**

Labels: PRDT: VA.gov Profile, DSC: Ask users for addresses

One of our research goals was to understand how participants responded to being asked for contact information. 8 out of 10 were willing to add it, but 2 out of 10 indicated that they expected VA to already have this information.

> "You know, having your information being updated and the most updated. This is why it's very important [...] The most accurate contact information you could possibly give them, the better. You'll receive help and guidance to that next phase of civilian life." (P8)

> "And then the email address was part of the login creation. So why is it missing?" (P4)

> "No, but I would like to say that on the review contact information. I like that because I click on it after adding my information. Just to make sure I spelt my email correctly." (P9)

> "If I didn't put that information I probably wouldn't be able to get contacted. I wouldn't get all the information I needed at the time. They wouldn't be able to contact me if they needed to." (P11)   

**Finding 5: Participants immediately noticed the task change to “completed” and stated they would go complete the second task, indicating a strong association with list-based prompts done in order**

Labels: PRDT: My VA

Once we returned to the task list, participants noted the change to "completed" for their first task and 10 out of 10 indicated they would go on to notifications. However, we were asking them questions about their expectations on how VA would contact them, so there was a focus in the research on communication preferences and two tasks are very closely related.  

> “I do like to add your contact information, review notification settings. Because our minds work is - same thing, where we get taskings, like we'll get this big old list out, and we have to make sure that these all get completed. So if you're doing something like, you know contact information, and now the review notification settings, I would say...yeah, doing doing how this is showing, you know, it's completed, not started...Because again, our days are like, 'Here's your taskings. You need to complete these.' So completed, not completed. That's just how our minds work." (P11)

> "Yes. So when I added the contact information it went from not started to complete...Exactly what we were discussing right before - the review notification settings. Be notified by email, text, phone. So I would go straight there and update the settings there." (P8)

> Well, I'm curious. I think I'd review my notification settings." (P9)

> "I mean, probably just because my mental is taken to me to something that's not started. I probably would do the renew notification or review notifications." (P10)

## Additional Insights

Two partipants expressed that they believed that updating their profile would translate to all related VA accounts, such as health information.
Zero out of ten participants wanted to verify their identity as a first action on the page. All of them immediately started looking for benefits. We hypothesize that people do not verify until they have seen the alert several times and it is actively blocking them from accomplishing a task.


## Recommendations   

1. **Instead of pre-verification tasks or resources, provide only simple messaging.** Rather than providing links along with a welcome message, we recommend static messaging that provides orientation to My VA or a brief, one-time modal that welcomes a user and appears only the first time a person creates an account. We might also consider additional personalized resources within My VA or Profile that allow Veterans to easily find a rep and an assigned location once they are verified. In an ideal future state, we'll be able to onboard with more personalization and benefit recommendations once proposed tools are built and launched. We plan on connecting with more teams to understand how the onboarding/welcome process can support personalized benefit recommendations through collecting initial information as quickly and efficiently as possible.   
 
2. **The task list is a promising component and needs additional work prior to launch.** In this instance, we plan on updating the content to be more in-line with user expectations. We will also provide a minor amount of additional and specific content to help users understand the context of the tasks we're asking them to complete. The task list needs a new visual treatment to be more noticeable and requires further work to respond appropriately to user expectations (i.e. 7 out of 10 users expected the task list to disappear once all tasks were completed, so we need to ensure we have a success message or paramters on when it vanishes, such as the next time they log in.)

3. **Participants responded well to the request for information, but we need to be clear about the outcome of every user action.** Participants responded well to UI indicators such as the number of steps and the navigation within the flow, but they were uncertain if information is required and if or when it would be saved. Because we've also discovered issues with how information is saved to Profile, we've updated the flow to a pattern that the Appeals Team is using on VA Form 10182 [documentation of pattern](https://design.va.gov/patterns/help-users-to/know-how-their-information-is-updated#communicate-information-that-can-be-edited). Utilizing this pattern should shorten the process for users, as well as allow them to see and review the contact information that we do have on file for them. With the existing pattern, we can pre-populate the information we do have on file for them and display it on a page together, then provide the user with the ability to review and edit exisiting information, or add missing information. In order to emphasize the importance of the contact information, we can add brief content to each page that explains what the information is used for (i.e. "Add your mailing address. We'll use this address to send letters, prescriptions, etc"). In the updated pattern, we are clearly requiring the information and in order to remove any prompts or alerts, all three fields must be filled in. If all fields are already pre-populated with accurate information, a user may 'confirm' instead of editing in order to clear the prompt.    
   
4. **Remove confirmation page and provide the information on that page earlier in the process.** The updated flow and pattern should allow us to negate the need for a final page, which participants did not find particularly useful as it didn't allow them to see what they had entered. While they appreciated the content on the page, most participants indicated they'd have preferred it up front to really help emphasize why VA is requesting the contact information. Rather than a confirmation page, the new pattern we're exploring has "hub" page ([see Array Data for details](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-create-the-contact-info-ar)) that users can return to in order to see what they have entered.



## Next Steps

* Update design and content based upon the participant feedback on the visuals and messaging.
* Engineer discovery indicated some complications with how information is pushed back into Profile, so we are looking at other existing patterns, related work, and technical constraints.
* We're working with CAIA to plan and schedule a secondary study with AT users.   


## Further research needed

We are planning on a study focused on AT users so that we ensure this pattern is accessible to all users.


## Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-onboarding/research%20plan%202024.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-onboarding/conversation%20guide.md)

[Interview notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/veteran-onboarding/research/interview%20notes)

## Tools used for Synthesis

* [Synthesis Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1723214987362/e559ad0616d59937edea484951c3560a9691e573)
* [Observer notes](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1715631650791/0b616aae4ad5fefe36448b69e0bc6ca2c60000a1)


## Pages and applications used

* [Figma Files](https://www.figma.com/design/CertVj7cu66kFv9TnseR30/Welcome-to-My-VA?node-id=300-11104&t=v0N05gRYU3c02EEV-1)


## Other supporting documents created

* [Initial analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1712608107388/80dc1be20f9ee63ac894c536ccd20d5b1cc172e1?sender=u82254af9423cfa236f383306)
* [IIR/Auth Exp Collab](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1716924198639/24d0953379e26a27de438a67894b2ce60d96afc4?sender=u82254af9423cfa236f383306)
* [User flows V1](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1715019181472/206d1983971576ee7696c1984666185a2fbff545?sender=u82254af9423cfa236f383306)
* [Design intent](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1715619973050/69f6e0e0edb7799059fa57483ebb7103a7e8b0d0?sender=u82254af9423cfa236f383306)


## Secondary research

Previous related research reviewed prior to our study.

* [Transitioning Service Member Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onboarding/discovery-research/2024-03-onboarding-generative-research/findings-summary.md)
* [Onboarding comparative analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onboarding/discovery-research/comparative-analysis.md)
* [Transition Journey Map](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onboarding/discovery-research/2022-Transition_JourneyMap_v10.pdf)
* [Navigating military transition](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onboarding/discovery-research/PMA_1B_FindingsReport_v1.0.pdf)
* [Navigating transition from military service to civilan life](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onboarding/discovery-research/LE-Project-Discovery-Report-Transition_v1.6.4.pdf)   


## Who we talked to 
_Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic._ 
_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#who-we-talked-to)_

**Recruitment criteria**

Our initial recruitment goals focused on Veterans with minimal experience with VA.gov, such as those who were actively transitioning from active duty or who had never set up an account. As this is a difficult demographic to recruit for, we interviewed participants who had retired prior to the launch of VA.gov, as well as those who were still in the process of transitioning.   

We talked to **ten participants.**

Audience segment:
* Veterans: 10 
* Caregivers: 0 
* Family members of a Veteran: 0  


Gender:
* Male: 8 
* Female: 2 


LGBTQ+:
* Transgender: x 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: x
* Gay, lesbian, or bisexual: x


Devices used during study: 
* Desktop: 10 
* Tablet: 0 
* Smart phone: 0 
* Assistive Technology: 0


Age:   
* 18-24: 1 (Pilot Study)
* 25-34: 3
* 35-44: 1
* 45-54: 2
* 55-64: x
* 65+: 3


Education:
* High school degree or equivalent: 2 with degrees + 1 paricipant who indicated highest education was 11th grade
* Some college (no degree): 3
* Associate's degree, trade certificate or vocational training: 2
* Bachelor's degree: 1
* Master's degree: 1
* Doctorate degree: 0
* Unknown: 0


Geographic location:
* Urban: 0
* Rural: 0
* Unknown: 10


Race:
* White: 2
* Black: 3
* Hispanic: 2
* Biracial: 0
* Asian: 0
* Native: 0
* Prefer to self-describe or unknown: 3


Disability and Assistive Technology (AT):
* We did not have any AT users as part of this study (it will be a focus of our next study).
* No participants specified any cognitive disabilities in our recruitment, but 1-2 mentioned past trauma and PTSD.   


## Underserved groups we haven’t talked to 

This research does not include the perspectives of the following marginalized Veteran groups:
* Identify as gay, lesbian, or bisexual; transgender or non-binary
* Users of assistive technology

Additionally, we were not tracking whether participants were located in a rural location. Participants were given the option to conduct the interview on a mobile device, but all participants elected to use desktop computers. 
![VA-recruitment-checker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-onboarding/research/images/Recruitment%20Checker_Welcome.png)
