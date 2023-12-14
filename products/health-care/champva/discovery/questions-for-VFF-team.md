# Questions for Tricia Baker (Product Manager) and Megan Siddle (Program Manager) on Veteran Facing Forms Team
Meeting on Thursday, 10/26/23 at 1pm ET

Please note any questions we have for Tricia to ensure we use our time with her effectively!

Recording:
https://us06web.zoom.us/rec/share/e-hJf82-uJ6i1g5CTQZHfxhuj0_sH84va-MJqq1m4SeMOb6O8huZvHSqo0yUdHE.8cM9GL1r5f_Z9vqz

Passcode: i+q?5sZ7


## Basics
Team dynamics and project structure 

### When did VFF come into existence?
- Started Oct 2022 - audit
- Digitizing forms - Jan 2023
### I was curious if you have an artifact outlining your workflow, timeline, and processes? 
- Our project seems very strict on the amount of work we have to do with limited time, and I believe that optimizing our workflow early is going to be a key to success.
- First form (we have gotten better but can walk you through it )
- https://app.mural.co/t/vaforms5953/m/vaforms5953/1680040697895/da5ecb9e71dc699fc64511d5ee1f7a8b4e9769ad?sender=u2dd1818fc590a5b2e62f8183
- [Product Process](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Product/form_process.md)
- [Dev Process](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/tree/main/Engineering)
### What are some of the major blockers you have experienced, and how much time did they cost you?
- Content and IA - lots of content changes came after dev work completed
- Stakeholder sign off and coordination
- PR requests - time
- Spending time on custom dev - we now don’t do any custom work and follow the design system and web components to avoid churn
- Custom Error messaging - write them up front out of the box message is Please provide a response that won’t pass during accessibility. (had to go back after qa and re do dev work)
- Active voice with content
- Accessibility Testing changes
- Make sure all is ready by screen reader etc Headings
- Review mockups early on with Dev to ensure things can be done prior to starting work
- Understanding active voice when creating content - i.e. after this form is submitted should be after you submit this form

### What is your team composition, and how do you split up work to be more effective?
- Heather presented us with a document outlining the original plan of splitting our team in half to work faster, is this potentially relatable to your team? Do you have similar staffing? If so, how do you prevent the silos from losing communication? Have them cross-examine each other’s work? Have cross-”section” interdisciplinary or intradisciplinary meetings?
### Thinking back to when your team started the work, what would you go back and change or do differently? Is there some part of discovery that you skipped or missed? 
- Would have researched more on what happens after the form is submitted - this was a discovery process
- Find stakeholders sooner - 
- Getting access to Datadog, Postman etc. 
- End to end testing
- More research on use cases for Content and IA
- [Adjudication Processes](https://www.knowva.ebenefits.va.gov/system/templates/selfservice/va_ssnew/help/customer/locale/en-US/portal/554400000001018/topic/554400000004049/M21-1-Adjudication-Procedures-Manual)
### Going through the research repo, I have found a few projects that have used Figma already. Did your team look into this at all, or do you know anything about teams who have used it ahead of the VADS officially supporting it?
- What did your team find most challenging about the project? 
- Understanding all the moving parts from Platform, IA/content, Stakeholders, Central Mail, Lighthouse API, Field Operations, VBMS 
- Simple forms seem easy but when you start digging into them each of them has their own challenge. Multiple workflows, if you are the Veteran, vs the Claimant, POA, third party.  Required fields, error messaging, conditionals, List and loop, trying to map online data to PDF’s.  
- Design system and forms library were out of synch (should be ok now)





## More Resources
[M21-1, Part VI, Subpart ii, Chapter 1, Section A - General Information on Elections (va.gov)](https://www.knowva.ebenefits.va.gov/system/templates/selfservice/va_ssnew/help/customer/locale/en-US/portal/554400000001018/content/554400000179475/M21-1-Part-VI-Subpart-ii-Chapter-1-Section-A-General-Information-on-Elections?query=21-0966)

[VFF Team ZH Board: Board · VA.gov Product Team Forms (zenhub.com)](https://app.zenhub.com/workspaces/vagov-product-team-forms-634853151f5c6000165942bc/board)

