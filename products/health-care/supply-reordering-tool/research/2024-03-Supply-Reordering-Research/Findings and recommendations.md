# [2024-03-Supply Reordering Usability Testing] Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Supply reorder, Medications and Supplies Pod**

Date: 03/22/2024

Jenny Wang [yizhen.wang@va.gov], Kristen McConnell [kristen.mcconnell@va.gov]

[Research readout](link here)

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Further research needed](#further-research-needed)
- [Who we talked to](#who-we-talked-to)


## Research Goals
The medical supply reordering tool on VA.gov provides a more convenient way for Veterans to order their medical supplies from DLC online instead of ordering through call, mail, email, and messages on MHV. It's new on VA.gov. Veterans can access the tool on VA.gov from the main menu and on the MHV home page once they sign in. Currently, they can reorder hearing aid batteries and accessories, CPAP supplies, and prosthetic socks. Before adding more supplies to the tool, our team wants to pause and evaluate how the tool is performing so that we are prepared and confident to make more supplies available for Veterans to reorder, which will also reduce the use of DLC's contact centers. 

The purpose of this research was to:
- Better understand how Veterans currently order and re-order medical supplies.
- Evaluate if the current digital form on VA.gov is user-friendly and easy to understand for Veterans. 

## Research Questions
- What are Veterans' reactions to and understanding of the current digital medical supplies ordering tool?
	- Is it clear that the form may include hearing aid supplies and CPAP supplies?
	- Is it clear to users why some supplies are available and some are not?
	- Is the form clear on what Veterans need to do when supplies are unavailable?
	- Do Veterans know what to do when they want to change supplies after submission?
   	- Can Veterans complete the reorder process?
- How are Veterans notified when their prescribed medical supplies are eligible to reorder?
   	- How is the process of reordering indicated to Veterans first time and subsequent times? 

## Methodology 
We will conduct remote usability and interview sessions on Zoom. The interviews will consist of one task and direct questions. We will conduct the study in the [staging environment](https://staging.va.gov/](https://staging.va.gov/health-care/order-hearing-aid-batteries-and-accessories/), with one test account and a different password created specifically for the study. We will document each password created in the [sensitive repo](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/pharmacy/medical%20supplies-staging%20passwords.md).

## Hypotheses and Conclusions

1. Participants will get through the ordering the supplies task relatively easily.
	- Maybe True: 9 out of 9 participants finished the reorder task. There was some wonkiness on the verify address step, but everyone was able to figure it out with little to no assistance. 
2. Participants may not know how to change supplies once orders are submitted.
	- Likely False: Everyone knew to contact their health team or doctor if they needed help with their supplies.
3. Participants probably look to see what shape their supplies are in to know when to reorder and/or are notified by their clinician.
   	- Likely True: All participants mentioned that they keep written notes, mental notes, or check their inventories of supplies to know when to reorder.
4. Participants probably find out about the reordering process from their VA provider.
   	- Maybe True: Some mentioned their provider places an order when they visit for an appointment, and some mentioned that they know about mailing the order from the paper form they receive in the mail. 
5. Most Participants would probably call DLC or try to call their VA Medical Center to discuss changing supplies, for example, if they want a different-sized CPAP supply after submitting a supply order.
   	- Maybe true: Most participants know who they need to contact for changing supplies, and most of them had good and easy experiences with that. 

## Key Findings

1. All participants mentioned having notes, doing mental checks, or checking inventories to track when they need to reorder supplies.
2. **How to apply (landing) page:** Most participants (6 out of 9) clicked on the "Order hearing aid batteries and accessories online" link quickly without reading other information on the page. 
3. **Instruction page with sign-in button:** Most participants (7 out of 9) skipped instructions and wanted to sign in right away.
4. **Step 1 Verify personal information and address:** Even though no one was confused about the meaning of permanent address and temporary address, some participants (5 out of 9) showed confusion in the instructions for "Edit permanent address" when they expected permanent address to be accurate and filled in. 
5.  All participants are able to finish the order of a hearing aid task, and most participants (7 out of 9) gave a score of 4 and 5 for overall use experience (5 being the easiest). 


## Details of Findings 

### Finding 1: All participants mentioned having notes, doing mental checks, or checking inventories to track when they need to reorder supplies.

9 out of 9 participants use written notes, have mental checks, or check inventories to track their supplies to know when it's time to reorder. Even though no one expressed strong dissatisfaction with the fact they had to track themselves, one participant mentioned that they could go to VA clinics and pick up supplies if the clinics have them in stock. When that option went away a few years ago, the participant mails in the order form. talked about how they couldn't simply go to VA clinics and pick up supplies anymore when they didn't reorder on time.  One participant suggested that there should be reminders for recurring hearing aid tests because that's when they pick up their hearing aid supplies. There are currently no notifications or other user-friendly ways to remind Veterans that it's time to submit reorders.

> _Quote: I can kind of tell by my inventory, like if it's medication or if my batteries are starting to get low or just wear and tear. So I know to do that for myself to add because I'm a self-advocate person, so I know when it's time for me to do what I need to do._

> _SQuote: Based on need. So, you know, every six months or so, I know I'm supposed to ask for new replacement tubes, filters, et cetera. So it's a mental note that I make._


### Finding 2: On the [starting page](https://staging.va.gov/health-care/order-hearing-aid-batteries-and-accessories/), most participants (6 out of 9) clicked on the "Order hearing aid batteries and accessories online" link quickly without scrolling and reading other information on the page.

Out of the 3 participants who explored the page, 2 wanted to view the catalog to see what they could order, and one questioned about the eligibility of ordering online when supplies haven't been ordered in the past 2 years. Overall, there was one confusion on what they needed to do here to order online. 

> _Quote: Well, to do anything on the VA site, you have to sign in._


### Finding 3: On the instruction page with the sign-in button, most participants (7 out of 9) skipped instructions and wanted to sign in right away.

7 out of 9 participants wanted to sign in right away. Out of the 7 participants, one participant thought they were already signed in, and four expressed that they wanted to see the supplies available for them at this point. For the two participants who read the instructions, they liked the steps and wanted to see the steps throughout the process. 

> _Quote: Doesn't need this page, just want to see the supplies._
> _Quote: It'd be great if the user is identified after they sign in, the equipment that they're issued is already known by the VA._

The screenshot below highlighted one content issue a participant pointed out. 
> _Quote: This is where I could order the batteries or some hearing aid supplies, but instead it's telling me also to order hearing aid or CPAP supplies. I don't need that._
<img width="722" alt="Screenshot 2024-03-20 at 4 13 55 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/65574620/c82dd4e3-ac9f-4df5-ba3c-24b7e7c6809d">


### Finding 4: On step 1 - verify personal information and address page, even though no one was confused about the meanings of permanent address and temporary address, some participants (5 out of 9) showed confusion in the instructions for "Edit permanent address" when they expected permanent address to be accurate and filled in.

On the **verify personal information page**, all participants thought it was straightforward to click continue after verifying the information was correct. However, there was some valuable feedback from 2 participants that could improve the experience. 

> _Quote: "Finish this order later" link is confusing for this step._
> _Quote: I thought I would start ordering at this point. (because the participant expected this information to be accurate and shouldn't need to change._

On the **verify address page**, all participants knew the meanings of permanent and temporary addresses. They associate permanent addresses with "what VA has on file", "residence", and "where I live", and they would add temporary addresses if they have "temporary housing", "visit family somewhere", or "vacation home". However, some participants (5 out of 9) showed confusion when they realized that they needed to fill in or edit their permanent address. 

> _Quote: VA has my address on file, so no need to edit. If I need to change it, I will add it to a temporary address."_
> _Quote: I assumed everything was filled out._
> _Quote: I like how you can add a temporary address, like I'm having it shipped somewhere else. That's a good option there._

Two participants (one moved a couple of times, and another one has a vacation home ) provided feedback on how to make the verify address page clearer. 

> _Quote: You just ask for a shipping address, where do you want them shipped to?_
> _Quote: The most important thing to me is where do I want these things shipped._


**Usability issues:**
This might be a usability issue for staging accounts only. When participants add an address to the temporary address box and select it to continue, the form won't allow them to continue unless the permanent address is completed and filled out. 


### Finding 5: All participants are able to finish the order of a hearing aid task, and most participants (7 out of 9) gave a score of 4 and 5 for overall use experience (5 being the easiest).

Overall, most participants (7 out of 9) found the reordering experience to be easy. The other two didn't give a score. When asked how they (3 participants gave a score of 4) would improve the tool to get to a score of 5, participants provided some valuable feedback: 

> _Quote: f I'm ordering a hearing, hearing, hearing aid supplies, I wouldn't wanna see CPAP or anything else. Nowhere else. If I'm order, if I click on order for hearing aid supply, that's all I wanna see. And I would do the verify, verifying the information for my personal information address and stuff. I do that at the end because it, it's there anyway to edit at the end. So yeah, if I want to change my address or ship it to where I wanna ship to, I'd do it at the end instead of, you know, in between._

> _Quote: the only thing is I didn't see "Finish this later". (when asked to come back to submit later)_

> _Quote: I'd like a reminder for upcoming hearing tests._

## Additional Insights

### Finding 6: On step 2 - select supplies page, all participants found it easy to select supplies. 6 out of 9 participants expected to see only what they needed to reorder.

The task was to select a hearing aid battery to order, and all participants found it easy to check the box to pick a battery. However, 5 out of 9 participants showed confusion about the differences between the two batteries and did not know what some of the supplies were (see 2 and 3 in the screenshot below). 

> _Quote: There are two different batteries. Wait a second they are different batteries for the same model of hearing aid. I'm not sure what the difference is between them._

> _Quote: What I see is the RIC charger, I have no idea what that is._

<img width="391" alt="Screenshot 2024-03-21 at 11 40 27 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/65574620/3efb0371-b9b6-463d-b7cb-5611ccb8c6aa">

6 out of 9 participants wanted to see only what they had ordered previously. For example, if they don't have CPAP, they don't want to see CPAP (since the task was to order a hearing aid battery). One participant pointed to the title of the page (see 1 in the screenshot above) and was bothered by "or CPAP". 
 
> _Quote: I would think that if the VA knew what my order was already, instead of my initial order, they would only make one type of battery available for my selections. But to make it easier, I would think if you only offer what I've been prescribed for me, then just having one option and clicking that might make it easier._

> _Quote: If I'm ordering supplies for my hearing aid, I don't need anything about CPAP."

When asked what they would like to change about this page, two participants provided feedback. One mentioned being able to change the size of their cushion earpiece, and another participant talked about changing the quantity and the brand of the hearing aid. 

> _Quote: If you need to change the brand, I think you would need to talk to your primary care provider, and it's the same for quantity._

> _Quote: If you offer the earpiece, you'd need to have the size of the small, medium, and large, whatever the case may be._


### Finding 7: On step 2 - review page, all participants were able to review by clicking on the expand component. When instructed to leave the form and come back later, 2 participants missed the "finish this later" link and weren't sure how to save it.


### Finding 8: On step 3 - confirmation page, all participants were satisfied with the information on the confirmation page, and 3 mentioned they liked the print option.


## Recommendations
    
* Iterate the form steps flow so Veterans can place an order quickly and confidently.
    * _Is it necessary for Veterans to verify their personal information when they are already logged in (step 1)?_
    * _Is it necessary for them to fill in their addresses when that information is already stored on the VA Profile?_
    * _Why ask them to edit the permanent address when it only applies to the order they're placing?_
    * _Does DLC have data on what Veterans need and when it's time for them to submit the order?_
  Let's start asking those questions to make the overall experience more intuitive and easier.
      
* Explore the idea of adding the ability to change or request change for size, quantity, and brand of supplies.
    * _For nuance questions and requests, participants mentioned they prefer to contact their providers or clinics directly, which could delay the process in the case of not reaching the right person or back-and-forth communications. Adding a change supply request feature might ease the actions Veterans need to take._


## Next Steps

- Plan and conduct second research to understand how Veterans associate medical supplies reordering with medications refill so our team can collaborate with the medications team and the Cartography team to figure out how medical supplies reordering fits into the MHV on VA.gov.


## Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2024-03-Supply-Reordering-Research/2024-03-research-plan.md)

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2024-03-Supply-Reordering-Research/2024-03-usability-test-conversation-guide.md)

[Interview transcripts](in EnjoyHQ, https://app.enjoyhq.com/sh/pj/562a602f-0087-4367-b6b4-0db402009dff)


## Tools used for Synthesis

- [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1708651523305/bcb23a928372ea8fdaa231cf81ebd71b0fcb395a?sender=ueeece9e244394145c84e5173)
- [EnjoyHQ](https://app.enjoyhq.com/sh/pj/562a602f-0087-4367-b6b4-0db402009dff)


## Pages and applications used

[Link to prototypes or pages that were tested](https://staging.va.gov/health-care/order-hearing-aid-or-CPAP-supplies-form/introduction)


## Other supporting documents created

e.g. user flows, personas, etc.


## Secondary research

Include any secondary research you may have. 

E.g. web analytics, ForeSee data, SME interviews, competitive analysis, or other relevant research studies.


## Who we talked to 

[Recruitment criteria](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/supply-reordering-tool/research/2024-03-Supply-Reordering-Research/2024-03-research-plan.md#recruitment)

We talked to **9 participants.**

Audience segment:
* Veterans: 9


Gender:
* Male: x 
* Female: x
  

Devices used during study: 
* Desktop: x 
* Tablet: x 
* Smart phone: x 


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


Race:
* White: x
* Black: x
* Hispanic: x
* Biracial: x
* Asian: x
* Native: x


## Underserved groups we haven’t talked to 

This research does not include the perspectives of the following marginalized Veteran groups: This research may not include the perspectives of the following underserved Veteran groups:

Cognitive disability
Other than honorable
Immigrant origin
Expat
Gay, lesbian, or bisexual
Desktop screen reader user
Speech input technology users
Hearing Aids
Sighted Keyboard
Captions
Switch Device
Braille Reader
Assistive Technology users
