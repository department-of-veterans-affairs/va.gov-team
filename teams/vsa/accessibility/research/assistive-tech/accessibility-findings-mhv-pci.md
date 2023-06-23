# About this Research Study
- **Study Name:** MHV: Patient Check In (PCI) Conversation Guide for Unified Check-In Generative Research Usability Study
- **Study Dates:** June 12 - 20 (not 19, due to the holiday)
- **Study Research Lead:** Ben Brasso (secondary moderator: Christina Gednalske)
- **A11y Collaborators:** Angela Fowler, Sarah Koomson and Sara Smith
- **Related Docs:** Link to research plan and communication guide - or link to project's GitHub link?
  - [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/product) (general - not specific to unified check-in)
  - [User flows](https://www.sketch.com/s/0e890de3-2530-4ee0-986e-cf0314334aec)
  - CodePen prototype: [Pre-check-in start](https://codepen.io/team/va-cie/live/NWORQEe), [Check-in start](https://codepen.io/team/va-cie/live/qBJqWaV) (view in mobile size or mobile inspect mode)
  - [Mockups](https://www.sketch.com/s/0e890de3-2530-4ee0-986e-cf0314334aec/p/0EC89917-F949-4461-A7B3-32A5201FD2A2/canvas)
  - [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/2023-04%20Unified%20Check-In%20Experience%20Usability%20Study/research-plan.md)
  - [Research conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/2023-04%20Unified%20Check-In%20Experience%20Usability%20Study/conversation-guide.md)
- **Ticket Links:** EPIC and/or CAIA research assistance request ticket
   - [Epics for unified check-in](https://github.com/department-of-veterans-affairs/va.gov-team/issues/49924)
   - [CAIA A11y Research Ticket: 58566](https://app.zenhub.com/workspaces/sitewide-content-accessibility-and-ia-63a1d63232beba0011a7833f/issues/gh/department-of-veterans-affairs/va.gov-team/58566)
   - [[Recruitment Request]: 2023-05 Unified Check-In Experience Usability Study #321](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/321#event-9308399813)

# Accessibility Tools Utilized
`iOS-VO` `iPhones` `Screen Magnification`

## Coverage
This research fufilled 57% (4/7) of its original request. Given the **limited** amount and **variety** of types of screen readers, a conclusive behavioral patterns **may not** be determined locally in this study. We **can**; however, draw future research considerations and document caught accessibility issues.

**Original study request:** 18 (12 completed sessions); 4 used assistive tech (33% of the study used assistive tech). See table.

> 7 participants should use a screenreader on a desktop or mobile device.

## Participants
To best serve the users of VA.gov, we will need to collect the following information during each a11y research session:
- **Skill level of user:** Novice, Intermediate or Advanced
- **Operating System:** Mac or Windows
- **Assistive Technology being used:** Jaws, NVDA, Zoomtext, Dragon, etc.
- **Internet Browser:** Chrome, Firefox, etc.
- **Note**:**Participants who did not complete the session:**
    - **P1** (no show), **P8** (canceled),  P15 (no AT used); and **P10** (no show).
    - [4 out of 7](https://app.zenhub.com/workspaces/sitewide-content-accessibility-and-ia-63a1d63232beba0011a7833f/issues/gh/department-of-veterans-affairs/va.gov-team/58566) participated (57% of those recruited for AT testing, actually participated).
    - **P15** was an AT user (screen magnification) but did not use it on the call. Therefore, P15's data should be analyzed with the overall data, not this segment.

| **Participant Number** | Date of Research | **Assistive Tech** | **Skill Level** | **Operating System** | **Browser** |**Device Type** |
|------------------------|------------------|--------------------|-----------------|----------------------|-------------|-------------|
| _P2_                   | 6/12/2023        | _VoiceOver_        | _Advanced_      | _iOS_                | _Safari_    | _Mobile_      |
| _P17_                  | 6/20/2023        | _VoiceOver_ (signed up with screen magnification)        | _Advanced_      | _iOS_                | _Safari_    | _Mobile_      |
| _P11_                  | 6/15/2023        | _Screen Magnification_        | _Expert_      | _iOS_                | _Safari_    | _Mobile_      |
| _P12_                  | 6/15/2023        | _VoiceOver_        | _Advanced_      | _iOS_                | _Safari_    | _Mobile_      |

 
**Participants who successfully completed sessions: 4**

- [3 iOS VoiceOver users (screen reader) and 1 Screen Magnification](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/2023-04%20Unified%20Check-In%20Experience%20Usability%20Study/transcripts)

## 📝Notes Prior to Synthesizing to Findings

### Text Content
#### Text Reply Options: Y1, N1 and D1
- P2: Confusing to the participant, who was not expecting to have a numerical number there.
- P2: It would add two extra steps for the VoiceOver user.

#### Text Content
- P17: Missing Time Zone for Appointment Texts:
  - Text 1: Your VA appointment is on FEB 2 at 08:00.
  - Text 2: Your appointment for FEB 2 at 08:00 is confirmed.

### VoiceOver Not Reading Content
#### Review your information now
- P17: Does not read out the green arrow in the CTA link for "Review your information now."
  
#### Required Field: Your last name
- P17: The participant's screen reader did not read out the *Required nature of the question, as illustrated visually with (*Required) in red.

#### Details Page
- P17: There was no feedback on the "next button" on the details page.

#### "Is this your emergency contact?
- P17: " ... "I touched the address box and it read that out, but when I just went to Go instead of swiping instead of directly to the yes box, it won’t let me do it."

#### Review upcoming appointments
- P17: “It doesn’t say that is a link, but I will tap onto it.”

### DOB Field
- P2: Participant prefers a date picker to avoid jumping out of the form fields.
- P2: Participant said they did not know initially if it was numerical or text, until clicking on it, but prefers a date picker for VoiceOver.

### Duplicative Links: Details vs. Confirm your appointment text
- P2: Confusing multiple locations of the links.
- P2: “Review your information” shows in the card view AND in the upcoming appointments section below it, which was confusing the user, having the duplicative information.
- P2: The “details” link was also unclear to the user, since there were multiple.

### Link Destination Confusion
- P2: User would like to be taken to where he expects to be taken, based on the link text.
    - “That would confuse me. If they want me to make sure my information is correct, it is confusing because it doesn’t make sense to me."    
       - If I click a link to “review my information” I would expect it to take me to where I could review my information. The extra stuff, especially with a screen reader is a pain. You are forcing me to scroll through a bunch of stuff that isn’t related.”
       - “This is like a calendar of my upcoming appointments, and that is not what the link said it was going to do.”
       - “I would change the whole page. After I type in my name and birthdate. I should see the information I am supposed to review. All these appointments have nothing to do with that. If you have a link “view upcoming appointments” that would be fine. But now, to drop me on this page, when it said what it was going to do, that is confusing. “

### Too much information for the participant. One-item/topic per page preferred.
- P2: Having the upcoming appointment detail on the page is not what is expected by the user. Would expect a link to that information.
    - “Text should send me to the appointment I am saying Y1 to. Right there should be that appointment and the review your information. Why have all this other stuff on there? That isn’t what the text was about.”
    - “I personally think it is too much.”  “I came here to do a specific task. I really shouldn’t have all of these options. Maybe I would spend an hour when I should have only spent a few minutes.”
- P17: “I think maybe this process is maybe a step or two longer than what it needs to be? Now if there was just a one page, straightforward way, you could quickly go to the tool and check in for your present information, then come back later.”
  
### Missing Signifier
#### Appointment Confirmation Not Confirmed
- P17: The tool does not confirm that the appointment is confirmed.
   - Organization is not clear to the user. 
   - The title appointment is fine, but then it goes to “what to do next” and then “confirm your appointment” that is like um, I don’t know that is definitely not clear. Maybe instead of “what to do next” maybe something.
   - Just says “details” doesn’t have date or information related to it. 


### Upcoming Appointments View
#### Filter to Shorten View
- P2: Participant would like a filter, because you may have a whole year’s worth of information to sort through.
- P2: “I don’t particularly like this page. I would like to click on a month and pull up the information for the month. As a screen reader I am going to read top to bottom. Going down to find appointments for March, I have ways to get around it but others may not. I have to go through all of February to get to March. If I could choose just the month it would be better than me. … If it was a whole year’s worth of appointments, that is a lot of swiping.”
- **Development question:** If we can’t do filters now in this iteration could we do anchor links to the months or have one month per page and link to that page?
#### Date and Details
- P17: "Appointment number four, or was that the date?" When referring to the number 4 (date) indicator on the appointment page. "At first I thought they represented the actual number of appointments. Then, scanning the number that I just got to is actually the day of the month. I can say that was a little confusing, but not anything I couldn't figure out."
- P17: "... Needing to know the floors or the room number. Some buildings have to go to the information desk, for floor and room number to see where it was at."

### Processes: Confirmation and Check-In
- P17: "The separation of the two was quite obvious because the first one with the text message is text message based, when you go on this tab, it takes you to an actual website, or platform per say. That is the major difference. You know I can say personally myself, you know, I would check in this second way. I believe after maybe 3 or 4 attempts at it. Especially the part when I know my information is current, then I don’t have to go through that process and it would be just as easy going to a kiosk, being low vision. Compared to going to a check-in kiosk, with no voice output and using this tool, you know for the blind and no vision veterans this would definitely be easier."
- P17: Don’t say check in unless you check in. We were giving an or option, and instead say confirm. Instead say confirm and not use check in if that is not available. 

### Positive Feedback
- P17:**Review your upcoming appointments**: “Oh, WOW, Ok! That was very clear.” Adding the "You checked in at 7:55 a.m." under the appointment details link was helpful.

## :warning: Prototype Related Issues Encountered
### Review your information
- Double-Tap on it, but it doesn’t say it is a link or button to click on (prototype issue).
- Sometimes it reads like text and you have to just try it and see what happens. I know other people who don’t know how to do that.
### Third accordion: “What if I have questions about my appointment?"
- The participant said it was reading as a heading and button
### “Confirm your appointment”
- Potential prototype issue with link, text or button for “confirm your appointment.”
### Details link for Feb 2
- “details for in-person” appointment - ARIA label wrong.
### Current Contact Information
- When tabbing through [this page in the prototype](https://codepen.io/team/va-cie/live/dygpxrz) it skips from the language to the “yes” button.
    - Participant was not clear on what he was clicking “yes” to because the heading was skipped. 
### Your contact information is up to date.
- It did not read “H1: Your contact information is up to date.”

## Key Findings
Add screenshots, images and videos here.

### Finding 1
- Feel free to include bullets
- They can help add some more info

### Finding 2
- Feel free to include bullets
- They can help add some more info

### Finding 3
- Feel free to include bullets
- They can help add some more info


## User Feedback

### Veterans' Voices: Impactful Quotes 
This section is for quotes. ⚠️ Participants should be referenced by number only, please.
In this section feel free to segment populations based on the trends we see with certain user types.

> "Quote goes here." - P54

## a11y Recommendations
Overview summary goes here. 

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
