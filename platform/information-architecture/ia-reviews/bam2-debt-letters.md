# IA Review and Recommendations

**STATUS: IN PROGRESS**  IA WORK IN PROGRESS HERE: https://app.moqups.com/Rnc4BDEKrA/view/page/a1803040d

**Team:** Benefits & Memorials 2

**Product/Featue:** Debt Letters Tool

**Background/Context:**  New tool will provide users with the ability to view letters received regarding debt from different benefits. 

**IA Request:** https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/9686

Content request: https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/10315

<hr>

### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements. *

**Approach:**


Page | URL | Breadcrumb
--- | --- | ---

**General Details**

<hr>

### Navigation Changes and Entry and Exit Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

Priority | Placement | Description
--- | --- | ---

The above linking opportunities rated "medium" or "low" are purely recommendations and can be utilized at your team's discretion.

<hr>

### Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

For redirects, please submit a Redirect Request at least 2 weeks in advance per the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).

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
  - Deep linking to debt letter detail was discussed - because the debt letters don't necessarily have unique IDs can go away, deep linking to a letter may result in not finding a letter or pulling up the wrong one.  The consensus was to always send users to the summary level of the tool first. - 
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

