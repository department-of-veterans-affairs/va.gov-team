---
title: "One VA Debt Letter in mobile app Research Findings"
product: "Mobile app One VA Debt Letter"
team: "Mobile Feature Support"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2025-12-16"
researchers:
  - "Emily DeWan"
  - "Natasha Huckleberry"
research_goals:
  - "Assess Veteran interest, value, and trust in a combined VA debt statement on mobile."
  - "Identify Veteran needs, expectations, and preferences for interacting with a combined statement in the app."
methodology:
  - "Moderated remote sessions"
  - "Semi-structured interviews"
  - "Concept testing with prototypes"
devices_used:
    desktop: 0
    tablet: 0
    smartphone: 10
    assistive_technology: 0
participants_total: 10
demographics:
  veterans: 10
  service_members: 0
  caregivers: 0
  dependents: 0
  VA_staff: 0
  age:
    "25-34": 1
    "35-44": 2
    "45-54": 4
    "55-64": 2
    "65+": 1
    unknown: 0
  education:
    high_school: 0
    some_college: 2
    associates: 1
    bachelors: 6
    masters: 1
    doctorate: 0
    unknown: 0
  location:
    urban: 7
    rural: 3
    unknown: 0
  race:
    white: 4
    black: 4
    hispanic: 1
    biracial: 0
    asian: 1
    native: 0
  disability:
    cognitive: 0
    AT_beginner: 0
    AT_advanced: 0
    screen_reader_desktop: 0
    screen_reader_mobile: 0
    magnification_zoom: 0
    speech_input: 0
    hearing_aids: 0
    sighted_keyboard: 0
    captions: 0
key_findings:
  - "Participants manage VA debts alongside other bills, focusing on due dates rather than viewing VA debt as a distinct category."
  - "Format preferences outweigh grouping; participants are more concerned with how information is presented than whether statements are individual or combined."
  - "Most participants desire consistent features across all statements, regardless of grouping."
  - "Most combined statement needs can be met with individual ones, as overpayments and copayments must be managed separately."
  - "Trust is tied to details and transparency, not format."
recommendations:
  - "Hold off on building a centralized combined debt view on mobile until strong user need is established in future research."
  - "Hold off on adding a combined debt PDF to the mobile experience until future research identifies a strong user need for this feature."
  - "Conduct user research on the existing combined statement on the website (both the HTML and PDF versions) to assess whether Veterans find it valuable in ways that differ from individual statements."
kpi_alignment:
  - "Since we are not recommending development of the combined statement feature, we do not propose any new KPIs at this time."
outcomes:
  user: "This research supports our desired user outcome by confirming limited need for a combined statement in the mobile app, allowing us to prioritize clear, transparent individual statements and features Veterans truly want."
  business: "This research supports our desired business outcome by guiding us to focus developer resources on features that match Veteran needs and reducing risk from developing under-used features."
opportunity_areas:
  - "More research on unique value of the combined statement compared to individual statements."
  - "Better screening to recruit current VA mobile app users."
further_research_needed:
  - "Refining screener questions to better identify Veterans with recent benefit overpayment debt."
  - "Refining screener questions to better recruit Veterans who currently use the VA mobile app."
  - "Exploring perspectives from Veterans who have not used the VA mobile app but have current VA debt or bills to see if there are needs that could be solved by the app."
  - "Assessing the experiences of caregivers who assist Veterans in managing debt and bills."
underserved_groups_missing:
  - "Cognitive Disability"
  - "No degree"
  - "Other than honorable"
  - "Immigrant origin"
  - "Expat (living abroad)"
  - "Biracial"
  - "Native Hawaiian or other Pacific Islander"
  - "First Nations (Canada)"
  - "Native, American Indian or Alaska Native"
secondary_research:
  - "n/a"
synthesis_tools_used:
  - "Mural"
  - "Spreadsheets"
---

# One VA Debt Letter in mobile app: Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Mobile app One VA Debt Letter, Mobile Feature Support Team**

**Date:** 12/16/2025

**Contacts:** Emily DeWan (UX Researcher), Natasha Huckleberry (UX Designer)

**[Research Readout (PDF)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/one_va_debt_letter/mobile/One-VA-Debt-Letter-mobile-app_research_readout_presentation.pdf)**  

**Jump to:**
- [Hypotheses and conclusions](#user-content-hypotheses-and-conclusions)
- [Key findings](#user-content-key-findings)
- [Recommendations](#user-content-recommendations)
- [Product User and Business Outcomes](#user-content-product-user-and-business-outcomes)
- [Key Performance Indicators](#user-content-key-performance-indicators)
- [Next Steps](#user-content-next-steps)
- [Further research directions](#user-content-further-research-directions)
- [Appendix](#user-content-appendix)
- [Research participants](#user-content-research-participants)

## Research Goals and Questions

**Goal 1: Assess Veteran interest, value, and trust in a combined VA debt statement on mobile.**

`1.` How do Veterans currently manage or track multiple debts from the VA?

`2.` What challenges or pain points do Veterans face without a centralized debt view?

`3.` Do Veterans see value in a single place to view all outstanding financial obligations on mobile?

`4.` Does having a combined statement increase or decrease Veterans’ trust in the information presented compared to individual letters?

`5.` Does the combined statement make it easier or harder for Veterans to understand their total financial situation?

**Goal 2: Identify Veteran needs, expectations, and preferences for viewing and interacting with a combined statement of outstanding debts on mobile.**

`6.` How do the use cases differ between individual copay statements and debt letters vs combined statements?

`7.` What actions or decisions would they want to take when viewing a combined statement, and is that different from viewing only individual statements?

`8.` What information or features would make a combined statement most useful?

`9.` How would Veterans prefer to interact with this document? (e.g. PDF, email, mobile app, web)

`10.` Is having a downloadable PDF of the combined statement important when using a phone?

### Veteran Journey

This touches many areas of the Veteran's journey, as the product deals with debt and healthcare. [See the Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)  

- Starting Up (Moment: Balancing Finances)
- Taking Care of Myself (Moment: Maintaining my health)
- Putting Down Roots (Moment: Maintaining my financial, social, and emotional health)
- Retiring (Moment: Taking care of my health)
- Aging (Moment that Matters: Managing my declining health)

### Outcomes we were aiming to achieve
- **Provide a Go or No-Go decision:** determine if Veterans see sufficient value in a combined statement in the mobile app, saving significant developer effort if it is not desired.
- **Define feature set for MVP:** determine which functions will be essential for launch.
- **Establish information architecture and content:** inform the design, labeling, and content hierarchy, ensuring that the combined statement is clear and reliable.
- **Determine UX flow and digital strategy:** seeing how Veterans prefer to interact with a combined statement will guide the user flow in the app.


## Methodology 


**Moderated remote sessions with Veterans: semi-structured interviews and concept testing**

We used semi-structured interviews and concept testing in this phase of discovery research. The purpose of the interviews was to understand whether or not Veterans would find use in having a combined statement within the mobile app. Concept testing was conducted by presenting participants with an early-stage design concept for how a combined statement could be displayed, in order to gather feedback on possible user flows and features.

The interview component consisted of conversation only, without any visual aids such as prototypes or screenshots of existing experiences.

For the concept testing portion, Veterans interacted with two prototypes:

* [The first prototype](https://www.figma.com/proto/yJDDdSrZkBRl7Obk0gUbxi/MFS---One-VA-Debt-Letter?page-id=2001%3A429&node-id=4560-156431&viewport=41%2C413%2C0.13&t=Bk69rL6mPXUkAaFP-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4560%3A156431&show-proto-sidebar=1&hotspot-hints=0) simulated the current experience: accessing the combined statement currently available on the website, plus viewing details for overpayment debts and copayment bills individually.
* [The second prototype](https://www.figma.com/proto/yJDDdSrZkBRl7Obk0gUbxi/MFS---One-VA-Debt-Letter?page-id=2001%3A429&node-id=4906-146809&viewport=41%2C413%2C0.13&t=Bk69rL6mPXUkAaFP-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4560%3A156431&show-proto-sidebar=1&hotspot-hints=0) illustrated a potential new design for the mobile app, showing how Veterans could view both debts and bills together.

We recruited Veterans who, according to screening responses, had both benefit overpayments and VA medical copays in the past year and had used the VA mobile app at least 3–5 times during that period. However, during the interviews, it became clear that some participants did not fully understand what overpayments were, and not all were current mobile app users. Despite these discrepancies, the interviews provided valuable insights.


## Hypotheses and Conclusions


* Veterans currently find it challenging to see the overall financial pictures of their debt and bills.
    * **Likely false**
    * Most participants use their own tools to see their entire financial situation, and are not concerned with seeing only VA ones.
* They will like the idea of a combined statement to have the current financial obligations of overpayments and copays in one place.
    * **Likely false**
    * While a handful found value in an at-a-glance overview, most participants preferred separate statements for managing each debt.
* Veterans will trust that the information provided is accurate and up to date.
    * **Definitely true**
    * Most participants report equal trust in combined and individual statements, as trust comes from details and transparency and not format. The only concern is delays in copay updates, which are expected to improve.
* The current structure of a combined statement will be overwhelming to most.
    * **Not enough information**
    * Participant overwhelm ratings ranged from 1 to 5, with slightly more responses skewing toward the lower end. No clear trend indicates that the combined statement’s current structure is overwhelming.
* They will want to view details of the debts and bills from combined statements.
    * **Likely false**
    * While participants wanted to see details, they emphasized a preference for managing (and therefore viewing) debts separately. Individual statements meet this need just as well as a combined statement.
* Veterans will find PDFs of combined statements valuable, both as a familiar format and as a way to save for reference.
    * **Maybe true**
    * PDFs are valued for record-keeping and sharing, particularly when printed or viewed on larger screens; however, these needs are also met by individual statements.
* They will still want access to individual statements and bills, and the combined statement will not be a substitute for these.
    * **Definitely true**
    * Everyone found value in the individual sections of debts and bills for separate management.


## Key Findings


1. Participants manage VA debts alongside other bills, focusing on due dates rather than viewing VA debt as a distinct category.  
2. Format preferences outweigh grouping; participants are more concerned with how information is presented than whether statements are individual or combined.  
3. Most participants desire consistent features across all statements, regardless of grouping.  
4. Most combined statement needs can be met with individual ones, as overpayments and copayments must be managed separately.  
5. Trust is tied to details and transparency, not format.  

## Details of Findings 


### Finding 1
Participants manage VA debts alongside other bills, focusing on due dates rather than viewing VA debt as a distinct category.  
- They use tools such as spreadsheets, calendars, and automation to manage their overall financial picture.  

    > _"Auto pay usually helps a lot, but other than that, I do keep a a spreadsheet as well. With who's the company that I need to pay and how much is the bill? And I also keep a tab on how much money is in my checking account to pay those bills." -P06_

    > _"I have all my recurring bills in my Google Calendar set up with reminders at least a day before, saying this bill is due on this day. So I'll go in and take a look – let me see what other bills are due within a couple of days of that." -P07_

- Payments are generally planned around due dates and income cycles, without special treatment for VA debt.  

    > _"The end of the month is when I make sure that all bills have been paid. Most of my bills are actually due at the beginning of the following month, so I just try to have it paid by the first few days of the end of the prior month." -P06_

    > _"With my pay period, if it lands on the 15th, I try to get everything from the 1st to the 14th or 15th and pay it around that time. Then, for anything toward the end of the month, I plan around those dates so the bills are paid at that time." -P09_

- Most participants (7 of 10) feel neutral about whether combined statements make it easier or harder to understand their overall financial situation. A few (2 of 10) appreciate quick overviews, but still need separate details for any management.
- No one reported challenges from the lack of a centralized debt view.  

### Finding 2
Format preferences outweigh grouping; participants are more concerned with how information is presented than whether statements are individual or combined.  
- PDFs are valued for record keeping or error review, primarily for printing or viewing on a larger screen.  

    > _[when might you use this PDF?] "Only if I knew that there were errors that I needed to discuss, like line item by line item. But that's the only situation where I've ever felt any kind of need to do anything like that." -P04_

    > _"I like to print things out and be able to physically see it if I need to keep it for my records, because if the computer's down or the cell phones down, I don't have quick enough access to it." -P01_

    > _"I have to zoom in to see stuff – that's why I like the like the laptop and all that. -P03_

- A few (2 of 10) suggested sharing the PDF with someone who assists with finances.  

    > _"If I wanted to download the statement, like I'm trying to get financial help and all that. This'd be a good where I could download it and print it out and send it to somebody that's going to help me with payment." - P03_

- List views are seen as helpful for resolving bills or debt, and reviewing transaction details.  

### Finding 3
Most participants desire consistent features across all statements, regardless of grouping.  
- 9 of 10 listed key needs for both as transaction details, contact information, and resolution methods.

    > _Only one participant had different desires: options to resolve on the individual, and details of transactions on the combined._

### Finding 4
Most combined statement needs can be met with individual ones, as overpayments and copayments must be managed separately.

- There’s limited perceived value in a combined view, especially on mobile.  

    > _"But me in general, I would not use the whole combined PDF statement. I'm the type of person that wants to attack one bill at a time." -P03_

- The few who do see value for their own use (2 of 10) want immediate answers about what is owed and to pay all debts at once, but only one would want to do so in the app.

- Although a few (2 of 10) participants want combined PDFs to share with others, detailed management always requires separated information.  

    > _"I honestly kind of like them separated because there are two primary categories. It's probably just the way that my brain likes to compartmentalize things and shift things from one to the next. 1 is straight up just a bill, and then one is an error in my favor of that turned out to not be in my favor, you know, however you want to say it." -P04_

### Finding 5
Trust is tied to details and transparency, not format.  
- Most participants report equal trust in both, so long as statements are transparent and detailed.

    > _"It's the same information, it's just displayed differently." -P04_

    > _"So either being separated or together: I don't think that one seems more trustworthy to me." -P07_

---

## Additional Insights

_These insights either do not reflect major patterns and require further research for validation, or they are out of scope._

Several participants expressed frustration over the lack of details in overpayment transactions.
- Currently, overpayment debt transactions can only show "balance increase" and "balance decrease." Four participants wanted clearer information about what triggers the changes and the sources of payment.

    > _"Is this balance increase supposed to give us a payment or time frame where the balance increase happened? So, where was it stemming from, what payment, whatever information would help." -P09_

    > _"What is happening behind the scenes, like why there would be a decrease or whatever – it just says increase or decrease." -P11_

Some participants reported challenges when working with community care.
- Community care allows Veterans to receive medical services from external providers when VA cannot deliver. Two participants described difficulties with submitting claims and navigating separate systems.

    > _"It's still just a pain in the butt that comes with the hurry-up-and-wait to even get a community care appointment. Sometimes the mileage claims are difficult, especially when it's a community care appointment, because you can't use the regular VA website. … It has to go through manual review status, which can take weeks to months to get approved or denied. I have had claims denied even though they were community care appointments." -P07_

    > _"Community care kind of gets lost. So even though it's still the VA I have to go elsewhere to do that and it's very clunky. I eventually I get this referral number, which gives me the authorization to seek the care. But there is no link between the community care system and the VA system, even though they're both called VA systems. I have to go to different websites – different passwords, different websites." -P08_


## Recommendations


1. **Recommendation**: Hold off on building a centralized combined debt view on mobile until strong user need is established in future research.
    - *Supporting evidence: Most participants found little added value in a combined statement, especially on mobile. No one reported challenges due to the lack of a centralized view.*
2. **Recommendation**: Hold off on adding a combined debt PDF to the mobile experience until future research identifies a strong user need for this feature.
    - *Supporting evidence: Although almost everyone found value in the combined statement PDF, their needs were met with individual statements, especially for print and large-screen use.*
3. **Recommendation**: Conduct user research on the existing combined statement on the website (both the HTML and PDF versions) to assess whether Veterans find it valuable in ways that differ from individual statements. Use the results to further inform whether a combined statement should be built in the mobile app.
    - *Supporting evidence: Participants appreciated the combined PDF’s familiar format and summary view, but most needs were met by individual statements. Sending the combined PDF to someone for financial assistance was a unique use case, but it remains unclear whether Veterans would routinely download and use it in practice. Further research will clarify how Veterans actually interact with these statements and inform mobile app decisions.*


## Product User and Business Outcomes

### Desired User Outcome
This research supports our desired user outcome by confirming limited need for a combined statement in the mobile app, allowing us to prioritize clear, transparent individual statements and features that better match how Veterans manage their debts. This helps us avoid unnecessary complexity and redundancy.

### Desired Business Outcome
This research supports our desired business outcome by guiding us to focus developer resources on features that match Veteran needs and reducing risk from developing under-used features.


## Key Performance Indicators

Since we are not recommending development of the combined statement feature, we do not propose any new KPIs at this time.


## Next Steps

Conduct targeted user research on the current combined statement experience on VA.gov (both HTML and PDF).
_A combined effort with the Financial Management team_
- Specifically assess whether Veterans find unique value in the combined statement compared to individual statements, and identify practical use cases.
- Use these insights to inform future decisions about implementing a combined statement view or PDF in the mobile app.


## Further research directions

Additional research could be conducted to address gaps from the current study, including:
- Refining screener questions to better identify Veterans with recent benefit overpayment debt.
    - All participants reported overpayments, but some confused the term with other types of medical debt beyond copays.
- Refining screener questions to better recruit Veterans who currently use the VA mobile app.
    - Everyone declared they used the VA mobile app at least 3-5 times per year. However, one mistook the mobile website for the app, another described My HealtheVet, and one had not used the app in over a year.
- Exploring perspectives from Veterans who have not used the VA mobile app but have current VA debt or bills to see if there are needs that could be solved by the app.
- Assessing the experiences of caregivers who assist Veterans in managing debt and bills.


## Appendix

### Research documents

- [Research report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/one_va_debt_letter/mobile/research-findings.md)
- [Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/one_va_debt_letter/mobile/product-brief.md)
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/one_va_debt_letter/mobile/research-plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/one_va_debt_letter/mobile/conversation-guide.md)
- [Interview transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/Debt%20Resolution/one_va_debt_letter/mobile/transcripts)
- [Interview notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/Debt%20Resolution/one_va_debt_letter/mobile/session-notes)
- [Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffair[…]fe8c3e32346aba1ff9371dca9ab84?sender=u456b54784628aa29fbf80697)

### Tools used for Synthesis

- Mural (observer notes, affinity mapping)
- Spreadsheets (notes during sessions, tagging keywords, pulling quotes)
  
### Pages and applications used

- [Prototype: Rough current experience](https://www.figma.com/proto/yJDDdSrZkBRl7Obk0gUbxi/MFS---One-VA-Debt-Letter?page-id=2001%3A429&node-id=4560-156431&viewport=41%2C413%2C0.13&t=Bk69rL6mPXUkAaFP-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4560%3A156431&show-proto-sidebar=1&hotspot-hints=0)
- [Prototype: Design explorations](https://www.figma.com/proto/yJDDdSrZkBRl7Obk0gUbxi/MFS---One-VA-Debt-Letter?page-id=2001%3A429&node-id=4906-146809&viewport=41%2C413%2C0.13&t=Bk69rL6mPXUkAaFP-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4560%3A156431&show-proto-sidebar=1&hotspot-hints=0)


### Other supporting documents created

- [VA Recruitment Checker for Equality](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?gid=1645174246#gid=1645174246)
- [Transcripts with tags and quotes](https://dvagov-my.sharepoint.com/:x:/r/personal/suzanne_middaugh_va_gov/Documents/Mobile%20Feature%20Support%20(MFS)/2025-11_OneVADebtLetter/Supporting%20Documents/Transcripts%20with%20tags%20and%20quotes%20-%201VADL.xlsx?d=wf2b7c36b7e6e4a7e85c0cfdf5e2e3661&csf=1&web=1&e=Did9TR)
- [Notes with synthesis and insights](https://dvagov-my.sharepoint.com/:x:/r/personal/suzanne_middaugh_va_gov/Documents/Mobile%20Feature%20Support%20(MFS)/2025-11_OneVADebtLetter/Supporting%20Documents/Notes%20_%20Synthesis%20_%20Insights%20-%201VADL.xlsx?d=wb08bdc76effb4261af1d6b2d2d6ca8c6&csf=1&web=1&e=nhDuK0)
- [Study participants](https://dvagov-my.sharepoint.com/:x:/r/personal/suzanne_middaugh_va_gov/Documents/Mobile%20Feature%20Support%20(MFS)/2025-11_OneVADebtLetter/Supporting%20Documents/Study%20participants.xlsx?d=w202b76fc4fbe45c4b7ece32b6971399b&csf=1&web=1&e=qhPuFK)
- [Study prep logistics](https://dvagov-my.sharepoint.com/:x:/r/personal/suzanne_middaugh_va_gov/Documents/Mobile%20Feature%20Support%20(MFS)/2025-11_OneVADebtLetter/Supporting%20Documents/Study%20prep%20logistics%20-%201VADL.xlsx?d=wc61bb0864a5248d9975334d0b5581e33&csf=1&web=1&e=J4y645)


### Research participants 

#### Recruitment criteria

Primary criteria (must-haves)

- `Had a debt balance from benefit overpayments in the last year`
- `Received VA medical copay bills in the last year`
- `Complete session on their smartphone via the Zoom app`
- `Download the Figma app ahead of time, though not creating an account`
- `No assistive technology users or accessibility features turned on`
    - _This is due to prototype limitations; we will be testing with assistive technology at a later date_

Secondary criteria (nice-to-haves)

- `At least 6 ages 55+`
- `At least 3 under age 35`
- `At least 6 with cognitive disability`
- `At least 4 people of color`
- `At least 3 in a rural area`
- `At least 3 without a degree`
- `At least 2 with immigrant origins`
- `At least 1 woman`
- `At least 1 from the LGTBQ+ community`


#### Demographics 

We talked to **10 participants.**

Audience segment:
* Veterans: 10  
* Caregivers: 0 
* Family members of a Veteran: 0  


Gender:
* Male: 8 
* Female: 2 


LGBTQ+: 2 identified as LGBTQ+, though we did not ask any further specifics
* Transgender: unknown
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: unknown
* Gay, lesbian, or bisexual: unknown


Devices used during study: 
* Desktop: 0 
* Tablet: 0 
* Smart phone: 10 
* Assistive Technology: 0


Age:
* 25-34: 1
* 35-44: 2
* 45-54: 4
* 55-64: 2
* 65+: 1
* Unknown: 0


Education:
* High school degree or equivalent: 0
* Some college (no degree): 2
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 6
* Master's degree: 1
* Doctorate degree: 0
* Unknown: 0


Geographic location:
* Urban: 7
* Rural: 3
* Unknown: 0


Race:
* White: 4
* Black: 4
* Hispanic: 1
* Biracial: 0
* Asian: 1
* Native: 0


Disability and Assistive Technology (AT):
* Cognitive: 0
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 0
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0


#### Underserved groups we haven’t talked to 

This research does not include the perspectives of the following marginalized Veteran groups:
- Cognitive Disability
- No degree
- Other than honorable
- Immigrant origin
- Expat (living abroad)
- Biracial
- Native Hawaiian or other Pacific Islander
- First Nations (Canada)
- Native, American Indian or Alaska Native

Table of underserved groups of Veterans showing how many of each were in this study as compared to target numbers:

![Table of underserved groups of Veterans showing how many of each were in this study as compared to target numbers. Data available in the table below this image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/one_va_debt_letter/mobile/supporting-files/VA_recruitment_checker.png)

#### A more accessible version of the table in the above image

### Recruitment of underserved groups in One VA Debt Letter

| Category                                                                                                                                   | Target Group | Target % | Target # | # in Study | Target Achieved? | p1 | p2 | p3 | p4 | p5 | p6 | p7 | p8 | p9 | p10 | p11 | p12 |
|--------------------------------------------------------------------------------------------------------------------------------------------|--------------|----------|----------|------------|------------------|----|----|----|----|----|----|----|----|----|-----|-----|-----|
| All participants                                                                                                                           | Total        | n/a      | n/a      | 12         | n/a              | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a  | n/a  | n/a  |
| Assistive Tech (AT) users                                                                                                                  | Total        | n/a      | n/a      | 0          | n/a              | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a  | n/a  | n/a  |
| No-show participants                                                                                                                       | Total        | n/a      | n/a      | 2          | n/a              | n/a | n/a | 1   | n/a | n/a | n/a | n/a | n/a | n/a | n/a  | n/a  | 1    |
| Age 55-64+                                                                                                                                 | General      | 50%      | 6        | 3          | no               | 0   | 0   | 0   | 0   | 1   | 0   | 0   | 1   | 0   | 1    | 0    | 0    |
| Cognitive Disability                                                                                                                       | General      | 50%      | 6        | 0          | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0    | 0    | 0    |
| Mobile user                                                                                                                                | General      | 50%      | 6        | 0          | no               | 1   | 0   | 1   | 1   | 1   | 1   | 1   | 1   | 1   | 0    | 1    | 0    |
| Rural                                                                                                                                      | General      | 25%      | 3        | 3          | yes              | 1   | 0   | 0   | 0   | 1   | 0   | 0   | 0   | 1   | 0    | 0    | 0    |
| No degree                                                                                                                                  | General      | 25%      | 3        | 0          | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0    | 0    | 0    |
| Other than honorable                                                                                                                       | General      | 21%      | 3        | 0          | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0    | 0    | 0    |
| Immigrant origin                                                                                                                           | General      | 17%      | 3        | 0          | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0    | 0    | 0    |
| Women                                                                                                                                      | General      | 10%      | 2        | 2          | yes              | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 1   | 1    | 0    | 0    |
| Expat (living abroad)                                                                                                                      | General      | .4%      | 1        | 0          | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0    | 0    | 0    |
| Black or African American                                                                                                                  | Race         | 15%      | 2        | 4          | yes              | 1   | 0   | 1   | 0   | 0   | 1   | 0   | 0   | 1   | 0    | 0    | 0    |
| Hispanic, Latino, or Spanish origin                                                                                                        | Race         | 12%      | 2        | 1          | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 1   | 0   | 0    | 0    | 0    |
| Biracial                                                                                                                                   | Race         | 3.9%     | 1        | 0          | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0    | 0    | 0    |
| Asian                                                                                                                                      | Race         | 2.7%     | 1        | 1          | yes              | 0   | 0   | 0   | 0   | 0   | 0   | 1   | 0   | 0   | 0    | 0    | 0    |
| Native Hawaiian or other Pacific Islander                                                                                                  | Race         | .3%      | 1        | 0          | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0    | 0    | 0    |
| First Nations (Canada)                                                                                                                     | Race         | n/a      | 1        | 0          | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0    | 0    | 0    |
| Native, American Indian or Alaska Native                                                                                                   | Race         | 1.6%     | 1        | 0          | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0    | 0    | 0    |
| Gay, lesbian, or bisexual                                                                                                                  | LGBTQ+       | n/a      | 1        | 2          | yes              | 0   | 0   | 0   | 0   | 0   | 1   | 0   | 0   | 1   | 0    | 0    | 0    |
| Transgender                                                                                                                                | LGBTQ+       | n/a      | 1        | 0          | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0    | 0    | 0    |
| Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman                                 | LGBTQ+       | n/a      | 1        | 0          | no               | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0    | 0    | 0    |
