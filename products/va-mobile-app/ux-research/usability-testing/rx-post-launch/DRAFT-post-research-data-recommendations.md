## This is a draft. This message will be removed when this is ready for review and the title will also be updated then.
Contextual data for refills:
* What percent of users logging a session and interacting with Rx have a Rx that is eligible for refill?

### Recommendation 1
Provide a default list view that surfaces Active prescriptions without having to select additional options. This would support the observed usability patterns. Possible solution: Default the list to show Active prescriptions, and provide All prescriptions as a filter option.
  * Potential bet: People will take less time to complete a refill.
  * Measure: Comparision pre/post change in amount of time from navigation to Rx page to starting API call for the first refill in session. 
  
 **Other considerations**
* We might expect filter utilization will decrease.
  * However, filter utilization is already quite low.
* Overall time spent on Rx pages should decrease but would need to be evaluated in proportion to the Rx authorized userbase pre/post change.
 
**Outstanding tracking questions**
* Can we add tracking of how many Rx cards the user scrolled past or if they scroll back & forth on the same page?
* How far in the pagination did the user have to navigate before submitting a refill? Did they go back and forth between pages?

### Recommendation 2
Improve the experience when selecting a prescription from the list. Possible solution: Increase the size of the touch target on the prescription card, or replace the component to match other areas in the app.
* Potential bet: Users will find it easier to navigate to prescription details.
* Measure: Time to open a prescription details card will decrease.

**Other considerations**
* We expect people will perform fewer non-navigating/interacting clicks on a screen. (see outstanding questions for more details)
* We need to review some baseline data around interaction with prescription detials screen. It's not clear how we can separate interaction with those screens with the purpose of submitting a refill vs. seeking information about the Rx for other purposes.

**Outstanding tracking questions**
* Can we track non-clickable clicks?

### Recommendation 3
Examine ways to keep Filter options enabled until they are cleared, regardless of where Veterans navigate within the feature.
* Potential bet: People who use filters will decrease in the number of times per session that they interact with filters. 

**Other considerations**
* As this app behavior doesn't align with our general user experience approach, it may be considered a bug and therefore not in need of in detail monitoring.

### Recommendation 4
Reorganize content to meet the mental models of what’s needed to fill a prescription. Possible solution: Move fill date to the prescription detail screen, it’s more of a granular description and less important information to get the task done.
* This is an area where we need more information to make a bet, such as:
  * How many people used the global refill? Is it primarily screen readers?
  * How often do users navigate back and forth between the prescription list and a prescription details screen? --> a potential proxy for needing information that is not surfaced in the right place.

### Recommendation 5
Investigate a plain language approach to prescription statuses that can stand without definitions.
* Potential bet: tap the pill thing and the definition comes up.
* tracking might be missing? Both on list and details.

### Recommendation 6
Consider ways to incorporate “send message” functionality in the Prescriptions feature. This would support the Veteran’s journey to renew a prescription by sending the details directly to the prescribing team.
Potential bet: How often do folks navigate between Rx and SM in short time frame? This will go down if we incorporate this button. 
* Message category tracking will help with this
