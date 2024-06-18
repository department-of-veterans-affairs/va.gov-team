# OH Scheduling Requirements (WIP)

This is a working doc to capture requirements for scheduling into Oracle Health appointments. 

**This is a work in-progress document. No requirements listed here are final unless otherwise noted.**

The scope of this is the MVP release. See the [out of scope](#out-of-scope) section for non MVP. 

See also our [open questions](#open-questions).


## User stories

- As a user registered at an Oracle Health facility, I want to be able to schedule `Nutrition and Food` appointments online.


## Requirements (WIP)

### Access

Follows the business rules for [login and access](login-and-access.md).

OH facility [leadership] can configure the online scheduling options available to Veterans:
- OH facility [leadership] can enable direct scheduling through VAOS for `Nutrition and Food` appointments for a given facility.
- OH facility [leadership] can enable requests through VAOS for `Nutrition and Food` appointments for a given facility

### Direct scheduling

**A Veteran must [choose a type of care](schedule-flow/all--type-of-care.md).**
   - Only `Nutrition and Food` appointments are supported for direct scheduling or requests. 

**A Veteran must [choose a location for their appointment](schedule-flow/va-direct--choose-location.md) for their selected type of care.**
- A OH user can schedule nutrition and food appointments at any OH facility where:
  - They are a registered patient at any OH facility.
    - Note: registering at one OH facility automatically registers them at all other OH facilities.
  - AND They have had an encounter at that facility for `Nutrition and Food`
  - AND The facility has enabled direct scheduling for `Nutrition and Food`

When choosing a location, a Veteran will be directed to [request an appointment](#requests) if the facility:
  - Does not have DS enabled,
  - AND has requests enabled.

When choosing a location, a Veteran will be directed to call to schedule if:
   - They have not had an encounter for `Nutrition and Food` at that facility.
   - Neither DS nor requests are enabled

**A Veteran may choose a provider for their appointment.**
The Veteran is given the option to select:
- Providers with whom they have had a recent encounter (within the last 36 months) for `Nutrition and Food`.
<!-- - Any provider.
  - This option allows them to choose dates and times for all providers they have had a recent encounter with for `Nutrition and Food`.

This is scenario is not likely to occur.  This option was designed to account for when there are time slots with no provider data which may not be a scenario in reality since there will always be a resource with the Provider as the primary resource (Room as secondary) -Melissa
 -->
- None of the options
    - If they choose this option:
      - AND requests are enabled, they are directed to [request an appointment](#requests).
      - If requests are disabled, they are directed to call to schedule.

**A Veteran must [provide the preferred date for their appointment](schedule-flow/va-direct--preferred-date.md).**
- Note: OH can't receive preferred date due to a technical limitation. However, this field is used to warn users that they can't select same day appointments.

**A Veteran must [choose an appointment date and time](schedule-flow/va-direct--choose-a-date.md)**


**A Veteran must [provide the reason for their appointment](schedule-flow/va-direct--reason-for-appointment.md).**


**A Veteran must [review/enter the contact information for their appointment](schedule-flow/va-direct--reason-for-appointment.md).**


**A Veteran must [review their appointment information](schedule-flow/va-direct--review-and-submit.md) before confirming/scheduling their appointment**


### Requests

A Veteran may request an appointment when:
- [Facility leadership] have enabled requests for `Nutrition and Food` at their chosen location and:
  - Direct scheduling isn't enabled.
  - OR There are no appointment times available.
  - OR they want a different provider than the options allow.
  
Requesting an appointment at OH follows the current VistA request flow business rules.

### Community care

A Veteran may not request community care for any care type through an OH facility.

## Open Questions

All answers are unconfirmed unless noted otherwise:

Q. Does a user need an encounter with a provider to schedule/request nutrition and food appointments with them?
   - A. Yes, they must have had an encounter in the last 36 months.
   - A. For other types of care, a user MAY be able to schedule with providers when they don't have a recent encounter. 

Q. Can a user schedule new patient appointments?
   - A. No, they need to be registered and have had a past encounter with a provider for `Nutrition and Food` to schedule at a facility.

Q. Are "registered" and "established" the same thing? (see previous question).

Q. Can a user schedule into times reserved for new patients?
 - A. Yes. This doesn't make them a new user, they just can steal those time slots.
  
Q. Who determines whether or not to enable online scheduling/requests for given types of care at OH facilities? Does that happen at the facility level, or higher?

Q. Which types of care or "services" could allow for the patient to schedule with a provider they have never seens before? 
- A. Whole health, for example the Tai Chi instructor might have been an instructor you have never had. <!-- This was an example Tia gave, I am not sure it is relevant since we do not have a type of care called whole health. -Melissa
 -->

## Out of scope

We won't be surfacing provider availability in a way that lets Veterans compare providers to find the best time:
- For nutrition and food, we're just showing providers where the Veteran with whom a Veteran has had an encounter in the past 36 months.
- We don't have a situation where a Veteran can choose from any provider, whether or not they have a provider. Once that comes up, we can revisit this. 



