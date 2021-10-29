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

- We need to implement a task-based approach.

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

**[Logged-in Homepage Discovery Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/discovery-summary.md)***

- Users are very interested in seeing education benefits, specifically anything that is "in-flight" or "in-progress".
- Downloading documents and records is important to users.
- We need to focus on task based experience. 

**[VA Mobile App:Card Sorting Report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/discovery-sprint/veteran-desirability/card-sorting/VA%20Mobile%20App%20Discovery_%20Card%20sorting%20report.pdf)***

- Users are not interested in seeing a comparison tool on the mobile app. I wonder if this is also true for My VA, maybe a link to the tool would be sufficient?

#### Documents that didn't have anything related to education benefits

[Notifications Research](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/HCA%20MVP/Research/User%20Notifications%20Readout%20-%20end%20of%20sprint%20demo.pptx)

[Preview.va.gov - Authenticated Users (October 2018)](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/VA.gov%20Relaunch%202018/user-research/study-8/Brand%20Consolidation%20Research%20Summary%2010-25-2018_Study%208%20only.pptx)

[Personalization MVP readout](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/research/April%202018%20usability/Personalization%20MVP%20readout.pptx)

## Meeting with the DGIB team
