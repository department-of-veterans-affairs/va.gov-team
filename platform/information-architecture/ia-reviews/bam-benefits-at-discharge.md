# IA Review and Recommendations
**STATUS: COMPLETE**

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

![image](https://user-images.githubusercontent.com/20994159/86930285-77a7d200-c0fc-11ea-8eee-8397525be67c.png)

**Impacted Pages**

Page | URL | Breadcrumb | Notes | Validated<br> in staging | Validated<br> in prod
--- | --- | --- | ---| --- | ---
How to file a claim | /disability/how-to-file-claim                   | Home > Disability benefits > How to file a claim | Content changes only |  |  
When to file        | /disability/how-to-file-claim/when-to-file/     | n/a | Retire and redirect page | | 
Pre-discharge claim | CURRENT:<br> /disability/how-to-file-claim/when-to-file/pre-discharge-claim/ <br> NEW:<br> /disability/how-to-file-claim/pre-discharge-claim/ | CURRENT:<br> Home > Disability benefits > How to file a claim > When to file > Pre-discharge claim <br> NEW:<br> Home > Disability benefits > How to file a claim > Pre-discharge claim | Content changes, URL change, breadcrumb change | | 
File while overseas | /disability/how-to-file-claim/when-to-file/pre-discharge-claim/file-while-overseas/  | n/a | Retire and redirect page | | 
FDC Walkthrough     | https://www.benefits.va.gov/FDC/walkthrough.asp | n/a | Retire and redirect page | | 
FDC Checklist       | https://www.benefits.va.gov/FDC/checklist.asp   | n/a | Retire and redirect page | | 


<hr>

### Navigation Changes and Entry and Exit Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

- BDD application is integrated with the overall 526ez online form, so many entry points already exist, but content may been to be updated to reference that this capaility is now available on va.gov rather than eBenefits. 
- No new entry points to be added, and all existing entry points remain in place. The only change is that users will be directed to va.gov rather than eBenefits.  

**Navigation changes**

Priority | Nav component | Changes | Validated<br> in staging | Validated<br> in prod
--- | --- | --- | --- | --- 
Must | Disability left nav | When to file a claim - Remove from left nav | |
Must | Disability left nav | File while overseas - Remove from left nav | |
Must | Disability left nav | FDC Walkthrough (legacy page) - Remove from left nav | |
Must | Disability left nav | FDC Checklist (legacy page) - Remove from left nav | |
Should | Disbility left nav | Pre-discharge - Move in the Disability left nav up 1 level to a child of How to file page, and list as the first option above "Evidence needed" | | 

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
Pre-discharge claim | /disability/how-to-file-claim/when-to-file/pre-discharge-claim/ | /disability/how-to-file-claim/pre-discharge-claim/
File while overseas | /disability/how-to-file-claim/when-to-file/pre-discharge-claim/file-while-overseas/ | /disability/how-to-file-claim/pre-discharge-claim/
FDC Walkthrough (legacy page) |  https://www.benefits.va.gov/FDC/walkthrough.asp  | /disability/how-to-file-claim/evidence-needed/fully-developed-claims/
FDC Checklist (legacy page) | https://www.benefits.va.gov/FDC/checklist.asp | /disability/how-to-file-claim/evidence-needed/fully-developed-claims/


*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>

### Additional Details/Recommendations

<hr>
<hr>

### Meetings Notes and Background Info

6/18/20 - User research and SEO findings
- Research did show that users struggled to find the pre-discharge page - they utilized search, disability menus and service member hub
- SEO data shows more activity for "BDD" and "benefits delivery at discharge", less for "pre-discharge claim"


**Usability testing prep - 3/9/2020**
- IA feedback issue: https://github.com/department-of-veterans-affairs/va.gov-team/issues/6692
