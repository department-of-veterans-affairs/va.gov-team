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


### Finding 3
- Feel free to include bullets
- They can help add some more info


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

## a11y Recommendations
- Whether a message has attachments needs to be read aloud by assistive technology. The paper clip icon should come **before** the message title, not after, and have some accessible text that can be read aloud (think "Has attachment"). **Experience standards:** `Category 11` `Issue 11` ("Pages don't require sensory characteristics to be understood or operable.")
- Users should be made aware right away that their messages will be auto-saved, and where those messages are saved to. And you may want to remove the "save draft" button entirely to reduce confusion? **Experience standards:** `Category 03` `Issue 02` ("A user flow provides content or navigation to help users understand where to go or what to do next.)
- It can take a long time for screen reader users to have page content read to them, so redundant/repeated text can be cumbersome to get through. When it comes to the liability and crisis line messages:
  - You might want to consider removing one instance of them. **Experience standards:** `Category 03` `Issue 04` ("A user flow doesn't have repetitive or redundant steps.")
  - Wherever they end up, it should be clear to the user that by clicking on this link, you'll be taken to a disclaimer/liability/crisis line message first. **Experience standards:** `Category 09` `Issue 03` ("Button and link language is descriptive and/or their purpose is clear.")

### If we don't have enough data or research to know...
Point out the gaps

## Next Steps
A list of actionable findings, based on time-sensitive, priority needs. Images, videos, links, screenshots and notes provided as deemed approprite. 

### Complete Now
- x
### Complete Soon
- x
### Complete Later
- x

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
