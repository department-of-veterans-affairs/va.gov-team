# IA Design and Recommendations
**STATUS: COMPLETE**

**Team:** BAM2

**Product/Featue:**  Manage Debt Iteration 3 - FSR

**Background/Context:**   Adding the ability to submit the FSR online as well as migrating all debt management content from legacy site to modernized site. 

**IA Request:** https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/16946

**On this page:**
- [IA structure, URLs and breadcrumbs](#ia)
- [Navigation and entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="ia"></a>IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*

- The online FSR will become another tool available within the "Manage VA Debt" experience.  The form will live as a child to the [Manage VA debt static page](www.va.gov/manage-va-debt/).
- All content within the current www.va.gov/debtman/ experience will be migrated over.  Some content will be added to the existing [Manage VA debt static page](www.va.gov/manage-va-debt/), and other content will be moved/created within the [Resources and support experience](www.va.gov/resources/). 

![image](https://user-images.githubusercontent.com/20994159/103928399-665a7500-50e1-11eb-9de6-eaa2ac09ea4d.png)


Page | URL | Breadcrumb | Notes
--- | --- | --- | ---
Online FSR form | www.va.gov/manage-va-debt/request-debt-help-5655/ | Home > Manage VA debt > Request help with VA debt with VA Form 5655 | Final URL slug and breadcrumb component TBD based on content work
Resources and support content pages | --- | --- | These pages will be defined and published by Public Websites team

## <a name="nav"></a>Navigation and Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

Priority | Placement | Link to | Description
--- | --- | --- | ---
Must | [Manage VA debt static content page](www.va.gov/manage-va-debt/)   |  www.va.gov/manage-va-debt/request-debt-help-5655/ | Link label determined by writer.
Should | [Find form tool](https://www.va.gov/find-forms/) | www.va.gov/manage-va-debt/request-debt-help-5655/ | Add link to online tool in search results. Use standard CTA and label. 
Should | [Find form tool detail page for 5655](https://www.va.gov/find-forms/about-form-5655/) |  www.va.gov/manage-va-debt/request-debt-help-5655/ | Add link to online tool on form detail page. Use standard CTA and label. 
Consider | [Records hub page](www.va.gov/records/) | www.va.gov/manage-va-debt/ | Recommendation: Add an option to "Manage your VA debt" option after the view payments option.
Consider | Records top nav | www.va.gov/manage-va-debt/ | Recommendation: Move the "Request military records" option to the "Get records" column after the home loan COE option.  Add this option to "Manage your VA debt" to the "Manage" column after the view payments option.  
Consider | Records left nav | www.va.gov/manage-va-debt/ |  Recommendation: Add an option to "Manage your VA debt" option after the view payments option.


***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Recommendation/at your discretion/possible enhancement* 


## <a name="redirects"></a>Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

URL | Redirect to | Notes
--- | --- | ---
https://www.va.gov/debtman/ | www.va.gov/manage-va-debt/ | 
https://www.va.gov/debtman/About_Us.asp | www.va.gov/manage-va-debt/ | 
https://www.va.gov/debtman/If_You_Owe_VA.asp | www.va.gov/manage-va-debt/ | 
https://www.va.gov/debtman/Payment_Options.asp | www.va.gov/manage-va-debt/ | 
https://www.va.gov/debtman/Submit_Compromise_Offer.asp | www.va.gov/manage-va-debt/ | 
https://www.va.gov/debtman/Submit_A_Waiver_Request.asp | www.va.gov/manage-va-debt/ | 
https://www.va.gov/debtman/Financial_Status_Report.asp | www.va.gov/manage-va-debt/ | 
https://www.va.gov/debtman/Debt_Referral.asp | Resources and support article created by PW team | 
https://www.va.gov/debtman/Most_Frequently_Asked_Questions.asp | Resources and support article created by PW team  | 
https://www.va.gov/debtman/Frequently_Asked_Questions.asp | Resources and support article created by PW team  | 
https://www.va.gov/debtman/Whom_To_Call.asp | Resources and support article created by PW team | 
https://www.va.gov/debtman/site_search.asp | www.va.gov/manage-va-debt/ | 
https://www.va.gov/debtman/Site_Map.asp | www.va.gov/manage-va-debt/ | 



**Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>
<hr>

## <a name="notes"></a>Meetings Notes and Background Info

**12/3/2020 - Leah, Danielle, Riley, Becca**
- Want to include new application URL in upcoming communications, could we launch a landing page or interim page to announce?
  - Not recommended, we don't launch temporary drupal pages within the benefit hub experience
  - The manage va debt page is currently temporarily redirected to the dmc site, we recommend DMC add content to their existing site landing page and they can publish the manage va debt url; once the manage site is launched, we will remove temporary redirect
- iteration 2 to release in january when they are ready
- when will debt man be retired for new content
  - congressional steering committee wants debtman site to go away, but we are not taking on office/admin content
  - we will be moving most content into Resources and support experience, however the DMC office page and About us page is not content we will be moving over
  - if the desire is to eliminate the "debtman" URL, recommend changing the team site url and putting a redirect in place, this is not something that our team can do for them
- FSR ready to release in February, which aligns with when they will redirect traffic from debtman
- To dos: 
  - BAM2 launch manage va debt page and view debt tools in jan (4th?) - quiet launch
  - BAM2/PW remove temporary redirect from manage va debt url
  - LEAH work with debtman site/stakeholders to identify who can make changes to existing site
  - DANIELLE/MIKKI finalizing content strategy and IA
  - SUSAN lift of doing the writing and publishing pages by late january
  - MIKKI/PW map out redirects of debtman content and implement late january
  - MIKKI recommendations for changes to their site/right rail
- Future of manage debt/fsr
  - want to transfer vha funding to dmc to build a product that allows users to manage health care copays via the fsr as well
  - jill will set up pre kickoff meeting to go through their biz process and issues and vision for one entry into veteran debt in next couple of weeks
  - initial research showed that users wanted to see all debt together, many participants had medical copay debt


**10/21/2020 - Design intent**
- Reviewed wires for FSR form flow
- IA Questions:
  - At what point do they indicate which debt they are submitting the FSR for and what type of resolution they are requesting (i.e. monthly payments, waiver, compromise, etc)?
  - Is there different information needed on the FSR based on the type of debt or type of resolution they are submitting for?
  - Are we saving the FSR once they submit it for reference for any additional debts, or do they need to submit a new one for each debt?
  - As we think about how Veterans flow into this form, we will need to make sure we accommodate the possibility that someone lands here to resolve their health care copays and will need to direct them back.
- Feedback documented here: https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/14769

**10/20/2020 - Regroup with BAM2 team**
- FSR is used by other departments, although submission process may be different (where its routed to)
- FSR not needed for every debt, once filled out it is good for 6 months, can be used for multiple debts (its the same information)
- A veteran may want different payment plans for different debt - i.e. a waiver for C&P and monthly plan for education
- SSN and File # identifiers
- Team is unsure how health copays/debt play into this, separate process likely, although health care sends users to a pdf of the FSR for submitting a waiver.  
  - Health care has waiver (asking us to stop collection action on the debt), write-off (asking us to cancel the debt), or compromise (asking us to accept a lower amount of money as full payment of the debt)
- Discussed "the buddy form" 21-4138, sort of a generic form that is submitted with many forms as supplemental, mostly open text field
- Discussed the option of using a wizard as potential gating to direct user to correct process/form
- Need to include linking between debt management and health care to ensure users are directed appropriately, even though they may be very different things



**10/13/2020 - Content/IA Strategy kick-off**  Leah, Danielle, Riley, Rebecca, Matt, Brian L, Peggy
- Rewrite debtman to funnel the the veteran into the correct option and then to fill out the FSR form the first time
- The full FSR needs to be completed regardless of the resolution
- Need
  - Ia/content strategy for unauthenticated content
  - Ia/content support for tool/form
- Early calendar year/Q1 release - they will be sending out debt letters that may/may not realize they have debt due…anticipating overload of calls.  
- Discovery work with stakeholders is complete, talking with VSOs will be done this week, will go into design after that


**10/7/2020 - Kick-off**
- Debt collection has been suspended for coronavirus since march. There are 1.2 million veterans that are going to find out they have debt when it resumes
- The Financial Status Report (FSR) is the starting point of the debt resolution process
- Includes
	- Fill out FSR form
	- Write a justification letter to submit with FSR (for waiver or compromise) - unsure if this will be part of the FSR form flow or on its own
- Peggy: Where do you see this form living - within debt management section?  Team was unsure
- Mikki: Debt man site - what content needs to come over to support this tool??
	- debt man needs to be retired since it’s a heavy focus with this work and should move with this
- Early Q1 timing
