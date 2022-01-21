# IA Design for Connected Devices
**STATUS: IN PROGRESS**

**Team:** Digital Health Platform

**Product/Featue:** Connected devices

**IA Request:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/35290

**On this page:**
- [User flows](#flows)
- [IA structure, URLs and breadcrumbs](#ia)
- [Navigation and entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="flows"></a>User/Page Flows <br>
*Description of how users will flow through the experience*

- Users will recive an email with a link  
  - If the user is not signed, they will land on a static landing page that will include a CTA to sign in
  - If the user is signed in, they will be taken directly to an authenticated page that includes links to devices they can connect as well as any devices they already have connected.
- Once the user selects a device, they will be directed to that device's web site to connect or disconnect the device
- Once finished, the user will have an option to return back to VA.gov. 

![image](https://user-images.githubusercontent.com/20994159/150610468-271ad119-ae66-4697-90f0-71825c5116c1.png)



## <a name="ia"></a>IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*


**Page** | **URL** | **Breadcrumb** | **Notes**
--- | --- | --- | ---
Connected devices unauth landing page | tbd  | none   |  - The landing page will not be findable through VA.gov navigation or search. <br> - The landing page must have a noindex tag to be excluded from external search/crawlers. <br> - The landing page must be excluded from the VA.gov xml sitemap.
Your connected devices page | tbd | none | 


## <a name="nav"></a>Navigation and Primary Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

**A/R/M** | **Page/component** | **Link destination** | **Placement/description of change**
--- | --- | --- | ---
 |   |   |  



## <a name="redirects"></a>Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

-  

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>
<hr>

## <a name="notes"></a>Meetings Notes and Background Info

**1/18/22 - IA discussion with team**
- Functionality will be piloted with 1 location and 1 device (Fitbit)
- Communication to connect the device would happen with the clinician (who is providing the device) and likely an email.
  - There will be no entry points to this flow on VA.gov and potentially should be hidden from those not in the pilot (they will confirm with stakeholders)
- Initial landing page will need to support 2 functions: connect a device and manage connected devices. To disconnect a device, users will be directed to the device website.
- Unsure of need to include any data privacy or terms and conditions content.
- Once logged in, the process of connecting the device (or disconnecting it) would happen through the device's site (i.e. Fitbit's site. They are then returned to va.gov as confirmation of process complete.
- Discussed how this relates to the connected apps feature currently live in profile - DHP team will reach out to auth exp to discuss
  - Future hope is that this would be in profile for users to manage connected devices
  - Unsure if it can be in profile initially due to only being a pilot - team will connect with Auth Exp team to discuss
