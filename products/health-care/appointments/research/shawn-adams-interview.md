## Resident clinics
- how many veterans are seen by attending vs. resident physicians?
  - Sizable minority, if not majority
- How does the attending physician interact with residents and appointments?
  - PCMM tracks relationship, attendings are paths of escalation
  - VA is largest trainer of residents, they move around a lot (e.g., 6 week rotation at a private clinic), so attending also covers when assigned resident isn’t there
- How do Veterans decide which residents they want to see?
  - Continuity is important, only really gets trumped by appointment wait time (at the veteran's discretion)
- How many residents are in a PACT?
  - PACT team defined in PCMM; potentially a few; attending can be a part of several different clinics with residents as well
- How often to residents come & go within a PACT?
  - A lot, because of rotations and the nature of being a resident
  - All over the place, sometimes there for 6 weeks and gone for 6 weeks, sometimes there for years
- What kind of lift is it for site admins to appropriately set residents up in VATS?
  - Unclear, but sounds like this might be burdensome given schedulers already under large workload that this would add to
- Should attendings be schedulable?
  - Most should be
  - If there’s a resident in a clinic, generally they should be scheduled first
  - First appointments don’t matter - can be with resident (so attending doesn’t necessarily have to do intake appointments)
- Could we schedule people with the last clinic they were seen in?
  - If new patient clinic, wouldn't want to schedule them back into that after initial consult
  - They may have seen a Primary Care physician, but now need to see someone else per PCP’s recommendation
  - Generally though, showing last clinic may be helpful outside of edge-cases


## Clinics
- How do we get availability information about a clinic? How expensive are the queries? How long do they take?
- How could we go about aggregating the options for a given stop code?
- What are the factors that go into determining which clinic to book a veteran into?
  - Lots of stuff
  - RTC (return to center), recall reminders, etc. appear in VSE GUI
  - Clerks can look at RTC for info about what specific care needs veteran has & will schedule them into clinic that provider requested
  - Different follow up regiments, e.g. MRTC (multiple RTC) where you need several follow-ups
- What’s the importance of secondary stop codes? Do they provide veterans with meaningful differentiation in services?
- Are we able to show, by type of care or stop code, the last clinic that a Veteran successfully had an appointment in within that health system?
  - Yes, there's nuance to this and not always the right clinic for next appointment
- What is the timeline for patient-friendly names of clinics? Is it at all feasible to guide or nudge that process?
  - They exist, not for every clinic
  - painful, there is a central file in cdw but that's read-only. There's a 'clinic profile managers' group and that's the group of people that can set the names
  - sometimes lack of name indicates that the clinic was incorrectly enabled for vaos visibility
  - this is under OVAC sphere though, so can get movement on clinic names
  - Recently, OVAC was able to change the clinic naming scheme for another project
  - San Diego & Loma Linda might be good facilities to look at as good examples of names
  - Services are responsible for their own clinics, so e.g. audiology scheduler for a facility or system (which level of responsibility a clerk has re. facility vs. system appt management is dependent per system & facility)
- If PCMM doesn't know which clinic active, how can we tell in the front end?
  - VAOS handles this well if they're both in the same healthcare system
  - If there's active & pending, then schedule with pending
  - Find active provider within pending PACT
    - Look for any clinic for primary care where that provider is the default provider
    - If they only have a pending & no active, the patient hasn't been seen by that facility in last 24 months usually
    - Should still present pending provider's clinic for that veteran
  - If only pending / no PACT, then new patient, so book for 1 hour slot
  - If returning, then book into 30 min slots
  - Residents can see new patients, doesn't need to be an attending
- Why not name of provider for clinic name?
  - Ran into problems with provider changes
  - SOmetimes harder to remember doc names vs. clinic names
- Primary Care: there is a setting in (vats? SM?) that says whether a provider is a default provider (can only be 1) in a clinic
  - Does clinic have associate provider
  - If yes, look for default provider
  - VistA file 44 is where this is managed
    - gets written to CDW, so pcmm uses day-old data (stored procedure pulls this out ~24 hours)
    - This is the clinic profile data
    - Name of clinic, who's provider, default duration, etc.
    - Default assignment of primary care provider to patient
    - Active vs. pending assignment of PCP to patient
- Primary stop code associated to clinic at time of clinic creation
- Secondary stop code (called credit stop code): how / where that service is provided
- Stop codes not going to exist in Cerner world


## Appointment duration
- How do we know how long an appointment should be?
   - Basically new (60 mins) vs. returning patient (30 mins)
   - Can know 
- How do we know whether someone needs a long or short appointment?
- Can we ask veterans a question about being new, or can we deduce this from existing data?

## Direct Scheduling
- How many appointments need to be rescheduled or can't be fulfilled because of some scheduling error (e.g., self-scheduling into wrong clinic)
  - .02% of total appointments are self-scheduled
  - Has been talk of turning this off because it produces low quality appointments
- What is the time implication to schedulers of correcting these errors? 
- What are the common self-scheduling appointment errors?
- Can we increase the number of types of care that are self-schedulable? How?
- What is the direct scheduling process after a veteran hits 'confirm / sdchedule' in VAOS? Do clerks ever filter these requests?
- What is the single biggest thing we can do (within our scope) to improve the veteran scheduling experience? What potential outcomes excite you the most?
- Do clinics/facilities have any control over how or when appointments can be cancelled online?
  - Clinics do appointment grooming on a daily basis, sometimes
  - Not ideal, becasue what if you book urgent appt for 6 months out?
  - When veterans cancel, they don't know that a bunch of other appts are made for labs, resources, etc. behind the scenes
- Top problems
  - For primary care, what's the appropriate clinic for the veteran to see? Sometimes attending is associated with 10 or 20 clinics so that's what the veteran sees
  - For mental health, use of stop codes. Need to figure out what service you actually need
    - Could map primary + secondary stop codes to a specific care type, or broad care type + modality
  - For everything else, new vs. follow-up. Sometimes you can schedule yourself into clinic without consult
    - Lots of variables here, but Shawn thinks there could be rules to make distinction of which clinic is which & where to schedule a veteran

## Requests
- Why aren't more facilities opted into this
  - Directive to enable this more widely
  - Staffing problems, teams are already swamped
  - OVAC doesn't like appointment requests because self-scheduling would be better
    - If VS GUI could handle these it would be easier workload-wise for the scheduling clerks
  - Because it's another app to check, hard to check in & handle within act guidelines


