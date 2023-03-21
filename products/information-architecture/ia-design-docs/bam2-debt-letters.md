# IA Review and Recommendations

**STATUS: COMPLETE**  

**Team:** Benefits & Memorials 2

**Product/Featue:** Debt Letters Tool

**Background/Context:**  New tool will provide users with the ability to view letters received regarding debt from different benefits.  

**IA Request:** https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/9686

Content request: https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/10315

<hr>

### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements. *

**IA/Content Strategy Approach:**
- This initial phase will include a static content page and a tool for viewing/downloading debt letters from VA - we are not aiming to bring over the full Debt Management site into the benefit hub experience.  Links to that additional content will be provided where applicable within static content and the tool.  A future phase will be needed to review and plan for migration of any additional content and tools that support a user's ability to manage and pay their debt.  
- Corresponding content approach is documented here: https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/10315
- There are 4 "pages" associated with this experience:
  - Manage your debt static landing page
  - View your debt authenticated tool that shows your list of current debts
  - Debt details authenticated tool page that is a drill down page of the list and provides details on a specific debt
  - Debt letters page that allows user to view a list all debt letters sent to them and download individual letters in pdf format
  
 ![image](https://user-images.githubusercontent.com/20994159/89955947-bfd57b00-dbf9-11ea-8f7c-21ef43537ac7.png) 

**User Flow:**
- The standard flow for authenticated tools, is to bypass the static content page when users are already authenticated. **However**, because this static content page will eventually house multiple tools and/or additional content pages, the main static content page must always be accessible to users through the breadcrumb or other direct link. 
- Unauthenticated users can link directly to the static content page
- If an unauthenticated user attempts to link directly to any page/level of the authenticated tool, they will be redirected to the static page where they must first sign in.  After signing in, they would be directed to their originally requested page. 
- Authenticated users will be able to link/navigate to the static page, deep link/navigate to the top level of the tool.  
- If an authenticated user attempts to deep link to a debt detail page, they will be redirected back to the summary level instead.  This is due to the fact that the individual debts do not have unique ids, so a user attempting to direct link to specific debt may end up with a 404 or the incorrect debt. 
- If an authenticated user attempts to deep link to the debt letters page, they will be taken directly to it.


![image](https://user-images.githubusercontent.com/20994159/89955882-97e61780-dbf9-11ea-8183-c65a207f83cd.png)



**URLs and Breadcrumbs**

_Please confirm actual breadcrumb labeling and casing with your writer._ 

Page | URL | Breadcrumb | Notes
--- | --- | --- | ---
Static page: Manage your VA Debt | wwww.va.gov/manage-va-debt/ | Home > Manage your VA debt | This is a new static content page to be built in Drupal. 
Auth Tool: Current debt list  | wwww.va.gov/manage-va-debt/your-debt/ | Home > Manage your VA debt > Your VA debt | This is the top level of the authenticated tool. This page will include inks to the detail pages for individual debt and the debt letter list page.  
Auth Tool: Debt detail pages | wwww.va.gov/manage-va-debt/your-debt/debt-detail/ | Home > Manage your VA debt > Your VA debt > Details | This is the detail level of the authenticated tool that shows the detail for a specific debt. The URL may include parameters to identify the debt being viewed. 
Auth Tool: Debt letters list  | wwww.va.gov/manage-va-debt/your-debt/debt-letters/ | Home > Manage your VA debt > Your VA debt > Download Debt letters  | This is a child level of the authenticated tool that shows a list of all debt letters for the user and allows them to download the letters in pdf form.  


<hr>

### Navigation Changes and Entry and Exit Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

Priority | Placement | Label | Description
--- | --- | --- | ---
tbd | [Records hub page](https://www.va.gov/records/) |  TBD | Placed as 8th link, just below "View your VA payment history". <br> Link and teaser text to be provided by PW team.
tbd | Records hub left nav menu | Manage your VA debt | Placed as 9th link, just below "View VA payment history".


***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 

<hr>

### Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

- 

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*

<hr>

### Additional Notes/Recommendations

<hr>
<hr>

### Background & Meeting Notes

**IA sync with BAM2 team - 6/26/2020**
- Discussed the proposed content approach for the debtman site - talked through the focus of the modernized va.gov experience being veteran benefit content only, and that office content was quite a ways down the roadmap.  I encouraged team to look through the debtman content to identify anything they feel is critical, and to reach out to Jen Lee if there are concerns with not moving content over. 
- Discussed that since we are not likely to be moving much content over, that linking to the content where it is, is an option to be explored.  It does sound like there's quite a bit of supporting content within the debtman site that is about how to resolve debt, so we may need additional conversations on this.
- Walked through user flows
  - Flows bypassing the static page for authenticated users was reviewed
  - Deep linking to debt letter detail was discussed - because the debt letters don't necessarily have unique IDs, deep linking to a letter may result in not finding a letter or pulling up the wrong one.  The consensus was to always send users to the summary level of the tool first. 
- Discussions around health debt/copay debt should continue - they think they may be getting copay debt data, but not necessarily the letters
TIMING: Research is coming up soon and they want to represent the content model, but that means that a draft static tool page is needed relatively soon (research next month).  Full launch of this tool won't be until August at the earliest.



**Content/IA synch - 6/23/2020**
- need to go through FAQs to determine what should be part of static content page and what should be part of tool. Do we move FAQs over at all or do we continue to link to legacy page?
- Are there entry points needed from existing content to tool, or does the tool lead to the other content for how to pay?
- Danielle to convert intake ticket to an epic, next step will be content strategy work to define how much content do we need to work with, then we can refine IA/flow as necessary
- team is hoping to do usability testing in early July

**CMS/PW Conversations - 6/8/2020**
- A kick-off with the CMS team was held to discuss the migration of the content on the "debtman" site
- It was determined in the meeting that the CMS team would not need to be involved, as there is no new content types being request, the work is really on the PW and IA team to determine the strategy for migrating content.
- After the PW and IA teams reviewed the "debtman" site it was determined that this majority of the content is related to the Debt Management office and the content should not be migrated over. 
- The team was notified that the goal will be to follow the standard user flow for authenticated tools, which includes a static page for unauthenticated users with a sign in module that is bypassed for authenticated users. 
- Another discussion will be held to determine how to approach the content

**Kick-off - 3/17/2020**
- This is an MVP effort based on the Veterans Fair Debt Notice Act passed in 2018
- VEO engaged DEPO
- Many different benefits create financial relationships with VA and can create Veteran debt - i.e. VA makes education payment to Veteran but Veteran does not complete credit they were paid for so they need to pay VA back. 
- VA Central Debt Management Center "DMC" - manages all of these debts
- There are different types of debt letters (possibly 50ish) - new debt, delinquent, 3rd notice, etc - each business line might have a variation of those types
- Only a small subset of letter types have been digitized and will be part of this work effort (they are part of eFolder)
- Solution ideas from team: static content page for digital management of debt, notifications of new debt letters, online viewing of letters, updated content of letters - all focused on MVP subset of letters initially
- there is an office page https://www.va.gov/debtman/
- There is pay.gov and pay.va.gov

Thoughts/Questions: 
- Even though only a few are digitized, will there be an effort to create standardized categorizations/taxonomy of all the letters in prep or as part of this work?
- How does this integrate with Profile?

