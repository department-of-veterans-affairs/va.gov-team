# My VA Health (OH) portal baseline metrics
Prior to integration


## Methods to accessing the My VA Health (OH) portal
There are two ways for users with Oracle Health facilities to access this portal: 
* **Method A** - Sign into VA.gov -> Go to My HealhteVet -> click on a My VA Health link from a My HealtheVet page -> land on My VA Health
* **Method B** - Use direct link (probably bookmarked) to My VA Health -> Authenticate via USiP sign-in -> land on My VA Health

### Method A data notes:

<img width="806" height="505" alt="image (49)" src="https://github.com/user-attachments/assets/b5c0e881-7ead-44a2-9b49-8b59afce9db0" />
<img width="798" height="520" alt="image (50)" src="https://github.com/user-attachments/assets/99066ed3-b19f-4002-bb98-3156cc7b9957" />


* Between January-April 2025, about 50% of My VA Health portal users got there from a link on the My VA (on VA.gov) page
  * This alert was **removed** from the My VA page per our instruction - I think in July
  * Background to that decision: Milestone 2 tactics (June 2025) surrounding the sunsetting of MHV Classic were to eliminate confusing "dual-portal" messaging alerts from VA.gov unauthenticate pages so that we wouldn't have to deal communicating how to access 3 different portals. More background on that decision [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/transition/benefit-hub-page-updates.md).
  * Open question: _should we bring it back & consider implementing an update to this alert as an additional tactic for the upcoming transition? Curious about helpdesk feedback from OH users if we have access to it._

* Interestingly, traffic to the My VA Health (OH) portal from VA.gov has **increased** roughly 40% since the MHV Classic sunset in June 2025. _Why?_
  * I have no explanation for this except for that it's possible our banners are clearer to users on VA.gov than the banner insanity was for them on Classic?
  * In June, OCTO received feedback from OH users that removing OH routing alerts from several places on VA.gov was problematic and frustrating for these users. While the alerts remain on all of the tool pages, users weren't going that deep and needed links on a higher-level parent page.
  * In July, a link was added to the MHV on VA.gov landing page to hopefully solve for this. But looking at the data, users are not utilizing this link (which is not among top 10 links).
    * This is surprising an potentially indicates that the current link solution on the main My HealtheVet landing page is not visually "loud" enough for users to notice.
 
