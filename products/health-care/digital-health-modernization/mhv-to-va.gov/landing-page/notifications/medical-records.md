# Medical Records

## Lab and Test results


## Medical Images

### What does "new medical images" mean currently (in national platform tool)?
* Before moving over to VA.gov, MHV offered a user-maintained setting with radio buttons to either be notified of new medical images or not (but what this notification is and what exactly it looks like is harder to find)
<img width="957" alt="Screenshot 2023-08-31 at 1 57 17 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/58444931/6b10e9f7-249f-4660-aeb2-574f97760c43">

* [From Liz Lantz](https://dsva.slack.com/archives/C04DRS3L9NV/p1687786761816379?thread_ts=1686334008.074209&cid=C04DRS3L9NV): "The 'VA medical images and reports available notification' is a message triggered only after a user has requested a specific set of images in the MHV 'Download my data' > 'Medical images and reports' section."
* [Also from Liz](https://dsva.slack.com/archives/C04DRS3L9NV/p1687786761816379?thread_ts=1686334008.074209&cid=C04DRS3L9NV): "There’s a table that lists all the available image and radiology reports, and each one has up to three options: View Report, View Images, and Request. If they click request, it triggers the process to get the images in a downloadable format (unsure of exactly what systems/APIs are called) and modal saying “Your request is currently processing. It may take some time to retrieve your VA Medical Images and Reports. In the meantime, you can choose to [update your profile](link to profile) to get an email notifying you when they are ready to view.'”
* [Also from Liz](https://dsva.slack.com/archives/C04DRS3L9NV/p1687786761816379?thread_ts=1686334008.074209&cid=C04DRS3L9NV) Here's the text of the email notification people receive:

      "Dear [User],
        The VA Medical Images and Report that you requested are now available.
        The information will be accessible for 3 days.
        After 3 days, you will need to resubmit your request.
  
        To view your VA medical Images and Report in your browser:
            - log into My HealtheVet
            - navigate to the VA medical images and reports page
            - select a link in the I want to… column
      
          Please do not reply directly to this email as it is an automated message from the My HealtheVet System."

* [From Lexi Wunder](https://dsva.slack.com/archives/C04DRS3L9NV/p1686592560953199?thread_ts=1686334008.074209&cid=C04DRS3L9NV): "This screenshot is the modal that appears after you click "Request Images" when looking at the table of all your images and reports. Note: Reports are immediately available when entered, but the user always has to "request" the images. I think "request" in this sense is more of a load/generate action than actually submitting a request for approval. Carnetta and Patty Henry would likely be the ones to ask. Let me know if you'd like me to be part of those conversations."
* Screenshot mentioned:
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/106624475/cac00a03-51fb-4072-b8eb-8140b68b4b8b)

### What could "new medical images" mean in future iterations of the tool?

* Depending on whether or not the MR team continues to offer the UX of Request to download > modal > email letting user know download is complete, the notification indicator here could be letting a user know that the download is complete
* Another useful notification would be: notifying users any time a new item comes up on the Lab and test results page (screenshot below):

<img width="531" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/106624475/00ac1bea-79a3-407b-949f-76db26c7a12d">

* And if we do that (notify users anytime a new item is in that Lab and test results list above), would it also be helpful to notify users anytime a new item comes up in any of these categories?

<img width="422" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/106624475/232a8caf-5153-44c0-b2dc-209921d35be6">

### Conclusion

* At this point, the Medical Records team is unsure what the medical images flow  will look like (e.g. will it follow the current flow of the tool on the national platform or do something different?). [Link to slack conversation.](https://dsva.slack.com/archives/C03Q2UQL1AS/p1693579011765229)
* The MR team is doing phasing a little differently from other teams, starting with releasing the new allergies part of their app in phase 1, then another part in phase 2, and so on. Until they are actively working on implementing Labs and test results, we likely need to hold off on any lab/test related notifications.
* We should check back in after a couple months (November or December 2023). 

 




## Summary


**Related resources about Labs and Tests**
  


