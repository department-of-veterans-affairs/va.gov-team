
# Slim Alert Component Assessment
<i>This assessment was made during Sprint 26 of 2023 (ending on 1/2/24), last updated 1/4/24</i><br>
**As of 1/3/24, the slim alert can be seen in action in staging for user vets.gov.user+23@gmail.com**

This documentation is part of issue <a href = "https://github.com/department-of-veterans-affairs/va.gov-team/issues/71290">#71290</a><br>
(Also for refernece, <a href = "https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/1975">The CST issue for the creation of the Slim Alert<a/> )

The main three questions we were looking to answer about the slim alert’s usage:
<Ul>
  <li> How is this alert being used in CST?</li>
  <li> What type of information is being communicated via the alert?</li>
  <li> How is that information determined? </li>
</Ul>

## How is this alert being used in CST?
This slim alert is being used only for Card components for Claims cards at this time. It’s currently  reserved only for evidence requests (believed to be only during step 3 of 5 in the claim review process), a scenario that requires the user to take some kind of action for the claim process to proceed. The Veteran must submit some sort of evidence (or document) for their claim.

As of right now, there is only a general, catch-all message that appears on all instances of the banner.

According to Skyler Schein, there has been no formal discussion on his end about other types of scenarios or use cases for the Slim Alert banner for CST or other aspects of VA.gov.   

This has had a 25% rollout out to Production as of 1/3/24.

## What type of information is being communicated via the alert?
“An item in this claim needs your attention” is all that the Slim Alert states, along with the alert icon. There are no button or link CTAs that appear in the Slim Alert banner.

The content of the Slim Alert was crafted by Skyler with advising from Laura Willwerth of CAIA. 

## How is that information determined?
Any evidence request prompts this same notification with all its contents (there is clear room for opportunity for CST to improve messaging that is more informative and direct).

## How is implementation being monitored, and how is success being measured?
<a href = "https://dsva.slack.com/archives/C06C551UAFQ/p1704399254272719">From Jacob Worrell on 1/4/24</a>: we're using DataDog to track error responses. As far as tracking success, we're looking at leading indicators like
<Ul>
  <li> event interactions for the view details link</li>
  <li> # of evidence submissions</li>
</Ul>
Lagging outcome indicators:
<ul>
  <li>Average response time for evidence requests.</li>
</ul>
The above is theoretically being tracked using VBMS timestamps, but is difficult data to obtain sometimes."

## How might this be used in My VA?
The Slim Alert banner could potentially be used for any card that relates to user-required action or attention. Some hypotheticals:
<ul>
  <li> Compensation claim cards </li>
  <li> Benefit draft cards </li>
</ul><br>
As it stands now, I have concern that if this component is introduced, we will now potentially have a jarring amount of statuses/pieces of info on claims-related cards. I also believe there are potentially more effective ways to call attention to what users need to act on overall when authenticated, but this component has potential regardless (perhaps with alterations to suit the needs of My VA) and should be discussed further. All in all, the Slim Alert component is only being used in a pretty specific way currently for CST, and while there is certainly opportunity for My VA to adopt it, my belief is that formalizing overall use cases and states for the component should come first. 
