Authenticated Experiences: Comparative Analysis
============================================

`Draft`

September/October 2021

Background and goals
--------------------

Through the course of working on the Auth Experience team, we've identified an opportunity to expand our knowledge on best practices in personalized and authenticated experiences. We frequently solicit screenshots and log into our own accounts to compare and see what's out there, but typically don't have time for formal documentation.

The goal of this activity is to answer specific research questions and create a knowledge base of best practices to share with the authenticated experience team.

Research Questions
------------------

### 1. Personalization

1.1 Comparing personalization of civic services to the private sector (banking, insurance): 

-   Hard to find recent information about this, case studies, etc. Much of what's published is written by consultancies who profit from the government believing what they write (e.g. Accenture)
-   What are the similarities?
    -   Rooted in trust
    -   Building a sense of knowing the users needs and motivations through tailored recommendations and surfacing relevant content/tasks
    -   Need to tailor services based on access
        -   Netflix offers download option in India because connectivity is so inconsistent
        -   What can we learn from private sector organizations operating in limited markets?
    -   Successful when framed as a benefit to the individual
-   What are the differences?
    -   Private sector 
        -   One-to-one "marketing"
        -   Always has page real estate dedicated to marketing and services that user doesn't already have, such has rewards and special offers
        -   More robust options for personal data you can manage (multiple addresses, phone numbers, preferred names, nicknames for accounts, etc)
        -   Data is licensed to create personalization
            -   Tracking from one site to another (e.g. displaying ads from something you saw on one site on another site) - more creepy
        -   At times, asking for a lot of seemingly extraneous information or engagement to create personalization 
            -   John Hancock life insurance gathering health data to qualify customers for discounts 
            -   Consider how much you need to engage with services like Spotify to "teach" it about you
    -   Civic services
        -   Sparse personalization options - kind of "bare bones"
        -   Face the of integrating across many disparate agencies and touchpoint across government, lack of cross-departmental links and access points. 
        -   Task focused, usually on 1-2 things
        -   Users don't have choices for these services
        -   Can have more significant security and technology constraints
            -   PII
        -   SO many unanswered questions brought up in [this article](https://medium.com/@marli_k/five-things-to-think-of-when-personalizing-digital-government-services-81b70b578efb). Research is critical.
            -   What are the ethics in [government] delivering services based on predicting people’s needs?
            -   Which information and services do people actually need to live their lives better?
            -   Is it acceptable if some people choose to opt-in to personalized services, and everyone else gets the standard version?
                -   Would this lead to two-tier public services? (And would it matter if it did?)
            -   Should private sector data be included in public sector transactions? If so, how?
            -   Digital governments must know the needs, motivations, preferences and pain points of their “customers.” They also must own and shape the entire “customer” experience. Ultimately, providing a personalized experience requires digital governments to achieve a higher level of sophistication at every level and in every aspect of their operations — and to apply that standard consistently across thousands of citizen touch points.
-   Recommendation: be transparent about how we use information or "know" things about Veterans. Use this transparency to build and maintain trust
    -   GOV.uk "because you said" model
-   

1.2 Do sites use "My" or "Your" equally or is one more prevalent than another?

-   15 sites in total
-   There doesn't seem to be a clear best practice or trend.
    -   3 use "My"
    -   4 use "Your"
    -   2 use "My" in navigation points, and "your" for section labels in the page body
    -   6 were neutral 

1.3 What information about users do sites commonly show in a logged-in state?

-   First name
-   Account summary
-   Action items

**1.4 Where do the conventions we see align with what we're doing on VA.gov?**

**1.5 Where are they different?**

### 2. Profile

2.1 How do sites encourage profile completeness?

-   Something prevalent upon login (modal or page take over)
-   Show as a notification or alert
-   Provide reason for wanting profile complete
    -   Don't miss important messages
    -   Account security
-   Prompts in context to add missing information
-   Bypasses
    -   "Remind me later option"

2.2 How do sites handle removing/deleting profile information? 

-   Majority of sites we looked at don't allow deletion of contact information (email, phone, address, etc)
-   Some allow removal of secondary contact information, such has having 2 phone numbers on file
-   Of the sites we looked at that allow deleting of contact information:
    -   two had the remove functionality next to an edit button.
    -   Three had the remove functionality nested within the edit function

2.3 How do our nav/section labels align with other sites?

-   Reasonably well.  
-   8 of 14 sites have a profile section called out in the main authenticated nav
    -   2 of these sites called it "Profile and settings"
    -   the other sites labeled it as "personal information" or "contact information"
-   7 of the 14 sites had a separate "settings" or "security" section in the main nav, separated from profile

**2.4 Are there any common sections of a user profile we don't have that could be useful to Veterans?**

### 3. Dashboard and Action items

Coming soon.

### 4. Profile vs Dashboard

4.1 What information lives on a profile? 

-   Personal information
-   Contact information
    -   Phone
        -   Home
        -   Mobile (sometimes separate numbers for alerts and otherwise)
    -   Email
    -   Mailing address
    -   Home address
-   Security settings
-   Communication preferences

4.2 What information lives on a dashboard?

### 5. What are other governments doing?

#### GOV.UK

- Early stages of an account UX

  - "Save and return" - prompting people to create an account after they have completed their task 
  - Looking into single account UX across multiple government departments
  - Targeting "whole problems" with personalized experience experiments:

  > It’s made up of a series of complex transactions and pieces of guidance from lots of different parts of government.

- Does not have a profile or dashboard UX at this time

## Appendix

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/discovery-research/comparative-analysis/auth-exp-comparative-analysis-reseach-plan.md)

### Articles

- [5 things to think about when personalizing government digital services](https://medium.com/@marli_k/five-things-to-think-of-when-personalizing-digital-government-services-81b70b578efb)
- [Reimagine an age of more personalized services for citizens](https://assets.kpmg/content/dam/kpmg/uk/pdf/2016/09/reimagine-more-personalised-services-september-16.pdf)
- [Accenture's 2019 Tech Trends](https://www.accenture.com/_acnmedia/PDF-94/Accenture-TechVision-2019-Tech-Trends-Report.pdf), Trend 2 "Get to Know Me" (page 29)
- [What if public services could be more like Amazon’s?](https://policyexchange.org.uk/what-if-public-services-could-be-more-like-amazons/)
- [Creating a personalized, digital experience in government](https://www.govloop.com/creating-a-personalized-digital-experience/)
- [Introducing GOV.uk accounts](https://gds.blog.gov.uk/2020/09/22/introducing-gov-uk-accounts/)
- [Using accounts to personalize the experience on GOV.uk](https://insidegovuk.blog.gov.uk/2020/10/07/using-accounts-to-personalise-the-user-experience-on-gov-uk/)
- [How we designed the GOV.uk accounts trial](https://insidegovuk.blog.gov.uk/2020/11/26/how-we-designed-the-gov-uk-accounts-trial/)
- [Five things we learned from researching the GOV.uk account](https://insidegovuk.blog.gov.uk/2020/12/09/five-things-weve-learned-from-researching-the-gov-uk-account/)

