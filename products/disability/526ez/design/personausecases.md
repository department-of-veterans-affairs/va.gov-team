# Veteran personas and 526 use cases

## VA Customer Personas List
From Veteran Experience Office, May 2016 (current as of 2022)
Includes ten personas (veterans and supporters) and ideation cards
[Link](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-customer-personas/VA%20Customer%20Personas.pdf)

## Veteran personas and 526 use cases

**Still serving**
Veterans who serve in active duty, Reserves, or National Guard and navigate competing civilian and military systems, cultures, and providers
- Service members can use 526 to apply for BDD (Benefits Delivery at Discharge). Eligibility for BDD is determined in 526 based on user's indication of whether they are active duty and if so when their anticipated date of release from active duty is. If they indicate this on the /start page, they will enter a [BDD-specific flow in 526](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/526-overall-flow.md), and subsequent page title will show BDD (the pages will have the same URLs as original claims flow). These users must submit copies of service treatment records and a [Seperation Health  Assessment Part A](https://www.benefits.va.gov/compensation/dbq_publicdbqs.asp) for the current period of service and provide an anticipated release from active duty date within the 526 form. 
- Service members cannot use 526 to apply for or indicate participation in IDES (Integrated Disability Evaluation System) since IDES participants do not apply or elect to participate in IDES, and doing so could also cause downstream problems. (If service members are eligible for medical discharge they are referred by their branch of service, they are assigned a dedicated military Physical Evaluation Board Liaison Officer (PEBLO) and a VA Military Services Coordinator (MSC) to assist and advise). [More info here](https://github.com/department-of-veterans-affairs/digital-experience-products/issues/752).

**Fast tracker**
Veterans who seek best-in-class services, often from non-VA providers
- Veterans may think the digital version of the 526 will be faster than the paper version, especially since the paper version says "If you sign in or create an account, we can prefill parts of your application and save your work in progress ... then track claim status online."
- Veterans who wish to file a claim in the FDC Program (Fully Developed Claims/Optional Expedited Process) must submit 526 at the same time that they submit any and all required info and ancillary forms. This may include relevant private treatment records, specifications about relevant VA treatment records (and completed VA Form 21-4142 which is conditionally included in 526 flow), specifics about personnel and service treatment records, additional evidence if they had a disability before entering service that was made worse by service, and if claiming PTSD a completed VA Form 21-0781 which is included in 526 flow.

**Day by day**
High-need, low-income Veterans struggling with addiction, homelessness, incarceration, or long-term unemployment
- Users can indicate in 526 if they are homeless or at risk of becoming homeless, which expedites their claim
- Users can complete Form 21-8940, Veteran's Application for Increased Compensation Based on Unemployability, within the 526 flow

**Forging ahead**
Resilient, self-sufficient Veterans who have life-planning and health needs related to mental, physical, and/or sexual trauma
- Users can complete Form 21-0781, Statement in Support of Claim for Service Connection for Post-Traumatic Stress Disorder, within the 526 flow ([PTSD flow is documented here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/526-overall-flow.md))

**Proud patriot**
Veterans, often low-income or in poor health, who identify as Veterans and have positive feelings about VA’s comprehensive care
- Veterans who receive retirement pay must indicate this pay in 526. These vets may worry about reduced pay as a result of disability compensation.

**In transition**
Veterans separated from service, but still strongly connected to military friends and culture and not yet on a firm civilian footing
- Veterans who receive separation and/or training pay must indicate this pay in 526.
- Fellow veterans may support users in understanding how to best complete the 526, including advising them to work or to not work with a VSO instead of self-service via va.gov or paper

**Unaffiliated**
Veterans who have little interaction with, awareness of, or interest in VA services or Veteran issues
- Veterans who do not use VA medical centers can reference private medical records in 526. They can indicate they want the VA to get the records (and subsequently complete Form 21-4142 Authorization to Disclose Information to the VA), or they can indicate they want to upload evidence themselves (this includes an option to also upload Form 21-4142a General Release for Medical Provider Information to VA). They can also upload either/both of these forms if they indicate they have supporting/other evidence they want VA to review.

# 526 use cases
- Filing for first time ever (might accidentally submit multiple claims)
- Filing new claim (not first time)
- Filing claim for increase (if already have rated disability)
- Filing BDD claim as current service member
- Filing presumptive claim (TE/PACT Act)
- Filing claim with above average # of conditions (>5 for 526, >21 for BDD)
- Filing claim with PTSD (526 includes ancillary form 21-0781)
- Filing claim with minimum requirements (fast-tracker)
- Filing claim with all evidence possible (seeking FDC)
- Filing claim as homeless veteran (no address to set up profile)
- Filing claim as vet living abroad
- Filing 526 (for example, for new claim) while also filing supplemental claim (for already-decided claim)

# Viewing conditional pages in 526 in staging
- If want to view claim for increase/rated disabilites flow, use account with rated disabilities
- If want to view BDD flow, on start page select yes active duty and date within 90-180 days in the future
- If want to view pages in History in Reserves or National Guard flow, select one of those on service history page
- If want to view PTSD flow, indicate new claim and enter PTSD as condition
