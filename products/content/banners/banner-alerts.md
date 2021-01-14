# Banner components for alerts

This product folder captures the latest iterations, decisions, and implementation outcomes for how full-width banner alerts will be used on the public website (unauthenticate) experience. 

This work captures 3 types of full-width banners that can appear at the top of the page. This work does not cover the promo announcement component that appears at the bottom of the viewport. 

## Decisions and status per May 9, 2020, call

__Change: There will be one style of full-width banner component, rather than having 2 variations. Instead of having 2 kinds of behavior (dismissable vs. show less/more), it will always be configurable to be dismissable.__

__Not changed:__ Rubric for display hierarchy is still a) Emergency banner, b) Sitewide downtime banner, c) Veteran action needed banner


__1. Emergency banner__

- Ability to publish: OPIA, DEPO, VISNs, and VAMCs.
- OPIA can publish on VA.gov homepage.
  - Typically Josh Tushcher  or Gary Hicks, via YAML/GitHub
  - Requires PR review by FE engineer -- must be approved within 15m
  - Use Cases: Natural Disasters, Operational emergencies, Fed Gov shutdown
  - OPIA has templated content, but do not typically use
  - Public Websites must ask permission to fix mistakes (typos, broken links)
  - Can include dismissable function (this is an option in the template) -- up to OPIA
- DEPO needs ability to publish sitewide or on specific nodes, including VAMC products and/or homepage. (The homepage is not a node.)
- VISNs can publish across all VAMC pages.
- VAMCs can publish on their VAMC pages only. 
- Yellow.
- 300 character count limit including spaces; allow links; needs to be configurable as dismissable per cookie or per session. 


__2. Sitewide system maintenance downtime banner__ 

Design files: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/banners/sitewide-system-downtime-design-files

- Ability to publish: DEPO.
- Sitewide, including VAMC products. 
- 2 states: In advance of downtime; and during downtime. 
- Yellow for advance; red for during.
- 300 character count limit including spaces; allow links; needs to be configurable as dismissable per cookie or per session.
- Must configure schedule and expiration: for in-advance messaging start and end; during message start and end -- dates and times.
- Standardized text with customizable dates and times. 
- When to use: If 90% of VA.gov services will be "down" -- **however, this is not well-defined, operationalized.**

__3. Veteran action needed banner__ 

- Use Cases: 
  - Learn about vaccinations, sign up for notifications
  - IRS deadline for benefits declarations
- Ability to publish: DEPO.
- Ability to configure for sitewide or specific nodes, including VAMC products and/or homepage. 
- Yellow [@RYAN - do you recommend this one always be yellow or always blue (per original recommendation below)? ] 
- 300 character count limit including spaces; allow links; needs to be configurable as dismissable per cookie or per session.
- Must configure expiration date and time. 

__4. Product for alerts to enable governance within the CMS__

 - DEPO and VISNs must have the ability to see what other products are currently displaying a banner alert.
 - Can we create a dashboard that allows publishers to see how many alerts are on any given product.
 - Can we prevent a user via the system from adding more than the maximum number of alerts to any given product in a way that is informative to the publisher (e.g. Add Alert to Homepage, Benefits hubs, but Cannot add to Erie Health System due to an add exceeding the maximum number of alerts (3) possible?)
 - Certain products (e.g. VAMCs and Facility sites) should always have one alert 'reserved' for a facility/health system to provide information to veterans at that specific facility.


## Rubric for prioritization (display hierarchy)
This hierarchy applies when more than one of these types of events occur simultaneously. We know this weighting may not always feel right, but believe this should cover 80% of cases, and we want to get out of using subjective judgement one case at a time, every time. 

There can be only a maximum of 1 type each - this means sometimes, there might be up to 3 banners at the top of the page - always in this order of display:

1/ Emergency banner (always first - these do not have a specific expiration date)

2/ System maintanence banner ~(order by expiration date)~ 

3/ Veteran action needed ~(order by expiration date)~


~The order of banners #2 and #3 should be configured to display based on expiration date. The message with the earliest expiry should appear above the other.~ 

## Emergency banner alert: https://design.va.gov/components/alertboxes#full-width-alerts

This type of banner is to be used only for emergency communications -- e.g., natural disasters affecting services such as hurricanes, wild fires; major events such as government shutdowns, mass shootings, and other major events affecting services. 

OPIA has direct access to publish these in real time via GitHub. These cannot be pushed to lower level pages via OPIA. 

__Note:__ At DEPO discretion the same banner message can be published on lower level VA.gov nodes via the CMS. The Drupal driven message can be configured for all or specific nodes and can be configured to be dismissable once or every session. 


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
~4. It is persistent (non-dismissible)~
~5. It can expand/collapse~
~6. The default state on page load is expanded~
~7. It pushes all content below it downward on the page (it does not overlay)~

## Important action-needed, Veteran-facing alert banner

This type of message uses the design of the sitewide system maintenance banner alert. It is to be used for Veteran-facing, time-sensitive, important information that __requires a Veteran to take an action__ by X date. 

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
~4. It is persistent (non-dismissible)~
~5. It can expand/collapse~ 
~6. The default state on page load is expanded~
~7. It pushes all content below it downward on the page (it does not overlay)~

