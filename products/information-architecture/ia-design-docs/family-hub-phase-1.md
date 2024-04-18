# IA Design for Family Member Hub - Phase 1
**STATUS: In Progress**

**Team:** OCTO

**IA Request:** [76427](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/26?pane=issue&itemId=53446972) and [76428](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/26?pane=issue&itemId=53447198)

**Mural:** https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1684260449054/7d2a6588b6861b0fb19a31d73cad49fe1a5abd3d?wid=0-1712161697570

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Best Bets](#bestbets)


## <a name="flows"></a>User/page flows <br>
 For phase 1 we're just covering findability of existing 'Apply' resources from the family member hub. We are not covering 'manage' resources for Phase 1.
![Screenshot 2024-04-08 at 1 15 57 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/d38cc48c-2584-4362-b14a-9da79bb54341)


## <a name="map"></a>Page structure<br>
The family member hub will contain 6 subhubs.

One of the subhubs will actually just be the home loans page, which we need to migrate in family hub.

We will also include the pages for Program of Comprehensive Assistance for Family Caregivers (PCAFG) and CHAMPVA in the family member hub structure for phase 1. We may be able to include the surviving spouse home loan program pages pending stakeholder agreement. 

![page structure](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/6b987ae4-46e5-43a1-b594-708ff6e995b5)

## <a name="url"></a>URLs and breadcrumbs
![sitemap with URLs](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/b53551b9-706d-4155-b2b5-de1697b16776)


**1) Family member hub - CHANGE**
- URL: va.gov/family-and-caregiver-benefits/
- Breadcrumb: Home > [H1]
- Notes: note this is a change in URL so we'll also need a redirect for folks that might have bookmarked the old url

**2) Health/disability subhub - NEW**
- URL: va.gov/family-and-caregiver-benefits/health-and-disability/
- Breadcrumb: Home > [Family member h1] > H1

**3) Survivors comp and accrued benfits - NEW**
- URL: va.gov/family-and-caregiver-benefits/survivor-compensation/
- Breadcrumb: Home > [Family member h1] > H1

**4) Education and careers - NEW**
- URL: va.gov/family-and-caregiver-benefits/education-careers/
- Breadcrumb: Home > [Family member h1] > H1

**5) Life Insurance - NEW**
- URL: va.gov/family-and-caregiver-benefits/life-insurance/
- Breadcrumb: Home > [Family member h1] > H1

**6) Housing assistance - CHANGE**
- URL: va.gov/family-and-caregiver-benefits/housing-assistance/
- Breadcrumb: Home > [Family member h1] > H1

**7) Burials / memorials - NEW**
- URL: va.gov/family-and-caregiver-benefits/burials-memorials/
- Breadcrumb: Home > [Family member h1] > H1

**7) PCAFC - CHANGE**
- URL: va.gov/family-and-caregiver-benefits/health-and-disability/comprehensive-assistance-for-family-caregivers/
- Breadcrumb: Home > [Family member h1] > [Health and disability H1] > H1

**8) PCAFC Form 1010cg - CHANGE**
- URL: va.gov/family-and-caregiver-benefits/health-and-disability/comprehensive-assistance-for-family-caregivers/apply-form-10-10cg/
- Breadcrumb: Home > [Family member h1] > [Health and disability H1] > [PCAFC H1] > H1

**9) CHAMPVA - CHANGE**
- URL: va.gov/family-and-caregiver-benefits/health-and-disability/champva/
- Breadcrumb: Home > [Family member h1] > [Health and disability H1] > H1

**9) CHAMPVA form 1010d - ADD**
- URL: va.gov/family-and-caregiver-benefits/health-and-disability/champva/apply-form-10-10d/
- Breadcrumb: Home > [Family member h1] > [Health and disability H1] > [CHAMPVA H1] > H1
- NOTE: depending on timing, we will either be adding this new digital form directly to family member hub, or launching in health and then redirecting.

**10) Surviving spouse home loan program - CHANGE**
- URL: va.gov/family-and-caregiver-benefits/housing-assistance/surviving-spouse-home-loan
- Breadcrumb: Home > [Family member h1] > [Housng H1] > H1
- NOTE: this is pending stakeholder approval from Danielle



## <a name="nav"></a>Entry points <br>

1. **Mega Menu - EDIT** -
  - Link label: Family member and caregiver benefits
  - Link URL: va.gov/family-and-caregiver-benefits/
 ![mega menu changes](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/01cede9c-bd6c-4973-b1c1-f988b1de56c9)


2. **Home Page - EDIT** -
  - Link label: Family member and caregiver benefits
  - Link URL: va.gov/family-and-caregiver-benefits/
![home page location](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/845851be-6baf-4e89-b1ed-706f94c5d3a2)


3. **Left Nav - ADD** -
For phase 1, we will have a left nav for the subhubs and PCAFC/Champva/HomeLoan. Note the suggested order below, but open to coordination with content. These are not the final labels.

- Health care and disability compensation
   - CHAMPVA
      - CHAMPVA application
   - Program for Comprehensive Assistance for Family Caregivers
      -PCAFC application
- Survivors compensation and accrued benefits
- Education and career benefits
- Housing Assistance
      - Survivi ng spouse home loan
- Life insurance
- Burial benefits and memorials

![left nav](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/c31df687-1ab0-45a6-b31a-177d0a8e0d04)




4. **Crosslinks - ADD**
For phase 1, each subhub will feature links and a short description to the following things. This is probably best viewed directly in [mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1684260449054/7d2a6588b6861b0fb19a31d73cad49fe1a5abd3d?wid=0-1712161880616), but I've also included a list of the links we intend to go to. For phase 1 we will just be linking to these pages (anchor linking to the relevant family member section if possible). In later phases we might create new pages in the family member hub about the family member benefit (Ex: in the future we might have 2 mental health pages, one for veterans and one for family members, that crosslink to eachother). 

- **Health care and disability compensation**
   - **Get - Main (H2)**
      - Champva: https://www.va.gov/health-care/family-caregiver-benefits/champva
      - PCAFC: https://www.va.gov/family-member-benefits/comprehensive-assistance-for-family-caregivers/
      - Mental health care: https://www.va.gov/health-care/health-needs-conditions/mental-health/
      - VA Dental Insurance Program: https://www.va.gov/health-care/about-va-health-benefits/dental-care/dental-insurance/
      - Camp Lejeune: https://www.va.gov/disability/eligibility/hazardous-materials-exposure/camp-lejeune-water-contamination/#benefits-for-families-who-live
      - Spina Bifida: ~https://www.va.gov/COMMUNITYCARE/programs/dependents/spinabifida/index.asp~ https://www.va.gov/disability/eligibility/special-claims/birth-defects/
      - Children of women vietman veterans: https://www.va.gov/COMMUNITYCARE/programs/dependents/cwvv/index.asp
  - **Get - Additional benefits or services(H3)**
      - Tricare: ~https://www.tricare.mil/~ Build out R&S page to link to on this program
      - CITI Program: https://www.va.gov/COMMUNITYCARE/programs/dependents/champva/CITI.asp
      - Respite care: https://www.caregiver.va.gov/support/Respite.asp
      - Program of general caregiver support services: https://www.caregiver.va.gov/Care_Caregivers.asp
  - **Get - Helpful tools(H3)**
      - Income Limits: https://www.va.gov/health-care/income-limits/introduction
  - **Manage(H2)**
      - My HealtheVet: https://www.myhealth.va.gov/mhv-portal-web/home
      - Request travel reimbursement: https://www.va.gov/health-care/get-reimbursed-for-travel-pay/
      - Pay copay bills: https://www.va.gov/health-care/pay-copay-bill/
      - File a CHAMPVA claim: https://www.va.gov/COMMUNITYCARE/programs/dependents/champva/champva-claim.asp
      - File a SBHCP claim: https://www.va.gov/COMMUNITYCARE/programs/dependents/spinabifida/spina-claim.asp
      - Request a decision review: https://www.va.gov/decision-reviews/
      - Check your claim, decision review, or appeal status: https://www.va.gov/claim-or-appeal-status/
  - **More(H2)**
        - Meds by Mail: https://www.va.gov/COMMUNITYCARE/programs/dependents/pharmacy/meds-by-mail.asp
        - Fisher House Program: https://www.socialwork.va.gov/fisher.asp
        - Coaching into care: https://www.mirecc.va.gov/coaching/
        - CHAMPVA FAQs: https://www.va.gov/COMMUNITYCARE/programs/dependents/champva/CHAMPVA_faq.asp
        - Finding a CHAMPVA provider: https://www.va.gov/COMMUNITYCARE/programs/dependents/locate-provider.asp
        - The PACT Act and your benefits: https://www.va.gov/resources/the-pact-act-and-your-va-benefits/
    
- **Survivors compensation and accrued benefits**
   - **Get - Main (H2)**
       - DIC: https://www.va.gov/disability/dependency-indemnity-compensation/
       - ~Survivor DIC rates: https://www.va.gov/disability/survivor-dic-rates/~
       - ~Parent DIC rates: https://www.va.gov/disability/parent-dic-rates/~
       - VA Survivors Pension: https://www.va.gov/pension/survivors-pension/
       - ~Survivors Pension rates: https://www.va.gov/pension/survivors-pension-rates/~
       - Aid and attendance or housebound allowance: https://www.va.gov/pension/aid-attendance-housebound/
   - **Get - Additional benefits or services(H3)**
       - Bereavement counseling: https://www.va.gov/burials-memorials/bereavement-counseling/
       - *ADDED: Find an accredited representative: https://www.va.gov/get-help-from-accredited-representative/*
   - **Manage(H2)**
       - View payment history: https://www.va.gov/va-payment-history/
       - Change direct deposit: https://www.va.gov/change-direct-deposit/
       - Manage or pay overpayments and debt: https://www.va.gov/manage-va-debt/
       - Change your address: https://www.va.gov/change-address/
       - Request a decision review: https://www.va.gov/decision-reviews/
       - Check your claim, decision review, or appeal status: https://www.va.gov/claim-or-appeal-status/
   - **More(H2)**
       - The PACT Act and your benefits: https://www.va.gov/resources/the-pact-act-and-your-va-benefits/
       - Pension Management Centers: https://www.va.gov/pension/pension-management-centers/
       - Tragedy Assistance Program for Survivors: https://www.taps.org/

- **Education and career benefits**
   - **Get - Main (H2)**
       - Transfered edu. benefits for family: https://www.va.gov/education/survivor-dependent-benefits/transferred-benefits/
       - ~Transfered edu benefit rates: https://www.va.gov/education/benefit-rates/transferred-post-9-11-gi-bill-rates/~
       - Survivors and dependents educational assistance: https://www.va.gov/education/survivor-dependent-benefits/dependents-education-assistance/
       - ~DEA rates: https://www.va.gov/education/benefit-rates/chapter-35-rates/~
       - Fry scholarship: https://www.va.gov/education/survivor-dependent-benefits/fry-scholarship/
       - ~Fry rates: https://www.va.gov/education/benefit-rates/fry-scholarship-rates/~
       - ~Fry/DEA application: https://www.va.gov/education/survivor-dependent-benefits/dependents-education-assistance/~
       - Yellow Ribbon: https://www.va.gov/education/about-gi-bill-benefits/post-9-11/yellow-ribbon-program/
       - STEM scholarship: https://www.va.gov/education/other-va-education-benefits/stem-scholarship/
       - Work-study: https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/work-study/
       - Testing fee reimbursement: https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/
       - Ch 36: https://www.va.gov/careers-employment/education-and-career-counseling/
    - **Get - Additional benefits or services(H3)**
       - Vocational rehabilitation and employment for ppl who qualify: https://www.va.gov/careers-employment/dependent-benefits/
    - **Get - Helpful tools(H3)**
       - GI Bill School Comparison tool: https://www.va.gov/gi-bill-comparison-tool/
       - Yellow Ribbon school finder: https://www.va.gov/education/yellow-ribbon-participating-schools/
       - Submit GI Bill school feedback: https://www.va.gov/education/submit-school-feedback/
    - **Manage(H2)**
       - Verify school enrollment: https://www.va.gov/education/verify-school-enrollment/
       - Change your GI Bill school or program: https://www.va.gov/education/change-gi-bill-benefits/
       - DEA/Fry form: https://www.va.gov/education/apply-for-education-benefits/application/5495/
       - transferred benefits form: https://www.va.gov/education/apply-for-education-benefits/application/1995/introduction
       - Check Post-9/11 GI Bill benefit statement: https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/
       - View payment history: https://www.va.gov/va-payment-history/
       - Change direct deposit: https://www.va.gov/change-direct-deposit/
       - Manage or pay overpayments or debt: https://www.va.gov/manage-va-debt/
       - Request decision review: https://www.va.gov/decision-reviews/
       - Check claim, decision review, or appeal status: https://www.va.gov/claim-or-appeal-status/
    - **More(H2)**
       - How to choose GI Bill approved schools: https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/

- **Life insurance**
   - **Get - Main (H2)**
       - Family servicemembers group life insurance: https://www.va.gov/life-insurance/options-eligibility/fsgli
       - accelerated benefit for terminally ill/disabled: https://www.va.gov/life-insurance/totally-disabled-or-terminally-ill/
   - **Get - Additional benefits or services(H3)**
       - Beneficiary counseling and online will prep: https://www.benefits.va.gov/insurance/bfcs.asp
       - Bereavement counseling: https://www.va.gov/burials-memorials/bereavement-counseling/
   - **Manage(H2)**
       - File an insurance claim: https://www.benefits.va.gov/INSURANCE/file_death_claim.asp
       - Request decision review: https://www.va.gov/decision-reviews/
       - Check claim, decision review, or appeal status: https://www.va.gov/claim-or-appeal-status/
   - **More(H2)**
       - Search for unclaimed insurance funds: https://www.insurance.va.gov/UnclaimedFunds/
 
- **Housing**
   - **Get - Main (H2)**
       - VA home loan programs for surviving spouses: https://www.va.gov/housing-assistance/home-loans/surviving-spouse/
   - **Get - Additional benefits or services(H3)**
       - Financial counseling to avoid foreclosure: https://www.va.gov/housing-assistance/home-loans/trouble-making-payments
   - **Manage(H2)**
       - Check the status of your COE: https://www.va.gov/housing-assistance/home-loans/check-coe-status
       - Get veteran military records: https://www.va.gov/records/get-military-service-records/
       - Request decision review: https://www.va.gov/decision-reviews/
       - Check claim, decision review, or appeal status: https://www.va.gov/claim-or-appeal-status/
   - **More(H2)**
       - Loan limits: https://www.va.gov/housing-assistance/home-loans/loan-limits
       - Find VA-acquired properties: https://www.benefits.va.gov/homeloans/realtors_property_mgmt.asp

- **Burial benefits and memorials**
   - **Get - Main (H2)**
       - pre-need eligibility: https://www.va.gov/burials-memorials/pre-need-eligibility/
       - Headstones, markers, inscriptions: https://www.va.gov/burials-memorials/memorial-items/headstones-markers-medallions/
       - Veterans burial allowance: https://www.va.gov/burials-memorials/veterans-burial-allowance/
       - Apply for veterans burial allowance: https://www.va.gov/burials-and-memorials/application/530/introduction
  - **Get - Additional benefits or services(H3)**
       - Bereavement counseling: https://www.va.gov/burials-memorials/bereavement-counseling/
       - File a life insurance claim: https://www.benefits.va.gov/INSURANCE/file_death_claim.asp
  - **Manage(H2)**
      - Schedule a burial for a Veteran: https://www.va.gov/burials-memorials/schedule-a-burial/
       - Request Veteran military records: https://www.va.gov/records/get-military-service-records/
       - Request decision review: https://www.va.gov/decision-reviews/
       - Check claim, decision review, or appeal status: https://www.va.gov/claim-or-appeal-status/
  - **More(H2)**
       - Burial in a private cemetery: https://www.va.gov/burials-memorials/eligibility/burial-in-private-cemetery/
       - Find a cemetery: https://www.cem.va.gov/cems/listcem.asp
       - Find a grave: https://www.cem.va.gov/nationwide-gravesite-locator/


## <a name="redirects"></a>Redirects <br>
We'll need to create a redirect ticket after we finalize H1s (and thus urls). All of the redirects should happen on the same day and should be either at the same time as publishing or right after.

| Current URL                                                                                        | Redirect to                                                                                                                   |
|----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| https://www.va.gov/family-member-benefits/                                                         | https://www.va.gov/family-and-caregiver-benefits/                                                                             |
| https://www.va.gov/housing-assistance/home-loans/surviving-spouse/                                 | va.gov/family-and-caregiver-benefits/housing-assistance/surviving-spouse-home-loan                                               |
| https://www.va.gov/family-member-benefits/comprehensive-assistance-for-family-caregivers/          | va.gov/family-and-caregiver-benefits/health-and-disability/comprehensive-assistance-for-family-caregivers/                    |
| https://www.va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/introduction | va.gov/family-and-caregiver-benefits/health-and-disability/comprehensive-assistance-for-family-caregivers/apply-form-10-10cg/ |
| https://www.va.gov/health-care/family-caregiver-benefits/champva/                                  | va.gov/family-and-caregiver-benefits/health-and-disability/champva/                                                           |

## <a name="bestbets"></a>Best Bets<br>

**1) PCAFG - CHANGE**
- update the best bet with the new URL after publishing

**2) Family member hub - ADD**
- add the new best bet with the new URL after publishing

**3) Home loan program for surviving spouses - ADD**
- add the new best bet with the new URL after publishing

**4) CHAMPVA - CHANGE**
- update the best bet with the new URL after publishing



<hr>
<hr>
