# VA Mobile App - Comparative Analysis: Push Notifications

Nov 2023

[Figjam with all the screenshots](https://www.figma.com/file/cPH4ZieO1Fvl0qGfBnLwpS/Notifications---Discovery---VA-Mobile?type=whiteboard&node-id=0%3A1&t=aVR74DJoAJ6Zm1gx-1), [comparison/synthesis spreadsheet](https://docs.google.com/spreadsheets/d/1psKb64wdgQ5OHBG39D-ZrF416c98DjUYm8s7hhAkPSM/edit#gid=1388101938)


## Background & Goals

The VA mobile app was created with the intention of helping Veterans track and manage their interactions with the VA. Currently the app makes use of push notifications in several features to help users do that (appointments, secure message), but the user experience and strategy for managing, sending or governing push notifications has not yet been considered holistically.

To help develop a point of view around how the VA mobile app should handle push notifications, we want to better understand the current landscape of patterns and best practices related to push notifications by collecting examples of other apps that share similar task structure as features within the VA mobile app (ex: timely/short in-flight tasks and/or long in-flight tasks) and also send push notifications. We’ll start with re-examining apps originally included in the earlier [Comparative Analysis of Navigation UI Patterns](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/ux-design/information-architecture-navigation/comparative-analysis#apps-reviewed-27) work, and expand to others as needed. 

### Previous Work
A comparative analysis was conducted in Aug 2020 ([Notifications UX Deep Dive - Aug 2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/comparative-feature-analysis/notifications-deep-dive.md)), but the scope of that investigation was more high-level than the questions we hope to answer with this work. 

### We want to answer the following questions in order to identify best practices that we can apply to the VA mobile app:
* What **types of content** do apps choose to send in push notifications? Are there patterns among industries or task length/structures?
* How do apps approach in-app **push** **notification permissions management**? 
    * How do apps approach asking users to **enable push** notifications?
    * How do apps approach push notification **permissions management** **within device settings**?
* Do apps contain a **notification/message center**? If so, what types of notifications are in it? 
* Do apps **use badging?** Is it in conjunction with push notifications? 
* What do these apps **do well** that feels particularly relevant to our context? 

We used designers' devices and Mobbin to collect examples. The apps reviewed were primarily on iOS, but were cross-referenced with Android versions to identify platform differences.

_*This work is limited to what’s happening in the mobile apps in terms of delivering push notifications—it does not include examining content strategy across communication channels (ex: SMS vs email vs push notifications)._

_Note: This work is part of the [VA Mobile App - Personalization](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/features/design-personalization)_. _Addresses #[7113](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7113)_


### Apps Reviewed (12)

The comparative analysis included apps that share similar task structures as current and potential future features in the VA mobile app that also send push notifications. Apps marked with an asterisk* also appeared in the [Comparative Analysis: Personalized & contextual Home screen content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/design-personalization/discovery/research/personalization-comparative-analysis-2023.md). 



* AXS (tickets)
* Bank of America*
* Delta Air Lines*
* MyChart (NW Medicine)
* Postmates
* SpotHero
* Starbucks
* State Farm*
* Target
* Venmo
* Walgreens*
* Walmart*

## Findings


To help discuss push notifications in a way that better highlights their relevance to the VA mobile app, we devised a system of classifying push notification content types and mobile app task structures:

* **Promotional messages**: announcing sales & promotions, new app features, new programs
* **Transactional & operational messages:**
   * **Inform/reminder messages:** alerts users to a new piece of information being available that’s not tied to an in-flight task—like news, a new account message, an update to a policy, account changes.
   * **In-flight task messages:** keep users up-to-date during in-flight tasks of varying lengths:
      * **Short**(minutes - hours): Food delivery/pickup orders, airline flight status (day of travel), health/medical appointments (day of appointment) 
      * **Medium** (hours - days): Retail pickup orders, parking reservations, pharmacy pickup orders
      * **Long** (weeks - months): Banking/credit card bills, insurance bills, health/medical appointments, retail shipping orders, travel reservations, event tickets
      * **Very long** (months +): insurance claims 


<table>
  <tr>
   <td>
<strong>App Name</strong>
   </td>
   <td><strong>In-flight task</strong>
   </td>
   <td><strong>In-flight task length</strong>
   </td>
  </tr>
  <tr>
   <td>State Farm
   </td>
   <td>Insurance bills, Insurance claims
   </td>
   <td>Very long
   </td>
  </tr>
  <tr>
   <td>Bank of America
   </td>
   <td>Banking/credit card bills, transfers
   </td>
   <td>Long
   </td>
  </tr>
  <tr>
   <td>AXS
   </td>
   <td>Event tickets 
   </td>
   <td>Long
   </td>
  </tr>
  <tr>
   <td>Walgreens
   </td>
   <td>Retail shipping; Retail delivery/pickup & pharmacy
   </td>
   <td>Long; medium
   </td>
  </tr>
  <tr>
   <td>Walmart
   </td>
   <td>Retail shipping; Retail delivery/pickup & pharmacy
   </td>
   <td>Long; medium
   </td>
  </tr>
  <tr>
   <td>Target
   </td>
   <td>Retail shipping; Retail delivery/pickup
   </td>
   <td>Long; medium
   </td>
  </tr>
  <tr>
   <td>MyChart (NW Medicine)
   </td>
   <td>Health - appointments; Day of appointment
   </td>
   <td>Long; short 
   </td>
  </tr>
  <tr>
   <td>Delta Air Lines	
   </td>
   <td>Travel - reservations; Day of travel
   </td>
   <td>Long; short 
   </td>
  </tr>
  <tr>
   <td>SpotHero
   </td>
   <td>Parking reservations
   </td>
   <td>Medium
   </td>
  </tr>
  <tr>
   <td>Starbucks
   </td>
   <td>Food delivery/pickup
   </td>
   <td>Short
   </td>
  </tr>
  <tr>
   <td>Postmates
   </td>
   <td>Food & retail delivery/pickup
   </td>
   <td>Short
   </td>
  </tr>
  <tr>
   <td>Venmo
   </td>
   <td>Peer to peer payments
   </td>
   <td>N/A
   </td>
  </tr>
</table>



### What **types of content** do apps choose to send in push notifications? Are there patterns among industries or task length/structure?



* **Notification content types:**
    * All the apps sent both **promotional** and **transactional/operational** push notifications.
        * All the apps sent **promotional** messages, ranging from retail marketing to promoting new programs/features.
        * All the apps sent transactional/operational push notifications **tracking in-flight tasks** (of varying lengths). Apps with short in-flight tasks sent push notifications frequently while those tasks were in-flight.
        * Apps tracking **long and very long in-flight tasks** sent transactional and operational push notifications to **inform/remind** users of new account messages, changes to policies, the presence of a new record not linked to an in-flight task. 
* **Notification content structure & function:**
    * Apps use the **bold title text** within the push notification in different ways: most apps used it as a headline summarizing the subject of the push, several used it to display the name of the app or didn’t include title text. 
    * Retail & delivery apps included **emojis** in the body of marketing and in-flight task notifications (other apps did not), giving them a lighthearted, intimate feel.
    * Most apps tracking **short and medium in-flight tasks** sent push notifications **containing specific, critical details** **about the task within the body** of the notification (like an address, a delivery person’s name, a bag tag #), one app referred more generally to the subject of the notification. 
        * **_Hypothesis: Short in-flight tasks surface more specific, critical details in their push notification content because:_**
            * _The value of the push is in being notified of a change (not the  information it links to)._
            * _Timelines can be short enough that having to go into the app to see the included details would be cumbersome._
            * _These push notifications are about successful task completion, not return engagement in the app, so they can be useful without tapping._
    * We did not have enough examples of push notifications sent by apps tracking **long and very long in-flight tasks** to define content patterns, but the two examples we saw included push notifications **containing specific, critical details** **about the task within the body** (the date and amount of a scheduled insurance premium payment) as well as push notifications **referring more generally to the subject of the notification** (an upcoming preventative care event—this is due to HIPAA). 
    * All apps deep-linked directly to content within the app (as opposed to a notification/message center).

 <img src="screenshots/starbucks%20push%20notification.PNG" width="200" alt="Starbucks push notifications - general subject in body"> <img src="screenshots/mynw%20push%20notification.PNG" width="200" alt="MyNM push notification - general subject in body"> <img src="screenshots/spothero%20push%20notification.PNG" width="200" alt="SpotHero push notification - specific details in body"> <img src="screenshots/statefarm%20push%20notification.PNG" width="200" alt="StateFarm push notification - specific details in body">


###### L-R: Starbucks and MyNM(MyChart) display general subjects in the notification body, SpotHero and State Farm display specific details about an in-flight task.


### Do apps contain a **notification/message center**? If so, what types of notifications are in it? 

* 8 apps **contained a notification/message center**, 4 did not. 
    * Of the apps that **had a notification/message center, the content within did not seem to correspond to push notifications** the app had sent.
        * No app’s notification center contained a list of _all_ of the push notifications it sent.
        * 4 of the app’s notification centers were **empty** (so It’s unclear what type of messaging they contain).
        * 3 app’s notification centers contained only **marketing** messages (not in-flight task messages).
            * **_Hypothesis: Marketing messages can be useful if discovered later/organically, and have a longer shelf life than short in-flight task updates._**
    * Some apps that **did NOT have a notification/message center** did have historical record lists documenting completed in-flight tasks (completed orders, completed appointments, paid bills, etc).
        * **_Hypothesis: Once a task is not in flight, the receipt/historical record list has the relevant information—while a list of time-sensitive information about an in-flight status is outdated and not relevant after the task ends._**

<img src="screenshots/venmo%20notification%20center.PNG" width="200" alt="Venmo - notification center">  <img src="screenshots/starbucks%20notificaiton%20center.PNG" width="200" alt="Starbucks - notification center">  <img src="screenshots/walmart%20notification%20center.PNG" width="200" alt="Walmart - notification center">  <img src="screenshots/mynm%20notification%20center.PNG" width="200" alt="MyNW - notification center">

###### L-R: Venmo & Starbucks notification centers with marketing messages, Walmart and MyNM (MyChart) with empty notification centers.


### Do apps use **badging**? Is it in conjunction with push notifications? 

* Some apps use badging, some did not. We did not see enough confirmed examples of apps using badging in order to determine a pattern between which apps do & don't use it. Observations we did have:
    * Badges are used as a passive method for indicating that there’s new information someplace in the app (as opposed to an active/interrupting method like push).
    * Badging may appear at app icon level and/or within the app itself. External app icon badges contain a number. Internal badges may contain a number, but also were sometimes represented as a dot.


 <img src="screenshots/app%20icon%20badges.PNG" width="200" alt="Bank of America and Venmo app icons with badges"> <img src="screenshots/bofa%20inapp%20badges.png" width="200" alt="Bank of America inbox and alerts icons with badges"> <img src="screenshots/venmo%20inapp%20badge.PNG" width="200" alt="Venmo alerts icon with badge"> 


###### L-R: Bank of America and Venmo apps with icon badge, badging inside app
* It’s possible to turn off badging within device settings.

### How do apps approach in-app push notification permissions management?

* **All** of the apps contained a **screen for push notification management** (typically within an “Account” or “Communications” section).
    * For half of the apps, push notifications were one of several communication channels that a user could manage from within the app (also included were SMS and email). 

 <img src="screenshots/statefarm%20notification%20settings.PNG" width="200" alt="State Farm commnunications settings">  <img src="screenshots/walgreens%20notification%20settings.PNG" width="200" alt="Walgreens commnunications settings"> 

###### L-R: State Farm and Walgreens allow management of multiple communication channels. 

* Nearly all of the apps **allow the user to choose the notification types** they’d like to receive (displaying separate toggles next to each notification category or feature). 
    * Several did not offer the option to toggle _task_ notifications off individually (but did allow marketing messages to be turned off). 

<img src="screenshots/postmates%20notification%20settings.PNG" width="200" alt="Postmates notifications settings"> <img src="screenshots/starbucks%20notification%20settings.PNG" width="200" alt="Starbucks notifications settings"> <img src="screenshots/walmart%20notification%20settings.PNG" width="200" alt="Walmart notifications settings"> <img src="screenshots/mynw%20notification%20settings.PNG" width="200" alt="MyNW notifications settings">



###### L-R: Postmates allows management of marketing push notifications only, Starbucks displays toggles next to push notification categories, Walmart displays toggles next to features, MyNM (MyChart) displays a single toggle for all notifications (despite sending several categories)..

### How do apps approach asking users to **enable push** notifications?


7 apps provided some kind of **specific context about how they’ll use push notifications** before presenting the standard “enable push notifications” modal alert. This context was typically provided as a part of onboarding. 5 of those apps used a "double request" pattern during onboarding to avoid users disabling notificaitons accidentally or without first seeing value ("double request" = Triggering the opt-in native modal if users agree to enable notifications, and providing "not now" as an option so that the native opt-in modal can be triggered later). 2 used organic discovery of notifications or a demonstration of user intent to trigger the opt-in native modal. 

<img src="screenshots/Walgreens%20enable%20notificaitons.png" width="200" alt="Walgreens - enable push notifications - onboarding"> <img src="screenshots/target%20enable%20notifications.png" width="200" alt="Target - enable push notifications - onboarding"><img src="screenshots/spothero%20enable%20notifications1.PNG" width="200" alt="SpotHero - enable push notifications - organic step 1"><img src="screenshots/spothero%20enable%20notifications2.PNG" width="200" alt="SpotHero - enable push notifications - organic step 2"><img src="screenshots/statefarm%20contextual%20enable%20notifications.PNG" width="200" alt="State Farm - enable push notifications - contextual">

###### L-R: Walgreens and Target give specific examples of situations when they’ll send a push notification within onboarding using a "double request" pattern, Spot Hero and State Farm promote turning push notifications on organically and contextually within a claim.


### How do apps approach push notification permissions management **within device settings**?

Both iOS and Android platforms allow users to turn off all notifications within device settings.  Capabilities beyond that vary by platform.



* **Specific to iOS:** All the apps with short in-flight task length had an additional “time sensitive” toggle in device Settings. Several also contained deep links to _in-app_ notifications settings.
* **Specific to Android:** Several apps gave fine-grained ability to toggle each message type.

## Recommendations


### What do these apps do well that we can apply to our context?


#### Push notification permissions management


1. **Allow users to choose the notifications they’d like to receive:** Giving users fine-grained control over their notifications means that they can indicate which features they want to be allowed to interrupt them, and which they don’t. It also can prevent users from turning off notifications entirely. VA mobile app should do this at feature level because our features are so different each other.
2. **Provide users with context around how the app will use push notifications, ideally using the "double request" pattern, before displaying the “enable push notifications” system modal:** Dismissing the system permissions modal at its initial appearance means that users are required to go to device settings to enable them—if it’s unintended, this may result in lower perceived value from the app and a lot of friction to undo. Placement within onboarding and contexual placements (where incentive to neable them is clear) are most successful.
3. **Consider allowing users to manage _all_ digital notification types from VA within the app:** Because it is possible to receive _all_ types of digital communications (email, SMS, push) on a mobile device, managing them from within the app is a natural fit.

#### Push notification content and structure



4. Use the **bold title text as a headline summarizing the subject** of the push for increased scannability (instead of displaying the name of the app). 
5. Consider privacy, laws, and the value of receiving a push notification when deciding on the level of specific detail in the message body (but balance that with including useful information): 
    1. Refer **generally** to the subject and do [not include sensitive information or PHI](https://www.medicalwebexperts.com/blog/how-to-make-a-hipaa-compliant-healthcare-app/) in push notifications about **health-related content falling under HIPAA to protect privacy**
    2. Include **specific details **in the message body when the specific** details are _not_ sensitive/falling under HIPAA** and: 
        1. The **critical details can be included entirely** within the message body and
        2. The message is about an in-flight task where the **primary value of the push is in being _notified_** of a change/progress and/or
        3. The message is about an in-flight task and is being delivered at a **time when it would be cumbersome** for the user to open the app .
    3. Example: “Reminder: your healthcare appointment is tomorrow at 9:00am” not “Reminder: Your obstetrics appointment is tomorrow”).
6. **Emojis** (while they typically result in increased engagement with notifications) feel like the wrong tone for messages sent from VA/the US Government.
7. Push notifications should **deep-link** directly to content within the app (not a message/notification center).

**Notification/message center**



8. Because each of the VA mobile app’s features is a permanent list that documents active and/or completed in-flight tasks or contains historical records not linked to an in-flight task, and does not have a need to display promotional messages, there does not seem to be an obvious need for a notification/message center. 
9. If including a notification center, **don’t display a list of every push notification the app has sent**—limit it to those messages **that are** **not already documented elsewhere** in the app and/or **have a longer shelf life in terms of relevance** (ex: “your order is arriving momentarily” push notification is only relevant for a short time, and it’s possible to see that information on the order detail screen/list).
