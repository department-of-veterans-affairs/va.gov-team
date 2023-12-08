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

- [Link to task completion funnels in Google analytics](https://analytics.google.com/analytics/web/#/analysis/a50123418w177519031p176188361/edit/IbJEBc4yRsWeCF93uP35fg)
- [Reference for baselines from user research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/research/2022-09-redesign-usability-round2/research-findings.md)


|	Metric	| Rationale | Measured by	| Baseline (Completion rate on existing homepage) - July 1 - October 31, 2022 (Number/% of users)	|	Target  | Importance   |
|	---	|	---	|	---	|	--- |--- |---	|
| Veteran/beneficiary views | Percent of VA.gov users who choose to view/use the new homepage (_and return to use, if possible to track_) | Sufficient use for analytics and feedback | 1,552,661 sessions with homepage interactions in October 2022 | 150,000 users or 30 days post-launch (see more info about this determination below the table) | Critical |
|	Use of authenticated experience -logging in or account creation | One of the primary goals | # of logged in users/month	|	<li>3,701,932 users <li>41.44%	|	 Maintained or increased | Critical |
|	"Message your doctor or get a health care message" task completion | <ul><li> This is a primary top Veteran task </li><li> High clickthrough use on the link in the "Top 4 box" on the current homepage </li><li> A direct link for this task is not displayed on the body of the homepage in the redesign </li></ul> | Traffic to [Secure Messaging page in MHV](www.myhealth.va.gov/secure-messaging/) initiated from homepage 	| <li>587,173 users <li>6.57% 	| 5.92% or better (_acceptable within 10%_) | Critical |
|	"Download your benefit letters" task completion | <ul><li> This is a secondary top Veteran task </li><li> High clickthrough use on the link in the "Top 4 box" on the current homepage </li><li> A direct link for this task is not displayed on the body of the homepage in the redesign </li></ul> | Traffic to [Download VA benefit letters page](https://www.va.gov/records/download-va-letters/) initiated from homepage 	|	<li>508,591 users<li>5.71%	|	5.14% or better (_acceptable within 10%_) | Critical |
|"Apply for education benefits" task completion  | <ul><li> This is a secondary top Veteran task </li><li> High clickthrough use on the link in the "Top 4 box" on the current homepage </li><li> A direct link for this task is not displayed on the body of the homepage in the redesign </li></ul>  | Traffic to [Apply for VA Education Benefits page](https://www.va.gov/education/apply-for-education-benefits/application/1990/introduction/) initiated from homepage 	| <li>198,762 users<li>2.22%		|	2.0% or better (_acceptable within 10%_) | Critical |
| Satisfaction score (dependent on the return of the feedback button to the current VA.gov homepage) | new homepage satisfaction scores are equivalent or better than existing page	|	Medallia feedback | 2.23/5 with 126 responses and 27% task completion with 82 responses | 2/5 or better with at least 25% task completion | Critical |
| Scroll depth | Measurement of engagement with content "below the fold" | ~~Compared to level assessed during usability research~~ Compare to baseline scroll depth | Average scroll depth/month during 4Q 2022 = 62.8%, ~~Baseline from user research = 55% of participants clicked into footer~~ _correction: usability study not comparable_ | Comparable | Critical
| Interactions with benefit hubs | Measurement of engagement with content "below the fold" | ~~Compared to level assessed during usability research~~ Baseline analytics | ~~Baseline from user research = 55%~~ _correction: compare to baseline analytics, not study of 11 participants_ | Comparable  | Important but not a deal breaker
|	User engagement - promo content #1 | Stakeholder content intended to present relevant Veteran information about changes to benefits and services | 	Click through rate for benefit promo story [PACT Act](https://www.va.gov/resources/the-pact-act-and-your-va-benefits/) |	6/<0.01%	|	Increased	| Important but not a deal breaker| 
|	User engagement - promo content #2 | Stakeholder content intended to present meaningful Veteran news 	|	Click through rate for news story [Pathfinder](https://pathfinder.va.gov/)	| 0/0%		|	Increased |Important but not a deal breaker |	
|	User engagement - promo content #3 | Access to full news site 	|	Click through rate to all VA News	[Vantage Point is now VA News](https://news.va.gov/)	| 6/<0.01% | Increased |Important but not a deal breaker | 

**Veteran/beneficiary views target: this number was determined based on the following**
- 10% of October's homepage sessions _with interactions_ = 155,266
- Benchmarked against users for MyVA redirect during initial 25% roll-out 
  - 190,661 users the first week
  - 231,517 users the second week

### Role of bias in experiment
  
By introducing the new homepage as an opt-in experience, we are introducing unknown biases into our experiment. Users themselves are joining the experimental and control groups.
  
The feedback and analytics collected on the redesign version may not be a representative sample because 
  - Access to the redesigned page will be based on user "opt-in" from the existing homepage, making the data subject to selection bias and/or status quo bias. Feedback collected across VA.gov also has this potential selection bias so the comparison of results with the existing homepage should still be valid. 
  - Data indicates that Veterans and beneficiaries with login accounts tend to skip the homepage so they will not see the modal announcement or be able to provide feedback on the new homepage. Other Veterans visiting VA.gov with a specific task in mind may be less inclined to view the new homepage during that visit or to take time to complete a feedback survey. These factors may lead to data which disproportionally represents new or unlogged in users. We should be able to sort these segments in the analytics to quantify this potential imbalance. 

#### Detection of biases

Steps to compare experimental and control groups for signs that they are self-selecting in non-random ways:
- Create two Segments in GA: 1) for users who visit both the VAgov homepage `/` and the url `/new-home-page` during their visit, 2) for those who don't
- Compare behaviors and demographics between the two segments, per KPIs below
  
KPIs/behaviors to watch across the two segements:
- Desktop vs mobile %
- High level stats like number of pages visited
