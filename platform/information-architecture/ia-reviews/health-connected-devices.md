# IA Design for Connected Devices
**STATUS: COMPLETE**

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

- Users will recieve an email with a link  
  - Unauthenticated users will see a CTA to sign in
  - Authenticated users will see links to devices they can connect, as well as any devices they already have connected
- Once the user selects a device, they will be directed to that device's web site to connect or disconnect the device
- Once finished, the user will have an option to return back to VA.gov. 

![image](https://user-images.githubusercontent.com/20994159/157547308-7c61748f-c96b-4fac-b6c8-5c5a4870522a.png)



## <a name="ia"></a>IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*

This feature and content are related to a Veteran's health care journey, and will therefore live within the Health care hub. 

![image](https://user-images.githubusercontent.com/20994159/157549195-6b66ca3f-6ed2-449d-a65a-c37c7a55b932.png)

**Page** | **URL** | **Breadcrumb** | **Notes**
--- | --- | --- | ---
Connected devices page | /health-care/connected-devices/  | none  |  - This page will not be findable through VA.gov navigation or search. <br> - This page must have a noindex tag to be excluded from external search/crawlers. <br> - This page must be excluded from the VA.gov xml sitemap.



## <a name="nav"></a>Navigation and Primary Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

**A/R/M** | **Page/component** | **Link destination** | **Placement/description of change**
--- | --- | --- | ---
--- | ---  | ---  |   There will not be any entry points on the site to this feature.  The only way of accessing this page is by directly accessing it's URL.
 


## <a name="redirects"></a>Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

-   None

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
