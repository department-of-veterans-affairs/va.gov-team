# IA Design and Recommendations
**STATUS: In Progress 5/3/23**

**Team:** Health care experience <br>
**Product/Feature:** Appointment Check-in

**IA Request:** 

**On this page:**
- [User flows](#flows)
- [IA structure, URLs and breadcrumbs](#ia)
- [Navigation and entry points](#nav)
- [Search/SEO](#seo)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="flows"></a>User/Page Flows <br>
*Description of how users will flow through the experience*

- Users will access this tool via a link in text message.  
  - Users will not be able to navigate to this via VA.gov.
  - This tool will not be available via VA.gov or external search.
- A display state must be included to accomodate users who attempt to bookmark and/or directly access the URLs in the check-in flow
 
![Pre Check in Flows](https://user-images.githubusercontent.com/122126772/236066960-35eda0ab-3afc-4ea6-a4ce-187331dc6730.png)
![Check in Flows](https://user-images.githubusercontent.com/122126772/236066962-419e3279-c47f-434d-b828-4d6a6a9f0b56.png)


## <a name="ia"></a>IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*



**Page** | **URL** | **Breadcrumb** | **Description**
--- | --- | --- | ---
Check-in task flow - primary url   |  www.va.gov/health-care/appointment-check-in/   |  None |  - Breadcrumb should be suppressed/hidden to reduce options to exit flow since they cannot navigate back, and although tool lives within va.gov, it is not findable via search/navigation, so location within site is irrelevant. 
Check-in task flow - chapter slugs | examples: <br> .../insurance  <br> .../details <br> .../complete <br> .../see-staff | None | - Individual chapters/pages of the flow will each have their own final url slug. Items shown are suggestions, final slugs can be determined by the team.  They should be 1-2 words max, use understandable key words, and relate to the specific purpose of that page.  <br> - Breadcrumb should be suppressed/hidden to reduce options to exit flow since they cannot navigate back, and although tool lives within va.gov, it is not findable via search/navigation, so location within site is irrelevant. <br> - Alternative option is to add a "< Back" link in place of the breadcrumb. 


**Placement of check-in pages within the hierarchy/organization of VA.gov**
![Check in Structure](https://user-images.githubusercontent.com/122126772/236067014-701ee5fb-5075-4747-a750-671547804ca6.png)


## <a name="nav"></a>Navigation and Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

**Priority** | **Placement** | **Destination** | **Description**
--- | --- | --- | --- 
 MUST  |  Text message  | www.va.gov/health-care/appointment-check-in/  |   Text link will go directly to check-in page, this requires them to pass through some level of authentication in order to show the correct details.
--- | --- | ---- |  No other entry points will be created/added within VA.gov

***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 



## <a name="seo"></a>Search and SEO Requirements <br>
*Indicate any specific requirements related to internal or external search.*  



## <a name="redirects"></a>Redirects <br>
Do we need to redirect from current checkin experience to new ones? I don't think so since each url is unique from the text message?


<hr>
