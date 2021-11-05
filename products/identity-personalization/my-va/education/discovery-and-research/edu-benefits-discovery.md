# Education benefits discovery and research/analytics review
Tressa Furner, Authenticated Experience, October 21,2021

[Project Outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/education)

## Background

As part of the redesign of My VA, one of the high priority sections for users that we did not tackle in MVP was education benefit information. People mentioned education info as high priority in our initial dashboard discovery in 2020, and again in later research sessions. This effort aims to determine what a baseline would be for education information on the My VA dashboard.

The DGIB team has approached our team with some ideas of what could be on the My VA dashboard in the education section, but we need to take a step back and understand a few things before we scope MVP for this work. 

## Questions

- What endpoints do we have?
- What is the user journey of a user with education benefits?
- When is a user comparing schools?
- What can we show from a technical perspective?
- GI Bill tool - analytics… how can we get it on the dashboard?
- Depending on what financial information we can show, should we push back an education section and just do a financial section?
- What information can we show around payments?
- What data do we have access to?
- When should we surface the data we have access to?
- What works currently?
- What triggers this section on the dashboard?
- What is the process like to check eligibiity?
- What things can be 'in-progress' in relation to education?

## Takeaways

1. Based on analytics and research, payment history/financial information consistently ranked higher in importance than education benefits for Veterans. Payment history already exists on VA.gov, so that should be fairly easy to implement - but education benefits would not be the only tool featured here. We need to do a deeper dive into payment history to make sure we're covering everything important. I started a [brief discovery here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/payment-history-discovery.md), but there is much more to learn. *Note - I can't get into staging to see what payment history currently looks like, so I'm unsure what aspects of education benefits are included there.*
2. Information about education benefits are still important for Veterans to see - specifically understanding where they are in the process and if there are any outstanding action items. The education benefits process can be fairly complicated, and each different stop in the process might need a different user experience on My VA. Here is a [journey map for education benefits](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/education/discovery-and-research/images/DGIB%20Journey%20Map.png). 
4. The DGIB team is in the process of creating a better GI bill experience for Veterans, but because it's in the early stages it might limit what we can show on My VA. If the DGIB team could choose the top things (that currently exist) to show on My VA related to education they would be:

   1. Next payment + link to all payments
   2. Remaining entitlement and related info to that entitlement (I'm unsure if this is still being worked on - I need to follow up with Russell)
   3. Link to statement of benefits
   4. Link to download Certificate of Enrollment 

If we choose to pursue an education section on My VA right now, we need to figure out what we can/cannot show currently. Here is a breakdown of what we know so far.

**Existing Features**
   - Payment history
   - Statement of benefits ([Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/education/discovery-and-research/images/Statement%20of%20Benefits.png))
      - Benefit program information
      - Date benefits end
      - % of benefit entitlement
      - Eligibility for other programs (need more info about this)
      - Enrollment information
         - Start + End date and school
         - Credit hours
         - Student status (Full-time, part-time, 3/4 time)
         - Housing $$
         - Kicker $$ (what is this?)
   - GI Bill comparison tool

**Working on**
   - Monthly verification of enrollments
   - Statement of benefits
       - Remaining allotment
       - Post 9/11

**Important links**
- See your enrollment verifications
- See past benefit payments
- Download Certificate of Eligibility

## Analytics review

### Top 50 on VA.gov in the past year

- VA payment history is #16 & #48 in the top 50 tasks
- Download VA letters shows up 4 times in the top 50 tasks, the earliest is #20 (is this part of education benefits at all?)
- GI Comparison tool is # 30
- Post-911 GI Bill Chapter 33 benefits page is #34

### Top 50 education pages in the past year

1. /education/how-to-apply/index.html
2. /education/gi-bill/post-9-11/ch-33-benefit/index.html
3. /education/gi-bill/post-9-11/ch-33-benefit/status/
4. /education/survivor-dependent-benefits/index.html
5. /education/about-gi-bill-benefits/post-9-11/index.html
6. /education/yellow-ribbon-participating-schools/index.html
7. /education/index.html
8. /education/eligibility/index.html
9. /education/about-gi-bill-benefits/index.html
10. /education/apply-for-education-benefits/application/1990/introduction/
11. /education/survivor-dependent-benefits/dependents-education-assistance/index.html
12. /education/change-gi-bill-benefits/index.html

The rest of the links are for specific applications within the education benefits realm. 

### Takeaways from Analytics

Based on analytics it seems to me like the most important things for education are:

- Payment history 
- Comparison tool
- Chapter 33 benefits page
- Chapter 33 benefits status
- Dependent information

Potentially downloading the 9-11 GI Bill letter?

I need to do a review of where these features currently live and how they work.

## Research review

### Documents reviewed

#### Logged-in Homepage Discovery Summary

**[Logged-in Homepage Discovery Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/discovery-summary.md)**

- Users are very interested in seeing education benefits, specifically anything that is "in-flight" or "in-progress".
- Downloading documents and records is important to users.
- We need to focus on task based experience. 

**[VA Mobile App:Card Sorting Report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/discovery-sprint/veteran-desirability/card-sorting/VA%20Mobile%20App%20Discovery_%20Card%20sorting%20report.pdf)**

- Users are not interested in seeing a comparison tool on the mobile app. I wonder if this is also true for My VA, maybe a link to the tool would be sufficient?

**[My VA research V1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/product/Research/MyVA-research-findings.md)**

**[My VA research V2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/product/Research%20V2/MyVA2-topline%20summary.md)**

- There wasn't any specific details about education benefits, but 'Payment history' was the most commonly mentioned feature that was missing on the My VA page. 'Education benefits' was the third most common. 


**[DGIB Usability test]()**

- “If I could just login to something and pizza-tracker style, it says ‘you are here’ in the process. Then I wouldn’t feel like I’m in a blackhole at the mercy of the Government – something I felt every time I got a bill.”
- "VA is typically reactive when providing information to beneficiaries, starting with the initial process of applying for eligibility based off information that VA already has."
- Veterans do not trust the VA or the information provided by the VA to be up-to-date or relevant.
- Currently the GI Bill process doesn't have any single source of truth for all users.
- The GI Bill team is still working through what MVP is on va.gov.

#### Documents that didn't have anything related to education benefits

[Notifications Research](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/HCA%20MVP/Research/User%20Notifications%20Readout%20-%20end%20of%20sprint%20demo.pptx)

[Preview.va.gov - Authenticated Users (October 2018)](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/VA.gov%20Relaunch%202018/user-research/study-8/Brand%20Consolidation%20Research%20Summary%2010-25-2018_Study%208%20only.pptx)

[Personalization MVP readout](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/research/April%202018%20usability/Personalization%20MVP%20readout.pptx)

## User Journey

![Education Benefits User Journey Map](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/education/discovery-and-research/images/DGIB%20Journey%20Map.png)

1. Introduction to benefits 
   - Learning about eligibility 
2. Making a decision (this can be different if a veteran is still in the service)
   - I choose my education benefits 
   - I understand how much I can afford
   - I choose a program/school
   - Get approval
3. Getting an education
   - I enroll at my school
   - I enroll at my courses for the term
   - School + Veteran recieve benefits
   - I understand reamining entitlement
   - I complete coursework


## Meeting with the DGIB team

### 10/29/21 Meeting (Tressa, Samara, Heather, Russell, Leelah)

Why Veterans call ECC
   - Seeking payment info: when is my next payment arriving
   - How payments are calculated

Downloading VA letters for edu benefits
- Something DGIB team is aware of/familiar with?
   - Nothing currently populated on edu benes now
   - However as part of MVP they would like to surface letters of eligibility 
   - Like to create statement of benefits page for COE (certificate of eligibility)
   - Use? 
      - What they're eligible for
      - percent available
      - how long the benefit is available for  

- General note: Post 9/11 GI Bill = chapter 33; Montgomery GI BIll = chapter 30; DGIB team would like to be using program names not chapters which are just related to the sectio of law (US code) it pertains to

- Analytics review
  -   In regard to GI BIll status tool - who has access? _not sure_

- Re: payment information - what is high value?
   - Remaining entitlement and/or what's been used exposed on My VA
   - _In order to expose this on My VA _we_ need to know what data is available to them for statement of benefits_

- What is the difference between entitlement and allotment? Nothing! (We think)
- Can we show entitlement? I've seen that some newer mock ups will show whether you are eligible and how much percent of eligibility you are qualified, but as far as I know, we have no immediate plans to show remaining entitlements in terms of months and days like the staff apps do. But we can get the information, yes.

For education benefits on va.gov, the two main MVP features are: 1) the 1990 form updates to allow for the review of the application to be automated (for some applicants) and 2) the ability to download the certificate of eligibility from the download va letters page

- Choose 3-5 things for Edu that would be most valuable to expose on My VA:
   1. Next payment + link to all payments
   2. Remaining entitlement and related info to that entitlement
   3. Link to statement of benefits
   4. Link to download Certificate of Enrollment 
   5. Secure messaging (doesn't exist yet)
   6. Monthly verification of enrollments (doesn't exist yet)

**- What are existing things on VA.gov that we could pull from?**
   - Payment history
   - Statement of benefits (though doesn't include remaining allotment and doesn't cover post 9/11)
      - What does this include?
   - GI Bill comparison tool

**Things DGIB team is working on, that are not released yet.**
   - Monthly verification of enrollments (doesn't exist yet)
   
