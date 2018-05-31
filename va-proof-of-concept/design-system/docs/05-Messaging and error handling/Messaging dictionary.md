_Categories adapted from [Salesforce Lightning Design System](https://www.lightningdesignsystem.com/guidelines/messaging/types)_

## System messaging

Alerts the user of important system-related issues or status. It’s initiated by the system and it’s not a result of the user’s actions.

***Note:** See [content style guide](/docs/messaging-and-error-handling/messaging-design-guide#next-step-calls-to-action) for guidance on when to consider adding instruction to call the Vets.gov Help Desk or other "next-step" call to action.*

### Scheduled downtime notice

| Scenario                                 | Title | Description | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| Notice of upcoming scheduled downtime (sitewide) | **Vets.gov will be down for maintenance soon** | We’ll be doing some work on Vets.gov on [DATE] between [TIME] and [TIME]. If you have trouble using the site during that time, please check back soon. | - | Overlay | Informational | - |
| Notice of upcoming scheduled downtime (application) | **[APPLICATION NAME] will be down for maintenance soon** | We'll be doing some work on [APPLICATION NAME] on [DATE] between [TIME] and [TIME]. If you have trouble using this tool during that time, please check back soon. | - | Overlay | Informational | - |
| Notice of upcoming scheduled downtime (authentication provider) |**[ID.ME/DS LOGON/MYHEALTHEVET] will be down for maintenance soon** | [ID.ME/DS LOGON/MYHEALTHEVET] will be down for maintenance on [DATE] between [TIME] and [TIME]. If you have trouble signing in to your Vets.gov account during that time, please check back soon.  | - | Alert | Informational | Below sign in overlay title |

### Updates to user data (system-initiated)

*Some messages written to reflect the example; other variations will be added to expanded dictionary section.*

| Scenario                                 | Title | Description | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| Status update (e.g. claim closed)        | **Your [CLAIM TYPE] claim update** | Our records show that your claim was closed on [DATE].| - | Alert | Informational | Replace affected component |
| Action required (e.g. claim evidence request) | **We need your help to finish reviewing your claim** | We need you to provide more evidence (supporting documents) so we can finish reviewing your claim.| See Details | Alert | Warning | Above affected component |
| Form prefill notice                      | **We've started your form for you** | We've filled in some of this form based on information you've given us in the past. Please double check the information and update as needed. | - | Alert | Informational | Above affected component |
| Change in application feature, neutral/positive impact (e.g. SiP now available) | **You can now save your in-progress applications** | Sign in to Vets.gov to save your application so you can come back later to complete it. All you'll need to sign in is an email and password. | Sign in to Vets.gov | Alert | Informational | Above affectected component |

## Engagement messaging

Nudges the user to enter or update data in the system. It can be initiated by either the system or another user.

***Note:** See [content style guide](/docs/messaging-and-error-handling/messaging-design-guide#next-step-calls-to-action) for guidance on when to consider adding instruction to call the Vets.gov Help Desk or other "next-step" call to action.*

### Prompt to complete a task or enter data

| Scenario                                 | Title | Description | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| Continue a saved benefit application | **Still want to apply for [BENEFIT NAME]?** | The application you started for [BENEFIT NAME] will expire on [EXPIRATION DATE]. If you'd still like to apply, you'll need to submit the application by this date. Or, you can start a new application any time. | [BUTTON 1] Continue Your Application [BUTTON 2] Start Over | Alert | Informational | Replace affected component |
| Set up 2-factor authentication       | **Want to make your Vets.gov account more secure?** | You can add an optional extra layer of security (called 2-factor authentication) to your account. This helps to make sure that no one but you can access your account—even if they get your password. | Secure Your Account | Alert | Informational | Replace affected component |

## Access messaging

Appears when the user tries to access an item that’s not available to them. It may be because the record has been deleted, the user doesn’t have access, etc. etc.

***Note:** See [content style guide](/docs/messaging-and-error-handling/messaging-design-guide#next-step-calls-to-action) for guidance on when to consider adding instruction to call the Vets.gov Help Desk or other "next-step" call to action.*

### System downtime

Variations in messaging will be contingent on:

- Whether or not the downtime is scheduled/expected
- If scheduled, when the application will be back up (precise timestamp if known, general estimate if not)
- If not expected, general estimate of when the application will be back up

| Scenario                                 | Title | Description | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| Entire site is not accessible (scheduled downtime) | **Vets.gov is down for maintenance right now** | We're sorry. Vets.gov isn't available right now. We're doing some work to help make this site even better for Veterans, Servicemembers, and family members like you. We hope to be finished our work by [DATE/TIME]. Please check back then. | - | Plain text | - | Replace page |
| Entire site is not accessible (expected) | **Vets.gov isn't working right now** | We're sorry. Something went wrong on our end. Please refresh this page or try again [LENGTH OF TIME (ie, "tomorrow" or "in an hour")] | - | Plain text | - | Replace page |
| Entire site is accessible                | **We're working on the site** | We’re doing some work on Vets.gov right now. You should still be able to use the site applications and tools. But if you have any trouble, please check back soon. | - | Alert | Warning | Banner |
| Application or page is not accessible    | **[APPLICATION NAME] isn't working right now** | We’re sorry. Something went wrong on our end. Please refresh this page or try again [LENGTH OF TIME (ie, "tomorrow" or "in an hour")]. If it still doesn’t work, please call the Vets.gov Help Desk at 1-855-574-7286 (TTY: 1-800-829-4833). We’re here Monday–Friday, 8:00 a.m.–8:00 p.m. (ET). | Go Back to Previous Page | Plain text | - | Replace page below title |
| Application or page is accessible (general message; specific iterations to be added later) | **Some features here may not be working** | Something's not working quite right. You can still use [APPLICATION/PAGE NAME], but some features may not be working. If you're having trouble, please try again later. | - | Alert | Warning | Below page title |
| Component is not accessible (general message; specific iterations to be added later) | **[COMPONENT NAME] isn't working right now** | We're sorry. Something went wrong on our end. Please refresh this page or try again [LENGTH OF TIME (ie, "tomorrow" or "in an hour")].  | Go Back to Previous Page | Alert | Warning | Replace affected component |
| Component is accessible (general message; [see application/component specific messages](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Design%20System/Guidelines/Error%20handling/Dictionary/Access%20Messaging.md))| **Some information may not be current** | We're sorry. Something's not working quite right. You can still use [COMPONTENT NAME], but you may not be seeing all of your updated information. If you're having trouble, please try again [LENGTH OF TIME (ie, "tomorrow" or "in an hour")]. | - | Alert | Warning | Above affected component |
| Unable to complete an automated task (e.g. save application in progress) | **We couldn't save your form** | We're sorry. Something went wrong when we tried to save your form. If you're on a secure and private computer, you can leave this page open and try saving your form again in a few minutes. If you're on a public computer, you can continue to fill out your form, but it won't automatically save as you fill it out. | - | Alert | Error | Below affected component |
| Unable to complete a user-initiated task, can't proceed | **We've run into a problem** | We're sorry. Something went wrong on our end. Please try again. | - | Alert | Error | Above page title |
| Unable to complete a user-initiated task, can still proceed | **We've run into a problem** | We're sorry. Something went wrong on our end. You can try again, or move onto the next step and come back to complete this later. | - | Alert | Warning | Above page title |

### Network connection loss

| Scenario                                 | Title | Description | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| Application/page/component is not accessible due to user connection loss    | **We can't load [APPLICATION/PAGE/COMPONENT NAME]** | Please make sure you're connected to the Internet and refresh this page to try again. | Try again | Plain text | - | Below page title |
| Unable to complete an automated task (e.g. save application in progress) due to user connection loss | **We can't save your form right now** | Please make sure you're connected to the Internet and then try saving your form again. | Try again | Plain text | - | Below affected component |
| Unable to complete a user-initiated task due to user connection loss | **We've run into a problem** | Please check to make sure you're connected to the Internet and try again. | - | Alert | Error | Above page title |

### Authorization

| Scenario                                 | Title | Description | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| (Application) user's records are not found | **We can't find your records** | We're sorry. We can't find your records in our system. If you think they should be here, please try again later or call the Vets.gov Help Desk at 1-855-574-7286 (TTY: 1-800-829-4833). We’re here Monday–Friday, 8:00 a.m.–8:00 p.m. (ET). | - | Plain text | - | Replace content below page title |
| (Page) user's records are not found      | **We can't find your records** | We're sorry. We can't find your records in our system. If you think they should be here, please try again later or call the Vets.gov Help Desk at 1-855-574-7286 (TTY: 1-800-829-4833). We’re here Monday–Friday, 8:00 a.m.–8:00 p.m. (ET).  | - | Plain text | - | Replace content below page title |
| (Component) user's records are not found | **We can't find your records**  | We're sorry. We can't find your records in our system. If you think they should be here, please try again later or call the Vets.gov Help Desk at 1-855-574-7286 (TTY: 1-800-829-4833). We’re here Monday–Friday, 8:00 a.m.–8:00 p.m. (ET). | - | Plain text | - | Replace affected component |
| (Application) user is not eligible for a benefit because they aren't a Veteran/dependent/spouse | **We can't offer you this benefit right now** | It looks like you're not eligible for this benefit based on the information you've given us. Please check our eligibility information again. | Check Your Eligibility | - | Plain text | - | Replace content below page title |
| (Application) user is not currently enrolled in a benefit (e.g. not enrolled in Post-9/11 GI Bill benefits) | **You're not enrolled in this benefit right now** | It looks like you're not signed up for this benefit. If you think you're eligible, you can apply now.| (1) Check Your Eligibility (2) Apply Now  | Plain text | - | Replace content below page title |
| (Application) user is not a VA patient | **We can't give you access to this tool right now** | We're sorry. Only patients who've received care at a VA facility can use Vets.gov health tools. If you've received care at a VA medical center, clinic, or Vet center, please call that facility to find out if you're in their records. | Find Your VA Facility | Plain text | - | Replace content below page title |

### Empty state

| Scenario                                 | Title | Description | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| (Application) No data tied to the user or scenario | **No [DATA TYPE (ie, prescription refills or health records)] to show** | We don't have any [DATA TYPE] in our system to show here. | - | Plain text | - | Replace content below page title |
| (Page) no data tied to the user or scenario | **No [DATA TYPE] to show** | We don't have any [DATA TYPE] in our system to show here. | - | Plain text | - | Replace content below page title |
| (Component) no data tied to the user or scenario | **No [DATA TYPE] to show** | We don't have any [DATA TYPE] for you in our system. | - | Plain text | - | Replace affected component |

## Feedback messaging

The application’s response when the user is interacting with it. The majority of create, read, update, delete (CRUD) actions will result in feedback messaging.

***Note:** See [content style guide](/docs/messaging-and-error-handling/messaging-design-guide#next-step-calls-to-action) for guidance on when to consider adding instruction to call the Vets.gov Help Desk or other "next-step" call to action.*

### Task completion success/failure

| Scenario                                 | Title | Description | Actions | Component | State  | Location |
| ---------------------------------------- | ----- | ----------- | ------- | --------- | ------ | -------- |
| Form save in progress success (inline)   | **Success** | The information you've entered so far has been saved. | - | Alert | Success | Below affected component |
| Form save in progress success (exit page) | **Success**  | Your in-progress form has been saved. Remember, you need to finish the form and click "Submit" to apply for this benefit. Continue applying now, or come back later to finish your application. | Continue Your Application | Alert | Success | Below page title |
| Form save in progress failure (inline)   | **Your form didn't save** | We're sorry. We couldn't save your form. Please try again.   | - | Alert | Error | Below affected component |
| Form general error                       | **We need you to start this application over** | We're sorry. We know this will cause you trouble, but something's not working with this application. Please try applying again in a few minutes. | Start Over | Alert | Error | Replace content below page title |
| Form submission success                  | **Success** | Your form was submitted. Thank you. | - | Alert | Success | Below page title |
| Form submission failure, can save in progress | **Please save this application and try again** | We're sorry. Your application didn't go through. We're working to fix the problem, but it may take us a while. Please save your application, and try again tomorrow. | Save Your Application | Alert | Error | Above page title |
| Form submission failure, unable to save in progress | **We need you to start this application over** | We're sorry. Your application didn't go through, and you'll need to start over. We suggest you wait a day while we fix this problem. | - | Alert | Error | Above page title |
| Required form field is empty             |  | Please fill in this required information. | - | Inline | Error | - |
| Form field entry is not valid            |  | Please feel in a valid [address/email address/phone number]. | - | Inline | Error | - |
| File upload success                      | **Success** | We've uploaded your file. Thank you. | Dismissible | Alert | Success | Above page title |
| File upload failure                      | **Your file wasn't updated** | We're sorry. We weren't able to upload your file. Please try again. |  Dismissible | Alert | Error | Above page title |
| File download success                    | **Success**  | Your file has been downloaded. | Dismissible | Alert | Success | Above page title |
| File download failure                    | **Your file didn't download** | We're sorry. We weren't able to download your file. Please try again. | Dismissible | Alert | Error | Above page title |
| Message sent                             | **Success** | Your message was sent. Thank you. | Dismissible | Alert | Success | Above page title |
| Message failed to send                   | **Your message didn't go through** | We're sorry. We couldn't send your message. Please try again.|  Dismissible | Alert | Error | Above page title |
| Creation success                         | **Success** | Your file was created. Thank you. | Dismissible | Alert | Success | Above page title |
| Creation failure                         | **Your file wasn't created** | We're sorry. We couldn't create your file. Please try again.  |  Dismissible | Alert | Error | Above page title |
| Deletion success                         | **Success** | Your file was deleted. Thank you. | Dismissible | Alert | Success | Above page title |
| Deletion failure                         | **Your file wasn't deleted** | We're sorry. We couldn't delete your file. Please try again.  |  Dismissible | Alert | Error | Above page title |
| Update success                           | **Success** | Your file was updated. Thank you. | Dismissible | Alert | Success | Above page title |
| Update failure                           | **Your file didn't upload** | We're sorry. We couldn't update your file. Please try again.  |  Dismissible | Alert | Error | Above page title |
