# IA Design and Recommendations
**STATUS: IN PROGRESS**

**Team:** VA Notify
**Product/Featue:** Unsubscribe page

**IA Request:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/32980

**On this page:**
- [User flows](#flows)
- [IA structure, URLs and breadcrumbs](#ia)
- [Navigation and entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="flows"></a>User/Page Flows <br>
*Description of how users will flow through the experience*

![image](https://user-images.githubusercontent.com/20994159/147513631-b4dac409-ccf6-4f48-ac40-a2f230078af5.png)

User flow recommendations:  
- Users will only access this new page flow from an email, no entry points will be provided on the site.  
  - Profile may eventually include the ability to manage email communications, but that experience is not yet defined and likely will not utilize this page. 
- It is highly recommended that your flows acknowledge and acommodate users that do not have a VA.gov account. This can be handled through content, button labelings, etc.  The goal is to ensure users understand that in order to "manage their communication preferences" they will need to log into VA.gov. 
- It is highly recommended that you surface the link to My HealtheVet to manage health care related communications, since those cannot be managed on VA.gov.  Without this, logging into Va.gov is extra unnecssary steps, and if the user doesn't have an account, it is even more work to then be sent over to another site. 
  - CTA labels will be critical to ensure users understand what they can do on each site for.

## <a name="ia"></a>IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*


**Page** | **URL** | **Breadcrumb** | **Description**
--- | --- | --- | ---
Unsubscribe confirmation page   |  www.va.gov/email-subscription?[parameters]   | This page will not have a breadcrumb | URL will include necessary parameters to identify the user and ensure the correct email address is unsubscribed and records are properly updated. <br> If the user resubscribes, the same page is refreshed with appropriate content. 



## <a name="nav"></a>Navigation and Primary Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

**A/R/M** | **Placement** | **Destination** | **Description**
--- | --- | --- | ---
 Add  |  Bottom/footer text of email   |  Unsubscribe confirmation page   |  This is the only way to get to the unsubscribe page  | 




## <a name="redirects"></a>Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

-  None needed

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>
<hr>

## <a name="notes"></a>Meetings Notes and Background Info

