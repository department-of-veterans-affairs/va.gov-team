
## State of Product: Campaign Landing Page MVP

**Table of Contents:**

  * [What is the Problem to be Solved](#what-is-the-problem-to-be-solved)
  * [Our Bet: Campaign Landing Page](#our-bet-campaign-landing-page)
  * [Goals](#goals)
  * [How Do We Define Success](#how-do-we-define-success)
  * [Success Metrics](#success-metrics)
  * [Product Requirements](#product-requirements)
  * [Product Dashboard](#product-dashboard)
  * [Key Artifacts](#key-artifacts)

### What is the Problem to be Solved

Many benefit-adjacent Tier 2 content are not support/learning/help, or evergreen office (administrative) content. Some Tier 2 content is more similar to marketing or engagement content.

 - It may also have audiences other than Veterans (for example: local governments, Congress, VSOs, medical researchers).
 - It may also be time-based -- a particular campaign (#BeThere) or a new legislation (MISSION Act).

This category of tier 2 content could be better served as a **campaign landing page**. Examples of recent VA marketing initiatives that resulted in requests for Web support at VA.gov:

 - Veterans wear your mask campaign
 - Veterans get your flu shot campaign
 - VHA moving forward -- phased re-openings -- covid-19 campaign
 - VHA Covid 19 research recruitment campaign

![enter image description here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/images/CLP_Examples.png)

### Our Bet: Campaign Landing Page

The purpose of this product is to enable an easy way for VA businesses to create and manage this type of content in the Drupal CMS leveraging current and new features/functionality.

The CLP **is**:

 - 1-page that links to deeper content which the already exists in the benefit hubs, in videos on YouTube, at separate VA domains (such as publichealth.va.gov), at other VA online destinations (e.g. blogs, PDF factsheets, outreach library).  
 - It is created and maintained by VA business stakeholders at VHA, VBA and other groups, with the hands on production expected to be done by their Web leads (e.g. Webmaster or Web Communications lead).

The CLP is **not**:

 - A self-contained micro-site with original content, sub-pages, its own navigation  
 - A sub-domain (e.g. movingforward.va.gov)

![enter image description here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/images/CLP_Design.png)

### Goals

**Desired Business Outcomes**
 - There is strong demand for campaign landing pages from key business stakeholders involved in originating veteran facing content. A plug-and-play Drupal CMS page building product will allow us to meet this demand with a "scaled" solution.
 - Additionally a page building tool, put in the hands of trained business stakeholders, will reduce "one-off" demand of the resource-constrained Public Websites content and front-end development team.
- With this problem solved, ***the business would be able to produce more expertly crafted campaign landing page (with built-in Mobile-responsiveness and SEO optimization) at less cost and impact to the product-technology team.***

**Undesired Business Outcomes**
- Feature creep.  Our goal is to build the Campaign Landing product in smart stages, with the minimum viable number of components necessary to "launch and learn” with at least two VA stakeholder groups/users and from there, iterate.


### How Do We Define Success 

We will know the initial set of functionality is meeting the desired user and business outcomes when the CLP template is used by  at least three business stakeholders -- and there are no requests for major changes. This would validate the following:
    
 - the capabilities of the CLP template (the various content components) meet the minimum needs of the business stakeholders
 - the CMS functionality of the template builder is bug-free and user/author-friendly
 - the user permissions allow for guard-railing/governance by DEPO (the Public Websites Product leads)
 - the Campaign Landing Page supports the success metrics for traffic/reach as outlined by the business stakeholders
-   To measure the effectiveness of the CLP for campaign purposes, we will require the use of CTAs that would be prominently required and automatically tracked as a primary metric (e.g. whatever campaign X's success measure is, at least one required CTA button would be required that would automatically be tracked by analytics).
-   Every content component/panel in the template - whether it is the video panel or the downloadable resources panel - should be automatically tracked. Instrumenting this auto-tracking capability into the CMS front-end template will not only ensure the ability to track CLP performance but also will be used as a lever to govern the business users of the template.

### Success Metrics

|Objective  | Key Result |
|--|--|
|Enable VA businesses to build effective digital campaign communications quickly and easily | CLP is used by at least three VA businesses to launch live campaigns in 2021  |
|Campaigns built with CLP must support traffic/reach/usage goals of VA business users  | CTRs from Campaign Landing page "calls to action" must be 2% or greater |
|                                                                                      | Page views must exceed campaign goals by 10%   |


### Product Requirements

The Campaign Landing page is at root a page builder in the Drupal CMS with content components -- called "panels" -- that represent content types/features.    To support editorial flexibility, some of the content panels are optional.

The template requirements are:

-   It must allow 2 versions - image/visually rich vs. no images
-   It must contain rigid locations for primary and secondary CTAs
-   It must include links to related benefit hub content
-   It must identify who the content is for and a summary (or tl;dr) section
-   It must include the following optional content blocks that authors can include or omit, as needed:
    -   section for video
    -   section for downloadable PDF resources
    -   section for stories (blog articles, announcements)
    -   section for events
    -   section for social media and other contact info
    -   section for FAQs
    -   these sections can be 1/0 (included/excluded) but not moved around or relocated on the template
    
![enter image description here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/images/CLP_Content%20Panels_CMS.png)


### Product Dashboard

- Google Analytics
- Domo

### Key Artifacts

|Artifacts  | Description |
|--|--|
|[Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/README.md)| Statement of purpose with goals, design intent, etc.| 
|[Product Super Epic](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/4621) | Product Development Master Epic for sub-epics|
|[Design & Content Model](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/content-requirements-spec/CLP-Maximal-markup-updated-060320.pdf)| Design comps with annotated requirements |
