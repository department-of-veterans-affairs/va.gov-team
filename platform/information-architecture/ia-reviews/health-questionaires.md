# IA Review and Recommendations
**STATUS: IN PROGRESS**

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
Questionnaire/form | www.va.gov/health-care/health-questionnaires/questionnaires/answer-questions?id=[id#] | [Home](https://www.va.gov) > [Health care](https://www.va.gov/health-care/) > [Your health questionnaires](https://www.va.gov/health-care/health-questionnaires/questionnaires/) > Answer [stop code] questionnaire | Note that breadcrumb does not include reference to the static page since it is bypassed for authenticated users. <br> The final breadcrumb component will mimic the H1 of the page.


<hr>

### Navigation, user flows and VA.gov entry points <br>
*How users will navigate to and flow through the proposed experience.  Includes the primary entry points and changes to global navigation elements.*


![image.png](https://images.zenhubusercontent.com/59ca6a73b0222d5de4792f1d/f0a7c9e3-0586-41c6-a90b-9d216a454c27)


1. Bypass the static page if the user is already authenticated.  
2. The sign in/create account process is bypassed if user is already authenticated. 
3. When linking directly to a questionnaire, an unauth view of the requested questionnaire is displayed, then users are prompted to sign in (if needed) and then either the questionnaire is displayed for them to continue, or an error message is displayed if the questionnaire is no longer available/valid
  - Alternate flow: Bypass the unauthenticated view of the questionnaire and take users directly to to sign in/authentication and then to questionnaire list - this is similar to other flows and doesn't give potential false impression that the questionnaire is available to complete. 


**Priority** | **Placement** | **Label** | **Destination** | **Description** 
--- | --- | --- | --- | ---
tbd | [Health care hub landing page](https://www.va.gov/health-care) | tbd | Questionnaire static content page (https://www.va.gov/health-care/health-questionnaires/) | tbd
tbd | Health care hub left nav | tbd | Questionnaire static content page (https://www.va.gov/health-care/health-questionnaires/) | tbd
tbd | [VA appointments list page](https://www.va.gov/health-care/schedule-view-va-appointments/appointments/) | tbd | Questionnaire list tool (https://www.va.gov/health-care/health-questionnaires/questionnaires/) | tbd


*Priority: Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 

<hr>

### Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

- 

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


