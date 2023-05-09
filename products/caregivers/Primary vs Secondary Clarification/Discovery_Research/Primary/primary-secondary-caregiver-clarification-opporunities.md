# Primary/Secondary Caregiver clarification: Discovery on opportunities

Here are some related links and documents about this effort:

* [GitHub discovery ticket](https://www.google.com/url?q=https://github.com/department-of-veterans-affairs/va.gov-team/issues/38119)
* [Initiative Brief](https://www.google.com/url?q=https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/Primary%2520vs%2520Secondary%2520Clarification&sa=D&source=editors&ust=1678996942674960&usg=AOvVaw1jOd9F5WxSBZ4MhGTue-Ct)

## What problem are we trying to solve?

1. Users are unclear what the Primary and Secondary caregiver roles, responsibilities and benefits are when progressing through the form.
2. In some instances where a person updates the primary or secondary caregiver, they include both, leading to duplicative information.

## How do we know it's a problem?

1. Sporadic feedback reflecting confusion on how to complete the 10-10CG, specifically around the differences between the Primary and Secondary caregiver roles, responsibilities and benefits.
2. Feedback from stakeholders that data comes in as duplicate when the form gets submitted in some situations.

## Questions to answer

A few questions to help guide the discovery work:

### Do we need to approach the problems separately?

No. We could approach them together. That may only make sense if we try to tackle the duplicative information problem. Which can probably only be solved elegantly by reworking the form flow.

### What other opportunities and solutions might exist beyond the previous work done?

## Primary and Secondary caregiver roles, responsibilities and benefits

This is for the Primary and Secondary caregiver roles, responsibilities and benefits problem:

### Idea: Expanded additional info content

Add new/updated content in the existing additional info components in the form. The content should address not just who can be a caregiver, but what the differences are between a primary and secondary caregiver and what the benefits are for each of them.

We'd also want to update the introductory page:

* The information should be more detailed than what's in the additional info component since we'd have less space there.
* Focused more on what the differences are between a primary and secondary caregiver and what the benefits are for each of them.

Benefits:

* Mostly copy changes.
* No impact to existing flow.

Drawbacks:

* Would likely need to have multiple paragraphs in there, which breaks best practices for the additional info component.
* Statistics show that users do engage with Additional info components, but is burying the reason people are applying (using the form) a good idea? Probably not.

### Idea: Expanded content in a  featured content component or accordions

Similar to the first idea, this would add new/updates content in either a featured content component, accordion component or other custom component.  The content should address not just who can be a caregiver, but what the differences are between a primary and secondary caregiver and what the benefits are for each of them.

We'd also want to update the introductory page:

* The information should introduce the topics needed, but we could get details in either of these components on the related page, putting it where the user needs it.
* Focused more on what the differences are between a primary and secondary caregiver and what the benefits are for each of them.

Benefits:

* Mostly copy changes.
* No impact to existing flow.
* The addition of the featured content component or accordion component could draw more attention to the extra information.

Drawbacks:

* Using an accordion component still buries the information.
* Using the featured content component may call too much attention to the information.

### Idea: Full page of info with question on next page

With this idea, we'd add content directly to a new page within the flow, putting focus on information about primary and secondary caregivers. It would come before the primary/secondary questions. The content should address not just wh can be a caregiver, but what the differences are between a primary and secondary caregiver and what the benefits are for each of them.

We'd also want to update the introductory page:

* The information should introduce the topics needed, but we could get details in either of these components on the related page, putting it where the user needs it.
* Focused more on what the differences are between a primary and secondary caregiver and what the benefits are for each of them.

Benefits:

* Would allow users to focus on the information before answering questions about it.

Drawbacks:

* The new information pushes the question to the next  page.
* Lengthens the form, and may puts too much weight on the information

### Idea: Store Caregiver information in the profile section

Storing the information in the profile section would allow the Veteran to see who is their assigned caregiver, and make updates from there. Depending on the updates made, the user would need to take additional steps to complete an application.

A MVP of this could be a "read-only" version where Veterans can see the information in the profile, and it links to the 1010CG form.

Benefits:

* The Veteran would be able to look up who their caregiver(s) are at any time without a phone call or finding paperwork.
* Further establishing the Profile as a hub for Veteran information and benefits.

Drawbacks:

* We probably need to enable the progressive flow before we could do this, so the Veteran doesn't have to fill out anything unneeded.
* Once the Veteran updates the information in the profile, we'd need to make sure we have the other information needed to process the application.

Questions:

* What would happen after an update?
* Would we need the progressive flow to make this work?
* Do Veterans need to check this information regularly?
* Would the Veteran have to complete their information on the application still if going this route?
* Would this be populated since they are authenticated or would it still be manual entry?
* Or would this be a progressive flow in that this can be filled behind the scenes?
* What about Veteran signing?

## Duplicative data problem

This is for the duplicative data problem:

### Idea: New, progressive flow depending on if applicant is new to the program or returning to change/add a caregiver

This is the work, and recommendation from Dené in the linked Sketch files in the ticket. It turns the form into a progressive flow depending on if the user is new or an existing applicant and what they need to do.

Benefits:

* Likely could tackle both the duplicative data issue and the primary and secondary caregiver roles, responsibilities and benefits problem.
* Likely would lessen the amount of information needed on the form in some cases.

Drawbacks:

* Large work, with change of flows in the form.

## What questions are we missing?

**How is the data processed? Does a new "application" not override an existing one?** A new application does not really override the existing information.  An application is needed to add new Caregivers to the existing list of caregivers for the Veteran.  However, if a Caregiver is going to be replaced, the existing Caregiver must be discharged (there is a process and the Veteran must call or visit the CG=supported facility to do this), then a new application with the new Caregiver information must be submitted.  Here is an example the Business provided:

When a Veteran changes their Primary CG, a new 10-10CG application is required. The CSP staff will assist with discharging the current Primary CG and will inform the Veteran of the options to submit a new 10-10CG application (either online or by paper).

**What kicks off a caregiver getting discharged when replaced? Does it need to happen via a call or visit or can it happen online?** This person can initiate changes in those ways, but a form (online or paper) will need to be filled out regardless of the initiation channel.  A clinical meeting/call will always happen to go over the changes with the Veteran and Caregiver.

**What scenarios require a "full" application?**

* A new caregiver, replacement of existing caregiver requires the application.
* When completing the application, it must contain at least one new caregiver (the primary or one of the 2 allowable secondaries).  The application does not require all roles to be completed, although it can be done if the Veteran has a person chosen for each role.

**What is the business process for changes to caregivers assigned and what do Veterans/caregivers have to do/their role in this process?**

* When a change is requested, staff will meet the Veteran & Caregiver to discuss it from a clinical perspective.  Secondary caregivers can't move into primary caregiver role without the application submission and formal checks again.
* We can also note that if a Secondary Caregiver is applying to be a Primary Caregiver (after the initial Primary has been discharged), they will remain in the Secondary Caregiver role until they are approved to be the Primary.  Then they are discharged as Secondary and registered as Primary.  This may be subject to CARMA system restrictions, however not sure if this would impact how we approach the application information.

**Do they have to fill out an online/paper app at some point even if they call/visit in person to verbally request the change?**

* Yes. It all leads back to the form for processing.
* We can note here that it is a regulation requirement to have the form completed and submitted again for any changes in roles.  This also explains why a new application is needed to add new caregivers in empty roles.

**Are there any other ways Veterans manage/have a say in the caregivers assigned to them?**

* No. It's just the 1010CG form.
* We did get confirmation that any time a 10-10CG form is received, a call is made to the Veteran to assess the situation and confirm that a change in a Caregiver is being requested.

**Do additional info components get used?** Yes. Both of the additional info components for primary and secondary caregiver components  are the most popular, according to data from the past six months.

![image](https://user-images.githubusercontent.com/1473618/225730279-e396b4b1-e67e-46c3-87c0-9c0bd936e82d.png)

![image (1)](https://user-images.githubusercontent.com/1473618/225730274-b926c834-771b-402f-98e9-f656dfa14d1c.png)

These two screenshots show how the additional info components are the most popular among additional info components in the form. They each get more than 9,000 unique uses in the last six months.

**Can Veterans can view a Caregiver decision letter digitally/in their Profile?** Currently, it looks like the answer is no. Still researching this.

**Where is the caregiver information stored on VA.gov?** Currently, it looks like it's unavailable.

**Can Veterans access their decision letter about the Caregiver program?** Still researching this.

**What pages lead into the 1010CG form? Where do people filling it out come from?**

![225982364-96f5b4f6-0b60-4a54-b5c8-a53a15735c9c](https://user-images.githubusercontent.com/1473618/226648672-fc7e9097-8238-4e29-9dcf-888413d42bbc.png)

From [Heather's research](https://github.com/department-of-veterans-affairs/va.gov-team/issues/38119#issuecomment-1474209633). This image shows that the top pages are:

1. https://va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/i - 18,000 unique visits
2. https://va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/vet-3-json 14,000 unique visits
3. https://caregiver.va.gov/ 2,100 unique visits
4. https://caregiver.va.gov/support/support_benefits.asp 1,800 unique visits

These are the preceding pages to the application from the past year to date, numbers rounded in unique visits. More exist, but listed the ones that got the most traffic.

Another view of this from [Heather's additional research](https://github.com/department-of-veterans-affairs/va.gov-team/issues/38119#issuecomment-1474220352).

![225984373-6eb7715e-a00c-4b06-8a7c-c1e85a610926](https://user-images.githubusercontent.com/1473618/226652782-11eef68e-b1f2-40a5-b958-3bb11d322d4d.png)

This shows the majority of traffic coming from:

1. https://va.gov/family-member-benefits/
2. https:/va.gov/health-care/family-caregiver-benefits/

## Other ideas considered

Idea: Add content to the page informing users they only need to enter Caregivers again if it's a new caregiver or they're changing the caregiver. This could solve the duplicative data issue, but puts the burden on the Veteran/Caregiver to read that information, understand it and follow it.

## Research questions

Overall, this work really could benefit from some additional exploratory research:

* Interviews with dyads (Veteran / Caregiver pair) to explore all of these possible directions by asking questions and maybe review content examples.
* Timing for overall usability/facilities study so we can use those findings to build off of here.


A list of potential, future research questions to ask people that would help with this work:

1. Better understanding the user's mental model on the caregiver levels/names : Do Veterans/Caregivers refer to the Primary / Secondary terms or do they think about the caregivers collectively as a team supporting the Veteran? Is the primary/secondary terms more of a program/business requirement?
2. The introductory page information : What information is most important here for users?
3. Updates : How would Veterans want to update their caregivers?
4. Updates :How often do Veterans update their caregivers? (maybe get this from data)

---

## Reference material

From: https://www.caregiver.va.gov/support/support_benefits.asp

> What services does this program offer?
> Veterans can designate one (1) Primary Family Caregiver and up to two (2) Secondary Family Caregivers on the application. Secondary Family Caregivers serve as a backup support to the Primary Family Caregiver when needed. Services will depend on whether you are the Primary Family Caregiver or a Secondary Family Caregiver.

> If you are the primary caregiver, you may receive:
> * A monthly stipend (paid directly to you as the caregiver.)
> * Access to health care insurance through Civilian Health and Medical Program of the Department of Veterans Affairs ([CHAMPVA](https://www.va.gov/COMMUNITYCARE/programs/dependents/champva/index.asp)), if you do not already have health insurance.
> * Mental health counseling.
> * Certain beneficiary travel benefits when traveling with the Veteran to appointments. For specific details, please contact your CSP Team.
> * At least 30 days of respite care per year, for the Veteran. Respite is short term relief for someone else to care for the Veteran while you take a break.

> If you are the secondary caregiver, you may receive:
> * Mental health counseling.
> * Certain [beneficiary travel benefits](https://www.va.gov/health-care/get-reimbursed-for-travel-pay/) when traveling with the Veteran to appointments. For specific details, please contact your local [CSP Team](https://www.caregiver.va.gov/support/New_CSC_Page.asp).
