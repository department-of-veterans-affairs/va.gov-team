# Results Summary
Based on a previous Insights and Analytics kickoff meeting, a Product Health prototype was created in Google Sheets. We wanted to test the prototype with product owners and stakeholders to identify gaps and areas that need improvement.  

[The research plan can be found here.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Platform/Teams/Analytics%20and%20Insights/Research/June%202019:%20Education%20Product%20Health%20Dashboard%20MVP/Education-Analytics-Research-Plan.md)

## Research Questions
1. Can product owners/stakeholders easily identify when products are up or down?
1. When a product owner identifies that a product is down or performing poorly, is the next step clear?
   * If able to drill down, what do product owners expect to find?
1. Where do product owners/stakeholders think they can interact (drill down) in the prototype? 
   * Where do they want to be able to drill down? 
   * What do they expect to see when they drill down?
1. Can product owners/stakeholders determine which product needs the most attention?
   * Do product owners/stakeholders understand the meanings of the various shades of red and green?
1. What questions, objectives, and/or key results is the product owner/stakeholder looking for information on when they access analytics?
    - Using the spreadsheet, are they able to confidently find the answers?
    - What will they do with the information next?
1. Do product owners/stakeholders understand metrics like Average Latency, Success/Error Rate, Total/Unique/Repeat Event, and Goal Conversion?
   - Are these the right metrics?
   - Which metrics are missing?
   - Which metrics are not helpful?
   - Are these labels and terms understandable?
1. What devices do product owners/stakeholders prefer to use to when viewing analytics?
1. What are the expectations/requirements around sharing Insights and Analytics with other team members?
1. What are the report timing expectations/requirements?
   * What are the expectations/requirements for report date and time range options?
   * How often is data needed? (daily, weekly, monthly)
   * What are the driving forces behind reporting deadlines?

## Hypothesis
Product owners and stakeholders are able to understand the health status of their products. They are able to drill down to find deeper insights so that they can address issues.

## Method

### Dates
June 17th - 24th, 2019

### Participants
* 6 product owners:
  * Product lead focused on the platform as a product 
  * Product manager for digital education portfolio
  * Design lead for education portfolio
  * Project person for VA.gov
  * Product manager for the disability benefits form
  * Half UX designer and half product manager
  
### What We Did
We conducted six 45 minute, remote, moderated usability testing sessions using Google Sheets prototype.

Sessions were conducted online using Zoom.

[The conversation guide can be found here.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Platform/Teams/Analytics%20and%20Insights/Research/June%202019:%20Education%20Product%20Health%20Dashboard%20MVP/conversation-guide.md)

## Synthesis
Using [session notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/Platform/Teams/Analytics%20and%20Insights/Research/June%202019:%20Education%20Product%20Health%20Dashboard%20MVP/Notes), we created an affinity map to surface themes, pain points, and opportunties/recommendations.
![Affinity Map](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Platform/Teams/Analytics%20and%20Insights/Research/June%202019:%20Education%20Product%20Health%20Dashboard%20MVP/VSP%20-%20Education%20Dashboard%20Research%20Synthesis.jpg)

[The Miro board can be found here.](https://miro.com/welcomeonboard/XPrfWVpMw135NjvYzRO0ISMZgihqWhWZa5pg9IGIHuhN0Dh6wRsNDefXa0iAEUA8) 

## Insights & Recommendations

### Product Health Dashboard Expectations
Product owners expect the Product Health Dashboard to:
* allow them to get a sense of how things are doing through multiple channels (Contact centers, Grifana/uptime, Google analytics)
* understand the overall availability and success of a product
* automatically update/refresh data
* allow them to drill in to get more detail
* allow them to understand when the user experience needs improvement or has improved

#### Access
* All product owners thought that Product Health Dashboard should be public-facing or shared publicly as a scorecard (as a separate product.) 
* Most product owners expected the Product Health Dashboard to exist as an app that they can log in to. (Not Google Sheets)

### Sharing
* Participants regularly share insights and analytics with leadership via PowerPoint, Excel, and Slack.
* Ultimately, insights and analytics should tell the story of how our work impacts Veterans.

**Recommendation:** Consider allowing users to export the dashboard and individual charts as PNGs, JPGs, and PDFs.

#### Notifications
* Most product owners want to be notified about important Product Health updates via Slack. 
   * Some P.O.s were concerned that notifications would get lost if they were too frequent or not posted to a relevant  Slack channel. 
   * One person wanted to received notifications about important Product Health updates via email. 
* Product owners were interested in receiving notifications when there are:
   * anomalies in data
   * spikes or drops in submissions
   * increased error rates
* Product owners were also interested in receiving notifications when 3rd party systems go down or have issues.

### Terminology
Some of the metric labels and tooltips were not clear. 

In the Product Status section, "Disabled" and "Warning" were not clear. Most participants were not sure what "incidents" referred to in the tooltips.

In the Weekly and Monthly Product Health sections, the following items were not clear:
* Product name (Education Benefit form numbers -- some participants were not familiar)
* Success rate
* Events
* Deloys
* CSAT
* Offline vs. Online Submissions
* Offline vs. Online to Benefits Receipt 

**Recommendation:** Rewrite labels and tooltips in plain language.

### Tooltips
Most participants found the tooltips generally helpful when they were not sure about a label.

### Most Valuable Analytics
Participants called out the following as the most valuable/helpful metrics on the Weekly/Month Product Health views:
* Offline vs. Online Submissions
* Offline vs. Online to Benefits Receipt 
* Funnel conversions
* Error rate
* CSAT

### Missing Items
Participants called out the following as missing items that would helpful to them in their role as a product owner:

#### Analytics
* Traffic spikes
* Bounce rates
* 3rd party service statuses
* Last updated

#### Features
* Custom date ranges
* Comparisons: Over time, usage (seasonal conversion rate, contact center vs. usage) 
* Ability to add a note that an issue has been addressed

#### Products
* GI Bill Comparison tool 


### Finding Support Contact Info
Some participants didn't notice the Support Contact information.

**Recommendation**: Place Support Contact information in a visible and consistent place. 

### Dashboard Versions
We showed three dashboard variations to participants. Each dashboard communicated items that were doing well vs. needing attention in different ways:
1. Icons + Color 
2. Color gradients
3. Emojis

* 4/6 participants perferred the color gradient version.
* 1 participant preferred the icons + color version.
* 1 participant preferred the emoji version for the Product Health sections and the icons + color version for the Product Status section.

**Recommendation**: Consider combining the icons + color and color-gradient versions so that the dashboards are accessible. 




