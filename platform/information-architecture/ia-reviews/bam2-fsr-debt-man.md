# IA Design and Recommendations
**STATUS:**

**Team:** 

**Product/Featue:** 

**Background/Context:**   

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


## <a name="nav"></a>Navigation and Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

Priority | Placement | Description
--- | --- | ---
   |   |   |

***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 


## <a name="redirects"></a>Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

-  

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>
<hr>

## <a name="notes"></a>Meetings Notes and Background Info

**10/21/2020 - Design intent**
- Reviewed wires for FSR form flow
- IA Questions:
  - At what point do they indicate which debt they are submitting the FSR for and what type of resolution they are requesting (i.e. monthly payments, waiver, compromise, etc)?
  - Is there different information needed on the FSR based on the type of debt or type of resolution they are submitting for?
  - Are we saving the FSR once they submit it for reference for any additional debts, or do they need to submit a new one for each debt?
  - As we think about how Veterans flow into this form, we will need to make sure we accommodate the possibility that someone lands here to resolve their health care copays and will need to direct them back.
- Feedback documented here: https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/14769

**10/20/2020 - Regroup with BAM2 team**
- FSR is used by other departments, although submission process may be different (where its routed to)
- FSR not needed for every debt, once filled out it is good for 6 months, can be used for multiple debts (its the same information)
- A veteran may want different payment plans for different debt - i.e. a waiver for C&P and monthly plan for education
- SSN and File # identifiers
- Team is unsure how health copays/debt play into this, separate process likely, although health care sends users to a pdf of the FSR for submitting a waiver.  
  - Health care has waiver (asking us to stop collection action on the debt), write-off (asking us to cancel the debt), or compromise (asking us to accept a lower amount of money as full payment of the debt)
- Discussed "the buddy form" 21-4138, sort of a generic form that is submitted with many forms as supplemental, mostly open text field
- Discussed the option of using a wizard as potential gating to direct user to correct process/form
- Need to include linking between debt management and health care to ensure users are directed appropriately, even though they may be very different things



**10/13/2020 - Content/IA Strategy kick-off**  Leah, Danielle, Riley, Rebecca, Matt, Brian L, Peggy
- Rewrite debtman to funnel the the veteran into the correct option and then to fill out the FSR form the first time
- The full FSR needs to be completed regardless of the resolution
- Need
  - Ia/content strategy for unauthenticated content
  - Ia/content support for tool/form
- Early calendar year/Q1 release - they will be sending out debt letters that may/may not realize they have debt due…anticipating overload of calls.  
- Discovery work with stakeholders is complete, talking with VSOs will be done this week, will go into design after that


**10/7/2020 - Kick-off**
- Debt collection has been suspended for coronavirus since march. There are 1.2 million veterans that are going to find out they have debt when it resumes
- The Financial Status Report (FSR) is the starting point of the debt resolution process
- Includes
	- Fill out FSR form
	- Write a justification letter to submit with FSR (for waiver or compromise) - unsure if this will be part of the FSR form flow or on its own
- Peggy: Where do you see this form living - within debt management section?  Team was unsure
- Mikki: Debt man site - what content needs to come over to support this tool??
	- debt man needs to be retired since it’s a heavy focus with this work and should move with this
- Early Q1 timing
