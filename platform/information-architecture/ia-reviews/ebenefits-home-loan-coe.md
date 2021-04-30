# IA Design and Recommendations
**STATUS: IN PROGRESS**

**Team:** VSA - eBenefits

**Product/Featue:** Online application for home loan COE

**IA Request:** https://app.zenhub.com/workspaces/vsp---product-support-5f85b91c14d8df0018fac414/issues/department-of-veterans-affairs/va.gov-team/23573

**On this page:**
- [User flows](#flows)
- [IA structure, URLs and breadcrumbs](#ia)
- [Navigation and entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="flows"></a>User/Page Flows <br>
*Description of how users will flow through the experience*


## <a name="ia"></a>IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*

- The Housing assistance hub has 2 separate areas - one for home loans and the other for housing grants - making the structure of this hub slightly different than other benefit hubs.  Rather than the typical 3 spoke structure (get, manage, resources), this hub is broken into 2 spokes to separate the 2 different benefit types under housing assistance. Under those 2 spokes, the options/content pages are then ordered based on the get/manage/resources structure, but not labeled as so.  
- A static content page about this benefit already exists, but currently directs users to eBenefits to apply. With this work the static page will be updated appropriately and will direct users to the new online form on VA.gov. 
- The new form will be nested under the [Home loans page](https://www.va.gov/housing-assistance/home-loans/) at the same level as all other home loans pages.
- 

![image.png](https://images.zenhubusercontent.com/59ca6a73b0222d5de4792f1d/64a2a16e-355a-48b8-96b7-62e2f685960e)


Page | URL | Full Breadcrumb* | Notes
--- | --- | --- | ---
[Home loans static landing page](https://www.va.gov/housing-assistance/home-loans/)   | no change  | no change   |   This is an existing page. No URL or breadcrumb changes needed, only content updates as detailed by Sitewide Content team.  
Apply for COE online form | /housing-assistance/home-loans/apply-for-coe-form-26-1880 | Home > Housing assistance > VA-backed home loans > [Online form H1] | The final segment of the breadcrumb should be an exact match to the H1 of the /introduction page of the form. 

*Note: The full breadcrumb, as shown within the desktop experience, is provided above. The mobile experience has a varied pattern to the breadcrumb, and only shows 1 segment, the parent page.  

## <a name="nav"></a>Navigation and Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

Priority | Placement | Destination | Description
--- | --- | --- | ---
Must  |  [Housing assistance hub page](https://www.va.gov/housing-assistance)  | www.va.gov/housing-assistance/home-loans/apply-for-coe-form-26-1880 | Add appropriate link label (i.e. "Apply now for your COE") and teaser text under the "Get VA home loan benefits" section of the hub page.  <br>Place after the "How to apply" option.  <br> Work with Sitewide content team to finalize and implement.  
Must | [Housing assistance left nav](https://www.va.gov/housing-assistance/home-loans/) | www.va.gov/housing-assistance/home-loans/apply-for-coe-form-26-1880 | Add appropriate link label (i.e. "Apply now for your COE") as a child of "VA-backed home loans" option.  <br>Place after the "How to apply" option.  <br> Work with Sitewide content team to finalize and implement.  

***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 


## <a name="redirects"></a>Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

-  No known redirects needed. 

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>
<hr>

## <a name="notes"></a>Meetings Notes and Background Info

