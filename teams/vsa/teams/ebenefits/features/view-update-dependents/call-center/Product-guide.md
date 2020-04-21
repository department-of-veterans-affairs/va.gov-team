# Contact Center Product Guide  
View/Modify Dependents (21-686c)

## Table of contents
 - What is it?
 - User Access
  - Who can access?
  - How can users access?
 - Navigation
 - Functionality
 - Error & Notification Log
 - FAQs

### What is it?
 - Viewing and modifying dependents for a Veteran is a common function to see which dependents the Veteran has associated with their benefits and awards.  Using the 686  form, the Veteran can inform the VA about additional dependents that can take advantage of their benefits or remove dependents as needed for various reasons.

View/Modify Dependents also conforms to 508 compliance and can be used with major screen readers and other assistant tools.

 Target launch date is end of May 2020, early June 2020.

### User Access
#### Who can access?
View/Modify Dependents is currently available to LOA3 (eBenefit Premium) users.  While other users can currently login on a Veterans behalf, it is not anticipated that this will be possible on VA.gov until Roles and Relationships are finalized.

 [I don't know if the other non ID.me access methods are valid]

#### How can users access?
 This feature is accessible for testing within the staging environment at this url: https://staging.va.gov/view-change-dependents/view for Viewing, and https://staging.va.gov/view-change-dependents/add-remove-form-686c/ for the actual application and can be accessed in any modern browser.

There are few different pathways that a Veteran can get to the View page and the 686 application tool but they will be positioned per IA off the root of the site:

Static landing page - instructions on required documents and information
www.va.gov/view-change-dependents

View Dependents - Page to view dependents both on and not on award
www.va.gov/view-change-dependents/view

Add or remove dependents - application using the Form 21-686c
https://va.gov/view-change-dependents/add-remove-form-686c/

### Navigation
Currently, browsing within VA.gov from the disability page should bring the user to the unauthenticated landing page mentioned above which should answer some general questions about the tool as well as present the login button to gain access.  This will be incorporated into the Veteran Tools and be accessible from the home page.

[VERIFY FIRST PAGE]

After proper authentication, the Veteran is brought either to the View Dependents page or to the 686 application itself.

### Functionality
The View Dependents page simply shows all the dependents associated with the Veteran with an indication as to whether they are currently on or not on an award. 

These are important for inclusion as some might need to be added or removed via the 686 application itself.

Getting to the 686 application is easy from the View Dependents page and once on the first page of the application, the Veteran can select which workflow or outcome they are hoping to achieve and continue on filling out the form.

One thing to mention about the first page of the application is that the checkboxes allow the Veteran to select only the path they need, where the rest of the unneeded form is hidden.  As more paths are selected, the progress bar will dynamically increase and display to the Veteran where they are at.  The rest of the form should behave as expected.

### Error Handling and Notifications
There are wrappers around each component that detect when data is successfully received and available. A loading spinner appears to indicate the page is loading relevant information for each component as well.

In the event that the page does not see the data, a blue messaging window appears.

In the event that the page cannot load the page (or part of a page) due to a system issue, a red messaging window appears.

Also included is workflow that shows how the Veteran can get in and out of the Rated Disabilities tool

[ADD MORE ERROR HANDLING DETAILS]

### FAQs
- Coming soon


