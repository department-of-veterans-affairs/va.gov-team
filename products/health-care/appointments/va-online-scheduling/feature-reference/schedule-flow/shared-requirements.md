# Shared requirements
Some features act the same across pages.

## Contact information requirements
These apply to the contact information pages in all flows:
- [VA Direct](./va-direct--contact-information.md)
- [VA Request](./va-request--contact-information.md)
- [CC Request](./cc-request--contact-information.md)

### Functional

- The email address and phone number must pre-populate with the email address and phone number from the VA profile.   
   - If no email and or phone number are present on the VA profile then these fields will be NULL.  
- A prepopulated email address must be editable.  
- A prepopulated phone number address must be editable.  
- A valid email address must be entered to submit a request or direct schedule.  
- A valid phone number must be entered to submit a request or direct schedule.


## Request calendar requirements
These apply to the request calendar pages in these flows:
- [VA Request](./va-request--preferred-date.md)
- [CC Request](./cc-request--preferred-date.md)

### Functional

- Users use a calendar picker to choose their preferred appointment time frames.
- The calendar starts on the current month.
- Only Monday through Friday may be selectable.
- The maximum number of request dates is three unique day-AM/PM selections. 
- The earliest date allowed for scheduling is 5 days after the current day (Today + 5 days):
    - If T+5 = Sat or Sun, then following Monday is the first selectable day. 
    - Example: If the user is logged in on a Monday and trying to book an appointment request, slots would be available starting from the following Monday. 
- The latest date allowed for scheduling is 120 days after the current date (Today + 120)
- Once preferred times are chosen, then:
    - For community care requests, they're sent to the community care preferences page
    - For VA requests, they're sent to the reason for visit page



## Review page requirements

### Functional 

- All request or direct booking details previously entered must display back to the user.
- User must be able to edit the following fields
   - Request preferred date and time
   - VA request type (Office Visit, Phone Call or Telehealth)
   - Reason for appointment 
   - Contact details
- Edit links in different sections take the user back to the page awhere they can edit the data
    - The user has to navigate back through the flow again after making their change
- After clicking Submit:
    -  An error message must display to veteran if the appointment request or appointment booking was not successful.  
       - When there is an error, an error alert will be shown under the button with information about what went wrong and how to contact the facility
    - If a request was successfully made, the user is redirected to the detail page for that request.
        - A confirmation message is shown on the detail page.
    - If an appointment was made successfully, the user is redirected to the detail page for that appointment.
      - A confirmation message is shown on the detail page.

 

## Confirmation page requirements

### Functional
-  The final confirmation page must display an option to cancel the appointment or request based on the same business rules for cancelling on the upcoming details page. 

