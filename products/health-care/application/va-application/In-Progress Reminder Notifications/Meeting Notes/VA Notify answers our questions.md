# 5/6/2022 - Q&A Slack with VA Notify on how the Reminder emails work

1. Do you have a mock-up or screenshot of what the email would look like with multiple applications in progress?
     - I've included both mock ups (and the answers to your awesome questions! 
          - [Multiple apps in-progress](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/form%20confirmations/Mutliple%20Forms%20In%20Progress%20Reminder.png)
          - [Single app in progress](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/form%20confirmations/Single%20Form%20In%20Progress%20Reminder.png)
2. How does the cadence work, if applications are started in between the 7-14 day timeframes?
     - _Ex: I have an application 14 days old (call this form A), but I have another application that is 11 days old (call this form B). Would the 14 day notification email contain both applications?_
          - The older form would dictate the cadence. So the form B would be displayed on the reminder email that is sent on day 21 for form A.
3. How does the process to trigger the email notification work?
     - The trigger works by looking daily for any forms marked as <in progress> and specifically 7, 21, 35 or 49 days old. If a form falls on that age then an email is sent.
4. Does it monitor Saved In Progress applications that have opted in for these reminders?
     - There currently isn't an opt in process for these reminders.
5. Would our system need to send a flag to VA Notify? -
     - No, the Strike team would create the job to check for the in progress forms that are the appropriate age.
6. We are interested in any research done for this reminder, if you have any to share.
     - _This is for our curiosity since we have heard similar feedback about too many notifications & related topics_
          - We do have a feedback loop in the responses we get to the emails. We are also tracking the click through rates on the application links in the emails.  We would recommend your team sets up a no-reply email address so you can see the responses from veterans. - There is also plan to evaluate the effect on submission rates.
