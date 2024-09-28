# Personalized Home screen


### Living documentation of measurement purpose & plan


#### Version 2 - Last updated: October 24, 2023
See [archive folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/features/design-personalization/data/archived-data-plans) for prior version.


## Motivation touchstone

This data project is being undertaken by the VA Health & Benefits Mobile App team. We aim to center perspectives of **<span style="text-decoration:underline;">Veterans who are already using the app</span>** when making decisions and defining success.

**_Our core motivation is_** to measure if <span style="text-decoration:underline;">personalized home screen content</span>:


1. Helps <span style="text-decoration:underline;">new</span> and <span style="text-decoration:underline;">existing users</span> <span style="text-decoration:underline;">keep up with</span>/ <span style="text-decoration:underline;">manage</span> their <span style="text-decoration:underline;">VA interactions</span> <span style="text-decoration:underline;">with the app</span>
2. Improves <span style="text-decoration:underline;">existing users’</span> <span style="text-decoration:underline;">valuation of the app</span> and contributes to <span style="text-decoration:underline;">new users’</span> initial valuation of the app

This motivation is founded on a series of hypotheses:



1. Users who value the app are more likely to use it.
2. What users know about what the app can do for them in the current moment affects their valuation of it.
3. Personalization can increase a user’s knowledge of the app.
4. A personalized home screen experience is an efficient and effective way to use personalization.

Points 1 and 2 are supported by UX research findings. Points 3 and 4, however, have less direct evidence and this project may discover nuance/gaps in them. 


### Motivation touchstone terms defined


<table>
  <tr>
   <td>
<h3>Term</h3>


   </td>
   <td>
<h3>Definitions</h3>


   </td>
   <td>
<h3>Definition status</h3>


   </td>
  </tr>
  <tr>
   <td>Personalized home screen content
   </td>
   <td>Modules grouped by category (Health, Benefits, Payments & debts) that display a feature title & number of active items in that feature and that, when clicked, deep link the user to the specific feature
   </td>
   <td>Accepted
   </td>
  </tr>
  <tr>
   <td>New users
   </td>
   <td>Users who download the app on a version with a personalized home screen included. It may include users who previously had the app on another device or who manually purged their app data (Android users only).
   </td>
   <td>Accepted
   </td>
  </tr>
  <tr>
   <td>Existing users
   </td>
   <td>Users who already had downloaded the app and successfully logged in on a version without personalized home screen
   </td>
   <td>Accepted
   </td>
  </tr>
  <tr>
   <td>Keep up with
   </td>
   <td>User stays aware of the state of interactions in a timely manner
   </td>
   <td>Exploring
   </td>
  </tr>
  <tr>
   <td>Manage
   </td>
   <td>When there is action to take, the user takes the action regardless of where they take action (i.e. not all actions can or must take place in the app for the app to have helped with managing)
   </td>
   <td>Exploring
   </td>
  </tr>
  <tr>
   <td>VA interactions
   </td>
   <td>Includes but not limited to critical action items, optional action items, knowledge gathering, monitoring, etc. around things a Veteran can do with VA
   </td>
   <td>Accepted
   </td>
  </tr>
  <tr>
   <td>With the app
   </td>
   <td>Users leverage the VA Health & Benefits app to keep up with/manage VA interactions. Does not exclude that users may use other tools (web, call centers, etc.)
   </td>
   <td>Accepted
   </td>
  </tr>
  <tr>
   <td>Valuation of the app
   </td>
   <td>User’s perception that the app is worth using
   </td>
   <td>Accepted
   </td>
  </tr>
</table>



### **_Restrictions_**

Capacity and timeline restrictions for this work are still TBD.

The project is limited by resources and options for data analysis and data collection. In particular, the app is not yet designed to facilitate A/B testing or to survey users in the app. This includes limitations of our ability to completely account for the effect of other influences on app valuation (i.e. login problems, API fails, available features, etc.) 


### **_Rewards_**

In addition to achieving our core motivation, this project will be considered a success if it:



* Increases overall product emphasis on user experience in the mobile-specific context.
* Demonstrates the value of design and data strategy work at the beginning of a project/feature.
* Finds paths to do comparisons that don’t rely on A/B tests.
* Develops reusable, data-informed criteria for go/no go on feature implementation.
* Provides a low-cost way to test if a concept will work for app users.


## 


## Research questions

Product, Design, and Data collaborated to consider what questions asked through the lens of this project’s motivation touchstone would best speak to the perspective of Veterans who are already using the app. Additionally, the perspectives of the app’s team and POs were considered, as well as the perspectives of the MyVA team, given that project’s existing personalization work for web.

Like the motivation touchstone, these questions will be revised and refined as the project progresses.


### Success metrics


<table>
  <tr>
   <td>
<h3><strong><em>Metric</em></strong></h3>


   </td>
   <td>
<h3><strong><em>Proxy </em></strong>for</h3>


   </td>
   <td>
<h3><strong><em>Definition</em></strong></h3>


   </td>
   <td>
<h3><strong><em>Target</em></strong></h3>


   </td>
  </tr>
  <tr>
   <td>Task attempt rate
   </td>
   <td>User knowledge
   </td>
   <td>How many tasks did the user attempt relative to the types and number of active items displayed on the home screen modules?
   </td>
   <td>Post-
<p>
implementation
<p>
 > Pre-
<p>
implementation
   </td>
  </tr>
  <tr>
   <td>Retention longevity
   </td>
   <td>User valuation
   </td>
   <td>How many users complete at least one task in the next 30, 60, 90, 180, and 365 days segmented by app versions without personalization and those with personalization? 
   </td>
   <td>Versions with personalized home screen > Versions without
   </td>
  </tr>
  <tr>
   <td>Navigation path preference
   </td>
   <td>User satisfaction
   </td>
   <td>How much do Veterans interact with (in terms of clicks) the personalized home screen content compared to navigating to the same feature organically? 
   </td>
   <td>Home screen navigation > organic navigation
   </td>
  </tr>
</table>



### Methodology

For all of the metrics, there are potential confounding factors, such as:

* Major disruptions to underlying dependencies could drive interactions with specific features or the app overall.
    * We can compensate by contextualizing error tracking analytics and other known issues.
* On the other hand, publicity campaigns or other spike events could significantly increase interactions with specific features or the app overall. 
    * We can compensate by reviewing outlier days and track/confirm influencing events as information is available. 


#### Task completion rate

* **Calculation:** Per task type and grouped by the number of possible tasks of that type for a given user.



  * **Numerator:** Tasks attempted
  * **Denominator:** Possible tasks as indicated by active items on personalized home screen

* **Target:** Post-implementation rate > Pre-implementation rate



  * To establish a pre-implementation baseline, front end code to make the new API calls for the personalized home screen content and analytics to capture metadata about those calls must be put in place. 

* **Proxy rationale:** This metric would be our main **proxy for user knowledge** based on the following logic.

  * **If**:
    * personalization increases users’ knowledge of what they can do with the app in the present moment
    * increased knowledge leads to increased utilization
  * **Then**:
    * A relative increase in the amount of tasks attempted implies that users are gaining knowledge from personalization.


#### Retention longevity

* **Calculation:** At 30, 60, 90, 180, and 365 days after first interaction with the personalized home screen and segmented by task types and by new versus existing users.

  * **Numerator:** users who complete a task(s)
  * **Denominator:** all users who saw the personalized home screen

* **Target:** Versions with personalized home screen > Versions without



  * This comparison will need to account for other differences between versions as well as login issues. There will also be variation depending on the primary purpose of a Veteran’s use of the app at a given time. Longer-term comparisons may require looking back in time before the personalized home screen existed as not many users may be left on version without it as time passes.

* **Proxy rationale:** This metric would be our main **proxy for user valuation** based on the following logic.



  * **If**:
    * Users who value the app are more likely to use it
    * What users know about what the app can do for them in the current moment affects their valuation of it
    * Personalization can increase a user’s knowledge of the app
  * **Then**:
    * Improved retention (use of the app over time) implies that users are gaining knowledge from personalization that increases their valuation of the app. 


#### Navigation path preference

* **Calculation:** For a given screen that can be navigated to from the personalized home screen segmented by new versus existing users.



  * **Numerator:** Number of distinct visits to that screen from clicks on personalized home screen
  * **Denominator:** Number of distinct visits to that screen via any method except for back navigation from child screens or deep linking push notifications.

* **Target:** Home screen navigation > organic navigation

* **Proxy rationale:** This metric would be our main **proxy for user satisfaction** based on the following logic.



  * **If**:
    * Users who have multiple navigation paths will prefer and use more the way that is most satisfying 
    * Navigating via the personalized home screen is more satisfying than organically navigating
*   **Then**:
    * Personalized home screen navigation will outpace organic navigation.
