# Immunizations: Data fields and UX considerations

Last updated: February 7, 2023 [Change Log](#change-log)

## Purpose

To serve as a source of truth around data field requirements and specifications, UX considerations, and to document a plan for feedback from SMEs or coordination with other teams (e.g., Mobile). 

## Description of domain

Immunizations represent vaccines obtained during service and after service. 

## Relevant links

[Immunizations Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/immunizations/decision-log.md)

[Overall initiative Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/decision-log.md)

Sketch files: [Wire flow](https://www.sketch.com/s/0803544d-e78c-423a-a70e-7db01a9a31c7/a/v84qOV8) and [low-fi screens](https://www.sketch.com/s/0803544d-e78c-423a-a70e-7db01a9a31c7/a/KvJb521)

[Use cases, potental IA and user flows (will need updating)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1670275244338/a7ecd52750cd539d1fceea40b1879336b8a339d2?invited=true&sender=u7de68ed54bc434b67b630908)

[Flow](https://www.sketch.com/s/0803544d-e78c-423a-a70e-7db01a9a31c7/a/09RJq32) 

[Medical Records Competitive Analysis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1659473055858/08b0e54ba40761f0893fc1c13454882a645e47ff?wid=0-1663621688531&sender=u7de68ed54bc434b67b630908)

[Medical Records Discovery Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1661955319813/0edab3b186f83ecf243781fd24de5fc683a52266?sender=u7de68ed54bc434b67b630908)

[Medical Records Generative Research Findings Readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-11-medical-records-readout.md)

[Meaningful use standards documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/meaningful-use-standards) - provided by Patty Henry between 1/12/2023 - 1/17/2023.  These standards originated during the Obama administration. MyHealtheVet used to get measured against these standards, and while they no longer do, these standards are still considered best practice and pertain to viewing, downloading, and transmitting.

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

None identified to date.  

## UX considerations

### When to show Immunizations section
- When do users see immunization section in flow? Idea as of 12/14/22 (subject to change): 

![image](https://user-images.githubusercontent.com/100814257/207696619-8f9b356b-6999-4d58-a33c-5e8d93491546.png)

**Where do Immunizations fit within IA?**

Ideas as of 12/14/22 (subject to change - currently being tested): 

<img width="630" alt="image" src="https://user-images.githubusercontent.com/100814257/207696991-74b4338f-9921-48bb-9809-161f7c5ed63a.png">

### How to show Immunizations section
- What should the screen look like? What information should be seen? What should be hidden? 

1-2 things to show: 
- Date received
- Reactions

Less important: 
- Series
- Facility name
- Comments -> "View more" functionality
    - Comments: if more than 50 characters, hide in "View More" functionality

**View vs. share vs. download considerations:**

Building out pdfs -> better to build as doing it? 
- Need to confirm w/ pdf accessibility specialists - Shared Support folks
- What does the VA use for creating pdfs
    - Are we needing to design a pdf? Or are they automatically generated? -> 
    - Still goign to be using BB? Using functionality vs. branding? Domains in how pdf formatted - need to be redesigned. Not using BB branding/ playing down.  
    - Consideration is if someone wants to print off immunization-specific information/ other domain-specific information -> should probably enable

If add download functionality (e.g., print button), requires engineering work to enable download functionaltiy that produces pdf. Print - getting similar result (print off, save if want - depending on browser) - does not require engineering lift. Probably one off engineering lift for every button. 
- might have to add download button - unclear if people understand print = download if you want. 
- Could explore this in testing - or might be dictated by business

### Accessibility considerations:

_Accessibility considerations specific to Immunizations:_
Added 1/23/2023 by Marci McGuire - Eric Voshall learned that in the Lighthouse API, the vaccine name and dosage are also inside the same string so it is not currently possible to break those into two separate values.

### Research that relates to Immunizations

[Health Records: Medications, Allergies, and Immunizations Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/research/health-record/research-findings.md)

- Did not probe around language related to Immunizations -> need to either align with Mobile or confirm in testing whether should use term "Immunizations" or "Vaccines" (Mobile uses Vaccines)

- Immunizations were most often grouped either in their own category (labeled "Immunizations," "Shots," "Shots/Immunizations," "Vaxx" or "Vac"), in Personal info/About me-esque category ("Basic Health," Personal Health," "Current Status," "Chart," or "Ongoing Medical") or by medical specialty ("General Practitioner").

<img width="1256" alt="image" src="https://user-images.githubusercontent.com/100814257/207725610-ad83e061-508b-41ed-ae02-58449b469179.png">


- Time was a consistent theme across interviews. Participants expected information to be organized in relation to time - most often with most recent information more easily accessible, particularly if a patient needed to do anything with information (e.g., schedule a follow-up visit, or ask a question for a healthcare provider). In this way, time intersected with urgency, in that some participants described wanting recent information that needed to be acted upon made immediately evident in health records.

- What does this mean for Immunizations? 
    - Time x urgency = need to flag when immunizations are due
    - Unclear implications for organizing immunizations -> by age? Chronologically? 

## Handling Data Discrepancies
Where there are differences between BB and Health Summary, follow the data and descriptions of that data as they are represented in Health Summary.

## Questions to answer

**UX:** 
Q. Do users prefer immunizations or vaccinations? 
   - A. Not sure, but there is preferred language by VA which what should be followed. Language as follows: 

Vaccine = actual shot/ product that you take to stimulate an immune response against a disease.

Immunization is the process of becoming protected against a disease.

Vaccination is the process of getting a vaccine to become protected against a disease.

Use "vaccine" on modernized pages. 

Slack conversation [found here](https://dsva.slack.com/archives/C03Q2UQL1AS/p1671656442359999).

    
Q. What information do they want most readily accessible relating to their vaccines? (Has mobile answered any of those questions?)
    - A. Mobile did not answer most questions as they were more time constrained and trying to solve COVID vaccination needs. TBD based on testing? 
    
Q. Are there any opportunities to make pdfs more accessible?
    - A. Need to check with accessibility specialists. 

**Business/ Engineering:** 
Q. Are we able to change the name of any data fields to make them more intuitive? 
    - A. Mobile pulled string of data - unable to customize. Might depend on API, but possibly/probably no. 

Q. Do we need to design the pdf or are they automatically generated? What should we be concerned about re: pdfs? e.g., display certain things in pdfs vs. view online, because confidential (ask Carnetta, Bresha, Lauren - possibly during design review)
    - Lauren: PHR includes random logic in it for formatting pdfs. Don't want to touch it right now. 
    - Marci: Framework - if there's data, it gets put in. 
    - Lauren: There's an alternative - a plain text file for accessibility purposes. 1095-B -> major thing that kept from going out bc the pdf was not remotely accessible. Factor that in - if going to be blocker. 
    - Jonathan: 1010-CG: Option to download completed form - engineers made accessible. But was much shorter 
- Where do the pdfs "come" from? How are they created? (ask Eric)
    

**Who do we need to get feedback from?**

_Mobile team:_ Already done vaccines on mobile app; what lessons have they learned? How do our designs need to align with theirs? 

- Met w/ Mobile (Alex & Lauren) in December. 
- Key takeaways: 
    - Their primary focus was on showing you were vaccinated against COVID -> mostly interested in "View" functionality, not download, share, or print
    - Recommended following up with Matt Hall, Miko, Ashley Matthews for more insights
    - The information provided was what was produced by API. Some was structured but most was string and they were unable to add in any logic to make for better UX.  
    - [Link to notes from meeting](https://docs.google.com/document/d/10C0NH72V6wigtXlmc2LSnJZfB6GbdtUFvQOf3LPsng0/edit?pli=1)


## Lessons learned


## Backlog of potential features/ Ideas Parking Lot


## Additional notes

- The legacy MHV allows users to contribute patient generated data (e.g., when users get a flu shot). This domain represents an opportunity to determine the role of patient-generated health data (PGHD). While incorporating PGHD is not feasible in the MVP, this represents a backlog feature in which we might enable integration with other systems to pull in data (e.g., from a CVS pharmacy where users obtain vaccines) or in which users might contribute data. 
- Differentiate between overdue and not overdue immunizations -> current Blue Button only shows when was last shot, but not what's overdue. This was requested by a couple participant as a useful feature. Would it be possible? -> technical implications? (ask Eric)
- In MyChart/Epic -> They separate immunizations into preventive records - flu, etc. Wonder if something missing - grouping immunizations into preventive care? Preventive care has overdue, not due; in Immunization section, has list of immunizations gotten. 
    - Preventive care - ongoing (if overdue) - cues to action here
    - Immunization - complete list of all immunizations
    - Our suggestion: keep all immunizations together, but have section that flags overdue shots

- Bobby: Gave too much info at once in previous work. Want to figure out 1-2 most important things. Inside page - have COVID, on COVID card, says when it was done. If need more details, click - see facility, etc. Less important info. When BB created - put emphasis on doctors, facilites, and veterans - not solely focus on Veterans. Veterans provided feedback that info presented was TMI. 

- Share: use SM for sharing; is sharing with non-VA HCPs in scope? Or is that backlog feature, post MVP? Share directly to portal or via email? Need to talk to policy teams to determine implications/ limitations? Shouldn't use Google, etc. 
        - Lexi: how are data shared via SM? (CCDA?) Lichelle might know as well. 
        - Manual process -> send message saying thumbs up, or attach pdf. Message can become part of medical record - unclear if message copied/pasted into notes, or if push button on their end and added. But definitely goes into Notes. 

- VHIE notes -> implications beyond immunizations: 
    -  Opt Out: I choose not to electronically share my VA health record with my non-VA providers. I understand this means they may not have a complete view of my medical history which could put me at risk.
    - Opt Back In: I choose to resume electronically sharing my VA health record with my non-VA providers so they may have a more complete view of my medical history.
    - Beginning April 17, 2020, VA will seamlessly and securely share your electronic health record with community providers who are part of your care team through the Veterans Health Information Exchange (VHIE). This information helps all your providers: For more information on the benefits of sharing, visit the VHIE site before updating your preference https://www.va.gov/VHIE/

- Questions related to VHIE:    
    - Where to put this? Profile or in Medical Records section? 

- Sharing the VA Health Summary notes -> implications beyond immunizations: 
    - Intended to share w/ providers and others. Can share using email. 

- Previewer: View as live on website - see if need preview/view in Medical Records before downloading report. Viewing = viewing in browswer. 
    - If displaying on website, why need previewer?
    - When download -> value of previewer is see what going to download before downloading. 

Thoughts on where the Immunizations section should go: 
Bobby notes: should be close to meds/ allergies, because those are "together" conceptually in other patient portals. 

Robyn: Agree - participants often grouped these somewhat together. Immunizations + allergies + medications -> "about me" info. 

## Change Log

|  Date           | Changed By       | Description of Change                                                                                               |
| ----------------| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
|02/07/2023       |Marci McGuire     |Added Handling Data Discrepancies section, link to Immunizations Decision Log                                                             |
|                 |                  |                                                                                                                     |
|                 |                  |                                                                                                                     |

