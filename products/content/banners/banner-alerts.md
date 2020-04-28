# Banner components for alerts

This product folder captures the latest iterations, decisions, and implementation outcomes for how full-width banner alerts will be used on the public website (unauthenticate) experience. 

This work captures 3 types of full-width banners that can appear at the top of the page. This work does not cover the promo announcement component that appears at the bottom of the viewport. 

## Emergency banner alert: https://design.va.gov/components/alertboxes#full-width-alerts

This type of banner is to be used only for emergency communications -- e.g., natural disasters affecting services such as hurricanes, wild fires; major events such as government shutdowns, mass shootings, and other major events affecting services. 

OPIA has direct access to publish these in real time via GitHub. These cannot be pushed to lower level pages via OPIA. 

__Note:__ At DEPO discretion the same banner message can be published on lower level VA.gov nodes via the CMS. The Drupal driven message can be configured for all or specific nodes and can be configured to be dismissable once or every session. 


## Sitewide system maintenance banner alert (i.e., "downtimes")

This is a new type of banner to be used for communicating system downtimes that affect all services or tools sitewide across VA.gov. 

- The header text for sitewide system maintenance banner will always be: __System maintenance__
- The body text will be standardized text for 1) advance notice [ and ... TBD ] and automatically be removed after the downtime
- The sitewide system maintenance banner should be configured to appear sitewide across all VA.gov pages (minus medical center products).
- Message must have a specifiec expiration date and must disappear automatically on expiry. 

__Design notes:__
1. The icon runs inline with the type to help utilize space
2. No more header type treatment, simply bold type, separated by an em dash
3. On mobile, the blue banner is half the height it is on desktop
4. It is persistent (non-dismissible)
5. It can expand/collapse 
6. The default state on page load is expanded
7. It pushes all content below it downward on the page (it does not overlay)

## Important action-needed, Veteran-facing alert banner

This type of message uses the design of the sitewide system maintenance banner alert. It is to be used for Veteran-facing, time-sensitive, important information that __requires a Veteran to take an action__ by X date. 

- EX: How to file before the May 5 deadline to get your coronavirus stiumulus check.  

It's not an "emergency" and it's not a "system maintenance," but it warrants more urgent communication and visibility than a promo announcement (ex: about Veteran's Day or about a new legislative or news announcement that has no specific actionable step for Veterans). 

__Note 1:__ OPIA should have direct access to publish this type of Veteran-facing actionable content banner in real time [via GitHub or Drupal - TBD?]. These cannot be pushed to lower level pages by OPIA. 

__Note 2:__ At DEPO discretion, the same banner message can be published on lower level VA.gov nodes via the CMS. The Drupal driven message should be publishable for all or specific nodes. 

__Note 3:__ DEPO global ux content admin should have the ability to publish this type of banner via the CMS, on all or specific nodes, including the homepage. [TBD/TBC Drupal permissions capability]

- The header text for this type of banner should be customizable with a limit of 50 characters with spaces.
- The body text will be customizable with a limit of 200 characters with spaces.
- This message banner should be configurable 
- Message must have a specifiec expiration date and must disappear automatically on expiry. 

__Design notes:__
1. The icon runs inline with the type to help utilize space
2. No more header type treatment, simply bold type, separated by an em dash
3. On mobile, the blue banner is half the height it is on desktop
4. It is persistent (non-dismissible)
5. It can expand/collapse 
6. The default state on page load is expanded
7. It pushes all content below it downward on the page (it does not overlay)

