# What we know about authorized referrals and how they can inform the scheduling experience (04-04-2024)

*What we know to **inform the userflow options for CC Direct Scheduling** as a result of the [kickoff meeting on 04-03-2024](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/community-care-direct-scheduling/discovery/04-04-2024-initial-questions.md#responses):*

## Authorized (or approved) referrals 

- At a minimum, an authorized referral will include a speciality/service. E.g., optometry (123000X), primary care, podiatry, etc.
- Optional information will include: 
     - Sub-service(s): physical therapy, occupational therapy, speech therapy, chronic disease management, etc. 
     - Appointment type: Follow-up appointment, diagnostic test such as an X-ray, first-time visit, existing patient, telemedicine, etc. 

### What's UNKNOWN about authorized (or approved) referrals

To be solved for later: 

- Is there a maximum number of days out that Veterans can schedule an appointment? If so, is it unique to the referral?
- How would keep track of the number of booked and/or completed appointments to know if a Veteran can continue booking appointments?

## Functional rules for selecting a provider based on CC eligibility logic 

### Referral-based logic 

- Veterans should **not** be able to unselect specialties/services when choosing a CC provider. However, it's possible, depending on the referral that Veterans will be able to select and unselect (i.e., filter) sub-services in order to schedule the right appointment. E.g., if their referral includes authorization for occupational therapy **AND** physical therapy. 
- For now, we *COULD ASSUME* that *IF* an appointment type (e.g., follow-up appointment, diagnostic test such as an X-ray, first-time visit, existing patient, telemedicine, etc.) is included in the referral, then providers and their appointment slots will be pre-filtered for that/those appointment types. For example, providers will typically have designated appointment slots for different types of appointments. Therefore, those could be filtered out, if needed. 

### Searching for the right provider  

- Default sorting of providers in a list is *LIKELY* by drive time / miles away. E.g., 15 minutes (6 miles), then last name A-Z. **If MVP allows,** an optional sorting of providers could be by last name A-Z and/or last name Z-A. E.g., the Veteran knows the provider they want to see and are trying to quickly find them. (Of course, a [search input with type ahead component](https://design.va.gov/components/search-input#with-typeahead) could also be integrated later down the road to be able to quickly search for a provider's name.) 
- Veterans will need the ability to navigate to different days of the week/month to review provider availability.

## Miscellaneous 

- **Nice-to-haves:** Showing Veterans the information in their authorized referral. E.g., could be displayed on an Intro page after the notification/task card and/or as filter values (primary care, physical therapy, etc.) in the provider list, which wouldn't be allowed to change. E.g., if you're referral is for primary care, you shouldn't be able to change it.
- **Assume** that we don't need to worry about secondary insurance, e.g., Medicare, Medicaid, private insurance plans, etc. 
