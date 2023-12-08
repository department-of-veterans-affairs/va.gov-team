# 526 usability read-out

October 8–10, 2018

Increase is out there. We're working on “All Claims” which is a bit of a misnomer. It is really Original, or supplemental claims for Veterans that we are confident of their ID. This is about both the ability to pull data, and high confidence that we are applying for the right person.



## What we wanted to find out

[From the research plan](research-plan-unicorns-526-late-sept.md)

- Is the new disability UI discoverable? 
  - Do Veterans understand that they can either match or free text enter through the same system?
- How does list and loop work for new disabilities?
  - Are our follow-up questions sound?
- Does assigning conditions to treatment locations work in the composite supporting evidence flow?



## Who we talked to

We recruited 5 participants and spoke with 4 of them.

- 1 woman, 3 men
- Army, Air Force, Navy, Marines
- 33–70 years old
- Michigan, Ohio, Tennessee, and Virginia

They all walked through the “all claims” version of the form starting on the intro page. They did not have to navigate _to_ the form. 



## What we learned



- More examples would be helpful
  - Probably contextual help drawer
    - Comparing retirement amount with tax-free comp pay
    - Training pay
  - Probably inline:
    - Example text for disability description
    - Dates  (what to do with a range)
- Listing contentions 
  - Most were not clear that they could free enter text after matches started coming up
    - People found the suggestions close but still confusing (for example: Looking for **knee pain** but only found knee sprain or knee strain)
  - At least one person did not understand that they might get suggestions once they started typing. 
- Dates in general
  - When did you "first receive treatment" was confusing. Might be too specific. Maybe “when did you first go to VA about this?”
  - Some conditions were rooted in a single date, others accumulated over time
  - ”I don't know, I'll just make something up” (how can we better communicate how much detail we need?)
- “Do you have evidence to support your claim” was sometimes confusing
  - “VA has it, I don't have anything to add”
  - What should I include, what shouldn't I?
- Some of the warm-up screens are more confusing. "This screen" language is ambiguous.
- When adding multiple items, people are not always sure if they need to do anything other than continue. “Do I need to save?”
- Homelessness POC: 
  - What if they don’t know a name?
  - Add place?



## Next steps

We've identified a few good improvements to pursue. *We will test these again before launch.*

- Iterate on contention claim UI to more clearly offer options

  - Decide if this is useful elsewhere and push upstream to `forms-library`

- Revise "add another" pattern to "close" last-child so that it's clearly safe to continue

  - Talk with `forms-library` folks about how to proceed

- Add examples for:

  - Retirement/Comp pay waiver
  - Training pay waiver
  - Disability description 
  - Disability dates
  - “Treatment” dates
  - Supporting evidence 
    - Do I need to tell VA about things VA has?

- Clarify or remove some interstitial screens

  - Warm up to disability types

- Explore allowing facility instead of person as POC in Homelessness question

  