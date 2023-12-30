# Outreach Events Engineering README
_Last updated: 2023-12-29_

Events are managed in the VA Drupal CMS, via 2 node types: 
1. Event (https://prod.cms.va.gov/node/add/event) - Creates a single page for an event.
2. Event listing (https://prod.cms.va.gov/node/add/event_listing) - Creates a landing page that will aggregate all Events within the Section. Listing pages exist (as of 12/2023) on every VAMC page, and the Outreach Events calendar. Event listing pages will be added to any additional Facility types when Events are added. e.g.
  * Outreach Events - https://www.va.gov/outreach-and-events/events/
  * VAMC - https://www.va.gov/minneapolis-health-care/events/
  * Vet Centers - To be added by the Facilities team: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/12926
  * VBA Regional Offices - To be added by the Facilities team: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/12926
  * NCA - To be added when business demands require it: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16477


## Event creation / permissions
CMS Editors from within any business user group can create Events based on Section permissions. 


## Event functionality 

### Recurrence
Events can be created as Recurring events. Recurrence is governed by a contributed Drupal module. Recurring events are by far the most fragile part of the product and require extensive testing with any change to Event content type in Drupal, to front-end templates, or to behavior of the React widget that provides Event filtering.

In Event listings, Recurring events will display only the next upcoming recurrence.
In Past Events, any elapsed recurrences should appear.
On Event pages, "add to calendar" link does not allow adding the recurring series to calendar. ([va.gov-cms #9451](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9451))


### Filtering
On Event Listing pages a vets-website React widget allows for 4 filters: 
* Upcoming events
* Past events
* Specific date
* Date range


Events data is loaded to the client, in order to allow for client-side filtering. 


## Testing
Testing events is difficult as they move from Upcoming to Past, etc. In order to test, engineers must generate events on their locally-built CMS, or in a Tugboat instance. To simplify the process, a script is available in vets-website: [`event-generator.js`](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/events/helpers/event-generator.js)

The script will generate events contextually based on "now", including future, past, duplicate, active and more.

