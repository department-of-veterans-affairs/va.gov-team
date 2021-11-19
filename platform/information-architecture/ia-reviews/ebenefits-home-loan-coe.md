# IA Design and Recommendations
**STATUS: ~~COMPLETE 04/30/2021~~ ~~RE-OPENED 6/11/2021~~ ~~COMPLETE 8/6/2021~~  
<br> MODIFIED 11/19/2021** - Changed language/labeling of "apply" to "request".  Impact to URLs.  

**Team:** VSA - eBenefits

**Product/Featue:** Online application for home loan COE

**IA Request:** https://app.zenhub.com/workspaces/vsp---product-support-5f85b91c14d8df0018fac414/issues/department-of-veterans-affairs/va.gov-team/23573

**On this page:**
- [IA structure, URLs and breadcrumbs](#ia)
- [Navigation and entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="ia"></a>IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*

- The Housing assistance hub has 2 separate areas - one for home loans and the other for housing grants - making the structure of this hub slightly different than other benefit hubs.  Rather than the typical 3 spoke structure (get, manage, resources), this hub is broken into 2 spokes to separate the 2 different benefit types under housing assistance. Under those 2 spokes, the options/content pages are then ordered based on the get/manage/resources structure, but not labeled as so.  
- A static content page about this benefit already exists, but currently directs users to eBenefits to apply. With this work the static page will be updated appropriately and will direct users to the new online form on VA.gov. 
- The new form will be nested under the [Home loans page](https://www.va.gov/housing-assistance/home-loans/) section at the same level as all other home loans pages.
- A new authenticated tool and corresponding static landing page will also be created as part of this experience to allow users to check the status of their COE and download it.
- The diagram below does not represent all pages within this section, only the general hierarchy and key pages impacted. 


![image](https://user-images.githubusercontent.com/20994159/142696534-47bc6697-e8ff-4159-995f-a16b035a192d.png)

**Page** | **URL** | **Full Breadcrumb*** | **Notes**
--- | --- | --- | ---
Static How to ~~apply for~~ request a COE page | ~~/housing-assistance/home-loans/how-to-apply/~~ <br> /housing-assistance/home-loans/how-to-request-coe/ | Home > Housing assistance > VA-backed home loans > [Page H1] | This is an existing page.  The URL must be modified to reflect the word "request". A redirect will be required. 
~~Apply for~~ Request COE online form | ~~/housing-assistance/home-loans/apply-for-coe-form-26-1880~~ <br> /housing-assistance/home-loans/request-coe-form-26-1880 | Home > Housing assistance > VA-backed home loans > [Online form H1] | The final segment of the breadcrumb should be an exact match to the H1 of the /introduction page of the form. 
Check COE status static page | /housing-assistance/home-loans/check-coe-status | Home > Housing assistance > VA-backed home loans > Check the status of your VA home loan COE | - This is a new static page supporting the authenticated tool to check the status and download a COE. <br> - This page is only displayed for unauthenticated users.  <br> - Once a user is logs in, they should be immediately sent to the tool.  <br> - Authenticated users that link to this page will be automatically directed to the tool, and bypass this page. 
COE status tool | /housing-assistance/home-loans/check-coe-status/your-coe | Home > Housing assistance > VA-backed home loans > Your VA home loan COE | - This is a new authenticated tool that shows the status of a COE application and provides an option to download when applicable. <br> - The breadcrumb for this page does not include the static page segment since authenticated users bypass that page. 

*Note: The full breadcrumb, as shown within the desktop experience, is provided above. The mobile experience has a varied pattern to the breadcrumb, and only shows 1 segment, the parent page.  

## <a name="nav"></a>Navigation and Primary Entry Points <br>
*The primary entry points and changes to global navigation.*

**Please note:** Work with Sitewide content to finalize the link labels, related text and for implementation with Drupal.  

**Action** | **Placement** | **Destination** | **Details**
--- | --- | --- | ---
Add | Top nav > Housing assistance flyout | COE application <br> ~~www.va.gov/housing-assistance/home-loans/apply-for-coe-form-26-1880~~ <br> www.va.gov/housing-assistance/home-loans/request-coe-form-26-1880 | - Add appropriate link label (i.e. "Apply now for your COE") in the "Get home loan benefits" column  <br> - Place as the last option in the column.  <br> - Work with Sitewide content team to finalize and implement.  
Add | Top nav > Housing assistance flyout | Check status tool static page <br> www.va.gov/housing-assistance/home-loans/check-coe-status | - Add appropriate link label (i.e. "Check the status of your COE") in the "Get home loan benefits" column  <br> - Place after the "How to apply" option.  <br> - Work with Sitewide content team to finalize and implement.  
Remove | Top nav > Housing assistance flyout | n/a | - Remove the "Check your appeal status" link.  <br> - Order of remaining links: 1) About 2) How to apply 3) Check the status of COE 4) Apply now
Add  |  [Housing assistance hub page](https://www.va.gov/housing-assistance)  | COE application <br> ~~www.va.gov/housing-assistance/home-loans/apply-for-coe-form-26-1880~~ <br> www.va.gov/housing-assistance/home-loans/request-coe-form-26-1880 | - Add appropriate link label and teaser text under the "Get VA home loan benefits" section of the hub page.  <br> - Place after the "How to apply" option.  
Add  |  [Housing assistance hub page](https://www.va.gov/housing-assistance)  | Check status tool static page <br> www.va.gov/housing-assistance/home-loans/check-coe-status | - Add appropriate link label and teaser text under the "Get VA home loan benefits" section of the hub page.  <br> - Place after the surviving spouses option. 
Change  |  [Housing assistance hub page](https://www.va.gov/housing-assistance)  | Check your VA claim status | - CONFIRMING IF APPEALING A DECISION IS AN OPTION  <br> - Change the label on this option to clarify that they are checking the status of an appeal, not a claim.  Make sure this option is distinct from the option to check the COE status. <br> - Move this option below "Request a decision review" option. 
Add  |  [Housing assistance left nav](https://www.va.gov/housing-assistance/home-loans/)   | COE application <br> ~~www.va.gov/housing-assistance/home-loans/apply-for-coe-form-26-1880~~ <br> www.va.gov/housing-assistance/home-loans/request-coe-form-26-1880 | - Add appropriate link label to left nav.  <br> - Place after the "How to apply" option.  <br> - Work with Sitewide content team to finalize and implement.   
Add  |  [Housing assistance left nav](https://www.va.gov/housing-assistance/home-loans/)   | Check status tool static page <br> www.va.gov/housing-assistance/home-loans/check-coe-status | - Add appropriate link label to left nav.  <br> - Place after the surviving spouses option.   
Change  |  [Housing assistance left nav](https://www.va.gov/housing-assistance/home-loans/)   | n/a | - CONFIRMING IF APPEALING A DECISION IS AN OPTION <br> - Change order of top 7 left nav options: 1) Loan types 2) Eligibility 3) How to apply 4) Apply now 5) Surviving spouse programs 6) Check COE status 7) Request decision review 8) Check appeal status   <br> - Change the label on this option to clarify that they are checking the status of an appeal, not a claim.  
Change  |  [Housing assistance left nav](https://www.va.gov/housing-assistance/home-loans/)   | Check your VA claim status | - CONFIRMING IF APPEALING A DECISION IS AN OPTION  <br> - Change the label on this option to clarify that they are checking the status of an appeal, not a claim.  Make sure this option is distinct from the option to check the COE status. <br> - Move this option below "Request a decision review" option.   

  

**Additional key linking opportunities**  (Not an all-inclusive list.)
Page | Description
--- | ---
[Search best bets](https://www.va.gov/search/?query=home%20loan&t=false) | Review current best bets and potentially replace "loan types" with an apply option 
[VA-backed Veterans home loans page](https://www.va.gov/housing-assistance/home-loans/)  | Link to apply for COE and check status tool
[Purchase loan page](https://www.va.gov/housing-assistance/home-loans/loan-types/purchase-loan/) |  Link to apply for COE and check status tool for those that have already applied.
[Cash-out refinance loan page](https://www.va.gov/housing-assistance/home-loans/loan-types/cash-out-loan/) | Link to apply for COE and check status tool for those that have already applied.
[Native American direct loan](https://www.va.gov/housing-assistance/home-loans/loan-types/native-american-direct-loan) | Link to apply for COE and check status tool for those that have already applied.
[Interest rate reduction loan](https://www.va.gov/housing-assistance/home-loans/loan-types/interest-rate-reduction-loan) | Link to apply for COE and check status tool for those that have already applied.




## <a name="redirects"></a>Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

-  eBenefits technical team will be repsonsible for retiring and redirecting any related tools or content on ebenefits.va.gov. 
-  A redirect for the existing How to apply page, will be needed once the new URL is implemented per above. 

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>
<hr>

## <a name="notes"></a>Meetings Notes and Background Info

