# GIBCT User Stories for testing: Landing page

As a Veteran, I want to access the GI Bill Comparison Tool so that I can use the tool to compare different GI Bill benefits and the schools that offer them.
- [ ] Select a link to the GI Bill Comparison Tool and see the GI Bill Comparison Tool landing page

## Form

### Military status

As a Veteran, I want to select my military status, so that I can see options relevant to my status.

- [ ] Select my military status from these options:
  - Veteran
  - Active duty
  - National guard / reserves
  - Spouse
  - Child

As a Veteran, I can see more information about military status

- [ ] Select "learn more" link
- [ ] See a modal with information about military status

As a spouse who has selected "Spouse" as my military status, I see an addition field appear that is relevant to my spousal status:

- [ ] Select military status: Spouse
- [ ] Field appears below military status: "Is your spouse on active duty?"
  - No  `(default selection)`
  - Yes

### GI Bill benefit selection

As a Veteran, I can choose which GI Bill benefit I am planning to use, so that I can see rates relevant to that benefit

- [ ] Select my benefit from these options:
  - Post-9/11 GI Bill (Ch 33) `(default selection)`
  - Montgomery GI Bill (Ch 30)
  - Select Reserve GI Bill (Ch 1606)
  - REAP GI Bill (Ch 1607)
  - Vocational Rehabilitation & Employment (VR&E)
  - Dependents Educational Assistance (DEA)
- [ ] Select "learn more" link next to the field label
- [ ] See a modal with information about using GI Bill benefits

If I select Post-9/11 GI Bill (Ch 33), I see these subsequent fields and options:

- [ ] Select GI Bill benefit: Post-9/11 GI Bill (Ch 33)
- [ ] Field appears: Cumulative Post-9/11 active duty service
  -  36+ months: 100% (includes BASIC) `(default selection)`
  - 30 months: 90% (includes BASIC)
  - 24 months: 80% (includes BASIC)
  - 18 months: 70% (excludes BASIC)
  - 12 months: 60% (excludes BASIC)
  - 6 months: 50% (excludes BASIC)
  - 90 days: 40% (excludes BASIC)
  - Less than 90 days 0% (excludes BASIC)
  - GYSGT Fry Scholarship: 100%
  - Service-Connected Discharge: 100%
- [ ] Select "learn more" link next to the field label
- [ ] Modal appears with information about active duty service

If I am active duty applying with the Post-9/11 GI Bill I see an alert with information about eligibility for this use case

- [ ] Select military status: active duty
- [ ] Select GI Bill benefit: Post-9/11 GI Bill (Ch33)
- [ ] Alert message appears below the GI Bill benefit field 

If I select Montgomery GI Bill (Ch 30), I see these subsequent fields and options:

- [ ] Select GI Bill benefit: Montgomery GI Bill (Ch 30)
- [ ] Field appears: Completed an enlistment of:
  - 3 or more years  `(default selection)`
  - 2 or more years
- [ ] Select "learn more" link next to the field label
- [ ] Modal appears with information about service time

If I select Select Reserve GI Bill (Ch 1606), I do not see any additional fields

- [ ] Select GI Bill benefit: Select Reserve GI Bill (Ch 1606)
- [ ] No additional fields appear

If I select REAP GI Bill (Ch 1607), I see these subsequent fields and options:

- [ ] Select GI Bill benefit: REAP GI Bill (Ch 1607)
- [ ] Field appears: Length of longest active duty tour:
  - 2+ years of consecutive service: 80% `(default selection)`
  - 1+ year of consecutive service: 60%
  - 90+ days of consecutive service: 40%
- [ ] Select "learn more" link next to the field label
- [ ] Modal appears information about tour lengths

If I select Vocational Rehabilitation & Employment (VR&E), I see these subsequent fields and options:

- [ ] Select GI Bill benefit: Vocational Rehabilitation & Employment (VR&E)
- [ ] Fields appear: 
  - Are you eligible for the Post-9/11 GI Bill?
    - Yes
    - No `(default selection)`
  - Field appears: How many dependents do you have?
    - 0 dependents `(default selection)`
    - 1 dependent
    - 2 dependents
    - 3 dependents
    - 4 dependents
    - 5 dependents

If I select Dependents Educational Assistance (DEA), I do not see any additional fields

- [ ] Select GI Bill benefit: Dependents Educational Assistance (DEA)
- [ ] No additional fields appear

### Class selection

As a Veteran, I can select how I'll be taking classes:

- [ ] Select from 3 options:
  - Online only
  - In person only `(default selection)`
  - In person and online

### Keyword entry

As a Veteran, I can enter a keyword or phrase so that I can narrow down my search results

- [ ] Type keywords into the text field
- [ ] See a list of matching results for that keyword
- [ ] See the keyword/phrase verbatim as the first option in the list
- [ ] Select any option in the list to make that the keyword/phrase I search for

### Search submission

As a Veteran, I can select the "Search Schools" button so that I can see search results that match my selections

- [ ] Select "Search schools" button
- [ ] Proceed to the search results screen

## Footer links

As a Veteran, I can view additional information about the GI Bill Comparison Tool

- [ ] Select "About this Tool" link above the footer
- [ ] See "About this Tool" page on va.gov open in a new tab

As a Veteran, I can download data on all schools in an Excel file
- [ ] Select "Download Data on All Schools (Excel)" above the footer
- [ ] Excel file downloads to my computer and can be opened in my spreadsheet application
