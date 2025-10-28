## Problem Statement and Overview
In the current content publishing framework, all content is published to VA.gov using static site generators, where the systems export all CMS-generated HTML for each page type and deploy it to S3 buckets. This process runs continuously on a cycle during VA business hours (8:00 a.m. – 8:00 p.m. EST, Monday through Friday). Because content is published in bulk regardless of whether it has changed, this approach limits how quickly updates from the CMS can appear on VA.gov. This issue is further compounded as more content is created in the CMS. 

When asked about their experience using Drupal CMS, editors are asking for faster and more consistent publishing times, so that they can know when to reliably expect their content to go live on VA.gov and ensure the content is published as expected. Predictability is as important as speed; editors need to know exactly when their content will be published. 

To address the slow publishing problem, the CMS team is implementing a Next.js server that will publish content on demand. When content is added or updated in Drupal CMS, the Next.js server will automatically publish the changes within five minutes or less. On demand publishing will allow content to be published both faster and more predictably, and will better scale as more content is added to the system.

## Desired User Outcomes
1. The time between when an editor publishes new or updated content in the CMS and when those changes appear on VA.gov should be significantly reduced. Our goal is to average under 5 minutes, with an ideal target of near real-time publishing.
2. As much as possible, the publishing time should be consistent and predictable for editors. Editors should be able to trust that their content will always be published after a certain amount of time.
3. VA.gov itself must be stable to the public. There should be no outages for public use of VA.gov. 

## Undesired User Outcomes
1. Faster publishing times comes at the expense of page load times or uptime for VA.gov.
2. Faster  publishing times are inconsistent and difficult for editors to predict when their content will be published to VA.gov. 

## Desired Business Outcomes
1. Faster publishing times are built on a modern infrastructure that scales with the increase of content being added to Drupal CMS.
2. Faster publishing times are built on a modern infrastructure that is future-proofed and commonly by used by engineers. 

## Undesired Business Outcomes
1. Faster publishing times are built on an infrastructure that does not scale as new content continues to be added to Drupal CMS.
2. Faster publishing times created undo burden on VA engineers who have to continue to maintain the new infrastructure. 

## Key Performance Indicators (KPIs)
1. Time to publish content is in 5 minutes or less
2. Editor satisfaction score increases
3. Decrease in failures when publishing content 

## Objectives and Key results (OKRs)
Objective: Implement the on demand feature to enable “fast publishing” for Next Build, where content gets published in 5 minutes or less.
1. Key result 1: all pages on VA.gov published through Next Build are published in 5 minutes or less.
2. Key result 2: editor satisfaction with Drupal CMS increases by 20%.

## Assumptions
Our solution to improve publishing speed will not create unintended consequences for the veteran experience or create added burden on VA.gov platform teams. 

## Solution Approach
You can read through [this report](https://dvagov.sharepoint.com/:w:/r/sites/CMSTeam/Shared%20Documents/Static%20Site%20Generation%20Summary%20and%20Recommendation.docx?d=w98220445f4ca467c834cde562b977d3c&csf=1&web=1&e=WZTeUn) to get a full explanation of alternative solutions we explored and how we decided upon using a Next.js server to implement on demand publishing and solve the slow publishing problem. 

## Supporting research
1. [Quarterly editor survey reports](https://dvagov.sharepoint.com/sites/CMSTeam/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FCMSTeam%2FShared%20Documents%2FGeneral%2FUX%20Research%2FDrupal%20Editorial%20Quarterly%20Feedback%20Survey%2FMonthly%20Data%20Report&viewid=e29c78b4%2D4edd%2D4db3%2D8cbe%2Dd6854eff5740&web=1&FolderCTID=0x0120009F22CB820DBD4444A963BD78D7089AFA)

## Initiatives
[On Demand Publishing Initiative](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/20202) 

## Launch Strategy
For the rollout, we will begin with a pilot launch, where the team will launch a small subset of pages published through Drupal to confirm that On Demand Publishing is working as expected, while minimizing any impact to Veterans if there are any problems. The scope of the pilot will be VA Tampa system’s Story and Story Listing Pages (Stories | VA Tampa health care | Veterans Affairs) because these pages have low engagement (22,698 views / 0.2% of total VAMC page views), do not contain critical information to veterans, but the content on these pages are regularly updated. 
The CMS team will be coordinating with both platform support and watchtower, as teams to alert CMS if there are any issues during the pilot.
After the pilot, the CMS team will continue to iterate and expand the scope of pages being served through the Next.js server. 

## Launch Dates
We have not determined a specific date for launch yet. We are aiming for sometime in Q4 2025 for the pilot launch. 

## Communications
Team Name: Platform CMS
GitHub Label: CMS Team
Slack channel: #platform-cms-team

## Team Members
DEPO Lead: Erika Washburn
PM: Grace Kretschmer Tran
Engineering: Tim Cosgrove and Jeff Keene
Research/Design: Sofia Kirkman
