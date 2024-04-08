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

We will also include the pages for Program of Comprehensive Assistance for Family Caregivers (PCAFG) and CHAMPVA in the family member hub structure for phase 1.

![Phase 1 sitemap](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/453b4bda-6dfa-4601-88ec-a3511a62577c)


## <a name="url"></a>URLs and breadcrumbs
![sitemap with urls](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/aac3c208-277f-4eda-b52a-0a08b0c6f107)


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

**6) Home loan - CHANGE**
- URL: va.gov/family-and-caregiver-benefits/surviving-spouse-home-loan/
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
For phase 1, we will have a left nav for the subhubs and PCAFG/Champva. Note the suggested order below, but open to coordination with content. These are not the final labels.

- Health care and disability compensation
   - CHAMPVA
   - Program for Comprehensive Assistance for Family Caregivers
- Survivors compensation and accrued benefits
- Education and career benefits
- Home loans for surviving spouses
- Life insurance
- Burial benefits and memorials
   

![screenshot of left nav order](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/c9f52772-5c00-4d86-847a-20b641c93fc3)


4. **Crosslinks - ADD**
For phase 1, each subhub will feature links and a short description to the following things. This is probably best viewed directly in [mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1684260449054/7d2a6588b6861b0fb19a31d73cad49fe1a5abd3d?wid=0-1712161880616), but I've also included a list of the links we intend to go to. For phase 1 we will just be linking to these pages (anchor linking to the relevant family member section if possible). In later phases we might create new pages in the family member hub about the family member benefit (Ex: in the future we might have 2 mental health pages, one for veterans and one for family members, that crosslink to eachother). 

- Health care and disability compensation
   - Champva: https://www.va.gov/health-care/family-caregiver-benefits/champva
   - PCAFC: https://www.va.gov/family-member-benefits/comprehensive-assistance-for-family-caregivers/
   - Mental health care: https://www.va.gov/health-care/health-needs-conditions/mental-health/
   - VA Dental Insurance Program: https://www.va.gov/health-care/about-va-health-benefits/dental-care/dental-insurance/
   - Camp Lejeune: https://www.va.gov/disability/eligibility/hazardous-materials-exposure/camp-lejeune-water-contamination/#benefits-for-families-who-live
   - Spina Bifida: https://www.va.gov/COMMUNITYCARE/programs/dependents/spinabifida/index.asp
   - Children of women vietman veterans: https://www.va.gov/COMMUNITYCARE/programs/dependents/cwvv/index.asp 
- Survivors compensation and accrued benefits
   - DIC: https://www.va.gov/disability/dependency-i ndemnity-compensation/
   - VA Survivors Pension: https://www.va.gov/pension/survivors-pension/
   - Aid and attendance or housebound allowance: https://www.va.gov/pension/aid-attendance-housebound/
- Education and career benefits
   - Transfered edu. benefits for family: https://www.va.gov/education/survivor-dependent-benefits/transferred-benefits/
   - Survivors and dependents educational assistance: https://www.va.gov/education/survivor-dependent-benefits/dependents-education-assistance/
   - Fry scholarship: https://www.va.gov/education/survivor-dependent-benefits/fry-scholarship/
   - Fry/DEA application: https://www.va.gov/education/survivor-dependent-benefits/dependents-education-assistance/
   - Yellow Ribbon: https://www.va.gov/education/about-gi-bill-benefits/post-9-11/yellow-ribbon-program/
   - STEM scholarship: https://www.va.gov/education/other-va-education-benefits/stem-scholarship/
   - Work-study: https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/work-study/
   - Testing fee reimbursement: https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/
   - Ch 36: https://www.va.gov/careers-employment/education-and-career-counseling/
- Home loans for surviving spouses -- this subhub only has one link, so instead of having a subhub page, we're just going to link directly to this page. UNLESS we can coordinate with stakeholder to be able to redirect in phase 1, which is unlikely.
- Life insurance
   - Family servicemembers group life insurance: https://www.va.gov/life-insurance/options-eligibility/fsgli
   - accelerated benefit for terminally ill/disabled: https://www.va.gov/life-insurance/totally-disabled-or-terminally-ill/
- Burial benefits and memorials
   - pre-need eligibility: https://www.va.gov/burials-memorials/pre-need-eligibility/
   - Headstones, markers, inscriptions: https://www.va.gov/burials-memorials/memorial-items/headstones-markers-medallions/
   - Veterans burial allowance: https://www.va.gov/burials-memorials/veterans-burial-allowance/


## <a name="redirects"></a>Redirects <br>
We'll need to create a redirect ticket after we finalize H1s (and thus urls). All of the redirects should happen on the same day and should be either at the same time as publishing or right after.

                                                                                        | Current URL                                                                                        | Redirect to                                                                                                                   |
|----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| https://www.va.gov/family-member-benefits/                                                         | https://www.va.gov/family-and-caregiver-benefits/                                                                             |
| https://www.va.gov/housing-assistance/home-loans/surviving-spouse/                                 | va.gov/family-and-caregiver-benefits/surviving-spouse-home-loan/                                                              |
| https://www.va.gov/family-member-benefits/comprehensive-assistance-for-family-caregivers/          | va.gov/family-and-caregiver-benefits/health-and-disability/comprehensive-assistance-for-family-caregivers/                    |
| https://www.va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/introduction | va.gov/family-and-caregiver-benefits/health-and-disability/comprehensive-assistance-for-family-caregivers/apply-form-10-10cg/ |
| https://www.va.gov/health-care/family-caregiver-benefits/champva/                                  | va.gov/family-and-caregiver-benefits/health-and-disability/champva/                                                           |                           |

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
