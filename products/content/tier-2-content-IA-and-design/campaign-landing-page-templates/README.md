
# Campaign landing page template MVP 1.0 - product outline

Campaign landing page template rolls up to the larger 2020 PW initiatives to build out [tier 2 content templates](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/tier-2-content-IA-and-design).

## Problem statement
Many benefit-adjacent tier 2 content are not support/learning/help, product, or evergreen office (administrative) content. Some tier 2 content are more similar to marketing or engagement content.

- It may also have audiences other than Veterans (for example: local governments, Congress, VSOs, medical researchers).
- It may also be time based in nature, like a particular campaign (#BeThere) or a new legislation change (MISSION Act).
- This category of tier 2 content could be better served as a campaign landing page.

Examples of recent VA marketing initiatives that resulted in requests for Web support at VA.gov:

- Veterans wear your mask campaign
- Veterans get your flu shot campaign
- VHA moving forward -- phased re-openings -- covid-19 campaign
- VHA covid 19 research recruitment campaign


## Purpose

The purpose of this template is to enable an easy way for VA businesses to create and manage this type of content in campaign landing page template in the new CMS, Drupal.   

The CLP is:
- 1-page that links to deeper content which the already exists in the benefit hubs, in videos on YouTube, at separate VA domains (such as publichealth.va.gov), at other VA online destinations (e.g. blogs, PDF factsheets, outreach library).
- It is created and maintained by VA business stakeholders at VHA, VBA and other groups, with the hands on production expected to be done by their Web leads (e.g. Webmaster or Web Communications person).

The CLP isn't:
- A self-contained micro-site with original content, sub-pages, its own navigation
- A sub-domain

## Desired User Outcomes

- The primary user(s) of this template -- and CMS functionality -- are the VA businesses (e.g. VBA Digital Strategy Team) 
- The problem this would solve is to address the demand from the business for a way to more easily, quickly and cost-effectively create a "landing page" destination that supports thematic marketing, public-relations campaigns and initiatives AND/OR to promote [new veteran programs (e.g. Mental Health Awareness Month, PTSD Awareness Month).](https://www.va.gov/QUALITYOFCARE/education/monthly-campaigns.asp)

## Undesired User Outcomes

- Guardrails (user permission settings) need to be instrumented as part of the solution to ensure "rigidity" in both the use of the template as well as the UI layout.   Too much flexibilty will potentially result in (a) over/mis-use of the template and/or (b) layout or content issues that could make the experience sub-optimal for our veteran audience.

## Desired Business Outcomes

- There is strong demand for campaign landing pages from key business stakeholders involved in originating veteran facing content.   A plug-and-play Drupal CMS template will allow us to meet this demand with a "scaled" solution.   Additionally a template, put in the hands of trained business stakeholders, will reduce "one-off" demand of the resource-constrained PW content and front-end development team.

- With this problem solved, the business would be able to produce more expertly crafted campaign landing pages (with built-in SEO optimization) at less cost and impact to the product-technology team.

## Undesired Business Outcomes

- We want to avoid scope/feature creep.  Our goal is to build the Campaign Landing page in smart stages, with the minimum viable number of components necessary to "launch and learn" and from there iterate.

---
## Objectives and Key Results (OKRs) and Key Performance Indicators (KPIs)

### KPIs
- We will know the initial set of functionality is meeting the desired user and business outcomes when the CLP template is used by (or via the PW content team on behalf of) at least three business stakeholders -- and there are no requests for major changes.  This would validate the following:
  - the capabilities of the CLP template (the various content components) meet the minimum needs of the business stakeholders  
  - the CMS functionality of the template builder is bug-free and user/author-friendly
  - the user permissions allow for guard-railing/governance by DEPO (the Public Websites Product leads)
  - the Campaign Landing Page supports the success metrics for traffic/reach as outlined by the business stakeholders
  
- To measure the effectiveness of the CLP for campaign purposes, we will require the use of CTAs that would be prominently required and automatically tracked as a primary metric (e.g. whatever campaign X's success measure is, at least one required CTA button would be required that would automatically be tracked by analytics).

- Every content component/panel in the template - whether it is the video panel or the downloadable resources panel - should be automatically tracked.  Instrumenting this auto-tracking capability into the CMS front-end template will not only ensure the ability to track CLP performance but also will be used as a lever to govern the business users of the template.

#### Baseline KPI Values
- ensure that all campaigns that VA creates have these minimum values for DEPO:
  - the CLP is driving users to benefit pages or tools
  - the CLP is forcing a primary CTA (e.g., campaign KPI that's other than 'page visits' which is what most VA engagement pages/subdomains measure)
  - the CLP is instrumented so that every interaction on the page is tracked whether it is the optional secondary CTA, or downloads, video plays, or clicks to more info/deeper content.

### OKRs
- [OKR/KPI Dashboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/Screen%20Shot%202021-01-08%20at%201.47.16%20PM.png)
---

## Assumptions
- There is a minimum number of content components (perhaps 5 our of 8) needed to validate our hypothesis that a Campaign Landing Page template will adequately address the need of most business stakeholders 
- The new content components/capabilities created for the CLP will be re-usable for other content needs -- e.g. the new [Learning Center](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/product-outline.md), etc.

### The template requirements are:
- It must allow 2 versions - image/visually rich vs. no images
- It must contain rigid locations for primary and secondary CTAs
- It must include links to related benefit hub content
- It must identify who the content is for and a summary (or tl;dr) section
- It must include the following optional content blocks that authors can include or omit, as needed:
    - section for video
    - section for downloadable PDF resources
    - section for stories (blog articles, announcements)
    - section for events
    - section for social media and other contact info
    - section for FAQs
    - these sections can be 1/0 (included/excluded) but not moved around or relocated on the template

CLP design epic: https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/4621

Template content requirements markup: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/campaign-lp-content-requirements-022420.pdf

Latest Sketch files: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/design-wip

Historical: Invision link (v 0.1) https://vsateams.invisionapp.com/share/PHUPD25QV9J#/screens


## MVP features

### Scope
- adhering to sunset criteria

### What's included
- CLP governance
  - IA, urls
  - Primary CTA
- Default analytics  

### What's not included
- CLP governance
  - tbd
  


## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/Summary%20of%20Release%20Plan%20Steps%20-%20CLP%20MVP%201.0.md)

Strategy to be drafted here based on https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/content-requirements-spec/content_business_rules.md

## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd
- *What date will you reflect on success/lessons learned after launch?*
  - 

## CMS Team Discovery (Links)
- [Proof of concept for editorial experience and content model here.](http://pr2251.ci.cms.va.gov/node/add/campaign_landing_page) You can log in as u:kevin.walsh / p:drupal8 to see this. (THIS HAS BEEN REMOVED FROM CMS)
- [Screenshots of CMS based on rough POC build](https://app.mural.co/t/vagov6717/m/vagov6717/1591838049193/415eaeb7a88bc0210575dbea9038f542d193d865)
- [Backlog](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/issues/department-of-veterans-affairs/va.gov-cms/1475) created here, ready for grooming/estimating by team (note: more accurate than our original high level product estimates provided a couple weeks ago, and  be believe lower!).
- [Discovery Mural with screenshots from POC](https://app.mural.co/t/vagov6717/m/vagov6717/1591838049193/415eaeb7a88bc0210575dbea9038f542d193d865) Screenshots added for further clarification of requirements, which would be next steps.


---

### Status & Decisions
- A running tally of project status and decisions is [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/campaign-landing-page-templates/status/status_decisions.md)

.
