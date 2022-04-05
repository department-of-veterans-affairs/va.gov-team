# Discovery: Resources and Support Article Pages

**Search & Discovery team | November 2021**

Megan Gayle, Senior Designer and Researcher

## Background
Resources and Support (R&S) was originally called “Learning Center”. A link to R&S is available on the footer of VA.gov under "Get answers" with the intention of promoting R&S more heavily once it contained 225 articles (there are currently 67 articles).

R&S was created to contain **Tier 2** content. This product focuses on creating an IA and content design for tier 2 content that includes benefit learning, knowledge, help, and support content categories.

There are three types of content on VA.gov. 

- **Tier 1 content**: benefit content and tools (applying for benefits, accessing benefit tools to manage your existing benefits) for beneficiaries (Veterans, family members, service members)  

- **Tier 2 content**: benefit-adjacent content (for beneficiaries, and people who work with beneficiaries)  

- **Tier 3 content**: organizational/administrative/office content 


<a href="https://github.com/department-of-veterans-affairs/va.gov-team/tree/69833737d9fe22b8990bb987e7c50de13205c5d5/products/content/tier-2-content-IA-and-design/learning-center-mvp/discovery-and-research">**Original Reseach Folder**</a>
- <a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/products/content/tier-2-content-IA-and-design/learning-center-mvp/discovery-and-research/card-sort/card-sort-research-summary.md">Card sort</a>
- <a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/discovery-and-research/learning-center-mvp-findings-summary.md">Moderated usability study</a>


## Goals
- Investigate the analytics of R&S article pages and make changes based on findings
- Investigate styling of R&S article pages to ensure they are consistent with the design system
- Update CMS to optimize UX for both end users and content editors
- Workflow and guardrails to allow new editors to publish content and to reduce duplicate content

## Current sections of R&S article pages

- **CTA**

- **Search feature** with radio buttons for R&S and global search

- **Tags**

- **Rate your experience**

- **Related information**

-   **VA benefits**

-   **Need more help?**

- Optional content sections:
  - **Step-by-step instructions**
  - **'On this page' jump ahead links**
  - **Tables**
  - **Accordions** 


Detailed analysis of each component on the R&S article page is available on the [component spreadsheet](https://governmentcio.sharepoint.com/:x:/s/SearchDiscoveryTeam/EZ-iNcv0Ed5IpFwH-nXPPBABWYkKEtDodapIwhXzFSq9hw?e=e4YegI) (<a href="https://user-images.githubusercontent.com/5553542/139923047-9b623905-619d-4b59-bfe3-d8cd7566a897.png">screenshot</a>).


## Analytics

### Interactions on R&S article pages

Google Analytics reports from Jan 1, 2021 – Sept 1, 2021


| <a href="https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20210101&_u.date01=20210901&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22PT%22,%22www.va.gov~2Fresources%22,0%5D%5D&_r.drilldown=analytics.eventLabel:cta-button-click/">CTA*</a>| <a href="https://analytics.google.com/analytics/web/#/report/content-site-search-search-terms/a50123418w177519031p176188361/_u.date00=20210101&_u.date01=20210901&explorer-table.secSegmentId=analytics.searchStartPage&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.searchStartPage%22,%22PT%22,%22www.va.gov~2Fresources~2F%22,0%5D%5D&explorer-table.rowCount=10/">Searches**</a> |  <a href="https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20210101&_u.date01=20210901&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.secSegmentId=analytics.pagePath&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22RE%22,%22Navigation%20-%20Link%20List%20-%20Related%20information%22,0%5D,%5B0,%22analytics.pagePath%22,%22PT%22,%22www.va.gov~2Fresources%22,0%5D%5D/">Related Links</a> | <a href="https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20210101&_u.date01=20210901&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.secSegmentId=analytics.pagePath&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22RE%22,%22Navigation%20-%20Link%20List%20-%20VA%20benefits%22,0%5D,%5B0,%22analytics.pagePath%22,%22PT%22,%22www.va.gov~2Fresources%22,0%5D%5D/">VA Benefits</a> | <a href="https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20210101&_u.date01=20210901&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.secSegmentId=analytics.pagePath&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22RE%22,%22Navigation%20-%20Page%20Content%20Tag%22,0%5D,%5B0,%22analytics.pagePath%22,%22PT%22,%22www.va.gov~2Fresources%22,0%5D%5D/">Tags</a> |
| --- | --- | --- | --- | --- |
| 316,260 Unique Events | 54,265 Unique Searches | 44,732 Unique Events | 16,417 Unique Events | 9,042 Unique Events |
| Percent of Total: 0.06% | -- | Percent of Total: 0.01% | Percent of Total: 0.00% | Percent of Total: 0.00% |

*Of note, all CTAs were converted to links on Sept 2 and later converted to action links on Sept 17. CTA tracking on buttons stops on Sept 1. CTA tracking on action links begins on Sept 17 using <a href="https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20210917&_u.date01=20211101&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22RE%22,%22Action%20Link%20CTA%22,0%5D,%5B0,%22analytics.pagePath%22,%22PT%22,%22va.gov~2Fresources%22,0%5D%5D/">this GA tracking link</a>. 
- <a href="https://github.com/department-of-veterans-affairs/content-build/pull/503">PR: Remove button styling from links, **merged on Sept 2** </a>
- <a href="https://github.com/department-of-veterans-affairs/content-build/pull/560">PR: Update links to action links, **merged on Sept 17**</a>
<br>
**143,143 Unique Searches for all Resources and Support pages


### Sign ins

Google Analytics reports from Jan 1, 2021 – Nov 1, 2021

| <a href="https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20210101&_u.date01=20211101&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22PT%22,%22Login%22,0%5D%5D/">Total Sign ins</a> | <a href="https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20210101&_u.date01=20211101&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.secSegmentId=analytics.pagePath&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22RE%22,%22%5Ewww.va.gov~2Fresources.*%22,0%5D,%5B0,%22analytics.eventAction%22,%22PT%22,%22Login%22,0%5D%5D/">Sign ins from R&S</a> |
| --- | --- |
| 191,168,688 Unique Events | 270,737 Unique Events | 
| Percent of Total: 31.12% | Percent of Total: 0.04% | 

<br>

### "Percent of Profile Events influenced by Resources and Support"

DOMO Dashboard report from Jan 1, 2021 – Nov 1, 2021

This report pulls in a count of all GA events for Profile navigation and changes that occurred after a user came from R&S compared to all users with those events.
<img width="1194" alt="Domo Dashboard screenshot" src="https://user-images.githubusercontent.com/5553542/142003453-aa21a340-1aaf-4f1c-8aa1-32059ebbcb3d.png">


## Mockups - Potential improvements
<details>
  <summary>Current design (click to expand)</summary>
<img src="https://user-images.githubusercontent.com/5553542/139905911-6a5b51d4-cc5a-4af9-831e-9a7fa724ec19.png" width="400">

</details>

<details>
  <summary>Potential designs (click to expand)</summary>
  <br>
  <p>Topics section from the landing page is continued on the article pages as a left navigation section</p>
<img src="https://user-images.githubusercontent.com/5553542/139905973-3e748d18-4bed-40fd-999d-5a370e998b45.png" width="400">
<br> <br> <br>  
  
<p>A minified version of the topics section from the landing page is continued on the article pages at the bottom of the page</p>

<img src="https://user-images.githubusercontent.com/5553542/139906045-2ff3e2b7-77b4-4966-bf9c-e92d8f9e0cb7.png" width="400">
  </td>
</details>

## Issues and recommendations by section



- **CTA**
  - CMS requires that CTAs always appear at the top of the page except for short text templates, CMS should allow editors to place CTA anywhere on the page
  - Action links that do something (example: sign in) should be converted to buttons. (See <a href="https://docs.google.com/presentation/d/1hv7kENiPuXGcZDwQSM5hItnbyXezu4nY9lFksMQpSK4/edit#slide=id.ge89223ffe9_1_21">Josh Kim's buttons vs action links presentation</a>)
  - CMS originally required that the CTA field was required but this will now be an optional requirement
  - [Audit of CTA issues](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/25521)
    - CTAs are not needed on all R&S pages
    - More flexibility is needed on CTA placement for all templates
 

- **Search feature** with radio buttons for R&S and global search

  - CTR on R&S search is currently not being tracked, tracking this will help determine its effectiveness 
  - 38% of R&S searches are on an article page
  - During <a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/discovery-and-research/learning-center-mvp-findings-summary.md">moderated usability study</a>, only half utilized search to navigate while on an article page, the other half of users navigated back to the R&S landing page to utilize the 'Topics' navigation section
    - We should explore continuing the 'Topics' navigation section on article pages
  - Consider removing the search feature from article pages. The search feature is not included on individual pages on Find a Form. The search feature on R&S pushes content down. Input field is not visible on mobile until expanded.

- **Tags**
  - During the moderated usability study, only 3 out of 8 users <a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/discovery-and-research/learning-center-mvp-findings-summary.md">expected tags to be clickable</a>
  - Tags are not heavily utilized by content editors, most pages only contain the tag, 'All Veterans'
  - Explore continuing the 'Topics' section from the R&S landing page instead of Tags
  - Explore ordering 'Topics' by most popular 

- **Rate your experience**
  - Started tracking in June/July, there were 4,181 votes from July 1 – Oct 1, 2021
  - Detracts from 'Related information' links, styling does not match the rest of modern VA.gov which uses Medallia
  - Medallia feedback module is commonly used on modern VA.gov pages
  - Medallia  alllows for additional questions to better understand what users were looking for 
  - Examples of <a href="https://docs.google.com/spreadsheets/d/1gkjignCqZV8qTYentLHvh9sZLy_Cnjj1eGodT6-pPzY/edit#gid=782170026">Medallia questions</a>
    - What other kind of information or service were you looking for today?
    - Did you find what you were looking for today? 
    - How do you rate your experience on this page?
 
- **Related information**
  - Add descriptions, pulled from metadata descriptions to all 'Related Information' links
  - Limit number of links to 3–5

- **VA benefits**
  - This link is usually redundant. Many 'Related Information' links are from benefit hubs. Consider consolidating this section and adding a benefit hub link to 'Related Information' section if needed.

- **Need more help?**
  - Remove grey background as styling is inconsistent with the rest of VA.gov
  
### CMS
 - Develop a workflow for adding new content
    - Create a ticket template with guidance that allows SMEs to create a draft and submit it for approval from the Content Team
    - If possible, allow SMEs draft only access to CMS

## Next steps and future exploration
  - Conduct usability study on proposed updates
  - Create workflow plan with Content Team and CMS Team
  - Work has been done to ensure R&S articles are being indexed on global search but they are still not appearing on the first search results page even when searching for the title of the R&S article. What more can Search.gov do to surface these results?

  - Plans for elevating R&S after reaching 225 articles. Participants in <a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/discovery-and-research/learning-center-mvp-findings-summary.md">the moderated Learning Center (R&S) usability study</a> stated they expected to see R&S *"prominently displayed on the homepage, or somewhere in the site header once it becomes available."*
    - Ensure all benefit hubs (tier 1 content) are linking to relevant R&S articles
  - Possibility of a name change? Participants in the <a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/research/user-research/2021-Aug-research-study/research-findings.md">Search Tool usability study</a> were drawn to the inclusion of the term 'FAQs'. *"Three participants said that they didn't understand what Resources and Support meant and so didn't click on it. The word "FAQs" in the description in the Resources and Support tile is what led to some of them eventually try it."*
