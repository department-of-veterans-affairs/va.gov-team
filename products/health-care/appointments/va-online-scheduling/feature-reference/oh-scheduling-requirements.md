# OH Scheduling Requirements (WIP)

This is a working doc to capture requirements for scheduling into Oracle Health appointments. 

**No requirements listed here are final until the MVP has been released**

## User stories

- As a user registered at an Oracle Health facility, I want to be able to schedule appointments online.


## Requirements

**Non-technical**

- OH facility leadership can enable direct scheduling through VAOS for nutrition and food appointments for a given facility.
- OH facility leadership can enable requests through VAOS for nutrition and food appointments for a given facility.

- A OH user can schedule nutrition and food appointments at any facility where they have an established relationship.


Collect type of care
Collect location for appointment
Collect clinic
Collect resource (may be provider or other)
Collect patient-indicated date
Collect appointment date and time
Collect free text appointment reason
Collect reason code
Collect appt-specific email and phone number


Block Veteran from all scheduling options if they're not registered at any facility
Block Veteran from scheduling certain TOC unless they've had a recent appointment at that location
Block Veteran from scheduling if they're not registered at facility
Block Veteran from scheduling at a clinic if they haven't been seen in 24 months
Offer Veteran option to request appointment if DS not available
Facility can optionally turn DS on/off per type of care
Facility can optionally turn requests on/off per type of care
Offer Veteran option to schedule community care if eligible
Notify Veteran that they should not use online scheduling for Urgent needs
Block Veteran from scheduling same day appts
Block Veteran from scheduling more than 395 days after current date

## Open questions

- At what level should enabling direct scheduling/requests? Assuming this will be up to individual facilities like VistA is today, but it could be a higher level decision for OH.
- Does a user need an established relationship to schedule/request nutrition and food appointments?
- What does "established relationship" mean on a technical level.
