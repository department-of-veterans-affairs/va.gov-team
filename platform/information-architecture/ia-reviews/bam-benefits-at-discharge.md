# IA Review and Recommendations
**STATUS: COMPLETE** <br>
**UPDATED 8/25/2020**  - Based on conversations with Public Websites team and timing of BDD launch and larger content strategy work, some proposals were pulled back slightly and edits have been made below.  The focus will be on elevating the pre-discharge claim page, updating it with relevant URL/H1 for SEO and the necessary redirects for that.  Additional content work will be deferred to a later date. 

**Team:** BAM 1

**Product/Featue:** Benefits Delivery at Discarge - this will be an additional flow within the existing 526 claim form. 

**Background/Context:** The BDD program allows Service members to apply for their disability benefits before separation.

**IA Completed Date: 7/14/2020** 

**IA Review Issue:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/10184 <br>
**IA/Content Strategy Issue:** https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/10896
<hr>

### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements. *

**Approach:**
- With the launch of BDD, all disability claims will be handled on va.gov and we will no longer need to link to eBenefits for any claim scenarios.
- The static content for this application already exists on va.gov, IA and Public Websites team has reviewed existing content for changes/restructuring needed to best support the new claim scenario. This content currently exists as part of the "How to file a claim" page and child pages. 
- The site map below shows the before and after of existing content pages and changes to the IA - some pages have been merged and some removed/retired


![image](https://user-images.githubusercontent.com/20994159/91229927-3f7e4200-e6f0-11ea-918d-ad01365e5034.png)


**Impacted Pages**

Page | New URL | New Breadcrumb | Notes | Validated<br> in staging | Validated<br> in prod
--- | --- | --- | ---| --- | ---
~[How to file a claim](www.va.gov/disability/how-to-file-claim)~ | ~n/a~ | ~n/a~ | ~Content changes only~ | - |  -
~[When to file](www.va.gov/disability/how-to-file-claim/when-to-file/)~  | ~n/a~  | ~n/a~ | ~Content to be merged onto other pages. Retire and redirect URL~ | - | -
[Pre-discharge claim](www.va.gov/disability/how-to-file-claim/when-to-file/pre-discharge-claim/) | /disability/how-to-file-claim/benefits-delivery-at-discharge/ | Home > Disability benefits > How to file a claim > Benefits Delivery at Discharge Program | ~Content changes,~URL change, H1 change, breadcrumb change | | 
~[File while overseas](www.va.gov/disability/how-to-file-claim/when-to-file/pre-discharge-claim/file-while-overseas/)~ | ~n/a~  | ~n/a~ | ~Content to be merged onto other pages. Retire and redirect page~ | | 
[FDC Walkthrough](https://www.benefits.va.gov/FDC/walkthrough.asp)     | n/a | n/a | Retire and redirect page | | 
[FDC Checklist](https://www.benefits.va.gov/FDC/checklist.asp)       | n/a   | n/a | Retire and redirect page | | 


<hr>

### Navigation Changes and Entry and Exit Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

- BDD application is integrated with the overall 526ez online form, so many entry points already exist, but content may been to be updated to reference that this capaility is now available on va.gov rather than eBenefits. 
- No new entry points to be added, and all existing entry points remain in place. The only change is that users will be directed to va.gov rather than eBenefits.  

**Navigation changes**

Priority | Nav component | Changes | Validated<br> in staging | Validated<br> in prod
--- | --- | --- | --- | --- 
~Must~ | ~Disability left nav~ | ~When to file a claim - Remove from left nav~ | - | -
Must | Disability left nav | Benefits Delivery at Discharge - move page up to be a child of "How to file", listed after "When to file" | |
Must | Disability left nav | File while overseas - ensure it moves with BDD page and continues to be a child of that page | |
Must | Disability left nav | FDC Walkthrough (legacy page) - Remove from left nav | |
Must | Disability left nav | FDC Checklist (legacy page) - Remove from left nav | |
~Should~ |~Disbility left nav~ | ~Pre-discharge - Move in the Disability left nav up 1 level to a child of How to file page, and list as the first option above "Evidence needed"~ | - | -

**Entry Points**
Priority | Placement | Description | Validated<br> in staging | Validated<br> in prod
---      | ---       | ---         | ---                      | --- 
Must     | [How to file a claim](https://www.va.gov/disability/how-to-file-claim/) | How to file wizard will now link to va.gov application rather than eBenefits <Br> This is an existing link to be updated, along with content updates as appropriate | X |


***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 

<hr>

### Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

- Redirects will be needed for all URL changes to ensure old URLs are redirected to the new URLs, as well as pages that are being retired.  
- Please submit a request for the redirects using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
- Completion of these redirects will be tracked within the redirect ticket

Redirects needed for this work include, but are not limited to the following pages:

Current page | Current URL | New URL/Redirect to
--- | --- | --- 
When to file a claim | /disability/how-to-file-claim/when-to-file/ | /disability/how-to-file-claim/
Pre-discharge claim | /disability/how-to-file-claim/when-to-file/pre-discharge-claim/ | /disability/how-to-file-claim/benefits-delivery-at-discharge/
File while overseas | /disability/how-to-file-claim/when-to-file/pre-discharge-claim/file-while-overseas/ | /disability/how-to-file-claim/benefits-delivery-at-discharge/file-while-overseas
FDC Walkthrough (legacy page) |  https://www.benefits.va.gov/FDC/walkthrough.asp  | /disability/how-to-file-claim/evidence-needed/fully-developed-claims/
FDC Checklist (legacy page) | https://www.benefits.va.gov/FDC/checklist.asp | /disability/how-to-file-claim/evidence-needed/fully-developed-claims/


*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>

### Additional Details/Recommendations

<hr>
<hr>

### Meetings Notes and Background Info

8/25/20 - Discussion with PW team
- All content strategy work around the pages under "How to file" are not necessary for the launch of BDD and are therefore being moved into the ice box for Public Websites team
- We discussed what work should be done to ensure BDD success
- Work will focus on moving pre-discharge page up in IA and renaming to reflect BDD terminology based on SEO data
- Work to the "when to file" page will be backlogged

6/18/20 - User research and SEO findings
- Research did show that users struggled to find the pre-discharge page - they utilized search, disability menus and service member hub
- SEO data shows more activity for "BDD" and "benefits delivery at discharge", less for "pre-discharge claim"


**Usability testing prep - 3/9/2020**
- IA feedback issue: https://github.com/department-of-veterans-affairs/va.gov-team/issues/6692
