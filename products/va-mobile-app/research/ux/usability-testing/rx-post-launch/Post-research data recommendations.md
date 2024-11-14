### Recommendation 1
>Provide a default list view that surfaces Active prescriptions without having to select additional options. This would support the observed usability patterns. Possible solution: Default the list to show Active prescriptions, and provide All prescriptions as a filter option.
  * **Potential bet**: People will take less time to complete a refill.
    * **Measure**: Comparision pre/post change in average amount of time from navigation to Rx page to starting API call for the first refill in session relative to the number of refills per authorized Rx user being completed.
  
 **Other considerations**
* We might expect filter utilization will decrease; however, filter utilization is already quite low.
* Overall time spent on Rx pages might decrease but would need to be evaluated in proportion to the Rx authorized userbase pre/post change. We any reduction in time spent should be compared to overall utilization of the tool.
 
**Outstanding tracking questions**
* Can we add tracking of how many Rx cards the user scrolled past or if they scroll back & forth on the same page? Do we already have pagination tracking in place?
* How far in the pagination did the user have to navigate before submitting a refill? Did they go back and forth between pages?

### Recommendation 2
>Improve the experience when selecting a prescription from the list. Possible solution: Increase the size of the touch target on the prescription card, or replace the component to match other areas in the app.
* **Potential bet**: Users will find it easier to navigate to prescription details.
* **Measure**: Average time to open a prescription details card will decrease.
* This is a great opportunity to try out **A/B testing**. We could pursue both options (an increased touch target and a fully clickable "card") and then turn those options on for samples of users and see how they compare. 

**Other considerations**
* We expect people will perform fewer non-navigating/interacting clicks on a screen. (see outstanding questions for more details.) 
* We need to review some baseline data around interaction with prescription details screen. It's not clear how we can separate interaction with those screens with the purpose of submitting a refill vs. seeking information about the Rx for other purposes.
  * Currently, we have refill action starting from either the global button on the main Prescriptions screen or from the details of a specific prescription. This means both levels of screen interaction are capturing the user behavior of "seeking to refill a prescription" and there is no place in the app where prescription data would be viewed without access to a refill button. 
  * Can we state with clarity that the main purpose of Rx in the app is for refills (and, perhaps, renewals) and not, primarily, prescription monitoring/management outside of those tasks? This would help us know how much effort to put into constructing measurement around non-refill interaction with the feature. 

**Outstanding tracking questions**
* Can we track non-clickable clicks?
  * FE engineering currently isn't sure but it seems unlikely. This further bolsters the value of an A/B test if we can't currently track the fails.

### Recommendation 3
>Examine ways to keep Filter options enabled until they are cleared, regardless of where Veterans navigate within the feature.
* Potential bet: People who use filters will decrease in the number of times per session that they interact with filters. 

**Other considerations**
* As this app behavior doesn't align with our general user experience approach, it may be considered a bug and therefore not in need of in detail monitoring.

### Recommendation 4
>Reorganize content to meet the mental models of what’s needed to fill a prescription. Possible solution: Move fill date to the prescription detail screen, it’s more of a granular description and less important information to get the task done.
* This is an area where we need more information to make a bet, such as:
  * How many people used the global refill? Is it primarily screen readers?
  * How often do users navigate back and forth between the prescription list and a prescription details screen? --> a potential proxy for needing information that is not surfaced in the right place.

### Recommendation 5
>Investigate a plain language approach to prescription statuses that can stand without definitions.
* This is an area where we need more information to make a bet, such as:
  * How often are users clicking on the status definitions? How much time do they spend reviewing them?
    * If the interaction is low (as the research indicates it might be), we will have a hard time defining a significant change in interaction if further langauge clarity reduces the need to see the detailed definition. 
  * Do users who click on status definitions do so more from the list view or the details view?
    * Again, this may chance significantly, especially if we start adjusting what pieces of data are displayed in the list vs detail views. It's not clear that we'll be able to do a comparative measurement here. 

### Recommendation 6
>Consider ways to incorporate “send message” functionality in the Prescriptions feature. This would support the Veteran’s journey to renew a prescription by sending the details directly to the prescribing team.
* This is an area where we need more information to make a bet, such as:
  * Message category tracking (which already has a ticket due to needs around SM feature) to know how often patients are messaging their doctors about medications through the app.
  * How often do folks navigate between Rx and SM (including sending a message) in short time frame? How can we define and capture this a proxy measurement of the experience described in the research?
 
## Other factors
Clearly defining our user base for this feature is essentail to contextualizing all of the possible measurements listed above.
* What level of access to Rx is meaningful to evaluating it as a feature? 
  * Being authorized for pharmacy? 
  * Having an active prescription? 
  * Having an active prescription that is eligible for refill or renewal at the time of engagement with the app?
* How much time or level of engagement should we measure from a user in the Rx feature before assuming intentional engagement with the feature?
  * Views no matter how short?
  * A certain amount of time spent in or measured interaction with the feature?
