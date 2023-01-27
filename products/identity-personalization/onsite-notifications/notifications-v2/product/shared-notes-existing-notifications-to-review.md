# Shared Notes: Existing Notifications to Review for Onsite Notifications

Quesitions and notes to discuss with VA Notify ahead of 1/24 scheduled meeting around [notifications currently supported by VAnotify](https://docs.google.com/spreadsheets/d/1E7JupFC2i6XUzlOxbWwTbIJZ6AxRUz-m/edit#gid=1231731113) - access available upon request).

## Notes & Questions

**1. What's the significance of the hidden rows?**
 Answer: Not relevant for our team's purposes

**2. What's the significance of the highlighted fields?**
 Answer: Not certain of the answer

**3. What's the significance of the item(s) in red?** 
 Answer: Already is an onsite notification

**4. I see the field for total sent to date - do we have an idea of cadence on a daily, weekly, monthly basis?**
Answer: You can find more detailed data in Domo and can filter by template and/or service: https://va-gov.domo.com/page/2040841289

 ## Samara's questions
 
 We can combine these into the main list, but separating them for now until we have a chance to discuss and consolidate across our team.
 
 ### BVA
 
1. Do the Appeal decision mailed notifications link to anything? Or is it just a heads-up to look out for the mail?
- **Answer**: It links to the claim status tool. According to the [#benefits-claim-appeal-status](https://dsva.slack.com/archives/C04KHCT3ZMY/p1674744495318219) team, appeals decisions *might* show in the decision letters section of the claim status tool, but it is unclear whether they always will. This has to do with how the tool was built and how the decision letters tool pulls in letters from a veteran's documents. So, it's unclear whether this is linking to helpful info or not. Maybe?
2. What does "Appeal docketed" mean? What kind of information does this link to, if any?
- **Answer**: Docketed = the case has been officially received and added to the appeals queue. The email links to the claim status tool, but it is unclear what we show re: appeals in the tool.
3. Do the "hearing scheduled" notifications link to information, or include the scheduled date and time?
- **Answer**: These emails link to the claim status tool, but it is unclear whether appointment information shows there. There is no appointment info in the email.
4. Do the "Postponement of hearing" notifications link to information, or include the scheduled date and time?
- **Answer**: Same as above -- links to claim status, but no appointment info in the email. Also not clear if they get helpful info via the claim status tool or not.
5. Do the "Privacy Act request pending" notifications require people to take action? If so, what?
- **Answer**: This actually looks like more of a confirmation email, as the veteran or their rep would have filed the request. This email acknowledges receipt by BVA.
6. What is the "quarterly notification" from BVA?
- **Answer**: This is a quarterly status update of an appeal. Since appeals take years, it likely lets people know that things haven't changed most of the time.
7. What is the "VSO IHP pending" notification? Does it require people to take action? If so, what?
- **Answer**: This is essentially a confirmation email letting people know their appeal has been assigned to a VSO, and that the appeal will be docketed once BVA receives the necessary materials.
8. Is the "Withdraw of hearing" notification a confirmation? Also, who withdrew the hearing, the veteran or BVA? Or can that vary?
- **Answer**: Yes, this is a confirmation that either the veteran or their rep requested a withdraw of their hearing.

### Lighthouse

1. What is the Notice of Disagreement? We send this notificaton when a Veteran has filled out form 10182.  
- **Answer**: This is effectively a confirmation message that a notice of disagreement (part of appeals process) has been filed.
2. What is the Decision Review Request?  We send this notificaton when a Veteran has filled out form 20-0995.
- **Answer**: This is basically a confirmation that the decision review request was received.
3. What is the On Application Connect/Disconnect? This email is sent when a Veteran connects/disconnect their health app to/from their VA Profile
- **Answer**: This is a confirmation for connecting/disconnecting third-party apps.

### QuickSubmit

1. The following sound like confirmations, but are listed as "other". What are they?
  - Account Activated - This is a confirmation.
  - Account Deactivated - This is a confirmation, though the account could have been deactivated due to inactivity.
  - Approved Admin Request - This is a confirmation.
  - Denied Admin Request - This is a confirmation.
  - Failed Submission Email - This is sort of a confirmation, but **action is required to resubmit materials**.
  - Profile Email Updated - This is a confirmation.
2. What is the Admin notification? Does it require user action? Does it link anywhere?
  - **Answer**: This is letting people know they have pending requests that need to be addressed. However, it's unclear who the audience is. Are admin requests for people internal to VA?

### VA Insurance

1. What is the Document Ready for Review notification? Does it require user action? Does it link anywhere?
- **Answer**: This appears to be an action-oriented request from VA to the veteran to review newly-updated life insurance information. It links to https://insurance.va.gov/home. While I can't login to the site to verify this flow, its main CTA is Access My Policy Online.

### VBA Education

1. What are the Email33 Enrollment Verification Monthly Attendance Verify notifications? Do they require user action? Do they link anywhere?
- **Answer**: This is an action-required email to let the VA know if someone's education status has changed in the last month.

### VEText

1. Are all of these now supported by VANotify?
- **Answer**: It looks like it!
2. For the in-person and virtual hearing reminders, do these link anywhere? Or do they include appointment information?
- **Answer**: Yes, these texts do include appointment information. There are two options -- one with repsonses to confirm or cancel, and one without. Both link to the claim status tool and refer people to VA's 1800 number. 
3. Does the prescription tracking notification link anywhere?
- **Answer**: This includes super helpful info -- the facility, what the prescription is, and a tracking link. It also refers people to VA's prescription refill app, which is **not** the VA Mobile app.
4. What are the "Code Messages Templates"? Are these confirmation codes (eg. like 2-factor auth)?
- **Answer**: This are literally just templates, and we should take them out of the spreadsheet.
5. What is the prescription auto-response?
- **Answer**: This is also a blank template. Not sur what it is used for -- maybe if someone responds to the tracking notification? -- but we can take it out of the spreadsheet.
6. What is the SMS API template?
- **Answer**: Also a template we can take out of the spreadsheet.

### VA.gov

1. What is Appointment Reminder Generic?
  - **Answer**: This is actually a generic reminder for benefit applications that have not been completed on VA.gov. [Link to VANotify template](https://notifications.va.gov/services/5bda137e-689e-4532-b3d2-2c81c0324331/templates/5617dd58-f6f6-4368-a53f-058ebe2dd8ad)

## Samara's assessment

### Onsite notifications we should definitely add

[Link to screenshots from VA Notify platform](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/notifications-v2/product/VANotify-template-screenshots.md)

Based on my discovery above, I think the following are immediate candidates for onsight notifications:

- **VEText**: Prescription shipment notifications from VEText -- This is both high volume and super important, even though these notifications only account for a fraction of the prescriptions shipped by VA (this has to do with the system that supports this notification vs. the system that supports shipments from centralized, non-hospital locations).
- **VEText**: BVA in-person or virtual hearing reminders -- These include really helpful information, which we can surface in VA.gov if technically possible. Numbers are smaller than prescription shipment notifications, but appeals hearings are extremely important for those they affect.
- **VBA Education**: This is an action-oriented notification that's super important to verify whether people are still enrolled in school. We'd need to figure out how to handle this from a technical perspective since there's not a singular link in this email.

### Potential notifications to add

This notification meets our criteria, but numbers are small. Maybe put this in the backlog:

- **VA insurance**: Document ready for review

I still have some questions about how useful it would be to surface these given their current content:

- **BVA**: Appeals decision mailed
- **BVA**: Hearing scheduled
- **QuickSubmit**: Failed Submission Email (This is sort of a confirmation, but action is required to resubmit materials.)

