## Cutover determination for full launch (WIP)

> The redesign will be "soft launched" in Production as a parallel page which Veterans and beneficiaries can visit via "opt in" modal from the existing VA.gov homepage. 
> A subset of metrics considered "critical" will be used to determine when/if the redesign can replace the existing homepage in Production by assessing 
> - if enough users have used the redesign for analytics to be representative 
> - if the new homepage sufficiently supports task completion  

**Definitions**

- Completion rate: To account for all possible navigation paths from the homepage, completion begins with the homepage and includes  any required interstitial destination page(s) and logging in (if necessary), without regard for where the particular area of the homepage the task was initiated. 
- Target: does not include the anticipated initial drop in completion rates due to change in UX
- Level of importance
  - (1) Critical, showstopper for cutover 
  - (2) Important but not a dealbreaker, deficits may considered a high priority to address in the next iteration   
  - (3) Watchful waiting 
- Users viewing homepage July 1 - October 31, 2022 = 8,933,445

|	Metric	| Rationale | Measured by	| Baseline (Completion rate on existing homepage) - July 1 - October 31, 2022 (Number/% of users)	|	Target  | Importance   |
|	---	|	---	|	---	|	--- |--- |---	|
| Veteran/beneficiary views | Percent of VA.gov users who choose to view/use the new homepage (_and return to use, if possible to track_) | Sufficient use for analytics and feedback | | |
|	Use of authenticated experience should be maintained or increased	| One of the primary goals | # of logged in users/month	|	3,701,932/41.44%	|	 | |
|	"Message your doctor or get a health care message" task completion | <ul><li> This is a primary top Veteran task </li><li> High clickthrough use on the link in the "Top 4 box" on the current homepage </li><li> A direct link for this task is not displayed on the body of the homepage in the redesign </li></ul> | Traffic to [Secure Messaging page in MHV](www.myhealth.va.gov/secure-messaging/) initiated from homepage 	| 587,173/6.57% 	|	 | |
|	"Download your benefit letters" task completion | <ul><li> This is a secondary top Veteran task </li><li> High clickthrough use on the link in the "Top 4 box" on the current homepage </li><li> A direct link for this task is not displayed on the body of the homepage in the redesign </li></ul> | Traffic to [Download VA benefit letters page](https://www.va.gov/records/download-va-letters/) initiated from homepage 	|	508,591/5.71%	|	 | |
|"Apply for education benefits" task completion  | <ul><li> This is a secondary top Veteran task </li><li> High clickthrough use on the link in the "Top 4 box" on the current homepage </li><li> A direct link for this task is not displayed on the body of the homepage in the redesign </li></ul>  | Traffic to [Apply for VA Education Benefits page](https://www.va.gov/education/apply-for-education-benefits/application/1990/introduction/) initiated from homepage 	| 198,762/2.22%		|	 | |
|	User engagement - promo content #1 | Stakeholder content intended to present relevant Veteran information about changes to benefits and services | 	Click through rate for benefit promo story [PACT Act](https://www.va.gov/resources/the-pact-act-and-your-va-benefits/) |	6/<0.01%	|	Increased	| | |		
|	User engagement - promo content #2 | Stakeholder content intended to present meaningful Veteran news 	|	Click through rate for news story [Pathfinder](https://pathfinder.va.gov/)	| 0/0%		|	Increased | |	
|	User engagement - promo content #3 | Access to full news site 	|	Click through rate to all VA News	[Vantage Point is now VA News](https://news.va.gov/)	| 6/<0.01% | Increased | | 
| Satisfaction score (dependent on the return of the feedback button to the current VA.gov homepage) | new homepage satisfaction scores are equivalent or better than existing page			|	_pending implementation of feedback on homepage_ | |
 
The feedback and analytics collected on the redesign version may not be a representative sample because 
  - Access to the redesigned page will be based on user "opt-in" from the existing homepage, making the data subject to selection bias and/or status quo bias. Feedback collected across VA.gov also has this potential selection bias so the comparison of results with the existing homepage should still be valid. 
  - Data indicates that Veterans and beneficiaries with login accounts tend to skip the homepage so they will not see the modal announcement or be able to provide feedback on the new homepage. Other Veterans visiting VA.gov with a specific task in mind may be less inclined to view the new homepage during that visit or to take time to complete a feedback survey. These factors may lead to data which disproportionally represents new or unlogged in users. We should be able to sort these segments in the analytics to quantify this potential imbalance. 
