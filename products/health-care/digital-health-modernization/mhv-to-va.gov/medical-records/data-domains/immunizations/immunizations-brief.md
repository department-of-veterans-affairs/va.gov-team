# Immunization: Data fields and UX considerations

Last updated: December 14, 2022

## Purpose

To serve as a source of truth around data field requirements and specifications, UX considerations, and to document a plan for feedback from SMEs or coordination with other teams (e.g., Mobile). 

## Description of domain

Immunizations represent vaccines obtained during service and after service. 

## Immunization data fields
(Refer to [Medical Records Domains, Fields, Capabilities](https://docs.google.com/spreadsheets/d/13KE1WhN9c_uG_m-RDEeL3xT0Q50txcBJ_IMt8BxU5II/edit#gid=1602824280) for more detail on data fields.) 

**Data field title:** Immunizations

**Data fields to include:**
- Immunization
- Date received
- Location
- Reaction
- Comments
- Series

## Use Cases

Things to think about that inform use cases: 
- Immunizations are not domain that people need to monitor regularly (e.g., compared with medications)
- Veterans and Caregivers might need to share their immunizations record with new HCPs to determine when they need booster shots
- Some immunizations are one and done, others require regular or semi-regular boosters (e.g., flu shot; COVID shots; tetanus shots), others are age based (e.g., shingles shots)

**Common Use Cases**

What do people want to use their immunization records for: 
- To prove you have been immunized (e.g., job requirements, travel requirements, COVID-specific requirements)
- To identify, either alone or with an HCP, that you need or don't need an immunization (e.g., age-based immunizations; spacing between immunizations)

Additional features that people would like: 
- "Overdue" flag or "upcoming" flag for immunizations that patients need to receive (e.g., COVID booster, tetanus shot)


**Edge Cases**


## UX considerations

### Immunizations section

**When to show this section:**
- When do users see immunization section in flow? 

Bobby notes: should be close to meds/ allergies, because those are "together" conceptually in other patient portals. 

Robyn: Agree - participants often grouped these somewhat together. Immunizations + allergies + medications -> "about me" info. 

**How to show this section:**
- What should the screen look like? What information should be seen? What should be hidden? 

1-2 things to show: 
- Date received
- Reactions

Less important: 
- Series
- Facility name
- Comments -> "View more" functionality
    - Comments: if more than 50 characters, hide in "View More" functionality

**Accessibility considerations:**


**Where do immunizations fit within IA?**


**View vs. share vs. download considerations:**

Building out pdfs -> better to build as doing it? 
- Need to confirm w/ pdf accessibility specialists - Shared Support folks
- What does the VA use for creating pdfs

## Questions to answer

1. **UX:** Any language considerations? Do users prefer immunizations or vaccinations? What information do they want most readily accessible relating to their immunizations? (Has mobile answered any of those questions?)
2. **Business/ Engineering:** Are we able to change the name of any data fields to make them more intuitive? 

**Who do we need to get feedback from?**

-**Mobile team:** Already done vaccines on mobile app; what lessons have they learned? How do our designs need to align with theirs? 


## Additional notes

- The legacy MHV allows users to contribute patient generated data (e.g., when users get a flu shot). This domain represents an opportunity to determine the role of patient-generated health data (PGHD). While incorporating PGHD is not feasible in the MVP, this represents a backlog feature in which we might enable integration with other systems to pull in data (e.g., from a CVS pharmacy where users obtain vaccines) or in which users might contribute data. 
- Differentiate between overdue and not overdue immunizations -> current Blue Button only shows when was last shot, but not what's overdue. This was requested by a couple participant as a useful feature. Would it be possible? -> technical implications? (ask Eric)
- Separate immunizations into preventive records - flu, etc. Wonder if something missing - grouping immunizations into preventive care? Preventive care has overdue, not due; in Immunization section, has list of immunizations gotten. 
    - Preventive care - ongoing (if overdue) - cues to action here
    - Immunization - complete list of all immunizations
    - Our suggestion: keep all immunizations together, but have section that flags overdue shots

- Bobby: Gave too much info at once in previous work. Want to figure out 1-2 most important things. Inside page - have COVID, on COVID card, says when it was done. If need more details, click - see facility, etc. Less important info. When BB created - put emphasis on doctors, facilites, and veterans - not solely focus on Veterans. Veterans provided feedback but TMI. 

- Share: use SM for sharing; is sharing with non-VA HCPs in scope? Or is that backlog feature, post MVP? Share directly to portal or via email? Need to talk to policy teams to determine implications/ limitations? Shouldn't use Google, etc. 
        - Lexi: how are data shared via SM? (CCDA?) Lichelle might know as well. 
