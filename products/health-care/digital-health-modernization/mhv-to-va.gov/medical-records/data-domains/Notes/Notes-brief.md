# Notes: Data fields and UX considerations

Last updated: December 14, 2022

## Purpose

To serve as a source of truth around data field requirements and specifications, UX considerations, and to document a plan for feedback from SMEs or coordination with other teams (e.g., Mobile). 

## Description of domain 

## Notes data fields
(Refer to [Medical Records Domains, Fields, Capabilities](https://docs.google.com/spreadsheets/d/13KE1WhN9c_uG_m-RDEeL3xT0Q50txcBJ_IMt8BxU5II/edit#gid=1602824280) for more detail on data fields.) 

**Data field title:** 
Clinical notes? Notes from your doctor? TBD - should probably test

**Data fields to include:**
- Date/Time
- Note Title
- Location
- Signed by
- Co-signed by
- Date/time signed
- Note


## Use Cases

Can either include use case info here or link to another file - depends on how much info. 

## UX considerations

### Notes section

**When to show this section:**
- When do users see notes section in flow?  

**How to show this section:**
- What should the screen look like? What information should be seen? What should be hidden? 

**Accessibility considerations:**


**Where do Notes fit within IA?**


**View vs. share vs. download considerations:**


## Questions to answer

1. **UX:** 
2. **Business/ Engineering:**  

**Who do we need to get feedback from?** 


## Additional notes about Notes
- Notes from Jenny: On BB, this is called "VA Notes", which includes all notes (progress notes, visit summary, procedure messages...). In CCDA, encounter notes, consultation notes and procedure notes are all separated.
  - So this means we need to decide if we separate them out or keep them together and linked with the healthcare interaction/ occurrence to which they pertain. E.g., link notes with clinic visit, surgery/ procedure, etc. OR if we do it some other way? Has backend implications - need to liaise w/ both Jenny and Eric to understand better. 
