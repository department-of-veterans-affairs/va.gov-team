# About this Research Study
- **Study Name:** MHV Secure Messaging
- **Study Dates:** September and October 2023
    - [Detail can be found via the sesions comment in #65457](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65457#issuecomment-1733718767)
- **Study Research Lead:** Ade Ajayi and Anne Costello 
- **A11y Collaborators:** Sara, SK and Jamie
- **Related Docs:**
    - [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/research/2023-09-usability-round3-phase0/research-plan.md)
    - [Research conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/research/2023-09-usability-round3-phase0/conversation-guide.md)
- **Ticket Links:** Research Support Ticket [#65457](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65457#issuecomment-1733718767)

# Accessibility Tools Utilized
`iOS VoiceOver` `MacOS VoiceOver` `JAWS` 
`No Beginning Users`

## Coverage
This research fufilled 66% (4/6) of its original request. Given the **limited** amount and **lack of variety** of types of screen readers, a conclusive behavioral patterns **can/cannot** be determined locally in this study. We **can/cannot** draw future research considerations and document caught accessibility issues.

- **Original study request:** 10 scheduled with the expectation of 6 completing the study
- **Actual study performance:** 4 completed

> For screen reader users, we will schedule a total of 10 Veterans for an expected completion rate of 6 usability sessions.

## Participants
To best serve the users of VA.gov, we will need to collect the following information during each a11y research session:
- **Skill level of user:** Novice, Intermediate or Advanced
- **Operating System:** Mac or Windows
- **Assistive Technology being used:** Jaws, NVDA, Zoomtext, Dragon, etc.
- **Internet Browser:** Chrome, Firefox, etc.
  
| **Participant Number** | Date of Research | **Assistive Tech** | **Skill Level** | **Operating System** | **Browser** |**Device Type** |
|------------------------|------------------|--------------------|-----------------|----------------------|-------------|-------------|
| P1                   | 9/25/2023         | VoiceOver             | Advanced      | iOS            | Safari    | Mobile (iPhone 14 Pro)      |
| P3                       | 9/25/2023                 | VoiceOver                   | Intermediate                | MacOS                     | Safari            | Desktop            |
| P6                       | 9/26/2023                 |  JAWS                  | Intermediate                |  Windows                    |  Chrome           | Desktop            |
| P9                       | 9/29/2023                 |  VoiceOver                  |  Advanced               |   MacOS                   |  Safari           |  Desktop           |

**Participants who successfully completed sessions: 4**

## Key Findings
Add screenshots, images and videos here.

### Participants had trouble determining if there were attachments.
- The conversation threads are in accordions. 
- In the inbox, attachments are noted by an icon (what looks to be a paper clip emoji) that comes after the date and time, prior to the user's name.
- This icon isn't read aloud by screen readers.
- The attachment isn't known by the user until the message was expanded.
- This can pose to be an issue if there are multiple messages.

<img width="194" alt="Messages in this conversation (not expanded yet). There is a button to expand all and a plus sign on the far right of each of the four messages to expand them. The accordion headers are the date, followed by the sender." src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/124186314/fe022d99-42e1-473b-858a-ccc42e0925cc">

### Having a "save draft" button _and_ auto-saving lead to confusion. And some participants weren't sure where their draft saved.
- When typing their draft messages, users weren't aware that they would auto-save.
- Initially, users didn't expect their drafts to auto-save because there was a "save draft" button. One participant said "If it has a button telling me to save, then...it's not automatically saved."
- Upon saving (whether by auto-save or by saving manually), some participants weren't sure how to access their draft email (what folder it was located in).

### The crisis line disclaimer was appreciated, but may be present in too many places across the app. 
- There's a disclaimer page before entering the app. Then the message appears again on the 'Compose' page. One user felt that having this in multiple places was redundant, and that having liability and disclaimer pages before sending a message was a lot to navigate through.
- There's no warning that the user is going to a liability or disclaimer page before entering the app.

### Only unread messages announce themselves as such. A message that's aleady been read doesn't have an auditary indicator, only a visual one.
- A screen reader reads out that a message is unread. But there's no screen reader-friendly indication that a message has been read already.
- As a result, when a user tabs to a read message, they won't be able to tell if it's actually been read already or not.


### Radio Buttons not announcing total number of radio buttons
Radio buttons in a “Category” radio group after starting a “New Message” are not announcing "X of Y", where X is the current position in the group and Y is the total number of radio buttons. Currently announcing 2 of 2, 1 of 1 and so on. 
![58D84B29-4E27-44DB-84E9-BC0D02BA13CF_4_5005_c](https://github.com/department-of-veterans-affairs/va.gov-team/assets/102324990/57f82c91-3696-4978-b1fd-d18f2ae773cb)

If the screen reader isn’t not announcing the total number of radio buttons in a group, it may indicate an accessibility issue that needs to be addressed. Here are some steps to ensure that the total number of radio buttons is announced correctly:

* **Use a Fieldset and Legend**: Make sure you have a `<fieldset>` element surrounding the radio buttons with a descriptive `<legend>` to group and label them. This helps in providing context to screen readers.

* **Proper Labeling**: Each radio button should have a clear and concise label using the `<label>` element. Ensure that the labels are associated with the respective radio buttons using the `for` attribute or by wrapping the input element within the label.

* **Use `aria-describedby`**: You can use the `aria-describedby` attribute to provide additional information about the group. For example, you can include a visually hidden span with the total number of radio buttons and reference it in the `aria-describedby` attribute of the fieldset.

### Message ID being read out incorrectly 
Filter Messages

Message ID: 30012340  needs <aria label> to read out ID correctly. VO calls out “three million …” 
Message ID’s may need aria labels to be read out correctly 

### Success Alert was not called out 

"Success Alert" was not called out to screen reader user after successfully sending a message to provider. (Voiceover) -P9 

To provide a "success alert" that is read out to screen reader users after they successfully send a message to their provider, you can use ARIA live regions or ARIA alerts. Here's how to do it:


**ARIA Live Region**:
Add a hidden live region in your HTML to contain the success message.
Use the `aria-live` attribute to specify how the content should be announced. For success messages, you can use `aria-live="polite"`, which will wait for screen readers to finish their current announcements before reading the message.
Update the content of the live region with the success message dynamically when the message is successfully sent.

Example HTML:
```html
<div aria-live="polite" aria-atomic="true" class="sr-only" id="success-alert"></div>
```
Make sure that you update the content of the live region or alert element dynamically when the message is successfully sent. This ensures that screen reader users receive the success message as soon as it's available.

## User Feedback

### Veterans' Voices: Impactful Quotes 
This section is for quotes. ⚠️ Participants should be referenced by number only, please.
In this section feel free to segment populations based on the trends we see with certain user types.

> "“Even though it is saved I don’t know where it is saved to.” - P1, on saving messages

> “I know there’s an emphasis on that, and we should be reminded of it as often as possible...We can’t hear it enough, to tell you the truth." - P3, on the Crisis Line message

> "Oh, so it doesn’t automatically save. If it has a button telling me to save, then … it’s not automatically saved." - P3, on saving draft emails

> “This seems redundant. Category and subject could be seen as the same thing. I’m going to put the same thing (in the subject line).” - P3, on the "Category" and "subjects" inputs

> “When I go back to a message, normally it would say a file was attached and list the file name...It should tell you right there.” - P3, on reviewing a message for attachments

> "Auto save and save are two different things and it might be somewhat confusing, especially based on the sequential order it is occurring, where I would almost have to say I prefer the save draft, delete draft and send in that order, otherwise you go to send and you think that is it. Send is usually the last option and once you made it there that is it." - P9, on saving messages and the location of the 'Send' button

> "Telling you right off the bat that it’s unread, that’s what I’m used to. It’s ideal if it tells you if the message is read or unread." - P3, on read and unread messages

> "My assumption after reading “starting a new message” would take me to a text field to actually start a new message.  however it took me to a disclaimer page. I would warn users that you are going to a disclaimer page before being able to compose a new message. ” - P9

> "Message thread would be helpful as a data table instead of a list, I prefer linear and vertical navigation" - P9

> "Disclaimer page with crisis information prior to is redundant because there is a notification accordion containing the same exact information" - P9

> Likes “your care team might take up to x business days”  message because he knows most people get frustrated when users do not know when pcp may respond. - P9

> 
## a11y Recommendations
- Whether a message has attachments needs to be read aloud by assistive technology. The paper clip icon should come **before** the message title, not after, and have some accessible text that can be read aloud (think "Has attachment"). 
- Users should be made aware right away that their messages will be auto-saved, and where those messages are saved to. And you may want to remove the "save draft" button entirely to reduce confusion? 
- It can take a long time for screen reader users to have page content read to them, so redundant/repeated text can be cumbersome to get through. When it comes to the liability and crisis line messages:
  - You might want to consider removing one instance of them. **Experience standards:** `Category 03` `Issue 04` ("A user flow doesn't have repetitive or redundant steps.")
  - Wherever they end up, it should be clear to the user that by clicking on this link, you'll be taken to a disclaimer/liability/crisis line message first. **Experience standards:** `Category 09` `Issue 03` ("Button and link language is descriptive and/or their purpose is clear.")
- Have some sort of indicator that a screen reader will pick up that a message is unread. This could be screen reader-only text, for the sake of the visual design. **Experience standards:** `Category 11` `Issue 11` ("Pages don't require sensory characteristics to be understood or operable.")


### If we don't have enough data or research to know...
Point out the gaps

## Next Steps
A list of actionable findings, based on time-sensitive, priority needs.

### Complete Now (Recommendation)
_While CAIA cannot require you to complete any updates to your product, we can provide your team with recommendations to help faciliate a smooth process through the Collaboration Cycle._

- Whether a message has attachments needs to be read aloud by assistive technology. The paper clip icon should come **before** the message title, not after, and have some accessible text that can be read aloud (think "Has attachment").
    - **Experience standards:** [Category Number 11, Issue Number 11](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/VA.gov-experience-standards.1683980311.html): Pages don't require sensory characteristics to be understood or operable.
    - **Severity**: `Launch Blocking`
    - **Defect**: a11y-defect-1
    - **Impacts**: A11y and Content
    - **Appears on**: Experience Standards, A11y, Common Accessibility Issues and WCAG
    - **WCAG**: [WCAG SC 1.3.3_A](https://www.w3.org/WAI/WCAG21/quickref/#sensory-characteristics)

- Users should be made aware right away that their messages will be auto-saved, and where those messages are saved to. And you may want to remove the "save draft" button entirely to reduce confusion? 
    - **Experience standards:** [Category Number 03, Issue Number 02](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/VA.gov-experience-standards.1683980311.html): A user flow provides content or navigation to help users understand where to go or what to do next.
    - **Defect** `Launch Blocking`
    - **Impact**:Content and IA
    - **Appears on**: Experience Standards
    - **WCAG**: NA

- It can take a long time for screen reader users to have page content read to them, so redundant/repeated text can be cumbersome to get through. When it comes to the liability and crisis line messages:
  - You might want to consider removing one instance of them.
      - **Experience standards:** `Category 03` `Issue 04`: A user flow doesn't have repetitive or redundant steps.
      - **Defect**:
      - **Impact**:
      - **Appears on**:
      - **WCAG**:

 
  - 
-  Radio buttons in a “Category” radio group after starting a “New Message” are not announcing "X of Y", where X is the current position in the group and Y is the total number of radio buttons. Currently announcing 2 of 2, 1 of 1 and so on. 
### Complete Soon
- Success Alert was not called out 

"Success Alert" was not called out to screen reader user after successfully sending a message to provider.
### Complete Later
 - It can take a long time for screen reader users to have page content read to them, so redundant/repeated text can be cumbersome to get through. When it comes to the liability and crisis line messages:
  - Wherever they end up, it should be clear to the user that by clicking on this link, you'll be taken to a disclaimer/liability/crisis line message first.
      - **Experience standards:** `Category 08` `Issue 03`: Button and link language is descriptive and/or their purpose is clear.
      - **Defect**: `Depends`
      - **Impact**: A11y, Content and IA
      - **Appears on**: Experience Standards
      - **WCAG**: [WCAG SC 2.4.4_A](https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context)

- Adding <aria-label>(s) for Message ID(s)

## Other considerations and findings 

_A finding that may not be relevant to the study, but worth talking about. Include images as needed._

### List of caught defects and issues

#### Relevant to this team
- [ ] Description of issue and how to replicate

#### Belongs to other teams
- [ ] Description of issue and how to replicate

#### Design system
- [ ] Description of issue and how to replicate

## References
<a id="1">[1]</a> 
Citations if needed 
