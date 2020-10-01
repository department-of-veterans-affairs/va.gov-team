# IA Design and Recommendations
**STATUS:**

**Team:** Public Websites for discovery/design + BAM1/BAM2/eBen for technical implemention and launch

**Product/Featue:** Application "wizard" utilized in Education, Disability, VRE, PCPG and HLR (Decision reviews)

**Background/Context:**  The "How to apply wizards" help Veterans and others find the right online forms to apply for benefits. They currently live on static content pages (i.e. How to apply and Eligibility pages) will be moved onto the /introduction page of the individual React applications/forms.  This work impacts the wizard flow, messaging and entry points across the impacted benefit areas. 

**IA Request:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/14193

<hr>

### User/Page Flows <br>
- Currently the wizard lives on key static content pages (i.e. How to apply). However, not all content pages that provide links to the forms include the wizard, and users can easily bypass the wizard by direct linking to specific applications. This increases the possibility of users completing and submitting the wrong form 
- Moving the wizard to the initial page of the React form, ensures the site always provides a validation option to direct them to the correct online form. 



### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements. *

**Approach:**

- 


Page | URL | Breadcrumb
--- | --- | ---

**General Details**
- Please connect with your writer/editor on the proper verbiage and capitalization of the last element of the breadcrumb

<hr>

### Navigation Changes and Entry and Exit Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

Priority | Placement | Description
--- | --- | ---

***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 

<hr>

### Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

- 

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>

### Additional Details/Recommendations

<hr>
<hr>

### Meetings Notes and Background Info

**9/3 Update Mtg** Mikki, Peggy, Liz, John

- The move of the How to Apply Wizards from the How To content pages to the actual Apply Now pages introduces more complexity than anticipated based on the variety of use cases (example: authenticate, start application, go back to Wizard because as a user I am confused).
- Additionally, with multiple product teams implementing the Wizards at the same time (also not anticipated), the need to establish design pattern guidance (along with a fresh look at the Wizards as common react component) is needed.
- As a result, the team has outlined the following steps to ensure successful, steamlined implementation AND to ensure we deliver improved outcomes for servicemembers who are applying for benefits at VA.gov:
  - *More time/effort will be needed to articulate and illustrate "design system" level changes (including IA/UX, Content and Functional) to the Wizards* that takes into account the new complexity and use cases introduced by moving Wizards to the applicaton pages.
  - Changes outlined so far (some of which will require additional definition and illustration):
    - Tell the user in more explicit terms what form/application they are being routed to when they complete the wizard.  Currently, this is not clear in many cases.
    - Add the ability for the user to "retake/start-over" the Wizard 
    - Keep the Wizard persistent on the page so the user can go back and re-use it during their session (this will mean eliminating the session state cookie and exploring an alternative option that only hides the wizard on the immediate next form a user is routed to)
    - Make sure the Wizard is open by default as seen [here](https://staging.va.gov/disability/file-disability-claim-form-21-526ez/introduction)
    - Make sure the text for the “Already know this is the right form” text goes above the Wizard (specific guidance about the treatment for this text will be provided)
    - Determine with Matt Self if the Education Wizard is needed on all application pages.  For example, does the Wizard need to be on highly specific scholarship pages  
- Next steps planned by the meeting participants:
  - Mikki will translate her IA recommendations into a format that allows for wider communication -- and use by Liz/Peggy/Danielle
  - Liz will create more specific design comps detailing important guidance/requirements
  - Peggy will work with Danielle to provide more specific content guidance for the teams
  - John will provide this update to the all product leads (Education, Disability, eBenefits) as it may impact expectations and timelines -- and they can provide SME guidance on key questions -- e.g.should the Education Wizard go on all or select benefits pages?
  - We will conduct usability testing with veterans to ensure we can validate key changes outlined above before going back to the product implementation teams to finalize development for staging review.   This will likely result in delayed implementation for the Education and Disability teams.
  - We will provide more details to all the involved product teams (BAM 1/2, Booz-Allen and eBenefits) at a meeting set for next Thursday at 10am EST.

**9/1/2020 - Regroup** w/John, Liz, Robin G, Leah, Luke, Amy K, Peggy, Danielle, Meg, Craig

Goal is to sync on each of the wizards in flight
	○ Disability in staging
	○ HLR - was originally thinking of filing this into the existing flow for the 526, this will launch with the wizard
	○ Ch 31/36 - prototypes complete, usability coming up on 36
	○ STEM - changes happening in prod for STEM launch
	○ Education in staging

STEM launches mid-september, modifications need to be made to edu wizard to support this, so edu wizard will follow after STEM launches
Disability wizard in staging, has not gone through any reviews

John H's recap:

- Rogers STEM (Amy + Neel) will implement content changes to the Education wizard -- prior to the Wizard’s move to the apply page — ahead of that team’s planned launch of their new application in mid-Sept. 
- Public Websites (John, Liz + Danielle)  will work with Platform (Mikki, Peggy) to finalize the user flow, content changes as required/needed.  (I will schedule a follow-on conversation for us after Labor Day — e.g., to sync on whether there is need for “start over” in wizard and any other open items)
- Accessibility feedback from Jen S. is ticketed here (#12211) (@Leah Keeler)
- There will be close product/dev coordination/collaboration between BAM 2 (Education) + BAM 1 (Disability, HLR) as we complete the builds/refinements for staging review, ideally in September.  (Note: @Luke Majewski says the new HLR wizard will go live with the application — they are inextricably bound)

**8/7/2020 - Kick-off**
- Wizards currently on the How to apply and Eligibility pages are being moved to the /introduction page of the applications
- Impacts:  Education, Disability, Higher level review
- Additional wizard currently in flight on Ch31 and Ch36 work - reviews and collab cycle for this effort will continue with that team
- Each team moving a wizard will go through collab cycle - IA, content, accessibility and QA are all needed...along with analytics
- Moving wizard impacts
  - static content pages
  - /introduction pages of all applications impacted
  - all entry points to "Apply now" across the site (home, top nav, left nav, hub pages, search, etc)
  - review all user flows/scenarios for additional content needs and CTAs
- BAM2 has education wizard in staging on education form, will need to catch up on all needed collab cycle steps
