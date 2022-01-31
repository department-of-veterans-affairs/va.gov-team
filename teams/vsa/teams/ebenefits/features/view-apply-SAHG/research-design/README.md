# Research and Design
**VSA eBenefits Team | December 2021**

`Candy Clark and James Adams, designers`

### Design

| Screens | Links | Last Rev | 
| :--- | :--- | :--- |
| SAHG Initial Wireframes | [Sketch](https://www.sketch.com/s/f0ac7ad9-03cf-49c4-b2a8-9fb85a88b31a/a/qeWPW75) | December 9, 2021 | 

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


### Research
`TBD`

---
### Mockup changelog

#### December 15, 2021

46-4555 previous Application 1, 45-4555 Previous Application 2, 46-4555 Current Condition 1
- Conditional questions moved to 2 new pages
![image](https://user-images.githubusercontent.com/84141672/146827415-5a67035b-b274-4067-af9c-b0cb4fe79843.png)
For reference only: [old pages](https://www.sketch.com/s/f0ac7ad9-03cf-49c4-b2a8-9fb85a88b31a/p/3A1D0FEF-571D-4200-93F4-0A89358881B9)

#### December 9, 2021

46-4555 Intro (Unauthenticated)
- Update Action Link component (mini component > primary component)

46-4555 Contact Information
- Added checkbox for US military base
- Added military base additional info link

46-4555 Previous Application 1, 46-4555 Previous Application 1, 46-4555 Current Condition
- Added conditional response bar
---
