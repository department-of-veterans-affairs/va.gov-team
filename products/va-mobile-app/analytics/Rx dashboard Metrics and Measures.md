## Board purpose
To communicate:
* Efficiency (replicate across the board) + comparison 
* Efficacy (replicate across the board) 
  * Understand our fails 
What decisions do we want to make from this data?
* When to move users from stand alone to flagship?
* If we need to take additional action around fails.

## Metrics
|Metric | Metric type | Calculation type | Description of formula |
|--------|-------------|-------------------------|-----------------|
|❌Refill Completion Rate | Efficacy | Ratio | **Numerator**: count(Refill Successful First Attempt) + count(Refill Success on Retry) **Denominator**: count(Refill Attempted) | 
|❌Refill First Attempt Completion Rate | Efficacy | Ratio | **Numerator**: count(Refill Successful First Attempt) **Denominator**: count(Refill Attempted) |
|Time to first refill | Efficiency  | Average and spread | [Unit of time] from Viewed prescription list to first instance of Refill Successful First Attempt or Refill Success on Retry | |
|Refills per [unit of time] in Rx | Efficiency | Ratio | **Numerator**: count(Refill Successful First Attempt) + count(Refill Success on Retry) during denominator unit of time **Denominator**: [Unit of time] from Viewed prescription list to viewing a page other Health or Secure Messaging | |"

## Measures
|Measure | Subset of  | Dashboard user definition | Data point type | Value |
|--------|-------------|-------------------------|-----------------|-----------|
|Active User |  | This is defined by Google Analytics as a user who logs a session in a defined time period. This includes users who try but do not succeed in logging into the app | GA |  | |
|Authorized for Pharmacy | Active User | The active user must be registered and authenticated as a VA Patient or CHAMPVA beneficiary and have a Premium My HealtheVet account to refill VA prescriptions online. When a Mobile App users successfully logs in, the app performs an API call to see if the user has been marked as eligible via this authorization field. This is a meaningful narrowing of our user base in that it will determine who does/doesn't have access to personalized data in the feature. | User property | pharmacy = true | |
|Viewed prescription list | Authorized for Pharmacy | User viewed screen that lists all of the prescriptions the user has access to. This is also where the "global refill" button can be accessed. | Firebase screen | PrescriptionHistory | |
|Clicked global refill | Viewed Prescription List | User selects ""Start refill request"" from the Prescription List screen. The user can submit multiple requests at once from here.| Firebase screen | RefillScreen |
|Viewed prescription details | Viewed Prescription List | User viewed screen that displays information about a specific prescription by selecting one from the prescription list screen. The user can also submit a refill request for the individual prescription from this page. | Firebase screen | PrescriptionDetails |
|Refill Attempted | Clicked global refill, Viewed prescription details | User clicked "Request refill" button on a prescription details screen OR "Request all refills" button on global refills | ❌ NOT AVAILABLE: Fix app analytics | New event needed | 
|Refill Successful First Attempt | Refill Attempted | For a given prescription, the user's refill request returns a success from the underlying system the first time the user tries. | ❌ NOT AVAILABLE: Log data to differentiate Rxs | Long term: New event param needed | 
|Refill Failed First Attempt | Refill Attempted | For a given prescription, the user's refill request returns a fail from the underlying system the first time the user tries. | ❌ NOT AVAILABLE: Log data to differentiate Rxs | Long term: New event param needed | 
|User had Refill Fail(s) Retried | Viewed prescription details | For a given user in a time period, the user clicked the option to retry a refill request at least once after recieving a refill fail message. | app event | vama_rx_refill_retry | 
|User had Refill Success(es) | Viewed prescription details | For a given user in a time period, the user had at least one refill request return a success. | app event | vama_rx_refill_success | 
|User had Refill Fail(s) | Viewed prescription details | For a given user in a time period, the user had at least one refill request return a fail. | app event | vama_rx_refill_fail | 
|Refill Success on Retry | Refill Fail Retried | For a given user in a time period, the user clicked the option to retry a refill request at least once after recieving a refill fail message. | app event | vama_rx_refill_retry followed by vama_rx_refill_success w/o any other events in between | 
|Refill Attempt Ended on Fail | Refill Failed First Attempt, Refill Fail Retried | For a given prescription, the user's experienced a failed refill and ends the session without the refill succeeding on retry. |  ❌ NOT AVAILABLE: Log data to differentiate Rxs | Long term: New event param needed | 
|Viewed refill request summary | Refill Successful First Attempt, Refill Success on Retry |  User viewed screen that displays a confirmation message when the request is received by the API. Absence of viewing this screen does not mean the API call did not succeed; users may navigate away from app before viewing the screen. | Firebase screen | RefillRequestSummary | 
|Viewed filters | Viewed Prescription List | User clicks to open up filter options on the PrescriptionHistory screen on all tabs (All, Pending, and Tracking) | app event | vama_rx_filter | 
|Selected filters | Viewed filters | user selects a filter option. Which filter is selected is also available in the data | app event | vama_rx_filter_sel | 
|Viewed sort | Viewed Prescription List | user clicks to open up sort options on the PrescriptionHistory screen on all tabs (All, Pending, and Tracking) | app event | vama_rx_sort | 
|Selected sort | Viewed sort | user selects a sorting option. Which sorting option is selected is available in the data. | app event | vama_rx_sort_sel | 
|Viewed tracking tab | Viewed Prescription List | user clicks the Tracking tab on screen | app event | vama_rx_trackingtab | 
|Viewed tracking details | Viewed tracking tab |User viewed the screen that displays shipment tracking information for a specific in-progress refill that the user selects from the tracking tab of the Prescription List | Firebase screen | PrescriptionHistory | 
|Viewed pending | Viewed Prescription List |User clicks the Pending tab of the Prescription List | app event | vama_rx_pendingtab | 
|Viewed help | Viewed Prescription List | User clicked to view screen that explains what medications are not included in the app. | Firebase screen | PrescriptionHelp | 
