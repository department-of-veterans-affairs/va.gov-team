# OH Scheduling Requirements (WIP)

This is a working doc to capture requirements for scheduling into Oracle Health appointments. The scope of this is the MVP release.  

**No requirements listed here are final unless otherwise noted**

## User stories

- As a user registered at an Oracle Health facility, I want to be able to schedule appointments online.


## Requirements (WIP)

### Access

Follows the business rules for [login and access](login-and-access.md).

OH facility [leadership] can configure the online scheduling options available to Veterans:
- OH facility [leadership] can enable direct scheduling through VAOS for nutrition and food appointments for a given facility.
- OH facility [leadership] can enable requests through VAOS for nutrition and food appointments for a given facility

### Direct scheduling

**A Veteran must [choose a type of care](schedule-flow/all--type-of-care.md).**
   - Only nutrition and food appointments are supported for direct scheduling or requests. This is determined when they choose a location.

**A Veteran must [choose a location for their appointment](schedule-flow/va-direct--choose-location.md) for their selected type of care.**
- A OH user can schedule nutrition and food appointments at any OH facility where:
  - They are registered.
    - Note: registering at one OH facility automatically registers them at all other OH facilities.
  - They have an established relationship with a provider.
    - Note: need to define/understand what established relationship means.
    - Note: will nutrition and food require an established relationship?
       - If not, will we allow them to schedule with any provider?
  - The facility has enabled direct scheduling for nutrition and food.

When choosing a location, a Veteran will be directed to [request an appointment](#requests) if:
  - The facility does not have DS enabled, but does have requests enabled.

When choosing a location, a Veteran will be directed to call to schedule if:
   - They do not have an established relationship with a provider.
   - Neither DS nor requests are enabled.


**A Veteran may choose a provider for their appointment.**
The Veteran is given the option to select:
- Providers with whom they have a previous relationship for the given type of care
- Any provider
  - This option shows dates and times for all providers they have a previous relationship with for a given type of care. These appear when they choose a date and time.
- None of the options

If they choose "none of these options":
- And requests are enabled, they are driected to [request an appointment](#requests).
- And requests are disabled, they are directed to call to schedule.

**A Veteran must [provide the preferred date for their appointment](schedule-flow/va-direct--preferred-date.md).**
- Note: OH can't receive preferred date due to a technical limitation. However, this field is used to warn users that they can't select same day appointments.


**A Veteran must [choose an appointment date and time](schedule-flow/va-direct--choose-a-date.md)**


**A Veteran must [provide the reason for their appointment](schedule-flow/va-direct--reason-for-appointment.md).**


**A Veteran must [review/enter the contact information for their appointment](schedule-flow/va-direct--reason-for-appointment.md).**


**A Veteran must [review their appointment information](schedule-flow/va-direct--review-and-submit.md) before confirming/scheduling their appointment**


### Requests

A Veteran may request an appointment when:
- Facility leadership have enabled requests for their selected type of care, and:
  - Direct scheduling isn't enabled for their chosen type of care + location.
  - OR there are no times available.
  - OR the want a different provider than the options allow.

Requesting an appointment at OH follows the current VistA request flow business rules.

  ### Community care

  A Veteran may not request community care for any care type through an OH facility.

## Open questions

- At what level should enabling direct scheduling/requests? Assuming this will be up to individual facilities like VistA is today, but it could be a higher level decision for OH.
- Does a user need an established relationship to schedule/request appointments at a particular location?
   - What does "established relationship" mean on a technical level?
   - Should users not be given the option to schedule at locations where they don't have established relationships?
- At OH facilities, who determines whether or not to enable online scheduling/requests?
