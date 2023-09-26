# About this Research Study
- **Study Name:** Project Name Core Identity Team, Terms of Use Research (Figma prototype)
- **Study Dates:** August 2023
- **Study Research Lead:** Clayton Zook/Core Identity Team
- **Slack Channel:**  #identity-ux channel
- **A11y Collaborators:** Sara, Jamie and Kate, SK
- **Related Docs:**
    - Product outline: [Product info](https://github.com/department-of-veterans-affairs/va.gov-team/tree/f180bf496a0b9b06b71770f20a4091a3b9bc7b04/products/identity/terms%20and%20conditions)
    - User flows: [User flow in Figma](https://www.figma.com/proto/Fhw9P7r6pyaCGXRmolruoQ/Terms-of-Use?page-id=0%3A1&node-%5B=&node-id=58-976&starting-point-node-id=1%3A493&show-proto-sidebar=1)
    - Prototype or mockups: [User flow in Figma](https://www.figma.com/proto/Fhw9P7r6pyaCGXRmolruoQ/Terms-of-Use?page-id=0%3A1&node-%5B=&node-id=58-976&starting-point-node-id=1%3A493&show-proto-sidebar=1)
    - Research plan: [Research Folder in GH](https://github.com/department-of-veterans-affairs/va.gov-team/tree/91db02e7caf27417583e829894628cb7b3753e50/products/identity/Research/2023-07%20Terms%20of%20Use)
   - [Research conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2023-07%20Terms%20of%20Use/2023-08%20Terms%20of%20Use%20conversation%20guide.md) 
- **Ticket Links:** EPIC and/or CAIA research assistance request ticket:
    - Research Request [GitHub Ticket #62359](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62359)
    - [Epic] CAIA Intake: Core Identity Team [GitHub Ticket #62354](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62354)


# Accessibility Tools Utilized
MAGic Screen Magnification Software ([product website](https://support.freedomscientific.com/Products/LowVision/MAGic)), zoomtext, text-to-speech

## Coverage
This research fulfilled X% (y/z) of its original request. Given the **limited/abundant** amount and **variety/lack of variety** of types of screen readers, a conclusive behavioral patterns **can/cannot** be determined locally in this study. We **can/cannot** draw future research considerations and document caught accessibility issues.

**Original study request: ##**

> xx participants should use a screenreader on a desktop or mobile device

## Participants
To best serve the users of VA.gov, we will need to collect the following information during each a11y research session:
- **Skill level of user:** Novice, Intermediate or Advanced
- **Operating System:** Mac or Windows
- **Assistive Technology being used:** Jaws, NVDA, ZoomText, Dragon, etc.
- **Internet Browser:** Chrome, Firefox, etc.
- **Note**: In the table below, the first row is an example of P54

| **Participant Number** | Date of Research | **Assistive Tech** | **Skill Level** | **Operating System** | **Browser** |**Device Type** |
|------------------------|------------------|--------------------|-----------------|----------------------|-------------|-------------|
| _P12_                   | 8/18/2023         | Originally recruited as an AT user, but didn't have access to AT on his desktop. This participant was partially sighted and completed the test w/o AT on his desktop, but verbalized feedback related to AT.             | Advanced 5/5      |  Windows    | Chrome      | Laptop (Asus) |
| _P19_                       | 8/23/2023                  | Uses MAGic magnifier + screen reader. Figma prototypes aren't compatible with MAGic, so only used magnifier for this session.                    | Intermediate to advanced 4/5                 | Windows                      |  Firefox           |   Laptop (Dell)          |
| _P23 (P15 Rescheduled)_ | 8/24/023 | User using zoomtext (Not a regular screen reader user) Participant doesn't normally use a Screen Reader but utilizes a voice to text| Advanced | Windows | Chrome | Laptop and Android                |                  |                    |                 |                      |             |         |
|                        |                  |                    |                 |                      |             |             |
|                        |                  |                    |                 |                      |             |             |
|                        |                  |                    |                 |                      |             |             |
|                        |                  |                    |                 |                      |             |             |

**Participants who successfully completed sessions: XX**
## Initial Notes
### P12
- Rarely uses AT on desktop; uses it all the time on iOS. 
- Usually selects everything on the page and lets VoiceOver read it back to him.
- Prefers iOS devices because they are "convenient while I'm on the go."
- When using MyHealtheVet on iOS, he uses a combination of pre-fill and facial recognition to access the app. "I selected that option; that's convenient for me."
- If he'd had access to AT he was comfortable with on Windows, he would've used it to read the contents of page accordions out loud. "I'd rather just hear it read to me."

### P19
- Uses a combination of screen magnification + screen reading via MAGic. He'll hover his mouse over text, and MAGic reads it out loud to him.
- Uses 5x zoom. (Our testing standard is 4x.)
- Uses a trackpad + keyboard when on laptop. When on the go, uses iOS devices.
- Often, a web site's TOU is long and not broken up into chunks, so MAGic reads the entire thing out loud, which can take "30 minutes."
- Bold and blue text stuck out.
- H3 was almost the same size as paragraph text, "too small."
- Noted that if the TOU was available in Word, he could download it and use its search features to find the information he needed.
- **Figma prototypes are not compatible with MAGic.**

### P23 
- Has full sight only in one eye, injured when he was a child
- Prefers to use the laptop because its easier and is attached to the printer
- Started using VA in 1999. in 2003 is when user started using VA for everything, weight chart, vitals etc.
- He would try to click on the changes and see what happens.
- Put changes in messages, or statement in opening screen or home screen
- Explains he really likes warning message letting you know he was signed out 

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

### Jamie's draft - feel free to integrate this into the final doc!
#### Finding 1
- Chunking out sections of the TOU into accordions is beneficial for AT users:
  - Users can choose which sections are read out loud to them, instead of the entire thing being read at once (which can take "30 minutes").
  - Users can quickly scan sections to see if the contents would interest them.

#### Finding 2
- There's not enough size differentiation between H3 and paragraph text.
  - This is important because low-vision users using screen magnification use visual differentiation between objects on a page to determine importance and hierarchy.
  - Without enough differentiation, the user might not realize something is a heading, versus regular paragraph text.
 
#### Finding 3
- Our current recruitment process makes using Figma prototypes difficult. This is because:
  - We aren't always told by Perigean which assistive technology the user is using (beyond "screen reader"), **and**
  - Figma prototypes can only be used accessibly by Mac + VoiceOver, Windows + NVDA, and Windows + JAWS.
- It would be helpful to get more specific information about the technology in use before the test.

### SK's draft P23 - P15 Rescheduled 
#### Finding 1 
- Users continuosly have struggled to share screen through zoom
  - We can possibly include instructions on how to share screen in meeting invite. (Open to discussion)
 
#### Finding 2
- User would like to recieve an email if there are updates made to ToU page
   - If email is sent a plain text version needs to be sent aas well. Some recipients may not be able to access the HTML at all but only the plain text version because of corporate firewall that strips out the HTML, ,or because of a setting in an email client
## User Feedback

### Veterans' Voices: Impactful Quotes 
This section is for quotes. ⚠️ Participants should be referenced by number only, please.
In this section feel free to segment populations based on the trends we see with certain user types.

> "I'd rather just hear it read to me." - P12, who is partially sighted, speaking about AT and accordions

> "...it takes 30 minutes. When you're reading you can skip read, but not if it's being read to you." - P19, about the length of TOUs

> "When it is stuff you have to use, you either say yes, or you can’t use any of it. If it is necessary, it doesn’t matter what the terms of use are, or you can’t use it." - P19, on accepting TOUs

> "I like that. Nice to have the option to look more in depth. Usually don't have the choice." - P19, on TOU items chunked by headings into accordions

> "Oh yes, terms of use is like 5,000 words. When you have to listen to it. It is a lot worse. It will speak it for 30 minutes. Usually you can skip read. I can’t really do that with a screen reader, because I might end up off on a different thing. Honestly, I think I trust the VA literally with my life, so most of the time I don’t even read it. I think that is most people when you have pages and pages, either spend five hours or click the accept." - P19, on the length of TOUs and trusting the VA's terms

> "I don’t read very much of it. It is just right because it is my government and it is my VA, so I don’t need to know the terms of use. It just feels good for me to do. I think most of us feel the same way." - P23, on trusting the VA and not reading the Terms of Use

> "I have been signed out. Wow! I didn’t expect that. I figured I would get at least one more chance. This makes a lot of sense." - P23, on being signed out after clicking "Decline"

> "MHV is my lifeline to the VA. I get all my meds, my messages, I can talk to my doctor. This is my first video experience. I have seen it change a lot over the years. It always gets a little bit better, a little more user friendly." - P23, on MHV and improvements at the VA 

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
