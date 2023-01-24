# Research and Design
**VSA eBenefits Team | December 2021**

`Candy Clark and James Adams, designers`

### Design

| Screens | Links | Last Rev | 
| :--- | :--- | :--- |
| SAHG Initial Wireframes | [Sketch](https://www.sketch.com/s/f0ac7ad9-03cf-49c4-b2a8-9fb85a88b31a/a/qeWPW75) | February 2, 2022 | 

#### Information architecture & naming
`TBD`

---

### Discovery
- [Form breakdown](https://www.sketch.com/s/f0ac7ad9-03cf-49c4-b2a8-9fb85a88b31a/a/eKJnozj)
- [Basic workflow](https://www.sketch.com/s/f0ac7ad9-03cf-49c4-b2a8-9fb85a88b31a/a/GmGW8y7)

#### Open questions
- Is there an automatic approval?
    - Meeting on Jan 24, 2022 - No, not really. Inferred issue cases are where VSE gives entitlement before an application is received, but they still need an application. No case where user would come to form and see that they've already been approved before filling out app.
- What are the exceptions and edge cases?
    - Meeting on Jan 24, 2022 - assumption is that all of our veterans own the property, might want to include language about home ownership. Can we incorporate that into an eligibility "wizard" (wizards are being retired, but something to check), maybe map to the "remarks" section.
- There is one application for both SAH and SHA, but no way for the veteran to select one. Is that determined by the reviewer? If not, what do we need to know up front?
    - Meeting on Jan 24, 2022 - Same application for both; team makes determination on which is approved based on medical diagnosis
- On the three conditional questions, we have free-form responses to enter dates and addresses - what does the back end need/accept here? Do users ever need to enter more than one previous address?
    - Meeting on Jan 12, 2022 - We will include dates and address fields, but these will NOT be required. 
- For the current condition question, what is expected?
    - Meeting on Jan 12, 2022 - We can work on wording to lead veteran to provide medical information that would help with approval.
- What is the timeline for approvals? (When should the Veteran return to check status or follow up?)
    - Meeting on Jan 12, 2022 - possibly 90 days now, Oscar to follow up 
- What is the approval artifact? Independent View page? Link in my VA?
    - Meeting on Jan 24, 2022 - If they are entitled, team gets notification to proceed. Can we pick up a pending status to display to user?; have about a 15-20% approval rate, maybe 6000-7000 applications per year. Some people are not applying, they are being referred through hospital visits
- There is an appeals check link that looks like it goes to the overall claim or appeals status tool.  What do we need to know about appeals on this benefit?
    - Meeting on Jan 31, 2022 - Should follow other claims and appeals


### Research
`TBD`

---
### Mockup changelog
#### February 2, 2022
All Screens
- Updated Need Help text to include email and option instructions for phone number

26-4555 Intro
- Updated sign in box and button color
- Removed action link, added sign in button and continue without signing in links below subway map

26-4555 Pevious Application 1 - CONDITIONAL 1, CONDITIONAL 2; 26-4555 Pevious Application 2 - CONDITIONAL 1, CONDITIONAL 2; 26-4555 Current Condition 1 - CONDITIONAL 1, CONDITIONAL 2
- removed required from fields

26-4555 Current Conditon - PRIMARY, CONDITIONAL 1, CONDITIONAL 2
- Updated question language to remove "confined" language

26-4556 Confirmation
- Updated days to complete

#### December 15, 2021

26-4555 previous Application 1, 26-4555 Previous Application 2, 26-4555 Current Condition 1
- Conditional questions moved to 2 new pages
![image](https://user-images.githubusercontent.com/84141672/146827415-5a67035b-b274-4067-af9c-b0cb4fe79843.png)
For reference only: [old pages](https://www.sketch.com/s/f0ac7ad9-03cf-49c4-b2a8-9fb85a88b31a/p/3A1D0FEF-571D-4200-93F4-0A89358881B9)

#### December 9, 2021

26-4555 Intro (Unauthenticated)
- Update Action Link component (mini component > primary component)

26-4555 Contact Information
- Added checkbox for US military base
- Added military base additional info link

26-4555 Previous Application 1, 26-4555 Previous Application 1, 26-4555 Current Condition
- Added conditional response bar
---
