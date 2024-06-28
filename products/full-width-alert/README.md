## Full Width Alert README

Full width alerts are Banners are fixed content at the top of any page within VA.gov, used for dismissible announcements such as new tools, news, natural disasters, incidents in progress, etc. 

They are managed within the Drupal CMS.

## Governance
Owner: Public Websites team
PO: Michelle Middaugh

* Content is governed by the Sitewide Content team. 
* Usage is governed by the Public Websites team.
* OPIA governs any full width alert published to the VA.gov homepage.


## Publishing
Publishing/updating a full width alert triggers a Drupal content release, which publishes the content / alert to VA.gov

Full width alerts can appear on any page in VA.gov, by PATH. 
This includes pages that are React apps.
* at build time, js on every page looks up whether there is an alert to present for that page, and if so, includes the banner markup as part of the HTML output
* Banners are outside the div that vets-website application gets mounted in, and are not part of the React application

 Extensive Slack thread with more information: https://dsva.slack.com/archives/CT4GZBM8F/p1701286965295299?thread_ts=1701281219.862839&cid=CT4GZBM8F

 
## Usage
Currently, www.va.gov supports two types of Full Width Alerts:
1. **Informational alerts,** which are used to provide helpful information to a user or something that warrants attention. Not used for negative consequences.
2. **Warning alerts,** which are used to warn a user, such as when there are negative consequences, but necessary when something has gone wrong.

You can read more about these alert types in the [VA Design System](https://design.va.gov/components/alert) or read more about Full Width Alerts in the (opens in a new window).


**Example content:**
* CMS: 
  * [https://staging.cms.va.gov/banner/covid-19-vaccines-at-va](https://staging.cms.va.gov/banner/covid-19-vaccines-at-va)  
  * OPIA standing banner: [https://staging.cms.va.gov/node/33217/edit](https://staging.cms.va.gov/node/33217/edit) 


## How to initiate and implement a banner

### For system outages or DSLogon problems

Originate with DSVA.

1. Join and post in [#sitewide-public-websites](https://app.slack.com/client/T03FECE8V/C52CL1PKQ) that you need a banner. Mention @Dave Conlon. Please specify: 
  * Any mandatory timing
  * Which pages the alert should appear on
  * If you have baseline content you can provide
2. @Dave Conlon will create an issue and make the Sitewide Content team aware. 
3. Sitewide Content will draft content based on your specific banner needs.
4. Once the content is approved, Public Websites team will put the banner up in staging review.
5. After the banner has been reviewed, the alert can be published, and will be live on VA.gov after the next content release.
6. Communicate when the banner needs be taken down. Keep in mind the deploy schedule and plan accordingly. Alerts should default to stay published for no longer than 7 days.


### For natural disasters, goverment shutdowns, and other emergency banners

Originate with OPIA.

1. For these exceptionally time-sensitive/urgent messages, OPIA will publish directly to Drupal. 
2. The content team may also coordinate with OPIA with suggestions for plain language improvements or edits that bring the text in line with our site style, voice, and tone. It's at Josh's discretion to accept or reject these suggestions. When they email Josh, they should cc Chris Johnston and Dave Conlon. 

## Previous initiatives
All found within /products/full-width-alerts/initiatives
* 2021 - homepage banners
* 2019 - banner docs
* 2018 - natural disaster banners
