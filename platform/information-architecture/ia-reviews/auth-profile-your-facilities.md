# IA Design and Recommendations
**STATUS: COMPLETE 05/07/2021**  

**Team:** Authenticated experience

**Product/Featue:** Profile - Your health facilities

**IA Request:** https://app.zenhub.com/workspaces/vsp---product-support-5f85b91c14d8df0018fac414/issues/department-of-veterans-affairs/va.gov-team/23288

**On this page:**
- [IA structure, URLs and breadcrumbs](#ia)
- [Navigation and entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="ia"></a>IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*


Page | URL | Breadcrumb | Description
--- | --- | --- | ---
Profile: Your health facilities  | www.va.gov/profile/facilities/  | Home > Profile: [H1]   | The final segment of the breadcrumb should pull in the H1 of the page (i.e. Profile: Your VA health facilities).  Final H1s are determined by the content team.  | 

Notes: 
- I chose to keep the URL short and simple since 1) this is an authenticated page that does need search optimization 2) I don't know how this feature will grow over time in terms of types of facilities and 3) using "your" in the URL doesn't provide any significant benefit. 

## <a name="nav"></a>Navigation and Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

Priority | Entry point | Label | Destination | Placement and description
--- | --- | --- | --- | ---
Must | [Profile](https://staging.va.gov/profile/personal-information) - Left nav | Match H1 of page | www.va.gov/profile/facilities/ | Place option immediately after "Direct deposit information"
Must | VAOS form | --- | www.va.gov/profile/facilities/ |  Work with the VAOS team to determine where and how to best link to this feature within the scheduling flows, without negatively impacting the user's ability to complete their task.   

- The VAOS team is most familiar with the various flows within the online scheduling tool.  They should propose the best placement of a link to this feature from within their tool. 
- Given this feature of profile is pretty targeted to the VAOS flows, I did not recommend any additional entry points.  An article in Resources and support could be created, but this feature feels pretty specific to the online scheduling user flow, and not necessarily something someone would be seeking outside of that flow.  That said, and R&S article wouldn't hurt anything, it would just create more visibility to it. 

***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 


## <a name="redirects"></a>Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

-  

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>
<hr>

## <a name="notes"></a>Meetings Notes and Background Info




