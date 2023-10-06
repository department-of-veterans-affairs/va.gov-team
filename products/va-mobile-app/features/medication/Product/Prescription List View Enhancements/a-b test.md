
# A/B tests for Rx list view enhancements

**Goal:** To use A/B testing to determine the impact of information sort changes on the Veteran Rx refill experience.

**Confounding factors:** While the feature is primarily positioned to facilitate rx refills, it also serves a purpose of medication management. The second task is less defined in terms of in-app users behavior. Because of this, this experiment cannot be designed to definitively consider the impact of default sorting that prioritizes refills over medication management. 

An assumption has been made in designing the test states that medication management favors Active (and active subtype) status medications. Test state 2 would prioritize refills only; Test state 1 attempts to balance refills and medication management. 

**Current state:** Prescription feature landing page defaults to a list that shows all medications. The list is sorted alphabetically.

**Test state(s):**

1. List is sorted first by status and then alphabetically by medication name within each status group:
    * Active + Active subtypes
    * Discontinued
    * Expired
    * Transferred
    * Unknown
2. List is sorted first by refillable first, then status, and then alphabetically by medication name within each status group:
    * Refillable
    * Non-refillable Active + Active subtypes
    * Discontinued
    * Expired
    * Transferred
    * Unknown

**Testing process:** Current state and both test states would be tested side-by-side for a period of at least 30 days. The testing pool will be limited to users who are authorized for pharmacy and view the feature in that timeframe. Testing groups would be limited to 30% of overall users for each state.

**Measure across states:**

* Relative change in time to first refill in session (segmented by assistive tech)
    * Does the average time to complete the first refill in a session differ?
    * Does the percentage of users completing their first refill in 30 seconds or less differ? 1 minute or less?
* Relative change in use of pagination prior to first refill in session
    * Does the percent of users engaging with pagination prior to completing the first refill differ?
    * Does the average number of times users engage with pagination prior to the first refill differ?
* Relative difference in % of authorized users who view the feature and start a refill
    * Of users who are authorized for pharmacy and who view the feature, is there a difference in the percent starting a refill?
* Refill success rate
    * Does the percentage of users completing at least one refill differ (accounting for those who are blocked by API dependencies)?
* Non-refill session behavior: Do users who are not start any refills in a session change their behavior? 
    * This would be measured to evaluate if these changes to support the refill task have consequences for the medication management task.
        * Number of prescription details viewed
        * Time to view first prescription details
        * Interaction with pagination
