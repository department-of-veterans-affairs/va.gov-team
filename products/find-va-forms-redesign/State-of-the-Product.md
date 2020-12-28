```diff

@@ WORK IN PROGRESS @@

```

## State of Product: Find a VA Form

**Table of Contents:**

  * [What is the Problem to be Solved?](#what-is-the-problem-to-be-solved)
  * [Our Bet: Product Name](#our-bet-find-a-va-form)
  * [Goals](#goals)
  * [How Do We Define Success](#how-we-define-success)
  * [Success Metrics](#success-metrics)
  * [Product Requirements](#product-requirements)
  * [Product Dashboard](#product-dashboard)
  * [Key Product Enhancements](#key-product-enhancements)
  * [Key Artifacts](#key-artifacts)
  * [Technical Artifacts](#technical-artifacts)

### What is The Problem to be Solved?

Search research indicates that the VA forms page consistently gets high organic search traffic. However it has almost no or very little conversion value. Because this page already gets high organic traffic and has high potential to provide better conversion:

- We want to redesign experience on this page to the new VA.gov look and feel.
- We want to create new content on this page to drive traffic to top tasks and to the top digital versions of form applications.
- We want to add analytics tracking to all links and downloads.

### Our Bet: Find a VA Form

Describe the bet related to this product (what we anticipate will happen as a result of an initiative to create or improve a product. 

The Find a VA Form search tool **is**:

 - A tool to help Veterans and their caregivers locate the forms required to apply, or to provide data supporting existing applications for Veterans benefits.
 - A tool for finding an online equivalent on a form where one exists.
 
The Find a VA Form search is **not**:
- A comprehensive catalog of VA forms.
- A tool for creating, modifying or deleting VA forms.
- A tool for locating non-VA forms.

**[Include relevant screen shots]**

### Goals

**Desired Business Outcomes**
 - Describe business outcomes that should result from the creation or improvement of this product.

**Undesired Business Outcomes**
- Describe undesirable business outcomes that are to be avoided during the implementation of this product.

### How We Define Success 

Describe ways that success will be measured, followed by a bulleted list of behaviors that will validate success, along with any instrumentation required to capture those behaviors.
    
 - Describe behavior that will demonstrate successful adoption of the product
 - Describe what the above behavior validates (1)
 - Describe what the above behavior validates (2)
 - Describe what the above behavior validates (3)
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

### Product Dashboard

- Google Analytics - new experience
- Google Analytics - historic data (pre-redesign)
- Link to Domo dashboard

### Key Product Enhancements ###

|Description | Launch Date | GitHub Issue | GitHub Directory|
|--|--|--|--|
|Post-MVP Enhancements|Jan 2021|[Epic 10758](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10758)|[post-mvp-launch-enhancements](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-va-forms-redesign/post-launch-mvp-enhancements)|

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
|[Product Super Epic](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/4621) | Product Development Master Epic for sub-epics|
|[Design & Content Model](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/content-requirements-spec/CLP-Maximal-markup-updated-060320.pdf)| Design comps with annotated requirements |

### Technical Artifacts

|Artifacts  | Description | Relevant Team/Stakeholders
|--|--|--|
|[Code Repository](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/va_forms)| Find a VA Form source repo| [Decision Tools Team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/decision-tools)
|[VA Forms API](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/4621) | Documentation for API that indexes data sourced from VA.gov  | Lighthouse
|[GIBCT Data Service (GIDS)](https://github.com/department-of-veterans-affairs/gibct-data-service/blob/master/README.md)| Names of database or other source of data |VA data owner, database manager
