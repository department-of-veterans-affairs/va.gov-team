## Top-line Discovery to Determine:
How might we ensure a better site-user experience by ensuring alignment to our VA.gov style guide. Encourage appropriate use of Homepage news and benefit promo information, Homepage Top Pages links, and Full-width banners for time-sensitive or frequently refreshed content, and in the case of banners, in limited quantity. 

### Artifacts
* [Figma Prototype](https://www.figma.com/file/n2F9Y0QhjNoeNyQ4zv2VER/Full-Width-Banner-Alerts?type=design&node-id=0-1&mode=design&t=PZCybZOYzgEY1ADP-0)

### GAPs
Note: A review of the current notification implementation for Full-width banners against the requirements in this initiative was performed by Daniel S. 

Below is a list of where considerable work will need to be performed in order to do this work. The GAP analysis is separated by building an MVP (notifications on full-width banners only), then notifications on  other content types (blocks, etc.), and finally auto-archiving & permanent archiving.

#### GAP Analysis Summary
* Question: Can the existing notifications framework handle needs for PW Q4 goals?
* Answer: In short, no. The framework isn’t meant to be modified much for purposes other than to meet the needs of 6102. Overall, we have two options: 
  * Expand the framework to be more flexible with types of notifications, cadences, and entity types - a very large lift (more than 2 sprints for engineering); or 
  * Implement a new framework which meets our criteria - a large lift (at least 2 sprints)

##### Full-width Banner GAPs

* Notifications
  * Sending notifications for frequencies other than (current implementation) once a month:
    * Framework meant to send once per month only. Additional frequencies would require both backend code, and additional Jenkins job(s).
* Configuration for when notifications are sent.
  * There is no such configuration available in the current framework. The current monthly rule exists only in code.

* Expirations
  * Expiration of content outside of the 6102 directive, e.g. 7 day default expiration for Full Width Banners (Full Width Alert [banner])
    * The framework is meant for monthly notifications for content which has expired, according to the rules the framework dictates. No mechanism for defining a different expiration exists. Additionally, if we were to incorporate additional expiration types and timeframes, we could likely compromise the original intent of the existing framework to comply with.
  * Aging Banner expiration
    * Existing framework only works with content expiration determined by the ‘field_last_saved_by_an_editor’ value.
  * Ability for editors to define a custom expiration date
    * Not a feature of the existing framework  

* Archiving
  * Auto-archiving
    * Not a feature of the existing framework
  * Permanent Archiving (no possibility of resurrecting the content)
    * Not a feature of the existing framework

##### Other Content GAPs

* Works with Blocks - No
  * Only content (nodes) is currently supported. Supporting Blocks is a possibility, but has concerns for overlap with the existing process. Namely, there is no existing mechanism to splinter disparate entity types for unique notifications and delivery schedules.

## Discovery Notes & Concerns

### Expanding the Framework to Work with Blocks

When running the monthly process, the existing framework looks for content that is “expired”, or, hasn’t been updated in a year or more. The query involved, [getOutdatedContentForSection](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/docroot/modules/custom/va_gov_notifications/src/Service/OutdatedContent.php#L289)():

* Returns only Node content
* Only returns nodes that:
  * re published
  * Are not exempted by type
  * Have a `field_last_saved_by_an_editor` timestamp a year or more old
  * Match the provided Section (using field_administration)

If we were to add blocks to the existing framework, we would need to:

* Add the ‘field_last_saved_by_an_editor’ to each block type.
  * And populate this field with a value using an update/similar hook.
  * And add a form alter to populate this field OR update the existing alter to expand to any entity type with this field.
* Update the getOutdatedContentForSection to also query for blocks. This would need to be a second query which would then need to append its results to the existing query (entity queries run against a single entity type). Making this more complicated than nodes is the mix of various field names for the same function on blocks–the section is either in the field_owner or field_administration fields.

However, because of the cadence and type of emails we expect to be sending (2 days in advance, day of, on auto-archive) for PW needs, we could not add the three email cadences to the existing framework without also impacting the existing delivery cadence for expired content. 

Block count by type:
<img width="190" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-cms/assets/147188767/38c0a98b-b7f6-4229-8d1d-e46996e8e290">

#### Clarifying Notes from Ticket:
Email recipients: Notifications framework currently sends to the "last modified by" Editor.

❌ The ‘last modified by’/’author’ of the content is never used. The emails are sent to section members who have expiring content:

* From [Edmund](https://dsva.slack.com/archives/CT4GZBM8F/p1698426959226309?thread_ts=1698426727.044469&cid=CT4GZBM8F): emails are sent to section members. So we check to see if a section's content is outdated and then notify the members of that section that it is outdated. We do not look at the author at all. We did this because people can move/leave and/or new people can join a section.
* Erika noted that the Notifications framework uses Flags. We need to work out the exact use, and whether Blocks / Menus can be flagged, or if the framework will need to be expanded to some other trigger.

❌ The notifications framework does not use flags.

✅ Only content (nodes) is currently supported. Supporting Blocks is a possibility, but has concerns for overlap with the existing process. Namely, there is no existing mechanism to splinter disparate entity types for unique notifications and delivery schedules.
* Notifications engine is based on annual content refresh ("web content should be reviewed by web editors once per year", product brief), and batches monthly emails to the "last modified by" Editor on content approaching the one-year since update mark.

✅ The framework queries for content that is older than 1 year, based on the value of the ‘last saved by editor’ field mentioned earlier.
* As far as we know, Notifications system only handles Nodes (not blocks, menus, taxonomy terms, etc)

✅ The framework only works with Nodes today. Adding additional entity types to the existing framework would be a large lift.


#### Auto-archiving content
* This is a separate topic from the bigger picture Notifications framework, but addressed here due to the ticket definition. 
  * This project will require a CMS Collab Cycle.
  * An Auto-archiving mechanism doesn’t exist in the CMS today. Will require its own discovery and lift. 
  * Permanently archiving content that cannot be re-published is a new paradigm. Will require its own discovery / lift.
  * _These should be ticketed for separate discovery._

### Concerns and Questions

* If a block belongs to the same Section as a node, what would be the default outcome of that for the recipient?

* How would the UX work with different entity types in a single email? The existing framework sends a link to a dashboard within the email (it doesn’t send the expired content to the user, as the length of a given email might be too much for an email system to handle).

* Portions of the existing framework assumes Nodes. There could be parts of the workflow that could be drastically/unavoidably affected by adding Blocks, unless we sidecar blocks as a secondary/alternative workflow.

#### Date mechanism on the Full Width Banners node form

* Adding a date field to a single node/other entity is trivial.

#### Expand Notifications framework to send emails driven by dates on nodes.
* To support this, we would need to either:
  * Enhance the current framework to be more flexible
  * Create a secondary framework that doesn’t impact 6102
  * **Both of these options would be a large lift.**
* How long after creation should the FWB be archived? If it is archived the same day it expires, we would be sending 2 emails on the same day for a given FWB.
* Does editing a FWB cause the 7 day window to reset automatically?
* Is 7 days a hard minimum, and date picker will not allow user to set a future date greater than 7 days?
* Regarding expiring FWB: do we want to do any FE work to ensure the banner is not displayed after the specified expiration date.
  * Yes. FE should not display banners after the expiration date.
* Full-Width Banners
  * Notification Cadences
    * First notification 2 days in advance of expiration/end date?
    * Morning of expiration/end date
    * EOD on  expiration/end date
  * Maximum End date from Date of Creation?
     * Should we have a maximum timeframe that a full-width banner can display, so that folks don't 'game' the system and put an end date far in the future so they aren't peppered with notifications? If so, what is a reasonable max?
   * Note: The current mechanism for Notifications is default monthly send. The full width banners requirements suggest one-off emails on a specified timeframe, rather than monthly. This is potentially the biggest leap in the framework that will need to be made.

* Home Page Promo (Content) Blocks
  * Notification Cadences
     * First notification 2 days in advance of expiration/end date?
      * Morning of expiration/end date
      * EOD on  expiration/end date
    * Maximum End date from Date of Creation?
       * Should we have a maximum timeframe that a full-width banner can display, so that folks don't 'game' the system and put an end date far in the future so they aren't peppered with notifications? If so, what is a reasonable max?

#### Affected users and stakeholders

* CMS Editors of:
  * Home page news
  * Benefit** Promo information
  * Homepage Top Pages link
  * Full Width Banners
* Veterans and other users of VA.gov's unauthenticated experience


**Examples of outdated information still in VA.gov as of 11/30/2023:**
* National Buddy Check Week: The campaign timeframe was October 16 to 20th
* How Veterans Can Register to Vote: The image is outdated and shows a book with Tax year 2020/2021
* Recognizing LGBTQ+ Veterans During Pride Month: Pride month was in June

### Hypothesis

* If the main goal is to have no stale content, even if the space is blank, then the hypothesis could be the following.
  * We believe that by providing notifications to editors alerting them that their content will be auto-archived, and then auto-archiving on the date stated, then we will achieve no longer displaying stale information in VA.gov to Veterans and other users.

* If the goal is also to auto-fill the space where the archived banner/block/etc. displayed (if the editor doesn't replace it in a timely fashion), then the hypothesis can be: 
  * We believe that by providing notifications to editors alerting them that their content will be auto-archived, auto-archiving on the date stated, and if no new content is uploaded by an editor, auto-filling with timely Veteran-centered information then we will achieve two things: no longer displaying stale information in VA.gov to Veterans and other users, as well as providing rotating, timely information in spaces where there is no editor entered info.
