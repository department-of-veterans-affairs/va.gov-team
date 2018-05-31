*Note: The guidelines below do not apply to inline error messages in form fields (ie, “Please enter a valid Social Security number.”). Those will be handled separately.*

## Structure

Every error message will have **up to** 3 parts:

<img src="{{ assetPath }}img/docs/error_msg_content_guide.png" width="608">

**1.** **Title:** Bold title giving the user a quick idea of what’s wrong

**2.** **Description:**
- Apology (if the error is coming from a problem on our end)
- Succinct description of the issue, cause, and any relevant details
- Call to action telling the user what to do next (if applicable)
- Next-step call to action telling the user what to do if the first call to action fails to resolve the issue (if applicable)

**3.** **Button(s):** Actionable next-step for user (if applicable)

## Content within the Description

To create an effective error message, ask yourself these 4 questions:

**1. What’s the error/issue?**

The answer will inform the details of the issue and cause.

**2. What’s the source of the error/issue?**

The answer will determine how the error/issue needs to be framed, and whether an apology is needed.

**3. What does the user need to know to best resolve the error/issue?**

The answer will inform the call to action telling the user what to do next, as well as any relevant details (eg, date/time of scheduled maintenance on the site).

**4. If the resolution fails, what’s the next step?**

The answer will inform whether or not to include a “next-step call to action” to help guide the user further should the first call to action fail to resolve the issue. This may be language directing the user to call the Vets.gov Help Desk or other VA resources, and will be determined on an issue-by-issue basis. See [Next-step calls to action](#next-step) below for more information and guidance.

## Style and Tone

### Clear and direct

Tell the user what’s happened/happening, how it will impact them, and how they can resolve it.

### Humble, helpful, and non-alarming

| Use language that... | Avoid language that... |
| ----- | ----- |
| Accepts ownership (or shared ownership) of the error *(ie, “We’re sorry. We can’t find your records in our system.”)*    | Blames the user for the error (even if error is user-generated) *(ie, “You're not in our system.”)*  |
| Instills confidence in the user *(ie, “We’re working to fix the problem.”)* | Instills alarm *(ie, “Warning!”)* |
| Offers steady, helpful guidance toward resolution *(ie, “Please make sure the file you’re uploading is a .pdf or .doc file and try again.”)*     | Feels overly casual or dismissive *(ie, “Oops! Incorrect file type”)* |

### Framed to highlight Vets.gov ownership/shared ownership of the error

Did the user’s action cause the error?

**If yes:** Avoid language that feels alarming or blame-oriented and re-frame error as being a shared one, while guiding user to correct the error.

| Situation | Sample error message |
| ----- | ----- |
| File upload fails because user tried to upload an unacceptable file type. | *We’ve run into a problem* <br/> We weren’t able to upload your file. Please make sure the file you’re uploading is a .pdf or .doc file and try again. <br/> [button] Re-upload file |

**If no:** Humbly accept responsibility for the error and offer user brief, but clear, details and guidance to resolution.

| Situation | Sample error message |
| ----- | ----- |
| File upload fails because user tried to upload an unacceptable file type. | *We’ve run into a problem* <br/> We're sorry. Your application didn't go through because we're having some issues with our server. We're working to fix the problem, but it may take us a while. Please save your application, and try again tomorrow. <br/> [button] Save Your Application |

### Conversational and plain language

First person/second person with a personal/helpful tone. Example:

| This | Becomes something like this |
| ----- | ----- |
| These records are unavailable. The Help Desk may be able to help locate them... | We can’t find your records. You can call the Vets.gov Help Desk...We're here Monday through Friday...|

Plain, simple words (ie, avoid jargon and multisyllabic words wherever possible). Examples:

| This | Becomes something like this |
| ----- | ----- |
| If you need immediate assistance... | If you need help right now...|
| The system is currently unavailable... | Vets.gov isn't working right now...<br/> OR <br/> Vets.gov is down at the moment|

When the instructions are conditional lead with the conditional phrase to make it clear who the instructions are for. Examples:

| This | Becomes something like this |
| ----- | ----- |
| Please call us if it still doesn’t work. | If it still doesn’t work, please call us.|
| You can’t use this tool if you’re not a VA patient. | If you’re not a VA patient, you can’t use this tool.|

## Additional Guidance

### Error state and message intent
Focusing in on the intent of the error message can help to further flesh out the nuances of tone and description content.

| Error state | When to use | Tone | Goals | Example |
| ----- | ----- | ----- | ----- | ----- |
| **Informational** | To surface system-related feedback not initiated by the user (e.g. status updates). <br/> OR <br/> To provide information that helps set the user's expectations for their experience (e.g. SiP available). | Clear and direct, Humble, Empathetic, Helpful | Succinctly convey information <br/> Explain how (and for how long) user may be impacted <br/> Offer guidance toward resolution (if needed) | **Vets.gov will be down for maintenance soon** <br/> We’ll be doing some work on Vets.gov on [Date] between [time] and [time]. If you have trouble using the site during that time, please check back soon. |
| **Success** | As a confirmation that a user-initiated action was completed successfully. | Positive, direct, and definitive | Quickly and clearly convey user's success  | **Success** <br/> We've uploaded your file. Thank you. |
| **Warning**  | An action was unsuccessful, but the user can still proceed. </br> OR <br/> Some parts of the user’s experience may be limited that normally wouldn’t be (e.g. system is down and records are accessible but outdated). | Clear that there may be a problem, while being un-alarming and focused on reason and resolution | Help user understand the issue and resolve it as needed  | **Some information may not be current** <br/> We're sorry. We're having issues with our server. We're working to fix it, but it may take us a while. You can still use [APPLICATION/PAGE NAME], but you may not be seeing all of your updated information. If you're having trouble, please try again later. |
| **Error** | A user action was not completed and must be resolved to proceed. | Clear that's something's wrong that will block the user from moving forward, while being un-alarming and focused on reason and resolution | Help user understand the issue and resolve it | **We've run into a problem** <br/> We're sorry. It looks like your latest action didn't go through on the site because there's a problem with the Internet connection. We can't take you to the next step until this is complete. Please check to make sure you're connected to the Internet and try again. |
| **Actions (single button)** | The user must take an action to proceed with the task indicated by the message | Enticing to help prompt user to take action, while being clear about the action needed | Get user to take a specific action | **Still want to apply for VA health care benefits?** <br/> You started an application for health care benefits on [DATE], but you didn't submit it. You can open the application and finish applying at any time. <br/> [button] Open Your Application |
| **Actions (binary button)** | The user must choose between two actions to proceed with a task, or to confirm an important action. | Clear and direct about how each of the choices will impact the user | Help user make an informed choice of action to take | **Are you sure you want to start this application over?** <br/> If you start over, you'll lose all the information you've filled in so far. <br/> [button 1] Start Over [button 2] Keep Going |

### Messaging categories

The [Messaging Dictionary](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Design%20System/Guidelines/Error%20handling/Dictionary.md) can help offer specific messages to use and/or examples to inform new message creation. We’ll continue expanding the dictionary, so check back often for new messages.

| Error state | When to use | Link to dictionary of messages |
| ----- | ----- | ----- |
| **System messaging** | Alerts the user of important system-related issues or status. It’s initiated by the system and it’s not a result of the user’s actions. | [See system message examples](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Design%20System/Guidelines/Error%20handling/Dictionary.md#system-messaging) |
| **Engagement messaging** | Alerts the user of important system-related issues or status. It’s initiated by the system and it’s not a result of the user’s actions. | [See engagement message examples](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Design%20System/Guidelines/Error%20handling/Dictionary.md#engagement-messaging) |
| **Access messaging** | Appears when the user tries to access an item that’s not available to them. It may be because the record has been deleted, the user doesn’t have access, etc. etc. | [See access message examples](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Design%20System/Guidelines/Error%20handling/Dictionary.md/#access-messaging)|
| **Feedback messaging** | The application’s response when the user is interacting with it. The majority of create, read, update, delete (CRUD) actions will result in feedback messaging. | [See feedback message examples](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Design%20System/Guidelines/Error%20handling/Dictionary.md#feedback-messaging)|

### Next-step calls to action

Some errors may not be resolved based on initial instructions to user (ie, "Try again later). In these cases, a next-step call to action (ie, "Call the Vets.gov Help Desk") may be necessary. This will be decided on a case-by-case basis, but below are some initial guidelines for determining the appropriate next-step call to action.

| Next-step call to action | When to use | Stanard language to use | Potential condition variations |
| ----- | ----- | ----- | ----- |
| **Call the Vets.gov Help Desk** | User can’t resolve an error that is directly related to the website (specifics TBD) | Please call the Vets.gov Help Desk at 1-855-574-7286 (TTY: 1-800-829-4833). We’re here Monday–Friday, 8:00 a.m.–8:00 p.m. (ET). | If you need more help, please call... <br/> If it still doesn't work, please call... |
| **Get more information about/help with your VA benefits** | User may not be able to resolve error, but next step would involve talking to someone at VA about benefits | If you need more help, call us at 1-800-827-1000. Or, contact a VA regional benefit office near you. <br/> (button) [Find a VA regional benefit office](https://www.vets.gov/facilities/) | If you have questions about your benefits... |
| **Get help filing a disability claim** | User needs more help filing a disability claim | If you need more help with your claim, you may want to work with a trained professional. <br/> (button) [Get Claim Help](https://www.vets.gov/disability-benefits/apply/help/index.html) | |  |
| **Contact the Veterans Health Administration toll-free hotline** | User needs help filling out a health care benefits application | If you need more help filling out your application, call our toll-free hotline at 1-877-222-VETS (1-877-222-8387). We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. (ET). You can also get help from a trained professional called an accredited representative. Or, find your state’s Veterans agency.|(button 1) [Request a representative][https://www.ebenefits.va.gov/ebenefits/about/feature?feature=request-vso-representative] (button 2) [Find a Veterans agency](https://www.va.gov/statedva.htm)| If you have questions about your application,... |
| **Contact your local VA medical center** | User needs to contact their doctor or speak to someone at a VA medical center for more information | If you need more help with this, call your healthcare provider or your local VA medical center or clinic. <br/> (button) [Find a VA health facility](https://www.vets.gov/facilities/) |If you have questions, call your doctor or a VA medical center or clinic near you...  |
| **Get answers to questions about education benefits** | User needs more help/answers to questions about their education benefits | If you need more help, call us at 1-888-GI-Bill (1-888-442-4551). We’re here Monday through Friday, 8:00 a.m. to 7:00 p.m. (ET). | If you'd like to request a paper application... |
