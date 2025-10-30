# Oct 2025 - PHR Policy Group meeting
@beckyphung presented [these designs (Figma)](https://www.figma.com/design/gGU9oX4QVqbYdxzXfTqTEj/Medical-Records---Milestone-2?node-id=22075-8017&t=FOMbLVvfkZwHl6YH-1) for displaying statuses other than `Final` for lab and test results at the 10/21 2pm ET PHR Policy Group recurring meeting. This doc contains notes and takeaways from the meeting

In this doc: 
- [Takeaways](#takeaways)
- [Next steps](#next-steps)
- [Notes](#notes)

## Takeaways
- **Business rules**: We don't have these documented right now. We have a general idea of what we should/shouldn't do in specific cases though. Some example FHIR statuses we talked about:
   - `Entered in Error`: Don't display record
   - `Registered`: Probably don't show this because it represents a record in-progress
   - `Amended`: Display record with corrected info only
- **Business decisions**: We need to present recommendations to business owners.
   - Labs and tests: Lab Council
   - Other records: Ambulatory Council
- **Module/Data classes/Domains**: We just presented designed for labs and tests. But we need to review potential FHIR statuses for other domains as well, such as:
   - Vaccines
   - Allergies
   - Vitals
   - Health Conditions
   - Care Notes
   - Health Summaries
   - Imaging studies (and any other types of tests that are different from lab results)

## Next steps
- [ ] BP summarize meeting notes
- [ ] BP develop doc data classes + statuses + what we should do (new meeting, create new doc)
- [ ] BP/MM document biz owners involved in the decision for labs + other modules

## Notes
### Carnetta
- Sometimes will be amended record
- Entered in Error may be displayed, but not a lot of detail?
- Decision in MHV, working in each module, decisions by module
- Depends on the module (ex: progress notes, lab, prescriptions, ...)
- Not all things/data domains have the same meaning
- Some statuses won’t ever progress
- Should have business rules in place with that data class when it comes to these values 
- My VA Health doesn’t address amended status well, don’t update Veterans w/ amended vs. appended
- Needed convo - let’s set this up by data class
- MHV might have displayed record then flag as Entered in Error, then wouldn’t display medication in MHV
- Biz rules were documented quite a while ago
- HIMS expects us not to show certain things
- When we stood up OH, many diff councils, one of them addressed this (ambulatory, patient engagement); sometimes allowed to change things, sometimes not
- Best person for biz rules? 
- HIMS: always important to show amended doc/addendum? 
- Business ask: When Retracted, entered in error
- Appended aka addendum
- Document data classes/statuses 
- In progress - don’t like to show things in progress until it’s finalized (unless medication for example, med order, but prescription in progress)

### Erinn
- Diff statuses
- Amended: example request from privacy, if approved by provider, wouldn’t want other info to show, typically bc error and we’re correcting it. Only new info
- Retracted status (CPRS)
- In all cases, wouldn’t want wrong info to be displayed and used in the record (legacy CPRS side) 
- For Oracle diff, don’t have same statuses as in CPRS
- In Oracle if Retracted, just a snapshot in time, info wasn’t being pulled from view

### Theresa
- Lab council, Leann Walls, RobIn? Dr. Lindsey Davenport, etc. 
- Need to meet with them
- We (synonymous with business owner). Biz owners make ultimate decision from enterprise perspective (Lindsey + Robin)

### Marci 
- API use to get OH data doesn’t behave in same way
- Need to know what those business rules are to replicate that same logic that happens in Oracle portal right now
- Data from VistA, gets filters already, business rules live upstream of us
- We need the guidance on business rules (by data class)
- Who did we work w/ on Oracle health for their portal? When documenting these business rules? Biz rules on Oracle health portal right now? 
- We need this for general Medical records in other domains too
