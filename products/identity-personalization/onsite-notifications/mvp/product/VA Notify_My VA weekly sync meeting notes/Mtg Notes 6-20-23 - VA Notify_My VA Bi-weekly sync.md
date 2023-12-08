# VA Notify - My VA Bi-weekly sync: 6/20/23

**Agenda:**
1. Strategizing agenda ahead of design/ux and technical meetings with MHV on VA.gov partners 
2. Status of RX shipment notification

### Planning agenda for technical meeting on 6/29
Goal: establish shared general understanding of notification system _specific_ to onsite notifications and how our teams work together to make things happen

Three part conversation:
Part 1: technical overview of notification system specific to onsite notifications 
  - using debt notification as example
  - explaining that there will always be at least three parties to coordinate with when creating a new onsite notification: 1) VA Notify, 2) My VA, 3) subject matter team(s) 
Part 2: overview of how MHV would come into the fold
Part 3: order of operations/logistics for MHV to come onboard

#### Technical questions/points:
- MHV will need to understand how My VA consumes data to create the onite notification:
  1. VA Notify  sends 2 pieces of data: the va profile id and the template id.
  2. Once VA Notify sends the onsite request it lives in a table (owned by My VA) that tracks the date of the event and includes a value for whether it's dismissed or not.
  3. The default values for those are "today's date" and not dismissed.
 
- What team owns the onsite endpoint and table? _My VA - created and owns it_

- How will MHV landing page (or anyone else) consume onsite notification data?
  - _Consume through My VA existing source, rather than have VA Notify send to multiple places_   

- If we're sharing the same data source how can we dismiss separately from different interfaces (i.e. dismiss on My VA but not on MHV, or vice versa)?
  - ....  

### Status of RX Shipment 
- Lots of work happening on VA Notify side (and with other teams) re RX shipment, however bulk of it is focused on preference migration (MHV > VA.gov)
- Once done (or in a more stable position), then VA Notify can look at identify work that needs to happen to get RX shipment available as an onsite notification

### Resources
- Resource Tom shared in chat: [Onsite notifications technical overview](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/my-va/onsite_notifications/technical-overview.md)https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/my-va/onsite_notifications/technical-overview.md 
