# IA Design and Recommendations
**STATUS: COMPLETE 10/5/2022**

Modernized URLs [documented in issue #29622](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29622#issuecomment-1154164989).  The URLs for all education forms were reviewed, along with H1s and title tags, and compared across approach used for all other benefit applications.  That work resulted in the recommendations posted in issue #29622. 

**Team:** Digital GI Benefits team

**Product/Featue:** Authenticated 1990e form flow

**Content and IA Intake request:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/47200

**On this page:**
- [User flows](#flows)
- [IA structure, URLs and breadcrumbs](#ia)
- [Navigation and entry points](#nav)
- [Redirects](#redirects)


## <a name="flows"></a>User/Page Flows <br>
*Description of how users will flow through the experience*

Documented by DGIB team: https://accenturefederal.invisionapp.com/freehand/Midpoint-Review---TOE-U3BzprxZZ?dsid_h=06a224645241871fa5475824bd7e4ed97d273fcdf1fcb16d2890ca7d8bc61039&uid_h=3850c01aa08037284fab1cff4c26de053d5bcd667acc2f234dd81dce8e213d01


### Page flow

![image](https://user-images.githubusercontent.com/20994159/194425201-eb44a765-df62-4b22-a43b-707db4c76ff9.png)


## <a name="ia"></a>IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*

### Site map
Existing 1990e form lives at an old URL, but will not be modified as part of this work.  The site map above includes this old page for reference only.
The 5490 form URL represented in the site map is the intended modernized URL, changing that URL is not part of this workstream.



![image](https://user-images.githubusercontent.com/20994159/194423334-5a6ec7eb-99e2-466e-970d-dd92581bbb05.png)



### URLs and breadcrumbs

**1): Transferred benefits static page - NEW**
- **URL:** `/education/survivor-dependent-benefits/transferred-benefits/`
- **Breadcrumb:** Home > Education and training  > VA education benefits for survivors and dependents > [H1 of page] 
- **Notes:**


**2): Auth 1990e form - NEW**
- **URL:** `/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/`  
- **Breadcrumb:** Home > Education and training  > VA education benefits for survivors and dependents > [H1 of form] 
- **Notes:** The canonical URL above is what will be used for entry links to the form.  The form should resolve to the appropriate first page of the form flow (in this case, it would resolve to /introduction/), this ensures that the referring links are always correct and working regardless if the first page of the form changes.
- **Form page URLs:**
  - Application Instructions - `/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/introduction/` 
  - Applicant Info -  `/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/applicant-information/` 
  - Sponsor info -  `/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/sponsor-information/` 
  - Sponsor info-High School - `/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/sponsor-high-school/` 
  - Sponsor info-High School-Date Received - `/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/sponsor-high-school-completion/` 
  - Contact Info-Phone/Email - `/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/phone-email/`
  - Contact Info-Mailing Address - `/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/mailing-address/` 
  - Contact Info-Follow-up Questions/Preferences - `/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/preferred-contact-method/` 
  - Direct Deposit - `/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/direct-deposit/` 
  - Application Review - `/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/review/` 
  - Application Confirmation - `/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/confirmation/` 

**3) R&S page - DEA and Fry comparison - NEW**
- URL and entry points determined by Sitewide Content team

## <a name="nav"></a>Navigation and Primary Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities. This is not intended to capture all entry points or referring links, just those critical to the experience*

**Entry point location:** [Survivor and dependent benefits page](https://www.va.gov/education/survivor-dependent-benefits/)
- **ADD** Add link to new static page about transferred benefits for dependents
  - **Destination:** www.va.gov/education/survivor-dependent-benefits/transferred-benefits/
  - **Notes:**  Supporting content about using transferred benefits needs to be added to this page and treated as another benefit option.  

**Entry point location:** [Transferred benefits for family members page](www.va.gov/education/survivor-dependent-benefits/transferred-benefits/)
- **ADD** Add CTA to apply for transferred benefits
  - **Destination:** www.va.gov/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/
  - **Notes:**  This is the CTA to go to the form and apply to use the transferred benefits. 

**Entry point location:** Education left nav
- **ADD** Add option for "Transferred education benefits for family members"
  - **Destination:** www.va.gov/education/survivor-dependent-benefits/transferred-benefits/
  - **Notes:** Add option to left nav as child of  "Survivor and dependent benefits".  See below for ordering of nav.
- **ADD** Add option for "Apply to use transferred benefits"
  - **Destination:** www.va.gov/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/
  - **Notes:**  Add option to left nav as child of  "Survivor and dependent benefits".  See below for ordering of nav.
- **ADD** Add option to "Apply for dependent benefits"
  - **Destination:** www.va.gov/education/apply-for-education-benefits/application/5490/
  - **Notes:** Add option to left nav as a child of "Survivor and dependent benefits".  See below for ordering of nav.
- **UPDATE** Change order of left nav options
  - **Notes:** Order "Survivor and dependent benefits" section as follows:
    - Survivor and dependents benefits
      - Dependents education assistance (DEA)
      - Fry Scholarship
      - Transferred benefits
      - Apply for dependent benefits
      - Apply for transferred benefits

**Entry point location:** Find your education form wizard
- **UPDATE** Update the wizard to point to the introduction page on the new auth version of the form
  - **Destination:** www.va.gov/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/
  - **Notes:**  
  - This wizard exists on 2 pages: [How to apply page](www.va.gov/education/how-to-apply/) and  [Eligibility page](https://www.va.gov/education/eligibility/)
  - Direct to this page if the following selections are made:  Apply for a new benefit > **Not** claiming a benefit based on own service > Sponsor **is not** deceased, MIA, POW, or 100% disabled > Sponser **has** transferred benefits

**Entry point location:** [Transfer Post-9/11 GI Bill benefits page](https://www.va.gov/education/transfer-post-9-11-gi-bill-benefits/)
- **ADD** Add content and link to the transferred benefits static page 
  - **Destination:** www.va.gov/education/survivor-dependent-benefits/transferred-benefits/
  - **Notes:**  Content and link label to be determined by sitewide content
- **UPDATE** Update the link to the 1990e to go to the introduction page of the new auth version of the form 
  - **Destination:** www.va.gov/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/ 
  - **Notes:** Under section "How do I transfer the benefit?", update the link to "Apply online now" to go to new 1990e instruction page. This link text should also be updated to be more specific to the action of applying to use a transferred benefit



## <a name="redirects"></a>Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

-  None


## <a name="notes"></a>Meeting notes and background <br>


