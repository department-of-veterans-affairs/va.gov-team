# OH Scheduling Requirements (WIP)

This is a working doc to capture requirements for scheduling into Oracle Health appointments. The scope of this is the MVP release.  

**No requirements listed here are final unless otherwise noted**

## User stories

- As a user registered at an Oracle Health facility, I want to be able to schedule appointments online.


## Requirements

### Access

Follows the business rules for [login and access](login-and-access.md).

OH facility [leadership] can configure the online scheduling options available to Veterans:
- OH facility [leadership] can enable direct scheduling through VAOS for nutrition and food appointments for a given facility.
- OH facility [leadership] can enable requests through VAOS for nutrition and food appointments for a given facility

### Direct scheduling

**A Veteran can [choose a type of care](schedule-flow/all--type-of-care.md).**
   - Only nutrition and food appointments are supported for direct scheduling or requests. This is determined when they choose a location.

**A Veteran can [choose a location for their appointment](schedule-flow/va-direct--choose-location.md) for their selected type of care.**
   - A OH user can schedule nutrition and food appointments at any OH facility where:
    - They are registered.
        - Note that registering at one OH facility automatically registers them at all other OH facilities.
    - They have an established relationship with a provider.
    - The facility has enabled direct scheduling for nutrition and food.

When choosing a location, a Veteran will be directed to [request an appointment](#requests) if:
  - The facility does not have DS enabled, but does have requests enabled

When choosing a location, a Veteran will be directed to call to schedule if:
   - They do not have an established relationship with a provider
   - Neither DS nor requests are enabled


Collect resource (may be provider or other)
Collect patient-indicated date
Collect appointment date and time
Collect free text appointment reason
Collect reason code
Collect appt-specific email and phone number




Block Veteran from scheduling if they're not registered at facility
Block Veteran from scheduling at a clinic if they haven't been seen in 24 months
Offer Veteran option to request appointment if DS not available
Facility can optionally turn DS on/off per type of care
Facility can optionally turn requests on/off per type of care
Offer Veteran option to schedule community care if eligible
Notify Veteran that they should not use online scheduling for Urgent needs
Block Veteran from scheduling same day appts
Block Veteran from scheduling more than 395 days after current date


### Requests

A Veteran may request an appointment when:
- Facility leadership have enabled requests for their selected type of care, and:
  - Direct scheduling isn't enabled for their chosen type of care + location
  - OR there are no times available
  - OR the want a different provider than the options allow.

## Open questions

- At what level should enabling direct scheduling/requests? Assuming this will be up to individual facilities like VistA is today, but it could be a higher level decision for OH.
- Does a user need an established relationship to schedule/request nutrition and food appointments?
- What does "established relationship" mean on a technical level.
