## VA.gov Banner-Alert Rubric for Prioritization
This hierarchy applies when more than one of these types of events occur simultaneously. We know this weighting may not always feel right, but believe this should cover must use cases, and we want to get out of using subjective judgement one case at a time, every time. 

There can be only a maximum of one (1) type each - this means sometimes, there might be up to 3 banners at the top of the page (see example below) - always in this order of display:

Rubric for display hierarchy remains: A) Emergency banner, B) Sitewide downtime banner, C) Veteran action needed banner D) Promo banner

|**Priority Hierarchy**              |**Banner Type**           | **Banner Visual Example**.        | **Appears On** | **Implimentation Point** |
|-----------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|
|A - Tier 1    |Emergency banner (always first - these do not have a specific expiration date)  | <img width="796" alt="Screen Shot 2021-06-08 at 10 01 35 AM" src="https://user-images.githubusercontent.com/70410912/121225870-30afe880-c847-11eb-8938-1d8f4b665c31.png"> |Homepage  |[banner.yml](https://github.com/department-of-veterans-affairs/vagov-content/blob/main/fragments/home/banner.yml) |
|B - Tier 2    |System maintanence banner |<img width="794" alt="Screen Shot 2021-06-08 at 10 01 16 AM" src="https://user-images.githubusercontent.com/70410912/121225937-3f969b00-c847-11eb-8420-a9355438428b.png">  |Homepage + Subpages (other pages) |[maintenance banner.js](https://github.com/department-of-veterans-affairs/vets-website/blob/96da57c412d3bd[…]bf49/src/platform/site-wide/banners/config/maintenanceBanner.js) |
|C - Tier 3    |Veteran action needed | ![Screen Shot 2021-06-08 at 11 31 41 AM](https://user-images.githubusercontent.com/70410912/121231116-40cac680-c84d-11eb-9029-e1f4b5967aab.png) |Subpages (other pages) | Drupal |
|D - Tier 4    |Promo "Sticky" Banner  | <img width="795" alt="Screen Shot 2021-06-08 at 10 01 27 AM" src="https://user-images.githubusercontent.com/70410912/121226026-56d58880-c847-11eb-9929-4aa4654d5248.png"> |Homepage + Subpages (other pages) |[Promo.js](https://github.com/department-of-veterans-affairs/vets-website/blob/43871dd96966ddd7b708a49c7756c7f1ab13419b/src/platform/site-wide/announcements/config/index.js) |
|E - Tier 5    |Multiple Banners | <img width="794" alt="Screen Shot 2021-06-08 at 10 00 54 AM" src="https://user-images.githubusercontent.com/70410912/121226352-b0d64e00-c847-11eb-9719-69a5d86d42cf.png"> |Homepage + Subpages (other pages) | N/A |

[Design Component Quick Link](https://design.va.gov/components/alertboxes#full-width-alerts)

[Reference Public Website Team - Banner Intake Request Form](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=Public+Websites%2C+brianalloyd&labels=vsa-public-websites%2C+vsa%2C+vsa-public-websites-intake%2C+needs-grooming&template=banner-intake-request.md&title=%3CType+of+Request%3E+from+%3CTeam%3E)

## Emergency banner alert:

This type of banner is to be used only for emergency communications -- e.g., natural disasters affecting services such as hurricanes, wild fires; major events such as government shutdowns, mass shootings, and other major events affecting services. 

OPIA has direct access to publish these in real time via GitHub. These cannot be pushed to lower level pages via OPIA. 

- Ability to publish: OPIA, DEPO, VISNs, and VAMCs. 
- OPIA can publish on VA.gov homepage via Drupal.  Does not require platform deployment.
  - Typically Josh Tushcher  or Gary Hicks, via YAML/GitHub
  - Requires PR review by FE engineer -- must be approved within 15m
  - Use Cases: Natural Disasters, Operational emergencies, Fed Gov shutdown
  - OPIA has templated content, but do not typically use
  - Public Websites must ask permission to fix mistakes (typos, broken links)
  - Can include dismissable function (this is an option in the template) -- up to OPIA
- VISNs can publish across all VAMC pages.
- VAMCs can publish on their VAMC pages only. 
- 300 character count limit including spaces; allow links; needs to be configurable as dismissable per cookie or per session. 

__Note:__ At DEPO discretion the same banner message can be published on lower level VA.gov nodes via the CMS. The Drupal driven message can be configured for all or specific nodes and can be configured to be dismissable once or every session. 

## Information need to impliment properly on VA.gov
#### Emergency Banner Alert - Home Page Banner 
  **Required Details:**
  - `startsAt`: [What is the exact time we should show it? (Remember to include the timezone) e.g. '2020-06-09T14:00:00.014Z' or 'Immediately']
  - `expiresAt`: [What is the exact time we should stop showing it? e.g. 24 hours AFTER it starts showing]
  - `title`: [What will the title of the homepage banner be?]
  - `content`: [What will the content of the homepage banner be? Feel free to use HTML if desired.]

## Sitewide system maintenance banner alert (i.e., "downtimes")

This is a new type of banner to be used for communicating system downtimes that affect all services or tools sitewide across VA.gov. 

- The header text for sitewide system maintenance banner will always be: __System maintenance__
- The body text will be standardized text for 1) advance notice 2) and during downtime. 
- The banner will automatically go away after the downtime window.
- The sitewide system maintenance banner should be configured to appear sitewide across all VA.gov pages (minus medical center products).
- Message must have a specifiec expiration date and must disappear automatically on expiry. 

__Design notes:__
1. The icon runs inline with the type to help utilize space
2. No more header type treatment, simply bold type, separated by an em dash
3. On mobile, the blue banner is half the height it is on desktop

## Information need to impliment properly on VA.gov
#### Sitewide System Maintenance Banner Alert
  **Required Details:**
  - `startsAt`: [What is the exact time we should show it? (Remember to include the timezone) e.g. '2020-06-09T14:00:00.014Z']
  - `expiresAt`: [What is the exact time we should stop showing it? e.g. 24 hours AFTER it starts showing]
  - `title`: [What is the title? _Default_: 'Site maintenance']
  - `content`: [What is the content? _Default_: "We’re working on VA.gov right now. If you have trouble signing in or using tools, check back after we're finished. Thank you for your patience."]
  __Optional Details:__
  - `warning startsAt`: [Do you want to show a warning before the downtime happens? If so, how much time before we show the maintenance banner should we show the warning? e.g. 12 hours BEFORE it starts showing]
  - `warning title`: [What should the warning title be? _Default_: 'Upcoming site maintenance']
  - `warning content`: [What should the warning content be? _Default_: 'We’ll be doing some work on VA.gov. The maintenance will last x hours. During that time, you won’t be able to sign in or use tools.']


## Important action-needed, Veteran-facing alert banner

This type of message uses the design of the sitewide system maintenance banner alert. It is to be used for Veteran-facing, time-sensitive, important information that __requires a Veteran to take an action__ by X date. 

**Note: Can't show on homepage, only other pages templates** 

- EX: How to file before the May 5 deadline to get your coronavirus stiumulus check.  

It's not an "emergency" and it's not a "system maintenance," but it warrants more urgent communication and visibility than a promo announcement (ex: about Veteran's Day or about a new legislative or news announcement that has no specific actionable step for Veterans). 

__Note 1:__ OPIA should have direct access to publish this type of Veteran-facing actionable content banner in real time [via GitHub or Drupal - TBD?]. These cannot be pushed to lower level pages by OPIA. 

__Note 2:__ At DEPO discretion, the same banner message can be published on lower level VA.gov nodes via the CMS. The Drupal driven message should be publishable for all or specific nodes. 

__Note 3:__ DEPO global ux content admin should have the ability to publish this type of banner via the CMS, on all or specific nodes, including the homepage. [TBD/TBC Drupal permissions capability]

- The header text for this type of banner should be customizable with a limit of 50 characters with spaces.
- The body text will be customizable with a limit of ~200~ 300 characters with spaces.
- This message banner should be configurable with an expiration date.
- Message must have a specifiec expiration date and must disappear automatically on expiry. 

__Design notes:__
1. The icon runs inline with the type to help utilize space
2. No more header type treatment, simply bold type, separated by an em dash
3. On mobile, the ~blue~ yellow banner is half the height it is on desktop

## Information need to impliment properly on VA.gov
#### Important Action-Needed, Veteran-facing alert banner
  **Required Details:**
  - `startsAt`: [What is the exact time we should show it? (Remember to include the timezone) e.g. '2020-06-09T14:00:00.014Z' or 'Immediately']
  - `expiresAt`: [What is the exact time we should stop showing it? e.g. 24 hours AFTER it starts showing]
  - `link url`: [The URL where a user is navigated to if they click the promo banner.]
  - `content`: [The text on the promo banner announcement.]

## Promo "Sticky" Banner

This is type of banner is to be used for communicating key VA announcements or initiatives, its referred to as a "Sticky" banner based on its location on the page and the fact it is a fixed navigation alert that remains visible and in the same position as the user scrolls down and moves about a site. 

- EX: Sign up to get a COVID-19 vaccine at VA

## Information need to impliment properly on VA.gov
#### Promo Banner
  **Required Details:**
  - `startsAt`: [What is the exact time we should show it? (Remember to include the timezone) e.g. '2020-06-09T14:00:00.014Z' or 'Immediately']
  - `expiresAt`: [What is the exact time we should stop showing it? e.g. 24 hours AFTER it starts showing]
  - `link url`: [The URL where a user is navigated to if they click the promo banner.]
  - `content`: [The text on the promo banner announcement.]

Updates:    
Latest Release Copy: 6/8/2021
