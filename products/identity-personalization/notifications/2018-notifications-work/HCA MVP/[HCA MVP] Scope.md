<h2>Scope</h2>

Below are the user states and outcomes for the healthcare application notification MVP.

<h4>Logged In Use Cases</h4>

[Logged in flows](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/HCA%20MVP/%5BHCA%20MVP%5D%20Flow%20—%20Logged%20In%20State.png)

1. **Logged in user submits application. VA systems are up. No validation errors**.

* Existing: Show in-app notification confirmation message.
  * Proposed: Update the copy to something like "We've submitted your application and will let you know when it's received."
* Proposed: Email confirmation message — "The VA has received your application."

2. **Logged in user submits application. VA systems are up. Validation errors are detected**.

* Existing: Show in-app error message (Not sure of current copy).
  * Proposed: Show someting neutral like "We've submitted your application and will let you know when it's received."
* Existing: Vets.gov team has to resolve the issue on our end so our validation once again matches the validation of the VA databases.
* Proposed: Email letting users know they need to sign in to fix errors.
* (Existing?): Show validation error in app.
* Existing: User has to resubmit the application.

3. **Logged in user submits application. VA systems are down**. 

* Existing: Show in-app error message (Not sure of current copy).
  * Proposed: Show someting neutral like "We've submitted your application and will let you know when it's received."
* Existing: Vets.gov continues to attempt to submit this application for up to 21 days.

*If system is back up within 21 days, and no validation errors are detected*

* Proposed: Email confirmation message — "The VA has received your application."

*If system is back up within 21 days, and validation errors ARE detected*

* Existing: Vets.gov team has to resolve the issue on our end so our validation once again matches the validation of the VA databases.
* Proposed: Email letting users know they need to sign in to fix errors.
* (Existing?): Show validation error in app.
* Existing: User has to resubmit the application.

*If system is NOT back up within 21 days* 

(note: this is highly unlikely but could occur if systems are taken down in a gov't shutdown)

* Proposed: Email users and let them know they need to resubmit the application.
* Existing: User has to resubmit the application.
       
<h4>Logged Out</h4>

[Logged out flows](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/HCA%20MVP/%5BHCA%20MVP%5D%20Flow%20—%20Logged%20Out%20State.png)

1. **Logged out user submits application. VA systems are up. No validation errors**.

* Existing: Show in-app notification confirmation message.
  * Proposed: Update the copy to something like "We've submitted your application and will let you know when it's received."
* Proposed: Email confirmation message — "The VA has received your application."

2. **Logged out user submits application. VA systems are up. Validation errors are detected**.

* Existing: Show in-app error message (Not sure of current copy).
  * Proposed: Show someting neutral like "We've submitted your application and will let you know when it's received."
* Existing: Vets.gov team has to resolve the issue on our end so our validation once again matches the validation of the VA databases.
* Proposed: Email users and let them know there was an error, and we were unable to submit their form. 
  * Since the form is not saved, they do not have the option to sign in to fix the error.
  
3. **Logged out user submits application. VA systems are down**.

* Existing: Show in-app error message (Not sure of current copy).
  * Proposed: Show someting neutral like "We've submitted your application and will let you know when it's received."
* Existing: Vets.gov continues to attempt to submit this application for up to 21 days.

*If system is back up within 21 days, and no validation errors are detected*

* Proposed: Email confirmation message — "The VA has received your application."

*If system is back up within 21 days, and validation errors ARE detected*

* Existing: Vets.gov team has to resolve the issue on our end so our validation once again matches the validation of the VA databases.
* Proposed: Email users and let them know there was an error, and we were unable to submit their form. 
  * Since the form is not saved, they do not have the option to sign in to fix the error.

*If system is NOT back up within 21 days* 

(note: this is highly unlikely but could occur if systems are taken down in a gov't shutdown)

* Proposed: Email users and let them know there was an error, and we were unable to submit their form. 
  * Since the form is not saved, they do not have the option to sign in to fix the error.
