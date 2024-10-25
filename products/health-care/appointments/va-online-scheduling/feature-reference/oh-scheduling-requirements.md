# OH Scheduling Requirements (WIP)

This is a working doc to capture requirements for scheduling into Oracle Health appointments. 

**This is a work in-progress document. No requirements listed here are final unless otherwise noted.**

The scope of this is the MVP release. See the [out of scope](#out-of-scope) section for non MVP. 

See also our [open questions](#open-questions).


## User stories

- As a user registered at an Oracle Health location, I want to be able to schedule `Nutrition and Food` appointments online.


## Requirements (WIP)

### Access

Follows the business rules for [login and access](login-and-access.md).

OH facility [leadership] can configure the online scheduling options available to Veterans:
- OH facility [leadership] can enable direct scheduling through VAOS for `Nutrition and Food` appointments for a given location.
- OH facility [leadership] can enable requests through VAOS for `Nutrition and Food` appointments for a given location

### Direct scheduling

**A Veteran must [choose a type of care](schedule-flow/all--type-of-care.md).**
   - Only `Nutrition and Food` appointments are supported for direct scheduling or requests. 

**A Veteran must [choose a location for their appointment](schedule-flow/va-direct--choose-location.md) for their selected type of care.**

The system displays all OH locations where the Veteran has had an encounter.

OH facility staff can configure:
- Whether a facility supports direct-scheduling, requests, both, or neither for each type of care.
   - Note that the general rules for which scheduling types are allowed
- Whether a user is required to have had an encounter at that facility for each type of care
   - The timeframe for that encounter (e.g. 24 or 36 months - actual timeframes TBD)
- The number of requests a user is allowed to submit to a facility for a given type of care (e.g. 1-2)
- Staff configure these settings in CTPS.

A OH user can schedule nutrition and food appointments at any OH location where:
  - They are a registered patient.
    - Note: registering at one OH location automatically registers them at all other OH facilities.
  - AND They have had an encounter at that location for `Nutrition and Food`
  - AND The location has enabled direct scheduling for `Nutrition and Food`Rule:
  - Note: Facilities with providers a user has a relationship with will only be displayed if the user has had a past encounter with that provider at that specific facility. This prevents users from accidentally scheduling appointments at distant locations if a provider has moved to a different facility.

When choosing an OH location, a Veteran will be directed to [request an appointment](#requests) if the facility:
  - Does not have DS enabled,
  - AND has requests enabled.

When choosing an OH location, a Veteran will be directed to call to schedule if:
   - They select any type of care other than 
   - They select `Nutrition and Food`, but have not had an encounter for that type of care at that location.
   - Neither DS nor requests are enabled

The system alerts the user if they can't continue scheduling an appointment because:
- They aren't registered at any facilities where they can schedule appointments
- None of their facilities support direct scheduling or requests.
- The facility they chose doesn't support direct scheduling or requests.
- They haven't had an encounter in the given timeframe at the location they selected.
- They have hit the limit of requests for the selected type of care at the selected facility.

**A Veteran may choose a provider for their appointment.**
The Veteran is given the option to select:
- Providers with whom they have had a recent encounter (within the timeframe configured in VAS) for `Nutrition and Food`.
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

Note: We do not have the ability to tie a provider to the request. When requesting an appointment, the Veteran is not able to request a specific provider. They will only be able to request a time and date and location for their TOC and staff will contact them to finish scheduling. 

### Community care

A Veteran may not request community care for any care type through an OH location.

## Open Questions

**Note: All answers are unconfirmed unless noted otherwise.** Once we get closer to an agreed-upon approach we'll ask stakeholders to review and confirm these.

Q. Who determines whether or not to enable online scheduling/requests for given types of care at OH facilities? Does that happen at the facility level, or higher?

Q. Can a user schedule new patient appointments?
   - A. No, they need to be registered and have had a past encounter (in the last 36 months) with a provider for `Nutrition and Food` to schedule at a location.

Q. Can a user schedule into times reserved for new patients?
 - A. Yes. This doesn't make them a new user, it just means they can schedule into those time slots.

Q. Does a user need an encounter with a provider to schedule/request nutrition and food appointments with them?
   - A. Yes, they must have had an encounter within the last 36 months.
   - Note: For types of care other than `Nutrition and food`, a user MAY be able to schedule with providers when they don't have a recent encounter. One example that came up was `Whole Health`, which isn't supported by VAOS currently. We will update this document when we learn that's the case.

Q. Which types of care or "services" that VAOS supports today could allow for the patient to schedule with a provider they have never seen before? 

Q. Can a user schedule into time slots that aren't associated with a provider?
   - A. No, selectable time slots always need to have a provider with whom the Veteran has had a previous encounter as the primary resource. 
       - Note: This is scenario is not likely to occur. The Provider will always be the primary resource, and usually with the Room as secondary. Time slots should always have provider data.
       - Note: Time slots may have a secondary resource, such as a room or machine, but we don't know if that information should be exposed to the Veteran.

  





## Out of scope

We won't be surfacing provider availability in a way that lets Veterans compare providers to find the best time:
- For nutrition and food, we're just showing providers where the Veteran with whom a Veteran has had an encounter in the past 36 months.
- We don't have a situation where a Veteran can choose from any provider, whether or not they have a provider. Once that comes up, we can revisit this. 

We will not be including Building, Floor, or room number. Context: Fetching Encounters along with appointments increases request times.
Not all Encounters include building and floor information in the display string, likely due to missing details in the Location resource.


