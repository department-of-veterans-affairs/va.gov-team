# IA Design and Recommendations
**STATUS: IN PROGRESS**

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


## <a name="ia"></a>IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*

![image](https://user-images.githubusercontent.com/20994159/192578950-a72a435e-3853-450f-8eec-c2de3966642b.png)

Existing 1990e form lives at an old URL, but will not be modified as part of this work.  The site map above includes this old page for reference only, and does not accurately represent the page's placement in the IA.


**Page** | **URL** | **Breadcrumb** | **Description**
--- | --- | --- | ---
New auth 1990e form - canonical URL | /education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/  | Home > Education and training  > VA education benefits for survivors and dependents > [H1 of form] |  The canonical URL Is what will be used for entry links to the form.  The form should resolve to the appropriate first page of the form flow (in this case, it would resolve to /introduction/)
1990e Application Instructions |  /education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/introduction/ | Same as initial page of form | ---
1990e Applicant Information | /education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/applicant-information/ | Same as initial page of form | ---
1990e Sponsor information  |  /education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/sponsor-information/ | Same as initial page of form | ---
1990e Sponsor information-High School |  /education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/sponsor-high-school/ | Same as initial page of form | ---
1990e Sponsor information-High School-Date Received |  /education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/sponsor-high-school-completion/ | Same as initial page of form | ---
1990e Contact Information-Phone/Email | /education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/phone-email/ | Same as initial page of form | ---
1990e Contact Information-Mailing Address |  /education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/mailing-address/ | Same as initial page of form | ---
1990e Contact Information-Follow-up Questions/Preferences | /education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/preferred-contact-method/ | Same as initial page of form | ---
1990e Direct Deposit |  /education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/direct-deposit/ | Same as initial page of form | ---
1990e Application Review |  /education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/review/ | Same as initial page of form | ---
1990e Application Confirmation |  /education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/confirmation/ | Same as initial page of form | ---



## <a name="nav"></a>Navigation and Primary Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities. This is not intended to capture all entry points or referring links, just those critical to the experience*

**Action** | **Placement** | **Destination** | **Description**
--- | --- | --- | ---
Add | [Survivor and dependent benefits page](https://www.va.gov/education/survivor-dependent-benefits/) | New instructions page - www.va.gov/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/ | Content and a CTA need to be added around applying for transferred benefits, with a related link referring to the [Transfer Post-9/11 GI Bill benefits](https://www.va.gov/education/transfer-post-9-11-gi-bill-benefits).
Add | Education left nav | New instructions page - www.va.gov/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/ | Add option to "Apply to use transferred benefits" (copy TBD by Sitewide Content) to left nav as child of  "Survivor and dependent benefits".  It should be listed as the 3rd option, after DEA.
Update | [Wizard on Education How to apply page](www.va.gov/education/how-to-apply/)   | New instructions page - www.va.gov/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/ | Direct to this page if the following selections are made:  Apply for a new benefit > **Not** claiming a benefit based on own service > Sponsor **is not** deceased, MIA, POW, or 100% disabled > Sponser **has** transferred benefits
Update | [Wizard on Education eligibility page](https://www.va.gov/education/eligibility/) | same updates as on How to apply page | same updates as on How to apply page
Update | [Transfer Post-9/11 GI Bill benefits page](https://www.va.gov/education/transfer-post-9-11-gi-bill-benefits/) | New instructions page - www.va.gov/education/survivor-dependent-benefits/apply-for-transferred-benefits-form-22-1990e/ | Under section "How do I transfer the benefit?", update the link to "Apply online now" to go to new 1990e instruction page. This link text should also be updated to be more specific to the action of applying to use a transferred benefit




## <a name="redirects"></a>Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

-  None

