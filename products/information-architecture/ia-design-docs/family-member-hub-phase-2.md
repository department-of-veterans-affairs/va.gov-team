# IA Design for Family Member Hub Phase 2
**STATUS: In Progress**

**Team:** CAIA

**IA Request:** [82730](https://github.com/department-of-veterans-affairs/va.gov-team/issues/82730)

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Best Bets](#bestbets)
- [Staged Rollout](#stagedrollout)


## <a name="map"></a>Page structure<br>

![Screenshot 2024-07-11 at 8 57 35 AM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/0939be59-8048-4f4e-9c3e-d8eab5e77038)


## <a name="url"></a>URLs and breadcrumbs


**1) [Mental Health] - [New]**
- URL: va.gov/family-and-caregiver-benefits/health-and-disability/mental-healthTBD
- Breadcrumb: VA.gov home > Family and caregiver benefits > Health and disability benefits for family and caregivers > [H1]
- Notes: URL is TBD finalizing H1

**2) [Dental Insurance] - [New]**
- URL: va.gov/family-and-caregiver-benefits/health-and-disability/dental-insuranceTBD
- Breadcrumb: VA.gov home > Family and caregiver benefits > Health and disability benefits for family and caregivers > [H1]
- Notes: URL is TBD finalizing H1

**3) [Camp Lejeune] - [New]**
- URL: va.gov/family-and-caregiver-benefits/health-and-disability/camp-lejeuneTBD
- Breadcrumb: VA.gov home > Family and caregiver benefits > Health and disability benefits for family and caregivers > [H1]
- Notes: URL is TBD finalizing H1

**4) [Spina bifida] - [New]**
- URL: va.gov/family-and-caregiver-benefits/health-and-disability/spina-bifida-agent-orangeTBD
- Breadcrumb: VA.gov home > Family and caregiver benefits > Health and disability benefits for family and caregivers > [H1]
- Notes: URL is TBD finalizing H1

**5) [Children of women vietnam veterans] - [New]**
- URL: va.gov/family-and-caregiver-benefits/health-and-disability/children-of-women-vietnam-veteransTBD
- Breadcrumb: VA.gov home > Family and caregiver benefits > Health and disability benefits for family and caregivers > [H1]
- Notes: URL is TBD finalizing H1



## <a name="nav"></a>Entry points <br>

### Primary entry point
_Most of the time this is the CTA on a tool static landing page (a sign in widget).  For forms, it may be on a How to apply page or equivalent. Sometimes the only way to access a feature is via navigation component (top, left) or a header/footer/home page link. This is the only entry point that HAS to be ready to launch when a team goes through staging review._

1. **[Hub Page]** - [Modify]
   The health and disability hub page will now have the following links. Changes are marked in bold. 

 - **Health care and disability compensation**
   - **Get - Main (H2)**
      - Champva: https://www.va.gov/health-care/family-caregiver-benefits/champva
      - **Mental health care: New mental health url (TBD)**
      - **VA Dental Insurance Program: New dental insurance url (TBD) -- note that danielle is still considering whether we'll migrate this one.**
      - PCAFC: https://www.va.gov/family-member-benefits/comprehensive-assistance-for-family-caregivers/
      - **Camp Lejeune: New lejeune url (TBD)**
      - **Spina Bifida: New spina bifida url (TBD)**
      - **Children of women vietnam veterans: New url (TBD)**
  - **Get - Additional benefits or services(H3)**
      - **Tricare: New R+S page URL**
      - CITI Program: https://www.va.gov/COMMUNITYCARE/programs/dependents/champva/CITI.asp
      - Respite care: https://www.caregiver.va.gov/support/Respite.asp
      - Program of general caregiver support services: https://www.caregiver.va.gov/Care_Caregivers.asp
  - **Manage(H2)**
      - Request travel reimbursement: https://www.va.gov/health-care/get-reimbursed-for-travel-pay/
      - Pay copay bills: https://www.va.gov/health-care/pay-copay-bill/
      - **R+S: File a champva claim: new url TBD**
      - **R+S: File a SBHCP claim: new url TBD**
      - Request a decision review: https://www.va.gov/decision-reviews/
      - Get help from accredited rep: https://www.va.gov/get-help-from-accredited-representative/
  - **More(H2)**
      - **R+S: Meds by Mail: new url TBD**
      - Fisher House Program: https://www.socialwork.va.gov/fisher.asp
      - **R+S: Getting care through champva: new url TBD**
      - The PACT Act and your benefits: https://www.va.gov/resources/the-pact-act-and-your-va-benefits/
      - **R+S: Getting care for spina bifida and other birth defects: new url TBD**
  - **Related Benefits and Services**
      - no changes in phase 2 


### Secondary entry points

1. **[Left Nav]** - [Modify]
The health/disability left nav will have the following structure. These are not the final labels. Changes marked in bold:

- Health care and disability compensation
   - CHAMPVA
   - Mental health 
   - Dental insurance
   - Program for Comprehensive Assistance for Family Caregivers
      -PCAFC application
   - Camp Lejeune
   - Spina Bifida
   - Children of women vietnam veterans
  
![Screenshot of left nav with the order above](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/81eee394-2764-47d6-9f2e-13a5aa935a17)



### Crosslinks
_Not required. Links on other pages that point to this tool/thing/form._

1. **[[Mental health veteran page](https://www.va.gov/health-care/health-needs-conditions/mental-health/)]** - [Modify]
  - Placement description: This page will need a crosslink to the new family member mental health page
  - Link label: TBD by content
  - Link destination: New mental health url (TBD)
  - Notes:

2. **[[Dental Insurance veteran page](https://www.va.gov/health-care/about-va-health-benefits/dental-care/dental-insurance/)]** - [Modify]
  - Placement description: This page will need a crosslink to the new family member dental insurance page
  - Link label: TBD by content
  - Link destination: New dental insurance url (TBD)
  - Notes: Danielle still deciding whether we move this over

3. **[[Camp LeJeune Veteran page](https://www.va.gov/disability/eligibility/hazardous-materials-exposure/camp-lejeune-water-contamination/#benefits-for-families-who-live)]** - [Modify]
  - Placement description: This page will need a crosslink to the new family member lejeune page
  - Link label: TBD by content
  - Link destination: New lejeune url (TBD)
  - Notes:

4. **[[agent orange birth defects](https://www.va.gov/disability/eligibility/special-claims/birth-defects/)]** - [Modify]
  - Placement description: This page will need a crosslink to the 2 new family member birth defects pages (spina bifida and children of women vietnam vets)
  - Link label: TBD by content
  - Link destinations: 2 new family member birth defects pages (spina bifida and children of women vietnam vets) (URLs tbd)
  - Notes:

5. **[[veteran health hub left nav](https://www.va.gov/health-care/family-caregiver-benefits/)]** - [Modify]
  - Placement description: Update the node in the left nav to go to the new family health hub page. Remove the link to champva from the veteran health hub.
  - Link label: TBD by content
  - Link destination: https://www.va.gov/family-and-caregiver-benefits/health-and-disability/
  - Notes:

![Screenshot 2024-07-11 at 9 41 18 AM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/97e649c7-53a7-4733-9618-571373fe2659)

 

## <a name="redirects"></a>Redirects <br>

Redirect ticket [#88112](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88112)

| Current URL                                                                          | Redirect to                                                             | Status                             |
|----------------------------------------------------------------------------------|-------------------------------------------------------------------------|------------------------------------|
| https://www.va.gov/COMMUNITYCARE/programs/dependents/champva/champva-claim.asp   | R+S: File a champva claim (URL TBD)                                     | Waiting for content to finalize H1 |
| https://www.va.gov/COMMUNITYCARE/programs/dependents/spinabifida/spina-claim.asp | R+S: File a spina bifida claim (URL TBD)                                | Waiting for content to finalize H1 |
| https://www.va.gov/COMMUNITYCARE/programs/dependents/pharmacy/meds-by-mail.asp   | R+S: Meds by mail (URL TBD)                                             | Waiting for content to finalize H1 |
| https://www.va.gov/COMMUNITYCARE/programs/dependents/champva/CHAMPVA-faq.asp     | R+S: Getting care through champva (URL TBD)                             | Waiting for content to finalize H1 |
| https://www.va.gov/disability/eligibility/special-claims/birth-defects/          | Spina Bifida page (URL TBD)                                             | Waiting for content to finalize H1 |
| https://www.va.gov/COMMUNITYCARE/programs/dependents/CLFMP.asp                   | Camp Lejeune page (URL TBD)                                             | Waiting for content to finalize H1 |
| https://www.va.gov/COMMUNITYCARE/programs/dependents/cwvv/index.asp              | Children of women vietnam veterans page (URL TBD)                       | Waiting for content to finalize H1 |
| https://www.va.gov/COMMUNITYCARE/programs/dependents/spinabifida/index.asp       | Spina Bifida page (URL TBD)                                             | Waiting for content to finalize H1 |
| https://www.va.gov/COMMUNITYCARE/programs/dependents/pharmacy/index.asp          | R+S: Meds by mail (URL TBD)                                             | Waiting for content to finalize H1 |
| https://www.va.gov/health-care/family-caregiver-benefits/                        | https://www.va.gov/family-and-caregiver-benefits/health-and-disability/ | Waiting for content to finalize H1 |
 

## <a name="bestbets"></a>Best Bets<br>

**1) R+S: Tricare - New**
- add the new best bet with the new URL after publishing

**2) R+S: File a champva claim  - New**
- add the new best bet with the new URL after publishing



<hr>
<hr>
