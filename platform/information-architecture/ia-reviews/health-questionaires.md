# IA Review and Recommendations
**STATUS: COMPLETE 11/20/2020**

**Team:** Health care experience

**Product/Featue:** Patient Questionnaires

**Background/Context:** Allow a Veteran to complete pre- and post-appointment questionaires and screeners

**IA Request:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/15647

<hr>

### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements. *

- Health questionnaires will live within the health care benefit hub along with all other health care tools and content. 
- The experience will include
  - Static content landing page  - Primarily used for unauthenticated experience.  Content will be optimized for SEO. Page is bypassed for authenticated users. 
  - Questionnaire list - Dynamic tool showing all of the open and completed questionnaires for the user.
  - Questionnaires - Online form
  - Completed questionnaire PDFs - completed questionnaires will be stored as PDFs and available for download


![image.png](https://images.zenhubusercontent.com/59ca6a73b0222d5de4792f1d/7a36bc0e-6d15-4ca2-a109-c35d713e2dc5)


**Page** | **URL** | **Breadcrumb** | Notes
--- | --- | --- | ---
Static content page | www.va.gov/health-care/health-questionnaires/  | [Home](https://www.va.gov) > [Health care](https://www.va.gov/health-care/) > Health questionnaires |    
Questionnaire list page | www.va.gov/health-care/health-questionnaires/questionnaires/ |[Home](https://www.va.gov) > [Health care](https://www.va.gov/health-care/) > Your health questionnaires | Note that breadcrumb does not include reference to the static page since it is bypassed for authenticated users. 
Questionnaire | www.va.gov/health-care/health-questionnaires/questionnaires/answer-questions?id=[id#] | [Home](https://www.va.gov) > [Health care](https://www.va.gov/health-care/) > [Your health questionnaires](https://www.va.gov/health-care/health-questionnaires/questionnaires/) > Answer [stop code] questionnaire | Note that breadcrumb does not include reference to the static page since it is bypassed for authenticated users. <br> The final breadcrumb component will mimic the H1 of the page.


<hr>

### Navigation, user flows and VA.gov entry points <br>
*How users will navigate to and flow through the proposed experience.  Includes the primary entry points and changes to global navigation elements.*


![image.png](https://images.zenhubusercontent.com/59ca6a73b0222d5de4792f1d/bb31a656-b6c0-4ab1-9aea-bfc2776893ba)


1. The static page and sign in process are bypassed if the user is already authenticated. 
2. When linking directly to a questionnaire, if user is not authenticated, an unauth view of the requested questionnaire is displayed, users are then prompted to sign in and are either sent to the questionnaire to complete/continue or to the questionnaire list page if the questionnaire is no longer available/valid.  
  - The desired future state is that the links within the emails and texts will take users directly to a specific questionnaire rather than the list page, thereby following the same flow as direct external link (i.e. bookmark).
  

**Priority** | **Placement** | **Destination** | **Description** 
--- | --- | --- | --- 
MUST | Health care hub left nav | Questionnaire static content page (https://www.va.gov/health-care/health-questionnaires/) | Option should be placed immediately after "Schedule and view appointments". <br>  Standards for options in the "Manage" spoke call for an action-oriented label (i.e. "Find or coomplete health questionnaires") - Public Websites team to determine exact label. 
MUST | [VA appointments list page](https://www.va.gov/health-care/schedule-view-va-appointments/appointments/) | Questionnaire list tool (https://www.va.gov/health-care/health-questionnaires/questionnaires/) | A link should be added to each appointment block that has a corresponding questionnaire. 
Not recommended at this time | Top navigation |--- | The standard for the top nav is a max of 5 links per spoke/column. The health care fly out already has 5 items within the "Manage benefits" spoke.  If this option is added, another option should be removed. I do not recommend this task replacing another option within this list at this time unless stakeholders feel that this is a top 5 task within health care. If unknown, then traffic/analytics and research should be used to inform this decision after this feature has been live for an adequate amount of time to capture data. 
Not recommended at this time | [Health care hub landing page](https://www.va.gov/health-care) | --- | The standard for the hub pages is a max of 10 links per spoke/grouping. The health care hub page already has 10 items within the "Manage benefits" spoke.  If this option is added, another option should be removed.  In reviewing analytics, the least clicked option within the Manage spoke over the last 3 months is "Pay copay bill".  I do not recommend this task replacing another option within this list at this time. Analytics and research should continue to inform this decision, as well as continuing evolution of design standards for the hub page. 

*Priority: Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 

<hr>

### Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

- No redirects are anticipated at this time. 

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>

### Additional Details/Recommendations

<hr>
<hr>

### Meetings Notes and Background Info

10/9/2020 - Usability testing prep for pre-visit questionnaire
- initially only for primary care
- users may need/want to access these forms after they submit them
- Team discussed their idea of a "questionnaire manager page" - something that provides info about all forms and access to any form to be completed or already completed
- potentially need an unauthenticated view of a form?
- users will primarily get to these questionnaires via direct link or text, but can also get here from link on appointment list page...and others?
- Feedback documented in issue: https://github.com/department-of-veterans-affairs/va.gov-team/issues/14473


8/6/2020 - Usability testing prep
- no major IA feedback at this time
- Need to review user flows that are mapped out
- testing prep feedback documented here: https://github.com/department-of-veterans-affairs/va.gov-team/issues/11838#issue-668134201


7/29/2020 - Kick-off
- how does a Veteran complete pre- and post-appointment questionaires and screeners
- discovery research revealed Veterans are doing a lot of docs on paper and normally not doing it ahead of time, lots of repetitive questions asked
- want info to be leveraged across all VA and community providers - needs to meet needs of Veterans and clinical teams
- ability to do forms when, where and with what device they choose
- questionaires are based on appointments, based on VAOS scheduling integration, will trigger the type of form they need and then hopefully utilizing the VETtext to send notification that the form is out there.  
- want it to be a part of the va.gov experience
- Collecting info will be focus, MHV will control sharing of data and authentication
- forms can be customized by clinic and specialty
- form builder tool is needed, want to standardize where they can but need to allow customizations
- 


