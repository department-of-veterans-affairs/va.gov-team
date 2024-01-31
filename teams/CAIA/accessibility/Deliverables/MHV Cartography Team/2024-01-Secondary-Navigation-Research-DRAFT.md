# About this Research Study
- **Study Name:** MHV Cartography Team - Secondary Navigation
- **Study Dates:** January 2024
- **Study Research Lead:** Florence McCafferty
- **Related Docs:** [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secondary-nav/Comparison-study/research-plan.md), [conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secondary-nav/Comparison-study/conversation-guide.md)
- **Ticket Links:** [Research ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/73996)

# Accessibility Tools Utilized
`iOS-VO`, `MacOS-VO`, ...

## Coverage
This research fufilled X% (y/z) of its original request. Given the **limited/abundant** amount and **variety/lack of variety** of types of screen readers, a conclusive behavioral patterns **can/cannot** be determined locally in this study. We **can/cannot** draw future research considerations and document caught accessibility issues.

**Original study request: ##**

> xx participants should use a screenreader on a desktop or mobile device

## Participants
To best serve the users of VA.gov, we will need to collect the following information during each a11y research session:
- **Skill level of user:** Novice, Intermediate or Advanced
- **Operating System:** Mac or Windows
- **Assistive Technology being used:** Jaws, NVDA, Zoomtext, Dragon, etc.
- **Internet Browser:** Chrome, Firefox, etc.
- **Note**: In the table below, the first row is an example for P54

| **Participant Number** | Date of Research | **Assistive Tech** | **Skill Level** | **Operating System** | **Browser** |**Device Type** |
|------------------------|------------------|--------------------|-----------------|----------------------|-------------|-------------|
| _P54 (example)_                   | 5/8/2023         | _JAWS_             | _Advanced_      | _Windows_            | _Chrome_    | _Mobile_      |
|P10                        |1/29/24                  |VoiceOver                    |Advanced                 |iOS                      |Safari             |iPhone             |
|P11                        |1/29/24                  |VoiceOver                    |Beginner                 |MacOS                      |Chrome             |Macbook             |
|P9                        |1/30/24                  |n/a                    |n/a                 |Android                      |Chrome             |Samsung Galaxy             |
|                        |                  |                    |                 |                      |             |             |
|                        |                  |                    |                 |                      |             |             |
|                        |                  |                    |                 |                      |             |             |

**Participants who successfully completed sessions: XX**

**Examples below:**
- [1 desktop JAWS user (screen reader)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/2023-logged-in-user-interviews/session-notes/p2.md)
- [1 iOS VoiceOver user (screen reader)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/2023-logged-in-user-interviews/session-notes/p15.md)
- [1 desktop zoom text reader user (magnification, screen reader)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/2023-logged-in-user-interviews/session-notes/p1.md)

## Key Findings
Add screenshots, images and videos here.

### Finding 1: Prototype B's non-collapsed menu options were easier to navigate
- Mobile user felt that having the menu options open by default (Prototype B), rather than behind a dropdown/hidden menu (Prototype A), was easier for him to use.

> “You have to click it to find out what’s in the menu. With icons, you don’t have to click, you can just go to the icon if you know where the icon is.” - P10

### Finding 2: Prototype B's lack of a "Home" option was confusing
- Desktop user was able to figure out that "MyHealtheVet" would take them to the home page, but only because a) of its location and b) her familiarity with the app.
- She was able to navigate to Prototype A's "Home" much more quickly.

> "When I landed on the title as MyHealtheVet, I wondered if it was the same as Home. I assumed it was because it’s in the same spot...I’m in MyHealtheVet so why would I click on MyHealtheVet? Did I leave [the app]?" - P11

### Finding 3: Locating medical supplies order form - and any items that aren't in the top nav - was confusing
- Users didn't know what options were available to them if they weren't listed in the top navigation. P11 assumed that there would be more on the Home page, but only because of her familiarity with the app.

> "Was frustrating that Payments wasn’t one of those [navigation] choices. I’d expect it up here, or to be grouped into a dropdown menu if possible. Because the [four nav items] seemed like my only choices. There’s no place for “Other” up there." - P11

- P10 expected this to be available to him in the top navigation. He went through the navigation items and couldn't find it there; he wasn't able to find it until the facilitator directed him to the Home page.

> "I didn’t know there was a section for medical supplies." - P10

- P11 assumed it would be under "Meds," and wasn't sure where to find it otherwise:

> "I’m hoping and praying it would be under ‘Meds’! Because I think that would make sense, even though it’s not a medication, it’s a medical supply." _Where else would you look for it?_ "That's a good question...if I didn’t know and it was afterhours, when I couldn’t call VA to ask, I would probably send a secure message to my primary care doctor." - P11

 
### Finding 4: Entering MyHealtheVet directly into the "X-ray results" secure message was disorienting, but welcome
- P10 assumed that "X-ray results" was the home page, and didn't realize that it wasn't for a bit.

> "A lot of times, when you sign in to something, even VA.gov, it takes you to [the] actual home page. That’s why I said home page, even though this prototype, now that you mention it, might not be the home page." - P10

- Users liked this! They thought it was a welcome change that would save them steps.
> "So where it takes you to after sign in isn’t the home page? And ‘home - dashboard’ is the official ‘home page’? I like it!" - P10
> "If [medical records] really comes up this way, this would be amazing!" - P11

### Finding 5: Screen reader pronounciations lead to hesitation
- In Prototype B, P10's screen reader pronounced "Appts" as "apps," which he needed us to clarify.

> "I take it that’s short for appointments? It sounded like the screen reader was saying ‘apps’."

- In both prototypes, P11's screen reader didn't pronounce "MyHealtheVet" correctly. P11 noted this and wondered if it could be corrected.


## a11y Recommendations

### Use an expanded menu on mobile, and add additional options
- Whether you're using icons or not, users had an easier time accessing the MHV nav bar when the links were expanded (as in Prototype B) rather than hidden by default (as in Prototype A).
- Consider adding other options, like applying for medical supplies, to the nav bar. Since there are design constraints, perhaps these could go under a "More" or "Other" menu. Yes, they'd need to be hidden by default, but at least they'd be accessible without having to go to the home page.
- Hypothesis: This will make it easier for AT users to use MHVs navigation and find what they need, without needing to go to the home page (or _know_ that they need to go to the home page) to access more options.

### Prototype B - Replace the accessible name of "Apps" with "Appointments"
- You can do this in one of two ways:
   1. Change the visible text label from "Appts" to "Appointments"
   2. Add `aria-label="Appointments"` to that navigation link. The `aria-label` will become the accessible name of the link, and assitive tech users will hear "Appointments" read aloud. (_Note:_ if this page is ever translated, you'll need to manually change the aria-label as well.)
- Hypothesis: This will clear up confusion around what "appts" means, since AT users will hear the full word "Appointments."

### "X-ray results" / Individual message - change the heading structure
- Currently, the X-ray results individual message has "X-ray results" as the H1.
- Instead, you can structure the page as follows:
```
<h1>Message</h1>
<h2>X-Ray Results</h2>
```
- Hypothesis: this will clarify that the user is on an individual message with a title of "X-ray results."
- Hypothesis: this may also clarify that the user is **not** on the MHV home page, which will better orient them as they enter the site.

## Other considerations and findings 

- Finding results from the Medical Records page, and figuring out where to make an appointment on the Appointments page, went very well!
- Users loved getting to the page they needed right away, without having to navigate through the website. They also loved that their latest medical tests showed up on top of the list.
- Overall, users found it more accessible than what they were used to, and easy to use. :)
- It's generally not recommended to "hack" a screen reader's pronunciation of a word (like "MyHealtheVet"). Users ususally get used to the 'fun' way that brand names are mispronounced, and changing it could be confusing. `if another SR users calls it out, change this`
