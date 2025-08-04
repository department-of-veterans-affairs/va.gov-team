# Annual Cost of Living Adjustment on VA.gov

Each year, VA.gov undergoes a Cost of Living Adjustment (COLA) update.  This occurs usually in early to mid-November over a weekend.  

---

### What is the impact to the 10-10EZ form on VA.gov:
* During this time, there are several systems that will be in a maintenance window.  This includes BEP (Formerly BGS), which is the service we call to gain disability ratings. We use disability ratings for those authenticated Veterans who have a 50% or higher disability rating, so that the form will automatically direct them through the Short Form flow.

### What we’ve done to mitigate: 
* To avoid calling the service while it is under a maintenance window, and causing additional noise with the errors that would result in a rejected call, we have implemented a temporary code change that returns a zero disability rating.  This will not stop Veterans from completing and submitting the form.  It also allows all Veterans to self-disclose their disability rating, so that those who qualify for the Short Form flow will still be directed through it.

### What action to take:
* This code change is behind a feature flipper, hca_disable_bgs_service.
* When the COLA update is scheduled, the feature flipper can be enabled at the end of the day on Friday before the weekend update, and re-enabled on the following Monday morning after the update.

### Additional actions:
* It is suggested that the team designate one or two teammates to monitor any alerts or failures that may occur over the update weekend.  
* While this is not required, there have been unrelated issues in the past that coincidentally occurred during the update weekend that needed to be addressed.

### Expected Result:
* If all goes well with the update, and there are no related or unrelated issues that occur, the form should be unaffected by the update and no errors to review.
