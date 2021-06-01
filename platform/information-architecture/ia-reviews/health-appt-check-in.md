# IA Design and Recommendations
**STATUS: NOT STARTED**

**Team:** Health care experience <br>
**Product/Featue:** Appointment Check-in

**IA Request:** 

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


Page | URL | Breadcrumb | Description
--- | --- | --- | ---
   |   |   |  | 


## <a name="nav"></a>Navigation and Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

Priority | Placement | Destination | Description
--- | --- | --- | ---
   |   |   |  | 

***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 


## <a name="redirects"></a>Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

-  

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>
<hr>

## <a name="notes"></a>Meetings Notes and Background Info

**6/1/20201 - Regroup with Kristen, Meg and Danielle**

Phase 1 - Check-in
- Usability end of June, primarily happy path
- When arriving for an appointment, Veteran will scan code from poster and send text to notify facility that they have arrived
- Link to check-in process is texted back (structure of URL?)
- Veteran clicks on link in text to be directed to VA.gov check-in page
- New authentication process LoROTA, identifies user based on mobile phone number
  - Will give them their appointment details based on their phone nbr
  - If they want to do anything else they will need to log in
  - What to do with breadcrumb, header, footer in this experience of partially identified?
    - Potentially no breadcrumb, or just "Home"
    - Maybe no header or a reduced header
- Error scenarios??? - unrecognized mobile phone number, too early/too late, does URL in text expire, etc. 

Phase 2 - Pre-check-in process 
- starting summer 2021
- Email with link to a pre-check in page that lists forms and tasks to be done
  - Items may vary per appointment and depending on last time they were there
  - Would include health questionnaire(s) if not complete
- Discussing LoROTA for this as well
- This may also eventually be hooked up to the check-in process if they have not completed some/any of their pre-check in tasks
Mobile app team will be picking this work up as well
-  VA.gov will go first

**5/6/2021 - Design intent**
- IA Feedback ticket here: https://github.com/department-of-veterans-affairs/va.gov-team/issues/24354
- Big questions revolve around
  - New light weight authentication process for identifying person to associate them with an appointment for check-in
  - Bigger IA question around how this (if this) integrates with VAOS or if it is its own experience
