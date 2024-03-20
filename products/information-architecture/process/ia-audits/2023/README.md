# 2023 audit summary

### Focus of the audit

The audit included reviews of of the following aspects for every page included in the left nav of the 9 core Veteran benefit hubs.  
- URL accuracy, consistency, and compliance to standards
- Link labels in the top nav, left nav, hub page for consistency and accuracy
- Breadcrumb accuracy
- Hub page link inclusion and order
- Left nav link inclusion and order


Hub | Pages reviewed* | Pages needing corrections 
--- | --- | ---
Health care | 67 | 17
Disability | 62 | 27
Education | 98 | 54
Careers | 30 | 23
Pension | 31 | 9
Housing | 26 | 17
Life insurance | 34 | 3
Burials | 33 | 7
Records |  11 | 3 
**Total** | **392** | **160**

*Some hubs included legacy content pages, some pages may be double counted if tracked in multiple hubs. 


## Top issues found

1. Key navigation and link labels (i.e. breadcrumbs, left nav, top nav, hub pages, etc) have become out of sync with the H1s of pages
    - Drupal currently matches the current page segment in the breadcrumb to link label used in the left nav, but the left nav is often a shortened version of the H1, which can ultimately reduce clarity in understanding where you are in the site.  A ticket has been submitted to the CMS team to correct the existing breadcrumb logic so each segment accurately matches the H1 of the corresponding page.
    - A few labels used in the top nav and left nav have become out of sync with the H1 of the corresponding landing page due to evolutions in content.  

2. Benefit hub landing pages had missing, or out of order links
    - The links on the hub page within the spoke sections did not match the order of the links within the left nav.
    - There were a few instances where a link to a newer page was missing from either the hub page or left nav.

3. Repetitive words or inconsistent labels within navigation elements
    - In some instances, a label used for the name of a benefit or task was not consistent between the H1, the left nav, or a hub page link.  An example of this is when there are program abbreviations used or additional descriptors of a benefit or program (i.e. Chapter 31).
    - Initial launch of the modernized pages on VA.gov focused heavily on SEO in order to quickly build search value and visibility.  That included using additional words or phrases to hit on key search terms. One example was the use of "VA" in titles, which was then repeated in navigation components.  
    
4. Inconsistencies where common patterns should be in place
    - In some areas where there is a common pattern or set of pages, there was inconsistent organization or labeling.  Example of this include how we organized and crosslinked between historical rates pages, as well as how we label links into application pages/flows.

5. Some URLs were not meeting standards
    - We still have some pages and tools that were migrated from Vets.gov that do not have modernized URLs that meet our standards or reflect their accurate structure.
    - Some page URLs have become slightly out of sync with the H1s of the page as the page has evolved.

6. Standards around some topics were either not clear or had not been created 
    - Many standards and documention gaps were identified
      - Usage of "On this page" component
      - Use of form number in link labels and page titles
      - Hub page guidance for link inclusion and order
      - Use of "VA" in page titles - when it is needed and when it is not
      - Labels used for application entry points (i.e. Apply now, Apply online, etc)
      - Guidance for determining labels for left nav


## Recommendations and next steps

High priority
- [ ] Make edits as indicated in each audit.
- [x] Submit ticket to CMS team to correct the existing breadcrumb logic so each segment accurately matches the H1 of the corresponding page.
- [ ] Work with product teams that have incorrect URL structures on their forms or tools to get them updated to meet standards. 
    - This should start with identifying which URLs need to be updated and developing a communication plan
    - will also test this process with Pension team to identity impacts and options to approach this work
- [ ] Have initial conversation with Public Websites and potentially CMS team on feasibility of creating an data pull of all the data/content we want to review or just those that have issues, submit ticket if possible for them to prioritize

Medium priority
- [ ] Refine CAIA processes to address navigation component and hub page updates when pages are launched, H1s are changed, or pages are archived - i.e. if a H1 is modified, an IA is looped in to evaluate navigation and entry points
- [ ] Document new standards and guidance identified as needed and work with Design System team to add them to the VA design system.
    - Establish guidance/rubric to define what links should appear on the hub page in each secton - i.e. top page views, frequency of use 
    - Usage of "On this page" component
    - Use of form number in link labels and page titles
    - Hub page guidance for link inclusion and order
    - Use of "VA" in page titles - when it is needed and when it is not
    - Labels used for application entry points (i.e. Apply now, Apply online, etc)
    - Guidance for determining labels for left nav

Low priority
- [ ] Export the spreadsheets from Google to Excel and upload them to GH, possibly as one spreadsheet
- [ ] Remove the "On this page" component from the audit - we will work to get set standards for when to include, and content can review separately
- [ ] Update audit process documentation
    - Write better notes next year so we understand them when we return to do the work
    - Create a global decisions log, possibly within the audit spreadsheet
    - Continue to have meetings with SMEs (Mikki/Beth) together
    - Look at setting tighter parameters up front for the audit to empower auditors to make decisions and decrease reviews needed (i.e. we are not changing URLs this round, only documenting changes needed)



