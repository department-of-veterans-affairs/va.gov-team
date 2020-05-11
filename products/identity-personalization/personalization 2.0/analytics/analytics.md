## General Analytics Thoughts
For period 1/1/19 - 7/14/19, comparing pageviews and unique page vies for sitewide (va.gov) and specific pages or areas of the site:

|Site Section|Pageviews|Unique Pageviews|
|----|----|-----|
|Va.gov| 160,010,637| 107,352,635|
|Homepage| 25,286,165 (15%)| 16,217,449 (10%)|
|HCA| 3,330,788 (2%)| 2,790,289 (2%)|
|MyVA| 4,127,632 (2%)| 2,547,849 (2%)|
|Profile| 1,661,950 (1%)| 1,270,117 (.31%)|
|Account| 461,340 (.29%)| 333,305 (.31%)|
|HCA| 461,340 (.29%)| 333,305 (.31%)|

**Assumptions**
* Users are applying and managing tasks in-context rather then using a centralized dashboard.

### Analytics Needs
List of questions we hope the analytics team might help with...

1. **Profile** ([Analytics Dashboard WIP](https://datastudio.google.com/u/0/reporting/1MEhg3-5vnPBsSc_1wCzh6LByR3RjH92q/page/OoJS?s=vS-iovB_OEo))
  * Number of updates for each action ([Nedie provided high level first pass](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Discovery/Personalization%202.0/Artifacts/VA.gov%20Modernized-Google%20Analytics-Profile%20Saves-02242019-06262019.xlsx))  (Still need repeatable report, monthly)
  * Actions taken per session, to help identify common themes/collection of actions (asked 6/27)
  * Number of failed updates for each action? Do we get a reason code or some indicator of what failed? (asked 6/27)
  * Are users getting to the profile page from nav or elsewhere on site?
  * Number of users adding address (both mailing and home) month over month since launch?  Might be duplicate of the first one.
  * Number of users editing address (both mailing and home) month over month since launch?  Might be duplicate of the first one.
  
2. **Account** *(Not clear what a user can 'do' here?)* ([Analytics Dashboard WIP](https://datastudio.google.com/u/0/reporting/1MEhg3-5vnPBsSc_1wCzh6LByR3RjH92q/page/voJS?s=vS-iovB_OEo))
  * Are users getting to this from nav or elsewhere on site?
  * Once there, what are they doing?
  
3. **MyVA** ([Analytics Dashboard WIP](https://datastudio.google.com/u/0/reporting/1MEhg3-5vnPBsSc_1wCzh6LByR3RjH92q/page/GELI?s=vS-iovB_OEo))
  * For users who enter MyVA, what are they doing once there? (asked 6/25)
  
4. **Login**
  * Where/what are usings logging in for? (asked 6/25)
  * For users that login using the sign-in button, what do they do next and after that and after...? (asked 6/25)
  * Login error rates, per type.
  * Type of login being used (ds login, MHV, id.me)
  * These login events are from 1/1/19 - 7/14/19.  What is the story to tell here...most users are logging in to track and view claims?
  
  ![alt text](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Discovery/Personalization%202.0/Artifacts/Login_Events.png "Login Events")
  
5. **My Health**
  * Basic click info
  * How many users click direct vs. access via other parts of va.gov?

6. **Other/General**
  * For forms that require login throughout the site, basic info
  * Form success
  * Form failure
  * How many come from ebenefits to va.gov?
  * How many come from MHV to va.gov?
  * Device usage stats
  * What insights are avaialble through Foresee? (Asked Leah)
  * Can we use foresee within MyVA (account, profile, myhealth, etc.) to gain additional insights?
  
7. **HCA Form** 
  * Top Actions ([Analytics Report](https://analytics.google.com/analytics/web/?authuser=1#/analysis/a50123418w177519031p184318975/edit/dlBd1euRSxG2bOEbQRMchg) reviewing with Nedie 7/17)
  * How many are returning to the form after starting or completing an application?  Can we know if they are returning to check status or continue the application and if yes, get both.
  * Are users returning to content page and logging in or going to MyVA after login?
  * There was a report generated in GA but I can't find it now...can you point me to it again?
  
8. **Direct Deposit**
  * Interactions with various actions such as clicks or data entry. 
  * Pathing through the experience (from point of entry through to completion, help identify breaks or consistent failure points)
  * Completions and failures
  * Email confirmation open, clicks, etc. (future?)
