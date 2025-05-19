# **Research Findings for Profile Hub Tree Test, 05/2025**

**Office of the CTO - Digital Experience (OCTO-DE), VA.gov Profile: Profile Hub, Authenticated Experience Team**

**Date:** 05/2025

**Contacts:** Janelle Finnerty, Oddball

**[Link to Research Readout](link-here)**

**Jump to:**

- [Hypotheses and Conclusions](#hypotheses-and-conclusions)
- [Key Findings](#key-findings)
- [Recommendations](#recommendations)
- [Product User and Business Outcomes](#product-user-and-business-outcomes)
- [Key Performance Indicators](#key-performance-indicators)
- [Next Steps](#next-steps)
- [Further Research Needed](#further-research-needed)
- [Who We Recruited](#who-we-recruited)

## **Research Goals**

The goal of this research is to inform iteration on the information architecture of the VA.gov Profile Hub based on previous user feedback and analytics in order to incorporate new features. [Desk research for reference.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2025-03-profile-secondary-research/research-findings.md#military-information)

1. Validate if incorporating the ILER IES report into a new Letters and documents section in VA.gov Profile matches Veterans mental models.

2. Validate if updating VA.gov Profile Hub to reflect recommendations from prior research and analytics match Veteran mental models.


### **Outcomes**

Outcome will be a validated IA for incorporating new sections into VA.gov Profile Hub, including a Letters and documents section to house the downloadable ILER IES report.


### **Veteran Journey**

- `Starting Up`
- `Taking Care of Myself`
- `Retiring`
- `Aging`

[See the Veteran journey.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)


## **Research Questions**

1. Do Veterans associate the ILER IES report with Letters and documents?

2. Do recommendations to VA.gov Profile Hub, based on prior research and analytics, match Veterans mental models?


## **Methodology** 

We conducted an **unmoderated tree test with Veterans who have a VA.gov or My HealthyVet account** on Optimal Workshop. The test consisted of ten randomized tasks requesting participants to locate where they’d expect to find information in the VA.gov Profile.

The following are the recommended changes being tested, and the supporting project.

| **Change type**     | **Section**                      | **Sub section**                     | **Project**                                          |
| ------------------- | -------------------------------- | ----------------------------------- | ---------------------------------------------------- |
| Validation          | Personal information             | Disability rating                   | Current feature validation                           |
| New section         | Dependents and personal contacts | Manage dependents                   | Desk research and analytics validation               |
| New section         | Dependents and personal contacts | Health care contacts                | MHV integration                                      |
| New section         | Dependents and personal contacts | Accredited representatives and VSOs | ARM team integration                                 |
| Section name change | Service history information      | Period of service                   | ILER IES report, desk research validation            |
| Section name change | Financial information            | Direct deposit information          | Desk research and analytics validation               |
| New section         | Letters and documents            | ILER IES report                     | ILER IES report, desk research, analytics validation |
| New section         | Letters and documents            | Veteran Status Card                 | IIR Veteran Status Card project                      |
| Section name change | Communication settings           | Paperless delivery                  | IIR Paperless Delivery project                       |
| Section name change | Communication settings           | MHV signature                       | MHV integration                                      |

**We recruited 59 participants total.** Of those, 45 had usable responses, unusable responses were removed using the [Platform data scrubbing guidance](https://depo-platform-documentation.scrollhelp.site/research-design/conducting-unmoderated-research#Conductingunmoderatedresearch-data-cleaningDatascrubbingguidance).

Responses were then evaluated against success rate to complete the task. Any tasks that rated higher than 60%+ success rate were considered successful. Those with lower than 59% success rate are to be re-evaluated based on participant selections.

The analysis approach was supported by [Optimal Workshop](https://support.optimalworkshop.com/en/collections/1524581-tree-testing?_gl=1*sd3k48*_gcl_au*ODU4MDMzMDEwLjE3NDU1ODY5MzY) and [Neilson Norman Group](https://www.nngroup.com/articles/interpreting-tree-test-results/).


## **Hypotheses and Conclusions**

1. Current functionality suggests Veterans will expect their disability rating under Personal information.

   1. **Definitely true:** 71% of participants expected to find their disability rating under Personal information.

2. Prior research suggests Veterans will expect all of their contacts in a single section in the VA.gov Profile.

   1. **Maybe true:** Dependents and health care contacts had high success rates in the Dependents and personal contacts section. With success rates of 87% for dependents and 80% for health care next of kin. In contrast, only 9% successfully located accredited representatives. See below for recommendations.

3. Prior research suggests Veterans will expect Service history information to contain their military information.

   1. **Definitely true:** 81% of participants expected to find their military branch information under Service history information.

4. Prior research suggests Veterans will expect Financial information to contain their direct deposit information.

   1. **Definitely true:** 96% of participants expected to find their direct deposit information under Financial information.

5. Prior research suggests Veterans will associate the ILER IES report with the Letters and documents section.

   1. **Likely false:** While 27% of participants associated a military toxic exposure report with Letters and documents, 67% associated it to Service history information. See below for recommendations.

6. Prior research suggests Veterans will expect to find their Veteran Status Card with their Letters and documents.

   1. **Maybe true:** Participants were split on where to place the Veteran Status Card: 40% chose Letters and documents, while 49% chose Personal information. See below for recommendations.

7. We believe Veterans will expect to find Paperless delivery and MHV signatures in their Communication settings.

   1. **Likely true:** Paperless delivery and MHV signature had high success rates associated with Communication settings. With success rates of 73% for Paperless delivery and 62% for MHV signature.
  

## **Key Findings**

1. 7 of 10 tasks were a success, supporting recommendations based on prior research and analytics.

2. Accredited representatives had the lowest success rate, with only 9% of participants successfully navigating to Dependents and personal contacts.

3. The ILER IES report was more associated with Service history information (71%) than Letters and documents (29%).

4. Veteran Status Card placement was almost an even split between Letters and documents (40%) and Personal information (44%).

5. 25 (56%) participants had no additional feedback on the proposed navigation. 12 (27%) requested a health care section, and 5 (11%) requested a disability information section.

6. ‘Dependents and contacts’ received the most votes (40%) as the preferred section title for content related to dependents, health care contacts, and accredited representatives. The next most popular was ‘Beneficiaries, dependents, and contacts,’ which received 29% of votes.

7. 84.4% of participants had a positive satisfaction rating for the proposed navigation. 10 participants provided written feedback, all of which was positive or neutral.


## **Details of Findings** 

#### **Finding 1: 7 of 10 tasks were a success, supporting recommendations based on prior research and analytics.**

The target for our study was greater than 60% success rate in order to move forward with our recommendations. The following tasks are listed in order of highest success rate to lowest.

1. 96% Financial information > Direct deposit information
2. 87% Service history information > Military branch information
3. 87% Dependents and personal contacts > Marriage information
4. 80% Dependents and personal contacts > VA health care next of kin
5. 73% Communication settings > Paperless delivery
6. 71% Personal information > Disability rating
7.  62% Communication settings > MHV signature
   1. _Noting there was no close second option for MHV signature._


#### **Finding 2: Accredited representatives had the lowest success rate, with only 9% of participants successfully navigating to Dependents and personal contacts.**

There is no clear reason as to why accredited representatives had such a low success rate or clear alternative location.


#### **Finding 3: The ILER IES report was more associated with Service history information (71%) than Letters and documents (29%).**

There were no other quantifiable locations selected by participants. The finding is not remarkable and matches previous conversations on ILER IES report placement options.


#### **Finding 4: Veteran Status Card placement was almost an even split between Letters and documents (40%) and Personal information (44%).**

There were no other quantifiable locations selected by participants. Both options would be viable locations for the Veteran Status Card placement.


#### **Finding 5: 25 (56%) participants had no additional feedback on the proposed navigation. 12 (27%) requested a health care section, and 5 (11%) requested a disability information section.**

Half of health care requests had no specifics given other than ‘Health information’ or ‘Medical history information’. The other requests were one offs, and recapped almost all information on the My HealtheVet page.

Most disability information requests described a tool much like the claims tracker.
> “A section on the progress of my claim and any updates to the claim, similar to tracking a FedEx package online, I want to see each step of the way what is going on with my claim.” - Participant 58

Two notable one off requests were for Awards and medals and VA burial information.

#### **Finding 6: ‘Dependents and contacts’ received the most votes (40%) as the preferred section title for content related to dependents, health care contacts, and accredited representatives. The next most popular was ‘Beneficiaries, dependents, and contacts,’ which received 29% of votes.**

![What would you call a section of the profile that includes your dependents, health care contacts, and Veteran Service Organization (VSO) representative information_](https://github.com/user-attachments/assets/25dc7ef2-bbed-43f6-b8a0-a0351c2087ea)

#### **Finding 7: 84.4% of participants had a positive satisfaction rating for the proposed navigation. 10 participants provided written feedback, all of which was positive or neutral.**

Positive feedback focused on the ease of the navigation. Neutral feedback focused on that the navigation seemed easy to learn.

> “I thought everything was  well organized and easy to find what I was looking for.” - Participant 29

> “Very straight forward and easy to understand and navigate.” - Participant 77

> “I was not sure where to find some information, but feel like after I found it, I would be able to get to it later.” - Participant 41

> “ I have not used VA.gov but a few times so I am not sure where some of the information is located but I am sure I will learn as I go.” - Participant 80

Any negative feedback was directly associated with VA.gov, and not the proposed navigation. All negative written feedback has been provided in the additional information section.

![How would you rate your satisfaction with the VA gov profile structure presented today_](https://github.com/user-attachments/assets/b78e9d8d-c94f-46bf-b720-1b8db6663b1a)


## **Additional Insights**

**Finding 1: All negative feedback was directly related to VA.gov, not the proposed navigation. Frustrations revolved around overwhelming or broken processes with VA or on VA.gov.**

> “Stop giving us [a] thing to use and then taking them away. [For] example the RX refill app was easy to use and now it takes a lot longer to try and get the RX refills.” - Participant 30

> “Dealing with the VA can just be so overwhelming and frustrating.” - Participant 38

> “It took 14 years for someone to connect my medical discharge to my service connection over the phone … and 7 years to match my address to a va hospital not 5 hours away.” - Participant 52

> “I would like to see the VA.gov site work.  I receive disability benefits but the site says; 'We don’t have a record of VA payments for you'.  Under Proof of Military Service it says; 'We’re sorry. There’s a problem with our system. We can’t show your Veteran status card right now. Try again later.'  And it always says that (using either the VA app on my phone or through a web browser).  I just want the site to work … Again, I would like the site to work and show the correct information.  Nothing shows for me.  It does show my full name and dates of service, but no payment information, no disability rating (mine is 50%), no proof of military service, nothing.” - Participant 57


## **Recommendations**

**Recommendation 1: Recommend moving forward with the following changes on VA.gov Profile:**

1. Change ‘Direct deposit information’ to ‘**Financial information’.**

   1. Add **‘Manage your VA debt’** to the section.

2. Change ‘Military information’ to **‘Service history information’.**

3. Add a **‘Dependents and contacts’** section.

   1. New section includes: **Dependent management** and **health care contacts**.

4. Change ‘Notification settings’ to **‘Communication settings’**.

   1. New section includes: **Email and text notification settings**, **Paperless delivery**, and **MHV signature.**

5. **Keep** ‘Disability rating’ in ‘Personal information section’.

[_Supporting evidence: Key finding 1_](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/profile-hub/2025-05-profile-hub-tree-test/research-findings.md#finding-1-7-of-10-tasks-were-a-success-supporting-recommendations-based-on-prior-research-and-analytics)

**Recommendation 2: Work with Accredited Representative Management (ARM) team to identify ideal location for Accredited representative card, and validate location with Veterans.**

[_Supporting evidence: Key finding 2_](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/profile-hub/2025-05-profile-hub-tree-test/research-findings.md#finding-2-accredited-representatives-had-the-lowest-success-rate-with-only-9-of-participants-successfully-navigating-to-dependents-and-personal-contacts)

**Recommendation 3: Continue with proposed ILER IES report designs. Have the report in Letters and documents and link from the Service history information page.**

OR Have the report downloadable from the Service history information page. Both options are viable.

[_Supporting evidence: Key finding 3_](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/profile-hub/2025-05-profile-hub-tree-test/research-findings.md#finding-3-the-iler-ies-report-was-more-associated-with-service-history-information-71-than-letters-and-documents-29)

**Recommendation 4: Decide as a team on the long term location of the Veteran Status Card. Options include Personal information or Letters and documents. Both options are viable.**

[_Supporting evidence: Key finding 4_](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/profile-hub/2025-05-profile-hub-tree-test/research-findings.md#finding-4-veteran-status-card-placement-was-almost-an-even-split-between-letters-and-documents-40-and-personal-information-44)

**Recommendation 5: In future research gather more information on how and why Veterans want health care information in their profile to see if it’s a good future feature for VA.gov Profile.**

[_Supporting evidence: Key finding 5_](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/profile-hub/2025-05-profile-hub-tree-test/research-findings.md#finding-5-25-56-participants-had-no-additional-feedback-on-the-proposed-navigation-12-27-requested-a-health-care-section-and-5-11-requested-a-disability-information-section)


## **Product User and Business Outcomes**

**Desired User Outcome**

- This research supports our desired user outcome by ensuring Veterans can successfully navigate VA.gov Profile. Including finding, downloading, and using their ILER IES report.

**Desired Business Outcome**

- This research supports our desired business outcomes by …

  - Allowing Veterans to access their ILER IES report per congressional mandate.

    - Congress enacted Section 9105 on January 1, 2021, in the National Defense Authorization Act (NDAA), to provide “Access of veterans to Individual Longitudinal Exposure Record.” [Link to PUBLIC LAW 116–283—JAN. 1, 2021.](https://www.congress.gov/116/plaws/publ283/PLAW-116publ283.pdf)

    - Congress enacted Section 803 on August 10, 2022, as part of the PACT Act. Section 803(a) provides: “The Secretary of Veterans Affairs \[VA] shall coordinate with the Secretary of Defense \[DoD] to provide a means for Veterans to update their records as necessary to reflect exposures to occupational or environmental hazards by such member or Veteran in the \[ILER].” Section 803(b)(1) provides that to update a record under subsection (a), a Veteran shall provide such evidence as VA considers necessary. Section 803(b)(2) requires VA to promulgate a regulation defining the “evidence considered necessary.” [Link to H.R.3967 - Honoring our PACT Act of 2022.](https://www.congress.gov/bill/117th-congress/house-bill/3967/text)

  - Reducing support requests by ensuring the IES is available to all veteran users.

  - Increase user satisfaction and trust in VA.gov, evidenced by positive feedback and higher engagement with the Profile.


## **Key Performance Indicators**

**Objective 1:**  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.

- **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.


## **Next Steps**

1. Align with the team on recommendations, and determine next steps.


## **Further Research Needed**

- Further research is needed to place Accredited representatives within VA.gov Profile.


## **Appendix**

- [ILER IES download only, Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/military-information/2024-ies)

- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/profile-hub/2025-05-profile-hub-tree-test/research-plan.md)


### **Tools Used for Synthesis**

- [Optimal Workshop: Digital Experience IA Account: 2025-05 Profile Hub Tree Test](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/design/tools/optimal-workshop.md)


### **Pages and Applications Used**

- None


### **Other Supporting Documents Created**

- None


### **Secondary Research**

- [03/2025, VA.gov Profile Desk Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2025-03-profile-secondary-research/research-findings.md)


## **Who We Recruited** 

**Recruitment Criteria**

All participants had to have a VA.gov or My HealtheVet account. We then split the group by frequent (daily or weekly access) and infrequent (monthly+ access) use of VA.gov. We used the recruitment checker to ask for a variety of Veterans across diverse demographics.

We recruited **59 participants total.** Of those, **45 participants** provided usable feedback.

_Any participants without usable feedback were omitted from results, and are not included in our demographic information below\._

Participant frequency of VA.gov use:

- Frequent (daily or weekly): 20
- Infrequent (monthly+): 25

Audience segment:

- Veterans: 45
- Caregivers: 0
- Family members of a Veteran: 0

Gender:

- Male: 31
- Female: 14 

LGBTQ+: 5

Devices used during study: 

- Desktop: 24
- Tablet: 0
- Smart phone: 21

Age:

- 25-34: 1
- 35-44: 8
- 45-54: 7
- 55-64: 7
- 65-74: 15
- 75+: 7
- Unknown: 0

Education:

- High school no degree: 2
- High school degree or equivalent: 1
- Some college (no degree): 9
- Associate's degree, trade certificate or vocational training: 14
- Bachelor's degree: 11
- Master's degree: 7
- Doctorate degree: 1
- Unknown: 0

Geographic location:

- Urban: 29
- Rural: 16
- Unknown: 0

Race:

- White: 27
- Black: 10
- Hispanic: 5
- Biracial: 2
- Asian: 1
- Native: 3

Expat (living abroad): 2


### **Underserved Groups We Haven’t Recruited**

This research does not include the perspectives of the following marginalized Veteran groups:

- Other than honorable
- Immigrant origin

<img width="1458" alt="Screenshot 2025-05-16 at 11 43 56 AM" src="https://github.com/user-attachments/assets/fa39c540-b9af-45db-9a0e-75fc5a4d528c" />
