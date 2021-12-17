# Payment History Initiative Brief

Please see epic here: [https://app.zenhub.com/workspaces/va-mobile-product-view-610035bc5395bb000e62e529/issues/department-of-veterans-affairs/va-mobile-app/2166](https://app.zenhub.com/workspaces/va-mobile-product-view-610035bc5395bb000e62e529/issues/department-of-veterans-affairs/va-mobile-app/2166)


### Problem statement

VA.gov team problem statement: As a Veteran, I need to understand the payments the VA has made to me so that I can check them for **accuracy** and **troubleshoot** them when necessary.

[User research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/design/discovery/personalization-research-roundup.md#findings) suggests that Veterans want easy access to documents and records since they are frequently downloading and looking for documents such as VA benefit letters, certificate of eligibility, or DD214.


### Assumptions and level of confidence 



* It’s valuable for Veterans to view their payments on the mobile app since Veterans are often accessing this page through mobile
* The information will display accurately across C&P and Education payments
* The current chart format on web is useful to Veterans **least confident/riskiest assumption**

Our hypothesis is that Veterans would like to view payment history for the following reasons:



* To keep a record of past payments
* To view when a new payment comes in
* To understand if the VA has paid them the right amount and troubleshoot if necessary


### Any organizational goals we’re aware of?



* Sunset ebenefits and consolidate benefits features into a single digital tool
* Reduce call center volume and support requests 
* Veteran trust and satisfaction 


### Why should this feature be on the mobile app?



* It meets our objective to enable Veterans to view transparent status updates and information from VA
* Quantitative data suggests there is a desire to view this information on mobile devices
    * 71% of traffic for the feature on VA.gov is from mobile
    * 
* Qualitative data suggests that Veterans want easy access to documents and letters
* There are opportunities for us to enhance the experience using mobile native, such as push notifications and linking to other parts of the authenticated experience, such as direct deposit and claims


### Recommended minimum feature set

_What will help us test our assumptions? What will be most useful for the Veteran?_

Now


<table>
  <tr>
   <td><strong>Veteran need</strong>
   </td>
   <td><strong>Proposed feature in the app</strong>
   </td>
   <td><strong>Feature (and Ticket Link)</strong>
   </td>
  </tr>
  <tr>
   <td>Keep a record of past payments
   </td>
   <td>Allow users to view the following information about their payments: Amount, Date, Method, Bank, Account
   </td>
   <td>View payments table, as exists within the app
<p>
<a href="https://app.zenhub.com/workspaces/va-mobile-product-view-610035bc5395bb000e62e529/issues/department-of-veterans-affairs/va-mobile-app/2207">https://app.zenhub.com/workspaces/va-mobile-product-view-610035bc5395bb000e62e529/issues/department-of-veterans-affairs/va-mobile-app/2207</a> 
   </td>
  </tr>
  <tr>
   <td>View when a new payment comes in
   </td>
   <td>Include some form of in-app notification to display when a new payment comes in
   </td>
   <td>Notification
<p>
<a href="https://app.zenhub.com/workspaces/va-mobile-product-view-610035bc5395bb000e62e529/issues/department-of-veterans-affairs/va-mobile-app/2208">https://app.zenhub.com/workspaces/va-mobile-product-view-610035bc5395bb000e62e529/issues/department-of-veterans-affairs/va-mobile-app/2208</a>
   </td>
  </tr>
  <tr>
   <td>Understand if the VA has paid them the right amount and troubleshoot if necessary
   </td>
   <td>Include a link to help/further information for troubleshooting
   </td>
   <td>Link from payments to web view of troubleshooting
<p>
<a href="https://app.zenhub.com/workspaces/va-mobile-product-view-610035bc5395bb000e62e529/issues/department-of-veterans-affairs/va-mobile-app/2166">https://app.zenhub.com/workspaces/va-mobile-product-view-610035bc5395bb000e62e529/issues/department-of-veterans-affairs/va-mobile-app/2166</a> 
   </td>
  </tr>
</table>




* Allow users to view the following information about their payments: Amount, Date, Method, Bank, Account
* Include some form of in-app notification to display when a new payment comes in
* Include a link to help/further information for troubleshooting
* This will enable us to learn enough about Veteran behavior to tweak the features and content as needed if our initial hypotheses and assumptions are proved correct or incorrect

Next + Later



* Sorting by other columns
* Linking each payment to claims?
* Linking to direct deposit?
* Filtering by type?
* Alerts within VPH button to let us know?


### Measuring success

_How will we know if this feature is useful? How will we be able to test our assumptions with data?_

Drawing the funnel on payment history, we could measure success by examining:



* Bounce rate
* Exit percentage
* Time spent on this page? (What is the mean length?)
    * From previous research, Vets broadly want to know if their payments have arrived
    * Traffic spiking on the first of every month
    * Interaction with direct deposit
    * VA will cut a check - include some information about direct deposit
    * Include information about education instead of just comp and pen


### External team dependencies



* Who are the teams and points of contact?
    * VSA: EBN Migration: [https://dsva.slack.com/archives/CLY6Q69RV](https://dsva.slack.com/archives/CLY6Q69RV)
    * Jason Wolf, Product Manager for eBenefits
    * Jim Adams, UX Designer

 


### Test accounts



* User +3: no data, use to see an empty state
* User +228: current favorite
* User +41: disability payments
* Note: no known users with education test account?


### Implementation Notes & Milestones



* UX estimates 1 sprint
* BE estimates TBD
* FE estimates 1 sprint
* QA estimates: 1 sprint
