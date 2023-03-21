# IA Design and Recommendations
**STATUS: COMPLETE 11/20/2020**

**Team:** Public Websites for discovery/design + BAM1/BAM2/eBen for technical implemention and launch

**Product/Featue:** Application "wizard" utilized in Education, Disability, VRE, PCPG and HLR (Decision reviews)

**Background/Context:**  The "How to apply wizards" help Veterans and others find the right online forms to apply for benefits. They currently live on static content pages (i.e. How to apply and Eligibility pages) will be moved onto the /introduction page of the individual React applications/forms.  This work impacts the wizard flow, messaging and entry points across the impacted benefit areas. 

**IA Request:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/14193

**On this page:**
- [User flows](#flows)
- [IA structure, URLs and breadcrumbs](#ia)
- [Navigation and entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="flows"></a>User/Page Flows <br>
- Currently the wizard lives on key static content pages (i.e. How to apply). However, not all content pages that provide links to the forms include the wizard, and users can easily bypass the wizard by direct linking to specific applications. This increases the possibility of users completing and submitting the wrong form 
- Moving the wizard to the initial page of the React form, ensures the user's scenario is always validated regardless of how they navigated to the application

![image](https://user-images.githubusercontent.com/20994159/95248216-99d4ed00-07dc-11eb-848c-be0a43112598.png)

Wizard functionality
1. Skip/ignore wizard - This is an optional feature of the wizard pattern.  On the /introduction page while the wizard is displayed, an option may be provided that allows the user to skip the wizard or ignore's its recommendation if they want to continue forward on the current application.
2. Shared wizards - The same wizard may be shared across multiple related applications - i.e. the wizard on each of the education applications will be the same wizard, however the wizards on the chapter 31 and 36 wizards are different.  
    - If a wizard routes a user to a different application that shares the same wizard, the user will not need to complete the wizard again. 
    - If a wizard routes a user to a different application with a different wizard, the user will need to complete that application's wizard. 
3. Start over - This is an optional feature of the wizard pattern.  Once the user has either completed or skipped/ignored the wizard, the /introduction page of the application is refreshed with content about that application along with an option for the user to "start over".  When the user clicks this option, it should function like the browser 'Back' button - they should be returned to the original /introduction page with the wizard completely reset (i.e. their previous answers are cleared). This option only appears on the /introduction page.
    - If the user did the wizard on application A, continued to application A, clicking "start over" would return them to the default state of application A
    - If the user did the wizard on application A, was routed to application B, clicking "start over" would return them to the default state of application A
4. Abandon application - If a user abandons their application by either navigating away from an unsaved form, choosing to start a new application, or their saved application has expired,  their wizard status should be reset.  When starting the application again, they would need to complete the wizard again. 
5. Resume saved application - If a user resumes a saved application, they would not need to complete the wizard again.  The saved in progress application will return them to the appropriate place within the application form flow. 



Design features/options of the wizard
- the H2 of the wizard can be customized to fit the scenario of its use (i.e. "Is this the form I need" versus "Find the right form")
- Wizard intro content needs to be "dynamic" and specific to the application they are on - i.e. if they are on the 1990N form, the intro content and links should reference the 1990N, if they are on the 5495, the intro content and links should reference the 5495. 
- the wizard will notify the user of which form is the correct form and provide a CTA to get to it

## <a name="ia"></a>IA Structure, URLs and Breadcrumbs <br>
- The wizard will be placed on the /introduction page of each applicable application
- No new pages are needed, and existing urls and breadcrumbs will not be impacted


## <a name="nav"></a>Navigation and Entry Points <br>

- Entry points throughout the site will be modified as part of this work, and will vary for each implementation of this wizard.
  - Entry points will be specific to each wizard implementation - education, disability, vre, pcpg, hlr - and will be defined individually at the time the wizard is moved for that benefit area
- General guidelines for application/apply CTAs:
  - When context and user intent are clear, take the user directly to the online form whenever possible
    - In this scenario, a primary button with an action oriented label (i.e. "Apply online now") should be used to link to the online application.  
    - In addition, provide a link under the button that goes to the "How to apply" page (or other primary content page for the benefit) for the user to learn more about how to apply/other ways to apply (i.e pdf download, phone number, etc).
    - When ux/design does not allow for a button (i.e. left nav), utilize a text link with clear, action oriented label (i.e "Apply online now").
  - When the current context or user intent is not clear, default to taking the user to the "How to apply" page or other primary content page for that form.  

![image.png](https://images.zenhubusercontent.com/59ca6a73b0222d5de4792f1d/75ab5b23-37af-4fb8-ab38-64900e99c14c)




## <a name="redirects"></a>Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

- Not applicable

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>
<hr>

## <a name="notes"></a>Meetings Notes and Background Info

**10/22/2020 - Usability testing prep**



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
