## Personalized Home screen
### Archived v1 of measurement purpose & plan
**August 28, 2023**
<br>

## Motivation touchstone

This data project is being undertaken by the VA Health & Benefits Mobile App team. We aim to center perspectives of **<span style="text-decoration:underline;">Veterans who are already using the app</span>** when making decisions and defining success.

**_Our core motivation is_** to measure how much <span style="text-decoration:underline;">app users</span> <span style="text-decoration:underline;">understand what the app can do for them</span> and <span style="text-decoration:underline;">keep up with</span>/ <span style="text-decoration:underline;">manage</span> their <span style="text-decoration:underline;">VA interactions</span> <span style="text-decoration:underline;">with the app</span> using <span style="text-decoration:underline;">personalized home screen content</span> in order to understand if <span style="text-decoration:underline;">personalization</span> increases their <span style="text-decoration:underline;">valuation of the app</span>.

This motivation is founded on a series of hypotheses:



1. Users who value the app are more likely to use it.
2. What users know about the app affects their valuation of it.
3. Personalization can increase a user’s knowledge of the app.
4. A personalized home screen experience is an efficient and effective way to use personalization.

Points 1 and 2 are supported by UX research findings. Points 3 and 4, however, have less direct evidence and this project may discover nuance/gaps in them. It is also worth considering that other personalization efforts, such as Deep Linking, will provide comparisons that may help validate these hypotheses. For this reason, it is strongly recommended to include the task of “Reading a Secure Message” as part of the personalized home screen.


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
   <td>App users
   </td>
   <td>Users who successfully logged into the app on a version that includes personalized home screen
   </td>
   <td>Accepted
   </td>
  </tr>
  <tr>
   <td>Understand what the app can do for them 
   </td>
   <td>What a Veteran knows about what the app can do for them in their current life circumstances and in general/in the future.
   </td>
   <td>Exploring
   </td>
  </tr>
  <tr>
   <td>Keep up with [VA interactions]
   </td>
   <td>User stays aware of the state of interactions in a timely manner
   </td>
   <td>Exploring
   </td>
  </tr>
  <tr>
   <td>Manage [VA interactions] 
   </td>
   <td>When there is action to take, the user takes the action regardless of where they take action
   </td>
   <td>Exploring
   </td>
  </tr>
  <tr>
   <td>VA interactions
   </td>
   <td>Includes but not limited to critical action items, optional action items, knowledge gathering, monitoring, etc. around things a Veteran can do with VA
   </td>
   <td>Exploring
   </td>
  </tr>
  <tr>
   <td>With the app
   </td>
   <td>Users leverage the app to keep up with/manage VA interactions. Does not exclude that users may use other tools (web, call centers, etc.)
   </td>
   <td>Accepted
   </td>
  </tr>
  <tr>
   <td>Personalized home screen content
   </td>
   <td>TBD: Will only using data already brought into the app and will not include location-based approach
   </td>
   <td>Exploring
   </td>
  </tr>
  <tr>
   <td>Personalization 
   </td>
   <td>An umbrella of app design that attempts to demonstrate app value particular to an individual user
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

This project aims to address this motivation within the following capacity points:



* Data:
* Design:
* Product:

The project has a deadline of [date] because [reasons].

The project is limited by our resources and options for data analysis and data collection. In particular, the app is not yet designed to facilitate A/B testing and we are unable to survey app users in app. This includes limitations of our ability to account for the effect of other influences on app valuation (i.e. login problems, API fails, available features, etc.) 


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


### Questions



* Can app-using Veterans correctly explain what the app can do 1) in general and 2) for them in their current circumstances?
    * Direct measure source: **UX Research**
    * Proxy measure source(s):  
        * **App store reviews:** How often does a review include a demonstration of misunderstanding the app’s current functions grouped by whether or not the version of the reviewer includes the personalized home screen?
        * **Reddit posts:** How does the prevalence of posts that include a demonstration of misunderstanding the app’s current functions trend with adoption of app versions that include the personalized home screen is adopted?
* Are Veterans satisfied with the amount (time & tasks) they are completing in the app? What impacts this satisfaction most for them?
    * Direct measure source: **UX Research interview or in-app data collection**
    * Proxy measure source(s):  
        * **App store reviews:** How often do reviews express satisfaction grouped by whether or not the version of the reviewer includes the personalized home screen?
        * **App store reviews:** What is the average app store rating grouped by whether or not the version of the reviewer includes the personalized home screen?
        * **Reddit posts:** How does the prevalence of posts that express satisfaction/dissatisfaction trend with adoption of app versions that include the personalized home screen is adopted?
* Do Veterans say the app is valuable? If yes, how valuable? What impacts the value?
    * Direct measure source: **UX Research interview or in-app data collection**
    * Proxy measure source(s):  
        * **App store reviews:** How often do reviews express that they value the app grouped by whether or not the version of the reviewer includes the personalized home screen?
        * **App store rating:** What is the average app store rating grouped by whether or not the version of the reviewer includes the personalized home screen?
        * **Reddit posts:** How does the prevalence of posts that express value of the app trend with adoption of app versions that include the personalized home screen is adopted?
* Do Veterans who see a personalized home screen complete the same task more than those who did not?
    * Direct measure source: **App analytics** for defined tasks
    * Proxy measure source(s):  **UX research** with design mockups
* How does Veteran longevity with the app vary by task by initiation point (home screen vs. other)?
    * Direct measure source: **App analytics** for defined tasks
    * Proxy measure source(s):  **UX research** with design mockups
* How much do Veterans interact with (in terms of clicks) the personalized home screen content?
    * Direct measure source: **App analytics** to be defined per content item on personalized home screen
    * Proxy measure source(s):  **UX research** with design mockups
