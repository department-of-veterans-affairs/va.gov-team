```diff

@@ WORK IN PROGRESS @@

```

## State of Product: Find a VA Form

### Table of Contents: ###

  * [What is the Problem to be Solved?](#what-is-the-problem-to-be-solved)
  * [Our Bet: Product Name](#our-bet-find-a-va-form)
  * [Goals](#goals)
  * [How Do We Define Success](#how-we-define-success)
  * [Success Metrics](#success-metrics)
  * [Product Requirements](#product-requirements)
  * [Product Analytics](#product-analytics)
  * [Key Workflows](#key-workflows)
  * [Product Enhancements](#product-enhancements)
  * [Key Artifacts](#key-artifacts)
  * [Technical Artifacts](#technical-artifacts)

### What is The Problem to be Solved?

Search research indicates that the VA forms page consistently gets high organic search traffic. However it has almost no or very little conversion value. Because this page already gets high organic traffic and has high potential to provide better conversion:

- We want to redesign experience on this page to the new VA.gov look and feel.
- We want to create new content on this page to drive traffic to top tasks and to the top digital versions of form applications.
- We want to add analytics tracking to all links and downloads.

### Our Bet: Find a VA Form

If we make the VA form search experience more intuitive and user-friendly and provide highly-visible links to relevant content pages and tools, veterans and their care givers will be able to more quickly access PDF forms, online form equivalents, and form-related content.

The Find a VA Form search tool **is**:

 - A tool to help Veterans and their caregivers locate the forms required to apply, or provide data supporting existing applications for Veterans benefits.
 - A tool for finding an online equivalent on a form where one exists.
 - A tool for learning details about a given VA form, along with related forms when applicable
 
The Find a VA Form search is **not**:
- A comprehensive catalog of all VA forms.
- A tool for creating, modifying or deleting VA forms.
- A tool for locating non-VA forms.

**[Include relevant screen shots]**
 :o:

### Goals

## Desired Business Outcomes **
 - Veterans and their caregivers will...
      - Be able to quickly locate VA forms with little or no search refinement
      - Be able to read the details about a form and feel confident that they found the form they were looking for
      - Be able to learn about the VA services and other forms related to the form they are looking for
      - Be aware of and take advantage of online tool when available
      - Have less need to call to the Contact Center for help in locating a VA form

## Undesired Business Outcomes ##
- Veterans and their caregivers will...
     - Encounter 404 (not found) errors when attempting to download a PDF form or access an online tool
     - Abandon their form search after unfruitful attempts
     - Call the Contact Center for assistance in using the Find a VA Form tool
     - Download/complete the wrong form or access the wrong online tool
     
- Outdated/deleted forms will...
     - Continue to be made available in search results on VA.gov


### How We Define Success 

Describe ways that success will be measured, followed by a bulleted list of behaviors that will validate success, along with any instrumentation required to capture those behaviors.
    
 - Veterans and their caregivers will download forms and access online tool equivalents more frequently than before the Find A VA Form Redesign
     - The search tool returns relevant results
     - Links to the PDF forms work correctly
     - Links to online tools, when available, work correctly
 - Describe how pages / objects will need to be instrumented in order to capture behaviors and measure success (1)
 - Describe how pages / objects will need to be instrumented in order to capture behaviors and measure success (2)

### Success Metrics

|Objective  | Key Result |
|--|--|
|Describe objective 1 | Provide one or more result(s) that can be used to validate success -- i.e., X page views will increase by Y%  |
|Describe objective 2  | Provide one or more result(s) that can be used to validate success -- i.e., CTR will increase by Z% |                                                                                    

### Product Requirements
Provide a bulleted outline describing the required features of the product
    
**[Include relevant images, screen designs]**

### Key Workflows ###
* [Adding a new VA form](URL TBD)
* [Publishing, editing or deleting a form details page](form-detail-landing-pages/publish-edit-delete-details-page.md)
* [Removing a form from Find a VA Search](URL TBD)
* [Linking search results to a form detail page](URL TBD)
* [Linking to new online tool form equivalent](URL TBD)

### Product Analytics

   #### Dashboard
   ```diff

@@ To Be Requested @@

```
   #### Custom Reports
   
   _Tip_ Custom Reports can be shared via email on an ad-hoc or scheduled basis.  The report will only include the active tab shown when the report is scheduled.  Saved reports can also be shared via email
 
   _Tip_ - You can save a custom report's parameters (tab active, date range, filters) as a **Saved Report** within _your own_ Google Analytics account by clicking the Save button in the top-right corner of any Custom Report.
   
   ##### Search Landing Page Metrics
   
   |Metric | Report Name | Tab Name | Description | What It Indicates | 
   |--|--|--|--|--|
   |Search Landing Unique page views|Find a VA Form Search Landing Page Metrics|Unique Views/Mo|Description| Longer sessions indicate more time required to locate desired form|
   |Search Landing unique searches|Find a VA Form Search Landing Page Metrics|Unique Searches/Mo|Description|What it indicates|
   |Average Session Duration|Find a VA Form Search Landing Page Metrics|Tab Name|Description|Longer sessions indicate more time required to locate desired form|
  |Metric |Find a VA Form Search Landing Page Metrics | Search Refinements | Description | What It Indicates | 
  |Metric | Find a VA Form Search Landing Page Metrics | Tab Name | Description | What It Indicates | 
  |Metric | Find a VA Form Search Landing Page Metrics | Tab Name | Description | What It Indicates | 
 
   ##### Detail Page Metrics
   
   |Metric | Report Name | Tab Name | Description |
   |--|--|--|--|
   |Search Landing Unique page views|Report Name|Tab Name|Description|
   |Search Landing unique searches|Report Name|Tab Name|Description|
   |Average Session Duration|Report Name|Tab Name|Description|
   
   

### Product Enhancements ###

|Name | Description | Launch Date | GitHub Issue | GitHub Directory|
|--|--|--|--|--|
|Sort by Last Updated Date|Gives users the ability to sort search results by Last Updated date|2021-02-09|#17732|[sort-by-last-updated](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-va-forms-redesign/sort-by-last-updated)|
|Post-MVP Enhancements| Adds link from search results to details pages, adds button to online tool where one exists | Jan 2021|#10758|[post-mvp-launch-enhancements](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-va-forms-redesign/post-launch-mvp-enhancements)|
|--|--|--|--|

### Product Team ###

|Team|Name|Role|Organization|
|--|--|--|--|
|Decision Tools|[John Hashimoto](https://github.com/johnhashva)|Product Owner|USDS/DSVA|
|Decision Tools|[Marci McGuire](https://github.com/MarciMcGuireGCIO)|Product Manager|GCIO|
|Decision Tools|[Zachary Morel](https://github.com/zacharymorel)|Front-End Engineer|GCIO|
|Decision Tools|[Laurel Lawrence](https://github.com/laurellawrence)|Research/Design-Front-End|Ad Hoc|

### Key Artifacts

|Artifacts  | Description |
|--|--|
|[Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-va-forms-redesign/README.md)| Statement of purpose with goals, design intent, etc.| 
|[Product Super Epic]() | Product Development Master Epic for sub-epics|
|[Design & Content Model]()| Design comps with annotated requirements |
|[Product Documentation]()| Product Documentation for Contact Center |



### Technical Artifacts

|Artifacts  | Description | Relevant Team/Stakeholders
|--|--|--|
|[Code Repository](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/va_forms)| Find a VA Form source repo| [Decision Tools Team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/decision-tools)
|[VA Forms API](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/4621) | Documentation for API that indexes data sourced from VA.gov  | Lighthouse
|[GIBCT Data Service (GIDS)](https://github.com/department-of-veterans-affairs/gibct-data-service/blob/master/README.md)| Names of database or other source of data |VA data owner, database manager
|Forms database|VA-maintained repository of VA forms |VA Form Managers, Product Owner|
|Forms in CMS|CMS Form management data (additional metadata appended to Forms database data|VA Form Managers|
|Data Flow Diagram|Shows how forms data and CMS data are accessed and used|VA Form Managers|
